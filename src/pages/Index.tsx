
import Hero from "@/components/Hero";
import WhatIsEcoFusion from "@/components/WhatIsEcoFusion";
import WhyEcoFusion from "@/components/WhyEcoFusion";
import Mission from "@/components/Mission";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhoItsFor from "@/components/WhoItsFor";
import SupportUs from "@/components/SupportUs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatIsEcoFusion />
      <WhyEcoFusion />
      <Mission />
      <WhyChooseUs />
      <WhoItsFor />
      <SupportUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
