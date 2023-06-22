import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className={styles.container} id='home'>
        <Image
          src='/hero.jpg'
          alt='hero'
          width={100}
          height={100}
          className={styles.hero__image}
        />
        <h2>Hi 👋</h2>
        <h1>I am Sai Shravan</h1>
        <p>programmer and entrepreneur</p>
      </div>
    </div>
  )
}

export default Hero
