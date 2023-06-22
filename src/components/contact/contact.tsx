import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.contact__heading}>Contact Me</h2>
      <p className={styles.contact__subheading}>Phone:</p>
      <p className={styles.contact__info}>+91 insert non-personal phone here</p>
      <p className={styles.contact__subheading}>Address:</p>
      <p className={styles.contact__info}>Insert Address here</p>
      <p className={styles.contact__subheading}>Email:</p>
      <p className={styles.contact__info}>email@professional.com</p>

      <form className={styles.contact__form}>
        <input
          type='text'
          placeholder='Name'
          className={styles.contact__form__input}
        />
        <input
          type='email'
          placeholder='Email'
          className={styles.contact__form__input}
        />
        <input
          type='text'
          placeholder='Subject'
          className={styles.contact__form__input}
        />
        <textarea
          placeholder='Message'
          className={styles.contact__form__input}
          rows={8}
        ></textarea>
        <button
          type='submit'
          placeholder='message'
          className={styles.contact__form__submit}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
