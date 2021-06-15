import styles from '../../styles/HomePage/APropos.module.css'
import Button from '../Layout/Button'
import buttonStyles from '../../styles/LayoutStyles/Button.module.css'
import Link from 'next/link'
const APropos = () => {
  const {bg, hr, desc, title} = styles
  const {btn, btn__yellow, btn__dark} = buttonStyles
  return (
    <div className={`py-5 ${bg}`}>
      <div className="row d-flex justify-content-around align-item-center container">
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2 className={title} >À PROPOS</h2>
          <hr className={`border mx-0 mb-5 ${hr}`} />
          <p className={`lead ${desc}`}>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eveniet accusamus veniam cupiditate optio ullam exercitationem ex facilis. In nesciunt atque fugit? Vitae repudiandae iste ipsa eos voluptate magni at fugiat neque nulla, deleniti rerum eaque tempora tenetur necessitatibus perspiciatis nemo omnis aliquam consectetur ut accusantium hic. Minus, eveniet labore!</p>
          <div className="d-flex">
          <Link href="/contact">
            <Button className={`${btn} ${btn__yellow}`}>Contactez-nous</Button>
          </Link>
          <Link href="/projets">
            <Button className={`${btn} ${btn__dark}`}>Consultez Nos Projets</Button>
          </Link>

          </div>
        </div>
      </div> 
    </div>
  )
}

export default APropos
