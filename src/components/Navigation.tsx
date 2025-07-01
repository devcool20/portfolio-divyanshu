
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20' 
        : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
            DIVYANSHU
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium tracking-wide transition-all duration-500 group ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label.toUpperCase()}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-all duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                } origin-left`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-6 pb-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-sm font-medium tracking-wide transition-all duration-500 hover:translate-x-2 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
