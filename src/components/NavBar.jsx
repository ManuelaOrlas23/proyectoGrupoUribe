import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { TbHandClick } from 'react-icons/tb';
import Login from './layouts/auth/Login';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick (!click);
    
    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
        <ul className='text-center text-xl p-20'>
            <Link  to= "/">
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white'>Home</li>
            </Link>
            <Link  to= "/Americaneagle">
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white'>American Eagle</li>            
            </Link>
            <Link  to= "/Chevignon">
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white'>Chevignon</li>
            </Link>
            <Link  to= "/Esprit">
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white'>Esprit</li>
            </Link>
            <Link  to= "/Gstarraw">
            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white'>Gstar Raw</li>
            </Link>

        </ul>
    </div>

    </>
    return (
        <nav>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                <span className='text 3x1 font-bold' > ALL BRANDS STORES </span>
                </div>
            <div className='lg:flex md:flex lg: flex-1 items center justify-end font-nomal hidden'>
                <div className='flex-10'>
                <ul className='flex gap-8 mr-16 text-[18px] '>
            <Link  to= "/">
            <li className='hover:text-sky-600 transition border-b-2 border-slate-900 hover:border-sky-600 cursor-pointer'>Home</li>
            </Link>
            <Link  to= "/Americaneagle">
            <li className='hover:text-sky-600 transition border-b-2 border-slate-900 hover:border-sky-600 cursor-pointer'>American Eagle</li>            
            </Link>
            <Link  to= "/Chevignon">
            <li className='hover:text-sky-600 transition border-b-2 border-slate-900 hover:border-sky-600 cursor-pointer'>Chevignon</li>
            </Link>
            <Link  to= "/Esprit">
            <li className='hover:text-sky-600 transition border-b-2 border-slate-900 hover:border-sky-600 cursor-pointer'>Esprit</li>
            </Link>
            <Link  to= "/Gstarraw">
            <li className='hover:text-sky-600 transition border-b-2 border-slate-900 hover:border-sky-600 cursor-pointer'>Gstar Raw</li>
            </Link>

        <div className='cursor-pointer'>

        <Link to="/comprar">
        <FaCartArrowDown />
        </Link>
        </div>

        <div className='cursor-pointer'>
        <Link to="/Login">
        <FaUserAlt />
        
        </Link>
        </div>

        </ul>
            </div>
                </div>
            <div>
                {click && content}
            </div>
            <button className='block sm:hidden transtion' onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries /> }
            </button>
            </div>
        </nav>
    )
}


export default NavBar