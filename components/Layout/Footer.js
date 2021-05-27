import Button from './Button'
import ButtonStyles from '../../styles/Button.module.css'
import FooterStyles from '../../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  const {btn__outline} = ButtonStyles
  const {footer_container, footer_subscription,
    footer_subscription_heading,
    footer_subscription_text,
    input_areas,
    footer_input,
    footer_links,
    footer_link_wrapper,
    footer_link_items,
    social_media,
    social_media_wrap,
    footer_logo,
    social_logo,
    website_rights,
    social_icons
  } = FooterStyles

  return (
    <>
    
    <div className={footer_container}>
      <section className={footer_subscription}>
        <p className={footer_subscription_heading}>
          Join the Adventure newletter to reveive our best vacation deals
        </p>
        <p className={footer_subscription_text}>
          You can unsubscribe at anytime
        </p>
        <div className={input_areas}>
          <form action="POST">
            <input type="email" name="email" placeholder="Your Email..." className={footer_input} />
            <Button className={btn__outline}>Subscribe Now</Button>
          </form>
        </div>
      </section>
      <div className={footer_links}>
        <div className={footer_link_wrapper}>
          <div className={footer_link_items}>
            <h2>About Us</h2>
            <Link href='#'><p>How it works</p></Link>
            <Link href='#'><p>Testimonials</p></Link>
            <Link href='#'><p>Careers</p></Link>
            <Link href='#'><p>Investors</p></Link>
            <Link href='#'><p>Terms of Service</p></Link>
          </div>
          <div className={footer_link_items}>
            <h2>Contact Us</h2>
            <Link href='#'><p>How it works</p></Link>
            <Link href='#'><p>Testimonials</p></Link>
            <Link href='#'><p>Careers</p></Link>
            <Link href='#'><p>Investors</p></Link>
            <Link href='#'><p>Terms of Service</p></Link>
          </div>
        </div>
        <div className={footer_link_wrapper}>
          <div className={footer_link_items}>
            <h2>Videos</h2>
            <Link href='#'><p>How it works</p></Link>
            <Link href='#'><p>Testimonials</p></Link>
            <Link href='#'><p>Careers</p></Link>
            <Link href='#'><p>Investors</p></Link>
            <Link href='#'><p>Terms of Service</p></Link>
          </div>

          <div className={footer_link_items}>
            <h2>Social Media</h2>
            <Link href='#'><p>How it works</p></Link>
            <Link href='#'><p>Testimonials</p></Link>
            <Link href='#'><p>Careers</p></Link>
            <Link href='#'><p>Investors</p></Link>
            <Link href='#'><p>Terms of Service</p></Link>
          </div>
        </div>
      </div>

      <section className={social_media}>
        <div className={social_media_wrap}>
          <div className={footer_logo}>
            <Link href="/" >
              <p  className={social_logo}><Image         
              src="/images/logo_esmasa.png"
              alt="ESMASA TRAVAUX"
              width={50}
              height={50} /> ESMASA TRAVAUX 
              </p>
            </Link>
          </div>
        </div>
          <div className={social_icons}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagramSquare /></Link>
            <Link href="#"><FaLinkedin /></Link>
          </div>
      </section>
    </div>
      <section className={website_rights}>All Rights Reserved &copy; 2021 | &nbsp; <Link href="/"><span> ESMASA TRAVAUX</span></Link> </section>
    </>
  )
}

export default Footer
