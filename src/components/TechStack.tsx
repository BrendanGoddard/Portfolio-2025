import React, { useEffect, useRef, useState } from 'react';

interface Technology {
  name: string;
  years: number;
  logo: string;
  color: string;
}

interface TechStackProps {
  darkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies: Technology[] = [
    { name: 'JavaScript', years: 2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'Node.js', years: 2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'React', years: 1, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Angular', years: 0.5, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
    { name: 'Python', years: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'C#', years: 2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#239120' },
    { name: 'C++', years: 2, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
    { name: 'Java', years: 6, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' }
  ];

  // Trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`w-24 h-24 rounded-full p-4 shadow-lg border-2 cursor-pointer transition-transform duration-300 ${
                visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                backgroundColor: darkMode ? '#1F2937' : 'white',
                borderColor: tech.color,
                transitionDelay: visible ? '0.2s' : '0s'
              }}
              onMouseEnter={e => {
                e.currentTarget.classList.add('animate-shake');
              }}
              onAnimationEnd={e => {
                e.currentTarget.classList.remove('animate-shake');
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {visible && (
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            All the languages I am familiar with and have experience using.
          </p>
        )}
      </div>

      {/* Shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
