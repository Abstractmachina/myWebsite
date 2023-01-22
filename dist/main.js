/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/monolisk_black.woff */ "./src/assets/monolisk_black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n:root {\n  --col_emphasis: rgb(255, 221, 0); }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 0.9em; }\n\n.root {\n  display: flex;\n  justify-content: center; }\n\na {\n  color: black;\n  text-decoration: underline;\n  text-decoration-color: #ffdd00;\n  text-decoration-thickness: 0.2em; }\n\na:hover {\n  background-color: #ffdd00; }\n\n.mainContainer {\n  height: 100vh;\n  width: 50%;\n  background-color: white;\n  margin: 0;\n  flex-shrink: 0; }\n\n/* LEFT MAIN */\n.left {\n  margin: 0;\n  padding: 0em 8em;\n  padding-top: 4em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start; }\n\n/*========  HEADER  ==================*/\nheader :first-child {\n  width: 11.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  white-space: nowrap;\n  margin-bottom: 2em;\n  margin-left: 0.3em; }\n\n/*logo*/\nheader :first-child h1 {\n  margin: 0;\n  font-weight: 800;\n  font-size: 2em;\n  padding: 0; }\n\nheader :first-child h2 {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 200; }\n\n#btn_profile {\n  display: flex;\n  height: 2em;\n  width: 8em;\n  align-items: center;\n  font-size: 0.7em; }\n\n#btn_profile :first-child {\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  vertical-align: center;\n  margin-left: auto; }\n\n#btn_profile svg {\n  flex-shrink: 0;\n  margin: 0;\n  margin-left: -1.2em;\n  margin-right: -1.2em;\n  padding: 0;\n  scale: 0.25;\n  /* transform: translate(-3em, -2em); */\n  width: 40px;\n  height: 40px; }\n\n#btn_profile:hover {\n  border-bottom: 0.3em solid var(--col_emphasis);\n  cursor: pointer;\n  font-weight: 600;\n  stroke-width: 5; }\n\n/* =======  RIGHT MAIN  ==========*/\n.right {\n  background-color: #0f0f0f;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.circleContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2em; }\n\n.circle {\n  background-color: white;\n  width: 15em;\n  height: 15em;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover; }\n\n/*ABOUT TAB*/\n.about {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: calc(100% - 25px);\n  top: 0%;\n  width: 50%;\n  height: 100%;\n  background-color: white;\n  z-index: 1;\n  opacity: 1;\n  transition-property: left, width;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.aboutContainer {\n  padding: 4em 8em; }\n\n.about hr {\n  border: 0 none;\n  height: 1px;\n  background-color: #eee;\n  margin-bottom: 2em; }\n\n.about h3 {\n  font-weight: 200;\n  margin-bottom: -0.4em;\n  margin-top: 6em; }\n\n.about .links {\n  display: flex;\n  justify-content: space-between; }\n\n/*=======   INDEX TAB   ============*/\n.projectIndex {\n  position: fixed;\n  top: 100%;\n  left: 0%;\n  width: 50%;\n  height: 200%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1em 0;\n  opacity: 0;\n  transition-property: top, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.projectIndexSlideIn {\n  top: 30%;\n  opacity: 1; }\n\n.projectFilter {\n  padding: 1em 2em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 0.75em; }\n\n.projectIndexTable {\n  margin: 0em 1em;\n  border-collapse: collapse;\n  font-size: 0.8em; }\n\n.projectIndexTable th {\n  /* background-color: brown; */\n  font-size: 0.7em;\n  font-weight: 200;\n  text-align: left;\n  padding: 0.2em 0.5em; }\n\n.projectIndexTable td {\n  padding: 0.5em 0.5em;\n  overflow-wrap: break-word; }\n\n.projectIndexTable tr:hover {\n  cursor: pointer;\n  border-color: transparent;\n  /* remove the border's colour */\n  box-shadow: 0 0 0 0.5px lightgray;\n  /* emulate the border */ }\n\n.projectIndexTable tr:active {\n  background-color: var(--col_emphasis); }\n\n.selected {\n  background-color: #eaeaea; }\n\n/* ======   CIRCLE PREVIEWS     =======*/\n.banner {\n  position: fixed;\n  color: var(--col_emphasis);\n  text-align: center;\n  font-family: \"Monolisk Black\", sans-serif;\n  font-size: 10em; }\n\n/* ======   PROJECT TAB     =======*/\n.projectTab {\n  background-color: white;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: 100%;\n  top: 0%;\n  width: 50%;\n  height: 98%;\n  opacity: 0.5;\n  z-index: 5;\n  /* padding: 2em 4em; */\n  transition-property: left, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.leftEdge {\n  /* height: 100%; */\n  width: 25px;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  border-right: 0.5px dotted #949494;\n  border-left: 1px dotted black;\n  writing-mode: vertical-lr;\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.leftEdge:hover {\n  background-color: var(--col_emphasis);\n  font-weight: 400;\n  cursor: pointer; }\n\n.topEdge {\n  height: 10px;\n  width: 100%;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  border-bottom: 0.5px dotted #949494;\n  border-top: 1px dotted black;\n  /* writing-mode:vertical-lr; */\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.projectContentContainer {\n  height: 100%;\n  padding: 2em 4em;\n  overflow: auto; }\n\n.closeProject {\n  background-color: brown;\n  width: 2em;\n  height: 2em; }\n\n.closeProject:hover {\n  background-color: azure; }\n\n.projectTab img {\n  width: 100%; }\n\n.projectVideoContainer {\n  margin: 0; }\n\n.projectTab h3 {\n  margin-top: 2em;\n  margin-bottom: -0.5em; }\n\n.projectTab h5 {\n  margin-top: 1em;\n  /* margin-bottom: -0.5em; */ }\n\n.projectTab p {\n  /* text-indent: 2em; */ }\n\n.projectTab figure img {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px; }\n\n.projectTab figcaption {\n  font-family: 'Source Serif Pro', serif;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 0.8em;\n  padding-top: 0.3em; }\n\n.slideInFromRight {\n  left: 50%;\n  opacity: 1; }\n\n.footer {\n  /* font-family: 'Source Serif Pro', serif; */\n  font-size: 0.8em;\n  font-weight: 100;\n  color: #818181;\n  /* font-style: italic; */\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  z-index: 0;\n  width: 50%;\n  height: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px dotted black; }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('./assets/monolisk_black.woff') format('woff');\r\n  }\r\n\r\n:root{\r\n    --col_emphasis: rgb(255, 221, 0);\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    \r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 0.9em;\r\n    \r\n}\r\n\r\n.root {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\na {\r\n    color: black;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 221, 0);\r\n    text-decoration-thickness: 0.2em;\r\n}\r\na:hover {\r\n    background-color: rgb(255, 221, 0);\r\n}\r\n\r\n.mainContainer {\r\n    height: 100vh;\r\n    width: 50%;\r\n    background-color: white;\r\n    margin: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\n/* LEFT MAIN */\r\n.left {\r\n    margin: 0;\r\n    padding: 0em 8em;\r\n    padding-top: 4em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n\r\n/*========  HEADER  ==================*/\r\n\r\nheader :first-child {\r\n    width:11.5em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    white-space:nowrap;\r\n    margin-bottom: 2em;\r\n    margin-left:0.3em;\r\n}\r\n\r\n/*logo*/\r\nheader :first-child h1 {\r\n    margin:0;\r\n    font-weight: 800;\r\n    font-size: 2em;\r\n    padding: 0;\r\n}\r\n\r\nheader :first-child h2 {\r\n    margin:0;\r\n    font-size: 1em;\r\n    font-weight: 200;\r\n}\r\n\r\n#btn_profile {\r\n    display: flex;\r\n    height:2em;\r\n    width: 8em;\r\n    align-items: center;\r\n    font-size: 0.7em;\r\n}\r\n\r\n#btn_profile :first-child{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    margin-left: auto;\r\n}\r\n\r\n#btn_profile svg {\r\n    flex-shrink: 0;\r\n    margin:0;\r\n    margin-left: -1.2em;\r\n    margin-right: -1.2em;\r\n    padding: 0;\r\n    scale: 0.25;\r\n    /* transform: translate(-3em, -2em); */\r\n    width: 40px;\r\n    height:40px;\r\n}\r\n\r\n#btn_profile:hover {\r\n    border-bottom: 0.3em solid var(--col_emphasis);\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    stroke-width: 5;\r\n}\r\n\r\n\r\n/* =======  RIGHT MAIN  ==========*/\r\n.right {\r\n    background-color: rgb(15, 15, 15);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.circleContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2em;\r\n}\r\n\r\n.circle {\r\n    background-color: white;\r\n    width: 15em;\r\n    height: 15em;\r\n    border-radius: 50%;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n/*ABOUT TAB*/\r\n.about {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:calc(100% - 25px);\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: white;\r\n    z-index: 1;\r\n    opacity: 1;\r\n    transition-property: left, width;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n    \r\n}\r\n\r\n.aboutContainer {\r\n    padding: 4em 8em;\r\n}\r\n\r\n.about hr {\r\n    border: 0 none;\r\n    height: 1px;\r\n    background-color: #eee;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.about h3 {\r\n    font-weight: 200;\r\n    margin-bottom: -0.4em;\r\n    margin-top: 6em;\r\n\r\n}\r\n\r\n.about .links{\r\n    display: flex;\r\n    justify-content:space-between;\r\n\r\n}\r\n\r\n\r\n/*=======   INDEX TAB   ============*/\r\n.projectIndex {\r\n    position: fixed;\r\n    top: 100%;\r\n    left: 0%;\r\n    width: 50%;\r\n    height:200%;\r\n    background-color:white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    padding: 1em 0;\r\n    opacity: 0;\r\n    transition-property: top, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.projectIndexSlideIn {\r\n    top:30%;\r\n    opacity: 1;\r\n}\r\n\r\n.projectFilter {\r\n    padding: 1em 2em;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 0.75em;\r\n}\r\n\r\n.projectIndexTable {\r\n    margin: 0em 1em;\r\n    border-collapse: collapse;\r\n    font-size: 0.8em;\r\n}\r\n\r\n\r\n.projectIndexTable th {\r\n    /* background-color: brown; */\r\n    font-size: 0.7em;\r\n    font-weight: 200;\r\n    text-align: left;\r\n    padding: 0.2em 0.5em;\r\n}\r\n\r\n.projectIndexTable td {\r\n    padding: 0.5em 0.5em;\r\n    overflow-wrap: break-word;\r\n}\r\n.projectIndexTable tr {\r\n    \r\n}\r\n.projectIndexTable tr:hover {\r\n    cursor: pointer;\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 0.5px rgb(211, 211, 211); /* emulate the border */\r\n}\r\n.projectIndexTable tr:active {\r\n    background-color: var(--col_emphasis);\r\n}\r\n\r\n .selected {\r\n    background-color: rgb(234, 234, 234);\r\n}\r\n\r\n\r\n/* ======   CIRCLE PREVIEWS     =======*/\r\n.banner {\r\n    position:fixed;\r\n    color: var(--col_emphasis);\r\n    text-align: center;\r\n    font-family: \"Monolisk Black\", sans-serif;\r\n    font-size: 10em;\r\n}\r\n\r\n\r\n/* ======   PROJECT TAB     =======*/\r\n\r\n.projectTab {\r\n    background-color: white;\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:100%;\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 98%;\r\n    opacity: 0.5;\r\n    z-index: 5;\r\n    /* padding: 2em 4em; */\r\n    transition-property: left, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.leftEdge {\r\n    /* height: 100%; */\r\n    width: 25px;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    border-right: 0.5px dotted rgb(148, 148, 148);\r\n    border-left: 1px dotted black;\r\n    writing-mode:vertical-lr;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n.leftEdge:hover {\r\n    background-color: var(--col_emphasis);\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n}\r\n\r\n.topEdge {\r\n    height: 10px;\r\n    width: 100%;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    border-bottom: 0.5px dotted rgb(148, 148, 148);\r\n    border-top: 1px dotted black;\r\n    /* writing-mode:vertical-lr; */\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.projectContentContainer {\r\n    height: 100%;\r\n    padding: 2em 4em;\r\n\r\n    overflow: auto;\r\n    \r\n}\r\n\r\n.closeProject {\r\n    background-color: brown;\r\n    width: 2em;\r\n    height: 2em;\r\n}\r\n\r\n.closeProject:hover {\r\n    background-color:azure;\r\n}\r\n\r\n.projectTab img {\r\n    width: 100%;\r\n}\r\n\r\n.projectVideoContainer {\r\n    margin: 0;\r\n}\r\n\r\n.projectTab h3 {\r\n    margin-top: 2em;\r\n    margin-bottom: -0.5em;\r\n}\r\n\r\n.projectTab h5 {\r\n    margin-top: 1em;\r\n    /* margin-bottom: -0.5em; */\r\n}\r\n\r\n.projectTab p {\r\n    /* text-indent: 2em; */\r\n}\r\n\r\n\r\n\r\n.projectTab figure img {\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 1px;\r\n}\r\n\r\n.projectTab figcaption {\r\n    font-family: 'Source Serif Pro', serif;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-size: 0.8em;\r\n    padding-top: 0.3em;\r\n}\r\n\r\n.slideInFromRight {\r\n    left: 50%;\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n.footer {\r\n    /* font-family: 'Source Serif Pro', serif; */\r\n    font-size: 0.8em;\r\n    font-weight: 100;\r\n    color: rgb(129, 129, 129);\r\n    /* font-style: italic; */\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0;\r\n    z-index: 0;\r\n    width: 50%;\r\n    height: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-top: 1px dotted black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_checkboxes.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_checkboxes.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projectFilter > div {\n  text-align: center;\n  display: flex;\n  align-items: center; }\n\n.tgl {\n  display: none; }\n  .tgl + .tgl-btn {\n    content: attr(data-tg-on);\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    overflow: hidden;\n    backface-visibility: hidden;\n    transition: all 0.2s ease;\n    vertical-align: middle;\n    font-size: 0.8em; }\n    .tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      transition: all 0.2s ease;\n      width: 100%;\n      position: absolute;\n      line-height: 1.8em;\n      font-weight: 400;\n      color: black; }\n    .tgl + .tgl-btn:after {\n      left: 100%;\n      content: attr(data-tg-on); }\n    .tgl + .tgl-btn:before {\n      left: 0;\n      content: attr(data-tg-off); }\n    .tgl + .tgl-btn:active {\n      background: #888;\n      border-radius: 0.5em; }\n      .tgl + .tgl-btn:active:before {\n        left: -10%;\n        border-radius: 0.5em; }\n  .tgl:checked + .tgl-btn {\n    border-color: transparent;\n    /* remove the border's colour */\n    box-shadow: 0 0 0 2px #ffdd00;\n    /* emulate the border */\n    border-radius: 1em;\n    vertical-align: middle; }\n    .tgl:checked + .tgl-btn:before {\n      left: -100%;\n      border-radius: 0; }\n    .tgl:checked + .tgl-btn:after {\n      left: 0; }\n    .tgl:checked + .tgl-btn:active:after {\n      background: #888;\n      border-radius: 0.5em;\n      left: 10%; }\n", "",{"version":3,"sources":["webpack://./src/style_anim_checkboxes.scss"],"names":[],"mappings":"AAGA;EACI,kBAAkB;EAClB,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACE,aAAa,EAAA;EADf;IAMI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAElB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IAEtB,gBAAgB,EAAA;IAjBpB;MAqBQ,yBAAyB;MACzB,WAAW;MACX,kBAAkB;MAElB,kBAAkB;MAClB,gBAAgB;MAChB,YAAY,EAAA;IA3BpB;MA8BQ,UAAU;MACV,yBAAyB,EAAA;IA/BjC;MAmCQ,OAAO;MACP,0BAA0B,EAAA;IApClC;MAwCQ,gBAAgB;MAChB,oBAAoB,EAAA;MAzC5B;QA2CU,UAAU;QACV,oBAAoB,EAAA;EA5C9B;IAqDI,yBAAyB;IAAE,+BAAA;IAC3B,6BA/D2B;IA+DU,uBAAA;IAErC,kBAAkB;IAClB,sBAAsB,EAAA;IAzD1B;MAgEQ,WAAW;MACX,gBAAgB,EAAA;IAjExB;MAqEQ,OAAO,EAAA;IArEf;MAyEQ,gBAAgB;MAChB,oBAAoB;MACpB,SAAS,EAAA","sourcesContent":["$col_emphasis: rgb(255, 221, 0);\r\n\r\n\r\n.projectFilter>div{\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.tgl {\r\n  display: none;\r\n\r\n  + .tgl-btn {\r\n    // display: inline-block;\r\n    // width: 6em;\r\n    content: attr(data-tg-on);\r\n    height: 2em;\r\n    position: relative;\r\n    // position: absolute;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    backface-visibility: hidden;\r\n    transition: all 0.2s ease;\r\n    vertical-align: middle;\r\n\r\n    font-size: 0.8em;\r\n\r\n    &:after,\r\n    &:before {\r\n        transition: all 0.2s ease;\r\n        width: 100%;\r\n        position: absolute;\r\n        // vertical-align: middle;\r\n        line-height: 1.8em;\r\n        font-weight: 400;\r\n        color: black;\r\n    }\r\n    &:after {\r\n        left: 100%;\r\n        content: attr(data-tg-on);\r\n      }\r\n  \r\n      &:before {\r\n        left: 0;\r\n        content: attr(data-tg-off);\r\n      }\r\n  \r\n      &:active {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        &:before {\r\n          left: -10%;\r\n          border-radius: 0.5em;\r\n        }\r\n      }\r\n\r\n      \r\n  }\r\n\r\n  &:checked + .tgl-btn {\r\n    // border-color: var(--col_emphasis);\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 2px $col_emphasis; /* emulate the border */\r\n    // border-style: solid;\r\n    border-radius: 1em;\r\n    vertical-align: middle;\r\n    // line-height: 1.5em;\r\n\r\n    &:after,\r\n    &:before {\r\n    }\r\n    &:before {\r\n        left: -100%;\r\n        border-radius: 0;\r\n    }\r\n\r\n    &:after {\r\n        left: 0;\r\n    }\r\n\r\n    &:active:after {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        left: 10%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_projectArrow.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_projectArrow.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --col_emphasis: rgb(255, 221, 0); }\n\n.link {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  text-decoration: none;\n  transform: rotate(-90deg) translate3d(200px, -130px, 0);\n  cursor: pointer; }\n  .link__arrow {\n    display: inline-flex; }\n    .link__arrow span {\n      position: relative;\n      width: 14px;\n      height: 2px;\n      border-radius: 2px;\n      overflow: hidden;\n      background: #BEBDBE;\n      z-index: 2; }\n      .link__arrow span:nth-child(1) {\n        transform-origin: left bottom;\n        transform: rotate(45deg) translate3d(8px, -10px, 0); }\n      .link__arrow span:nth-child(2) {\n        transform-origin: left bottom;\n        transform: rotate(-45deg); }\n      .link__arrow span:after {\n        content: '';\n        display: block;\n        position: absolute;\n        left: 0;\n        width: 0;\n        height: 6px;\n        background: #ffdd00; }\n  .link__line {\n    position: relative;\n    margin-left: -14px;\n    margin-right: 30px;\n    width: 150px;\n    height: 4px;\n    background: #BEBDBE;\n    overflow: hidden;\n    z-index: 1; }\n    .link__line:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 140px;\n      width: 20px;\n      height: 4px;\n      background: var(--col_emphasis); }\n  .link__text {\n    color: #4A4A4A;\n    font-size: 1em; }\n  .link:hover {\n    font-weight: 400;\n    background-color: transparent; }\n    .link:hover .link__line:after {\n      animation: animation-line 1.2s forwards; }\n    .link:hover .link__arrow span:after {\n      animation: animation-arrow 1.2s forwards;\n      animation-delay: 1s; }\n\n@keyframes animation-line {\n  0% {\n    left: 140px; }\n  100% {\n    left: 0; } }\n\n@keyframes animation-arrow {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n", "",{"version":3,"sources":["webpack://./src/style_anim_projectArrow.scss"],"names":[],"mappings":"AAAA;EACI,gCAAe,EAAA;;AAMnB;EAEI,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EAErB,uDAAuD;EACvD,eAAe,EAAA;EAEf;IACA,oBAAoB,EAAA;IADnB;MAIO,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,kBAAkB;MAClB,gBAAgB;MAChB,mBAAmB;MACnB,UAAU,EAAA;MAVjB;QAaO,6BAA6B;QAC7B,mDAAmD,EAAA;MAd1D;QAkBO,6BAA6B;QAC7B,yBAAyB,EAAA;MAnBhC;QAuBO,WAAW;QACX,cAAc;QACd,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,WAAW;QACX,mBAA4B,EAAA;EAKpC;IACA,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,UAAU,EAAA;IART;MAWG,WAAW;MACX,cAAc;MACd,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,WAAW;MACX,+BAA+B,EAAA;EAInC;IACA,cAAc;IAEd,cAAc,EAAA;EApElB;IAyEQ,gBAAgB;IAChB,6BAA6B,EAAA;IA1ErC;MA8EgB,uCAAuC,EAAA;IA9EvD;MAqFgB,wCAAwC;MACxC,mBAAmB,EAAA;;AASnC;EACE;IACE,WAAW,EAAA;EAGb;IACE,OAAO,EAAA,EAAA;;AAIX;EACE;IACE,QAAQ,EAAA;EAGV;IACE,WAAW,EAAA,EAAA","sourcesContent":[":root{\r\n    --col_emphasis: rgb(255, 221, 0);\r\n}\r\n// body {\r\n//   padding: 100px;\r\n//   text-align: center;\r\n// }\r\n.link {\r\n    $self: &;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px;\r\n    text-decoration: none;\r\n    //   transform: rotate(-90deg) translate3d(-300px, 0, 0);\r\n    transform: rotate(-90deg) translate3d(200px, -130px, 0);\r\n    cursor: pointer;\r\n\r\n    &__arrow {\r\n    display: inline-flex;\r\n\r\n        span {\r\n            position: relative;\r\n            width: 14px;\r\n            height: 2px;\r\n            border-radius: 2px;\r\n            overflow: hidden;\r\n            background: #BEBDBE;\r\n            z-index: 2;\r\n\r\n            &:nth-child(1) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(45deg) translate3d(8px, -10px, 0);\r\n            }\r\n\r\n            &:nth-child(2) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(-45deg);\r\n            }\r\n\r\n            &:after {\r\n            content: '';\r\n            display: block;\r\n            position: absolute;\r\n            left: 0;\r\n            width: 0;\r\n            height: 6px;\r\n            background: rgb(255, 221, 0);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__line {\r\n    position: relative;\r\n    margin-left: -14px;\r\n    margin-right: 30px;\r\n    width: 150px;\r\n    height: 4px;\r\n    background: #BEBDBE;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n\r\n    &:after {\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        left: 140px;\r\n        width: 20px;\r\n        height: 4px;\r\n        background: var(--col_emphasis);\r\n    }\r\n    }\r\n\r\n    &__text {\r\n    color: #4A4A4A;\r\n    // font-family: 'Oswald', sans-serif;\r\n    font-size: 1em;\r\n    // text-transform: uppercase;\r\n    }\r\n\r\n    &:hover {\r\n        font-weight: 400;\r\n        background-color: transparent;\r\n        #{$self} {\r\n            &__line {\r\n            &:after {\r\n                animation: animation-line 1.2s forwards;\r\n            }\r\n            }\r\n\r\n            &__arrow {\r\n            span {\r\n                &:after {\r\n                animation: animation-arrow 1.2s forwards;\r\n                animation-delay: 1s;\r\n                }\r\n            }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@keyframes animation-line {\r\n  0% {\r\n    left: 140px;\r\n  }\r\n\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animation-arrow {\r\n  0% {\r\n    width: 0;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style_anim_checkboxes.scss":
/*!****************************************!*\
  !*** ./src/style_anim_checkboxes.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style_anim_checkboxes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_checkboxes.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style_anim_projectArrow.scss":
/*!******************************************!*\
  !*** ./src/style_anim_projectArrow.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style_anim_projectArrow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style_anim_projectArrow.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/Model.js");
/* harmony import */ var _GUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI.js */ "./src/GUI.js");
/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadProjects */ "./src/loadProjects.js");




class Controller{
    _model = null;
    _view = null;
    _projectIndex = null;

    constructor() {
        this._model = new _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_loadProjects__WEBPACK_IMPORTED_MODULE_2__["default"])());
        this._view = new _GUI_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._model.ProjectIndex);

        this._view.bindCallProjectPages(this.onProjectPageCalled);
        this._view.bindHoverProjects(this.onProjectHovered);
    }

    onProjectPageCalled = (id) => {
        const project = this._model.getProject(id);
        this._view.displayProject(project.HtmlContent);
    }

    onProjectHovered = (id) => {
        return this._model.getProject(id).Categories;
    }
}

/***/ }),

/***/ "./src/GUI.js":
/*!********************!*\
  !*** ./src/GUI.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_arrow_projectIndex_base_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/arrow_projectIndex_base.svg */ "./src/assets/arrow_projectIndex_base.svg");
/* harmony import */ var _assets_matnet_fab_05_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/matnet/fab_05.jpg */ "./src/assets/matnet/fab_05.jpg");
/* harmony import */ var _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/lbd/HiveMindClasses.jpg */ "./src/assets/lbd/HiveMindClasses.jpg");
/* harmony import */ var _assets_barbican_00_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/barbican_00.jpg */ "./src/assets/barbican_00.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _content_loadAboutTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/loadAboutTab.js */ "./src/content/loadAboutTab.js");
/* harmony import */ var _content_loadLeftMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/loadLeftMain */ "./src/content/loadLeftMain.js");
/* harmony import */ var _content_loadRightMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/loadRightMain */ "./src/content/loadRightMain.js");
/* harmony import */ var _content_loadFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/loadFooter */ "./src/content/loadFooter.js");
/* harmony import */ var _content_loadProjectTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/loadProjectTab */ "./src/content/loadProjectTab.js");
/* harmony import */ var _content_loadIndexTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/loadIndexTab */ "./src/content/loadIndexTab.js");
/* harmony import */ var _content_loadProjectArrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/loadProjectArrow */ "./src/content/loadProjectArrow.js");

















class GUI {

    //class names for query selection
    _projectFilterClass = 'projectFilter';
    _indexButtonId = 'projectArrow';

    constructor(projects) {
        this._app = document.querySelector('.root');

        //load elements
        this._leftMain = (0,_content_loadLeftMain__WEBPACK_IMPORTED_MODULE_6__["default"])(this._app);
        this._btn_index = (0,_content_loadProjectArrow__WEBPACK_IMPORTED_MODULE_11__["default"])(this._leftMain);
        this._rightMain = (0,_content_loadRightMain__WEBPACK_IMPORTED_MODULE_7__["default"])(this._app);
        this._footer = (0,_content_loadFooter__WEBPACK_IMPORTED_MODULE_8__["default"])(this._app);
        this._aboutTab = (0,_content_loadAboutTab_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rightMain);
        this._indexTab = (0,_content_loadIndexTab__WEBPACK_IMPORTED_MODULE_10__["default"])(this._app);
        this._prebuildIndexTab(projects);
        this._projectTab = (0,_content_loadProjectTab__WEBPACK_IMPORTED_MODULE_9__["default"])(this._rightMain);

        //setup bindings
        this._bindProfileButton();
        this._bindExitProjectIndex();
        this._bindCallIndex();
        this._bindSelAllCheckbox();
        this._bindSelNoneCheckbox();
        this._bindTabLeftEdges();

        
    }

    
    //========= INDEX TAB ======================
    _loadProjectIndexButton(parent) {
        const btn_index = new Image();
        btn_index.src = _assets_arrow_projectIndex_base_svg__WEBPACK_IMPORTED_MODULE_0__;
        btn_index.id = this._indexButtonId;
        parent.append(btn_index);

        return btn_index;
    }

