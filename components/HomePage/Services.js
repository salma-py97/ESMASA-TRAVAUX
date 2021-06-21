import Link from "next/link"

import styles from "../../styles/HomePage/Services.module.css"
import Button from "../../components/Layout/Button"
import ButtonStyles from "../../styles/LayoutStyles/Button.module.css"
import Image from 'next/image'

import { GiPaintRoller } from "react-icons/gi"
import { FaRegBuilding } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { GiBrickWall } from "react-icons/gi"
import { GiElectric } from "react-icons/gi"
import { GiBulldozer } from "react-icons/gi"
import { BiTrafficCone } from "react-icons/bi"

const Services = () => {
	const { service, nos_services, service_col, hr, btn_content, p, img } = styles
	const { btn, btn__primary__yellow_outline } = ButtonStyles

	return (
		<div className="container py-5 d-flex flex-column justify-content-center align-items-center">
			<div className="my-3">
				<h2 className={nos_services}>Nos Services</h2>
				<hr className={hr} />
			</div>

			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center align-items-center my-4">
				<div className="col p-3">
					<div className={`col text-center py-3 px-3 ${service_col}`}>
						<FaRegBuilding className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Construction Bâtiment
						</h4>
						<p className="mb-5 px-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>

				<div className="col p-3">
					<div className={`col text-center py-3 px-3 ${service_col}`}>
						<GiBulldozer className="text-warning mt-4 mb-3" fontSize="7rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Génie civil / Fondation
						</h4>
						<p className="mb-5 px-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>

				<div className="col p-3">
					<div className={`col text-center py-3 px-3 ${service_col}`}>
							<div className={`${img}`}>
							<Image src="https://i.ibb.co/F8pwNzw/image-11.png" 
							height={95}
							width={80}
							quality={100}
							alt=""
						/>
						</div>
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Revêtement / étanchéité
						</h4>
						<p className="mb-5 px-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-3 ${service_col}`}>
						{/* <GiBrickWall className="text-warning mt-5 mb-4" fontSize="5rem" /> */}
						<GiElectric className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							électricité intérieure
						</h4>
						<p className="mb-5 px-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-3 ${service_col}`}>
						<GiPaintRoller className="text-warning mt-5 mb-4" fontSize="5rem" />
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Travaux d'aménagement
						</h4>
						<p className="mb-5 px-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>
				<div className="col p-3">
					<div className={`col text-center py-3 px-2 ${service_col}`}>
						{/* <BsTools className="text-warning mt-5 mb-4" fontSize="5rem" /> */}
						{/* <BiTrafficCone className="text-warning mt-5 mb-4" fontSize="5rem" /> */}
						<div className={`${img}`}>
							<Image src="https://i.ibb.co/PzbVQ9s/image-12.png" 
							height={95}
							width={80}
							quality={100}
							alt=""
							// height={115}
							// width={100}
							// quality={100}
							// alt=""
						/>
						</div>
						<h4 className={`mt-2 mb-4 text-uppercase ${service}`}>
							Travaux d'assainissement
						</h4>
						<p className={`mb-5 ${p}`}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							deleniti provident
						</p>
						<Link href="/services">
							<Button className={`${btn} ${btn__primary__yellow_outline}`}>
								<p className={btn_content}>EN SAVOIR PLUS</p>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
