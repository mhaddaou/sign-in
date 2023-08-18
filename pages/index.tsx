import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { getUsers } from '@/components/fetSlice';
import { AppDispatch } from '@/components/store';
import Header from '@/components/Header';
import First from '@/components/First';
import Footer from '@/components/Footer';
import Down from '@/components/Down';


function Index() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getUsers()); 
  }, [dispatch]);
  
  return (
    <main className=''>
    <header className='bg-white'>
      <Header />
    </header>
  <First/>
  <Footer/>
  <Down/>
  
   
   </main>

  );
}

export default Index; 
