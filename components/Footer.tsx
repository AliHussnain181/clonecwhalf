import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="text-gray-600 bg-[#F1F5F9] mt-40 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                       <Image className='w-56' src='/main.png' alt='ftr' width={300} height={300} />
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Wear the <code /></p><p> Premium coding tshirts, hoodies and apparals</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">T-Shirts</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Sweatshirts</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Zipper Hoodies</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Return Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center m-auto">
                        <Image src="https://codeswear.com/pay.png" alt='pat' width={300} height={300} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer