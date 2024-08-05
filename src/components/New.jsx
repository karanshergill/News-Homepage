export const New = () => {
    return (
        <div className='flex flex-col p-8 gap-2 bg-color-very-dark-blue'>
            <h1 className='text-4xl font-semibold text-color-soft-orange'>New</h1>

            <div className='flex flex-col gap-2 border-b-2 border-color-dark-grayish-blue my-4 pb-6'>
                <h5 className='font-bold text-color-off-white hover:text-color-soft-orange cursor-pointer'>Hydrogen VS Electric Cars</h5>
                <p className='text-xs text-color-grayish-blue'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div className='flex flex-col gap-2 border-b-2 border-color-dark-grayish-blue mb-4 pb-6'>
                <h5 className='font-bold text-color-off-white hover:text-color-soft-orange cursor-pointer'>The Downsides of AI Artistry</h5>
                <p className='text-xs text-color-grayish-blue'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='font-bold text-color-off-white hover:text-color-soft-orange cursor-pointer'>Is VC Funding Drying Up?</h5>
                <p className='text-xs text-color-grayish-blue'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>

        </div>
    )
}
