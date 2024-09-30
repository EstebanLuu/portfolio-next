'use client'

import { BsArrowDownRight, BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'


const services = [
  {
    num: 1,
    title: 'Desarrollo Web',
    description: 'Creación de sitios web y aplicaciones web personalizadas. Desde el diseño hasta la implementación, optimizando la experiencia del usuario.',
    href: '/contact'
  },
  {
    num: 2,
    title: 'Desarrollo de Software',
    description: 'Desarrollo de soluciones de software a medida para satisfacer las necesidades específicas, incluyendo aplicaciones de escritorio y móviles.',
    href: '/contact'
  },
  {
    num: 3,
    title: 'Diseño UX/UI',
    description: 'Diseño de interfaces de usuario y experiencia de usuario para asegurar que tus aplicaciones sean intuitivas, atractivas y fáciles de usar.',
    href: '/contact'
  },
  {
    num: 4,
    title: 'SEO',
    description: 'Optimización para motores de búsqueda para mejorar la visibilidad de tu sitio web en Google y atraer más tráfico orgánico.',
    href: '/contact'
  }
];



const Services = () => {
  return (
    <section className='py-0 sm:py-4  px-5 sm:px-0'>
      <div className="h4 container">Mis Servicios</div>
      <div className='container mx-auto my-5'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 sm:gap-[60px] gap-[20px]'
        >
          {
            services.map((service, ind) => (
              <motion.div
                key={ind}
                whileHover={{ scale: 1.05 }}
                className='group relative flex flex-col justify-between items-start p-6 bg-[#ffffff0e] backdrop-blur-lg border border-gray-600 rounded-xl shadow-lg duration-300 ease-in-out overflow-hidden '
                style={{ transform: 'translateZ(0)' }}
              >

                {/* Título del servicio */}
                <h2 className='text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300'>
                  {service.title}
                </h2>

                {/* Descripción */}
                <p className='text-gray-300 mt-4 text-sm'>
                  {service.description}
                </p>

                {/* Botón de enlace */}
                <Link href={service.href}>
                  <div className='mt-6 flex items-center text-white/50 transition-colors duration-300 cursor-pointer'>
                    <span className='mr-2 text-sm font-medium'>Conoce más</span>
                    <BsArrowRight />
                  </div>
                </Link>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services
