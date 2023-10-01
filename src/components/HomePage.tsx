import React from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div
        className='h-screen p-8 w-[clamp(80vw,600px,100vw)] flex flex-col justify-between'
    >
        <div className='flex justify-between'>
            <Logo/>
            <div className='w-11'>
                <svg className='fixed' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M7.33333 33H24.4444C25.4528 33 26.2778 32.175 26.2778 31.1667C26.2778 30.1583 25.4528 29.3333 24.4444 29.3333H7.33333C6.325 29.3333 5.5 30.1583 5.5 31.1667C5.5 32.175 6.325 33 7.33333 33ZM7.33333 23.8333H36.6667C37.675 23.8333 38.5 23.0083 38.5 22C38.5 20.9917 37.675 20.1667 36.6667 20.1667H7.33333C6.325 20.1667 5.5 20.9917 5.5 22C5.5 23.0083 6.325 23.8333 7.33333 23.8333ZM17.7222 12.8333C17.7222 13.8417 18.5472 14.6667 19.5556 14.6667H36.6667C37.675 14.6667 38.5 13.8417 38.5 12.8333C38.5 11.825 37.675 11 36.6667 11H19.5556C18.5472 11 17.7222 11.825 17.7222 12.8333Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='flex flex-col justify-center'>
                <p className='c-new text-s'>CONTACTS</p>
                <div className="mx-auto">
                    <motion.svg 
                        className='absolute'
                        animate={{ rotate: 32 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 1.5 }}
                        xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                    >
                        <g clip-path="url(#clip0_21_72)">
                            <path d="M47.6506 13.5C49.8448 17.3005 51 21.6116 51 26C51 30.3884 49.8448 34.6995 47.6506 38.5C45.4564 42.3005 42.3005 45.4564 38.5 47.6506C34.6995 49.8448 30.3884 51 26 51C21.6116 51 17.3005 49.8449 13.5 47.6506C9.69953 45.4564 6.54359 42.3005 4.34938 38.5C2.15516 34.6995 1 30.3884 1 26C0.999996 21.6116 2.15515 17.3005 4.34935 13.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 7"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_21_72">
                            <rect width="52" height="52" fill="white" transform="translate(52 52) rotate(180)"/>
                            </clipPath>
                        </defs>        
                    </motion.svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <g clip-path="url(#clip0_21_74)">
                            <path d="M15.5832 21.8333L25.9998 32.25L36.4165 21.8333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M51 26C51 22.717 50.3534 19.4661 49.097 16.4329C47.8406 13.3998 45.9991 10.6438 43.6777 8.32233C41.3562 6.00087 38.6002 4.15938 35.5671 2.90301C32.5339 1.64664 29.283 1 26 1C22.717 1 19.4661 1.64664 16.4329 2.90301C13.3998 4.15938 10.6438 6.00087 8.32233 8.32233C6.00086 10.6438 4.15938 13.3998 2.90301 16.4329C1.64664 19.4661 1 22.717 1 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_21_74">
                            <rect width="52" height="52" fill="white" transform="translate(52 52) rotate(180)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </button>
        </div>
    </div>
  )
}

export default HomePage