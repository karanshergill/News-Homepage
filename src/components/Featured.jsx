import featuredOne from "../assets/image-retro-pcs.jpg";
import featuredTwo from "../assets/image-top-laptops.jpg";
import featuredThree from "../assets/image-gaming-growth.jpg";

export const Featured = () => {
    return (
        <div className='grid gap-8 desktop:grid-cols-3 md:grid-cols-3'>
            <div className='flex gap-4'>
                <img src={featuredOne} className="md:w-24 h-24" alt="Retro PCs" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-extrabold tracking-wider text-color-soft-red'>01</h1>
                    <h2 className='font-extrabold'>Reviving Retro PCs</h2>
                    <p className='text-xs text-color-dark-grayish-blue'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <img src={featuredTwo} className='md:w-24 h-24' alt="Top Laptops" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-extrabold tracking-wider text-color-soft-red'>02</h1>
                    <h2 className='font-bold'>Top 10 Laptops of 2022</h2>
                    <p className='text-xs text-color-dark-grayish-blue'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <img src={featuredThree} className='md:w-24 h-24' alt="Gaming Growth" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-extrabold tracking-wider text-color-soft-red'>03</h1>
                    <h2 className='font-bold'>The Growth of Gaming</h2>
                    <p className='text-xs text-color-dark-grayish-blue'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}
