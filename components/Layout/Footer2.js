import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

import Link from "next/link"
import Image from "next/image"
import {
	FaFacebook,
	FaTwitter,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa"

import styles from "../../styles/LayoutStyles/Footer2.module.css"

const Footer2 = () => {
	const {
		footer,
		footer_ul,
		bottom_border,
		footer_nav,
		contact_inner,
		social_footer,
		copyright,
		icon,
	} = styles

	return (
		<footer className={footer}>
			<div className={`container ${bottom_border}`}>
				<section className={`px-5`}>
					<div className="row justify-content-around align-items-top">
						<div className="col-md-4">
							<div className="d-flex justify-content-start align-items-end mt-5 mb-3">
								<Image
									src="/images/logo_esmasa.png"
									alt="ESMASA TRAVAUX"
									width={50}
									height={50}
								/>
								<h4 className="text-white my-0 ml-2 mr-0 p-0">
									ESMASA TRAVAUX
								</h4>
							</div>

							<p className="text-justify">
							Fondée en 2008, ESMASA Travaux, est une entreprise de Bâtiment et de Travaux Publics, génie civil et tout corps d’état. ESMASA Travaux, enrichie d’une expérience de plus de 20 ans, continue à  se développer en faisant de la qualité et de la sécurité, les centres de ses préoccupations. Grâce à  un personnel qualifié et une mise à niveau de ses équipements.
							</p>
						</div>
						<div className="col-md-3">
							<h4 className="pt-5 pb-3 text-white">Nos Services</h4>
							<ul className={`${footer_ul} pl-3`}>
								<li>Construction Bâtiment</li>
								<li>Génie civil / Fondation</li>
								<li>Revêtement / Étanchéité</li>
								<li>Électricité / Climatisation</li>
								<li>Travaux d'Aménagement</li>
								<li>Travaux d'assainissement</li>
							</ul>
						</div>

						<div className="col-md-3">
							<h4 className="pt-5 pb-3 text-white">Contactez Nous</h4>
							<div className="row d-flex justify-content-around align-items-center mb-3">
								<div className="col-2">
									<MdLocationOn className="text-white mb-4" fontSize={20} />
								</div>
								<div className="col-9">
									<p className={`${contact_inner}`}>
										15 Boulevard Abdelmoumen, étage 2, appartement N°6 - Mohammedia.
										{" "}
									</p>
								</div>
							</div>

							<div className="row d-flex justify-content-around align-items-center mb-3">
								<div className="col-2">
									<FaPhoneAlt className="text-white" fontSize={20} />
								</div>
								<div className="col-9">
									<p className={`${contact_inner}`}>+212 (05) 23321720 </p>
								</div>
							</div>
							<div className="row d-flex justify-content-around align-items-center mb-3">
								<div className="col-2">
									<IoMdMail className="text-white" fontSize={20} />
								</div>
								<div className="col-9">
									<p className={`${contact_inner}`}>esmasatravaux@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className="bottom-footer mb-4">
				<div className="container">
					<div
						className={`row justify-content-center align-items-center text-center`}
					>
						<div className="col-9 justify-content-center align-items-center">
							<div
								className={`row justify-content-center align-items-center text-center ${footer_nav}`}
							>
								<div className="col-md-2 p-0 mx-0 my-2 d-flex justify-content-center align-items-center text-center">
									<Link href="/">Acceuil</Link>
								</div>
								<div className="col-md-2 p-0 mx-0 my-2 d-flex justify-content-center align-items-center text-center">
									<Link href="/services">Services</Link>
								</div>
								<div className="col-md-2 p-0 mx-0 my-2 d-flex justify-content-center align-items-center text-center">
									<Link href="/projets">Projets</Link>
								</div>
								{/* <div className="col-md-2 p-0 mx-0 my-2 d-flex justify-content-center align-items-center text-center">
									<Link href="/sécurité">Sécurité</Link>
								</div> */}
								<div className="col-md-2 p-0 mx-0 my-2 d-flex justify-content-center align-items-center text-center">
									<Link href="/contact">Contact</Link>
								</div>
							</div>
						</div>
					</div>

					<div
						className={`row justify-content-center align-items-center text-center ${social_footer} my-3`}
					>
						<div className="col-1 p-0 m-1">
							<Link href="#">
								<FaFacebook className={icon} fontSize={30} />
							</Link>
						</div>
						<div className="col-1 p-0 m-1">
							<Link href="#">
								<FaTwitter className={icon} fontSize={30} />
							</Link>
						</div>
						<div className="col-1 p-0 m-1">
							<Link href="#">
								<FaInstagramSquare className={icon} fontSize={30} />
							</Link>
						</div>
						<div className="col-1 p-0 m-1">
							<Link href="#">
								<FaLinkedin className={icon} fontSize={30} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className={`${copyright} py-2 bg-dark text-white`}>
				<p className="text-center m-0">
					Copyright &copy; 2021 | <Link href="/">ESMASA TRAVAUX</Link>. All
					Rights Reserved.
				</p>
			</section>
		</footer>
	)
}

export default Footer2
