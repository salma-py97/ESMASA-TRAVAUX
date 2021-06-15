import Button from '../Layout/Button'
import ButtonStyles from '../../styles/LayoutStyles/Button.module.css'
import Homestyles from '../../styles/HomePage/HeroSection.module.css'
import Link from 'next/link'


const HeroSection = () => {

  const {hero_container, hero_btns, video, container} = Homestyles
  const {btn,
    btn__outline,
    btn__primary,
    btn__mobile,
    btn__link,
    btn__large} = ButtonStyles;


  return (
    <div className={hero_container}>
      {/* <video
        loop
        muted
        autoPlay
        className={video}>
        <source src="/videos/video-1.mp4" type="video/mp4"/>
      </video> */}
      <div className={`mt-5 ${container}`}>
        <h1>ESMASA TRAVAUX</h1>
        <p>
          {/* Leader dans la construction et la rénovation de bâtiments durables */}
          LEADER DANS LA CONSTRUCTION ET LA RÉNOVATION DE BÂTIMENTS DURABLES
        </p>
        <div className={hero_btns}>
          <Link href="/contact" >
            <Button className={`${btn} ${btn__outline} ${btn__large}`} >Contactez-nous</Button>
          </Link>
          <Link href="projets" >
            <Button className={`${btn} ${btn__primary} ${btn__large} px-5`} >Nos Projets</Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
