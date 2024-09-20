import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiCss3,
    SiSass,
    SiSequelize,
    SiRedux,
} from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava, FaDatabase, FaVuejs, FaHtml5 } from 'react-icons/fa';
import { usePathnameContext } from '@/hooks/pathname';

const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SASS', icon: <SiSass /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Vue.js', icon: <FaVuejs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vite.js', icon: <SiVite /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'NestJS', icon: <SiNestjs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Sequelize', icon: <SiSequelize /> },
    { name: 'Java', icon: <FaJava /> },
];

const SkillsGrid = () => {
    const { prevPathname } = usePathnameContext();
    const delay = prevPathname == '/resume' ? 0.5 : 1.5;

    return (
        <section className="flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay, duration: 0.4, ease: 'easeIn' } }}
                className="flex flex-col justify-center"
            >
                <p className='text-gray-300 text-xs mb-8'>Con más de 3 años de experiencia en desarrollo, he dominado una variedad de tecnologías altamente demandadas. Elegí aprender estas herramientas por su escalabilidad y relevancia en el mercado, lo que me permite adaptarme y ofrecer soluciones innovadoras. A continuación, destaco algunas de las principales tecnologías con las que he trabajado.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"> {/* Ajustamos el gap */}
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="group w-full h-[120px] sm:h-[100px] sm:w-[130px] flex flex-col items-center justify-center p-3 bg-[#ffffff17]  rounded-[10px] transition-all duration-300 ease-in-out"
                        >
                            <div className="text-3xl text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-sm font-medium text-gray-500 group-hover:text-teal-400 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsGrid;
