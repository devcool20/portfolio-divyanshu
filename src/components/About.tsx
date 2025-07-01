
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with clean code and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing mobile-first responsive applications that work seamlessly across all devices.',
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimizing applications for speed, accessibility, and search engine performance.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay skills animation
          setTimeout(() => setSkillsAnimated(true), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-sm text-gray-600 mb-4 font-medium tracking-wide transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            ABOUT ME
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            WHO I AM
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            I'm a frontend developer with a passion for creating digital experiences that are not only 
            beautiful but also functional and accessible. I believe in the power of clean code and 
            user-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Skills */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">TECHNICAL SKILLS</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className={`transition-all duration-800 delay-${800 + index * 200}`}>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-black h-1 rounded-full transition-all duration-1500 ease-out"
                      style={{ 
                        width: skillsAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${1000 + index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">EXPERIENCE</h3>
            <div className="space-y-8">
              <div className={`border-l-2 border-black pl-6 transition-all duration-800 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
                <p className="text-gray-600 mb-2 font-medium">TechCorp • 2022-Present</p>
                <p className="text-gray-600 leading-relaxed">
                  Leading frontend development initiatives, mentoring junior developers, 
                  and architecting scalable web applications using modern technologies.
                </p>
              </div>
              <div className={`border-l-2 border-gray-300 pl-6 transition-all duration-800 delay-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="text-lg font-bold">Frontend Developer</h4>
                <p className="text-gray-600 mb-2 font-medium">StartupInc • 2020-2022</p>
                <p className="text-gray-600 leading-relaxed">
                  Developed and maintained multiple React applications, collaborated with 
                  design teams, and implemented responsive designs across various platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className={`text-center mb-16 transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm text-gray-600 mb-4 font-medium tracking-wide">SERVICES</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">WHAT I DO</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`group text-center p-8 hover:bg-gray-50 transition-all duration-700 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${1600 + index * 200}ms` }}
                >
                  <Icon className="mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-600" size={48} />
                  <h4 className="text-lg font-bold mb-4 tracking-tight transition-colors duration-300 group-hover:text-blue-600">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
