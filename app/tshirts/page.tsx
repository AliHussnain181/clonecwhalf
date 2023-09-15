"use client"
import React, { useEffect, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { FcClearFilters } from 'react-icons/fc';
import Image from 'next/image';

type Props = {};

interface ProductData {
    _id: string;
    theme: string;
    size: string;
    colour: string;
    price: number;
    highlights: string;
    name: string;
    description: string;
    tags: string;
    category: string;
    images: string;
}

const Tshirts: React.FC<Props> = () => {
    const Colors: string[] = ['Black', 'Blue', 'Pink', 'Red', 'Skyblue', 'Pink', 'White'];
    const Themes: string[] = ['Anime', 'Coding', 'Combo', 'Gaming', 'Hacking', 'Motivation', 'Trending'];
    const Sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

    const [filter, setFilter] = useState(false);
    const [data, setData] = useState<ProductData[]>([]);
    const [themes, setThemes] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [productsFound, setProductsFound] = useState(true);

    const filterOpen = () => {
        setFilter(!filter);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products?category=Tshirts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setData(jsonData);
                setProductsFound(jsonData.length > 0);
            } catch (error) {
                console.error('Error fetching data:', error);
                setProductsFound(false);
            }
        };
        getData();
    }, []);

    const applyFilters = () => {
        const filteredData = data.filter((item) => {
            return (
                (themes === '' || item.theme === themes) &&
                (color === '' || item.colour === color) &&
                (size === '' || item.size === size)
            );
        });
        setData(filteredData);
    };

    const filtersApplied = themes !== '' || color !== '' || size !== '';

    return (
        <>
            <div className='flex flex-row-reverse'>
                <div className='my-44 w-[80%]  lg:mt-56 xl:mt-24 mx-auto text-center'>
                    <div className='absolute right-3 top-36 text-pink-600 cursor-pointer block lg:hidden'>
                        <BiFilterAlt size={40} onClick={filterOpen} />
                    </div>
                    <h1 className='font-semibold m-2 mb-4 text-2xl md:text-4xl text-center capitalize'>Explore Our Tshirts Collection</h1>
                    <p className='text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3 xl:w-[70%] xl:mx-auto'>Welcome to Codeswear.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
                    <div className='w-full my-10 md:flex md:flex-wrap md:justify-center items-center sm:gap-x-4'>
                        {productsFound ? (
                            filtersApplied ? (
                                data.map((dt, index) => (
                                    <div
                                        className='w-[full] lg:w-[16rem] xl:w-[15rem] h-[34rem] md:h-[32rem] my-4 shadow-lg hover:shadow-xl rounded-lg'
                                        key={index}
                                    >
                                        <Image className='h-96 w-[17.4rem] lg:w-full md:h-80 mx-auto' src={dt.images} width={500} height={500} alt='product' />
                                        <div className='px-6 py-4'>
                                            <div className='text-gray-400 font-bold text-xs flex mb-2'>{dt.category}</div>
                                            <div className='font-semibold mb-2 line-clamp-1 text-left'>{dt.name}</div>
                                            <div className='flex flex-row justify-between items-center mb-2'>
                                                <div className="flex justify-start flex-wrap">
                                                    <div className="w-3 h-3 border shadow-inner bg-indigo-900 rounded-full"></div>
                                                    <div className="w-3 h-3 border shadow-inner bg-black rounded-full"></div>
                                                </div>
                                                <div className='text-base font-semibold'>{dt.price}</div>
                                            </div>
                                            <div className='flex space-x-1'>
                                                <div className='inline-block box-border border-2 p-2 text-base'>{dt.size}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                data.map((dt, index) => (
                                    <div
                                        className='w-[full] lg:w-[16rem] xl:w-[15rem] h-[34rem] md:h-[32rem] my-4 shadow-lg hover:shadow-xl rounded-lg'
                                        key={index}
                                    >
                                        <Image className='h-96 w-[17.4rem] lg:w-full md:h-80 mx-auto' src={dt.images} width={500} height={500} alt='product' />
                                        <div className='px-6 py-4'>
                                            <div className='text-gray-400 font-bold text-xs flex mb-2'>{dt.category}</div>
                                            <div className='font-semibold mb-2 line-clamp-1 text-left'>{dt.name}</div>
                                            <div className='flex flex-row justify-between items-center mb-2'>
                                                <div className="flex justify-start flex-wrap">
                                                    <div className="w-3 h-3 border shadow-inner bg-indigo-900 rounded-full"></div>
                                                    <div className="w-3 h-3 border shadow-inner bg-black rounded-full"></div>
                                                </div>
                                                <div className='text-base font-semibold'>{dt.price}</div>
                                            </div>
                                            <div className='flex space-x-1'>
                                                <div className='inline-block box-border border-2 p-2 text-base'>{dt.size}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className="text-center mt-4">
                                <p className="text-xl font-bold text-red-500">Products not found.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='h-auto my-32 lg:mt-56 xl:mt-24 w-[20%] hidden lg:block'>
                    <div className='flex justify-between items-center mx-auto mt-7 w-[87%] border-black border-b-2 pb-4'>
                        <h1 className='text-4xl font-semibold'>Filter</h1>
                        <FcClearFilters className='cursor-pointer' size={30} />
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Theme</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Themes.map((theme, index) => (
                                <div key={index} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setThemes(e.target.value) }} value={theme} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Color</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Colors.map((cl) => (
                                <div key={cl} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setColor(e.target.value) }} value={cl} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Size</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Sizes.map((si) => (
                                <div key={si} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setSize(e.target.value) }} value={si} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                                </div>
                            ))}
                        </div>
                        <button className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark-bg-pink-600 dark-hover-bg-pink-700 dark-focus-ring-pink-800 mx-4 my-4' onClick={applyFilters}>Apply Filter</button>
                    </div>
                </div>
            </div>
            <div className={`w-full h-auto bg-white z-[999] absolute ${filter ? 'translate-y-0' : '-translate-y-[170vh]'}  top-0 shadow-xl `}>
                <div className='flex justify-between items-center mx-auto mt-7 w-[87%] border-black border-b-2 pb-4'>
                    <h1 className='text-4xl font-semibold'>Filter</h1>
                    <RxCrossCircled className='cursor-pointer' onClick={filterOpen} size={30} />
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Theme</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Themes.map((theme, index) => (
                            <div key={index} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setThemes(e.target.value) }} value={theme} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Color</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Colors.map((cl) => (
                            <div key={cl} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setColor(e.target.value) }} value={cl} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Size</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Sizes.map((si) => (
                            <div key={si} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setSize(e.target.value) }} value={si} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                            </div>
                        ))}
                    </div>
                    <button className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark-bg-pink-600 dark-hover-bg-pink-700 dark-focus-ring-pink-800 mx-4 my-4' onClick={applyFilters}>Apply Filter</button>
                </div>
            </div>
        </>
    );
}

export default Tshirts;
