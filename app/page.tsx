import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
      <Navbar />
      <HomePage />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
      <Projects />
      </section >
      <section id="contact">
      <ContactMe />
      </section>
    </main>
  )
}
