
import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Analytics App',
      description: 'A comprehensive weather application with detailed forecasts, interactive maps, and data visualization components.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      tech: ['React', 'D3.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio showcase featuring smooth animations, modern design principles, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-sm text-gray-600 mb-4 font-medium tracking-wide transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            PORTFOLIO
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            MY WORK
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Here's a selection of projects that showcase my skills in frontend development, 
            UI/UX design, and problem-solving approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                } flex items-center justify-center`}>
                  <div className={`flex space-x-4 transition-all duration-500 delay-200 ${
                    hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <a 
                      href={project.liveUrl}
                      className="p-4 bg-white/90 backdrop-blur-sm text-black hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-4 bg-white/90 backdrop-blur-sm text-black hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 tracking-tight text-black group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 ${
                        hoveredProject === project.id ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        animationDelay: `${techIndex * 100}ms`,
                        animationDuration: '2s'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
