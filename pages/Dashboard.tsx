// eslint-disable-line no-console
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState } from 'react'
import Header from '@/components/Header'
import {GiPencil} from 'react-icons/gi'
import Footer from '@/components/Footer'
import Down from '@/components/Down'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useRef } from 'react'
import About from '@/components/About'
import Languages from '@/components/Languages'
import Skills from '@/components/Skills'
import Activity from '@/components/Activity'
import Project from '@/components/Project'
import Education from '@/components/Education'
import Resources from '@/components/Resources'
import AnalyticsAnalytics from '@/components/AnalyticsAnalytics'
import Card from '@/components/Card'
function Dashbord() {


  
  return (
    <main className=' '>
    <header className='h-16 bg-white'>
      <Header />
    </header>
    <section className='bg-bg '>
      <div className='container py-8 mx-auto bg--400 '>
      <div className='bg--400   md:mx-10 xl:mx-20 flex gap-2 md:gap-8 md:flex-row flex-col '>
      <div className='h-full w-full md:w-[75%] bg-'>
      <div className='space-y-2'>
              
              
            
             <Card/>
              <AnalyticsAnalytics/>
              <Resources/>
              <About />
              <Activity />
              <Education />
              <Project />
              <Skills />
              <Languages />
            </div>
           
          </div>
          <div className='h-full w-full md:w-[25%] bg-white'>right</div>
        </div>
      </div>

    </section>

    
  <Footer/>
  <div className='text-white'>
  <Down/>
  </div>
  
   
   </main>
  )
}

export default Dashbord