import { Button } from "@/components/ui/button";
import bgImage from "@/assets/bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background Image - No Blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* Main Heading */}
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            <strong className="block italic">Industry Designing using</strong>
            <strong className="block mt-2 lg:mt-4 italic">Solidworks & ANSYS</strong>
          </h1>
          <br />
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light">
            This expert-led program is designed to take students from foundational concepts to advanced industry-ready expertise in both 3D modeling and engineering simulation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;