    _prebuildIndexTab(projects) {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        this._removeAllChildren(filterContainer); //reset container


        this._createSelAllCheckbox(filterContainer);
        this._createSelNoneCheckbox(filterContainer);
        

        let categoryFilters = this._getUniqueCategories(projects);

        // create checkbox for each category
        categoryFilters.forEach(ca => {
            const newCat = this._createCategoryCheckbox(filterContainer, ca.toString());
            this._bindCategoryCheckbox(newCat, filterContainer, projects);
        });

        //pre-build index with everything
        this._buildIndexTable(projects, this._getUniqueCategories(projects));
    }

    _createCategoryCheckbox(parent, id) {
        const container = document.createElement('div');
        const newCat = document.createElement('input');
        newCat.setAttribute('type', 'checkbox');
        newCat.id = id;
        newCat.setAttribute('name', id);
        newCat.classList.add("tgl");
        newCat.classList.add("tgl-skewed");
        newCat.checked = true;
        const label = document.createElement('label');
        label.setAttribute("for", id);
        label.classList.add("tgl-btn");
        // label.textContent = id;
        label.setAttribute('data-tg-off',id);
        label.setAttribute('data-tg-on', id);
        // label.textContent = id;
        label.style.width = (id.length*0.7) + 'em';
        container.append(newCat, label);
        parent.append(container);

        return newCat;
    }

    _createSelAllCheckbox(parent) {
        const container = document.createElement('div');
        const selAll = document.createElement('input');
        selAll.setAttribute('type', 'checkbox');
        selAll.id = 'selAll';
        selAll.setAttribute('name', selAll.id);
        selAll.classList.add("tgl");
        selAll.classList.add("tgl-skewed");
        selAll.checked = true;
        const label = document.createElement('label');
        label.setAttribute("for", selAll.id);
        // lbl_selAll.textContent = 'All';
        label.classList.add("tgl-btn");
        label.setAttribute('data-tg-off','All');
        label.setAttribute('data-tg-on', 'All');
        label.style.width = 3 + 'em';
        container.append(selAll, label);
        parent.append(container);
    }
    _createSelNoneCheckbox(parent) {
        const container = document.createElement('div');
        const selNone = document.createElement('input');
        selNone.setAttribute('type', 'checkbox');
        selNone.id = 'selNone';
        selNone.setAttribute('name', selNone.id);
        selNone.classList.add("tgl");
        selNone.classList.add("tgl-skewed");
        selNone.checked = false;
        const label = document.createElement('label');
        label.setAttribute("for", selNone.id);
        label.classList.add("tgl-btn");
        label.setAttribute('data-tg-off','None');
        label.setAttribute('data-tg-on', 'None')
        label.style.width = 4 + 'em';
        container.append(selNone, label);
        parent.append(container);
    }

    _buildIndexTable(projects, categoryFilters) {

        if (!Array.isArray(categoryFilters)) throw "Error: parameter is not of type Array";

        //sort projects descending by year
        projects.sort((a, b) => b.year - a.year);

        let parent = document.querySelector(".projectIndexTable");
        this._initIndexHeaders(parent);

        for (let project of projects) {
            for (let c of project.categories) {
                if (categoryFilters.includes(c)) {
                    const newRow = document.createElement('tr');

                    const rowTitle = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)("td", project.title);
                    const rowYear = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('td', project.year.toString());
                    const rowLoc = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('td', project.location);
                    const tags = document.createElement('td');
                    tags.textContent = Array.from(project.categories).map(c => {return c.slice(0,2)}).join('.');
                    newRow.id = project.id;

                    newRow.append(rowYear, rowTitle, rowLoc, tags);
                    parent.appendChild(newRow);
                    break;
                }
            }
        }   
    }
    /**
     * populate table with preset headers (title, year, location, categories) and attach to parent
     * @returns empty <table> with headers.
     */
    _initIndexHeaders(tableContainer) {
        this._removeAllChildren(tableContainer);
        const head_title = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('th', "Title");
        const head_year = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('th', 'Year');
        const head_loc = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('th','Location');
        const head_cat = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createElementText)('th', 'Categories');
        tableContainer.append(head_title, head_year, head_loc, head_cat);
    }

    /**
     * slide in index tab
     */
    _showIndexTab() {
        this._indexTab.classList.add('projectIndexSlideIn');
    }

    //==================    BINDINGS =====================================
    
    _bindProfileButton() {
        const btn_profile = this._leftMain.querySelector('#btn_profile');
        btn_profile.addEventListener('click', (e) => {
            //transition in about tab
            let target = e.target;

            while (target.parentNode) {
                target = target.parentNode;
                if (target.id === 'btn_profile') {
                    document.querySelector('.about').classList.toggle('slideInFromRight');
                    break;
                }
            }
            
        });
    }

    _bindCallIndex() {
        this._btn_index.addEventListener('click', () => {
            this._showIndexTab();
        });
    }

    _bindExitProjectIndex() {
        this._leftMain.addEventListener('click', (e) =>{
                // e.stopPropagation();


                let t = e.target;
                let isProjectArrow = false;
                let isProfileButton = false;
                while (t.parentNode) {
                    if (t.id === 'projectArrow') isProjectArrow = true;
                    if (t.id === 'btn_profile') isProfileButton = true;
                    t = t.parentNode

                }
                if (!isProjectArrow) {
                    this._indexTab.classList.remove('projectIndexSlideIn');
                    this._projectTab.classList.remove('slideInFromRight');
                }
                if (!isProfileButton) {
                    this._aboutTab.classList.remove('slideInFromRight');
                }
        });
    }

    bindCallProjectPages(handler) {
        const table = document.querySelector('.projectIndexTable');
        const rows = table.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            row.addEventListener('click', () => {
                handler(row.id);
                for (let j = 0; j < rows.length; j++) {
                    rows[j].classList.remove('selected');
                }
                row.classList.add('selected');
            })
        }
    }

    _bindTabLeftEdges() {
        const edges = document.querySelectorAll('.leftEdge');

        for (let i = 0; i < edges.length;i++) {
            let e = edges[i];
            let parent = e.parentNode;

            e.addEventListener('click', () => {
                parent.classList.toggle('slideInFromRight');
                parent.style.left = null;
                parent.style.width = null;
                const projectselections = document.querySelectorAll('.selected');
                for (let i =0; i < projectselections.length; i++) {
                    projectselections[i].classList.remove('selected');
                }
            });
            e.addEventListener('mouseover', () => {
                var style = window.getComputedStyle(parent),
                    left = style.getPropertyValue('left');
                    let splits = left.split('px');
                    let shift = parseFloat(splits[0]) - 5;
                    parent.style.left = shift + 'px';

                    let width = style.getPropertyValue('width');
                    let w_splits = width.split('px');
                    let w_shift = parseFloat(w_splits[0]) + 5;
                    parent.style.width = w_shift + 'px';

            })
            e.addEventListener('mouseout', () => {
                parent.style.left = null;
                parent.style.width = null;
            })
        }
    }

    bindHoverProjects(handler) {
        const table = document.querySelector('.projectIndexTable');
        const rows = table.querySelectorAll('tr');

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const categories = handler(row.id);
            row.addEventListener('mouseover', () => {
                this._callPreviewCircles(categories);
            });
            row.addEventListener('mouseout', () => {
                this._dismissPreviewCircles(categories);
            })
        }
    }

    //populate preview circles with predefined graphics
    _callPreviewCircles(categories) {
        if (categories.has("design")) {
            const container = this._rightMain.querySelector(".circleDesign");
            container.style.backgroundImage = "url(" + _assets_matnet_fab_05_jpg__WEBPACK_IMPORTED_MODULE_1__ + ")";
            this._instantiateBanner(container, 200, 'DESIGN');
        }
        if (categories.has("code")) {
            const container = this._rightMain.querySelector(".circleCode");
            container.style.backgroundImage = "url(" + _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__ + ")";
            this._instantiateBanner(container, 200, 'CODE');

        }
        if (categories.has("art")) {
            const container = this._rightMain.querySelector(".circleArt");
            container.style.backgroundImage = "url(" + _assets_barbican_00_jpg__WEBPACK_IMPORTED_MODULE_3__ + ")";
            this._instantiateBanner(container, 200, 'ART');

        }
    }

    _dismissPreviewCircles(categories) {
        const circles = this._rightMain.querySelectorAll('.circle');
        for (let i = 0; i < circles.length; i++) {
            const c = circles[i];
            c.style.backgroundImage = null;
        }
        const banners = this._app.querySelectorAll('.banner');
        for (let i = 0 ; i < banners.length;i++) {
            this._app.removeChild(banners[i]);
        }
    }

    _instantiateBanner(spawnElement, range, content) {
        const banner = document.createElement('div');
            banner.textContent = content;
            banner.classList.add('banner');

            let {x, y} = this._getCenterPos(spawnElement)

            let {newX, newY} = this._getRandomPoint(x,y, range);

            banner.style.left = newX + 'px';
            banner.style.top = newY + 'px';

            this._app.append(banner);

            return banner;
    }

    _getRandomPoint(x,y,range) {
        let x_r = Math.random() * range - range/2;
        let y_r = Math.random() * range - range/2;

        let newX = x + x_r;
        let newY = y+ y_r;

        return {newX, newY};
    }

    _getCenterPos(element) {
        var position = element.getBoundingClientRect();
            var x = (position.left + position.right)/2;
            var y = (position.top + position.bottom)/2;

            return {x, y};
    }




    _bindCategoryCheckbox(newCat, parent, projects) {

            //query checkbox states and rebuild index on click
            newCat.addEventListener('change', (e) => {
                let checkBoxes = parent.querySelectorAll('input');

                //return only the ids that are checked
                let filtered = [...checkBoxes]
                    .filter(box => box.checked === true)
                    .map(box => box.id);

                let table = document.querySelector(".projectIndexTable");
                this._buildIndexTable(projects, filtered);
            });
    }

    _bindSelAllCheckbox() {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        const selAll = filterContainer.querySelector('#selAll');

        selAll.addEventListener('change', () => {
            if (selAll.checked) {
                //get all checkboxes, turn on
                const allChecks = filterContainer.querySelectorAll('input');
                for (let i = 0; i < allChecks.length; i++) {
                    const box = allChecks[i];
                    if (box.id === 'selNone') box.checked = false;
                    else if (box.id !== 'selAll') {
                        box.checked = true;
                        const e = new Event("change");
                        box.dispatchEvent(e);
                    } 
                }
            }
        });
    }

    _bindSelNoneCheckbox() {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        const selNone = filterContainer.querySelector('#selNone');

        selNone.addEventListener('change', () => {
            if (selNone.checked) {
                //get all checkboxes, turn on
                const allChecks = filterContainer.querySelectorAll('input');
                for (let i = 0; i < allChecks.length; i++) {
                    const box = allChecks[i];
                    if (box.id === selNone.id) continue;
                    box.checked = false;
                    const e = new Event("change");
                    box.dispatchEvent(e);
                }
            }
        });
    }


    /**
     * Populates Project tab container with content and slides into view.
     * @param {<div>} htmlContent ... html div containing all page layout elements
     */
    displayProject(htmlContent) {
        const animationClass = 'slideInFromRight';

        const contentContainer = this._projectTab.querySelector('.projectContentContainer');
        //if project page already shown, slide out, swap content and slide back in.
        //timeout added to allow animation to finish.
        if (this._projectTab.classList.contains(animationClass)) {
            this._projectTab.classList.remove(animationClass);
            this._removeAllChildren(contentContainer);
            setTimeout(() => {
                // this._addCloseProjectButton();
                contentContainer.appendChild(htmlContent);
                this._projectTab.classList.add(animationClass);
            }, 200);
            return;
        }

        this._removeAllChildren(contentContainer);
        // this._addCloseProjectButton();
        contentContainer.appendChild(htmlContent);
        this._projectTab.classList.add(animationClass);

    }

    _addCloseProjectButton() {
        const closeProject = document.createElement('div');
        closeProject.classList.add('closeProject');
        this._projectTab.appendChild(closeProject);

        closeProject.addEventListener('click', () => {
            this._projectTab.classList.remove('slideInFromRight');
        });

        return closeProject;
    }


    // ==========================   UTILITY ===============================
     /**
     * 
     * @param {Array[Object]} projectData ... field labeled 'categories' required
     * @returns an array of unique categories
     */
     _getUniqueCategories(projectData) {
        let categories = new Set();
        projectData.forEach(p => {
            p.categories.forEach(c => {
                categories.add(c);
            });
        });
        return Array.from(categories);
    }

    /**
     * clear an element
     * @param {HTML Element} element 
     */
        _removeAllChildren(element) {
            while (element.lastChild) {
                element.removeChild(element.lastChild);
            }
        }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GUI);

/***/ }),

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList),
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });


class Node {
    value = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    //TODO: implement iterator
    _head = null;
    _size = 0;

    constructor() {

    }

    push(val) {

        let node = new Node(val);

        if (this._head === null) this._head = node;
        else {
            //iterate to last node
            let current = this._head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

        this._size++;
    }

    //insert value after specified index. If list is shorter than index, 
    //value will be pushed to the end.
    insert(val, idx) {
        if (idx < 0) return false;
        let current = this._head;
        let prev = null;
        for (let i = 0; i < idx && current !== null; i++){
            prev = current;
            current = current.next;
        }
        
        let n = new Node(val);
        prev.next = n;
        n.next = current;

        this._size++;
    }
    
    deleteAt(idx){
        if (idx >= this._size || idx < 0) return false;
        let current = this._head;
        let prev = null;
        for (let i = 0; i < idx && current !== null; i++){
            prev = current;
            current = current.next;
        }
        prev.next = current.next;

        this._size--;
    }

    /* pass in function for comparing two elements required, as
    equality for two objects is not clear cut. */
    delete(val, func) {
        let current = this._head;

        while (current.next !== null) {

            if (func(val, current.next.value)) {
                current.next = current.next.next;
                break;
            }

            current = current.next;
        }
        this._size--;
    }

    at(idx) {
        let curr = this._head;
        for (let i = 0; i < idx && curr !== null; i++){
            curr = curr.next;
        }
        return curr.value;
    }

    get Head() {
        return this._head;
    }

    set Head(val) {
        this._head = new Node(val);
    }

    get Size() {
        return this._size;
    }   
}


/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Model {

    _projects = null;

    // constructor() {
    //     this._projects = new Map();
    // }

    constructor(projects) {
        this.addProjects(projects);
    }

    addProject(key, project) {
        this._projects.set(key, project);
    }


    addProjects = (newProjects) => {
        if (!newProjects instanceof Map) throw "Must be a map";
        if (this._projects !== null && this._projects.size > 0) {
            var merged = new Map([this._projects, newProjects]);
            this._projects = merged;
            return;
        }
        if (this._projects === null)
        this._projects = newProjects;

    }



    /**
     * get relevant information from each project to build an index table,
    //returns an array of objects
     */
    get ProjectIndex() {
        if (this._projects === null) throw 'No projects added!';

        let entries = [];
        for (let [key, project] of this._projects.entries()) {
            const entry = {
                id: key.toString(),
                title: project.Title,
                year: project.Year,
                location: project.Location,
                categories: project.Categories
            }
            entries.push(entry);
        }

        return entries;

    }

    getProject(id) {
        return this._projects.get(id);
    }

    get ProjectCount() {
        return this._projects.size;
    }

    get Ids() {
        return this._projects.keys();
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ "./src/LinkedList.js");


class Project {

    _title = 'none';
    _subtitle = '';
    _year = 0;
    _location = '';
    _categories = null;
    _content = null;
    
    constructor(title, year, location){
        this._title = title;
        this._year = year;
        this._location = location;
        this._categories = new Set();
        this._content = new _LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
    }

    addCategory(category) {
        if (typeof category !== "string") return false;
        
        this._categories.add(category);
        return true;
    }

    //returns true if delete successful.
    removeCategory(category) {
        return this._categories.delete(category);
    }

    pushContent(element) {
        this._content.push(element);
    }

    pushContents() {
       for (let i = 0; i < arguments.length; i++) {
            this.pushContent(arguments[i]);
        };
    }
    
    insertContent(element, index) {
        this._content.insert(element, index);
    }

    removeContent(element) {
        this._content.delete(element);
    }

    //Getters, Setters
    get Categories() {
        return this._categories;
    }
    get Title() {
        return this._title;
    }

    get Subtitle() {
        return this._subtitle;
    }
    set Subtitle(val) {
        this._subtitle = val;
    }

    get Year() {
        return this._year;
    }
    get Location() {
        return this._location;
    }

    get HtmlContent() {
        const container = document.createElement('div');
        let node = this._content.Head;
        while (node !== null) {
            container.appendChild(node.value);
            node = node.next;
        }
        return container;
    }

    get Content() {
        return this._content;
    }
    get ContentCount() {
        return this._content.Size;
    }

}

/***/ }),

/***/ "./src/content/loadAboutTab.js":
/*!*************************************!*\
  !*** ./src/content/loadAboutTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");


const loadAboutTab = (parent) => {
    const aboutTab = document.createElement('div');
    aboutTab.classList.add('about');

    const leftEdge = document.createElement('div');
    leftEdge.classList.add('leftEdge')
    leftEdge.textContent = 'information';

    const abtContainer = document.createElement('div');
    abtContainer.classList.add('aboutContainer');

   
    

    const cv = document.createElement('a');
    cv.setAttribute('href', '#');
    cv.textContent = "Download CV";

    const insta = document.createElement('a');
    insta.setAttribute('href', 'https://www.instagram.com/taole.chen/');
    insta.textContent = 'Instagram';
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('links');
    linksContainer.append(cv, insta);


    const about0 = document.createElement('p');
    about0.innerHTML = 
        '<br>I am currently open for new projects. If you\'re looking to collaborate, please feel free to <a href="#">get in touch!</a><br>';
    const about1 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "I am a multi-disciplinary designer/software developer with a strong focus on computational geometry and fabrication. Previously, I have worked at international architectural practices, most notably Zaha Hadid Architects in London, developing bespoke design solutions and project-specific software tools. I have also collaborated with smaller practices in architecture and fabrication as an independent consultant to improve/establish computational workflow integration.");
    const intro2 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p',
        "I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. After getting more and more involved with the development side and the exciting possibilites of marrying design with computation, I decided to pursue continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning."); 

    abtContainer.append(linksContainer, about0, about1, intro2);
    const biographyTitle = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('h3', 
        "Biography");

    const bio0 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "Growing up between cultures and still following a globe-trotting lifetyle in adulthood (Austria, China, US, UK and counting), my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm.");
    const bio2 = document.createElement('p');
        bio2.innerHTML = 'I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don\'t hesitate to <a href="#">drop me a message!</a>';
    const bio1 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "I am fascinated by the concept of the Renaissance Man and I enjoy indulging in the pursuit of diverging interests in my free time. My origins are in the fine arts. Having painted, drawn and sculpted all my childhood, I was originally planning to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. I have not given up my passion in the arts and I still practice whenever I can. My hope is that some day I can find a happy, amalgamating medium between all my interests and create something novel and meaningful.");
        
    abtContainer.append(biographyTitle, document.createElement('hr'), bio0, bio2, bio1);
    aboutTab.append(leftEdge, abtContainer);
    parent.appendChild(aboutTab);

    return aboutTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);

/***/ }),

/***/ "./src/content/loadFooter.js":
/*!***********************************!*\
  !*** ./src/content/loadFooter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadFooter = (parent) => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = "This page was designed and built by me :) All rights reserved © Taole Chen";
    footer.append(copyright);

    parent.appendChild(footer);

    return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);

/***/ }),

/***/ "./src/content/loadIndexTab.js":
/*!*************************************!*\
  !*** ./src/content/loadIndexTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadIndexTab = (parent) => {
    const indexTab = document.createElement('div');
    indexTab.classList.add('projectIndex');

    const topedge = document.createElement('div');
    topedge.classList.add('topEdge');

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('projectFilter');

    const indexTable = document.createElement("table");
    indexTable.classList.add('projectIndexTable');

    indexTab.append(topedge, filterContainer, indexTable);
    
    parent.appendChild(indexTab);
    
    return indexTab;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadIndexTab);

/***/ }),

/***/ "./src/content/loadLeftMain.js":
/*!*************************************!*\
  !*** ./src/content/loadLeftMain.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadReturnArrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadReturnArrow */ "./src/content/loadReturnArrow.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");



const loadLeftMain = (parent) => {
    const leftContainer = document.createElement('main');
    leftContainer.classList.add("mainContainer", "left");

    const banner = document.createElement('div');

    const myName = document.createElement('h1');
    myName.textContent = 'Taole Chen';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'design | code | art';

    banner.append(myName, subtitle);
    const intro = document.createElement('p');
    intro.textContent = "I am a multi-disciplinary designer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science. ";

    const btn_profile = document.createElement('div');
    btn_profile.id = 'btn_profile';
    const profileText = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('div', "Full Profile");   
    btn_profile.appendChild(profileText);

    const returnArrow = (0,_loadReturnArrow__WEBPACK_IMPORTED_MODULE_0__["default"])(btn_profile);

    const header = document.createElement('header');
    header.append(banner, intro, btn_profile);

    leftContainer.append(header);

    parent.appendChild(leftContainer);

    
    return leftContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLeftMain);

/***/ }),

/***/ "./src/content/loadProjectArrow.js":
/*!*****************************************!*\
  !*** ./src/content/loadProjectArrow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadProjectArrow = (parent) => {

    const container = document.createElement('a');
    container.classList.add('link');
    container.id = 'projectArrow';

    const linkArrow = document.createElement('span');
    linkArrow.classList.add('link__arrow');
    linkArrow.append(document.createElement('span'), document.createElement('span'));

    const linkLine = document.createElement('span');
    linkLine.classList.add('link__line');
    const linkText = document.createElement('span');
    linkText.classList.add('link__text');
    linkText.textContent = 'projects';

    container.append(linkArrow, linkLine, linkText);

    parent.append(container);

    return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjectArrow);

/***/ }),

/***/ "./src/content/loadProjectTab.js":
/*!***************************************!*\
  !*** ./src/content/loadProjectTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadProjectTab = (parent) => {
    const projectTab = document.createElement('div');
    projectTab.classList.add('projectTab');

    const leftEdge = document.createElement('div');
    leftEdge.classList.add('leftEdge');
    leftEdge.textContent = 'close'

    const projectContentContainer = document.createElement('div');
    projectContentContainer.classList.add('projectContentContainer');

    projectTab.append(leftEdge, projectContentContainer);

    parent.appendChild(projectTab);
    return projectTab;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjectTab);

/***/ }),

/***/ "./src/content/loadReturnArrow.js":
/*!****************************************!*\
  !*** ./src/content/loadReturnArrow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadReturnArrow = (parent) => {
    // variable for the namespace 
    const svgns = "http://www.w3.org/2000/svg";
    // make a simple rectangle
    let returnArrowSvg = document.createElementNS(svgns, 'svg');
    returnArrowSvg.setAttribute("x", "50");
    returnArrowSvg.setAttribute("y", "50");
    returnArrowSvg.setAttribute("width", "100");
    returnArrowSvg.setAttribute("height", "100");
    // returnArrowSvg.setAttribute("fill", "#5cceee");

    const line = document.createElementNS(svgns, 'path');
    line.setAttribute('d', "M22,29.5h-9.5c-6.627,0-12-5.373-12-12V0");
    line.setAttribute('stroke-miterlimit', "10");
    line.setAttribute('fill', "none");
    line.setAttribute('stroke', "#000000");

    const dot = document.createElementNS(svgns, 'circle');
    dot.setAttribute('cx', "29.875");
    dot.setAttribute('cy', "29.125");
    dot.setAttribute('r', "7.875");
    // dot.setAttribute('fill', "#000000");
    dot.setAttribute('fill', "none");
    dot.setAttribute('stroke', "#000000");

    returnArrowSvg.append(line,dot);
    parent.appendChild(returnArrowSvg);

    return returnArrowSvg
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadReturnArrow);

/***/ }),

/***/ "./src/content/loadRightMain.js":
/*!**************************************!*\
  !*** ./src/content/loadRightMain.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadRightMain = (parent) => {
    const rightContainer = document.createElement('main');
    rightContainer.classList.add("mainContainer", "right");

    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circleContainer');

    const c1 = document.createElement('div');
    c1.classList.add('circle');
    c1.classList.add('circleDesign');
    const c2 = document.createElement('div');
    c2.classList.add('circle');
    c2.classList.add('circleCode');
    const c3 = document.createElement('div');
    c3.classList.add('circle');
    c3.classList.add('circleArt');

    circleContainer.append(c1, c2, c3);
    rightContainer.append(circleContainer);

    parent.appendChild(rightContainer);

    return rightContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRightMain);

/***/ }),

/***/ "./src/content/proj_aag.js":
/*!*********************************!*\
  !*** ./src/content/proj_aag.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _assets_aag_aag_cover_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/aag/aag_cover.jpg */ "./src/assets/aag/aag_cover.jpg");




const aag = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(
        "Formwork-Free and Mortar-Free Shell Assembly", 
        2018, 
        "Gothenburg Sweden");

    proj.addCategory("design");
    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("fabrication");
    proj.addCategory("code");



    const ti = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const introheading = document.createElement("h2");
    introheading.textContent = "Introduction";
    const img_cover = new Image();
    img_cover.src = _assets_aag_aag_cover_jpg__WEBPACK_IMPORTED_MODULE_2__;
    //INTRO
    const intro1 = document.createElement("p");
    intro1.textContent = "Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018.";
    const intro2 = document.createElement("p");
    intro2.textContent = "The objective was to demonstrate to students the workings and benefits of the computational design paradigm that allows seamless integration between design, fabrication and assembly in settings where many complex constraints come together, thus making it unsuitable for conventional, analog design methodologies. Pedagogically, the students experienced it firsthand by designing funicular shell structures that hold together without formwork assembly and mortar through a parametric model that embeds fabrication data, subsequently sending their design elements to a robotic arm for hotwire fabrication. This results in a tight feedback loop where students were able to see the effects of their design decisions in a real-world prototype with a minimal delay and adapt their design in the next iteration."; 
    //Features
    const featuresHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h2", 'Features');
    const features = document.createElement("ul");
    const feat1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Bespoke Grasshopper plugin providing functionality for the creation of shell segments ready for fabrication');
    const feat2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Integrates SpatialSlur, a geometric data manipulation library');
    const feat3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Shell structural evaluation implementing thrust network analysis on half-edge mesh structures');
    const feat4 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Integration with custom-made robotic hotwire-cutter');
    features.append(feat1, feat2,feat3, feat4);
    //Technologies
    const techHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'C#');
    const tech2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    const tech3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'SpatialSlur');
    const tech4 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Half-edge mesh structure to faciliate geometric operations and force simulation');
    tech.append(tech1, tech2, tech3,tech4);

    proj.pushContents(ti, img_cover, introheading, intro1, intro2, 
        featuresHeading, features, techHeading, tech);

    return proj;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aag);

/***/ }),

/***/ "./src/content/proj_drones.js":
/*!************************************!*\
  !*** ./src/content/proj_drones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/lbd/HiveMindClasses.jpg */ "./src/assets/lbd/HiveMindClasses.jpg");



//media


