import styles from '../../styles/ProjectsPage/Stats.module.css'

const Stats = () => {
  const {wrapper, title, p, extra} = styles
  return (
    <div className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}>
      <div className="row container d-flex justify-content-around align-items-start text-center">
        <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
          <h1 className={title} >87</h1>
          <p className={`lead ${p}`}>Clients Satisfaits
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
          <h1 className={title} >206</h1>
          <p className={`lead ${p}`}>Projets Réussis
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
          <h1 className={title} >34</h1>
          <p className={`lead ${p}`}>Ingénieurs Expérimentés
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
          <h1 className={title} >1000</h1>
          <p className={`lead ${p}`}>Agents de Chantier motivés</p>
        </div>
      </div>
      
    </div>
  )
}

export default Stats
