import styled from "styled-components"

export const FrontPage = styled.div`
  /*** grid ***/

  #fullpage_container {
    background-color: #000000;
    width: 100vw;
    height: 100vh;
  }
  #project_container {
    background-color: #000000;
    width: 85vw;
    height: calc(100vh - 88px);
    position: absolute;
    top: 44px;
    right: 44px;
  }
  #project_container_m {
    display: none;
  }
  .tagName {
    color: #ffffff;
    font-size: 10px;
    position: absolute;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.15em;
    line-height: 9px;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
  }
  .h100 {
    height: 100%;
  }
  .bgCoverImg {
    height: 100%;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    line-height: 100%;
  }
  .blcCtr {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //mix-blend-mode: difference;
    filter: drop-shadow(0.02em 0.02em black);
  }
  .txtCtr {
    text-align: center;
    text-transform: uppercase;
  }
  .fullPName {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.19em;
    margin: 0px;
  }
  .fullPNameTW {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.19em;
    margin: 0px;
  }
  
  /*effect-underline*/
  .fullPName:after {
    content: "";
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1.1em;
    width: 97%;
    border-bottom: 1px solid #fff;
    margin-top: 0px;
    opacity: 0;
    -webkit-transition: opacity 0.8s, -webkit-transform 0.8s;
    transition: opacity 0.8s, transform 0.8s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }
  .bgCoverImg:hover .fullPName:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  #project_container div:nth-of-type(1) {
    flex-grow: 2;
  }
  #project_container div:nth-of-type(2) {
    flex-grow: 1;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 1px;
    padding: 1px;
    height: 100%;
  }
  .grid-container > div {
    background-color: #000000;
    text-align: center;
    /*padding: 20px 0;*/
    font-size: 30px;
  }
  #item1 {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
    position: relative; /*make ele can center vertically inside itself*/
    border-left: #fff 1px solid;
  }
  #item2 {
    grid-column: 4 / 6;
    grid-row: 1 / 3;
    position: relative; /*make ele can center vertically inside itself*/
    border-top: #fff 1px solid;
  }
  #item3 {
    //grid-row: 2 / 4;
    position: relative; /*make ele can center vertically inside itself*/
    border-bottom: #fff 1px solid;
  }
  #item4 {
    //grid-row: 2 / 4;
    position: relative; /*make ele can center vertically inside itself*/
    border-right: #fff 1px solid;
  }

  /*** grid item ***/

  #pTag_1 {
    position: absolute;
    width: 130px;
    left: -65px;
    bottom: 50%;
    transform: rotate(90deg);
    background-color: #000;
    z-index: 99;
  }
  #pTag_2 {
    position: absolute;
    width: 110px;
    top: 0px;
    left: calc(50% - 55px);
    transform: translate(0, -50%);
    background-color: #000;
    z-index: 99;
  }
  #pTag_3 {
    position: absolute;
    width: 110px;
    bottom: -9px;
    left: calc(50% - 55px);
    transform: translate(0, -50%);
    background-color: #000;
    z-index: 99;
  }
  #pTag_4 {
    position: absolute;
    width: 130px;
    right: -65px;
    bottom: 50%;
    transform: rotate(90deg);
    background-color: #000;
    z-index: 99;
  }

  /*effect-underline*/

  a.effect-underline:after {
    content: "";
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid #fff;
    margin-top: 0px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  a.effect-underline:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  /*effect-scrolling*/

  #scrollImg_container_q {
    position: absolute;
    width: 217px;
    height: 60px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scrollImg_q {
    /*display: inline-block;*/
    position: absolute;
    width: 217px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #scrollImg_static_q {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  #scrollImg_static_a_q {
    animation: fadein 3s ease-in-out forwards;
  }
  .textImg_q {
    width: 217px;
    height: 60px;
  }

  #scrollImg_container_t {
    position: absolute;
    width: 72px;
    height: 60px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scrollImg_t {
    /*display: inline-block;*/
    position: absolute;
    width: 72px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #scrollImg_static_t {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  #scrollImg_static_a_t {
    animation: fadein 3s ease-in-out forwards;
  }
  .textImg_t {
    width: 72px;
    height: 55px;
  }

  #scrollImg_container_c {
    position: absolute;
    width: 93px;
    height: 60px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scrollImg_c {
    /*display: inline-block;*/
    position: absolute;
    width: 93px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #scrollImg_static_c {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  #scrollImg_static_a_c {
    animation: fadein 3s ease-in-out forwards;
  }
  .textImg_c {
    width: 93px;
    height: 47px;
  }

  #scrollImg_container_e {
    position: absolute;
    width: 126px;
    height: 60px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scrollImg_e {
    /*display: inline-block;*/
    position: absolute;
    width: 126px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #scrollImg_static_e {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  #scrollImg_static_a_e {
    animation: fadein 3s ease-in-out forwards;
  }
  .textImg_e {
    width: 126px;
    height: 47px;
  }

  @keyframes scrollleft {
    0% {
      transform: translate(60%, -50%);
      opacity: 1;
    }
    100% {
      transform: translate(-200%, -50%);
      opacity: 1;
    }
  }
  @keyframes scrollright {
    100% {
      transform: translate(60%, -50%);
      opacity: 1;
    }
    0% {
      transform: translate(-200%, -50%);
      opacity: 0;
    }
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* phones tablets */
  @media (max-width: 768px) {
    #project_container {
      display: none;
    }
    #project_container_m {
      display: block;
    }
    .bgCoverImg {
      height: 100vh;
      width: 100%;
      background-position: bottom center;
      background-repeat: repeat-y;
      background-size: cover;
      line-height: 100%;
    }
    .fullPName {
      line-height: 45px;
      letter-spacing: 0.13em;
      font-size: 24.5px;
      width: 80vw;
      height: 45px;
    }
    .tagName {
      color: #e77832;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 0.21em;
      text-align: center;
      text-transform: uppercase;
      position: absolute;
      top: 39%;
    }
    .logoFrontPage {
      max-width: 50px;
      position: absolute;
      left: 24px;
      top: 23px;
      display: block;
    }
    .swiper-pagination-bullet {
      background: #fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: var(--swiper-pagination-color, #e77832) !important;
    }
  }
`
