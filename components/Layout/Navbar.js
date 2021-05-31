import NavStyles from "../../styles/Navbar.module.css"
import Button from './Button'
import ButtonStyles from '../../styles/Button.module.css'

import Link from "next/link"
import Image from 'next/image'

import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import { useState, useEffect } from "react"

// import logo from '../../public/images/logo.png'

const Navbar = () => {
  const {
		navbar_nav,
		navbar_container,
		nav_container,
		navbar_logo,
		nav_menu,
		nav_item,
		nav_links,
    nav_btn,
		menu_icon,
    active,
    logo,
    close_icon
	} = NavStyles

  const {btn,
    btn__outline,
    btn__mobile,
    btn__link} = ButtonStyles;


	const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isRed, setIsRed] = useState(false)

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(true)
    } else {
      setButton(false)
    }
  }
    
  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton()
}, [])



  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>

        <div className={navbar_nav}>
          <div className={`${navbar_container} ${nav_container}`}>

          <Link	href="/" className={`${navbar_logo}`} >
            <div className={logo}  onClick={() => {setClick(false)}}>
                <Image
        src="/images/logo_esmasa.png"
        alt="ESMASA TRAVAUX"
        width={50}
        height={50}
      />
              <h3 className="mt-2">
                ESMASA TRAVAUX 
              </h3>

            </div>
          </Link>
          <div className={menu_icon} onClick={() => setClick(!click)} >
            {click ? <FaTimes onMouseEnter={() => setIsRed(true)} onMouseLeave={() => setIsRed(false)} className={isRed ? `text-danger` : `text-white`}/> : <FaBars />}
					</div>

          <ul className={click ? ` ${nav_menu} ${active}` : `${nav_menu}`}>
						<li className={nav_item}>
							<Link	href="/" >
                <p className={nav_links} onClick={() => {setClick(false)}}>Acceuil</p>
                
								
							</Link>
						</li>
						<li className={nav_item}>
							<Link	href="/services"  >
                <p className={nav_links} onClick={() => {setClick(false)}}>Services</p>
								
							</Link>
						</li>
						<li className={nav_item}>
							<Link	href="/products" >
                <p className={nav_links} onClick={() => { setClick(false)	}}>Projets</p>
								
							</Link>
						</li>
						<li className={nav_item}>
							<Link	href="/about"	>
                <p className={nav_links} onClick={() => { setClick(false) }}>About</p>

							</Link>
						</li>

            <li className={nav_btn}>
              {
              button ? (
                  <Link href="/sign-up" className={btn__link}>
                      <Button className={`${btn} ${btn__outline}`}>CONTACT</Button>
                  </Link>
              ) : 
              (
                <Link href="/sign-up" className={btn__link} onClick={() => {setClick(false)}}>
                    <Button className={`${btn} ${btn__outline} ${btn__mobile}`}>CONTACT</Button>
                </Link>
              )
              } 
            </li>

					</ul>
          </div>
        </div> 

      </IconContext.Provider>
    </>
  )
}

export default Navbar
