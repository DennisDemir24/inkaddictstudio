import React from 'react'
import Image from 'next/image'

import styles from '../styles/Hero.module.css'

function Hero() {
    return (
      <div className={styles.heroSection}>
        <Image width={1910} height={1000} objectFit='cover' objectPosition='center' className={styles.bgImg} src="/bg2.jpg" alt="background image" />
      </div>
    )
}

export default Hero
