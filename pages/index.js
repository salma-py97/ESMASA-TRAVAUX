
import ClientCarousel from '../components/ClientCarousel'
// import Carousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Choisir from '../components/Choisir'




export default function Home() {


  return (

    <>
      <HeroSection />
      <Services />

      {/* <Carousel /> */}
      <ClientCarousel />
      <Choisir />

    </>
  )
}
