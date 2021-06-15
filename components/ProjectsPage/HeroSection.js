import styles from "../../styles/ProjectsPage/HeroSection.module.css"
import Image from "next/image"

const HeroSection = () => {
	const { wrapper, title, banner, img } = styles

	return (
		<div
			className={`d-flex flex-column justify-content-center align-items-center ${wrapper}`}
		>
      <div className={banner}>
        <Image
          src="https://i.ibb.co/pb0P1Mv/sep-line-white.png"
          // height={13}
          // width={680}
          layout="fill"
          objectFit="cover"
          className={img}
          alt=""
        />
      </div>
			<h1 className={`my-3 text-warning ${title}`}>NOS PROJETS</h1>
      <div className={banner}>
        <Image
          src="https://i.ibb.co/pb0P1Mv/sep-line-white.png"
          // height={13}
          // width={680}
          layout="fill"
          objectFit="cover"
          className={img}
          alt=""
        />
      </div>
		</div>
	)
}

export default HeroSection
