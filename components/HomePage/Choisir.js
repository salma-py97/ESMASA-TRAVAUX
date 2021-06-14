import styles from '../../styles/Choisir.module.css'
import Image from 'next/image'

import { useState } from 'react'

import { HandThumbsUp } from 'react-bootstrap-icons';

const Choisir = () => {

  const {title,
    bg,
    content,
    reason,
    reason_div,
    reason_title
  } = styles
  return (
    <div className={`py-5 d-flex justify-content-center align-items-center ${bg}`}>
      <div className={`container d-flex flex-column justify-content-center align-items-center ${content}`}>
        <h3 className={`text-center mb-3 pt-5 text-warning ${title}`}>
          POURQUOI NOUS CHOISIR
        </h3>
        <h4 className="text-center text-white mb-5">NOS POINTS FORTS</h4>
        <div className={`row d-flex justify-content-center align-items-start my-5 ${content}`}>
          <div className="col-md-6 mb-3">
            <div className={`row flex-md-row-reverse ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start" >
              <HandThumbsUp className="text-white mt-3" size={76} />
              </div>
              <div className="col-9">
                <h3 className={reason_title}>We are Sustainable</h3>
                <p className={reason}>We work hard at maintaining a clean and healthy environment for our workers, neighbours, and end users. We strive for long term success for our company, clients and our environment</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row ${reason_div}`}>
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                  src="https://i.ibb.co/rtRT7M6/image-1.png"
                  height={76}
                  width={76}
                  alt="excavator"
                />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Quality Construction</h3>
                <p className={reason}>Our expertise is commissioned for a wide range of projects including high-rises and low-rises, public and institutional buildings.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row flex-md-row-reverse ${reason_div}`}>
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                  src="https://i.ibb.co/RH8RGW4/image-2.png"
                  height={76}
                  width={76}
                  alt="icon"
                />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Professional Team</h3>
                <p className={reason}>Canada Construction Contractors Inc. takes pride in its modern management and highly professional technical personnel. We are fully bonded and insured. Our workers are trained with the latest industry safety standards and requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                src="https://i.ibb.co/bFbjzmR/image-3.png"
                height={76}
                width={76}
                alt="icon"
              />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Top Materials</h3>
                <p className={reason}>From the alteration and restoration to stone and steel column retro fit or ornamental iron and sheet metal replacement, and mortar stone repair, we are prepared to undertake complete restorations of historically valuable exteriors..</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row flex-md-row-reverse ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                  src="https://i.ibb.co/xSDQTRH/image-4.png"
                  height={76}
                  width={76}
                  alt="icon"
                />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Health and Safety</h3>
                <p className={reason}>Canada Construction Contractors Inc. is committed to take every reasonable precaution to prevent injuries and maintain a safe and healthy environment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                src="https://i.ibb.co/Jp5DbXQ/image-5.png"
                height={76}
                width={76}
                alt="icon"
              />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>We are Passionate</h3>
                <p className={reason}>With over 20 years of work experience in the building industry, we have undertaken many challenging projects and accumulated experiences in design and building solutions, project management services, building trades and engineering work. certified tools</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row flex-md-row-reverse ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start">
              <div className="mt-3">
                <Image
                src="https://i.ibb.co/TLDyFP6/image-7.png"
                height={76}
                width={76}
                alt="icon"
              />
              </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Technology</h3>
                <p className={reason}>We pride ourselves in using the newest technologies and efficient organizational systems related to the construction domain.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className={`row ${reason_div}`} >
              <div className="col-3 d-flex justify-content-center align-items-start">
                <div className="mt-3">
                  <Image
                  src="https://i.ibb.co/YysJJvm/image-6.png"
                  height={76}
                  width={76}
                  alt="icon"
                />

                </div>
              </div>
              <div className="col-9">
                <h3 className={reason_title}>Innovative</h3>
                <p className={reason}>One of our objectives is to satisfy clients' requirements by building complex projects at the highest technological and quality level</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Choisir
