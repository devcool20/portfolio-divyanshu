
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@chimdi.dev',
      href: 'mailto:hello@chimdi.dev',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Chimdi,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    const mailtoLink = `mailto:hello@chimdi.dev?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Your email client should now open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-sm text-gray-400 mb-4 font-medium tracking-wide transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            CONTACT
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            GET IN TOUCH
          </h2>
          <p className={`text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-12 tracking-tight">LET'S TALK</h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`group flex items-center space-x-6 text-gray-300 hover:text-white transition-all duration-500 hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="p-3 border border-gray-700 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-6">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium tracking-wide group-hover:text-gray-400 transition-colors duration-300">{info.label.toUpperCase()}</p>
                      <p className="text-lg font-medium group-hover:scale-105 transition-transform duration-300 origin-left">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={`transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-lg font-bold mb-6 tracking-tight">FOLLOW ME</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${1600 + index * 100}ms` }}
                    >
                      <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold mb-12 tracking-tight">SEND MESSAGE</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-3 tracking-wide">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-all duration-500 text-white"
                    placeholder="Your name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    focusedField === 'name' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-3 tracking-wide">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-all duration-500 text-white"
                    placeholder="your@email.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    focusedField === 'email' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium mb-3 tracking-wide">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-all duration-500 text-white"
                  placeholder="Project discussion"
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                  focusedField === 'subject' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium mb-3 tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-all duration-500 resize-none text-white"
                  placeholder="Tell me about your project..."
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              <button
                type="submit"
                className="group relative px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-100 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t border-gray-800 text-center transition-all duration-1000 delay-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-gray-400 text-sm tracking-wide">
            © 2024 CHIMDI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
