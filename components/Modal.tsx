import React from 'react'

interface ModalProps{
    isOpen : boolean;
    closeModal : () => void;

}

const Modal : React.FC<ModalProps> = ({isOpen, closeModal})=>{
    
    if (!isOpen)
        return null;
    return (
        <div className='fixed bg-black inset-0    bg-opacity-50 z-50'>
            <div className='container mx-auto w-1/2  py-40'>
                <div className='bg-white opacity-100 rounded-2xl'>

                        hy
                </div>

            </div>
            {/* <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step ">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
            </ul> */}

        </div>
    )

}

export default Modal
