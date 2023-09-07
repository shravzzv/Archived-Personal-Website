import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import thefacebookproject from 'public/project images/thefacebookproject.jpeg'
import personalizeIt from 'public/project images/personalizeIt.jpeg'
import portfolio from 'public/project images/portfolio.jpeg'
import happinessProject from 'public/project images/happinessProject.jpeg'

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
            <Link
              href='https://shravzzv.github.io/ODIN-Admin-dashboard-project/'
              className={styles.imgContainer}
              target='_blank'
            >
              <Image
                src={portfolio}
                alt='this website'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>Admin Dashboard</h3>
            <p className={styles.project__desc}>
              The Admin Dashboard project is the final project in The Odin
              Project's Intermediate HTML and CSS course. It is designed to
              showcase my skills in using HTML, CSS, and layout techniques, with
              a focus on Grid and Flexbox.
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/ODIN-Admin-dashboard-project'
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
              href='https://shravzzv.github.io/ODIN-Tic-tac-toe-project'
              className={styles.imgContainer}
              target='_blank'
            >
              <Image
                src={portfolio}
                alt='this website'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>Tic Tac Toe</h3>
            <p className={styles.project__desc}>
              A Tic Tac Toe game you can play in your browser! It is intended to
              demonstrate my skills in implementing the JS Factory Functions and
              the Module pattern.
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/ODIN-Tic-tac-toe-project'
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
              href='https://shravzzv.github.io/ODIN-calculator'
              className={styles.imgContainer}
              target='_blank'
            >
              <Image
                src={portfolio}
                alt='this website'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>Calculator</h3>
            <p className={styles.project__desc}>
              A simple calculator web application built using vanilla
              JavaScript, HTML, and CSS. It allows users to perform basic
              arithmetic calculations in a user-friendly interface.
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/ODIN-calculator'
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
              href='https://shravzzv.github.io/ODIN-Library-project'
              className={styles.imgContainer}
              target='_blank'
            >
              <Image
                src={portfolio}
                alt='this website'
                className={styles.project__image}
              />
            </Link>
            <h3 className={styles.project__title}>Simple Library</h3>
            <p className={styles.project__desc}>
              A small library app which utilizes the Objects and Object
              Constructors JS design pattern. Built reponsively using HTML and
              CSS.
            </p>
            <div className={styles.project__socials}>
              <Link
                href='https://github.com/shravzzv/ODIN-Library-project'
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