const drones = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project("Learning-Based Design", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Implementing a Learning-Based Change Detection Framework for a Self-Corrective Behavioural Model in Aerial Additive Manufacturing | Imperial College Master Thesis";


    const title = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const cover = new Image();

    const introHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Learning-Based Design was my master thesis for the MSc in Computing at Imperial College London. Due to the confidential nature of the project, I am not able to publish any concrete results, however, I will include here some general information and technologies used. If there is interest, please feel free to contact me for further discussion while avoiding any sensitive topics :).');

    const team = document.createElement('div');
    team.innerHTML = '<strong>Team:</strong> Taole Chen, Yusuf Kaya, Lachlan Orr<br><strong>Advisor:</strong>Dr.   Basaran Bahadir Kocer<br>In collaboration with the <a href = "https://www.imperial.ac.uk/aeronautics/about/">Imperial Aeronautics Department</a> and <a href="https://www.empa.ch/web/empa/research-areas">EMPA</a>';

    proj.pushContents(title, subtitle, year, location, cover, introHeading, intro, team);

    const summaryHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Summary");
    // const neighsubHead = createElementText('h4', 'The Building as a Network')
    const sum0 = document.createElement('p');
    sum0.innerHTML = 
        'The project situates design in the context of Industry 4.0 and the radically new discipline of <a href="http://www.aerial-abm.com/">Aerial Additive Building Manufacturing</a>. With the proliferation of digital technologies in the AEC industry, the future trajectory of the industry is pointing towards autonomous, closed-loop robotic systems, creating the need to develop design methodologies that can engage with machine-centric processes.';
    const sum1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Aerial Additive Manufacturing (AAM) is an early-stage research that is developing a pioneering framework for multi-agent additive manufacturing with Unmanned Aerial vehicles (UAV). Currently, AAM does not have a design-to-fabrication workflow nor a dedicated design framework to interface with due to its infancy. To address this gap, my research aimed to develop the first stages of a design interface for multi-agent AAM. More specifically, a realtime, in-situ change detection and correction framework with a machine learning approach based on point clouds was developed and subsequently validated through physical experiments.');

    proj.pushContents(summaryHead, sum0, sum1);

    const featuresHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Features');
    const featlist = document.createElement('ul');
    const feat0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Behavioural Model for AAM using point clouds as a data medium. Point clouds have the advantage of being an integral part of drone vision, so no additional translation is required between design and fabrication.')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
        'C# Wrapper for the popular C++ <a href="https://pointclouds.org/">Point Cloud Library</a> (pcl), a 2D/3D processing library that is popular among robotic development communities and integrates with the ROS framework.';
    const feat2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Machine Learning model implementing a custom random forest classifier with JSON export for ease of distribution. Other classifiers, such as a neural network, were also implemented, though not used for the final experiment.');
    const feat3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Tensor data object implementation in Grasshopper using Tensorflow.NET\'s Numpy, allowing multidimensional matrix operations in the GH environment.');
    const feat4 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Stand-alone core C# library with testing that can be ported to other applications.');


    featlist.append(feat0, feat1, feat2, feat3, feat4);
    proj.pushContents(featuresHeading, featlist);

    const archheading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Architecture');
    const arch0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 'The code for the paper was implemented as a Grasshopper plug-in library. The core library is written in C# and care was taken to maintain a hexagonal architecture for future adaptability. Functionality for point clouds and machine learning is added with the adapter pattern so it can be replaced with updated modules. A controller library named HiveMindGH establishes a connection between the core library and Grasshopper’s visual interface.')
    
    const img_classDiagram = new Image();
    img_classDiagram.src = _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__;

    proj.pushContents(archheading, arch0, img_classDiagram);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drones);

/***/ }),

/***/ "./src/content/proj_matnet.js":
/*!************************************!*\
  !*** ./src/content/proj_matnet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _assets_matnet_render_facade_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/matnet/render_facade.jpg */ "./src/assets/matnet/render_facade.jpg");
/* harmony import */ var _assets_matnet_anim_zoomScales_00_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/matnet/anim_zoomScales_00.gif */ "./src/assets/matnet/anim_zoomScales_00.gif");
/* harmony import */ var _assets_matnet_anim_growth_all_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/matnet/anim_growth_all.gif */ "./src/assets/matnet/anim_growth_all.gif");
/* harmony import */ var _assets_matnet_anim_growth_turntable_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/matnet/anim_growth_turntable.gif */ "./src/assets/matnet/anim_growth_turntable.gif");
/* harmony import */ var _assets_matnet_unit_00_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/matnet/unit_00.jpg */ "./src/assets/matnet/unit_00.jpg");
/* harmony import */ var _assets_matnet_unit_layout_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/matnet/unit_layout.jpg */ "./src/assets/matnet/unit_layout.jpg");
/* harmony import */ var _assets_matnet_anim_graphToArch_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/matnet/anim_graphToArch.gif */ "./src/assets/matnet/anim_graphToArch.gif");



//media








const matnet = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project("Material Networks", 2018, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");
    proj.addCategory("fabrication");

    proj.Subtitle = "Mass-Customized Housing for Cohesive Communities. AADRL Master Thesis"


    const title = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const cover = new Image();
    cover.src = _assets_matnet_render_facade_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const introHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Material Networks is the culmination of my research at the Architectural Association - Design Research Lab. The project engages with the rapid digitization of the built environment and looks at how design agency can adapt to a fully automated, computer-driven world while bringing the human element to the forefront of the discourse. Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.');

    const team = document.createElement('p');
    team.innerHTML = 'Design Team: Taole Chen, Suchart (Bon) Ouypornchaisakul, Jeffrey Widjaja<br>Tutors: Shajay Bhooshan, Alicia Nahmad<br><a href="https://drl.aaschool.ac.uk/">AADRL</a>';

    proj.pushContents(title, subtitle, year, location, cover, introHeading, intro, team);

    //level 0 neighborhood
    const neighHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Level 0 Neighborhood");
    const neighsubHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 'The Building as a Network')
    const neigh0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        "Co-opting techniques from complex network analysis, at the neighborhood level, the research looks into developing an operational tool for extracting meaningful spatial relationship from the social network of a community.");
    const neigh1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The social relationships of a given community are captured in a relational roster in the form of an encoded data matrix, allowing computers to easily read and process the information. The data matrix is subsequently used to construct a network graph. The graph is useful because it captures multi-scalar information in a single, cohesive data structure, opening up computational ways of engaging with the information.');
    const neigh2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The graph is given agency by deploying a rule-based growth algorithm on the project site. A path-finding logic is used to generate schemes, with specific rule determining the resulting character of the neighborhood while ensuring the computed spatial relationships are maintained. The decoupling of formal agency from the hands of the human designer signifies a crucial step towards a fully autonomous construction framework. Yet, with the rule-based system, designers are still given control without the possibility to resort to the sculpting of form, thus prioritizing a logic-driven approach, rather than aesthetics.');

    const vid_zoomScales = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_zoomScales_00_gif__WEBPACK_IMPORTED_MODULE_3__);
    const vid_growth_all = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_growth_all_gif__WEBPACK_IMPORTED_MODULE_4__);
    const vid_growth_turntable = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_growth_turntable_gif__WEBPACK_IMPORTED_MODULE_5__);

    proj.pushContents(neighHead, neighsubHead, neigh0, neigh1, vid_zoomScales, neigh2, vid_growth_all, vid_growth_turntable);

    //level 1 home
    const unitHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Level 1 Home");
    const unitSubHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 
        'Home Is What You Do')
    const unit0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');
    const unit1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.');
    const unit2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.');

    const img_unitExample = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_unit_00_jpg__WEBPACK_IMPORTED_MODULE_6__);
    const img_unitLayout = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_unit_layout_jpg__WEBPACK_IMPORTED_MODULE_7__);
    const vid_graphToArch = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_graphToArch_gif__WEBPACK_IMPORTED_MODULE_8__);

    proj.pushContents(unitHead, unitSubHead, img_unitExample, unit0, img_unitLayout, unit1, unit2, vid_graphToArch);

    //level 2 tectonics
    const tectoHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Level 2 Tectonics");
    const tectoSubHead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 'Home Is What You Do')
    const tecto0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Additive Manufacturing was identified as the primary candidate for the construction system, as it offers the ability to manufacture free-form geometries while providing cost and time savings, and increased onsite safety for automated systems. A robotics-first approach was needed for the construction system to integrate into the overall framework.');

    const tecto1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'An onsite, segmented approach with multi-material printing was envisioned, as mono-material, continuous printing is argued to be impractical and undesirable for architectural applications, because it does not account for the multi-systemic nature of buildings. Autonomous, robotic units are deployed onsite ');


    const tecto2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Clay is used as a proxy material for visco-elastic, cementitious materials (most relevantly concrete) to prototype design iterations and understand the limitations in real terms. A pneumatically-operated extrusion-end-effector was developed from scratch for the research and deployed with various industrial robotic arms for prototyping. Through rigorous testing, critical parameters were defined and informed the possible geometric design expressions.');

    const vid_graphToConstruction = document.createElement('div');
    vid_graphToConstruction.classList.add('projectVideoContainer');
    vid_graphToConstruction.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative"><iframe src="https://player.vimeo.com/video/790832820?h=9845e92337&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From Graph to Construction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_constructionSeq = document.createElement('div');
    vid_constructionSeq.classList.add('projectVideoContainer');
    vid_constructionSeq.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790839868?h=6b331f8a4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Construction Sequence"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_fabHighlights = document.createElement('div');
    vid_fabHighlights.classList.add('projectVideoContainer');
    vid_fabHighlights.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790880002?h=14aa7723cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Material Networks - Fabrication Highlights"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';
    const vid_experiments = document.createElement('div');
    vid_experiments.classList.add('projectVideoContainer');
    vid_experiments.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790912552?h=995c678eef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MatNet - Experiment Evaluation"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

    proj.pushContents(tectoHead, tectoSubHead, tecto0, vid_graphToConstruction, tecto1, vid_constructionSeq, tecto2, vid_fabHighlights, vid_experiments);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matnet);

/***/ }),

/***/ "./src/content/proj_myWebsite.js":
/*!***************************************!*\
  !*** ./src/content/proj_myWebsite.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");



const myWebsite = () => {
    let project = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(
        "Personal Portfolio Website",
        2023,
        'Earth'
    );

    project.Subtitle = "This one";

    project.addCategory("design");
    project.addCategory("code");

    const ti = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', project.Title);
    const subTi = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', project.Subtitle);
    //intro
    const introheading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Introduction');
    const intro = document.createElement('p');
    intro.textContent = 'This website was built completely from scratch by me to showcase the projects I have done over the years. It served as a great project to put everything I have learned about web development into practice. Please feel free to browse around and I am happy to receive any and all feedback.'
    //features
    const featuresHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Features');
    const features = document.createElement("ul");
    const feat1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'MVC architecture allows for future re-use of the core logic in different graphical environments.');
    const feat2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Vanilla JS only to keep the project lightweight and because the goal was to practice my JS skills, rather than my knowledge on libraries');
    const feat3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Unit testing for core classes');
    const feat4 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Streamlined method for adding more projects as packaged objects in the future to improve maintainability');
    const feat5 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Projects are searchable by category to ease navigation');
    features.append(feat1, feat2,feat3, feat4, feat5);
    //technologies
    const techHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'HTML, CSS, JS');
    const tech2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Jest Unit Testing');
    const tech3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Webpack asset bundling');
    tech.append(tech1, tech2, tech3);

    //development
    const devHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Development');
    const dev = document.createElement('ul');
    const dev1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'blog section');
    dev.append(dev1);


    project.pushContents(
        ti, subTi, introheading, intro, 
        featuresHeading, features, 
        techHeading, tech,
        devHeading, dev);

    return project;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myWebsite);

/***/ }),

/***/ "./src/content/proj_nlp4ms.js":
/*!************************************!*\
  !*** ./src/content/proj_nlp4ms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _assets_nlp4ms_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/nlp4ms/home.png */ "./src/assets/nlp4ms/home.png");
/* harmony import */ var _assets_nlp4ms_gui_freetext_00_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/nlp4ms/gui_freetext_00.jpg */ "./src/assets/nlp4ms/gui_freetext_00.jpg");
/* harmony import */ var _assets_nlp4ms_gui_main_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/nlp4ms/gui_main.jpg */ "./src/assets/nlp4ms/gui_main.jpg");
/* harmony import */ var _assets_nlp4ms_gui_sampleAnalysis_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/nlp4ms/gui_sampleAnalysis.jpg */ "./src/assets/nlp4ms/gui_sampleAnalysis.jpg");
/* harmony import */ var _assets_nlp4ms_gui_userAnalysis_01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/nlp4ms/gui_userAnalysis_01.jpg */ "./src/assets/nlp4ms/gui_userAnalysis_01.jpg");
/* harmony import */ var _assets_nlp4ms_classDiagram_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/nlp4ms/classDiagram.jpg */ "./src/assets/nlp4ms/classDiagram.jpg");



//media







const nlp4ms = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project("NLP for Multiple Sclerosis", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Diagnosis Tool for Researchers working on Multiple Sclerosis";


    const title = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const git = document.createElement('h5');
    git.innerHTML = '<a href=https://github.com/Abstractmachina/icc_NLP4MS>Github</a>'
    //const cover = new Image();

    const introHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Natural Language Processing for the Diagnosis of Multiple Sclerosis was a group research project done as part of the software engineering design course at Imperial. The app is designed to be used by researchers at the UK MS Register, where a large collection of unprompted free-text data (patient reported outcomes) was amassed over the years, but there has been no effective tool to process and take advantage of that information to date. Our app sought to provide a simple interface to extract meaningful free-text data in the medical research for the diagnosis of MS. There was no prior code base, as our group was the first to collaborate with the MS Register, however, the intention is to continue the development in subsequent years.');

    const team = document.createElement('div');
    team.innerHTML = 
        '<strong>Team:</strong> Matt Barker, Colin Taylor, Taole Chen, Kaixuan Khoo, Ronan Patrick, Gus Levinson, Jack Cheng<br><strong>Supervisors:</strong> Chiraag Lala, Rod Middleton, Richard Nicholas<br>In collaboration with the <a href = "https://ukmsregister.org/">UK MS Register</a>';

    proj.pushContents(title, subtitle, year, location, git, introHeading, intro, team);

    const featuresHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Features');

    const featlist = document.createElement('ul');
    const feat0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Free-text analyzer for simple text processing, looking at frequency of terms and phrases, n-grams to identify trends and key terminologies used by patients')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
    'Logistic regression classifier with bag-of-words model for predicting MS in patients based on their text prompts.';
    const feat2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Sentiment and Extendend Disability Status Analysis to identify trends in individual users and dempgraphics. Implementation of the VADER sentiment library.');
    const feat3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Custom CSV import capabalities, giving researchers more freedom in adapting the app to specific needs.');
    const feat4 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Hexagonal Architecture, allowing the swapping of modules in the future, thus improving re-useability of the code base');
    const feat5 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'All modules limited to the NLTK platform, as code is hosted on secure servers of the MS Register.');
    featlist.append(feat0, feat1, feat2, feat3, feat4);
    
    const img_home = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_home_png__WEBPACK_IMPORTED_MODULE_2__, 'App Home Page');
    const img_gui_freetxt = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_freetext_00_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Free text analysis page');
    const img_guiMain = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_main_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Main menu');
    const img_SampleSentiment = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_sampleAnalysis_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Example of generated trend graphs for a group of patients');
    const img_guiUser = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_userAnalysis_01_jpg__WEBPACK_IMPORTED_MODULE_6__, 'User sentiment analysis page');

  
    proj.pushContents(featuresHeading, featlist, img_home, img_guiMain, img_gui_freetxt, img_SampleSentiment, img_guiUser);
    
    const techHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Technologies');
    const techlist = document.createElement('ul');
    const tech0 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Python back-end')
    const tech1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'tkinter front-end');
    const tech2 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'VADER sentiment analysis implementation');
    const tech3 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Sci-kit Learn text classification implementation');
    const img_classDiagram = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_classDiagram_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Class Diagram');
    techlist.append( tech0, tech1, tech2, tech3);
    proj.pushContents(techHeading, techlist, img_classDiagram);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nlp4ms);

/***/ }),

/***/ "./src/content/proj_organic.js":
/*!*************************************!*\
  !*** ./src/content/proj_organic.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _assets_organic_oc_yoga_4398_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4398.jpg */ "./src/assets/organic/oc_yoga-4398.jpg");
/* harmony import */ var _assets_organic_oc_bra1_3875_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/organic/oc_bra1-3875.jpg */ "./src/assets/organic/oc_bra1-3875.jpg");
/* harmony import */ var _assets_organic_oc_bra1_3907_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/organic/oc_bra1-3907.jpg */ "./src/assets/organic/oc_bra1-3907.jpg");
/* harmony import */ var _assets_organic_oc_bra1_4005_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/organic/oc_bra1-4005.jpg */ "./src/assets/organic/oc_bra1-4005.jpg");
/* harmony import */ var _assets_organic_oc_bra2_4531_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/organic/oc_bra2-4531.jpg */ "./src/assets/organic/oc_bra2-4531.jpg");
/* harmony import */ var _assets_organic_oc_bra3_4084_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/organic/oc_bra3-4084.jpg */ "./src/assets/organic/oc_bra3-4084.jpg");
/* harmony import */ var _assets_organic_oc_top3_4800_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/organic/oc_top3-4800.jpg */ "./src/assets/organic/oc_top3-4800.jpg");
/* harmony import */ var _assets_organic_oc_yoga_4167_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4167.jpg */ "./src/assets/organic/oc_yoga-4167.jpg");
/* harmony import */ var _assets_organic_oc_yoga_4406_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4406.jpg */ "./src/assets/organic/oc_yoga-4406.jpg");
/* harmony import */ var _assets_organic_oc_yoga_4458_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4458.jpg */ "./src/assets/organic/oc_yoga-4458.jpg");
/* harmony import */ var _assets_organic_oc_yoga_4512_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4512.jpg */ "./src/assets/organic/oc_yoga-4512.jpg");
/* harmony import */ var _assets_organic_oc_yoga_5001_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/organic/oc_yoga-5001.jpg */ "./src/assets/organic/oc_yoga-5001.jpg");
/* harmony import */ var _assets_organic_oc_yoga_4979_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/organic/oc_yoga-4979.jpg */ "./src/assets/organic/oc_yoga-4979.jpg");
/* harmony import */ var _assets_organic_oc_yoga_5056_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/organic/oc_yoga-5056.jpg */ "./src/assets/organic/oc_yoga-5056.jpg");
/* harmony import */ var _assets_organic_oc_yoga_5069_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/organic/oc_yoga-5069.jpg */ "./src/assets/organic/oc_yoga-5069.jpg");



//media

















const organic = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project("Organic Code Apparel", 2022, "Jeju, South Korea");

    proj.addCategory("art");
    proj.addCategory("photography");

    proj.Subtitle = "Product Shoot for Bralette and Top Series";


    const title = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const brandLink = document.createElement('h5');
    brandLink.innerHTML = '<a href=https://www.instagram.com/organic_code_/>Brand Link</a>'
    const img_cover = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_organic_oc_yoga_4398_jpg__WEBPACK_IMPORTED_MODULE_2__);

    const introHeading = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'I was approached by my friend to help her brand do a product shoot for her latest series featuring bralets and tops. Organic Code specializes in hand-made apparel using naturally-dyed 100% organic cotton, made locally on Jeju Island. ');

    const credit = document.createElement('div');
    credit.innerHTML = 
        '<strong>Models:</strong> <a href="https://www.instagram.com/esngmn/">Seungmin Lee</a>, <a href="https://www.instagram.com/llamobelen/">Gayoung Lee</a>';

    proj.pushContents(title, subtitle, year, location, brandLink, img_cover, introHeading, intro, credit);

    const images = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createImages)(_assets_organic_oc_bra2_4531_jpg__WEBPACK_IMPORTED_MODULE_6__,_assets_organic_oc_bra1_3875_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_organic_oc_bra1_3907_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_organic_oc_bra1_4005_jpg__WEBPACK_IMPORTED_MODULE_5__,_assets_organic_oc_bra3_4084_jpg__WEBPACK_IMPORTED_MODULE_7__,_assets_organic_oc_top3_4800_jpg__WEBPACK_IMPORTED_MODULE_8__,_assets_organic_oc_yoga_4167_jpg__WEBPACK_IMPORTED_MODULE_9__,_assets_organic_oc_yoga_4406_jpg__WEBPACK_IMPORTED_MODULE_10__,_assets_organic_oc_yoga_4458_jpg__WEBPACK_IMPORTED_MODULE_11__,_assets_organic_oc_yoga_4512_jpg__WEBPACK_IMPORTED_MODULE_12__,_assets_organic_oc_yoga_5001_jpg__WEBPACK_IMPORTED_MODULE_13__,_assets_organic_oc_yoga_4979_jpg__WEBPACK_IMPORTED_MODULE_14__,_assets_organic_oc_yoga_5056_jpg__WEBPACK_IMPORTED_MODULE_15__,_assets_organic_oc_yoga_5069_jpg__WEBPACK_IMPORTED_MODULE_16__);
    
    images.forEach(img => {proj.pushContent(img)});
    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (organic);

/***/ }),

/***/ "./src/content/proj_printFast.js":
/*!***************************************!*\
  !*** ./src/content/proj_printFast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Project */ "./src/Project.js");


const printFast = () => {
    let proj = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project("Print Fast, Pile High!", 2019, "Copenhagen, Denmark");

    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");



    const introHeading = document.createElement('h2');
    introHeading.textContent = "Introduction";
    proj.pushContent(introHeading);
    const intro = document.createElement('p');
    intro.textContent = "This is a Grasshopper plugin developed for a series of workshops titled \"Print Fast Pile High\", an offshoot from design research and material experimentation on 3D-printing conducted at the AADRL and Shajay Bhooshan's PhD research on concrete additive manufacturing. The workshop is a collaborative design-build exercise which seeks synergies between computational masonry and 3D printing with soft-rigid materials. The aim is to explore geometries which are structurally aware and their associated design space, in relation to their materiality and fabrication technology. Clay is used as material and its dominant compression capacity is the main parameter to explore and use to design digital geometries accordingly. Traditional layer-by-layer 3d printing methods is questioned in favor of a methodology which aligns geometric representation in digital space with the physical manufacturing process. Function Representations (F-Rep) and image based technology is employed to generate digital geometries with a custom toolkit before to be translated into robotic instructions for the physical world. "
    proj.pushContent(intro);

    const featureHeading = document.createElement('h2');
    featureHeading.textContent = "Features";
    proj.pushContent(featureHeading);

    const feature = document.createElement('p');
    feature.textContent = "The plugin implements the SDF function approach to generate 3D-printable forms outlined in the paper Function Representation for Robotic 3D Printed Concrete (Bhooshan 2018).";
    proj.pushContent(feature);

    const featureList = document.createElement('ul');
    const p1 = document.createElement('li');
    p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    const p2 = document.createElement('li');
    p2.textContent = "Multi-threading for calculation-intensive components";
    const p3 = document.createElement('li');
    p3.textContent = "Display components to visualize geometric output";
    featureList.append(p1,p2,p3);
    proj.pushContent(featureList);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printFast);

/***/ }),

/***/ "./src/loadProjects.js":
/*!*****************************!*\
  !*** ./src/loadProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_proj_myWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/proj_myWebsite */ "./src/content/proj_myWebsite.js");
/* harmony import */ var _content_proj_printFast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/proj_printFast */ "./src/content/proj_printFast.js");
/* harmony import */ var _content_proj_aag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/proj_aag */ "./src/content/proj_aag.js");
/* harmony import */ var _content_proj_matnet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/proj_matnet */ "./src/content/proj_matnet.js");
/* harmony import */ var _content_proj_drones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/proj_drones */ "./src/content/proj_drones.js");
/* harmony import */ var _content_proj_nlp4ms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/proj_nlp4ms */ "./src/content/proj_nlp4ms.js");
/* harmony import */ var _content_proj_organic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/proj_organic */ "./src/content/proj_organic.js");








const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast',  (0,_content_proj_printFast__WEBPACK_IMPORTED_MODULE_1__["default"])());
    projects.set('aag', (0,_content_proj_aag__WEBPACK_IMPORTED_MODULE_2__["default"])());
    projects.set('website', (0,_content_proj_myWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])());
    projects.set('matnet', (0,_content_proj_matnet__WEBPACK_IMPORTED_MODULE_3__["default"])());
    projects.set('drones', (0,_content_proj_drones__WEBPACK_IMPORTED_MODULE_4__["default"])());
    projects.set('nlp4ms', (0,_content_proj_nlp4ms__WEBPACK_IMPORTED_MODULE_5__["default"])());
    projects.set('organic', (0,_content_proj_organic__WEBPACK_IMPORTED_MODULE_6__["default"])());

    return projects;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "createElementText": () => (/* binding */ createElementText),
/* harmony export */   "createFigure": () => (/* binding */ createFigure),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createImages": () => (/* binding */ createImages),
/* harmony export */   "isElement": () => (/* binding */ isElement)
/* harmony export */ });
function isElement(o) {
    return (o instanceof Element);
}

//compare two html elements. must be html elements.
function areEqual(a, b) {
    if (!isElement(a) || !isElement(b)) return false;
    if (a.nodeName !== b.nodeName) return false;
    if (a.textContent !== b.textContent) return false;
    return true;
}

function createElementText(tag, text) {
    if (typeof tag !== 'string' || typeof text !== 'string') return null;
    const output = document.createElement(tag);
    output.textContent = text;
    return output;
}

function createImage(source = '') {
    const img = new Image();
    img.src = source;
    return img;
}

function createImages() {
    const output = [];
    for (let i = 0; i < arguments.length; i++) {
        const img = new Image();
        img.src = arguments[i];
        output.push(img);
    }

    return output;
}

function createFigure(source = '', caption = '') {
    if (typeof caption !== 'string') throw new Error("caption must be a string!");

    const figure = document.createElement('figure');
    const img = new Image();
    img.src = source;
    const capt = document.createElement('figcaption');
    capt.textContent = 'fig: ' + caption;
    figure.append(img, capt);
    return figure;
}


/***/ }),

/***/ "./src/assets/aag/aag_cover.jpg":
/*!**************************************!*\
  !*** ./src/assets/aag/aag_cover.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04070daa8cfd29d0f58d.jpg";

/***/ }),

/***/ "./src/assets/arrow_projectIndex_base.svg":
/*!************************************************!*\
  !*** ./src/assets/arrow_projectIndex_base.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af47c47e2d416b898c60.svg";

/***/ }),

/***/ "./src/assets/barbican_00.jpg":
/*!************************************!*\
  !*** ./src/assets/barbican_00.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e8d0f3ff35edf030dfb.jpg";

/***/ }),

/***/ "./src/assets/lbd/HiveMindClasses.jpg":
/*!********************************************!*\
  !*** ./src/assets/lbd/HiveMindClasses.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a89aa8c873f64a3184f.jpg";

/***/ }),

/***/ "./src/assets/matnet/anim_graphToArch.gif":
/*!************************************************!*\
  !*** ./src/assets/matnet/anim_graphToArch.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4baaa8f1fd1ef01cb76e.gif";

/***/ }),

/***/ "./src/assets/matnet/anim_growth_all.gif":
/*!***********************************************!*\
  !*** ./src/assets/matnet/anim_growth_all.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e84c4a1bde4bab5cc9b.gif";

/***/ }),

/***/ "./src/assets/matnet/anim_growth_turntable.gif":
/*!*****************************************************!*\
  !*** ./src/assets/matnet/anim_growth_turntable.gif ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8100351f375917c5b3ec.gif";

/***/ }),

/***/ "./src/assets/matnet/anim_zoomScales_00.gif":
/*!**************************************************!*\
  !*** ./src/assets/matnet/anim_zoomScales_00.gif ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1330f951449db57460e2.gif";

/***/ }),

/***/ "./src/assets/matnet/fab_05.jpg":
/*!**************************************!*\
  !*** ./src/assets/matnet/fab_05.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d412d1cc2cf9e218f21.jpg";

/***/ }),

/***/ "./src/assets/matnet/render_facade.jpg":
/*!*********************************************!*\
  !*** ./src/assets/matnet/render_facade.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a80c012b9cbfe39f4151.jpg";

/***/ }),

/***/ "./src/assets/matnet/unit_00.jpg":
/*!***************************************!*\
  !*** ./src/assets/matnet/unit_00.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e69a43003a22146beae0.jpg";

/***/ }),

/***/ "./src/assets/matnet/unit_layout.jpg":
/*!*******************************************!*\
  !*** ./src/assets/matnet/unit_layout.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf354c0614fcd535f714.jpg";

/***/ }),

/***/ "./src/assets/monolisk_black.woff":
/*!****************************************!*\
  !*** ./src/assets/monolisk_black.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10f8c0244c0b34801565.woff";

/***/ }),

