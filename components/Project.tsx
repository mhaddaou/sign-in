import Link from 'next/link'
import React from 'react'
import {GiPencil} from 'react-icons/gi'
import {HiMiniFolder} from 'react-icons/hi2'
import {BsArrowRightShort} from 'react-icons/bs'
import Plus from './Plus'
import Pencel from './Pencel'

function Project() {
  return (
        <div className='bg-white text-black rounded-md'>
            <div className='px-5 pt-5 space-y-4'>
            <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-semibold text-lg'>Projects</h1>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Plus/>
                        <Pencel/>
                        

                    </div>
                </div>
                <div className=''>
                    <div className='space-y-3 border-b pb-5'>
                        <h1 className=' font-semibold' >FT_IRC</h1>
                        <div className='flex items-center gap-3'>
                            <img className='w-[25px] h-[25px]' src="/images/1337.jpeg" alt="" />
                            <p className='  text-black text-sm leading-relaxed'>Associated with 1337 Future Is Loading</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            
                            <p className='  text-black text-sm pt-2'>
                            The ft_irc project is an Internet Relay Chat (IRC) server. The project involves creating a server that allows multiple clients to connect and communicate with each other through various IRC commands. The server also supports channels, where clients can join and communicate with each other.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-3  py-5'>
                        <h1 className=' font-semibold' >FT_TRANSCENDENCE</h1>
                        <div className='flex items-center gap-3'>
                            <img className='w-[25px] h-[25px]' src="/images/1337.jpeg" alt="" />
                            <p className='  text-black text-sm leading-relaxed'>Associated with 1337 Future Is Loading</p>
                        </div>
                        <div className='flex items-center flex-col gap-5'>
                            
                            <p className='  text-black  block text-sm pt-2'>
                            This project consists of creating a website for the mighty Pong contest including the user accounts, chatting in channels and playing the game pong features.
                            </p>
                            <p className='text-black  block text-sm '><span className=' font-semibold'>Skills:</span> Web Components · nextjs · Responsive Web Design · Front-End Development · JavaScript · React.js · TypeScript · REST APIs · Tailwind CSS</p>
                        </div>
                    </div>
                    
                    
                   
                </div>
            
            </div>
            <div className='h-full  w-full hover:bg-stone-200 rounded-b-md shadow  cursor-pointer'>
                <div className='  flex items-center border-t py-2 justify-center gap-3 text-slate-600 font-semibold'>
                        <p>Show all 5 projects</p>
                        <BsArrowRightShort className="w-5 h-5 font-semibold" />
                    </div>
                </div>
        </div>
  )
}

export default Project