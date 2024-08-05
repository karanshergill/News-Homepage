import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { New } from './New'
import { Featured } from './Featured'

export const Home = () => {
  return (
    <div className='flex flex-col w-full desktop:max-w-5xl md:gap-12 dektop:gap-12 md:my-12 dektop:my-12'>
      <Navigation />
      <div className='grid desktop:grid-cols-3 md:gap-8 desktop:gap-8'>
        <div className='md:col-span-2 desktop:col-span-2'>
          <picture>
            <source srcSet="/src/assets/images/image-web-3-desktop.jpg" media="(min-width: 1440px)" />
            <img src="/src/assets/images/image-web-3-mobile.jpg" alt="Web 3" className="w-full h-auto" />
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
