'use client'

import { BsArrowDownRight, BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num: 1,
    title: 'Web development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequatur ipsum excepturi sunt, sapiente libero quidem cum voluptatum!',
    href: '/'
  },
  {
    num: 2,
    title: 'Software development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequatur ipsum excepturi sunt, sapiente libero quidem cum voluptatum!',
    href: '/'
  },
  {
    num: 3,
    title: 'UX/UI Design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequatur ipsum excepturi sunt, sapiente libero quidem cum voluptatum!',
    href: '/'
  },
  {
    num: 4,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Consequatur ipsum excepturi sunt, sapiente libero quidem cum voluptatum!',
    href: '/'
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {
            services.map((service, ind) => (
              <motion.div
                key={ind}
                whileHover={{ scale: 1.05 }}
                className='group relative flex flex-col justify-between items-start p-8 bg-[#ffffff0e] backdrop-blur-lg border border-gray-600 rounded-xl shadow-lg duration-300 ease-in-out overflow-hidden '
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
                    <span className='mr-2 text-sm font-medium'>View more</span>
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
