"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillHome, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillMoonStarsFill, BsPersonCircle } from "react-icons/bs"
import { HiSearch } from "react-icons/hi"
import { RxCrossCircled } from "react-icons/rx"
import { RiArrowDownSLine } from "react-icons/ri"
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {

  const [menu, setMenu] = useState(false)

  const [search, setSearch] = useState(false)

  const [cart, setCart] = useState(false)

  const menuBar = () => {
    setMenu(!menu)
  }

  const searchBar = () => {
    setSearch(!search)
  }

  const cartBar = () => {
    setCart(!cart)
  }

  return (
    <>
      <div >
        <div className={` py-4 w-full flex flex-col items-center shadow-md text-pink-500 fixed top-0 z-[999] cursor-pointer bg-white lg:hidden `}>
          <div className='flex items-center m-auto'>
            <Image src="/main.png" alt='logo' width={400} height={400} className=' w-[60vw] md:w-60' />
            <GiHamburgerMenu size={30} className='fixed right-1' onClick={menuBar} />
          </div>
          <div className={`w-full flex items-center justify-center text-center ${search ? "block" : "hidden"} ${search ? "mt-10 md:mt-3" : "my-0"}`}>
            <input type="text" placeholder='Search from our 1000+' className=' border-[1px] border-pink-400 outline-none h-9 rounded-md px-2 w-[50%]' />
            <HiSearch className='bg-pink-500 px-[21px] text-white w-16 h-9 ml-4 rounded-md' />
          </div>
        </div>
        <div className={`fixed ${menu ? `${search ? 'top-52' : 'top-[85px]  sm:top-[126px] md:top-[85px] '}` : '-top-[27rem]'} z-[999] lg:z-[0] w-full bg-pink-100 flex flex-col items-center space-y-4 py-4 font-semibold text-pink-500 text-xl shadow-md`}>
          <Link href="/tshirts">T-Shirts</Link>
          <Link href="">Oversized T-Shirts</Link>
          <Link href="">Polo T-Shirts</Link>
          <Link href="">Sweatshirts</Link>
          <Link href="">Hoodies</Link>
          <Link href="">Zipper Hoodies</Link>
          <Link href="">Mugs</Link>
          <Link href="">Caps</Link>
          <Link href="">Mousepads</Link>
        </div>
        <div className={`lg:hidden w-[100vw] md:w-[30vw] h-full bg-pink-100 fixed ${cart ? "translate-x-0" : "translate-x-[100vw]"} top-0 right-0 z-[999] transition-all duration-200`}>
          <div>

          </div>
          <RxCrossCircled onClick={cartBar} size={27} className='cursor-pointer m-11' />
        </div>
      </div>
      <div className={`w-full fixed  bottom-0 h-10 cursor-pointer bg-white   flex items-center justify-center gap-x-[13%] sm:gap-x-[17%] px-5 overflow-hidden lg:hidden`}>
        <AiFillHome size={30} />
        <AiOutlineSearch onClick={searchBar} size={30} />
        <AiOutlineShoppingCart size={30} onClick={cartBar} />
        <BsFillMoonStarsFill size={30} />
        <BsPersonCircle size={30} />
      </div>
      <div className='hidden lg:block fixed top-0 z-[999]'>
        <div className=' w-[100vw] fixed top-0 bg-white flex flex-col justify-center items-center py-2 space-y-6 xl:space-y-0 shadow-lg xl:flex-row xl:m-auto xl:h-20'>
          <Image src="/main.png" alt='logo' className='w-80 xl:w-48 mx-4 ' width={400} height={400} />
          <div className='flex xl:items-center'>
            <input type="text" placeholder='Search from our 1000+' className=' border-[1px] border-gray-300 outline-pink-400 h-10  rounded-sm px-2 w-[45vw] xl:w-[17.5vw] m-auto' />
            <HiSearch className='bg-pink-600 hover:bg-pink-700 px-[21px] text-white w-16 h-10  ml-2 rounded-[4px]' />
          </div>
          <div className='flex xl:ml-12'>
            <div className='space-x-3 xl:space-x-2 flex items-center xl:font-semibold text-base xl:text-[19px]  '>
              <div className='flex items-center hover:text-pink-400'>
                <Link href="/tshirts">Tshirts</Link>
                <RiArrowDownSLine size={25} className='mt-1' />
                {/* <div className='fixed bg-slate-400 w-28 h-28'>

                </div> */}
              </div>
              <Link className='hover:text-pink-400' href="">Hoodies</Link>
              <Link className='hover:text-pink-400' href="">Sweatshirts</Link>
              <Link className='hover:text-pink-400' href="">Mugs</Link>
              <Link className='hover:text-pink-400' href="">Zipper Hoodies</Link>
              <Link className='hover:text-pink-400' href="">Mousepads</Link>
              <Link className='hover:text-pink-400' href="">Caps</Link>
            </div>
            <div className='flex justify-center items-center space-x-3 xl:space-x-4 mx-3 xl:ml-5 text-pink-500 cursor-pointer xl:mr-8'>
              <AiOutlineShoppingCart size={33} onClick={cartBar} />
              <Link className='bg-pink-500 hover:bg-pink-700 text-white px-2 py-1 text-sm rounded-md m-auto' href="">Login</Link>
              <BsFillMoonStarsFill size={27} />
            </div>
          </div>
        </div>
        <div className={`hidden lg:block w-[30vw] h-full bg-pink-100 text-black fixed top-0 ${cart ? "right-0" : "-right-[37rem]"} transition-all duration-200`}>
          <div>

          </div>
          <RxCrossCircled onClick={cartBar} size={30} className='cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default Navbar