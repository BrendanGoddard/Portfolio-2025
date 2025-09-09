import React, { useEffect, useRef, useState } from 'react';

interface Job {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  logo: string;
  technologies: string[];
  logoStyle?: React.CSSProperties;
  link?: string;
}

interface WorkExperienceProps {
  darkMode: boolean;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ darkMode }) => {
  const [visibleJobs, setVisibleJobs] = useState<number[]>([]);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const jobs: Job[] = [
    {
      id: 1,
      company: "FRC 3739 - Oakbotics",
      position: "Programming Mentor",
      duration: "Apr 2022 - Present",
      description: "Mentored students in Java programming and advanced FRC robot concepts, including command groups, subsystems, and autonomous routines. Guided development of path-following, PID tuning, odometry, and neural network–based autonomous navigation to enhance team performance.",
      logo: "/oakbotics.jpg",
      technologies: ["Java", "WPILib", "Autonomous function", "Vision Tracking"],
      link: "https://www.oakbotics.ca"
    }
    ,
    {
      id: 2,
      company: "Armo-Tool",
      position: "Software Development Intern",
      duration: "Sept 2024 - Dec 2024",
      description: "Designed and implemented a 24/7 JavaScript-based auditing system for real-time tracking of record changes, improving transparency and accessibility for users. Developed Python scripts using Tesseract OCR to automate PDF CAD drawing mirroring, streamlining workflows and reducing manual effort. Delivered solutions that integrated seamlessly with existing systems, providing actionable insights and enhancing overall efficiency.",
      logo: "/Armo.png",
      technologies: ["Python", "Node.js", "MySQL", "Git", "Linux Deployment"],
      link: "https://armotool.com/"
    },
    {
      id: 3,
      company: "Bell Canada",
      position: "Software Development Intern",
      duration: "Jan 2024 - Apr 2024",
      description: "Developed a .NET application that interfaces with backend servers and frontend user inputs to price business ventures based on multiple factors including years and location. Built features to retrieve current data, add new entries, and create custom saving options. Automated business reporting with Python scripts that extract Excel data and update server records, while actively participating in team and one-on-one meetings to collaborate on project goals.",
      logo: "/bell.png",
      technologies: ["Javascript", "Node", "SQL Server", "Python"],
      link: "https://www.bell.ca"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const jobId = parseInt(entry.target.getAttribute('data-job-id') || '0');
            setVisibleJobs(prev => [...new Set([...prev, jobId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    jobRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              ref={el => jobRefs.current[index] = el}
              data-job-id={job.id}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } transform transition-all duration-1000 ${
                visibleJobs.includes(job.id)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 mx-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                  <a
                    key={job.id}
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    style={job.logoStyle ?? { width: "100%", height: "100%", objectFit: "contain" }}
                    className="w-full h-full object-cover"
                  />
                  </a>
                </div>
              </div>

              {/* Job Details */}
              <div className={`flex-1 p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/80'
              } backdrop-blur-sm shadow-xl border border-blue-200 dark:border-blue-800`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {job.position}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      {job.company}
                    </h4>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    {job.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full"
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

export default WorkExperience;