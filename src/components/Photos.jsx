import React from 'react'

import BottlesMobile from './images/mobile/image-gallery-milkbottles.jpg'
import OrangeMobile from './images/mobile/image-gallery-orange.jpg'
import ConeMobile from './images/mobile/image-gallery-cone.jpg'
import SugarMobile from './images/mobile/image-gallery-sugar-cubes.jpg'

import BottlesDesktop from './images/desktop/image-gallery-milkbottles.jpg'
import OrangeDesktop from './images/desktop/image-gallery-orange.jpg'
import ConeDesktop from './images/desktop/image-gallery-cone.jpg'
import SugarDesktop from './images/desktop/image-gallery-sugarcubes.jpg'

function Photos() {
  return (
    <section className='photos'>
      <div className="photos-each">
        <img className='mobile' src={BottlesMobile} alt="" />
        <img className='desktop' src={BottlesDesktop} alt="" />
      </div>
      <div className="photos-each">
        <img className='mobile' src={OrangeMobile} alt="" />
        <img className='desktop' src={OrangeDesktop} alt="" />
      </div>
      <div className="photos-each">
        <img className='mobile' src={ConeMobile} alt="" />
        <img className='desktop' src={ConeDesktop} alt="" />
      </div>
      <div className="photos-each">
        <img className='mobile' src={SugarMobile} alt="" />
        <img className='desktop' src={SugarDesktop} alt="" />
      </div>
    </section>
  )
}

export default Photos