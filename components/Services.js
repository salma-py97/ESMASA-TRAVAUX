import Image from 'next/image'
import styles from '../styles/Services.module.css'

const Services = () => {

  const {service,
  nos_services,
  hr
  } = styles


  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
      <div className="my-3">
        <h2 className={nos_services}>Nos Services</h2>
        <hr className={hr} />
      </div>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-7-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Building Construction</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-5-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Building Repairs</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-2-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Demolition</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-1-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Foundation</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-6-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Painting & Exterior</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-3 text-center">
              <Image
                src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/construction-icon-4-gray.png"
                height={70}
                width={70}
                alt="icon"
              />
            </div>
            <div className="col-9">
              <h4 className={service}>Site Management</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat deleniti provident eius voluptate architecto praesentium?</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services
