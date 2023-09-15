import Image from 'next/image'
import React from 'react'

type Props = {}

const BestProduct = (props: Props) => {

    const BestShirts = [
        {
            "category": "TSHIRT",
            "name": "Marvel Tshirt",
            "price": 24.99,
            "image": "https://m.media-amazon.com/images/I/61BLTLA33rL._AC_UL400_.jpg"
        },
        {
            "category": "TSHIRT",
            "name": "Naruto Tshirt",
            "price": 39.99,
            "image": "https://m.media-amazon.com/images/I/612OCczgZHL._AC_UL400_.jpg"
        },
        {
            "category": "TSHIRT",
            "name": "Wings Of Freedom",
            "price": 29.95,
            "image": "https://m.media-amazon.com/images/I/71vLt2XyihL._AC_UL400_.jpg"
        },
        {
            "category": "HOODIE",
            "name": "Pack Of Three Plain Hoodie",
            "price": 29.95,
            "image": "https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_UL400_.jpg"
        },
        {
            "category": "TSHIRT",
            "name": "The Boys Tshirt",
            "price": 29.95,
            "image": "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_UL400_.jpg"
        }
    ]


    return (
        <div className='mt-16 container mx-auto'>
            <div className='mb-7 w-[17rem] lg:w-[19rem] mx-auto lg:mx-0'>
                <h1 className='font-bold text-2xl lg:text-3xl text-center'>Bestselling Products</h1>
                <div className='h-[5px] w-20 bg-pink-500 rounded'></div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-x-8 items-center md:flex-wrap justify-center '>
                {BestShirts.map((dt, index) =>
                    <div key={index} className='bg-white w-[17rem] lg:w-[18rem] my-3 shadow-xl rounded-lg'>
                        <Image className='h-96 md:px-6 object-center object-cover' src={dt.image} width={500} height={500} alt='product' />
                        <div className='px-6 py-4'>
                            <h1 className='text-gray-400 font-bold text-xs mb-2'>{dt.category}</h1>
                            <h2 className='font-bold mb-2 dark:text-gray-100'>{dt.name}</h2>
                            <h2 className='flex flex-row justify-between items-center mb-2'>{dt.price}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BestProduct