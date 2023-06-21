import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <aside className={styles.footer__copyright}>
        <p className={styles.footer__trademark}>© Sai Shravan 2023</p>
        <p className={styles.footer__text}>
          This site was made using{' '}
          <Link href='nextjs.org' className={styles.footer__link}>
            Nextjs
          </Link>{' '}
        </p>
      </aside>
      <section className={styles.footer__socials}>
        <Link
          href='https://github.com/@shravzzv'
          className={styles.footer__link}
        >
          <Image src='' alt='GitHub' className={styles.footer__image} />
        </Link>
        <Link href='https://linkedin.com/' className={styles.footer__link}>
          <Image src='' alt='LinkedIn' className={styles.footer__image} />
        </Link>
        <Link
          href='https://twitter.com/@shravzzv'
          className={styles.footer__link}
        >
          <Image src='' alt='Twitter' className={styles.footer__image} />
        </Link>
        <Link
          href='https://instagram.com/shravzzv'
          className={styles.footer__link}
        >
          <Image src='' alt='Instagram' className={styles.footer__image} />
        </Link>
        <Link
          href='https://facebook.com/shravzzv'
          className={styles.footer__link}
        >
          <Image src='' alt='Facebook' className={styles.footer__image} />
        </Link>
        <Link
          href='https://youtube.com/@shravzzv'
          className={styles.footer__link}
        >
          <Image src='' alt='YouTube' className={styles.footer__image} />
        </Link>
      </section>
    </footer>
  )
}

export default Footer
