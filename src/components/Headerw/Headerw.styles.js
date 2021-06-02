import styled from "styled-components"

export const HeaderLogow = styled.div`
  img {
    position: absolute;
    display: block;
    max-width: 50px;
    left: 32px;
    top: 44px;
    z-index: 999;
    cursor: pointer;
    text-shadow: 0.02em 0.02em #000;
    /* phones tablets */
    @media (max-width: 768px) {
      display: none;
    }
  }
`
