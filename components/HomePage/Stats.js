import styles from '../../styles/HomePage/Stats.module.css'


const Stats = () => {
  const {bg_warning, h1, p, col, span} = styles

  return (
    <div className={`d-flex justify-content-center align-items-center text-center py-5 ${bg_warning}`}>
        <div className="container row d-flex justify-content-center align-items-center text-center">

            <div className={`col-md-4 text-center d-flex justify-content-center align-items-center flex-column ${col}`}>
              <h1 className={h1}>2008</h1>
              <p className={p}>Année de création</p>
            </div>
            <div className={`col-md-4 text-center d-flex justify-content-center align-items-center flex-column ${col}`}>
              <h1 className={h1}>206</h1>
              <p className={`px-3 ${p}`}>Projets <span className={`d-none d-md-inline d-lg-none ${span}`}> création</span></p>
            </div>
            <div className={`col-md-4 text-center d-flex justify-content-center align-items-center flex-column ${col}`}>
              <h1 className={h1}>87</h1>
              <p className={`px-3 ${p}`}>Clients <span className={`d-none d-md-inline d-lg-none ${span}`}> création</span></p>
            </div>
          </div>
      </div>
  )
}

export default Stats
