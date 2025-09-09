import React from 'react';

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  return (
    <section className="py-20 px-6 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Resume
      </h2>

      {/* PDF Container */}
      <div className={`w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden shadow-xl border ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <iframe
          src="/BrendanGoddardResume.pdf"
          title="Resume"
          className="w-full h-full"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      </div>
    </section>
  );
};

export default Resume;
