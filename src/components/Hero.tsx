
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Frontend Developer";
  
  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    let index = 0;
    const textTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(textTimer);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(textTimer);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <p className={`text-sm md:text-base text-gray-400 mb-2 font-light tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            HELLO, I'M
          </p>
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 text-white tracking-tight transition-all duration-1200 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            CHIMDI
          </h1>
          <div className={`text-xl md:text-2xl text-gray-300 font-light mb-12 h-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {displayText}
            <span className="animate-pulse text-blue-400 ml-1">|</span>
          </div>
        </div>

        <p className={`text-base md:text-lg text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          I'm a passionate frontend developer who loves creating beautiful, 
          functional, and user-centered digital experiences.
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-500 rounded-none relative overflow-hidden hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          <button 
            onClick={scrollToAbout}
            className="group px-8 py-4 border border-white text-white font-medium text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-500 rounded-none relative overflow-hidden transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-4'
        }`}
      >
        <ArrowDown className="text-gray-400 hover:text-white transition-all duration-500" size={24} />
      </button>
    </section>
  );
};

export default Hero;
