import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>Me</li>
        <li className={styles.nav__item}>My Work</li>
        <li className={styles.nav__item}>Contact</li>
      </ul>
      <div className={styles.nav__themechange}>
        <p className={styles.nav__lighttheme}>💡</p>
        <p className={styles.nav__darktheme}>🌚</p>
        <div className={styles.nav__themechangeball}></div>
      </div>
    </nav>
  )
}

export default Navbar
