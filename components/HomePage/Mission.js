import styles from '../../styles/HomePage/Mission.module.css'

const Mission = () => {
  const {bg, hr, inner_bg} = styles
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center py-5 ${bg}`}>
      <div className={`p-md-5 p-1 mx-md-5 d-flex-justify-content-center align-items-center container ${inner_bg}`}>
        <div className="mb-5">
          <h2>Notre Mission</h2>
          <hr className={hr} />
        </div>

        <p className="lead px-md-5 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum tempora voluptas ipsam a nihil ratione pariatur reprehenderit quae, velit ullam ex qui voluptates optio aspernatur culpa nisi neque nobis dignissimos quo? Molestias placeat eius rerum expedita fugiat ea dolores adipisci excepturi 
        exercitationem recusandae temporibus mollitia blanditiis, dolorem doloremque ipsa sunt officiis ex? Vitae labore, doloremque vero incidunt quis, fugiat explicabo eligendi dignissimos, eius earum praesentium exercitationem. 
        Ea nostrum error voluptate officiis illo, dolorem distinctio magnam atque sunt molestias qui corporis nihil assumenda voluptatem debitis vero porro impedit aut tempore eveniet laboriosam illum quod! A, harum accusamus. 
        Numquam, doloremque sint.</p>

      </div>
    </div>
  )
}

export default Mission
