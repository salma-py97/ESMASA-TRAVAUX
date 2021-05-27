import Button from './Layout/Button'
import ButtonStyles from '../styles/Button.module.css'
import Homestyles from '../styles/HeroSection.module.css'


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
      <div className={container}>
        <h1>ESMASA TRAVAUX</h1>
        <p>
          {/* Leader dans la construction et la rénovation de bâtiments durables */}
          LEADER DANS LA CONSTRUCTION ET LA RÉNOVATION DE BÂTIMENTS DURABLES
        </p>
        <div className={hero_btns}>
          <Button className={`${btn} ${btn__outline} ${btn__large}`} >Contactez-nous</Button>
          <Button className={`${btn} ${btn__primary} ${btn__large}`} >Contactez-nous</Button>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
