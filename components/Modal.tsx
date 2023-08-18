import React, { useState } from 'react'
import Upload from './Upload';

interface ModalProps{
    isOpen : boolean;
    closeModal : () => void;

}
const FirstStep = () =>{
    return (
        <div  className='flex text-slate-800 pt-5 '>
                       <div className='w-[90%] mx-auto  h-full space-y-8'>
                        <div className='w-full flex items-center'>
                            <div className='w-[30%] pt-6 font-bold text-center'>Name</div>
                            <div className='w-[70%] flex gap-5'>
                                <div>
                                    <p className='pl-2 text font-light text- capitalize pb-1'>first name<span className='text-slate-600'>*</span></p>
                                    <input type="text" placeholder="First Name" className="input bg-slate-100 input-primary input-bordered font-mono input-md w-full max-w-xs" />
                                </div>
                                <div>
                                    <p className='pl-2 text font-light text- capitalize pb-1'>last name<span className='text-slate-600'>*</span></p>
                                    <input type="text" placeholder="Last Name" className="input bg-slate-100 input-bordered  input-primary input-md font-mono w-full max-w-xs" />
                                </div>


                            </div>
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='w-[30%]  font-bold text-center'>Email</div>
                            <div className='w-[70%] flex gap-5'>
                                    <input type="text" placeholder="example@gmail.com" className="input bg-slate-100 input-bordered input-primary font-mono input-md w-full " />
                            </div>
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='w-[30%] pb-6 font-bold text-center'>Phone</div>
                            <div className='w-[70%] flex gap-5'>
                                <div className='w-[30%]'>
                                    <input type="text" placeholder="" className="input bg-slate-100 input-bordered input-md input-primary font-mono w-full max-w-xs" />
                                <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>Area Code</p>

                                </div>
                                <div className='w-[70%]'>
                                    <input type="text" placeholder=" " className="input bg-slate-100 input-bordered input-md input-primary font-mono w-full max-w-xs" />
                                <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>phone number</p>


                                </div>
                            </div>
                        </div>
                        
                       </div>
                      
                    
                    </div>
    )
}
const SecondStep = () =>{
    return (
            <div  className='flex text-slate-800 pt-5 '>
                <div className='w-[90%] mx-auto  h-full space-y-8'>
                <div className='w-full flex items-center'>
                            <div className='w-[30%]  font-bold text-center'>Headline<span className='text-slate-600'>*</span></div>
                            <div className='w-[70%] flex gap-5'>
                            <textarea className="textarea textarea-primary w-full bg-white" placeholder="Headline"></textarea>
                            </div>
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='w-[30%]  font-bold text-center'>Education<span className='text-slate-600'>*</span></div>
                            <div className='w-[70%] flex gap-5'>
                                    <input type="text" placeholder="" className="input bg-white input-bordered input-primary font-mono input-md w-full " />
                            </div>
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='w-[30%] pb-6 font-bold text-center'>Location</div>
                            <div className='w-[70%] flex gap-5'>
                                <div className='w-[40%]'>
                                    <input type="text" placeholder="" className="input bg-white input-bordered input-primary input-md font-mono w-full max-w-xs" />
                                <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>Country/Region<span className='text-slate-600'>*</span></p>

                                </div>
                                <div className='w-[60%]'>
                                    <input type="text" placeholder=" " className="input input-primary bg-white input-bordered input-primaryinput-md font-mono w-full max-w-xs" />
                                <p className='pl-2 text  text-sm font-semibold capitalize  pt-1'>City<span className='text-slate-600'>*</span></p>


                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}


const ThirdStep = () =>{
    return (
        <div  className='flex text-slate-800 pt-5 '>
            <div className='w-[90%] mx-auto  h-full space-y-8'>
                <div className='text-center py-10'>
                    Upload Image
                </div>
                <div className='w-1/2  mx-auto'>
                <Upload />

                </div>
            </div>
        </div>
    )
}

const Modal : React.FC<ModalProps> = ({isOpen, closeModal})=>{
    const [num, setNum] = useState(1);
    
    if (!isOpen)
        return null;
    return (
        <div className='fixed bg-black inset-0    bg-opacity-50 z-50'>
            <div className='container mx-auto w-1/2  py-20'>
                <div className='bg-white opacity-100 rounded-2xl p-5'>
                    {num == 1 ? <FirstStep/> : null}
                    {num == 2 ? <SecondStep/> : null}
                    {num == 3 ? <ThirdStep/> : null}
                    <div className='text-slate-700 py-10 flex justify-end pr-5 gap-10'>
                    <div>
                            <button onClick={() => {
                                if (num !==  1)
                                    setNum(num - 1)
                            }}>Previous</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                if (num !== 3)
                                    setNum(num + 1)
                            }}>Next</button>
                        </div>
                        <div>
                            <button onClick={() => closeModal()}>close</button>
                        </div>
                    </div>

                <div className='flex  justify-center'>
                <ul className="steps text-slate-500 w-full steps-vertical lg:steps-horizontal">
            <li className={`step ${num == 1 ? 'step-primary' : ''}`}> </li>
            <li className={`step ${num == 2 ? 'step-primary' : ''}`}> </li>
            <li className={`step ${num == 3 ? 'step-primary' : ''}`}> </li>
            <li className={`step ${num == 4 ? 'step-primary' : ''}`}> </li>
            </ul>

                </div>
                       
                </div>

            </div>
            
           

        </div>
    )

}

export default Modal
