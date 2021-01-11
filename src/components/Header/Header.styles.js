import styled from "styled-components"

export const HeaderLogo = styled.div`
  img {
    position: fixed;
    display: block;
    max-width: 50px;
    left: 32px;
    top: 38px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.2);
    }
    @media (min-width: 992px) {
      display: block;
    }
  }
`
