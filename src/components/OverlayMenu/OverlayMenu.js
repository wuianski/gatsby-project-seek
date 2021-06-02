import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-dark.png"
import CloseButton from "../../images/menu-close.svg"
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

        <div className="overlayMenu">
          {menu.nodes.map(item => (
            <div key={item.directus.id} className="menuTitleBlock">
              <Link
                to={`/${item.directus.slug}`}
                activeClassName="overlayActive"
              >
                <div className="menuTitle">{item.directus.menu_text_en_us}</div>
                <div className="menuTitle">
                  {item.directus.menu_text_zh_hant_tw}
                </div>
              </Link>
            </div>
          ))}
          <div className="menuTitleBlock2">
            <Link to="/about">
              <div className="menuTitle2">About</div>
            </Link>
            <Link to="/hong-x-panasonic">
              <div className="menuTitle2">HONG X PANASONIC</div>
            </Link>
            <Link to="/press">
              <div className="menuTitle2">Press</div>
            </Link>
          </div>
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
