import React from "react"
import { Link } from "gatsby"
import { HeaderLogow } from "./Headerw.styles"
// import LogoLight from "../../images/logo_light_new.svg"
import LogoHf from "../../images/logo_hf.svg"
import LogoPs from "../../images/logo_ps.svg"

const Headerw = () => (
  <HeaderLogow>
    <a href="https://hongfoundation.org.tw/" target="_blank" rel="noreferrer">
      <img className="logoFrontPageHF" src={LogoHf} alt="logo-light" />
    </a>
    {/* <Link to="/">
      <img className="logoFrontPagePS" src={LogoPs} alt="logo-light" />
    </Link> */}
  </HeaderLogow>
)

export default Headerw
