// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useScroll } from 'framer-motion'
import './App.css'
import Contacts from './components/Contacts'
import HomePage from './components/HomePage'
// import PreLoader from './components/PreLoader'
import './components/preloader.css'
// import { useRef } from 'react'

function App() {

  return (
    <>
      <HomePage/>
      {/* <PreLoader /> */}
      <Contacts/>
    </>
  )
}

export default App
