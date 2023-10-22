// import React from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'

const HomePage = () => {    

  return (
    <div className='h-full p-6 flex flex-col justify-between'>
        <div className='flex justify-between'>
            <Logo/>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M3.75 7.50122H26.25M3.75 15.0012H26.25M3.75 22.5012H26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='flex flex-col justify-center'>
                <p className='c-new text-sm pb-1'>CONTACTS</p>
                <div className="mx-auto">
                    <motion.svg 
                        className='absolute'
                        animate={{ rotate: 32 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 1.5 }}
                        xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g clip-path="url(#clip0_21_72)">
                        <path d="M38.3205 11C40.0759 14.0404 41 17.4893 41 21C41 24.5107 40.0759 27.9596 38.3205 31C36.5651 34.0404 34.0404 36.5651 31 38.3205C27.9596 40.0759 24.5107 41 21 41C17.4893 41 14.0404 40.0759 11 38.3205C7.95963 36.5652 5.43487 34.0404 3.6795 31C1.92413 27.9596 1 24.5108 1 21C0.999997 17.4893 1.92412 14.0404 3.67948 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-dasharray="5.6 5.6"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_21_72">
                        <rect width="42" height="42" fill="white" transform="translate(42 42) rotate(180)"/>
                        </clipPath>
                        </defs>       
                    </motion.svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g clip-path="url(#clip0_21_74)">
                            <path d="M12.6668 17.6667L21.0002 26L29.3335 17.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M41 21C41 18.3736 40.4827 15.7728 39.4776 13.3463C38.4725 10.9198 36.9993 8.71504 35.1421 6.85786C33.285 5.00069 31.0802 3.5275 28.6537 2.52241C26.2272 1.51731 23.6264 1 21 1C18.3736 1 15.7728 1.51732 13.3463 2.52241C10.9198 3.5275 8.71504 5.00069 6.85786 6.85786C5.00069 8.71504 3.5275 10.9198 2.52241 13.3463C1.51731 15.7728 1 18.3736 1 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_21_74">
                            <rect width="42" height="42" fill="white" transform="translate(42 42) rotate(180)"/>
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