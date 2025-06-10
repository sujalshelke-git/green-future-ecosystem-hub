
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SupportUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-green-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Support Our Mission
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Your donation helps us scale EcoFusion, build new tools, and reach more people 
            committed to creating a sustainable future.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">$25</div>
                  <p className="opacity-90">Powers carbon tracking for 100 users</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$100</div>
                  <p className="opacity-90">Funds educational content development</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$500</div>
                  <p className="opacity-90">Supports new feature development</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
