import Button from '../components/Layout/Button'
import ButtonStyles from '../styles/Button.module.css'
import Homestyles from '../styles/Home.module.css'




export default function Home() {

  const {hero_container, hero_btns, video} = Homestyles
  const {btn,
    btn__outline,
    btn__mobile,
    btn__link,
  btn__large} = ButtonStyles;



  return (
    <div className={hero_container}>

      <video autoplay muted loop className={video}>
        <source src="./video-1.mp4" type="video/mp4"/>
      </video>
    

      <h1>ESMASA TRAVAUX</h1>
      <p>what are you waiting for?</p>
      <div className={hero_btns}>
        <Button className={` ${btn} ${btn__outline} ${btn__large}`} >Contactez-nous</Button>

      </div>
    </div>
  )
}
