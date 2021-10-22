import styles from "../../styles/ProjectsPage/EnCours.module.css"
import Image from "next/image"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from '../Layout/Button'
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"

import { projectOne } from "./dataEnCours"
import { projectTwo } from "./dataEnCours"
import { projectThree } from "./dataEnCours"



import ProjetEnCours from "./ProjetEnCours"

const EnCours = () => {
	const { wrapper, container, hr, title } = styles
	return (
		<div className={`py-5 ${wrapper}`}>
			<div className={`d-flex flex-column justify-content-center align-items-center mx-auto py-5 ${container}`}>
				<h2 className={`mb-5 d-flex flex-column mr-auto ${title}`}>PROJETS EN COURS <hr className={hr} /></h2>
				<div className="row d-flex justify-content-center align-items-top">
					<ProjetEnCours {...projectOne} />
					<ProjetEnCours {...projectTwo}/>
					<ProjetEnCours {...projectThree}/>
				</div>
			</div>
		</div>
	)
}

export default EnCours
