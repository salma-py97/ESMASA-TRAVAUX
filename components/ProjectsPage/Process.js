import styles from '../../styles/ProjectsPage/Process.module.css'
import Image from 'next/image'


const Process = () => {
  const {wrapper, inner_wrapper, hr, title, section_title, arrow, row, h5} = styles
// /* https://i.ibb.co/MsNqLgg/construction-icon-2-1.png
// https://i.ibb.co/Wfccphr/construction-horizontal-arrow.png
// https://i.ibb.co/17HdqsZ/construction-icon-3-1.png
// https://i.ibb.co/7SRcNBF/construction-icon-1-1.png */
  
  return (
    <div className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}>
      <div className={`container d-flex flex-column justify-content-center align-items-center py-5 ${inner_wrapper}`}>
        <h3 className={`text-center ${section_title}`}>PROCESSUS DE CONSTRUCTION</h3>
        <hr className={hr}></hr>
        <div className={`row justify-content-between align-items-start mt-5 ${row}`}>
          <div className="col-md-3 m-0 d-flex flex-column justify-content-center align-items-center mb-sm-4 mb-md-0">
            <Image 
              src="https://i.ibb.co/7SRcNBF/construction-icon-1-1.png"
              height={150}
              width={150}
              quality={100}
              alt=""
            />
            <h1 className={`text-center text-warning mt-4 ${title}`}>01</h1>
            <h5 className={h5}>ÉTUDES / CONCEPTION</h5>
            <p className={`text-center text-dark`}>Nous collaborons avec des bureaux d'études reconnus pour l'établissement des dossiers de conception selon les normes et les standards nationaux et internationaux.
            {/* préparer des plans détaillés et déterminer les besoins en fournitures de chaque projet. */}
            </p>
          </div>
          <div className={`col-md-1 d-none d-md-flex ${arrow}`}>
            <Image 
              src="https://i.ibb.co/Wfccphr/construction-horizontal-arrow.png"
              height={80}
              width={50}
              quality={100}
              alt="arrow" 
            />
          </div>
          <div className="col-md-3 m-0 d-flex flex-column justify-content-center align-items-center mb-sm-4 mb-md-0">
            <Image 
              src="https://i.ibb.co/MsNqLgg/construction-icon-2-1.png"
              height={150}
              width={150}
              quality={100}
              alt=""
            />
            <h1 className={`text-center text-warning mt-4 ${title}`}>02</h1>
            <h5 className={h5}>APROBATION</h5>
            <p className={`text-center text-dark`}>Tous les dossiers de construction sont soumis pour aprobation à des bureaux de controle de renom avant le début d'exécution. 
            {/* Suite à la mise au point définitive de la conception, nous constituons notre dossier de construction et nous le déposons auprès des bureaux de contrôle pour aprobation. */}
            </p>
          </div>
          <div className={`col-md-1 d-none d-md-flex ${arrow}`}>
            <Image 
              src="https://i.ibb.co/Wfccphr/construction-horizontal-arrow.png"
              height={80}
              width={50}
              quality={100}
              alt="arrow" 
            />
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <Image 
              src="https://i.ibb.co/17HdqsZ/construction-icon-3-1.png"
              height={150}
              width={150}
              quality={100}
              alt=""
            />
            <h1 className={`text-center text-warning mt-4 ${title}`}>03</h1>
            <h5 className={h5}>RÉALISATION</h5>
            <p className={`text-center text-dark`}>
              {/* Enfin, après reception de l'Ordre de service, nous entamons notre construction pour vous livrer votre bâtiment dans les plus brefs délais. */}
              Durant tout le processus de réalisation, nous veillons au strict respect des plans approuvés en sus des consignes de sécurité, santé au travail, hygiène et le plan de gestion environnementale et sociale.
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Process
