import styles from "../../styles/ProjectsPage/EnCours.module.css"
import Card from "react-bootstrap/Card"
import Button from "../Layout/Button"
import buttonStyles from "../../styles/LayoutStyles/Button.module.css"
import Link from "next/link"

const ProjetEnCours = ({ client, text, progression, src }) => {
	const { card_title, card, card_text, bar, bar_desc, inner_bar, img } = styles
	const { btn, btn__yellow } = buttonStyles
	// const {client, text, progression} = dataEnCours
	return (
		<div className="col-lg-4 col-sm-10 p-3">
			<Card className={card}>
				{/* <Card.Img
          // variant="top"
          src={src}
          // src="https://i.ibb.co/qFxkz9j/image-10.png"
          // src="https://media4.giphy.com/media/ocuQpTqeFlDOP4fFJI/giphy.gif"
          alt=""
          className="h-100" /> */}
				<Card.Body>
					<Card.Title className={card_title}>{client}</Card.Title>
					<Card.Text className={card_text}>{text}</Card.Text>
					<div className={`d-flex justify-content-between align-items-center mt-4 mb-2 ${bar_desc}`}>
						<h6>Réalisé à</h6>
						<h4>{progression}</h4>
					</div>
					<div className={`mb-4 progress bar`}>
						<div className="progress-bar progress-bar-striped progress-bar-animated bg-dark inner_bar"></div>
						<style jsx>{`
							.bar {
								height: 9px;
							}
							.inner_bar {
								width: ${progression};
							}
						`}</style>
					</div>
					<Link href="/contact">
						<Button className={`ml-0 ${btn} ${btn__yellow}`}>
							Contactez-nous
						</Button>
					</Link>

					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</div>
	)
}

export default ProjetEnCours
