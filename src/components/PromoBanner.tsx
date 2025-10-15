import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile) {
        // On mobile, show banner when footer is visible
        const footerSection = document.getElementById('footer');
        if (footerSection) {
          const footerRect = footerSection.getBoundingClientRect();
          const footerTop = footerRect.top;
          
          // Show banner when footer starts to come into view
          setIsVisible(footerTop < window.innerHeight);
        }
      } else {
        // On desktop, show banner after mentors section
        const mentorsSection = document.getElementById('mentors');
        if (mentorsSection) {
          const mentorsRect = mentorsSection.getBoundingClientRect();
          const mentorsBottom = mentorsRect.bottom;
          
          // Show banner when we've scrolled past the mentors section
          setIsVisible(mentorsBottom < window.innerHeight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle screen size changes
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('enrollment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-gradient-to-r from-blue-600 to-purple-600 py-2 md:py-4 fixed bottom-0 left-0 right-0 z-50 shadow-xl border-t border-blue-500/30 backdrop-blur-sm ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <div>
                <div className="mb-0 sm:mb-1">
                  <span className="text-white font-bold text-xs sm:text-base md:text-lg italic">The Complete SolidWorks & ANSYS Course : From Zero to Expert! </span>
                  <span className="text-yellow-300 font-bold text-xs sm:text-base md:text-lg">, Grab Now!</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">⭐</span>
                    ))}
                  </div>
                  <span className="text-blue-100 text-xs font-medium">4.8/5 (500+ students)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="text-center">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">Rs. 4,999</span>
                <span className="text-sm sm:text-lg md:text-xl text-blue-200 line-through font-semibold">Rs. 8,000</span>
              </div>
            </div>

            <motion.button
              onClick={scrollToRegister}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-lg transition-all duration-300 shadow-lg text-xs sm:text-sm md:text-base"
            >
              Register Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}