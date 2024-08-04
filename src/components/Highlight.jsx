import React from 'react'

export const Highlight = () => {
    return (
        <div className='flex gap-10'>
            <h1 className='text-4xl font-extrabold'>The Bright Future of Web 3.0?</h1>
            <div className='flex flex-col justify-between'>
            <p className='text-sm text-color-dark-grayish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?</p>
            <button className='bg-color-very-dark-blue text-color-off-white uppercase text-xs px-6 py-3 tracking-[3px] mr-auto'>Read more</button>
            </div>
        </div>
    )
}
