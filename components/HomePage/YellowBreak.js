import Link from 'next/link'

import styles from '../../styles/HomePage/YellowBreak.module.css'
import buttonStyles from '../../styles/LayoutStyles/Button.module.css'
const YellowBreak = () => {
  const {bg, hr} = styles
  const {btn, btn__outline, btn__wide} = buttonStyles
  return (
    <div className={`text-white text-center d-flex justify-content-center align-items-center ${bg}`}>
      <div className="py-5 d-flex justify-content-between align-items-center flex-column" >
      <h2 className="text-center mb-0">NOS PROJETS</h2>
      <hr className={hr} />
      <h4 className="text-center mt-4">Consultez les projets qu'on a réalisé</h4>
      <Link href="/projets" >
        <button className={`mt-4 ${btn} ${btn__outline} ${btn__wide}`}>NOS PROJETS</button>
      </Link>
    </div>
  </div>
  )
}

export default YellowBreak
