import styles from "../../styles/ProjectsPage/Projet.module.css"
import ProjectCarousel from './ProjectCarousel'
import { BsFillHouseDoorFill } from "react-icons/bs"
import { WiTime3 } from "react-icons/wi"
import { FaUserTie } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Projet = ({ client, date, lieu, prestations, type, reverse }) => {

	const { box, box_title, p, col, inner_col, row, inner_row, pp} = styles

	useEffect (()=> {
		AOS.init({
			duration: 1200,
		})
	}, [])
	
	return (
		<div className={`row d-flex justify-content-center my-3 ${row} ${reverse ? `flex-row-reverse` : ``}`}>
			<div className={`col-lg-6 d-flex justify-content-center align-items-center p-3 ${col}`} data-aos={`${reverse ? "fade-left" : "fade-right"}`} data-aos-once="true" data-aos-delay="150"> 
				<div className={`row d-flex justify-content-center align-items-center h-100 w-100 ${inner_row}`} >
					<div className={` ${inner_col}`}>
						<ProjectCarousel />
					</div>
				</div>
			</div>
			<div className="col-lg-6 d-flex justify-content-center align-items-center px-3" data-aos={`${reverse ? "fade-right" : "fade-left"}`} data-aos-once="true" data-aos-delay="150">
				<div className="col d-flex justify-content-center align-items-center">
					<div className="row row-cols-1 row-cols-sm-2 d-flex justify-content-center align-items-center">
						<div className="col col-sm-6 d-flex justify-content-center align-items-center p-3">
							<div
								className={`col d-flex flex-column justify-content-center align-items-center ${box}`}
							>
								<FaUserTie
									className="text-warning text-center mx-auto d-block my-4"
									size="3em"
								/>
								<h5 className={`my-2 text-center text-uppercase ${box_title}`}>
									Client
								</h5>
								<p className={p}>{client}</p>
							</div>
						</div>
						<div className="col col-sm-6 d-flex justify-content-center align-items-center p-3">
							<div
								className={`col d-flex flex-column justify-content-center align-items-center ${box}`}
							>
								<BsFillHouseDoorFill
									className="text-warning text-center mx-auto d-block my-4"
									size="3em"
								/>
								<h5 className={`my-2 text-center text-uppercase ${box_title}`}>
									Type
								</h5>
								<p className={p}>{type}</p>
							</div>
						</div>
						<div className="col col-sm-6 d-flex justify-content-center align-items-center p-3">
							<div
								className={`col d-flex flex-column justify-content-center align-items-center ${box}`}
							>
								<MdLocationOn
									className="text-warning text-center mx-auto d-block my-4"
									size="3em"
								/>
								<h5 className={`my-2 text-center text-uppercase ${box_title}`}>
									Lieu
								</h5>
								<p className={p}>{lieu}</p>
							</div>
						</div>
						<div className="col col-sm-6 d-flex justify-content-center align-items-center p-3">
							<div
								className={`col d-flex flex-column justify-content-center align-items-center ${box}`}
							>
								<WiTime3
									className="text-warning text-center mx-auto d-block my-4"
									size="3em"
								/>
								<h5 className={`my-2 text-center text-uppercase ${box_title}`}>
									Durée
								</h5>
								<p className={p}>{date}</p>
							</div>
						</div>
						<div className="col-sm-12 d-flex justify-content-center align-items-center p-3">
							<div
								className={`col d-flex flex-column  justify-content-center align-items-center ${box}`}
							>
								<h5 className={`my-4 text-center text-uppercase ${box_title}`}>
									Nos prestations
								</h5>
								<ul>
									{prestations.map((prestation) => (
										<li><p className={`text-left m-0 ${pp}`}>{prestation}</p></li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projet
