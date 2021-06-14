import styles from '../../styles/YellowBreak.module.css'
import buttonStyles from '../../styles/Button.module.css'
const YellowBreak = () => {
  const {bg} = styles
  const {btn, btn__outline, btn__wide} = buttonStyles
  return (
    <div className={`text-white text-start p-5 d-flex justify-content-center align-items-center ${bg}`}>
      <div className="py-5 d-flex justify-content-between align-items-start flex-column" >
      <h2>IF YOU HAVE A PROJECT, WE WOULD LOVE TO HELP YOU OUT</h2>
      <p className="lead mt-3 mb-4">TRUST US WITH YOUR IDEAS, AND WE WILL BRING THEM TO LIFE</p>
      <button className={` mr-auto ${btn} ${btn__outline} ${btn__wide}`}>CONTACT US</button>
    </div>
  </div>
  )
}

export default YellowBreak
