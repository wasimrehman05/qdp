import { useEffect, useRef } from 'react';

const AdvancedAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];
    let mousePosition = { x: 0, y: 0 };
    let hue = 210; // Start with blue hue

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      originalX: number;
      originalY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = 0;
        this.speedY = 0;
        this.density = (Math.random() * 30) + 1;
        this.color = `hsl(${hue}, 70%, 50%)`;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }

      update() {
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.originalX) {
            const dx = this.x - this.originalX;
            this.x -= dx/10;
          }
          if (this.y !== this.originalY) {
            const dy = this.y - this.originalY;
            this.y -= dy/10;
          }
        }
      }
    }

    class Connection {
      from: Particle;
      to: Particle;
      opacity: number;

      constructor(from: Particle, to: Particle) {
        this.from = from;
        this.to = to;
        this.opacity = 0.1;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.from.x - this.to.x, 2) + 
          Math.pow(this.from.y - this.to.y, 2)
        );
        if (distance < 150) {
          this.opacity = 1 - (distance / 150);
          ctx!.beginPath();
          ctx!.strokeStyle = `hsla(${hue}, 70%, 50%, ${this.opacity})`;
          ctx!.lineWidth = 0.5;
          ctx!.moveTo(this.from.x, this.from.y);
          ctx!.lineTo(this.to.x, this.to.y);
          ctx!.stroke();
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      connections = [];

      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150);
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }

      // Create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]));
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 54, 93, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      connections.forEach(connection => connection.draw());
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      hue = (hue + 0.1) % 360; // Slowly change colors
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.x;
      mousePosition.y = event.y;
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AdvancedAnimation; 