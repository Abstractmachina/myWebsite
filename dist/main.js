/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_checkboxes.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_checkboxes.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projectFilter > div {\n  text-align: center;\n  display: flex;\n  align-items: center; }\n\n.tgl {\n  display: none; }\n  .tgl + .tgl-btn {\n    content: attr(data-tg-on);\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    overflow: hidden;\n    backface-visibility: hidden;\n    transition: all 0.2s ease;\n    vertical-align: middle;\n    font-size: 0.8em; }\n    .tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      transition: all 0.2s ease;\n      width: 100%;\n      position: absolute;\n      line-height: 1.8em;\n      font-weight: 400;\n      color: black; }\n    .tgl + .tgl-btn:after {\n      left: 100%;\n      content: attr(data-tg-on); }\n    .tgl + .tgl-btn:before {\n      left: 0;\n      content: attr(data-tg-off); }\n    .tgl + .tgl-btn:active {\n      background: #888;\n      border-radius: 0.5em; }\n      .tgl + .tgl-btn:active:before {\n        left: -10%;\n        border-radius: 0.5em; }\n  .tgl:checked + .tgl-btn {\n    border-color: transparent;\n    /* remove the border's colour */\n    box-shadow: 0 0 0 2px #ffdd00;\n    /* emulate the border */\n    border-radius: 1em;\n    vertical-align: middle; }\n    .tgl:checked + .tgl-btn:before {\n      left: -100%;\n      border-radius: 0; }\n    .tgl:checked + .tgl-btn:after {\n      left: 0; }\n    .tgl:checked + .tgl-btn:active:after {\n      background: #888;\n      border-radius: 0.5em;\n      left: 10%; }\n", "",{"version":3,"sources":["webpack://./src/styles/style_anim_checkboxes.scss"],"names":[],"mappings":"AAGA;EACI,kBAAkB;EAClB,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACE,aAAa,EAAA;EADf;IAMI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAElB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IAEtB,gBAAgB,EAAA;IAjBpB;MAqBQ,yBAAyB;MACzB,WAAW;MACX,kBAAkB;MAElB,kBAAkB;MAClB,gBAAgB;MAChB,YAAY,EAAA;IA3BpB;MA8BQ,UAAU;MACV,yBAAyB,EAAA;IA/BjC;MAmCQ,OAAO;MACP,0BAA0B,EAAA;IApClC;MAwCQ,gBAAgB;MAChB,oBAAoB,EAAA;MAzC5B;QA2CU,UAAU;QACV,oBAAoB,EAAA;EA5C9B;IAqDI,yBAAyB;IAAE,+BAAA;IAC3B,6BA/D2B;IA+DU,uBAAA;IAErC,kBAAkB;IAClB,sBAAsB,EAAA;IAzD1B;MAgEQ,WAAW;MACX,gBAAgB,EAAA;IAjExB;MAqEQ,OAAO,EAAA;IArEf;MAyEQ,gBAAgB;MAChB,oBAAoB;MACpB,SAAS,EAAA","sourcesContent":["$col_emphasis: rgb(255, 221, 0);\r\n\r\n\r\n.projectFilter>div{\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.tgl {\r\n  display: none;\r\n\r\n  + .tgl-btn {\r\n    // display: inline-block;\r\n    // width: 6em;\r\n    content: attr(data-tg-on);\r\n    height: 2em;\r\n    position: relative;\r\n    // position: absolute;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    backface-visibility: hidden;\r\n    transition: all 0.2s ease;\r\n    vertical-align: middle;\r\n\r\n    font-size: 0.8em;\r\n\r\n    &:after,\r\n    &:before {\r\n        transition: all 0.2s ease;\r\n        width: 100%;\r\n        position: absolute;\r\n        // vertical-align: middle;\r\n        line-height: 1.8em;\r\n        font-weight: 400;\r\n        color: black;\r\n    }\r\n    &:after {\r\n        left: 100%;\r\n        content: attr(data-tg-on);\r\n      }\r\n  \r\n      &:before {\r\n        left: 0;\r\n        content: attr(data-tg-off);\r\n      }\r\n  \r\n      &:active {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        &:before {\r\n          left: -10%;\r\n          border-radius: 0.5em;\r\n        }\r\n      }\r\n\r\n      \r\n  }\r\n\r\n  &:checked + .tgl-btn {\r\n    // border-color: var(--col_emphasis);\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 2px $col_emphasis; /* emulate the border */\r\n    // border-style: solid;\r\n    border-radius: 1em;\r\n    vertical-align: middle;\r\n    // line-height: 1.5em;\r\n\r\n    &:after,\r\n    &:before {\r\n    }\r\n    &:before {\r\n        left: -100%;\r\n        border-radius: 0;\r\n    }\r\n\r\n    &:after {\r\n        left: 0;\r\n    }\r\n\r\n    &:active:after {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        left: 10%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_projectArrow.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_projectArrow.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/monolisk_black.woff */ "./src/assets/monolisk_black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n#projectArrow:active {\n  border-radius: 1em; }\n  #projectArrow:active.link {\n    color: #ffdd00;\n    border-color: transparent;\n    background-color: #e5e5e5; }\n\n.link {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  text-decoration: none;\n  transform: rotate(-90deg) translate3d(200px, -130px, 0);\n  cursor: pointer; }\n  .link__arrow {\n    display: inline-flex; }\n    .link__arrow span {\n      position: relative;\n      width: 14px;\n      height: 2px;\n      border-radius: 2px;\n      overflow: hidden;\n      background: #BEBDBE;\n      z-index: 2; }\n      .link__arrow span:nth-child(1) {\n        transform-origin: left bottom;\n        transform: rotate(45deg) translate3d(8px, -10px, 0); }\n      .link__arrow span:nth-child(2) {\n        transform-origin: left bottom;\n        transform: rotate(-45deg); }\n      .link__arrow span:after {\n        content: '';\n        display: block;\n        position: absolute;\n        left: 0;\n        width: 0;\n        height: 6px;\n        background: #ffdd00; }\n  .link__line {\n    position: relative;\n    margin-left: -14px;\n    margin-right: 30px;\n    width: 150px;\n    height: 4px;\n    background: #BEBDBE;\n    overflow: hidden;\n    z-index: 1; }\n    .link__line:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 140px;\n      width: 20px;\n      height: 4px;\n      background: #ffdd00; }\n  .link__text {\n    color: #4A4A4A;\n    font-size: 1em; }\n  .link:hover {\n    font-weight: 400;\n    background-color: transparent; }\n    .link:hover .link__line:after {\n      animation: animation-line 1.2s forwards; }\n    .link:hover .link__arrow span:after {\n      animation: animation-arrow 1.2s forwards;\n      animation-delay: 1s; }\n\n@keyframes animation-line {\n  0% {\n    left: 140px; }\n  100% {\n    left: 0; } }\n\n@keyframes animation-arrow {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n", "",{"version":3,"sources":["webpack://./src/styles/_themes.scss","webpack://./src/styles/style_anim_projectArrow.scss"],"names":[],"mappings":"AAOA;EACI,6BAA6B;EAC7B,2DAAwD,EAAA;;ACH5D;EAYI,kBAAkB,EAAA;EAZtB;IAIQ,cDPuB;ICSvB,yBAAyB;IAEzB,yBDVyB,EAAA;;ACiBjC;EAEI,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EAErB,uDAAuD;EACvD,eAAe,EAAA;EAEf;IACA,oBAAoB,EAAA;IADnB;MAIO,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,kBAAkB;MAClB,gBAAgB;MAChB,mBAAmB;MACnB,UAAU,EAAA;MAVjB;QAaO,6BAA6B;QAC7B,mDAAmD,EAAA;MAd1D;QAkBO,6BAA6B;QAC7B,yBAAyB,EAAA;MAnBhC;QAuBO,WAAW;QACX,cAAc;QACd,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,WAAW;QACX,mBDzDmB,EAAA;EC8D3B;IACA,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,UAAU,EAAA;IART;MAWG,WAAW;MACX,cAAc;MACd,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,WAAW;MACX,mBD/EuB,EAAA;ECmF3B;IACA,cAAc;IACd,cAAc,EAAA;EAnElB;IAuEQ,gBAAgB;IAChB,6BAA6B,EAAA;IAxErC;MA4EgB,uCAAuC,EAAA;IA5EvD;MAmFgB,wCAAwC;MACxC,mBAAmB,EAAA;;AASnC;EACE;IACE,WAAW,EAAA;EAGb;IACE,OAAO,EAAA,EAAA;;AAIX;EACE;IACE,QAAQ,EAAA;EAGV;IACE,WAAW,EAAA,EAAA","sourcesContent":["\r\n$color_paper: white;\r\n$color_registration:black;\r\n$color_accent: rgb(255, 221, 0);\r\n$color_active: rgb(229, 229, 229);\r\n\r\n\r\n@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('../assets/monolisk_black.woff') format('woff');\r\n}\r\n\r\n$font_default: 'Montserrat', sans-serif;\r\n$font_special: 'Monoloisk Black', sans-serif;","@import 'themes';\r\n\r\n// #projectArrow {\r\n\r\n// }\r\n\r\n#projectArrow:active {\r\n\r\n    &.link{\r\n\r\n        color: $color_accent;\r\n        // font-weight: bold;\r\n        border-color: transparent;\r\n        // box-shadow: 0 0 0 3px $color_accent;\r\n        background-color: $color_active;\r\n    }\r\n    // background-color: $color_accent;\r\n    \r\n    border-radius: 1em;\r\n}\r\n\r\n.link {\r\n    $self: &;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px;\r\n    text-decoration: none;\r\n    //   transform: rotate(-90deg) translate3d(-300px, 0, 0);\r\n    transform: rotate(-90deg) translate3d(200px, -130px, 0);\r\n    cursor: pointer;\r\n\r\n    &__arrow {\r\n    display: inline-flex;\r\n\r\n        span {\r\n            position: relative;\r\n            width: 14px;\r\n            height: 2px;\r\n            border-radius: 2px;\r\n            overflow: hidden;\r\n            background: #BEBDBE;\r\n            z-index: 2;\r\n\r\n            &:nth-child(1) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(45deg) translate3d(8px, -10px, 0);\r\n            }\r\n\r\n            &:nth-child(2) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(-45deg);\r\n            }\r\n\r\n            &:after {\r\n            content: '';\r\n            display: block;\r\n            position: absolute;\r\n            left: 0;\r\n            width: 0;\r\n            height: 6px;\r\n            background: $color_accent;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__line {\r\n    position: relative;\r\n    margin-left: -14px;\r\n    margin-right: 30px;\r\n    width: 150px;\r\n    height: 4px;\r\n    background: #BEBDBE;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n\r\n    &:after {\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        left: 140px;\r\n        width: 20px;\r\n        height: 4px;\r\n        background: $color_accent;\r\n    }\r\n    }\r\n\r\n    &__text {\r\n    color: #4A4A4A;\r\n    font-size: 1em;\r\n    }\r\n\r\n    &:hover {\r\n        font-weight: 400;\r\n        background-color: transparent;\r\n        #{$self} {\r\n            &__line {\r\n            &:after {\r\n                animation: animation-line 1.2s forwards;\r\n            }\r\n            }\r\n\r\n            &__arrow {\r\n            span {\r\n                &:after {\r\n                animation: animation-arrow 1.2s forwards;\r\n                animation-delay: 1s;\r\n                }\r\n            }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@keyframes animation-line {\r\n  0% {\r\n    left: 140px;\r\n  }\r\n\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animation-arrow {\r\n  0% {\r\n    width: 0;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_main.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_main.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/monolisk_black.woff */ "./src/assets/monolisk_black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.9em; }\n\n.root {\n  display: flex;\n  justify-content: center; }\n\na {\n  color: black;\n  text-decoration: underline;\n  text-decoration-color: #ffdd00;\n  text-decoration-thickness: 0.2em; }\n\na:hover {\n  background-color: #ffdd00; }\n\n.mainContainer {\n  height: 100vh;\n  width: 50%;\n  background-color: white;\n  margin: 0;\n  flex-shrink: 0; }\n\n/* LEFT MAIN */\n.left {\n  margin: 0;\n  padding: 0em 8em;\n  padding-top: 4em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start; }\n\n/*========  HEADER  ==================*/\nheader :first-child {\n  width: 11.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  white-space: nowrap;\n  margin-bottom: 2em;\n  margin-left: 0.3em; }\n\nbtn\nheader :first-child h1 {\n  margin: 0;\n  font-weight: 800;\n  font-size: 2em;\n  padding: 0; }\n\nheader :first-child h2 {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 200; }\n\n#btn_profile {\n  display: flex;\n  height: 2em;\n  width: 8em;\n  align-items: center;\n  font-size: 0.7em; }\n\n#btn_profile :first-child {\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  vertical-align: center;\n  margin-left: auto; }\n\n#btn_profile svg {\n  flex-shrink: 0;\n  margin: 0;\n  margin-left: -1.2em;\n  margin-right: -1.2em;\n  padding: 0;\n  scale: 0.25;\n  /* transform: translate(-3em, -2em); */\n  width: 40px;\n  height: 40px; }\n\n#btn_profile:hover {\n  border-bottom: 0.3em solid var(--col_emphasis);\n  cursor: pointer;\n  font-weight: 600;\n  stroke-width: 5; }\n\n#btn_profile:active {\n  background-color: #ffdd00;\n  border-radius: 1em; }\n\n/* =======  RIGHT MAIN  ==========*/\n.right {\n  background-color: #0f0f0f;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.circleContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2em; }\n\n.circle {\n  background-color: white;\n  width: 15em;\n  height: 15em;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover; }\n\n/*ABOUT TAB*/\n.about {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: calc(100% - 25px);\n  top: 0%;\n  width: 50%;\n  height: 100%;\n  background-color: white;\n  z-index: 10;\n  opacity: 1;\n  transition-property: left, width;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.aboutContainer {\n  padding: 4em 8em; }\n\n.about hr {\n  border: 0 none;\n  height: 1px;\n  background-color: #eee;\n  margin-bottom: 2em; }\n\n.about h3 {\n  font-weight: 200;\n  margin-bottom: -0.4em;\n  margin-top: 6em; }\n\n.about .links {\n  display: flex;\n  justify-content: space-between; }\n\n/*=======   INDEX TAB   ============*/\n.projectIndex {\n  position: fixed;\n  top: 100%;\n  left: 0%;\n  width: 50%;\n  height: 200%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1em 0;\n  opacity: 0;\n  transition-property: top, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.projectIndexSlideIn {\n  top: 30%;\n  opacity: 1; }\n\n.projectFilter {\n  padding: 1em 2em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 0.75em; }\n\n.projectIndexTable {\n  margin: 0em 1em;\n  border-collapse: collapse;\n  font-size: 0.8em; }\n\n.projectIndexTable th {\n  font-size: 0.7em;\n  font-weight: 200;\n  text-align: left;\n  padding: 0.2em 0.5em; }\n\n.projectIndexTable td {\n  padding: 0.5em 0.5em;\n  overflow-wrap: break-word; }\n\n.projectIndexTable tr:hover {\n  cursor: pointer;\n  border-color: transparent;\n  /* remove the border's colour */\n  box-shadow: 0 0 0 0.5px lightgray;\n  /* emulate the border */ }\n\n.projectIndexTable tr:active {\n  background-color: var(--col_emphasis); }\n\n.selected {\n  background-color: #eaeaea; }\n\n/* ======   CIRCLE PREVIEWS     =======*/\n.banner {\n  position: fixed;\n  color: var(--col_emphasis);\n  text-align: center;\n  font-family: \"Monolisk Black\", sans-serif;\n  font-size: 10em; }\n\n/* ======   PROJECT TAB     =======*/\n.projectTab {\n  background-color: white;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: 100%;\n  top: 0%;\n  width: 50%;\n  height: 100%;\n  opacity: 0.5;\n  z-index: 5;\n  /* padding: 2em 4em; */\n  transition-property: left, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.leftEdge {\n  /* height: 100%; */\n  width: 25px;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  border-right: 0.5px dotted #949494;\n  border-left: 1px dotted black;\n  writing-mode: vertical-lr;\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.leftEdge:hover {\n  background-color: #ffdd00;\n  font-weight: 400;\n  cursor: pointer; }\n\n.leftEdge:active {\n  background-color: #e5e5e5; }\n\n.topEdge {\n  height: 10px;\n  width: 100%;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  border-bottom: 0.5px dotted #949494;\n  border-top: 1px dotted black;\n  /* writing-mode:vertical-lr; */\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.projectContentContainer {\n  height: 100%;\n  padding: 2em 4em;\n  overflow: auto; }\n\n.closeProject {\n  background-color: brown;\n  width: 2em;\n  height: 2em; }\n\n.closeProject:hover {\n  background-color: azure; }\n\n.projectTab img {\n  width: 100%; }\n\n.projectVideoContainer {\n  margin: 0; }\n\n.projectTab h3 {\n  margin-top: 2em;\n  margin-bottom: -0.5em; }\n\n.projectTab h5 {\n  margin-top: 1em; }\n\n.projectTab figure img {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px; }\n\n.projectTab figcaption {\n  font-family: 'Source Serif Pro', serif;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 0.8em;\n  padding-top: 0.3em; }\n\n.slideInFromRight {\n  left: 50%;\n  opacity: 1; }\n\n.footer {\n  /* font-family: 'Source Serif Pro', serif; */\n  font-size: 0.8em;\n  font-weight: 100;\n  color: #818181;\n  /* font-style: italic; */\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  z-index: 0;\n  width: 50%;\n  height: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px dotted black; }\n", "",{"version":3,"sources":["webpack://./src/styles/_themes.scss","webpack://./src/styles/style_main.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n$color_paper: white;\r\n$color_registration:black;\r\n$color_accent: rgb(255, 221, 0);\r\n$color_active: rgb(229, 229, 229);\r\n\r\n\r\n@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('../assets/monolisk_black.woff') format('woff');\r\n}\r\n\r\n$font_default: 'Montserrat', sans-serif;\r\n$font_special: 'Monoloisk Black', sans-serif;","@import \"themes\";\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    \r\n    margin: 0;\r\n    font-family: $font_default;\r\n    font-size: 0.9em;\r\n    \r\n}\r\n\r\n.root {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\na {\r\n    color: black;\r\n    text-decoration: underline;\r\n    text-decoration-color: $color_accent;\r\n    text-decoration-thickness: 0.2em;\r\n}\r\na:hover {\r\n    background-color: $color_accent;\r\n}\r\n\r\n.mainContainer {\r\n    height: 100vh;\r\n    width: 50%;\r\n    background-color: white;\r\n    margin: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\n/* LEFT MAIN */\r\n.left {\r\n    margin: 0;\r\n    padding: 0em 8em;\r\n    padding-top: 4em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n\r\n/*========  HEADER  ==================*/\r\n\r\nheader :first-child {\r\n    width:11.5em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    white-space:nowrap;\r\n    margin-bottom: 2em;\r\n    margin-left:0.3em;\r\n}\r\nbtn\r\n/*logo*/\r\nheader :first-child h1 {\r\n    margin:0;\r\n    font-weight: 800;\r\n    font-size: 2em;\r\n    padding: 0;\r\n}\r\n\r\nheader :first-child h2 {\r\n    margin:0;\r\n    font-size: 1em;\r\n    font-weight: 200;\r\n}\r\n\r\n#btn_profile {\r\n    display: flex;\r\n    height:2em;\r\n    width: 8em;\r\n    align-items: center;\r\n    font-size: 0.7em;\r\n}\r\n\r\n#btn_profile :first-child{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    margin-left: auto;\r\n}\r\n\r\n#btn_profile svg {\r\n    flex-shrink: 0;\r\n    margin:0;\r\n    margin-left: -1.2em;\r\n    margin-right: -1.2em;\r\n    padding: 0;\r\n    scale: 0.25;\r\n    /* transform: translate(-3em, -2em); */\r\n    width: 40px;\r\n    height:40px;\r\n}\r\n\r\n#btn_profile:hover {\r\n    border-bottom: 0.3em solid var(--col_emphasis);\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    stroke-width: 5;\r\n}\r\n\r\n#btn_profile:active {\r\n    background-color: $color_accent;\r\n    border-radius: 1em;\r\n}\r\n\r\n\r\n/* =======  RIGHT MAIN  ==========*/\r\n.right {\r\n    background-color: rgb(15, 15, 15);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.circleContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2em;\r\n}\r\n\r\n.circle {\r\n    background-color: white;\r\n    width: 15em;\r\n    height: 15em;\r\n    border-radius: 50%;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n/*ABOUT TAB*/\r\n.about {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:calc(100% - 25px);\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: white;\r\n    z-index: 10;\r\n    opacity: 1;\r\n    transition-property: left, width;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n    \r\n}\r\n\r\n.aboutContainer {\r\n    padding: 4em 8em;\r\n}\r\n\r\n.about hr {\r\n    border: 0 none;\r\n    height: 1px;\r\n    background-color: #eee;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.about h3 {\r\n    font-weight: 200;\r\n    margin-bottom: -0.4em;\r\n    margin-top: 6em;\r\n\r\n}\r\n\r\n.about .links{\r\n    display: flex;\r\n    justify-content:space-between;\r\n\r\n}\r\n\r\n\r\n/*=======   INDEX TAB   ============*/\r\n.projectIndex {\r\n    position: fixed;\r\n    top: 100%;\r\n    left: 0%;\r\n    width: 50%;\r\n    height:200%;\r\n    background-color:white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    padding: 1em 0;\r\n    opacity: 0;\r\n    transition-property: top, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.projectIndexSlideIn {\r\n    top:30%;\r\n    opacity: 1;\r\n}\r\n\r\n.projectFilter {\r\n    padding: 1em 2em;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 0.75em;\r\n}\r\n\r\n.projectIndexTable {\r\n    margin: 0em 1em;\r\n    border-collapse: collapse;\r\n    font-size: 0.8em;\r\n}\r\n\r\n\r\n.projectIndexTable th {\r\n    font-size: 0.7em;\r\n    font-weight: 200;\r\n    text-align: left;\r\n    padding: 0.2em 0.5em;\r\n}\r\n\r\n.projectIndexTable td {\r\n    padding: 0.5em 0.5em;\r\n    overflow-wrap: break-word;\r\n}\r\n.projectIndexTable tr {\r\n    \r\n}\r\n.projectIndexTable tr:hover {\r\n    cursor: pointer;\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 0.5px rgb(211, 211, 211); /* emulate the border */\r\n}\r\n.projectIndexTable tr:active {\r\n    background-color: var(--col_emphasis);\r\n}\r\n\r\n .selected {\r\n    background-color: rgb(234, 234, 234);\r\n}\r\n\r\n\r\n/* ======   CIRCLE PREVIEWS     =======*/\r\n.banner {\r\n    position:fixed;\r\n    color: var(--col_emphasis);\r\n    text-align: center;\r\n    font-family: \"Monolisk Black\", sans-serif;\r\n    font-size: 10em;\r\n}\r\n\r\n\r\n/* ======   PROJECT TAB     =======*/\r\n\r\n.projectTab {\r\n    background-color: white;\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:100%;\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    opacity: 0.5;\r\n    z-index: 5;\r\n    /* padding: 2em 4em; */\r\n    transition-property: left, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.leftEdge {\r\n    /* height: 100%; */\r\n    width: 25px;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    border-right: 0.5px dotted rgb(148, 148, 148);\r\n    border-left: 1px dotted black;\r\n    writing-mode:vertical-lr;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n.leftEdge:hover {\r\n    background-color: $color_accent;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n}\r\n\r\n.leftEdge:active {\r\n    background-color: $color_active;\r\n}\r\n\r\n.topEdge {\r\n    height: 10px;\r\n    width: 100%;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    border-bottom: 0.5px dotted rgb(148, 148, 148);\r\n    border-top: 1px dotted black;\r\n    /* writing-mode:vertical-lr; */\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.projectContentContainer {\r\n    height: 100%;\r\n    padding: 2em 4em;\r\n\r\n    overflow: auto;\r\n    \r\n}\r\n\r\n.closeProject {\r\n    background-color: brown;\r\n    width: 2em;\r\n    height: 2em;\r\n}\r\n\r\n.closeProject:hover {\r\n    background-color:azure;\r\n}\r\n\r\n.projectTab img {\r\n    width: 100%;\r\n}\r\n\r\n.projectVideoContainer {\r\n    margin: 0;\r\n}\r\n\r\n.projectTab h3 {\r\n    margin-top: 2em;\r\n    margin-bottom: -0.5em;\r\n}\r\n\r\n.projectTab h5 {\r\n    margin-top: 1em;\r\n}\r\n\r\n.projectTab figure img {\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 1px;\r\n}\r\n\r\n.projectTab figcaption {\r\n    font-family: 'Source Serif Pro', serif;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-size: 0.8em;\r\n    padding-top: 0.3em;\r\n}\r\n\r\n.slideInFromRight {\r\n    left: 50%;\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n.footer {\r\n    /* font-family: 'Source Serif Pro', serif; */\r\n    font-size: 0.8em;\r\n    font-weight: 100;\r\n    color: rgb(129, 129, 129);\r\n    /* font-style: italic; */\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0;\r\n    z-index: 0;\r\n    width: 50%;\r\n    height: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-top: 1px dotted black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_mobile.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_mobile.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 600px) {\n  .root {\n    display: block;\n    flex-direction: column;\n    overflow: hidden;\n    height: 100vh; }\n  .mainContainer {\n    width: 100%; }\n  .left {\n    height: 100vh;\n    padding: 3em; }\n  .right {\n    flex-shrink: 1; }\n  .about {\n    width: 100vw; }\n    .about .aboutContainer {\n      overflow: auto;\n      padding: 3em 2em; }\n  .projectIndex {\n    width: 100vw; }\n  .projectIndexSlideIn {\n    top: 35%; }\n  .projectTab {\n    width: 100vw; }\n    .projectTab h1 {\n      font-size: 1.5em; }\n    .projectTab h2 {\n      font-size: 1.2em;\n      font-weight: 600; }\n    .projectTab h3 {\n      font-size: 1.1em; }\n    .projectTab h4 {\n      font-weight: 600;\n      margin-top: 0.5em; }\n    .projectTab h5 {\n      font-weight: 600;\n      margin-bottom: -0.3em; }\n    .projectTab ul {\n      padding-left: 1.5em; }\n    .projectTab img {\n      margin-top: 1em;\n      margin-bottom: -1em; }\n    .projectTab figure {\n      margin: 0; }\n    .projectTab figcaption {\n      margin-top: 1em; }\n  .projectContentContainer {\n    padding: 3em 1em;\n    padding-right: 3.5em; }\n  .slideInFromRight {\n    left: 5px; }\n  .footer {\n    width: 100vw; }\n  .link__line:after {\n    animation: animation-line-looped 1.5s forwards;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite; }\n  .link__arrow span:after {\n    animation: animation-arrow-looped;\n    animation-duration: 1.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite; }\n  @keyframes animation-line-looped {\n    0% {\n      left: 140px; }\n    70% {\n      left: 0; }\n    100% {\n      left: -30px; } }\n  @keyframes animation-arrow-looped {\n    0% {\n      width: 0; }\n    70% {\n      width: 0; }\n    100% {\n      width: 100%; } } }\n", "",{"version":3,"sources":["webpack://./src/styles/style_mobile.scss"],"names":[],"mappings":"AAAA;EACI;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,aAAa,EAAA;EAGjB;IAEI,WAAW,EAAA;EAGf;IACI,aAAa;IACb,YAAY,EAAA;EAGhB;IACI,cAAc,EAAA;EAWlB;IACI,YAAY,EAAA;IADhB;MAGQ,cAAc;MACd,gBAAgB,EAAA;EAMxB;IACI,YAAY,EAAA;EAGhB;IACI,QAAQ,EAAA;EAIZ;IACI,YAAY,EAAA;IADhB;MAIQ,gBAAgB,EAAA;IAJxB;MAOQ,gBAAgB;MAChB,gBAAgB,EAAA;IARxB;MAWQ,gBAAgB,EAAA;IAXxB;MAeQ,gBAAgB;MAChB,iBAAiB,EAAA;IAhBzB;MAoBQ,gBAAgB;MAChB,qBAAqB,EAAA;IArB7B;MAyBQ,mBAAmB,EAAA;IAzB3B;MA4BQ,eAAe;MACf,mBAAmB,EAAA;IA7B3B;MAiCQ,SAAS,EAAA;IAjCjB;MAqCQ,eAAe,EAAA;EAKvB;IACI,gBAAgB;IAChB,oBAAoB,EAAA;EAGxB;IACI,SAAS,EAAA;EAGb;IACI,YAAY,EAAA;EAKX;IAEO,8CAA8C;IAE9C,iCAAiC;IACjC,mCAAmC,EAAA;EAI1C;IAGO,iCAAiC;IAEjC,wBAAwB;IACxB,iCAAiC;IACjC,mCAAmC,EAAA;EAM/C;IACI;MACE,WAAW,EAAA;IAGb;MACI,OAAO,EAAA;IAGX;MACE,WAAW,EAAA,EAAA;EAIjB;IACI;MACE,QAAQ,EAAA;IAGV;MACI,QAAQ,EAAA;IAGZ;MACE,WAAW,EAAA,EAAA,EAAA","sourcesContent":["@media (max-width: 600px) {\r\n    .root {\r\n        display: block;\r\n        flex-direction: column;\r\n        overflow: hidden;;\r\n        height: 100vh;\r\n    }\r\n\r\n    .mainContainer {\r\n        // height: 50%;\r\n        width: 100%;\r\n    }\r\n\r\n    .left {\r\n        height: 100vh;\r\n        padding: 3em;\r\n    }   \r\n\r\n    .right {\r\n        flex-shrink: 1;\r\n        // height:30%;\r\n        // .circleContainer {\r\n        //     flex-direction: row;\r\n        //     .circle {\r\n        //         width: 10em;\r\n        //         height: 10em;\r\n        //     }\r\n        // }\r\n    }\r\n\r\n    .about {\r\n        width: 100vw;\r\n        .aboutContainer {\r\n            overflow: auto;\r\n            padding: 3em 2em;\r\n        }\r\n    }\r\n\r\n    \r\n\r\n    .projectIndex {\r\n        width: 100vw;\r\n    }\r\n    \r\n    .projectIndexSlideIn {\r\n        top: 35%;\r\n    }\r\n    \r\n    \r\n    .projectTab {\r\n        width: 100vw;\r\n\r\n        h1 {\r\n            font-size: 1.5em;\r\n        }\r\n        h2{\r\n            font-size: 1.2em;\r\n            font-weight: 600;\r\n        }\r\n        h3{\r\n            font-size: 1.1em;\r\n\r\n        }\r\n        h4{\r\n            font-weight: 600;\r\n            margin-top: 0.5em;\r\n\r\n        }\r\n        h5{\r\n            font-weight: 600;\r\n            margin-bottom: -0.3em;\r\n        }\r\n\r\n        ul{\r\n            padding-left: 1.5em;\r\n        }\r\n        img{\r\n            margin-top: 1em;\r\n            margin-bottom: -1em;\r\n        }\r\n\r\n        figure{\r\n            margin: 0;\r\n        }\r\n        \r\n        figcaption {\r\n            margin-top: 1em;\r\n        }\r\n        \r\n    }\r\n\r\n    .projectContentContainer {\r\n        padding: 3em 1em;\r\n        padding-right: 3.5em;\r\n    }\r\n\r\n    .slideInFromRight {\r\n        left: 5px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100vw;\r\n    }\r\n\r\n    .link {\r\n        $self: &;\r\n        &__line {\r\n            &:after {\r\n                animation: animation-line-looped 1.5s forwards;\r\n                // animation-duration: 3s;\r\n                animation-timing-function: linear;\r\n                animation-iteration-count: infinite;\r\n            }\r\n        }\r\n\r\n        &__arrow {\r\n            span {\r\n                &:after {\r\n                animation: animation-arrow-looped;\r\n                // animation-delay: 1s;\r\n                animation-duration: 1.5s;\r\n                animation-timing-function: linear;\r\n                animation-iteration-count: infinite;\r\n                }\r\n            }\r\n        }\r\n    \r\n    }\r\n    @keyframes animation-line-looped {\r\n        0% {\r\n          left: 140px;\r\n        }\r\n\r\n        70%{\r\n            left: 0;\r\n        }\r\n      \r\n        100% {\r\n          left: -30px;\r\n        }\r\n      }\r\n\r\n    @keyframes animation-arrow-looped {\r\n        0% {\r\n          width: 0;\r\n        }\r\n        \r\n        70% {\r\n            width: 0;\r\n        }\r\n\r\n        100% {\r\n          width: 100%;\r\n        }\r\n      }\r\n    \r\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style_anim_checkboxes.scss":
/*!***********************************************!*\
  !*** ./src/styles/style_anim_checkboxes.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style_anim_checkboxes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_checkboxes.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style_anim_projectArrow.scss":
/*!*************************************************!*\
  !*** ./src/styles/style_anim_projectArrow.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style_anim_projectArrow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_anim_projectArrow.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style_main.scss":
/*!************************************!*\
  !*** ./src/styles/style_main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style_main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style_mobile.scss":
/*!**************************************!*\
  !*** ./src/styles/style_mobile.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_mobile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style_mobile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style_mobile.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_mobile_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_mobile_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_mobile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_mobile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style_main.scss */ "./src/styles/style_main.scss");