/***/ "./src/assets/nlp4ms/classDiagram.jpg":
/*!********************************************!*\
  !*** ./src/assets/nlp4ms/classDiagram.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6eb79d31f4dc4a6f4a15.jpg";

/***/ }),

/***/ "./src/assets/nlp4ms/gui_freetext_00.jpg":
/*!***********************************************!*\
  !*** ./src/assets/nlp4ms/gui_freetext_00.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95a3548e28c87672fbfb.jpg";

/***/ }),

/***/ "./src/assets/nlp4ms/gui_main.jpg":
/*!****************************************!*\
  !*** ./src/assets/nlp4ms/gui_main.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dca191827a4d5c17cba5.jpg";

/***/ }),

/***/ "./src/assets/nlp4ms/gui_sampleAnalysis.jpg":
/*!**************************************************!*\
  !*** ./src/assets/nlp4ms/gui_sampleAnalysis.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4997f6c6cb9c04f2969e.jpg";

/***/ }),

/***/ "./src/assets/nlp4ms/gui_userAnalysis_01.jpg":
/*!***************************************************!*\
  !*** ./src/assets/nlp4ms/gui_userAnalysis_01.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c42218a7f603360e698c.jpg";

/***/ }),

/***/ "./src/assets/nlp4ms/home.png":
/*!************************************!*\
  !*** ./src/assets/nlp4ms/home.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86b4765054cb3ce6bd50.png";

/***/ }),

/***/ "./src/assets/organic/oc_bra1-3875.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_bra1-3875.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5031aa15b26351042379.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_bra1-3907.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_bra1-3907.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "713f24a11d57765d6af8.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_bra1-4005.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_bra1-4005.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5a4637ec181b30f0bc5.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_bra2-4531.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_bra2-4531.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "749e1b53e30762cae04b.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_bra3-4084.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_bra3-4084.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1b258396da77d951499.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_top3-4800.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_top3-4800.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15ab26cfc73655118bea.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4167.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4167.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "575be4b9edf2bf6140f2.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4398.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4398.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55817873a2862379c000.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4406.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4406.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70a3faf20a614e99bef2.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4458.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4458.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d4d0a34bb92e63b6e4f.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4512.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4512.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce3f175ccb567f9e1166.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-4979.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-4979.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04fb8d5f4b04a06f5a30.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-5001.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-5001.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c51ab5fc02b5b0f021cd.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-5056.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-5056.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d251e043dbdd47159b5.jpg";

/***/ }),

/***/ "./src/assets/organic/oc_yoga-5069.jpg":
/*!*********************************************!*\
  !*** ./src/assets/organic/oc_yoga-5069.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80421ad91ac56923abec.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style_anim_projectArrow.scss */ "./src/style_anim_projectArrow.scss");
/* harmony import */ var _style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style_anim_checkboxes.scss */ "./src/style_anim_checkboxes.scss");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");







