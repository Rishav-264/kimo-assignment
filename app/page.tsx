import Image from 'next/image'
import { Banner } from './components/Banner/Banner'
import { Highlights } from './components/Highlights/Highlights'
import { Categories } from './components/Categories/Categories'
import { Footer } from './components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Banner />
      <Highlights />
      <Categories />
      <Footer />
    </div>
  )
}
