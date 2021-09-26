import styles from "../styles/ContactPage/Contact.module.css"
import { useEffect, useState } from "react"
import {FaPhoneAlt} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'

const contact = () => {
	const [msg, setMsg] = useState("")

	useEffect(() => {
		const textarea = document.querySelector("textarea")
		textarea.style.height = textarea.scrollHeight + "px"
	}, [msg])

	const {
		get_in_touch,
		title,
		input,
		contact_form,
		form_field,
		input_text,
		label,
		message,
		submit_btn,
		wrapper,
		yellow_div,
    contact_info,
    contact_info_title,
    contact_info_details,
    icon,
    travaillons_ensemble,
		hr
	} = styles
  
	return (
    <div className={`m-0 ${wrapper}`}>
			{/* <div className={`d-none d-lg-block ${yellow_div}`}></div> */}
      <div className={`d-flex flex-column justify-content-center align-items-center text-center mx-auto p-0 ${travaillons_ensemble}`}>
        <h1 className={`p-0 m-0 text-white ${title}`}>Contactez-nous!</h1>
				<hr className={hr} />

      </div>

      <div className={`container d-flex flex-column justify-content-center align-items-center mx-auto ${contact_info}`} >
        <div className="row d-flex justify-content-around align-items-center text-center container mx-auto">
          <div className="col-md-7 col-lg-3 py-5 d-flex flex-column justify-content-center align-items-center mb-3 mb-lg-0 bg-white">
            <div className={`mb-4 p-4 rounded-circle d-flex justify-content-center align-items-center ${icon}`}>
              <FaPhoneAlt />
            </div>
            <h4 className={`mb-4 ${contact_info_title}`}>Contactez-nous</h4>
            <p className={`m-0 ${contact_info_details}`}>Tel: 0523321720</p>
            <p className={`m-0 ${contact_info_details}`}>Fax: 0523321722</p>

          </div>
          <div className="col-md-7 col-lg-3 py-5 d-flex flex-column justify-content-center align-items-center mb-3 mb-lg-0 bg-white">
            <div className={`mb-4 p-4 rounded-circle d-flex justify-content-center align-items-center ${icon}`}>
              <IoMdMail />
            </div>
            <h4 className={`mb-4 ${contact_info_title}`}>Email</h4>
            <p className={`m-0 ${contact_info_details}`}>esmasatravaux@gmail.com</p>
            <p className={`m-0 ${contact_info_details}`}>contact@esmasatravaux.com</p>
            
          </div>
          <div className="col-md-7 col-lg-3 py-5 d-flex flex-column justify-content-center align-items-center mb-0 bg-white">
            <div className={`mb-4 p-4 rounded-circle d-flex justify-content-center align-items-center ${icon}`}>
              <MdLocationOn />
            </div>
            <h4 className={`mb-4 ${contact_info_title}`}>Adresse</h4>
            <p className={`m-0 ${contact_info_details}`}>15 Boulevard Abdelmoumen, étage 2, appartement N°6, Mohammedia</p>
            {/* <p className={`m-0 ${contact_info_details}`}>, Maroc</p> */}
            
          </div>
        </div>
      </div>

			<section className={get_in_touch}>
				<div className="container">
					<h1 className={title}>Envoyez-nous un message!<hr className={hr} /></h1>
					

					<form
						className={`${contact_form} row`}
						name="contact"
						method="POST"
						data-netlify="true"
					>
						<div className={`${form_field} col-lg-6`}>
							<input
								id="name"
								className={`${input_text} ${input}`}
								type="text"
								name="nom"
								autocomplete="off"
								required
							/>
							<label className={label} for="name">
								Nom - Prénom
							</label>
						</div>
						<div className={`${form_field} col-lg-6`}>
							<input
								id="email"
								className={`${input_text} ${input}`}
								type="email"
								name="email"
								autocomplete="off"
								required
							/>
							<label className={label} for="email">
								E-mail
							</label>
						</div>
						<div className={`${form_field} col-lg-6`}>
							<input
								id="company"
								className={`${input_text} ${input}`}
								type="text"
								name="société"
								autocomplete="off"
								required
							/>
							<label className={label} for="company">
								Société
							</label>
						</div>
						<div className={`${form_field} col-lg-6`}>
							<input
								id="phone"
								className={`${input_text} ${input}`}
								type="text"
								name="téléphone"
								autocomplete="off"
								required
							/>
							<label className={label} for="phone">
								Téléphone
							</label>
						</div>
						<div className={`${form_field} col-lg-12`}>
							<select
								className={`${input_text} ${input}`}
								name="Service"
								required
							>
								<option aria-invalid="true"></option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
								<option>XXXXXXXXXXXXXXXXX</option>
							</select>
							<label className={label}>Choisissez un service</label>
						</div>
						<div className={`${form_field} col-lg-12`}>
							<textarea
								className={`${input_text} ${input} ${message}`}
								type="text"
								name="message"
								required
								value={msg}
								onChange={(e) => setMsg(e.target.value)}
							></textarea>
							<label className={label} for="message">
								Message
							</label>
						</div>
						<div className={`${form_field} col-lg-12`}>
							<button type="submit" className={submit_btn}>
								ENVOYEZ
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default contact
