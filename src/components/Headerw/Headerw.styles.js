import styled from "styled-components"

export const HeaderLogow = styled.div`
  img {
    position: absolute;
    display: block;
    max-width: 60px;
    left: 32px;
    top: 44px;
    z-index: 999;
    cursor: pointer;
    //text-shadow: 0.03em 0.03em #000;
    /* phones tablets */
    @media (max-width: 768px) {
      display: none;
    }
  }
`
