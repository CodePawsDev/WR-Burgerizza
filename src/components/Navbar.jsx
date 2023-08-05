import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false);


    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* menu bar */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30}/>
                </div>
                <div className="flex flex-col items-end mr-3">
                    <h1 className="text-2xl md:text-3xl px-2 font-bold">
                        Burgerizza
                    </h1>
                    <h3 className="font-bold">& Beyond</h3>
                </div>
                <div className="hidden md:flex items-center bg-gray-400 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            {/* search bar */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[320px]">
                <AiOutlineSearch size={20}/>
                <input type="text" placeholder="Search foods" className="bg-transparent p-2 w-full focus:outline-none"/>
            </div>
            {/* cart button */}
            <button className="bg-black text-white hidden md:flex items-center justify-center py-2 rounded-full w-[90px]">
                <BsFillCartFill size={20} className="mr-2"/> Cart
            </button>

            {/* Mobile Menu */}
            {/* overlay */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
            </div> : ""}

            {/* side drawer mune */}
            <div className={ nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" }>
                <AiOutlineClose 
                    onClick={()=>setNav(!nav)}
                    size={30} 
                    className="absolute right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl font-bold pl-4 mt-3">Burgerizza</h2>
                <h4 className="font-bold pl-4">& Beyond</h4>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" />Favorites</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" />Wallet</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" />Help</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" />Promotions</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" />Best One</li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-700">
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
                    </ul>
                </nav>

            </div>



        </div>
    )
}

export default Navbar;