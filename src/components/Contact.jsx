import React from 'react'
import { useForm } from "react-hook-form"
import axios from"axios";
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit= async (data) => {
     const userinfo={
        name:data.name,
        email:data.email,
        message:data.message
     }
     try{
      await  axios.post("https://getform.io/f/anlxrxma",userinfo);
      toast.success("Your message has been sent")
     }catch (error){
        console.log(error);
        toast.error("Something went wrong")
     }
  }

    
  return (
    <>
    <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
             onSubmit={handleSubmit(onSubmit)}
           // action="https://getform.io/f/anlxrxma"
            // method="POST"
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4' >
                    <label className='block text-gray-700 font-bold'> Full Name </label>
                     <input 
                       {...register("name", { required: true })}
                     className ="shadow text-gray-700 rounded-lg bg-white px-5 py-2 " name="name"type="text" placeholder=' Enter Your Name'
                       
                     />
                     {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4' >
                    <label className='block text-gray-700 font-bold'> Email Address </label>
                     <input 
                      {...register("email", { required: true })}
                     className ="shadow text-gray-700 rounded-lg bg-white px-5 py-2 "   name="email"type="text" placeholder=' Enter Your Email Address' />
                     {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4' >
                    <label className='block text-gray-700 font-bold'> Message </label>
                     <textarea 
                      {...register("message", { required: true })}
                     className ="shadow text-gray-700 rounded-lg bg-white px-5 py-2 " name="message"type="text" placeholder=' Enter Your Message' />
                     {errors.message && <span>This field is required</span>}
                </div>
                <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
        </div>
        </>
  )
}

export default Contact