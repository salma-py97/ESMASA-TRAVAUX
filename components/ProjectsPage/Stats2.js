import styles from '../../styles/ProjectsPage/Stats.module.css'

const Stats = () => {
  const {wrapper, title, p, extra} = styles
  return (
    <div className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}>
      <div className="row container d-flex justify-content-around align-items-center text-center">
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className={title} >87</h1>
          <p className={`lead ${p}`}>Clients Satisfaits  <span className={`d-none d-lg-inline ${extra}`}>YYYYYYY YYYYYY</span>
          <span className={`d-none d-md-inline d-lg-none ${extra}`}>YYYYY</span>
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className={title} >206</h1>
          <p className={`lead ${p}`}>Projets Réussis  <span className={`d-none d-lg-inline ${extra}`}>YYYYYYY YYYYYY</span>
          <span className={`d-none d-md-inline d-lg-none ${extra}`}>YYYYY</span>
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className={title} >34</h1>
          <p className={`lead ${p}`}>Ingénieurs Expérimentés 
          <span className={`d-none d-md-inline d-xl-none ${extra}`}> YYYYYYY</span>
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className={title} >1000</h1>
          <p className={`lead ${p}`}>Agents de Chantier motivés</p>
        </div>
      </div>
      
    </div>
  )
}

export default Stats
