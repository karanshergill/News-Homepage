import React from 'react'

export const Navigation = () => {
  return (
      <nav className='flex items-center justify-between w-3/4'>
          <img src="/src/assets/images/logo.svg" alt="Logo" />
          <ul className='flex gap-8'>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
          </ul>  
      </nav>
  )
}
