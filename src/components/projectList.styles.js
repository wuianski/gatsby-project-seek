import styled from "styled-components"

export const ProjectList = styled.div`
  //padding: 38px 32px 38px 200px;
  min-height: calc(100vh - 72px);
  .pList {
    display: block;
    background: #fafafa;
    height: 172px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
    }
    .pList_link {
      line-height: 100%;
    }
    .pList_year {
      color: #e77832;
      width: 10%;
      height: 100%;
      display: inline-block;
      transform: rotate(90deg);
      vertical-align: middle;
      text-align: center;
      margin-left: -11%;
      font-size: 11px;
      font-weight: bold;
      letter-spacing: 8px;
    }
    .pList_title {
      width: 65%;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }
    .pList_titleQEN {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.3rem;
      line-height: 20px;
      text-transform: uppercase;
    }
    .pList_titleTW {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.2rem;
      line-height: 30px;
    }
    .pList_titleEN {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.2rem;
      line-height: 30px;
      text-transform: uppercase;
    }
    .pList_aName {
      width: 35%;
      display: inline-block;
      text-align: center;
      line-height: 1.6;
      vertical-align: middle;
      border-left: 1px #e77832 solid;
      font-size: 18px;
      letter-spacing: 2px;
    }
    .pList_aNameTW {
      text-align: center;
      line-height: 30px; //26.64px
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.1em;
    }
    .pList_aNameEN {
      text-align: center;
      line-height: 30px; //17.76px
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
`
