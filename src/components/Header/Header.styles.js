import styled from "styled-components"

export const HeaderLogo = styled.div`
  img.logoFrontPageHF {
    position: fixed;
    display: block;
    width: 120px;
    // max-width: 100px;
    left: 0px;
    top: 14px;
    z-index: 99;
    cursor: pointer;
    //filter: drop-shadow(0.02em 0.02em black);
    /* desktop */
    @media (max-width: 992px) {
      display: block;
    }
    /* phones tablets */
    @media (max-width: 768px) {
      display: none;
    }
  }
  img.logoFrontPagePS {
    position: fixed;
    display: block;
    width: 120px;
    // max-width: 100px;
    left: 0px;
    top: 200px;
    z-index: 99;
    cursor: pointer;
    //filter: drop-shadow(0.02em 0.02em black);
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
