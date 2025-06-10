
import { Card, CardContent } from "@/components/ui/card";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: "🌱",
      title: "General Public",
      description: "Eco-conscious individuals looking to make a real difference in their daily lives.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🏢",
      title: "NGOs",
      description: "Environmental organizations seeking tools to amplify their impact and reach.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🏭",
      title: "Businesses",
      description: "Companies committed to sustainability and ESG goals with measurable outcomes.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🎓",
      title: "Schools",
      description: "Educational institutions teaching environmental responsibility to the next generation.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "💻",
      title: "Developers",
      description: "Tech professionals building climate solutions and integrating environmental data.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: "💰",
      title: "Investors & Donors",
      description: "Funders looking to support transparent, impactful climate initiatives.",
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Who It's For
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            EcoFusion serves diverse communities united by a common goal: 
            creating meaningful environmental impact.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${audience.color} p-6 text-white text-center`}>
                    <div className="text-4xl mb-2">{audience.icon}</div>
                    <h3 className="text-xl font-semibold">{audience.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{audience.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
