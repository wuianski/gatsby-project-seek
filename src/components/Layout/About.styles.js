import styled from "styled-components"

export const About = styled.div`
  .aboutMenuBlock {
    width: 50%;
    margin-top: 44px;
    //padding-right: 5%;
  }
  .aboutMenu {
    display: inline-block;
    //width: 20%;
    margin-right: 12%;
    color: #e77832;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
  }
  .fr {
    float: right;
  }
  .tabContainer {
    height: 70vh;
    top: 18vh;
    overflow: scroll;
    color: #fff;
    scrollbar-width: none;
  }
  .aboutTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.08em;
  }
  .aboutTitle p {
    margin-bottom: 0px;
  }
  .aboutContent {
    margin-top: 30px;
  }
  .aboutContent p,
  .aboutContent div {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.08em;
    text-align: justify;
    text-justify: distribute;
  }
  .timelineAllBlock {
    display: inline-flex;
    margin-bottom: 20px;
    width: 100%;
  }
  .timelineYear {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.08em;
    width: 120px;
    display: inline-block;
    top: 5px;
    position: relative;
  }
  .timelineContentBlock {
    display: inline-grid;
    //height: 42px;
    margin-top: 12px;
  }
  .timelineContentTW p {
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.08em;
    margin-bottom: 0;
    max-width: 400px;
  }
  .timelineContentEN p {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.08em;
    margin-bottom: 0;
    max-width: 400px;
    text-align: justify;
    text-justify: distribute;
  }
  .reviewTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.08em;
    color: #fff;
  }
  .reviewFD {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #fff;
  }
  .arrowGoTo {
    padding-top: 30px;
    cursor: pointer;
  }
  .infoContent {
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.05em;
    margin-bottom: 0;
  }
  .hyperlink {
    margin-top: 10px;
  }
  .socialMediaBlk {
    margin-top: 30px;
  }
  .socialMedia {
    padding-right: 30px;
  }
  .FB img {
    height: 24px;
  }
  .YT img {
    height: 17px;
  }
  .IG img {
    height: 19px;
  }

  //react-tabs

  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    //border-bottom: 1px solid #aaa;
    margin: 0 0 40px;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    //background: #fff;
    //border-color: #aaa;
    //color: black;
    //border-radius: 5px 5px 0 0;
    border-bottom: 3px solid #e77832;
    //text-decoration: underline;
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
    padding-right: 10%;
  }
  .tabContainer {
    // scrollbar-width: thin;
    scrollbar-color: blue orange;
    scrollbar-width: none;
  }
  .tabContainer::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 120px; /* width of the entire scrollbar */
    display: none;
  }

  ::-webkit-scrollbar-track {
    background: orange; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid orange; /* creates padding around scroll thumb */
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 1);
  }

  @media (max-width: 768px) {
    .aboutMenuBlock {
      width: 100%;
    }
    .react-tabs__tab-list {
      transform: rotate(90deg);
      position: fixed;
      //width: 100vh;
      //width: calc(200px + 100vw);
      //top: 60vh;
      //top: calc(-20px + 100vw);
      //left: -82vw;
      //right: 60px;
      transform: rotate(90deg) translateY(-100%);
      transform-origin: top left;
      width: 600px;
      top: 88px;
    }
    .react-tabs__tab-panel--selected {
      display: block;
      padding: 39px 27px 0px 66px;
    }
    .tabContainer {
      height: 86vh;
    }
    .aboutContent p {
      font-size: 18px;
      line-height: 29px;
      letter-spacing: 0.015em;
    }
    .aboutTitle p {
      margin-bottom: 12px;
    }
    .aboutMenu {
      margin-right: 8%;
    }
    .aboutContent {
      margin-top: 0px;
    }
  }
`
