import styles from "../styles/Valeurs.module.css"

const Valeurs = () => {
  const {wrapper, yellow_div, title, hr, valeurs, valeur_title, valeur_details} = styles
  return (
    <div className={`py-5 ${wrapper}`}>
      <div className="container py-4">
        <div className={yellow_div}></div>
        <h2 className={`text-center ${title}`}>Nos Valeurs</h2>
        <hr className={hr} />
        <div className={`row my-5 justify-content-around align-items-center ${valeurs}`}>
          <div className="col-md-5 col-lg-4 mb-3 px-4 text-start">
            <h3 className="mb-4">1</h3>
            <p className={valeur_title}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
          <div className="col-md-5 col-lg-4 mb-3 px-4 text-start">
            <h3 className="mb-4">2</h3>
            <p className={`${valeur_title}`}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
          <div className="col-md-5 col-lg-4 mb-3 px-4 text-start">
            <h3 className="mb-4">3</h3>
            <p className={`${valeur_title}`}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
          <div className="col-md-5 col-lg-4 mb-3 px-4 text-start">
            <h3 className="mb-4">4</h3>
            <p className={`${valeur_title}`}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
          <div className="col-md-5 col-lg-4 mb-3 px-4 text-start">
            <h3 className="mb-4">5</h3>
            <p className={`${valeur_title}`}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
          <div className="col-md-5 col-lg-4 px-4 text-start">
            <h3 className="mb-4">6</h3>
            <p className={`${valeur_title}`}>Lorem ipsum dolor sit amet.</p>
            <p className={`pr-4 ${valeur_details}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique officiis totam ipsum voluptatum iusto omnis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Valeurs
