import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import hero from 'public/illustrations/hero.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div
        className={`${styles.container} ${styles.hero__container}`}
        id='home'
      >
        <div className={styles.info}>
          <h2 className={styles.info__heading}>👋</h2>
          <h1 className={styles.info__subheading}>
            I am <span className={styles.info__highlight}>Sai Shravan</span>
          </h1>
        </div>
        <div className={styles.visuals}>
          <Image
            src={hero}
            alt='my headshot'
            priority
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
