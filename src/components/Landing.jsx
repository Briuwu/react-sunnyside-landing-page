import React from 'react'
import Client from './Client'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import Photos from './Photos'

function Landing() {
  return (
    <main className='landing'>
      <Header />
      <Info />
      <Client />
      <Photos />
      <Footer />
    </main>
  )
}

export default Landing