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
			duration: 1200,
		})
	}, [])

	return (
		<div
			className={`py-5 d-flex justify-content-center align-items-center ${bg}`} id="choisir"
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
					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true">
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
									{/* Nous nous engageons ?? maintenir un environnement propre et sain pour nos employ??s, nos clients et partenaires. Nous nous effor??ons de garantir le succ??s ?? long terme de tous nos projets. */}
									Nos constructions sont con??ues en se basant sur les meilleures
									pratiques conjuguant qualit??, r??sistance et efficacit?? sur le
									long terme en s'int??grant parfaitement dans l'environnement
									avec d??lai et co??ts optimis??s.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true">
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
									{/* Fond??e sur la dynamique du collaboratif, elle vise ?? encourager le potentiel cr??atif des collaborateurs de l???entreprise en valorisant les initiatives du terrain.  */}
									Notre ing??nierie et notre esprit de cr??ativit?? nous permettent
									de performer dans la conception des ouvrages et d???innover pour
									rendre les r??alisations toujours plus comp??titives et
									p??renniser notre entreprise.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true">
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
									{/* ESMASA Travaux est fi??re de sa gestion moderne et de son personnel technique hautement qualifi??. Nous sommes enti??rement cautionn??s et assur??s. Nos travailleurs sont form??s aux derni??res normes de s??curit?? normes et exigences de s??curit?? de l'industrie. */}
									{/* ESMASA Travaux dispose d'une gestion moderne et d'un personnel technique hautement qualifi??. Nous sommes enti??rement cautionn??s et assur??s. Nos travailleurs sont form??s aux derni??res normes de s??curit?? et aux exigences du secteur. */}
									La complexit?? des projets que nous r??alisons exige des
									comp??tences humaines ad??quates et une expertise technique tr??s
									avanc??e. Pour remporter ce d??fit, Esmasa travaux veille sur la
									formation continue de ses employ??s aux derni??res normes de
									s??curit?? et aux exigences du secteur.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true">
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
								<h3 className={reason_title}>??coute Clients</h3>
								<p className={reason}>
									Nous favorisons la d??marche ??coute Clients dans la conduite de
									nos projets en associant l???ensemble des parties prenantes
									concern??es : autorit?? locale, acteurs ??conomiques locaux,
									associations, riverains, employ??s... Tout au long de la
									r??alisation de nos projets, l'am??lioration continue de la
									satisfaction de nos clients reste notre priorit??.
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
								<h3 className={reason_title}>Mat??riaux sup??rieurs</h3>
								<p className={reason}>
									From the alteration and restoration to stone and steel column
									retro fit or ornamental iron and sheet metal replacement, and
									mortar stone repair, we are prepared to undertake complete
									restorations of historically valuable exteriors..
								</p>
							</div>
						</div>
					</div> */}
					<div className="col-md-6 mb-3" data-aos="fade-right" data-aos-once="true">
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
								{/* <h3 className={reason_title}>Sant?? & S??curit??</h3> */}
								<h3 className={reason_title}><abbr title="Qualit??, Hygi??ne, S??curit?? et Environnement">QHSE</abbr></h3>
								<p className={reason}>
									{/* ESMASA Travaux is committed to take every reasonable
									precaution to prevent injuries and maintain a safe and healthy
									environment. */}
									{/* Nous nous engageons ?? prendre toutes les pr??cautions pour ??viter les incidents et maintenir un environnement s??curis?? et sain. */}
									ESMASA Travaux a mis en place un syst??me de management int??gr??
									Qualit??, Hygi??ne, S??curit?? et Environnement pour ??tre en
									conformit?? avec les exigences des normes ISO en vigueur.
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
								<h3 className={reason_title}>Dans l'??coute et concertation</h3>
								<p className={reason}>
									Nous nous engageons ?? favoriser l?????coute et la concertation dans la conduite de nos projets en associant l???ensemble des parties prenantes concern??es : ??lus, acteurs ??conomiques locaux, associations, riverains, habitants, utilisateurs, salari??s.
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
					<div className="col-md-6 mb-3" data-aos="fade-left" data-aos-once="true">
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
								<h3 className={reason_title}>Responsabilit?? soci??tale</h3>
								<p className={reason}>
									{/* Our expertise is commissioned for a wide range of projects
									including high-rises and low-rises, public and institutional
									buildings. */}
									{/* Notre expertise est sollicit??e pour un large ??ventail de projets, notamment la construction des b??timents de grande ou petite taille et les travaux d'assainissement. */}
									Parmi nos valeurs, l'implication et l'engagement citoyens de
									nos employ??s. A cet ??gard, nous menons des actions fortes pour
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
