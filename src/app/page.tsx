import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Hero from '@/components/hero/hero'
import Projects from '@/components/projects/projects'

export const metadata = {
  title: 'Sai Shravan',
  description: 'Welcome to my portfolio website',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
