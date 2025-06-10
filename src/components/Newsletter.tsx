
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get updates on new features, campaigns, and our journey toward a sustainable future.
          </p>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 text-lg py-3"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
