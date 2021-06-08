import styled from "styled-components"

export const ProjectList = styled.div`
  //padding: 38px 32px 38px 200px;
  padding-bottom: 120px;
  min-height: calc(100vh - 72px);
  .pList {
    display: block;
    background: #fafafa;
    height: 230px;
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
      width: 70px;
      height: 100%;
      display: inline-block;
      transform: rotate(90deg);
      vertical-align: middle;
      text-align: center;
      margin-left: -130px;
      font-size: 11px;
      font-weight: bold;
      letter-spacing: 8px;
      //text-shadow: 0.06em 0.06em #e77832;
    }
    .pList_title {
      width: 65%;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      padding-left: 70px;
      padding-right: 10px;
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
    .pList_titleTW_T {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.2rem;
      line-height: 30px;
      display: block;
    }
    .pList_titleTW_T_m {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.2rem;
      line-height: 40px;
      display: none;
    }
    .pList_titleEN {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.1em;
      line-height: 30px;
      text-transform: uppercase;
    }
    .line {
      display: none;
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
      padding-left: 55px;
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

  /* phones tablets */
  @media (max-width: 768px) {
    .pList {
      //height: 218px;
      .pList_year {
        margin-left: -100px;
        font-size: 15px;
        letter-spacing: 0.21em;
      }
      .pList_title {
        width: 100%;
        position: relative;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0.1em;
        left: 30px;
        top: -50px;
        padding-left: 50px;
        padding-right: 50px;
      }
      .pList_titleQEN {
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0.1em;
      }
      .pList_titleTW {
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.15em;
      }
      .pList_titleTW_T {
        display: none;
      }
      .pList_titleTW_T_m {
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.15em;
        display: block;
      }
      .pList_titleEN {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.1em;
      }
      .line {
        display: block;
        width: 50px;
        border-top: 1px #e77832 solid;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        top: -110px;
      }
      .pList_aName {
        width: 100%;
        position: relative;
        border-left: none;
        top: -80px;
        padding: 0px 30px;
      }
      .pList_aNameTW {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.2em;
      }
      .pList_aNameEN {
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.1em;
      }
    }
    .paginationNum {
      margin-left: 22px;
    }
  }
`
