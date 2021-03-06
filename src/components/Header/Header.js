import React from "react"
import { Link } from "gatsby"
import { HeaderLogo } from "./Header.styles"
import LogoDark from "../../images/logo-dark.svg"

const Header = () => (
  <HeaderLogo>
    <Link to="/">
      <img src={LogoDark} alt="logo-dark" />
    </Link>
  </HeaderLogo>
)

export default Header
