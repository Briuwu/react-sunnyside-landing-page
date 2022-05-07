import React from 'react'

import clientData from './clientData.json'
import Emily from './images/image-emily.jpg'
import Jennie from './images/image-jennie.jpg'
import Thomas from './images/image-thomas.jpg'

const clientImg = [
  Emily,
  Thomas,
  Jennie
]

function Client() {
  return (
    <section className='client'>
      <p className='client-title'>CLIENT TESTIMONIALS</p>
      {clientData.map((item, index) => {
        return (
          <div className="client-each">
            <img className='client-img' src={clientImg[index]} alt="" />
            <p className="client-testimonial">{item.testimonial}</p>
            <div className="client-info">
              <p className="client-name">{item.name}</p>
              <p className="client-job">{item.job}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Client