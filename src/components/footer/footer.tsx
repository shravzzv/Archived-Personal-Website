import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__cr}>© Sai Shravan Vadla. 2023</p>
      <section className={styles.footer__links}>
        <Link
          className={styles.footer__link}
          href='https://www.github.com/shravzzv'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/github.svg'
            alt='github'
            width={50}
            height={50}
          />
        </Link>
        <Link
          className={styles.footer__link}
          href='https://www.linkedin.com/in/sai-shravan-027040244/'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/linkedin.svg'
            alt='linkedIn'
            width={50}
            height={50}
          />
        </Link>
        <Link
          className={styles.footer__link}
          href='https://www.twitter.com/@shravzzv'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/twitter.svg'
            alt='twitter'
            width={50}
            height={50}
          />
        </Link>
        <Link
          className={styles.footer__link}
          href='https://www.youtube.com/@shravzzv'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/youtube.svg'
            alt='youtube'
            width={50}
            height={50}
          />
        </Link>
        <Link
          className={styles.footer__link}
          href='https://www.instagram.com/shravzzv'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/instagram.svg'
            alt='instagram'
            width={50}
            height={50}
          />
        </Link>
        <Link
          className={styles.footer__link}
          href='https://www.facebook.com/shravzzv'
          target='blank'
        >
          <Image
            className={styles.footer__img}
            src='/social media svgs/facebook.svg'
            alt='facebook'
            width={50}
            height={50}
          />
        </Link>
      </section>
    </footer>
  )
}

export default Footer
