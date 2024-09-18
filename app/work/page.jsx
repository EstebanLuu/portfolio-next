"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaHtml5, FaVuejs, FaJava, FaDatabase } from "react-icons/fa";
import { SiCss3, SiJavascript, SiSass, SiReact, SiRedux, SiNextdotjs, SiVite, SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiPostgresql, SiMysql, SiSequelize } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from 'framer-motion'

const works = [
  {
    number: 1,
    image: 'https://cdn.discordapp.com/attachments/1285951821944455230/1285968558026653726/image.png?ex=66ec330c&is=66eae18c&hm=a8037e2a27680ab076d6acb9d74c365c68ec14884f6e3ffb25f6b2bda2b797ce&',
    title: 'Gestini',
    description: 'ERP integral para la gestión de empresas, almacenes, usuarios y tienda en linea.',
    technologies: [<SiReact />, <SiSass />, <SiRedux />, <SiVite />, <SiNodedotjs />, <FaJava />, <SiMysql />]
  },
  {
    number: 2,
    image: 'https://cdn.discordapp.com/attachments/1285951821944455230/1285968561025847378/image.png?ex=66ec330d&is=66eae18d&hm=293fdcef46f89ac7a2372609aff098781053b0dce0c4c48576dfcf3e3885b6f1&',
    title: 'Dream Junk Academy',
    description: 'Plataforma educativa con gestión de profesores, alumnos y clases en tiempo real.',
    technologies: [<SiSass />, <SiReact />, <SiVite />, <SiMongodb />, <SiNodedotjs />, <SiExpress />, <SiRedux />, <SiPostgresql />]
  },
  {
    number: 3,
    image: 'https://cdn.discordapp.com/attachments/1285951821944455230/1285985076160499712/image.png?ex=66ec426e&is=66eaf0ee&hm=91f806a95df75959ec531422919a31389227596f48ad6cbe992b9fa60c111580&',
    title: 'Dream Junk Studio',
    description: 'Software para la gestión de proyectos, contratos y comunidad empresarial.',
    technologies: [<SiSass />, <SiReact />, <SiVite />, <SiMongodb />, <SiNodedotjs />, <SiExpress />, <SiRedux />, <SiPostgresql />]
  },
  {
    number: 4,
    image: 'https://cdn.discordapp.com/attachments/1285951821944455230/1285968558748078080/image.png?ex=66ec330c&is=66eae18c&hm=54d50e91bc051e53f91cebec18b03fd46dbe08229ceebedfbbe6b9721fca8ebd&',
    title: 'Henry Shops',
    description: 'Herramienta para crear y personalizar plantillas web de manera sencilla.',
    technologies: [<SiSass />, <SiReact />, <SiVite />, <SiMongodb />, <SiNodedotjs />, <SiExpress />, <SiRedux />, <SiPostgresql />, <SiSequelize />]
  },
  {
    number: 5,
    image: 'https://media.discordapp.net/attachments/1285951821944455230/1285968558307934230/image.png?ex=66ec330c&is=66eae18c&hm=5e6133f10fe88f79fbd4e171b37092efc045b912bf833217570d4b3f59e1757a&=&format=webp&quality=lossless&width=848&height=473',
    title: 'Merlok',
    description: 'Landing page profesional para una empresa de tecnología con diseño moderno.',
    technologies: [<SiSass />, <SiReact />, <SiNextdotjs />]
  },
  {
    number: 6,
    image: 'https://cdn.discordapp.com/attachments/1285951821944455230/1286029118487396373/image.png?ex=66ec6b73&is=66eb19f3&hm=a99e6df6de66499a451c783863d466f8505a7172a172b34687df7b143088cdb3&',
    title: 'Conectando Empresas',
    description: 'Landing page con integración CRM Pipedrive para marketing.',
    technologies: [<SiReact />, <SiSass />]
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
          {works.map((work, index) => (
            <CardContainer key={index} className="inter-var py-0">
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
                    className=" w-full object-contain rounded-xl  group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                  <CardItem className="flex gap-2" translateZ="60">
                    {work.technologies.map((icon, idx) => (
                      <span key={idx} className="text-base text-white shadow-xl">
                        {icon}
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
          ))}
        </div>
      </motion.div>
    </section>

  );
};

export default Work;
