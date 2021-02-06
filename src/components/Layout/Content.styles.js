import styled from "styled-components"

export const Content = styled.div`
  padding: 38px 32px 38px 200px;
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 0.05em;
  .summaryBlock {
    color: #000;
    margin: 30px 0px;
  }
  .summaryTW {
    font-size: 15px;
    font-weight: 500;
  }
  .summaryEN {
    font-size: 15px;
    font-weight: 500;
    margin: 28px 0px;
  }
  .contentBlock {
    color: #4f4f4f;
    font-size: 13px;
    width: 80%;
    float: right;
    display: flex;
    margin: 30px 0px;
  }
  .contentTW {
    width: 50%;
    margin-left: 3%;
  }
  .contentEN {
    width: 50%;
    margin-left: 3%;
  }
  .mainVidInfo {
    font-size: 11px;
  }
  .titleBlock {
    color: #000;
    margin: 15px 0px;
  }
  .titleTW {
    font-size: 18px;
    font-weight: 500;
  }
  .titleEN {
    font-size: 13px;
    font-weight: 600;
  }
  .fr {
    float: right;
  }
  .textBlock {
    color: #4f4f4f;
    display: inline-block;
    margin: 15px 0px;
  }
  .textTW {
    font-size: 13px;
  }
  .textEN {
    font-size: 13px;
    margin: 15px 0px;
  }
  .w80 {
    width: 80%;
  }
  .twoGrid55 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 47% 47%;
    column-gap: 6%;
    margin: 30px 0;
  }
  .video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .eventCover {
    height: 25vw;
  }
  .eventCoverImg div {
    padding-bottom: 56.25% !important;
  }
  .reviewDate {
    font-size: 15px;
    color: #e77832;
  }
  .reviewTW {
    font-size: 16px;
  }
  .reviewEN {
    font-size: 14px;
    font-weight: 300;
  }
  .twoGrid37 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 27% 67%;
    column-gap: 6%;
    margin: 30px 0;
    padding-top: 10px;
    border-top: 1px #e77832 solid;
  }
`
