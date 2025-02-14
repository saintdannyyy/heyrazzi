import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { ArrowCircleUpRight } from "@untitled-ui/icons-react";

const Header = () => {
  return (
    <header className="h-15 mt-2 bg-[#FFFAF6]">
      <div className="bg-[#F0EDEA] mx-auto w-[90%] md:w-[80%] p-2 rounded-lg flex items-center justify-between">
        {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="Homepage" className="inline-block h-10 w-24">
              <img src={logo} alt="HeyRazzi Logo" className="h-full w-full" />
            </a>
            {/* Navigation */}
          <nav className="hidden md:flex items-center">
          <span className="pl-3 text-gray-600">|</span>
            <a href="/about" className="text-gray-700 hover:text-black font-bold transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/features"
              className="text-gray-700 hover:text-black font-bold transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-bold transition-colors duration-200"
            >
              Templates
            </a>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-orange-400 text-orange-500 hover:bg-orange-100 transition-colors duration-200"
          >
            Log In
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 hover:text-orange-600 flex items-center space-x-2 transition-colors duration-200">
            <span>Create Account</span>
            <ArrowCircleUpRight/>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
