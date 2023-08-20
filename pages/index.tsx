import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import Header from '@/components/Header';
import First from '@/components/First';
import Footer from '@/components/Footer';
import Down from '@/components/Down';


function Index() {
  
  
  
  return (
    <main className=''>
    <header className='h-16 bg-white'>
      <Header />
    </header>
  <First/>
  <Footer/>
  <Down/>
  
   
   </main>

  );
}

export default Index; 
