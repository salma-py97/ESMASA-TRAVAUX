import styles from '../../styles/ProjectsPage/Break.module.css'
import Button from "../Layout/Button"
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"
import Link from "next/link"



const Break = () => {
  const {content} = styles
  const {btn, btn__yellow, btn__large, btn__outline__black} = buttonStyles
  return (
    <div className={`container my-5 mx-2 mx-lg-5 px-lg-5 d-flex flex-column align-items-start ${content}`}>
      <h4>        
       Un savoir-faire reconnu, des équipes dédiées, une synergie des expertises : ESMASA Travaux offre une capacité d’ingénierie de renom au bénéfice des projets en amont et des chantiers en cours.
      </h4>
      <div className='d-flex '>
      <Link href="/#apropos">
						<Button className={`ml-0 ${btn} ${btn__yellow} ${btn__large}`}>
							A Propos de Nous
						</Button>
			</Link>
      <Link href="/services">
						<Button className={`ml-0 ${btn} ${btn__outline__black}`}>
							Nos Services
						</Button>
			</Link>
      </div>
    </div>
  )
}

export default Break
