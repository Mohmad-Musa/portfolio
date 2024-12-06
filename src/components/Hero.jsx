import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import creator from "../assets/creator.png"
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
<div className=' flex flex-col justify-center items-center mt-5'>

<div className='w-20 h-20 rounded-full bg-blue-700'/>

</div>
  <div>
<h1 className={`${styles.heroHeadText} text-white`} >
  Hello , I`m <span>
  </span><span className='text-blue-700'>
Mohmad Musa
  </span>
</h1>
<p className={`${styles.heroSubText} mt-2 text-white-100`}>
I develop web applications<br className='sm:block hidden'/> and  user interfaces
</p>
         <img  src={creator}  alt="creator" className='h-1/2 w-1/2 ml-96  -mt-24 rounded-full'/>
  </div>
      </div>
    
    </section>
  )
}

export default Hero