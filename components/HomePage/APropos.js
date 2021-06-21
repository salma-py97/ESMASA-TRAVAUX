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
          <p>Esmasa a été fondée en 2008 avec pour finalité de ...... Avec plus de 20 ans d'expérience professionnelle dans le secteur de la construction, nous avons entrepris de nombreux projets exigeants et accumulé des compétences, du savoir-faire et de l'expérience en matière de conception et de construction, de services de gestion de projets, de métiers du bâtiment et de travaux d'ingénierie. Aujourd'hui, Esmasa offre des services de gestion et coordonne des métiers spécialisés pour des projets industriels/commerciaux. Esmasa est fière de sa gestion moderne et de son personnel technique qualifié et professionnel, utilisant des systèmes organisationnels efficaces pour diversifier ses activités liées au domaine de la construction qui couvrent toute la gamme des services auxiliaires.</p>
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
