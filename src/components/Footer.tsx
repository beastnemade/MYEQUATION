import logo from "../../logoeqn.png";
import { FaYoutube, FaInstagram, FaLinkedin, FaLink, FaMedium } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white text-gray-900 py-12 pb-20 md:pb-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img
              src={logo}
              alt="MyEquation Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              India's only startup to provide an ecosystem for core engineers.
            </p>
          </div>

          {/* Onboarding Manager's */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Onboarding Manager's</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Gunesh - 8806806479</p>
              <p className="text-gray-600 text-sm">Kaustuv - 9337837362</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors block">
                About Us
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors block">
                Careers
              </a>
            </div>
          </div>

          {/* Find Us Here */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Find Us Here</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.youtube.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.instagram.com/myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://myequation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaLink size={20} />
              </a>
              <a
                href="https://medium.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaMedium size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden pl-6">
          {/* Logo and Description */}
          <div className="mb-8">
            <img
              src={logo}
              alt="MyEquation Logo"
              className="h-6 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              India's only startup to provide an ecosystem for core engineers.
            </p>
          </div>

          {/* Two Column Layout for Mobile */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Onboarding Manager's */}
            <div>
              <h3 className="text-gray-900 font-medium mb-3 text-sm">Onboarding Manager's</h3>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs">Gunesh - 8806806479</p>
                <p className="text-gray-600 text-xs">Kaustuv - 9337837362</p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-900 font-medium mb-3 text-sm">Company</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 text-xs hover:text-gray-900 transition-colors block">
                  About Us
                </a>
                <a href="#" className="text-gray-600 text-xs hover:text-gray-900 transition-colors block">
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* Find Us Here - Mobile */}
          <div className="mb-8">
            <h3 className="text-gray-900 font-medium mb-3 text-sm">Find Us Here</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.instagram.com/myequation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/my-equation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://myequation.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaLink size={18} />
              </a>
              <a
                href="https://medium.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaMedium size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-xs text-center">
            © {currentYear} MyEquation, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
