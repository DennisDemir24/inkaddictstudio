import React from 'react'
import Image from 'next/image'

import styles from '../styles/Hero.module.css'

function Hero() {
    return (
      <div className={styles.heroSection}>
        <img className={styles.bgImg} src="/bg2.jpg"/>
      </div>
    )
}

export default Hero
