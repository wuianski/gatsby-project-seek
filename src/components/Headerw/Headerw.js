import React from "react"
import { Link } from "gatsby"
import { HeaderLogow } from "./Headerw.styles"
import LogoLight from "../../images/logo-light.svg"

const Headerw = () => (
  <HeaderLogow>
    <Link to="/">
      <img src={LogoLight} alt="logo-light" />
    </Link>
  </HeaderLogow>
)

export default Headerw
