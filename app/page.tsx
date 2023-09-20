import Navbar from '@/components/Navbar'
import FirstPage from '@/pages/FirstPage'
import SecondPage from '@/pages/SecondPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
      <Navbar />
      <FirstPage />
      </section>
      <section>
        <SecondPage />
      </section>
    </main>
  )
}
