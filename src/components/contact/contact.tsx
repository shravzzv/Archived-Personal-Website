'use client'
import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name: string = e.target[0].value
    const email: string = e.target[1].value
    const subject: string = e.target[2].value
    const message: string = e.target[3].value
    console.log(name, email, subject, message)
  }
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.contact__container}>
          <div className={styles.info}>
            <p className={styles.info__title}>Phone</p>
            <p className={styles.info__content}>+91 9014857765</p>
            <p className={styles.info__title}>Address</p>
            <p className={styles.info__content}>
              Chilkoor, Moinabad, ranga reddy
            </p>
            <p className={styles.info__title}>Email</p>
            <p className={styles.info__content}>saishravancontact@gmail.com</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className={styles.form__input}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.form__input}
            />
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className={styles.form__input}
            />
            <textarea
              name='message'
              placeholder='Message'
              cols={30}
              rows={10}
              className={styles.form__input}
            ></textarea>
            <button type='submit' className={styles.form__submit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
