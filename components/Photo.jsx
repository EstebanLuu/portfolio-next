'use client'

import { motion } from 'framer-motion'
import Foto from "@/public/assets/FotoNico.png"
import Image from 'next/image'
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
                }}
            >
                <BackgroundGradient className="rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] bg-zinc-900">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' }
                        }}
                        className='h-[200px] w-[200px] rounded-full overflow-hidden'>
                        <Image src={Foto} priority quality={100} fill alt='' className='object-contain rounded-full h-full w-ful' />
                    </motion.div>
                </BackgroundGradient>

                {/* circle
                <motion.svg
                    className='w-[300px] h-[300px] xl:w-[420px] xl:h-[420px]'
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle
                        cx='253'
                        cy='253'
                        r='250'
                        stroke='#00ff99'
                        strokeWidth='4px'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: '24 10 0 0' }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </motion.svg> */}

            </motion.div>
        </div >
    )
}

export default Photo