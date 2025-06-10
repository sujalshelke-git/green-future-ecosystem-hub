
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            Mission, Vision & Goals
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A connected world where sustainability is second nature.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Empower people and organizations to reduce environmental impact through 
                  smart, transparent, and inclusive technology.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our Goals</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold">📊</span>
                  </div>
                  <p className="font-medium">Track and reduce CO2 at scale</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold">🤝</span>
                  </div>
                  <p className="font-medium">Enable collaboration with eco-partners</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold">🎮</span>
                  </div>
                  <p className="font-medium">Educate users with gamified tools</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold">💰</span>
                  </div>
                  <p className="font-medium">Raise funds for green projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
