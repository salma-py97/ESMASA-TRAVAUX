
import ClientCarousel from '../components/ClientCarousel'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Choisir from '../components/Choisir'
import APropos from '../components/APropos'
import Valeurs from '../components/Valeurs'
import Mission from '../components/Mission'
import Break from '../components/Break'
import YellowBreak from '../components/YellowBreak'




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
