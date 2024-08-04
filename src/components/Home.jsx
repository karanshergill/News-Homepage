import React from 'react'
import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { New } from './New'
import { Highlight } from './Highlight'

export const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-12 justify-center items-center'>
      <Navigation />
      <div className='flex gap-6 w-2/3'>
        <div className='flex flex-col gap-6'>
        <Hero />
        <Highlight />
        </div>
        <New />
      </div>
    </div>
    )
}
