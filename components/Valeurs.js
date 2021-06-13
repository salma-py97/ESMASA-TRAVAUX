import styles from '../styles/Valeurs.module.css'

const Valeurs = () => {
  const {bg, title, hr, valeurs, wrapper, value_div, value_title, value_details} = styles
  return (
    <div className={`py-5 ${bg}`}>
      <div className={`container py-4 ${wrapper}`}>
        <h2 className={`text-center ${title}`}>Nos Valeurs</h2>
        <hr className={hr} />
        <div className={`row my-5 justify-content-around align-items-center ${valeurs}`}>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 p-3 text-dark d-flex justify-content-center align-items-center">
            <div className={`bg-white d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center`}>
              <h4 className={`mt-3 mb-4 ${value_title}`}>dolor sit amet consectetur</h4>
              <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Valeurs
