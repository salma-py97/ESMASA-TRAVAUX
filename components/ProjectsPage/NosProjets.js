import { projectOne } from "./data"
import Projet from './Projet'
import styles from "../../styles/ProjectsPage/NosProjets.module.css"


const NosProjets = () => {
  const { wrapper, section_title, hr} = styles

	return (
		<div
			className={`d-flex justify-content-center align-items-center py-5 ${wrapper}`}
		>
			<div className="container py-5 d-flex flex-column justify-content-center align-items-center">
				<h2 className={`text-center ${section_title}`}>
					NOS PROJETS
					<hr className={hr} />
				</h2>

        <Projet {...projectOne} />
			</div>
		</div>
	)
}

export default NosProjets
