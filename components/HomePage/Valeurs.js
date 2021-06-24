import styles from '../../styles/HomePage/Valeurs.module.css'

const Valeurs = () => {
  const {bg, title, hr, valeurs, wrapper, value_div, value_title, box, value_details} = styles
  return (
    <div className={`py-5 ${bg}`}>
      <div className={`container py-4 ${wrapper}`}>
        <h2 className={`text-center mb-4 ${title}`}>Nos Valeurs <hr className={hr} /></h2>
        <p className="lead text-center mb-5 px-md-4">Les caractéristiques qui définissent qui nous sommes et comment nous abordons notre travail.</p>
        <div className={`row justify-content-around align-items-center ${valeurs}`}>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Intégrité</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Transparence</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Excellence</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Professionalisme</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Collaboration</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor! Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Qualité</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Innovation</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3 text-dark d-flex justify-content-center align-items-center">
            {/* <div className={`d-flex justify-content-center align-items-center flex-column py-4 px-3 text-center h-100 w-100 ${box}`}> */}
              <h4 className={`mt-3 mb-4 ${value_title}`}>Sécurité & Santé</h4>
              {/* <p className={`px-2 ${value_details}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obca Lorem ipsum dolor sit amet.</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Valeurs
