
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🔬",
      title: "Tech + Transparency",
      description: "Cutting-edge technology with complete transparency in our methodologies and impact calculations."
    },
    {
      icon: "⚡",
      title: "Actionable Tools",
      description: "Not just awareness - we provide concrete tools and guidance for real environmental action."
    },
    {
      icon: "👥",
      title: "For Everyone",
      description: "Built for everyday users and serious organizations alike, with intuitive interfaces for all skill levels."
    },
    {
      icon: "🤝",
      title: "Trusted Partnerships",
      description: "Collaborating with verified NGOs, environmental organizations, and certified carbon offset providers."
    },
    {
      icon: "📡",
      title: "Real-time Data",
      description: "Access to live environmental data and impact tracking with scientific accuracy."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            EcoFusion combines innovative technology with genuine purpose to create 
            meaningful environmental impact.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
