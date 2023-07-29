'use client'
import React from 'react'
import styles from './contact.module.css'
import Link from 'next/link'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const name: string = e.target[0].value
    // const email: string = e.target[1].value
    // const subject: string = e.target[2].value
    // const message: string = e.target[3].value
    // console.log(name, email, subject, message)
  }
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading} id='contact'>
          Contact
        </h2>
        <div className={styles.contact__container}>
          <div className={styles.info}>
            <p className={styles.info__title}>Phone</p>
            <p className={styles.info__content}>+91 9014857765</p>
            <p className={styles.info__title}>Address</p>
            <p className={styles.info__content}>
              Chilkoor, Moinabad, ranga reddy
            </p>
            <p className={styles.info__title}>Email</p>
            <Link href='mailto:shravzzv@outlook.com' target='_blank'>
              <p className={styles.info__content}>shravzzv@outlook.com</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
