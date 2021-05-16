import styled from "styled-components"

export const HeaderLogo = styled.div`
  img {
    position: fixed;
    display: block;
    max-width: 50px;
    left: 32px;
    top: 44px;
    z-index: 99;
    cursor: pointer;
    /* desktop */
    @media (max-width: 992px) {
      display: block;
    }
    /* phones tablets */
    @media (max-width: 768px) {
      display: none;
    }
  }
`
