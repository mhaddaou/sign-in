import React, { useEffect } from 'react'
import Image from 'next/image'
import { RooteState, AppDispatch } from '@/components/store'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '@/components/fetSlice'
function index() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() =>{
    dispatch(getUsers());
  }, [dispatch])
  return (
   <main className='text-3xl font-extrabold underline font-mono hover:opacity-50 cursor-pointer hover:no-underline  '>
      
  nour imane sabri
  
   
   </main>
  )
}



export default index