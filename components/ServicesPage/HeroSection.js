import styles from '../../styles/ServicesPage/HeroSection.module.css'

const HeroSection = () => {


  const {wrapper, span, title} = styles


  return (
    <div className={`d-flex justify-content-center align-items-center ${wrapper}`}>
      <div  className="d-flex align-items-center justify-content-center">
        <span className={`text-warning mr-md-5 mr-sm-3 pb-4 d-flex align-items-center ${span}`}>«</span>
        <h1 className={`text-uppercase text-white ${title}`}> NOS SERVICES </h1>
        <span className={`text-warning ml-md-5 ml-sm-3 pb-4 d-flex align-items-center ${span}`}>»</span>
      </div>
    </div>
  )
}

export default HeroSection
