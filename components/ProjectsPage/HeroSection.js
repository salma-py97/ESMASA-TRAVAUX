import styles from '../../styles/ProjectsPage/HeroSection.module.css'
import Image from 'next/image'

const HeroSection = () => {

  const {wrapper, title} = styles

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center ${wrapper}`}>
<Image src="https://i.ibb.co/pb0P1Mv/sep-line-white.png
"
height={13}
width={680}
alt="" />
      <h1 className={`my-3 text-warning ${title}`}>NOS PROJETS</h1>
<Image src="https://i.ibb.co/pb0P1Mv/sep-line-white.png
"
height={13}
width={680}
alt="" />      
    </div>
  )
}

export default HeroSection
