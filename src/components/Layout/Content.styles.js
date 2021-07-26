import styled from "styled-components"

export const Content = styled.div`
  padding: 38px 32px 0px 200px;
  text-align: justify;
  text-justify: distribute;
  line-height: 1.6;
  letter-spacing: 0.05em;
  //max-width: 1088px;
  //width: 1088px;
  .secName {
    color: #e77832;
    width: 200px;
    height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    vertical-align: middle;
    text-align: center;
    margin-left: -180px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
    top: 24px;
  }
  .secNameReview {
    color: #e77832;
    width: 200px;
    height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    vertical-align: middle;
    text-align: center;
    margin-left: -180px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
    top: 83px;
  }
  .secNameArtist {
    color: #e77832;
    width: 200px;
    height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    vertical-align: middle;
    text-align: center;
    margin-left: -180px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
    top: 24px;
  }
  .firstSec {
    display: inline-block;
    max-width: 888px;
  }
  .summaryBlock {
    color: #000;
    margin-top: -24px;
  }
  .summaryTW {
    font-size: 17px;
    font-weight: 500;
  }
  .summaryEN {
    font-size: 16px;
    font-weight: 500;
    margin-top: 28px;
  }
  .openBlock {
    height: 30px;
  }
  .closeBlock {
    height: 30px;
    width: 100%;
    float: right;
    margin-bottom: 30px;
  }
  .openImg {
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
  .closeImg {
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
    float: right;
    cursor: pointer;
    z-index: 99;
    position: relative;
  }
  .contentBlock {
    color: #4f4f4f;
    font-size: 15px;
    width: 74%;
    display: flex;
    margin-bottom: 30px;
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
    line-height: 13px;
    letter-spacing: 0.03em;
    margin: 13px 0px;
  }
  .vidDes {
    max-width: 888px;
  }
  .titleBlock {
    color: #000;
    margin-bottom: 20px;
  }
  .fr_m {
    float: right;
  }
  .titleTW {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.23em;
  }
  .titleTW p {
    display: inline;
  }
  .titleEN {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .textBlockArtist {
    padding-bottom: 80px;
  }
  .artworks_textTW {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #4f4f4f;
  }
  .artworks_textEN {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #4f4f4f;
    margin: 15px 0px;
  }
  .artist_textTW {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #4f4f4f;
    margin-left: 26%;
  }
  .artist_textEN {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #4f4f4f;
    margin: 15px 0px;
    margin-left: 26%;
  }
  .textTW {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #4f4f4f;
    //margin-left: 130px;
  }
  .textEN {
    font-size: 15px;
    text-align: justify;
    text-justify: distribute;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #4f4f4f;
    margin: 15px 0px;
    //margin-left: 130px;
  }
  .apply {
    display: block;
    color: #000;
  }

  .apply_m {
    display: none;
    color: #000;
  }
  .swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, #e77832) !important;
  }
  .swiper-container {
    width: 100%;
    padding: 30px 0 !important;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -6px !important;
  }
  .swiper-pagination {
    text-align: right !important;
  }
  .eventSec {
    display: block;
  }
  .topMinus20 {
    position: relative;
    top: -20px;
  }
  .twoGrid55 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 47% 47%;
    column-gap: 6%;
    row-gap: 6%;
  }
  @media (max-width: 768px) {
    .twoGrid55 {
      display: block;
    }
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
  .artistSec {
    padding-bottom: 40px;
  }
  .eventCover {
    height: unset;
    margin-bottom: 13px;
    //height: 300px;
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
    grid-template-columns: 20% 74%;
    column-gap: 6%;
    margin: 30px 0;
    padding-top: 10px;
    border-top: 1px #e77832 solid;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .cc {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    line-height: 14.3px;
    letter-spacing: 0.1em;
    color: #c4c4c4;
    font-weight: 800;
    //margin: 30px 0px;
  }
  .fr {
    float: right;
  }
  .w80 {
    width: 80%;
  }
  .w70 {
    width: 70%;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt80 {
    margin-top: 80px;
  }
  .mb80 {
    margin-bottom: 80px;
  }
  .mt120 {
    margin-top: 120px;
  }
  .mt60 {
    margin-top: 60px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt30 {
    margin-top: 30px;
  }
  .mt40 {
    margin-top: 40px;
  }
  .mtvh {
    margin-top: 100vh;
  }
  .pd10 {
    padding-bottom: 10px;
  }
  .pd30 {
    padding-bottom: 30px;
  }
  .mt-80 {
    margin-top: -80px;
  }
  .mt-60 {
    margin-top: -60px;
  }
  .mt-30 {
    margin-top: -30px;
  }
  .mt-45 {
    margin-top: -45px;
  }

  // reviews
  .reviewTag {
    color: #e77832;
    display: inline-block;
    transform: rotate(90deg);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: fixed;
    left: 0px;
    top: 68px;
    width: 150px;
    height: 100px;
  }
  .twoGrid28 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 17% 77%;
    column-gap: 6%;
    margin: 30px 0;
    padding-top: 10px;
  }
  .reviewPostSideInfo div {
    font-size: 13px;
    font-weight: 500;
    //line-height: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .reviewPostTitle {
    font-size: 19px;
    font-weight: 500;
    //line-height: 24px;
    letter-spacing: 0.23em;
  }
  .reviewPostContent p {
    margin-bottom: 1.45rem;
    font-size: 15px;
    font-weight: 300;
    //line-height: 23px;
    //letter-spacing: 0.23em;
    text-align: justify;
    text-justify: distribute;
  }
  .reviewPostContent p img {
    margin-bottom: 0px;
  }
  .reviewPostContent p iframe {
    width: 100%;
  }

  // canopy
  .pageTitle {
    font-size: 24.5px;
    font-weight: 900;
    line-height: 45.5px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin-top: -4px;
  }
  .pageTitle span {
    margin-right: 13px;
  }
  @media (max-width: 768px) {
    .pageTitle {
      letter-spacing: 0.08em;
      font-size: 23px;
    }
  }

  .arrowDown {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    cursor: pointer;
  }
  .arrowUp {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .twoGrid73 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 67% 27%;
    column-gap: 6%;
  }
  .cCover {
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    .twoGrid73 {
      display: block;
      margin-top: 30px;
    }
  }
  .downloadBtnText {
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-decoration-line: none;
    margin-left: 20px;
    color: #000;
  }
  .downloadBtnImg {
    margin-bottom: 0px;
    width: 21px;
    margin: -4px 2px;
  }
  .download_c {
    display: inline-flex;
    margin-top: 30px;
  }
  .equipBlk {
    margin: 30px 0px;
    color: #000000;
  }
  .equipNameTW {
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.065em;
    text-decoration-line: underline;
  }
  .equipNameEN {
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.065em;
    text-decoration-line: underline;
  }
  .equipDetailText {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    text-justify: auto;
  }
  .pdTB60 {
    padding: 60px 0px;
  }
  .pdTB60_C {
    padding: 60px 0px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    bottom: -60px;
  }
  .pdTB80 {
    padding: 80px 0px;
  }
  .projectTag {
    color: #e77832;
    //width: 10%;
    //height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: absolute;
    left: 0px;
    top: 68px;
    width: 150px;
    height: 100px;
    //text-shadow: 0.03em 0.03em #e77832;
  }
  .projectTagFixed {
    color: #e77832;
    //width: 10%;
    //height: 100%;
    display: inline-block;
    transform: rotate(90deg);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: fixed;
    left: 0px;
    top: 68px;
    width: 150px;
    height: 100px;
    //text-shadow: 0.03em 0.03em #e77832;
  }
  @media (max-width: 768px) {
    .projectTagFixed {
      left: -85px;
      top: 82px;
    }
  }
  .imageInfo_c {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.05em;
    margin: 10px 0px;
  }
  .imageInfo_c span {
    margin-right: 8px;
  }
  .paginationNum {
    padding-top: 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.2em;
  }
  .paginationNum a {
    margin-right: 15px;
  }
  .paginationNum a:hover {
    cursor: pointer;
  }
  .paginationNum [aria-current]:not([aria-current="false"]) {
    color: #e77832;
  }
  #aCList {
    padding-top: 10px;
    //min-height: 78vh;
  }
  #aHList {
    padding-top: 10px;
    //min-height: 78vh;
  }

  //press
  .press_m {
    padding: 0px;
  }
  .pressTitle {
    font-size: 24.5px;
    font-weight: 900;
    line-height: 45px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin-top: -5px;
  }
  .twoGrid37_press {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 27% 67%;
    column-gap: 6%;
    margin: 25px 0;
    padding-top: 28px;
    border-top: 1px #e77832 solid;
  }
  .pressTextBlk {
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    height: 36px;
  }
  .pressTextEN span {
    margin-right: 20%;
    max-width: 135px;
    display: inline-flex;
    text-align: initial;
  }
  .pressTextYear span {
    margin-right: 20%;
    max-width: 114px;
    display: inline-flex;
    text-align: initial;
  }
  .pressTextTW span {
    margin-right: 20%;
    max-width: 114px;
    display: inline-flex;
    text-align: initial;
  }
  .pressLinkBlk {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.08em;
    text-decoration-line: underline;
    text-transform: capitalize;
    position: relative;
    top: 65%;
  }
  .pressLink {
    margin-left: 6px;
    margin-right: 3%;
  }
  .arrowGoTo {
    //padding-top: 30px;
    cursor: pointer;
  }
  .arrowGoTo img {
    margin-bottom: -2px;
    height: 16px;
  }

  //press images
  .pressImgTitleBlk {
    border-bottom: 1px solid #e77832;
    padding-bottom: 25px;
    width: 100%;
    display: inline-grid;
    grid-template-columns: 27% 67%;
    column-gap: 6%;
  }
  .pressImgTitle {
    font-size: 24.5px;
    font-weight: 900;
    line-height: 45px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin-top: -5px;
    margin-right: 100px;
    display: inline-block;
    width: 240px;
  }
  .pressImgTextBlk {
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    height: 36px;
    margin-top: 5px;
    width: 600px;
  }
  .pressImgText {
  }
  .pressImgText span {
    margin-right: 10%;
    letter-spacing: 0.23em;
  }
  .twoGrid64_pressImg {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 57% 37%;
    column-gap: 6%;
    margin: 0;
    padding: 28px 0px;
  }
  .pressImgContentTxt {
    color: #4f4f4f;
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.08em;
  }
  .pressImgContentTxtCC {
    color: #4f4f4f;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.08em;
    margin-top: 30px;
  }
  .pressImgContentTxtDownload {
    color: #000000;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-decoration-line: underline;
    position: relative;
    top: 2%;
  }
  .pressSingleImg {
    display: block;
  }
  .pressSingleImg_m {
    display: none;
  }
  .pressSingleImg_d {
    float: right;
    height: 212.5px;
    width: 336px;
  }
  .backBtn {
    cursor: pointer;
  }
  .backBtn img {
    margin-bottom: -2px;
    height: 16px;
  }
  .backText {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: underline;
    margin-left: 8px;
    text-transform: lowercase;
    vertical-align: text-bottom;
  }
  .panasonicLogoBlk {
    position: relative;
  }
  .panasonicLogo {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .applyHBlk {
    position: relative;
  }
  .applyH {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .downloadBtnTextH {
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-decoration-line: none;
    margin-left: 0px;
    color: #000;
  }
  .twoGrid64 {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 57% 37%;
    column-gap: 6%;
  }

  /* phones tablets */
  @media (max-width: 768px) {
    padding: 69px 0px 38px 0px;
    .textTW {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.015em;
      margin-left: 0px;
    }
    .textEN {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.005em;
      margin: 15px 0px;
    }
    .artist_textTW {
      font-size: 14px;
      margin-left: 0px;
    }
    .artist_textEN {
      font-size: 14px;
      margin-left: 0px;
    }
    .apply {
      display: none;
    }
    .apply_m {
      display: block;
      margin-top: 10px;
    }
    .mt80 {
      margin-top: 80px;
    }
    .w70 {
      width: 90%;
      margin-top: 50px;
    }
    .equipNameTW {
      font-size: 16px;
    }
    .equipBlk {
      text-align: initial;
    }
    #aHList,
    #aCList {
      //padding-top: 58px;
      text-align: initial;
    }
    .aHInfo,
    .aCInfo {
      padding: 0 27px 0 66px;
    }
    .artworkCover {
      margin-right: -27px;
      margin-top: -80px;
      margin-bottom: -30px;
    }
    .artworkCover picture img {
      position: relative !important;
      height: 183px !important;
    }
    .artworkCCover {
      margin-right: -27px;
    }
    .artworkCCover img {
      position: relative !important;
      height: 183px !important;
      object-fit: cover;
    }
    .pdTB60 {
      padding-top: 120px;
      padding-bottom: 30px;
    }
    .pdTB60_C {
      position: relative;
      left: calc(50% - 15px);
      width: 30px;
      padding-top: 130px;
      padding-bottom: 15px;
    }
    .paginationNum {
      padding-top: 60px;
    }
    .press_m {
      padding: 0px 27px 120px 66px;
      overflow-x: hidden;
    }
    .twoGrid37_press {
      display: inline-block;
      margin: 15px 0;
    }
    .pressTextBlk {
      height: unset;
      margin-top: 8px;
    }
    .pressTextEN span {
      max-width: unset;
      display: inline-block;
      width: 78%;
      margin-right: 4%;
      font-size: 13px;
      line-height: 23px;
    }
    .pressTextYear span {
      display: inline-block;
      text-align: right;
      width: 17%;
      margin-right: unset;
      font-size: 13px;
    }
    .pressTextTW span {
      max-width: unset;
      display: block;
      font-size: 16px;
      line-height: 23px;
    }
    .pressLinkBlk {
      width: 150px;
      text-align: left;
      margin-top: 30px;
      line-height: 23px;
    }
    /* press images */
    .backBtn {
      position: absolute;
      left: 15px;
      top: 21px;
    }
    .pressImgTitleBlk {
      display: block;
    }
    .pressImgText span {
      margin-right: 3%;
      letter-spacing: 0.1em;
    }
    .twoGrid64_pressImg {
      display: inline-block;
      border-bottom: 1px solid #e77832;
    }
    .pressSingleImg {
      display: none;
    }
    .pressSingleImg_m {
      display: block;
      margin-bottom: 30px;
    }
    .pressImgContentTxtCC {
      margin-bottom: 50px;
    }
    .arrowGoTo img {
      margin-bottom: -2px;
      width: 21px;
    }
    /* project Template */
    .secName {
      margin-left: -135px;
    }
    .secNameReview {
      margin-left: -135px;
    }
    .secNameArtist {
      margin-left: -135px;
      top: 54px;
    }
    .firstSec {
      padding: 0px 27px 0px 66px;
      max-width: unset;
    }
    .contentBlock {
      display: block;
      width: 100%;
    }
    .contentTW {
      width: 100%;
      margin-left: unset;
    }
    .contentEN {
      width: 100%;
      margin-left: unset;
      margin-top: 20px;
    }
    .vidText_m {
      padding: 0px 27px 0px 66px;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
      padding-right: 27px;
    }
    .artistSec {
      padding: 0px 27px 0px 66px;
    }
    .artistSec .titleBlock {
      width: 100%;
      margin-bottom: 10px;
    }
    .artistSec .titleTW {
      display: block;
    }
    .artistSec .titleTW p {
      display: block;
      text-align: right;
    }
    .artistSec .w80 {
      width: 100%;
    }
    .fr_m {
      float: unset;
    }
    .eventSec {
      padding: 60px 27px 0px 66px;
    }
    .eventCover {
      //height: 24vw;
      height: unset;
      padding-bottom: 20px;
    }
    .openBlock {
      padding-bottom: 45px;
    }

    .reviewSec {
      padding: 0px 27px 0px 66px;
      margin-top: -20px;
    }
    .twoGrid37 {
      display: inline-block;
    }
    .reviewDate {
      margin-bottom: 8px;
    }
    /* review template */
    .twoGrid28 {
      display: inline-block;
      margin: 0px;
      padding: 0px 27px 0px 66px;
    }
    .reviewTag {
      left: -80px;
      top: 115px;
    }
    .applyHBlk {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .panasonicLogoBlk {
      margin-top: 130px;
      margin-left: -33px;
    }
  }
  /*@media (min-width: 1280px) {
    width: 1280px;
    max-width: 1280px;
    margin: 0 auto;
  }*/
`
