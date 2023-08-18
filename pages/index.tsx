import React, { useEffect } from 'react'
import { Dispatch } from './Type';
import { getUsers } from '@/components/fetSlice'
function index() {

  
  useEffect(() =>{
    Dispatch(getUsers());
  }, [Dispatch])
  return (
   <main className='text-3xl font-extrabold underline font-mono hover:opacity-50 cursor-pointer hover:no-underline  '>

  
   
   </main>
  )
}



export default index
