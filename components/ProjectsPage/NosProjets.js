import { projectOne } from "./data"
import { projectTwo } from "./data"
import { projectThree } from "./data"
import { projectFour } from "./data"
import Projet from './Projet'
import styles from "../../styles/ProjectsPage/NosProjets.module.css"


const NosProjets = () => {
  const { wrapper, section_title, hr} = styles

	return (
		<div
			className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}
		>
			<div className="container pb-2 pt-5 d-flex flex-column justify-content-center align-items-center">
				<h2 className={`text-center mb-5 ${section_title}`}>
					NOS PROJETS
					<hr className={hr} />
				</h2>

        <Projet {...projectOne} />
					<hr className={hr} />
        <Projet {...projectTwo} />
					{/* <hr className={hr} />
        <Projet {...projectThree} /> */}
					<hr className={hr} />
        <Projet {...projectFour} />
			</div>
		</div>
	)
}

export default NosProjets
