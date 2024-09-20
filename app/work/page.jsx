"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from 'framer-motion';
import { FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSass, SiSequelize, SiVite } from "react-icons/si";
import { v4 as uuidv4 } from 'uuid';
import Image1 from '@/public/assets/Image1'
import Image2 from '@/public/assets/Image2'
import Image3 from '@/public/assets/Image3'
import Image4 from '@/public/assets/Image4'
import Image5 from '@/public/assets/Image5'
import Image6 from '@/public/assets/Image6'


// Definición del array works con tecnologías refactorizadas
const works = [
  {
    key: uuidv4(),
    image: Image1,
    title: 'Gestini',
    description: 'ERP integral para la gestión de empresas, almacenes, usuarios y tienda en linea.',
    technologies: [
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiSass /> },
      { key: uuidv4(), icon: <SiRedux /> },
      { key: uuidv4(), icon: <SiVite /> },
      { key: uuidv4(), icon: <SiNodedotjs /> },
      { key: uuidv4(), icon: <FaJava /> },
      { key: uuidv4(), icon: <SiMysql /> }
    ]
  },
  {
    key: uuidv4(),
    image: Image2,
    title: 'Dream Junk Academy',
    description: 'Plataforma educativa con gestión de profesores, alumnos y clases en tiempo real.',
    technologies: [
      { key: uuidv4(), icon: <SiSass /> },
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiVite /> },
      { key: uuidv4(), icon: <SiMongodb /> },
      { key: uuidv4(), icon: <SiNodedotjs /> },
      { key: uuidv4(), icon: <SiExpress /> },
      { key: uuidv4(), icon: <SiRedux /> },
      { key: uuidv4(), icon: <SiPostgresql /> }
    ]
  },
  {
    key: uuidv4(),
    image: Image3,
    title: 'Dream Junk Studio',
    description: 'Software para la gestión de proyectos, contratos y comunidad empresarial.',
    technologies: [
      { key: uuidv4(), icon: <SiSass /> },
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiVite /> },
      { key: uuidv4(), icon: <SiMongodb /> },
      { key: uuidv4(), icon: <SiNodedotjs /> },
      { key: uuidv4(), icon: <SiExpress /> },
      { key: uuidv4(), icon: <SiRedux /> },
      { key: uuidv4(), icon: <SiPostgresql /> }
    ]
  },
  {
    key: uuidv4(),
    image: Image4,
    title: 'Henry Shops',
    description: 'Herramienta para crear y personalizar plantillas web de manera sencilla.',
    technologies: [
      { key: uuidv4(), icon: <SiSass /> },
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiVite /> },
      { key: uuidv4(), icon: <SiMongodb /> },
      { key: uuidv4(), icon: <SiNodedotjs /> },
      { key: uuidv4(), icon: <SiExpress /> },
      { key: uuidv4(), icon: <SiRedux /> },
      { key: uuidv4(), icon: <SiPostgresql /> },
      { key: uuidv4(), icon: <SiSequelize /> }
    ]
  },
  {
    key: uuidv4(),
    image: Image5,
    title: 'Merlok',
    description: 'Landing page profesional para una empresa de tecnología con diseño moderno.',
    technologies: [
      { key: uuidv4(), icon: <SiSass /> },
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiNextdotjs /> }
    ]
  },
  {
    key: uuidv4(),
    image: Image6,
    title: 'Conectando Empresas',
    description: 'Landing page con integración CRM Pipedrive para marketing.',
    technologies: [
      { key: uuidv4(), icon: <SiReact /> },
      { key: uuidv4(), icon: <SiSass /> }
    ]
  }
];




const Work = () => {
  return (
    <section className='py-0 sm:py-4 xl:py-4 px-5 sm:px-0'>
      <div className="h4 container">Mi trabajo</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}>

        <div className="container content py-5 xl:pb-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {works.map((work) => (
            <div key={work.key}>
              <CardContainer className="inter-var py-0">
                <CardBody className="relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] bg-[#ffffff0f] border-[#3ebcc031] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {work.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xs max-w-sm mt-2 text-neutral-300"
                  >
                    {work.description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full mt-4 h-50 sm:h-40 overflow-hidden rounded-xl"
                  >
                    <img
                      src={work.image}
                      className="w-full object-contain rounded-xl  group-hover/card:shadow-xl"
                      alt="nicolas project"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem className="flex gap-2" translateZ="60">
                      {work.technologies.map((icon, idx) => (
                        <span key={icon.key} className="text-base text-white shadow-xl">
                          {icon.icon}
                        </span>
                      ))}
                    </CardItem>
                    {/* <CardItem
                    translateZ="60"
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    <a href="#">Ir</a>
                  </CardItem> */}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

  );
};

export default Work;
