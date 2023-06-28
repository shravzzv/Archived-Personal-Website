import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import thefacebookproject from 'public/project images/thefacebookproject.jpeg'
import socialmediaproject from 'public/project images/socialmediaproject.jpeg'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={`${styles.container}`}>
        <h2 className={styles.heading} id='portfolio'>
          Portfolio
        </h2>
        <div className={styles.projects__container}>
          <div className={styles.project}>
            <Link
              href='https://social-media-app-five-gamma.vercel.app/'
              target='blank'
              className={styles.imgContainer}
            >
              <Image
                src={socialmediaproject}
                alt='project name'
                className={styles.project__image}
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
                src={thefacebookproject}
                alt='project name'
                className={styles.project__image}
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
    </div>
  )
}

export default Projects
