import { BarChart3, Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <BarChart3 className="w-6 h-6 absolute top-0 left-0 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <Activity className="w-6 h-6 text-blue-300 transform transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </div>
            <span className="text-lg font-medium pl-8">Quick Data Point</span>
          </div>
          <div className="text-white/80">
            © {new Date().getFullYear()} Quick Data Point. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 