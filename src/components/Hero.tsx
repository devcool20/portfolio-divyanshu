
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Creative Developer & Designer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-lg md:text-xl text-zinc-400 mb-4 animate-fade-in">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-300">
            John Doe
          </h1>
          <div className="text-2xl md:text-3xl text-blue-400 font-light mb-8 h-12 animate-fade-in delay-500">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700">
          I craft beautiful digital experiences that combine innovative design with cutting-edge technology. 
          Let's build something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-zinc-600 hover:border-zinc-400 text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-zinc-400 hover:text-white transition-colors duration-300" size={32} />
      </button>
    </section>
  );
};

export default Hero;
