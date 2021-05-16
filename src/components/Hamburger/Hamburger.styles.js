import styled from "styled-components"

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    left: 30px;
    top: calc(50vh - 20px);
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
    }
    /* phones tablets */
    @media (max-width: 768px) {
      left: unset;
      right: 14px;
      top: 14px;
    }
  }
`
