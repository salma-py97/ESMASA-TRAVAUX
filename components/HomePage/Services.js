import styles from "../../styles/HomePage/Services.module.css"

import { GiPaintRoller } from "react-icons/gi"
import { FaRegBuilding } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { GiBrickWall } from "react-icons/gi"
import { GiBulldozer } from "react-icons/gi"
import { BiTrafficCone } from "react-icons/bi"

const Services = () => {
	const { service, nos_services, service_col, hr } = styles

	return (
		<div className="container py-5 d-flex flex-column justify-content-center align-items-center">
			<div className="my-3">
				<h2 className={nos_services}>Nos Services</h2>
				<hr className={hr} />
			</div>

			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center align-items-center my-4">
				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<FaRegBuilding className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Building Construction
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>

				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<BsTools className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Building Repairs
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>

				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<GiBulldozer className="text-warning mt-4 mb-3" fontSize="7rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Demolition
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<GiBrickWall className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Foundation
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<GiPaintRoller className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Painting & Exterior
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-4 ${service_col}`}>
						<BiTrafficCone className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Site Management
						</h4>
						<p className="mb-5 px-2">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
