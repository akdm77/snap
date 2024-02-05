import Image from 'next/image'
import AudioPhile from '/public/client-audiophile.svg'
import DataBiz from '/public/client-databiz.svg'
import Maker from '/public/client-maker.svg'
import Meet from '/public/client-meet.svg'
const Footer = () => {
  return (
    <footer className='flex justify-between text-center my-6 md:justify-start md:absolute md:left-0 md:bottom-2 md:min-w-full  md:items-end md:mt-5'>
        <section className='flex justify-between w-full mx-5 md:w-1/2 md:flex md:justify-between md:ml-28 md:pr-20 '>
            <Image
                src={DataBiz}
                height={50}
                width={50}
                alt='Data-Biz '
                className='ml-2 h-3 w-16 md:h-4 md:w-20'
            />

            <Image
                src={AudioPhile}
                height={50}
                width={50}
                alt='Audio-Phile'
                className='h-4 md:h-6 md:w-20'
            />

            <Image
                src={Meet}
                height={30}
                width={50}
                alt='Meet'
                className='h-4 md:h-4 md:w-20'
            />
            
            <Image
                src={Maker}
                height={30}
                width={50}
                alt='Maker'
                className='h-4 mr-2 md:h-4 md:w-20'
            />
        </section>

    </footer>
  )
}

export default Footer