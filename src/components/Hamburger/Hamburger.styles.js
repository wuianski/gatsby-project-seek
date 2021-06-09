import styled from "styled-components"

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    left: 30px;
    top: calc(50vh - 20px);
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    //mix-blend-mode: difference;
    color: #e77832;
    text-shadow: 0.06em 0.06em 0.12em #000;
    :hover {
      transform: scale(1.2);
    }
    /* phones tablets */
    @media (max-width: 768px) {
      left: unset;
      right: 24px;
      top: 18px;
    }
  }
`
