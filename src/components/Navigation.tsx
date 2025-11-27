import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../assets/vibegen.jpg";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group transition-all"
            aria-label="Vibegen Home"
          >
            <img 
              src={logoImage} 
              alt="Vibegen Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-xl sm:text-2xl font-extrabold text-[#1F3A93] group-hover:text-[#8A2BE2] transition-colors">
              Vibegen
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#1F3A93] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#1F3A93] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-[#1F3A93] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#1F3A93] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#1F3A93] transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-[#8A2BE2] hover:bg-[#7209c7] text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#1F3A93] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#1F3A93] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#1F3A93] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#1F3A93] hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#1F3A93] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#8A2BE2] hover:bg-[#7209c7] text-white mx-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}