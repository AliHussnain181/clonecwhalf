

const upload: Multer = multer({ dest: '/tmp' });

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        await upload.array('images')(req, res);

        const { theme, size, colour, price, highlights, name, description, tags } = req.body;
        const images = [];

        // Handle image uploads to Cloudinary
        const imageUploadPromises = req.files.map((file: Express.Multer.File) =>
            cloudinary.uploader.upload(file.path)
        );

        if (imageUploadPromises.length > 0) {
            const uploadedImages = await Promise.all(imageUploadPromises);

            uploadedImages.forEach((uploadedImage) => {
                images.push(uploadedImage.secure_url);
            });
        }

        // Connect to the MongoDB database
        await connectDb();

        // Create a new product document using Mongoose
        const product = new Product({
            theme,
            size,
            colour,
            price,
            highlights,
            name,
            description,
            tags,
            images,
        });

        await product.save();

        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

        // const body = await req.json();













        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!validateForm()) {
                return;
            }
    
            const formData = new FormData();
            formData.append('theme', theme);
            formData.append('size', size);
            formData.append('colour', colour);
            formData.append('price', price);
            formData.append('highlights', highlights);
            formData.append('name', name);
            formData.append('description', description);
            formData.append('tags', tags);
            images.forEach((image) => {
                formData.append('images', image);
            });
    
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
    
            try {
                const response = await axios.post('http://localhost:3000/api/addp', formData, config);
    
                console.log(response.data);
                // Handle the response as needed
            } catch (error) {
                console.error(error);
                // Handle the error
            }
    
            // Clear form fields
            setTheme('');
            setSize('');
            setColour('');
            setPrice('');
            setHighlights('');
            setName('');
            setDescription('');
            setTags('');
            setImages([]);
            setErrors([]);
        };










        export async function POST(req: Request) {
            try {
              const body = await req.json();
          
              const {
                theme,
                size,
                colour,
                price,
                highlights,
                name,
                description,
                tags,
                images: imageArray, // <-- updated the type of images to Array
              } = body;
          
              console.log('images:', imageArray);
        
              connectDb();
          
              // Upload images to Cloudinary
              const uploadedImages = await Promise.all(
                imageArray.map(async (image: any) => {
                  const result = await cloudinary.v2.uploader.upload(image, {
                    folder: 'product-images', // optional: provide a folder name in your Cloudinary account
                  });
                  return result.secure_url;
                })
              );
          
              // Create the product with all data
              const product = await Product.create({
                theme,
                size,
                colour,
                price,
                highlights,
                name,
                description,
                tags,
                images: uploadedImages,
              });
          
              return NextResponse.json({
                success: true,
                message: 'Product Created Successfully',
                product,
              });
            } catch (error) {
              return NextResponse.json({
                success: false,
                message: 'Error creating product',
                error
              });
            }
          }
















          import React from 'react'

type Props = {}

