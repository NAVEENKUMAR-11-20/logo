import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  MessageSquare, 
  Play, 
  Sun, 
  Moon,
  Palette,
  Type,
  Hash,
  Layers,
  Target,
  PenTool,
  Figma,
  Zap,
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
      <div className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent dark:bg-gray-900'
}`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                 <img src="/lo.png"
                  alt="Deep Ware Studio Logo"
                  className="h-16 w-auto object-contain"/>
              </div>
              <span className="text-xl font-bold text-white">
                DeepWare Studio
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="https://deepware.vercel.app/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="https://deepware.vercel.app/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="https://deepware.vercel.app/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="https://deepware.vercel.app/register" className="text-gray-300 hover:text-white transition-colors">
                Start Project
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all hover:scale-105 bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
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
      <main className="bg-white dark:bg-gray-900 transition-colors">
        {/* What is Logo Design */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What is Logo Design?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Types of Logo Design
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Type className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Wordmark</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Text-based logos focusing on typography and the company name. Perfect for businesses 
                  with distinctive, memorable names.
                </p>
              </div>

              <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hash className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Lettermark</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monogram-style logos using initials or abbreviations. Ideal for companies with 
                  long names or established acronyms.
                </p>
              </div>

              <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Brandmark</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Iconic symbols without text that represent your brand. Best for established 
                  companies with strong brand recognition.
                </p>
              </div>

              <div className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Combination Mark</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Combines text and symbols for versatile branding. Offers flexibility to use 
                  elements separately or together.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Why Choose DeepWare Studio
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Strategic Design Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We don't just create pretty logos—we develop strategic brand marks that align 
                    with your business objectives and resonate with your target audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Unlimited Revisions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your satisfaction is our priority. We work closely with you through unlimited 
                    revisions until your logo perfectly captures your brand essence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Complete Brand Package
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Receive your logo in all necessary formats (PNG, JPG, SVG, AI), along with 
                    brand guidelines and color palettes for consistent application.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Fast Turnaround Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get your professional logo within 5-7 business days without compromising on 
                    quality or attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Perfect Logo?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's bring your brand vision to life with a logo that makes a lasting impression. 
              Get started today and see the difference professional design makes.
            </p>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedrwoYe2FUIyrMV2X8LgQJHmoosExooXIdub-hpySMUIcDNQ/viewform?usp=header"
              className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-6 h-6" />
              <span>Start Your Project</span>
            </a>
            
            <div className="mt-8 text-blue-200 text-sm">
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