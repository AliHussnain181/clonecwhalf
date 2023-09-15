"use client"
import axios from 'axios';
import React, { useState } from 'react';

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
            const response = await axios.post('http://localhost:3000/api/addp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    theme,
                    size,
                    colour,
                    price,
                    highlights,
                    name,
                    description,
                    tags,
                    category,
                    images
                })
            });

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
        setImages('');
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
                        {Theme.map((option, i) => (
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
                        {sizes.map((option, i) => (
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
                        {categories.map((option, i) => (
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
                        {Colors.map((option, i) => (
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
