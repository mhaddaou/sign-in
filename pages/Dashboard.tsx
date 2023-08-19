import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState } from 'react'
import Header from '@/components/Header'
import {GiPencil} from 'react-icons/gi'
import Footer from '@/components/Footer'
import Down from '@/components/Down'
import { useDispatch, useSelector } from 'react-redux'
import { RooteState, AppDispatch } from '@/components/reduxToolkit/store'
import axios from 'axios'
import { useRef } from 'react'

function Dashbord() {
  const [data, setData] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null);
  const click = async () =>{
    console.log('im here')
  if (inputRef.current){
    const res = await axios.post('https://ecoaching-ma-default-rtdb.firebaseio.com/users.json/',
    {Name :inputRef.current.value },
    {
      headers:{
        "Content-Type" : 'aplication/json'
      }
    })
    if (res){
      console.log('message sent')
    }
    else{
      console.log('error sending message');
    }
  }
  
}

  const user = useSelector((state : RooteState) => state.user)
  
  return (
    <main className=''>
    <header className='h-16 bg-white'>
      <Header />
    </header>
    <section className='bg-bg'>
      <div className='container py-8 mx-auto bg--400'>
      <div className='bg--400 mx-20 flex gap-2 md:gap-8 md:flex-row flex-col '>
      <div className='h-full w-full md:w-[70%] bg-'>
      <div className='space-y-2'>
              <div className='rounded bg-green-500'>
              </div>
              <div className='rounded bg-white'>
                <div className="bg-cover w-full h-[150px] rounded-t-md bg-[url('/images/bg.jpg')] bg-no-repeat relative" >
                  <div className='absolute left-8 -bottom-16'>
                    {user?.img && <img className=' w-36 h-36 border-4 border-bg rounded-full' src={user?.img} alt="" />}

                  </div>
                </div>
                
                <div className='text-black py-5 '>
                  <div className='flex items-end justify-end px-5'>
                    <button>
                      <GiPencil className='w-6 h-6'/>
                    </button>
                  </div>
                  <div className='pt-10'>
                      <h1 className='text-2xl capitalize font-semibold pl-8'>{user?.firstName} {user?.lastName}</h1>
                      <p className='w-[60%] pl-8 font-light text-lg text-black'>{user.headline}</p>
                      <p className='pl-8 pt-1 font-light text-sm text-slate-600'>{user.location.city} {user.location.country}  <span className='text-txt '>Contact info</span></p>
                  </div>
                </div>
                <div></div>
              </div>
              <div className='rounded bg--500 text-black'>
                
              </div>
              <div className='rounded bg--500'>dd</div>

            </div>
          </div>
          <div className='h-full w-full md:w-[30%] bg-white'>right</div>
        </div>
      </div>

    </section>

    
  <Footer/>
  <Down/>
  
   
   </main>
  )
}

export default Dashbord