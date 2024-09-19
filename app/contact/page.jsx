'use client'

import React, {useState} from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa';


const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('estebaanlunaaa@gmail.com.com');
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
      }}
      className='w-full flex justify-center'>
      <div className="pt-20 pb-10 w-[90vw] bg-grid-white/[0.02] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex flex-col max-w-[800px] items-center justify-center">
          {/* Título con span estilizado */}
          <h3 className="text-3xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
            ¿Buscas soluciones innovadoras? <span className="text-accent">Estoy aquí para ayudarte</span>.
          </h3>

          {/* Texto debajo del título */}
          <p className="text-neutral-400 text-center text-sm sm:text-base mb-8">
            Si te gustaría ponerte en contacto conmigo, haz clic aquí debajo.
          </p>

          <div className="relative">
            {/* Botón de contacto */}
            <button
              className="flex items-center gap-2 p-4 px-10 bg-accent text-primary font-extrabold text-lg rounded-full transition-all duration-300 hover:scale-105 focus:outline-none"
              onClick={handleCopy}
            >
              CONTACTO
              <BsArrowUpRight className="text-xl" />
            </button>

            {/* Alerta de copia al portapapeles */}
            {showAlert && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center h-[300px] sm:h-[400px] w-[calc(100%-40px)] sm:w-[500px] bg-[#ffffff0e] backdrop-blur-lg border border-gray-600 rounded-xl shadow-md transition-transform duration-200 ease-in-out overflow-hidden">
                <FaCheckCircle className="text-green-500 text-5xl mb-4" />
                <p className="text-white text-lg font-semibold">¡Correo copiado al portapapeles!</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
