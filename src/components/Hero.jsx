export const Hero = () => {
    return (
        <div className='flex flex-col gap-4 mt-4 md:flex-row desktop:flex-row md:gap-8 desktop:gap-8 md:mt-6 desktop:mt-6'>
            <h1 className='text-5xl font-extrabold'>The Bright Future of Web 3.0?</h1>
            <div className='flex flex-col justify-between gap-4 md:ml-8 md:gap-8 desktop:ml-8 desktop:gap-8'>
                <p className='text-default text-color-dark-grayish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?</p>
                <button className='uppercase text-xs font-bold px-6 py-3 tracking-[3px] mr-auto bg-color-soft-red text-color-very-dark-blue hover:bg-color-very-dark-blue hover:text-color-off-white'>Read more</button>
            </div>
        </div>
    )
}
