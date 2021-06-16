import styles from "../../styles/ProjectsPage/EnCours.module.css"
import Image from "next/image"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from '../Layout/Button'
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"

const EnCours = () => {
	const { wrapper, hr, title, card_title, card, card_text, bar } = styles
	const { btn, btn__yellow } = buttonStyles
	return (
		<div className={`py-5 ${wrapper}`}>
			<div className="container py-5">
				<h2 className={`mb-5 d-flex flex-column ${title}`}>PROJETS EN COURS <hr className={hr} /></h2>
				

				<div className="row d-flex justify-content-center alogn-items-center">
					<div className="col-md-4 p-3">
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
								<Button className={`${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>
                <div className={bar}></div>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-4 p-3">
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
								<Button className={`${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>
                <div className={bar}></div>

								{/* <Button variant="primary">Go somewhere</Button> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-4 p-3">
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
								<Button className={`${btn} ${btn__yellow}`}>
									Contactez-nous
								</Button>
                <div className={bar}></div>

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
