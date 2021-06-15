import styles from '../../styles/ProjectsPage/Process.module.css'
import Image from 'next/image'


const Process = () => {
  const {wrapper, inner_wrapper, hr, title} = styles
// /* https://i.ibb.co/MsNqLgg/construction-icon-2-1.png
// https://i.ibb.co/Wfccphr/construction-horizontal-arrow.png
// https://i.ibb.co/17HdqsZ/construction-icon-3-1.png
// https://i.ibb.co/7SRcNBF/construction-icon-1-1.png */
  
  return (
    <div className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}>
      <div className={`container d-flex flex-column justify-content-center align-items-center py-5 ${inner_wrapper}`}>
        <h3 className="text-center">CONSTRUCTION PROCESS</h3>
        <hr className={hr}></hr>
        <div className="row justify-content-between align-items-center mt-5">
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center mb-sm-4 mb-0">
            <Image 
              src="https://i.ibb.co/7SRcNBF/construction-icon-1-1.png"
              height={150}
              width={150}
              quality={100}
              alt=""
            />
            <h1 className={`text-center text-warning mt-4 ${title}`}>01</h1>
            <h5>PLAN / PROJECT</h5>
            <p className={`text-center text-dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet?</p>
          </div>
          <div className={`col-md-1 d-none d-md-flex justify-content-center align-items-center`}>
            <Image 
              src="https://i.ibb.co/Wfccphr/construction-horizontal-arrow.png"
              height={80}
              width={50}
              quality={100}
              alt="arrow" 
            />
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center mb-sm-4 mb-0">
            <Image 
              src="https://i.ibb.co/MsNqLgg/construction-icon-2-1.png"
              height={150}
              width={150}
              quality={100}
              alt=""
            />
            <h1 className={`text-center text-warning mt-4 ${title}`}>02</h1>
            <h5>DESIGN-BUILD</h5>
            <p className={`text-center text-dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet?</p>
          </div>
          <div className={`col-md-1 d-none d-md-flex justify-content-center align-items-center`}>
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
            <h5>PROJECT-BUILD</h5>
            <p className={`text-center text-dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Process
