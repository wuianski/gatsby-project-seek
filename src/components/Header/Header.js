import React from "react"
import { Link } from "gatsby"
import { HeaderLogo } from "./Header.styles"
// import LogoDark from "../../images/logo_dark_new.svg"
import LogoHfDark from "../../images/logo_hf_dark.svg"
import LogoPsDark from "../../images/logo_ps_dark.svg"

const Header = () => (
  <HeaderLogo>
    <a href="https://hongfoundation.org.tw/" target="_blank" rel="noreferrer">
      <img className="logoFrontPageHF" src={LogoHfDark} alt="logo-light" />
    </a>
    <Link to="/">
      <img className="logoFrontPagePS" src={LogoPsDark} alt="logo-light" />
    </Link>
  </HeaderLogo>
)

export default Header
