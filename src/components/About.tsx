import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Updated skills from resume
  const skills = [
    { name: 'Python', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'SQL', level: 80 },
    { name: 'React/Next.js', level: 90 },
    { name: 'React-Native', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Redux', level: 80 },
    { name: 'PostgreSQL/SQLLite', level: 80 },
    { name: 'Prisma ORM', level: 75 },
    { name: 'Docker/Kubernetes', level: 70 },
    { name: 'Git', level: 90 },
    { name: 'XCode', level: 70 },
    { name: 'RESTful APIs/GraphQL', level: 80 },
  ];

  // Updated services
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Building scalable and performant mobile applications using React Native',
    },
    {
      icon: Code,
      title: 'Backend/API Development',
      description: 'Designing RESTful and GraphQL APIs, database migrations, and backend logic with Node.js.',
    },
    {
      icon: Palette,
      title: 'AI/ML',
      description: 'Integrating AI-powered features for enhanced user engagement and analytics.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive and user-friendly web applications using React and Next.js.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
          <p className={`text-sm text-gray-600 mb-4 font-medium tracking-wide transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>ABOUT ME</p>
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>DIVYANSHU SHARMA</h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Mobile Application Developer passionate about building scalable, AI-powered solutions. Experienced in backend API development, database migrations, and integrating advanced analytics. Always eager to learn and contribute to impactful projects.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Skills */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}> 
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
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}> 
            <h3 className="text-2xl font-bold mb-8 tracking-tight">EXPERIENCE</h3>
            <div className="space-y-8">
              <div className={`border-l-2 border-black pl-6 transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
                <h4 className="text-lg font-bold">Mobile Application Developer Intern</h4>
                <p className="text-gray-600 mb-2 font-medium">Zingvel Travels, Noida  March 2024 – May 2024</p>
                <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                  <li>Built and deployed 4 scalable Node.js backend APIs, supporting 6 core mobile app functionalities for 25,000+ active users, employing RESTful principles for modular design.</li>
                  <li>Executed seamless migration of the app’s database from MySQL to SQLLite, optimizing performance by 25% and ensuring &lt;5 minutes of total downtime with 100% data integrity.</li>
                  <li>Designed and integrated an AI-powered travel recommendation system, enhancing user engagement by 18%.</li>
                </ul>
              </div>
              <div className={`border-l-2 border-gray-300 pl-6 transition-all duration-800 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-gray-600 mb-2 font-medium">Ajay Kumar Garg Engineering College, B.Tech in Information Technology</p>
                <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                  <li>Nov 2021 - May 2025</li>
                  <li>GPA: 7.82/10</li>
                  <li>Coursework: Database Management System, Software Engineering, Data Analytics, Computer Networks, Java Programming, Cloud Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div>
          <div className={`text-center mb-16 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
            <p className="text-sm text-gray-600 mb-4 font-medium tracking-wide">SERVICES</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">WHAT I DO</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`group text-center p-8 hover:bg-gray-50 transition-all duration-700 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
