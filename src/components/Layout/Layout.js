import React, { useState } from "react"
//import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
//import Footer from "../Footer/Footer"
import { GlobalStyles, Primary } from "./Layout.styles"
//import "./bt.styles.js"
//import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/noto-sans-jp"
import "@fontsource/noto-sans-jp/500.css"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/metropolis"
import "@fontsource/metropolis/500.css"
import "@fontsource/metropolis/600.css"
import "@fontsource/metropolis/700.css"
import "@fontsource/metropolis/800.css"
import "@fontsource/metropolis/900.css"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />

      <Primary>{children}</Primary>
    </>
  )
}

export default Layout
