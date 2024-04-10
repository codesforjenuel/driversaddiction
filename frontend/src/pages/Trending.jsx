import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Trending = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
      <Nav/>
      <div className="w-full h-40 md:h-500 lg:h-96 max-w-screen-lg bg-no-repeat bg-cover bg-center  bg-[url('https://hips.hearstapps.com/hmg-prod/images/2025-toyota-4runner-trdpro-104-jpg-6615617e361a0.jpg?crop=0.786xw:0.719xh;0.119xw,0.161xh&resize=980:*')]">
        </div>

        <p className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
    <h1 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>the All-New 2025 Toyota 4Runner</h1>
    <p className=' mx-10 text-left md:text-xl lg:mx-44 md:leading-10'>
    06/08/2023
    As the automotive industry forges ahead into the future, Toyota unveils its latest masterpiece: the 2025 Toyota 4Runner lineup. With a blend of innovation, versatility, and homage to its rich heritage, the new lineup introduces two exciting trims—the Trailhunter and Platinum—joining the esteemed ranks of SR5, TRD Sport, TRD Off-Road, Limited, and TRD Pro models.

Revolutionizing the driving experience, the 2025 4Runner lineup boasts enhanced performance options. Most models will harness the power of the i-Force 2.4-liter turbocharged four-cylinder engine, delivering an impressive 278 horsepower. However, for those craving an extra surge, select models will feature the i-Force Max hybrid system, integrating an additional electric motor to elevate the total output to an exhilarating 326 horsepower.
</p>
<div className="w-full h-40 md:h-500 md:w-3/4 lg:h-96 max-w-screen-lg bg-no-repeat bg-cover bg-center my-20  bg-[url('https://hips.hearstapps.com/hmg-prod/images/2025-toyota-4runner-limited-interior-102-jpg-6615602fd2903.jpg?crop=1xw:0.9166666666666666xh;center,top&resize=980:*')]">
        </div>
    <p className=' mx-10 text-left md:text-xl lg:mx-44 md:leading-10'>
    Beyond its powertrain, the 2025 4Runner undergoes a striking transformation in aesthetics, resembling a Tacoma SUV more closely than ever before. Drawing inspiration from the recently debuted pickup, the new 4Runner shares distinctive exterior styling cues and interior features, while also paying homage to its storied past.

Trailhunter Trim: Unleashing Adventure

For the intrepid explorers and off-road enthusiasts, the Trailhunter trim emerges as a beacon of rugged capability. Tailored for overland expeditions, this variant combines robust performance with cutting-edge technology to conquer any terrain. From rocky trails to expansive wilderness, the Trailhunter ensures a seamless blend of adventure and comfort, promising an unforgettable journey off the beaten path.

Platinum Trim: Elevating Luxury

At the summit of sophistication lies the Platinum trim, epitomizing luxury and refinement. Crafted with meticulous attention to detail, this pinnacle of elegance offers an opulent driving experience. From its lavish interior adorned with premium materials to its advanced tech features, the Platinum trim sets a new standard for upscale SUVs. With unparalleled comfort and sophistication, every journey becomes a first-class voyage.

A Glimpse into the Future

As Toyota propels into the future with the 2025 4Runner lineup, it not only redefines the boundaries of performance and luxury but also celebrates its enduring legacy. With a nod to its iconic predecessors and a vision for tomorrow's adventures, the new 4Runner embodies the spirit of exploration and innovation. Whether traversing rugged landscapes or navigating city streets, the 2025 Toyota 4Runner stands poised to elevate every journey, beckoning drivers to embark on the road less traveled.
</p>
        </p>
        <Footer/>
    </div>
  )
}

export default Trending