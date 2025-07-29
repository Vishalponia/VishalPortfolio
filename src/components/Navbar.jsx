import React, { useState } from 'react'
import pic from"../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseCircleSharp, IoCloseOutline, IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"
import photo from "../../public/Vishal.jpeg"

const Navbar = () => {
    const [menu,setMenu] = useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
         {
            id:2,
            text:"About"
        },
         {
            id:3,
            text:"Portfolio"
        },
         {
            id:4,
            text:"Experiance"
        },
         {
            id:5,
            text:"Contacts"
        },
    ]
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed bg-white top-0 left-0 right-0'>
       <div className='flex justify-between items-center h-16'>
             <div className=' flex space-x-2 '>
                <img src={photo} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                    Visha<span className='text-green-500 text-2xl'>l </span>
                     <span className='text-red-500 text-2xl'>Ponia</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
             </div>
             <div>
                {/* desktop navbar */}  
                <ul className='  hidden  md:flex  space-x-8'>
                    {
                        navItems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-100 cursor-pointer' key={id}>
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                
                                > {text}</Link>
                                </li>
                        
                        ))
                    }
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Experiance</li>
                    <li>Contacts</li>  onClick={()=>setMenu(!menu)} className='md:hidden'
                </ul> */}
                </ul>
                <div  onClick={()=>setMenu(!menu)} className='md:hidden'
                > {menu?(<IoCloseSharp size={24}/>):(<AiOutlineMenu size={24}/>)}
                    {/* AioutlineMenu and IoCloseSharp */}
                </div>
                
             </div>
       </div>
       {menu &&(
       <div className='bg-white'>
        {/* mobile navbar */}
           <ul className=' sd:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl'>
                    {
                        navItems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-300 cursor-pointer font-bold' key={id}>
                                  <Link 
                                   onClick={()=>setMenu(!menu)}
                                  to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                spy={true}
                                >{text}</Link>  
                                
                                </li>
                        
                        ))
                    }
                    
                    
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Experiance</li>
                    <li>Contacts</li>  */}

           </ul>
       </div>
       )}
    </div>
   </>
  )
}

export default Navbar