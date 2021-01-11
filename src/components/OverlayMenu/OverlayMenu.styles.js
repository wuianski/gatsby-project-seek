import styled from "styled-components"

export const Overlay = styled.div`
  width: 33.3%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100000;
  background: #fff;
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
      max-width: 50px;
      position: absolute;
      left: 32px;
      top: 38px;
    }
    .overlayMenu {
      width: 100%;
      text-align: left;
      list-style-type: none;
      padding-left: 32px;
      margin-left: 0px;
      li {
        margin: 0 0 20px 0;
      }
      li.overlayActive {
        color: #ee2562;
      }
      a {
        font-family: "Teko", Arial, Helvetica, sans-serif;
        font-size: 1rem;
        color: #000;
        transition: all 0.3s ease;
        text-decoration: none;
        :hover {
          color: #ee2562;
        }
      }
    }
  }
  .closeButton {
    position: absolute;
    right: 32px;
    top: 50vh;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;
    :hover {
      transform: rotate(180deg);
    }
  }
`
