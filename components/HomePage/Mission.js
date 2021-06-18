import styles from '../../styles/HomePage/Mission.module.css'

const Mission = () => {
  const {bg, hr, inner_bg} = styles
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center py-5 mx-2 ${bg}`}>
      <div className={`p-md-5 p-1 mx-md-5 d-flex-justify-content-center align-items-center container ${inner_bg}`}>
        <div className="my-5 mt-md-0">
          <h2>Notre Mission</h2>
          <hr className={hr} />
        </div>

        <p className="lead px-md-5 px-3 mb-5 mb-md-0">Garantir la meilleure qualité du travail et du service à la clientèle et maintenir le plus haut niveau de professionnalisme, d'honnêteté et d'équité dans nos relations avec nos clients, nos employés et nos fournisseurs. <br /><br />
        Nous nous engageons à se développer en fournissant continuellement des produits, des services et des solutions utiles et significatifs aux marchés que nous servons déjà, et se développer dans de nouveaux domaines qui s'appuient sur nos compétences et les intérêts de nos clients.</p>

      </div>
    </div>
  )
}

export default Mission
