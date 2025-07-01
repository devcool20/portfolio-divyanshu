
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Frontend Developer";
  
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-black">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-sm md:text-base text-gray-400 mb-2 font-light tracking-wide">
            HELLO, I'M
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white tracking-tight">
            CHIMDI
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 font-light mb-12 h-8">
            {displayText}
            <span className="animate-pulse text-blue-400">|</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          I'm a passionate frontend developer who loves creating beautiful, 
          functional, and user-centered digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 rounded-none"
          >
            GET IN TOUCH
          </button>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 border border-white text-white font-medium text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-none"
          >
            VIEW MY WORK
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-400 hover:text-white transition-colors duration-300" size={24} />
      </button>
    </section>
  );
};

export default Hero;
