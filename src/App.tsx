import React, { useEffect } from "react";
import {
	BarChart3,
	Activity,
	LineChart,
	Users,
	TrendingUp,
	Shield,
	Mail,
	Building2,
	ShoppingBag,
	Store,
	PieChart,
	ChevronDown,
	Quote,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import DataFlowAnimation from './components/DataFlowAnimation';
import AdvancedAnimation from './components/AdvancedAnimation';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			easing: "ease-out-cubic",
		});
	}, []);

	const scrollToServices = () => {
		const servicesSection = document.getElementById("services");
		servicesSection?.scrollIntoView({ behavior: "smooth" });
	};

	const handleEmailClick = () => {
		window.location.href = "mailto:chanduittamsetty@quickdatapoint.com";
	};
	const handleBookClick = () => {
		window.location.href = "https://calendly.com/chanduittamsetty-quickdatapoint/30min?back=1";
	};

	return (
		<div className="min-h-screen bg-white overflow-hidden">
			{/* Hero Section */}
			<header className="min-h-screen bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] text-white relative overflow-hidden">
				<AdvancedAnimation />
				
				{/* Animated Background Elements */}
				<div className="absolute inset-20" style={{ margin: "13% auto" }}>
					{/* Gradient Circles */}
					<div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-40 right-40 w-72 h-72 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
					<div className="absolute top-60 right-60 w-48 h-48 bg-blue-200/10 rounded-full blur-xl animate-pulse delay-2000"></div>

					{/* Floating Data Points Animation */}
					<div className="absolute top-10 right-10 animate-float-slow transform-gpu">
						<div className="w-32 h-32 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
							<BarChart3 className="w-8 h-8 text-blue-300 mb-2" />
							<div className="h-2 bg-blue-300/20 rounded w-16 mb-2"></div>
							<div className="h-2 bg-blue-300/20 rounded w-12"></div>
						</div>
					</div>
					<div className="absolute top-40 right-40 animate-float-slower transform-gpu">
						<div className="w-40 h-40 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
							<LineChart className="w-8 h-8 text-blue-300 mb-2" />
							<div className="h-2 bg-blue-300/20 rounded w-20 mb-2"></div>
							<div className="h-2 bg-blue-300/20 rounded w-16"></div>
						</div>
					</div>
					
					{/* Add new floating elements */}
					<div className="absolute top-20 left-20 animate-float-medium transform-gpu">
						<div className="w-36 h-36 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 transform rotate-45 hover:rotate-0 transition-transform duration-500">
							<Activity className="w-8 h-8 text-blue-300 mb-2" />
							<div className="h-2 bg-blue-300/20 rounded w-18 mb-2"></div>
							<div className="h-2 bg-blue-300/20 rounded w-14"></div>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-6 py-24 relative z-10">
					<div className="max-w-3xl" data-aos="fade-right">
						<h1 className="text-6xl font-medium mb-8 leading-tight">
							Transform Your <span className="text-blue-300">Business Decisions</span> with Real-Time Data Intelligence
						</h1>
						<p className="text-xl mb-8 text-white/90 leading-relaxed">
							Harness the power of advanced data scraping technology to gain competitive insights across multiple platforms. 
							From e-commerce to social media, make informed decisions with real-time market intelligence.
						</p>
						<ul className="mb-12 space-y-4">
							{[
								"Real-time price and competitor monitoring",
								"Location-based market penetration analysis",
								"Cross-platform data aggregation",
								"Custom analytics dashboard integration"
							].map((point, index) => (
								<li key={index} className="flex items-center text-lg text-white/80">
									<svg className="w-6 h-6 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									{point}
								</li>
							))}
						</ul>
						<div className="flex space-x-4">
							<Link
								to="/solutions"
								className="bg-white text-[#1a365d] px-8 py-4 rounded-lg font-medium hover:bg-blue-300 hover:text-white transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Explore Solutions
							</Link>
							<button
								onClick={handleBookClick}
								className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#1a365d] transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Schedule Demo
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Use Cases Section */}
			<section id="use-cases" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2
						className="text-3xl font-medium text-center mb-1 text-[#1a365d]"
						data-aos="fade-up"
					>
						Data Scraping Use Cases
					</h2>
					<p className="text-m font-medium text-center mb-16 text-[#1a365d]">
						Data You Rely On, Coverage You Deserve
					</p>
					<div className="grid md:grid-cols-3 gap-12">
						{[
							{
								icon: PieChart,
								title: "Price Intelligence",
								desc: "Track competitor pricing across regions, analyze pricing strategies, and optimize your pricing for maximum market impact.",
							},
							{
								icon: Users,
								title: "Regional Market Analysis",
								desc: "Understand competitor presence and performance across different regions to identify expansion opportunities.",
							},
							{
								icon: ShoppingBag,
								title: "E-commerce Monitoring",
								desc: "Track product availability, pricing, and delivery fees across major e-commerce platforms to optimize your competitive strategy.",
							},
							{
								icon: Building2,
								title: "Healthcare Analytics",
								desc: "Monitor medicine prices, availability, and delivery options across online pharmacies to make informed healthcare decisions.",
							},
							{
								icon: LineChart,
								title: "Social Media Intelligence",
								desc: "Analyze social media engagement, follower growth, and content performance to enhance your digital presence.",
							},
							{
								icon: TrendingUp,
								title: "Logistics Optimization",
								desc: "Compare shipping rates, delivery times, and service coverage across logistics providers to streamline your operations.",
							},
						].map((service, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#2d4a8a]/20 transform hover:-translate-y-1"
								data-aos="fade-up"
							>
								<div className="bg-[#1a365d]/5 p-3 rounded-lg w-fit mb-6">
									<service.icon className="w-12 h-12 text-[#1a365d]" />
								</div>
								<h3 className="text-xl font-medium mb-4 text-[#1a365d]">
									{service.title}
								</h3>
								<p className="text-gray-600">{service.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Dashboard Preview Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<h2
						className="text-3xl font-medium text-center mb-16 text-[#1a365d]"
						data-aos="fade-up"
					>
						Powerful Analytics Dashboard
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								img: "/dashboard-price-tracking.png",
								fallbackImg: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2000",
								title: "Competitor Price Tracking",
								desc: "Monitor price changes and trends across your competition in real-time.",
							},
							{
								img: "/location-coverage.png",
								fallbackImg: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000",
								title: "Location-based Competitor Coverage",
								desc: "Track competitor presence, service availability, and market penetration across different regions and cities.",
							},
						].map((dashboard, index) => (
							<div
								key={index}
								className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
								data-aos={index === 0 ? "fade-right" : "fade-left"}
							>
								<div className="relative h-[300px] overflow-hidden">
									<img
										src={dashboard.img}
										alt={dashboard.title}
										className="w-full h-full object-cover"
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.src = dashboard.fallbackImg;
										}}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
								</div>
								<div className="p-6 bg-white">
									<h3 className="text-xl font-medium mb-2 text-[#1a365d]">
										{dashboard.title}
									</h3>
									<p className="text-gray-600">{dashboard.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Stories Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2
						className="text-3xl font-medium text-center mb-16 text-[#1a365d]"
						data-aos="fade-up"
					>
						Driving Business Growth
					</h2>
					<div className="text-center mb-12" data-aos="fade-up">
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Currently empowering 4+ leading brands with
							competitive intelligence to optimize their market
							strategies and drive growth.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-12">
						{[
							{
								icon: Building2,
								title: "Market Leaders",
								desc: "Helping established brands maintain their competitive edge through data-driven insights.",
							},
							{
								icon: Store,
								title: "Regional Champions",
								desc: "Supporting regional businesses in expanding their market presence with competitive analysis.",
							},
							{
								icon: ShoppingBag,
								title: "Growth Innovators",
								desc: "Enabling emerging brands to compete effectively with established market players.",
							},
						].map((story, index) => (
							<div
								key={index}
								className="text-center transform transition-all duration-300 hover:-translate-y-2"
								data-aos="fade-up"
								data-aos-delay={index * 100}
							>
								<story.icon className="w-16 h-16 text-[#2d4a8a] mx-auto mb-6" />
								<h3 className="text-2xl font-medium mb-4 text-[#1a365d]">
									{story.title}
								</h3>
								<p className="text-gray-600">{story.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<Stats />

			{/* Technology & Capabilities */}
			<TechnologyAndCapabilities />

			{/* Benefits Section */}
			<section id="benefits" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2
						className="text-3xl font-medium text-center mb-16 text-[#1a365d]"
						data-aos="fade-up"
					>
						Benefits of Our Platform
					</h2>
					<div className="grid md:grid-cols-2 gap-12">
						{[
							{
								icon: Shield,
								title: "Accurate & Reliable Data",
								desc: "Our advanced data collection systems ensure you receive precise and up-to-date competitor information you can trust.",
							},
							{
								icon: TrendingUp,
								title: "Custom Looker Studio Reports",
								desc: "Access beautifully designed, interactive dashboards that make complex competitor data easy to understand and act upon.",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2"
								data-aos={index === 0 ? "fade-right" : "fade-left"}
							>
								<feature.icon className="w-8 h-8 text-[#2d4a8a] flex-shrink-0" />
								<div>
									<h3 className="text-xl font-medium mb-2 text-[#1a365d]">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Client Reviews Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<h2
						className="text-3xl font-medium text-center mb-16 text-[#1a365d]"
						data-aos="fade-up"
					>
						What Our Clients Say
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								quote: "With Quick Data Point's competitor pricing insights, we adjusted our pricing strategy to stay competitive in the Malaysian chocolate market. This helped us attract more customers and boost our sales.",
								company:
									"-Vice President, A Premium Chocolate Brand in Malaysia",
							},
							{
								quote: "Quick Data Point's insights on competitor pricing and market trends helped us manage our product availability across different regions in India. This has improved our distribution strategy.",
								company:
									"–Marketing Head, A Leading Milk Brand in India",
							},
						].map((review, index) => (
							<div
								key={index}
								className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
								data-aos={
									index === 0 ? "fade-right" : "fade-left"
								}
							>
								<Quote className="w-10 h-10 text-[#2d4a8a]/20 absolute top-6 left-6" />
								<div className="pl-8">
									<p className="text-gray-600 mb-6 italic relative z-10">
										"{review.quote}"
									</p>
									<div className="border-t border-gray-200 pt-4">
										<p className="text-sm text-[#2d4a8a]">
											{review.company}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<div
						className="max-w-lg mx-auto text-center"
						data-aos="fade-up"
					>
						<h2 className="text-3xl font-medium mb-8 text-[#1a365d]">
							Get Started Today
						</h2>
						<p className="text-gray-600 mb-8">
							Ready to transform your market strategy with
							powerful competitive intelligence? Let's discuss how
							our platform can help you achieve your business
							goals.
						</p>
						<button
							onClick={handleEmailClick}
							className="bg-[#1a365d] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2d4a8a] transition-all duration-300 flex items-center mx-auto group"
						>
							<Mail className="mr-2 w-5 h-5 transform transition-all duration-300 group-hover:scale-110" />
							Get in Touch
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

const Stats = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const stats = [
		{
			value: 10,
			suffix: 'BN+',
			label: 'Data Points Aggregated'
		},
		{
			value: 60,
			suffix: '+',
			label: 'Websites Tracked'
		},
		{
			value: 3000,
			suffix: '+',
			label: 'Brands Analyzed'
		},
		{
			value: 15,
			suffix: '+',
			label: 'Industry Verticals Covered'
		}
	];

	return (
		<section className="py-12 bg-gradient-to-r from-[#1a365d] to-[#2d4a8a]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold text-white mb-2" data-aos="fade-up">
						Our Impact in Numbers
					</h2>
					<p className="text-xl text-white/80" data-aos="fade-up" data-aos-delay="100">
						Delivering powerful insights through comprehensive data analysis
					</p>
				</div>
				
				<div 
					ref={ref}
					className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{stats.map((stat, index) => (
						<div 
							key={index}
							className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
						>
							<div className="text-4xl md:text-5xl font-bold text-white mb-2">
								{inView && (
									<CountUp
										end={stat.value}
										duration={2.5}
										separator=","
										suffix={stat.suffix}
									/>
								)}
							</div>
							<div className="text-white/80 text-lg">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const TechnologyAndCapabilities = () => {
	const technologies = [
		{
			icon: "🔄",
			title: "Real-time Updates",
			description: "Get the latest data with our real-time scraping and monitoring system"
		},
		{
			icon: "🛡️",
			title: "Proxy Management",
			description: "Advanced proxy rotation system ensuring reliable data collection"
		},
		{
			icon: "✨",
			title: "Best Quality Data",
			description: "High-quality, cleaned, and structured data ready for analysis"
		},
		{
			icon: "🔍",
			title: "Deep Crawling",
			description: "Comprehensive data extraction from multiple levels of web pages"
		}
	];

	return (
		<section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a8a]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
						Our Technology & Capabilities
					</h2>
					<p className="text-xl text-white/80" data-aos="fade-up" data-aos-delay="100">
						Powered by cutting-edge technology for reliable data extraction
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{technologies.map((tech, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
							data-aos="fade-up"
							data-aos-delay={100 * index}
						>
							<div className="text-3xl text-white mb-4">{tech.icon}</div>
							<h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
							<p className="text-white/80">{tech.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const Contact = () => {
	return (
		<section className="bg-[#1a365d] text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
					{/* Add your contact form or contact information here */}
				</div>
			</div>
		</section>
	);
};

const Footer = () => {
	return (
		<footer className="bg-[#1a365d] text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h3 className="text-xl font-semibold">Quick Data Point</h3>
					<p className="mt-2 text-sm text-gray-400">
						© 2025 Quick Data Point. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default App;
