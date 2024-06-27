import React from 'react';
import logo from '../assets/Logos.png';
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[100px] flex items-center px-[60px] justify-between shadow'>
      <div>
        <img src={logo} alt="" />
        </div>
      <div className='flex justify-between w-[400px] '>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className='flex w-[250px] justify-between'>
        <FaRegUser className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer ' />
        <FaSearch className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer ' />
        <FaRegHeart className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer ' />
        <CiShoppingCart className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer ' />
      </div>

    </nav>
  )
}

export default Navbar
