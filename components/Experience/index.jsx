// components/Experience.js

import React from 'react';
import { motion } from 'framer-motion';


const experiences = [
  {
    company: 'Universidad de Palermo',
    role: 'Analista Funcional Académico-Arancelario',
    dates: 'jun. 2024 - actualidad',
    location: 'Buenos Aires · Híbrido',
    description: 'Gestión de procesos académicos y arancelarios, en colaboración para soluciones eficientes.',
    skills: ['SQL', 'Office 365']
  },
  {
    company: 'Gestini',
    role: 'Desarrollador Full Stack',
    dates: 'jun. 2024 - actualidad',
    location: 'Argentina',
    description: 'Desarrollo de software para clientes y proyectos propios, combinando innovación y eficiencia.',
    skills: ['React.js', 'Sass', 'Redux', 'Vite.js', 'Express.js', 'MongoDB', 'Java', 'Nest.js']
  },
  {
    company: 'Dream Junk Studios',
    role: 'Desarrollador Full Stack',
    dates: 'jul. 2023 - jun. 2024',
    location: 'EE.UU. · Remoto',
    description: 'Desarrollo mantenimiento y optimización de plataformas web completas con múltiples integraciones.',
    skills: ['React.js','Sass', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'PostgreSQL']
  },
  {
    company: 'CrESI',
    role: 'Desarrollador Front-End',
    dates: 'jul. 2022 - sept. 2022',
    location: 'Argentina',
    description: 'Migración de código y desarrollo de soluciones web, mejorando funcionalidad y rendimiento.',
    skills: ['React.js', 'Vue.js', 'Vite.js']
  },

];

const Experience = () => {
  return (
    <section className="flex flex-col justify-center">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col justify-between items-center md:items-start p-6 md:pt-8 bg-[#ffffff0e] backdrop-blur-lg border border-gray-600 rounded-xl shadow-md transition-transform duration-200 ease-in-out overflow-hidden"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* Contenedor para Fechas y Título */}
              <div className="flex flex-col w-full">
                {/* Fechas en la parte superior derecha */}
                <div className="md:absolute w-full flex text-center md:right-2 top-2 justify-end text-[10px] text-gray-400 mb-2">
                  <p className='w-full'>{exp.dates}</p>
                </div>

                {/* Empresa */}
                <h2 className="text-lg text-center md:text-left font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {exp.company}
                </h2>
              </div>

              {/* Rol */}
              <p className="text-xs font-medium text-white">{exp.role}</p>

              {/* Ubicación */}
              <p className="text-[10px] text-gray-400 mt-1">{exp.location}</p>

              {/* Descripción */}
              <p className="text-gray-300 text-center md:text-left mt-2 text-xs">{exp.description}</p>

              {/* Habilidades */}
              <div className="flex flex-wrap justify-center md:justify-normal gap-1 mt-2 text-xs text-gray-300">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-700 px-2 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default Experience;
