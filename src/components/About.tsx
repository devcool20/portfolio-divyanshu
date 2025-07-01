
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-600 mb-4 font-medium tracking-wide">ABOUT ME</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            WHO I AM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a frontend developer with a passion for creating digital experiences that are not only 
            beautiful but also functional and accessible. I believe in the power of clean code and 
            user-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">TECHNICAL SKILLS</h3>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1">
                    <div 
                      className="bg-black h-1 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">EXPERIENCE</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
                <p className="text-gray-600 mb-2 font-medium">TechCorp • 2022-Present</p>
                <p className="text-gray-600 leading-relaxed">
                  Leading frontend development initiatives, mentoring junior developers, 
                  and architecting scalable web applications using modern technologies.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
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
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 font-medium tracking-wide">SERVICES</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">WHAT I DO</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="text-center p-8 hover:bg-gray-50 transition-all duration-300"
                >
                  <Icon className="mx-auto mb-6" size={48} />
                  <h4 className="text-lg font-bold mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
