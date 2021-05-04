import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

const Gallery = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className="row">
          <div className="column">
            <img src="/1.jpg" />
            <img src="/2.jpg" />
            <img src="/3.jpg" />
            <img src="/4.jpg" />
            <img src="/5.jpg" />
            <img src="/21.jpg" />
            <img src="/22.jpg" />
          </div>
          <div className="column">
            <img src="/6.jpg" />
            <img src="/7.jpg" />
            <img src="/8.jpg" />
            <img src="/9.jpg" />
            <img src="/10.jpg" />
          </div>
          <div className="column">
            <img src="/11.jpg" />
            <img src="/12.jpg" />
            <img src="/13.jpg" />
            <img src="/14.jpg" />
            <img src="/15.jpg" />
          </div>
          <div className="column">
            <img src="/16.jpg" />
            <img src="/17.jpg" />
            <img src="/18.jpg" />
            <img src="/19.jpg" />
            <img src="/20.jpg" />
          </div>
        </div>
        <h1 style={{ textAlign: 'center' }}>
          <a target="_blank" href="https://www.instagram.com/inkaddict.studio/">
            Kolla in vår instagram för mer!
          </a>
        </h1>
      </div>
    </>
  )
}

export default Gallery
