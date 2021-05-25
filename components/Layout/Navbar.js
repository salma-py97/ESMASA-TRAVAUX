import NavStyles from "../../styles/Navbar.module.css"
import Button from './Button'
import ButtonStyles from '../../styles/Button.module.css'

import Link from "next/link"

import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import Image from 'next/image'

import { useState, useEffect } from "react"

// import logo from '../../public/images/logo.png'

const Navbar = () => {
  const {
		navbar,
		navbar_container,
		container,
		navbar_logo,
		nav_menu,
		nav_item,
		nav_links,
    nav_btn,
		menu_icon,
    active,
    logo
	} = NavStyles

  const {btn,
    btn__outline,
    btn__mobile,
    btn__link} = ButtonStyles;


	const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

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

        <div className={navbar}>
          <div className={`${navbar_container} ${container}`}>

          <Link	href="/" className={`${navbar_logo}`} >
            <div className={logo}  onClick={() => {setClick(false)}}>
                <Image
        src="/images/logo_esmasa.png"
        alt="ESMASA TRAVAUX"
        width={50}
        height={50}
      />
              <h3>
                ESMASA TRAVAUX 
              </h3>

            </div>
          </Link>
          <div className={menu_icon} onClick={() => setClick(!click)} >
            {click ? <FaTimes /> : <FaBars />}{" "}
					</div>

          <ul className={click ? ` ${nav_menu} ${active}` : `${nav_menu}`}>
						<li className={nav_item}>
							<Link	href="/" >
                <p className={nav_links} onClick={() => {setClick(false)}}>Home</p>
                
								
							</Link>
						</li>
						<li className={nav_item}>
							<Link	href="/services"  >
                <p className={nav_links} onClick={() => {setClick(false)}}>Services</p>
								
							</Link>
						</li>
						<li className={nav_item}>
							<Link	href="/products" >
                <p className={nav_links} onClick={() => { setClick(false)	}}>Products</p>
								
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
