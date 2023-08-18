import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { getUsers } from '@/components/fetSlice';
import { AppDispatch } from '@/components/store';


function Index() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getUsers()); 
  }, [dispatch]);
  
  return (
    <main className='text-3xl font-extrabold underline font-mono hover:opacity-50 cursor-pointer hover:no-underline'>
      hello
    </main>
  );
}

export default Index; 
