import styles from '../../styles/LayoutStyles/ProgressBar.module.css'
import {useEffect, useState} from 'react'

const ProgressBar = () => {
  const {progress_bar} = styles
  
  const [progression, setProgression] = useState(0)

  let scrollY;
  let height;
  let windowHeight;
  let diff;

  const progress = () => {


    scrollY = window.scrollY
    height = document.body.scrollHeight
    windowHeight = window.innerHeight
    diff = height - windowHeight

    // if(scrollY > diff) {
    //   scrollY = diff
    // }

    setProgression(((scrollY)/ diff)*100)

    console.log(progression)

  }




  useEffect(() => {
    window.addEventListener("scroll", progress)
    progress()    
    
  }, [])

  return (
    <div className={`progress_bar ${progress_bar}`}>
    <style jsx>{`
      .progress_bar {
        width: ${progression}%;
      }
  `}</style>
  </div>
  )
}

export default ProgressBar
