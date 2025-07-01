
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-400 mb-4 font-medium tracking-wide">CONTACT</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-12 tracking-tight">LET'S TALK</h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-6 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium tracking-wide">{info.label.toUpperCase()}</p>
                      <p className="text-lg font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-tight">FOLLOW ME</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-12 tracking-tight">SEND MESSAGE</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 tracking-wide">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-colors duration-300 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 tracking-wide">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-colors duration-300 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-3 tracking-wide">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-white focus:outline-none transition-colors duration-300 resize-none text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            © 2024 CHIMDI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
