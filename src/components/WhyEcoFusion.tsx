
import { Card, CardContent } from "@/components/ui/card";

const WhyEcoFusion = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Why EcoFusion?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">The Problem</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most people want to act on climate change but don't know how. 
                  Current solutions are fragmented, complex, or inaccessible to everyday users. 
                  Without clear guidance and tools, good intentions rarely translate into meaningful action.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  EcoFusion bridges that gap by providing intuitive tools and personalized guidance 
                  for real climate action. Whether you're an individual, school, or company, 
                  we help you understand your impact and take concrete steps to reduce it.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Everyone Can Make a Difference</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  From tracking your daily carbon footprint to coordinating large-scale 
                  sustainability initiatives, EcoFusion makes environmental action accessible and impactful.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEcoFusion;
