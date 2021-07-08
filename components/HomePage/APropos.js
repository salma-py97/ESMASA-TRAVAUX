import styles from '../../styles/HomePage/APropos.module.css'
import Button from '../Layout/Button'
import buttonStyles from '../../styles/LayoutStyles/Button.module.css'
import Link from 'next/link'
const APropos = () => {
  const {bg, hr, desc, title} = styles
  const {btn, btn__yellow, btn__dark} = buttonStyles
  return (
    <div className={`py-5 d-flex justify-content-center align-items-center ${bg}`}>
      <div className="row d-flex justify-content-between align-items-start container py-5">
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
          <h2 className={title} >À PROPOS</h2>
          <hr className={`mx-0 mb-5 ${hr}`} />
          <p className={`lead text-uppercase ${desc}`}>VOTRE VISION. NOTRE métier.</p>
          {/* <p className={`${desc}`}>Planification effective, conception efficiente et construction de qualité</p> */}
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <p>Esmasa Travaux a été fondée en 2008 avec pour finalité la réalisation clef en mains des travaux de génie civil et assainissement...  
          </p>
          <p>
          Avec plus de 13 ans d'expérience dans le secteur de la construction des bâtiments, nous avons entrepris de nombreux projets ambitieux avec des clients de renom. </p>
          <p>
          Ayant par ailleurs, accumulé des compétences techniques, du savoir-faire en matière de conception, études et réalisation des infrastructures. </p>
          <p>
          Esmasa Travaux est fière de sa gestion moderne et de son personnel technique qualifié et professionnel, utilisant des systèmes organisationnels efficaces pour diversifier ses activités liées au domaine de Génie civil et assainissement qui couvrent toute la gamme des services.
          </p>
          <div className="d-flex flex-wrap">
          <Link href="/contact">
            <Button className={`ml-0 ${btn} ${btn__yellow}`}>Contactez-nous</Button>
          </Link>
          <Link href="/projets">
            <Button className={`ml-0 ml-xl-3 ${btn} ${btn__dark}`}>Consultez Nos Projets</Button>
          </Link>

          </div>
        </div>
      </div> 
    </div>
  )
}

export default APropos
