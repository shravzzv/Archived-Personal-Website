import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={`${styles.container}`} id='about'>
        <h2 className={styles.heading}>About me</h2>
        <div className={styles.about__container}>
          <p className={styles.aboutme}>
            Hi there! I'm Sai Shravan, a passionate and dedicated programmer
            specializing in web development and design. With a keen eye for
            detail and a love for creating impactful digital experiences, I
            strive to bring innovative solutions to life.
          </p>
          <div className={styles.section}>
            <h3 className={styles.section__title}>background </h3>
            <p className={styles.section__content}>
              I started my journey in the medical field, enrolling in an
              undergraduate course at RIMS Adilabad. Although I didn't proceed
              past the first semester, this experience sparked my curiosity for
              learning and personal growth.
            </p>
            <p className={styles.section__content}>
              During the subsequent years, I took the opportunity to explore
              various paths and enhance my skill set. In September 2020, I
              completed a course on JavaScript through the Google Grasshopper
              platform, obtaining certificates that validate my knowledge in
              this area.Additionally, I utilized this time for self-study and
              gained proficiency in other web development technologies.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.section__title}>experience</h3>
            <p className={styles.section__content}>
              November 2021 marked a pivotal moment in my career aspirations, as
              I embarked on the path of becoming an entrepreneur. Motivated by
              an idea I had, I started developing an app. Throughout this
              journey, I honed my skills in web app development, utilizing
              JavaScript libraries such as React and frameworks like Next.js. I
              also gained hands-on experience with source control systems like
              Git and GitHub.
            </p>
            <p className={styles.section__content}>
              While the initial app I created wasn't perfect or polished, it
              provided invaluable lessons and insights. In March 2022, I decided
              to apply to Y Combinator, a prestigious startup accelerator.
              Although I received a rejection, I recognized the importance of
              further skill development and began focusing on project-based
              learning.
            </p>
            <p className={styles.section__content}>
              Since then, I have been actively working on building practical
              projects, continually refining my coding abilities and
              strengthening my understanding of web development best practices.
              Through self-study, online resources, and YouTube tutorials, I
              have gained practical expertise in front-end technologies, project
              management, and collaborative workflows.
            </p>
            <p className={styles.section__content}>
              As I progress on this path, I am committed to further expanding my
              knowledge, tackling new challenges, and pursuing opportunities
              that allow me to apply my skills and make meaningful
              contributions.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.section__title}>skills</h3>
            <h4 className={styles.section__subtitle}>Web development</h4>
            <div className={styles.icons}>
              <Image
                src='/programmer svgs/html.svg'
                alt='html'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/css.svg'
                alt='css'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/js-2.svg'
                alt='javascript'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/react-2.svg'
                alt='react'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/nextjs.svg'
                alt='nextjs'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/nodejs.svg'
                alt='nodejs'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/mongodb.svg'
                alt='mongodb'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/typescript.svg'
                alt='typescript'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/git.svg'
                alt='git'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/scss.svg'
                alt='scss'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/figma.svg'
                alt='figma'
                width={50}
                height={50}
                className={styles.techIcon}
              />
              <Image
                src='/programmer svgs/postgresql.svg'
                alt='postgresql'
                width={50}
                height={50}
                className={styles.techIcon}
              />
            </div>
            <p className={styles.section__content}>I can type at 70 WPM ⌨</p>
            <h4 className={styles.section__subtitle}>Communication</h4>
            <p className={styles.section__content}>
              Fluent in English and Telugu, with strong written and verbal
              communication skills. Knowledgeable in Hindi and French.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.section__title}>hobbies and interests</h3>
            <p className={styles.section}>I enjoy reading and writing code.</p>
          </div>
          <div className={`${styles.links} ${styles.section}`}>
            <Link href='/resume.pdf' target='blank' className={styles.cv}>
              Download CV
            </Link>
            <Link href='#contact' className={styles.contact}>
              Let's get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
