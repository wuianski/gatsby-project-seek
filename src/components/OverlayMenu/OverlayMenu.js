import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-dark.png"
import CloseButton from "../../images/menu-close.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay } from "./OverlayMenu.styles"
//import { css } from "@emotion/react"
//import { rhythm } from "../../utils/typography"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { menu } = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <Link to="/">
          <img className="invertedLogo" src={InvertedLogo} alt="white-logo" />
        </Link>
        <ul className="overlayMenu">
          {menu.nodes.map(item => (
            <li key={item.directus.id}>
              <Link
                to={`/${item.directus.slug}`}
                activeClassName="overlayActive"
              >
                <div>{item.directus.menu_text_en_us}</div>
                <div>{item.directus.menu_text_zh_hant_tw}</div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="overlayMenu">
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/hong-x-panasonic">
            <div>HONG X PANASONIC</div>
          </Link>
          <Link to="/press">
            <div>Press</div>
          </Link>
        </div>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
