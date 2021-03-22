import styled from "styled-components"

export const ArtworkList = styled.div`
  padding: 0;
  min-height: 100vh;
  .aList {
    display: block;
    background: #fafafa;
    height: 72px;
    cursor: pointer;
    border-top: 1px #e77832 solid;
    .aList_link {
      line-height: 100%;
    }
    .aList_yearBlk {
      width: 8%;
      display: inline-block;
      vertical-align: top;
    }
    .aList_year {
      color: #e77832;
      font-size: 15px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.1rem;
    }
    .aList_title {
      width: 60%;
      display: inline-block;
      //vertical-align: middle;
    }
    .aList_titleTW {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.1rem;
      line-height: 30px;
    }
    .aList_titleEN {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.1rem;
      line-height: 20px;
      text-transform: capitalize;
    }
    .aList_aName {
      width: 30%;
      display: inline-block;
      line-height: 1.6;
      //vertical-align: middle;
      font-size: 18px;
      letter-spacing: 2px;
    }
    .aList_aNameTW {
      line-height: 30px; //26.64px
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
    .aList_aNameEN {
      line-height: 20px; //17.76px
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.1rem;
      text-transform: capitalize;
    }
  }
`
