import styled from "styled-components"

export const Review = styled.div`
  padding: 38px 32px 0px 200px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  .btmLine {
    height: 30px;
    border-bottom: 1px #e77832 solid;
    //position: fixed;
    width: 100%;
  }
  .backBtn {
    cursor: pointer;
    float: right;
  }
  .backBtn img {
    margin-bottom: 0px;
  }
  .backText {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: underline;
    margin-left: 8px;
  }
  .fr {
    float: right;
  }
  @media (max-width: 768px) {
    padding: 39px 27px 0px 66px;
    .backBtn {
      margin-top: -17px;
      float: left;
    }
  }
`
