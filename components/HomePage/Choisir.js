import styles from "../../styles/HomePage/Choisir.module.css"
import Image from "next/image"

import { HandThumbsUp } from "react-bootstrap-icons"
// import { ImHeadphones } from "react-icons/im"
// import { FiHeadphones } from "react-icons/fi"
// import { GiHeadphones } from "react-icons/gi"
import { MdOutlineHeadphones } from "react-icons/md"
import { BsHeadset } from "react-icons/bs"

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Choisir = () => {
	const { title, bg, content, reason, reason_div, reason_title } = styles

	useEffect (()=> {
		AOS.init({
			duration: 1500,
		})
	}, [])

	return (
		<div
			className={`py-5 d-flex justify-content-center align-items-center ${bg}`}
		>
			<div
				className={`container d-flex flex-column justify-content-center align-items-center ${content}`}
			>
				<h3 className={`text-center mb-3 pt-5 text-warning ${title}`}>
					POURQUOI NOUS CHOISIR
				</h3>
				<h4 className="text-center text-white mb-5">NOS POINTS FORTS</h4>
				<div
					className={`row d-flex justify-content-center align-items-start my-5 ${content}`}
				>
					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true" data-aos-delay="150">
						<div className={`row flex-md-row-reverse ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								{/* <HandThumbsUp className="text-white mt-3" size={76} /> */}
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/rtRT7M6/image-1.png"
										height={76}
										width={76}
										alt="excavator"
									/>
								</div>
							</div>
							<div className="col-9">
								{/* <h3 className={reason_title}>We are Sustainable</h3> */}
								<h3 className={reason_title}>Constructions durables</h3>
								<p className={reason}>
									{/* We work hard at maintaining a clean and healthy environment
									for our workers, neighbours, and end users. We strive for long
									term success for our company, clients and our environment. */}
									{/* Nous nous engageons à maintenir un environnement propre et sain pour nos employés, nos clients et partenaires. Nous nous efforçons de garantir le succès à long terme de tous nos projets. */}
									Nos constructions sont conçues en se basant sur les meilleures
									pratiques conjuguant qualité, résistance et éfficacité sur le
									long terme en s'intégrant parfaitement dans l'environnement
									avec délai et coûts optimisés.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true" data-aos-delay="150">
						<div className={`row ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/YysJJvm/image-6.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Innovation</h3>
								<p className={reason}>
									{/* One of our objectives is to satisfy clients' requirements by building complex projects at the highest technological and	quality level */}
									{/* Fondée sur la dynamique du collaboratif, elle vise à encourager le potentiel créatif des collaborateurs de l’entreprise en valorisant les initiatives du terrain.  */}
									Notre ingénierie et notre esprit de créativité nous permettent
									de performer dans la conception des ouvrages et d’innover pour
									rendre les réalisations toujours plus compétitives et
									pérenniser notre entreprise.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
						<div className={`row flex-md-row-reverse ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/RH8RGW4/image-2.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Expertise</h3>
								<p className={reason}>
									{/* ESMASA Travaux takes pride in its modern management and highly
									professional technical personnel. We are fully bonded and
									insured. Our workers are trained with the latest industry
									safety standards and requirements. */}
									{/* ESMASA Travaux est fière de sa gestion moderne et de son personnel technique hautement qualifié. Nous sommes entièrement cautionnés et assurés. Nos travailleurs sont formés aux dernières normes de sécurité normes et exigences de sécurité de l'industrie. */}
									{/* ESMASA Travaux dispose d'une gestion moderne et d'un personnel technique hautement qualifié. Nous sommes entièrement cautionnés et assurés. Nos travailleurs sont formés aux dernières normes de sécurité et aux exigences du secteur. */}
									La complexité des projets que nous réalisons exige des
									compétences humaines adéquates et une expertise technique très
									avancée. Pour remporter ce défit, Esmasa travaux veille sur la
									formation continue de ses employés aux dernières normes de
									sécurité et aux exigences du secteur.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
						<div className={`row ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										// src="https://i.ibb.co/bFbjzmR/image-3.png"
										src="https://i.ibb.co/SwPhnYF/output-onlinepngtools-1.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
								{/* <GiHeadphones className="text-white mt-3" size={76} /> */}
								{/* <MdOutlineHeadphones className="text-white mt-3" size={76} /> */}
								{/* <BsHeadset className="text-white mt-3" size={76} /> */}
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Écoute Clients</h3>
								<p className={reason}>
									Nous favorisons la démarche écoute Clients dans la conduite de
									nos projets en associant l’ensemble des parties prenantes
									concernées : autorité locale, acteurs économiques locaux,
									associations, riverains, employés... Tout au long de la
									réalisation de nos projets, l'amélioration continue de la
									satisfaction de nos clients reste notre priorité.
								</p>
							</div>
						</div>
					</div>
					{/* <div className="col-md-6 mb-3">
						<div className={`row ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/bFbjzmR/image-3.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Matériaux supérieurs</h3>
								<p className={reason}>
									From the alteration and restoration to stone and steel column
									retro fit or ornamental iron and sheet metal replacement, and
									mortar stone repair, we are prepared to undertake complete
									restorations of historically valuable exteriors..
								</p>
							</div>
						</div>
					</div> */}
					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true" data-aos-delay="450">
						<div className={`row flex-md-row-reverse ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										// src="https://i.ibb.co/xSDQTRH/image-4.png"
										src="https://i.ibb.co/Smc8nFy/output-onlinepngtools-3.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								{/* <h3 className={reason_title}>Santé & Sécurité</h3> */}
								<h3 className={reason_title}>QHSE</h3>
								<p className={reason}>
									{/* ESMASA Travaux is committed to take every reasonable
									precaution to prevent injuries and maintain a safe and healthy
									environment. */}
									{/* Nous nous engageons à prendre toutes les précautions pour éviter les incidents et maintenir un environnement sécurisé et sain. */}
									ESMASA Travaux a mis en place un système de management intégré
									Qualité, Hygiène, Sécurité et Environnement pour être en
									conformité avec les exigences des normes ISO en vigueur.
								</p>
							</div>
						</div>
					</div>
					{/* <div className="col-md-6 mb-3">
						<div className={`row ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/Jp5DbXQ/image-5.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Dans l'écoute et concertation</h3>
								<p className={reason}>
									Nous nous engageons à favoriser l’écoute et la concertation dans la conduite de nos projets en associant l’ensemble des parties prenantes concernées : élus, acteurs économiques locaux, associations, riverains, habitants, utilisateurs, salariés.
								</p>
							</div>
						</div>
					</div> */}
					{/* <div className="col-md-6 mb-3">
						<div className={`row flex-md-row-reverse ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								<div className="mt-3">
									<Image
										src="https://i.ibb.co/TLDyFP6/image-7.png"
										height={76}
										width={76}
										alt="icon"
									/>
								</div>
							</div>
							<div className="col-9">
								<h3 className={reason_title}>Technology</h3>
								<p className={reason}>
									We pride ourselves in using the newest technologies and
									efficient organizational systems related to the construction
									domain.
								</p>
							</div>
						</div>
					</div> */}
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true" data-aos-delay="450">
						<div className={`row ${reason_div}`}>
							<div className="col-3 d-flex justify-content-center align-items-start">
								{/* <div className="mt-3">
									<Image
										src="https://i.ibb.co/rtRT7M6/image-1.png"
										height={76}
										width={76}
										alt="excavator"
									/>
								</div> */}
								<HandThumbsUp className="text-white mt-3" size={76} />
							</div>
							<div className="col-9">
								{/* <h3 className={reason_title}>Quality Construction</h3> */}
								<h3 className={reason_title}>Responsabilité sociétale</h3>
								<p className={reason}>
									{/* Our expertise is commissioned for a wide range of projects
									including high-rises and low-rises, public and institutional
									buildings. */}
									{/* Notre expertise est sollicitée pour un large éventail de projets, notamment la construction des bâtiments de grande ou petite taille et les travaux d'assainissement. */}
									Parmi nos valeurs, l'implication et l'engagement citoyens de
									ses employés. A cet égard, nous menons des actions fortes pour
									l'insertion sociale et professionnelle dans nos divers
									chantiers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Choisir
