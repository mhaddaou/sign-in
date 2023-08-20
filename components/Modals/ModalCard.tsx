import React, { ChangeEvent, useContext, useState } from 'react'
import Close from '../Close';
import { MyContext } from '../Context';

interface typeAbout{
    isOpen : boolean;
    closeModal : () => void;
}

function ModalCard({isOpen , closeModal} : typeAbout) {
    const context = useContext(MyContext);
    const splite = () =>{
        const value = context.name.split(' ')
        return {first : value[0], second : value[1]}
    }
    const exta = splite();
    const [firstName , setFirstName] = useState(exta.first);
    const [lastName, setLastName] = useState(exta.second);
    const [head, setHead] = useState(context.headline);
    const handlFirst = (e : ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
    const handlLast = (e : ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
    const handlHead = (e : ChangeEvent<HTMLInputElement>) => setHead(e.target.value);
    const save = () =>{
        context.setName(firstName + ' ' + lastName);
        context.setHeadline(head);
        closeModal();
    }
    
  return (
    <div className=' fixed bg-black inset-0    bg-opacity-80 z-50 scroll-smooth px-2 md:px-0 '>
        <div className='container bg-white mx-auto w-full  md:w-1/2 my-8 rounded-lg h-[80vh] '>
            <div className='h-[15%]'>
            <div className='border-b flex justify-between pl-7  pr-5 items-center py-2'>
                <h1 className='text-xl font-semibold text-slate-800'>Edit intro</h1>
                <button onClick={() => closeModal()}><Close /></button>
            </div>
            </div>
            <div className='h-[70%] overflow-y-auto '>
            <div className='px-5  border-b pt-2'>
                <div className='flex'>
            <p className='border-b-2 border-green-600 px-2 text-eng text-sm font-semibold leading-relaxe tracking-wider leading-loose '> English (Primary profile)</p>

                </div>
            </div>
            <div className='px-7 pt-1'> 
                <p className='  text-xs  text-black opacity-80 font-medium leading-relaxed tracking-wide'>
                    * Indicates required
                </p>
            </div>
            <div className="form-control w-full px-6 bg-white  pt-4">
            <label className="label">
                <span className="label-text">First name*</span>
            </label>
            <input type="text" onChange={handlFirst} value={firstName} placeholder="" className="input bg-white text-slate-900    input-bordered w-full " />
            </div>
            <div className="form-control w-full px-6  pt-4 bg-white">
            <label className="label">
                <span className="label-text">Last name*</span>
            </label>
            <input type="text" onChange={handlLast}  value={lastName} placeholder=""  className="input text-slate-900 bg-white     input-bordered w-full " />
            </div>
            <div className="form-control w-full px-6  pt-4 bg-white">
            <label className="label">
                <span className="label-text">Additional name</span>
            </label>
            <input type="text" placeholder=""  className="input text-slate-900 bg-white     input-bordered w-full " />
            </div>
            <div className="form-control w-full px-6  py-4 bg-white">
            <label className="label">
                <span className="label-text">Headline*</span>
            </label>
            <input type="text" value={head} onChange={handlHead} placeholder=""  className="input text-slate-900 bg-white     input-bordered w-full " />
            </div>
           

            </div>
            <div className='h-[15%]'>
            <div className=' border-t flex h-full ' >
                <div className='  w-full  h-1/2 my-auto flex items-center justify-end pr-6'>
                    <button onClick={save} className='bg-blue-700  hover:bg-blue-900 font-semibold transition-all duration-500  text-white px-4 py-1 rounded-full '>Save</button>

                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default ModalCard