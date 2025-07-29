import React from 'react'
import pic from"../../public/photo.avif";
import vishal from "../../public/vishal1.jpeg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import photo from "../../public/Vishal.jpeg"



const Home = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl   container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'> 
        <div className='md:w-1/2 md:mt-24 md-12 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Portfolio</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello,I am a</h1>
        {/* <span font-bold'className='text-red-700 >Developer</span> */}
         <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={150}
          loop={true}
        />
        </div>
        <br/>
        <p className='text-sm md:text-md text-justify'>Motivated and tech-savvy B.Tech graduate with a strong passion for programming, coding, 
          and software development. 
          Skilled in multiple programming languages and eager to apply technical knowledge to real-world challenges.
           Strong foundation in data structures, algorithms, and problem-solving, with hands-on experience through academic projects and personal coding initiatives.
            A quick learner and a team player, committed to continuous improvement and staying updated with the latest technologies.

 </p>
         <br/>
         {/* social media icons */}
         <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
         <div className='space-y-2 '>
            <h1 className='font-bold  '>Available On</h1>
            <ul className='flex space-x-5'>
            <li> <a href="https://www.facebook.com/"target='_blank'><FaFacebook className='text-2xl cursor-pointer'/></a></li>
            <li><a href="https://www.linkedin.com/" target='_blank'> <FaLinkedin className='text-2xl cursor-pointer'/></a></li>
            <li><a href="https://www.youtube.com/" target='_blank'> <AiFillYoutube className='text-2xl cursor-pointer'/></a></li>
            <li><a href="https://t.me/" target='_blank'> <FaTelegram className='text-2xl cursor-pointer'/></a></li>
            </ul>

         </div>
           
           <div>
             <h1 className='font-bold'>Currently working on</h1>
            <ul className='flex space-x-5'>
            <li> <DiMongodb className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
            <li>{" "} <SiExpress className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
            <li>{" "} <FaReact className='text-2xl cursor-pointer md:text-3xl  hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
            <li>{" "} <FaNodeJs className='text-2xl cursor-pointer md:text-3xl  hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
            </ul>


           </div>

        </div>
        </div>
        <div className='md:w-1/2 md:mt-20 md:ml-48 mt-8 order-1'>
           <img src={vishal} className='rounded-full md:w-[450px] h-[450px] ' alt="" />
        </div>
        </div>
    </div>
    
    <hr />
    </>
  )
}

export default Home