
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Backend Development', level: 80 },
    { name: 'Mobile Development', level: 75 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, SEO, and overall performance.',
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Providing technical guidance and architectural decisions for your projects.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-white">Senior Frontend Developer</h4>
                <p className="text-blue-400 mb-2">Tech Company • 2022-Present</p>
                <p className="text-zinc-400">
                  Leading frontend development initiatives and mentoring junior developers 
                  while building scalable web applications.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-white">Full Stack Developer</h4>
                <p className="text-purple-400 mb-2">Startup Inc • 2020-2022</p>
                <p className="text-zinc-400">
                  Developed and maintained multiple web applications using React, Node.js, 
                  and modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <Icon className="text-blue-400 mb-4" size={48} />
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-zinc-400">{service.description}</p>
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
