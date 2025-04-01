import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Solution {
  title: string;
  description: string;
  benefits: string[];
  fullDescription: string;
}

const solutions: Solution[] = [
  {
    title: "LinkedIn Lead Generation",
    description: "Advanced profile and post interaction analysis from LinkedIn profiles. Track engagement metrics and gather valuable insights from post interactions.",
    fullDescription: "Our LinkedIn Lead Generation solution provides comprehensive analysis of profile interactions, post engagements, and network growth. We track likes, comments, and shares across posts, analyze engagement patterns, and identify potential leads based on interaction history.",
    benefits: [
      "Profile-based post tracking",
      "Engagement analytics (likes, comments)",
      "Network growth analysis",
      "Competitor engagement tracking"
    ]
  },
  {
    title: "Quick Commerce Price Comparison",
    description: "Comprehensive price comparison across major quick commerce platforms including Zepto, Blinkit, Swiggy Instamart, BigBasket, BB Now, Flipkart Quick, and DMart.",
    fullDescription: "Our Quick Commerce Price Comparison tool monitors prices across all major quick commerce platforms in real-time. We track product availability, price fluctuations, and delivery charges to help businesses stay competitive.",
    benefits: [
      "Real-time price tracking",
      "Pan-India availability mapping",
      "Complete product catalogs",
      "Delivery fee comparison",
      "Stock availability alerts"
    ]
  },
  {
    title: "E-commerce Intelligence",
    description: "Comprehensive product and pricing analysis across major e-commerce platforms including Amazon, Flipkart, Shopify stores, and Meesho.",
    fullDescription: "Our E-commerce Intelligence solution provides detailed insights into product pricing, availability, and competitive positioning across major e-commerce platforms and Shopify stores. Track price changes, monitor stock levels, analyze customer reviews, and gain insights from multiple marketplaces.",
    benefits: [
      "Price trend analysis across platforms",
      "Shopify store monitoring",
      "Stock availability tracking",
      "Customer review monitoring",
      "Competitor product mapping",
      "Sales rank tracking"
    ]
  },
  {
    title: "Banking & Financial Intelligence",
    description: "Comprehensive analysis of banking products, interest rates, and loan offerings across multiple financial institutions.",
    fullDescription: "Our banking intelligence solution monitors interest rates, loan products, and financial offerings across major banks and financial institutions. Track changes in lending rates, compare loan terms, and analyze competitive financial products.",
    benefits: [
      "Real-time interest rate monitoring",
      "Loan product comparison across banks",
      "Fixed vs floating rate analysis",
      "EMI and tenure tracking",
      "Credit card offer comparison"
    ]
  },
  {
    title: "Medicine Delivery Comparison",
    description: "Price comparison across pharmaceutical delivery platforms including Apollo, PharmEasy, Flipkart Health+, and Zepto Pharmacy.",
    fullDescription: "Our Medicine Delivery Comparison solution tracks prices and availability of medicines across major online pharmacies. We monitor delivery times, compare prices, and track discounts.",
    benefits: [
      "Medicine price comparison",
      "Availability tracking",
      "Delivery time analysis",
      "Prescription medicine availability"
    ]
  },
  {
    title: "Ride Hailing Analytics",
    description: "Comprehensive analysis of ride-hailing services with price and availability comparison across different routes.",
    fullDescription: "Our Ride Hailing Analytics solution provides real-time comparison of prices and wait times across different ride-hailing services. We track surge pricing patterns and analyze route availability.",
    benefits: [
      "Real-time price comparison",
      "Route availability analysis",
      "Surge pricing tracking",
      "Wait time analysis"
    ]
  },
  {
    title: "Logistics Comparison",
    description: "Package transport service comparison across Delhivery, Porter, ShipRocket, and other major logistics providers.",
    fullDescription: "Our Logistics Comparison solution analyzes shipping rates, delivery times, and service coverage across major logistics providers. We track package delivery performance and compare rates.",
    benefits: [
      "Shipping rate comparison",
      "Delivery time analysis",
      "Service coverage mapping",
      "Weight-based pricing analysis"
    ]
  },
  {
    title: "Real Estate Market Analysis",
    description: "Detailed property listing analysis across major real estate platforms including Magicbricks, 99acres, and Housing.com.",
    fullDescription: "Our Real Estate Market Analysis solution tracks property prices, rental rates, and market trends across different locations. Monitor new listings, price changes, and property specifications to gain comprehensive market insights.",
    benefits: [
      "Property price tracking",
      "Rental rate analysis",
      "Location-based trends",
      "Property specification comparison",
      "Market demand assessment"
    ]
  }
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      delay: 0,
      offset: 0
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            Our Scraping Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Harness the power of competitive data analytics to make informed decisions and stay ahead in your market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              data-aos="fade"
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h2>
                <p className="text-gray-300 mb-6 flex-grow">
                  {solution.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Benefits:
                  </h3>
                  <ul className="space-y-2">
                    {solution.benefits.slice(0, 3).map((benefit, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start text-gray-300"
                      >
                        <svg 
                          className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedSolution(solution)}
                  className="bg-white text-[#1a365d] px-6 py-3 rounded-lg font-medium hover:bg-blue-300 hover:text-white transition-all duration-300 w-full mt-auto"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedSolution(null)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">
              {selectedSolution.title}
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {selectedSolution.fullDescription}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#1a365d]">
                Key Benefits:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSolution.benefits.map((benefit, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <svg 
                      className="w-5 h-5 text-blue-500 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedSolution(null)}
                className="bg-[#1a365d] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2d4a8a] transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Solutions;
