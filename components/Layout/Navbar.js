import NavStyles from "../../styles/LayoutStyles/Navbar.module.css"
import Button from './Button'
import ButtonStyles from '../../styles/LayoutStyles/Button.module.css'

import Link from "next/link"
import Image from 'next/image'

import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import { useState, useEffect } from "react"
import { useRouter } from 'next/router'


const Navbar = () => {
  const router = useRouter();

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
    bg_transparent, 
    bg_dark,
    bars_scaled,
    bars_normal,
    nav_item_active
	} = NavStyles

  const {btn,
    btn__outline,
    btn__mobile,
    btn__link} = ButtonStyles;


	const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isRed, setIsRed] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [isNotHome, setNotHome] = useState(false)
  const [bars, setBars] = useState(false)

  
  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(true)
    } else {
      setButton(false)
    }
  }
  
  const navbarBg = () => {
    if (window.scrollY > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const bg = () => {
    if (router.pathname === "/") {
      setNotHome(false)
    } else {
      setNotHome(true)
    }
  }
  
  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton()
    
    window.addEventListener("scroll", navbarBg)
    navbarBg()

    
  }, [])
  
  useEffect(() => {
    bg()
  }, [router.pathname])



  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>

        <div className={isScrolled || click || isNotHome ? `${bg_dark} ${navbar_nav}`: `${bg_transparent} ${navbar_nav}`}  >
          <div className={`${navbar_container} ${nav_container} container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between`}>

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
          <div className={`justify-content-center align-items-center mr-3 mr-md-5 ${menu_icon}`} onClick={() => setClick(!click)} >
            {click ? <FaTimes onMouseEnter={() => setIsRed(true)} onMouseLeave={() => setIsRed(false)} className={isRed ? `text-danger` : `text-white`}/> : <FaBars onMouseEnter={() => setBars(true)} onMouseLeave={() => setBars(false)} className={bars ? `${bars_scaled}` : `${bars_normal}`} />}
					</div>

          <ul className={click ? ` ${nav_menu} ${active}` : `${nav_menu}`}>

						<li className={router.pathname == "/" ? `${nav_item} ${nav_item_active}` : `${nav_item}`}>
							<Link	href="/" >
                <p className={nav_links} onClick={() => {setClick(false)}}>Acceuil</p>
							</Link>
						</li>
						<li className={router.pathname == "/services" ? `${nav_item} ${nav_item_active}` : `${nav_item}`}>
							<Link	href="/services"  >
                <p className={nav_links} onClick={() => {setClick(false)}}>Services</p>
							</Link>
						</li>
						<li className={router.pathname == "/projets" ? `${nav_item} ${nav_item_active}` : `${nav_item}`}>
							<Link	href="/projets" >
                <p className={nav_links} onClick={() => { setClick(false)	}}>Projets</p>
							</Link>
						</li>
						{/* <li className={router.pathname == "/safety" ? `${nav_item} ${nav_item_active}` : `${nav_item}`}>
							<Link	href="/safety"	>
                <p className={nav_links} onClick={() => { setClick(false) }}>Sécurité</p>
							</Link>
						</li> */}

            <li className={nav_btn}>
              {
              button ? (
                  <Link href="/contact" className={btn__link}>
                      <Button className={`${btn} ${btn__outline}`} onClick={() => {setClick(false)}}>CONTACT</Button>
                  </Link>
              ) : 
              (
                <Link href="/contact" className={btn__link} onClick={() => {setClick(false)}}>
                    <Button className={`${btn} ${btn__outline} ${btn__mobile}`} onClick={() => {setClick(false)}}>CONTACT</Button>
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
