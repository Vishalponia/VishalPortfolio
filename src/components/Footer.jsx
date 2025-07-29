import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
     <hr />
    <footer className='py-12'>
     <div name="Footer" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className=' flex  flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com/" target='_blank'>  <  FaFacebook size={24}/></a>
               <a href="https://www.linkedin.com/" target='_blank'> <FaLinkedin size={24}/></a>
               <a href="https://www.twitter.com/" target='_blank'> <FaTwitter size={24}/></a>
               <a href="https://www.instagram.com/" target='_blank'> <FaInstagram size={24}/></a>
            </div>
            <div className='mt-8  border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p>&copy: 205 Your Company. All rights reserved</p>
                <p className='flex flex-col text-centre'>Suportive Partner  Chatgpt</p>
            </div>
        </div>

     </div>
   </footer> 
   
    </>
  )
}

export default Footer