const app = new _Controller__WEBPACK_IMPORTED_MODULE_3__.Controller();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDcEUyQjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ0Y7QUFDdEM7QUFDMEM7QUFDMUM7QUFDQTtBQUNBLGdCQUFnQixtREFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3MiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3MiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZS5jc3M/ZWZiZiIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3M/MzhmYyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzcz81ZDM2Iiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL0dVSS5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvTGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZEFib3V0VGFiLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZEluZGV4VGFiLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRMZWZ0TWFpbi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkUHJvamVjdEFycm93LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRQcm9qZWN0VGFiLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRSZXR1cm5BcnJvdy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkUmlnaHRNYWluLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfYWFnLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfZHJvbmVzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfbWF0bmV0LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfbXlXZWJzaXRlLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfbmxwNG1zLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfb3JnYW5pYy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9wcm9qX3ByaW50RmFzdC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvbG9hZFByb2plY3RzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tb25vbGlza19ibGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbjpyb290IHtcXG4gIC0tY29sX2VtcGhhc2lzOiByZ2IoMjU1LCAyMjEsIDApOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcblxcbi5yb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmRkMDA7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjJlbTsgfVxcblxcbmE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQwMDsgfVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBmbGV4LXNocmluazogMDsgfVxcblxcbi8qIExFRlQgTUFJTiAqL1xcbi5sZWZ0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBlbSA4ZW07XFxuICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbi8qPT09PT09PT0gIEhFQURFUiAgPT09PT09PT09PT09PT09PT09Ki9cXG5oZWFkZXIgOmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBtYXJnaW4tbGVmdDogMC4zZW07IH1cXG5cXG4vKmxvZ28qL1xcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDIge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuI2J0bl9wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiA4ZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjdlbTsgfVxcblxcbiNidG5fcHJvZmlsZSA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcblxcbiNidG5fcHJvZmlsZSBzdmcge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogLTEuMmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMS4yZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgc2NhbGU6IDAuMjU7XFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM2VtLCAtMmVtKTsgKi9cXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4OyB9XFxuXFxuI2J0bl9wcm9maWxlOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDAuM2VtIHNvbGlkIHZhcigtLWNvbF9lbXBoYXNpcyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3Ryb2tlLXdpZHRoOiA1OyB9XFxuXFxuLyogPT09PT09PSAgUklHSFQgTUFJTiAgPT09PT09PT09PSovXFxuLnJpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNpcmNsZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtOyB9XFxuXFxuLmNpcmNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgaGVpZ2h0OiAxNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbi8qQUJPVVQgVEFCKi9cXG4uYWJvdXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMjVweCk7XFxuICB0b3A6IDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB3aWR0aDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgcGFkZGluZzogNGVtIDhlbTsgfVxcblxcbi5hYm91dCBociB7XFxuICBib3JkZXI6IDAgbm9uZTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTsgfVxcblxcbi5hYm91dCBoMyB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuNGVtO1xcbiAgbWFyZ2luLXRvcDogNmVtOyB9XFxuXFxuLmFib3V0IC5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLyo9PT09PT09ICAgSU5ERVggVEFCICAgPT09PT09PT09PT09Ki9cXG4ucHJvamVjdEluZGV4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMjAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuXFxuLnByb2plY3RJbmRleFNsaWRlSW4ge1xcbiAgdG9wOiAzMCU7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLnByb2plY3RGaWx0ZXIge1xcbiAgcGFkZGluZzogMWVtIDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMC43NWVtOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHtcXG4gIG1hcmdpbjogMGVtIDFlbTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBmb250LXNpemU6IDAuOGVtOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRoIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyAqL1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07IH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUgdGQge1xcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAvKiByZW1vdmUgdGhlIGJvcmRlcidzIGNvbG91ciAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC41cHggbGlnaHRncmF5O1xcbiAgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovIH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUgdHI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7IH1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTsgfVxcblxcbi8qID09PT09PSAgIENJUkNMRSBQUkVWSUVXUyAgICAgPT09PT09PSovXFxuLmJhbm5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogdmFyKC0tY29sX2VtcGhhc2lzKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMGVtOyB9XFxuXFxuLyogPT09PT09ICAgUFJPSkVDVCBUQUIgICAgID09PT09PT0qL1xcbi5wcm9qZWN0VGFiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRvcDogMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA5OCU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB6LWluZGV4OiA1O1xcbiAgLyogcGFkZGluZzogMmVtIDRlbTsgKi9cXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuXFxuLmxlZnRFZGdlIHtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIHdpZHRoOiAyNXB4O1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IGRvdHRlZCAjOTQ5NDk0O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmxlZnRFZGdlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnRvcEVkZ2Uge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IGRvdHRlZCAjOTQ5NDk0O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBibGFjaztcXG4gIC8qIHdyaXRpbmctbW9kZTp2ZXJ0aWNhbC1scjsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5wcm9qZWN0Q29udGVudENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW0gNGVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uY2xvc2VQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtOyB9XFxuXFxuLmNsb3NlUHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTsgfVxcblxcbi5wcm9qZWN0VGFiIGltZyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5wcm9qZWN0VmlkZW9Db250YWluZXIge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnByb2plY3RUYWIgaDMge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuNWVtOyB9XFxuXFxuLnByb2plY3RUYWIgaDUge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgLyogbWFyZ2luLWJvdHRvbTogLTAuNWVtOyAqLyB9XFxuXFxuLnByb2plY3RUYWIgcCB7XFxuICAvKiB0ZXh0LWluZGVudDogMmVtOyAqLyB9XFxuXFxuLnByb2plY3RUYWIgZmlndXJlIGltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMXB4OyB9XFxuXFxuLnByb2plY3RUYWIgZmlnY2FwdGlvbiB7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtOyB9XFxuXFxuLnNsaWRlSW5Gcm9tUmlnaHQge1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5mb290ZXIge1xcbiAgLyogZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7ICovXFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiAjODE4MTgxO1xcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLDZCQUE2QjtFQUM3QiwyREFBdUQsRUFBQTs7QUFHM0Q7RUFDSSxnQ0FBZSxFQUFBOztBQUduQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUVJLFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsOEJBQXVDO0VBQ3ZDLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLHlCQUFrQyxFQUFBOztBQUd0QztFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxjQUFjLEVBQUE7O0FBR2xCLGNBQUE7QUFDQTtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHVCQUF1QixFQUFBOztBQUczQix1Q0FBQTtBQUVBO0VBQ0ksYUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUE7O0FBR3JCLE9BQUE7QUFDQTtFQUNJLFNBQVE7RUFDUixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFNBQVE7RUFDUixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLFdBQVU7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QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBQTtFQUNBLGNBQWM7RUFDZCxtQ0FBOEM7RUFDOUMsNEJBQTRCO0VBQzVCLDhCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHVCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxlQUFlO0VBQ2YsMkJBQUEsRUFBNEI7O0FBR2hDO0VBQ0ksc0JBQUEsRUFBdUI7O0FBSzNCO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksU0FBUztFQUNULFVBQVUsRUFBQTs7QUFLZDtFQUNJLDRDQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUF5QjtFQUN6Qix3QkFBQTtFQUNBLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL21vbm9saXNrX2JsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1jb2xfZW1waGFzaXM6IHJnYigyNTUsIDIyMSwgMCk7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJvb3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiKDI1NSwgMjIxLCAwKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4yZW07XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMRUZUIE1BSU4gKi9cXHJcXG4ubGVmdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMGVtIDhlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PSAgSEVBREVSICA9PT09PT09PT09PT09PT09PT0qL1xcclxcblxcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICB3aWR0aDoxMS41ZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKmxvZ28qL1xcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDEge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDIge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDoyZW07XFxyXFxuICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZSA6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9wcm9maWxlIHN2ZyB7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMS4yZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHNjYWxlOiAwLjI1O1xcclxcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM2VtLCAtMmVtKTsgKi9cXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDo0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX3Byb2ZpbGU6aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB2YXIoLS1jb2xfZW1waGFzaXMpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHN0cm9rZS13aWR0aDogNTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PSAgUklHSFQgTUFJTiAgPT09PT09PT09PSovXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxNWVtO1xcclxcbiAgICBoZWlnaHQ6IDE1ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKkFCT1VUIFRBQiovXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwJSAtIDI1cHgpO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB3aWR0aDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0Q29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNGVtIDhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGhyIHtcXHJcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBoMyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0wLjRlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLmxpbmtze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyo9PT09PT09ICAgSU5ERVggVEFCICAgPT09PT09PT09PT09Ki9cXHJcXG4ucHJvamVjdEluZGV4IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6MjAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFNsaWRlSW4ge1xcclxcbiAgICB0b3A6MzAlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEZpbHRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEluZGV4VGFibGUge1xcclxcbiAgICBtYXJnaW46IDBlbSAxZW07XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0aCB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyAqL1xcclxcbiAgICBmb250LXNpemU6IDAuN2VtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0ciB7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucHJvamVjdEluZGV4VGFibGUgdHI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIHJlbW92ZSB0aGUgYm9yZGVyJ3MgY29sb3VyICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuNXB4IHJnYigyMTEsIDIxMSwgMjExKTsgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovXFxyXFxufVxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0cjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfZW1waGFzaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4gLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT0gICBDSVJDTEUgUFJFVklFV1MgICAgID09PT09PT0qL1xcclxcbi5iYW5uZXIge1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb25vbGlzayBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09ICAgUFJPSkVDVCBUQUIgICAgID09PT09PT0qL1xcclxcblxcclxcbi5wcm9qZWN0VGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgbGVmdDoxMDAlO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDk4JTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICAvKiBwYWRkaW5nOiAyZW0gNGVtOyAqL1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBvcGFjaXR5O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0RWRnZSB7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIC8qIGZsZXgtZ3JvdzogMTsgKi9cXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMC41cHggZG90dGVkIHJnYigxNDgsIDE0OCwgMTQ4KTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgYmxhY2s7XFxyXFxuICAgIHdyaXRpbmctbW9kZTp2ZXJ0aWNhbC1scjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRFZGdlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sX2VtcGhhc2lzKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wRWRnZSB7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGZsZXgtZ3JvdzogMTsgKi9cXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IGRvdHRlZCByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgYmxhY2s7XFxyXFxuICAgIC8qIHdyaXRpbmctbW9kZTp2ZXJ0aWNhbC1scjsgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyZW0gNGVtO1xcclxcblxcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jbG9zZVByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZVByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RWaWRlb0NvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgaDUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgIC8qIG1hcmdpbi1ib3R0b206IC0wLjVlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgcCB7XFxyXFxuICAgIC8qIHRleHQtaW5kZW50OiAyZW07ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5wcm9qZWN0VGFiIGZpZ3VyZSBpbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgZmlnY2FwdGlvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlSW5Gcm9tUmlnaHQge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcXHJcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0RmlsdGVyID4gZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnRnbCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAudGdsICsgLnRnbC1idG4ge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07IH1cXG4gICAgLnRnbCArIC50Z2wtYnRuOmFmdGVyLCAudGdsICsgLnRnbC1idG46YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgLnRnbCArIC50Z2wtYnRuOmFmdGVyIHtcXG4gICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10Zy1vbik7IH1cXG4gICAgLnRnbCArIC50Z2wtYnRuOmJlZm9yZSB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb2ZmKTsgfVxcbiAgICAudGdsICsgLnRnbC1idG46YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtOyB9XFxuICAgICAgLnRnbCArIC50Z2wtYnRuOmFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogLTEwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtOyB9XFxuICAudGdsOmNoZWNrZWQgKyAudGdsLWJ0biB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC8qIHJlbW92ZSB0aGUgYm9yZGVyJ3MgY29sb3VyICovXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZkZDAwO1xcbiAgICAvKiBlbXVsYXRlIHRoZSBib3JkZXIgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAgIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmJlZm9yZSB7XFxuICAgICAgbGVmdDogLTEwMCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgICAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphY3RpdmU6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICM4ODg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgICAgbGVmdDogMTAlOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhLEVBQUE7RUFEZjtJQU1JLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBRWxCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGdCQUFnQixFQUFBO0lBakJwQjtNQXFCUSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLGtCQUFrQjtNQUVsQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtJQTNCcEI7TUE4QlEsVUFBVTtNQUNWLHlCQUF5QixFQUFBO0lBL0JqQztNQW1DUSxPQUFPO01BQ1AsMEJBQTBCLEVBQUE7SUFwQ2xDO01Bd0NRLGdCQUFnQjtNQUNoQixvQkFBb0IsRUFBQTtNQXpDNUI7UUEyQ1UsVUFBVTtRQUNWLG9CQUFvQixFQUFBO0VBNUM5QjtJQXFESSx5QkFBeUI7SUFBRSwrQkFBQTtJQUMzQiw2QkEvRDJCO0lBK0RVLHVCQUFBO0lBRXJDLGtCQUFrQjtJQUNsQixzQkFBc0IsRUFBQTtJQXpEMUI7TUFnRVEsV0FBVztNQUNYLGdCQUFnQixFQUFBO0lBakV4QjtNQXFFUSxPQUFPLEVBQUE7SUFyRWY7TUF5RVEsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixTQUFTLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbF9lbXBoYXNpczogcmdiKDI1NSwgMjIxLCAwKTtcXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdEZpbHRlcj5kaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRnbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgKyAudGdsLWJ0biB7XFxyXFxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgLy8gd2lkdGg6IDZlbTtcXHJcXG4gICAgY29udGVudDogYXR0cihkYXRhLXRnLW9uKTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIsXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIC8vIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgbGVmdDogMTAwJTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10Zy1vbik7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10Zy1vZmYpO1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgbGVmdDogLTEwJTtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgJjpjaGVja2VkICsgLnRnbC1idG4ge1xcclxcbiAgICAvLyBib3JkZXItY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIHJlbW92ZSB0aGUgYm9yZGVyJ3MgY29sb3VyICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkY29sX2VtcGhhc2lzOyAvKiBlbXVsYXRlIHRoZSBib3JkZXIgKi9cXHJcXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAvLyBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIsXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlOmFmdGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gICAgICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbF9lbXBoYXNpczogcmdiKDI1NSwgMjIxLCAwKTsgfVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUzZCgyMDBweCwgLTEzMHB4LCAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmxpbmtfX2Fycm93IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gICAgLmxpbmtfX2Fycm93IHNwYW4ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBiYWNrZ3JvdW5kOiAjQkVCREJFO1xcbiAgICAgIHotaW5kZXg6IDI7IH1cXG4gICAgICAubGlua19fYXJyb3cgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlM2QoOHB4LCAtMTBweCwgMCk7IH1cXG4gICAgICAubGlua19fYXJyb3cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICAgICAgLmxpbmtfX2Fycm93IHNwYW46YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZGQwMDsgfVxcbiAgLmxpbmtfX2xpbmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjQkVCREJFO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAgIC5saW5rX19saW5lOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMTQwcHg7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sX2VtcGhhc2lzKTsgfVxcbiAgLmxpbmtfX3RleHQge1xcbiAgICBjb2xvcjogIzRBNEE0QTtcXG4gICAgZm9udC1zaXplOiAxZW07IH1cXG4gIC5saW5rOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLmxpbms6aG92ZXIgLmxpbmtfX2xpbmU6YWZ0ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWxpbmUgMS4ycyBmb3J3YXJkczsgfVxcbiAgICAubGluazpob3ZlciAubGlua19fYXJyb3cgc3BhbjphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24tYXJyb3cgMS4ycyBmb3J3YXJkcztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzOyB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRpb24tbGluZSB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDE0MHB4OyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRpb24tYXJyb3cge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdDQUFlLEVBQUE7O0FBTW5CO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0VBRXJCLHVEQUF1RDtFQUN2RCxlQUFlLEVBQUE7RUFFZjtJQUNBLG9CQUFvQixFQUFBO0lBRG5CO01BSU8sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBO01BVmpCO1FBYU8sNkJBQTZCO1FBQzdCLG1EQUFtRCxFQUFBO01BZDFEO1FBa0JPLDZCQUE2QjtRQUM3Qix5QkFBeUIsRUFBQTtNQW5CaEM7UUF1Qk8sV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFFBQVE7UUFDUixXQUFXO1FBQ1gsbUJBQTRCLEVBQUE7RUFLcEM7SUFDQSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0lBUlQ7TUFXRyxXQUFXO01BQ1gsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFdBQVc7TUFDWCwrQkFBK0IsRUFBQTtFQUluQztJQUNBLGNBQWM7SUFFZCxjQUFjLEVBQUE7RUFwRWxCO0lBeUVRLGdCQUFnQjtJQUNoQiw2QkFBNkIsRUFBQTtJQTFFckM7TUE4RWdCLHVDQUF1QyxFQUFBO0lBOUV2RDtNQXFGZ0Isd0NBQXdDO01BQ3hDLG1CQUFtQixFQUFBOztBQVNuQztFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxPQUFPLEVBQUEsRUFBQTs7QUFJWDtFQUNFO0lBQ0UsUUFBUSxFQUFBO0VBR1Y7SUFDRSxXQUFXLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1jb2xfZW1waGFzaXM6IHJnYigyNTUsIDIyMSwgMCk7XFxyXFxufVxcclxcbi8vIGJvZHkge1xcclxcbi8vICAgcGFkZGluZzogMTAwcHg7XFxyXFxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuLy8gfVxcclxcbi5saW5rIHtcXHJcXG4gICAgJHNlbGY6ICY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAvLyAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoLTMwMHB4LCAwLCAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUzZCgyMDBweCwgLTEzMHB4LCAwKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAmX19hcnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNCRUJEQkU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZTNkKDhweCwgLTEwcHgsIDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjIxLCAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNCRUJEQkU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDE0MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgY29sb3I6ICM0QTRBNEE7XFxyXFxuICAgIC8vIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAjeyRzZWxmfSB7XFxyXFxuICAgICAgICAgICAgJl9fbGluZSB7XFxyXFxuICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWxpbmUgMS4ycyBmb3J3YXJkcztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICZfX2Fycm93IHtcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWFycm93IDEuMnMgZm9yd2FyZHM7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAxNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1hcnJvdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9hbmltX2NoZWNrYm94ZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanMnO1xyXG5pbXBvcnQgR1VJIGZyb20gJy4vR1VJLmpzJ1xyXG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gXCIuL2xvYWRQcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBfbW9kZWwgPSBudWxsO1xyXG4gICAgX3ZpZXcgPSBudWxsO1xyXG4gICAgX3Byb2plY3RJbmRleCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBuZXcgTW9kZWwobG9hZFByb2plY3RzKCkpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBuZXcgR1VJKHRoaXMuX21vZGVsLlByb2plY3RJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuYmluZENhbGxQcm9qZWN0UGFnZXModGhpcy5vblByb2plY3RQYWdlQ2FsbGVkKTtcclxuICAgICAgICB0aGlzLl92aWV3LmJpbmRIb3ZlclByb2plY3RzKHRoaXMub25Qcm9qZWN0SG92ZXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9qZWN0UGFnZUNhbGxlZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLl9tb2RlbC5nZXRQcm9qZWN0KGlkKTtcclxuICAgICAgICB0aGlzLl92aWV3LmRpc3BsYXlQcm9qZWN0KHByb2plY3QuSHRtbENvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvamVjdEhvdmVyZWQgPSAoaWQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWwuZ2V0UHJvamVjdChpZCkuQ2F0ZWdvcmllcztcclxuICAgIH1cclxufSIsImltcG9ydCBwQXJyb3dCYXNlIGZyb20gJy4vYXNzZXRzL2Fycm93X3Byb2plY3RJbmRleF9iYXNlLnN2Zyc7XHJcbmltcG9ydCBwcmV2aWV3X2Rlc2lnbiBmcm9tICcuL2Fzc2V0cy9tYXRuZXQvZmFiXzA1LmpwZyc7XHJcbmltcG9ydCBwcmV2aWV3X2NvZGUgZnJvbSAnLi9hc3NldHMvbGJkL0hpdmVNaW5kQ2xhc3Nlcy5qcGcnO1xyXG5pbXBvcnQgcHJldmlld19hcnQgZnJvbSAnLi9hc3NldHMvYmFyYmljYW5fMDAuanBnJztcclxuXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5pbXBvcnQgbG9hZEFib3V0VGFiIGZyb20gJy4vY29udGVudC9sb2FkQWJvdXRUYWIuanMnO1xyXG5pbXBvcnQgbG9hZExlZnRNYWluIGZyb20gJy4vY29udGVudC9sb2FkTGVmdE1haW4nO1xyXG5pbXBvcnQgbG9hZFJpZ2h0TWFpbiBmcm9tICcuL2NvbnRlbnQvbG9hZFJpZ2h0TWFpbic7XHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gJy4vY29udGVudC9sb2FkRm9vdGVyJztcclxuaW1wb3J0IGxvYWRQcm9qZWN0VGFiIGZyb20gJy4vY29udGVudC9sb2FkUHJvamVjdFRhYic7XHJcbmltcG9ydCBsb2FkSW5kZXhUYWIgZnJvbSAnLi9jb250ZW50L2xvYWRJbmRleFRhYic7XHJcbmltcG9ydCBsb2FkUHJvamVjdEFycm93IGZyb20gJy4vY29udGVudC9sb2FkUHJvamVjdEFycm93JztcclxuXHJcblxyXG5jbGFzcyBHVUkge1xyXG5cclxuICAgIC8vY2xhc3MgbmFtZXMgZm9yIHF1ZXJ5IHNlbGVjdGlvblxyXG4gICAgX3Byb2plY3RGaWx0ZXJDbGFzcyA9ICdwcm9qZWN0RmlsdGVyJztcclxuICAgIF9pbmRleEJ1dHRvbklkID0gJ3Byb2plY3RBcnJvdyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLl9hcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vdCcpO1xyXG5cclxuICAgICAgICAvL2xvYWQgZWxlbWVudHNcclxuICAgICAgICB0aGlzLl9sZWZ0TWFpbiA9IGxvYWRMZWZ0TWFpbih0aGlzLl9hcHApO1xyXG4gICAgICAgIHRoaXMuX2J0bl9pbmRleCA9IGxvYWRQcm9qZWN0QXJyb3codGhpcy5fbGVmdE1haW4pO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0TWFpbiA9IGxvYWRSaWdodE1haW4odGhpcy5fYXBwKTtcclxuICAgICAgICB0aGlzLl9mb290ZXIgPSBsb2FkRm9vdGVyKHRoaXMuX2FwcCk7XHJcbiAgICAgICAgdGhpcy5fYWJvdXRUYWIgPSBsb2FkQWJvdXRUYWIodGhpcy5fcmlnaHRNYWluKTtcclxuICAgICAgICB0aGlzLl9pbmRleFRhYiA9IGxvYWRJbmRleFRhYih0aGlzLl9hcHApO1xyXG4gICAgICAgIHRoaXMuX3ByZWJ1aWxkSW5kZXhUYWIocHJvamVjdHMpO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RUYWIgPSBsb2FkUHJvamVjdFRhYih0aGlzLl9yaWdodE1haW4pO1xyXG5cclxuICAgICAgICAvL3NldHVwIGJpbmRpbmdzXHJcbiAgICAgICAgdGhpcy5fYmluZFByb2ZpbGVCdXR0b24oKTtcclxuICAgICAgICB0aGlzLl9iaW5kRXhpdFByb2plY3RJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuX2JpbmRDYWxsSW5kZXgoKTtcclxuICAgICAgICB0aGlzLl9iaW5kU2VsQWxsQ2hlY2tib3goKTtcclxuICAgICAgICB0aGlzLl9iaW5kU2VsTm9uZUNoZWNrYm94KCk7XHJcbiAgICAgICAgdGhpcy5fYmluZFRhYkxlZnRFZGdlcygpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vPT09PT09PT09IElOREVYIFRBQiA9PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBfbG9hZFByb2plY3RJbmRleEJ1dHRvbihwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCBidG5faW5kZXggPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBidG5faW5kZXguc3JjID0gcEFycm93QmFzZTtcclxuICAgICAgICBidG5faW5kZXguaWQgPSB0aGlzLl9pbmRleEJ1dHRvbklkO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoYnRuX2luZGV4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ0bl9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBfcHJlYnVpbGRJbmRleFRhYihwcm9qZWN0cykge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IHRoaXMuX2luZGV4VGFiLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5fcHJvamVjdEZpbHRlckNsYXNzKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVBbGxDaGlsZHJlbihmaWx0ZXJDb250YWluZXIpOyAvL3Jlc2V0IGNvbnRhaW5lclxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlU2VsQWxsQ2hlY2tib3goZmlsdGVyQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVTZWxOb25lQ2hlY2tib3goZmlsdGVyQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3J5RmlsdGVycyA9IHRoaXMuX2dldFVuaXF1ZUNhdGVnb3JpZXMocHJvamVjdHMpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgY2hlY2tib3ggZm9yIGVhY2ggY2F0ZWdvcnlcclxuICAgICAgICBjYXRlZ29yeUZpbHRlcnMuZm9yRWFjaChjYSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhdCA9IHRoaXMuX2NyZWF0ZUNhdGVnb3J5Q2hlY2tib3goZmlsdGVyQ29udGFpbmVyLCBjYS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5fYmluZENhdGVnb3J5Q2hlY2tib3gobmV3Q2F0LCBmaWx0ZXJDb250YWluZXIsIHByb2plY3RzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9wcmUtYnVpbGQgaW5kZXggd2l0aCBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5fYnVpbGRJbmRleFRhYmxlKHByb2plY3RzLCB0aGlzLl9nZXRVbmlxdWVDYXRlZ29yaWVzKHByb2plY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNhdGVnb3J5Q2hlY2tib3gocGFyZW50LCBpZCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbmV3Q2F0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIG5ld0NhdC5pZCA9IGlkO1xyXG4gICAgICAgIG5ld0NhdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpZCk7XHJcbiAgICAgICAgbmV3Q2F0LmNsYXNzTGlzdC5hZGQoXCJ0Z2xcIik7XHJcbiAgICAgICAgbmV3Q2F0LmNsYXNzTGlzdC5hZGQoXCJ0Z2wtc2tld2VkXCIpO1xyXG4gICAgICAgIG5ld0NhdC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcclxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGdsLWJ0blwiKTtcclxuICAgICAgICAvLyBsYWJlbC50ZXh0Q29udGVudCA9IGlkO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vZmYnLGlkKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb24nLCBpZCk7XHJcbiAgICAgICAgLy8gbGFiZWwudGV4dENvbnRlbnQgPSBpZDtcclxuICAgICAgICBsYWJlbC5zdHlsZS53aWR0aCA9IChpZC5sZW5ndGgqMC43KSArICdlbSc7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXdDYXQsIGxhYmVsKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdDYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZVNlbEFsbENoZWNrYm94KHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNlbEFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc2VsQWxsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIHNlbEFsbC5pZCA9ICdzZWxBbGwnO1xyXG4gICAgICAgIHNlbEFsbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBzZWxBbGwuaWQpO1xyXG4gICAgICAgIHNlbEFsbC5jbGFzc0xpc3QuYWRkKFwidGdsXCIpO1xyXG4gICAgICAgIHNlbEFsbC5jbGFzc0xpc3QuYWRkKFwidGdsLXNrZXdlZFwiKTtcclxuICAgICAgICBzZWxBbGwuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzZWxBbGwuaWQpO1xyXG4gICAgICAgIC8vIGxibF9zZWxBbGwudGV4dENvbnRlbnQgPSAnQWxsJztcclxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGdsLWJ0blwiKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb2ZmJywnQWxsJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9uJywgJ0FsbCcpO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gMyArICdlbSc7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzZWxBbGwsIGxhYmVsKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU2VsTm9uZUNoZWNrYm94KHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNlbE5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHNlbE5vbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgc2VsTm9uZS5pZCA9ICdzZWxOb25lJztcclxuICAgICAgICBzZWxOb25lLnNldEF0dHJpYnV0ZSgnbmFtZScsIHNlbE5vbmUuaWQpO1xyXG4gICAgICAgIHNlbE5vbmUuY2xhc3NMaXN0LmFkZChcInRnbFwiKTtcclxuICAgICAgICBzZWxOb25lLmNsYXNzTGlzdC5hZGQoXCJ0Z2wtc2tld2VkXCIpO1xyXG4gICAgICAgIHNlbE5vbmUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgc2VsTm9uZS5pZCk7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRnbC1idG5cIik7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9mZicsJ05vbmUnKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb24nLCAnTm9uZScpXHJcbiAgICAgICAgbGFiZWwuc3R5bGUud2lkdGggPSA0ICsgJ2VtJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNlbE5vbmUsIGxhYmVsKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2J1aWxkSW5kZXhUYWJsZShwcm9qZWN0cywgY2F0ZWdvcnlGaWx0ZXJzKSB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjYXRlZ29yeUZpbHRlcnMpKSB0aHJvdyBcIkVycm9yOiBwYXJhbWV0ZXIgaXMgbm90IG9mIHR5cGUgQXJyYXlcIjtcclxuXHJcbiAgICAgICAgLy9zb3J0IHByb2plY3RzIGRlc2NlbmRpbmcgYnkgeWVhclxyXG4gICAgICAgIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IGIueWVhciAtIGEueWVhcik7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbmRleFRhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuX2luaXRJbmRleEhlYWRlcnMocGFyZW50KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIHByb2plY3QuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5RmlsdGVycy5pbmNsdWRlcyhjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoXCJ0ZFwiLCBwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dZZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ3RkJywgcHJvamVjdC55ZWFyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xvYyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0ZCcsIHByb2plY3QubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MudGV4dENvbnRlbnQgPSBBcnJheS5mcm9tKHByb2plY3QuY2F0ZWdvcmllcykubWFwKGMgPT4ge3JldHVybiBjLnNsaWNlKDAsMil9KS5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LmlkID0gcHJvamVjdC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LmFwcGVuZChyb3dZZWFyLCByb3dUaXRsZSwgcm93TG9jLCB0YWdzKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcG9wdWxhdGUgdGFibGUgd2l0aCBwcmVzZXQgaGVhZGVycyAodGl0bGUsIHllYXIsIGxvY2F0aW9uLCBjYXRlZ29yaWVzKSBhbmQgYXR0YWNoIHRvIHBhcmVudFxyXG4gICAgICogQHJldHVybnMgZW1wdHkgPHRhYmxlPiB3aXRoIGhlYWRlcnMuXHJcbiAgICAgKi9cclxuICAgIF9pbml0SW5kZXhIZWFkZXJzKHRhYmxlQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4odGFibGVDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRfdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgndGgnLCBcIlRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRfeWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0aCcsICdZZWFyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZF9sb2MgPSBjcmVhdGVFbGVtZW50VGV4dCgndGgnLCdMb2NhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRfY2F0ID0gY3JlYXRlRWxlbWVudFRleHQoJ3RoJywgJ0NhdGVnb3JpZXMnKTtcclxuICAgICAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmQoaGVhZF90aXRsZSwgaGVhZF95ZWFyLCBoZWFkX2xvYywgaGVhZF9jYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2xpZGUgaW4gaW5kZXggdGFiXHJcbiAgICAgKi9cclxuICAgIF9zaG93SW5kZXhUYWIoKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXhUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZGV4U2xpZGVJbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09ICAgIEJJTkRJTkdTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgX2JpbmRQcm9maWxlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IGJ0bl9wcm9maWxlID0gdGhpcy5fbGVmdE1haW4ucXVlcnlTZWxlY3RvcignI2J0bl9wcm9maWxlJyk7XHJcbiAgICAgICAgYnRuX3Byb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL3RyYW5zaXRpb24gaW4gYWJvdXQgdGFiXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAnYnRuX3Byb2ZpbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kQ2FsbEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuX2J0bl9pbmRleC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd0luZGV4VGFiKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRFeGl0UHJvamVjdEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuX2xlZnRNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBpc1Byb2plY3RBcnJvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzUHJvZmlsZUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmlkID09PSAncHJvamVjdEFycm93JykgaXNQcm9qZWN0QXJyb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmlkID09PSAnYnRuX3Byb2ZpbGUnKSBpc1Byb2ZpbGVCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPSB0LnBhcmVudE5vZGVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJvamVjdEFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXhUYWIuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdEluZGV4U2xpZGVJbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1Byb2ZpbGVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hYm91dFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUluRnJvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhbGxQcm9qZWN0UGFnZXMoaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbmRleFRhYmxlJyk7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIocm93LmlkKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3Nbal0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYmluZFRhYkxlZnRFZGdlcygpIHtcclxuICAgICAgICBjb25zdCBlZGdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0RWRnZScpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBlZGdlc1tpXTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLndpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzZWxlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgcHJvamVjdHNlbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c2VsZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwbGl0cyA9IGxlZnQuc3BsaXQoJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaWZ0ID0gcGFyc2VGbG9hdChzcGxpdHNbMF0pIC0gNTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUubGVmdCA9IHNoaWZ0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd19zcGxpdHMgPSB3aWR0aC5zcGxpdCgncHgnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd19zaGlmdCA9IHBhcnNlRmxvYXQod19zcGxpdHNbMF0pICsgNTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUud2lkdGggPSB3X3NoaWZ0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUud2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kSG92ZXJQcm9qZWN0cyhoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEluZGV4VGFibGUnKTtcclxuICAgICAgICBjb25zdCByb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBoYW5kbGVyKHJvdy5pZCk7XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsUHJldmlld0NpcmNsZXMoY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzUHJldmlld0NpcmNsZXMoY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vcG9wdWxhdGUgcHJldmlldyBjaXJjbGVzIHdpdGggcHJlZGVmaW5lZCBncmFwaGljc1xyXG4gICAgX2NhbGxQcmV2aWV3Q2lyY2xlcyhjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKFwiZGVzaWduXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpZ2h0TWFpbi5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZURlc2lnblwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcHJldmlld19kZXNpZ24gKyBcIilcIjtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFudGlhdGVCYW5uZXIoY29udGFpbmVyLCAyMDAsICdERVNJR04nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKFwiY29kZVwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaWdodE1haW4ucXVlcnlTZWxlY3RvcihcIi5jaXJjbGVDb2RlXCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBwcmV2aWV3X2NvZGUgKyBcIilcIjtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFudGlhdGVCYW5uZXIoY29udGFpbmVyLCAyMDAsICdDT0RFJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoXCJhcnRcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlnaHRNYWluLnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlQXJ0XCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBwcmV2aWV3X2FydCArIFwiKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW50aWF0ZUJhbm5lcihjb250YWluZXIsIDIwMCwgJ0FSVCcpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2Rpc21pc3NQcmV2aWV3Q2lyY2xlcyhjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHRoaXMuX3JpZ2h0TWFpbi5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSBjaXJjbGVzW2ldO1xyXG4gICAgICAgICAgICBjLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhbm5lcnMgPSB0aGlzLl9hcHAucXVlcnlTZWxlY3RvckFsbCgnLmJhbm5lcicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGJhbm5lcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICB0aGlzLl9hcHAucmVtb3ZlQ2hpbGQoYmFubmVyc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pbnN0YW50aWF0ZUJhbm5lcihzcGF3bkVsZW1lbnQsIHJhbmdlLCBjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJhbm5lci50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB7eCwgeX0gPSB0aGlzLl9nZXRDZW50ZXJQb3Moc3Bhd25FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgbGV0IHtuZXdYLCBuZXdZfSA9IHRoaXMuX2dldFJhbmRvbVBvaW50KHgseSwgcmFuZ2UpO1xyXG5cclxuICAgICAgICAgICAgYmFubmVyLnN0eWxlLmxlZnQgPSBuZXdYICsgJ3B4JztcclxuICAgICAgICAgICAgYmFubmVyLnN0eWxlLnRvcCA9IG5ld1kgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYXBwLmFwcGVuZChiYW5uZXIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJhbm5lcjtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UmFuZG9tUG9pbnQoeCx5LHJhbmdlKSB7XHJcbiAgICAgICAgbGV0IHhfciA9IE1hdGgucmFuZG9tKCkgKiByYW5nZSAtIHJhbmdlLzI7XHJcbiAgICAgICAgbGV0IHlfciA9IE1hdGgucmFuZG9tKCkgKiByYW5nZSAtIHJhbmdlLzI7XHJcblxyXG4gICAgICAgIGxldCBuZXdYID0geCArIHhfcjtcclxuICAgICAgICBsZXQgbmV3WSA9IHkrIHlfcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtuZXdYLCBuZXdZfTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q2VudGVyUG9zKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB2YXIgeCA9IChwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ucmlnaHQpLzI7XHJcbiAgICAgICAgICAgIHZhciB5ID0gKHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmJvdHRvbSkvMjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7eCwgeX07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgX2JpbmRDYXRlZ29yeUNoZWNrYm94KG5ld0NhdCwgcGFyZW50LCBwcm9qZWN0cykge1xyXG5cclxuICAgICAgICAgICAgLy9xdWVyeSBjaGVja2JveCBzdGF0ZXMgYW5kIHJlYnVpbGQgaW5kZXggb24gY2xpY2tcclxuICAgICAgICAgICAgbmV3Q2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tCb3hlcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG9ubHkgdGhlIGlkcyB0aGF0IGFyZSBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBbLi4uY2hlY2tCb3hlc11cclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGJveCA9PiBib3guY2hlY2tlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGJveCA9PiBib3guaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEluZGV4VGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZEluZGV4VGFibGUocHJvamVjdHMsIGZpbHRlcmVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRTZWxBbGxDaGVja2JveCgpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSB0aGlzLl9pbmRleFRhYi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuX3Byb2plY3RGaWx0ZXJDbGFzcyk7XHJcbiAgICAgICAgY29uc3Qgc2VsQWxsID0gZmlsdGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNzZWxBbGwnKTtcclxuXHJcbiAgICAgICAgc2VsQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbEFsbC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgY2hlY2tib3hlcywgdHVybiBvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsQ2hlY2tzID0gZmlsdGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENoZWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGFsbENoZWNrc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm94LmlkID09PSAnc2VsTm9uZScpIGJveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm94LmlkICE9PSAnc2VsQWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfYmluZFNlbE5vbmVDaGVja2JveCgpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSB0aGlzLl9pbmRleFRhYi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuX3Byb2plY3RGaWx0ZXJDbGFzcyk7XHJcbiAgICAgICAgY29uc3Qgc2VsTm9uZSA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc2VsTm9uZScpO1xyXG5cclxuICAgICAgICBzZWxOb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbE5vbmUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIGNoZWNrYm94ZXMsIHR1cm4gb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrcyA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDaGVja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBhbGxDaGVja3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveC5pZCA9PT0gc2VsTm9uZS5pZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGVzIFByb2plY3QgdGFiIGNvbnRhaW5lciB3aXRoIGNvbnRlbnQgYW5kIHNsaWRlcyBpbnRvIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gezxkaXY+fSBodG1sQ29udGVudCAuLi4gaHRtbCBkaXYgY29udGFpbmluZyBhbGwgcGFnZSBsYXlvdXQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgZGlzcGxheVByb2plY3QoaHRtbENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25DbGFzcyA9ICdzbGlkZUluRnJvbVJpZ2h0JztcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IHRoaXMuX3Byb2plY3RUYWIucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgLy9pZiBwcm9qZWN0IHBhZ2UgYWxyZWFkeSBzaG93biwgc2xpZGUgb3V0LCBzd2FwIGNvbnRlbnQgYW5kIHNsaWRlIGJhY2sgaW4uXHJcbiAgICAgICAgLy90aW1lb3V0IGFkZGVkIHRvIGFsbG93IGFuaW1hdGlvbiB0byBmaW5pc2guXHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKGFuaW1hdGlvbkNsYXNzKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVBbGxDaGlsZHJlbihjb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9hZGRDbG9zZVByb2plY3RCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGVudENvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gdGhpcy5fYWRkQ2xvc2VQcm9qZWN0QnV0dG9uKCk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENsb3NlUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjbG9zZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2xvc2VQcm9qZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5hcHBlbmRDaGlsZChjbG9zZVByb2plY3QpO1xyXG5cclxuICAgICAgICBjbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvc2VQcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSAgIFVUSUxJVFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5W09iamVjdF19IHByb2plY3REYXRhIC4uLiBmaWVsZCBsYWJlbGVkICdjYXRlZ29yaWVzJyByZXF1aXJlZFxyXG4gICAgICogQHJldHVybnMgYW4gYXJyYXkgb2YgdW5pcXVlIGNhdGVnb3JpZXNcclxuICAgICAqL1xyXG4gICAgIF9nZXRVbmlxdWVDYXRlZ29yaWVzKHByb2plY3REYXRhKSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgcHJvamVjdERhdGEuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgcC5jYXRlZ29yaWVzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oY2F0ZWdvcmllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGVhciBhbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqL1xyXG4gICAgICAgIF9yZW1vdmVBbGxDaGlsZHJlbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdVSTsiLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOb2RlIHtcclxuICAgIHZhbHVlID0gbnVsbDtcclxuICAgIG5leHQgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcclxuICAgIC8vVE9ETzogaW1wbGVtZW50IGl0ZXJhdG9yXHJcbiAgICBfaGVhZCA9IG51bGw7XHJcbiAgICBfc2l6ZSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1c2godmFsKSB7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUodmFsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hlYWQgPT09IG51bGwpIHRoaXMuX2hlYWQgPSBub2RlO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2l0ZXJhdGUgdG8gbGFzdCBub2RlXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5faGVhZDtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2l6ZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW5zZXJ0IHZhbHVlIGFmdGVyIHNwZWNpZmllZCBpbmRleC4gSWYgbGlzdCBpcyBzaG9ydGVyIHRoYW4gaW5kZXgsIFxyXG4gICAgLy92YWx1ZSB3aWxsIGJlIHB1c2hlZCB0byB0aGUgZW5kLlxyXG4gICAgaW5zZXJ0KHZhbCwgaWR4KSB7XHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuX2hlYWQ7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWR4ICYmIGN1cnJlbnQgIT09IG51bGw7IGkrKyl7XHJcbiAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbiA9IG5ldyBOb2RlKHZhbCk7XHJcbiAgICAgICAgcHJldi5uZXh0ID0gbjtcclxuICAgICAgICBuLm5leHQgPSBjdXJyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl9zaXplKys7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZUF0KGlkeCl7XHJcbiAgICAgICAgaWYgKGlkeCA+PSB0aGlzLl9zaXplIHx8IGlkeCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuX2hlYWQ7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWR4ICYmIGN1cnJlbnQgIT09IG51bGw7IGkrKyl7XHJcbiAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2Lm5leHQgPSBjdXJyZW50Lm5leHQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpemUtLTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBwYXNzIGluIGZ1bmN0aW9uIGZvciBjb21wYXJpbmcgdHdvIGVsZW1lbnRzIHJlcXVpcmVkLCBhc1xyXG4gICAgZXF1YWxpdHkgZm9yIHR3byBvYmplY3RzIGlzIG5vdCBjbGVhciBjdXQuICovXHJcbiAgICBkZWxldGUodmFsLCBmdW5jKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9oZWFkO1xyXG5cclxuICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZnVuYyh2YWwsIGN1cnJlbnQubmV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IGN1cnJlbnQubmV4dC5uZXh0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NpemUtLTtcclxuICAgIH1cclxuXHJcbiAgICBhdChpZHgpIHtcclxuICAgICAgICBsZXQgY3VyciA9IHRoaXMuX2hlYWQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHggJiYgY3VyciAhPT0gbnVsbDsgaSsrKXtcclxuICAgICAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnIudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEhlYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEhlYWQodmFsKSB7XHJcbiAgICAgICAgdGhpcy5faGVhZCA9IG5ldyBOb2RlKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9ICAgXHJcbn1cclxuIiwiY2xhc3MgTW9kZWwge1xyXG5cclxuICAgIF9wcm9qZWN0cyA9IG51bGw7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fcHJvamVjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLmFkZFByb2plY3RzKHByb2plY3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KGtleSwgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RzLnNldChrZXksIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRQcm9qZWN0cyA9IChuZXdQcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIGlmICghbmV3UHJvamVjdHMgaW5zdGFuY2VvZiBNYXApIHRocm93IFwiTXVzdCBiZSBhIG1hcFwiO1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm9qZWN0cyAhPT0gbnVsbCAmJiB0aGlzLl9wcm9qZWN0cy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbWVyZ2VkID0gbmV3IE1hcChbdGhpcy5fcHJvamVjdHMsIG5ld1Byb2plY3RzXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2plY3RzID0gbWVyZ2VkO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9wcm9qZWN0cyA9PT0gbnVsbClcclxuICAgICAgICB0aGlzLl9wcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHJlbGV2YW50IGluZm9ybWF0aW9uIGZyb20gZWFjaCBwcm9qZWN0IHRvIGJ1aWxkIGFuIGluZGV4IHRhYmxlLFxyXG4gICAgLy9yZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHNcclxuICAgICAqL1xyXG4gICAgZ2V0IFByb2plY3RJbmRleCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcHJvamVjdHMgPT09IG51bGwpIHRocm93ICdObyBwcm9qZWN0cyBhZGRlZCEnO1xyXG5cclxuICAgICAgICBsZXQgZW50cmllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IFtrZXksIHByb2plY3RdIG9mIHRoaXMuX3Byb2plY3RzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrZXkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9qZWN0LlRpdGxlLFxyXG4gICAgICAgICAgICAgICAgeWVhcjogcHJvamVjdC5ZZWFyLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHByb2plY3QuTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBwcm9qZWN0LkNhdGVnb3JpZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHMuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUHJvamVjdENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzLmtleXMoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsIiwiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gXCIuL0xpbmtlZExpc3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHJcbiAgICBfdGl0bGUgPSAnbm9uZSc7XHJcbiAgICBfc3VidGl0bGUgPSAnJztcclxuICAgIF95ZWFyID0gMDtcclxuICAgIF9sb2NhdGlvbiA9ICcnO1xyXG4gICAgX2NhdGVnb3JpZXMgPSBudWxsO1xyXG4gICAgX2NvbnRlbnQgPSBudWxsO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgeWVhciwgbG9jYXRpb24pe1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5feWVhciA9IHllYXI7XHJcbiAgICAgICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQgPSBuZXcgTGlua2VkTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYXRlZ29yeSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiBkZWxldGUgc3VjY2Vzc2Z1bC5cclxuICAgIHJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXMuZGVsZXRlKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQ29udGVudChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGVudC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hDb250ZW50cygpIHtcclxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaENvbnRlbnQoYXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnNlcnRDb250ZW50KGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGVudC5pbnNlcnQoZWxlbWVudCwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNvbnRlbnQoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0dGVycywgU2V0dGVyc1xyXG4gICAgZ2V0IENhdGVnb3JpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgVGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTdWJ0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VidGl0bGU7XHJcbiAgICB9XHJcbiAgICBzZXQgU3VidGl0bGUodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fc3VidGl0bGUgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFllYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3llYXI7XHJcbiAgICB9XHJcbiAgICBnZXQgTG9jYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBIdG1sQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuX2NvbnRlbnQuSGVhZDtcclxuICAgICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvbnRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgQ29udGVudENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50LlNpemU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuY29uc3QgbG9hZEFib3V0VGFiID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgY29uc3QgbGVmdEVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRFZGdlLmNsYXNzTGlzdC5hZGQoJ2xlZnRFZGdlJylcclxuICAgIGxlZnRFZGdlLnRleHRDb250ZW50ID0gJ2luZm9ybWF0aW9uJztcclxuXHJcbiAgICBjb25zdCBhYnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFidENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dENvbnRhaW5lcicpO1xyXG5cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGN2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XHJcbiAgICBjdi50ZXh0Q29udGVudCA9IFwiRG93bmxvYWQgQ1ZcIjtcclxuXHJcbiAgICBjb25zdCBpbnN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGluc3RhLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Rhb2xlLmNoZW4vJyk7XHJcbiAgICBpbnN0YS50ZXh0Q29udGVudCA9ICdJbnN0YWdyYW0nO1xyXG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpbmtzJyk7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmQoY3YsIGluc3RhKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWJvdXQwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXQwLmlubmVySFRNTCA9IFxyXG4gICAgICAgICc8YnI+SSBhbSBjdXJyZW50bHkgb3BlbiBmb3IgbmV3IHByb2plY3RzLiBJZiB5b3VcXCdyZSBsb29raW5nIHRvIGNvbGxhYm9yYXRlLCBwbGVhc2UgZmVlbCBmcmVlIHRvIDxhIGhyZWY9XCIjXCI+Z2V0IGluIHRvdWNoITwvYT48YnI+JztcclxuICAgIGNvbnN0IGFib3V0MSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgXCJJIGFtIGEgbXVsdGktZGlzY2lwbGluYXJ5IGRlc2lnbmVyL3NvZnR3YXJlIGRldmVsb3BlciB3aXRoIGEgc3Ryb25nIGZvY3VzIG9uIGNvbXB1dGF0aW9uYWwgZ2VvbWV0cnkgYW5kIGZhYnJpY2F0aW9uLiBQcmV2aW91c2x5LCBJIGhhdmUgd29ya2VkIGF0IGludGVybmF0aW9uYWwgYXJjaGl0ZWN0dXJhbCBwcmFjdGljZXMsIG1vc3Qgbm90YWJseSBaYWhhIEhhZGlkIEFyY2hpdGVjdHMgaW4gTG9uZG9uLCBkZXZlbG9waW5nIGJlc3Bva2UgZGVzaWduIHNvbHV0aW9ucyBhbmQgcHJvamVjdC1zcGVjaWZpYyBzb2Z0d2FyZSB0b29scy4gSSBoYXZlIGFsc28gY29sbGFib3JhdGVkIHdpdGggc21hbGxlciBwcmFjdGljZXMgaW4gYXJjaGl0ZWN0dXJlIGFuZCBmYWJyaWNhdGlvbiBhcyBhbiBpbmRlcGVuZGVudCBjb25zdWx0YW50IHRvIGltcHJvdmUvZXN0YWJsaXNoIGNvbXB1dGF0aW9uYWwgd29ya2Zsb3cgaW50ZWdyYXRpb24uXCIpO1xyXG4gICAgY29uc3QgaW50cm8yID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLFxyXG4gICAgICAgIFwiSSBob2xkIGEgTUFyY2ggaW4gQXJjaGl0ZWN0dXJlIGFuZCBVcmJhbmlzbSBmcm9tIHRoZSBBcmNoaXRlY3R1cmFsIEFzc29jaWF0aW9uIGluIExvbmRvbiBVSyBhbmQgYSBCQXJjaCBpbiBBcmNoaXRlY3R1cmUgd2l0aCBoaWdoIGRpc3RpbmN0aW9uIGZyb20gdGhlIENhbGlmb3JuaWEgQ29sbGVnZSBvZiB0aGUgQXJ0cyBpbiBTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLiBBZnRlciBnZXR0aW5nIG1vcmUgYW5kIG1vcmUgaW52b2x2ZWQgd2l0aCB0aGUgZGV2ZWxvcG1lbnQgc2lkZSBhbmQgdGhlIGV4Y2l0aW5nIHBvc3NpYmlsaXRlcyBvZiBtYXJyeWluZyBkZXNpZ24gd2l0aCBjb21wdXRhdGlvbiwgSSBkZWNpZGVkIHRvIHB1cnN1ZSBjb250aW51ZWQgZWR1Y2F0aW9uIGluIENvbXB1dGVyIFNjaWVuY2UgYXQgSW1wZXJpYWwgQ29sbGVnZSBMb25kb24sIHdoZXJlIEkgY29tcGxldGVkIGEgTVNjIGluIENvbXB1dGluZywgd2l0aCBhIGZvY3VzIG9uIGNvbXB1dGVyIGdyYXBoaWNzIGFuZCBNYWNoaW5lIExlYXJuaW5nLlwiKTsgXHJcblxyXG4gICAgYWJ0Q29udGFpbmVyLmFwcGVuZChsaW5rc0NvbnRhaW5lciwgYWJvdXQwLCBhYm91dDEsIGludHJvMik7XHJcbiAgICBjb25zdCBiaW9ncmFwaHlUaXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiQmlvZ3JhcGh5XCIpO1xyXG5cclxuICAgIGNvbnN0IGJpbzAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiR3Jvd2luZyB1cCBiZXR3ZWVuIGN1bHR1cmVzIGFuZCBzdGlsbCBmb2xsb3dpbmcgYSBnbG9iZS10cm90dGluZyBsaWZldHlsZSBpbiBhZHVsdGhvb2QgKEF1c3RyaWEsIENoaW5hLCBVUywgVUsgYW5kIGNvdW50aW5nKSwgbXkgbXVsdGktY3VsdHVyYWwgZXhwZXJpZW5jZSBoYXMgcGVyaGFwcyBnaXZlbiBtZSBhIHVuaXF1ZSBwZXJzcGVjdGl2ZSBvbiBtYXR0ZXJzLiBJIG9mdGVuIHRyeSB0byBzZWUgYW5kIHVuZGVyc3RhbmQgdGhlIGNvbXBsZXggc3lzdGVtcyB0aGF0IHdlYXZlIHRocm91Z2ggb3VyIGVudmlyb25tZW50cywgYW5kIGNvbnNlcXVlbnRseSBJIGJlbGlldmUgdGhhdCBkZXNpZ24gc2hvdWxkIGJlIGFwcHJvYWNoZWQgZnJvbSBhIHN5c3RlbWljIHBlcnNwZWN0aXZlLCByYXRoZXIgdGhhbiB0aGUgcHJldmFpbGluZyBkZXNpZ24tYXMtYS1tb251bWVudCBwYXJhZGlnbS5cIik7XHJcbiAgICBjb25zdCBiaW8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJpbzIuaW5uZXJIVE1MID0gJ0kgaGF2ZSBhIGtlZW4gaW50ZXJlc3QgaW4gZGVzaWduIHJlc2VhcmNoIGFuZCBmYWJyaWNhdGlvbi4gTXkgc3BlY2lhbGl6YXRpb24gaXMgaW4gYWRkaXRpdmUgbWFudWZhY3R1cmluZyBhbmQgQUkgaW4gYXJjaGl0ZWN0dXJlLCBoYXZpbmcgZG9uZSB0d28gbWFzdGVyIHRoZXNpcyBvbiB0aGUgdG9waWMgYW5kIGhhdmluZyBsZWQgd29ya3Nob3BzIGF0IHVuaXZlcnNpdGllcyBhcm91bmQgdGhlIGdsb2JlIChGb3IgbW9yZSBkZXRhaWxzLCBwbGVhc2UgY2hlY2sgb3V0IHRoZSBQcm9qZWN0cyBzZWN0aW9uKS4gSSBhbSBhbHdheXMgb24gdGhlIGxvb2tvdXQgZm9yIGNvbnRpbnVlZCByZXNlYXJjaCBvcHBvcnR1bml0aWVzLCBzbyBwbGVhc2UgZG9uXFwndCBoZXNpdGF0ZSB0byA8YSBocmVmPVwiI1wiPmRyb3AgbWUgYSBtZXNzYWdlITwvYT4nO1xyXG4gICAgY29uc3QgYmlvMSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgXCJJIGFtIGZhc2NpbmF0ZWQgYnkgdGhlIGNvbmNlcHQgb2YgdGhlIFJlbmFpc3NhbmNlIE1hbiBhbmQgSSBlbmpveSBpbmR1bGdpbmcgaW4gdGhlIHB1cnN1aXQgb2YgZGl2ZXJnaW5nIGludGVyZXN0cyBpbiBteSBmcmVlIHRpbWUuIE15IG9yaWdpbnMgYXJlIGluIHRoZSBmaW5lIGFydHMuIEhhdmluZyBwYWludGVkLCBkcmF3biBhbmQgc2N1bHB0ZWQgYWxsIG15IGNoaWxkaG9vZCwgSSB3YXMgb3JpZ2luYWxseSBwbGFubmluZyB0byBzdGFydCBhIGNhcmVlciBpbiBwYWludGluZy4gSG93ZXZlciwgdGhlIGJyZWFkdGggYW5kIHJpZ29yIG9mIHRoZSBhcmNoaXRlY3R1cmFsIGVkdWNhdGlvbiB3YXMgbW9yZSBhcHBlYWxpbmcgdG8gbWUsIHNvIEkgcGl2b3RlZCBlYXJseSBvbi4gSSBoYXZlIG5vdCBnaXZlbiB1cCBteSBwYXNzaW9uIGluIHRoZSBhcnRzIGFuZCBJIHN0aWxsIHByYWN0aWNlIHdoZW5ldmVyIEkgY2FuLiBNeSBob3BlIGlzIHRoYXQgc29tZSBkYXkgSSBjYW4gZmluZCBhIGhhcHB5LCBhbWFsZ2FtYXRpbmcgbWVkaXVtIGJldHdlZW4gYWxsIG15IGludGVyZXN0cyBhbmQgY3JlYXRlIHNvbWV0aGluZyBub3ZlbCBhbmQgbWVhbmluZ2Z1bC5cIik7XHJcbiAgICAgICAgXHJcbiAgICBhYnRDb250YWluZXIuYXBwZW5kKGJpb2dyYXBoeVRpdGxlLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpLCBiaW8wLCBiaW8yLCBiaW8xKTtcclxuICAgIGFib3V0VGFiLmFwcGVuZChsZWZ0RWRnZSwgYWJ0Q29udGFpbmVyKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhYm91dFRhYik7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0VGFiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRUYWI7IiwiY29uc3QgbG9hZEZvb3RlciA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiVGhpcyBwYWdlIHdhcyBkZXNpZ25lZCBhbmQgYnVpbHQgYnkgbWUgOikgQWxsIHJpZ2h0cyByZXNlcnZlZCDCqSBUYW9sZSBDaGVuXCI7XHJcbiAgICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCk7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRGb290ZXI7IiwiY29uc3QgbG9hZEluZGV4VGFiID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXhUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZGV4VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmRleCcpO1xyXG5cclxuICAgIGNvbnN0IHRvcGVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcGVkZ2UuY2xhc3NMaXN0LmFkZCgndG9wRWRnZScpO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGaWx0ZXInKTtcclxuXHJcbiAgICBjb25zdCBpbmRleFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgaW5kZXhUYWJsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW5kZXhUYWJsZScpO1xyXG5cclxuICAgIGluZGV4VGFiLmFwcGVuZCh0b3BlZGdlLCBmaWx0ZXJDb250YWluZXIsIGluZGV4VGFibGUpO1xyXG4gICAgXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5kZXhUYWIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaW5kZXhUYWI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEluZGV4VGFiOyIsImltcG9ydCBsb2FkUmV0dXJuQXJyb3cgZnJvbSBcIi4vbG9hZFJldHVybkFycm93XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbmNvbnN0IGxvYWRMZWZ0TWFpbiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBsZWZ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIsIFwibGVmdFwiKTtcclxuXHJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbXlOYW1lLnRleHRDb250ZW50ID0gJ1Rhb2xlIENoZW4nO1xyXG5cclxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gJ2Rlc2lnbiB8IGNvZGUgfCBhcnQnO1xyXG5cclxuICAgIGJhbm5lci5hcHBlbmQobXlOYW1lLCBzdWJ0aXRsZSk7XHJcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGludHJvLnRleHRDb250ZW50ID0gXCJJIGFtIGEgbXVsdGktZGlzY2lwbGluYXJ5IGRlc2lnbmVyIG9wZXJhdGluZyBhdCB0aGUgaW50ZXJzZWN0aW9uIG9mIGRlc2lnbiwgdGVjaG5vbG9neSBhbmQgYXJ0LiBJIGxpa2UgdG8gc29sdmUgcHJvYmxlbXMgYW5kIGJ1aWxkIHRoaW5ncy4gSSBhbSBwcm9mZXNzaW9uYWxseSB0cmFpbmVkIGluIGFyY2hpdGVjdHVyZSBhbmQgY29tcHV0ZXIgc2NpZW5jZS4gXCI7XHJcblxyXG4gICAgY29uc3QgYnRuX3Byb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bl9wcm9maWxlLmlkID0gJ2J0bl9wcm9maWxlJztcclxuICAgIGNvbnN0IHByb2ZpbGVUZXh0ID0gY3JlYXRlRWxlbWVudFRleHQoJ2RpdicsIFwiRnVsbCBQcm9maWxlXCIpOyAgIFxyXG4gICAgYnRuX3Byb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZVRleHQpO1xyXG5cclxuICAgIGNvbnN0IHJldHVybkFycm93ID0gbG9hZFJldHVybkFycm93KGJ0bl9wcm9maWxlKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5hcHBlbmQoYmFubmVyLCBpbnRybywgYnRuX3Byb2ZpbGUpO1xyXG5cclxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIGxlZnRDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTGVmdE1haW47IiwiY29uc3QgbG9hZFByb2plY3RBcnJvdyA9IChwYXJlbnQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ3Byb2plY3RBcnJvdyc7XHJcblxyXG4gICAgY29uc3QgbGlua0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGlua0Fycm93LmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2Fycm93Jyk7XHJcbiAgICBsaW5rQXJyb3cuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuXHJcbiAgICBjb25zdCBsaW5rTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxpbmtMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2xpbmUnKTtcclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGlua1RleHQuY2xhc3NMaXN0LmFkZCgnbGlua19fdGV4dCcpO1xyXG4gICAgbGlua1RleHQudGV4dENvbnRlbnQgPSAncHJvamVjdHMnO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQobGlua0Fycm93LCBsaW5rTGluZSwgbGlua1RleHQpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3RBcnJvdzsiLCJjb25zdCBsb2FkUHJvamVjdFRhYiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhYicpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0RWRnZS5jbGFzc0xpc3QuYWRkKCdsZWZ0RWRnZScpO1xyXG4gICAgbGVmdEVkZ2UudGV4dENvbnRlbnQgPSAnY2xvc2UnXHJcblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJyk7XHJcblxyXG4gICAgcHJvamVjdFRhYi5hcHBlbmQobGVmdEVkZ2UsIHByb2plY3RDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XHJcbiAgICByZXR1cm4gcHJvamVjdFRhYjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0VGFiOyIsImNvbnN0IGxvYWRSZXR1cm5BcnJvdyA9IChwYXJlbnQpID0+IHtcclxuICAgIC8vIHZhcmlhYmxlIGZvciB0aGUgbmFtZXNwYWNlIFxyXG4gICAgY29uc3Qgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAvLyBtYWtlIGEgc2ltcGxlIHJlY3RhbmdsZVxyXG4gICAgbGV0IHJldHVybkFycm93U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnc3ZnJyk7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiNTBcIik7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiNTBcIik7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMFwiKTtcclxuICAgIHJldHVybkFycm93U3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEwMFwiKTtcclxuICAgIC8vIHJldHVybkFycm93U3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjNWNjZWVlXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTIyLDI5LjVoLTkuNWMtNi42MjcsMC0xMi01LjM3My0xMi0xMlYwXCIpO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1taXRlcmxpbWl0JywgXCIxMFwiKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCdmaWxsJywgXCJub25lXCIpO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIFwiIzAwMDAwMFwiKTtcclxuXHJcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdjaXJjbGUnKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2N4JywgXCIyOS44NzVcIik7XHJcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdjeScsIFwiMjkuMTI1XCIpO1xyXG4gICAgZG90LnNldEF0dHJpYnV0ZSgncicsIFwiNy44NzVcIik7XHJcbiAgICAvLyBkb3Quc2V0QXR0cmlidXRlKCdmaWxsJywgXCIjMDAwMDAwXCIpO1xyXG4gICAgZG90LnNldEF0dHJpYnV0ZSgnZmlsbCcsIFwibm9uZVwiKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIFwiIzAwMDAwMFwiKTtcclxuXHJcbiAgICByZXR1cm5BcnJvd1N2Zy5hcHBlbmQobGluZSxkb3QpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJldHVybkFycm93U3ZnKTtcclxuXHJcbiAgICByZXR1cm4gcmV0dXJuQXJyb3dTdmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFJldHVybkFycm93OyIsImNvbnN0IGxvYWRSaWdodE1haW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIHJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIsIFwicmlnaHRcIik7XHJcblxyXG4gICAgY29uc3QgY2lyY2xlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaXJjbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlQ29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGMxLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xyXG4gICAgYzEuY2xhc3NMaXN0LmFkZCgnY2lyY2xlRGVzaWduJyk7XHJcbiAgICBjb25zdCBjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYzIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XHJcbiAgICBjMi5jbGFzc0xpc3QuYWRkKCdjaXJjbGVDb2RlJyk7XHJcbiAgICBjb25zdCBjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYzMuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XHJcbiAgICBjMy5jbGFzc0xpc3QuYWRkKCdjaXJjbGVBcnQnKTtcclxuXHJcbiAgICBjaXJjbGVDb250YWluZXIuYXBwZW5kKGMxLCBjMiwgYzMpO1xyXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kKGNpcmNsZUNvbnRhaW5lcik7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gcmlnaHRDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUmlnaHRNYWluOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCBhYWdfY292ZXIgZnJvbSAnLi4vYXNzZXRzL2FhZy9hYWdfY292ZXIuanBnJ1xyXG5cclxuY29uc3QgYWFnID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcclxuICAgICAgICBcIkZvcm13b3JrLUZyZWUgYW5kIE1vcnRhci1GcmVlIFNoZWxsIEFzc2VtYmx5XCIsIFxyXG4gICAgICAgIDIwMTgsIFxyXG4gICAgICAgIFwiR290aGVuYnVyZyBTd2VkZW5cIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImRlc2lnblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJ0ZWFjaGluZ1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJmYWJyaWNhdGlvblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdGkgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IGludHJvaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGludHJvaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbiAgICBjb25zdCBpbWdfY292ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ19jb3Zlci5zcmMgPSBhYWdfY292ZXI7XHJcbiAgICAvL0lOVFJPXHJcbiAgICBjb25zdCBpbnRybzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGludHJvMS50ZXh0Q29udGVudCA9IFwiRm9ybXdvcmstRnJlZSBhbmQgTW9ydGFyLUZyZWUgU2hlbGwgQXNzZW1ibHkgaXMgYSB3b3Jrc2hvcCBJIGxlZCBpbiBHb3RoZW5idXJnLCBTd2VkZW4sIGZvciB0aGUgQWR2YW5jZXMgaW4gQXJjaGl0ZWN0dXJhbCBHZW9tZXRyeSBDb25mZXJlbmNlIGluIDIwMTguXCI7XHJcbiAgICBjb25zdCBpbnRybzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGludHJvMi50ZXh0Q29udGVudCA9IFwiVGhlIG9iamVjdGl2ZSB3YXMgdG8gZGVtb25zdHJhdGUgdG8gc3R1ZGVudHMgdGhlIHdvcmtpbmdzIGFuZCBiZW5lZml0cyBvZiB0aGUgY29tcHV0YXRpb25hbCBkZXNpZ24gcGFyYWRpZ20gdGhhdCBhbGxvd3Mgc2VhbWxlc3MgaW50ZWdyYXRpb24gYmV0d2VlbiBkZXNpZ24sIGZhYnJpY2F0aW9uIGFuZCBhc3NlbWJseSBpbiBzZXR0aW5ncyB3aGVyZSBtYW55IGNvbXBsZXggY29uc3RyYWludHMgY29tZSB0b2dldGhlciwgdGh1cyBtYWtpbmcgaXQgdW5zdWl0YWJsZSBmb3IgY29udmVudGlvbmFsLCBhbmFsb2cgZGVzaWduIG1ldGhvZG9sb2dpZXMuIFBlZGFnb2dpY2FsbHksIHRoZSBzdHVkZW50cyBleHBlcmllbmNlZCBpdCBmaXJzdGhhbmQgYnkgZGVzaWduaW5nIGZ1bmljdWxhciBzaGVsbCBzdHJ1Y3R1cmVzIHRoYXQgaG9sZCB0b2dldGhlciB3aXRob3V0IGZvcm13b3JrIGFzc2VtYmx5IGFuZCBtb3J0YXIgdGhyb3VnaCBhIHBhcmFtZXRyaWMgbW9kZWwgdGhhdCBlbWJlZHMgZmFicmljYXRpb24gZGF0YSwgc3Vic2VxdWVudGx5IHNlbmRpbmcgdGhlaXIgZGVzaWduIGVsZW1lbnRzIHRvIGEgcm9ib3RpYyBhcm0gZm9yIGhvdHdpcmUgZmFicmljYXRpb24uIFRoaXMgcmVzdWx0cyBpbiBhIHRpZ2h0IGZlZWRiYWNrIGxvb3Agd2hlcmUgc3R1ZGVudHMgd2VyZSBhYmxlIHRvIHNlZSB0aGUgZWZmZWN0cyBvZiB0aGVpciBkZXNpZ24gZGVjaXNpb25zIGluIGEgcmVhbC13b3JsZCBwcm90b3R5cGUgd2l0aCBhIG1pbmltYWwgZGVsYXkgYW5kIGFkYXB0IHRoZWlyIGRlc2lnbiBpbiB0aGUgbmV4dCBpdGVyYXRpb24uXCI7IFxyXG4gICAgLy9GZWF0dXJlc1xyXG4gICAgY29uc3QgZmVhdHVyZXNIZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoXCJoMlwiLCAnRmVhdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZmVhdDEgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdCZXNwb2tlIEdyYXNzaG9wcGVyIHBsdWdpbiBwcm92aWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGNyZWF0aW9uIG9mIHNoZWxsIHNlZ21lbnRzIHJlYWR5IGZvciBmYWJyaWNhdGlvbicpO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdJbnRlZ3JhdGVzIFNwYXRpYWxTbHVyLCBhIGdlb21ldHJpYyBkYXRhIG1hbmlwdWxhdGlvbiBsaWJyYXJ5Jyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1NoZWxsIHN0cnVjdHVyYWwgZXZhbHVhdGlvbiBpbXBsZW1lbnRpbmcgdGhydXN0IG5ldHdvcmsgYW5hbHlzaXMgb24gaGFsZi1lZGdlIG1lc2ggc3RydWN0dXJlcycpO1xyXG4gICAgY29uc3QgZmVhdDQgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdJbnRlZ3JhdGlvbiB3aXRoIGN1c3RvbS1tYWRlIHJvYm90aWMgaG90d2lyZS1jdXR0ZXInKTtcclxuICAgIGZlYXR1cmVzLmFwcGVuZChmZWF0MSwgZmVhdDIsZmVhdDMsIGZlYXQ0KTtcclxuICAgIC8vVGVjaG5vbG9naWVzXHJcbiAgICBjb25zdCB0ZWNoSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsICdUZWNobm9sb2dpZXMnKTtcclxuICAgIGNvbnN0IHRlY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGVjaDEgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnQyMnKTtcclxuICAgIGNvbnN0IHRlY2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0t1a2FQUkMgZm9yIHJvYm90aWMga2luZW1hdGljIHNpbXVsYXRpb24gYW5kIEdDb2RlIGdlbmVyYXRpb24nKTtcclxuICAgIGNvbnN0IHRlY2gzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ1NwYXRpYWxTbHVyJyk7XHJcbiAgICBjb25zdCB0ZWNoNCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdIYWxmLWVkZ2UgbWVzaCBzdHJ1Y3R1cmUgdG8gZmFjaWxpYXRlIGdlb21ldHJpYyBvcGVyYXRpb25zIGFuZCBmb3JjZSBzaW11bGF0aW9uJyk7XHJcbiAgICB0ZWNoLmFwcGVuZCh0ZWNoMSwgdGVjaDIsIHRlY2gzLHRlY2g0KTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aSwgaW1nX2NvdmVyLCBpbnRyb2hlYWRpbmcsIGludHJvMSwgaW50cm8yLCBcclxuICAgICAgICBmZWF0dXJlc0hlYWRpbmcsIGZlYXR1cmVzLCB0ZWNoSGVhZGluZywgdGVjaCk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFhZzsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL1Byb2plY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCwgY3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgZGlhZ3JhbV9jbGFzc2VzIGZyb20gJy4uL2Fzc2V0cy9sYmQvSGl2ZU1pbmRDbGFzc2VzLmpwZyc7XHJcblxyXG5jb25zdCBkcm9uZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiTGVhcm5pbmctQmFzZWQgRGVzaWduXCIsIDIwMjIsIFwiTG9uZG9uLCBVS1wiKTtcclxuXHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYWNhZGVtaWNcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYWRkaXRpdmUgbWFudWZhY3R1cmluZ1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcIkFJXCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIkltcGxlbWVudGluZyBhIExlYXJuaW5nLUJhc2VkIENoYW5nZSBEZXRlY3Rpb24gRnJhbWV3b3JrIGZvciBhIFNlbGYtQ29ycmVjdGl2ZSBCZWhhdmlvdXJhbCBNb2RlbCBpbiBBZXJpYWwgQWRkaXRpdmUgTWFudWZhY3R1cmluZyB8IEltcGVyaWFsIENvbGxlZ2UgTWFzdGVyIFRoZXNpc1wiO1xyXG5cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsIHByb2ouVGl0bGUpO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCBwcm9qLlN1YnRpdGxlKTtcclxuICAgIGNvbnN0IHllYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBZZWFyOiAnICsgcHJvai5ZZWFyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgTG9jYXRpb246ICcgKyBwcm9qLkxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjb3ZlciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiSW50cm9kdWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdMZWFybmluZy1CYXNlZCBEZXNpZ24gd2FzIG15IG1hc3RlciB0aGVzaXMgZm9yIHRoZSBNU2MgaW4gQ29tcHV0aW5nIGF0IEltcGVyaWFsIENvbGxlZ2UgTG9uZG9uLiBEdWUgdG8gdGhlIGNvbmZpZGVudGlhbCBuYXR1cmUgb2YgdGhlIHByb2plY3QsIEkgYW0gbm90IGFibGUgdG8gcHVibGlzaCBhbnkgY29uY3JldGUgcmVzdWx0cywgaG93ZXZlciwgSSB3aWxsIGluY2x1ZGUgaGVyZSBzb21lIGdlbmVyYWwgaW5mb3JtYXRpb24gYW5kIHRlY2hub2xvZ2llcyB1c2VkLiBJZiB0aGVyZSBpcyBpbnRlcmVzdCwgcGxlYXNlIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIGZvciBmdXJ0aGVyIGRpc2N1c3Npb24gd2hpbGUgYXZvaWRpbmcgYW55IHNlbnNpdGl2ZSB0b3BpY3MgOikuJyk7XHJcblxyXG4gICAgY29uc3QgdGVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVhbS5pbm5lckhUTUwgPSAnPHN0cm9uZz5UZWFtOjwvc3Ryb25nPiBUYW9sZSBDaGVuLCBZdXN1ZiBLYXlhLCBMYWNobGFuIE9ycjxicj48c3Ryb25nPkFkdmlzb3I6PC9zdHJvbmc+RHIuICAgQmFzYXJhbiBCYWhhZGlyIEtvY2VyPGJyPkluIGNvbGxhYm9yYXRpb24gd2l0aCB0aGUgPGEgaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW1wZXJpYWwuYWMudWsvYWVyb25hdXRpY3MvYWJvdXQvXCI+SW1wZXJpYWwgQWVyb25hdXRpY3MgRGVwYXJ0bWVudDwvYT4gYW5kIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbXBhLmNoL3dlYi9lbXBhL3Jlc2VhcmNoLWFyZWFzXCI+RU1QQTwvYT4nO1xyXG5cclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRpdGxlLCBzdWJ0aXRsZSwgeWVhciwgbG9jYXRpb24sIGNvdmVyLCBpbnRyb0hlYWRpbmcsIGludHJvLCB0ZWFtKTtcclxuXHJcbiAgICBjb25zdCBzdW1tYXJ5SGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFwiU3VtbWFyeVwiKTtcclxuICAgIC8vIGNvbnN0IG5laWdoc3ViSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNCcsICdUaGUgQnVpbGRpbmcgYXMgYSBOZXR3b3JrJylcclxuICAgIGNvbnN0IHN1bTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdW0wLmlubmVySFRNTCA9IFxyXG4gICAgICAgICdUaGUgcHJvamVjdCBzaXR1YXRlcyBkZXNpZ24gaW4gdGhlIGNvbnRleHQgb2YgSW5kdXN0cnkgNC4wIGFuZCB0aGUgcmFkaWNhbGx5IG5ldyBkaXNjaXBsaW5lIG9mIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFlcmlhbC1hYm0uY29tL1wiPkFlcmlhbCBBZGRpdGl2ZSBCdWlsZGluZyBNYW51ZmFjdHVyaW5nPC9hPi4gV2l0aCB0aGUgcHJvbGlmZXJhdGlvbiBvZiBkaWdpdGFsIHRlY2hub2xvZ2llcyBpbiB0aGUgQUVDIGluZHVzdHJ5LCB0aGUgZnV0dXJlIHRyYWplY3Rvcnkgb2YgdGhlIGluZHVzdHJ5IGlzIHBvaW50aW5nIHRvd2FyZHMgYXV0b25vbW91cywgY2xvc2VkLWxvb3Agcm9ib3RpYyBzeXN0ZW1zLCBjcmVhdGluZyB0aGUgbmVlZCB0byBkZXZlbG9wIGRlc2lnbiBtZXRob2RvbG9naWVzIHRoYXQgY2FuIGVuZ2FnZSB3aXRoIG1hY2hpbmUtY2VudHJpYyBwcm9jZXNzZXMuJztcclxuICAgIGNvbnN0IHN1bTEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdBZXJpYWwgQWRkaXRpdmUgTWFudWZhY3R1cmluZyAoQUFNKSBpcyBhbiBlYXJseS1zdGFnZSByZXNlYXJjaCB0aGF0IGlzIGRldmVsb3BpbmcgYSBwaW9uZWVyaW5nIGZyYW1ld29yayBmb3IgbXVsdGktYWdlbnQgYWRkaXRpdmUgbWFudWZhY3R1cmluZyB3aXRoIFVubWFubmVkIEFlcmlhbCB2ZWhpY2xlcyAoVUFWKS4gQ3VycmVudGx5LCBBQU0gZG9lcyBub3QgaGF2ZSBhIGRlc2lnbi10by1mYWJyaWNhdGlvbiB3b3JrZmxvdyBub3IgYSBkZWRpY2F0ZWQgZGVzaWduIGZyYW1ld29yayB0byBpbnRlcmZhY2Ugd2l0aCBkdWUgdG8gaXRzIGluZmFuY3kuIFRvIGFkZHJlc3MgdGhpcyBnYXAsIG15IHJlc2VhcmNoIGFpbWVkIHRvIGRldmVsb3AgdGhlIGZpcnN0IHN0YWdlcyBvZiBhIGRlc2lnbiBpbnRlcmZhY2UgZm9yIG11bHRpLWFnZW50IEFBTS4gTW9yZSBzcGVjaWZpY2FsbHksIGEgcmVhbHRpbWUsIGluLXNpdHUgY2hhbmdlIGRldGVjdGlvbiBhbmQgY29ycmVjdGlvbiBmcmFtZXdvcmsgd2l0aCBhIG1hY2hpbmUgbGVhcm5pbmcgYXBwcm9hY2ggYmFzZWQgb24gcG9pbnQgY2xvdWRzIHdhcyBkZXZlbG9wZWQgYW5kIHN1YnNlcXVlbnRseSB2YWxpZGF0ZWQgdGhyb3VnaCBwaHlzaWNhbCBleHBlcmltZW50cy4nKTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhzdW1tYXJ5SGVhZCwgc3VtMCwgc3VtMSk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZXNIZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoXCJoM1wiLCAnRmVhdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGZlYXQwID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ0JlaGF2aW91cmFsIE1vZGVsIGZvciBBQU0gdXNpbmcgcG9pbnQgY2xvdWRzIGFzIGEgZGF0YSBtZWRpdW0uIFBvaW50IGNsb3VkcyBoYXZlIHRoZSBhZHZhbnRhZ2Ugb2YgYmVpbmcgYW4gaW50ZWdyYWwgcGFydCBvZiBkcm9uZSB2aXNpb24sIHNvIG5vIGFkZGl0aW9uYWwgdHJhbnNsYXRpb24gaXMgcmVxdWlyZWQgYmV0d2VlbiBkZXNpZ24gYW5kIGZhYnJpY2F0aW9uLicpXHJcbiAgICBjb25zdCBmZWF0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBmZWF0MS5pbm5lckhUTUwgPSBcclxuICAgICAgICAnQyMgV3JhcHBlciBmb3IgdGhlIHBvcHVsYXIgQysrIDxhIGhyZWY9XCJodHRwczovL3BvaW50Y2xvdWRzLm9yZy9cIj5Qb2ludCBDbG91ZCBMaWJyYXJ5PC9hPiAocGNsKSwgYSAyRC8zRCBwcm9jZXNzaW5nIGxpYnJhcnkgdGhhdCBpcyBwb3B1bGFyIGFtb25nIHJvYm90aWMgZGV2ZWxvcG1lbnQgY29tbXVuaXRpZXMgYW5kIGludGVncmF0ZXMgd2l0aCB0aGUgUk9TIGZyYW1ld29yay4nO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnTWFjaGluZSBMZWFybmluZyBtb2RlbCBpbXBsZW1lbnRpbmcgYSBjdXN0b20gcmFuZG9tIGZvcmVzdCBjbGFzc2lmaWVyIHdpdGggSlNPTiBleHBvcnQgZm9yIGVhc2Ugb2YgZGlzdHJpYnV0aW9uLiBPdGhlciBjbGFzc2lmaWVycywgc3VjaCBhcyBhIG5ldXJhbCBuZXR3b3JrLCB3ZXJlIGFsc28gaW1wbGVtZW50ZWQsIHRob3VnaCBub3QgdXNlZCBmb3IgdGhlIGZpbmFsIGV4cGVyaW1lbnQuJyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdUZW5zb3IgZGF0YSBvYmplY3QgaW1wbGVtZW50YXRpb24gaW4gR3Jhc3Nob3BwZXIgdXNpbmcgVGVuc29yZmxvdy5ORVRcXCdzIE51bXB5LCBhbGxvd2luZyBtdWx0aWRpbWVuc2lvbmFsIG1hdHJpeCBvcGVyYXRpb25zIGluIHRoZSBHSCBlbnZpcm9ubWVudC4nKTtcclxuICAgIGNvbnN0IGZlYXQ0ID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ1N0YW5kLWFsb25lIGNvcmUgQyMgbGlicmFyeSB3aXRoIHRlc3RpbmcgdGhhdCBjYW4gYmUgcG9ydGVkIHRvIG90aGVyIGFwcGxpY2F0aW9ucy4nKTtcclxuXHJcblxyXG4gICAgZmVhdGxpc3QuYXBwZW5kKGZlYXQwLCBmZWF0MSwgZmVhdDIsIGZlYXQzLCBmZWF0NCk7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhmZWF0dXJlc0hlYWRpbmcsIGZlYXRsaXN0KTtcclxuXHJcbiAgICBjb25zdCBhcmNoaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ0FyY2hpdGVjdHVyZScpO1xyXG4gICAgY29uc3QgYXJjaDAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsICdUaGUgY29kZSBmb3IgdGhlIHBhcGVyIHdhcyBpbXBsZW1lbnRlZCBhcyBhIEdyYXNzaG9wcGVyIHBsdWctaW4gbGlicmFyeS4gVGhlIGNvcmUgbGlicmFyeSBpcyB3cml0dGVuIGluIEMjIGFuZCBjYXJlIHdhcyB0YWtlbiB0byBtYWludGFpbiBhIGhleGFnb25hbCBhcmNoaXRlY3R1cmUgZm9yIGZ1dHVyZSBhZGFwdGFiaWxpdHkuIEZ1bmN0aW9uYWxpdHkgZm9yIHBvaW50IGNsb3VkcyBhbmQgbWFjaGluZSBsZWFybmluZyBpcyBhZGRlZCB3aXRoIHRoZSBhZGFwdGVyIHBhdHRlcm4gc28gaXQgY2FuIGJlIHJlcGxhY2VkIHdpdGggdXBkYXRlZCBtb2R1bGVzLiBBIGNvbnRyb2xsZXIgbGlicmFyeSBuYW1lZCBIaXZlTWluZEdIIGVzdGFibGlzaGVzIGEgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBjb3JlIGxpYnJhcnkgYW5kIEdyYXNzaG9wcGVy4oCZcyB2aXN1YWwgaW50ZXJmYWNlLicpXHJcbiAgICBcclxuICAgIGNvbnN0IGltZ19jbGFzc0RpYWdyYW0gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ19jbGFzc0RpYWdyYW0uc3JjID0gZGlhZ3JhbV9jbGFzc2VzO1xyXG5cclxuICAgIHByb2oucHVzaENvbnRlbnRzKGFyY2hoZWFkaW5nLCBhcmNoMCwgaW1nX2NsYXNzRGlhZ3JhbSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJvbmVzOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVJbWFnZSB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG4vL21lZGlhXHJcbmltcG9ydCByZW5kZXJfZmFjYWRlIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvcmVuZGVyX2ZhY2FkZS5qcGcnO1xyXG5pbXBvcnQgYW5pbV96b29tU2NhbGVzXzAwIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvYW5pbV96b29tU2NhbGVzXzAwLmdpZic7XHJcbmltcG9ydCBhbmltX2dyb3d0aF9hbGwgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9hbmltX2dyb3d0aF9hbGwuZ2lmJztcclxuaW1wb3J0IGFuaW1fZ3Jvd3RoX3R1cm50YWJsZSBmcm9tICcuLi9hc3NldHMvbWF0bmV0L2FuaW1fZ3Jvd3RoX3R1cm50YWJsZS5naWYnO1xyXG5pbXBvcnQgdW5pdDAwIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvdW5pdF8wMC5qcGcnO1xyXG5pbXBvcnQgdW5pdGxheW91dCBmcm9tICcuLi9hc3NldHMvbWF0bmV0L3VuaXRfbGF5b3V0LmpwZydcclxuaW1wb3J0IGFuaW1fZ3JhcGhUb0FyY2ggZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9hbmltX2dyYXBoVG9BcmNoLmdpZidcclxuXHJcbmNvbnN0IG1hdG5ldCA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoXCJNYXRlcmlhbCBOZXR3b3Jrc1wiLCAyMDE4LCBcIkxvbmRvbiwgVUtcIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFjYWRlbWljXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFkZGl0aXZlIG1hbnVmYWN0dXJpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiZGVzaWduXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImNvZGVcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiZmFicmljYXRpb25cIik7XHJcblxyXG4gICAgcHJvai5TdWJ0aXRsZSA9IFwiTWFzcy1DdXN0b21pemVkIEhvdXNpbmcgZm9yIENvaGVzaXZlIENvbW11bml0aWVzLiBBQURSTCBNYXN0ZXIgVGhlc2lzXCJcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YnRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvai5TdWJ0aXRsZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgWWVhcjogJyArIHByb2ouWWVhcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IExvY2F0aW9uOiAnICsgcHJvai5Mb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvdmVyLnNyYyA9IHJlbmRlcl9mYWNhZGU7XHJcblxyXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXHJcbiAgICAgICAgXCJJbnRyb2R1Y3Rpb25cIik7XHJcbiAgICBjb25zdCBpbnRybyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ01hdGVyaWFsIE5ldHdvcmtzIGlzIHRoZSBjdWxtaW5hdGlvbiBvZiBteSByZXNlYXJjaCBhdCB0aGUgQXJjaGl0ZWN0dXJhbCBBc3NvY2lhdGlvbiAtIERlc2lnbiBSZXNlYXJjaCBMYWIuIFRoZSBwcm9qZWN0IGVuZ2FnZXMgd2l0aCB0aGUgcmFwaWQgZGlnaXRpemF0aW9uIG9mIHRoZSBidWlsdCBlbnZpcm9ubWVudCBhbmQgbG9va3MgYXQgaG93IGRlc2lnbiBhZ2VuY3kgY2FuIGFkYXB0IHRvIGEgZnVsbHkgYXV0b21hdGVkLCBjb21wdXRlci1kcml2ZW4gd29ybGQgd2hpbGUgYnJpbmdpbmcgdGhlIGh1bWFuIGVsZW1lbnQgdG8gdGhlIGZvcmVmcm9udCBvZiB0aGUgZGlzY291cnNlLiBNYXRlcmlhbCBOZXR3b3JrcyBwcm9wb3NlcyBhIG5lZ290aWF0ZWQgY29tbXVuYWwgaG91c2luZyBzeXN0ZW0gdGhhdCBwcm92aWRlcyBjdXN0b20tdGFpbG9yZWQgbmVpZ2hib3Job29kcyB0byBjb2hlc2l2ZSBjb21tdW5pdGllcyB0aWVkIGJ5IHRoZWlyIHNoYXJlZCBjdWx0dXJlcywgZWNvbm9taWVzIGFuZCBnb3Zlcm5hbmNlLiBCdWlsZGluZy1zY2FsZSBhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nIGlzIGludmVzdGlnYXRlZCBhcyBhbiBhdXRvbWF0ZWQgZmFicmljYXRpb24gdGVjaG5vbG9neSB0aGF0IGNhbiBkZWxpdmVyIG1hc3MtY3VzdG9taXplZCwgaW50ZWdyYXRlZCBkd2VsbGluZ3MgdGhyb3VnaCBhIGdlbmVyYXRpdmUgQUkgZnJhbWV3b3JrLicpO1xyXG5cclxuICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZWFtLmlubmVySFRNTCA9ICdEZXNpZ24gVGVhbTogVGFvbGUgQ2hlbiwgU3VjaGFydCAoQm9uKSBPdXlwb3JuY2hhaXNha3VsLCBKZWZmcmV5IFdpZGphamE8YnI+VHV0b3JzOiBTaGFqYXkgQmhvb3NoYW4sIEFsaWNpYSBOYWhtYWQ8YnI+PGEgaHJlZj1cImh0dHBzOi8vZHJsLmFhc2Nob29sLmFjLnVrL1wiPkFBRFJMPC9hPic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGl0bGUsIHN1YnRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgY292ZXIsIGludHJvSGVhZGluZywgaW50cm8sIHRlYW0pO1xyXG5cclxuICAgIC8vbGV2ZWwgMCBuZWlnaGJvcmhvb2RcclxuICAgIGNvbnN0IG5laWdoSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFwiTGV2ZWwgMCBOZWlnaGJvcmhvb2RcIik7XHJcbiAgICBjb25zdCBuZWlnaHN1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCAnVGhlIEJ1aWxkaW5nIGFzIGEgTmV0d29yaycpXHJcbiAgICBjb25zdCBuZWlnaDAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiQ28tb3B0aW5nIHRlY2huaXF1ZXMgZnJvbSBjb21wbGV4IG5ldHdvcmsgYW5hbHlzaXMsIGF0IHRoZSBuZWlnaGJvcmhvb2QgbGV2ZWwsIHRoZSByZXNlYXJjaCBsb29rcyBpbnRvIGRldmVsb3BpbmcgYW4gb3BlcmF0aW9uYWwgdG9vbCBmb3IgZXh0cmFjdGluZyBtZWFuaW5nZnVsIHNwYXRpYWwgcmVsYXRpb25zaGlwIGZyb20gdGhlIHNvY2lhbCBuZXR3b3JrIG9mIGEgY29tbXVuaXR5LlwiKTtcclxuICAgIGNvbnN0IG5laWdoMSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ1RoZSBzb2NpYWwgcmVsYXRpb25zaGlwcyBvZiBhIGdpdmVuIGNvbW11bml0eSBhcmUgY2FwdHVyZWQgaW4gYSByZWxhdGlvbmFsIHJvc3RlciBpbiB0aGUgZm9ybSBvZiBhbiBlbmNvZGVkIGRhdGEgbWF0cml4LCBhbGxvd2luZyBjb21wdXRlcnMgdG8gZWFzaWx5IHJlYWQgYW5kIHByb2Nlc3MgdGhlIGluZm9ybWF0aW9uLiBUaGUgZGF0YSBtYXRyaXggaXMgc3Vic2VxdWVudGx5IHVzZWQgdG8gY29uc3RydWN0IGEgbmV0d29yayBncmFwaC4gVGhlIGdyYXBoIGlzIHVzZWZ1bCBiZWNhdXNlIGl0IGNhcHR1cmVzIG11bHRpLXNjYWxhciBpbmZvcm1hdGlvbiBpbiBhIHNpbmdsZSwgY29oZXNpdmUgZGF0YSBzdHJ1Y3R1cmUsIG9wZW5pbmcgdXAgY29tcHV0YXRpb25hbCB3YXlzIG9mIGVuZ2FnaW5nIHdpdGggdGhlIGluZm9ybWF0aW9uLicpO1xyXG4gICAgY29uc3QgbmVpZ2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnVGhlIGdyYXBoIGlzIGdpdmVuIGFnZW5jeSBieSBkZXBsb3lpbmcgYSBydWxlLWJhc2VkIGdyb3d0aCBhbGdvcml0aG0gb24gdGhlIHByb2plY3Qgc2l0ZS4gQSBwYXRoLWZpbmRpbmcgbG9naWMgaXMgdXNlZCB0byBnZW5lcmF0ZSBzY2hlbWVzLCB3aXRoIHNwZWNpZmljIHJ1bGUgZGV0ZXJtaW5pbmcgdGhlIHJlc3VsdGluZyBjaGFyYWN0ZXIgb2YgdGhlIG5laWdoYm9yaG9vZCB3aGlsZSBlbnN1cmluZyB0aGUgY29tcHV0ZWQgc3BhdGlhbCByZWxhdGlvbnNoaXBzIGFyZSBtYWludGFpbmVkLiBUaGUgZGVjb3VwbGluZyBvZiBmb3JtYWwgYWdlbmN5IGZyb20gdGhlIGhhbmRzIG9mIHRoZSBodW1hbiBkZXNpZ25lciBzaWduaWZpZXMgYSBjcnVjaWFsIHN0ZXAgdG93YXJkcyBhIGZ1bGx5IGF1dG9ub21vdXMgY29uc3RydWN0aW9uIGZyYW1ld29yay4gWWV0LCB3aXRoIHRoZSBydWxlLWJhc2VkIHN5c3RlbSwgZGVzaWduZXJzIGFyZSBzdGlsbCBnaXZlbiBjb250cm9sIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IHRvIHJlc29ydCB0byB0aGUgc2N1bHB0aW5nIG9mIGZvcm0sIHRodXMgcHJpb3JpdGl6aW5nIGEgbG9naWMtZHJpdmVuIGFwcHJvYWNoLCByYXRoZXIgdGhhbiBhZXN0aGV0aWNzLicpO1xyXG5cclxuICAgIGNvbnN0IHZpZF96b29tU2NhbGVzID0gY3JlYXRlSW1hZ2UoYW5pbV96b29tU2NhbGVzXzAwKTtcclxuICAgIGNvbnN0IHZpZF9ncm93dGhfYWxsID0gY3JlYXRlSW1hZ2UoYW5pbV9ncm93dGhfYWxsKTtcclxuICAgIGNvbnN0IHZpZF9ncm93dGhfdHVybnRhYmxlID0gY3JlYXRlSW1hZ2UoYW5pbV9ncm93dGhfdHVybnRhYmxlKTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhuZWlnaEhlYWQsIG5laWdoc3ViSGVhZCwgbmVpZ2gwLCBuZWlnaDEsIHZpZF96b29tU2NhbGVzLCBuZWlnaDIsIHZpZF9ncm93dGhfYWxsLCB2aWRfZ3Jvd3RoX3R1cm50YWJsZSk7XHJcblxyXG4gICAgLy9sZXZlbCAxIGhvbWVcclxuICAgIGNvbnN0IHVuaXRIZWFkID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXHJcbiAgICAgICAgXCJMZXZlbCAxIEhvbWVcIik7XHJcbiAgICBjb25zdCB1bml0U3ViSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNCcsIFxyXG4gICAgICAgICdIb21lIElzIFdoYXQgWW91IERvJylcclxuICAgIGNvbnN0IHVuaXQwID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnT24gdGhlIG5leHQgc2NhbGUgZG93biwgYSBjdXN0b21pc2F0aW9uIHN5c3RlbSBmb3IgdGhlIGluZGl2aWR1YWwgaG9tZSBhbGxvd3MgdGhlIGFyY2hpdGVjdHVyZSB0byByZXNwb25kIHRvIHRoZSBkYWlseSBwYXR0ZXJucyBvZiBlYWNoIG1lbWJlciBvZiB0aGUgY29tbXVuaXR5LicpO1xyXG4gICAgY29uc3QgdW5pdDEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdUaGUgYWN0dWFsIHVuaXRzIG9uIHNpdGUgYXJlIGEgbmVnb3RpYXRlZCByZXN1bHQgd2hlcmUgc2l0ZSBjb25zdHJhaW50cywgdW5pdCByZXF1aXJlbWVudHMgYW5kIHNoYXJlZCBhY3Rpdml0aWVzIGNvbWUgdG9nZXRoZXIuIFVzaW5nIGEgcmVsYXRpb25hbCBtb2RlbCBhbGxvd3MgdGhlIHVuaXQgdG8gYWRhcHQgdG8gdGhlIHNpdGUgd2hpbGUgc3RpbGwgbWFpbnRhaW5pbmcgaXRzIGltcG9ydGFudCBjb25uZWN0aW9ucy4nKTtcclxuICAgIGNvbnN0IHVuaXQyID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnTGV2ZWwgb2YgZGV0YWlscyAoTE9EKSBhcmUgZ3JhZHVhbGx5IGFkZGVkIHRvIHRoZSByYXcgc3BhY2UgZGlzdHJpYnV0aW9uIGZyb20gdGhlIGdyb3d0aCBhbGdvcml0aG0sIHR1cm5pbmcgYWJzdHJhY3Qgc3BhY2UgaW50byBjb25jcmV0ZSBhcmNoaXRlY3R1cmUuJyk7XHJcblxyXG4gICAgY29uc3QgaW1nX3VuaXRFeGFtcGxlID0gY3JlYXRlSW1hZ2UodW5pdDAwKTtcclxuICAgIGNvbnN0IGltZ191bml0TGF5b3V0ID0gY3JlYXRlSW1hZ2UodW5pdGxheW91dCk7XHJcbiAgICBjb25zdCB2aWRfZ3JhcGhUb0FyY2ggPSBjcmVhdGVJbWFnZShhbmltX2dyYXBoVG9BcmNoKTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh1bml0SGVhZCwgdW5pdFN1YkhlYWQsIGltZ191bml0RXhhbXBsZSwgdW5pdDAsIGltZ191bml0TGF5b3V0LCB1bml0MSwgdW5pdDIsIHZpZF9ncmFwaFRvQXJjaCk7XHJcblxyXG4gICAgLy9sZXZlbCAyIHRlY3Rvbmljc1xyXG4gICAgY29uc3QgdGVjdG9IZWFkID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXCJMZXZlbCAyIFRlY3Rvbmljc1wiKTtcclxuICAgIGNvbnN0IHRlY3RvU3ViSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNCcsICdIb21lIElzIFdoYXQgWW91IERvJylcclxuICAgIGNvbnN0IHRlY3RvMCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0FkZGl0aXZlIE1hbnVmYWN0dXJpbmcgd2FzIGlkZW50aWZpZWQgYXMgdGhlIHByaW1hcnkgY2FuZGlkYXRlIGZvciB0aGUgY29uc3RydWN0aW9uIHN5c3RlbSwgYXMgaXQgb2ZmZXJzIHRoZSBhYmlsaXR5IHRvIG1hbnVmYWN0dXJlIGZyZWUtZm9ybSBnZW9tZXRyaWVzIHdoaWxlIHByb3ZpZGluZyBjb3N0IGFuZCB0aW1lIHNhdmluZ3MsIGFuZCBpbmNyZWFzZWQgb25zaXRlIHNhZmV0eSBmb3IgYXV0b21hdGVkIHN5c3RlbXMuIEEgcm9ib3RpY3MtZmlyc3QgYXBwcm9hY2ggd2FzIG5lZWRlZCBmb3IgdGhlIGNvbnN0cnVjdGlvbiBzeXN0ZW0gdG8gaW50ZWdyYXRlIGludG8gdGhlIG92ZXJhbGwgZnJhbWV3b3JrLicpO1xyXG5cclxuICAgIGNvbnN0IHRlY3RvMSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0FuIG9uc2l0ZSwgc2VnbWVudGVkIGFwcHJvYWNoIHdpdGggbXVsdGktbWF0ZXJpYWwgcHJpbnRpbmcgd2FzIGVudmlzaW9uZWQsIGFzIG1vbm8tbWF0ZXJpYWwsIGNvbnRpbnVvdXMgcHJpbnRpbmcgaXMgYXJndWVkIHRvIGJlIGltcHJhY3RpY2FsIGFuZCB1bmRlc2lyYWJsZSBmb3IgYXJjaGl0ZWN0dXJhbCBhcHBsaWNhdGlvbnMsIGJlY2F1c2UgaXQgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIG11bHRpLXN5c3RlbWljIG5hdHVyZSBvZiBidWlsZGluZ3MuIEF1dG9ub21vdXMsIHJvYm90aWMgdW5pdHMgYXJlIGRlcGxveWVkIG9uc2l0ZSAnKTtcclxuXHJcblxyXG4gICAgY29uc3QgdGVjdG8yID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnQ2xheSBpcyB1c2VkIGFzIGEgcHJveHkgbWF0ZXJpYWwgZm9yIHZpc2NvLWVsYXN0aWMsIGNlbWVudGl0aW91cyBtYXRlcmlhbHMgKG1vc3QgcmVsZXZhbnRseSBjb25jcmV0ZSkgdG8gcHJvdG90eXBlIGRlc2lnbiBpdGVyYXRpb25zIGFuZCB1bmRlcnN0YW5kIHRoZSBsaW1pdGF0aW9ucyBpbiByZWFsIHRlcm1zLiBBIHBuZXVtYXRpY2FsbHktb3BlcmF0ZWQgZXh0cnVzaW9uLWVuZC1lZmZlY3RvciB3YXMgZGV2ZWxvcGVkIGZyb20gc2NyYXRjaCBmb3IgdGhlIHJlc2VhcmNoIGFuZCBkZXBsb3llZCB3aXRoIHZhcmlvdXMgaW5kdXN0cmlhbCByb2JvdGljIGFybXMgZm9yIHByb3RvdHlwaW5nLiBUaHJvdWdoIHJpZ29yb3VzIHRlc3RpbmcsIGNyaXRpY2FsIHBhcmFtZXRlcnMgd2VyZSBkZWZpbmVkIGFuZCBpbmZvcm1lZCB0aGUgcG9zc2libGUgZ2VvbWV0cmljIGRlc2lnbiBleHByZXNzaW9ucy4nKTtcclxuXHJcbiAgICBjb25zdCB2aWRfZ3JhcGhUb0NvbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZGVvQ29udGFpbmVyJyk7XHJcbiAgICB2aWRfZ3JhcGhUb0NvbnN0cnVjdGlvbi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlXCI+PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzkwODMyODIwP2g9OTg0NWU5MjMzNyZhbXA7YmFkZ2U9MCZhbXA7YXV0b3BhdXNlPTAmYW1wO3BsYXllcl9pZD0wJmFtcDthcHBfaWQ9NTg0NzlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIiB0aXRsZT1cIkZyb20gR3JhcGggdG8gQ29uc3RydWN0aW9uXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcbiAgICBjb25zdCB2aWRfY29uc3RydWN0aW9uU2VxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfY29uc3RydWN0aW9uU2VxLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWRlb0NvbnRhaW5lcicpO1xyXG4gICAgdmlkX2NvbnN0cnVjdGlvblNlcS5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlO1wiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc5MDgzOTg2OD9oPTZiMzMxZjhhNGMmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgdGl0bGU9XCJDb25zdHJ1Y3Rpb24gU2VxdWVuY2VcIj48L2lmcmFtZT48L2Rpdj48c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCI+PC9zY3JpcHQ+JztcclxuICAgIGNvbnN0IHZpZF9mYWJIaWdobGlnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfZmFiSGlnaGxpZ2h0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VmlkZW9Db250YWluZXInKTtcclxuICAgIHZpZF9mYWJIaWdobGlnaHRzLmlubmVySFRNTCA9ICc8ZGl2IHN0eWxlPVwicGFkZGluZzo1Ni4yNSUgMCAwIDA7cG9zaXRpb246cmVsYXRpdmU7XCI+PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzkwODgwMDAyP2g9MTRhYTc3MjNjYyZhbXA7YmFkZ2U9MCZhbXA7YXV0b3BhdXNlPTAmYW1wO3BsYXllcl9pZD0wJmFtcDthcHBfaWQ9NTg0NzlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIiB0aXRsZT1cIk1hdGVyaWFsIE5ldHdvcmtzIC0gRmFicmljYXRpb24gSGlnaGxpZ2h0c1wiPjwvaWZyYW1lPjwvZGl2PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIj48L3NjcmlwdD4nO1xyXG4gICAgY29uc3QgdmlkX2V4cGVyaW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfZXhwZXJpbWVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZGVvQ29udGFpbmVyJyk7XHJcbiAgICB2aWRfZXhwZXJpbWVudHMuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJwYWRkaW5nOjU2LjI1JSAwIDAgMDtwb3NpdGlvbjpyZWxhdGl2ZTtcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby83OTA5MTI1NTI/aD05OTVjNjc4ZWVmJmFtcDtiYWRnZT0wJmFtcDthdXRvcGF1c2U9MCZhbXA7cGxheWVyX2lkPTAmYW1wO2FwcF9pZD01ODQ3OVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiIHRpdGxlPVwiTWF0TmV0IC0gRXhwZXJpbWVudCBFdmFsdWF0aW9uXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGVjdG9IZWFkLCB0ZWN0b1N1YkhlYWQsIHRlY3RvMCwgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24sIHRlY3RvMSwgdmlkX2NvbnN0cnVjdGlvblNlcSwgdGVjdG8yLCB2aWRfZmFiSGlnaGxpZ2h0cywgdmlkX2V4cGVyaW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRuZXQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbmNvbnN0IG15V2Vic2l0ZSA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgXCJQZXJzb25hbCBQb3J0Zm9saW8gV2Vic2l0ZVwiLFxyXG4gICAgICAgIDIwMjMsXHJcbiAgICAgICAgJ0VhcnRoJ1xyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0LlN1YnRpdGxlID0gXCJUaGlzIG9uZVwiO1xyXG5cclxuICAgIHByb2plY3QuYWRkQ2F0ZWdvcnkoXCJkZXNpZ25cIik7XHJcbiAgICBwcm9qZWN0LmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuXHJcbiAgICBjb25zdCB0aSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsIHByb2plY3QuVGl0bGUpO1xyXG4gICAgY29uc3Qgc3ViVGkgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCBwcm9qZWN0LlN1YnRpdGxlKTtcclxuICAgIC8vaW50cm9cclxuICAgIGNvbnN0IGludHJvaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdJbnRyb2R1Y3Rpb24nKTtcclxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW50cm8udGV4dENvbnRlbnQgPSAnVGhpcyB3ZWJzaXRlIHdhcyBidWlsdCBjb21wbGV0ZWx5IGZyb20gc2NyYXRjaCBieSBtZSB0byBzaG93Y2FzZSB0aGUgcHJvamVjdHMgSSBoYXZlIGRvbmUgb3ZlciB0aGUgeWVhcnMuIEl0IHNlcnZlZCBhcyBhIGdyZWF0IHByb2plY3QgdG8gcHV0IGV2ZXJ5dGhpbmcgSSBoYXZlIGxlYXJuZWQgYWJvdXQgd2ViIGRldmVsb3BtZW50IGludG8gcHJhY3RpY2UuIFBsZWFzZSBmZWVsIGZyZWUgdG8gYnJvd3NlIGFyb3VuZCBhbmQgSSBhbSBoYXBweSB0byByZWNlaXZlIGFueSBhbmQgYWxsIGZlZWRiYWNrLidcclxuICAgIC8vZmVhdHVyZXNcclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdGZWF0dXJlcycpO1xyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBmZWF0MSA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ01WQyBhcmNoaXRlY3R1cmUgYWxsb3dzIGZvciBmdXR1cmUgcmUtdXNlIG9mIHRoZSBjb3JlIGxvZ2ljIGluIGRpZmZlcmVudCBncmFwaGljYWwgZW52aXJvbm1lbnRzLicpO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdWYW5pbGxhIEpTIG9ubHkgdG8ga2VlcCB0aGUgcHJvamVjdCBsaWdodHdlaWdodCBhbmQgYmVjYXVzZSB0aGUgZ29hbCB3YXMgdG8gcHJhY3RpY2UgbXkgSlMgc2tpbGxzLCByYXRoZXIgdGhhbiBteSBrbm93bGVkZ2Ugb24gbGlicmFyaWVzJyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1VuaXQgdGVzdGluZyBmb3IgY29yZSBjbGFzc2VzJyk7XHJcbiAgICBjb25zdCBmZWF0NCA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1N0cmVhbWxpbmVkIG1ldGhvZCBmb3IgYWRkaW5nIG1vcmUgcHJvamVjdHMgYXMgcGFja2FnZWQgb2JqZWN0cyBpbiB0aGUgZnV0dXJlIHRvIGltcHJvdmUgbWFpbnRhaW5hYmlsaXR5Jyk7XHJcbiAgICBjb25zdCBmZWF0NSA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1Byb2plY3RzIGFyZSBzZWFyY2hhYmxlIGJ5IGNhdGVnb3J5IHRvIGVhc2UgbmF2aWdhdGlvbicpO1xyXG4gICAgZmVhdHVyZXMuYXBwZW5kKGZlYXQxLCBmZWF0MixmZWF0MywgZmVhdDQsIGZlYXQ1KTtcclxuICAgIC8vdGVjaG5vbG9naWVzXHJcbiAgICBjb25zdCB0ZWNoSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdUZWNobm9sb2dpZXMnKTtcclxuICAgIGNvbnN0IHRlY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGVjaDEgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnSFRNTCwgQ1NTLCBKUycpO1xyXG4gICAgY29uc3QgdGVjaDIgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnSmVzdCBVbml0IFRlc3RpbmcnKTtcclxuICAgIGNvbnN0IHRlY2gzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ1dlYnBhY2sgYXNzZXQgYnVuZGxpbmcnKTtcclxuICAgIHRlY2guYXBwZW5kKHRlY2gxLCB0ZWNoMiwgdGVjaDMpO1xyXG5cclxuICAgIC8vZGV2ZWxvcG1lbnRcclxuICAgIGNvbnN0IGRldkhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCAnRGV2ZWxvcG1lbnQnKTtcclxuICAgIGNvbnN0IGRldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBkZXYxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ2Jsb2cgc2VjdGlvbicpO1xyXG4gICAgZGV2LmFwcGVuZChkZXYxKTtcclxuXHJcblxyXG4gICAgcHJvamVjdC5wdXNoQ29udGVudHMoXHJcbiAgICAgICAgdGksIHN1YlRpLCBpbnRyb2hlYWRpbmcsIGludHJvLCBcclxuICAgICAgICBmZWF0dXJlc0hlYWRpbmcsIGZlYXR1cmVzLCBcclxuICAgICAgICB0ZWNoSGVhZGluZywgdGVjaCxcclxuICAgICAgICBkZXZIZWFkaW5nLCBkZXYpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteVdlYnNpdGU7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQsIGNyZWF0ZUZpZ3VyZSwgY3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgaG9tZSBmcm9tICcuLi9hc3NldHMvbmxwNG1zL2hvbWUucG5nJztcclxuaW1wb3J0IGZyZWV0eHRfMDAgZnJvbSAnLi4vYXNzZXRzL25scDRtcy9ndWlfZnJlZXRleHRfMDAuanBnJztcclxuaW1wb3J0IGd1aU1haW4gZnJvbSAnLi4vYXNzZXRzL25scDRtcy9ndWlfbWFpbi5qcGcnO1xyXG5pbXBvcnQgc2FtcGxlU2VudGltZW50IGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX3NhbXBsZUFuYWx5c2lzLmpwZyc7XHJcbmltcG9ydCBndWlfdXNlckFuYWx5c2lzIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX3VzZXJBbmFseXNpc18wMS5qcGcnO1xyXG5pbXBvcnQgY2xhc3NEaWFncmFtIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvY2xhc3NEaWFncmFtLmpwZyc7XHJcblxyXG5jb25zdCBubHA0bXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiTkxQIGZvciBNdWx0aXBsZSBTY2xlcm9zaXNcIiwgMjAyMiwgXCJMb25kb24sIFVLXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcIkFJXCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIkRpYWdub3NpcyBUb29sIGZvciBSZXNlYXJjaGVycyB3b3JraW5nIG9uIE11bHRpcGxlIFNjbGVyb3Npc1wiO1xyXG5cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsIHByb2ouVGl0bGUpO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCBwcm9qLlN1YnRpdGxlKTtcclxuICAgIGNvbnN0IHllYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBZZWFyOiAnICsgcHJvai5ZZWFyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgTG9jYXRpb246ICcgKyBwcm9qLkxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCBnaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgZ2l0LmlubmVySFRNTCA9ICc8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9BYnN0cmFjdG1hY2hpbmEvaWNjX05MUDRNUz5HaXRodWI8L2E+J1xyXG4gICAgLy9jb25zdCBjb3ZlciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiSW50cm9kdWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmcgZm9yIHRoZSBEaWFnbm9zaXMgb2YgTXVsdGlwbGUgU2NsZXJvc2lzIHdhcyBhIGdyb3VwIHJlc2VhcmNoIHByb2plY3QgZG9uZSBhcyBwYXJ0IG9mIHRoZSBzb2Z0d2FyZSBlbmdpbmVlcmluZyBkZXNpZ24gY291cnNlIGF0IEltcGVyaWFsLiBUaGUgYXBwIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYnkgcmVzZWFyY2hlcnMgYXQgdGhlIFVLIE1TIFJlZ2lzdGVyLCB3aGVyZSBhIGxhcmdlIGNvbGxlY3Rpb24gb2YgdW5wcm9tcHRlZCBmcmVlLXRleHQgZGF0YSAocGF0aWVudCByZXBvcnRlZCBvdXRjb21lcykgd2FzIGFtYXNzZWQgb3ZlciB0aGUgeWVhcnMsIGJ1dCB0aGVyZSBoYXMgYmVlbiBubyBlZmZlY3RpdmUgdG9vbCB0byBwcm9jZXNzIGFuZCB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IGluZm9ybWF0aW9uIHRvIGRhdGUuIE91ciBhcHAgc291Z2h0IHRvIHByb3ZpZGUgYSBzaW1wbGUgaW50ZXJmYWNlIHRvIGV4dHJhY3QgbWVhbmluZ2Z1bCBmcmVlLXRleHQgZGF0YSBpbiB0aGUgbWVkaWNhbCByZXNlYXJjaCBmb3IgdGhlIGRpYWdub3NpcyBvZiBNUy4gVGhlcmUgd2FzIG5vIHByaW9yIGNvZGUgYmFzZSwgYXMgb3VyIGdyb3VwIHdhcyB0aGUgZmlyc3QgdG8gY29sbGFib3JhdGUgd2l0aCB0aGUgTVMgUmVnaXN0ZXIsIGhvd2V2ZXIsIHRoZSBpbnRlbnRpb24gaXMgdG8gY29udGludWUgdGhlIGRldmVsb3BtZW50IGluIHN1YnNlcXVlbnQgeWVhcnMuJyk7XHJcblxyXG4gICAgY29uc3QgdGVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVhbS5pbm5lckhUTUwgPSBcclxuICAgICAgICAnPHN0cm9uZz5UZWFtOjwvc3Ryb25nPiBNYXR0IEJhcmtlciwgQ29saW4gVGF5bG9yLCBUYW9sZSBDaGVuLCBLYWl4dWFuIEtob28sIFJvbmFuIFBhdHJpY2ssIEd1cyBMZXZpbnNvbiwgSmFjayBDaGVuZzxicj48c3Ryb25nPlN1cGVydmlzb3JzOjwvc3Ryb25nPiBDaGlyYWFnIExhbGEsIFJvZCBNaWRkbGV0b24sIFJpY2hhcmQgTmljaG9sYXM8YnI+SW4gY29sbGFib3JhdGlvbiB3aXRoIHRoZSA8YSBocmVmID0gXCJodHRwczovL3VrbXNyZWdpc3Rlci5vcmcvXCI+VUsgTVMgUmVnaXN0ZXI8L2E+JztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aXRsZSwgc3VidGl0bGUsIHllYXIsIGxvY2F0aW9uLCBnaXQsIGludHJvSGVhZGluZywgaW50cm8sIHRlYW0pO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ0ZlYXR1cmVzJyk7XHJcblxyXG4gICAgY29uc3QgZmVhdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgZmVhdDAgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdGcmVlLXRleHQgYW5hbHl6ZXIgZm9yIHNpbXBsZSB0ZXh0IHByb2Nlc3NpbmcsIGxvb2tpbmcgYXQgZnJlcXVlbmN5IG9mIHRlcm1zIGFuZCBwaHJhc2VzLCBuLWdyYW1zIHRvIGlkZW50aWZ5IHRyZW5kcyBhbmQga2V5IHRlcm1pbm9sb2dpZXMgdXNlZCBieSBwYXRpZW50cycpXHJcbiAgICBjb25zdCBmZWF0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBmZWF0MS5pbm5lckhUTUwgPSBcclxuICAgICdMb2dpc3RpYyByZWdyZXNzaW9uIGNsYXNzaWZpZXIgd2l0aCBiYWctb2Ytd29yZHMgbW9kZWwgZm9yIHByZWRpY3RpbmcgTVMgaW4gcGF0aWVudHMgYmFzZWQgb24gdGhlaXIgdGV4dCBwcm9tcHRzLic7XHJcbiAgICBjb25zdCBmZWF0MiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgJ1NlbnRpbWVudCBhbmQgRXh0ZW5kZW5kIERpc2FiaWxpdHkgU3RhdHVzIEFuYWx5c2lzIHRvIGlkZW50aWZ5IHRyZW5kcyBpbiBpbmRpdmlkdWFsIHVzZXJzIGFuZCBkZW1wZ3JhcGhpY3MuIEltcGxlbWVudGF0aW9uIG9mIHRoZSBWQURFUiBzZW50aW1lbnQgbGlicmFyeS4nKTtcclxuICAgIGNvbnN0IGZlYXQzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAnQ3VzdG9tIENTViBpbXBvcnQgY2FwYWJhbGl0aWVzLCBnaXZpbmcgcmVzZWFyY2hlcnMgbW9yZSBmcmVlZG9tIGluIGFkYXB0aW5nIHRoZSBhcHAgdG8gc3BlY2lmaWMgbmVlZHMuJyk7XHJcbiAgICBjb25zdCBmZWF0NCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgJ0hleGFnb25hbCBBcmNoaXRlY3R1cmUsIGFsbG93aW5nIHRoZSBzd2FwcGluZyBvZiBtb2R1bGVzIGluIHRoZSBmdXR1cmUsIHRodXMgaW1wcm92aW5nIHJlLXVzZWFiaWxpdHkgb2YgdGhlIGNvZGUgYmFzZScpO1xyXG4gICAgY29uc3QgZmVhdDUgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdBbGwgbW9kdWxlcyBsaW1pdGVkIHRvIHRoZSBOTFRLIHBsYXRmb3JtLCBhcyBjb2RlIGlzIGhvc3RlZCBvbiBzZWN1cmUgc2VydmVycyBvZiB0aGUgTVMgUmVnaXN0ZXIuJyk7XHJcbiAgICBmZWF0bGlzdC5hcHBlbmQoZmVhdDAsIGZlYXQxLCBmZWF0MiwgZmVhdDMsIGZlYXQ0KTtcclxuICAgIFxyXG4gICAgY29uc3QgaW1nX2hvbWUgPSBjcmVhdGVGaWd1cmUoaG9tZSwgJ0FwcCBIb21lIFBhZ2UnKTtcclxuICAgIGNvbnN0IGltZ19ndWlfZnJlZXR4dCA9IGNyZWF0ZUZpZ3VyZShmcmVldHh0XzAwLCAnRnJlZSB0ZXh0IGFuYWx5c2lzIHBhZ2UnKTtcclxuICAgIGNvbnN0IGltZ19ndWlNYWluID0gY3JlYXRlRmlndXJlKGd1aU1haW4sICdNYWluIG1lbnUnKTtcclxuICAgIGNvbnN0IGltZ19TYW1wbGVTZW50aW1lbnQgPSBjcmVhdGVGaWd1cmUoc2FtcGxlU2VudGltZW50LCAnRXhhbXBsZSBvZiBnZW5lcmF0ZWQgdHJlbmQgZ3JhcGhzIGZvciBhIGdyb3VwIG9mIHBhdGllbnRzJyk7XHJcbiAgICBjb25zdCBpbWdfZ3VpVXNlciA9IGNyZWF0ZUZpZ3VyZShndWlfdXNlckFuYWx5c2lzLCAnVXNlciBzZW50aW1lbnQgYW5hbHlzaXMgcGFnZScpO1xyXG5cclxuICBcclxuICAgIHByb2oucHVzaENvbnRlbnRzKGZlYXR1cmVzSGVhZGluZywgZmVhdGxpc3QsIGltZ19ob21lLCBpbWdfZ3VpTWFpbiwgaW1nX2d1aV9mcmVldHh0LCBpbWdfU2FtcGxlU2VudGltZW50LCBpbWdfZ3VpVXNlcik7XHJcbiAgICBcclxuICAgIGNvbnN0IHRlY2hIZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoXCJoM1wiLCAnVGVjaG5vbG9naWVzJyk7XHJcbiAgICBjb25zdCB0ZWNobGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCB0ZWNoMCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdQeXRob24gYmFjay1lbmQnKVxyXG4gICAgY29uc3QgdGVjaDEgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAndGtpbnRlciBmcm9udC1lbmQnKTtcclxuICAgIGNvbnN0IHRlY2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ1ZBREVSIHNlbnRpbWVudCBhbmFseXNpcyBpbXBsZW1lbnRhdGlvbicpO1xyXG4gICAgY29uc3QgdGVjaDMgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnU2NpLWtpdCBMZWFybiB0ZXh0IGNsYXNzaWZpY2F0aW9uIGltcGxlbWVudGF0aW9uJyk7XHJcbiAgICBjb25zdCBpbWdfY2xhc3NEaWFncmFtID0gY3JlYXRlRmlndXJlKGNsYXNzRGlhZ3JhbSwgJ0NsYXNzIERpYWdyYW0nKTtcclxuICAgIHRlY2hsaXN0LmFwcGVuZCggdGVjaDAsIHRlY2gxLCB0ZWNoMiwgdGVjaDMpO1xyXG4gICAgcHJvai5wdXNoQ29udGVudHModGVjaEhlYWRpbmcsIHRlY2hsaXN0LCBpbWdfY2xhc3NEaWFncmFtKTtcclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBubHA0bXM7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQsIGNyZWF0ZUltYWdlcywgY3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgY292ZXIgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00Mzk4LmpwZyc7XHJcbmltcG9ydCBpMDAgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfYnJhMS0zODc1LmpwZyc7XHJcbmltcG9ydCBpMDEgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfYnJhMS0zOTA3LmpwZyc7XHJcbmltcG9ydCBpMDIgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfYnJhMS00MDA1LmpwZyc7XHJcbmltcG9ydCBpMDMgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfYnJhMi00NTMxLmpwZyc7XHJcbmltcG9ydCBpMDQgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfYnJhMy00MDg0LmpwZyc7XHJcbmltcG9ydCBpMDUgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfdG9wMy00ODAwLmpwZyc7XHJcbmltcG9ydCBpMDYgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00MTY3LmpwZyc7XHJcbmltcG9ydCBpMDcgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00NDA2LmpwZyc7XHJcbmltcG9ydCBpMDggZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00NDU4LmpwZyc7XHJcbmltcG9ydCBpMDkgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00NTEyLmpwZyc7XHJcbmltcG9ydCBpMTAgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS01MDAxLmpwZyc7XHJcbmltcG9ydCBpMTEgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS00OTc5LmpwZyc7XHJcbmltcG9ydCBpMTIgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS01MDU2LmpwZyc7XHJcbmltcG9ydCBpMTMgZnJvbSAnLi4vYXNzZXRzL29yZ2FuaWMvb2NfeW9nYS01MDY5LmpwZyc7XHJcblxyXG5cclxuY29uc3Qgb3JnYW5pYyA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoXCJPcmdhbmljIENvZGUgQXBwYXJlbFwiLCAyMDIyLCBcIkplanUsIFNvdXRoIEtvcmVhXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhcnRcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwicGhvdG9ncmFwaHlcIik7XHJcblxyXG4gICAgcHJvai5TdWJ0aXRsZSA9IFwiUHJvZHVjdCBTaG9vdCBmb3IgQnJhbGV0dGUgYW5kIFRvcCBTZXJpZXNcIjtcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YnRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvai5TdWJ0aXRsZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgWWVhcjogJyArIHByb2ouWWVhcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IExvY2F0aW9uOiAnICsgcHJvai5Mb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgYnJhbmRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGJyYW5kTGluay5pbm5lckhUTUwgPSAnPGEgaHJlZj1odHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29yZ2FuaWNfY29kZV8vPkJyYW5kIExpbms8L2E+J1xyXG4gICAgY29uc3QgaW1nX2NvdmVyID0gY3JlYXRlSW1hZ2UoY292ZXIpO1xyXG5cclxuICAgIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiSW50cm9kdWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdJIHdhcyBhcHByb2FjaGVkIGJ5IG15IGZyaWVuZCB0byBoZWxwIGhlciBicmFuZCBkbyBhIHByb2R1Y3Qgc2hvb3QgZm9yIGhlciBsYXRlc3Qgc2VyaWVzIGZlYXR1cmluZyBicmFsZXRzIGFuZCB0b3BzLiBPcmdhbmljIENvZGUgc3BlY2lhbGl6ZXMgaW4gaGFuZC1tYWRlIGFwcGFyZWwgdXNpbmcgbmF0dXJhbGx5LWR5ZWQgMTAwJSBvcmdhbmljIGNvdHRvbiwgbWFkZSBsb2NhbGx5IG9uIEplanUgSXNsYW5kLiAnKTtcclxuXHJcbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWRpdC5pbm5lckhUTUwgPSBcclxuICAgICAgICAnPHN0cm9uZz5Nb2RlbHM6PC9zdHJvbmc+IDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Vzbmdtbi9cIj5TZXVuZ21pbiBMZWU8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9sbGFtb2JlbGVuL1wiPkdheW91bmcgTGVlPC9hPic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGl0bGUsIHN1YnRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgYnJhbmRMaW5rLCBpbWdfY292ZXIsIGludHJvSGVhZGluZywgaW50cm8sIGNyZWRpdCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzID0gY3JlYXRlSW1hZ2VzKGkwMyxpMDAsIGkwMSwgaTAyLGkwNCxpMDUsaTA2LGkwNyxpMDgsaTA5LGkxMCxpMTEsaTEyLGkxMyk7XHJcbiAgICBcclxuICAgIGltYWdlcy5mb3JFYWNoKGltZyA9PiB7cHJvai5wdXNoQ29udGVudChpbWcpfSk7XHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmdhbmljOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiXHJcblxyXG5jb25zdCBwcmludEZhc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiUHJpbnQgRmFzdCwgUGlsZSBIaWdoIVwiLCAyMDE5LCBcIkNvcGVuaGFnZW4sIERlbm1hcmtcIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFjYWRlbWljXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcInRlYWNoaW5nXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFkZGl0aXZlIG1hbnVmYWN0dXJpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiZGVzaWduXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImNvZGVcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBpbnRyb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaW50cm9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbnRyb2R1Y3Rpb25cIjtcclxuICAgIHByb2oucHVzaENvbnRlbnQoaW50cm9IZWFkaW5nKTtcclxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW50cm8udGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBHcmFzc2hvcHBlciBwbHVnaW4gZGV2ZWxvcGVkIGZvciBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgdGl0bGVkIFxcXCJQcmludCBGYXN0IFBpbGUgSGlnaFxcXCIsIGFuIG9mZnNob290IGZyb20gZGVzaWduIHJlc2VhcmNoIGFuZCBtYXRlcmlhbCBleHBlcmltZW50YXRpb24gb24gM0QtcHJpbnRpbmcgY29uZHVjdGVkIGF0IHRoZSBBQURSTCBhbmQgU2hhamF5IEJob29zaGFuJ3MgUGhEIHJlc2VhcmNoIG9uIGNvbmNyZXRlIGFkZGl0aXZlIG1hbnVmYWN0dXJpbmcuIFRoZSB3b3Jrc2hvcCBpcyBhIGNvbGxhYm9yYXRpdmUgZGVzaWduLWJ1aWxkIGV4ZXJjaXNlIHdoaWNoIHNlZWtzIHN5bmVyZ2llcyBiZXR3ZWVuIGNvbXB1dGF0aW9uYWwgbWFzb25yeSBhbmQgM0QgcHJpbnRpbmcgd2l0aCBzb2Z0LXJpZ2lkIG1hdGVyaWFscy4gVGhlIGFpbSBpcyB0byBleHBsb3JlIGdlb21ldHJpZXMgd2hpY2ggYXJlIHN0cnVjdHVyYWxseSBhd2FyZSBhbmQgdGhlaXIgYXNzb2NpYXRlZCBkZXNpZ24gc3BhY2UsIGluIHJlbGF0aW9uIHRvIHRoZWlyIG1hdGVyaWFsaXR5IGFuZCBmYWJyaWNhdGlvbiB0ZWNobm9sb2d5LiBDbGF5IGlzIHVzZWQgYXMgbWF0ZXJpYWwgYW5kIGl0cyBkb21pbmFudCBjb21wcmVzc2lvbiBjYXBhY2l0eSBpcyB0aGUgbWFpbiBwYXJhbWV0ZXIgdG8gZXhwbG9yZSBhbmQgdXNlIHRvIGRlc2lnbiBkaWdpdGFsIGdlb21ldHJpZXMgYWNjb3JkaW5nbHkuIFRyYWRpdGlvbmFsIGxheWVyLWJ5LWxheWVyIDNkIHByaW50aW5nIG1ldGhvZHMgaXMgcXVlc3Rpb25lZCBpbiBmYXZvciBvZiBhIG1ldGhvZG9sb2d5IHdoaWNoIGFsaWducyBnZW9tZXRyaWMgcmVwcmVzZW50YXRpb24gaW4gZGlnaXRhbCBzcGFjZSB3aXRoIHRoZSBwaHlzaWNhbCBtYW51ZmFjdHVyaW5nIHByb2Nlc3MuIEZ1bmN0aW9uIFJlcHJlc2VudGF0aW9ucyAoRi1SZXApIGFuZCBpbWFnZSBiYXNlZCB0ZWNobm9sb2d5IGlzIGVtcGxveWVkIHRvIGdlbmVyYXRlIGRpZ2l0YWwgZ2VvbWV0cmllcyB3aXRoIGEgY3VzdG9tIHRvb2xraXQgYmVmb3JlIHRvIGJlIHRyYW5zbGF0ZWQgaW50byByb2JvdGljIGluc3RydWN0aW9ucyBmb3IgdGhlIHBoeXNpY2FsIHdvcmxkLiBcIlxyXG4gICAgcHJvai5wdXNoQ29udGVudChpbnRybyk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZmVhdHVyZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZlYXR1cmVzXCI7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGZlYXR1cmVIZWFkaW5nKTtcclxuXHJcbiAgICBjb25zdCBmZWF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZmVhdHVyZS50ZXh0Q29udGVudCA9IFwiVGhlIHBsdWdpbiBpbXBsZW1lbnRzIHRoZSBTREYgZnVuY3Rpb24gYXBwcm9hY2ggdG8gZ2VuZXJhdGUgM0QtcHJpbnRhYmxlIGZvcm1zIG91dGxpbmVkIGluIHRoZSBwYXBlciBGdW5jdGlvbiBSZXByZXNlbnRhdGlvbiBmb3IgUm9ib3RpYyAzRCBQcmludGVkIENvbmNyZXRlIChCaG9vc2hhbiAyMDE4KS5cIjtcclxuICAgIHByb2oucHVzaENvbnRlbnQoZmVhdHVyZSk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcDEudGV4dENvbnRlbnQgPSBcIkJsZW5kaW5nLCBib29sZWFuIGFuZCBwbGFuZSB0cmltbWluZyBvcGVyYXRpb25zIHRvIG1hbmlwdWxhdGUgZmllbGQgZnVuY3Rpb25zXCI7XHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiTXVsdGktdGhyZWFkaW5nIGZvciBjYWxjdWxhdGlvbi1pbnRlbnNpdmUgY29tcG9uZW50c1wiO1xyXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcDMudGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgY29tcG9uZW50cyB0byB2aXN1YWxpemUgZ2VvbWV0cmljIG91dHB1dFwiO1xyXG4gICAgZmVhdHVyZUxpc3QuYXBwZW5kKHAxLHAyLHAzKTtcclxuICAgIHByb2oucHVzaENvbnRlbnQoZmVhdHVyZUxpc3QpO1xyXG5cclxuICAgIHJldHVybiBwcm9qO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50RmFzdDsiLCJpbXBvcnQgbXlXZWJzaXRlIGZyb20gXCIuL2NvbnRlbnQvcHJval9teVdlYnNpdGVcIjtcclxuaW1wb3J0IHByaW50RmFzdCBmcm9tIFwiLi9jb250ZW50L3Byb2pfcHJpbnRGYXN0XCI7XHJcbmltcG9ydCBhYWcgZnJvbSBcIi4vY29udGVudC9wcm9qX2FhZ1wiO1xyXG5pbXBvcnQgbWF0bmV0IGZyb20gJy4vY29udGVudC9wcm9qX21hdG5ldCc7XHJcbmltcG9ydCBkcm9uZXMgZnJvbSAnLi9jb250ZW50L3Byb2pfZHJvbmVzJztcclxuaW1wb3J0IG5scDRtcyBmcm9tIFwiLi9jb250ZW50L3Byb2pfbmxwNG1zXCI7XHJcbmltcG9ydCBvcmdhbmljIGZyb20gXCIuL2NvbnRlbnQvcHJval9vcmdhbmljXCI7XHJcblxyXG5jb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBNYXAoKTtcclxuICAgIHByb2plY3RzLnNldCgncHJpbnRGYXN0JywgIHByaW50RmFzdCgpKTtcclxuICAgIHByb2plY3RzLnNldCgnYWFnJywgYWFnKCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCd3ZWJzaXRlJywgbXlXZWJzaXRlKCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdtYXRuZXQnLCBtYXRuZXQoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ2Ryb25lcycsIGRyb25lcygpKTtcclxuICAgIHByb2plY3RzLnNldCgnbmxwNG1zJywgbmxwNG1zKCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdvcmdhbmljJywgb3JnYW5pYygpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdHM7IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XHJcbiAgICByZXR1cm4gKG8gaW5zdGFuY2VvZiBFbGVtZW50KTtcclxufVxyXG5cclxuLy9jb21wYXJlIHR3byBodG1sIGVsZW1lbnRzLiBtdXN0IGJlIGh0bWwgZWxlbWVudHMuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcmVFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoIWlzRWxlbWVudChhKSB8fCAhaXNFbGVtZW50KGIpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoYS5ub2RlTmFtZSAhPT0gYi5ub2RlTmFtZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGEudGV4dENvbnRlbnQgIT09IGIudGV4dENvbnRlbnQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFRleHQodGFnLCB0ZXh0KSB7XHJcbiAgICBpZiAodHlwZW9mIHRhZyAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc291cmNlID0gJycpIHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IHNvdXJjZTtcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZXMoKSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLnNyYyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBvdXRwdXQucHVzaChpbWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWd1cmUoc291cmNlID0gJycsIGNhcHRpb24gPSAnJykge1xyXG4gICAgaWYgKHR5cGVvZiBjYXB0aW9uICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKFwiY2FwdGlvbiBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHJcbiAgICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IHNvdXJjZTtcclxuICAgIGNvbnN0IGNhcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XHJcbiAgICBjYXB0LnRleHRDb250ZW50ID0gJ2ZpZzogJyArIGNhcHRpb247XHJcbiAgICBmaWd1cmUuYXBwZW5kKGltZywgY2FwdCk7XHJcbiAgICByZXR1cm4gZmlndXJlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vQ29udHJvbGxlcic7XHJcblxyXG5cclxuY29uc3QgYXBwID0gbmV3IENvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=