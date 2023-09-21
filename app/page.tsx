import Navbar from '@/components/Navbar'
import HomePage from '@/pages/HomePage'
import AboutMe from '@/pages/AboutMe'
import Projects from '@/pages/Projects'
import ContactMe from '@/pages/ContactMe'

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
