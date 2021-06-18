import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"
import { useState } from "react"
import styles from "../../styles/ProjectsPage/Carousel.module.css"

const ProjectCarousel = () => {
	const { carousel, carousel_item, img, div } = styles
	return (
		<Carousel fade className={`d-flex h-100 w-100 ${carousel}`}>
			<Carousel.Item className={`h-100 w-100 ${carousel_item}`}>
				<div className={`h-100 w-100 ${div}`}>
					<Image
						className={`${img}`}
						src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</Carousel.Item>
			<Carousel.Item className={`h-100 w-100 ${carousel_item}`}>
				<div className={`h-100 w-100 ${div}`}>
					<Image
						className={`${img}`}
						src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="e"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</Carousel.Item>
			<Carousel.Item className={`h-100 w-100 ${carousel_item}`}>
				<div className={`h-100 w-100 ${div}`}>
					<Image
						className={`${img}`}
						src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</Carousel.Item>
		</Carousel>
	)
}

export default ProjectCarousel
