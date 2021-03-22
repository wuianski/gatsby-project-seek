import styled from "styled-components"

export const About = styled.div`
  .aboutMenuBlock {
    width: 50%;
    margin-top: 44px;
    padding-right: 5%;
  }
  .aboutMenu {
    display: inline-block;
    //width: 20%;
    margin-right: 12%;
    color: #e77832;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.2em;
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
  }
  .aboutTitle {
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.05em;
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
    font-size: 13px;
    line-height: 21px;
    letter-spacing: 0.05em;
  }
  .timelineAllBlock {
    display: inline-flex;
    margin-bottom: 20px;
  }
  .timelineYear {
    font-weight: 600;
    font-size: 21px;
    line-height: 21px;
    letter-spacing: 0.05em;
    width: 120px;
    display: inline-block;
    padding-top: 2px;
  }
  .timelineContentBlock {
    display: inline-block;
    height: 42px;
  }
  .timelineContentTW p {
    font-weight: 300;
    font-size: 13px;
    line-height: 21px;
    letter-spacing: 0.05em;
    margin-bottom: 0;
  }
  .timelineContentEN p {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.05em;
    margin-bottom: 0;
  }
  .reviewTitle {
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.05em;
  }
  .reviewFD {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.05em;
  }
  .infoContent {
    font-weight: 300;
    font-size: 13px;
    line-height: 21px;
    letter-spacing: 0.05em;
    margin-bottom: 0;
  }
  .hyperlink {
    margin-top: 10px;
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
    padding-right: 20%;
  }
`
