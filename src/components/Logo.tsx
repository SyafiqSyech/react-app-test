import { motion } from 'framer-motion'

import DeerMoonLogo from '../assets/logo.svg' 
import './preloader.css'

const states = {
  atPreload: {
    translateX: "50vw", 
    x: "-50%",
  },
  atLanding: {
    x: 0,
    translateX: 0,
    transition: {
      repeat: Infinity,
      repeatDelay: 1,
      delay: 5,
      duration: 5,
      type: "spring",
      damping: 10,
      stiffness: 150,
      restDelta: .2,
    }
  }
}

const Logo = () => {

  return (
    <>
      <motion.img
        className='h-36 mix-blend-difference'
        src={DeerMoonLogo}
        alt=""
        // variants={states}
        // initial="atPreload"
        // animate="atLanding"
      />
    </>
  )
}

export default Logo