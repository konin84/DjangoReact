import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose, AiOutlineSearch} from 'react-icons/ai' 
import { IoIosPersonAdd } from 'react-icons/io';
import { SlBasketLoaded } from 'react-icons/sl';
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [nav, setNav] = useState(false)


  return (
    <div className='max-w-[1640] m-auto flex justify-between items-center p-4'>
      {/* Left side here */}
      <div className='flex items-center'>
          <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
           <Link to='/' >Backend<span className='font-bold'>Frontend</span></Link>
          </h1>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            
            <button 
             className='bg-black text-white rounded-full'>
            
              <Link to='registration'>New Employee</Link> 
              </button>
            <button className='p-2'>
            <Link to='products'>All Products</Link>
            </button>
          
          </div>  
      </div>

      {/* Search Input */}
      <div className='bg-gray rounded-full flex items-center px-2 w-[200] sm:w-[400px] lg:w-[500px]'>
        < AiOutlineSearch  size={20}/>
        <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='Search'/>
      </div>
        {/* Mobile Menu */} 
        {/* Overlay */}
        {
          nav? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" >
          </div>:''
        }
        
        {/* Side drawer menu */}
        <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          <AiOutlineClose size={30} onClick={()=> setNav(!nav)}
          className='absolute right-4 top-4 cursor-pointer' />
          <h2 className='text-2xl p-4'> Backend<span className='font-bold'>Frontend</span>
          </h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800' >
             <li className='text-xl p-4 flex' ><IoIosPersonAdd /><Link to='registration'>New Employee</Link></li> 
              <li className='text-xl p-4 flex'><SlBasketLoaded /><Link to='products'>All Products</Link></li>
            </ul>
          </nav>

        </div>
        
    </div>

   
   
  )
}

export default NavBar