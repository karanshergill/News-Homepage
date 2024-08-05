import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { New } from './New'
import { Featured } from './Featured'

export const Home = () => {
  return (
    <div className='flex flex-col w-full my-8 mx-6 desktop:max-w-5xl md:gap-8 dektop:gap-8 md:my-10 dektop:my-10'>
      <Navigation />
      <div className='grid desktop:grid-cols-3 gap-8 mt-6 md:mt-0 desktop:mt-0'>
        <div className='md:col-span-2 desktop:col-span-2'>
          <picture>
            <source srcSet="../assets/image-web-3-desktop.jpg" media="(min-width: 1440px)" />
            <img src="../assets/image-web-3-mobile.jpg" alt="Web 3" className="w-full h-auto" />
          </picture>
          <Hero />
        </div>
        <New />
        <div className='desktop:col-span-3 md:my-6 desktop:my-6'>
          <Featured />
        </div>
      </div>
    </div>
  )
}
