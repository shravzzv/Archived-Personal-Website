import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div className={styles.container} id='about'>
        <h1>About me</h1>
        <div className={styles.imgsection}>
          <Image
            src='/headshot.jpg'
            alt='headshot'
            width={100}
            height={100}
            className={styles.headshot}
          />
          <div className={styles.desc}>
            <p className={styles.heading}>Why I love programming</p>
            <p className={styles.answer}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              mollitia, facilis quia veritatis eos temporibus dolorum aspernatur
              reiciendis doloribus impedit.
            </p>
            {/* todo: insert skills, experience, CV */}
          </div>
          <div className={styles.technologiessection}>
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
        </div>
      </div>
    </div>
  )
}

export default About
