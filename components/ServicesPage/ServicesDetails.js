import styles from "../../styles/ServicesPage/ServicesDetails.module.css"
import { GiPaintRoller } from "react-icons/gi"
import { FaRegBuilding } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { GiBrickWall } from "react-icons/gi"
import { GiBulldozer } from "react-icons/gi"
import { BiTrafficCone } from "react-icons/bi"
import Image from 'next/image'
const ServicesDetails = () => {
	const { wrapper, bg, col1, col2, line1, line2, row, line3 } = styles

	return (
		<div
			className={`d-flex justify-content-center align-items-center py-5 my-5 container ${wrapper}`}
		>
			<div className={`d-flex justify-content-center align-items-center mt-5`}>
				<div className={`row d-flex justify-content-between align-items-center mt-5`}>
					<div className={line3}></div>
					<div className={`col-md-6 d-flex justify-content-lg-start justify-content-center align-items-center  ${col1}`}>
						<div className={line1}></div>
						<div className="row d-flex flex-column justify-content-center align-items-start">
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										<div className={`d-flex justify-content-center align-items-center mr-xl-n4 ${bg}`}>

										<Image 
												src="https://i.ibb.co/DRDsKnF/image-12.png"
												height={55}
												width={55}
												alt=""
											/>
										</div>
										{/* {" "} */}
										{/* <FaRegBuilding className={`mb-5 ${icon}`} fontSize="3rem" /> */}
									</div>
									
									<div className="col-9">
										<h3>Building Construction</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										{/* {" "}
										<BsTools className={`mb-5 ${icon}`} fontSize="3rem" /> */}
										<div className={`mr-xl-n4 d-flex justify-content-center align-items-center ${bg}`}>
											<Image 
												src="https://i.ibb.co/yXMRXst/image-10.png"
												height={55}
												width={55}
												alt=""
											/>
										</div>

									</div>
									<div className="col-9">
										<h3>Building Repairs</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										{/* <GiBulldozer className={`mb-5 ${icon}`} fontSize="4.5rem" /> */}
										<div className={`mr-xl-n4 d-flex justify-content-center align-items-center ${bg}`}>
										<Image 
												src="https://i.ibb.co/DLJSHzY/image-11.png"
												height={55}
												width={55}
												alt=""
											/>
										</div>
									</div>
									<div className="col-9">
										<h3>Demolition</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`col-md-6 d-flex justify-content-center align-items-start  ${col2}`}>
					<div className={line2}></div>
						<div className="row flex-column d-flex justify-content-start align-items-end  ">
							<div className="col-md-11 col-xl-9 my-3 mr-xl-n4">
								<div className={`row d-flex justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										{/* <GiBrickWall
										 className={`mr-xl-1 mb-5 ${icon}`}	fontSize="3rem"
										/> */}
										<div className={`ml-xl-n4 d-flex justify-content-center align-items-center ${bg}`}>
										<Image 
												src="https://i.ibb.co/qsdbMHm/image-14.png"
												// src="https://i.ibb.co/pLQpRF9/image-15.png"
												height={55}
												width={55}
												alt=""
											/>
										</div>

									</div>
									<div className="col-9">
										<h3>Foundation</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 mr-xl-n4">
								<div className={`row d-flex justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										{/* <GiPaintRoller
										
										 className={`mr-xl-1 mb-5 ${icon}`}	fontSize="3rem"
										/> */}
										<div className={`ml-xl-n4 d-flex justify-content-center align-items-center ${bg}`}>
										<Image 
												src="https://i.ibb.co/M839xq6/image-13.png"
												height={55}
												width={55}
												alt=""
											/>

										</div>
									</div>
									<div className="col-9">
										<h3>Painting & Exterior</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 mr-xl-n4">
								<div className={`row d-flex justify-content-start align-items-center ${row}`}>
									<div className="col-3 d-flex align-items-start justify-content-center">
										<div className={`ml-xl-n4 d-flex justify-content-center align-items-center ${bg}`}>
										<Image 
												src="https://i.ibb.co/J2QgzQN/image-16.png"
												height={55}
												width={55}
												alt=""
											/>

										</div>
										{/* <BiTrafficCone
										
										 className={`mb-5 ${icon}`}	fontSize="3rem"
										/> */}
									</div>
									<div className="col-9">
										<h3>Site Management</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServicesDetails
