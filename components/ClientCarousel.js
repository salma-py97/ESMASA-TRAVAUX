import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'next/image'

import Carousel from 'react-bootstrap/Carousel'
import carouselStyles from '../styles/Carousel.module.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const {carousel_container, carousel_title, title, confiance, confiance_title, row} = carouselStyles


  return (
    <div className="container">
      <div className={carousel_container}>
        <div className={carousel_title}>
          <p className={title}>
            Nos Clients
          </p>
        </div>
      


    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={2000} className="d-none d-md-block" >
      
      <Carousel.Item>
        <div className={row}>

          <div className="row d-flex align-items-center">
            <div className="col md-3">
              <Image src="https://i.ibb.co/fMnC75n/ciment-du-maroc.jpg" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-3">
              <Image src="https://i.ibb.co/gvXM4yp/casa-prestations.jpg"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-3">
              <Image src="/images/amendis.jpg" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-3">
              <Image src="/images/veolia-redal.jpg" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
          </div>
        </div>


      </Carousel.Item>
      <Carousel.Item>
        <div className={row}>

          <div className="row d-flex align-items-center" >
            <div className="col md-2">
              <Image src="https://i.ibb.co/TMBV2KP/Akwagroup.jpg" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-2">
              <Image src="https://i.ibb.co/LrNgX4g/sonasid.jpg" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-2">
              <Image src="/images/ziz.png" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-2">
              <Image src="/images/logo_tmpa.png" alt="ESMASA TRAVAUX"
                    width={1050}
                    height={500}/>

            </div>
            <div className="col md-2">
              <Image src="/images/afriquia.png" alt="ESMASA TRAVAUX"
                    width={150}
                    height={200}/>

            </div>
          </div>
        </div>


      </Carousel.Item>
     
    </Carousel>
    <div className={confiance}>
          <p className={confiance_title}>
            ils nous font confiance!
          </p>
        </div>
    </div>
  </div>
  );
}
export default ControlledCarousel
