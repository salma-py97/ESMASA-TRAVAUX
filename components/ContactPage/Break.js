import styles from '../../styles/ContactPage/Break.module.css'
import Button from "../Layout/Button"
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"
import Link from "next/link"

const Break = () => {
  const {content, h4, h2} = styles
  return (
    <div className={`${content} my-5 container` }>
      <Link href="/">
        <h2 className={`mb-4 fw-bold ${h2}`}><span className='text-primary'>ESMASA</span> <span className='text-danger'> Travaux</span></h2>
      </Link>
      <h4 className={`${h4}`}>
      Brique par brique, nous transformons vos rêves en réalité.
      </h4>
    </div>
  )
}

export default Break
