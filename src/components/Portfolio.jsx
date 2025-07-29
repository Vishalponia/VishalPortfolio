import React from 'react' 


import express from"../../public/express.png"
import mongodb from"../../public/mongodb.jpg"
import java from "../../public/java.png"
import reactjs from"../../public/reactjs.png"
import node from"../../public/node.png"
import python from "../../public/python.webp"
const Portfolio = () => {
   const  cardItem=[
    {
      id:1,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:node.js,
      name:"NodeJS"
    },
    {
      id:4,
      logo:python,
      name:"Python"
    },
    {
      id:5,
      logo:reactjs,
      name:"Reactjs"
    },
    {
      id:6,
      logo:java,
      name:"Java"
    },
   ]
  return (
    <>
  
    <div name="Portfolio" className='max-w-screen-2xl  container mx-auto px-4 md:px-20  mt:10 mb-10' >
      <div>
     <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
     <span className='underline font-semibold'>Project & Skills</span>
     <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
       {
        cardItem.map(({id,logo,name}) => (
          <div className='md:w-[300px] md:h-[300px] border-gray-700  ronded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
               <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full ' alt=""/>  
               <div>
                <div className=' px-2font-bold text-xl mb-2'>{name}</div>
                <p className='px-2 text-gray-700'>Lorem ipsum nsectetur  s consectetur .</p>
                </div>  
                <div className='justify-around px-6 py-4 space-x-3'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'> <a href="https://www.youtube.com" target='_blank'>Video</a></button>
                  <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded'>Source code</button>
                  </div>    
          </div>
        ))
      } 
     </div>
     </div>
   </div>
   </> 
   
  )
}

export default Portfolio 