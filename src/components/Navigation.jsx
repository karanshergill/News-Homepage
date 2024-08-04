import React from 'react'

export const Navigation = () => {
  return (
      <nav className='flex items-center justify-between w-2/3'>
          <img src="/src/assets/images/logo.svg" alt="Logo" />
          <ul className='flex gap-8 text-sm text-color-dark-grayish-blue'>
              <li className='hover:text-color-soft-orange cursor-pointer'>Home</li>
              <li className='hover:text-color-soft-orange cursor-pointer'>New</li>
              <li className='hover:text-color-soft-orange cursor-pointer'>Popular</li>
              <li className='hover:text-color-soft-orange cursor-pointer'>Trending</li>
              <li className='hover:text-color-soft-orange cursor-pointer'>Categories</li>
          </ul>  
      </nav>
  )
}
