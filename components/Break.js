import styles from '../styles/Break.module.css'

const Break = () => {
  const {bg, inner_bg} = styles
  return (
    <div className={`d-flex justify-content-center align-items-center p-5 ${bg}`}>
      <div className={`${inner_bg}`}>
        <h1>MISSION</h1>
      </div>
    </div>
  )
}

export default Break
