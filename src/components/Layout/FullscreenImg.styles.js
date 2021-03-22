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
    text-transform: uppercase;
  }
  .arrowDown {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-90%, -50%);
    cursor: pointer;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  //project's index.js
  .fullPName {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.19em;
    margin: 36px 0;
  }
  .pageIntro {
    margin-top: 80px;
  }
  .pageIntro p {
    font-size: 15px;
    font-weight: 500;
    line-height: 24.08px;
    letter-spacing: 0.1em;
  }
  //
  //project's projectTemplate.js
  .fullPYear {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.25em;
  }
  .fullPTitleEN {
    font-size: 40px;
    font-weight: bold;
    line-height: 55px;
    letter-spacing: 0.19em;
    margin: 36px 0;
  }
  .fullPNameTW {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.2em;
    margin: 9px 0;
  }
  .fullPNameEN {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
  //
`
