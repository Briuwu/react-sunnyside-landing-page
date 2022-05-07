import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

import {ReactComponent as ArrowDown} from './images/icon-arrow-down.svg'

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut"
  }
}


function Header() {
  return (
    <header className='header'>
      <Navbar />
      <h1 className='header-title'>WE ARE CREATIVES</h1>
      <motion.div 
        className="header-arrow"
        transition={bounceTransition}
        animate={{
          y: ["20%", "-20%"]
        }}
        >
          <ArrowDown />
      </motion.div>
    </header>
  )
}

export default Header