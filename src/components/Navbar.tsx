import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../logoeqn.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#program-overview" },
    { name: "Mentors", href: "#services" },
    { name: "Contact Us", href: "#footer" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="MyEQ Logo"
              className="h-6 w-auto sm:h-7 md:h-8 lg:h-9"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white/90 hover:text-white transition-colors font-light cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(e as any, "#enrollment-form");
              }}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in bg-white/10 backdrop-blur-md rounded-lg mt-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors font-light py-2 pl-6 cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-white hover:bg-white/10 ml-2 mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(e as any, "#enrollment-form");
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
