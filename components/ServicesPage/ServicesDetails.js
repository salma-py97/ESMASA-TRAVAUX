import styles from "../../styles/ServicesPage/ServicesDetails.module.css"
import { GiPaintRoller } from "react-icons/gi"
import { FaRegBuilding } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { GiBrickWall } from "react-icons/gi"
import { GiBulldozer } from "react-icons/gi"
import { BiTrafficCone } from "react-icons/bi"
import Image from 'next/image'
const ServicesDetails = () => {
	const { wrapper, bg, col1, col2, line1, line2, row, line3, line4, line5, service } = styles

	return (
		<div
		className={`d-flex justify-content-center align-items-center py-5 my-5 container ${wrapper}`}
		>
			<div className={line4}></div>
			<div className={line5}></div>
			<div className={`d-flex justify-content-center align-items-start mt-5`}>
				<div className={`row d-flex justify-content-between align-items-start mt-5`}>
					<div className={line3}></div>
					<div className={`col-md-6 d-flex justify-content-lg-start justify-content-center align-items-center  ${col1}`}>
						<div className={line1}></div>
						<div className="row d-flex flex-column justify-content-center align-items-start">
							<div className={`col-md-11 col-xl-9 my-3 ml-xl-n4 ${service} `}>
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-start ${row}`}>
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
										<h3>Construction Bâtiment</h3>
										<ul>
											<li>Maçonnerie</li>
											<li>Menuiseries</li>
											<li>Plomberie sanitaire</li>
											<li>Pretection incendie</li>
											<li>Toiture en Béton</li>
											<li>Toiture en autoportante</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={`col-md-11 col-xl-9 my-3 ml-xl-n4 ${service} `}>
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-start ${row}`}>
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
										<h3 className="text-capitalize">Revêtement & étanchéité</h3>
											<ul>
												<li>Etanchéité</li>
												<li>Revêtement des sols et murs</li>
												<li>Menuiseries</li>
												<li>Travaux Enduisage, motif et peinture…</li>
												<li>Travaux de traitement des fissures de la dalle en béton armé</li>
												<li>Travaux de peinture des murs et remise en état des lieux.</li>
												
											</ul>
									</div>
								</div>
							</div>
							<div className={`col-md-11 col-xl-9 my-3 ml-xl-n4 ${service} `}>
								<div className={`row d-flex flex-lg-row-reverse justify-content-lg-end justify-content-start align-items-start ${row}`}>
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
										<h3>Travaux d'assainissement</h3>
										<ul>
											<li>Infrastructures d’alimentation en eau potable</li>
											<li>Réalisation des conduites et regards en béton armé</li>
											<li>Fourniture et pose des équipements </li>
											<li>hydrauliques des conduites</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`col-md-6 d-flex justify-content-center align-items-start  ${col2}`}>
					<div className={line2}></div>
						<div className="row flex-column d-flex justify-content-start align-items-end  ">
							<div className={`col-md-11 col-xl-9 my-3 mr-xl-n4 ${service}`}>
								<div className={`row d-flex justify-content-start align-items-start ${row}`}>
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
										<h3>Génie civil & Fondation</h3>
										<ul>
											<li>Terrassement</li>
											<li>Remblai</li>
											<li>Béton de Fondation</li>
											<li>Béton d’élévation</li>
											<li>Travaux de Réalisation de murs de clôture</li>
											<li>Travaux de Réalisation des  murs de soutènement et drainage</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={`col-md-11 col-xl-9 my-3 mr-xl-n4 ${service}`}>
								<div className={`row d-flex justify-content-start align-items-start ${row}`}>
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
										<h3>Travaux d'aménagement</h3>
										<ul>
											<li>VRD - Aménagements extérieurs.</li>
											<li>Travaux d’aménagement des espaces verts</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={`col-md-11 col-xl-9 my-3 mr-xl-n4 ${service}`}>
								<div className={`row d-flex justify-content-start align-items-start ${row}`}>
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
										<h3 className="text-capitalize">électricité & Climatisation</h3>
										<ul>
											<li>Travaux d’électricité intérieure</li>
											<li>Travaux d’éclairage public</li>
											<li>Climatisation- VMC</li>
										</ul>
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
