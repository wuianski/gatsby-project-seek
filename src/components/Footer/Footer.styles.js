import styled from "styled-components"

export const FooterCC = styled.div`
  .cc {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    line-height: 14.3px;
    letter-spacing: 0.1em;
    color: #c4c4c4;
    text-transform: uppercase;
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    .cc {
      padding-bottom: 0px;
    }
  }
`
