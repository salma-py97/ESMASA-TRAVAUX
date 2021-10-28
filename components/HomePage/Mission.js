import styles from "../../styles/HomePage/Mission.module.css"

const Mission = () => {
	const { bg, hr, inner_bg } = styles
	return (
		<div
			className={`d-flex flex-column justify-content-center align-items-center text-center py-5 mx-2 ${bg}`}
		>
			<div
				className={`p-md-5 p-1 mx-md-5 d-flex-justify-content-center align-items-center container ${inner_bg}`}
			>
				<div className="my-5 mt-md-0">
					<h2>Notre Mission</h2>
					<hr className={hr} />
				</div>

				<p className="lead px-md-5 px-3 mb-5 mb-md-0">
				Garantir la satisfaction de nos clients et fournir des produits et des services de qualité en assurant la sécurité, l'hygiène et la santé au travail, tout en respectant l'environnement et en favorisant le développement des compétences de nos employés.
					<br />
					<br />
				Maintenir le plus haut niveau de professionnalisme, d'honnêteté et d'équité dans nos relations avec nos clients, nos employés et nos fournisseurs afin d'être le prestataire le plus qualifié pour des travaux de génie civil et bâtiments en satisfaisant les exigences et les attentes des clients.
					<br />
					<br />
				Nous nous engageons à se développer en fournissant continuellement des produits, des services et des solutions simples et efficaces en assurant une veille technologique et en intégrant de nouveaux services qui s'appuient sur nos compétences et les perspectives de nos clients.

				</p>
			</div>
		</div>
	)
}
// Garantir la meilleure qualité du travail et du service aux clients et maintenir le plus haut niveau de professionnalisme, d'honnêteté et d'équité dans nos relations avec nos clients, nos employés et nos fournisseurs afin d'être le prestataire de choix pour les services de construction en surpassant les exigences des clients et en apportant une valeur inégalée.

export default Mission
