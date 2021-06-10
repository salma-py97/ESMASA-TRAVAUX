import styles from '../styles/Contact.module.css'

const contact = () => {

  const { get_in_touch,
          title,
          input,
          contact_form,
          form_field,
          input_text,
          label,
          message,
          submit_btn
  } = styles

  return (
<section className={get_in_touch}>
    <div className="container">  
      <h1 className={title}>Contactez-nous!</h1>
      <form className={`${contact_form} row`} name="contact" method="POST" data-netlify="true">
        <div className={`${form_field} col-lg-6`}>
            <input id="name" className={`${input_text} ${input} bg-white`} type="text" name="nom" autocomplete="off" required />
            <label className={label} for="name">Nom - Prénom</label>
        </div>
        <div className={`${form_field} col-lg-6`}>
            <input id="email" className={`${input_text} ${input} bg-white`} type="email" name="email" autocomplete="off" required />
            <label className={label} for="email">E-mail</label>
        </div>
        <div className={`${form_field} col-lg-6`}>
            <input id="company" className={`${input_text} ${input} bg-white`} type="text" name="société" autocomplete="off" required/>
            <label className={label} for="company">Société</label>
        </div>
          <div className={`${form_field} col-lg-6`}>
            <input id="phone" className={`${input_text} ${input} bg-white`} type="text" name="téléphone" autocomplete="off" required />
            <label className={label} for="phone">Téléphone</label>
        </div>
        <div className={`${form_field} col-lg-12`}>
          <select className={`${input_text} ${input} bg-white`} name="Service" required>
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
            <textarea id="message" className={`${input_text} ${input} ${message} bg-white`} type="text" name="message" required></textarea>
            <label className={label} for="message">Message</label>
        </div>
        <div className={`${form_field} col-lg-12`}>
            <button type="submit" className={submit_btn}>ENVOYEZ</button>
        </div>
      </form>
    </div>
  </section>

  )
}

export default contact
