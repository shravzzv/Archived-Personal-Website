import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import thefacebookproject from 'public/project images/thefacebookproject.jpeg'
import socialmediaproject from 'public/project images/socialmediaproject.jpeg'
import personalizeIt from 'public/project images/personalizeIt.jpeg'
import portfolio from 'public/project images/portfolio.jpeg'

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
            <h3 className={styles.project__title}>Thefacebook 2004</h3>
            <p className={styles.project__desc}>
              A MERN stack clone of the first version of Facebook.
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/thefacebook.comclient'
                target='_blank'
              >
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
              href='https://happinessproject.vercel.app/'
              target='blank'
              className={styles.imgContainer}
            >
              <Image
                src={socialmediaproject}
                alt='project name'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>The Happiness Project</h3>
            <p className={styles.project__desc}>
              An app that helps people prioritize happiness
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/thehappinessproject'
                target='_blank'
              >
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
              href='https://personalizeit.vercel.app'
              target='blank'
              className={styles.imgContainer}
            >
              <Image
                src={personalizeIt}
                alt='project name'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>PersonalizeIt</h3>
            <p className={styles.project__desc}>
              An online store of quality productivity tools for knowledge
              workers
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/templates'
                target='_blank'
              >
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
            <Link href='#' className={styles.imgContainer}>
              <Image
                src={portfolio}
                alt='this website'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>My Personal website</h3>
            <p className={styles.project__desc}>
              This website you're on, created using Next.js 13
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/my-portfolio'
                target='_blank'
              >
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
