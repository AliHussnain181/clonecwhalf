import Image from 'next/image'
import React from 'react'

type Props = {}

const Themes = (props: Props) => {

    const images = [
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Fanime.webp&w=1920&q=75",
            name: "CAPS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Fcombooffers.webp&w=1920&q=75",
            name: "HOODIES"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Fcustomized.webp&w=1920&q=75",
            name: "MOUSE PAD"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Ffitness.webp&w=1920&q=75",
            name: "MUGS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Fgaming.webp&w=1920&q=75",
            name: "OVERSIZED T-SHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Flifestyle.webp&w=1920&q=75",
            name: "POLO T-SHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Fprogramming.webp&w=1920&q=75",
            name: "SWEATSHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fthemes%2Ftrending.webp&w=1920&q=75",
            name: "T-SHIRTS"
        }
    ]

    return (
        <div className='md:w-[80%] mx-auto lg:w-[90%] xl:w-[93%] mt-6 '>
            <div className='text-center font-bold text-3xl'>Themes</div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-wrap xl:justify-center mx-4 gap-x-8 mt-11 lg:mt-9 sm:mx-12 md:mx-5 xl:mx-auto '>
                {images.map((dt, index) =>
                    <div key={index} className='w-full xl:w-[31%]'  >
                        <Image className='rounded-md my-5 object-center object-cover hover:scale-[1.06] transition-all duration-200' width={1000} height={1000} src={dt.img} alt='ig' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Themes