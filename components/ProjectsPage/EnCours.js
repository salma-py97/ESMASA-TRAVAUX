import styles from "../../styles/ProjectsPage/EnCours.module.css"

import { projectOne } from "./dataEnCours"
import { projectTwo } from "./dataEnCours"
import { projectThree } from "./dataEnCours"
import { projectFour } from "./dataEnCours"
import { projectFive } from "./dataEnCours"
import { projectSix } from "./dataEnCours"



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
					<ProjetEnCours {...projectFour}/>
					<ProjetEnCours {...projectFive}/>
					<ProjetEnCours {...projectSix}/>
				</div>
			</div>
		</div>
	)
}

export default EnCours
