// import React from 'react'

import { motion, useScroll } from "framer-motion"

const Contacts = () => {
    const { scrollYProgress } = useScroll();

  return (
    <div className="h-[100lvh] p-6">
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
        <p></p>
        <motion.div 
            className="fixed bottom-0 left-1/2 h-1 w-full rounded-full bg-black"
            style={{ scaleX: scrollYProgress, translateX: '-50%' }}
        />
        <p id='c'>contacts</p>
    </div>
  )
}

export default Contacts