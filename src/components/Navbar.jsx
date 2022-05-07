import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {ReactComponent as Logo} from './images/logo.svg'
import {ReactComponent as Menu} from './images/icon-hamburger.svg'

import {container, item} from './animate'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.nav
      variants={container}
      initial='hidden'
      animate='show'
      className='nav'
    >
      <motion.div variants={item} className="nav-logo">
        <Logo />
      </motion.div>
      <div className="nav-menu">
        <button aria-label='menu' onClick={() => setToggle(!toggle)}><Menu /></button>
      </div>
      <ul className={`nav-items ${toggle ? "show" : ""}`}>
        <motion.li variants={item} className="nav-items-each">About</motion.li>
        <motion.li variants={item} className="nav-items-each">Services</motion.li>
        <motion.li variants={item} className="nav-items-each">Projects</motion.li>
        <motion.li variants={item} className="nav-items-each contact">CONTACT</motion.li>
      </ul>
    </motion.nav>
  )
}

export default Navbar