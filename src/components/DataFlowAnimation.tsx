import { useEffect, useRef } from 'react';

const DataFlowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dataPoints: any[] = [];
    const connections: any[] = [];

    class DataPoint {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      pulse: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.8)`;
        this.pulse = 0;
      }

      update() {
        this.y -= this.speed;
        this.pulse += 0.02;
        if (this.y < -10) {
          this.y = canvas.height + 10;
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size + Math.sin(this.pulse) * 2, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    // Create data points
    for (let i = 0; i < 50; i++) {
      dataPoints.push(new DataPoint());
    }

    function animate() {
      ctx.fillStyle = 'rgba(26, 54, 93, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dataPoints.forEach(point => {
        point.update();
        point.draw();
      });

      // Draw connections
      dataPoints.forEach(point1 => {
        dataPoints.forEach(point2 => {
          const distance = Math.hypot(point1.x - point2.x, point1.y - point2.y);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default DataFlowAnimation; 