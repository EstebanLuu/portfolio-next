'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Experience from '../../components/Experience'


const tabs = [
  // { id: 1, label: 'About Me' },
  { id: 1, label: 'Educación' },
  { id: 2, label: 'Habilidades' },
  { id: 3, label: 'Experiencia' },
];



const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <Education />;
      case 2:
        return <Skills />;
      case 3:
        return <Experience />;
      case 4:
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <section className="overflow-hidden py-0 sm:py-4 xl:py-4 sm:px-0 px-5">
      <div className="container mx-auto pb-5 sm:pb-0">
        <div className="w-full">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' },
            }}
            className="flex flex-wrap mb-5 justify-center md:justify-start"
          >
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${activeTab === tab.id
                  ? 'border-b-2 border-teal-500 text-white'
                  : 'border-b-2 border-transparent text-white/50'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className=""
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
