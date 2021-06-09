import styled from "styled-components"

export const Overlay = styled.div`
  width: 33%;
  max-width: 380px;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "0.9" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100000;
  background: #fff;
  top: 0px;
  left: 0px;
  padding: 0px;
  transition: all 0.3s ease;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 0px;
    .invertedLogo {
      max-width: 60px;
      position: absolute;
      left: 32px;
      top: 44px;
    }
    .overlayMenu {
      //width: 100%;
      text-align: left;
      list-style-type: none;
      padding-left: 32px;
      margin-left: 0px;
      position: absolute;
      left: 0px;
      top: 30%;
      li {
        margin: 0 0 20px 0;
      }
      li.overlayActive {
        color: #e77832;
      }
      a {
        font-family: "Teko", Arial, Helvetica, sans-serif;
        font-size: 1rem;
        color: #000;
        transition: all 0.3s ease;
        text-decoration: none;
        text-transform: uppercase;
        :hover {
          color: #e77832;
        }
      }
    }
  }
  .closeButton {
    position: absolute;
    right: 22px;
    top: calc(50vh - 20px);
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;
    :hover {
      transform: scale(1.2);
    }
  }
  .menuTitleBlock {
    margin-bottom: 18px;
  }
  .menuTitleBlock2 {
    margin-top: 36px;
  }
  .menuTitle {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 24px;
  }
  .menuTitle2 {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    line-height: 54px;
  }
  /* phones tablets */
  @media (max-width: 768px) {
    width: 100%;
    max-width: unset;
    .closeButton {
      right: 14px;
      top: 23px;
    }
    .inner {
      .invertedLogo {
        max-width: 50px;
        position: absolute;
        left: 24px;
        top: 23px;
      }
      .overlayMenu {
        padding-left: 24px;
      }
    }
  }
`
