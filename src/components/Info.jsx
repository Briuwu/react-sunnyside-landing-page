import React from 'react'
import TransformMobile from './images/mobile/image-transform.jpg'
import StandOutMobile from './images/mobile/image-stand-out.jpg'
import TransformDesktop from './images/desktop/image-transform.jpg'
import StandOutDesktop from './images/desktop/image-stand-out.jpg'

function Info() {
  return (
    <section className='info'>
      <div className="info-img switch">
        <img className='info-img-mobile' src={TransformMobile} alt="" />
        <img className='info-img-desktop' src={TransformDesktop} alt="" />
      </div>
      <div className="info-desc switch-desc">
        <p className="info-title">Transform your brand</p>
        <p className='info-paragraph'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <button className='info-btn transform'>LEARN MORE</button>
      </div>
      <div className="info-img">
        <img className='info-img-mobile' src={StandOutMobile} alt="" />
        <img className='info-img-desktop' src={StandOutDesktop} alt="" />
      </div>
      <div className="info-desc">
        <p className="info-title">Stand out to the right audience</p>
        <p className='info-paragraph'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
        <button className='info-btn standout'>LEARN MORE</button>
      </div>
      <div className="info-desc graphic">
        <p className="info-title">Graphic Design</p>
        <p className="info-paragraph">Great design makes you memorable. We deliver artwork that underscres your brand message and captures potential clients' attention.</p>
      </div>
      <div className="info-desc photography">
        <p className="info-title">Photography</p>
        <p className="info-paragraph">Increase your credibility by getting the most stunning, high-quality photos that imrpove your business image.</p>
      </div>
    </section>
  )
}

export default Info