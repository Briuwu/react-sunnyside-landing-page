import React from 'react'

import {ReactComponent as Logo} from './images/logo-footer.svg'
import {ReactComponent as Facebook} from './images/icon-facebook.svg'
import {ReactComponent as Instagram} from './images/icon-instagram.svg'
import {ReactComponent as Twitter} from './images/icon-twitter.svg'
import {ReactComponent as Pinterest} from './images/icon-pinterest.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-logo"><Logo /></div>
      <div className="footer-items">
        <p className="footer-items-each">About</p>
        <p className="footer-items-each">Services</p>
        <p className="footer-items-each">Projects</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-each"><Facebook /></div>
        <div className="footer-links-each"><Instagram /></div>
        <div className="footer-links-each"><Twitter /></div>
        <div className="footer-links-each"><Pinterest /></div>
      </div>
    </footer>
  )
}

export default Footer