import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

const Trending = () => {
    const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 1 } } 
};

  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
      <Nav/>
      <motion.div variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} className="w-full h-40 md:h-500 lg:h-96 max-w-screen-lg bg-no-repeat bg-cover bg-center  bg-[url('https://www.topgear.com/sites/default/files/2025/08/onsite_lexussportconcept1_3x4-scaled.jpg')]">
        </motion.div>

        <p className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
    <h1 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>Lexus Sport Concept</h1>
    <p className=' mx-10 text-left md:text-xl lg:mx-44 md:leading-10'>
    The new Lexus Sport Concept has officially debuted, showcasing the brand’s vision for a high-performance, futuristic sports car. With sleek, aerodynamic lines and a striking low-slung profile, this concept blends aggressive styling with Lexus’ signature elegance. Under the hood, it promises electrified performance and advanced hybrid technology, hinting at a future where speed meets sustainability. Inside, the cockpit features a driver-focused layout with cutting-edge infotainment and luxurious materials, giving a glimpse of what’s to come for Lexus enthusiasts. The Lexus Sport Concept isn’t just a showpiece—it’s a bold statement about the future of sports cars.
</p>
<motion.div variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} className="w-full h-40 md:h-500 md:w-3/4 lg:h-96 max-w-screen-lg bg-no-repeat bg-cover bg-center my-20  bg-[url('https://hips.hearstapps.com/hmg-prod/images/20250815-01-01-s-689f6da909ff3.jpg?crop=0.9204545454545454xw:1xh;center,top&resize=980:*')]">
        </motion.div>
    <p className=' mx-10 text-left md:text-xl lg:mx-44 md:leading-10'>
    Lexus has emphasized that the Sport Concept is not only about performance but also about innovation. Advanced driver-assistance systems, lightweight construction, and next-generation aerodynamics combine to create an experience that’s as thrilling as it is safe. While production details are still under wraps, the concept hints at a new era for Lexus, where cutting-edge technology meets exhilarating driving dynamics. Car enthusiasts worldwide are already buzzing about the possibilities, making the Lexus Sport Concept one of the most anticipated vehicles on the horizon.
</p>
        </p>
        <Footer/>
    </div>
  )
}

export default Trending