// components/Education.js

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    institution: 'Universidad Abierta Interamericana',
    degree: 'Licenciatura en Administración',
    dates: 'abr. 2020 - dic. 2023',
    description: 'Carrera universitaria',
  },
  {
    institution: 'Henry',
    degree: 'Full Stack Developer, Bootcamp',
    dates: 'mar. 2022 - nov. 2022',
    description: 'Henry Certificate',
  },
  {
    institution: 'ABA English',
    degree: 'Inglés',
    dates: 'mar. 2023 - presente',
    description: 'Curso de Inglés',
  },
  {
    institution: 'Udemy',
    degree: 'Cursos',
    dates: 'mar. 2023 - presente',
    description: 'Cursos diversos de tecnología',
  },
];

const Education = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: index * 0.5, duration: 0.4, ease: 'easeIn' } }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col items-center p-3 bg-[#ffffff0f] backdrop-blur-md border border-[#3ebcc031] rounded-xl shadow-lg transition-transform duration-200 ease-in-out"
          >
            {/* Icono de graduación */}
            <div className="text-teal-500 text-4xl mb-4">
              <FaGraduationCap />
            </div>

            {/* Contenedor para Fechas y Título */}
            <div className="flex flex-col w-full text-center">
              {/* Fechas */}
              <div className="text-sm text-gray-400 mb-4">
                <p>{edu.dates}</p>
              </div>

              {/* Institución */}
              <h2 className="text-xl font-semibold text-white mb-2">
                {edu.institution}
              </h2>

              {/* Título */}
              <p className="text-md font-medium text-teal-200 mb-2">
                {edu.degree}
              </p>

              {/* Descripción */}
              <p className="text-gray-300 text-sm">
                {edu.description}
              </p>
            </div>

            {/* Efecto sutil de resplandor */}
            <div className="absolute inset-0 rounded-lg border border-teal-500 opacity-30 blur-sm"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
