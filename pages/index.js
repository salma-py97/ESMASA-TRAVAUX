
import ClientCarousel from '../components/HomePage/ClientCarousel'
import HeroSection from '../components/HomePage/HeroSection'
import Services from '../components/HomePage/Services'
import Choisir from '../components/HomePage/Choisir'
import APropos from '../components/HomePage/APropos'
import Valeurs from '../components/HomePage/Valeurs'
import Mission from '../components/HomePage/Mission'
import Break from '../components/HomePage/Break'
import YellowBreak from '../components/HomePage/YellowBreak'




export default function Home() {


  return (

    <>
      <HeroSection />
      <Services />
      <APropos />
      <Mission />
      {/* <Break /> */}
      <Valeurs />
      <ClientCarousel />
      <Choisir />
      <YellowBreak />

    </>
  )
}
