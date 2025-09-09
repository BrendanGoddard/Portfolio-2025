import React from 'react';
import { Github, Linkedin, MapPin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-green-500 shadow-2xl z-10 relative">
                <img
                  src="/IMG_3099.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-8 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Brendan Goddard
                </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                FullStack Software Developer
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate full-stack developer with specialization in modern web technologies and a love for creating 
                innovative solutions. I specialize in building cool and scalable applications using cutting-edge frameworks 
                and have experience across the entire development lifecycle. When I'm not coding, you'll find me 
                exploring new technologies, working on new projects, or mentoring the future developers of tommorow.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-6">
              <a
                href="https://github.com/BrendanGoddard?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-blue-600 hover:to-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/brendan-goddard"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-green-500 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 pt-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <MapPin size={16} />
                <span>London, Ontario</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Mail size={16} />
                <span>bjgoddard21@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;