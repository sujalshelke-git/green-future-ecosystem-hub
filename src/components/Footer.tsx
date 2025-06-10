
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                EcoFusion
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering people and organizations to create real environmental impact 
                through technology, education, and collaboration.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Twitter/X
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Instagram
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Our Mission</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">How It Works</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-300 space-y-2">
                <p>hello@ecofusion.org</p>
                <p>San Francisco, CA</p>
                <p>Global Impact</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 EcoFusion. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
