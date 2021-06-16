import styles from "../../styles/ProjectsPage/EnCours.module.css"
import Image from "next/image"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from '../Layout/Button'
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"

const EnCours = () => {
	const { wrapper, container, hr, title, card_title, card, card_text, bar, bar_desc, inner_bar } = styles
	const { btn, btn__yellow } = buttonStyles
	return (
		<div className={`py-5 ${wrapper}`}>
			<div className={`d-flex flex-column justify-content-center align-items-center mx-auto py-5 ${container}`}>
				<h2 className={`mb-5 d-flex flex-column mr-auto ${title}`}>PROJETS EN COURS <hr className={hr} /></h2>
				

				<div className="row d-flex justify-content-center alogn-items-center">
					<div className="col-lg-4 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
							/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>70%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={inner_bar}></div>
								</div>
								<Button className={`${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-4 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
							/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>70%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={inner_bar}></div>
								</div>
								<Button className={`${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-4 p-3">
						<Card className={card} >
							<Card.Img
								variant="top"
								src="https://i.ibb.co/qFxkz9j/image-10.png"
							/>
							<Card.Body>
								<Card.Title className={card_title}>Nom du Projet</Card.Title>
								<Card.Text className={card_text}>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
                <div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
									<h6>Réalisé à</h6>
									<h4>70%</h4>
								</div>
                <div className={`mb-4 ${bar}`}>
									<div className={inner_bar}></div>
								</div>
								<Button className={`${btn} ${btn__yellow}`}>
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
