
import { Card, CardContent } from "@/components/ui/card";

const WhatIsEcoFusion = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            What Is EcoFusion?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              EcoFusion is a climate-tech platform designed to make sustainability accessible, 
              measurable, and collaborative. We empower people, communities, and companies to 
              track and reduce their environmental impact through technology, education, and collective action.
            </p>
            
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl font-medium text-gray-800">
                  Our platform bridges the gap between climate awareness and real action, 
                  providing tools that transform good intentions into measurable environmental impact.
                </p>
              </CardContent>
            </Card>
            
            <p>
              Whether you're an individual looking to reduce your carbon footprint, 
              a school wanting to educate students about sustainability, or a company 
              seeking to meet ESG goals, EcoFusion provides the guidance and tools you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEcoFusion;
