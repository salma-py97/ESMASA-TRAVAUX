import styles from "../../styles/ServicesPage/ServicesDetails.module.css"
import { GiPaintRoller } from "react-icons/gi"
import { FaRegBuilding } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { GiBrickWall } from "react-icons/gi"
import { GiBulldozer } from "react-icons/gi"
import { BiTrafficCone } from "react-icons/bi"
const ServicesDetails = () => {
	const { wrapper, bg, icon } = styles

	return (
		<div
			className={`d-flex justify-content-center align-items-center py-5 my-5 container ${wrapper}`}
		>
			<div className={`d-flex justify-content-center align-items-center mt-5`}>
				<div className="row d-flex justify-content-between align-items-center mt-5">
					<div className="col-md-6 d-flex justify-content-lg-start justify-content-center align-items-center">
						<div className="row d-flex flex-column justify-content-center align-items-start">
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className="row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										{" "}
										<FaRegBuilding className={`mb-5 ${icon}`} fontSize="3rem" />
									</div>
									<div className="col-10">
										<h3>Building Construction</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className="row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										{" "}
										<BsTools className={`mb-5 ${icon}`} fontSize="3rem" />
									</div>
									<div className="col-10">
										<h3>Building Repairs</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 ml-xl-n4">
								<div className="row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										<GiBulldozer className={`mb-5 ${icon}`} fontSize="4.5rem" />
									</div>
									<div className="col-10">
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
					<div className="col-md-6 d-flex justify-content-center align-items-start">
						<div className="row flex-column d-flex justify-content-start align-items-end  ">
							<div className="col-md-11 col-xl-9 my-3 mr-xl-n4">
								<div className="row d-flex justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										<GiBrickWall
										
										 className={`mr-xl-1 mb-5 ${icon}`}	fontSize="3rem"
										/>
									</div>
									<div className="col-10">
										<h3>Foundation</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9  my-3 mr-xl-n4">
								<div className="row d-flex justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										<GiPaintRoller
										
										 className={`mr-xl-1 mb-5 ${icon}`}	fontSize="3rem"
										/>
									</div>
									<div className="col-10">
										<h3>Painting & Exterior</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sapiente magni at doloribus consequatur nisi blanditiis.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-11 col-xl-9 my-3 mr-xl-n4">
								<div className="row d-flex justify-content-start align-items-center">
									<div className="col-2 d-flex align-items-start justify-content-center">
										<BiTrafficCone
										
										 className={`mb-5 ${icon}`}	fontSize="3rem"
										/>
									</div>
									<div className="col-10">
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
