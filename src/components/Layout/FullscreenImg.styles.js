import styled from "styled-components"

export const FullscreenImg = styled.div`
  .bgSection {
    height: 100vh;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    line-height: 100%;
  }
  .blcCtr {
    color: #ffffff;
    width: 55vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .txtCtr {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .pageIntro {
    margin-top: 80px;
  }
  .pageIntro p {
    font-size: 17px;
  }
  .arrowDown {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-90%, -50%);
  }
`
