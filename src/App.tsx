import { useState, useEffect } from 'react';
import { 
  Play, 
  Sun, 
  Moon,
  Type,
  Hash,
  Layers,
  Target,
  Code
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className="min-h-screen transition-colors duration-300 bg-[#020617] text-white selection:bg-blue-500/30">
        {/* Spotlight Effect */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'bg-[#020617]/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
    : 'bg-transparent'
}`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                DenveX
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="https://www.denvex.in/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="https://www.denvex.in/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="https://www.denvex.in/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="https://www.denvex.in/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="https://www.denvex.in/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="https://www.denvex.in/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                Start Project
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 text-white overflow-hidden z-10">

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Logo Design
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fade-in-up animation-delay-200">
            Crafting unique and memorable brand identities that leave a lasting impression.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">

        {/* What is Logo Design */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What is Logo Design?
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Logo design is the art and science of creating visual symbols that represent your brand's 
                essence, values, and personality. A well-designed logo serves as the cornerstone of your 
                brand identity, instantly communicating who you are to your audience. It's more than just 
                a pretty picture—it's a strategic tool that builds recognition, trust, and emotional 
                connection with your customers.
              </p>
            </div>
          </div>
        </section>


        {/* Types of Logo Design */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Types of Logo Design
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Type, title: "Wordmark", desc: "Text-based logos focusing on typography and the company name. Perfect for businesses with distinctive, memorable names." },
                { icon: Hash, title: "Lettermark", desc: "Monogram-style logos using initials or abbreviations. Ideal for companies with long names or established acronyms." },
                { icon: Target, title: "Brandmark", desc: "Iconic symbols without text that represent your brand. Best for established companies with strong brand recognition." },
                { icon: Layers, title: "Combination Mark", desc: "Combines text and symbols for versatile branding. Offers flexibility to use elements separately or together." }
              ].map((item, index) => (
                <div key={index} className="group p-8 bg-gray-900/40 backdrop-blur-md border border-gray-800/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Testimonials (Based on Screenshot) */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-400">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Hariharan",
                  company: "TechStart Inc.",
                  text: "DenveX completely transformed our online presence. Their team delivered a website that not only looks stunning but also performs exceptionally well."
                },
                {
                  name: "Omkar Varma",
                  company: "FinanceApp",
                  text: "The web app they built for us has received incredible feedback from our users. The attention to detail and user experience is unmatched."
                },
                {
                  name: "Tamilselvan",
                  company: "StyleShop",
                  text: "Working with DenveX was a game-changer for our business. They understood our vision and executed it flawlessly."
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-8 bg-gray-900/40 backdrop-blur-md border border-gray-800/50 rounded-2xl">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose DenveX
            </h2>
            
            <div className="grid gap-8">
              {[
                { title: "Strategic Design Approach", desc: "We don't just create pretty logos—we develop strategic brand marks that align with your business objectives and resonate with your target audience." },
                { title: "Unlimited Revisions", desc: "Your satisfaction is our priority. We work closely with you through unlimited revisions until your logo perfectly captures your brand essence." },
                { title: "Complete Brand Package", desc: "Receive your logo in all necessary formats (PNG, JPG, SVG, AI), along with brand guidelines and color palettes for consistent application." },
                { title: "Fast Turnaround Time", desc: "Get your professional logo within 5-7 business days without compromising on quality or attention to detail." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Perfect Logo?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Let's bring your brand vision to life with a logo that makes a lasting impression. 
              Get started today and see the difference professional design makes.
            </p>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedrwoYe2FUIyrMV2X8LgQJHmoosExooXIdub-hpySMUIcDNQ/viewform?usp=header"
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Start Your Project</span>
            </a>
            
            <div className="mt-8 text-gray-500 text-sm">
              Free consultation • Fast turnaround • 100% satisfaction guarantee
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;