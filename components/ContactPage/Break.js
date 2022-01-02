import styles from '../../styles/ContactPage/Break.module.css'
import Button from "../Layout/Button"
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"
import Link from "next/link"

const Break = () => {
  const {content, h4, p} = styles
  return (
    <div className={`${content} my-5 container` }>
      <Link href="/">
        <p className={`mb-5 ${p} pr-3 py-3 d-inline border`}>ESMASA  Travaux</p>
      </Link>
      <h4 className={`${h4} mt-4`}>
      Brique par brique, nous transformons vos rêves en réalité.
      </h4>
    </div>
  )
}

export default Break
