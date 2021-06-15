import styles from '../../styles/ServicesPage/ServicesDetails.module.css'
import Image from 'next/image'

const ServicesDetails = () => {


  const {wrapper} = styles


  return (
    <div className={`d-flex justify-content-center align-items-center py-5 my-5 ${wrapper}`}>
      {/* <div>
        
      <Image src="https://i.ibb.co/L0yk8QS/construction-crane.png"
      // layout="fill"
      // objectFit="contain"
      layout="intrinsic"
      width={900}
      height={1075}
      alt="" />
      </div> */}
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default ServicesDetails
