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
  #bgA {
    display: block;
  }
  #bgA_m {
    display: none;
  }
  .blcCtr {
    color: #ffffff;
    width: 73vw;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    //mix-blend-mode: difference;
    filter: drop-shadow(0.05em 0.05em black);
  }
  .blcCtrTitle {
    color: #ffffff;
    width: 73vw;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0.03em 0.03em black);
  }
  .blcCtrIntro {
    color: #ffffff;
    width: 73vw;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 210px;
    filter: drop-shadow(0.03em 0.03em black);
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
    //margin-top: 65px;
  }
  .pageIntroTW {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: justify;
    text-justify: distribute;
  }
  .pageIntroEN {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.02em;
    margin-top: 14px;
    text-align: justify;
    text-justify: distribute;
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
  .fullPTitleTW {
    font-size: 40px;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0.19em;
    margin-top: 45px;
    margin-bottom: 9px;
  }
  .fullPTitleEN {
    font-size: 25px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0.13em;
  }
  .fullPDate {
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-top: 20px;
  }
  .fullPNameTW {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.2em;
    margin-top: 120px;
  }
  .fullPNameEN {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  /* phones tablets */
  @media (max-width: 768px) {
    #bgA {
      display: none;
    }
    #bgA_m {
      display: block;
    }
    .blcCtr {
      top: 50%;
    }
    .blcCtrTitle {
      top: 150px;
    }
    .blcCtrIntro {
      top: 60%;
      width: 84vw;
      height: 52vh;
      overflow-y: scroll;
    }
    .projectTag {
      transform: none;
      top: 80px;
      width: 100%;
      text-align: center;
    }
    .fullPName {
      font-size: 24.5px;
      line-height: 45px;
      letter-spacing: 0.13em;
      margin: 0px;
    }
    .pageIntro {
      margin-top: 00px;
    }
    .pageIntroTW {
      font-size: 18px;
      line-height: 29px;
      letter-spacing: 0.015em;
    }
    .pageIntroEN {
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.005em;
    }
    .arrowDown {
      top: 93%;
    }
    .fullPTitleTW {
      font-size: 30px;
      line-height: 41px;
    }
    .fullPTitleEN {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.1em;
    }
    .fullPDate {
    }
  }
`
