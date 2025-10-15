import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProgramOverview />
      </main>
      <Footer />
      <PromoBanner />
    </div>
  );
};

export default Index;
