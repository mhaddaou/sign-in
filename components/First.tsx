/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import MessageWriter from './MessageWriter';
import Lottie from "lottie-react";
import anim from '../public/animations/grow.json'

import { useDispatch } from 'react-redux';
import Modal from './Modal';
function First() {
    const [show, setShow] = useState(false);
    const [isOpen , setIsOpen] = useState(true);
    const closeModal = () =>{
        setIsOpen(false)
    }
   
  return (
   <section className='bg-bg'>
    {/* <Modal isOpen={isOpen} closeModal={closeModal}/> */}
    <div className='pb-20 container mx-auto'>
        <div className='text-slate-800 text-center py-5'>
            <MessageWriter />
        </div>
        <div className='flex  justify-center items-center flex-col-reverse lg:flex-row gap-20 '>
            <div className='lg:w-1/2 w-full flex justify-center flex-col gap-10 '>
                <div className=' tracking-wide px-8 md:px-4 space-y-4 leading-relaxed text-lg text-slate-800 font-semibold'>
                    <p>
                    Welcome to ecoaching.ma, the premier destination for transformative coaching experiences. Founded by Mohammed Amine Barnousi, a seasoned certified coach with a rich background in mechanical engineering and extensive global exposure. With over a decade of hands-on involvement in diverse sectors, including renewable energy, real estate, education, and logistics, our platform stands as a gateway to personalized growth.
                    </p>
                    <p>
                    At ecoaching.ma, we believe in your inherent ability to thrive. Our purpose is to guide you towards unlocking your potential and realizing your aspirations. With a customized approach, our confidential and collaborative coaching sessions led by Mohammed Amine Barnousi provide you with the tools to excel in leadership, communication, and problem-solving.
                    </p>
                    <p>
                    Experience the power of proven methodologies and innovative techniques as we join you on your journey to success. Connect with us today and explore the transformative partnership that awaits you. Click below to login and embark on a transformative journey:
                    </p>
                </div>
                <div className='text-slate-800 flex justify-center  '>
                <div className="w-full px-3 mb-5">
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    {/* <div className='bg-slate-500 rounded-full p-1 bg-gradient-to-r from-red-800 via-cyan-500 to-slate-500 transition-all duration-700  hover:from-slate-500 hover:via-red-800 hover:to-cyan-500  flex  justify-center items-center'>

                    <button onClick={() =>dispatch(googleSignInAsync())} className='flex gap-10 text-xl justify-center items-center  px-6 py-2 bg-bg rounded-full '>
                        
                        <span className=' font-bold tracking-wide'>Sign up </span>
                    </button>
                    </div> */}
  
                </div>
            </div>
            <div className='lg:w-1/2 w-full '>
                <div className=' mx-auto my-auto pt-2'>
                <Lottie animationData={anim} />

                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default First