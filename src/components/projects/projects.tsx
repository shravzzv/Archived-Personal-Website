import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <div className={styles.container} id='portfolio'>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.project}>
          <Link
            href='https://social-media-app-five-gamma.vercel.app/'
            target='blank'
            className={styles.imgContainer}
          >
            <Image
              src='/project images/socialmediaproject.jpeg'
              alt='project name'
              width={200}
              height={100}
            />
          </Link>
          <h3 className={styles.project__title}>Socialio</h3>
          <p className={styles.project__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nulla magni a architecto alias saepe!
          </p>
          <div className={styles.project__socials}>
            <Link href=''>
              <Image
                src='/social media svgs/github.svg'
                alt='github'
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <Link
            href='https://thefacebook.vercel.app/'
            target='blank'
            className={styles.imgContainer}
          >
            <Image
              src='/project images/thefacebookproject.jpeg'
              alt='project name'
              width={200}
              height={100}
            />
          </Link>
          <h3 className={styles.project__title}>Thefacebook first version</h3>
          <p className={styles.project__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nulla magni a architecto alias saepe!
          </p>
          <div className={styles.project__socials}>
            <Link href=''>
              <Image
                src='/social media svgs/github.svg'
                alt='github'
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
