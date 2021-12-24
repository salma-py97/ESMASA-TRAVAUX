import styles from '../../styles/ServicesPage/Break.module.css'
import Link from 'next/link'

import buttonStyles from '../../styles/LayoutStyles/Button.module.css'
const YellowBreak = () => {
  const {bg, hr, button} = styles
  const {btn, btn__outline, btn__wide} = buttonStyles
  return (
    <div className={`text-white text-center d-flex justify-content-center align-items-center py-5 ${bg}`}>
      <div className="py-5 d-flex justify-content-between align-items-center flex-column" >
      <h2 className="text-center mb-0">NOS PROJETS</h2>
      <hr className={hr} />
      <h4 className="text-center mt-4">Consultez les projets qu'on a réalisés</h4>
      <div className='d-flex flex-wrap align-items-center justify-content-center'> 
        <Link href="/projets" >
          <button className={`mt-4 ${button} ${btn} ${btn__outline} ${btn__wide}`}>NOS PROJETS</button>
        </Link>
        <Link href="/contact" >
          <button className={`mt-4 ${button} ${btn} ${btn__outline} ${btn__wide}`}>CONTACTEZ NOUS</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default YellowBreak