const Carasoul = (props: Props) => {

    const images = [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbWVyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1681276159290-29989388a728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbWVyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBjb21lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ]

    return (
        <div className='overflow-x-hidden'>
            <div className="my-32 w-[98vw] h-[100vh] mx-auto  overflow-x-auto whitespce-nowrap bg-red-100">
                <div className="flex overflow-x-hiden">
                    {
                        images.map((img, index) =>
                                <img key={index} className="w[100%] h-[80vh] object-cover bg-slate-400 " src={img} alt="ck" />
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default Carasoul






















"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import { BiFilterAlt } from "react-icons/bi"
import { RxCrossCircled } from "react-icons/rx"

type Props = {}

const Tshirts = (props: Props) => {

    const Shirts = [
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

    const [filter, setFilter] = useState(false)

    const filterOpen = () => {
        setFilter(!filter)
    }



    return (
        <>
            <div className='my-32 w-[80%] mx-auto text-center'>
                <div className='absolute right-3 top-28 text-pink-600 cursor-pointer'>
                    <BiFilterAlt size={40} onClick={filterOpen} />
                </div>
                <h1 className='font-semibold m-2 mb-4 text-2xl md:text-4xl text-center capitalize'>Explore Our Tshirts Collection</h1>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tighter mb-3'>Welcome to Codeswear.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
                <div className='w-full my-10 md:flex md:flex-wrap md:justify-center sm:gap-x-4'>
                    {Shirts.map((dt, index) =>
                        <div className='w-[18rem] lg:w-[16rem] xl:w-[15rem] h-[34rem] md:h-[32rem] my-4 shadow-lg hover:shadow-xl rounded-lg' key={index}>
                            <Image className='h-96 w-[17.4rem] lg:w-full md:h-80 mx-auto' src={dt.image} width={500} height={500} alt='product' />
                            <div className='px-6 py-4'>
                                <div className='text-gray-400 font-bold text-xs flex mb-2'>{dt.category}</div>
                                <div className='font-bold mb-2 flex'>{dt.name}</div>
                                <div className='flex flex-row justify-between items-center mb-2'>
                                    <div className="flex justify-start flex-wrap">
                                        <div className="w-3 h-3 border shadow-inner bg-indigo-900 rounded-full"></div>
                                        <div className="w-3 h-3 border shadow-inner bg-black rounded-full"></div>
                                    </div>
                                    <div className='text-base font-semibold'>{dt.price}</div>
                                </div>
                                <div className='flex space-x-1'>
                                    <div className='inline-block box-border border-2 p-2 text-base'>S</div>
                                    <div className='inline-block box-border border-2 p-2 text-base'>M</div>
                                    <div className='inline-block box-border border-2 p-2 text-base'>L</div>
                                    <div className='inline-block box-border border-2 p-2 text-base'>XL</div>
                                    <div className='inline-block box-border border-2 p-2 text-base'>XXL</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div></div>
            </div>
            <div className={`w-full h-auto bg-white z-[999] absolute ${filter ? 'translate-y-0' : '-translate-y-[170vh]'}  top-0 shadow-xl `}>
                <div className='flex justify-between items-center mx-auto mt-7 w-[87%] border-black border-b-2 pb-4'>
                    <h1 className='text-4xl font-semibold'>Filter</h1>
                    <RxCrossCircled className='cursor-pointer' onClick={filterOpen} size={30} />
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Theme</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Anime</label>
                        </div>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Coding</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Combo</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Gaming</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Hacking</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Motivation</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Trending</label>
                        </div>
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Color</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Black</label>
                        </div>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Blue</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Pink</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Red</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Skyblue</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >Pink</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >White</label>
                        </div>
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Size</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >S</label>
                        </div>
                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >M</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >L</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >XL</label>
                        </div>                        <div className='flex items-center mx-6 my-1'>
                            <input className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                            <label className='ml-2 text-[15px] md:text-base font-medium' >XXL</label>
                        </div>
                    </div>
                    <button className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-4 my-4' >Apply Filter</button>
                </div>
            </div>
        </>
    )
}

export default Tshirts












"use client"
import axios from 'axios';
import React, { useState } from 'react';

type ImageFile = File & {
    preview: string;
};

const AddProductForm: React.FC = () => {
    const [theme, setTheme] = useState('');
    const [size, setSize] = useState('');
    const [colour, setColour] = useState('');
    const [price, setPrice] = useState('');
    const [highlights, setHighlights] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');
    const [errors, setErrors] = useState<string[]>([]);




    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const result = await fetch('http://localhost:3000/api/addp', {
                method: 'post',
                body: JSON.stringify({
                    theme,
                    size,
                    colour,
                    price,
                    highlights,
                    name,
                    description,
                    tags,
                    images
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            
            let res = await result.json();
            return res

        } catch (error) {
            console.error(error);
        }

        // Clear form fields
        setTheme('');
        setSize('');
        setColour('');
        setPrice('');
        setHighlights('');
        setName('');
        setDescription('');
        setTags('');
        setImages('');
        setCategory('');
        setErrors([]);
    };

    const validateForm = () => {
        let formIsValid = true;
        const errors: string[] = [];

        if (!theme.trim()) {
            errors.push('Theme is required');
            formIsValid = false;
        }

        if (!size.trim()) {
            errors.push('Size is required');
            formIsValid = false;
        }
        if (!colour.trim()) {
            errors.push('colour is required');
            formIsValid = false;
        }
        if (!price.trim()) {
            errors.push('price is required');
            formIsValid = false;
        }
        if (!highlights.trim()) {
            errors.push('highlights is required');
            formIsValid = false;
        }
        if (!name.trim()) {
            errors.push('name is required');
            formIsValid = false;
        }
        if (!description.trim()) {
            errors.push('description is required');
            formIsValid = false;
        }
        if (!tags.trim()) {
            errors.push('tags is required');
            formIsValid = false;
        }

        // Add more validation rules for other fields

        setErrors(errors);
        return formIsValid;
    };

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const categories = ["Tshirts", "Sweatshirts", "Hoodies", "Mugs", "Mousepads", "Caps", "Zipper Hoodies"];


    const Colors = ["Black",

        "Blue",

        "Pink",

        "Red",

        "Skyblue",

        "Pink",

        "White",
        "Other"
    ]

    const Theme = [
        "Anime",

        "Coding",

        "Combo",

        "Gaming",

        "Hacking",

        "Motivation",

        "Trending",
        "Other"
    ]


    return (
        <div className="max-w-xl mx-auto my-40">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 font-medium text-gray-700">
                        Theme:
                    </label>
                    <select
                        id="size"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.includes('Size is required') ? 'border-pink-500' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select size</option>
                        {Theme.map((option,i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 font-medium text-gray-700">
                        Size:
                    </label>
                    <select
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.includes('Size is required') ? 'border-pink-500' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select size</option>
                        {sizes.map((option,i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 font-medium text-gray-700">
                        Category:
                    </label>
                    <select
                        id="size"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.includes('Size is required') ? 'border-pink-500' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select Category</option>
                        {categories.map((option,i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="size" className="block mb-2 font-medium text-gray-700">
                        Colors:
                    </label>
                    <select
                        id="size"
                        value={colour}
                        onChange={(e) => setColour(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.includes('Size is required') ? 'border-pink-500' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select size</option>
                        {Colors.map((option,i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium text-gray-700">
                        Price:
                    </label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="highlights" className="block mb-2 font-medium text-gray-700">
                        Highlights:
                    </label>
                    <textarea
                        id="highlights"
                        value={highlights}
                        onChange={(e) => setHighlights(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Product Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
                        Product Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tags" className="block mb-2 font-medium text-gray-700">
                        Product Tags:
                    </label>
                    <input
                        id="tags"
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="images" className="block mb-2 font-medium text-gray-700">
                        Product Images src:
                    </label>
                    <input
                        id="images"
                        type="text"
                        onChange={(e) => setImages(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none"
                    />
                </div>
                {errors.length > 0 && (
                    <div className="mb-4">
                        <ul className="list-disc list-inside text-red-700">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="inline-block px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;















"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { FcClearFilters } from 'react-icons/fc';

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
    const [color, setColor] = useState('')
    const [size,setSize] = useState('')

    console.log(themes);


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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);


    const applyFilter = () => {
       console.log("check");
       
    };



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
                        {data.map((dt, index) =>
                            <div className='w-[full] lg:w-[16rem] xl:w-[15rem] h-[34rem] md:h-[32rem] my-4 shadow-lg hover:shadow-xl rounded-lg' key={index}>
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
                            {Themes.map((theme,index) =>
                                <div key={index} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setThemes(e.target.value) }} value={theme} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Color</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Colors.map((cl) =>
                                <div key={cl} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setColor(e.target.value) }} value={cl}  className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Size</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Sizes.map((si) =>
                                <div key={si} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setSize(e.target.value) }} value={si}   className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                                </div>
                            )}
                        </div>
                        <button className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-4 my-4' >Apply Filter</button>
                    </div>
                </div>
            </div>
            {/* its filter bar that hide and show for small screens */}
            <div className={`w-full h-auto bg-white z-[999] absolute ${filter ? 'translate-y-0' : '-translate-y-[170vh]'}  top-0 shadow-xl `}>
                <div className='flex justify-between items-center mx-auto mt-7 w-[87%] border-black border-b-2 pb-4'>
                    <h1 className='text-4xl font-semibold'>Filter</h1>
                    <RxCrossCircled className='cursor-pointer' onClick={filterOpen} size={30} />
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Theme</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Themes.map((theme,index) =>
                            <div key={index} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setThemes(e.target.value) }} value={theme}  className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Color</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Colors.map((cl) =>
                            <div key={cl} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setColor(e.target.value) }} value={cl}  className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Size</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Sizes.map((si) =>
                            <div key={si} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setSize(e.target.value) }} value={si} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                            </div>
                        )}
                    </div>
                    <button  className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-4 my-4' >Apply Filter</button>
                </div>
            </div>
        </>
    )
}

export default Tshirts
























































"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { FcClearFilters } from 'react-icons/fc';

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
    // const [filteredData, setFilteredData] = useState<ProductData[]>([]);

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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    // const applyFilter = () => {
        const filteredData = data.filter((item) => {
            return (
                (item.theme === themes) ||
                (item.colour === color) ||
                (item.size === size)
            );
        });
        // setFilteredData(filteredData);

    // };


    // Use the filtered data if available, otherwise, use the original data
    // const productsToDisplay = filteredData.length > 0 ? filteredData : data;

    // console.log(productsToDisplay);


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
                       
                          {  filteredData.map((dt, index) =>
                                <div className='w-[full] lg:w-[16rem] xl:w-[15rem] h-[34rem] md:h-[32rem] my-4 shadow-lg hover:shadow-xl rounded-lg' key={index}>
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
                            {Themes.map((theme, index) =>
                                <div key={index} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setThemes(e.target.value) }} value={theme} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Color</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Colors.map((cl) =>
                                <div key={cl} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setColor(e.target.value) }} value={cl} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[70%] mx-auto mt-4'>
                        <h1 className='text-xl font-bold mb-5'>Size</h1>
                        <div className='flex my-2 capitalize flex-wrap flex-col'>
                            {Sizes.map((si) =>
                                <div key={si} className='flex items-center mx-6 my-1'>
                                    <input onChange={(e) => { setSize(e.target.value) }} value={si} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                    <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                                </div>
                            )}
                        </div>
                        <button  className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-4 my-4' >Apply Filter</button>
                    </div>
                </div>
            </div>
            {/* its filter bar that hide and show for small screens */}
            <div className={`w-full h-auto bg-white z-[999] absolute ${filter ? 'translate-y-0' : '-translate-y-[170vh]'}  top-0 shadow-xl `}>
                <div className='flex justify-between items-center mx-auto mt-7 w-[87%] border-black border-b-2 pb-4'>
                    <h1 className='text-4xl font-semibold'>Filter</h1>
                    <RxCrossCircled className='cursor-pointer' onClick={filterOpen} size={30} />
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Theme</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Themes.map((theme, index) =>
                            <div key={index} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setThemes(e.target.value) }} value={theme} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{theme}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Color</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Colors.map((cl) =>
                            <div key={cl} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setColor(e.target.value) }} value={cl} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{cl}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-4'>
                    <h1 className='text-xl font-bold mb-5'>Size</h1>
                    <div className='flex my-2 capitalize flex-wrap flex-col'>
                        {Sizes.map((si) =>
                            <div key={si} className='flex items-center mx-6 my-1'>
                                <input onChange={(e) => { setSize(e.target.value) }} value={si} className="w-4 h-4 text-pink-600 bg-gray-100 rounded border-gray-300 focus:ring-pink-500 " type="checkbox" />
                                <label className='ml-2 text-[15px] md:text-base font-medium' >{si}</label>
                            </div>
                        )}
                    </div>
                    <button className='whitespace-nowrap text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm md:text-base px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mx-4 my-4' >Apply Filter</button>
                </div>
            </div>
        </>
    )
}

export default Tshirts




