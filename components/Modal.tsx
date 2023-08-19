import React, { ChangeEvent, ChangeEventHandler, ReactEventHandler, useEffect, useState } from 'react'
import { setFirst, 
setSecond, 
setThird,
setFirstName,
setLastName,
setEducation,
setEmail,
setHeadline,
setImage,
setPhone,
setLocation} from './reduxToolkit/userSlice';
import { RooteState, AppDispatch } from './reduxToolkit/store';
import { useDispatch, useSelector } from 'react-redux';
import Upload from './Upload';
import { initialType } from './reduxToolkit/userSlice';

interface ModalProps{
    isOpen : boolean;
    closeModal : () => void;

}


const Check = (str : string) =>{
    str.split('').forEach((val, index) =>{
        console.log(index, ' this is the val : ', val);
    })
}





const Modal : React.FC<ModalProps> = ({isOpen, closeModal})=>{
    const dispatch = useDispatch<AppDispatch>();

   
    // const user = useSelector((state:RooteState) => state.user);

    const [num, setNum] = useState(1);
    const [first, setFirst] = useState('');
    // const [last, setLast] = 
    
    const [last, setLast] = useState('');
    const [area, setarea] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const [edu, setEdu] = useState('');
    const [head, setHead] = useState('');
    const [coun, setCoun] = useState('');
    const [cit, setCit] = useState('')

    const handlFirstName = (e : ChangeEvent<HTMLInputElement>) => setFirst(e.target.value)
    const handlLastName = (e : ChangeEvent<HTMLInputElement>) => setLast(e.target.value)
    const handlEmail = (e : ChangeEvent<HTMLInputElement>) => setemail(e.target.value)
    const handlArea = (e : ChangeEvent<HTMLInputElement>) => setarea(e.target.value)
    const handlNumber = (e : ChangeEvent<HTMLInputElement>) => setnumber(e.target.value)
    const handlHead = (e : ChangeEvent<HTMLTextAreaElement>) => setHead(e.target.value)
    const handlEdu = (e : ChangeEvent<HTMLInputElement>) => setEdu(e.target.value)
    const handlCoun = (e : ChangeEvent<HTMLInputElement>) => setCoun(e.target.value)
    const handlCit = (e : ChangeEvent<HTMLInputElement>) => setCit(e.target.value)
    
    
   

   
   

    const Next = () =>{
        if (num === 1){
            dispatch(setFirstName(first));
            dispatch(setLastName(last));
            dispatch(setEmail(email));
            dispatch(setPhone({
                area: area,
                phone: +number
            }))
            setNum(2);

        }
        if (num === 2){
            dispatch(setHeadline(head));
            dispatch(setEducation(edu));
            dispatch(setLocation({
                country : coun,
                city : cit
            }));
            setNum(3);
        }
        if (num === 3){
            while(true){
                console.log('afen')
                if (localStorage.getItem('img')?.length !== undefined && localStorage.getItem('img')?.length !== null ){
                    console.log(localStorage.getItem('img'));
                    break;
                }
            }
            setNum(4);
        }

        
    }
    
    if (!isOpen)
        return null;
    return (
        <div className='fixed bg-black inset-0    bg-opacity-50 z-50'>
            <div className='container mx-auto w-1/2  py-20'>
                <div className='bg-white opacity-100 rounded-2xl p-5'>
                    {num == 1 ?  <div  className='flex text-slate-800 pt-5 '>
                           <div className='w-[90%] mx-auto  h-full space-y-8'>
                            <div className='w-full flex items-center'>
                                <div className='w-[30%] pt-6 font-bold text-center'>Name</div>
                                <div className='w-[70%] flex gap-5'>
                                    <div>
                                        <p className='pl-2 text font-light text- capitalize pb-1'>first name<span className='text-slate-600'>*</span></p>
                                        <input value={first} onChange={handlFirstName} type="text" placeholder="First Name" className="input bg-slate-100 input-primary input-bordered font-mono input-md w-full max-w-xs" />
                                    </div>
                                    <div>
                                        <p className='pl-2 text font-light text- capitalize pb-1'>last name<span className='text-slate-600'>*</span></p>
                                        <input value={last} onChange={handlLastName} type="text" placeholder="Last Name" className="input bg-slate-100 input-bordered  input-primary input-md font-mono w-full max-w-xs" />
                                    </div>
    
    
                                </div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-[30%]  font-bold text-center'>Email</div>
                                <div className='w-[70%] flex gap-5'>
                                        <input value={email} onChange={handlEmail} type="email" placeholder="example@gmail.com" className="input bg-slate-100 input-bordered input-primary font-mono input-md w-full " />
                                </div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-[30%] pb-6 font-bold text-center'>Phone</div>
                                <div className='w-[70%] flex gap-5'>
                                    <div className='w-[30%]'>
                                        <input type="phone" value={area} onChange={handlArea} placeholder="" className="input bg-slate-100 input-bordered input-md input-primary font-mono w-full max-w-xs" />
                                    <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>Area Code</p>
    
                                    </div>
                                    <div className='w-[70%]'>
                                        <input type="phone" value={number} onChange={handlNumber} placeholder=" " className="input bg-slate-100 input-bordered input-md input-primary font-mono w-full max-w-xs" />
                                    <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>phone number</p>
    
    
                                    </div>
                                </div>
                            </div>
                            
                           </div>
                          
                        
                        </div> : null}
                    {num == 2 ? 
                    <div  className='flex text-slate-800 pt-5 '>
                    <div className='w-[90%] mx-auto  h-full space-y-8'>
                    <div className='w-full flex items-center'>
                                <div className='w-[30%]  font-bold text-center'>Headline<span className='text-slate-600'>*</span></div>
                                <div className='w-[70%] flex gap-5'>
                                <textarea value={head} onChange={handlHead} className="textarea textarea-primary w-full bg-white" placeholder="Headline"></textarea>
                                </div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-[30%]  font-bold text-center'>Education<span className='text-slate-600'>*</span></div>
                                <div className='w-[70%] flex gap-5'>
                                        <input value={edu} onChange={handlEdu} type="text" placeholder="" className="input bg-white input-bordered input-primary font-mono input-md w-full " />
                                </div>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='w-[30%] pb-6 font-bold text-center'>Location</div>
                                <div className='w-[70%] flex gap-5'>
                                    <div className='w-[40%]'>
                                        <input  type="text" value={coun} onChange={handlCoun} placeholder="" className="input bg-white input-bordered input-primary input-md font-mono w-full max-w-xs" />
                                    <p className='pl-2 text  text-sm font-semibold capitalize pt-1'>Country/Region<span className='text-slate-600'>*</span></p>
    
                                    </div>
                                    <div className='w-[60%]'>
                                        <input type="text" value={cit} onChange={handlCit} placeholder=" " className="input input-primary bg-white input-bordered input-primaryinput-md font-mono w-full max-w-xs" />
                                    <p className='pl-2 text  text-sm font-semibold capitalize  pt-1'>City<span className='text-slate-600'>*</span></p>
    
    
                                    </div>
                                </div>
                            </div>
                    </div>
                </div> : null}
                    {num == 3 ?  
                    <div  className='flex text-slate-800 pt-5 '>
                <div className='w-[90%] mx-auto  h-full space-y-8'>
                    <div className='text-center py-10'>
                        Upload Image
                    </div>
                    <div className='w-1/2  mx-auto'>
                    <Upload />
    
                    </div>
                </div>
            </div> : null}
                    <div className='text-slate-700 py-10 flex justify-end pr-5 gap-10'>
                    <div>
                            <button onClick={() => {
                                if (num !==  1)
                                    setNum(num - 1)
                            }}>Previous</button>
                        </div>
                        <div>
                            <button className={`${num === 4 ? 'hidden' : ''}`} onClick={() => Next()}>Next</button>
                            <button className={`${num !== 4 ? 'hidden' : ''}`} onClick={() => console.log('done')}>Done</button>
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
