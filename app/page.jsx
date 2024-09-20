import Photo from '@/components/Photo'
import Social from '@/components/Social'
import { FiDownload } from 'react-icons/fi'
<link rel="icon" href="/favicon.ico" sizes="any" />


const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software developer</span>
            <h1 className='h1'><br /> <span className='text-accent'>
              Nicolas Luna
            </span>
            </h1>
            <h4 className='max-w-[500px] mb-9 pt-5 sm:pt-0 text-white/88'>
              Desarrollo de software, aplicaciones y páginas web. Soluciones tecnológicas integrales.
            </h4>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/nicolasLunaFullstackCV.pdf"
                download="CV_Nicolas_Luna.pdf" className="flex items-center gap-2 p-4 px-10 bg-accent text-primary font-extrabold text-lg rounded-full transition-all duration-300  hover:scale-105 focus:outline-none">
                <span>
                  Download CV
                </span>
                <FiDownload className='text-xl' />
              </a>

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full cursor-pointer flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      {/* <Stats /> */}

    </section>
  )
}

export default Home