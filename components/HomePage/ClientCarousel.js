import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image"

import Carousel from "react-bootstrap/Carousel"
import carouselStyles from "../../styles/HomePage/Carousel.module.css"

function ControlledCarousel() {
	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	const {
		wrapper,
		carousel_container,
		carousel_title,
		hr,
		confiance,
		confiance_title,
		row,
	} = carouselStyles

// 	https://i.ibb.co/0tr0xFn/ziz-removebg-preview.png
// https://i.ibb.co/HdDXS1v/veolia-redal-removebg-preview.png
// https://i.ibb.co/KrCzXFW/sonasid-removebg-preview.png
// https://i.ibb.co/zXjxJms/ciment-du-maroc-removebg-preview.png
// https://i.ibb.co/ccTsCwQ/casa-prestations-removebg-preview.png
// https://i.ibb.co/3T20zJd/amendis-removebg-preview.png
// https://i.ibb.co/940m59P/Akwagroup-removebg-preview.png
	return (
		<div className={`${wrapper}`}>
			<div className={`container ${carousel_container}`}>
				<div className={carousel_title}>
					<h2 className="text-center">Nos Clients</h2>
					<hr className={hr} />
				</div>
				<div className="d-none d-lg-block">
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						indicators={false}
						interval={2000}
					>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/zXjxJms/ciment-du-maroc-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/ccTsCwQ/casa-prestations-removebg-preview.png"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/3T20zJd/amendis-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/HdDXS1v/veolia-redal-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col md-2">
										<Image
											src="https://i.ibb.co/940m59P/Akwagroup-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col md-2">
										<Image
											src="https://i.ibb.co/KrCzXFW/sonasid-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col md-2">
										<Image
											src="https://i.ibb.co/0tr0xFn/ziz-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col md-2">
										<Image
											src="/images/logo_tmpa.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col md-2">
										<Image
											src="/images/afriquia.png"
											alt="ESMASA TRAVAUX"
											width={150}
											height={200}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>

				{/* ---------------------------------------------- END OF FIRST CAROUSEL ------------------------------------------ */}
				<div className="d-none d-md-block d-lg-none">
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						indicators={false}
						interval={2000}
						className=""
					>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/zXjxJms/ciment-du-maroc-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/ccTsCwQ/casa-prestations-removebg-preview.png"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/3T20zJd/amendis-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/HdDXS1v/veolia-redal-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/940m59P/Akwagroup-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/KrCzXFW/sonasid-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-md-3">
										<Image
											src="https://i.ibb.co/0tr0xFn/ziz-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="/images/logo_tmpa.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									<div className="col-md-3">
										<Image
											src="/images/afriquia.png"
											alt="ESMASA TRAVAUX"
											width={150}
											height={200}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
				{/* ---------------------------------------------- END OF SECOND CAROUSEL ------------------------------------------ */}
			
        <div className="d-none d-sm-block d-md-none">
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						indicators={false}
						interval={2000}
						className=""
					>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-5">
										<Image
											src="https://i.ibb.co/zXjxJms/ciment-du-maroc-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
									<div className="col-5">
										<Image
											src="https://i.ibb.co/ccTsCwQ/casa-prestations-removebg-preview.png"
                      alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-5">
										<Image
											src="https://i.ibb.co/3T20zJd/amendis-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
									<div className="col-5">
										<Image
											src="https://i.ibb.co/HdDXS1v/veolia-redal-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-5">
										<Image
											src="https://i.ibb.co/940m59P/Akwagroup-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
									<div className="col-5">
										<Image
											src="https://i.ibb.co/KrCzXFW/sonasid-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={600}
											height={350}
                      // layout="fill"
										/>
									</div>
								
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-between">
									<div className="col-3">
										<Image
											src="https://i.ibb.co/0tr0xFn/ziz-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={850}
											height={750}
                      // layout="fill"
										/>
									</div>
									<div className="col-3">
										<Image
											src="/images/logo_tmpa.png"
											alt="ESMASA TRAVAUX"
											width={900}
											height={500}
                      // layout="fill"
										/>
									</div>
									<div className="col-3">
										<Image
											src="/images/afriquia.png"
											alt="ESMASA TRAVAUX"
											width={150}
											height={200}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>

				{/* ---------------------------------------------- END OF THIRD CAROUSEL ------------------------------------------ */}
        <div className="d-block d-sm-none">
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						indicators={false}
						interval={2000}
						className=""
					>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/zXjxJms/ciment-du-maroc-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/ccTsCwQ/casa-prestations-removebg-preview.png"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/3T20zJd/amendis-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/HdDXS1v/veolia-redal-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
									
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/940m59P/Akwagroup-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/KrCzXFW/sonasid-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="https://i.ibb.co/0tr0xFn/ziz-removebg-preview.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="/images/logo_tmpa.png"
											alt="ESMASA TRAVAUX"
											width={1050}
											height={500}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className={row}>
								<div className="row d-flex align-items-center justify-content-center">
									<div className="col-9">
										<Image
											src="/images/afriquia.png"
											alt="ESMASA TRAVAUX"
											width={250}
											height={280}
										/>
									</div>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>

				{/* ---------------------------------------------- END OF FOURTH CAROUSEL ------------------------------------------ */}

				<div className={`d-flex justify-content-center align-items-center ${confiance}`}>
					<p className={`p-0 m-0 ${confiance_title}`}>ils nous font confiance!</p>
				</div>
			</div>
		</div>
	)
}
export default ControlledCarousel
