'use client'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className={styles.navbar}>
      <div className={`${styles.container} ${styles.nav__container}`}>
        <div className={styles.nav__logo}>🧡</div>

        <button
          className={styles.nav__toggle}
          aria-label='open navigation'
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src='/utility svgs/hamburger.svg'
            alt='hamburger'
            className={styles.nav__hamburger}
            width={40}
            height={40}
          />
        </button>

        <nav className={`${styles.nav} ${toggle && styles.nav__visible}`}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href='#' className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#about' className={styles.nav__link}>
                About
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#portfolio' className={styles.nav__link}>
                Portfolio
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#contact' className={styles.nav__link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )

  return (
    <nav className={styles.nav}>
      <p className='nav__logo'>🧡</p>
      <p className='nav__toggle'>🍔</p>

      <ul className='nav__list'>
        <li>
          <Link href='#'>Home</Link>
        </li>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#portfolio'>Experience</Link>
        </li>
        <li>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
