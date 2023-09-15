import Image from 'next/image'
import React from 'react'

type Props = {}

const Collections = (props: Props) => {

    const images = [
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fcaps.webp&w=1920&q=75",
            name: "CAPS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fhoodie.webp&w=1920&q=75",
            name: "HOODIES"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fmousepad.webp&w=1920&q=75",
            name: "MOUSE PAD"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fmugs.webp&w=1920&q=75",
            name: "MUGS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Foversizedtshirt.webp&w=1920&q=75",
            name: "OVERSIZED T-SHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fpolotshirts.webp&w=1920&q=75",
            name: "POLO T-SHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fsweatshirt.webp&w=1920&q=75",
            name: "SWEATSHIRTS"
        },
        {
            img: "https://codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Ftshirt.webp&w=1920&q=75",
            name: "T-SHIRTS"
        }
    ]

    return (
        <div className='md:w-[80%] mx-auto lg:w-[90%] xl:w-[93%] '>
            <div className='text-center font-bold text-3xl'>Collections</div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-wrap xl:justify-center mx-4 gap-x-8 mt-11 lg:mt-9 sm:mx-12 md:mx-5 xl:mx-auto '>
                {images.map((dt,index) =>
                <div key={index} className='w-full xl:w-[31%] '  >
                    <Image className='rounded-sm hover:rounded-md my-5 hover:scale-[1.06] object-center object-cover transition-all duration-200' width={1000} height={1000} src={dt.img} alt='ig' />
                </div>
                 )}
            </div>
        </div>
    )
}

export default Collections