/* harmony import */ var _styles_style_anim_projectArrow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style_anim_projectArrow.scss */ "./src/styles/style_anim_projectArrow.scss");
/* harmony import */ var _styles_style_anim_checkboxes_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style_anim_checkboxes.scss */ "./src/styles/style_anim_checkboxes.scss");
/* harmony import */ var _styles_style_mobile_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style_mobile.scss */ "./src/styles/style_mobile.scss");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");








const app = new _Controller__WEBPACK_IMPORTED_MODULE_4__.Controller();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxXQUFXLFlBQVksaUJBQWlCLE1BQU0sYUFBYSxvQkFBb0IsWUFBWSxLQUFLLFlBQVksV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixZQUFZLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxXQUFXLGFBQWEsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGlCQUFpQixZQUFZLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLGFBQWEsY0FBYyxpQkFBaUIsTUFBTSxtQkFBbUIsT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDcEUyQjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RjRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBaUI7QUFDcEM7QUFDQSxtQkFBbUIsd0RBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBaUI7QUFDNUM7QUFDQTtBQUNBLGlCQUFpQix3REFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ3REM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ2J6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNKO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QztBQUNBO0FBQ0Esd0JBQXdCLDREQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDckMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQ3ZCL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDakI3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDL0I5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJTO0FBQ087QUFDTztBQUNuRDtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQWlCO0FBQzdDO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQyxrQkFBa0Isd0RBQWlCO0FBQ25DLGtCQUFrQix3REFBaUI7QUFDbkMsa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkMsa0JBQWtCLHdEQUFpQjtBQUNuQyxrQkFBa0Isd0RBQWlCO0FBQ25DLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRrQjtBQUNxQjtBQUN6RDtBQUNBO0FBQ2dFO0FBQ2hFO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQyxxQkFBcUIsd0RBQWlCO0FBQ3RDLGlCQUFpQix3REFBaUI7QUFDbEMscUJBQXFCLHdEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQWlCO0FBQzFDO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFpQjtBQUM3QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QyxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFZTtBQUNxQjtBQUN6RDtBQUNBO0FBQytEO0FBQ1U7QUFDTjtBQUNZO0FBQzdCO0FBQ087QUFDVztBQUNwRTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQyxxQkFBcUIsd0RBQWlCO0FBQ3RDLGlCQUFpQix3REFBaUI7QUFDbEMscUJBQXFCLHdEQUFpQjtBQUN0QztBQUNBO0FBQ0EsZ0JBQWdCLDZEQUFhO0FBQzdCO0FBQ0EseUJBQXlCLHdEQUFpQjtBQUMxQztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBaUI7QUFDdkMseUJBQXlCLHdEQUFpQjtBQUMxQyxtQkFBbUIsd0RBQWlCO0FBQ3BDO0FBQ0EsbUJBQW1CLHdEQUFpQjtBQUNwQztBQUNBLG1CQUFtQix3REFBaUI7QUFDcEM7QUFDQTtBQUNBLDJCQUEyQixrREFBVyxDQUFDLGtFQUFrQjtBQUN6RCwyQkFBMkIsa0RBQVcsQ0FBQywrREFBZTtBQUN0RCxpQ0FBaUMsa0RBQVcsQ0FBQyxxRUFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWlCO0FBQ3RDO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXLENBQUMsdURBQU07QUFDOUMsMkJBQTJCLGtEQUFXLENBQUMsMkRBQVU7QUFDakQsNEJBQTRCLGtEQUFXLENBQUMsZ0VBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFpQjtBQUN2Qyx5QkFBeUIsd0RBQWlCO0FBQzFDLG1CQUFtQix3REFBaUI7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQix3REFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSwwRkFBMEYsWUFBWSxnQkFBZ0IsZ0JBQWdCLCtDQUErQyxZQUFZLDZEQUE2RCxNQUFNLE9BQU8sV0FBVyxZQUFZO0FBQzVXO0FBQ0E7QUFDQSxzRUFBc0Usa0JBQWtCLHlFQUF5RSxZQUFZLGdCQUFnQixnQkFBZ0IsK0NBQStDLFlBQVksNkRBQTZELE1BQU0sT0FBTyxXQUFXLFlBQVk7QUFDelc7QUFDQTtBQUNBLG9FQUFvRSxrQkFBa0IseUVBQXlFLFlBQVksZ0JBQWdCLGdCQUFnQiwrQ0FBK0MsWUFBWSw2REFBNkQsTUFBTSxPQUFPLFdBQVcsWUFBWTtBQUN2VztBQUNBO0FBQ0Esa0VBQWtFLGtCQUFrQix5RUFBeUUsWUFBWSxnQkFBZ0IsZ0JBQWdCLCtDQUErQyxZQUFZLDZEQUE2RCxNQUFNLE9BQU8sV0FBVyxZQUFZO0FBQ3JXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQzVHZ0I7QUFDTztBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLDZDQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBaUI7QUFDaEMsa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBLHlCQUF5Qix3REFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFpQjtBQUM3QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkMsa0JBQWtCLHdEQUFpQjtBQUNuQyxrQkFBa0Isd0RBQWlCO0FBQ25DLGtCQUFrQix3REFBaUI7QUFDbkMsa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkMsa0JBQWtCLHdEQUFpQjtBQUNuQyxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBaUI7QUFDeEM7QUFDQSxpQkFBaUIsd0RBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RFk7QUFDbUM7QUFDdkU7QUFDQTtBQUM2QztBQUNpQjtBQUNWO0FBQ2tCO0FBQ0U7QUFDWDtBQUM3RDtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DLHFCQUFxQix3REFBaUI7QUFDdEMsaUJBQWlCLHdEQUFpQjtBQUNsQyxxQkFBcUIsd0RBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQWlCO0FBQzFDO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFpQjtBQUM3QztBQUNBO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFZLENBQUMsb0RBQUk7QUFDdEMsNEJBQTRCLG1EQUFZLENBQUMsK0RBQVU7QUFDbkQsd0JBQXdCLG1EQUFZLENBQUMsd0RBQU87QUFDNUMsZ0NBQWdDLG1EQUFZLENBQUMsa0VBQWU7QUFDNUQsd0JBQXdCLG1EQUFZLENBQUMsbUVBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFpQjtBQUN6QztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQSw2QkFBNkIsbURBQVksQ0FBQyw0REFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmU7QUFDbUM7QUFDdkU7QUFDQTtBQUN1RDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFpQjtBQUNuQyxxQkFBcUIsd0RBQWlCO0FBQ3RDLGlCQUFpQix3REFBaUI7QUFDbEMscUJBQXFCLHdEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQVcsQ0FBQyw2REFBSztBQUN2QztBQUNBLHlCQUF5Qix3REFBaUI7QUFDMUM7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVksQ0FBQyw2REFBRyxDQUFDLDZEQUFHLEVBQUUsNkRBQUcsRUFBRSw2REFBRyxDQUFDLDZEQUFHLENBQUMsNkRBQUcsQ0FBQyw2REFBRyxDQUFDLDhEQUFHLENBQUMsOERBQUcsQ0FBQyw4REFBRyxDQUFDLDhEQUFHLENBQUMsOERBQUcsQ0FBQyw4REFBRyxDQUFDLDhEQUFHO0FBQ3pGO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ3pEYztBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLDZDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3lCO0FBQ0E7QUFDWjtBQUNNO0FBQ0E7QUFDQTtBQUNFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRUFBUztBQUN4Qyx3QkFBd0IsNkRBQUc7QUFDM0IsNEJBQTRCLG1FQUFTO0FBQ3JDLDJCQUEyQixnRUFBTTtBQUNqQywyQkFBMkIsZ0VBQU07QUFDakMsMkJBQTJCLGdFQUFNO0FBQ2pDLDRCQUE0QixpRUFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnBCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNhO0FBQ0Y7QUFDVjtBQUNuQztBQUMwQztBQUMxQztBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2NzcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX21haW4uc2NzcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX21vYmlsZS5zY3NzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzP2I5ZGMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3N0eWxlcy9zdHlsZV9hbmltX3Byb2plY3RBcnJvdy5zY3NzPzBiYjAiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3N0eWxlcy9zdHlsZV9tYWluLnNjc3M/NTQ4MyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX21vYmlsZS5zY3NzPzAxMGEiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvR1VJLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9Nb2RlbC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkQWJvdXRUYWIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkSW5kZXhUYWIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZExlZnRNYWluLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRQcm9qZWN0QXJyb3cuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZFByb2plY3RUYWIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZFJldHVybkFycm93LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRSaWdodE1haW4uanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9hYWcuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9kcm9uZXMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9tYXRuZXQuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9teVdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9ubHA0bXMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvcHJval9vcmdhbmljLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L3Byb2pfcHJpbnRGYXN0LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9sb2FkUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdEZpbHRlciA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi50Z2wge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnRnbCArIC50Z2wtYnRuIHtcXG4gICAgY29udGVudDogYXR0cihkYXRhLXRnLW9uKTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuICAgIC50Z2wgKyAudGdsLWJ0bjphZnRlciwgLnRnbCArIC50Z2wtYnRuOmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIC50Z2wgKyAudGdsLWJ0bjphZnRlciB7XFxuICAgICAgbGVmdDogMTAwJTtcXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pOyB9XFxuICAgIC50Z2wgKyAudGdsLWJ0bjpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRnLW9mZik7IH1cXG4gICAgLnRnbCArIC50Z2wtYnRuOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzg4ODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTsgfVxcbiAgICAgIC50Z2wgKyAudGdsLWJ0bjphY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IC0xMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTsgfVxcbiAgLnRnbDpjaGVja2VkICsgLnRnbC1idG4ge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAvKiByZW1vdmUgdGhlIGJvcmRlcidzIGNvbG91ciAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZGQwMDtcXG4gICAgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgICAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xcbiAgICAgIGxlZnQ6IDA7IH1cXG4gICAgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWN0aXZlOmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICAgIGxlZnQ6IDEwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNFLGFBQWEsRUFBQTtFQURmO0lBTUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFFbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsZ0JBQWdCLEVBQUE7SUFqQnBCO01BcUJRLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsa0JBQWtCO01BRWxCLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0lBM0JwQjtNQThCUSxVQUFVO01BQ1YseUJBQXlCLEVBQUE7SUEvQmpDO01BbUNRLE9BQU87TUFDUCwwQkFBMEIsRUFBQTtJQXBDbEM7TUF3Q1EsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBO01BekM1QjtRQTJDVSxVQUFVO1FBQ1Ysb0JBQW9CLEVBQUE7RUE1QzlCO0lBcURJLHlCQUF5QjtJQUFFLCtCQUFBO0lBQzNCLDZCQS9EMkI7SUErRFUsdUJBQUE7SUFFckMsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBO0lBekQxQjtNQWdFUSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7SUFqRXhCO01BcUVRLE9BQU8sRUFBQTtJQXJFZjtNQXlFUSxnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLFNBQVMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sX2VtcGhhc2lzOiByZ2IoMjU1LCAyMjEsIDApO1xcclxcblxcclxcblxcclxcbi5wcm9qZWN0RmlsdGVyPmRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGdsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICArIC50Z2wtYnRuIHtcXHJcXG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAvLyB3aWR0aDogNmVtO1xcclxcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHJcXG4gICAgJjphZnRlcixcXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgICBsZWZ0OiAxMDAlO1xcclxcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRnLW9uKTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRnLW9mZik7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgICBsZWZ0OiAtMTAlO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmNoZWNrZWQgKyAudGdsLWJ0biB7XFxyXFxuICAgIC8vIGJvcmRlci1jb2xvcjogdmFyKC0tY29sX2VtcGhhc2lzKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogcmVtb3ZlIHRoZSBib3JkZXIncyBjb2xvdXIgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRjb2xfZW1waGFzaXM7IC8qIGVtdWxhdGUgdGhlIGJvcmRlciAqL1xcclxcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG5cXHJcXG4gICAgJjphZnRlcixcXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICB9XFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmU6YWZ0ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgICAgICAgbGVmdDogMTAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21vbm9saXNrX2JsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuI3Byb2plY3RBcnJvdzphY3RpdmUge1xcbiAgYm9yZGVyLXJhZGl1czogMWVtOyB9XFxuICAjcHJvamVjdEFycm93OmFjdGl2ZS5saW5rIHtcXG4gICAgY29sb3I6ICNmZmRkMDA7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoMjAwcHgsIC0xMzBweCwgMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5saW5rX19hcnJvdyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAgIC5saW5rX19hcnJvdyBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXG4gICAgICB6LWluZGV4OiAyOyB9XFxuICAgICAgLmxpbmtfX2Fycm93IHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZTNkKDhweCwgLTEwcHgsIDApOyB9XFxuICAgICAgLmxpbmtfX2Fycm93IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgICAgIC5saW5rX19hcnJvdyBzcGFuOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDZweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmRkMDA7IH1cXG4gIC5saW5rX19saW5lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgICAubGlua19fbGluZTphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDE0MHB4O1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmRkMDA7IH1cXG4gIC5saW5rX190ZXh0IHtcXG4gICAgY29sb3I6ICM0QTRBNEE7XFxuICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuICAubGluazpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5saW5rOmhvdmVyIC5saW5rX19saW5lOmFmdGVyIHtcXG4gICAgICBhbmltYXRpb246IGFuaW1hdGlvbi1saW5lIDEuMnMgZm9yd2FyZHM7IH1cXG4gICAgLmxpbms6aG92ZXIgLmxpbmtfX2Fycm93IHNwYW46YWZ0ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWFycm93IDEuMnMgZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxczsgfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAxNDBweDsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWFycm93IHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdGhlbWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNJLDZCQUE2QjtFQUM3QiwyREFBd0QsRUFBQTs7QUNINUQ7RUFZSSxrQkFBa0IsRUFBQTtFQVp0QjtJQUlRLGNEUHVCO0lDU3ZCLHlCQUF5QjtJQUV6Qix5QkRWeUIsRUFBQTs7QUNpQmpDO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0VBRXJCLHVEQUF1RDtFQUN2RCxlQUFlLEVBQUE7RUFFZjtJQUNBLG9CQUFvQixFQUFBO0lBRG5CO01BSU8sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBO01BVmpCO1FBYU8sNkJBQTZCO1FBQzdCLG1EQUFtRCxFQUFBO01BZDFEO1FBa0JPLDZCQUE2QjtRQUM3Qix5QkFBeUIsRUFBQTtNQW5CaEM7UUF1Qk8sV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFFBQVE7UUFDUixXQUFXO1FBQ1gsbUJEekRtQixFQUFBO0VDOEQzQjtJQUNBLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVLEVBQUE7SUFSVDtNQVdHLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsV0FBVztNQUNYLG1CRC9FdUIsRUFBQTtFQ21GM0I7SUFDQSxjQUFjO0lBQ2QsY0FBYyxFQUFBO0VBbkVsQjtJQXVFUSxnQkFBZ0I7SUFDaEIsNkJBQTZCLEVBQUE7SUF4RXJDO01BNEVnQix1Q0FBdUMsRUFBQTtJQTVFdkQ7TUFtRmdCLHdDQUF3QztNQUN4QyxtQkFBbUIsRUFBQTs7QUFTbkM7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsT0FBTyxFQUFBLEVBQUE7O0FBSVg7RUFDRTtJQUNFLFFBQVEsRUFBQTtFQUdWO0lBQ0UsV0FBVyxFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuJGNvbG9yX3BhcGVyOiB3aGl0ZTtcXHJcXG4kY29sb3JfcmVnaXN0cmF0aW9uOmJsYWNrO1xcclxcbiRjb2xvcl9hY2NlbnQ6IHJnYigyNTUsIDIyMSwgMCk7XFxyXFxuJGNvbG9yX2FjdGl2ZTogcmdiKDIyOSwgMjI5LCAyMjkpO1xcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9tb25vbGlza19ibGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcblxcclxcbiRmb250X2RlZmF1bHQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4kZm9udF9zcGVjaWFsOiAnTW9ub2xvaXNrIEJsYWNrJywgc2Fucy1zZXJpZjtcIixcIkBpbXBvcnQgJ3RoZW1lcyc7XFxyXFxuXFxyXFxuLy8gI3Byb2plY3RBcnJvdyB7XFxyXFxuXFxyXFxuLy8gfVxcclxcblxcclxcbiNwcm9qZWN0QXJyb3c6YWN0aXZlIHtcXHJcXG5cXHJcXG4gICAgJi5saW5re1xcclxcblxcclxcbiAgICAgICAgY29sb3I6ICRjb2xvcl9hY2NlbnQ7XFxyXFxuICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAvLyBib3gtc2hhZG93OiAwIDAgMCAzcHggJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hY3RpdmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsge1xcclxcbiAgICAkc2VsZjogJjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMzAwcHgsIDAsIDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDIwMHB4LCAtMTMwcHgsIDApO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICZfX2Fycm93IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlM2QoOHB4LCAtMTBweCwgMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfYWNjZW50O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saW5lIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTQwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICBjb2xvcjogIzRBNEE0QTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAjeyRzZWxmfSB7XFxyXFxuICAgICAgICAgICAgJl9fbGluZSB7XFxyXFxuICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWxpbmUgMS4ycyBmb3J3YXJkcztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICZfX2Fycm93IHtcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWFycm93IDEuMnMgZm9yd2FyZHM7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAxNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1hcnJvdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tb25vbGlza19ibGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07IH1cXG5cXG4ucm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZkZDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4yZW07IH1cXG5cXG5hOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7IH1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZmxleC1zaHJpbms6IDA7IH1cXG5cXG4vKiBMRUZUIE1BSU4gKi9cXG4ubGVmdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwZW0gOGVtO1xcbiAgcGFkZGluZy10b3A6IDRlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4vKj09PT09PT09ICBIRUFERVIgID09PT09PT09PT09PT09PT09PSovXFxuaGVhZGVyIDpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogMTEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtOyB9XFxuXFxuYnRuXFxuaGVhZGVyIDpmaXJzdC1jaGlsZCBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuaGVhZGVyIDpmaXJzdC1jaGlsZCBoMiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG5cXG4jYnRuX3Byb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDhlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuN2VtOyB9XFxuXFxuI2J0bl9wcm9maWxlIDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuXFxuI2J0bl9wcm9maWxlIHN2ZyB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMS4yZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0xLjJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBzY2FsZTogMC4yNTtcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zZW0sIC0yZW0pOyAqL1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7IH1cXG5cXG4jYnRuX3Byb2ZpbGU6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMC4zZW0gc29saWQgdmFyKC0tY29sX2VtcGhhc2lzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzdHJva2Utd2lkdGg6IDU7IH1cXG5cXG4jYnRuX3Byb2ZpbGU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7XFxuICBib3JkZXItcmFkaXVzOiAxZW07IH1cXG5cXG4vKiA9PT09PT09ICBSSUdIVCBNQUlOICA9PT09PT09PT09Ki9cXG4ucmlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2lyY2xlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07IH1cXG5cXG4uY2lyY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDE1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuXFxuLypBQk9VVCBUQUIqL1xcbi5hYm91dCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSAyNXB4KTtcXG4gIHRvcDogMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB3aWR0aDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cXG5cXG4uYWJvdXRDb250YWluZXIge1xcbiAgcGFkZGluZzogNGVtIDhlbTsgfVxcblxcbi5hYm91dCBociB7XFxuICBib3JkZXI6IDAgbm9uZTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTsgfVxcblxcbi5hYm91dCBoMyB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuNGVtO1xcbiAgbWFyZ2luLXRvcDogNmVtOyB9XFxuXFxuLmFib3V0IC5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLyo9PT09PT09ICAgSU5ERVggVEFCICAgPT09PT09PT09PT09Ki9cXG4ucHJvamVjdEluZGV4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMjAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuXFxuLnByb2plY3RJbmRleFNsaWRlSW4ge1xcbiAgdG9wOiAzMCU7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLnByb2plY3RGaWx0ZXIge1xcbiAgcGFkZGluZzogMWVtIDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMC43NWVtOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHtcXG4gIG1hcmdpbjogMGVtIDFlbTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBmb250LXNpemU6IDAuOGVtOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRoIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgfVxcblxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0cjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogcmVtb3ZlIHRoZSBib3JkZXIncyBjb2xvdXIgKi9cXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuNXB4IGxpZ2h0Z3JheTtcXG4gIC8qIGVtdWxhdGUgdGhlIGJvcmRlciAqLyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRyOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfZW1waGFzaXMpOyB9XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7IH1cXG5cXG4vKiA9PT09PT0gICBDSVJDTEUgUFJFVklFV1MgICAgID09PT09PT0qL1xcbi5iYW5uZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBlbTsgfVxcblxcbi8qID09PT09PSAgIFBST0pFQ1QgVEFCICAgICA9PT09PT09Ki9cXG4ucHJvamVjdFRhYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0b3A6IDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHotaW5kZXg6IDU7XFxuICAvKiBwYWRkaW5nOiAyZW0gNGVtOyAqL1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgb3BhY2l0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cXG5cXG4ubGVmdEVkZ2Uge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgd2lkdGg6IDI1cHg7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yaWdodDogMC41cHggZG90dGVkICM5NDk0OTQ7XFxuICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCBibGFjaztcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4ubGVmdEVkZ2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubGVmdEVkZ2U6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cXG5cXG4udG9wRWRnZSB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkICM5NDk0OTQ7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrO1xcbiAgLyogd3JpdGluZy1tb2RlOnZlcnRpY2FsLWxyOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbSA0ZW07XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi5jbG9zZVByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07IH1cXG5cXG4uY2xvc2VQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlOyB9XFxuXFxuLnByb2plY3RUYWIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnByb2plY3RWaWRlb0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ucHJvamVjdFRhYiBoMyB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMC41ZW07IH1cXG5cXG4ucHJvamVjdFRhYiBoNSB7XFxuICBtYXJnaW4tdG9wOiAxZW07IH1cXG5cXG4ucHJvamVjdFRhYiBmaWd1cmUgaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG5cXG4ucHJvamVjdFRhYiBmaWdjYXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBwYWRkaW5nLXRvcDogMC4zZW07IH1cXG5cXG4uc2xpZGVJbkZyb21SaWdodCB7XFxuICBsZWZ0OiA1MCU7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmZvb3RlciB7XFxuICAvKiBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjsgKi9cXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6ICM4MTgxODE7XFxuICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgYmxhY2s7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190aGVtZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZV9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDSSw2QkFBNkI7RUFDN0IsMkRBQXdELEVBQUE7O0FDUDVEO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBRUksU0FBUztFQUNULHFDREdtQztFQ0ZuQyxnQkFBZ0IsRUFBQTs7QUFJ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QixFQUFBOztBQUd6QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUtkO0VBQ0ksNENBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQXlCO0VBQ3pCLHdCQUFBO0VBQ0EsZUFBZTtFQUNmLFdBQVc7RUFDWCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuJGNvbG9yX3BhcGVyOiB3aGl0ZTtcXHJcXG4kY29sb3JfcmVnaXN0cmF0aW9uOmJsYWNrO1xcclxcbiRjb2xvcl9hY2NlbnQ6IHJnYigyNTUsIDIyMSwgMCk7XFxyXFxuJGNvbG9yX2FjdGl2ZTogcmdiKDIyOSwgMjI5LCAyMjkpO1xcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9tb25vbGlza19ibGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcblxcclxcbiRmb250X2RlZmF1bHQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4kZm9udF9zcGVjaWFsOiAnTW9ub2xvaXNrIEJsYWNrJywgc2Fucy1zZXJpZjtcIixcIkBpbXBvcnQgXFxcInRoZW1lc1xcXCI7XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udF9kZWZhdWx0O1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJvb3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4yZW07XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWNjZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMRUZUIE1BSU4gKi9cXHJcXG4ubGVmdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMGVtIDhlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PSAgSEVBREVSICA9PT09PT09PT09PT09PT09PT0qL1xcclxcblxcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICB3aWR0aDoxMS41ZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OjAuM2VtO1xcclxcbn1cXHJcXG5idG5cXHJcXG4vKmxvZ28qL1xcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDEge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA6Zmlyc3QtY2hpbGQgaDIge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDoyZW07XFxyXFxuICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZSA6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9wcm9maWxlIHN2ZyB7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMS4yZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHNjYWxlOiAwLjI1O1xcclxcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM2VtLCAtMmVtKTsgKi9cXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDo0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX3Byb2ZpbGU6aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB2YXIoLS1jb2xfZW1waGFzaXMpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHN0cm9rZS13aWR0aDogNTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bl9wcm9maWxlOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hY2NlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PSAgUklHSFQgTUFJTiAgPT09PT09PT09PSovXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxNWVtO1xcclxcbiAgICBoZWlnaHQ6IDE1ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKkFCT1VUIFRBQiovXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBsZWZ0OmNhbGMoMTAwJSAtIDI1cHgpO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgd2lkdGg7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5hYm91dENvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDRlbSA4ZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBociB7XFxyXFxuICAgIGJvcmRlcjogMCBub25lO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgaDMge1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMC40ZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDZlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5saW5rc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09PT09PSAgIElOREVYIFRBQiAgID09PT09PT09PT09PSovXFxyXFxuLnByb2plY3RJbmRleCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OjIwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0SW5kZXhTbGlkZUluIHtcXHJcXG4gICAgdG9wOjMwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RGaWx0ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFRhYmxlIHtcXHJcXG4gICAgbWFyZ2luOiAwZW0gMWVtO1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdEluZGV4VGFibGUgdGgge1xcclxcbiAgICBmb250LXNpemU6IDAuN2VtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0ciB7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucHJvamVjdEluZGV4VGFibGUgdHI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIHJlbW92ZSB0aGUgYm9yZGVyJ3MgY29sb3VyICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuNXB4IHJnYigyMTEsIDIxMSwgMjExKTsgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovXFxyXFxufVxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0cjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfZW1waGFzaXMpO1xcclxcbn1cXHJcXG5cXHJcXG4gLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT0gICBDSVJDTEUgUFJFVklFV1MgICAgID09PT09PT0qL1xcclxcbi5iYW5uZXIge1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbF9lbXBoYXNpcyk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb25vbGlzayBCbGFja1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09ICAgUFJPSkVDVCBUQUIgICAgID09PT09PT0qL1xcclxcblxcclxcbi5wcm9qZWN0VGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgbGVmdDoxMDAlO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gICAgLyogcGFkZGluZzogMmVtIDRlbTsgKi9cXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgb3BhY2l0eTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdEVkZ2Uge1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IGRvdHRlZCByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkIGJsYWNrO1xcclxcbiAgICB3cml0aW5nLW1vZGU6dmVydGljYWwtbHI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0RWRnZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hY2NlbnQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRFZGdlOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hY3RpdmU7XFxyXFxufVxcclxcblxcclxcbi50b3BFZGdlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkIHJnYigxNDgsIDE0OCwgMTQ4KTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBibGFjaztcXHJcXG4gICAgLyogd3JpdGluZy1tb2RlOnZlcnRpY2FsLWxyOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDJlbSA0ZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlUHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlUHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6YXp1cmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0VGFiIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFZpZGVvQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBoMyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBoNSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgZmlndXJlIGltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBmaWdjYXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVJbkZyb21SaWdodCB7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmOyAqL1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xcclxcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBibGFjaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucm9vdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDEwMHZoOyB9XFxuICAubWFpbkNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubGVmdCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDNlbTsgfVxcbiAgLnJpZ2h0IHtcXG4gICAgZmxleC1zaHJpbms6IDE7IH1cXG4gIC5hYm91dCB7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAuYWJvdXQgLmFib3V0Q29udGFpbmVyIHtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAzZW0gMmVtOyB9XFxuICAucHJvamVjdEluZGV4IHtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAucHJvamVjdEluZGV4U2xpZGVJbiB7XFxuICAgIHRvcDogMzUlOyB9XFxuICAucHJvamVjdFRhYiB7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAucHJvamVjdFRhYiBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTsgfVxcbiAgICAucHJvamVjdFRhYiBoMiB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgIC5wcm9qZWN0VGFiIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuMWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGg0IHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGg1IHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC0wLjNlbTsgfVxcbiAgICAucHJvamVjdFRhYiB1bCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVlbTsgfVxcbiAgICAucHJvamVjdFRhYiBpbWcge1xcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGZpZ3VyZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5wcm9qZWN0VGFiIGZpZ2NhcHRpb24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogM2VtIDFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMy41ZW07IH1cXG4gIC5zbGlkZUluRnJvbVJpZ2h0IHtcXG4gICAgbGVmdDogNXB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAubGlua19fbGluZTphZnRlciB7XFxuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWxpbmUtbG9vcGVkIDEuNXMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cXG4gIC5saW5rX19hcnJvdyBzcGFuOmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24tYXJyb3ctbG9vcGVkO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cXG4gIEBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUtbG9vcGVkIHtcXG4gICAgMCUge1xcbiAgICAgIGxlZnQ6IDE0MHB4OyB9XFxuICAgIDcwJSB7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgICAxMDAlIHtcXG4gICAgICBsZWZ0OiAtMzBweDsgfSB9XFxuICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1hcnJvdy1sb29wZWQge1xcbiAgICAwJSB7XFxuICAgICAgd2lkdGg6IDA7IH1cXG4gICAgNzAlIHtcXG4gICAgICB3aWR0aDogMDsgfVxcbiAgICAxMDAlIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfSB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlX21vYmlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0k7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUFHakI7SUFFSSxXQUFXLEVBQUE7RUFHZjtJQUNJLGFBQWE7SUFDYixZQUFZLEVBQUE7RUFHaEI7SUFDSSxjQUFjLEVBQUE7RUFXbEI7SUFDSSxZQUFZLEVBQUE7SUFEaEI7TUFHUSxjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUFNeEI7SUFDSSxZQUFZLEVBQUE7RUFHaEI7SUFDSSxRQUFRLEVBQUE7RUFJWjtJQUNJLFlBQVksRUFBQTtJQURoQjtNQUlRLGdCQUFnQixFQUFBO0lBSnhCO01BT1EsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO0lBUnhCO01BV1EsZ0JBQWdCLEVBQUE7SUFYeEI7TUFlUSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7SUFoQnpCO01Bb0JRLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQTtJQXJCN0I7TUF5QlEsbUJBQW1CLEVBQUE7SUF6QjNCO01BNEJRLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtJQTdCM0I7TUFpQ1EsU0FBUyxFQUFBO0lBakNqQjtNQXFDUSxlQUFlLEVBQUE7RUFLdkI7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CLEVBQUE7RUFHeEI7SUFDSSxTQUFTLEVBQUE7RUFHYjtJQUNJLFlBQVksRUFBQTtFQUtYO0lBRU8sOENBQThDO0lBRTlDLGlDQUFpQztJQUNqQyxtQ0FBbUMsRUFBQTtFQUkxQztJQUdPLGlDQUFpQztJQUVqQyx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLG1DQUFtQyxFQUFBO0VBTS9DO0lBQ0k7TUFDRSxXQUFXLEVBQUE7SUFHYjtNQUNJLE9BQU8sRUFBQTtJQUdYO01BQ0UsV0FBVyxFQUFBLEVBQUE7RUFJakI7SUFDSTtNQUNFLFFBQVEsRUFBQTtJQUdWO01BQ0ksUUFBUSxFQUFBO0lBR1o7TUFDRSxXQUFXLEVBQUEsRUFBQSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAucm9vdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOztcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW5Db250YWluZXIge1xcclxcbiAgICAgICAgLy8gaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGVmdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgcGFkZGluZzogM2VtO1xcclxcbiAgICB9ICAgXFxyXFxuXFxyXFxuICAgIC5yaWdodCB7XFxyXFxuICAgICAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgICAgIC8vIGhlaWdodDozMCU7XFxyXFxuICAgICAgICAvLyAuY2lyY2xlQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIC8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgLy8gICAgIC5jaXJjbGUge1xcclxcbiAgICAgICAgLy8gICAgICAgICB3aWR0aDogMTBlbTtcXHJcXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgICAgICAgLy8gICAgIH1cXHJcXG4gICAgICAgIC8vIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAgICAgLmFib3V0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAzZW0gMmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcblxcclxcbiAgICAucHJvamVjdEluZGV4IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnByb2plY3RJbmRleFNsaWRlSW4ge1xcclxcbiAgICAgICAgdG9wOiAzNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdFRhYiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGgye1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGgze1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBoNHtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaDV7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4zZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB1bHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZmlndXJle1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgZmlnY2FwdGlvbiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNlbSAxZW07XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzLjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpZGVJbkZyb21SaWdodCB7XFxyXFxuICAgICAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpbmsge1xcclxcbiAgICAgICAgJHNlbGY6ICY7XFxyXFxuICAgICAgICAmX19saW5lIHtcXHJcXG4gICAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24tbGluZS1sb29wZWQgMS41cyBmb3J3YXJkcztcXHJcXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX19hcnJvdyB7XFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbi1hcnJvdy1sb29wZWQ7XFxyXFxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG4gICAgQGtleWZyYW1lcyBhbmltYXRpb24tbGluZS1sb29wZWQge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICBsZWZ0OiAxNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIDcwJXtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIFxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgIGxlZnQ6IC0zMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyBhbmltYXRpb24tYXJyb3ctbG9vcGVkIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDcwJSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9hbmltX2NoZWNrYm94ZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9hbmltX3Byb2plY3RBcnJvdy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9tb2JpbGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21vYmlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLmpzJztcclxuaW1wb3J0IEdVSSBmcm9tICcuL0dVSS5qcydcclxuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi9sb2FkUHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVye1xyXG4gICAgX21vZGVsID0gbnVsbDtcclxuICAgIF92aWV3ID0gbnVsbDtcclxuICAgIF9wcm9qZWN0SW5kZXggPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX21vZGVsID0gbmV3IE1vZGVsKGxvYWRQcm9qZWN0cygpKTtcclxuICAgICAgICB0aGlzLl92aWV3ID0gbmV3IEdVSSh0aGlzLl9tb2RlbC5Qcm9qZWN0SW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LmJpbmRDYWxsUHJvamVjdFBhZ2VzKHRoaXMub25Qcm9qZWN0UGFnZUNhbGxlZCk7XHJcbiAgICAgICAgdGhpcy5fdmlldy5iaW5kSG92ZXJQcm9qZWN0cyh0aGlzLm9uUHJvamVjdEhvdmVyZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvamVjdFBhZ2VDYWxsZWQgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5fbW9kZWwuZ2V0UHJvamVjdChpZCk7XHJcbiAgICAgICAgdGhpcy5fdmlldy5kaXNwbGF5UHJvamVjdChwcm9qZWN0Lkh0bWxDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblByb2plY3RIb3ZlcmVkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLmdldFByb2plY3QoaWQpLkNhdGVnb3JpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgcEFycm93QmFzZSBmcm9tICcuL2Fzc2V0cy9hcnJvd19wcm9qZWN0SW5kZXhfYmFzZS5zdmcnO1xyXG5pbXBvcnQgcHJldmlld19kZXNpZ24gZnJvbSAnLi9hc3NldHMvbWF0bmV0L2ZhYl8wNS5qcGcnO1xyXG5pbXBvcnQgcHJldmlld19jb2RlIGZyb20gJy4vYXNzZXRzL2xiZC9IaXZlTWluZENsYXNzZXMuanBnJztcclxuaW1wb3J0IHByZXZpZXdfYXJ0IGZyb20gJy4vYXNzZXRzL2JhcmJpY2FuXzAwLmpwZyc7XHJcblxyXG5cclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuaW1wb3J0IGxvYWRBYm91dFRhYiBmcm9tICcuL2NvbnRlbnQvbG9hZEFib3V0VGFiLmpzJztcclxuaW1wb3J0IGxvYWRMZWZ0TWFpbiBmcm9tICcuL2NvbnRlbnQvbG9hZExlZnRNYWluJztcclxuaW1wb3J0IGxvYWRSaWdodE1haW4gZnJvbSAnLi9jb250ZW50L2xvYWRSaWdodE1haW4nO1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tICcuL2NvbnRlbnQvbG9hZEZvb3Rlcic7XHJcbmltcG9ydCBsb2FkUHJvamVjdFRhYiBmcm9tICcuL2NvbnRlbnQvbG9hZFByb2plY3RUYWInO1xyXG5pbXBvcnQgbG9hZEluZGV4VGFiIGZyb20gJy4vY29udGVudC9sb2FkSW5kZXhUYWInO1xyXG5pbXBvcnQgbG9hZFByb2plY3RBcnJvdyBmcm9tICcuL2NvbnRlbnQvbG9hZFByb2plY3RBcnJvdyc7XHJcblxyXG5cclxuY2xhc3MgR1VJIHtcclxuXHJcbiAgICAvL2NsYXNzIG5hbWVzIGZvciBxdWVyeSBzZWxlY3Rpb25cclxuICAgIF9wcm9qZWN0RmlsdGVyQ2xhc3MgPSAncHJvamVjdEZpbHRlcic7XHJcbiAgICBfaW5kZXhCdXR0b25JZCA9ICdwcm9qZWN0QXJyb3cnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzKSB7XHJcbiAgICAgICAgdGhpcy5fYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKTtcclxuXHJcbiAgICAgICAgLy9sb2FkIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5fbGVmdE1haW4gPSBsb2FkTGVmdE1haW4odGhpcy5fYXBwKTtcclxuICAgICAgICB0aGlzLl9idG5faW5kZXggPSBsb2FkUHJvamVjdEFycm93KHRoaXMuX2xlZnRNYWluKTtcclxuICAgICAgICB0aGlzLl9yaWdodE1haW4gPSBsb2FkUmlnaHRNYWluKHRoaXMuX2FwcCk7XHJcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gbG9hZEZvb3Rlcih0aGlzLl9hcHApO1xyXG4gICAgICAgIHRoaXMuX2Fib3V0VGFiID0gbG9hZEFib3V0VGFiKHRoaXMuX3JpZ2h0TWFpbik7XHJcbiAgICAgICAgdGhpcy5faW5kZXhUYWIgPSBsb2FkSW5kZXhUYWIodGhpcy5fYXBwKTtcclxuICAgICAgICB0aGlzLl9wcmVidWlsZEluZGV4VGFiKHByb2plY3RzKTtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0VGFiID0gbG9hZFByb2plY3RUYWIodGhpcy5fcmlnaHRNYWluKTtcclxuXHJcbiAgICAgICAgLy9zZXR1cCBiaW5kaW5nc1xyXG4gICAgICAgIHRoaXMuX2JpbmRQcm9maWxlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5fYmluZEV4aXRQcm9qZWN0SW5kZXgoKTtcclxuICAgICAgICB0aGlzLl9iaW5kQ2FsbEluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5fYmluZFNlbEFsbENoZWNrYm94KCk7XHJcbiAgICAgICAgdGhpcy5fYmluZFNlbE5vbmVDaGVja2JveCgpO1xyXG4gICAgICAgIHRoaXMuX2JpbmRUYWJMZWZ0RWRnZXMoKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLz09PT09PT09PSBJTkRFWCBUQUIgPT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2xvYWRQcm9qZWN0SW5kZXhCdXR0b24ocGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgYnRuX2luZGV4ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgYnRuX2luZGV4LnNyYyA9IHBBcnJvd0Jhc2U7XHJcbiAgICAgICAgYnRuX2luZGV4LmlkID0gdGhpcy5faW5kZXhCdXR0b25JZDtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKGJ0bl9pbmRleCk7XHJcblxyXG4gICAgICAgIHJldHVybiBidG5faW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgX3ByZWJ1aWxkSW5kZXhUYWIocHJvamVjdHMpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSB0aGlzLl9pbmRleFRhYi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuX3Byb2plY3RGaWx0ZXJDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oZmlsdGVyQ29udGFpbmVyKTsgLy9yZXNldCBjb250YWluZXJcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVNlbEFsbENoZWNrYm94KGZpbHRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlU2VsTm9uZUNoZWNrYm94KGZpbHRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yeUZpbHRlcnMgPSB0aGlzLl9nZXRVbmlxdWVDYXRlZ29yaWVzKHByb2plY3RzKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGNoZWNrYm94IGZvciBlYWNoIGNhdGVnb3J5XHJcbiAgICAgICAgY2F0ZWdvcnlGaWx0ZXJzLmZvckVhY2goY2EgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDYXQgPSB0aGlzLl9jcmVhdGVDYXRlZ29yeUNoZWNrYm94KGZpbHRlckNvbnRhaW5lciwgY2EudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2JpbmRDYXRlZ29yeUNoZWNrYm94KG5ld0NhdCwgZmlsdGVyQ29udGFpbmVyLCBwcm9qZWN0cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vcHJlLWJ1aWxkIGluZGV4IHdpdGggZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMuX2J1aWxkSW5kZXhUYWJsZShwcm9qZWN0cywgdGhpcy5fZ2V0VW5pcXVlQ2F0ZWdvcmllcyhwcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDYXRlZ29yeUNoZWNrYm94KHBhcmVudCwgaWQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBuZXdDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5ld0NhdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICBuZXdDYXQuaWQgPSBpZDtcclxuICAgICAgICBuZXdDYXQuc2V0QXR0cmlidXRlKCduYW1lJywgaWQpO1xyXG4gICAgICAgIG5ld0NhdC5jbGFzc0xpc3QuYWRkKFwidGdsXCIpO1xyXG4gICAgICAgIG5ld0NhdC5jbGFzc0xpc3QuYWRkKFwidGdsLXNrZXdlZFwiKTtcclxuICAgICAgICBuZXdDYXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRnbC1idG5cIik7XHJcbiAgICAgICAgLy8gbGFiZWwudGV4dENvbnRlbnQgPSBpZDtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb2ZmJyxpZCk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9uJywgaWQpO1xyXG4gICAgICAgIC8vIGxhYmVsLnRleHRDb250ZW50ID0gaWQ7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUud2lkdGggPSAoaWQubGVuZ3RoKjAuNykgKyAnZW0nO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV3Q2F0LCBsYWJlbCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3Q2F0O1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVTZWxBbGxDaGVja2JveChwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWxBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHNlbEFsbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICBzZWxBbGwuaWQgPSAnc2VsQWxsJztcclxuICAgICAgICBzZWxBbGwuc2V0QXR0cmlidXRlKCduYW1lJywgc2VsQWxsLmlkKTtcclxuICAgICAgICBzZWxBbGwuY2xhc3NMaXN0LmFkZChcInRnbFwiKTtcclxuICAgICAgICBzZWxBbGwuY2xhc3NMaXN0LmFkZChcInRnbC1za2V3ZWRcIik7XHJcbiAgICAgICAgc2VsQWxsLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgc2VsQWxsLmlkKTtcclxuICAgICAgICAvLyBsYmxfc2VsQWxsLnRleHRDb250ZW50ID0gJ0FsbCc7XHJcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInRnbC1idG5cIik7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9mZicsJ0FsbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vbicsICdBbGwnKTtcclxuICAgICAgICBsYWJlbC5zdHlsZS53aWR0aCA9IDMgKyAnZW0nO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2VsQWxsLCBsYWJlbCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVNlbE5vbmVDaGVja2JveChwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzZWxOb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWxOb25lLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIHNlbE5vbmUuaWQgPSAnc2VsTm9uZSc7XHJcbiAgICAgICAgc2VsTm9uZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBzZWxOb25lLmlkKTtcclxuICAgICAgICBzZWxOb25lLmNsYXNzTGlzdC5hZGQoXCJ0Z2xcIik7XHJcbiAgICAgICAgc2VsTm9uZS5jbGFzc0xpc3QuYWRkKFwidGdsLXNrZXdlZFwiKTtcclxuICAgICAgICBzZWxOb25lLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHNlbE5vbmUuaWQpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0Z2wtYnRuXCIpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vZmYnLCdOb25lJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9uJywgJ05vbmUnKVxyXG4gICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gNCArICdlbSc7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzZWxOb25lLCBsYWJlbCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9idWlsZEluZGV4VGFibGUocHJvamVjdHMsIGNhdGVnb3J5RmlsdGVycykge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcnlGaWx0ZXJzKSkgdGhyb3cgXCJFcnJvcjogcGFyYW1ldGVyIGlzIG5vdCBvZiB0eXBlIEFycmF5XCI7XHJcblxyXG4gICAgICAgIC8vc29ydCBwcm9qZWN0cyBkZXNjZW5kaW5nIGJ5IHllYXJcclxuICAgICAgICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXIpO1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5kZXhUYWJsZVwiKTtcclxuICAgICAgICB0aGlzLl9pbml0SW5kZXhIZWFkZXJzKHBhcmVudCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBwcm9qZWN0LmNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUZpbHRlcnMuaW5jbHVkZXMoYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dUaXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwidGRcIiwgcHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93WWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0ZCcsIHByb2plY3QueWVhci50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dMb2MgPSBjcmVhdGVFbGVtZW50VGV4dCgndGQnLCBwcm9qZWN0LmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzLnRleHRDb250ZW50ID0gQXJyYXkuZnJvbShwcm9qZWN0LmNhdGVnb3JpZXMpLm1hcChjID0+IHtyZXR1cm4gYy5zbGljZSgwLDIpfSkuam9pbignLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5pZCA9IHByb2plY3QuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmQocm93WWVhciwgcm93VGl0bGUsIHJvd0xvYywgdGFncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHBvcHVsYXRlIHRhYmxlIHdpdGggcHJlc2V0IGhlYWRlcnMgKHRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgY2F0ZWdvcmllcykgYW5kIGF0dGFjaCB0byBwYXJlbnRcclxuICAgICAqIEByZXR1cm5zIGVtcHR5IDx0YWJsZT4gd2l0aCBoZWFkZXJzLlxyXG4gICAgICovXHJcbiAgICBfaW5pdEluZGV4SGVhZGVycyh0YWJsZUNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUFsbENoaWxkcmVuKHRhYmxlQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCBoZWFkX3RpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ3RoJywgXCJUaXRsZVwiKTtcclxuICAgICAgICBjb25zdCBoZWFkX3llYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgndGgnLCAnWWVhcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRfbG9jID0gY3JlYXRlRWxlbWVudFRleHQoJ3RoJywnTG9jYXRpb24nKTtcclxuICAgICAgICBjb25zdCBoZWFkX2NhdCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0aCcsICdDYXRlZ29yaWVzJyk7XHJcbiAgICAgICAgdGFibGVDb250YWluZXIuYXBwZW5kKGhlYWRfdGl0bGUsIGhlYWRfeWVhciwgaGVhZF9sb2MsIGhlYWRfY2F0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNsaWRlIGluIGluZGV4IHRhYlxyXG4gICAgICovXHJcbiAgICBfc2hvd0luZGV4VGFiKCkge1xyXG4gICAgICAgIHRoaXMuX2luZGV4VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmRleFNsaWRlSW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PSAgICBCSU5ESU5HUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIF9iaW5kUHJvZmlsZUJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBidG5fcHJvZmlsZSA9IHRoaXMuX2xlZnRNYWluLnF1ZXJ5U2VsZWN0b3IoJyNidG5fcHJvZmlsZScpO1xyXG4gICAgICAgIGJ0bl9wcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgLy90cmFuc2l0aW9uIGluIGFib3V0IHRhYlxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ2J0bl9wcm9maWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlSW5Gcm9tUmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfYmluZENhbGxJbmRleCgpIHtcclxuICAgICAgICB0aGlzLl9idG5faW5kZXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dJbmRleFRhYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kRXhpdFByb2plY3RJbmRleCgpIHtcclxuICAgICAgICB0aGlzLl9sZWZ0TWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgICAgICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNQcm9qZWN0QXJyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBpc1Byb2ZpbGVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5pZCA9PT0gJ3Byb2plY3RBcnJvdycpIGlzUHJvamVjdEFycm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5pZCA9PT0gJ2J0bl9wcm9maWxlJykgaXNQcm9maWxlQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdC5wYXJlbnROb2RlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1Byb2plY3RBcnJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RJbmRleFNsaWRlSW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9qZWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlSW5Gcm9tUmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNQcm9maWxlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRDYWxsUHJvamVjdFBhZ2VzKGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5kZXhUYWJsZScpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xyXG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHJvdy5pZCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRUYWJMZWZ0RWRnZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZWRnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdEVkZ2UnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gZWRnZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlSW5Gcm9tUmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS5sZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS53aWR0aCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0c2VsZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IHByb2plY3RzZWxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNlbGVjdGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGxpdHMgPSBsZWZ0LnNwbGl0KCdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdCA9IHBhcnNlRmxvYXQoc3BsaXRzWzBdKSAtIDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmxlZnQgPSBzaGlmdCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdfc3BsaXRzID0gd2lkdGguc3BsaXQoJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdfc2hpZnQgPSBwYXJzZUZsb2F0KHdfc3BsaXRzWzBdKSArIDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLndpZHRoID0gd19zaGlmdCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLndpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEhvdmVyUHJvamVjdHMoaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbmRleFRhYmxlJyk7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gaGFuZGxlcihyb3cuaWQpO1xyXG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbFByZXZpZXdDaXJjbGVzKGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzbWlzc1ByZXZpZXdDaXJjbGVzKGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3BvcHVsYXRlIHByZXZpZXcgY2lyY2xlcyB3aXRoIHByZWRlZmluZWQgZ3JhcGhpY3NcclxuICAgIF9jYWxsUHJldmlld0NpcmNsZXMoY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGlmIChjYXRlZ29yaWVzLmhhcyhcImRlc2lnblwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaWdodE1haW4ucXVlcnlTZWxlY3RvcihcIi5jaXJjbGVEZXNpZ25cIik7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHByZXZpZXdfZGVzaWduICsgXCIpXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbnRpYXRlQmFubmVyKGNvbnRhaW5lciwgMjAwLCAnREVTSUdOJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXRlZ29yaWVzLmhhcyhcImNvZGVcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlnaHRNYWluLnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlQ29kZVwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcHJldmlld19jb2RlICsgXCIpXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbnRpYXRlQmFubmVyKGNvbnRhaW5lciwgMjAwLCAnQ09ERScpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKFwiYXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpZ2h0TWFpbi5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZUFydFwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcHJldmlld19hcnQgKyBcIilcIjtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFudGlhdGVCYW5uZXIoY29udGFpbmVyLCAyMDAsICdBUlQnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9kaXNtaXNzUHJldmlld0NpcmNsZXMoY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSB0aGlzLl9yaWdodE1haW4ucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY2lyY2xlc1tpXTtcclxuICAgICAgICAgICAgYy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYW5uZXJzID0gdGhpcy5fYXBwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXInKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBiYW5uZXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fYXBwLnJlbW92ZUNoaWxkKGJhbm5lcnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW5zdGFudGlhdGVCYW5uZXIoc3Bhd25FbGVtZW50LCByYW5nZSwgY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQge3gsIHl9ID0gdGhpcy5fZ2V0Q2VudGVyUG9zKHNwYXduRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGxldCB7bmV3WCwgbmV3WX0gPSB0aGlzLl9nZXRSYW5kb21Qb2ludCh4LHksIHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS5sZWZ0ID0gbmV3WCArICdweCc7XHJcbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS50b3AgPSBuZXdZICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FwcC5hcHBlbmQoYmFubmVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiYW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFJhbmRvbVBvaW50KHgseSxyYW5nZSkge1xyXG4gICAgICAgIGxldCB4X3IgPSBNYXRoLnJhbmRvbSgpICogcmFuZ2UgLSByYW5nZS8yO1xyXG4gICAgICAgIGxldCB5X3IgPSBNYXRoLnJhbmRvbSgpICogcmFuZ2UgLSByYW5nZS8yO1xyXG5cclxuICAgICAgICBsZXQgbmV3WCA9IHggKyB4X3I7XHJcbiAgICAgICAgbGV0IG5ld1kgPSB5KyB5X3I7XHJcblxyXG4gICAgICAgIHJldHVybiB7bmV3WCwgbmV3WX07XHJcbiAgICB9XHJcblxyXG4gICAgX2dldENlbnRlclBvcyhlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgdmFyIHggPSAocG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLnJpZ2h0KS8yO1xyXG4gICAgICAgICAgICB2YXIgeSA9IChwb3NpdGlvbi50b3AgKyBwb3NpdGlvbi5ib3R0b20pLzI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge3gsIHl9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIF9iaW5kQ2F0ZWdvcnlDaGVja2JveChuZXdDYXQsIHBhcmVudCwgcHJvamVjdHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vcXVlcnkgY2hlY2tib3ggc3RhdGVzIGFuZCByZWJ1aWxkIGluZGV4IG9uIGNsaWNrXHJcbiAgICAgICAgICAgIG5ld0NhdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrQm94ZXMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBvbmx5IHRoZSBpZHMgdGhhdCBhcmUgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gWy4uLmNoZWNrQm94ZXNdXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihib3ggPT4gYm94LmNoZWNrZWQgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChib3ggPT4gYm94LmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbmRleFRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRJbmRleFRhYmxlKHByb2plY3RzLCBmaWx0ZXJlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kU2VsQWxsQ2hlY2tib3goKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29udGFpbmVyID0gdGhpcy5faW5kZXhUYWIucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLl9wcm9qZWN0RmlsdGVyQ2xhc3MpO1xyXG4gICAgICAgIGNvbnN0IHNlbEFsbCA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc2VsQWxsJyk7XHJcblxyXG4gICAgICAgIHNlbEFsbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxBbGwuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIGNoZWNrYm94ZXMsIHR1cm4gb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrcyA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDaGVja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBhbGxDaGVja3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveC5pZCA9PT0gJ3NlbE5vbmUnKSBib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJveC5pZCAhPT0gJ3NlbEFsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRTZWxOb25lQ2hlY2tib3goKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29udGFpbmVyID0gdGhpcy5faW5kZXhUYWIucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLl9wcm9qZWN0RmlsdGVyQ2xhc3MpO1xyXG4gICAgICAgIGNvbnN0IHNlbE5vbmUgPSBmaWx0ZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignI3NlbE5vbmUnKTtcclxuXHJcbiAgICAgICAgc2VsTm9uZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxOb25lLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCBjaGVja2JveGVzLCB0dXJuIG9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxDaGVja3MgPSBmaWx0ZXJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ2hlY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gYWxsQ2hlY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3guaWQgPT09IHNlbE5vbmUuaWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFdmVudChcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBib3guZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvcHVsYXRlcyBQcm9qZWN0IHRhYiBjb250YWluZXIgd2l0aCBjb250ZW50IGFuZCBzbGlkZXMgaW50byB2aWV3LlxyXG4gICAgICogQHBhcmFtIHs8ZGl2Pn0gaHRtbENvbnRlbnQgLi4uIGh0bWwgZGl2IGNvbnRhaW5pbmcgYWxsIHBhZ2UgbGF5b3V0IGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlQcm9qZWN0KGh0bWxDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uQ2xhc3MgPSAnc2xpZGVJbkZyb21SaWdodCc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLl9wcm9qZWN0VGFiLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xyXG4gICAgICAgIC8vaWYgcHJvamVjdCBwYWdlIGFscmVhZHkgc2hvd24sIHNsaWRlIG91dCwgc3dhcCBjb250ZW50IGFuZCBzbGlkZSBiYWNrIGluLlxyXG4gICAgICAgIC8vdGltZW91dCBhZGRlZCB0byBhbGxvdyBhbmltYXRpb24gdG8gZmluaXNoLlxyXG4gICAgICAgIGlmICh0aGlzLl9wcm9qZWN0VGFiLmNsYXNzTGlzdC5jb250YWlucyhhbmltYXRpb25DbGFzcykpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGVudENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fYWRkQ2xvc2VQcm9qZWN0QnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbW92ZUFsbENoaWxkcmVuKGNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgICAgIC8vIHRoaXMuX2FkZENsb3NlUHJvamVjdEJ1dHRvbigpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9hZGRDbG9zZVByb2plY3RCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2xvc2VQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlUHJvamVjdCcpO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RUYWIuYXBwZW5kQ2hpbGQoY2xvc2VQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgY2xvc2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlSW5Gcm9tUmlnaHQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsb3NlUHJvamVjdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gICBVVElMSVRZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtBcnJheVtPYmplY3RdfSBwcm9qZWN0RGF0YSAuLi4gZmllbGQgbGFiZWxlZCAnY2F0ZWdvcmllcycgcmVxdWlyZWRcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIHVuaXF1ZSBjYXRlZ29yaWVzXHJcbiAgICAgKi9cclxuICAgICBfZ2V0VW5pcXVlQ2F0ZWdvcmllcyhwcm9qZWN0RGF0YSkge1xyXG4gICAgICAgIGxldCBjYXRlZ29yaWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHByb2plY3REYXRhLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgIHAuY2F0ZWdvcmllcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGNhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgYW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAgICAgKi9cclxuICAgICAgICBfcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHVUk7IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgTm9kZSB7XHJcbiAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICBuZXh0ID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdCB7XHJcbiAgICAvL1RPRE86IGltcGxlbWVudCBpdGVyYXRvclxyXG4gICAgX2hlYWQgPSBudWxsO1xyXG4gICAgX3NpemUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKHZhbCkge1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHZhbCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9oZWFkID09PSBudWxsKSB0aGlzLl9oZWFkID0gbm9kZTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9pdGVyYXRlIHRvIGxhc3Qgbm9kZVxyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuX2hlYWQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NpemUrKztcclxuICAgIH1cclxuXHJcbiAgICAvL2luc2VydCB2YWx1ZSBhZnRlciBzcGVjaWZpZWQgaW5kZXguIElmIGxpc3QgaXMgc2hvcnRlciB0aGFuIGluZGV4LCBcclxuICAgIC8vdmFsdWUgd2lsbCBiZSBwdXNoZWQgdG8gdGhlIGVuZC5cclxuICAgIGluc2VydCh2YWwsIGlkeCkge1xyXG4gICAgICAgIGlmIChpZHggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9oZWFkO1xyXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkeCAmJiBjdXJyZW50ICE9PSBudWxsOyBpKyspe1xyXG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG4gPSBuZXcgTm9kZSh2YWwpO1xyXG4gICAgICAgIHByZXYubmV4dCA9IG47XHJcbiAgICAgICAgbi5uZXh0ID0gY3VycmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2l6ZSsrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVBdChpZHgpe1xyXG4gICAgICAgIGlmIChpZHggPj0gdGhpcy5fc2l6ZSB8fCBpZHggPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9oZWFkO1xyXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkeCAmJiBjdXJyZW50ICE9PSBudWxsOyBpKyspe1xyXG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldi5uZXh0ID0gY3VycmVudC5uZXh0O1xyXG5cclxuICAgICAgICB0aGlzLl9zaXplLS07XHJcbiAgICB9XHJcblxyXG4gICAgLyogcGFzcyBpbiBmdW5jdGlvbiBmb3IgY29tcGFyaW5nIHR3byBlbGVtZW50cyByZXF1aXJlZCwgYXNcclxuICAgIGVxdWFsaXR5IGZvciB0d28gb2JqZWN0cyBpcyBub3QgY2xlYXIgY3V0LiAqL1xyXG4gICAgZGVsZXRlKHZhbCwgZnVuYykge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5faGVhZDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGZ1bmModmFsLCBjdXJyZW50Lm5leHQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBjdXJyZW50Lm5leHQubmV4dDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zaXplLS07XHJcbiAgICB9XHJcblxyXG4gICAgYXQoaWR4KSB7XHJcbiAgICAgICAgbGV0IGN1cnIgPSB0aGlzLl9oZWFkO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWR4ICYmIGN1cnIgIT09IG51bGw7IGkrKyl7XHJcbiAgICAgICAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBIZWFkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBIZWFkKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWQgPSBuZXcgTm9kZSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgfSAgIFxyXG59XHJcbiIsImNsYXNzIE1vZGVsIHtcclxuXHJcbiAgICBfcHJvamVjdHMgPSBudWxsO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gICAgIHRoaXMuX3Byb2plY3RzID0gbmV3IE1hcCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RzKSB7XHJcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChrZXksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0cy5zZXQoa2V5LCBwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkUHJvamVjdHMgPSAobmV3UHJvamVjdHMpID0+IHtcclxuICAgICAgICBpZiAoIW5ld1Byb2plY3RzIGluc3RhbmNlb2YgTWFwKSB0aHJvdyBcIk11c3QgYmUgYSBtYXBcIjtcclxuICAgICAgICBpZiAodGhpcy5fcHJvamVjdHMgIT09IG51bGwgJiYgdGhpcy5fcHJvamVjdHMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG1lcmdlZCA9IG5ldyBNYXAoW3RoaXMuX3Byb2plY3RzLCBuZXdQcm9qZWN0c10pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0cyA9IG1lcmdlZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcHJvamVjdHMgPT09IG51bGwpXHJcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBuZXdQcm9qZWN0cztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCByZWxldmFudCBpbmZvcm1hdGlvbiBmcm9tIGVhY2ggcHJvamVjdCB0byBidWlsZCBhbiBpbmRleCB0YWJsZSxcclxuICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXHJcbiAgICAgKi9cclxuICAgIGdldCBQcm9qZWN0SW5kZXgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3RzID09PSBudWxsKSB0aHJvdyAnTm8gcHJvamVjdHMgYWRkZWQhJztcclxuXHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBba2V5LCBwcm9qZWN0XSBvZiB0aGlzLl9wcm9qZWN0cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDoga2V5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJvamVjdC5UaXRsZSxcclxuICAgICAgICAgICAgICAgIHllYXI6IHByb2plY3QuWWVhcixcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBwcm9qZWN0LkxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogcHJvamVjdC5DYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRyaWVzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzLmdldChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFByb2plY3RDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSWRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cy5rZXlzKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbCIsImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tIFwiLi9MaW5rZWRMaXN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgX3RpdGxlID0gJ25vbmUnO1xyXG4gICAgX3N1YnRpdGxlID0gJyc7XHJcbiAgICBfeWVhciA9IDA7XHJcbiAgICBfbG9jYXRpb24gPSAnJztcclxuICAgIF9jYXRlZ29yaWVzID0gbnVsbDtcclxuICAgIF9jb250ZW50ID0gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHllYXIsIGxvY2F0aW9uKXtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuX3llYXIgPSB5ZWFyO1xyXG4gICAgICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gbmV3IExpbmtlZExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2F0ZWdvcnkgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXR1cm5zIHRydWUgaWYgZGVsZXRlIHN1Y2Nlc3NmdWwuXHJcbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzLmRlbGV0ZShjYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaENvbnRlbnQoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQ29udGVudHMoKSB7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hDb250ZW50KGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5zZXJ0Q29udGVudChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnQuaW5zZXJ0KGVsZW1lbnQsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb250ZW50KGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250ZW50LmRlbGV0ZShlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dldHRlcnMsIFNldHRlcnNcclxuICAgIGdldCBDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU3VidGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IFN1YnRpdGxlKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnRpdGxlID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBZZWFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl95ZWFyO1xyXG4gICAgfVxyXG4gICAgZ2V0IExvY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSHRtbENvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLl9jb250ZW50LkhlYWQ7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUudmFsdWUpO1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IENvbnRlbnRDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudC5TaXplO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0IH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbmNvbnN0IGxvYWRBYm91dFRhYiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0RWRnZS5jbGFzc0xpc3QuYWRkKCdsZWZ0RWRnZScpXHJcbiAgICBsZWZ0RWRnZS50ZXh0Q29udGVudCA9ICdpbmZvcm1hdGlvbic7XHJcblxyXG4gICAgY29uc3QgYWJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRDb250YWluZXInKTtcclxuXHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjdi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xyXG4gICAgY3YudGV4dENvbnRlbnQgPSBcIkRvd25sb2FkIENWXCI7XHJcblxyXG4gICAgY29uc3QgaW5zdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBpbnN0YS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YW9sZS5jaGVuLycpO1xyXG4gICAgaW5zdGEudGV4dENvbnRlbnQgPSAnSW5zdGFncmFtJztcclxuICAgIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xyXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kKGN2LCBpbnN0YSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFib3V0MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0MC5pbm5lckhUTUwgPSBcclxuICAgICAgICAnPGJyPkkgYW0gY3VycmVudGx5IG9wZW4gZm9yIG5ldyBwcm9qZWN0cy4gSWYgeW91XFwncmUgbG9va2luZyB0byBjb2xsYWJvcmF0ZSwgcGxlYXNlIGZlZWwgZnJlZSB0byA8YSBocmVmPVwiI1wiPmdldCBpbiB0b3VjaCE8L2E+PGJyPic7XHJcbiAgICBjb25zdCBhYm91dDEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiSSBhbSBhIG11bHRpLWRpc2NpcGxpbmFyeSBkZXNpZ25lci9zb2Z0d2FyZSBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBmb2N1cyBvbiBjb21wdXRhdGlvbmFsIGdlb21ldHJ5IGFuZCBmYWJyaWNhdGlvbi4gUHJldmlvdXNseSwgSSBoYXZlIHdvcmtlZCBhdCBpbnRlcm5hdGlvbmFsIGFyY2hpdGVjdHVyYWwgcHJhY3RpY2VzLCBtb3N0IG5vdGFibHkgWmFoYSBIYWRpZCBBcmNoaXRlY3RzIGluIExvbmRvbiwgZGV2ZWxvcGluZyBiZXNwb2tlIGRlc2lnbiBzb2x1dGlvbnMgYW5kIHByb2plY3Qtc3BlY2lmaWMgc29mdHdhcmUgdG9vbHMuIEkgaGF2ZSBhbHNvIGNvbGxhYm9yYXRlZCB3aXRoIHNtYWxsZXIgcHJhY3RpY2VzIGluIGFyY2hpdGVjdHVyZSBhbmQgZmFicmljYXRpb24gYXMgYW4gaW5kZXBlbmRlbnQgY29uc3VsdGFudCB0byBpbXByb3ZlL2VzdGFibGlzaCBjb21wdXRhdGlvbmFsIHdvcmtmbG93IGludGVncmF0aW9uLlwiKTtcclxuICAgIGNvbnN0IGludHJvMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJyxcclxuICAgICAgICBcIkkgaG9sZCBhIE1BcmNoIGluIEFyY2hpdGVjdHVyZSBhbmQgVXJiYW5pc20gZnJvbSB0aGUgQXJjaGl0ZWN0dXJhbCBBc3NvY2lhdGlvbiBpbiBMb25kb24gVUsgYW5kIGEgQkFyY2ggaW4gQXJjaGl0ZWN0dXJlIHdpdGggaGlnaCBkaXN0aW5jdGlvbiBmcm9tIHRoZSBDYWxpZm9ybmlhIENvbGxlZ2Ugb2YgdGhlIEFydHMgaW4gU2FuIEZyYW5jaXNjbywgQ2FsaWZvcm5pYS4gQWZ0ZXIgZ2V0dGluZyBtb3JlIGFuZCBtb3JlIGludm9sdmVkIHdpdGggdGhlIGRldmVsb3BtZW50IHNpZGUgYW5kIHRoZSBleGNpdGluZyBwb3NzaWJpbGl0ZXMgb2YgbWFycnlpbmcgZGVzaWduIHdpdGggY29tcHV0YXRpb24sIEkgZGVjaWRlZCB0byBwdXJzdWUgY29udGludWVkIGVkdWNhdGlvbiBpbiBDb21wdXRlciBTY2llbmNlIGF0IEltcGVyaWFsIENvbGxlZ2UgTG9uZG9uLCB3aGVyZSBJIGNvbXBsZXRlZCBhIE1TYyBpbiBDb21wdXRpbmcsIHdpdGggYSBmb2N1cyBvbiBjb21wdXRlciBncmFwaGljcyBhbmQgTWFjaGluZSBMZWFybmluZy5cIik7IFxyXG5cclxuICAgIGFidENvbnRhaW5lci5hcHBlbmQobGlua3NDb250YWluZXIsIGFib3V0MCwgYWJvdXQxLCBpbnRybzIpO1xyXG4gICAgY29uc3QgYmlvZ3JhcGh5VGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcclxuICAgICAgICBcIkJpb2dyYXBoeVwiKTtcclxuXHJcbiAgICBjb25zdCBiaW8wID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICBcIkdyb3dpbmcgdXAgYmV0d2VlbiBjdWx0dXJlcyBhbmQgc3RpbGwgZm9sbG93aW5nIGEgZ2xvYmUtdHJvdHRpbmcgbGlmZXR5bGUgaW4gYWR1bHRob29kIChBdXN0cmlhLCBDaGluYSwgVVMsIFVLIGFuZCBjb3VudGluZyksIG15IG11bHRpLWN1bHR1cmFsIGV4cGVyaWVuY2UgaGFzIHBlcmhhcHMgZ2l2ZW4gbWUgYSB1bmlxdWUgcGVyc3BlY3RpdmUgb24gbWF0dGVycy4gSSBvZnRlbiB0cnkgdG8gc2VlIGFuZCB1bmRlcnN0YW5kIHRoZSBjb21wbGV4IHN5c3RlbXMgdGhhdCB3ZWF2ZSB0aHJvdWdoIG91ciBlbnZpcm9ubWVudHMsIGFuZCBjb25zZXF1ZW50bHkgSSBiZWxpZXZlIHRoYXQgZGVzaWduIHNob3VsZCBiZSBhcHByb2FjaGVkIGZyb20gYSBzeXN0ZW1pYyBwZXJzcGVjdGl2ZSwgcmF0aGVyIHRoYW4gdGhlIHByZXZhaWxpbmcgZGVzaWduLWFzLWEtbW9udW1lbnQgcGFyYWRpZ20uXCIpO1xyXG4gICAgY29uc3QgYmlvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBiaW8yLmlubmVySFRNTCA9ICdJIGhhdmUgYSBrZWVuIGludGVyZXN0IGluIGRlc2lnbiByZXNlYXJjaCBhbmQgZmFicmljYXRpb24uIE15IHNwZWNpYWxpemF0aW9uIGlzIGluIGFkZGl0aXZlIG1hbnVmYWN0dXJpbmcgYW5kIEFJIGluIGFyY2hpdGVjdHVyZSwgaGF2aW5nIGRvbmUgdHdvIG1hc3RlciB0aGVzaXMgb24gdGhlIHRvcGljIGFuZCBoYXZpbmcgbGVkIHdvcmtzaG9wcyBhdCB1bml2ZXJzaXRpZXMgYXJvdW5kIHRoZSBnbG9iZSAoRm9yIG1vcmUgZGV0YWlscywgcGxlYXNlIGNoZWNrIG91dCB0aGUgUHJvamVjdHMgc2VjdGlvbikuIEkgYW0gYWx3YXlzIG9uIHRoZSBsb29rb3V0IGZvciBjb250aW51ZWQgcmVzZWFyY2ggb3Bwb3J0dW5pdGllcywgc28gcGxlYXNlIGRvblxcJ3QgaGVzaXRhdGUgdG8gPGEgaHJlZj1cIiNcIj5kcm9wIG1lIGEgbWVzc2FnZSE8L2E+JztcclxuICAgIGNvbnN0IGJpbzEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiSSBhbSBmYXNjaW5hdGVkIGJ5IHRoZSBjb25jZXB0IG9mIHRoZSBSZW5haXNzYW5jZSBNYW4gYW5kIEkgZW5qb3kgaW5kdWxnaW5nIGluIHRoZSBwdXJzdWl0IG9mIGRpdmVyZ2luZyBpbnRlcmVzdHMgaW4gbXkgZnJlZSB0aW1lLiBNeSBvcmlnaW5zIGFyZSBpbiB0aGUgZmluZSBhcnRzLiBIYXZpbmcgcGFpbnRlZCwgZHJhd24gYW5kIHNjdWxwdGVkIGFsbCBteSBjaGlsZGhvb2QsIEkgd2FzIG9yaWdpbmFsbHkgcGxhbm5pbmcgdG8gc3RhcnQgYSBjYXJlZXIgaW4gcGFpbnRpbmcuIEhvd2V2ZXIsIHRoZSBicmVhZHRoIGFuZCByaWdvciBvZiB0aGUgYXJjaGl0ZWN0dXJhbCBlZHVjYXRpb24gd2FzIG1vcmUgYXBwZWFsaW5nIHRvIG1lLCBzbyBJIHBpdm90ZWQgZWFybHkgb24uIEkgaGF2ZSBub3QgZ2l2ZW4gdXAgbXkgcGFzc2lvbiBpbiB0aGUgYXJ0cyBhbmQgSSBzdGlsbCBwcmFjdGljZSB3aGVuZXZlciBJIGNhbi4gTXkgaG9wZSBpcyB0aGF0IHNvbWUgZGF5IEkgY2FuIGZpbmQgYSBoYXBweSwgYW1hbGdhbWF0aW5nIG1lZGl1bSBiZXR3ZWVuIGFsbCBteSBpbnRlcmVzdHMgYW5kIGNyZWF0ZSBzb21ldGhpbmcgbm92ZWwgYW5kIG1lYW5pbmdmdWwuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgYWJ0Q29udGFpbmVyLmFwcGVuZChiaW9ncmFwaHlUaXRsZSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSwgYmlvMCwgYmlvMiwgYmlvMSk7XHJcbiAgICBhYm91dFRhYi5hcHBlbmQobGVmdEVkZ2UsIGFidENvbnRhaW5lcik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUYWIpO1xyXG5cclxuICAgIHJldHVybiBhYm91dFRhYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0VGFiOyIsImNvbnN0IGxvYWRGb290ZXIgPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIlRoaXMgcGFnZSB3YXMgZGVzaWduZWQgYW5kIGJ1aWx0IGJ5IG1lIDopIEFsbCByaWdodHMgcmVzZXJ2ZWQgwqkgVGFvbGUgQ2hlblwiO1xyXG4gICAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkRm9vdGVyOyIsImNvbnN0IGxvYWRJbmRleFRhYiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGluZGV4VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmRleFRhYi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW5kZXgnKTtcclxuXHJcbiAgICBjb25zdCB0b3BlZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BlZGdlLmNsYXNzTGlzdC5hZGQoJ3RvcEVkZ2UnKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpbHRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RmlsdGVyJyk7XHJcblxyXG4gICAgY29uc3QgaW5kZXhUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGluZGV4VGFibGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZGV4VGFibGUnKTtcclxuXHJcbiAgICBpbmRleFRhYi5hcHBlbmQodG9wZWRnZSwgZmlsdGVyQ29udGFpbmVyLCBpbmRleFRhYmxlKTtcclxuICAgIFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGluZGV4VGFiKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGluZGV4VGFiO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRJbmRleFRhYjsiLCJpbXBvcnQgbG9hZFJldHVybkFycm93IGZyb20gXCIuL2xvYWRSZXR1cm5BcnJvd1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jb25zdCBsb2FkTGVmdE1haW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbGVmdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRhaW5lclwiLCBcImxlZnRcIik7XHJcblxyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgbXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG15TmFtZS50ZXh0Q29udGVudCA9ICdUYW9sZSBDaGVuJztcclxuXHJcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdkZXNpZ24gfCBjb2RlIHwgYXJ0JztcclxuXHJcbiAgICBiYW5uZXIuYXBwZW5kKG15TmFtZSwgc3VidGl0bGUpO1xyXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpbnRyby50ZXh0Q29udGVudCA9IFwiSSBhbSBhIG11bHRpLWRpc2NpcGxpbmFyeSBkZXNpZ25lciBvcGVyYXRpbmcgYXQgdGhlIGludGVyc2VjdGlvbiBvZiBkZXNpZ24sIHRlY2hub2xvZ3kgYW5kIGFydC4gSSBsaWtlIHRvIHNvbHZlIHByb2JsZW1zIGFuZCBidWlsZCB0aGluZ3MuIEkgYW0gcHJvZmVzc2lvbmFsbHkgdHJhaW5lZCBpbiBhcmNoaXRlY3R1cmUgYW5kIGNvbXB1dGVyIHNjaWVuY2UuIFwiO1xyXG5cclxuICAgIGNvbnN0IGJ0bl9wcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5fcHJvZmlsZS5pZCA9ICdidG5fcHJvZmlsZSc7XHJcbiAgICBjb25zdCBwcm9maWxlVGV4dCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdkaXYnLCBcIkZ1bGwgUHJvZmlsZVwiKTsgICBcclxuICAgIGJ0bl9wcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVUZXh0KTtcclxuXHJcbiAgICBjb25zdCByZXR1cm5BcnJvdyA9IGxvYWRSZXR1cm5BcnJvdyhidG5fcHJvZmlsZSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGJhbm5lciwgaW50cm8sIGJ0bl9wcm9maWxlKTtcclxuXHJcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiBsZWZ0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZExlZnRNYWluOyIsImNvbnN0IGxvYWRQcm9qZWN0QXJyb3cgPSAocGFyZW50KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcclxuICAgIGNvbnRhaW5lci5pZCA9ICdwcm9qZWN0QXJyb3cnO1xyXG5cclxuICAgIGNvbnN0IGxpbmtBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxpbmtBcnJvdy5jbGFzc0xpc3QuYWRkKCdsaW5rX19hcnJvdycpO1xyXG4gICAgbGlua0Fycm93LmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcblxyXG4gICAgY29uc3QgbGlua0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsaW5rTGluZS5jbGFzc0xpc3QuYWRkKCdsaW5rX19saW5lJyk7XHJcbiAgICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxpbmtUZXh0LmNsYXNzTGlzdC5hZGQoJ2xpbmtfX3RleHQnKTtcclxuICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gJ3Byb2plY3RzJztcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kKGxpbmtBcnJvdywgbGlua0xpbmUsIGxpbmtUZXh0KTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0QXJyb3c7IiwiY29uc3QgbG9hZFByb2plY3RUYWIgPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUYWInKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0RWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdEVkZ2UuY2xhc3NMaXN0LmFkZCgnbGVmdEVkZ2UnKTtcclxuICAgIGxlZnRFZGdlLnRleHRDb250ZW50ID0gJ2Nsb3NlJ1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xyXG5cclxuICAgIHByb2plY3RUYWIuYXBwZW5kKGxlZnRFZGdlLCBwcm9qZWN0Q29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RUYWIpO1xyXG4gICAgcmV0dXJuIHByb2plY3RUYWI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUHJvamVjdFRhYjsiLCJjb25zdCBsb2FkUmV0dXJuQXJyb3cgPSAocGFyZW50KSA9PiB7XHJcbiAgICAvLyB2YXJpYWJsZSBmb3IgdGhlIG5hbWVzcGFjZSBcclxuICAgIGNvbnN0IHN2Z25zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgLy8gbWFrZSBhIHNpbXBsZSByZWN0YW5nbGVcclxuICAgIGxldCByZXR1cm5BcnJvd1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3N2ZycpO1xyXG4gICAgcmV0dXJuQXJyb3dTdmcuc2V0QXR0cmlidXRlKFwieFwiLCBcIjUwXCIpO1xyXG4gICAgcmV0dXJuQXJyb3dTdmcuc2V0QXR0cmlidXRlKFwieVwiLCBcIjUwXCIpO1xyXG4gICAgcmV0dXJuQXJyb3dTdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDBcIik7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMDBcIik7XHJcbiAgICAvLyByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiIzVjY2VlZVwiKTtcclxuXHJcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAncGF0aCcpO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk0yMiwyOS41aC05LjVjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJWMFwiKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UtbWl0ZXJsaW1pdCcsIFwiMTBcIik7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgnZmlsbCcsIFwibm9uZVwiKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBcIiMwMDAwMDBcIik7XHJcblxyXG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnY2lyY2xlJyk7XHJcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdjeCcsIFwiMjkuODc1XCIpO1xyXG4gICAgZG90LnNldEF0dHJpYnV0ZSgnY3knLCBcIjI5LjEyNVwiKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ3InLCBcIjcuODc1XCIpO1xyXG4gICAgLy8gZG90LnNldEF0dHJpYnV0ZSgnZmlsbCcsIFwiIzAwMDAwMFwiKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBcIm5vbmVcIik7XHJcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdzdHJva2UnLCBcIiMwMDAwMDBcIik7XHJcblxyXG4gICAgcmV0dXJuQXJyb3dTdmcuYXBwZW5kKGxpbmUsZG90KTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyZXR1cm5BcnJvd1N2Zyk7XHJcblxyXG4gICAgcmV0dXJuIHJldHVybkFycm93U3ZnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRSZXR1cm5BcnJvdzsiLCJjb25zdCBsb2FkUmlnaHRNYWluID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICByaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRhaW5lclwiLCBcInJpZ2h0XCIpO1xyXG5cclxuICAgIGNvbnN0IGNpcmNsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2lyY2xlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZUNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjMS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuICAgIGMxLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZURlc2lnbicpO1xyXG4gICAgY29uc3QgYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGMyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xyXG4gICAgYzIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlQ29kZScpO1xyXG4gICAgY29uc3QgYzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGMzLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xyXG4gICAgYzMuY2xhc3NMaXN0LmFkZCgnY2lyY2xlQXJ0Jyk7XHJcblxyXG4gICAgY2lyY2xlQ29udGFpbmVyLmFwcGVuZChjMSwgYzIsIGMzKTtcclxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZChjaXJjbGVDb250YWluZXIpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIHJpZ2h0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFJpZ2h0TWFpbjsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL1Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgYWFnX2NvdmVyIGZyb20gJy4uL2Fzc2V0cy9hYWcvYWFnX2NvdmVyLmpwZydcclxuXHJcbmNvbnN0IGFhZyA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgXCJGb3Jtd29yay1GcmVlIGFuZCBNb3J0YXItRnJlZSBTaGVsbCBBc3NlbWJseVwiLCBcclxuICAgICAgICAyMDE4LCBcclxuICAgICAgICBcIkdvdGhlbmJ1cmcgU3dlZGVuXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJkZXNpZ25cIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYWNhZGVtaWNcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwidGVhY2hpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiZmFicmljYXRpb25cIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHRpID0gY3JlYXRlRWxlbWVudFRleHQoJ2gxJywgcHJvai5UaXRsZSk7XHJcbiAgICBjb25zdCBpbnRyb2hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBpbnRyb2hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkludHJvZHVjdGlvblwiO1xyXG4gICAgY29uc3QgaW1nX2NvdmVyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdfY292ZXIuc3JjID0gYWFnX2NvdmVyO1xyXG4gICAgLy9JTlRST1xyXG4gICAgY29uc3QgaW50cm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnRybzEudGV4dENvbnRlbnQgPSBcIkZvcm13b3JrLUZyZWUgYW5kIE1vcnRhci1GcmVlIFNoZWxsIEFzc2VtYmx5IGlzIGEgd29ya3Nob3AgSSBsZWQgaW4gR290aGVuYnVyZywgU3dlZGVuLCBmb3IgdGhlIEFkdmFuY2VzIGluIEFyY2hpdGVjdHVyYWwgR2VvbWV0cnkgQ29uZmVyZW5jZSBpbiAyMDE4LlwiO1xyXG4gICAgY29uc3QgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnRybzIudGV4dENvbnRlbnQgPSBcIlRoZSBvYmplY3RpdmUgd2FzIHRvIGRlbW9uc3RyYXRlIHRvIHN0dWRlbnRzIHRoZSB3b3JraW5ncyBhbmQgYmVuZWZpdHMgb2YgdGhlIGNvbXB1dGF0aW9uYWwgZGVzaWduIHBhcmFkaWdtIHRoYXQgYWxsb3dzIHNlYW1sZXNzIGludGVncmF0aW9uIGJldHdlZW4gZGVzaWduLCBmYWJyaWNhdGlvbiBhbmQgYXNzZW1ibHkgaW4gc2V0dGluZ3Mgd2hlcmUgbWFueSBjb21wbGV4IGNvbnN0cmFpbnRzIGNvbWUgdG9nZXRoZXIsIHRodXMgbWFraW5nIGl0IHVuc3VpdGFibGUgZm9yIGNvbnZlbnRpb25hbCwgYW5hbG9nIGRlc2lnbiBtZXRob2RvbG9naWVzLiBQZWRhZ29naWNhbGx5LCB0aGUgc3R1ZGVudHMgZXhwZXJpZW5jZWQgaXQgZmlyc3RoYW5kIGJ5IGRlc2lnbmluZyBmdW5pY3VsYXIgc2hlbGwgc3RydWN0dXJlcyB0aGF0IGhvbGQgdG9nZXRoZXIgd2l0aG91dCBmb3Jtd29yayBhc3NlbWJseSBhbmQgbW9ydGFyIHRocm91Z2ggYSBwYXJhbWV0cmljIG1vZGVsIHRoYXQgZW1iZWRzIGZhYnJpY2F0aW9uIGRhdGEsIHN1YnNlcXVlbnRseSBzZW5kaW5nIHRoZWlyIGRlc2lnbiBlbGVtZW50cyB0byBhIHJvYm90aWMgYXJtIGZvciBob3R3aXJlIGZhYnJpY2F0aW9uLiBUaGlzIHJlc3VsdHMgaW4gYSB0aWdodCBmZWVkYmFjayBsb29wIHdoZXJlIHN0dWRlbnRzIHdlcmUgYWJsZSB0byBzZWUgdGhlIGVmZmVjdHMgb2YgdGhlaXIgZGVzaWduIGRlY2lzaW9ucyBpbiBhIHJlYWwtd29ybGQgcHJvdG90eXBlIHdpdGggYSBtaW5pbWFsIGRlbGF5IGFuZCBhZGFwdCB0aGVpciBkZXNpZ24gaW4gdGhlIG5leHQgaXRlcmF0aW9uLlwiOyBcclxuICAgIC8vRmVhdHVyZXNcclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDJcIiwgJ0ZlYXR1cmVzJyk7XHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGZlYXQxID0gY3JlYXRlRWxlbWVudFRleHQoXCJsaVwiLCAnQmVzcG9rZSBHcmFzc2hvcHBlciBwbHVnaW4gcHJvdmlkaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjcmVhdGlvbiBvZiBzaGVsbCBzZWdtZW50cyByZWFkeSBmb3IgZmFicmljYXRpb24nKTtcclxuICAgIGNvbnN0IGZlYXQyID0gY3JlYXRlRWxlbWVudFRleHQoXCJsaVwiLCAnSW50ZWdyYXRlcyBTcGF0aWFsU2x1ciwgYSBnZW9tZXRyaWMgZGF0YSBtYW5pcHVsYXRpb24gbGlicmFyeScpO1xyXG4gICAgY29uc3QgZmVhdDMgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdTaGVsbCBzdHJ1Y3R1cmFsIGV2YWx1YXRpb24gaW1wbGVtZW50aW5nIHRocnVzdCBuZXR3b3JrIGFuYWx5c2lzIG9uIGhhbGYtZWRnZSBtZXNoIHN0cnVjdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXQ0ID0gY3JlYXRlRWxlbWVudFRleHQoXCJsaVwiLCAnSW50ZWdyYXRpb24gd2l0aCBjdXN0b20tbWFkZSByb2JvdGljIGhvdHdpcmUtY3V0dGVyJyk7XHJcbiAgICBmZWF0dXJlcy5hcHBlbmQoZmVhdDEsIGZlYXQyLGZlYXQzLCBmZWF0NCk7XHJcbiAgICAvL1RlY2hub2xvZ2llc1xyXG4gICAgY29uc3QgdGVjaEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCAnVGVjaG5vbG9naWVzJyk7XHJcbiAgICBjb25zdCB0ZWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHRlY2gxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0MjJyk7XHJcbiAgICBjb25zdCB0ZWNoMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdLdWthUFJDIGZvciByb2JvdGljIGtpbmVtYXRpYyBzaW11bGF0aW9uIGFuZCBHQ29kZSBnZW5lcmF0aW9uJyk7XHJcbiAgICBjb25zdCB0ZWNoMyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdTcGF0aWFsU2x1cicpO1xyXG4gICAgY29uc3QgdGVjaDQgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnSGFsZi1lZGdlIG1lc2ggc3RydWN0dXJlIHRvIGZhY2lsaWF0ZSBnZW9tZXRyaWMgb3BlcmF0aW9ucyBhbmQgZm9yY2Ugc2ltdWxhdGlvbicpO1xyXG4gICAgdGVjaC5hcHBlbmQodGVjaDEsIHRlY2gyLCB0ZWNoMyx0ZWNoNCk7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGksIGltZ19jb3ZlciwgaW50cm9oZWFkaW5nLCBpbnRybzEsIGludHJvMiwgXHJcbiAgICAgICAgZmVhdHVyZXNIZWFkaW5nLCBmZWF0dXJlcywgdGVjaEhlYWRpbmcsIHRlY2gpO1xyXG5cclxuICAgIHJldHVybiBwcm9qO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYWc7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQsIGNyZWF0ZUltYWdlIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8vbWVkaWFcclxuaW1wb3J0IGRpYWdyYW1fY2xhc3NlcyBmcm9tICcuLi9hc3NldHMvbGJkL0hpdmVNaW5kQ2xhc3Nlcy5qcGcnO1xyXG5cclxuY29uc3QgZHJvbmVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIkxlYXJuaW5nLUJhc2VkIERlc2lnblwiLCAyMDIyLCBcIkxvbmRvbiwgVUtcIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFjYWRlbWljXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFkZGl0aXZlIG1hbnVmYWN0dXJpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJBSVwiKTtcclxuXHJcbiAgICBwcm9qLlN1YnRpdGxlID0gXCJJbXBsZW1lbnRpbmcgYSBMZWFybmluZy1CYXNlZCBDaGFuZ2UgRGV0ZWN0aW9uIEZyYW1ld29yayBmb3IgYSBTZWxmLUNvcnJlY3RpdmUgQmVoYXZpb3VyYWwgTW9kZWwgaW4gQWVyaWFsIEFkZGl0aXZlIE1hbnVmYWN0dXJpbmcgfCBJbXBlcmlhbCBDb2xsZWdlIE1hc3RlciBUaGVzaXNcIjtcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YnRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvai5TdWJ0aXRsZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgWWVhcjogJyArIHByb2ouWWVhcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IExvY2F0aW9uOiAnICsgcHJvai5Mb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBjb25zdCBpbnRyb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcclxuICAgICAgICBcIkludHJvZHVjdGlvblwiKTtcclxuICAgIGNvbnN0IGludHJvID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnTGVhcm5pbmctQmFzZWQgRGVzaWduIHdhcyBteSBtYXN0ZXIgdGhlc2lzIGZvciB0aGUgTVNjIGluIENvbXB1dGluZyBhdCBJbXBlcmlhbCBDb2xsZWdlIExvbmRvbi4gRHVlIHRvIHRoZSBjb25maWRlbnRpYWwgbmF0dXJlIG9mIHRoZSBwcm9qZWN0LCBJIGFtIG5vdCBhYmxlIHRvIHB1Ymxpc2ggYW55IGNvbmNyZXRlIHJlc3VsdHMsIGhvd2V2ZXIsIEkgd2lsbCBpbmNsdWRlIGhlcmUgc29tZSBnZW5lcmFsIGluZm9ybWF0aW9uIGFuZCB0ZWNobm9sb2dpZXMgdXNlZC4gSWYgdGhlcmUgaXMgaW50ZXJlc3QsIHBsZWFzZSBmZWVsIGZyZWUgdG8gY29udGFjdCBtZSBmb3IgZnVydGhlciBkaXNjdXNzaW9uIHdoaWxlIGF2b2lkaW5nIGFueSBzZW5zaXRpdmUgdG9waWNzIDopLicpO1xyXG5cclxuICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlYW0uaW5uZXJIVE1MID0gJzxzdHJvbmc+VGVhbTo8L3N0cm9uZz4gVGFvbGUgQ2hlbiwgWXVzdWYgS2F5YSwgTGFjaGxhbiBPcnI8YnI+PHN0cm9uZz5BZHZpc29yOjwvc3Ryb25nPkRyLiAgIEJhc2FyYW4gQmFoYWRpciBLb2Nlcjxicj5JbiBjb2xsYWJvcmF0aW9uIHdpdGggdGhlIDxhIGhyZWYgPSBcImh0dHBzOi8vd3d3LmltcGVyaWFsLmFjLnVrL2Flcm9uYXV0aWNzL2Fib3V0L1wiPkltcGVyaWFsIEFlcm9uYXV0aWNzIERlcGFydG1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZW1wYS5jaC93ZWIvZW1wYS9yZXNlYXJjaC1hcmVhc1wiPkVNUEE8L2E+JztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aXRsZSwgc3VidGl0bGUsIHllYXIsIGxvY2F0aW9uLCBjb3ZlciwgaW50cm9IZWFkaW5nLCBpbnRybywgdGVhbSk7XHJcblxyXG4gICAgY29uc3Qgc3VtbWFyeUhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcIlN1bW1hcnlcIik7XHJcbiAgICAvLyBjb25zdCBuZWlnaHN1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCAnVGhlIEJ1aWxkaW5nIGFzIGEgTmV0d29yaycpXHJcbiAgICBjb25zdCBzdW0wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3VtMC5pbm5lckhUTUwgPSBcclxuICAgICAgICAnVGhlIHByb2plY3Qgc2l0dWF0ZXMgZGVzaWduIGluIHRoZSBjb250ZXh0IG9mIEluZHVzdHJ5IDQuMCBhbmQgdGhlIHJhZGljYWxseSBuZXcgZGlzY2lwbGluZSBvZiA8YSBocmVmPVwiaHR0cDovL3d3dy5hZXJpYWwtYWJtLmNvbS9cIj5BZXJpYWwgQWRkaXRpdmUgQnVpbGRpbmcgTWFudWZhY3R1cmluZzwvYT4uIFdpdGggdGhlIHByb2xpZmVyYXRpb24gb2YgZGlnaXRhbCB0ZWNobm9sb2dpZXMgaW4gdGhlIEFFQyBpbmR1c3RyeSwgdGhlIGZ1dHVyZSB0cmFqZWN0b3J5IG9mIHRoZSBpbmR1c3RyeSBpcyBwb2ludGluZyB0b3dhcmRzIGF1dG9ub21vdXMsIGNsb3NlZC1sb29wIHJvYm90aWMgc3lzdGVtcywgY3JlYXRpbmcgdGhlIG5lZWQgdG8gZGV2ZWxvcCBkZXNpZ24gbWV0aG9kb2xvZ2llcyB0aGF0IGNhbiBlbmdhZ2Ugd2l0aCBtYWNoaW5lLWNlbnRyaWMgcHJvY2Vzc2VzLic7XHJcbiAgICBjb25zdCBzdW0xID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnQWVyaWFsIEFkZGl0aXZlIE1hbnVmYWN0dXJpbmcgKEFBTSkgaXMgYW4gZWFybHktc3RhZ2UgcmVzZWFyY2ggdGhhdCBpcyBkZXZlbG9waW5nIGEgcGlvbmVlcmluZyBmcmFtZXdvcmsgZm9yIG11bHRpLWFnZW50IGFkZGl0aXZlIG1hbnVmYWN0dXJpbmcgd2l0aCBVbm1hbm5lZCBBZXJpYWwgdmVoaWNsZXMgKFVBVikuIEN1cnJlbnRseSwgQUFNIGRvZXMgbm90IGhhdmUgYSBkZXNpZ24tdG8tZmFicmljYXRpb24gd29ya2Zsb3cgbm9yIGEgZGVkaWNhdGVkIGRlc2lnbiBmcmFtZXdvcmsgdG8gaW50ZXJmYWNlIHdpdGggZHVlIHRvIGl0cyBpbmZhbmN5LiBUbyBhZGRyZXNzIHRoaXMgZ2FwLCBteSByZXNlYXJjaCBhaW1lZCB0byBkZXZlbG9wIHRoZSBmaXJzdCBzdGFnZXMgb2YgYSBkZXNpZ24gaW50ZXJmYWNlIGZvciBtdWx0aS1hZ2VudCBBQU0uIE1vcmUgc3BlY2lmaWNhbGx5LCBhIHJlYWx0aW1lLCBpbi1zaXR1IGNoYW5nZSBkZXRlY3Rpb24gYW5kIGNvcnJlY3Rpb24gZnJhbWV3b3JrIHdpdGggYSBtYWNoaW5lIGxlYXJuaW5nIGFwcHJvYWNoIGJhc2VkIG9uIHBvaW50IGNsb3VkcyB3YXMgZGV2ZWxvcGVkIGFuZCBzdWJzZXF1ZW50bHkgdmFsaWRhdGVkIHRocm91Z2ggcGh5c2ljYWwgZXhwZXJpbWVudHMuJyk7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHMoc3VtbWFyeUhlYWQsIHN1bTAsIHN1bTEpO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ0ZlYXR1cmVzJyk7XHJcbiAgICBjb25zdCBmZWF0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBmZWF0MCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdCZWhhdmlvdXJhbCBNb2RlbCBmb3IgQUFNIHVzaW5nIHBvaW50IGNsb3VkcyBhcyBhIGRhdGEgbWVkaXVtLiBQb2ludCBjbG91ZHMgaGF2ZSB0aGUgYWR2YW50YWdlIG9mIGJlaW5nIGFuIGludGVncmFsIHBhcnQgb2YgZHJvbmUgdmlzaW9uLCBzbyBubyBhZGRpdGlvbmFsIHRyYW5zbGF0aW9uIGlzIHJlcXVpcmVkIGJldHdlZW4gZGVzaWduIGFuZCBmYWJyaWNhdGlvbi4nKVxyXG4gICAgY29uc3QgZmVhdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZmVhdDEuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJ0MjIFdyYXBwZXIgZm9yIHRoZSBwb3B1bGFyIEMrKyA8YSBocmVmPVwiaHR0cHM6Ly9wb2ludGNsb3Vkcy5vcmcvXCI+UG9pbnQgQ2xvdWQgTGlicmFyeTwvYT4gKHBjbCksIGEgMkQvM0QgcHJvY2Vzc2luZyBsaWJyYXJ5IHRoYXQgaXMgcG9wdWxhciBhbW9uZyByb2JvdGljIGRldmVsb3BtZW50IGNvbW11bml0aWVzIGFuZCBpbnRlZ3JhdGVzIHdpdGggdGhlIFJPUyBmcmFtZXdvcmsuJztcclxuICAgIGNvbnN0IGZlYXQyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ01hY2hpbmUgTGVhcm5pbmcgbW9kZWwgaW1wbGVtZW50aW5nIGEgY3VzdG9tIHJhbmRvbSBmb3Jlc3QgY2xhc3NpZmllciB3aXRoIEpTT04gZXhwb3J0IGZvciBlYXNlIG9mIGRpc3RyaWJ1dGlvbi4gT3RoZXIgY2xhc3NpZmllcnMsIHN1Y2ggYXMgYSBuZXVyYWwgbmV0d29yaywgd2VyZSBhbHNvIGltcGxlbWVudGVkLCB0aG91Z2ggbm90IHVzZWQgZm9yIHRoZSBmaW5hbCBleHBlcmltZW50LicpO1xyXG4gICAgY29uc3QgZmVhdDMgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnVGVuc29yIGRhdGEgb2JqZWN0IGltcGxlbWVudGF0aW9uIGluIEdyYXNzaG9wcGVyIHVzaW5nIFRlbnNvcmZsb3cuTkVUXFwncyBOdW1weSwgYWxsb3dpbmcgbXVsdGlkaW1lbnNpb25hbCBtYXRyaXggb3BlcmF0aW9ucyBpbiB0aGUgR0ggZW52aXJvbm1lbnQuJyk7XHJcbiAgICBjb25zdCBmZWF0NCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdTdGFuZC1hbG9uZSBjb3JlIEMjIGxpYnJhcnkgd2l0aCB0ZXN0aW5nIHRoYXQgY2FuIGJlIHBvcnRlZCB0byBvdGhlciBhcHBsaWNhdGlvbnMuJyk7XHJcblxyXG5cclxuICAgIGZlYXRsaXN0LmFwcGVuZChmZWF0MCwgZmVhdDEsIGZlYXQyLCBmZWF0MywgZmVhdDQpO1xyXG4gICAgcHJvai5wdXNoQ29udGVudHMoZmVhdHVyZXNIZWFkaW5nLCBmZWF0bGlzdCk7XHJcblxyXG4gICAgY29uc3QgYXJjaGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dChcImgzXCIsICdBcmNoaXRlY3R1cmUnKTtcclxuICAgIGNvbnN0IGFyY2gwID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCAnVGhlIGNvZGUgZm9yIHRoZSBwYXBlciB3YXMgaW1wbGVtZW50ZWQgYXMgYSBHcmFzc2hvcHBlciBwbHVnLWluIGxpYnJhcnkuIFRoZSBjb3JlIGxpYnJhcnkgaXMgd3JpdHRlbiBpbiBDIyBhbmQgY2FyZSB3YXMgdGFrZW4gdG8gbWFpbnRhaW4gYSBoZXhhZ29uYWwgYXJjaGl0ZWN0dXJlIGZvciBmdXR1cmUgYWRhcHRhYmlsaXR5LiBGdW5jdGlvbmFsaXR5IGZvciBwb2ludCBjbG91ZHMgYW5kIG1hY2hpbmUgbGVhcm5pbmcgaXMgYWRkZWQgd2l0aCB0aGUgYWRhcHRlciBwYXR0ZXJuIHNvIGl0IGNhbiBiZSByZXBsYWNlZCB3aXRoIHVwZGF0ZWQgbW9kdWxlcy4gQSBjb250cm9sbGVyIGxpYnJhcnkgbmFtZWQgSGl2ZU1pbmRHSCBlc3RhYmxpc2hlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgY29yZSBsaWJyYXJ5IGFuZCBHcmFzc2hvcHBlcuKAmXMgdmlzdWFsIGludGVyZmFjZS4nKVxyXG4gICAgXHJcbiAgICBjb25zdCBpbWdfY2xhc3NEaWFncmFtID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdfY2xhc3NEaWFncmFtLnNyYyA9IGRpYWdyYW1fY2xhc3NlcztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhhcmNoaGVhZGluZywgYXJjaDAsIGltZ19jbGFzc0RpYWdyYW0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb25lczsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL1Byb2plY3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCwgY3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgcmVuZGVyX2ZhY2FkZSBmcm9tICcuLi9hc3NldHMvbWF0bmV0L3JlbmRlcl9mYWNhZGUuanBnJztcclxuaW1wb3J0IGFuaW1fem9vbVNjYWxlc18wMCBmcm9tICcuLi9hc3NldHMvbWF0bmV0L2FuaW1fem9vbVNjYWxlc18wMC5naWYnO1xyXG5pbXBvcnQgYW5pbV9ncm93dGhfYWxsIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvYW5pbV9ncm93dGhfYWxsLmdpZic7XHJcbmltcG9ydCBhbmltX2dyb3d0aF90dXJudGFibGUgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9hbmltX2dyb3d0aF90dXJudGFibGUuZ2lmJztcclxuaW1wb3J0IHVuaXQwMCBmcm9tICcuLi9hc3NldHMvbWF0bmV0L3VuaXRfMDAuanBnJztcclxuaW1wb3J0IHVuaXRsYXlvdXQgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC91bml0X2xheW91dC5qcGcnXHJcbmltcG9ydCBhbmltX2dyYXBoVG9BcmNoIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvYW5pbV9ncmFwaFRvQXJjaC5naWYnXHJcblxyXG5jb25zdCBtYXRuZXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiTWF0ZXJpYWwgTmV0d29ya3NcIiwgMjAxOCwgXCJMb25kb24sIFVLXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImRlc2lnblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImZhYnJpY2F0aW9uXCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIk1hc3MtQ3VzdG9taXplZCBIb3VzaW5nIGZvciBDb2hlc2l2ZSBDb21tdW5pdGllcy4gQUFEUkwgTWFzdGVyIFRoZXNpc1wiXHJcblxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gxJywgcHJvai5UaXRsZSk7XHJcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsIHByb2ouU3VidGl0bGUpO1xyXG4gICAgY29uc3QgeWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IFllYXI6ICcgKyBwcm9qLlllYXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBMb2NhdGlvbjogJyArIHByb2ouTG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnN0IGNvdmVyID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb3Zlci5zcmMgPSByZW5kZXJfZmFjYWRlO1xyXG5cclxuICAgIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiSW50cm9kdWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdNYXRlcmlhbCBOZXR3b3JrcyBpcyB0aGUgY3VsbWluYXRpb24gb2YgbXkgcmVzZWFyY2ggYXQgdGhlIEFyY2hpdGVjdHVyYWwgQXNzb2NpYXRpb24gLSBEZXNpZ24gUmVzZWFyY2ggTGFiLiBUaGUgcHJvamVjdCBlbmdhZ2VzIHdpdGggdGhlIHJhcGlkIGRpZ2l0aXphdGlvbiBvZiB0aGUgYnVpbHQgZW52aXJvbm1lbnQgYW5kIGxvb2tzIGF0IGhvdyBkZXNpZ24gYWdlbmN5IGNhbiBhZGFwdCB0byBhIGZ1bGx5IGF1dG9tYXRlZCwgY29tcHV0ZXItZHJpdmVuIHdvcmxkIHdoaWxlIGJyaW5naW5nIHRoZSBodW1hbiBlbGVtZW50IHRvIHRoZSBmb3JlZnJvbnQgb2YgdGhlIGRpc2NvdXJzZS4gTWF0ZXJpYWwgTmV0d29ya3MgcHJvcG9zZXMgYSBuZWdvdGlhdGVkIGNvbW11bmFsIGhvdXNpbmcgc3lzdGVtIHRoYXQgcHJvdmlkZXMgY3VzdG9tLXRhaWxvcmVkIG5laWdoYm9yaG9vZHMgdG8gY29oZXNpdmUgY29tbXVuaXRpZXMgdGllZCBieSB0aGVpciBzaGFyZWQgY3VsdHVyZXMsIGVjb25vbWllcyBhbmQgZ292ZXJuYW5jZS4gQnVpbGRpbmctc2NhbGUgYWRkaXRpdmUgbWFudWZhY3R1cmluZyBpcyBpbnZlc3RpZ2F0ZWQgYXMgYW4gYXV0b21hdGVkIGZhYnJpY2F0aW9uIHRlY2hub2xvZ3kgdGhhdCBjYW4gZGVsaXZlciBtYXNzLWN1c3RvbWl6ZWQsIGludGVncmF0ZWQgZHdlbGxpbmdzIHRocm91Z2ggYSBnZW5lcmF0aXZlIEFJIGZyYW1ld29yay4nKTtcclxuXHJcbiAgICBjb25zdCB0ZWFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGVhbS5pbm5lckhUTUwgPSAnRGVzaWduIFRlYW06IFRhb2xlIENoZW4sIFN1Y2hhcnQgKEJvbikgT3V5cG9ybmNoYWlzYWt1bCwgSmVmZnJleSBXaWRqYWphPGJyPlR1dG9yczogU2hhamF5IEJob29zaGFuLCBBbGljaWEgTmFobWFkPGJyPjxhIGhyZWY9XCJodHRwczovL2RybC5hYXNjaG9vbC5hYy51ay9cIj5BQURSTDwvYT4nO1xyXG5cclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRpdGxlLCBzdWJ0aXRsZSwgeWVhciwgbG9jYXRpb24sIGNvdmVyLCBpbnRyb0hlYWRpbmcsIGludHJvLCB0ZWFtKTtcclxuXHJcbiAgICAvL2xldmVsIDAgbmVpZ2hib3Job29kXHJcbiAgICBjb25zdCBuZWlnaEhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcIkxldmVsIDAgTmVpZ2hib3Job29kXCIpO1xyXG4gICAgY29uc3QgbmVpZ2hzdWJIZWFkID0gY3JlYXRlRWxlbWVudFRleHQoJ2g0JywgJ1RoZSBCdWlsZGluZyBhcyBhIE5ldHdvcmsnKVxyXG4gICAgY29uc3QgbmVpZ2gwID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICBcIkNvLW9wdGluZyB0ZWNobmlxdWVzIGZyb20gY29tcGxleCBuZXR3b3JrIGFuYWx5c2lzLCBhdCB0aGUgbmVpZ2hib3Job29kIGxldmVsLCB0aGUgcmVzZWFyY2ggbG9va3MgaW50byBkZXZlbG9waW5nIGFuIG9wZXJhdGlvbmFsIHRvb2wgZm9yIGV4dHJhY3RpbmcgbWVhbmluZ2Z1bCBzcGF0aWFsIHJlbGF0aW9uc2hpcCBmcm9tIHRoZSBzb2NpYWwgbmV0d29yayBvZiBhIGNvbW11bml0eS5cIik7XHJcbiAgICBjb25zdCBuZWlnaDEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdUaGUgc29jaWFsIHJlbGF0aW9uc2hpcHMgb2YgYSBnaXZlbiBjb21tdW5pdHkgYXJlIGNhcHR1cmVkIGluIGEgcmVsYXRpb25hbCByb3N0ZXIgaW4gdGhlIGZvcm0gb2YgYW4gZW5jb2RlZCBkYXRhIG1hdHJpeCwgYWxsb3dpbmcgY29tcHV0ZXJzIHRvIGVhc2lseSByZWFkIGFuZCBwcm9jZXNzIHRoZSBpbmZvcm1hdGlvbi4gVGhlIGRhdGEgbWF0cml4IGlzIHN1YnNlcXVlbnRseSB1c2VkIHRvIGNvbnN0cnVjdCBhIG5ldHdvcmsgZ3JhcGguIFRoZSBncmFwaCBpcyB1c2VmdWwgYmVjYXVzZSBpdCBjYXB0dXJlcyBtdWx0aS1zY2FsYXIgaW5mb3JtYXRpb24gaW4gYSBzaW5nbGUsIGNvaGVzaXZlIGRhdGEgc3RydWN0dXJlLCBvcGVuaW5nIHVwIGNvbXB1dGF0aW9uYWwgd2F5cyBvZiBlbmdhZ2luZyB3aXRoIHRoZSBpbmZvcm1hdGlvbi4nKTtcclxuICAgIGNvbnN0IG5laWdoMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ1RoZSBncmFwaCBpcyBnaXZlbiBhZ2VuY3kgYnkgZGVwbG95aW5nIGEgcnVsZS1iYXNlZCBncm93dGggYWxnb3JpdGhtIG9uIHRoZSBwcm9qZWN0IHNpdGUuIEEgcGF0aC1maW5kaW5nIGxvZ2ljIGlzIHVzZWQgdG8gZ2VuZXJhdGUgc2NoZW1lcywgd2l0aCBzcGVjaWZpYyBydWxlIGRldGVybWluaW5nIHRoZSByZXN1bHRpbmcgY2hhcmFjdGVyIG9mIHRoZSBuZWlnaGJvcmhvb2Qgd2hpbGUgZW5zdXJpbmcgdGhlIGNvbXB1dGVkIHNwYXRpYWwgcmVsYXRpb25zaGlwcyBhcmUgbWFpbnRhaW5lZC4gVGhlIGRlY291cGxpbmcgb2YgZm9ybWFsIGFnZW5jeSBmcm9tIHRoZSBoYW5kcyBvZiB0aGUgaHVtYW4gZGVzaWduZXIgc2lnbmlmaWVzIGEgY3J1Y2lhbCBzdGVwIHRvd2FyZHMgYSBmdWxseSBhdXRvbm9tb3VzIGNvbnN0cnVjdGlvbiBmcmFtZXdvcmsuIFlldCwgd2l0aCB0aGUgcnVsZS1iYXNlZCBzeXN0ZW0sIGRlc2lnbmVycyBhcmUgc3RpbGwgZ2l2ZW4gY29udHJvbCB3aXRob3V0IHRoZSBwb3NzaWJpbGl0eSB0byByZXNvcnQgdG8gdGhlIHNjdWxwdGluZyBvZiBmb3JtLCB0aHVzIHByaW9yaXRpemluZyBhIGxvZ2ljLWRyaXZlbiBhcHByb2FjaCwgcmF0aGVyIHRoYW4gYWVzdGhldGljcy4nKTtcclxuXHJcbiAgICBjb25zdCB2aWRfem9vbVNjYWxlcyA9IGNyZWF0ZUltYWdlKGFuaW1fem9vbVNjYWxlc18wMCk7XHJcbiAgICBjb25zdCB2aWRfZ3Jvd3RoX2FsbCA9IGNyZWF0ZUltYWdlKGFuaW1fZ3Jvd3RoX2FsbCk7XHJcbiAgICBjb25zdCB2aWRfZ3Jvd3RoX3R1cm50YWJsZSA9IGNyZWF0ZUltYWdlKGFuaW1fZ3Jvd3RoX3R1cm50YWJsZSk7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHMobmVpZ2hIZWFkLCBuZWlnaHN1YkhlYWQsIG5laWdoMCwgbmVpZ2gxLCB2aWRfem9vbVNjYWxlcywgbmVpZ2gyLCB2aWRfZ3Jvd3RoX2FsbCwgdmlkX2dyb3d0aF90dXJudGFibGUpO1xyXG5cclxuICAgIC8vbGV2ZWwgMSBob21lXHJcbiAgICBjb25zdCB1bml0SGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiTGV2ZWwgMSBIb21lXCIpO1xyXG4gICAgY29uc3QgdW5pdFN1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCBcclxuICAgICAgICAnSG9tZSBJcyBXaGF0IFlvdSBEbycpXHJcbiAgICBjb25zdCB1bml0MCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ09uIHRoZSBuZXh0IHNjYWxlIGRvd24sIGEgY3VzdG9taXNhdGlvbiBzeXN0ZW0gZm9yIHRoZSBpbmRpdmlkdWFsIGhvbWUgYWxsb3dzIHRoZSBhcmNoaXRlY3R1cmUgdG8gcmVzcG9uZCB0byB0aGUgZGFpbHkgcGF0dGVybnMgb2YgZWFjaCBtZW1iZXIgb2YgdGhlIGNvbW11bml0eS4nKTtcclxuICAgIGNvbnN0IHVuaXQxID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnVGhlIGFjdHVhbCB1bml0cyBvbiBzaXRlIGFyZSBhIG5lZ290aWF0ZWQgcmVzdWx0IHdoZXJlIHNpdGUgY29uc3RyYWludHMsIHVuaXQgcmVxdWlyZW1lbnRzIGFuZCBzaGFyZWQgYWN0aXZpdGllcyBjb21lIHRvZ2V0aGVyLiBVc2luZyBhIHJlbGF0aW9uYWwgbW9kZWwgYWxsb3dzIHRoZSB1bml0IHRvIGFkYXB0IHRvIHRoZSBzaXRlIHdoaWxlIHN0aWxsIG1haW50YWluaW5nIGl0cyBpbXBvcnRhbnQgY29ubmVjdGlvbnMuJyk7XHJcbiAgICBjb25zdCB1bml0MiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0xldmVsIG9mIGRldGFpbHMgKExPRCkgYXJlIGdyYWR1YWxseSBhZGRlZCB0byB0aGUgcmF3IHNwYWNlIGRpc3RyaWJ1dGlvbiBmcm9tIHRoZSBncm93dGggYWxnb3JpdGhtLCB0dXJuaW5nIGFic3RyYWN0IHNwYWNlIGludG8gY29uY3JldGUgYXJjaGl0ZWN0dXJlLicpO1xyXG5cclxuICAgIGNvbnN0IGltZ191bml0RXhhbXBsZSA9IGNyZWF0ZUltYWdlKHVuaXQwMCk7XHJcbiAgICBjb25zdCBpbWdfdW5pdExheW91dCA9IGNyZWF0ZUltYWdlKHVuaXRsYXlvdXQpO1xyXG4gICAgY29uc3QgdmlkX2dyYXBoVG9BcmNoID0gY3JlYXRlSW1hZ2UoYW5pbV9ncmFwaFRvQXJjaCk7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModW5pdEhlYWQsIHVuaXRTdWJIZWFkLCBpbWdfdW5pdEV4YW1wbGUsIHVuaXQwLCBpbWdfdW5pdExheW91dCwgdW5pdDEsIHVuaXQyLCB2aWRfZ3JhcGhUb0FyY2gpO1xyXG5cclxuICAgIC8vbGV2ZWwgMiB0ZWN0b25pY3NcclxuICAgIGNvbnN0IHRlY3RvSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFwiTGV2ZWwgMiBUZWN0b25pY3NcIik7XHJcbiAgICBjb25zdCB0ZWN0b1N1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCAnSG9tZSBJcyBXaGF0IFlvdSBEbycpXHJcbiAgICBjb25zdCB0ZWN0bzAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdBZGRpdGl2ZSBNYW51ZmFjdHVyaW5nIHdhcyBpZGVudGlmaWVkIGFzIHRoZSBwcmltYXJ5IGNhbmRpZGF0ZSBmb3IgdGhlIGNvbnN0cnVjdGlvbiBzeXN0ZW0sIGFzIGl0IG9mZmVycyB0aGUgYWJpbGl0eSB0byBtYW51ZmFjdHVyZSBmcmVlLWZvcm0gZ2VvbWV0cmllcyB3aGlsZSBwcm92aWRpbmcgY29zdCBhbmQgdGltZSBzYXZpbmdzLCBhbmQgaW5jcmVhc2VkIG9uc2l0ZSBzYWZldHkgZm9yIGF1dG9tYXRlZCBzeXN0ZW1zLiBBIHJvYm90aWNzLWZpcnN0IGFwcHJvYWNoIHdhcyBuZWVkZWQgZm9yIHRoZSBjb25zdHJ1Y3Rpb24gc3lzdGVtIHRvIGludGVncmF0ZSBpbnRvIHRoZSBvdmVyYWxsIGZyYW1ld29yay4nKTtcclxuXHJcbiAgICBjb25zdCB0ZWN0bzEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdBbiBvbnNpdGUsIHNlZ21lbnRlZCBhcHByb2FjaCB3aXRoIG11bHRpLW1hdGVyaWFsIHByaW50aW5nIHdhcyBlbnZpc2lvbmVkLCBhcyBtb25vLW1hdGVyaWFsLCBjb250aW51b3VzIHByaW50aW5nIGlzIGFyZ3VlZCB0byBiZSBpbXByYWN0aWNhbCBhbmQgdW5kZXNpcmFibGUgZm9yIGFyY2hpdGVjdHVyYWwgYXBwbGljYXRpb25zLCBiZWNhdXNlIGl0IGRvZXMgbm90IGFjY291bnQgZm9yIHRoZSBtdWx0aS1zeXN0ZW1pYyBuYXR1cmUgb2YgYnVpbGRpbmdzLiBBdXRvbm9tb3VzLCByb2JvdGljIHVuaXRzIGFyZSBkZXBsb3llZCBvbnNpdGUgJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRlY3RvMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0NsYXkgaXMgdXNlZCBhcyBhIHByb3h5IG1hdGVyaWFsIGZvciB2aXNjby1lbGFzdGljLCBjZW1lbnRpdGlvdXMgbWF0ZXJpYWxzIChtb3N0IHJlbGV2YW50bHkgY29uY3JldGUpIHRvIHByb3RvdHlwZSBkZXNpZ24gaXRlcmF0aW9ucyBhbmQgdW5kZXJzdGFuZCB0aGUgbGltaXRhdGlvbnMgaW4gcmVhbCB0ZXJtcy4gQSBwbmV1bWF0aWNhbGx5LW9wZXJhdGVkIGV4dHJ1c2lvbi1lbmQtZWZmZWN0b3Igd2FzIGRldmVsb3BlZCBmcm9tIHNjcmF0Y2ggZm9yIHRoZSByZXNlYXJjaCBhbmQgZGVwbG95ZWQgd2l0aCB2YXJpb3VzIGluZHVzdHJpYWwgcm9ib3RpYyBhcm1zIGZvciBwcm90b3R5cGluZy4gVGhyb3VnaCByaWdvcm91cyB0ZXN0aW5nLCBjcml0aWNhbCBwYXJhbWV0ZXJzIHdlcmUgZGVmaW5lZCBhbmQgaW5mb3JtZWQgdGhlIHBvc3NpYmxlIGdlb21ldHJpYyBkZXNpZ24gZXhwcmVzc2lvbnMuJyk7XHJcblxyXG4gICAgY29uc3QgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZpZF9ncmFwaFRvQ29uc3RydWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWRlb0NvbnRhaW5lcicpO1xyXG4gICAgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJwYWRkaW5nOjU2LjI1JSAwIDAgMDtwb3NpdGlvbjpyZWxhdGl2ZVwiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc5MDgzMjgyMD9oPTk4NDVlOTIzMzcmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgdGl0bGU9XCJGcm9tIEdyYXBoIHRvIENvbnN0cnVjdGlvblwiPjwvaWZyYW1lPjwvZGl2PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIj48L3NjcmlwdD4nO1xyXG4gICAgY29uc3QgdmlkX2NvbnN0cnVjdGlvblNlcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlkX2NvbnN0cnVjdGlvblNlcS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VmlkZW9Db250YWluZXInKTtcclxuICAgIHZpZF9jb25zdHJ1Y3Rpb25TZXEuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJwYWRkaW5nOjU2LjI1JSAwIDAgMDtwb3NpdGlvbjpyZWxhdGl2ZTtcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby83OTA4Mzk4Njg/aD02YjMzMWY4YTRjJmFtcDtiYWRnZT0wJmFtcDthdXRvcGF1c2U9MCZhbXA7cGxheWVyX2lkPTAmYW1wO2FwcF9pZD01ODQ3OVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiIHRpdGxlPVwiQ29uc3RydWN0aW9uIFNlcXVlbmNlXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcbiAgICBjb25zdCB2aWRfZmFiSGlnaGxpZ2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlkX2ZhYkhpZ2hsaWdodHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZGVvQ29udGFpbmVyJyk7XHJcbiAgICB2aWRfZmFiSGlnaGxpZ2h0cy5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlO1wiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc5MDg4MDAwMj9oPTE0YWE3NzIzY2MmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgdGl0bGU9XCJNYXRlcmlhbCBOZXR3b3JrcyAtIEZhYnJpY2F0aW9uIEhpZ2hsaWdodHNcIj48L2lmcmFtZT48L2Rpdj48c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCI+PC9zY3JpcHQ+JztcclxuICAgIGNvbnN0IHZpZF9leHBlcmltZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlkX2V4cGVyaW1lbnRzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWRlb0NvbnRhaW5lcicpO1xyXG4gICAgdmlkX2V4cGVyaW1lbnRzLmlubmVySFRNTCA9ICc8ZGl2IHN0eWxlPVwicGFkZGluZzo1Ni4yNSUgMCAwIDA7cG9zaXRpb246cmVsYXRpdmU7XCI+PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzkwOTEyNTUyP2g9OTk1YzY3OGVlZiZhbXA7YmFkZ2U9MCZhbXA7YXV0b3BhdXNlPTAmYW1wO3BsYXllcl9pZD0wJmFtcDthcHBfaWQ9NTg0NzlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIiB0aXRsZT1cIk1hdE5ldCAtIEV4cGVyaW1lbnQgRXZhbHVhdGlvblwiPjwvaWZyYW1lPjwvZGl2PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIj48L3NjcmlwdD4nO1xyXG5cclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRlY3RvSGVhZCwgdGVjdG9TdWJIZWFkLCB0ZWN0bzAsIHZpZF9ncmFwaFRvQ29uc3RydWN0aW9uLCB0ZWN0bzEsIHZpZF9jb25zdHJ1Y3Rpb25TZXEsIHRlY3RvMiwgdmlkX2ZhYkhpZ2hsaWdodHMsIHZpZF9leHBlcmltZW50cyk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0bmV0OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jb25zdCBteVdlYnNpdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgIFwiUGVyc29uYWwgUG9ydGZvbGlvIFdlYnNpdGVcIixcclxuICAgICAgICAyMDIzLFxyXG4gICAgICAgICdFYXJ0aCdcclxuICAgICk7XHJcblxyXG4gICAgcHJvamVjdC5TdWJ0aXRsZSA9IFwiVGhpcyBvbmVcIjtcclxuXHJcbiAgICBwcm9qZWN0LmFkZENhdGVnb3J5KFwiZGVzaWduXCIpO1xyXG4gICAgcHJvamVjdC5hZGRDYXRlZ29yeShcImNvZGVcIik7XHJcblxyXG4gICAgY29uc3QgdGkgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qZWN0LlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YlRpID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvamVjdC5TdWJ0aXRsZSk7XHJcbiAgICAvL2ludHJvXHJcbiAgICBjb25zdCBpbnRyb2hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCAnSW50cm9kdWN0aW9uJyk7XHJcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGludHJvLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vic2l0ZSB3YXMgYnVpbHQgY29tcGxldGVseSBmcm9tIHNjcmF0Y2ggYnkgbWUgdG8gc2hvd2Nhc2UgdGhlIHByb2plY3RzIEkgaGF2ZSBkb25lIG92ZXIgdGhlIHllYXJzLiBJdCBzZXJ2ZWQgYXMgYSBncmVhdCBwcm9qZWN0IHRvIHB1dCBldmVyeXRoaW5nIEkgaGF2ZSBsZWFybmVkIGFib3V0IHdlYiBkZXZlbG9wbWVudCBpbnRvIHByYWN0aWNlLiBQbGVhc2UgZmVlbCBmcmVlIHRvIGJyb3dzZSBhcm91bmQgYW5kIEkgYW0gaGFwcHkgdG8gcmVjZWl2ZSBhbnkgYW5kIGFsbCBmZWVkYmFjay4nXHJcbiAgICAvL2ZlYXR1cmVzXHJcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCAnRmVhdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZmVhdDEgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdNVkMgYXJjaGl0ZWN0dXJlIGFsbG93cyBmb3IgZnV0dXJlIHJlLXVzZSBvZiB0aGUgY29yZSBsb2dpYyBpbiBkaWZmZXJlbnQgZ3JhcGhpY2FsIGVudmlyb25tZW50cy4nKTtcclxuICAgIGNvbnN0IGZlYXQyID0gY3JlYXRlRWxlbWVudFRleHQoXCJsaVwiLCAnVmFuaWxsYSBKUyBvbmx5IHRvIGtlZXAgdGhlIHByb2plY3QgbGlnaHR3ZWlnaHQgYW5kIGJlY2F1c2UgdGhlIGdvYWwgd2FzIHRvIHByYWN0aWNlIG15IEpTIHNraWxscywgcmF0aGVyIHRoYW4gbXkga25vd2xlZGdlIG9uIGxpYnJhcmllcycpO1xyXG4gICAgY29uc3QgZmVhdDMgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdVbml0IHRlc3RpbmcgZm9yIGNvcmUgY2xhc3NlcycpO1xyXG4gICAgY29uc3QgZmVhdDQgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdTdHJlYW1saW5lZCBtZXRob2QgZm9yIGFkZGluZyBtb3JlIHByb2plY3RzIGFzIHBhY2thZ2VkIG9iamVjdHMgaW4gdGhlIGZ1dHVyZSB0byBpbXByb3ZlIG1haW50YWluYWJpbGl0eScpO1xyXG4gICAgY29uc3QgZmVhdDUgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdQcm9qZWN0cyBhcmUgc2VhcmNoYWJsZSBieSBjYXRlZ29yeSB0byBlYXNlIG5hdmlnYXRpb24nKTtcclxuICAgIGZlYXR1cmVzLmFwcGVuZChmZWF0MSwgZmVhdDIsZmVhdDMsIGZlYXQ0LCBmZWF0NSk7XHJcbiAgICAvL3RlY2hub2xvZ2llc1xyXG4gICAgY29uc3QgdGVjaEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCAnVGVjaG5vbG9naWVzJyk7XHJcbiAgICBjb25zdCB0ZWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHRlY2gxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0hUTUwsIENTUywgSlMnKTtcclxuICAgIGNvbnN0IHRlY2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0plc3QgVW5pdCBUZXN0aW5nJyk7XHJcbiAgICBjb25zdCB0ZWNoMyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdXZWJwYWNrIGFzc2V0IGJ1bmRsaW5nJyk7XHJcbiAgICB0ZWNoLmFwcGVuZCh0ZWNoMSwgdGVjaDIsIHRlY2gzKTtcclxuXHJcbiAgICAvL2RldmVsb3BtZW50XHJcbiAgICBjb25zdCBkZXZIZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgJ0RldmVsb3BtZW50Jyk7XHJcbiAgICBjb25zdCBkZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgZGV2MSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdibG9nIHNlY3Rpb24nKTtcclxuICAgIGRldi5hcHBlbmQoZGV2MSk7XHJcblxyXG5cclxuICAgIHByb2plY3QucHVzaENvbnRlbnRzKFxyXG4gICAgICAgIHRpLCBzdWJUaSwgaW50cm9oZWFkaW5nLCBpbnRybywgXHJcbiAgICAgICAgZmVhdHVyZXNIZWFkaW5nLCBmZWF0dXJlcywgXHJcbiAgICAgICAgdGVjaEhlYWRpbmcsIHRlY2gsXHJcbiAgICAgICAgZGV2SGVhZGluZywgZGV2KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlXZWJzaXRlOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVGaWd1cmUsIGNyZWF0ZUltYWdlIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8vbWVkaWFcclxuaW1wb3J0IGhvbWUgZnJvbSAnLi4vYXNzZXRzL25scDRtcy9ob21lLnBuZyc7XHJcbmltcG9ydCBmcmVldHh0XzAwIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX2ZyZWV0ZXh0XzAwLmpwZyc7XHJcbmltcG9ydCBndWlNYWluIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX21haW4uanBnJztcclxuaW1wb3J0IHNhbXBsZVNlbnRpbWVudCBmcm9tICcuLi9hc3NldHMvbmxwNG1zL2d1aV9zYW1wbGVBbmFseXNpcy5qcGcnO1xyXG5pbXBvcnQgZ3VpX3VzZXJBbmFseXNpcyBmcm9tICcuLi9hc3NldHMvbmxwNG1zL2d1aV91c2VyQW5hbHlzaXNfMDEuanBnJztcclxuaW1wb3J0IGNsYXNzRGlhZ3JhbSBmcm9tICcuLi9hc3NldHMvbmxwNG1zL2NsYXNzRGlhZ3JhbS5qcGcnO1xyXG5cclxuY29uc3QgbmxwNG1zID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIk5MUCBmb3IgTXVsdGlwbGUgU2NsZXJvc2lzXCIsIDIwMjIsIFwiTG9uZG9uLCBVS1wiKTtcclxuXHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYWNhZGVtaWNcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJBSVwiKTtcclxuXHJcbiAgICBwcm9qLlN1YnRpdGxlID0gXCJEaWFnbm9zaXMgVG9vbCBmb3IgUmVzZWFyY2hlcnMgd29ya2luZyBvbiBNdWx0aXBsZSBTY2xlcm9zaXNcIjtcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YnRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvai5TdWJ0aXRsZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgWWVhcjogJyArIHByb2ouWWVhcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IExvY2F0aW9uOiAnICsgcHJvai5Mb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgZ2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGdpdC5pbm5lckhUTUwgPSAnPGEgaHJlZj1odHRwczovL2dpdGh1Yi5jb20vQWJzdHJhY3RtYWNoaW5hL2ljY19OTFA0TVM+R2l0aHViPC9hPidcclxuICAgIC8vY29uc3QgY292ZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBjb25zdCBpbnRyb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcclxuICAgICAgICBcIkludHJvZHVjdGlvblwiKTtcclxuICAgIGNvbnN0IGludHJvID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nIGZvciB0aGUgRGlhZ25vc2lzIG9mIE11bHRpcGxlIFNjbGVyb3NpcyB3YXMgYSBncm91cCByZXNlYXJjaCBwcm9qZWN0IGRvbmUgYXMgcGFydCBvZiB0aGUgc29mdHdhcmUgZW5naW5lZXJpbmcgZGVzaWduIGNvdXJzZSBhdCBJbXBlcmlhbC4gVGhlIGFwcCBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIGJ5IHJlc2VhcmNoZXJzIGF0IHRoZSBVSyBNUyBSZWdpc3Rlciwgd2hlcmUgYSBsYXJnZSBjb2xsZWN0aW9uIG9mIHVucHJvbXB0ZWQgZnJlZS10ZXh0IGRhdGEgKHBhdGllbnQgcmVwb3J0ZWQgb3V0Y29tZXMpIHdhcyBhbWFzc2VkIG92ZXIgdGhlIHllYXJzLCBidXQgdGhlcmUgaGFzIGJlZW4gbm8gZWZmZWN0aXZlIHRvb2wgdG8gcHJvY2VzcyBhbmQgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCBpbmZvcm1hdGlvbiB0byBkYXRlLiBPdXIgYXBwIHNvdWdodCB0byBwcm92aWRlIGEgc2ltcGxlIGludGVyZmFjZSB0byBleHRyYWN0IG1lYW5pbmdmdWwgZnJlZS10ZXh0IGRhdGEgaW4gdGhlIG1lZGljYWwgcmVzZWFyY2ggZm9yIHRoZSBkaWFnbm9zaXMgb2YgTVMuIFRoZXJlIHdhcyBubyBwcmlvciBjb2RlIGJhc2UsIGFzIG91ciBncm91cCB3YXMgdGhlIGZpcnN0IHRvIGNvbGxhYm9yYXRlIHdpdGggdGhlIE1TIFJlZ2lzdGVyLCBob3dldmVyLCB0aGUgaW50ZW50aW9uIGlzIHRvIGNvbnRpbnVlIHRoZSBkZXZlbG9wbWVudCBpbiBzdWJzZXF1ZW50IHllYXJzLicpO1xyXG5cclxuICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlYW0uaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJzxzdHJvbmc+VGVhbTo8L3N0cm9uZz4gTWF0dCBCYXJrZXIsIENvbGluIFRheWxvciwgVGFvbGUgQ2hlbiwgS2FpeHVhbiBLaG9vLCBSb25hbiBQYXRyaWNrLCBHdXMgTGV2aW5zb24sIEphY2sgQ2hlbmc8YnI+PHN0cm9uZz5TdXBlcnZpc29yczo8L3N0cm9uZz4gQ2hpcmFhZyBMYWxhLCBSb2QgTWlkZGxldG9uLCBSaWNoYXJkIE5pY2hvbGFzPGJyPkluIGNvbGxhYm9yYXRpb24gd2l0aCB0aGUgPGEgaHJlZiA9IFwiaHR0cHM6Ly91a21zcmVnaXN0ZXIub3JnL1wiPlVLIE1TIFJlZ2lzdGVyPC9hPic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGl0bGUsIHN1YnRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgZ2l0LCBpbnRyb0hlYWRpbmcsIGludHJvLCB0ZWFtKTtcclxuXHJcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dChcImgzXCIsICdGZWF0dXJlcycpO1xyXG5cclxuICAgIGNvbnN0IGZlYXRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGZlYXQwID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAnRnJlZS10ZXh0IGFuYWx5emVyIGZvciBzaW1wbGUgdGV4dCBwcm9jZXNzaW5nLCBsb29raW5nIGF0IGZyZXF1ZW5jeSBvZiB0ZXJtcyBhbmQgcGhyYXNlcywgbi1ncmFtcyB0byBpZGVudGlmeSB0cmVuZHMgYW5kIGtleSB0ZXJtaW5vbG9naWVzIHVzZWQgYnkgcGF0aWVudHMnKVxyXG4gICAgY29uc3QgZmVhdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZmVhdDEuaW5uZXJIVE1MID0gXHJcbiAgICAnTG9naXN0aWMgcmVncmVzc2lvbiBjbGFzc2lmaWVyIHdpdGggYmFnLW9mLXdvcmRzIG1vZGVsIGZvciBwcmVkaWN0aW5nIE1TIGluIHBhdGllbnRzIGJhc2VkIG9uIHRoZWlyIHRleHQgcHJvbXB0cy4nO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdTZW50aW1lbnQgYW5kIEV4dGVuZGVuZCBEaXNhYmlsaXR5IFN0YXR1cyBBbmFseXNpcyB0byBpZGVudGlmeSB0cmVuZHMgaW4gaW5kaXZpZHVhbCB1c2VycyBhbmQgZGVtcGdyYXBoaWNzLiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVkFERVIgc2VudGltZW50IGxpYnJhcnkuJyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgJ0N1c3RvbSBDU1YgaW1wb3J0IGNhcGFiYWxpdGllcywgZ2l2aW5nIHJlc2VhcmNoZXJzIG1vcmUgZnJlZWRvbSBpbiBhZGFwdGluZyB0aGUgYXBwIHRvIHNwZWNpZmljIG5lZWRzLicpO1xyXG4gICAgY29uc3QgZmVhdDQgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdIZXhhZ29uYWwgQXJjaGl0ZWN0dXJlLCBhbGxvd2luZyB0aGUgc3dhcHBpbmcgb2YgbW9kdWxlcyBpbiB0aGUgZnV0dXJlLCB0aHVzIGltcHJvdmluZyByZS11c2VhYmlsaXR5IG9mIHRoZSBjb2RlIGJhc2UnKTtcclxuICAgIGNvbnN0IGZlYXQ1ID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAnQWxsIG1vZHVsZXMgbGltaXRlZCB0byB0aGUgTkxUSyBwbGF0Zm9ybSwgYXMgY29kZSBpcyBob3N0ZWQgb24gc2VjdXJlIHNlcnZlcnMgb2YgdGhlIE1TIFJlZ2lzdGVyLicpO1xyXG4gICAgZmVhdGxpc3QuYXBwZW5kKGZlYXQwLCBmZWF0MSwgZmVhdDIsIGZlYXQzLCBmZWF0NCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltZ19ob21lID0gY3JlYXRlRmlndXJlKGhvbWUsICdBcHAgSG9tZSBQYWdlJyk7XHJcbiAgICBjb25zdCBpbWdfZ3VpX2ZyZWV0eHQgPSBjcmVhdGVGaWd1cmUoZnJlZXR4dF8wMCwgJ0ZyZWUgdGV4dCBhbmFseXNpcyBwYWdlJyk7XHJcbiAgICBjb25zdCBpbWdfZ3VpTWFpbiA9IGNyZWF0ZUZpZ3VyZShndWlNYWluLCAnTWFpbiBtZW51Jyk7XHJcbiAgICBjb25zdCBpbWdfU2FtcGxlU2VudGltZW50ID0gY3JlYXRlRmlndXJlKHNhbXBsZVNlbnRpbWVudCwgJ0V4YW1wbGUgb2YgZ2VuZXJhdGVkIHRyZW5kIGdyYXBocyBmb3IgYSBncm91cCBvZiBwYXRpZW50cycpO1xyXG4gICAgY29uc3QgaW1nX2d1aVVzZXIgPSBjcmVhdGVGaWd1cmUoZ3VpX3VzZXJBbmFseXNpcywgJ1VzZXIgc2VudGltZW50IGFuYWx5c2lzIHBhZ2UnKTtcclxuXHJcbiAgXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhmZWF0dXJlc0hlYWRpbmcsIGZlYXRsaXN0LCBpbWdfaG9tZSwgaW1nX2d1aU1haW4sIGltZ19ndWlfZnJlZXR4dCwgaW1nX1NhbXBsZVNlbnRpbWVudCwgaW1nX2d1aVVzZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZWNoSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ1RlY2hub2xvZ2llcycpO1xyXG4gICAgY29uc3QgdGVjaGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGVjaDAgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnUHl0aG9uIGJhY2stZW5kJylcclxuICAgIGNvbnN0IHRlY2gxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ3RraW50ZXIgZnJvbnQtZW5kJyk7XHJcbiAgICBjb25zdCB0ZWNoMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdWQURFUiBzZW50aW1lbnQgYW5hbHlzaXMgaW1wbGVtZW50YXRpb24nKTtcclxuICAgIGNvbnN0IHRlY2gzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ1NjaS1raXQgTGVhcm4gdGV4dCBjbGFzc2lmaWNhdGlvbiBpbXBsZW1lbnRhdGlvbicpO1xyXG4gICAgY29uc3QgaW1nX2NsYXNzRGlhZ3JhbSA9IGNyZWF0ZUZpZ3VyZShjbGFzc0RpYWdyYW0sICdDbGFzcyBEaWFncmFtJyk7XHJcbiAgICB0ZWNobGlzdC5hcHBlbmQoIHRlY2gwLCB0ZWNoMSwgdGVjaDIsIHRlY2gzKTtcclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRlY2hIZWFkaW5nLCB0ZWNobGlzdCwgaW1nX2NsYXNzRGlhZ3JhbSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmxwNG1zOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVJbWFnZXMsIGNyZWF0ZUltYWdlIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbi8vbWVkaWFcclxuaW1wb3J0IGNvdmVyIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDM5OC5qcGcnO1xyXG5pbXBvcnQgaTAwIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX2JyYTEtMzg3NS5qcGcnO1xyXG5pbXBvcnQgaTAxIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX2JyYTEtMzkwNy5qcGcnO1xyXG5pbXBvcnQgaTAyIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX2JyYTEtNDAwNS5qcGcnO1xyXG5pbXBvcnQgaTAzIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX2JyYTItNDUzMS5qcGcnO1xyXG5pbXBvcnQgaTA0IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX2JyYTMtNDA4NC5qcGcnO1xyXG5pbXBvcnQgaTA1IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3RvcDMtNDgwMC5qcGcnO1xyXG5pbXBvcnQgaTA2IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDE2Ny5qcGcnO1xyXG5pbXBvcnQgaTA3IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDQwNi5qcGcnO1xyXG5pbXBvcnQgaTA4IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDQ1OC5qcGcnO1xyXG5pbXBvcnQgaTA5IGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDUxMi5qcGcnO1xyXG5pbXBvcnQgaTEwIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNTAwMS5qcGcnO1xyXG5pbXBvcnQgaTExIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNDk3OS5qcGcnO1xyXG5pbXBvcnQgaTEyIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNTA1Ni5qcGcnO1xyXG5pbXBvcnQgaTEzIGZyb20gJy4uL2Fzc2V0cy9vcmdhbmljL29jX3lvZ2EtNTA2OS5qcGcnO1xyXG5cclxuXHJcbmNvbnN0IG9yZ2FuaWMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiT3JnYW5pYyBDb2RlIEFwcGFyZWxcIiwgMjAyMiwgXCJKZWp1LCBTb3V0aCBLb3JlYVwiKTtcclxuXHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYXJ0XCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcInBob3RvZ3JhcGh5XCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIlByb2R1Y3QgU2hvb3QgZm9yIEJyYWxldHRlIGFuZCBUb3AgU2VyaWVzXCI7XHJcblxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gxJywgcHJvai5UaXRsZSk7XHJcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsIHByb2ouU3VidGl0bGUpO1xyXG4gICAgY29uc3QgeWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IFllYXI6ICcgKyBwcm9qLlllYXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBMb2NhdGlvbjogJyArIHByb2ouTG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJzxhIGhyZWY9aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcmdhbmljX2NvZGVfLz5CcmFuZCBMaW5rPC9hPidcclxuICAgIGNvbnN0IGltZ19jb3ZlciA9IGNyZWF0ZUltYWdlKGNvdmVyKTtcclxuXHJcbiAgICBjb25zdCBpbnRyb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcclxuICAgICAgICBcIkludHJvZHVjdGlvblwiKTtcclxuICAgIGNvbnN0IGludHJvID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnSSB3YXMgYXBwcm9hY2hlZCBieSBteSBmcmllbmQgdG8gaGVscCBoZXIgYnJhbmQgZG8gYSBwcm9kdWN0IHNob290IGZvciBoZXIgbGF0ZXN0IHNlcmllcyBmZWF0dXJpbmcgYnJhbGV0cyBhbmQgdG9wcy4gT3JnYW5pYyBDb2RlIHNwZWNpYWxpemVzIGluIGhhbmQtbWFkZSBhcHBhcmVsIHVzaW5nIG5hdHVyYWxseS1keWVkIDEwMCUgb3JnYW5pYyBjb3R0b24sIG1hZGUgbG9jYWxseSBvbiBKZWp1IElzbGFuZC4gJyk7XHJcblxyXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcmVkaXQuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJzxzdHJvbmc+TW9kZWxzOjwvc3Ryb25nPiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lc25nbW4vXCI+U2V1bmdtaW4gTGVlPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbGxhbW9iZWxlbi9cIj5HYXlvdW5nIExlZTwvYT4nO1xyXG5cclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRpdGxlLCBzdWJ0aXRsZSwgeWVhciwgbG9jYXRpb24sIGJyYW5kTGluaywgaW1nX2NvdmVyLCBpbnRyb0hlYWRpbmcsIGludHJvLCBjcmVkaXQpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IGNyZWF0ZUltYWdlcyhpMDMsaTAwLCBpMDEsIGkwMixpMDQsaTA1LGkwNixpMDcsaTA4LGkwOSxpMTAsaTExLGkxMixpMTMpO1xyXG4gICAgXHJcbiAgICBpbWFnZXMuZm9yRWFjaChpbWcgPT4ge3Byb2oucHVzaENvbnRlbnQoaW1nKX0pO1xyXG4gICAgcmV0dXJuIHByb2o7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JnYW5pYzsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL1Byb2plY3RcIlxyXG5cclxuY29uc3QgcHJpbnRGYXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIlByaW50IEZhc3QsIFBpbGUgSGlnaCFcIiwgMjAxOSwgXCJDb3BlbmhhZ2VuLCBEZW5tYXJrXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJ0ZWFjaGluZ1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImRlc2lnblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGludHJvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGludHJvSGVhZGluZyk7XHJcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGludHJvLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgR3Jhc3Nob3BwZXIgcGx1Z2luIGRldmVsb3BlZCBmb3IgYSBzZXJpZXMgb2Ygd29ya3Nob3BzIHRpdGxlZCBcXFwiUHJpbnQgRmFzdCBQaWxlIEhpZ2hcXFwiLCBhbiBvZmZzaG9vdCBmcm9tIGRlc2lnbiByZXNlYXJjaCBhbmQgbWF0ZXJpYWwgZXhwZXJpbWVudGF0aW9uIG9uIDNELXByaW50aW5nIGNvbmR1Y3RlZCBhdCB0aGUgQUFEUkwgYW5kIFNoYWpheSBCaG9vc2hhbidzIFBoRCByZXNlYXJjaCBvbiBjb25jcmV0ZSBhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nLiBUaGUgd29ya3Nob3AgaXMgYSBjb2xsYWJvcmF0aXZlIGRlc2lnbi1idWlsZCBleGVyY2lzZSB3aGljaCBzZWVrcyBzeW5lcmdpZXMgYmV0d2VlbiBjb21wdXRhdGlvbmFsIG1hc29ucnkgYW5kIDNEIHByaW50aW5nIHdpdGggc29mdC1yaWdpZCBtYXRlcmlhbHMuIFRoZSBhaW0gaXMgdG8gZXhwbG9yZSBnZW9tZXRyaWVzIHdoaWNoIGFyZSBzdHJ1Y3R1cmFsbHkgYXdhcmUgYW5kIHRoZWlyIGFzc29jaWF0ZWQgZGVzaWduIHNwYWNlLCBpbiByZWxhdGlvbiB0byB0aGVpciBtYXRlcmlhbGl0eSBhbmQgZmFicmljYXRpb24gdGVjaG5vbG9neS4gQ2xheSBpcyB1c2VkIGFzIG1hdGVyaWFsIGFuZCBpdHMgZG9taW5hbnQgY29tcHJlc3Npb24gY2FwYWNpdHkgaXMgdGhlIG1haW4gcGFyYW1ldGVyIHRvIGV4cGxvcmUgYW5kIHVzZSB0byBkZXNpZ24gZGlnaXRhbCBnZW9tZXRyaWVzIGFjY29yZGluZ2x5LiBUcmFkaXRpb25hbCBsYXllci1ieS1sYXllciAzZCBwcmludGluZyBtZXRob2RzIGlzIHF1ZXN0aW9uZWQgaW4gZmF2b3Igb2YgYSBtZXRob2RvbG9neSB3aGljaCBhbGlnbnMgZ2VvbWV0cmljIHJlcHJlc2VudGF0aW9uIGluIGRpZ2l0YWwgc3BhY2Ugd2l0aCB0aGUgcGh5c2ljYWwgbWFudWZhY3R1cmluZyBwcm9jZXNzLiBGdW5jdGlvbiBSZXByZXNlbnRhdGlvbnMgKEYtUmVwKSBhbmQgaW1hZ2UgYmFzZWQgdGVjaG5vbG9neSBpcyBlbXBsb3llZCB0byBnZW5lcmF0ZSBkaWdpdGFsIGdlb21ldHJpZXMgd2l0aCBhIGN1c3RvbSB0b29sa2l0IGJlZm9yZSB0byBiZSB0cmFuc2xhdGVkIGludG8gcm9ib3RpYyBpbnN0cnVjdGlvbnMgZm9yIHRoZSBwaHlzaWNhbCB3b3JsZC4gXCJcclxuICAgIHByb2oucHVzaENvbnRlbnQoaW50cm8pO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZlYXR1cmVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJGZWF0dXJlc1wiO1xyXG4gICAgcHJvai5wdXNoQ29udGVudChmZWF0dXJlSGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZlYXR1cmUudGV4dENvbnRlbnQgPSBcIlRoZSBwbHVnaW4gaW1wbGVtZW50cyB0aGUgU0RGIGZ1bmN0aW9uIGFwcHJvYWNoIHRvIGdlbmVyYXRlIDNELXByaW50YWJsZSBmb3JtcyBvdXRsaW5lZCBpbiB0aGUgcGFwZXIgRnVuY3Rpb24gUmVwcmVzZW50YXRpb24gZm9yIFJvYm90aWMgM0QgUHJpbnRlZCBDb25jcmV0ZSAoQmhvb3NoYW4gMjAxOCkuXCI7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGZlYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gXCJCbGVuZGluZywgYm9vbGVhbiBhbmQgcGxhbmUgdHJpbW1pbmcgb3BlcmF0aW9ucyB0byBtYW5pcHVsYXRlIGZpZWxkIGZ1bmN0aW9uc1wiO1xyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIk11bHRpLXRocmVhZGluZyBmb3IgY2FsY3VsYXRpb24taW50ZW5zaXZlIGNvbXBvbmVudHNcIjtcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IGNvbXBvbmVudHMgdG8gdmlzdWFsaXplIGdlb21ldHJpYyBvdXRwdXRcIjtcclxuICAgIGZlYXR1cmVMaXN0LmFwcGVuZChwMSxwMixwMyk7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGZlYXR1cmVMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludEZhc3Q7IiwiaW1wb3J0IG15V2Vic2l0ZSBmcm9tIFwiLi9jb250ZW50L3Byb2pfbXlXZWJzaXRlXCI7XHJcbmltcG9ydCBwcmludEZhc3QgZnJvbSBcIi4vY29udGVudC9wcm9qX3ByaW50RmFzdFwiO1xyXG5pbXBvcnQgYWFnIGZyb20gXCIuL2NvbnRlbnQvcHJval9hYWdcIjtcclxuaW1wb3J0IG1hdG5ldCBmcm9tICcuL2NvbnRlbnQvcHJval9tYXRuZXQnO1xyXG5pbXBvcnQgZHJvbmVzIGZyb20gJy4vY29udGVudC9wcm9qX2Ryb25lcyc7XHJcbmltcG9ydCBubHA0bXMgZnJvbSBcIi4vY29udGVudC9wcm9qX25scDRtc1wiO1xyXG5pbXBvcnQgb3JnYW5pYyBmcm9tIFwiLi9jb250ZW50L3Byb2pfb3JnYW5pY1wiO1xyXG5cclxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBuZXcgTWFwKCk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ3ByaW50RmFzdCcsICBwcmludEZhc3QoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ2FhZycsIGFhZygpKTtcclxuICAgIHByb2plY3RzLnNldCgnd2Vic2l0ZScsIG15V2Vic2l0ZSgpKTtcclxuICAgIHByb2plY3RzLnNldCgnbWF0bmV0JywgbWF0bmV0KCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdkcm9uZXMnLCBkcm9uZXMoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ25scDRtcycsIG5scDRtcygpKTtcclxuICAgIHByb2plY3RzLnNldCgnb3JnYW5pYycsIG9yZ2FuaWMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3RzOyIsImV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQobykge1xyXG4gICAgcmV0dXJuIChvIGluc3RhbmNlb2YgRWxlbWVudCk7XHJcbn1cclxuXHJcbi8vY29tcGFyZSB0d28gaHRtbCBlbGVtZW50cy4gbXVzdCBiZSBodG1sIGVsZW1lbnRzLlxyXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYSwgYikge1xyXG4gICAgaWYgKCFpc0VsZW1lbnQoYSkgfHwgIWlzRWxlbWVudChiKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGEubm9kZU5hbWUgIT09IGIubm9kZU5hbWUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChhLnRleHRDb250ZW50ICE9PSBiLnRleHRDb250ZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUZXh0KHRhZywgdGV4dCkge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBvdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNvdXJjZSA9ICcnKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzb3VyY2U7XHJcbiAgICByZXR1cm4gaW1nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzKCkge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5zcmMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgb3V0cHV0LnB1c2goaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlndXJlKHNvdXJjZSA9ICcnLCBjYXB0aW9uID0gJycpIHtcclxuICAgIGlmICh0eXBlb2YgY2FwdGlvbiAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcihcImNhcHRpb24gbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblxyXG4gICAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzb3VyY2U7XHJcbiAgICBjb25zdCBjYXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xyXG4gICAgY2FwdC50ZXh0Q29udGVudCA9ICdmaWc6ICcgKyBjYXB0aW9uO1xyXG4gICAgZmlndXJlLmFwcGVuZChpbWcsIGNhcHQpO1xyXG4gICAgcmV0dXJuIGZpZ3VyZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZV9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZV9tb2JpbGUuc2NzcydcclxuXHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL0NvbnRyb2xsZXInO1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBDb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9