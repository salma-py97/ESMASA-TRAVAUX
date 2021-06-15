import styles from '../../styles/HomePage/APropos.module.css'
import Image from 'next/image'


const APropos = () => {
  const {hr, bg, title, details, bg_warning, h1, p, col, span} = styles
  return (
    <div className=''>
      <div className="row d-flex justify-content-center align-item-center">
        {/* <div className="container d-flex justify-content-center align-item-center"> */}
          <div className={`col-lg-6 py-5 ${bg}`}>
            <h1 className={title}>À PROPOS
            <hr className={`text-align-left mr-auto ${hr}`}/>
            </h1>
            <p className={`mt-5 ${details}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos vero, modi amet rem laborum corrupti non velit dicta sequi, saepe, iusto facere! Maiores nam nemo ad at magnam voluptatem molestiae. Dolor, obcaecati velit. Assumenda, laudantium aperiam unde doloribus quod facilis debitis officia ipsam quos doloremque laborum neque? Id magni veniam beatae earum quisquam expedita impedit quaerat dignissimos, consequatur nobis facilis ab molestiae non debitis quia assumenda esse! Adipisci nobis nesciunt delectus cumque provident hic nemo veritatis assumenda vitae obcaecati? Molestias, ad aperiam! Harum, dolor. Fugiat molestias consectetur praesentium modi, fugit vitae beatae totam esse nobis corrupti maxime doloribus recusandae!</p>
          </div>
          <div className="col-md-6 p-0 d-none d-lg-block">
            <Image
              // src="https://i.ibb.co/8M9CP18/workers-plan.jpg"
              src="https://i.ibb.co/ZLnyj2G/workers-plan-auto-x1.jpg"
              layout="fill" objectFit="cover"
              alt=""
              quality={100}
              className=""
            />

          </div>

        {/* </div> */}
        
      </div>
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
    </div>
  )
}

export default APropos
