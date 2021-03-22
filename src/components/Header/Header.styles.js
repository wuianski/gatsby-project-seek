import styled from "styled-components"

export const HeaderLogo = styled.div`
  img {
    position: fixed;
    display: block;
    max-width: 50px;
    left: 32px;
    top: 44px;
    z-index: 999;
    cursor: pointer;
    @media (min-width: 992px) {
      display: block;
    }
  }
`
