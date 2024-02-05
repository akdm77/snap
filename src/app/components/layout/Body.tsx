import Image from 'next/image'
import Footer from './Footer'
import ImageDesktop from '/public/image-hero-desktop.png'
import ImagemMobile from '/public/image-hero-mobile.png'

const Body = () => {
  return (
    <div className='flex-col md:flex md:flex-row  md:mt-60  md:justify-between bg-white md:text-center  md:h-screen md:min-w-full '>

      <section className='md:basis-1/2 flex-col  md:ml-36 md: justify-start md:justify-center text-center md:size-1/2 '>
        <Image
              src={ImagemMobile}
              height={1000}
              width={1000}
              alt='Image-mobile'
              className='size-full mt-24 mb-5 md:hidden'
          />
          <div className='md:flex  md:text-start'>
            <h1 className='container md:items-center flex justify-center md:justify-start text-black md:text-7xl  text-4xl mb-4 md:font-black font-bold '>Make <br className='sm:block hidden' /> remote work</h1>
          </div>
      
        <div className='md:size-1/2 md:mt-2 md:min-w-full md:pr-24 md:pl-0 md:flex md:items-start md:text-start md:justify-start md:h-1/3'>
          <p className=' container flex md:font-semibold justify-center text-md   text-gray-500 font-medium md:justify-end'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        </div>
     
        <button className=' hover:bg-white hover:text-black text-white hover:border-black hover:border-2  bg-black rounded-xl py-2 px-4 mt-5 md:px-6 md:py-4 md:flex md:mt-0'>Learn more</button>
        <Footer/>
      </section>
      
      <section className=' md:flex -mt-36 w-1/2 md:basis-1/2 md:mr-10 md:justify-center md:items-start '>
        <Image
              src={ImageDesktop}
              height={1000}
              width={1000}
              alt='Image-desktop'
              className='w-10/12 h-5/6  mb-5 md:flex sm:block hidden '
          />
      </section>


    </div>
  )
}

export default Body