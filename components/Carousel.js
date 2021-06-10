import styles from "../styles/NewCarousel.module.css"

const Carousel = () => {
	return (
		<section className="showcase-7 mb-5" id="clients">
			<div className="container">
				<div className="showcase-7-inner-1 mb-5">
					<p className="lead text-center">Nos clients</p>
				</div>
				<div
					id="slider3"
					className="carousel carousel-dark slide d-none d-md-block"
					data-bs-ride="carousel"
					data-bs-pause="false"
					className="d-flex justify-content-center align-items-center"
				>
					<div
						className="carousel-inner h-100 justify-content-center align-items-center"
						id="slider-inner"
					>
						{/* <!-- <div className="container"> --> */}
						<div
							className="carousel-item active"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref1.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref2.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/A.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/famasser.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref5.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/S.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref7_auto_x1.jpg" className="d-inline-block img-fluid" alt="..." style="transform: scaleY(1.3); transform: scaleX(1.1);"> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref8.gif" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref9.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref10.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/E.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/RicheBois.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/acier.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/F22.JPG" className="d-inline-block img-fluid" style="height: 150px;" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
							{/* <!-- </div> --> */}
						</div>
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#slider3"
						data-bs-slide="prev"
						id="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#slider3"
						data-bs-slide="next"
						id="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* <!-- Carousel 2 clients --> */}

				<div
					id="slider2"
					className="carousel carousel-dark slide d-none d-sm-block d-md-none"
					data-bs-ride="carousel"
					data-bs-pause="false"
					className="d-flex justify-content-center align-items-center"
				>
					<div
						className="carousel-inner h-100 justify-content-center align-items-center"
						id="slider-inner"
					>
						{/* <!-- <div className="container"> --> */}
						<div
							className="carousel-item active"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref1.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref2.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/A.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/famasser.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref5.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/S.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref7_auto_x1.jpg" className="d-inline-block img-fluid" alt="..." style="transform: scaleY(1.3); transform: scaleX(1.1);"> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref8.gif" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref9.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref10.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/E.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/RicheBois.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/acier.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/F22.JPG" className="d-inline-block img-fluid" style="height: 150px;" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						{/* <!-- </div> --> */}
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#slider2"
						data-bs-slide="prev"
						id="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#slider2"
						data-bs-slide="next"
						id="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* <!-- Carousel 1 client --> */}

				<div
					id="slider1"
					className="carousel carousel-dark slide d-xs-block d-sm-none"
					data-bs-ride="carousel"
					data-bs-pause="false"
					className="d-flex justify-content-center align-items-center"
				>
					<div
						className="carousel-inner h-100 justify-content-center align-items-center"
						id="slider-inner"
					>
						{/* <!-- <div className="container"> --> */}
						<div
							className="carousel-item active"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref1.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref2.jpg" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/A.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/famasser.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref5.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/S.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref7_auto_x1.jpg" className="d-inline-block img-fluid" alt="..." style="transform: scaleY(1.5); transform: scaleX(1.3);"> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref8.gif" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref9.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/ref10.png" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/E.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-6 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/RicheBois.JPG" className="d-inline-block img-fluid" alt="..."> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/acier.JPG" className="d-inline-block img-fluid" alt="..." style="transform: scale(3.5);"> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>
						<div
							className="carousel-item"
							data-bs-interval="2000"
							id="silder-item"
						>
							<div
								className="row justify-content-around align-items-center text-center"
								id="slider-row"
							>
								<div className="col-3 d-flex justify-content-center align-items-center">
									{/* <img src="imgs/F22.JPG" className="d-inline-block img-fluid" alt="..." style="transform: scale(2);"> */}
									<h3>HELLO</h3>
								</div>
							</div>
						</div>

						{/* <!-- </div> --> */}
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#slider1"
						data-bs-slide="prev"
						id="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#slider1"
						data-bs-slide="next"
						id="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="showcase-7-inner-3 my-5">
					<p className="lead text-center mt-5">ILS NOUS FONT CONFIANCE!</p>
				</div>
			</div>
		</section>
	)
}

export default Carousel
