import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Contact from '@/components/contact/contact'

export default function Home() {
  return (
    <>
      <main className={styles.hero}>
        <div className={styles.container}>
          <div className={`${styles.hero__content}}`}></div>
        </div>
      </main>
      <section className={styles.aboutme}></section>
      <section className={styles.projects}></section>
      <section className={styles.contactme}>
        <Contact />
      </section>
      <section className={styles.blog}></section>
    </>
  )
}
