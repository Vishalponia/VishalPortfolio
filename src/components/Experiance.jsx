import React from 'react'
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"


const Experiance = () => {
    const  cardItem=[
        {
          id:1,
          logo:html,
          name:"Html"
        },
        {
          id:2,
          logo:javascript,
          name:"Javascript"
        },
        {
          id:3,
          logo:oracle,
          name:"oracle"
        },
        {
          id:4,
          logo:css,
          name:"CSS"
        },
       {
        id:5,
        logo:java,
        name:"java"
       },
       {
        id:6,
        logo:reactjs,
        name:"Reactjs"
       },
       {
         id:7,
         logo:node,
         name:"NodeJs"
       }
       ]
  return (
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20  mt:10 mb-10' >
        <div>
       <h1 className='text-3xl font-bold mb-5'>experiance</h1>
     <span className=''>I have more than 2 years of experiance in below Technologies</span> 
     <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-5'>
         {
        cardItem.map(({id,logo,name}) => (
           <div className='md:w-[180px] md:h-[180px]   rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full mx-auto ' alt=""/> 
                  <div>
                <div className=' px-2font-bold text-xl text-center mb-2'>{name}</div>
                
                </div>  
           </div>   
                
        ))
    }
    </div>
     </div>
    </div>
  )
}

export default Experiance