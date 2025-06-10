
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(2,132,199,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent leading-tight">
            EcoFusion: Powering a Greener Tomorrow, Together
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A digital ecosystem uniting people, businesses, and technology to take real climate action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Join the Movement
            </Button>
            <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Watch Our Story
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Support Us
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-green-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
