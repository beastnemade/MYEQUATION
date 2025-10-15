import bgImage from "@/assets/bg.png";

export default function PromoBanner() {
  const scrollToRegister = () => {
    const element = document.getElementById('enrollment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-4 md:py-6 border-t border-white/10 overflow-hidden">
      {/* Static Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <div>
                <div className="mb-1 sm:mb-2">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg italic">The Complete SolidWorks & ANSYS Course : From Zero to Expert! </span>
                  <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">, Grab Now!</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                  <span className="text-blue-100 text-sm font-medium">4.8/5 (500+ students)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Rs. 4,999</span>
                <span className="text-base sm:text-lg md:text-xl text-blue-200 line-through font-semibold">Rs. 8,000</span>
              </div>
            </div>

            <button
              onClick={scrollToRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-lg transition-all duration-300 shadow-lg text-sm sm:text-base hover:scale-105 active:scale-95 transform"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}