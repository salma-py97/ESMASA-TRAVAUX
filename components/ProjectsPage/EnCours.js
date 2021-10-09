import styles from "../../styles/ProjectsPage/EnCours.module.css"
import Image from "next/image"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from '../Layout/Button'
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"

const EnCours = () => {
	const { wrapper, container, hr, title, card_title, card, card_text, bar, bar_desc, inner_bar, inner_bar_1, inner_bar_2, inner_bar_3 } = styles
	const { btn, btn__yellow } = buttonStyles
	return (
		<div className={`py-5 ${wrapper}`}>
			<div className={`d-flex flex-column justify-content-center align-items-center mx-auto py-5 ${container}`}>
				<h2 className={`mb-5 d-flex flex-column mr-auto ${title}`}>PROJETS EN COURS <hr className={hr} /></h2>
				

				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-lg-4 col-sm-10 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
								alt=""/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tenetur aspernatur nemo praesentium, sequi exercitationem nihil.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>25%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={`${inner_bar_1} ${inner_bar}`}></div>
								</div>
								<Button className={`ml-0 ${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-4 col-sm-10 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
								alt=""/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tenetur aspernatur nemo praesentium, sequi exercitationem nihil.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>60%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={`${inner_bar_2} ${inner_bar}`}></div>
								</div>
								<Button className={`ml-0 ${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-4 col-sm-10 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
								alt=""/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tenetur aspernatur nemo praesentium, sequi exercitationem nihil.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>85%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={`${inner_bar_3} ${inner_bar}`}></div>
								</div>
								<Button className={`ml-0 ${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EnCours
