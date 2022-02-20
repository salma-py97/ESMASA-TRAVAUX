import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"
import styles from "../../styles/ProjectsPage/Carousel.module.css"

const ProjectCarousel = ({images}) => {
	const { carousel, carousel_item, img, div } = styles
	return (
		<Carousel fade className={`d-flex h-100 w-100 ${carousel}`}>
			{images.map((image) => (
				<Carousel.Item className={`h-100 w-100 ${carousel_item}`}>
				<div className={`h-100 w-100 ${div}`}>
					<Image
						className={`${img}`}
						src={image}
						alt=""
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</Carousel.Item>
			))}
		</Carousel>
	)
}

export default ProjectCarousel
