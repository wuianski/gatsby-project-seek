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
    width: 73vw;
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
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 32px 0;
  }
  .pageIntro {
    margin-top: 65px;
  }
  .pageIntroTW {
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.05em;
  }
  .pageIntroEN {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    margin-top: 14px;
  }
  .projectTag {
    color: #e77832;
    //width: 10%;
    //height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: absolute;
    //left: 60px;
    top: 68px;
    width: 150px;
    height: 100px;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .cc {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    line-height: 14.3px;
    letter-spacing: 0.1em;
    color: #c4c4c4;
    //margin: 30px 0px;
  }
  .mt80 {
    margin-top: 80px;
  }
  .pd80 {
    padding-bottom: 80px;
  }
  .mt-80 {
    margin-top: -80px;
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
