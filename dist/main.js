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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/monolisk_black.woff */ "./src/assets/monolisk_black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n.projectFilter > div {\n  text-align: center;\n  display: flex;\n  align-items: center; }\n\n.tgl {\n  display: none; }\n  .tgl + .tgl-btn {\n    content: attr(data-tg-on);\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    overflow: hidden;\n    backface-visibility: hidden;\n    transition: all 0.2s ease;\n    vertical-align: middle;\n    font-size: 0.8em; }\n    .tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      transition: all 0.2s ease;\n      width: 100%;\n      position: absolute;\n      line-height: 1.8em;\n      font-weight: 400;\n      color: #0f0f0f; }\n    .tgl + .tgl-btn:after {\n      left: 100%;\n      content: attr(data-tg-on); }\n    .tgl + .tgl-btn:before {\n      left: 0;\n      content: attr(data-tg-off); }\n    .tgl + .tgl-btn:active {\n      background: #888;\n      border-radius: 0.5em; }\n      .tgl + .tgl-btn:active:before {\n        left: -10%;\n        border-radius: 0.5em; }\n  .tgl:checked + .tgl-btn {\n    border-color: transparent;\n    /* remove the border's colour */\n    box-shadow: 0 0 0 2px #ffdd00;\n    /* emulate the border */\n    border-radius: 1em;\n    vertical-align: middle; }\n    .tgl:checked + .tgl-btn:before {\n      left: -100%;\n      border-radius: 0; }\n    .tgl:checked + .tgl-btn:after {\n      left: 0; }\n    .tgl:checked + .tgl-btn:active:after {\n      background: #888;\n      border-radius: 0.5em;\n      left: 10%; }\n", "",{"version":3,"sources":["webpack://./src/styles/_themes.scss","webpack://./src/styles/style_anim_checkboxes.scss"],"names":[],"mappings":"AAOA;EACI,6BAA6B;EAC7B,2DAAwD,EAAA;;ACP5D;EACI,kBAAkB;EAClB,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACE,aAAa,EAAA;EADf;IAII,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IAEtB,gBAAgB,EAAA;IAdpB;MAkBQ,yBAAyB;MACzB,WAAW;MACX,kBAAkB;MAClB,kBAAkB;MAClB,gBAAgB;MAChB,cD7BoB,EAAA;ICM5B;MA0BQ,UAAU;MACV,yBAAyB,EAAA;IA3BjC;MA+BQ,OAAO;MACP,0BAA0B,EAAA;IAhClC;MAoCQ,gBAAgB;MAChB,oBAAoB,EAAA;MArC5B;QAuCU,UAAU;QACV,oBAAoB,EAAA;EAxC9B;IAgDI,yBAAyB;IAAE,+BAAA;IAC3B,6BDtD2B;ICsDU,uBAAA;IACrC,kBAAkB;IAClB,sBAAsB,EAAA;IAnD1B;MAyDQ,WAAW;MACX,gBAAgB,EAAA;IA1DxB;MA8DQ,OAAO,EAAA;IA9Df;MAkEQ,gBAAgB;MAChB,oBAAoB;MACpB,SAAS,EAAA","sourcesContent":["\r\n$color_paper: white;\r\n$color_registration: #0f0f0f;\r\n$color_accent: rgb(255, 221, 0);\r\n$color_active: rgb(229, 229, 229);\r\n\r\n\r\n@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('../assets/monolisk_black.woff') format('woff');\r\n}\r\n\r\n$font_default: 'Montserrat', sans-serif;\r\n$font_special: 'Monolisk Black', sans-serif;","@import \"themes\";\r\n\r\n.projectFilter>div{\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.tgl {\r\n  display: none;\r\n\r\n  + .tgl-btn {\r\n    content: attr(data-tg-on);\r\n    height: 2em;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    backface-visibility: hidden;\r\n    transition: all 0.2s ease;\r\n    vertical-align: middle;\r\n\r\n    font-size: 0.8em;\r\n\r\n    &:after,\r\n    &:before {\r\n        transition: all 0.2s ease;\r\n        width: 100%;\r\n        position: absolute;\r\n        line-height: 1.8em;\r\n        font-weight: 400;\r\n        color: $color_registration;\r\n    }\r\n    &:after {\r\n        left: 100%;\r\n        content: attr(data-tg-on);\r\n      }\r\n  \r\n      &:before {\r\n        left: 0;\r\n        content: attr(data-tg-off);\r\n      }\r\n  \r\n      &:active {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        &:before {\r\n          left: -10%;\r\n          border-radius: 0.5em;\r\n        }\r\n      }\r\n\r\n      \r\n  }\r\n\r\n  &:checked + .tgl-btn {\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 2px $color_accent; /* emulate the border */\r\n    border-radius: 1em;\r\n    vertical-align: middle;\r\n\r\n    &:after,\r\n    &:before {\r\n    }\r\n    &:before {\r\n        left: -100%;\r\n        border-radius: 0;\r\n    }\r\n\r\n    &:after {\r\n        left: 0;\r\n    }\r\n\r\n    &:active:after {\r\n        background: #888;\r\n        border-radius: 0.5em;\r\n        left: 10%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n#projectArrow {\n  margin-top: auto; }\n\n#projectArrow:active {\n  border-radius: 1em; }\n  #projectArrow:active.link {\n    color: #ffdd00;\n    border-color: transparent;\n    background-color: #e5e5e5; }\n\n.link {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  text-decoration: none;\n  transform: rotate(-90deg) translate3d(150px, -120px, 0);\n  cursor: pointer; }\n  .link__arrow {\n    display: inline-flex; }\n    .link__arrow span {\n      position: relative;\n      width: 14px;\n      height: 4px;\n      border-radius: 2px;\n      overflow: hidden;\n      background: #BEBDBE;\n      z-index: 2; }\n      .link__arrow span:nth-child(1) {\n        transform-origin: left bottom;\n        transform: rotate(45deg) translate3d(7px, -9px, 0); }\n      .link__arrow span:nth-child(2) {\n        transform-origin: left bottom;\n        transform: rotate(-45deg); }\n      .link__arrow span:after {\n        content: '';\n        display: block;\n        position: absolute;\n        left: 0;\n        width: 0;\n        height: 6px;\n        background: #ffdd00; }\n  .link__line {\n    position: relative;\n    margin-left: -14px;\n    margin-right: 30px;\n    width: 140px;\n    height: 4px;\n    background: #BEBDBE;\n    overflow: hidden;\n    z-index: 1; }\n    .link__line:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 140px;\n      width: 40px;\n      height: 4px;\n      background: #ffdd00; }\n  .link__text {\n    color: #4A4A4A;\n    font-size: 1em; }\n  .link:hover {\n    font-weight: 400;\n    background-color: transparent; }\n    .link:hover .link__line:after {\n      animation: animation-line 1.2s forwards; }\n    .link:hover .link__arrow span:after {\n      animation: animation-arrow 1.2s forwards;\n      animation-delay: 1s; }\n\n@keyframes animation-line {\n  0% {\n    left: 140px; }\n  100% {\n    left: 0; } }\n\n@keyframes animation-arrow {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n", "",{"version":3,"sources":["webpack://./src/styles/_themes.scss","webpack://./src/styles/style_anim_projectArrow.scss"],"names":[],"mappings":"AAOA;EACI,6BAA6B;EAC7B,2DAAwD,EAAA;;ACP5D;EACE,gBAAgB,EAAA;;AAGlB;EASI,kBAAkB,EAAA;EATtB;IAIQ,cDPuB;ICQvB,yBAAyB;IACzB,yBDRyB,EAAA;;ACcjC;EAEI,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,uDAAuD;EACvD,eAAe,EAAA;EAEf;IACA,oBAAoB,EAAA;IADnB;MAIO,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,kBAAkB;MAClB,gBAAgB;MAChB,mBAAmB;MACnB,UAAU,EAAA;MAVjB;QAaO,6BAA6B;QAC7B,kDAAkD,EAAA;MAdzD;QAkBO,6BAA6B;QAC7B,yBAAyB,EAAA;MAnBhC;QAuBO,WAAW;QACX,cAAc;QACd,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,WAAW;QACX,mBDrDmB,EAAA;EC0D3B;IACA,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,UAAU,EAAA;IART;MAWG,WAAW;MACX,cAAc;MACd,kBAAkB;MAClB,WAAW;MACX,WAAW;MACX,WAAW;MACX,mBD3EuB,EAAA;EC+E3B;IACA,cAAc;IACd,cAAc,EAAA;EAlElB;IAsEQ,gBAAgB;IAChB,6BAA6B,EAAA;IAvErC;MA2EgB,uCAAuC,EAAA;IA3EvD;MAkFgB,wCAAwC;MACxC,mBAAmB,EAAA;;AASnC;EACE;IACE,WAAW,EAAA;EAGb;IACE,OAAO,EAAA,EAAA;;AAIX;EACE;IACE,QAAQ,EAAA;EAGV;IACE,WAAW,EAAA,EAAA","sourcesContent":["\r\n$color_paper: white;\r\n$color_registration: #0f0f0f;\r\n$color_accent: rgb(255, 221, 0);\r\n$color_active: rgb(229, 229, 229);\r\n\r\n\r\n@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('../assets/monolisk_black.woff') format('woff');\r\n}\r\n\r\n$font_default: 'Montserrat', sans-serif;\r\n$font_special: 'Monolisk Black', sans-serif;","@import 'themes';\r\n\r\n#projectArrow {\r\n  margin-top: auto;\r\n}\r\n\r\n#projectArrow:active {\r\n\r\n    &.link{\r\n\r\n        color: $color_accent;\r\n        border-color: transparent;\r\n        background-color: $color_active;\r\n    }\r\n    \r\n    border-radius: 1em;\r\n}\r\n\r\n.link {\r\n    $self: &;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px;\r\n    text-decoration: none;\r\n    transform: rotate(-90deg) translate3d(150px, -120px, 0);\r\n    cursor: pointer;\r\n\r\n    &__arrow {\r\n    display: inline-flex;\r\n\r\n        span {\r\n            position: relative;\r\n            width: 14px;\r\n            height: 4px;\r\n            border-radius: 2px;\r\n            overflow: hidden;\r\n            background: #BEBDBE;\r\n            z-index: 2;\r\n\r\n            &:nth-child(1) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(45deg) translate3d(7px, -9px, 0);\r\n            }\r\n\r\n            &:nth-child(2) {\r\n            transform-origin: left bottom;\r\n            transform: rotate(-45deg);\r\n            }\r\n\r\n            &:after {\r\n            content: '';\r\n            display: block;\r\n            position: absolute;\r\n            left: 0;\r\n            width: 0;\r\n            height: 6px;\r\n            background: $color_accent;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__line {\r\n    position: relative;\r\n    margin-left: -14px;\r\n    margin-right: 30px;\r\n    width: 140px;\r\n    height: 4px;\r\n    background: #BEBDBE;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n\r\n    &:after {\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        left: 140px;\r\n        width: 40px;\r\n        height: 4px;\r\n        background: $color_accent;\r\n    }\r\n    }\r\n\r\n    &__text {\r\n    color: #4A4A4A;\r\n    font-size: 1em;\r\n    }\r\n\r\n    &:hover {\r\n        font-weight: 400;\r\n        background-color: transparent;\r\n        #{$self} {\r\n            &__line {\r\n            &:after {\r\n                animation: animation-line 1.2s forwards;\r\n            }\r\n            }\r\n\r\n            &__arrow {\r\n            span {\r\n                &:after {\r\n                animation: animation-arrow 1.2s forwards;\r\n                animation-delay: 1s;\r\n                }\r\n            }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@keyframes animation-line {\r\n  0% {\r\n    left: 140px;\r\n  }\r\n\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes animation-arrow {\r\n  0% {\r\n    width: 0;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/profilePic00.JPG */ "./src/assets/profilePic00.JPG"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Monolisk Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"); }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.9em; }\n\n.root {\n  display: flex;\n  justify-content: center;\n  height: 100vh; }\n\na {\n  color: black;\n  text-decoration: underline;\n  text-decoration-color: #ffdd00;\n  text-decoration-thickness: 0.2em; }\n\na:hover {\n  background-color: #ffdd00; }\n\n.mainContainer {\n  height: 100vh;\n  width: 50%;\n  background-color: white;\n  margin: 0;\n  flex-shrink: 0; }\n\n/* LEFT MAIN */\n.left {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: flex-start;\n  margin-top: -2px; }\n  .left > * {\n    margin-left: 4em;\n    margin-right: 4em; }\n\n.logo {\n  top: -2px;\n  left: 0;\n  width: 50vw;\n  margin: 0; }\n  .logo svg {\n    fill: black;\n    width: 100%; }\n  .logo svg:hover {\n    fill: none;\n    stroke: black;\n    stroke-width: 2px; }\n  .logo h2 {\n    margin-left: 4em;\n    font-size: 1em;\n    font-weight: 200; }\n\n/*========  HEADER  ==================*/\n#btn_profile {\n  display: flex;\n  height: 2em;\n  width: 8em;\n  align-items: center;\n  font-size: 0.7em;\n  justify-content: start; }\n\n#btn_profile :first-child {\n  padding: 0;\n  margin-left: 0;\n  text-align: center;\n  vertical-align: center;\n  margin-left: auto; }\n\n#btn_profile svg {\n  flex-shrink: 0;\n  margin: 0;\n  margin-left: -1.2em;\n  margin-right: -1.2em;\n  padding: 0;\n  scale: 0.25;\n  /* transform: translate(-3em, -2em); */\n  width: 40px;\n  height: 40px; }\n\n#btn_profile:hover {\n  border-bottom: 0.3em solid var(--col_emphasis);\n  cursor: pointer;\n  font-weight: 600;\n  stroke-width: 5; }\n\n#btn_profile:active {\n  background-color: #ffdd00;\n  border-radius: 1em; }\n\n/* =======  RIGHT MAIN  ==========*/\n.right {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden; }\n  .right .background {\n    position: absolute;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    background-position: 20vh center;\n    height: 110vh;\n    width: 70vh; }\n\n.circleContainer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap-reverse;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n  background-color: black;\n  height: 100%;\n  width: 100%;\n  mix-blend-mode: hard-light;\n  z-index: 2; }\n\n.circle {\n  background-color: gray;\n  width: 20em;\n  height: 20em;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover; }\n\n/*ABOUT TAB*/\n.about {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: calc(100% - 25px);\n  top: 0%;\n  width: 50%;\n  height: 100%;\n  background-color: white;\n  z-index: 10;\n  opacity: 1;\n  transition-property: left, width;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.aboutContainer {\n  padding: 6em 5em;\n  overflow: auto; }\n\n.about hr {\n  border: 0 none;\n  height: 1px;\n  background-color: #eee;\n  margin-bottom: 2em; }\n\n.about h3 {\n  font-weight: 200;\n  margin-bottom: -0.4em;\n  margin-top: 6em; }\n\n.about .links {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n  margin-bottom: 3em; }\n\n/*=======   INDEX TAB   ============*/\n.projectIndex {\n  position: fixed;\n  top: 100%;\n  left: 0%;\n  width: 50%;\n  height: 200%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1em 0;\n  transition-property: top, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.projectIndexSlideIn {\n  top: 40%; }\n\n.projectFilter {\n  padding: 1em 2em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 0.75em; }\n\n.indexTableContainer {\n  overflow: auto; }\n\n.projectIndexTable {\n  margin: 0em 1em;\n  border-collapse: collapse;\n  font-size: 0.8em; }\n\n.projectIndexTable th {\n  font-size: 0.7em;\n  font-weight: 200;\n  text-align: left;\n  padding: 0.2em 0.5em; }\n\n.projectIndexTable td {\n  padding: 0.5em 0.5em;\n  overflow-wrap: break-word; }\n\n.projectIndexTable tr:hover {\n  cursor: pointer;\n  border-color: transparent;\n  /* remove the border's colour */\n  box-shadow: 0 0 0 0.5px lightgray;\n  /* emulate the border */ }\n\n.projectIndexTable tr:active {\n  background-color: #ffdd00; }\n\n.selected {\n  background-color: #e5e5e5; }\n\n/* ======   CIRCLE PREVIEWS     =======*/\n.banner {\n  position: fixed;\n  color: #ffdd00;\n  text-align: center;\n  font-family: \"Monolisk Black\", sans-serif;\n  font-size: 10em;\n  z-index: 20; }\n\n/* ======   PROJECT TAB     =======*/\n.projectTab {\n  background-color: white;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  left: 100%;\n  top: 0%;\n  width: 50%;\n  height: 100%;\n  opacity: 0.5;\n  z-index: 5;\n  /* padding: 2em 4em; */\n  transition-property: left, opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n\n.leftEdge {\n  /* height: 100%; */\n  width: 25px;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  border-right: 0.5px dotted #949494;\n  border-left: 1px dotted black;\n  writing-mode: vertical-lr;\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.leftEdge:hover {\n  background-color: #ffdd00;\n  font-weight: 400;\n  cursor: pointer; }\n\n.leftEdge:active {\n  background-color: #e5e5e5; }\n\n.about .leftEdge {\n  background-color: #0f0f0f;\n  color: white;\n  border-color: white; }\n\n.topEdge {\n  height: 20px;\n  width: 100%;\n  /* flex-grow: 1; */\n  flex-shrink: 0;\n  background-color: #0f0f0f;\n  border-bottom: 0.5px dotted #949494;\n  border-top: 1px dotted white;\n  /* writing-mode:vertical-lr; */\n  text-align: center;\n  font-weight: lighter;\n  vertical-align: middle; }\n\n.projectContentContainer {\n  height: 100%;\n  overflow: auto; }\n  .projectContentContainer p, .projectContentContainer h1, .projectContentContainer h2, .projectContentContainer h3, .projectContentContainer h4, .projectContentContainer h5 {\n    margin-left: 2rem;\n    margin-right: 3rem; }\n  .projectContentContainer img, .projectContentContainer figure {\n    width: 100%;\n    margin: 0;\n    margin-right: 25px; }\n  .projectContentContainer ul {\n    padding-left: 3rem; }\n\n.closeProject {\n  background-color: brown;\n  width: 2em;\n  height: 2em; }\n\n.closeProject:hover {\n  background-color: azure; }\n\n.projectVideoContainer {\n  margin: 0; }\n\n.projectTab h3 {\n  margin-top: 2em;\n  margin-bottom: -0.5em; }\n\n.projectTab h5 {\n  margin-top: 1em; }\n\n.projectTab figure img {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px; }\n\n.projectTab figcaption {\n  font-family: 'Source Serif Pro', serif;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 0.8em;\n  padding-top: 0.3em; }\n\n.slideInFromRight {\n  left: 50%;\n  opacity: 1; }\n\n/*=========  CONTACT  ====================*/\n.contact {\n  position: fixed;\n  background-color: #ffdd00;\n  width: 100vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  bottom: 100%;\n  transition-property: bottom;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-out; }\n  .contact h1 {\n    margin-top: 0em;\n    margin-bottom: 0em;\n    font-family: \"Monolisk Black\", sans-serif;\n    text-transform: uppercase;\n    font-size: 15em; }\n  .contact h2 {\n    margin-bottom: 2em; }\n  .contact img {\n    width: 3em;\n    height: 3em; }\n  .contact > div:nth-child(3) {\n    display: flex;\n    gap: 4em; }\n  .contact > *:last-child {\n    margin-top: auto; }\n\n.bottomEdge {\n  width: 100%;\n  height: 25px;\n  border-top: 0.5px dotted #949494;\n  border-bottom: 1px dotted black;\n  display: flex;\n  justify-content: center;\n  cursor: pointer; }\n\n.bottomEdge:hover {\n  background-color: white; }\n\n.bottomEdge:active {\n  background-color: #e5e5e5; }\n\n.slideDown {\n  bottom: 50%; }\n\n/*========= FOOTER  ====================*/\n.footer {\n  /* font-family: 'Source Serif Pro', serif; */\n  font-size: 0.8em;\n  font-weight: 100;\n  color: black;\n  /* font-style: italic; */\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  z-index: 0;\n  width: 50%;\n  height: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px dotted black; }\n", "",{"version":3,"sources":["webpack://./src/styles/_themes.scss","webpack://./src/styles/style_main.scss"],"names":[],"mappings":"AAOA;EACI,6BAA6B;EAC7B,2DAAwD,EAAA;;ACP5D;EACI,sBAAsB,EAAA;;AAG1B;EAEI,SAAS;EACT,qCDGmC;ECFnC,gBAAgB,EAAA;;AAIpB;EACI,aAAa;EACb,uBAAuB;EACvB,aAAa,EAAA;;AAGjB;EACI,YAAY;EACZ,0BAA0B;EAC1B,8BDpB2B;ECqB3B,gCAAgC,EAAA;;AAEpC;EACI,yBDxB2B,EAAA;;AC2B/B;EACI,aAAa;EACb,UAAU;EACV,uBDhCe;ECiCf,SAAS;EACT,cAAc,EAAA;;AAGlB,cAAA;AACA;EAII,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB,EAAA;EARpB;IAWQ,gBAAgB;IAChB,iBAAiB,EAAA;;AAIzB;EAEI,SAAS;EACT,OAAM;EACN,WAAW;EACX,SAAS,EAAA;EALb;IAQQ,WAAW;IACX,WAAW,EAAA;EATnB;IAaQ,UAAU;IACV,aAAa;IACb,iBAAiB,EAAA;EAfzB;IAmBQ,gBAAe;IACf,cAAc;IACd,gBAAgB,EAAA;;AAKxB,uCAAA;AAKA;EACI,aAAa;EACb,WAAU;EACV,UAAU;EACV,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB,EAAA;;AAGrB;EACI,cAAc;EACd,SAAQ;EACR,mBAAmB;EACnB,oBAAoB;EACpB,UAAU;EACV,WAAW;EACX,sCAAA;EACA,WAAW;EACX,YAAW,EAAA;;AAGf;EACI,8CAA8C;EAC9C,eAAe;EACf,gBAAgB;EAChB,eAAe,EAAA;;AAGnB;EACI,yBDxH2B;ECyH3B,kBAAkB,EAAA;;AAItB,mCAAA;AACA;EACI,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EAEb,gBAAgB,EAAA;EAPpB;IAUQ,kBAAkB;IAClB,yDAAmD;IACnD,4BAA4B;IAC5B,0BAA0B;IAC1B,gCAAuC;IACvC,aAAa;IACb,WAAgB,EAAA;;AAOxB;EACI,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EAIR,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,UAAU,EAAA;;AAGd;EACI,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,sBAAsB,EAAA;;AAI1B,YAAA;AACA;EACI,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,uBAAsB;EACtB,OAAO;EACP,UAAU;EACV,YAAY;EACZ,uBD7Le;EC8Lf,WAAW;EACX,UAAU;EACV,gCAAgC;EAChC,yBAAyB;EACzB,oCAAoC,EAAA;;AAIxC;EACI,gBAAgB;EAChB,cAAc,EAAA;;AAGlB;EACI,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,kBAAkB,EAAA;;AAGtB;EACI,gBAAgB;EAChB,qBAAqB;EACrB,eAAe,EAAA;;AAInB;EACI,aAAa;EACb,8BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,kBAAkB,EAAA;;AAKtB,qCAAA;AACA;EACI,eAAe;EACf,SAAS;EACT,QAAQ;EACR,UAAU;EACV,YAAW;EACX,uBD1Oe;EC2Of,aAAa;EACb,sBAAsB;EAEtB,cAAc;EACd,iCAAiC;EACjC,yBAAyB;EACzB,oCAAoC,EAAA;;AAGxC;EACI,QAAO,EAAA;;AAGX;EACI,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,WAAW,EAAA;;AAGf;EACI,cAAc,EAAA;;AAGlB;EACI,eAAe;EACf,yBAAyB;EACzB,gBAAgB,EAAA;;AAIpB;EACI,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB,EAAA;;AAGxB;EACI,oBAAoB;EACpB,yBAAyB,EAAA;;AAG7B;EACI,eAAe;EACf,yBAAyB;EAAE,+BAAA;EAC3B,iCAA0C;EAAE,uBAAA,EAAwB;;AAExE;EACI,yBD3R2B,EAAA;;AC8R9B;EACG,yBD9R6B,EAAA;;ACkSjC,wCAAA;AACA;EACI,eAAc;EACd,cDtS2B;ECuS3B,kBAAkB;EAClB,yCAAyC;EACzC,eAAe;EACf,WAAW,EAAA;;AAIf,oCAAA;AAEA;EACI,uBDnTe;ECoTf,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,UAAS;EACT,OAAO;EACP,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,sBAAA;EACA,kCAAkC;EAClC,yBAAyB;EACzB,oCAAoC,EAAA;;AAGxC;EACI,kBAAA;EACA,WAAW;EACX,kBAAA;EACA,cAAc;EACd,kCAA6C;EAC7C,6BAA6B;EAC7B,yBAAwB;EACxB,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB,EAAA;;AAG1B;EACI,yBDhV2B;ECiV3B,gBAAgB;EAChB,eAAe,EAAA;;AAGnB;EACI,yBDrV6B,EAAA;;ACwVjC;EACI,yBD3VwB;EC4VxB,YD7Ve;EC8Vf,mBD9Ve,EAAA;;ACkWnB;EACI,YAAY;EACZ,WAAW;EACX,kBAAA;EACA,cAAc;EACd,yBDtWwB;ECuWxB,mCAA8C;EAC9C,4BAA4B;EAC5B,8BAAA;EACA,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB,EAAA;;AAI1B;EACI,YAAY;EAGZ,cAAc,EAAA;EAJlB;IAOI,iBAAiB;IACjB,kBAAkB,EAAA;EARtB;IAcQ,WAAW;IACX,SAAS;IACT,kBAAkB,EAAA;EAhB1B;IAoBQ,kBAAkB,EAAA;;AAK1B;EACI,uBAAuB;EACvB,UAAU;EACV,WAAW,EAAA;;AAGf;EACI,uBAAsB,EAAA;;AAK1B;EACI,SAAS,EAAA;;AAGb;EACI,eAAe;EACf,qBAAqB,EAAA;;AAGzB;EACI,eAAe,EAAA;;AAGnB;EACI,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB,EAAA;;AAGrB;EACI,sCAAsC;EACtC,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB,EAAA;;AAGtB;EACI,SAAS;EACT,UAAU,EAAA;;AAGd,2CAAA;AAGA;EACI,eAAe;EACf,yBDzb2B;EC0b3B,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,yBAAyB;EACzB,oCAAoC,EAAA;EAbxC;IAgBQ,eAAe;IACf,kBAAkB;IAClB,yCD/bmC;ICgcnC,yBAAyB;IACzB,eAAe,EAAA;EApBvB;IAwBQ,kBAAkB,EAAA;EAxB1B;IA4BQ,UAAU;IACV,WAAW,EAAA;EA7BnB;IAkCQ,aAAa;IACb,QAAQ,EAAA;EAnChB;IAuCQ,gBAAgB,EAAA;;AAIxB;EACI,WAAW;EACX,YAAY;EACZ,gCAA2C;EAC3C,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;EACvB,eAAe,EAAA;;AAGnB;EACI,uBD/ee,EAAA;;ACkfnB;EACI,yBDhf6B,EAAA;;ACmfjC;EACI,WAAW,EAAA;;AAGf,yCAAA;AACA;EACI,4CAAA;EACA,gBAAgB;EAChB,gBAAgB;EAChB,YAAmB;EACnB,wBAAA;EACA,eAAe;EACf,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,4BAA4B,EAAA","sourcesContent":["\r\n$color_paper: white;\r\n$color_registration: #0f0f0f;\r\n$color_accent: rgb(255, 221, 0);\r\n$color_active: rgb(229, 229, 229);\r\n\r\n\r\n@font-face {\r\n    font-family: \"Monolisk Black\";\r\n    src: url('../assets/monolisk_black.woff') format('woff');\r\n}\r\n\r\n$font_default: 'Montserrat', sans-serif;\r\n$font_special: 'Monolisk Black', sans-serif;","@import \"themes\";\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    \r\n    margin: 0;\r\n    font-family: $font_default;\r\n    font-size: 0.9em;\r\n    \r\n}\r\n\r\n.root {\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 100vh;\r\n}\r\n\r\na {\r\n    color: black;\r\n    text-decoration: underline;\r\n    text-decoration-color: $color_accent;\r\n    text-decoration-thickness: 0.2em;\r\n}\r\na:hover {\r\n    background-color: $color_accent;\r\n}\r\n\r\n.mainContainer {\r\n    height: 100vh;\r\n    width: 50%;\r\n    background-color: $color_paper;\r\n    margin: 0;\r\n    flex-shrink: 0;\r\n}\r\n\r\n/* LEFT MAIN */\r\n.left {\r\n    // margin: 0;\r\n    // padding: 0em 7em;\r\n    // padding-top: 10em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    align-items: flex-start;\r\n    margin-top: -2px;\r\n\r\n    &>*  {\r\n        margin-left: 4em;\r\n        margin-right: 4em;\r\n    }\r\n}\r\n\r\n.logo {\r\n    // position: fixed;\r\n    top: -2px;\r\n    left:0;\r\n    width: 50vw;\r\n    margin: 0;\r\n\r\n    svg{\r\n        fill: black;\r\n        width: 100%;\r\n    }\r\n\r\n    svg:hover {\r\n        fill: none;\r\n        stroke: black;\r\n        stroke-width: 2px;\r\n    }\r\n\r\n    h2 {\r\n        margin-left:4em;\r\n        font-size: 1em;\r\n        font-weight: 200;\r\n    }\r\n    \r\n}\r\n\r\n/*========  HEADER  ==================*/\r\n\r\n\r\n\r\n\r\n#btn_profile {\r\n    display: flex;\r\n    height:2em;\r\n    width: 8em;\r\n    align-items: center;\r\n    font-size: 0.7em;\r\n    justify-content: start;\r\n}\r\n\r\n#btn_profile :first-child{\r\n    padding: 0;\r\n    margin-left: 0;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    margin-left: auto;\r\n}\r\n\r\n#btn_profile svg {\r\n    flex-shrink: 0;\r\n    margin:0;\r\n    margin-left: -1.2em;\r\n    margin-right: -1.2em;\r\n    padding: 0;\r\n    scale: 0.25;\r\n    /* transform: translate(-3em, -2em); */\r\n    width: 40px;\r\n    height:40px;\r\n}\r\n\r\n#btn_profile:hover {\r\n    border-bottom: 0.3em solid var(--col_emphasis);\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    stroke-width: 5;\r\n}\r\n\r\n#btn_profile:active {\r\n    background-color: $color_accent;\r\n    border-radius: 1em;\r\n}\r\n\r\n\r\n/* =======  RIGHT MAIN  ==========*/\r\n.right {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    height: 100vh;\r\n\r\n    overflow: hidden;\r\n\r\n    .background {\r\n        position: absolute;\r\n        background-image: url('../assets/profilePic00.JPG');\r\n        background-repeat: no-repeat;\r\n        background-size: auto 100%;\r\n        background-position: 0.2 * 100vh center;\r\n        height: 110vh;\r\n        width: 0.7*100vh;\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n.circleContainer {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap-reverse;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2em;\r\n    // height: 100vh;\r\n    // height: 100%;\r\n    // overflow: hidden;\r\n    background-color: black;\r\n    height: 100%;\r\n    width: 100%;\r\n    mix-blend-mode: hard-light;\r\n    z-index: 2;\r\n}\r\n\r\n.circle {\r\n    background-color: gray;\r\n    width: 20em;\r\n    height: 20em;\r\n    border-radius: 50%;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n/*ABOUT TAB*/\r\n.about {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:calc(100% - 25px);\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: $color_paper;\r\n    z-index: 10;\r\n    opacity: 1;\r\n    transition-property: left, width;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n    \r\n}\r\n\r\n.aboutContainer {\r\n    padding: 6em 5em;\r\n    overflow: auto;\r\n}\r\n\r\n.about hr {\r\n    border: 0 none;\r\n    height: 1px;\r\n    background-color: #eee;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.about h3 {\r\n    font-weight: 200;\r\n    margin-bottom: -0.4em;\r\n    margin-top: 6em;\r\n\r\n}\r\n\r\n.about .links{\r\n    display: flex;\r\n    justify-content:space-between;\r\n    flex-wrap: wrap;\r\n    font-size: 0.8em;\r\n    margin-bottom: 3em;\r\n\r\n}\r\n\r\n\r\n/*=======   INDEX TAB   ============*/\r\n.projectIndex {\r\n    position: fixed;\r\n    top: 100%;\r\n    left: 0%;\r\n    width: 50%;\r\n    height:200%;\r\n    background-color:$color_paper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    padding: 1em 0;\r\n    transition-property: top, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.projectIndexSlideIn {\r\n    top:40%;\r\n}\r\n\r\n.projectFilter {\r\n    padding: 1em 2em;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 0.75em;\r\n}\r\n\r\n.indexTableContainer {\r\n    overflow: auto;\r\n}\r\n\r\n.projectIndexTable {\r\n    margin: 0em 1em;\r\n    border-collapse: collapse;\r\n    font-size: 0.8em;\r\n}\r\n\r\n\r\n.projectIndexTable th {\r\n    font-size: 0.7em;\r\n    font-weight: 200;\r\n    text-align: left;\r\n    padding: 0.2em 0.5em;\r\n}\r\n\r\n.projectIndexTable td {\r\n    padding: 0.5em 0.5em;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.projectIndexTable tr:hover {\r\n    cursor: pointer;\r\n    border-color: transparent; /* remove the border's colour */\r\n    box-shadow: 0 0 0 0.5px rgb(211, 211, 211); /* emulate the border */\r\n}\r\n.projectIndexTable tr:active {\r\n    background-color: $color_accent;\r\n}\r\n\r\n .selected {\r\n    background-color: $color_active;\r\n}\r\n\r\n\r\n/* ======   CIRCLE PREVIEWS     =======*/\r\n.banner {\r\n    position:fixed;\r\n    color: $color_accent;\r\n    text-align: center;\r\n    font-family: \"Monolisk Black\", sans-serif;\r\n    font-size: 10em;\r\n    z-index: 20;\r\n}\r\n\r\n\r\n/* ======   PROJECT TAB     =======*/\r\n\r\n.projectTab {\r\n    background-color: $color_paper;\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    left:100%;\r\n    top: 0%;\r\n    width: 50%;\r\n    height: 100%;\r\n    opacity: 0.5;\r\n    z-index: 5;\r\n    /* padding: 2em 4em; */\r\n    transition-property: left, opacity;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.leftEdge {\r\n    /* height: 100%; */\r\n    width: 25px;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    border-right: 0.5px dotted rgb(148, 148, 148);\r\n    border-left: 1px dotted black;\r\n    writing-mode:vertical-lr;\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n.leftEdge:hover {\r\n    background-color: $color_accent;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n}\r\n\r\n.leftEdge:active {\r\n    background-color: $color_active;\r\n}\r\n\r\n.about .leftEdge {\r\n    background-color: $color_registration;\r\n    color: $color_paper;\r\n    border-color: $color_paper;\r\n\r\n}\r\n\r\n.topEdge {\r\n    height: 20px;\r\n    width: 100%;\r\n    /* flex-grow: 1; */\r\n    flex-shrink: 0;\r\n    background-color: $color_registration;\r\n    border-bottom: 0.5px dotted rgb(148, 148, 148);\r\n    border-top: 1px dotted white;\r\n    /* writing-mode:vertical-lr; */\r\n    text-align: center;\r\n    font-weight: lighter;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.projectContentContainer {\r\n    height: 100%;\r\n    // padding: 2em 4em;\r\n\r\n    overflow: auto;\r\n\r\n    p,h1,h2,h3,h4,h5 {\r\n    margin-left: 2rem;\r\n    margin-right: 3rem;\r\n\r\n    }\r\n\r\n\r\n    & img, & figure {\r\n        width: 100%;\r\n        margin: 0;\r\n        margin-right: 25px;\r\n    }\r\n\r\n    ul{\r\n        padding-left: 3rem;\r\n    }\r\n    \r\n}\r\n\r\n.closeProject {\r\n    background-color: brown;\r\n    width: 2em;\r\n    height: 2em;\r\n}\r\n\r\n.closeProject:hover {\r\n    background-color:azure;\r\n}\r\n\r\n\r\n\r\n.projectVideoContainer {\r\n    margin: 0;\r\n}\r\n\r\n.projectTab h3 {\r\n    margin-top: 2em;\r\n    margin-bottom: -0.5em;\r\n}\r\n\r\n.projectTab h5 {\r\n    margin-top: 1em;\r\n}\r\n\r\n.projectTab figure img {\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 1px;\r\n}\r\n\r\n.projectTab figcaption {\r\n    font-family: 'Source Serif Pro', serif;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-size: 0.8em;\r\n    padding-top: 0.3em;\r\n}\r\n\r\n.slideInFromRight {\r\n    left: 50%;\r\n    opacity: 1;\r\n}\r\n\r\n/*=========  CONTACT  ====================*/\r\n\r\n\r\n.contact {\r\n    position: fixed;\r\n    background-color: $color_accent;\r\n    width: 100vw;\r\n    height: 50vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 10;\r\n    bottom: 100%;\r\n    transition-property: bottom;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-out;\r\n\r\n    h1 {\r\n        margin-top: 0em;\r\n        margin-bottom: 0em;\r\n        font-family: $font_special;\r\n        text-transform: uppercase;\r\n        font-size: 15em;\r\n    }\r\n\r\n    h2 {\r\n        margin-bottom: 2em;\r\n    }\r\n\r\n    img {\r\n        width: 3em;\r\n        height: 3em;\r\n        // background-color: black;\r\n    }\r\n\r\n    & > div:nth-child(3) {\r\n        display: flex;\r\n        gap: 4em;\r\n    }\r\n\r\n    & > *:last-child {\r\n        margin-top: auto;\r\n    }\r\n}\r\n\r\n.bottomEdge {\r\n    width: 100%;\r\n    height: 25px;\r\n    border-top: 0.5px dotted rgb(148, 148, 148);\r\n    border-bottom: 1px dotted black;\r\n    display: flex;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.bottomEdge:hover {\r\n    background-color: $color_paper;\r\n}\r\n\r\n.bottomEdge:active {\r\n    background-color: $color_active;\r\n}\r\n\r\n.slideDown {\r\n    bottom: 50%;\r\n}\r\n\r\n/*========= FOOTER  ====================*/\r\n.footer {\r\n    /* font-family: 'Source Serif Pro', serif; */\r\n    font-size: 0.8em;\r\n    font-weight: 100;\r\n    color: rgb(0, 0, 0);\r\n    /* font-style: italic; */\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0;\r\n    z-index: 0;\r\n    width: 50%;\r\n    height: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-top: 1px dotted black;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/profilePic01.JPG */ "./src/assets/profilePic01.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/profilePic00.JPG */ "./src/assets/profilePic00.JPG"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 600px) {\n  .root {\n    display: block;\n    flex-direction: column;\n    overflow: hidden;\n    height: 100vh; }\n  .mainContainer {\n    width: 100%; }\n  .left {\n    height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: auto 80%;\n    background-position: 100% 100%; }\n  .logo {\n    width: calc(100vw - 26px); }\n  .right {\n    flex-shrink: 1; }\n    .right .background {\n      background-image: none; }\n  .right {\n    position: relative;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    height: 100vh;\n    overflow: hidden; }\n    .right .background {\n      position: absolute;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      background-repeat: no-repeat;\n      background-size: auto 100%;\n      background-position: 20vh center;\n      height: 110vh;\n      width: 70vh; }\n  .about {\n    width: 100vw; }\n    .about .aboutContainer {\n      overflow: auto;\n      padding: 3em 2em; }\n  .projectIndex {\n    width: 100vw; }\n  .projectIndexSlideIn {\n    top: 35%; }\n  .projectTab {\n    width: 100vw; }\n    .projectTab h1 {\n      font-size: 1.5em; }\n    .projectTab h2 {\n      font-size: 1.2em;\n      font-weight: 600; }\n    .projectTab h3 {\n      font-size: 1.1em; }\n    .projectTab h4 {\n      font-weight: 600;\n      margin-top: 0.5em; }\n    .projectTab h5 {\n      font-weight: 600;\n      margin-bottom: -0.3em; }\n    .projectTab ul {\n      padding-left: 1.5em; }\n    .projectTab img {\n      margin-top: 1em;\n      margin-bottom: -1em; }\n    .projectTab figure {\n      margin: 0; }\n    .projectTab figcaption {\n      margin-top: 1em; }\n  .projectContentContainer {\n    padding: 3em 1em;\n    padding-right: 3.5em; }\n  .slideInFromRight {\n    left: 5px; }\n  .footer {\n    width: 100vw; }\n  .link__line:after {\n    animation: animation-line-looped 1.5s forwards;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite; }\n  .link__arrow span:after {\n    animation: animation-arrow-looped;\n    animation-duration: 1.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite; }\n  @keyframes animation-line-looped {\n    0% {\n      left: 140px; }\n    70% {\n      left: 0; }\n    100% {\n      left: -30px; } }\n  @keyframes animation-arrow-looped {\n    0% {\n      width: 0; }\n    70% {\n      width: 0; }\n    100% {\n      width: 100%; } } }\n\n@media (max-height: 700px) {\n  .link {\n    transform: rotate(-90deg) translate3d(80px, -80px, 0); }\n    .link__line {\n      width: 60px; } }\n\n@media (max-height: 500px) {\n  .link {\n    flex-wrap: wrap;\n    transform: rotate(-90deg) translate3d(45px, -43px, 0);\n    width: 120px;\n    padding-left: 10px; }\n    .link > span:last-child {\n      width: 50%;\n      margin-top: 1em;\n      margin-left: 1em; }\n  .projectIndex {\n    height: 75vh; }\n  .projectIndexSlideIn {\n    top: 25%; }\n  .circle {\n    width: 10em;\n    height: 10em; } }\n", "",{"version":3,"sources":["webpack://./src/styles/style_mobile.scss"],"names":[],"mappings":"AAAA;EACI;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,aAAa,EAAA;EAGjB;IAEI,WAAW,EAAA;EAGf;IACI,aAAa;IAEb,yDAAmD;IACnD,4BAA4B;IAC5B,yBAAyB;IACzB,8BAA8B,EAAA;EAGlC;IACI,yBAAyB,EAAA;EAG7B;IACI,cAAc,EAAA;IADlB;MAGQ,sBAAsB,EAAA;EAI9B;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IAEb,gBAAgB,EAAA;IAPpB;MAUQ,kBAAkB;MAClB,yDAAmD;MACnD,4BAA4B;MAC5B,0BAA0B;MAC1B,gCAAuC;MACvC,aAAa;MACb,WAAgB,EAAA;EAKxB;IACI,YAAY,EAAA;IADhB;MAGQ,cAAc;MACd,gBAAgB,EAAA;EAMxB;IACI,YAAY,EAAA;EAGhB;IACI,QAAQ,EAAA;EAIZ;IACI,YAAY,EAAA;IADhB;MAIQ,gBAAgB,EAAA;IAJxB;MAOQ,gBAAgB;MAChB,gBAAgB,EAAA;IARxB;MAWQ,gBAAgB,EAAA;IAXxB;MAeQ,gBAAgB;MAChB,iBAAiB,EAAA;IAhBzB;MAoBQ,gBAAgB;MAChB,qBAAqB,EAAA;IArB7B;MAyBQ,mBAAmB,EAAA;IAzB3B;MA4BQ,eAAe;MACf,mBAAmB,EAAA;IA7B3B;MAiCQ,SAAS,EAAA;IAjCjB;MAqCQ,eAAe,EAAA;EAKvB;IACI,gBAAgB;IAChB,oBAAoB,EAAA;EAGxB;IACI,SAAS,EAAA;EAGb;IACI,YAAY,EAAA;EAKX;IAEO,8CAA8C;IAE9C,iCAAiC;IACjC,mCAAmC,EAAA;EAI1C;IAGO,iCAAiC;IAEjC,wBAAwB;IACxB,iCAAiC;IACjC,mCAAmC,EAAA;EAM/C;IACI;MACE,WAAW,EAAA;IAGb;MACI,OAAO,EAAA;IAGX;MACE,WAAW,EAAA,EAAA;EAIjB;IACI;MACE,QAAQ,EAAA;IAGV;MACI,QAAQ,EAAA;IAGZ;MACE,WAAW,EAAA,EAAA,EAAA;;AAMrB;EAMI;IAGI,qDAAqD,EAAA;IAGrD;MACI,WAAW,EAAA,EACd;;AAYT;EACI;IACI,eAAe;IACf,qDAAqD;IAErD,YAAY;IACZ,kBAAkB,EAAA;IALtB;MAQQ,UAAU;MACV,eAAe;MACf,gBAAgB,EAAA;EAIxB;IACI,YAAW,EAAA;EAMf;IACI,QAAQ,EAAA;EAGZ;IACI,WAAW;IACf,YAAY,EAAA,EACX","sourcesContent":["@media (max-width: 600px) {\r\n    .root {\r\n        display: block;\r\n        flex-direction: column;\r\n        overflow: hidden;;\r\n        height: 100vh;\r\n    }\r\n\r\n    .mainContainer {\r\n        // height: 50%;\r\n        width: 100%;\r\n    }\r\n\r\n    .left {\r\n        height: 100vh;\r\n        // padding: 3em;\r\n        background-image: url('../assets/profilePic01.JPG');\r\n        background-repeat: no-repeat;\r\n        background-size: auto 80%;\r\n        background-position: 100% 100%;\r\n    }   \r\n\r\n    .logo {\r\n        width: calc(100vw - 26px);\r\n    }\r\n\r\n    .right {\r\n        flex-shrink: 1;\r\n        .background {\r\n            background-image: none;\r\n   \r\n        }\r\n    }\r\n    .right {\r\n        position: relative;\r\n        display: flex;\r\n        align-items: flex-start;\r\n        justify-content: center;\r\n        height: 100vh;\r\n    \r\n        overflow: hidden;\r\n    \r\n        .background {\r\n            position: absolute;\r\n            background-image: url('../assets/profilePic00.JPG');\r\n            background-repeat: no-repeat;\r\n            background-size: auto 100%;\r\n            background-position: 0.2 * 100vh center;\r\n            height: 110vh;\r\n            width: 0.7*100vh;\r\n    \r\n        }\r\n    }\r\n\r\n    .about {\r\n        width: 100vw;\r\n        .aboutContainer {\r\n            overflow: auto;\r\n            padding: 3em 2em;\r\n        }\r\n    }\r\n\r\n    \r\n\r\n    .projectIndex {\r\n        width: 100vw;\r\n    }\r\n    \r\n    .projectIndexSlideIn {\r\n        top: 35%;\r\n    }\r\n    \r\n    \r\n    .projectTab {\r\n        width: 100vw;\r\n\r\n        h1 {\r\n            font-size: 1.5em;\r\n        }\r\n        h2{\r\n            font-size: 1.2em;\r\n            font-weight: 600;\r\n        }\r\n        h3{\r\n            font-size: 1.1em;\r\n\r\n        }\r\n        h4{\r\n            font-weight: 600;\r\n            margin-top: 0.5em;\r\n\r\n        }\r\n        h5{\r\n            font-weight: 600;\r\n            margin-bottom: -0.3em;\r\n        }\r\n\r\n        ul{\r\n            padding-left: 1.5em;\r\n        }\r\n        img{\r\n            margin-top: 1em;\r\n            margin-bottom: -1em;\r\n        }\r\n\r\n        figure{\r\n            margin: 0;\r\n        }\r\n        \r\n        figcaption {\r\n            margin-top: 1em;\r\n        }\r\n        \r\n    }\r\n\r\n    .projectContentContainer {\r\n        padding: 3em 1em;\r\n        padding-right: 3.5em;\r\n    }\r\n\r\n    .slideInFromRight {\r\n        left: 5px;\r\n    }\r\n\r\n    .footer {\r\n        width: 100vw;\r\n    }\r\n\r\n    .link {\r\n        $self: &;\r\n        &__line {\r\n            &:after {\r\n                animation: animation-line-looped 1.5s forwards;\r\n                // animation-duration: 3s;\r\n                animation-timing-function: linear;\r\n                animation-iteration-count: infinite;\r\n            }\r\n        }\r\n\r\n        &__arrow {\r\n            span {\r\n                &:after {\r\n                animation: animation-arrow-looped;\r\n                // animation-delay: 1s;\r\n                animation-duration: 1.5s;\r\n                animation-timing-function: linear;\r\n                animation-iteration-count: infinite;\r\n                }\r\n            }\r\n        }\r\n    \r\n    }\r\n    @keyframes animation-line-looped {\r\n        0% {\r\n          left: 140px;\r\n        }\r\n\r\n        70%{\r\n            left: 0;\r\n        }\r\n      \r\n        100% {\r\n          left: -30px;\r\n        }\r\n      }\r\n\r\n    @keyframes animation-arrow-looped {\r\n        0% {\r\n          width: 0;\r\n        }\r\n        \r\n        70% {\r\n            width: 0;\r\n        }\r\n\r\n        100% {\r\n          width: 100%;\r\n        }\r\n      }\r\n    \r\n}\r\n\r\n@media (max-height: 700px) {\r\n\r\n    .left {\r\n        // padding: 2em 3em;\r\n    }\r\n\r\n    .link{\r\n\r\n\r\n        transform: rotate(-90deg) translate3d(80px, -80px, 0);\r\n\r\n\r\n        &__line{\r\n            width: 60px;\r\n        }\r\n    }\r\n    .circleContainer {\r\n        // margin-left: -10em;\r\n    }\r\n    // .circle {\r\n    //     width: 10em;\r\n    // height: 10em;\r\n    \r\n    // }\r\n}\r\n\r\n@media (max-height: 500px) {\r\n    .link {\r\n        flex-wrap: wrap;\r\n        transform: rotate(-90deg) translate3d(45px, -43px, 0);\r\n        // background-color: red;\r\n        width: 120px;\r\n        padding-left: 10px;\r\n        // width: min-content;\r\n        &>span:last-child{\r\n            width: 50%;\r\n            margin-top: 1em;\r\n            margin-left: 1em;\r\n        }   \r\n    }\r\n\r\n    .projectIndex {\r\n        height:75vh;\r\n    }\r\n\r\n    .projectIndexTable {\r\n    }\r\n\r\n    .projectIndexSlideIn {\r\n        top: 25%;\r\n    }\r\n\r\n    .circle {\r\n        width: 10em;\r\n    height: 10em;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/content/loadAboutTab.js":
/*!*************************************!*\
  !*** ./src/content/loadAboutTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");


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
    cv.textContent = "taole.chen@protonmail.com";

    const insta = document.createElement('a');
    insta.setAttribute('href', 'https://www.instagram.com/taole.chen/');
    insta.textContent = 'Instagram';
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('links');
    linksContainer.append(cv, insta);


    const about0 = document.createElement('p');
    about0.innerHTML = 
        '<br>I am currently open for new projects. If you\'re looking to collaborate, please feel free to <a href="#" class="contactCall">get in touch!</a><br>';
    const about1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "I am a multi-disciplinary designer/software developer with a strong focus on computational geometry and fabrication. Previously, I have worked at international architectural practices, most notably Zaha Hadid Architects in London, developing bespoke design solutions and project-specific software tools. I have also collaborated with smaller practices in architecture and fabrication as an independent consultant to improve/establish computational workflow integration.");
    const intro2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p',
        "I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. After getting more and more involved with the development side and the exciting possibilites of marrying design with computation, I decided to pursue continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning."); 

    abtContainer.append(linksContainer, about0, about1, intro2);
    const biographyTitle = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('h3', 
        "Biography");

    const bio0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "Growing up between cultures and still following a globe-trotting lifetyle in adulthood (Austria, China, US, UK and counting), my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm.");
    const bio2 = document.createElement('p');
        bio2.innerHTML = 'I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don\'t hesitate to <a href="#" class="contactCall">drop me a message!</a>';
    const bio1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('p', 
        "I am fascinated by the concept of the Renaissance Man and I enjoy indulging in the pursuit of diverging interests in my free time. My origins are in the fine arts. Having painted, drawn and sculpted all my childhood, I was originally planning to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. I have not given up my passion in the arts and I still practice whenever I can. My hope is that some day I can find a happy, amalgamating medium between all my interests and create something novel and meaningful.");
        
    abtContainer.append(biographyTitle, document.createElement('hr'), bio0, bio2, bio1);
    aboutTab.append(leftEdge, abtContainer);
    parent.appendChild(aboutTab);

    return aboutTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);

/***/ }),

/***/ "./src/content/loadContactTab.js":
/*!***************************************!*\
  !*** ./src/content/loadContactTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _assets_logo_insta_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo_insta.svg */ "./src/assets/logo_insta.svg");
/* harmony import */ var _assets_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo_linkedin.svg */ "./src/assets/logo_linkedin.svg");
/* harmony import */ var _assets_logo_cv_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo_cv.svg */ "./src/assets/logo_cv.svg");






const loadContactTab = (parent) => {
    const contactTab = document.createElement('div');
    contactTab.classList.add('contact');

    const heading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('h1', 'Contact');
    const email = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_0__.createElementText)('h2', 'taole.chen@protonmail.com');

    const linkContainer = document.createElement('div');
    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/taole-chen-1166b25a/')
    const img_linkedin = new Image();
    img_linkedin.src = _assets_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__;
    linkedin.appendChild(img_linkedin);

    const insta = document.createElement('a');
    insta.setAttribute('href', 'https://www.instagram.com/taole.chen/')
    const img_insta = new Image();
    img_insta.src = _assets_logo_insta_svg__WEBPACK_IMPORTED_MODULE_1__;
    insta.appendChild(img_insta);

    const cv = document.createElement('a');
    cv.setAttribute('href', '#');
    const img_cv = new Image();
    img_cv.src = _assets_logo_cv_svg__WEBPACK_IMPORTED_MODULE_3__;
    cv.appendChild(img_cv);

    linkContainer.append(linkedin, insta, cv);


    const bottomEdge = document.createElement('div');
    bottomEdge.classList.add('bottomEdge');
    bottomEdge.textContent = 'close'

    contactTab.append(heading, email, linkContainer, bottomEdge);


    parent.appendChild(contactTab);

    return contactTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);

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

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('indexTableContainer');
    const indexTable = document.createElement("table");
    indexTable.classList.add('projectIndexTable');

    tableContainer.appendChild(indexTable);

    indexTab.append(topedge, filterContainer, tableContainer);
    
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
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _loadLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadLogo */ "./src/content/loadLogo.js");
/* harmony import */ var _loadProjectArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadProjectArrow */ "./src/content/loadProjectArrow.js");





const loadLeftMain = (parent) => {
    const main = document.createElement('main');
    main.classList.add("mainContainer", "left");
    const header = document.createElement('header');
    const svg = (0,_loadLogo__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
    
    const banner = document.createElement('div');
    banner.classList.add('logo', 'contactCall');
    // const myName = document.createElement('h1');
    // myName.textContent = 'Taole Chen';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'design | code | art';

    banner.append(svg, subtitle);
    const intro = document.createElement('p');

    const content = document.createElement('div');
    intro.textContent = "I am a multi-disciplinary designer and developer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science. ";

    const btn_profile = document.createElement('div');
    btn_profile.id = 'btn_profile';
    const profileText = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('div', "Full Profile");   
    btn_profile.appendChild(profileText);

    const returnArrow = (0,_loadReturnArrow__WEBPACK_IMPORTED_MODULE_0__["default"])(btn_profile);

   
    header.append(intro, btn_profile);


    

    main.append(banner, header);
    const btn_index = (0,_loadProjectArrow__WEBPACK_IMPORTED_MODULE_3__["default"])(main);
    parent.appendChild(main);

    
    return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLeftMain);

/***/ }),

/***/ "./src/content/loadLogo.js":
/*!*********************************!*\
  !*** ./src/content/loadLogo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
{/* <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 564 127" xml:space="preserve">
<path id="X" d="M53,1.2v16.7H36.2v108.3h-17V17.8H0V1.2H53z"/>
<path id="XMLID_17_" d="M96.6,126.1l-2.7-26.9H74.1l-2.7,26.9H53.9l13.8-125h32.6l13.8,125H96.6z M75.7,82.6h16.7l-4.1-40.8L86,20.2
	h-4.4l-1.9,21.6L75.7,82.6z"/>
<path id="XMLID_14_" d="M176.3,1.2v125h-52.4V1.2H176.3z M140.9,109.5h18.4V17.8h-18.4V109.5z"/>
<path id="XMLID_12_" d="M189.5,1.2h17v108.3h25.7v16.7h-42.7V1.2z"/>
<path id="XMLID_10_" d="M257.9,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H257.9z"/>
<path id="XMLID_8_" d="M370.4,42.5l-17,0V17.8h-16.7v91.6h16.7V81.6l17-0.1v44.6h-50.7V1.2h50.7V42.5z"/>
<path id="XMLID_6_" d="M415.6,1.2h17v125h-17V71.4l-17.3,0v54.7h-17V1.2h17v53.3l17.3-0.1V1.2z"/>
<path id="XMLID_4_" d="M464.8,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H464.8z"/>
<path id="XMLID_2_" d="M519.9,35.2l-1.5-12.6h-0.7v103.5h-17V1.2H529l14.8,89.9l1.5,12.6h0.7V1.2l17,0v124.9l-27.9,0L519.9,35.2z"/>
</svg> */}

{/* <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 564 127" xml:space="preserve">
</svg> */}

const loadLogo = (parent) => {
    // variable for the namespace 
    const svgns = "http://www.w3.org/2000/svg";

    let shape = document.createElementNS(svgns, 'svg');
    shape.setAttribute("x", "-5");
    shape.setAttribute("y", "2px");
    shape.setAttribute("viewBox", "0 0 560 127");
    shape.setAttribute("fill", "#5cceee");

    const p0 = document.createElementNS(svgns, 'path');
    p0.setAttribute('d', "M53,1.2v16.7H36.2v108.3h-17V17.8H0V1.2H53z");

    const p1 = document.createElementNS(svgns, 'path');
    p1.setAttribute('d', "M96.6,126.1l-2.7-26.9H74.1l-2.7,26.9H53.9l13.8-125h32.6l13.8,125H96.6z M75.7,82.6h16.7l-4.1-40.8L86,20.2h-4.4l-1.9,21.6L75.7,82.6z");

    const p2 = document.createElementNS(svgns, 'path');
    p2.setAttribute('d', "M176.3,1.2v125h-52.4V1.2H176.3z M140.9,109.5h18.4V17.8h-18.4V109.5z");

    const p3 = document.createElementNS(svgns, 'path');
    p3.setAttribute('d', "M189.5,1.2h17v108.3h25.7v16.7h-42.7V1.2z");

    const p4 = document.createElementNS(svgns, 'path');
    p4.setAttribute('d', "M257.9,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H257.9z");

    const p5 = document.createElementNS(svgns, 'path');
    p5.setAttribute('d', "M370.4,42.5l-17,0V17.8h-16.7v91.6h16.7V81.6l17-0.1v44.6h-50.7V1.2h50.7V42.5z");

    const p6 = document.createElementNS(svgns, 'path');
    p6.setAttribute('d', "M415.6,1.2h17v125h-17V71.4l-17.3,0v54.7h-17V1.2h17v53.3l17.3-0.1V1.2z");

    const p7 = document.createElementNS(svgns, 'path');
    p7.setAttribute('d', "M464.8,71.2v38.3h25v16.7h-42V1.2h42l-0.5,16.7h-24.5v36.7h18.4l-0.9,16.7H464.8z");

    const p8 = document.createElementNS(svgns, 'path');
    p8.setAttribute('d', "M519.9,35.2l-1.5-12.6h-0.7v103.5h-17V1.2H529l14.8,89.9l1.5,12.6h0.7V1.2l17,0v124.9l-27.9,0L519.9,35.2z");

    shape.append(p0,p1,p2,p3,p4,p5,p6,p7,p8);
    parent.appendChild(shape);

    return shape
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLogo);

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
// import profile00 from '../assets/profilePic00.jpg';

const loadRightMain = (parent) => {
    const rightContainer = document.createElement('main');
    rightContainer.classList.add("mainContainer", "right");


    const background = document.createElement('div');
    background.classList.add('background');
    // background.src = profile00;

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
    rightContainer.append(circleContainer, background);

    parent.appendChild(rightContainer);

    return rightContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRightMain);

/***/ }),

/***/ "./src/projects/proj_aag.js":
/*!**********************************!*\
  !*** ./src/projects/proj_aag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _assets_aag_aag_cover_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/aag/aag_cover.jpg */ "./src/assets/aag/aag_cover.jpg");
/* harmony import */ var _assets_aag_diagram_process_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/aag/diagram_process.png */ "./src/assets/aag/diagram_process.png");
/* harmony import */ var _assets_aag_tests_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/aag/tests.jpg */ "./src/assets/aag/tests.jpg");
/* harmony import */ var _assets_aag_workshop00_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/aag/workshop00.jpg */ "./src/assets/aag/workshop00.jpg");
/* harmony import */ var _assets_aag_workshop01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/aag/workshop01.jpg */ "./src/assets/aag/workshop01.jpg");
/* harmony import */ var _assets_aag_exhibition00_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/aag/exhibition00.jpg */ "./src/assets/aag/exhibition00.jpg");
/* harmony import */ var _assets_aag_exhibition01_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/aag/exhibition01.jpg */ "./src/assets/aag/exhibition01.jpg");



//media








const aag = () => {
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project(
        "Formwork-Free and Mortar-Free Shell Assembly", 
        2018, 
        "Gothenburg Sweden");

    proj.addCategory("design");
    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("fabrication");
    proj.addCategory("code");



    const ti = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const introheading = document.createElement("h2");
    introheading.textContent = "Introduction";
    const img_cover = new Image();
    img_cover.src = _assets_aag_aag_cover_jpg__WEBPACK_IMPORTED_MODULE_2__;
    //INTRO
    const intro1 = document.createElement("p");
    intro1.textContent = "Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018.";
    const intro2 = document.createElement("p");
    intro2.textContent = "The objective was to demonstrate to students the workings and benefits of the computational design paradigm that allows seamless integration between design, fabrication and assembly in settings where many complex constraints come together, thus making it unsuitable for conventional, analog design methodologies. Pedagogically, the students experienced it firsthand by designing funicular shell structures that hold together without formwork assembly and mortar through a parametric model that embeds fabrication data, subsequently sending their design elements to a robotic arm for hotwire fabrication. This results in a tight feedback loop where students were able to see the effects of their design decisions in a real-world prototype with a minimal delay and adapt their design in the next iteration."; 

    const vid_fab = document.createElement('div');
    vid_fab.classList.add('projectVideoContainer');
    vid_fab.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/792684368?h=bf02f19b1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="AAG - Shells - Fabrication Clip"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

    //Features
    const featuresHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h2", 'Features');
    const features = document.createElement("ul");
    const feat1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Bespoke Grasshopper plugin providing functionality for the creation of shell segments ready for fabrication');
    const feat2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Integrates SpatialSlur, a geometric data manipulation library');
    const feat3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Shell structural evaluation implementing thrust network analysis on half-edge mesh structures');
    const feat4 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Integration with custom-made robotic hotwire-cutter');
    features.append(feat1, feat2,feat3, feat4);
    //Technologies
    const techHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'C#');
    const tech2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    const tech3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'SpatialSlur');
    const tech4 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Half-edge mesh structure to faciliate geometric operations and force simulation');
    tech.append(tech1, tech2, tech3,tech4);


    const img_process = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_diagram_process_png__WEBPACK_IMPORTED_MODULE_3__, 'Process diagram');
    const img_tests = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_tests_jpg__WEBPACK_IMPORTED_MODULE_4__, "Small scale test prints of different interlock designs")
    const img_ws0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_workshop00_jpg__WEBPACK_IMPORTED_MODULE_5__, "Class tutorials to introduce tools.")
    const img_ws1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_workshop01_jpg__WEBPACK_IMPORTED_MODULE_6__, "Robot workshop for the students")
    const img_exhibit0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_exhibition00_jpg__WEBPACK_IMPORTED_MODULE_7__, "Our spot in the final exhibition")
    const img_exhibit1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_aag_exhibition01_jpg__WEBPACK_IMPORTED_MODULE_8__, "Final exhibition space")

    proj.pushContents(ti, img_cover, introheading, intro1, img_ws0, img_ws1, intro2, vid_fab, img_exhibit0, img_exhibit1,
        featuresHeading, features, img_process, img_tests, techHeading, tech);

    return proj;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aag);

/***/ }),

/***/ "./src/projects/proj_drones.js":
/*!*************************************!*\
  !*** ./src/projects/proj_drones.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/lbd/HiveMindClasses.jpg */ "./src/assets/lbd/HiveMindClasses.jpg");



//media


const drones = () => {
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project("Learning-Based Design", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Implementing a Learning-Based Change Detection Framework for a Self-Corrective Behavioural Model in Aerial Additive Manufacturing | Imperial College Master Thesis";


    const title = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const cover = new Image();

    const introHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Learning-Based Design was my master thesis for the MSc in Computing at Imperial College London. Due to the confidential nature of the project, I am not able to publish any concrete results, however, I will include here some general information and technologies used. If there is interest, please feel free to contact me for further discussion while avoiding any sensitive topics :).');

    const team = document.createElement('div');
    team.innerHTML = '<strong>Team:</strong> Taole Chen, Yusuf Kaya, Lachlan Orr<br><strong>Advisor:</strong>Dr.   Basaran Bahadir Kocer<br>In collaboration with the <a href = "https://www.imperial.ac.uk/aeronautics/about/">Imperial Aeronautics Department</a> and <a href="https://www.empa.ch/web/empa/research-areas">EMPA</a>';

    proj.pushContents(title, subtitle, year, location, cover, introHeading, intro, team);

    const summaryHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Summary");
    // const neighsubHead = createElementText('h4', 'The Building as a Network')
    const sum0 = document.createElement('p');
    sum0.innerHTML = 
        'The project situates design in the context of Industry 4.0 and the radically new discipline of <a href="http://www.aerial-abm.com/">Aerial Additive Building Manufacturing</a>. With the proliferation of digital technologies in the AEC industry, the future trajectory of the industry is pointing towards autonomous, closed-loop robotic systems, creating the need to develop design methodologies that can engage with machine-centric processes.';
    const sum1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Aerial Additive Manufacturing (AAM) is an early-stage research that is developing a pioneering framework for multi-agent additive manufacturing with Unmanned Aerial vehicles (UAV). Currently, AAM does not have a design-to-fabrication workflow nor a dedicated design framework to interface with due to its infancy. To address this gap, my research aimed to develop the first stages of a design interface for multi-agent AAM. More specifically, a realtime, in-situ change detection and correction framework with a machine learning approach based on point clouds was developed and subsequently validated through physical experiments.');

    proj.pushContents(summaryHead, sum0, sum1);

    const featuresHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Features');
    const featlist = document.createElement('ul');
    const feat0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Behavioural Model for AAM using point clouds as a data medium. Point clouds have the advantage of being an integral part of drone vision, so no additional translation is required between design and fabrication.')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
        'C# Wrapper for the popular C++ <a href="https://pointclouds.org/">Point Cloud Library</a> (pcl), a 2D/3D processing library that is popular among robotic development communities and integrates with the ROS framework.';
    const feat2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Machine Learning model implementing a custom random forest classifier with JSON export for ease of distribution. Other classifiers, such as a neural network, were also implemented, though not used for the final experiment.');
    const feat3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Tensor data object implementation in Grasshopper using Tensorflow.NET\'s Numpy, allowing multidimensional matrix operations in the GH environment.');
    const feat4 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Stand-alone core C# library with testing that can be ported to other applications.');


    featlist.append(feat0, feat1, feat2, feat3, feat4);
    proj.pushContents(featuresHeading, featlist);

    const archheading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Architecture');
    const arch0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 'The code for the paper was implemented as a Grasshopper plug-in library. The core library is written in C# and care was taken to maintain a hexagonal architecture for future adaptability. Functionality for point clouds and machine learning is added with the adapter pattern so it can be replaced with updated modules. A controller library named HiveMindGH establishes a connection between the core library and Grasshopper’s visual interface.')
    
    const img_classDiagram = new Image();
    img_classDiagram.src = _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__;

    proj.pushContents(archheading, arch0, img_classDiagram);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drones);

/***/ }),

/***/ "./src/projects/proj_matnet.js":
/*!*************************************!*\
  !*** ./src/projects/proj_matnet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _assets_matnet_render_facade_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/matnet/render_facade.jpg */ "./src/assets/matnet/render_facade.jpg");
/* harmony import */ var _assets_matnet_render_interior_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/matnet/render_interior.jpg */ "./src/assets/matnet/render_interior.jpg");
/* harmony import */ var _assets_matnet_anim_zoomScales_00_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/matnet/anim_zoomScales_00.gif */ "./src/assets/matnet/anim_zoomScales_00.gif");
/* harmony import */ var _assets_matnet_anim_growth_all_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/matnet/anim_growth_all.gif */ "./src/assets/matnet/anim_growth_all.gif");
/* harmony import */ var _assets_matnet_anim_growth_turntable_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/matnet/anim_growth_turntable.gif */ "./src/assets/matnet/anim_growth_turntable.gif");
/* harmony import */ var _assets_matnet_unit_00_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/matnet/unit_00.jpg */ "./src/assets/matnet/unit_00.jpg");
/* harmony import */ var _assets_matnet_unit_layout_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/matnet/unit_layout.jpg */ "./src/assets/matnet/unit_layout.jpg");
/* harmony import */ var _assets_matnet_anim_graphToArch_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/matnet/anim_graphToArch.gif */ "./src/assets/matnet/anim_graphToArch.gif");



//media









const matnet = () => {
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project("Material Networks", 2018, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");
    proj.addCategory("fabrication");

    proj.Subtitle = "Mass-Customized Housing for Cohesive Communities. AADRL Master Thesis"


    const title = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const img_cover = new Image();
    img_cover.src = _assets_matnet_render_facade_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const introHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Material Networks is the culmination of my research at the Architectural Association - Design Research Lab. The project engages with the rapid digitization of the built environment and looks at how design agency can adapt to a fully automated, computer-driven world while bringing the human element to the forefront of the discourse. Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.');

    const team = document.createElement('p');
    team.innerHTML = 'Design Team: Taole Chen, Suchart (Bon) Ouypornchaisakul, Jeffrey Widjaja<br>Tutors: Shajay Bhooshan, Alicia Nahmad<br><a href="https://drl.aaschool.ac.uk/">AADRL</a>';

    const img_interior = new Image();
    img_interior.src = _assets_matnet_render_interior_jpg__WEBPACK_IMPORTED_MODULE_3__;
    proj.pushContents(title, subtitle, year, location, img_cover, introHeading, intro, team, img_interior);

    //level 0 neighborhood
    const neighHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Level 0 Neighborhood");
    const neighsubHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 'The Building as a Network')
    const neigh0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        "Co-opting techniques from complex network analysis, at the neighborhood level, the research looks into developing an operational tool for extracting meaningful spatial relationship from the social network of a community.");
    const neigh1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The social relationships of a given community are captured in a relational roster in the form of an encoded data matrix, allowing computers to easily read and process the information. The data matrix is subsequently used to construct a network graph. The graph is useful because it captures multi-scalar information in a single, cohesive data structure, opening up computational ways of engaging with the information.');
    const neigh2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The graph is given agency by deploying a rule-based growth algorithm on the project site. A path-finding logic is used to generate schemes, with specific rule determining the resulting character of the neighborhood while ensuring the computed spatial relationships are maintained. The decoupling of formal agency from the hands of the human designer signifies a crucial step towards a fully autonomous construction framework. Yet, with the rule-based system, designers are still given control without the possibility to resort to the sculpting of form, thus prioritizing a logic-driven approach, rather than aesthetics.');

    const vid_zoomScales = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_zoomScales_00_gif__WEBPACK_IMPORTED_MODULE_4__);
    const vid_growth_all = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_growth_all_gif__WEBPACK_IMPORTED_MODULE_5__);
    const vid_growth_turntable = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_growth_turntable_gif__WEBPACK_IMPORTED_MODULE_6__);

    proj.pushContents(neighHead, neighsubHead, neigh0, neigh1, vid_zoomScales, neigh2, vid_growth_all, vid_growth_turntable);

    //level 1 home
    const unitHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Level 1 Home");
    const unitSubHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 
        'Home Is What You Do')
    const unit0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');
    const unit1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.');
    const unit2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.');

    const img_unitExample = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_unit_00_jpg__WEBPACK_IMPORTED_MODULE_7__);
    const img_unitLayout = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_unit_layout_jpg__WEBPACK_IMPORTED_MODULE_8__);
    const vid_graphToArch = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_matnet_anim_graphToArch_gif__WEBPACK_IMPORTED_MODULE_9__);

    proj.pushContents(unitHead, unitSubHead, img_unitExample, unit0, img_unitLayout, unit1, unit2, vid_graphToArch);

    //level 2 tectonics
    const tectoHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', "Level 2 Tectonics");
    const tectoSubHead = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h4', 'Home Is What You Do')
    const tecto0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Additive Manufacturing was identified as the primary candidate for the construction system, as it offers the ability to manufacture free-form geometries while providing cost and time savings, and increased onsite safety for automated systems. A robotics-first approach was needed for the construction system to integrate into the overall framework.');

    const tecto1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'An onsite, segmented approach with multi-material printing was envisioned, as mono-material, continuous printing is argued to be impractical and undesirable for architectural applications, because it does not account for the multi-systemic nature of buildings. Autonomous, robotic units are deployed onsite ');


    const tecto2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
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

/***/ "./src/projects/proj_myWebsite.js":
/*!****************************************!*\
  !*** ./src/projects/proj_myWebsite.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");



const myWebsite = () => {
    let project = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project(
        "Personal Portfolio Website",
        2023,
        'Earth'
    );

    project.Subtitle = "This one";

    project.addCategory("design");
    project.addCategory("code");

    const ti = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', project.Title);
    const subTi = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', project.Subtitle);

    const year = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + project.Year);
    const location = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + project.Location);
    const github = document.createElement('h5');
    github.innerHTML = '<a href="https://github.com/Abstractmachina/myWebsite">Github</a>'
    //intro
    const introheading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Introduction');
    const intro = document.createElement('p');
    intro.textContent = 'This website was built completely from scratch by me to showcase the projects I have done over the years. It served as a great project to put everything I have learned about web development into practice. Please feel free to browse around and I am happy to receive any and all feedback.'
    //features
    const featuresHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Features');
    const features = document.createElement("ul");
    const feat1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'MVC architecture allows for future re-use of the core logic in different graphical environments.');
    const feat2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Vanilla JS only to keep the project lightweight and because the goal was to practice my JS skills, rather than my knowledge on libraries');
    const feat3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Unit testing for core classes');
    const feat4 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Streamlined method for adding more projects as packaged objects in the future to improve maintainability');
    const feat5 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Projects are searchable by category to ease navigation');
    const feat6 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("li", 'Responsive design');
    features.append(feat1, feat2,feat3, feat4, feat5, feat6);
    //technologies
    const techHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'HTML, SCSS, JS');
    const tech2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Jest Unit Testing');
    const tech3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'Webpack asset bundling');
    tech.append(tech1, tech2, tech3);

    //development
    const devHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 'Development');
    const dev = document.createElement('ul');
    const dev1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 'blog section');
    dev.append(dev1);


    project.pushContents(
        ti, subTi, year, location, github, 
        introheading, intro, 
        featuresHeading, features, 
        techHeading, tech,
        devHeading, dev);

    return project;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myWebsite);

/***/ }),

/***/ "./src/projects/proj_nlp4ms.js":
/*!*************************************!*\
  !*** ./src/projects/proj_nlp4ms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _assets_nlp4ms_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/nlp4ms/home.png */ "./src/assets/nlp4ms/home.png");
/* harmony import */ var _assets_nlp4ms_gui_freetext_00_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/nlp4ms/gui_freetext_00.jpg */ "./src/assets/nlp4ms/gui_freetext_00.jpg");
/* harmony import */ var _assets_nlp4ms_gui_main_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/nlp4ms/gui_main.jpg */ "./src/assets/nlp4ms/gui_main.jpg");
/* harmony import */ var _assets_nlp4ms_gui_sampleAnalysis_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/nlp4ms/gui_sampleAnalysis.jpg */ "./src/assets/nlp4ms/gui_sampleAnalysis.jpg");
/* harmony import */ var _assets_nlp4ms_gui_userAnalysis_01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/nlp4ms/gui_userAnalysis_01.jpg */ "./src/assets/nlp4ms/gui_userAnalysis_01.jpg");
/* harmony import */ var _assets_nlp4ms_classDiagram_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/nlp4ms/classDiagram.jpg */ "./src/assets/nlp4ms/classDiagram.jpg");



//media







const nlp4ms = () => {
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project("NLP for Multiple Sclerosis", 2022, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("code");
    proj.addCategory("AI");

    proj.Subtitle = "Diagnosis Tool for Researchers working on Multiple Sclerosis";


    const title = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const git = document.createElement('h5');
    git.innerHTML = '<a href=https://github.com/Abstractmachina/icc_NLP4MS>Github</a>'
    //const cover = new Image();

    const introHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'Natural Language Processing for the Diagnosis of Multiple Sclerosis was a group research project done as part of the software engineering design course at Imperial. The app is designed to be used by researchers at the UK MS Register, where a large collection of unprompted free-text data (patient reported outcomes) was amassed over the years, but there has been no effective tool to process and take advantage of that information to date. Our app sought to provide a simple interface to extract meaningful free-text data in the medical research for the diagnosis of MS. There was no prior code base, as our group was the first to collaborate with the MS Register, however, the intention is to continue the development in subsequent years.');

    const team = document.createElement('p');
    team.innerHTML = 
        '<strong>Team:</strong> Matt Barker, Colin Taylor, Taole Chen, Kaixuan Khoo, Ronan Patrick, Gus Levinson, Jack Cheng<br><strong>Supervisors:</strong> Chiraag Lala, Rod Middleton, Richard Nicholas<br>In collaboration with the <a href = "https://ukmsregister.org/">UK MS Register</a>';

    proj.pushContents(title, subtitle, year, location, git, introHeading, intro, team);

    const featuresHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Features');

    const featlist = document.createElement('ul');
    const feat0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Free-text analyzer for simple text processing, looking at frequency of terms and phrases, n-grams to identify trends and key terminologies used by patients')
    const feat1 = document.createElement('li');
    feat1.innerHTML = 
    'Logistic regression classifier with bag-of-words model for predicting MS in patients based on their text prompts.';
    const feat2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Sentiment and Extendend Disability Status Analysis to identify trends in individual users and dempgraphics. Implementation of the VADER sentiment library.');
    const feat3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Custom CSV import capabalities, giving researchers more freedom in adapting the app to specific needs.');
    const feat4 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'Hexagonal Architecture, allowing the swapping of modules in the future, thus improving re-useability of the code base');
    const feat5 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
    'All modules limited to the NLTK platform, as code is hosted on secure servers of the MS Register.');
    featlist.append(feat0, feat1, feat2, feat3, feat4);
    
    const img_home = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_home_png__WEBPACK_IMPORTED_MODULE_2__, 'App Home Page');
    const img_gui_freetxt = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_freetext_00_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Free text analysis page');
    const img_guiMain = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_main_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Main menu');
    const img_SampleSentiment = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_sampleAnalysis_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Example of generated trend graphs for a group of patients');
    const img_guiUser = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_gui_userAnalysis_01_jpg__WEBPACK_IMPORTED_MODULE_6__, 'User sentiment analysis page');

  
    proj.pushContents(featuresHeading, featlist, img_home, img_guiMain, img_gui_freetxt, img_SampleSentiment, img_guiUser);
    
    const techHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)("h3", 'Technologies');
    const techlist = document.createElement('ul');
    const tech0 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Python back-end')
    const tech1 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'tkinter front-end');
    const tech2 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'VADER sentiment analysis implementation');
    const tech3 = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('li', 
        'Sci-kit Learn text classification implementation');
    const img_classDiagram = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createFigure)(_assets_nlp4ms_classDiagram_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Class Diagram');
    techlist.append( tech0, tech1, tech2, tech3);
    proj.pushContents(techHeading, techlist, img_classDiagram);

    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nlp4ms);

/***/ }),

/***/ "./src/projects/proj_organic.js":
/*!**************************************!*\
  !*** ./src/projects/proj_organic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/util */ "./src/scripts/util.js");
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
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project("Organic Code Apparel", 2022, "Jeju, South Korea");

    proj.addCategory("art");
    proj.addCategory("photography");

    proj.Subtitle = "Product Shoot for Bralette and Top Series";


    const title = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h1', proj.Title);
    const subtitle = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h2', proj.Subtitle);
    const year = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Year: ' + proj.Year);
    const location = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h5', 'Project Location: ' + proj.Location);

    const brandLink = document.createElement('h5');
    brandLink.innerHTML = '<a href=https://www.instagram.com/organic_code_/>Brand Link</a>'
    const img_cover = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_organic_oc_yoga_4398_jpg__WEBPACK_IMPORTED_MODULE_2__);

    const introHeading = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('h3', 
        "Introduction");
    const intro = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createElementText)('p', 
        'I was approached by my friend to help her brand do a product shoot for her latest series featuring bralets and tops. Organic Code specializes in hand-made apparel using naturally-dyed 100% organic cotton, made locally on Jeju Island. ');

    const credit = document.createElement('div');
    credit.innerHTML = 
        '<strong>Models:</strong> <a href="https://www.instagram.com/esngmn/">Seungmin Lee</a>, <a href="https://www.instagram.com/llamobelen/">Gayoung Lee</a>';

    proj.pushContents(title, subtitle, year, location, brandLink, img_cover, introHeading, intro, credit);

    const images = (0,_scripts_util__WEBPACK_IMPORTED_MODULE_1__.createImages)(_assets_organic_oc_bra2_4531_jpg__WEBPACK_IMPORTED_MODULE_6__,_assets_organic_oc_bra1_3875_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_organic_oc_bra1_3907_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_organic_oc_bra1_4005_jpg__WEBPACK_IMPORTED_MODULE_5__,_assets_organic_oc_bra3_4084_jpg__WEBPACK_IMPORTED_MODULE_7__,_assets_organic_oc_top3_4800_jpg__WEBPACK_IMPORTED_MODULE_8__,_assets_organic_oc_yoga_4167_jpg__WEBPACK_IMPORTED_MODULE_9__,_assets_organic_oc_yoga_4406_jpg__WEBPACK_IMPORTED_MODULE_10__,_assets_organic_oc_yoga_4458_jpg__WEBPACK_IMPORTED_MODULE_11__,_assets_organic_oc_yoga_4512_jpg__WEBPACK_IMPORTED_MODULE_12__,_assets_organic_oc_yoga_5001_jpg__WEBPACK_IMPORTED_MODULE_13__,_assets_organic_oc_yoga_4979_jpg__WEBPACK_IMPORTED_MODULE_14__,_assets_organic_oc_yoga_5056_jpg__WEBPACK_IMPORTED_MODULE_15__,_assets_organic_oc_yoga_5069_jpg__WEBPACK_IMPORTED_MODULE_16__);
    
    images.forEach(img => {proj.pushContent(img)});
    return proj;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (organic);

/***/ }),

/***/ "./src/projects/proj_printFast.js":
/*!****************************************!*\
  !*** ./src/projects/proj_printFast.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Project */ "./src/scripts/Project.js");


const printFast = () => {
    let proj = new _scripts_Project__WEBPACK_IMPORTED_MODULE_0__.Project("Print Fast, Pile High!", 2019, "Copenhagen, Denmark");

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

/***/ "./src/scripts/Controller.js":
/*!***********************************!*\
  !*** ./src/scripts/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/scripts/Model.js");
/* harmony import */ var _GUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI.js */ "./src/scripts/GUI.js");
/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadProjects */ "./src/scripts/loadProjects.js");




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

/***/ "./src/scripts/GUI.js":
/*!****************************!*\
  !*** ./src/scripts/GUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_arrow_projectIndex_base_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/arrow_projectIndex_base.svg */ "./src/assets/arrow_projectIndex_base.svg");
/* harmony import */ var _assets_matnet_fab_05_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/matnet/fab_05.jpg */ "./src/assets/matnet/fab_05.jpg");
/* harmony import */ var _assets_lbd_HiveMindClasses_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/lbd/HiveMindClasses.jpg */ "./src/assets/lbd/HiveMindClasses.jpg");
/* harmony import */ var _assets_barbican_00_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/barbican_00.jpg */ "./src/assets/barbican_00.jpg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
/* harmony import */ var _content_loadAboutTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/loadAboutTab */ "./src/content/loadAboutTab.js");
/* harmony import */ var _content_loadLeftMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/loadLeftMain */ "./src/content/loadLeftMain.js");
/* harmony import */ var _content_loadRightMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/loadRightMain */ "./src/content/loadRightMain.js");
/* harmony import */ var _content_loadFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/loadFooter */ "./src/content/loadFooter.js");
/* harmony import */ var _content_loadProjectTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/loadProjectTab */ "./src/content/loadProjectTab.js");
/* harmony import */ var _content_loadIndexTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/loadIndexTab */ "./src/content/loadIndexTab.js");
/* harmony import */ var _content_loadContactTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../content/loadContactTab */ "./src/content/loadContactTab.js");


















/**
 * View Object for websites. 
 */
class GUI {

    //class names for query selection
    _projectFilterClass = 'projectFilter';
    _indexButtonId = 'projectArrow';

    constructor(projects) {
        this._app = document.querySelector('.root');

        //load elements
        this._leftMain = (0,_content_loadLeftMain__WEBPACK_IMPORTED_MODULE_6__["default"])(this._app);
        this._btn_index = this._leftMain.querySelector('#' + this._indexButtonId);
        this._rightMain = (0,_content_loadRightMain__WEBPACK_IMPORTED_MODULE_7__["default"])(this._app);
        this._footer = (0,_content_loadFooter__WEBPACK_IMPORTED_MODULE_8__["default"])(this._app);
        this._aboutTab = (0,_content_loadAboutTab__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rightMain);
        this._indexTab = (0,_content_loadIndexTab__WEBPACK_IMPORTED_MODULE_10__["default"])(this._app);
        this._prebuildIndexTab(projects);
        this._projectTab = (0,_content_loadProjectTab__WEBPACK_IMPORTED_MODULE_9__["default"])(this._rightMain);
        this._contactCard = (0,_content_loadContactTab__WEBPACK_IMPORTED_MODULE_11__["default"])(this._app);

        //setup bindings
        this._bindProfileButton();
        this._bindExitTabsOnLeftMainClicked();
        this._bindCallIndex();
        this._bindSelAllCheckbox();
        this._bindSelNoneCheckbox();
        this._bindTabLeftEdges();
        this._bindSwipeProjectExit();
        this._bindSwipeAboutExit();
        this._bindCallContactCard();
        this._bindExitContactCard();
        
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

    _bindExitTabsOnLeftMainClicked() {
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
                this.clearAllSelectedProjects();
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

    clearAllSelectedProjects() {
        const projectselections = document.querySelectorAll('.selected');
        for (let i = 0; i < projectselections.length; i++) {
            projectselections[i].classList.remove('selected');
        }
    }

    _bindSwipeProjectExit() {

        const pTab = this._projectTab;
        let touchstartX = 0;
        let touchendX = 0;

        pTab.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        pTab.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchendX > touchstartX) {
                pTab.classList.remove('slideInFromRight');
                this.clearAllSelectedProjects();
            }
        });

    }

    _bindSwipeAboutExit() {

        const aTab = this._aboutTab;
        let touchstartX = 0;
        let touchendX = 0;

        aTab.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        aTab.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchendX > touchstartX) {
                aTab.classList.remove('slideInFromRight');
            }
        });

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

            let {x, y} = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getCenterPos)(spawnElement)

            let {newX, newY} = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getRandomPoint)(x,y, range);

            banner.style.left = newX + 'px';
            banner.style.top = newY + 'px';

            this._app.append(banner);

            return banner;
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

    _bindCallContactCard() {
        const callElements = document.querySelectorAll('.contactCall');
        console.log(callElements);

        for (let i = 0; i < callElements.length; i++) {
            let e = callElements[i];
            e.addEventListener('click', () => {
                const contactCard = document.querySelector('.contact');
                contactCard.classList.add('slideDown')
            });
        }
    }

    _bindExitContactCard() {
        const card = this._contactCard;
        let touchstartX = 0;
        let touchendX = 0;

        card.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        card.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchendX > touchstartX) {
                card.classList.remove('slideDown');
            }
        });

        const close = card.querySelector('.bottomEdge');
        close.addEventListener('click', () => {
            card.classList.remove('slideDown');
        });
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

/***/ "./src/scripts/LinkedList.js":
/*!***********************************!*\
  !*** ./src/scripts/LinkedList.js ***!
  \***********************************/
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

/***/ "./src/scripts/Model.js":
/*!******************************!*\
  !*** ./src/scripts/Model.js ***!
  \******************************/
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

/***/ "./src/scripts/Project.js":
/*!********************************!*\
  !*** ./src/scripts/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ "./src/scripts/LinkedList.js");


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

/***/ "./src/scripts/loadProjects.js":
/*!*************************************!*\
  !*** ./src/scripts/loadProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects_proj_myWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/proj_myWebsite */ "./src/projects/proj_myWebsite.js");
/* harmony import */ var _projects_proj_printFast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/proj_printFast */ "./src/projects/proj_printFast.js");
/* harmony import */ var _projects_proj_aag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/proj_aag */ "./src/projects/proj_aag.js");
/* harmony import */ var _projects_proj_matnet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/proj_matnet */ "./src/projects/proj_matnet.js");
/* harmony import */ var _projects_proj_drones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/proj_drones */ "./src/projects/proj_drones.js");
/* harmony import */ var _projects_proj_nlp4ms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/proj_nlp4ms */ "./src/projects/proj_nlp4ms.js");
/* harmony import */ var _projects_proj_organic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/proj_organic */ "./src/projects/proj_organic.js");








const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast',  (0,_projects_proj_printFast__WEBPACK_IMPORTED_MODULE_1__["default"])());
    projects.set('aag', (0,_projects_proj_aag__WEBPACK_IMPORTED_MODULE_2__["default"])());
    projects.set('website', (0,_projects_proj_myWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])());
    projects.set('matnet', (0,_projects_proj_matnet__WEBPACK_IMPORTED_MODULE_3__["default"])());
    projects.set('drones', (0,_projects_proj_drones__WEBPACK_IMPORTED_MODULE_4__["default"])());
    projects.set('nlp4ms', (0,_projects_proj_nlp4ms__WEBPACK_IMPORTED_MODULE_5__["default"])());
    projects.set('organic', (0,_projects_proj_organic__WEBPACK_IMPORTED_MODULE_6__["default"])());

    return projects;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProjects);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "createElementText": () => (/* binding */ createElementText),
/* harmony export */   "createFigure": () => (/* binding */ createFigure),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createImages": () => (/* binding */ createImages),
/* harmony export */   "getCenterPos": () => (/* binding */ getCenterPos),
/* harmony export */   "getRandomPoint": () => (/* binding */ getRandomPoint),
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


function getRandomPoint(x,y,range) {
    let x_r = Math.random() * range - range/2;
    let y_r = Math.random() * range - range/2;

    let newX = x + x_r;
    let newY = y+ y_r;

    return {newX, newY};
}

function getCenterPos(element) {
    var position = element.getBoundingClientRect();
        var x = (position.left + position.right)/2;
        var y = (position.top + position.bottom)/2;

        return {x, y};
}


/***/ }),

/***/ "./src/assets/aag/aag_cover.jpg":
/*!**************************************!*\
  !*** ./src/assets/aag/aag_cover.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e5de4973ee720dcf8b2.jpg";

/***/ }),

/***/ "./src/assets/aag/diagram_process.png":
/*!********************************************!*\
  !*** ./src/assets/aag/diagram_process.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c2a262a64cc10579da6.png";

/***/ }),

/***/ "./src/assets/aag/exhibition00.jpg":
/*!*****************************************!*\
  !*** ./src/assets/aag/exhibition00.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a32ce1f1f1911982484d.jpg";

/***/ }),

/***/ "./src/assets/aag/exhibition01.jpg":
/*!*****************************************!*\
  !*** ./src/assets/aag/exhibition01.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c345ce1e6f6e4f0bed6e.jpg";

/***/ }),

/***/ "./src/assets/aag/tests.jpg":
/*!**********************************!*\
  !*** ./src/assets/aag/tests.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "040055d4c606d8260f7f.jpg";

/***/ }),

/***/ "./src/assets/aag/workshop00.jpg":
/*!***************************************!*\
  !*** ./src/assets/aag/workshop00.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "586a58d9588e71403336.jpg";

/***/ }),

/***/ "./src/assets/aag/workshop01.jpg":
/*!***************************************!*\
  !*** ./src/assets/aag/workshop01.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58e06973db1a7a49ec27.jpg";

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

/***/ "./src/assets/logo_cv.svg":
/*!********************************!*\
  !*** ./src/assets/logo_cv.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fa809fe740ceed4b6c.svg";

/***/ }),

/***/ "./src/assets/logo_insta.svg":
/*!***********************************!*\
  !*** ./src/assets/logo_insta.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40b59f9b7a03d2a5c720.svg";

/***/ }),

/***/ "./src/assets/logo_linkedin.svg":
/*!**************************************!*\
  !*** ./src/assets/logo_linkedin.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33a7fe085bc5b2a7e444.svg";

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

/***/ "./src/assets/matnet/render_interior.jpg":
/*!***********************************************!*\
  !*** ./src/assets/matnet/render_interior.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "646ff3b37603747a689a.jpg";

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

/***/ }),

/***/ "./src/assets/profilePic00.JPG":
/*!*************************************!*\
  !*** ./src/assets/profilePic00.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78c59a8191a1dda90e70.JPG";

/***/ }),

/***/ "./src/assets/profilePic01.JPG":
/*!*************************************!*\
  !*** ./src/assets/profilePic01.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47211760691d7aa88d32.JPG";

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
/* harmony import */ var _scripts_Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Controller */ "./src/scripts/Controller.js");








const app = new _scripts_Controller__WEBPACK_IMPORTED_MODULE_4__.Controller();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDcEUyQjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rm1EO0FBQ0E7QUFDWjtBQUNNO0FBQ0E7QUFDQTtBQUNFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvRUFBUztBQUN4Qyx3QkFBd0IsOERBQUc7QUFDM0IsNEJBQTRCLG9FQUFTO0FBQ3JDLDJCQUEyQixpRUFBTTtBQUNqQywyQkFBMkIsaUVBQU07QUFDakMsMkJBQTJCLGlFQUFNO0FBQ2pDLDRCQUE0QixrRUFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ2E7QUFDRjtBQUNWO0FBQ25DO0FBQ2tEO0FBQ2xEO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3MiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3N0eWxlcy9zdHlsZV9hbmltX3Byb2plY3RBcnJvdy5zY3NzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfbWFpbi5zY3NzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfbW9iaWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3M/YjlkYyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3M/MGJiMCIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlX21haW4uc2Nzcz81NDgzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVfbW9iaWxlLnNjc3M/MDEwYSIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRBYm91dFRhYi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkQ29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9jb250ZW50L2xvYWRJbmRleFRhYi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkTGVmdE1haW4uanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZExvZ28uanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZFByb2plY3RBcnJvdy5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkUHJvamVjdFRhYi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvY29udGVudC9sb2FkUmV0dXJuQXJyb3cuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL2NvbnRlbnQvbG9hZFJpZ2h0TWFpbi5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvcHJvamVjdHMvcHJval9hYWcuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3Byb2plY3RzL3Byb2pfZHJvbmVzLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9wcm9qZWN0cy9wcm9qX21hdG5ldC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvcHJvamVjdHMvcHJval9teVdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3Byb2plY3RzL3Byb2pfbmxwNG1zLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9wcm9qZWN0cy9wcm9qX29yZ2FuaWMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3Byb2plY3RzL3Byb2pfcHJpbnRGYXN0LmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zY3JpcHRzL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3NjcmlwdHMvR1VJLmpzIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9zY3JpcHRzL0xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3NjcmlwdHMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3NjcmlwdHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvLi9zcmMvc2NyaXB0cy9sb2FkUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215d2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215d2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21vbm9saXNrX2JsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuLnByb2plY3RGaWx0ZXIgPiBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udGdsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC50Z2wgKyAudGdsLWJ0biB7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10Zy1vbik7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTsgfVxcbiAgICAudGdsICsgLnRnbC1idG46YWZ0ZXIsIC50Z2wgKyAudGdsLWJ0bjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgIGNvbG9yOiAjMGYwZjBmOyB9XFxuICAgIC50Z2wgKyAudGdsLWJ0bjphZnRlciB7XFxuICAgICAgbGVmdDogMTAwJTtcXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pOyB9XFxuICAgIC50Z2wgKyAudGdsLWJ0bjpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRnLW9mZik7IH1cXG4gICAgLnRnbCArIC50Z2wtYnRuOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogIzg4ODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTsgfVxcbiAgICAgIC50Z2wgKyAudGdsLWJ0bjphY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IC0xMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTsgfVxcbiAgLnRnbDpjaGVja2VkICsgLnRnbC1idG4ge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAvKiByZW1vdmUgdGhlIGJvcmRlcidzIGNvbG91ciAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZGQwMDtcXG4gICAgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgICAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IC0xMDAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xcbiAgICAgIGxlZnQ6IDA7IH1cXG4gICAgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWN0aXZlOmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICAgIGxlZnQ6IDEwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3RoZW1lcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlX2FuaW1fY2hlY2tib3hlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksNkJBQTZCO0VBQzdCLDJEQUF3RCxFQUFBOztBQ1A1RDtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFJSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUV0QixnQkFBZ0IsRUFBQTtJQWRwQjtNQWtCUSx5QkFBeUI7TUFDekIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGNEN0JvQixFQUFBO0lDTTVCO01BMEJRLFVBQVU7TUFDVix5QkFBeUIsRUFBQTtJQTNCakM7TUErQlEsT0FBTztNQUNQLDBCQUEwQixFQUFBO0lBaENsQztNQW9DUSxnQkFBZ0I7TUFDaEIsb0JBQW9CLEVBQUE7TUFyQzVCO1FBdUNVLFVBQVU7UUFDVixvQkFBb0IsRUFBQTtFQXhDOUI7SUFnREkseUJBQXlCO0lBQUUsK0JBQUE7SUFDM0IsNkJEdEQyQjtJQ3NEVSx1QkFBQTtJQUNyQyxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7SUFuRDFCO01BeURRLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtJQTFEeEI7TUE4RFEsT0FBTyxFQUFBO0lBOURmO01Ba0VRLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIsU0FBUyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiRjb2xvcl9wYXBlcjogd2hpdGU7XFxyXFxuJGNvbG9yX3JlZ2lzdHJhdGlvbjogIzBmMGYwZjtcXHJcXG4kY29sb3JfYWNjZW50OiByZ2IoMjU1LCAyMjEsIDApO1xcclxcbiRjb2xvcl9hY3RpdmU6IHJnYigyMjksIDIyOSwgMjI5KTtcXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb25vbGlzayBCbGFja1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvbW9ub2xpc2tfYmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbn1cXHJcXG5cXHJcXG4kZm9udF9kZWZhdWx0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnRfc3BlY2lhbDogJ01vbm9saXNrIEJsYWNrJywgc2Fucy1zZXJpZjtcIixcIkBpbXBvcnQgXFxcInRoZW1lc1xcXCI7XFxyXFxuXFxyXFxuLnByb2plY3RGaWx0ZXI+ZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50Z2wge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICsgLnRnbC1idG4ge1xcclxcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIsXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yX3JlZ2lzdHJhdGlvbjtcXHJcXG4gICAgfVxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxyXFxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pO1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb2ZmKTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgIGxlZnQ6IC0xMCU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6Y2hlY2tlZCArIC50Z2wtYnRuIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogcmVtb3ZlIHRoZSBib3JkZXIncyBjb2xvdXIgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRjb2xvcl9hY2NlbnQ7IC8qIGVtdWxhdGUgdGhlIGJvcmRlciAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIsXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlOmFmdGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gICAgICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tb25vbGlza19ibGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbiNwcm9qZWN0QXJyb3cge1xcbiAgbWFyZ2luLXRvcDogYXV0bzsgfVxcblxcbiNwcm9qZWN0QXJyb3c6YWN0aXZlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTsgfVxcbiAgI3Byb2plY3RBcnJvdzphY3RpdmUubGluayB7XFxuICAgIGNvbG9yOiAjZmZkZDAwO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XFxuXFxuLmxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDE1MHB4LCAtMTIwcHgsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubGlua19fYXJyb3cge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgICAubGlua19fYXJyb3cgc3BhbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxNHB4O1xcbiAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJhY2tncm91bmQ6ICNCRUJEQkU7XFxuICAgICAgei1pbmRleDogMjsgfVxcbiAgICAgIC5saW5rX19hcnJvdyBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUzZCg3cHgsIC05cHgsIDApOyB9XFxuICAgICAgLmxpbmtfX2Fycm93IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgICAgIC5saW5rX19hcnJvdyBzcGFuOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDZweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmRkMDA7IH1cXG4gIC5saW5rX19saW5lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgICAubGlua19fbGluZTphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDE0MHB4O1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmRkMDA7IH1cXG4gIC5saW5rX190ZXh0IHtcXG4gICAgY29sb3I6ICM0QTRBNEE7XFxuICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuICAubGluazpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5saW5rOmhvdmVyIC5saW5rX19saW5lOmFmdGVyIHtcXG4gICAgICBhbmltYXRpb246IGFuaW1hdGlvbi1saW5lIDEuMnMgZm9yd2FyZHM7IH1cXG4gICAgLmxpbms6aG92ZXIgLmxpbmtfX2Fycm93IHNwYW46YWZ0ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWFycm93IDEuMnMgZm9yd2FyZHM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxczsgfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAxNDBweDsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWFycm93IHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdGhlbWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNJLDZCQUE2QjtFQUM3QiwyREFBd0QsRUFBQTs7QUNQNUQ7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFTSSxrQkFBa0IsRUFBQTtFQVR0QjtJQUlRLGNEUHVCO0lDUXZCLHlCQUF5QjtJQUN6Qix5QkRSeUIsRUFBQTs7QUNjakM7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdURBQXVEO0VBQ3ZELGVBQWUsRUFBQTtFQUVmO0lBQ0Esb0JBQW9CLEVBQUE7SUFEbkI7TUFJTyxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixVQUFVLEVBQUE7TUFWakI7UUFhTyw2QkFBNkI7UUFDN0Isa0RBQWtELEVBQUE7TUFkekQ7UUFrQk8sNkJBQTZCO1FBQzdCLHlCQUF5QixFQUFBO01BbkJoQztRQXVCTyxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFdBQVc7UUFDWCxtQkRyRG1CLEVBQUE7RUMwRDNCO0lBQ0Esa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTtJQVJUO01BV0csV0FBVztNQUNYLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFdBQVc7TUFDWCxXQUFXO01BQ1gsbUJEM0V1QixFQUFBO0VDK0UzQjtJQUNBLGNBQWM7SUFDZCxjQUFjLEVBQUE7RUFsRWxCO0lBc0VRLGdCQUFnQjtJQUNoQiw2QkFBNkIsRUFBQTtJQXZFckM7TUEyRWdCLHVDQUF1QyxFQUFBO0lBM0V2RDtNQWtGZ0Isd0NBQXdDO01BQ3hDLG1CQUFtQixFQUFBOztBQVNuQztFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBR2I7SUFDRSxPQUFPLEVBQUEsRUFBQTs7QUFJWDtFQUNFO0lBQ0UsUUFBUSxFQUFBO0VBR1Y7SUFDRSxXQUFXLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4kY29sb3JfcGFwZXI6IHdoaXRlO1xcclxcbiRjb2xvcl9yZWdpc3RyYXRpb246ICMwZjBmMGY7XFxyXFxuJGNvbG9yX2FjY2VudDogcmdiKDI1NSwgMjIxLCAwKTtcXHJcXG4kY29sb3JfYWN0aXZlOiByZ2IoMjI5LCAyMjksIDIyOSk7XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiO1xcclxcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL21vbm9saXNrX2JsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuXFxyXFxuJGZvbnRfZGVmYXVsdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiRmb250X3NwZWNpYWw6ICdNb25vbGlzayBCbGFjaycsIHNhbnMtc2VyaWY7XCIsXCJAaW1wb3J0ICd0aGVtZXMnO1xcclxcblxcclxcbiNwcm9qZWN0QXJyb3cge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RBcnJvdzphY3RpdmUge1xcclxcblxcclxcbiAgICAmLmxpbmt7XFxyXFxuXFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWN0aXZlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5saW5rIHtcXHJcXG4gICAgJHNlbGY6ICY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDE1MHB4LCAtMTIwcHgsIDApO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICZfX2Fycm93IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0JFQkRCRTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlM2QoN3B4LCAtOXB4LCAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9hY2NlbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQkVCREJFO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAxNDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfYWNjZW50O1xcclxcbiAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNEE0QTRBO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICN7JHNlbGZ9IHtcXHJcXG4gICAgICAgICAgICAmX19saW5lIHtcXHJcXG4gICAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24tbGluZSAxLjJzIGZvcndhcmRzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJl9fYXJyb3cge1xcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24tYXJyb3cgMS4ycyBmb3J3YXJkcztcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltYXRpb24tbGluZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IDE0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWFycm93IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21vbm9saXNrX2JsYWNrLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcHJvZmlsZVBpYzAwLkpQR1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcblxcbi5yb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZkZDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4yZW07IH1cXG5cXG5hOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7IH1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZmxleC1zaHJpbms6IDA7IH1cXG5cXG4vKiBMRUZUIE1BSU4gKi9cXG4ubGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi10b3A6IC0ycHg7IH1cXG4gIC5sZWZ0ID4gKiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XFxuICAgIG1hcmdpbi1yaWdodDogNGVtOyB9XFxuXFxuLmxvZ28ge1xcbiAgdG9wOiAtMnB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWFyZ2luOiAwOyB9XFxuICAubG9nbyBzdmcge1xcbiAgICBmaWxsOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5sb2dvIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogYmxhY2s7XFxuICAgIHN0cm9rZS13aWR0aDogMnB4OyB9XFxuICAubG9nbyBoMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuLyo9PT09PT09PSAgSEVBREVSICA9PT09PT09PT09PT09PT09PT0qL1xcbiNidG5fcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogOGVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyB9XFxuXFxuI2J0bl9wcm9maWxlIDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG5cXG4jYnRuX3Byb2ZpbGUgc3ZnIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xLjJlbTtcXG4gIG1hcmdpbi1yaWdodDogLTEuMmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIHNjYWxlOiAwLjI1O1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNlbSwgLTJlbSk7ICovXFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDsgfVxcblxcbiNidG5fcHJvZmlsZTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB2YXIoLS1jb2xfZW1waGFzaXMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHN0cm9rZS13aWR0aDogNTsgfVxcblxcbiNidG5fcHJvZmlsZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTsgfVxcblxcbi8qID09PT09PT0gIFJJR0hUIE1BSU4gID09PT09PT09PT0qL1xcbi5yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAucmlnaHQgLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHZoIGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMTB2aDtcXG4gICAgd2lkdGg6IDcwdmg7IH1cXG5cXG4uY2lyY2xlQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaXgtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4uY2lyY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogMjBlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4vKkFCT1VUIFRBQiovXFxuLmFib3V0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDI1cHgpO1xcbiAgdG9wOiAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHdpZHRoO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgfVxcblxcbi5hYm91dENvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA2ZW0gNWVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uYWJvdXQgaHIge1xcbiAgYm9yZGVyOiAwIG5vbmU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07IH1cXG5cXG4uYWJvdXQgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjRlbTtcXG4gIG1hcmdpbi10b3A6IDZlbTsgfVxcblxcbi5hYm91dCAubGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tYm90dG9tOiAzZW07IH1cXG5cXG4vKj09PT09PT0gICBJTkRFWCBUQUIgICA9PT09PT09PT09PT0qL1xcbi5wcm9qZWN0SW5kZXgge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAyMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgfVxcblxcbi5wcm9qZWN0SW5kZXhTbGlkZUluIHtcXG4gIHRvcDogNDAlOyB9XFxuXFxuLnByb2plY3RGaWx0ZXIge1xcbiAgcGFkZGluZzogMWVtIDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMC43NWVtOyB9XFxuXFxuLmluZGV4VGFibGVDb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUge1xcbiAgbWFyZ2luOiAwZW0gMWVtO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUgdGgge1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07IH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUgdGQge1xcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLnByb2plY3RJbmRleFRhYmxlIHRyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAvKiByZW1vdmUgdGhlIGJvcmRlcidzIGNvbG91ciAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC41cHggbGlnaHRncmF5O1xcbiAgLyogZW11bGF0ZSB0aGUgYm9yZGVyICovIH1cXG5cXG4ucHJvamVjdEluZGV4VGFibGUgdHI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7IH1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTsgfVxcblxcbi8qID09PT09PSAgIENJUkNMRSBQUkVWSUVXUyAgICAgPT09PT09PSovXFxuLmJhbm5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogI2ZmZGQwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub2xpc2sgQmxhY2tcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbiAgei1pbmRleDogMjA7IH1cXG5cXG4vKiA9PT09PT0gICBQUk9KRUNUIFRBQiAgICAgPT09PT09PSovXFxuLnByb2plY3RUYWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBsZWZ0OiAxMDAlO1xcbiAgdG9wOiAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB6LWluZGV4OiA1O1xcbiAgLyogcGFkZGluZzogMmVtIDRlbTsgKi9cXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuXFxuLmxlZnRFZGdlIHtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIHdpZHRoOiAyNXB4O1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IGRvdHRlZCAjOTQ5NDk0O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLmxlZnRFZGdlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmxlZnRFZGdlOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XFxuXFxuLmFib3V0IC5sZWZ0RWRnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi50b3BFZGdlIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkICM5NDk0OTQ7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIHdoaXRlO1xcbiAgLyogd3JpdGluZy1tb2RlOnZlcnRpY2FsLWxyOyAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuICAucHJvamVjdENvbnRlbnRDb250YWluZXIgcCwgLnByb2plY3RDb250ZW50Q29udGFpbmVyIGgxLCAucHJvamVjdENvbnRlbnRDb250YWluZXIgaDIsIC5wcm9qZWN0Q29udGVudENvbnRhaW5lciBoMywgLnByb2plY3RDb250ZW50Q29udGFpbmVyIGg0LCAucHJvamVjdENvbnRlbnRDb250YWluZXIgaDUge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtOyB9XFxuICAucHJvamVjdENvbnRlbnRDb250YWluZXIgaW1nLCAucHJvamVjdENvbnRlbnRDb250YWluZXIgZmlndXJlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4OyB9XFxuICAucHJvamVjdENvbnRlbnRDb250YWluZXIgdWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07IH1cXG5cXG4uY2xvc2VQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtOyB9XFxuXFxuLmNsb3NlUHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTsgfVxcblxcbi5wcm9qZWN0VmlkZW9Db250YWluZXIge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnByb2plY3RUYWIgaDMge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuNWVtOyB9XFxuXFxuLnByb2plY3RUYWIgaDUge1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuXFxuLnByb2plY3RUYWIgZmlndXJlIGltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMXB4OyB9XFxuXFxuLnByb2plY3RUYWIgZmlnY2FwdGlvbiB7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgcGFkZGluZy10b3A6IDAuM2VtOyB9XFxuXFxuLnNsaWRlSW5Gcm9tUmlnaHQge1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qPT09PT09PT09ICBDT05UQUNUICA9PT09PT09PT09PT09PT09PT09PSovXFxuLmNvbnRhY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQwMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBib3R0b206IDEwMCU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b207XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuICAuY29udGFjdCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDBlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxNWVtOyB9XFxuICAuY29udGFjdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTsgfVxcbiAgLmNvbnRhY3QgaW1nIHtcXG4gICAgd2lkdGg6IDNlbTtcXG4gICAgaGVpZ2h0OiAzZW07IH1cXG4gIC5jb250YWN0ID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNGVtOyB9XFxuICAuY29udGFjdCA+ICo6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG5cXG4uYm90dG9tRWRnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci10b3A6IDAuNXB4IGRvdHRlZCAjOTQ5NDk0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5ib3R0b21FZGdlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXFxuLmJvdHRvbUVkZ2U6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cXG5cXG4uc2xpZGVEb3duIHtcXG4gIGJvdHRvbTogNTAlOyB9XFxuXFxuLyo9PT09PT09PT0gRk9PVEVSICA9PT09PT09PT09PT09PT09PT09PSovXFxuLmZvb3RlciB7XFxuICAvKiBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjsgKi9cXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdGhlbWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVfbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksNkJBQTZCO0VBQzdCLDJEQUF3RCxFQUFBOztBQ1A1RDtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUVJLFNBQVM7RUFDVCxxQ0RHbUM7RUNGbkMsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw4QkRwQjJCO0VD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QUFBOztBQUl4QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQTJDO0VBQzNDLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx1QkQvZWUsRUFBQTs7QUNrZm5CO0VBQ0kseUJEaGY2QixFQUFBOztBQ21makM7RUFDSSxXQUFXLEVBQUE7O0FBR2YseUNBQUE7QUFDQTtFQUNJLDRDQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFtQjtFQUNuQix3QkFBQTtFQUNBLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiRjb2xvcl9wYXBlcjogd2hpdGU7XFxyXFxuJGNvbG9yX3JlZ2lzdHJhdGlvbjogIzBmMGYwZjtcXHJcXG4kY29sb3JfYWNjZW50OiByZ2IoMjU1LCAyMjEsIDApO1xcclxcbiRjb2xvcl9hY3RpdmU6IHJnYigyMjksIDIyOSwgMjI5KTtcXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb25vbGlzayBCbGFja1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvbW9ub2xpc2tfYmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbn1cXHJcXG5cXHJcXG4kZm9udF9kZWZhdWx0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnRfc3BlY2lhbDogJ01vbm9saXNrIEJsYWNrJywgc2Fucy1zZXJpZjtcIixcIkBpbXBvcnQgXFxcInRoZW1lc1xcXCI7XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udF9kZWZhdWx0O1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJvb3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4yZW07XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWNjZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9wYXBlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTEVGVCBNQUlOICovXFxyXFxuLmxlZnQge1xcclxcbiAgICAvLyBtYXJnaW46IDA7XFxyXFxuICAgIC8vIHBhZGRpbmc6IDBlbSA3ZW07XFxyXFxuICAgIC8vIHBhZGRpbmctdG9wOiAxMGVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG5cXHJcXG4gICAgJj4qICB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNGVtO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogLTJweDtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBmaWxsOiBibGFjaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHN2Zzpob3ZlciB7XFxyXFxuICAgICAgICBmaWxsOiBub25lO1xcclxcbiAgICAgICAgc3Ryb2tlOiBibGFjaztcXHJcXG4gICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjRlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PSAgSEVBREVSICA9PT09PT09PT09PT09PT09PT0qL1xcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiNidG5fcHJvZmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDoyZW07XFxyXFxuICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZSA6Zmlyc3QtY2hpbGR7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX3Byb2ZpbGUgc3ZnIHtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEuMmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgc2NhbGU6IDAuMjU7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zZW0sIC0yZW0pOyAqL1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxufVxcclxcblxcclxcbiNidG5fcHJvZmlsZTpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuM2VtIHNvbGlkIHZhcigtLWNvbF9lbXBoYXNpcyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuX3Byb2ZpbGU6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT09ICBSSUdIVCBNQUlOICA9PT09PT09PT09Ki9cXHJcXG4ucmlnaHQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLmJhY2tncm91bmQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvcHJvZmlsZVBpYzAwLkpQRycpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMC4yICogMTAwdmggY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMTB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAwLjcqMTAwdmg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNpcmNsZUNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJlbTtcXHJcXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICB3aWR0aDogMjBlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypBQk9VVCBUQUIqL1xcclxcbi5hYm91dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgbGVmdDpjYWxjKDEwMCUgLSAyNXB4KTtcXHJcXG4gICAgdG9wOiAwJTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcGFwZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB3aWR0aDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0Q29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNmVtIDVlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBociB7XFxyXFxuICAgIGJvcmRlcjogMCBub25lO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgaDMge1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMC40ZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDZlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5saW5rc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKj09PT09PT0gICBJTkRFWCBUQUIgICA9PT09PT09PT09PT0qL1xcclxcbi5wcm9qZWN0SW5kZXgge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDoyMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvcl9wYXBlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFNsaWRlSW4ge1xcclxcbiAgICB0b3A6NDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEZpbHRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXhUYWJsZUNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEluZGV4VGFibGUge1xcclxcbiAgICBtYXJnaW46IDBlbSAxZW07XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0SW5kZXhUYWJsZSB0aCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEluZGV4VGFibGUgdGQge1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RJbmRleFRhYmxlIHRyOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyAvKiByZW1vdmUgdGhlIGJvcmRlcidzIGNvbG91ciAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjVweCByZ2IoMjExLCAyMTEsIDIxMSk7IC8qIGVtdWxhdGUgdGhlIGJvcmRlciAqL1xcclxcbn1cXHJcXG4ucHJvamVjdEluZGV4VGFibGUgdHI6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG59XFxyXFxuXFxyXFxuIC5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9hY3RpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PSAgIENJUkNMRSBQUkVWSUVXUyAgICAgPT09PT09PSovXFxyXFxuLmJhbm5lciB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICBjb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1vbm9saXNrIEJsYWNrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMGVtO1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09ICAgUFJPSkVDVCBUQUIgICAgID09PT09PT0qL1xcclxcblxcclxcbi5wcm9qZWN0VGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3BhcGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGxlZnQ6MTAwJTtcXHJcXG4gICAgdG9wOiAwJTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDJlbSA0ZW07ICovXFxyXFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIG9wYWNpdHk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRFZGdlIHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBkb3R0ZWQgcmdiKDE0OCwgMTQ4LCAxNDgpO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCBibGFjaztcXHJcXG4gICAgd3JpdGluZy1tb2RlOnZlcnRpY2FsLWxyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdEVkZ2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWNjZW50O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0RWRnZTphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWN0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLmxlZnRFZGdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JlZ2lzdHJhdGlvbjtcXHJcXG4gICAgY29sb3I6ICRjb2xvcl9wYXBlcjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfcGFwZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b3BFZGdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JlZ2lzdHJhdGlvbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkIHJnYigxNDgsIDE0OCwgMTQ4KTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCB3aGl0ZTtcXHJcXG4gICAgLyogd3JpdGluZy1tb2RlOnZlcnRpY2FsLWxyOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIHBhZGRpbmc6IDJlbSA0ZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcblxcclxcbiAgICBwLGgxLGgyLGgzLGg0LGg1IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAmIGltZywgJiBmaWd1cmUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWx7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jbG9zZVByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZVByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdFZpZGVvQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBoMyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBoNSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUYWIgZmlndXJlIGltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRhYiBmaWdjYXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVJbkZyb21SaWdodCB7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PT0gIENPTlRBQ1QgID09PT09PT09PT09PT09PT09PT09Ki9cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2FjY2VudDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYm90dG9tOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b207XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250X3NwZWNpYWw7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDNlbTtcXHJcXG4gICAgICAgIGhlaWdodDogM2VtO1xcclxcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiA+IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgPiAqOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tRWRnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci10b3A6IDAuNXB4IGRvdHRlZCByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b21FZGdlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3BhcGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tRWRnZTphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYWN0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVEb3duIHtcXHJcXG4gICAgYm90dG9tOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09IEZPT1RFUiAgPT09PT09PT09PT09PT09PT09PT0qL1xcclxcbi5mb290ZXIge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3Byb2ZpbGVQaWMwMS5KUEdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcHJvZmlsZVBpYzAwLkpQR1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwdmg7IH1cXG4gIC5tYWluQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5sZWZ0IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlOyB9XFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjZweCk7IH1cXG4gIC5yaWdodCB7XFxuICAgIGZsZXgtc2hyaW5rOiAxOyB9XFxuICAgIC5yaWdodCAuYmFja2dyb3VuZCB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgfVxcbiAgLnJpZ2h0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLnJpZ2h0IC5iYWNrZ3JvdW5kIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwdmggY2VudGVyO1xcbiAgICAgIGhlaWdodDogMTEwdmg7XFxuICAgICAgd2lkdGg6IDcwdmg7IH1cXG4gIC5hYm91dCB7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAuYWJvdXQgLmFib3V0Q29udGFpbmVyIHtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAzZW0gMmVtOyB9XFxuICAucHJvamVjdEluZGV4IHtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAucHJvamVjdEluZGV4U2xpZGVJbiB7XFxuICAgIHRvcDogMzUlOyB9XFxuICAucHJvamVjdFRhYiB7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgICAucHJvamVjdFRhYiBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTsgfVxcbiAgICAucHJvamVjdFRhYiBoMiB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgIC5wcm9qZWN0VGFiIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuMWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGg0IHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGg1IHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC0wLjNlbTsgfVxcbiAgICAucHJvamVjdFRhYiB1bCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVlbTsgfVxcbiAgICAucHJvamVjdFRhYiBpbWcge1xcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMWVtOyB9XFxuICAgIC5wcm9qZWN0VGFiIGZpZ3VyZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5wcm9qZWN0VGFiIGZpZ2NhcHRpb24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogM2VtIDFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMy41ZW07IH1cXG4gIC5zbGlkZUluRnJvbVJpZ2h0IHtcXG4gICAgbGVmdDogNXB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAubGlua19fbGluZTphZnRlciB7XFxuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWxpbmUtbG9vcGVkIDEuNXMgZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cXG4gIC5saW5rX19hcnJvdyBzcGFuOmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24tYXJyb3ctbG9vcGVkO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IH1cXG4gIEBrZXlmcmFtZXMgYW5pbWF0aW9uLWxpbmUtbG9vcGVkIHtcXG4gICAgMCUge1xcbiAgICAgIGxlZnQ6IDE0MHB4OyB9XFxuICAgIDcwJSB7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgICAxMDAlIHtcXG4gICAgICBsZWZ0OiAtMzBweDsgfSB9XFxuICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1hcnJvdy1sb29wZWQge1xcbiAgICAwJSB7XFxuICAgICAgd2lkdGg6IDA7IH1cXG4gICAgNzAlIHtcXG4gICAgICB3aWR0aDogMDsgfVxcbiAgICAxMDAlIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfSB9IH1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XFxuICAubGluayB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoODBweCwgLTgwcHgsIDApOyB9XFxuICAgIC5saW5rX19saW5lIHtcXG4gICAgICB3aWR0aDogNjBweDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLmxpbmsge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoNDVweCwgLTQzcHgsIDApO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgfVxcbiAgICAubGluayA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcbiAgLnByb2plY3RJbmRleCB7XFxuICAgIGhlaWdodDogNzV2aDsgfVxcbiAgLnByb2plY3RJbmRleFNsaWRlSW4ge1xcbiAgICB0b3A6IDI1JTsgfVxcbiAgLmNpcmNsZSB7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBoZWlnaHQ6IDEwZW07IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVfbW9iaWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQUdqQjtJQUVJLFdBQVcsRUFBQTtFQUdmO0lBQ0ksYUFBYTtJQUViLHlEQUFtRDtJQUNuRCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDhCQUE4QixFQUFBO0VBR2xDO0lBQ0kseUJBQXlCLEVBQUE7RUFHN0I7SUFDSSxjQUFjLEVBQUE7SUFEbEI7TUFHUSxzQkFBc0IsRUFBQTtFQUk5QjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0lBRWIsZ0JBQWdCLEVBQUE7SUFQcEI7TUFVUSxrQkFBa0I7TUFDbEIseURBQW1EO01BQ25ELDRCQUE0QjtNQUM1QiwwQkFBMEI7TUFDMUIsZ0NBQXVDO01BQ3ZDLGFBQWE7TUFDYixXQUFnQixFQUFBO0VBS3hCO0lBQ0ksWUFBWSxFQUFBO0lBRGhCO01BR1EsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBTXhCO0lBQ0ksWUFBWSxFQUFBO0VBR2hCO0lBQ0ksUUFBUSxFQUFBO0VBSVo7SUFDSSxZQUFZLEVBQUE7SUFEaEI7TUFJUSxnQkFBZ0IsRUFBQTtJQUp4QjtNQU9RLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtJQVJ4QjtNQVdRLGdCQUFnQixFQUFBO0lBWHhCO01BZVEsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0lBaEJ6QjtNQW9CUSxnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7SUFyQjdCO01BeUJRLG1CQUFtQixFQUFBO0lBekIzQjtNQTRCUSxlQUFlO01BQ2YsbUJBQW1CLEVBQUE7SUE3QjNCO01BaUNRLFNBQVMsRUFBQTtJQWpDakI7TUFxQ1EsZUFBZSxFQUFBO0VBS3ZCO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQixFQUFBO0VBR3hCO0lBQ0ksU0FBUyxFQUFBO0VBR2I7SUFDSSxZQUFZLEVBQUE7RUFLWDtJQUVPLDhDQUE4QztJQUU5QyxpQ0FBaUM7SUFDakMsbUNBQW1DLEVBQUE7RUFJMUM7SUFHTyxpQ0FBaUM7SUFFakMsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxtQ0FBbUMsRUFBQTtFQU0vQztJQUNJO01BQ0UsV0FBVyxFQUFBO0lBR2I7TUFDSSxPQUFPLEVBQUE7SUFHWDtNQUNFLFdBQVcsRUFBQSxFQUFBO0VBSWpCO0lBQ0k7TUFDRSxRQUFRLEVBQUE7SUFHVjtNQUNJLFFBQVEsRUFBQTtJQUdaO01BQ0UsV0FBVyxFQUFBLEVBQUEsRUFBQTs7QUFNckI7RUFNSTtJQUdJLHFEQUFxRCxFQUFBO0lBR3JEO01BQ0ksV0FBVyxFQUFBLEVBQ2Q7O0FBWVQ7RUFDSTtJQUNJLGVBQWU7SUFDZixxREFBcUQ7SUFFckQsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0lBTHRCO01BUVEsVUFBVTtNQUNWLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQUl4QjtJQUNJLFlBQVcsRUFBQTtFQU1mO0lBQ0ksUUFBUSxFQUFBO0VBR1o7SUFDSSxXQUFXO0lBQ2YsWUFBWSxFQUFBLEVBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5yb290IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAvLyBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZWZ0IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAzZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9wcm9maWxlUGljMDEuSlBHJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDgwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcXHJcXG4gICAgfSAgIFxcclxcblxcclxcbiAgICAubG9nbyB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDI2cHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodCB7XFxyXFxuICAgICAgICBmbGV4LXNocmluazogMTtcXHJcXG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5yaWdodCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIFxcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAuYmFja2dyb3VuZCB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL3Byb2ZpbGVQaWMwMC5KUEcnKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAuMiAqIDEwMHZoIGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHZoO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwLjcqMTAwdmg7XFxyXFxuICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICAuYWJvdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDNlbSAyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0SW5kZXgge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvamVjdEluZGV4U2xpZGVJbiB7XFxyXFxuICAgICAgICB0b3A6IDM1JTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC5wcm9qZWN0VGFiIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaDJ7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaDN7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGg0e1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBoNXtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjNlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHVse1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41ZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBmaWd1cmV7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBmaWdjYXB0aW9uIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogM2VtIDFlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZUluRnJvbVJpZ2h0IHtcXHJcXG4gICAgICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGluayB7XFxyXFxuICAgICAgICAkc2VsZjogJjtcXHJcXG4gICAgICAgICZfX2xpbmUge1xcclxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbi1saW5lLWxvb3BlZCAxLjVzIGZvcndhcmRzO1xcclxcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfX2Fycm93IHtcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLWFycm93LWxvb3BlZDtcXHJcXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxyXFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1saW5lLWxvb3BlZCB7XFxyXFxuICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgIGxlZnQ6IDE0MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgNzAle1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgXFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgbGVmdDogLTMwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGlvbi1hcnJvdy1sb29wZWQge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgNzAlIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC5sZWZ0IHtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmc6IDJlbSAzZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpbmt7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDgwcHgsIC04MHB4LCAwKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICZfX2xpbmV7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmNpcmNsZUNvbnRhaW5lciB7XFxyXFxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTEwZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLy8gLmNpcmNsZSB7XFxyXFxuICAgIC8vICAgICB3aWR0aDogMTBlbTtcXHJcXG4gICAgLy8gaGVpZ2h0OiAxMGVtO1xcclxcbiAgICBcXHJcXG4gICAgLy8gfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxyXFxuICAgIC5saW5rIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlM2QoNDVweCwgLTQzcHgsIDApO1xcclxcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgLy8gd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgICAgICAgJj5zcGFuOmxhc3QtY2hpbGR7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG4gICAgICAgIH0gICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdEluZGV4IHtcXHJcXG4gICAgICAgIGhlaWdodDo3NXZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0SW5kZXhUYWJsZSB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RJbmRleFNsaWRlSW4ge1xcclxcbiAgICAgICAgdG9wOiAyNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNpcmNsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTBlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9hbmltX2NoZWNrYm94ZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX2FuaW1fcHJvamVjdEFycm93LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfbW9iaWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9tb2JpbGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50VGV4dCB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxcIjtcclxuXHJcbmNvbnN0IGxvYWRBYm91dFRhYiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0RWRnZS5jbGFzc0xpc3QuYWRkKCdsZWZ0RWRnZScpXHJcbiAgICBsZWZ0RWRnZS50ZXh0Q29udGVudCA9ICdpbmZvcm1hdGlvbic7XHJcblxyXG4gICAgY29uc3QgYWJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXRDb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGN2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XHJcbiAgICBjdi50ZXh0Q29udGVudCA9IFwidGFvbGUuY2hlbkBwcm90b25tYWlsLmNvbVwiO1xyXG5cclxuICAgIGNvbnN0IGluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgaW5zdGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGFvbGUuY2hlbi8nKTtcclxuICAgIGluc3RhLnRleHRDb250ZW50ID0gJ0luc3RhZ3JhbSc7XHJcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlua3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlua3MnKTtcclxuICAgIGxpbmtzQ29udGFpbmVyLmFwcGVuZChjdiwgaW5zdGEpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhYm91dDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dDAuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJzxicj5JIGFtIGN1cnJlbnRseSBvcGVuIGZvciBuZXcgcHJvamVjdHMuIElmIHlvdVxcJ3JlIGxvb2tpbmcgdG8gY29sbGFib3JhdGUsIHBsZWFzZSBmZWVsIGZyZWUgdG8gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNvbnRhY3RDYWxsXCI+Z2V0IGluIHRvdWNoITwvYT48YnI+JztcclxuICAgIGNvbnN0IGFib3V0MSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgXCJJIGFtIGEgbXVsdGktZGlzY2lwbGluYXJ5IGRlc2lnbmVyL3NvZnR3YXJlIGRldmVsb3BlciB3aXRoIGEgc3Ryb25nIGZvY3VzIG9uIGNvbXB1dGF0aW9uYWwgZ2VvbWV0cnkgYW5kIGZhYnJpY2F0aW9uLiBQcmV2aW91c2x5LCBJIGhhdmUgd29ya2VkIGF0IGludGVybmF0aW9uYWwgYXJjaGl0ZWN0dXJhbCBwcmFjdGljZXMsIG1vc3Qgbm90YWJseSBaYWhhIEhhZGlkIEFyY2hpdGVjdHMgaW4gTG9uZG9uLCBkZXZlbG9waW5nIGJlc3Bva2UgZGVzaWduIHNvbHV0aW9ucyBhbmQgcHJvamVjdC1zcGVjaWZpYyBzb2Z0d2FyZSB0b29scy4gSSBoYXZlIGFsc28gY29sbGFib3JhdGVkIHdpdGggc21hbGxlciBwcmFjdGljZXMgaW4gYXJjaGl0ZWN0dXJlIGFuZCBmYWJyaWNhdGlvbiBhcyBhbiBpbmRlcGVuZGVudCBjb25zdWx0YW50IHRvIGltcHJvdmUvZXN0YWJsaXNoIGNvbXB1dGF0aW9uYWwgd29ya2Zsb3cgaW50ZWdyYXRpb24uXCIpO1xyXG4gICAgY29uc3QgaW50cm8yID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLFxyXG4gICAgICAgIFwiSSBob2xkIGEgTUFyY2ggaW4gQXJjaGl0ZWN0dXJlIGFuZCBVcmJhbmlzbSBmcm9tIHRoZSBBcmNoaXRlY3R1cmFsIEFzc29jaWF0aW9uIGluIExvbmRvbiBVSyBhbmQgYSBCQXJjaCBpbiBBcmNoaXRlY3R1cmUgd2l0aCBoaWdoIGRpc3RpbmN0aW9uIGZyb20gdGhlIENhbGlmb3JuaWEgQ29sbGVnZSBvZiB0aGUgQXJ0cyBpbiBTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLiBBZnRlciBnZXR0aW5nIG1vcmUgYW5kIG1vcmUgaW52b2x2ZWQgd2l0aCB0aGUgZGV2ZWxvcG1lbnQgc2lkZSBhbmQgdGhlIGV4Y2l0aW5nIHBvc3NpYmlsaXRlcyBvZiBtYXJyeWluZyBkZXNpZ24gd2l0aCBjb21wdXRhdGlvbiwgSSBkZWNpZGVkIHRvIHB1cnN1ZSBjb250aW51ZWQgZWR1Y2F0aW9uIGluIENvbXB1dGVyIFNjaWVuY2UgYXQgSW1wZXJpYWwgQ29sbGVnZSBMb25kb24sIHdoZXJlIEkgY29tcGxldGVkIGEgTVNjIGluIENvbXB1dGluZywgd2l0aCBhIGZvY3VzIG9uIGNvbXB1dGVyIGdyYXBoaWNzIGFuZCBNYWNoaW5lIExlYXJuaW5nLlwiKTsgXHJcblxyXG4gICAgYWJ0Q29udGFpbmVyLmFwcGVuZChsaW5rc0NvbnRhaW5lciwgYWJvdXQwLCBhYm91dDEsIGludHJvMik7XHJcbiAgICBjb25zdCBiaW9ncmFwaHlUaXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiQmlvZ3JhcGh5XCIpO1xyXG5cclxuICAgIGNvbnN0IGJpbzAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiR3Jvd2luZyB1cCBiZXR3ZWVuIGN1bHR1cmVzIGFuZCBzdGlsbCBmb2xsb3dpbmcgYSBnbG9iZS10cm90dGluZyBsaWZldHlsZSBpbiBhZHVsdGhvb2QgKEF1c3RyaWEsIENoaW5hLCBVUywgVUsgYW5kIGNvdW50aW5nKSwgbXkgbXVsdGktY3VsdHVyYWwgZXhwZXJpZW5jZSBoYXMgcGVyaGFwcyBnaXZlbiBtZSBhIHVuaXF1ZSBwZXJzcGVjdGl2ZSBvbiBtYXR0ZXJzLiBJIG9mdGVuIHRyeSB0byBzZWUgYW5kIHVuZGVyc3RhbmQgdGhlIGNvbXBsZXggc3lzdGVtcyB0aGF0IHdlYXZlIHRocm91Z2ggb3VyIGVudmlyb25tZW50cywgYW5kIGNvbnNlcXVlbnRseSBJIGJlbGlldmUgdGhhdCBkZXNpZ24gc2hvdWxkIGJlIGFwcHJvYWNoZWQgZnJvbSBhIHN5c3RlbWljIHBlcnNwZWN0aXZlLCByYXRoZXIgdGhhbiB0aGUgcHJldmFpbGluZyBkZXNpZ24tYXMtYS1tb251bWVudCBwYXJhZGlnbS5cIik7XHJcbiAgICBjb25zdCBiaW8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJpbzIuaW5uZXJIVE1MID0gJ0kgaGF2ZSBhIGtlZW4gaW50ZXJlc3QgaW4gZGVzaWduIHJlc2VhcmNoIGFuZCBmYWJyaWNhdGlvbi4gTXkgc3BlY2lhbGl6YXRpb24gaXMgaW4gYWRkaXRpdmUgbWFudWZhY3R1cmluZyBhbmQgQUkgaW4gYXJjaGl0ZWN0dXJlLCBoYXZpbmcgZG9uZSB0d28gbWFzdGVyIHRoZXNpcyBvbiB0aGUgdG9waWMgYW5kIGhhdmluZyBsZWQgd29ya3Nob3BzIGF0IHVuaXZlcnNpdGllcyBhcm91bmQgdGhlIGdsb2JlIChGb3IgbW9yZSBkZXRhaWxzLCBwbGVhc2UgY2hlY2sgb3V0IHRoZSBQcm9qZWN0cyBzZWN0aW9uKS4gSSBhbSBhbHdheXMgb24gdGhlIGxvb2tvdXQgZm9yIGNvbnRpbnVlZCByZXNlYXJjaCBvcHBvcnR1bml0aWVzLCBzbyBwbGVhc2UgZG9uXFwndCBoZXNpdGF0ZSB0byA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY29udGFjdENhbGxcIj5kcm9wIG1lIGEgbWVzc2FnZSE8L2E+JztcclxuICAgIGNvbnN0IGJpbzEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiSSBhbSBmYXNjaW5hdGVkIGJ5IHRoZSBjb25jZXB0IG9mIHRoZSBSZW5haXNzYW5jZSBNYW4gYW5kIEkgZW5qb3kgaW5kdWxnaW5nIGluIHRoZSBwdXJzdWl0IG9mIGRpdmVyZ2luZyBpbnRlcmVzdHMgaW4gbXkgZnJlZSB0aW1lLiBNeSBvcmlnaW5zIGFyZSBpbiB0aGUgZmluZSBhcnRzLiBIYXZpbmcgcGFpbnRlZCwgZHJhd24gYW5kIHNjdWxwdGVkIGFsbCBteSBjaGlsZGhvb2QsIEkgd2FzIG9yaWdpbmFsbHkgcGxhbm5pbmcgdG8gc3RhcnQgYSBjYXJlZXIgaW4gcGFpbnRpbmcuIEhvd2V2ZXIsIHRoZSBicmVhZHRoIGFuZCByaWdvciBvZiB0aGUgYXJjaGl0ZWN0dXJhbCBlZHVjYXRpb24gd2FzIG1vcmUgYXBwZWFsaW5nIHRvIG1lLCBzbyBJIHBpdm90ZWQgZWFybHkgb24uIEkgaGF2ZSBub3QgZ2l2ZW4gdXAgbXkgcGFzc2lvbiBpbiB0aGUgYXJ0cyBhbmQgSSBzdGlsbCBwcmFjdGljZSB3aGVuZXZlciBJIGNhbi4gTXkgaG9wZSBpcyB0aGF0IHNvbWUgZGF5IEkgY2FuIGZpbmQgYSBoYXBweSwgYW1hbGdhbWF0aW5nIG1lZGl1bSBiZXR3ZWVuIGFsbCBteSBpbnRlcmVzdHMgYW5kIGNyZWF0ZSBzb21ldGhpbmcgbm92ZWwgYW5kIG1lYW5pbmdmdWwuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgYWJ0Q29udGFpbmVyLmFwcGVuZChiaW9ncmFwaHlUaXRsZSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSwgYmlvMCwgYmlvMiwgYmlvMSk7XHJcbiAgICBhYm91dFRhYi5hcHBlbmQobGVmdEVkZ2UsIGFidENvbnRhaW5lcik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUYWIpO1xyXG5cclxuICAgIHJldHVybiBhYm91dFRhYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0VGFiOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0IH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbFwiO1xyXG5cclxuaW1wb3J0IGluc3RhbG9nbyBmcm9tICcuLi9hc3NldHMvbG9nb19pbnN0YS5zdmcnO1xyXG5pbXBvcnQgbGlua2VkaW5Mb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvX2xpbmtlZGluLnN2Zyc7XHJcbmltcG9ydCBjdkxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ29fY3Yuc3ZnJztcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0VGFiID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsICdDb250YWN0Jyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsICd0YW9sZS5jaGVuQHByb3Rvbm1haWwuY29tJyk7XHJcblxyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGlua2VkaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rZWRpbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Rhb2xlLWNoZW4tMTE2NmIyNWEvJylcclxuICAgIGNvbnN0IGltZ19saW5rZWRpbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nX2xpbmtlZGluLnNyYyA9IGxpbmtlZGluTG9nbztcclxuICAgIGxpbmtlZGluLmFwcGVuZENoaWxkKGltZ19saW5rZWRpbik7XHJcblxyXG4gICAgY29uc3QgaW5zdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBpbnN0YS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YW9sZS5jaGVuLycpXHJcbiAgICBjb25zdCBpbWdfaW5zdGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ19pbnN0YS5zcmMgPSBpbnN0YWxvZ287XHJcbiAgICBpbnN0YS5hcHBlbmRDaGlsZChpbWdfaW5zdGEpO1xyXG5cclxuICAgIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY3Yuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcclxuICAgIGNvbnN0IGltZ19jdiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nX2N2LnNyYyA9IGN2TG9nbztcclxuICAgIGN2LmFwcGVuZENoaWxkKGltZ19jdik7XHJcblxyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmQobGlua2VkaW4sIGluc3RhLCBjdik7XHJcblxyXG5cclxuICAgIGNvbnN0IGJvdHRvbUVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbUVkZ2UuY2xhc3NMaXN0LmFkZCgnYm90dG9tRWRnZScpO1xyXG4gICAgYm90dG9tRWRnZS50ZXh0Q29udGVudCA9ICdjbG9zZSdcclxuXHJcbiAgICBjb250YWN0VGFiLmFwcGVuZChoZWFkaW5nLCBlbWFpbCwgbGlua0NvbnRhaW5lciwgYm90dG9tRWRnZSk7XHJcblxyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFjdFRhYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RUYWI7IiwiY29uc3QgbG9hZEZvb3RlciA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiVGhpcyBwYWdlIHdhcyBkZXNpZ25lZCBhbmQgYnVpbHQgYnkgbWUgOikgQWxsIHJpZ2h0cyByZXNlcnZlZCDCqSBUYW9sZSBDaGVuXCI7XHJcbiAgICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCk7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRGb290ZXI7IiwiY29uc3QgbG9hZEluZGV4VGFiID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXhUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZGV4VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmRleCcpO1xyXG5cclxuICAgIGNvbnN0IHRvcGVkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcGVkZ2UuY2xhc3NMaXN0LmFkZCgndG9wRWRnZScpO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlsdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGaWx0ZXInKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5kZXhUYWJsZUNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaW5kZXhUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGluZGV4VGFibGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZGV4VGFibGUnKTtcclxuXHJcbiAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRleFRhYmxlKTtcclxuXHJcbiAgICBpbmRleFRhYi5hcHBlbmQodG9wZWRnZSwgZmlsdGVyQ29udGFpbmVyLCB0YWJsZUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbmRleFRhYik7XHJcbiAgICBcclxuICAgIHJldHVybiBpbmRleFRhYjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSW5kZXhUYWI7IiwiaW1wb3J0IGxvYWRSZXR1cm5BcnJvdyBmcm9tIFwiLi9sb2FkUmV0dXJuQXJyb3dcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgfSBmcm9tIFwiLi4vc2NyaXB0cy91dGlsXCI7XHJcbmltcG9ydCBsb2FkTG9nbyBmcm9tIFwiLi9sb2FkTG9nb1wiO1xyXG5pbXBvcnQgbG9hZFByb2plY3RBcnJvdyBmcm9tIFwiLi9sb2FkUHJvamVjdEFycm93XCI7XHJcblxyXG5jb25zdCBsb2FkTGVmdE1haW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRhaW5lclwiLCBcImxlZnRcIik7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHN2ZyA9IGxvYWRMb2dvKG1haW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdsb2dvJywgJ2NvbnRhY3RDYWxsJyk7XHJcbiAgICAvLyBjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgLy8gbXlOYW1lLnRleHRDb250ZW50ID0gJ1Rhb2xlIENoZW4nO1xyXG5cclxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHN1YnRpdGxlLnRleHRDb250ZW50ID0gJ2Rlc2lnbiB8IGNvZGUgfCBhcnQnO1xyXG5cclxuICAgIGJhbm5lci5hcHBlbmQoc3ZnLCBzdWJ0aXRsZSk7XHJcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRyby50ZXh0Q29udGVudCA9IFwiSSBhbSBhIG11bHRpLWRpc2NpcGxpbmFyeSBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyIG9wZXJhdGluZyBhdCB0aGUgaW50ZXJzZWN0aW9uIG9mIGRlc2lnbiwgdGVjaG5vbG9neSBhbmQgYXJ0LiBJIGxpa2UgdG8gc29sdmUgcHJvYmxlbXMgYW5kIGJ1aWxkIHRoaW5ncy4gSSBhbSBwcm9mZXNzaW9uYWxseSB0cmFpbmVkIGluIGFyY2hpdGVjdHVyZSBhbmQgY29tcHV0ZXIgc2NpZW5jZS4gXCI7XHJcblxyXG4gICAgY29uc3QgYnRuX3Byb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bl9wcm9maWxlLmlkID0gJ2J0bl9wcm9maWxlJztcclxuICAgIGNvbnN0IHByb2ZpbGVUZXh0ID0gY3JlYXRlRWxlbWVudFRleHQoJ2RpdicsIFwiRnVsbCBQcm9maWxlXCIpOyAgIFxyXG4gICAgYnRuX3Byb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZVRleHQpO1xyXG5cclxuICAgIGNvbnN0IHJldHVybkFycm93ID0gbG9hZFJldHVybkFycm93KGJ0bl9wcm9maWxlKTtcclxuXHJcbiAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZChpbnRybywgYnRuX3Byb2ZpbGUpO1xyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBtYWluLmFwcGVuZChiYW5uZXIsIGhlYWRlcik7XHJcbiAgICBjb25zdCBidG5faW5kZXggPSBsb2FkUHJvamVjdEFycm93KG1haW4pO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIG1haW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTGVmdE1haW47Iiwiey8qIDxzdmcgdmVyc2lvbj1cIjEuMlwiIGJhc2VQcm9maWxlPVwidGlueVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG5cdCB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTY0IDEyN1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxwYXRoIGlkPVwiWFwiIGQ9XCJNNTMsMS4ydjE2LjdIMzYuMnYxMDguM2gtMTdWMTcuOEgwVjEuMkg1M3pcIi8+XHJcbjxwYXRoIGlkPVwiWE1MSURfMTdfXCIgZD1cIk05Ni42LDEyNi4xbC0yLjctMjYuOUg3NC4xbC0yLjcsMjYuOUg1My45bDEzLjgtMTI1aDMyLjZsMTMuOCwxMjVIOTYuNnogTTc1LjcsODIuNmgxNi43bC00LjEtNDAuOEw4NiwyMC4yXHJcblx0aC00LjRsLTEuOSwyMS42TDc1LjcsODIuNnpcIi8+XHJcbjxwYXRoIGlkPVwiWE1MSURfMTRfXCIgZD1cIk0xNzYuMywxLjJ2MTI1aC01Mi40VjEuMkgxNzYuM3ogTTE0MC45LDEwOS41aDE4LjRWMTcuOGgtMTguNFYxMDkuNXpcIi8+XHJcbjxwYXRoIGlkPVwiWE1MSURfMTJfXCIgZD1cIk0xODkuNSwxLjJoMTd2MTA4LjNoMjUuN3YxNi43aC00Mi43VjEuMnpcIi8+XHJcbjxwYXRoIGlkPVwiWE1MSURfMTBfXCIgZD1cIk0yNTcuOSw3MS4ydjM4LjNoMjV2MTYuN2gtNDJWMS4yaDQybC0wLjUsMTYuN2gtMjQuNXYzNi43aDE4LjRsLTAuOSwxNi43SDI1Ny45elwiLz5cclxuPHBhdGggaWQ9XCJYTUxJRF84X1wiIGQ9XCJNMzcwLjQsNDIuNWwtMTcsMFYxNy44aC0xNi43djkxLjZoMTYuN1Y4MS42bDE3LTAuMXY0NC42aC01MC43VjEuMmg1MC43VjQyLjV6XCIvPlxyXG48cGF0aCBpZD1cIlhNTElEXzZfXCIgZD1cIk00MTUuNiwxLjJoMTd2MTI1aC0xN1Y3MS40bC0xNy4zLDB2NTQuN2gtMTdWMS4yaDE3djUzLjNsMTcuMy0wLjFWMS4yelwiLz5cclxuPHBhdGggaWQ9XCJYTUxJRF80X1wiIGQ9XCJNNDY0LjgsNzEuMnYzOC4zaDI1djE2LjdoLTQyVjEuMmg0MmwtMC41LDE2LjdoLTI0LjV2MzYuN2gxOC40bC0wLjksMTYuN0g0NjQuOHpcIi8+XHJcbjxwYXRoIGlkPVwiWE1MSURfMl9cIiBkPVwiTTUxOS45LDM1LjJsLTEuNS0xMi42aC0wLjd2MTAzLjVoLTE3VjEuMkg1MjlsMTQuOCw4OS45bDEuNSwxMi42aDAuN1YxLjJsMTcsMHYxMjQuOWwtMjcuOSwwTDUxOS45LDM1LjJ6XCIvPlxyXG48L3N2Zz4gKi99XHJcblxyXG57LyogPHN2ZyB2ZXJzaW9uPVwiMS4yXCIgYmFzZVByb2ZpbGU9XCJ0aW55XCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcblx0IHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1NjQgMTI3XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuPC9zdmc+ICovfVxyXG5cclxuY29uc3QgbG9hZExvZ28gPSAocGFyZW50KSA9PiB7XHJcbiAgICAvLyB2YXJpYWJsZSBmb3IgdGhlIG5hbWVzcGFjZSBcclxuICAgIGNvbnN0IHN2Z25zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuICAgIGxldCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3N2ZycpO1xyXG4gICAgc2hhcGUuc2V0QXR0cmlidXRlKFwieFwiLCBcIi01XCIpO1xyXG4gICAgc2hhcGUuc2V0QXR0cmlidXRlKFwieVwiLCBcIjJweFwiKTtcclxuICAgIHNoYXBlLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgNTYwIDEyN1wiKTtcclxuICAgIHNoYXBlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjNWNjZWVlXCIpO1xyXG5cclxuICAgIGNvbnN0IHAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAncGF0aCcpO1xyXG4gICAgcDAuc2V0QXR0cmlidXRlKCdkJywgXCJNNTMsMS4ydjE2LjdIMzYuMnYxMDguM2gtMTdWMTcuOEgwVjEuMkg1M3pcIik7XHJcblxyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBwMS5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk05Ni42LDEyNi4xbC0yLjctMjYuOUg3NC4xbC0yLjcsMjYuOUg1My45bDEzLjgtMTI1aDMyLjZsMTMuOCwxMjVIOTYuNnogTTc1LjcsODIuNmgxNi43bC00LjEtNDAuOEw4NiwyMC4yaC00LjRsLTEuOSwyMS42TDc1LjcsODIuNnpcIik7XHJcblxyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBwMi5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk0xNzYuMywxLjJ2MTI1aC01Mi40VjEuMkgxNzYuM3ogTTE0MC45LDEwOS41aDE4LjRWMTcuOGgtMTguNFYxMDkuNXpcIik7XHJcblxyXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBwMy5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk0xODkuNSwxLjJoMTd2MTA4LjNoMjUuN3YxNi43aC00Mi43VjEuMnpcIik7XHJcblxyXG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBwNC5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk0yNTcuOSw3MS4ydjM4LjNoMjV2MTYuN2gtNDJWMS4yaDQybC0wLjUsMTYuN2gtMjQuNXYzNi43aDE4LjRsLTAuOSwxNi43SDI1Ny45elwiKTtcclxuXHJcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3BhdGgnKTtcclxuICAgIHA1LnNldEF0dHJpYnV0ZSgnZCcsIFwiTTM3MC40LDQyLjVsLTE3LDBWMTcuOGgtMTYuN3Y5MS42aDE2LjdWODEuNmwxNy0wLjF2NDQuNmgtNTAuN1YxLjJoNTAuN1Y0Mi41elwiKTtcclxuXHJcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmducywgJ3BhdGgnKTtcclxuICAgIHA2LnNldEF0dHJpYnV0ZSgnZCcsIFwiTTQxNS42LDEuMmgxN3YxMjVoLTE3VjcxLjRsLTE3LjMsMHY1NC43aC0xN1YxLjJoMTd2NTMuM2wxNy4zLTAuMVYxLjJ6XCIpO1xyXG5cclxuICAgIGNvbnN0IHA3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAncGF0aCcpO1xyXG4gICAgcDcuc2V0QXR0cmlidXRlKCdkJywgXCJNNDY0LjgsNzEuMnYzOC4zaDI1djE2LjdoLTQyVjEuMmg0MmwtMC41LDE2LjdoLTI0LjV2MzYuN2gxOC40bC0wLjksMTYuN0g0NjQuOHpcIik7XHJcblxyXG4gICAgY29uc3QgcDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBwOC5zZXRBdHRyaWJ1dGUoJ2QnLCBcIk01MTkuOSwzNS4ybC0xLjUtMTIuNmgtMC43djEwMy41aC0xN1YxLjJINTI5bDE0LjgsODkuOWwxLjUsMTIuNmgwLjdWMS4ybDE3LDB2MTI0LjlsLTI3LjksMEw1MTkuOSwzNS4yelwiKTtcclxuXHJcbiAgICBzaGFwZS5hcHBlbmQocDAscDEscDIscDMscDQscDUscDYscDcscDgpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNoYXBlKTtcclxuXHJcbiAgICByZXR1cm4gc2hhcGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZExvZ287IiwiY29uc3QgbG9hZFByb2plY3RBcnJvdyA9IChwYXJlbnQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ3Byb2plY3RBcnJvdyc7XHJcblxyXG4gICAgY29uc3QgbGlua0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGlua0Fycm93LmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2Fycm93Jyk7XHJcbiAgICBsaW5rQXJyb3cuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuXHJcbiAgICBjb25zdCBsaW5rTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxpbmtMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmtfX2xpbmUnKTtcclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGlua1RleHQuY2xhc3NMaXN0LmFkZCgnbGlua19fdGV4dCcpO1xyXG4gICAgbGlua1RleHQudGV4dENvbnRlbnQgPSAncHJvamVjdHMnO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQobGlua0Fycm93LCBsaW5rTGluZSwgbGlua1RleHQpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3RBcnJvdzsiLCJjb25zdCBsb2FkUHJvamVjdFRhYiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhYicpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRFZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0RWRnZS5jbGFzc0xpc3QuYWRkKCdsZWZ0RWRnZScpO1xyXG4gICAgbGVmdEVkZ2UudGV4dENvbnRlbnQgPSAnY2xvc2UnXHJcblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJyk7XHJcblxyXG4gICAgcHJvamVjdFRhYi5hcHBlbmQobGVmdEVkZ2UsIHByb2plY3RDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XHJcbiAgICByZXR1cm4gcHJvamVjdFRhYjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0VGFiOyIsImNvbnN0IGxvYWRSZXR1cm5BcnJvdyA9IChwYXJlbnQpID0+IHtcclxuICAgIC8vIHZhcmlhYmxlIGZvciB0aGUgbmFtZXNwYWNlIFxyXG4gICAgY29uc3Qgc3ZnbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICAvLyBtYWtlIGEgc2ltcGxlIHJlY3RhbmdsZVxyXG4gICAgbGV0IHJldHVybkFycm93U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z25zLCAnc3ZnJyk7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiNTBcIik7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiNTBcIik7XHJcbiAgICByZXR1cm5BcnJvd1N2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMFwiKTtcclxuICAgIHJldHVybkFycm93U3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEwMFwiKTtcclxuICAgIC8vIHJldHVybkFycm93U3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjNWNjZWVlXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdwYXRoJyk7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTIyLDI5LjVoLTkuNWMtNi42MjcsMC0xMi01LjM3My0xMi0xMlYwXCIpO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1taXRlcmxpbWl0JywgXCIxMFwiKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCdmaWxsJywgXCJub25lXCIpO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIFwiIzAwMDAwMFwiKTtcclxuXHJcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnbnMsICdjaXJjbGUnKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2N4JywgXCIyOS44NzVcIik7XHJcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdjeScsIFwiMjkuMTI1XCIpO1xyXG4gICAgZG90LnNldEF0dHJpYnV0ZSgncicsIFwiNy44NzVcIik7XHJcbiAgICAvLyBkb3Quc2V0QXR0cmlidXRlKCdmaWxsJywgXCIjMDAwMDAwXCIpO1xyXG4gICAgZG90LnNldEF0dHJpYnV0ZSgnZmlsbCcsIFwibm9uZVwiKTtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIFwiIzAwMDAwMFwiKTtcclxuXHJcbiAgICByZXR1cm5BcnJvd1N2Zy5hcHBlbmQobGluZSxkb3QpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJldHVybkFycm93U3ZnKTtcclxuXHJcbiAgICByZXR1cm4gcmV0dXJuQXJyb3dTdmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFJldHVybkFycm93OyIsIi8vIGltcG9ydCBwcm9maWxlMDAgZnJvbSAnLi4vYXNzZXRzL3Byb2ZpbGVQaWMwMC5qcGcnO1xyXG5cclxuY29uc3QgbG9hZFJpZ2h0TWFpbiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgcmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250YWluZXJcIiwgXCJyaWdodFwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLnNyYyA9IHByb2ZpbGUwMDtcclxuXHJcbiAgICBjb25zdCBjaXJjbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNpcmNsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGVDb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYzEuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XHJcbiAgICBjMS5jbGFzc0xpc3QuYWRkKCdjaXJjbGVEZXNpZ24nKTtcclxuICAgIGNvbnN0IGMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjMi5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuICAgIGMyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZUNvZGUnKTtcclxuICAgIGNvbnN0IGMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjMy5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuICAgIGMzLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZUFydCcpO1xyXG5cclxuICAgIGNpcmNsZUNvbnRhaW5lci5hcHBlbmQoYzEsIGMyLCBjMyk7XHJcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmQoY2lyY2xlQ29udGFpbmVyLCBiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiByaWdodENvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRSaWdodE1haW47IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9zY3JpcHRzL1Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQsIGNyZWF0ZUZpZ3VyZX0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgYWFnX2NvdmVyIGZyb20gJy4uL2Fzc2V0cy9hYWcvYWFnX2NvdmVyLmpwZyc7XHJcbmltcG9ydCBwcm9jZXNzRGlhZ3JhbSBmcm9tICcuLi9hc3NldHMvYWFnL2RpYWdyYW1fcHJvY2Vzcy5wbmcnO1xyXG5pbXBvcnQgdGVzdFByaW50cyBmcm9tICcuLi9hc3NldHMvYWFnL3Rlc3RzLmpwZyc7XHJcbmltcG9ydCB3czAgZnJvbSAnLi4vYXNzZXRzL2FhZy93b3Jrc2hvcDAwLmpwZyc7XHJcbmltcG9ydCB3czEgZnJvbSAnLi4vYXNzZXRzL2FhZy93b3Jrc2hvcDAxLmpwZyc7XHJcbmltcG9ydCBleGhpYml0MCBmcm9tICcuLi9hc3NldHMvYWFnL2V4aGliaXRpb24wMC5qcGcnO1xyXG5pbXBvcnQgZXhoaWJpdDEgZnJvbSAnLi4vYXNzZXRzL2FhZy9leGhpYml0aW9uMDEuanBnJztcclxuXHJcbmNvbnN0IGFhZyA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgXCJGb3Jtd29yay1GcmVlIGFuZCBNb3J0YXItRnJlZSBTaGVsbCBBc3NlbWJseVwiLCBcclxuICAgICAgICAyMDE4LCBcclxuICAgICAgICBcIkdvdGhlbmJ1cmcgU3dlZGVuXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJkZXNpZ25cIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiYWNhZGVtaWNcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwidGVhY2hpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiZmFicmljYXRpb25cIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHRpID0gY3JlYXRlRWxlbWVudFRleHQoJ2gxJywgcHJvai5UaXRsZSk7XHJcbiAgICBjb25zdCBpbnRyb2hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBpbnRyb2hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkludHJvZHVjdGlvblwiO1xyXG4gICAgY29uc3QgaW1nX2NvdmVyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdfY292ZXIuc3JjID0gYWFnX2NvdmVyO1xyXG4gICAgLy9JTlRST1xyXG4gICAgY29uc3QgaW50cm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnRybzEudGV4dENvbnRlbnQgPSBcIkZvcm13b3JrLUZyZWUgYW5kIE1vcnRhci1GcmVlIFNoZWxsIEFzc2VtYmx5IGlzIGEgd29ya3Nob3AgSSBsZWQgaW4gR290aGVuYnVyZywgU3dlZGVuLCBmb3IgdGhlIEFkdmFuY2VzIGluIEFyY2hpdGVjdHVyYWwgR2VvbWV0cnkgQ29uZmVyZW5jZSBpbiAyMDE4LlwiO1xyXG4gICAgY29uc3QgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpbnRybzIudGV4dENvbnRlbnQgPSBcIlRoZSBvYmplY3RpdmUgd2FzIHRvIGRlbW9uc3RyYXRlIHRvIHN0dWRlbnRzIHRoZSB3b3JraW5ncyBhbmQgYmVuZWZpdHMgb2YgdGhlIGNvbXB1dGF0aW9uYWwgZGVzaWduIHBhcmFkaWdtIHRoYXQgYWxsb3dzIHNlYW1sZXNzIGludGVncmF0aW9uIGJldHdlZW4gZGVzaWduLCBmYWJyaWNhdGlvbiBhbmQgYXNzZW1ibHkgaW4gc2V0dGluZ3Mgd2hlcmUgbWFueSBjb21wbGV4IGNvbnN0cmFpbnRzIGNvbWUgdG9nZXRoZXIsIHRodXMgbWFraW5nIGl0IHVuc3VpdGFibGUgZm9yIGNvbnZlbnRpb25hbCwgYW5hbG9nIGRlc2lnbiBtZXRob2RvbG9naWVzLiBQZWRhZ29naWNhbGx5LCB0aGUgc3R1ZGVudHMgZXhwZXJpZW5jZWQgaXQgZmlyc3RoYW5kIGJ5IGRlc2lnbmluZyBmdW5pY3VsYXIgc2hlbGwgc3RydWN0dXJlcyB0aGF0IGhvbGQgdG9nZXRoZXIgd2l0aG91dCBmb3Jtd29yayBhc3NlbWJseSBhbmQgbW9ydGFyIHRocm91Z2ggYSBwYXJhbWV0cmljIG1vZGVsIHRoYXQgZW1iZWRzIGZhYnJpY2F0aW9uIGRhdGEsIHN1YnNlcXVlbnRseSBzZW5kaW5nIHRoZWlyIGRlc2lnbiBlbGVtZW50cyB0byBhIHJvYm90aWMgYXJtIGZvciBob3R3aXJlIGZhYnJpY2F0aW9uLiBUaGlzIHJlc3VsdHMgaW4gYSB0aWdodCBmZWVkYmFjayBsb29wIHdoZXJlIHN0dWRlbnRzIHdlcmUgYWJsZSB0byBzZWUgdGhlIGVmZmVjdHMgb2YgdGhlaXIgZGVzaWduIGRlY2lzaW9ucyBpbiBhIHJlYWwtd29ybGQgcHJvdG90eXBlIHdpdGggYSBtaW5pbWFsIGRlbGF5IGFuZCBhZGFwdCB0aGVpciBkZXNpZ24gaW4gdGhlIG5leHQgaXRlcmF0aW9uLlwiOyBcclxuXHJcbiAgICBjb25zdCB2aWRfZmFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfZmFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWRlb0NvbnRhaW5lcicpO1xyXG4gICAgdmlkX2ZhYi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlO1wiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc5MjY4NDM2OD9oPWJmMDJmMTliMWYmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgdGl0bGU9XCJBQUcgLSBTaGVsbHMgLSBGYWJyaWNhdGlvbiBDbGlwXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcblxyXG4gICAgLy9GZWF0dXJlc1xyXG4gICAgY29uc3QgZmVhdHVyZXNIZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoXCJoMlwiLCAnRmVhdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgZmVhdDEgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdCZXNwb2tlIEdyYXNzaG9wcGVyIHBsdWdpbiBwcm92aWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGNyZWF0aW9uIG9mIHNoZWxsIHNlZ21lbnRzIHJlYWR5IGZvciBmYWJyaWNhdGlvbicpO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdJbnRlZ3JhdGVzIFNwYXRpYWxTbHVyLCBhIGdlb21ldHJpYyBkYXRhIG1hbmlwdWxhdGlvbiBsaWJyYXJ5Jyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1NoZWxsIHN0cnVjdHVyYWwgZXZhbHVhdGlvbiBpbXBsZW1lbnRpbmcgdGhydXN0IG5ldHdvcmsgYW5hbHlzaXMgb24gaGFsZi1lZGdlIG1lc2ggc3RydWN0dXJlcycpO1xyXG4gICAgY29uc3QgZmVhdDQgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdJbnRlZ3JhdGlvbiB3aXRoIGN1c3RvbS1tYWRlIHJvYm90aWMgaG90d2lyZS1jdXR0ZXInKTtcclxuICAgIGZlYXR1cmVzLmFwcGVuZChmZWF0MSwgZmVhdDIsZmVhdDMsIGZlYXQ0KTtcclxuICAgIC8vVGVjaG5vbG9naWVzXHJcbiAgICBjb25zdCB0ZWNoSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsICdUZWNobm9sb2dpZXMnKTtcclxuICAgIGNvbnN0IHRlY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGVjaDEgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnQyMnKTtcclxuICAgIGNvbnN0IHRlY2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0t1a2FQUkMgZm9yIHJvYm90aWMga2luZW1hdGljIHNpbXVsYXRpb24gYW5kIEdDb2RlIGdlbmVyYXRpb24nKTtcclxuICAgIGNvbnN0IHRlY2gzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ1NwYXRpYWxTbHVyJyk7XHJcbiAgICBjb25zdCB0ZWNoNCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdIYWxmLWVkZ2UgbWVzaCBzdHJ1Y3R1cmUgdG8gZmFjaWxpYXRlIGdlb21ldHJpYyBvcGVyYXRpb25zIGFuZCBmb3JjZSBzaW11bGF0aW9uJyk7XHJcbiAgICB0ZWNoLmFwcGVuZCh0ZWNoMSwgdGVjaDIsIHRlY2gzLHRlY2g0KTtcclxuXHJcblxyXG4gICAgY29uc3QgaW1nX3Byb2Nlc3MgPSBjcmVhdGVGaWd1cmUocHJvY2Vzc0RpYWdyYW0sICdQcm9jZXNzIGRpYWdyYW0nKTtcclxuICAgIGNvbnN0IGltZ190ZXN0cyA9IGNyZWF0ZUZpZ3VyZSh0ZXN0UHJpbnRzLCBcIlNtYWxsIHNjYWxlIHRlc3QgcHJpbnRzIG9mIGRpZmZlcmVudCBpbnRlcmxvY2sgZGVzaWduc1wiKVxyXG4gICAgY29uc3QgaW1nX3dzMCA9IGNyZWF0ZUZpZ3VyZSh3czAsIFwiQ2xhc3MgdHV0b3JpYWxzIHRvIGludHJvZHVjZSB0b29scy5cIilcclxuICAgIGNvbnN0IGltZ193czEgPSBjcmVhdGVGaWd1cmUod3MxLCBcIlJvYm90IHdvcmtzaG9wIGZvciB0aGUgc3R1ZGVudHNcIilcclxuICAgIGNvbnN0IGltZ19leGhpYml0MCA9IGNyZWF0ZUZpZ3VyZShleGhpYml0MCwgXCJPdXIgc3BvdCBpbiB0aGUgZmluYWwgZXhoaWJpdGlvblwiKVxyXG4gICAgY29uc3QgaW1nX2V4aGliaXQxID0gY3JlYXRlRmlndXJlKGV4aGliaXQxLCBcIkZpbmFsIGV4aGliaXRpb24gc3BhY2VcIilcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aSwgaW1nX2NvdmVyLCBpbnRyb2hlYWRpbmcsIGludHJvMSwgaW1nX3dzMCwgaW1nX3dzMSwgaW50cm8yLCB2aWRfZmFiLCBpbWdfZXhoaWJpdDAsIGltZ19leGhpYml0MSxcclxuICAgICAgICBmZWF0dXJlc0hlYWRpbmcsIGZlYXR1cmVzLCBpbWdfcHJvY2VzcywgaW1nX3Rlc3RzLCB0ZWNoSGVhZGluZywgdGVjaCk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFhZzsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3NjcmlwdHMvUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVJbWFnZSB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxcIjtcclxuXHJcbi8vbWVkaWFcclxuaW1wb3J0IGRpYWdyYW1fY2xhc3NlcyBmcm9tICcuLi9hc3NldHMvbGJkL0hpdmVNaW5kQ2xhc3Nlcy5qcGcnO1xyXG5cclxuY29uc3QgZHJvbmVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIkxlYXJuaW5nLUJhc2VkIERlc2lnblwiLCAyMDIyLCBcIkxvbmRvbiwgVUtcIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFjYWRlbWljXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFkZGl0aXZlIG1hbnVmYWN0dXJpbmdcIik7XHJcbiAgICBwcm9qLmFkZENhdGVnb3J5KFwiY29kZVwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJBSVwiKTtcclxuXHJcbiAgICBwcm9qLlN1YnRpdGxlID0gXCJJbXBsZW1lbnRpbmcgYSBMZWFybmluZy1CYXNlZCBDaGFuZ2UgRGV0ZWN0aW9uIEZyYW1ld29yayBmb3IgYSBTZWxmLUNvcnJlY3RpdmUgQmVoYXZpb3VyYWwgTW9kZWwgaW4gQWVyaWFsIEFkZGl0aXZlIE1hbnVmYWN0dXJpbmcgfCBJbXBlcmlhbCBDb2xsZWdlIE1hc3RlciBUaGVzaXNcIjtcclxuXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qLlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YnRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvai5TdWJ0aXRsZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgWWVhcjogJyArIHByb2ouWWVhcik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IExvY2F0aW9uOiAnICsgcHJvai5Mb2NhdGlvbik7XHJcblxyXG4gICAgY29uc3QgY292ZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBjb25zdCBpbnRyb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcclxuICAgICAgICBcIkludHJvZHVjdGlvblwiKTtcclxuICAgIGNvbnN0IGludHJvID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnTGVhcm5pbmctQmFzZWQgRGVzaWduIHdhcyBteSBtYXN0ZXIgdGhlc2lzIGZvciB0aGUgTVNjIGluIENvbXB1dGluZyBhdCBJbXBlcmlhbCBDb2xsZWdlIExvbmRvbi4gRHVlIHRvIHRoZSBjb25maWRlbnRpYWwgbmF0dXJlIG9mIHRoZSBwcm9qZWN0LCBJIGFtIG5vdCBhYmxlIHRvIHB1Ymxpc2ggYW55IGNvbmNyZXRlIHJlc3VsdHMsIGhvd2V2ZXIsIEkgd2lsbCBpbmNsdWRlIGhlcmUgc29tZSBnZW5lcmFsIGluZm9ybWF0aW9uIGFuZCB0ZWNobm9sb2dpZXMgdXNlZC4gSWYgdGhlcmUgaXMgaW50ZXJlc3QsIHBsZWFzZSBmZWVsIGZyZWUgdG8gY29udGFjdCBtZSBmb3IgZnVydGhlciBkaXNjdXNzaW9uIHdoaWxlIGF2b2lkaW5nIGFueSBzZW5zaXRpdmUgdG9waWNzIDopLicpO1xyXG5cclxuICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlYW0uaW5uZXJIVE1MID0gJzxzdHJvbmc+VGVhbTo8L3N0cm9uZz4gVGFvbGUgQ2hlbiwgWXVzdWYgS2F5YSwgTGFjaGxhbiBPcnI8YnI+PHN0cm9uZz5BZHZpc29yOjwvc3Ryb25nPkRyLiAgIEJhc2FyYW4gQmFoYWRpciBLb2Nlcjxicj5JbiBjb2xsYWJvcmF0aW9uIHdpdGggdGhlIDxhIGhyZWYgPSBcImh0dHBzOi8vd3d3LmltcGVyaWFsLmFjLnVrL2Flcm9uYXV0aWNzL2Fib3V0L1wiPkltcGVyaWFsIEFlcm9uYXV0aWNzIERlcGFydG1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZW1wYS5jaC93ZWIvZW1wYS9yZXNlYXJjaC1hcmVhc1wiPkVNUEE8L2E+JztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aXRsZSwgc3VidGl0bGUsIHllYXIsIGxvY2F0aW9uLCBjb3ZlciwgaW50cm9IZWFkaW5nLCBpbnRybywgdGVhbSk7XHJcblxyXG4gICAgY29uc3Qgc3VtbWFyeUhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCBcIlN1bW1hcnlcIik7XHJcbiAgICAvLyBjb25zdCBuZWlnaHN1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCAnVGhlIEJ1aWxkaW5nIGFzIGEgTmV0d29yaycpXHJcbiAgICBjb25zdCBzdW0wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3VtMC5pbm5lckhUTUwgPSBcclxuICAgICAgICAnVGhlIHByb2plY3Qgc2l0dWF0ZXMgZGVzaWduIGluIHRoZSBjb250ZXh0IG9mIEluZHVzdHJ5IDQuMCBhbmQgdGhlIHJhZGljYWxseSBuZXcgZGlzY2lwbGluZSBvZiA8YSBocmVmPVwiaHR0cDovL3d3dy5hZXJpYWwtYWJtLmNvbS9cIj5BZXJpYWwgQWRkaXRpdmUgQnVpbGRpbmcgTWFudWZhY3R1cmluZzwvYT4uIFdpdGggdGhlIHByb2xpZmVyYXRpb24gb2YgZGlnaXRhbCB0ZWNobm9sb2dpZXMgaW4gdGhlIEFFQyBpbmR1c3RyeSwgdGhlIGZ1dHVyZSB0cmFqZWN0b3J5IG9mIHRoZSBpbmR1c3RyeSBpcyBwb2ludGluZyB0b3dhcmRzIGF1dG9ub21vdXMsIGNsb3NlZC1sb29wIHJvYm90aWMgc3lzdGVtcywgY3JlYXRpbmcgdGhlIG5lZWQgdG8gZGV2ZWxvcCBkZXNpZ24gbWV0aG9kb2xvZ2llcyB0aGF0IGNhbiBlbmdhZ2Ugd2l0aCBtYWNoaW5lLWNlbnRyaWMgcHJvY2Vzc2VzLic7XHJcbiAgICBjb25zdCBzdW0xID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnQWVyaWFsIEFkZGl0aXZlIE1hbnVmYWN0dXJpbmcgKEFBTSkgaXMgYW4gZWFybHktc3RhZ2UgcmVzZWFyY2ggdGhhdCBpcyBkZXZlbG9waW5nIGEgcGlvbmVlcmluZyBmcmFtZXdvcmsgZm9yIG11bHRpLWFnZW50IGFkZGl0aXZlIG1hbnVmYWN0dXJpbmcgd2l0aCBVbm1hbm5lZCBBZXJpYWwgdmVoaWNsZXMgKFVBVikuIEN1cnJlbnRseSwgQUFNIGRvZXMgbm90IGhhdmUgYSBkZXNpZ24tdG8tZmFicmljYXRpb24gd29ya2Zsb3cgbm9yIGEgZGVkaWNhdGVkIGRlc2lnbiBmcmFtZXdvcmsgdG8gaW50ZXJmYWNlIHdpdGggZHVlIHRvIGl0cyBpbmZhbmN5LiBUbyBhZGRyZXNzIHRoaXMgZ2FwLCBteSByZXNlYXJjaCBhaW1lZCB0byBkZXZlbG9wIHRoZSBmaXJzdCBzdGFnZXMgb2YgYSBkZXNpZ24gaW50ZXJmYWNlIGZvciBtdWx0aS1hZ2VudCBBQU0uIE1vcmUgc3BlY2lmaWNhbGx5LCBhIHJlYWx0aW1lLCBpbi1zaXR1IGNoYW5nZSBkZXRlY3Rpb24gYW5kIGNvcnJlY3Rpb24gZnJhbWV3b3JrIHdpdGggYSBtYWNoaW5lIGxlYXJuaW5nIGFwcHJvYWNoIGJhc2VkIG9uIHBvaW50IGNsb3VkcyB3YXMgZGV2ZWxvcGVkIGFuZCBzdWJzZXF1ZW50bHkgdmFsaWRhdGVkIHRocm91Z2ggcGh5c2ljYWwgZXhwZXJpbWVudHMuJyk7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHMoc3VtbWFyeUhlYWQsIHN1bTAsIHN1bTEpO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ0ZlYXR1cmVzJyk7XHJcbiAgICBjb25zdCBmZWF0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBmZWF0MCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdCZWhhdmlvdXJhbCBNb2RlbCBmb3IgQUFNIHVzaW5nIHBvaW50IGNsb3VkcyBhcyBhIGRhdGEgbWVkaXVtLiBQb2ludCBjbG91ZHMgaGF2ZSB0aGUgYWR2YW50YWdlIG9mIGJlaW5nIGFuIGludGVncmFsIHBhcnQgb2YgZHJvbmUgdmlzaW9uLCBzbyBubyBhZGRpdGlvbmFsIHRyYW5zbGF0aW9uIGlzIHJlcXVpcmVkIGJldHdlZW4gZGVzaWduIGFuZCBmYWJyaWNhdGlvbi4nKVxyXG4gICAgY29uc3QgZmVhdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZmVhdDEuaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJ0MjIFdyYXBwZXIgZm9yIHRoZSBwb3B1bGFyIEMrKyA8YSBocmVmPVwiaHR0cHM6Ly9wb2ludGNsb3Vkcy5vcmcvXCI+UG9pbnQgQ2xvdWQgTGlicmFyeTwvYT4gKHBjbCksIGEgMkQvM0QgcHJvY2Vzc2luZyBsaWJyYXJ5IHRoYXQgaXMgcG9wdWxhciBhbW9uZyByb2JvdGljIGRldmVsb3BtZW50IGNvbW11bml0aWVzIGFuZCBpbnRlZ3JhdGVzIHdpdGggdGhlIFJPUyBmcmFtZXdvcmsuJztcclxuICAgIGNvbnN0IGZlYXQyID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ01hY2hpbmUgTGVhcm5pbmcgbW9kZWwgaW1wbGVtZW50aW5nIGEgY3VzdG9tIHJhbmRvbSBmb3Jlc3QgY2xhc3NpZmllciB3aXRoIEpTT04gZXhwb3J0IGZvciBlYXNlIG9mIGRpc3RyaWJ1dGlvbi4gT3RoZXIgY2xhc3NpZmllcnMsIHN1Y2ggYXMgYSBuZXVyYWwgbmV0d29yaywgd2VyZSBhbHNvIGltcGxlbWVudGVkLCB0aG91Z2ggbm90IHVzZWQgZm9yIHRoZSBmaW5hbCBleHBlcmltZW50LicpO1xyXG4gICAgY29uc3QgZmVhdDMgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnVGVuc29yIGRhdGEgb2JqZWN0IGltcGxlbWVudGF0aW9uIGluIEdyYXNzaG9wcGVyIHVzaW5nIFRlbnNvcmZsb3cuTkVUXFwncyBOdW1weSwgYWxsb3dpbmcgbXVsdGlkaW1lbnNpb25hbCBtYXRyaXggb3BlcmF0aW9ucyBpbiB0aGUgR0ggZW52aXJvbm1lbnQuJyk7XHJcbiAgICBjb25zdCBmZWF0NCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdTdGFuZC1hbG9uZSBjb3JlIEMjIGxpYnJhcnkgd2l0aCB0ZXN0aW5nIHRoYXQgY2FuIGJlIHBvcnRlZCB0byBvdGhlciBhcHBsaWNhdGlvbnMuJyk7XHJcblxyXG5cclxuICAgIGZlYXRsaXN0LmFwcGVuZChmZWF0MCwgZmVhdDEsIGZlYXQyLCBmZWF0MywgZmVhdDQpO1xyXG4gICAgcHJvai5wdXNoQ29udGVudHMoZmVhdHVyZXNIZWFkaW5nLCBmZWF0bGlzdCk7XHJcblxyXG4gICAgY29uc3QgYXJjaGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dChcImgzXCIsICdBcmNoaXRlY3R1cmUnKTtcclxuICAgIGNvbnN0IGFyY2gwID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCAnVGhlIGNvZGUgZm9yIHRoZSBwYXBlciB3YXMgaW1wbGVtZW50ZWQgYXMgYSBHcmFzc2hvcHBlciBwbHVnLWluIGxpYnJhcnkuIFRoZSBjb3JlIGxpYnJhcnkgaXMgd3JpdHRlbiBpbiBDIyBhbmQgY2FyZSB3YXMgdGFrZW4gdG8gbWFpbnRhaW4gYSBoZXhhZ29uYWwgYXJjaGl0ZWN0dXJlIGZvciBmdXR1cmUgYWRhcHRhYmlsaXR5LiBGdW5jdGlvbmFsaXR5IGZvciBwb2ludCBjbG91ZHMgYW5kIG1hY2hpbmUgbGVhcm5pbmcgaXMgYWRkZWQgd2l0aCB0aGUgYWRhcHRlciBwYXR0ZXJuIHNvIGl0IGNhbiBiZSByZXBsYWNlZCB3aXRoIHVwZGF0ZWQgbW9kdWxlcy4gQSBjb250cm9sbGVyIGxpYnJhcnkgbmFtZWQgSGl2ZU1pbmRHSCBlc3RhYmxpc2hlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgY29yZSBsaWJyYXJ5IGFuZCBHcmFzc2hvcHBlcuKAmXMgdmlzdWFsIGludGVyZmFjZS4nKVxyXG4gICAgXHJcbiAgICBjb25zdCBpbWdfY2xhc3NEaWFncmFtID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdfY2xhc3NEaWFncmFtLnNyYyA9IGRpYWdyYW1fY2xhc3NlcztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhhcmNoaGVhZGluZywgYXJjaDAsIGltZ19jbGFzc0RpYWdyYW0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb25lczsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3NjcmlwdHMvUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVJbWFnZSB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxcIjtcclxuXHJcbi8vbWVkaWFcclxuaW1wb3J0IHJlbmRlcl9mYWNhZGUgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9yZW5kZXJfZmFjYWRlLmpwZyc7XHJcbmltcG9ydCByZW5kZXJfaW50ZXJpb3IgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9yZW5kZXJfaW50ZXJpb3IuanBnJztcclxuaW1wb3J0IGFuaW1fem9vbVNjYWxlc18wMCBmcm9tICcuLi9hc3NldHMvbWF0bmV0L2FuaW1fem9vbVNjYWxlc18wMC5naWYnO1xyXG5pbXBvcnQgYW5pbV9ncm93dGhfYWxsIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvYW5pbV9ncm93dGhfYWxsLmdpZic7XHJcbmltcG9ydCBhbmltX2dyb3d0aF90dXJudGFibGUgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9hbmltX2dyb3d0aF90dXJudGFibGUuZ2lmJztcclxuaW1wb3J0IHVuaXQwMCBmcm9tICcuLi9hc3NldHMvbWF0bmV0L3VuaXRfMDAuanBnJztcclxuaW1wb3J0IHVuaXRsYXlvdXQgZnJvbSAnLi4vYXNzZXRzL21hdG5ldC91bml0X2xheW91dC5qcGcnXHJcbmltcG9ydCBhbmltX2dyYXBoVG9BcmNoIGZyb20gJy4uL2Fzc2V0cy9tYXRuZXQvYW5pbV9ncmFwaFRvQXJjaC5naWYnXHJcblxyXG5jb25zdCBtYXRuZXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiTWF0ZXJpYWwgTmV0d29ya3NcIiwgMjAxOCwgXCJMb25kb24sIFVLXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImRlc2lnblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImZhYnJpY2F0aW9uXCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIk1hc3MtQ3VzdG9taXplZCBIb3VzaW5nIGZvciBDb2hlc2l2ZSBDb21tdW5pdGllcy4gQUFEUkwgTWFzdGVyIFRoZXNpc1wiXHJcblxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudFRleHQoJ2gxJywgcHJvai5UaXRsZSk7XHJcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMicsIHByb2ouU3VidGl0bGUpO1xyXG4gICAgY29uc3QgeWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IFllYXI6ICcgKyBwcm9qLlllYXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBMb2NhdGlvbjogJyArIHByb2ouTG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnN0IGltZ19jb3ZlciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nX2NvdmVyLnNyYyA9IHJlbmRlcl9mYWNhZGU7XHJcblxyXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXHJcbiAgICAgICAgXCJJbnRyb2R1Y3Rpb25cIik7XHJcbiAgICBjb25zdCBpbnRybyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ01hdGVyaWFsIE5ldHdvcmtzIGlzIHRoZSBjdWxtaW5hdGlvbiBvZiBteSByZXNlYXJjaCBhdCB0aGUgQXJjaGl0ZWN0dXJhbCBBc3NvY2lhdGlvbiAtIERlc2lnbiBSZXNlYXJjaCBMYWIuIFRoZSBwcm9qZWN0IGVuZ2FnZXMgd2l0aCB0aGUgcmFwaWQgZGlnaXRpemF0aW9uIG9mIHRoZSBidWlsdCBlbnZpcm9ubWVudCBhbmQgbG9va3MgYXQgaG93IGRlc2lnbiBhZ2VuY3kgY2FuIGFkYXB0IHRvIGEgZnVsbHkgYXV0b21hdGVkLCBjb21wdXRlci1kcml2ZW4gd29ybGQgd2hpbGUgYnJpbmdpbmcgdGhlIGh1bWFuIGVsZW1lbnQgdG8gdGhlIGZvcmVmcm9udCBvZiB0aGUgZGlzY291cnNlLiBNYXRlcmlhbCBOZXR3b3JrcyBwcm9wb3NlcyBhIG5lZ290aWF0ZWQgY29tbXVuYWwgaG91c2luZyBzeXN0ZW0gdGhhdCBwcm92aWRlcyBjdXN0b20tdGFpbG9yZWQgbmVpZ2hib3Job29kcyB0byBjb2hlc2l2ZSBjb21tdW5pdGllcyB0aWVkIGJ5IHRoZWlyIHNoYXJlZCBjdWx0dXJlcywgZWNvbm9taWVzIGFuZCBnb3Zlcm5hbmNlLiBCdWlsZGluZy1zY2FsZSBhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nIGlzIGludmVzdGlnYXRlZCBhcyBhbiBhdXRvbWF0ZWQgZmFicmljYXRpb24gdGVjaG5vbG9neSB0aGF0IGNhbiBkZWxpdmVyIG1hc3MtY3VzdG9taXplZCwgaW50ZWdyYXRlZCBkd2VsbGluZ3MgdGhyb3VnaCBhIGdlbmVyYXRpdmUgQUkgZnJhbWV3b3JrLicpO1xyXG5cclxuICAgIGNvbnN0IHRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZWFtLmlubmVySFRNTCA9ICdEZXNpZ24gVGVhbTogVGFvbGUgQ2hlbiwgU3VjaGFydCAoQm9uKSBPdXlwb3JuY2hhaXNha3VsLCBKZWZmcmV5IFdpZGphamE8YnI+VHV0b3JzOiBTaGFqYXkgQmhvb3NoYW4sIEFsaWNpYSBOYWhtYWQ8YnI+PGEgaHJlZj1cImh0dHBzOi8vZHJsLmFhc2Nob29sLmFjLnVrL1wiPkFBRFJMPC9hPic7XHJcblxyXG4gICAgY29uc3QgaW1nX2ludGVyaW9yID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdfaW50ZXJpb3Iuc3JjID0gcmVuZGVyX2ludGVyaW9yO1xyXG4gICAgcHJvai5wdXNoQ29udGVudHModGl0bGUsIHN1YnRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgaW1nX2NvdmVyLCBpbnRyb0hlYWRpbmcsIGludHJvLCB0ZWFtLCBpbWdfaW50ZXJpb3IpO1xyXG5cclxuICAgIC8vbGV2ZWwgMCBuZWlnaGJvcmhvb2RcclxuICAgIGNvbnN0IG5laWdoSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFwiTGV2ZWwgMCBOZWlnaGJvcmhvb2RcIik7XHJcbiAgICBjb25zdCBuZWlnaHN1YkhlYWQgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDQnLCAnVGhlIEJ1aWxkaW5nIGFzIGEgTmV0d29yaycpXHJcbiAgICBjb25zdCBuZWlnaDAgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgIFwiQ28tb3B0aW5nIHRlY2huaXF1ZXMgZnJvbSBjb21wbGV4IG5ldHdvcmsgYW5hbHlzaXMsIGF0IHRoZSBuZWlnaGJvcmhvb2QgbGV2ZWwsIHRoZSByZXNlYXJjaCBsb29rcyBpbnRvIGRldmVsb3BpbmcgYW4gb3BlcmF0aW9uYWwgdG9vbCBmb3IgZXh0cmFjdGluZyBtZWFuaW5nZnVsIHNwYXRpYWwgcmVsYXRpb25zaGlwIGZyb20gdGhlIHNvY2lhbCBuZXR3b3JrIG9mIGEgY29tbXVuaXR5LlwiKTtcclxuICAgIGNvbnN0IG5laWdoMSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ1RoZSBzb2NpYWwgcmVsYXRpb25zaGlwcyBvZiBhIGdpdmVuIGNvbW11bml0eSBhcmUgY2FwdHVyZWQgaW4gYSByZWxhdGlvbmFsIHJvc3RlciBpbiB0aGUgZm9ybSBvZiBhbiBlbmNvZGVkIGRhdGEgbWF0cml4LCBhbGxvd2luZyBjb21wdXRlcnMgdG8gZWFzaWx5IHJlYWQgYW5kIHByb2Nlc3MgdGhlIGluZm9ybWF0aW9uLiBUaGUgZGF0YSBtYXRyaXggaXMgc3Vic2VxdWVudGx5IHVzZWQgdG8gY29uc3RydWN0IGEgbmV0d29yayBncmFwaC4gVGhlIGdyYXBoIGlzIHVzZWZ1bCBiZWNhdXNlIGl0IGNhcHR1cmVzIG11bHRpLXNjYWxhciBpbmZvcm1hdGlvbiBpbiBhIHNpbmdsZSwgY29oZXNpdmUgZGF0YSBzdHJ1Y3R1cmUsIG9wZW5pbmcgdXAgY29tcHV0YXRpb25hbCB3YXlzIG9mIGVuZ2FnaW5nIHdpdGggdGhlIGluZm9ybWF0aW9uLicpO1xyXG4gICAgY29uc3QgbmVpZ2gyID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnVGhlIGdyYXBoIGlzIGdpdmVuIGFnZW5jeSBieSBkZXBsb3lpbmcgYSBydWxlLWJhc2VkIGdyb3d0aCBhbGdvcml0aG0gb24gdGhlIHByb2plY3Qgc2l0ZS4gQSBwYXRoLWZpbmRpbmcgbG9naWMgaXMgdXNlZCB0byBnZW5lcmF0ZSBzY2hlbWVzLCB3aXRoIHNwZWNpZmljIHJ1bGUgZGV0ZXJtaW5pbmcgdGhlIHJlc3VsdGluZyBjaGFyYWN0ZXIgb2YgdGhlIG5laWdoYm9yaG9vZCB3aGlsZSBlbnN1cmluZyB0aGUgY29tcHV0ZWQgc3BhdGlhbCByZWxhdGlvbnNoaXBzIGFyZSBtYWludGFpbmVkLiBUaGUgZGVjb3VwbGluZyBvZiBmb3JtYWwgYWdlbmN5IGZyb20gdGhlIGhhbmRzIG9mIHRoZSBodW1hbiBkZXNpZ25lciBzaWduaWZpZXMgYSBjcnVjaWFsIHN0ZXAgdG93YXJkcyBhIGZ1bGx5IGF1dG9ub21vdXMgY29uc3RydWN0aW9uIGZyYW1ld29yay4gWWV0LCB3aXRoIHRoZSBydWxlLWJhc2VkIHN5c3RlbSwgZGVzaWduZXJzIGFyZSBzdGlsbCBnaXZlbiBjb250cm9sIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IHRvIHJlc29ydCB0byB0aGUgc2N1bHB0aW5nIG9mIGZvcm0sIHRodXMgcHJpb3JpdGl6aW5nIGEgbG9naWMtZHJpdmVuIGFwcHJvYWNoLCByYXRoZXIgdGhhbiBhZXN0aGV0aWNzLicpO1xyXG5cclxuICAgIGNvbnN0IHZpZF96b29tU2NhbGVzID0gY3JlYXRlSW1hZ2UoYW5pbV96b29tU2NhbGVzXzAwKTtcclxuICAgIGNvbnN0IHZpZF9ncm93dGhfYWxsID0gY3JlYXRlSW1hZ2UoYW5pbV9ncm93dGhfYWxsKTtcclxuICAgIGNvbnN0IHZpZF9ncm93dGhfdHVybnRhYmxlID0gY3JlYXRlSW1hZ2UoYW5pbV9ncm93dGhfdHVybnRhYmxlKTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhuZWlnaEhlYWQsIG5laWdoc3ViSGVhZCwgbmVpZ2gwLCBuZWlnaDEsIHZpZF96b29tU2NhbGVzLCBuZWlnaDIsIHZpZF9ncm93dGhfYWxsLCB2aWRfZ3Jvd3RoX3R1cm50YWJsZSk7XHJcblxyXG4gICAgLy9sZXZlbCAxIGhvbWVcclxuICAgIGNvbnN0IHVuaXRIZWFkID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXHJcbiAgICAgICAgXCJMZXZlbCAxIEhvbWVcIik7XHJcbiAgICBjb25zdCB1bml0U3ViSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNCcsIFxyXG4gICAgICAgICdIb21lIElzIFdoYXQgWW91IERvJylcclxuICAgIGNvbnN0IHVuaXQwID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnT24gdGhlIG5leHQgc2NhbGUgZG93biwgYSBjdXN0b21pc2F0aW9uIHN5c3RlbSBmb3IgdGhlIGluZGl2aWR1YWwgaG9tZSBhbGxvd3MgdGhlIGFyY2hpdGVjdHVyZSB0byByZXNwb25kIHRvIHRoZSBkYWlseSBwYXR0ZXJucyBvZiBlYWNoIG1lbWJlciBvZiB0aGUgY29tbXVuaXR5LicpO1xyXG4gICAgY29uc3QgdW5pdDEgPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdUaGUgYWN0dWFsIHVuaXRzIG9uIHNpdGUgYXJlIGEgbmVnb3RpYXRlZCByZXN1bHQgd2hlcmUgc2l0ZSBjb25zdHJhaW50cywgdW5pdCByZXF1aXJlbWVudHMgYW5kIHNoYXJlZCBhY3Rpdml0aWVzIGNvbWUgdG9nZXRoZXIuIFVzaW5nIGEgcmVsYXRpb25hbCBtb2RlbCBhbGxvd3MgdGhlIHVuaXQgdG8gYWRhcHQgdG8gdGhlIHNpdGUgd2hpbGUgc3RpbGwgbWFpbnRhaW5pbmcgaXRzIGltcG9ydGFudCBjb25uZWN0aW9ucy4nKTtcclxuICAgIGNvbnN0IHVuaXQyID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnTGV2ZWwgb2YgZGV0YWlscyAoTE9EKSBhcmUgZ3JhZHVhbGx5IGFkZGVkIHRvIHRoZSByYXcgc3BhY2UgZGlzdHJpYnV0aW9uIGZyb20gdGhlIGdyb3d0aCBhbGdvcml0aG0sIHR1cm5pbmcgYWJzdHJhY3Qgc3BhY2UgaW50byBjb25jcmV0ZSBhcmNoaXRlY3R1cmUuJyk7XHJcblxyXG4gICAgY29uc3QgaW1nX3VuaXRFeGFtcGxlID0gY3JlYXRlSW1hZ2UodW5pdDAwKTtcclxuICAgIGNvbnN0IGltZ191bml0TGF5b3V0ID0gY3JlYXRlSW1hZ2UodW5pdGxheW91dCk7XHJcbiAgICBjb25zdCB2aWRfZ3JhcGhUb0FyY2ggPSBjcmVhdGVJbWFnZShhbmltX2dyYXBoVG9BcmNoKTtcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh1bml0SGVhZCwgdW5pdFN1YkhlYWQsIGltZ191bml0RXhhbXBsZSwgdW5pdDAsIGltZ191bml0TGF5b3V0LCB1bml0MSwgdW5pdDIsIHZpZF9ncmFwaFRvQXJjaCk7XHJcblxyXG4gICAgLy9sZXZlbCAyIHRlY3Rvbmljc1xyXG4gICAgY29uc3QgdGVjdG9IZWFkID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXCJMZXZlbCAyIFRlY3Rvbmljc1wiKTtcclxuICAgIGNvbnN0IHRlY3RvU3ViSGVhZCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNCcsICdIb21lIElzIFdoYXQgWW91IERvJylcclxuICAgIGNvbnN0IHRlY3RvMCA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0FkZGl0aXZlIE1hbnVmYWN0dXJpbmcgd2FzIGlkZW50aWZpZWQgYXMgdGhlIHByaW1hcnkgY2FuZGlkYXRlIGZvciB0aGUgY29uc3RydWN0aW9uIHN5c3RlbSwgYXMgaXQgb2ZmZXJzIHRoZSBhYmlsaXR5IHRvIG1hbnVmYWN0dXJlIGZyZWUtZm9ybSBnZW9tZXRyaWVzIHdoaWxlIHByb3ZpZGluZyBjb3N0IGFuZCB0aW1lIHNhdmluZ3MsIGFuZCBpbmNyZWFzZWQgb25zaXRlIHNhZmV0eSBmb3IgYXV0b21hdGVkIHN5c3RlbXMuIEEgcm9ib3RpY3MtZmlyc3QgYXBwcm9hY2ggd2FzIG5lZWRlZCBmb3IgdGhlIGNvbnN0cnVjdGlvbiBzeXN0ZW0gdG8gaW50ZWdyYXRlIGludG8gdGhlIG92ZXJhbGwgZnJhbWV3b3JrLicpO1xyXG5cclxuICAgIGNvbnN0IHRlY3RvMSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0FuIG9uc2l0ZSwgc2VnbWVudGVkIGFwcHJvYWNoIHdpdGggbXVsdGktbWF0ZXJpYWwgcHJpbnRpbmcgd2FzIGVudmlzaW9uZWQsIGFzIG1vbm8tbWF0ZXJpYWwsIGNvbnRpbnVvdXMgcHJpbnRpbmcgaXMgYXJndWVkIHRvIGJlIGltcHJhY3RpY2FsIGFuZCB1bmRlc2lyYWJsZSBmb3IgYXJjaGl0ZWN0dXJhbCBhcHBsaWNhdGlvbnMsIGJlY2F1c2UgaXQgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIG11bHRpLXN5c3RlbWljIG5hdHVyZSBvZiBidWlsZGluZ3MuIEF1dG9ub21vdXMsIHJvYm90aWMgdW5pdHMgYXJlIGRlcGxveWVkIG9uc2l0ZSAnKTtcclxuXHJcblxyXG4gICAgY29uc3QgdGVjdG8yID0gY3JlYXRlRWxlbWVudFRleHQoJ3AnLCBcclxuICAgICAgICAnQ2xheSBpcyB1c2VkIGFzIGEgcHJveHkgbWF0ZXJpYWwgZm9yIHZpc2NvLWVsYXN0aWMsIGNlbWVudGl0aW91cyBtYXRlcmlhbHMgKG1vc3QgcmVsZXZhbnRseSBjb25jcmV0ZSkgdG8gcHJvdG90eXBlIGRlc2lnbiBpdGVyYXRpb25zIGFuZCB1bmRlcnN0YW5kIHRoZSBsaW1pdGF0aW9ucyBpbiByZWFsIHRlcm1zLiBBIHBuZXVtYXRpY2FsbHktb3BlcmF0ZWQgZXh0cnVzaW9uLWVuZC1lZmZlY3RvciB3YXMgZGV2ZWxvcGVkIGZyb20gc2NyYXRjaCBmb3IgdGhlIHJlc2VhcmNoIGFuZCBkZXBsb3llZCB3aXRoIHZhcmlvdXMgaW5kdXN0cmlhbCByb2JvdGljIGFybXMgZm9yIHByb3RvdHlwaW5nLiBUaHJvdWdoIHJpZ29yb3VzIHRlc3RpbmcsIGNyaXRpY2FsIHBhcmFtZXRlcnMgd2VyZSBkZWZpbmVkIGFuZCBpbmZvcm1lZCB0aGUgcG9zc2libGUgZ2VvbWV0cmljIGRlc2lnbiBleHByZXNzaW9ucy4nKTtcclxuXHJcbiAgICBjb25zdCB2aWRfZ3JhcGhUb0NvbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZGVvQ29udGFpbmVyJyk7XHJcbiAgICB2aWRfZ3JhcGhUb0NvbnN0cnVjdGlvbi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlXCI+PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzkwODMyODIwP2g9OTg0NWU5MjMzNyZhbXA7YmFkZ2U9MCZhbXA7YXV0b3BhdXNlPTAmYW1wO3BsYXllcl9pZD0wJmFtcDthcHBfaWQ9NTg0NzlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIiB0aXRsZT1cIkZyb20gR3JhcGggdG8gQ29uc3RydWN0aW9uXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcbiAgICBjb25zdCB2aWRfY29uc3RydWN0aW9uU2VxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfY29uc3RydWN0aW9uU2VxLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RWaWRlb0NvbnRhaW5lcicpO1xyXG4gICAgdmlkX2NvbnN0cnVjdGlvblNlcS5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cInBhZGRpbmc6NTYuMjUlIDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlO1wiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc5MDgzOTg2OD9oPTZiMzMxZjhhNGMmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCIgdGl0bGU9XCJDb25zdHJ1Y3Rpb24gU2VxdWVuY2VcIj48L2lmcmFtZT48L2Rpdj48c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCI+PC9zY3JpcHQ+JztcclxuICAgIGNvbnN0IHZpZF9mYWJIaWdobGlnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfZmFiSGlnaGxpZ2h0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VmlkZW9Db250YWluZXInKTtcclxuICAgIHZpZF9mYWJIaWdobGlnaHRzLmlubmVySFRNTCA9ICc8ZGl2IHN0eWxlPVwicGFkZGluZzo1Ni4yNSUgMCAwIDA7cG9zaXRpb246cmVsYXRpdmU7XCI+PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzkwODgwMDAyP2g9MTRhYTc3MjNjYyZhbXA7YmFkZ2U9MCZhbXA7YXV0b3BhdXNlPTAmYW1wO3BsYXllcl9pZD0wJmFtcDthcHBfaWQ9NTg0NzlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIiB0aXRsZT1cIk1hdGVyaWFsIE5ldHdvcmtzIC0gRmFicmljYXRpb24gSGlnaGxpZ2h0c1wiPjwvaWZyYW1lPjwvZGl2PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIj48L3NjcmlwdD4nO1xyXG4gICAgY29uc3QgdmlkX2V4cGVyaW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWRfZXhwZXJpbWVudHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdFZpZGVvQ29udGFpbmVyJyk7XHJcbiAgICB2aWRfZXhwZXJpbWVudHMuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJwYWRkaW5nOjU2LjI1JSAwIDAgMDtwb3NpdGlvbjpyZWxhdGl2ZTtcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby83OTA5MTI1NTI/aD05OTVjNjc4ZWVmJmFtcDtiYWRnZT0wJmFtcDthdXRvcGF1c2U9MCZhbXA7cGxheWVyX2lkPTAmYW1wO2FwcF9pZD01ODQ3OVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiIHRpdGxlPVwiTWF0TmV0IC0gRXhwZXJpbWVudCBFdmFsdWF0aW9uXCI+PC9pZnJhbWU+PC9kaXY+PHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qc1wiPjwvc2NyaXB0Pic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGVjdG9IZWFkLCB0ZWN0b1N1YkhlYWQsIHRlY3RvMCwgdmlkX2dyYXBoVG9Db25zdHJ1Y3Rpb24sIHRlY3RvMSwgdmlkX2NvbnN0cnVjdGlvblNlcSwgdGVjdG8yLCB2aWRfZmFiSGlnaGxpZ2h0cywgdmlkX2V4cGVyaW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRuZXQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9zY3JpcHRzL1Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgfSBmcm9tIFwiLi4vc2NyaXB0cy91dGlsXCI7XHJcblxyXG5jb25zdCBteVdlYnNpdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgIFwiUGVyc29uYWwgUG9ydGZvbGlvIFdlYnNpdGVcIixcclxuICAgICAgICAyMDIzLFxyXG4gICAgICAgICdFYXJ0aCdcclxuICAgICk7XHJcblxyXG4gICAgcHJvamVjdC5TdWJ0aXRsZSA9IFwiVGhpcyBvbmVcIjtcclxuXHJcbiAgICBwcm9qZWN0LmFkZENhdGVnb3J5KFwiZGVzaWduXCIpO1xyXG4gICAgcHJvamVjdC5hZGRDYXRlZ29yeShcImNvZGVcIik7XHJcblxyXG4gICAgY29uc3QgdGkgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDEnLCBwcm9qZWN0LlRpdGxlKTtcclxuICAgIGNvbnN0IHN1YlRpID0gY3JlYXRlRWxlbWVudFRleHQoJ2gyJywgcHJvamVjdC5TdWJ0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgeWVhciA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoNScsICdQcm9qZWN0IFllYXI6ICcgKyBwcm9qZWN0LlllYXIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBMb2NhdGlvbjogJyArIHByb2plY3QuTG9jYXRpb24pO1xyXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGdpdGh1Yi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BYnN0cmFjdG1hY2hpbmEvbXlXZWJzaXRlXCI+R2l0aHViPC9hPidcclxuICAgIC8vaW50cm9cclxuICAgIGNvbnN0IGludHJvaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdJbnRyb2R1Y3Rpb24nKTtcclxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW50cm8udGV4dENvbnRlbnQgPSAnVGhpcyB3ZWJzaXRlIHdhcyBidWlsdCBjb21wbGV0ZWx5IGZyb20gc2NyYXRjaCBieSBtZSB0byBzaG93Y2FzZSB0aGUgcHJvamVjdHMgSSBoYXZlIGRvbmUgb3ZlciB0aGUgeWVhcnMuIEl0IHNlcnZlZCBhcyBhIGdyZWF0IHByb2plY3QgdG8gcHV0IGV2ZXJ5dGhpbmcgSSBoYXZlIGxlYXJuZWQgYWJvdXQgd2ViIGRldmVsb3BtZW50IGludG8gcHJhY3RpY2UuIFBsZWFzZSBmZWVsIGZyZWUgdG8gYnJvd3NlIGFyb3VuZCBhbmQgSSBhbSBoYXBweSB0byByZWNlaXZlIGFueSBhbmQgYWxsIGZlZWRiYWNrLidcclxuICAgIC8vZmVhdHVyZXNcclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdGZWF0dXJlcycpO1xyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBmZWF0MSA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ01WQyBhcmNoaXRlY3R1cmUgYWxsb3dzIGZvciBmdXR1cmUgcmUtdXNlIG9mIHRoZSBjb3JlIGxvZ2ljIGluIGRpZmZlcmVudCBncmFwaGljYWwgZW52aXJvbm1lbnRzLicpO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdWYW5pbGxhIEpTIG9ubHkgdG8ga2VlcCB0aGUgcHJvamVjdCBsaWdodHdlaWdodCBhbmQgYmVjYXVzZSB0aGUgZ29hbCB3YXMgdG8gcHJhY3RpY2UgbXkgSlMgc2tpbGxzLCByYXRoZXIgdGhhbiBteSBrbm93bGVkZ2Ugb24gbGlicmFyaWVzJyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1VuaXQgdGVzdGluZyBmb3IgY29yZSBjbGFzc2VzJyk7XHJcbiAgICBjb25zdCBmZWF0NCA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1N0cmVhbWxpbmVkIG1ldGhvZCBmb3IgYWRkaW5nIG1vcmUgcHJvamVjdHMgYXMgcGFja2FnZWQgb2JqZWN0cyBpbiB0aGUgZnV0dXJlIHRvIGltcHJvdmUgbWFpbnRhaW5hYmlsaXR5Jyk7XHJcbiAgICBjb25zdCBmZWF0NSA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwibGlcIiwgJ1Byb2plY3RzIGFyZSBzZWFyY2hhYmxlIGJ5IGNhdGVnb3J5IHRvIGVhc2UgbmF2aWdhdGlvbicpO1xyXG4gICAgY29uc3QgZmVhdDYgPSBjcmVhdGVFbGVtZW50VGV4dChcImxpXCIsICdSZXNwb25zaXZlIGRlc2lnbicpO1xyXG4gICAgZmVhdHVyZXMuYXBwZW5kKGZlYXQxLCBmZWF0MixmZWF0MywgZmVhdDQsIGZlYXQ1LCBmZWF0Nik7XHJcbiAgICAvL3RlY2hub2xvZ2llc1xyXG4gICAgY29uc3QgdGVjaEhlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDMnLCAnVGVjaG5vbG9naWVzJyk7XHJcbiAgICBjb25zdCB0ZWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHRlY2gxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgJ0hUTUwsIFNDU1MsIEpTJyk7XHJcbiAgICBjb25zdCB0ZWNoMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsICdKZXN0IFVuaXQgVGVzdGluZycpO1xyXG4gICAgY29uc3QgdGVjaDMgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnV2VicGFjayBhc3NldCBidW5kbGluZycpO1xyXG4gICAgdGVjaC5hcHBlbmQodGVjaDEsIHRlY2gyLCB0ZWNoMyk7XHJcblxyXG4gICAgLy9kZXZlbG9wbWVudFxyXG4gICAgY29uc3QgZGV2SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsICdEZXZlbG9wbWVudCcpO1xyXG4gICAgY29uc3QgZGV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGRldjEgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCAnYmxvZyBzZWN0aW9uJyk7XHJcbiAgICBkZXYuYXBwZW5kKGRldjEpO1xyXG5cclxuXHJcbiAgICBwcm9qZWN0LnB1c2hDb250ZW50cyhcclxuICAgICAgICB0aSwgc3ViVGksIHllYXIsIGxvY2F0aW9uLCBnaXRodWIsIFxyXG4gICAgICAgIGludHJvaGVhZGluZywgaW50cm8sIFxyXG4gICAgICAgIGZlYXR1cmVzSGVhZGluZywgZmVhdHVyZXMsIFxyXG4gICAgICAgIHRlY2hIZWFkaW5nLCB0ZWNoLFxyXG4gICAgICAgIGRldkhlYWRpbmcsIGRldik7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15V2Vic2l0ZTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3NjcmlwdHMvUHJvamVjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUZXh0LCBjcmVhdGVGaWd1cmUsIGNyZWF0ZUltYWdlIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbFwiO1xyXG5cclxuLy9tZWRpYVxyXG5pbXBvcnQgaG9tZSBmcm9tICcuLi9hc3NldHMvbmxwNG1zL2hvbWUucG5nJztcclxuaW1wb3J0IGZyZWV0eHRfMDAgZnJvbSAnLi4vYXNzZXRzL25scDRtcy9ndWlfZnJlZXRleHRfMDAuanBnJztcclxuaW1wb3J0IGd1aU1haW4gZnJvbSAnLi4vYXNzZXRzL25scDRtcy9ndWlfbWFpbi5qcGcnO1xyXG5pbXBvcnQgc2FtcGxlU2VudGltZW50IGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX3NhbXBsZUFuYWx5c2lzLmpwZyc7XHJcbmltcG9ydCBndWlfdXNlckFuYWx5c2lzIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvZ3VpX3VzZXJBbmFseXNpc18wMS5qcGcnO1xyXG5pbXBvcnQgY2xhc3NEaWFncmFtIGZyb20gJy4uL2Fzc2V0cy9ubHA0bXMvY2xhc3NEaWFncmFtLmpwZyc7XHJcblxyXG5jb25zdCBubHA0bXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KFwiTkxQIGZvciBNdWx0aXBsZSBTY2xlcm9zaXNcIiwgMjAyMiwgXCJMb25kb24sIFVLXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcIkFJXCIpO1xyXG5cclxuICAgIHByb2ouU3VidGl0bGUgPSBcIkRpYWdub3NpcyBUb29sIGZvciBSZXNlYXJjaGVycyB3b3JraW5nIG9uIE11bHRpcGxlIFNjbGVyb3Npc1wiO1xyXG5cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsIHByb2ouVGl0bGUpO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCBwcm9qLlN1YnRpdGxlKTtcclxuICAgIGNvbnN0IHllYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBZZWFyOiAnICsgcHJvai5ZZWFyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgTG9jYXRpb246ICcgKyBwcm9qLkxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCBnaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgZ2l0LmlubmVySFRNTCA9ICc8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9BYnN0cmFjdG1hY2hpbmEvaWNjX05MUDRNUz5HaXRodWI8L2E+J1xyXG4gICAgLy9jb25zdCBjb3ZlciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGludHJvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMycsIFxyXG4gICAgICAgIFwiSW50cm9kdWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVFbGVtZW50VGV4dCgncCcsIFxyXG4gICAgICAgICdOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmcgZm9yIHRoZSBEaWFnbm9zaXMgb2YgTXVsdGlwbGUgU2NsZXJvc2lzIHdhcyBhIGdyb3VwIHJlc2VhcmNoIHByb2plY3QgZG9uZSBhcyBwYXJ0IG9mIHRoZSBzb2Z0d2FyZSBlbmdpbmVlcmluZyBkZXNpZ24gY291cnNlIGF0IEltcGVyaWFsLiBUaGUgYXBwIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYnkgcmVzZWFyY2hlcnMgYXQgdGhlIFVLIE1TIFJlZ2lzdGVyLCB3aGVyZSBhIGxhcmdlIGNvbGxlY3Rpb24gb2YgdW5wcm9tcHRlZCBmcmVlLXRleHQgZGF0YSAocGF0aWVudCByZXBvcnRlZCBvdXRjb21lcykgd2FzIGFtYXNzZWQgb3ZlciB0aGUgeWVhcnMsIGJ1dCB0aGVyZSBoYXMgYmVlbiBubyBlZmZlY3RpdmUgdG9vbCB0byBwcm9jZXNzIGFuZCB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IGluZm9ybWF0aW9uIHRvIGRhdGUuIE91ciBhcHAgc291Z2h0IHRvIHByb3ZpZGUgYSBzaW1wbGUgaW50ZXJmYWNlIHRvIGV4dHJhY3QgbWVhbmluZ2Z1bCBmcmVlLXRleHQgZGF0YSBpbiB0aGUgbWVkaWNhbCByZXNlYXJjaCBmb3IgdGhlIGRpYWdub3NpcyBvZiBNUy4gVGhlcmUgd2FzIG5vIHByaW9yIGNvZGUgYmFzZSwgYXMgb3VyIGdyb3VwIHdhcyB0aGUgZmlyc3QgdG8gY29sbGFib3JhdGUgd2l0aCB0aGUgTVMgUmVnaXN0ZXIsIGhvd2V2ZXIsIHRoZSBpbnRlbnRpb24gaXMgdG8gY29udGludWUgdGhlIGRldmVsb3BtZW50IGluIHN1YnNlcXVlbnQgeWVhcnMuJyk7XHJcblxyXG4gICAgY29uc3QgdGVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRlYW0uaW5uZXJIVE1MID0gXHJcbiAgICAgICAgJzxzdHJvbmc+VGVhbTo8L3N0cm9uZz4gTWF0dCBCYXJrZXIsIENvbGluIFRheWxvciwgVGFvbGUgQ2hlbiwgS2FpeHVhbiBLaG9vLCBSb25hbiBQYXRyaWNrLCBHdXMgTGV2aW5zb24sIEphY2sgQ2hlbmc8YnI+PHN0cm9uZz5TdXBlcnZpc29yczo8L3N0cm9uZz4gQ2hpcmFhZyBMYWxhLCBSb2QgTWlkZGxldG9uLCBSaWNoYXJkIE5pY2hvbGFzPGJyPkluIGNvbGxhYm9yYXRpb24gd2l0aCB0aGUgPGEgaHJlZiA9IFwiaHR0cHM6Ly91a21zcmVnaXN0ZXIub3JnL1wiPlVLIE1TIFJlZ2lzdGVyPC9hPic7XHJcblxyXG4gICAgcHJvai5wdXNoQ29udGVudHModGl0bGUsIHN1YnRpdGxlLCB5ZWFyLCBsb2NhdGlvbiwgZ2l0LCBpbnRyb0hlYWRpbmcsIGludHJvLCB0ZWFtKTtcclxuXHJcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50VGV4dChcImgzXCIsICdGZWF0dXJlcycpO1xyXG5cclxuICAgIGNvbnN0IGZlYXRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGZlYXQwID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAnRnJlZS10ZXh0IGFuYWx5emVyIGZvciBzaW1wbGUgdGV4dCBwcm9jZXNzaW5nLCBsb29raW5nIGF0IGZyZXF1ZW5jeSBvZiB0ZXJtcyBhbmQgcGhyYXNlcywgbi1ncmFtcyB0byBpZGVudGlmeSB0cmVuZHMgYW5kIGtleSB0ZXJtaW5vbG9naWVzIHVzZWQgYnkgcGF0aWVudHMnKVxyXG4gICAgY29uc3QgZmVhdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZmVhdDEuaW5uZXJIVE1MID0gXHJcbiAgICAnTG9naXN0aWMgcmVncmVzc2lvbiBjbGFzc2lmaWVyIHdpdGggYmFnLW9mLXdvcmRzIG1vZGVsIGZvciBwcmVkaWN0aW5nIE1TIGluIHBhdGllbnRzIGJhc2VkIG9uIHRoZWlyIHRleHQgcHJvbXB0cy4nO1xyXG4gICAgY29uc3QgZmVhdDIgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdTZW50aW1lbnQgYW5kIEV4dGVuZGVuZCBEaXNhYmlsaXR5IFN0YXR1cyBBbmFseXNpcyB0byBpZGVudGlmeSB0cmVuZHMgaW4gaW5kaXZpZHVhbCB1c2VycyBhbmQgZGVtcGdyYXBoaWNzLiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVkFERVIgc2VudGltZW50IGxpYnJhcnkuJyk7XHJcbiAgICBjb25zdCBmZWF0MyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgJ0N1c3RvbSBDU1YgaW1wb3J0IGNhcGFiYWxpdGllcywgZ2l2aW5nIHJlc2VhcmNoZXJzIG1vcmUgZnJlZWRvbSBpbiBhZGFwdGluZyB0aGUgYXBwIHRvIHNwZWNpZmljIG5lZWRzLicpO1xyXG4gICAgY29uc3QgZmVhdDQgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICdIZXhhZ29uYWwgQXJjaGl0ZWN0dXJlLCBhbGxvd2luZyB0aGUgc3dhcHBpbmcgb2YgbW9kdWxlcyBpbiB0aGUgZnV0dXJlLCB0aHVzIGltcHJvdmluZyByZS11c2VhYmlsaXR5IG9mIHRoZSBjb2RlIGJhc2UnKTtcclxuICAgIGNvbnN0IGZlYXQ1ID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAnQWxsIG1vZHVsZXMgbGltaXRlZCB0byB0aGUgTkxUSyBwbGF0Zm9ybSwgYXMgY29kZSBpcyBob3N0ZWQgb24gc2VjdXJlIHNlcnZlcnMgb2YgdGhlIE1TIFJlZ2lzdGVyLicpO1xyXG4gICAgZmVhdGxpc3QuYXBwZW5kKGZlYXQwLCBmZWF0MSwgZmVhdDIsIGZlYXQzLCBmZWF0NCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltZ19ob21lID0gY3JlYXRlRmlndXJlKGhvbWUsICdBcHAgSG9tZSBQYWdlJyk7XHJcbiAgICBjb25zdCBpbWdfZ3VpX2ZyZWV0eHQgPSBjcmVhdGVGaWd1cmUoZnJlZXR4dF8wMCwgJ0ZyZWUgdGV4dCBhbmFseXNpcyBwYWdlJyk7XHJcbiAgICBjb25zdCBpbWdfZ3VpTWFpbiA9IGNyZWF0ZUZpZ3VyZShndWlNYWluLCAnTWFpbiBtZW51Jyk7XHJcbiAgICBjb25zdCBpbWdfU2FtcGxlU2VudGltZW50ID0gY3JlYXRlRmlndXJlKHNhbXBsZVNlbnRpbWVudCwgJ0V4YW1wbGUgb2YgZ2VuZXJhdGVkIHRyZW5kIGdyYXBocyBmb3IgYSBncm91cCBvZiBwYXRpZW50cycpO1xyXG4gICAgY29uc3QgaW1nX2d1aVVzZXIgPSBjcmVhdGVGaWd1cmUoZ3VpX3VzZXJBbmFseXNpcywgJ1VzZXIgc2VudGltZW50IGFuYWx5c2lzIHBhZ2UnKTtcclxuXHJcbiAgXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyhmZWF0dXJlc0hlYWRpbmcsIGZlYXRsaXN0LCBpbWdfaG9tZSwgaW1nX2d1aU1haW4sIGltZ19ndWlfZnJlZXR4dCwgaW1nX1NhbXBsZVNlbnRpbWVudCwgaW1nX2d1aVVzZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZWNoSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRUZXh0KFwiaDNcIiwgJ1RlY2hub2xvZ2llcycpO1xyXG4gICAgY29uc3QgdGVjaGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGVjaDAgPSBjcmVhdGVFbGVtZW50VGV4dCgnbGknLCBcclxuICAgICAgICAnUHl0aG9uIGJhY2stZW5kJylcclxuICAgIGNvbnN0IHRlY2gxID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ3RraW50ZXIgZnJvbnQtZW5kJyk7XHJcbiAgICBjb25zdCB0ZWNoMiA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdsaScsIFxyXG4gICAgICAgICdWQURFUiBzZW50aW1lbnQgYW5hbHlzaXMgaW1wbGVtZW50YXRpb24nKTtcclxuICAgIGNvbnN0IHRlY2gzID0gY3JlYXRlRWxlbWVudFRleHQoJ2xpJywgXHJcbiAgICAgICAgJ1NjaS1raXQgTGVhcm4gdGV4dCBjbGFzc2lmaWNhdGlvbiBpbXBsZW1lbnRhdGlvbicpO1xyXG4gICAgY29uc3QgaW1nX2NsYXNzRGlhZ3JhbSA9IGNyZWF0ZUZpZ3VyZShjbGFzc0RpYWdyYW0sICdDbGFzcyBEaWFncmFtJyk7XHJcbiAgICB0ZWNobGlzdC5hcHBlbmQoIHRlY2gwLCB0ZWNoMSwgdGVjaDIsIHRlY2gzKTtcclxuICAgIHByb2oucHVzaENvbnRlbnRzKHRlY2hIZWFkaW5nLCB0ZWNobGlzdCwgaW1nX2NsYXNzRGlhZ3JhbSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2o7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmxwNG1zOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vc2NyaXB0cy9Qcm9qZWN0XCJcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQsIGNyZWF0ZUltYWdlcywgY3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vc2NyaXB0cy91dGlsXCI7XHJcblxyXG4vL21lZGlhXHJcbmltcG9ydCBjb3ZlciBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQzOTguanBnJztcclxuaW1wb3J0IGkwMCBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY19icmExLTM4NzUuanBnJztcclxuaW1wb3J0IGkwMSBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY19icmExLTM5MDcuanBnJztcclxuaW1wb3J0IGkwMiBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY19icmExLTQwMDUuanBnJztcclxuaW1wb3J0IGkwMyBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY19icmEyLTQ1MzEuanBnJztcclxuaW1wb3J0IGkwNCBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY19icmEzLTQwODQuanBnJztcclxuaW1wb3J0IGkwNSBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY190b3AzLTQ4MDAuanBnJztcclxuaW1wb3J0IGkwNiBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQxNjcuanBnJztcclxuaW1wb3J0IGkwNyBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQ0MDYuanBnJztcclxuaW1wb3J0IGkwOCBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQ0NTguanBnJztcclxuaW1wb3J0IGkwOSBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQ1MTIuanBnJztcclxuaW1wb3J0IGkxMCBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTUwMDEuanBnJztcclxuaW1wb3J0IGkxMSBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTQ5NzkuanBnJztcclxuaW1wb3J0IGkxMiBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTUwNTYuanBnJztcclxuaW1wb3J0IGkxMyBmcm9tICcuLi9hc3NldHMvb3JnYW5pYy9vY195b2dhLTUwNjkuanBnJztcclxuXHJcblxyXG5jb25zdCBvcmdhbmljID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIk9yZ2FuaWMgQ29kZSBBcHBhcmVsXCIsIDIwMjIsIFwiSmVqdSwgU291dGggS29yZWFcIik7XHJcblxyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImFydFwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJwaG90b2dyYXBoeVwiKTtcclxuXHJcbiAgICBwcm9qLlN1YnRpdGxlID0gXCJQcm9kdWN0IFNob290IGZvciBCcmFsZXR0ZSBhbmQgVG9wIFNlcmllc1wiO1xyXG5cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdoMScsIHByb2ouVGl0bGUpO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDInLCBwcm9qLlN1YnRpdGxlKTtcclxuICAgIGNvbnN0IHllYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgnaDUnLCAnUHJvamVjdCBZZWFyOiAnICsgcHJvai5ZZWFyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlRWxlbWVudFRleHQoJ2g1JywgJ1Byb2plY3QgTG9jYXRpb246ICcgKyBwcm9qLkxvY2F0aW9uKTtcclxuXHJcbiAgICBjb25zdCBicmFuZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgYnJhbmRMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPWh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3JnYW5pY19jb2RlXy8+QnJhbmQgTGluazwvYT4nXHJcbiAgICBjb25zdCBpbWdfY292ZXIgPSBjcmVhdGVJbWFnZShjb3Zlcik7XHJcblxyXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gY3JlYXRlRWxlbWVudFRleHQoJ2gzJywgXHJcbiAgICAgICAgXCJJbnRyb2R1Y3Rpb25cIik7XHJcbiAgICBjb25zdCBpbnRybyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCdwJywgXHJcbiAgICAgICAgJ0kgd2FzIGFwcHJvYWNoZWQgYnkgbXkgZnJpZW5kIHRvIGhlbHAgaGVyIGJyYW5kIGRvIGEgcHJvZHVjdCBzaG9vdCBmb3IgaGVyIGxhdGVzdCBzZXJpZXMgZmVhdHVyaW5nIGJyYWxldHMgYW5kIHRvcHMuIE9yZ2FuaWMgQ29kZSBzcGVjaWFsaXplcyBpbiBoYW5kLW1hZGUgYXBwYXJlbCB1c2luZyBuYXR1cmFsbHktZHllZCAxMDAlIG9yZ2FuaWMgY290dG9uLCBtYWRlIGxvY2FsbHkgb24gSmVqdSBJc2xhbmQuICcpO1xyXG5cclxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlZGl0LmlubmVySFRNTCA9IFxyXG4gICAgICAgICc8c3Ryb25nPk1vZGVsczo8L3N0cm9uZz4gPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXNuZ21uL1wiPlNldW5nbWluIExlZTwvYT4sIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2xsYW1vYmVsZW4vXCI+R2F5b3VuZyBMZWU8L2E+JztcclxuXHJcbiAgICBwcm9qLnB1c2hDb250ZW50cyh0aXRsZSwgc3VidGl0bGUsIHllYXIsIGxvY2F0aW9uLCBicmFuZExpbmssIGltZ19jb3ZlciwgaW50cm9IZWFkaW5nLCBpbnRybywgY3JlZGl0KTtcclxuXHJcbiAgICBjb25zdCBpbWFnZXMgPSBjcmVhdGVJbWFnZXMoaTAzLGkwMCwgaTAxLCBpMDIsaTA0LGkwNSxpMDYsaTA3LGkwOCxpMDksaTEwLGkxMSxpMTIsaTEzKTtcclxuICAgIFxyXG4gICAgaW1hZ2VzLmZvckVhY2goaW1nID0+IHtwcm9qLnB1c2hDb250ZW50KGltZyl9KTtcclxuICAgIHJldHVybiBwcm9qO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZ2FuaWM7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9zY3JpcHRzL1Byb2plY3RcIlxyXG5cclxuY29uc3QgcHJpbnRGYXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIlByaW50IEZhc3QsIFBpbGUgSGlnaCFcIiwgMjAxOSwgXCJDb3BlbmhhZ2VuLCBEZW5tYXJrXCIpO1xyXG5cclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhY2FkZW1pY1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJ0ZWFjaGluZ1wiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nXCIpO1xyXG4gICAgcHJvai5hZGRDYXRlZ29yeShcImRlc2lnblwiKTtcclxuICAgIHByb2ouYWRkQ2F0ZWdvcnkoXCJjb2RlXCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGludHJvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGludHJvSGVhZGluZyk7XHJcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGludHJvLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgR3Jhc3Nob3BwZXIgcGx1Z2luIGRldmVsb3BlZCBmb3IgYSBzZXJpZXMgb2Ygd29ya3Nob3BzIHRpdGxlZCBcXFwiUHJpbnQgRmFzdCBQaWxlIEhpZ2hcXFwiLCBhbiBvZmZzaG9vdCBmcm9tIGRlc2lnbiByZXNlYXJjaCBhbmQgbWF0ZXJpYWwgZXhwZXJpbWVudGF0aW9uIG9uIDNELXByaW50aW5nIGNvbmR1Y3RlZCBhdCB0aGUgQUFEUkwgYW5kIFNoYWpheSBCaG9vc2hhbidzIFBoRCByZXNlYXJjaCBvbiBjb25jcmV0ZSBhZGRpdGl2ZSBtYW51ZmFjdHVyaW5nLiBUaGUgd29ya3Nob3AgaXMgYSBjb2xsYWJvcmF0aXZlIGRlc2lnbi1idWlsZCBleGVyY2lzZSB3aGljaCBzZWVrcyBzeW5lcmdpZXMgYmV0d2VlbiBjb21wdXRhdGlvbmFsIG1hc29ucnkgYW5kIDNEIHByaW50aW5nIHdpdGggc29mdC1yaWdpZCBtYXRlcmlhbHMuIFRoZSBhaW0gaXMgdG8gZXhwbG9yZSBnZW9tZXRyaWVzIHdoaWNoIGFyZSBzdHJ1Y3R1cmFsbHkgYXdhcmUgYW5kIHRoZWlyIGFzc29jaWF0ZWQgZGVzaWduIHNwYWNlLCBpbiByZWxhdGlvbiB0byB0aGVpciBtYXRlcmlhbGl0eSBhbmQgZmFicmljYXRpb24gdGVjaG5vbG9neS4gQ2xheSBpcyB1c2VkIGFzIG1hdGVyaWFsIGFuZCBpdHMgZG9taW5hbnQgY29tcHJlc3Npb24gY2FwYWNpdHkgaXMgdGhlIG1haW4gcGFyYW1ldGVyIHRvIGV4cGxvcmUgYW5kIHVzZSB0byBkZXNpZ24gZGlnaXRhbCBnZW9tZXRyaWVzIGFjY29yZGluZ2x5LiBUcmFkaXRpb25hbCBsYXllci1ieS1sYXllciAzZCBwcmludGluZyBtZXRob2RzIGlzIHF1ZXN0aW9uZWQgaW4gZmF2b3Igb2YgYSBtZXRob2RvbG9neSB3aGljaCBhbGlnbnMgZ2VvbWV0cmljIHJlcHJlc2VudGF0aW9uIGluIGRpZ2l0YWwgc3BhY2Ugd2l0aCB0aGUgcGh5c2ljYWwgbWFudWZhY3R1cmluZyBwcm9jZXNzLiBGdW5jdGlvbiBSZXByZXNlbnRhdGlvbnMgKEYtUmVwKSBhbmQgaW1hZ2UgYmFzZWQgdGVjaG5vbG9neSBpcyBlbXBsb3llZCB0byBnZW5lcmF0ZSBkaWdpdGFsIGdlb21ldHJpZXMgd2l0aCBhIGN1c3RvbSB0b29sa2l0IGJlZm9yZSB0byBiZSB0cmFuc2xhdGVkIGludG8gcm9ib3RpYyBpbnN0cnVjdGlvbnMgZm9yIHRoZSBwaHlzaWNhbCB3b3JsZC4gXCJcclxuICAgIHByb2oucHVzaENvbnRlbnQoaW50cm8pO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZlYXR1cmVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJGZWF0dXJlc1wiO1xyXG4gICAgcHJvai5wdXNoQ29udGVudChmZWF0dXJlSGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZlYXR1cmUudGV4dENvbnRlbnQgPSBcIlRoZSBwbHVnaW4gaW1wbGVtZW50cyB0aGUgU0RGIGZ1bmN0aW9uIGFwcHJvYWNoIHRvIGdlbmVyYXRlIDNELXByaW50YWJsZSBmb3JtcyBvdXRsaW5lZCBpbiB0aGUgcGFwZXIgRnVuY3Rpb24gUmVwcmVzZW50YXRpb24gZm9yIFJvYm90aWMgM0QgUHJpbnRlZCBDb25jcmV0ZSAoQmhvb3NoYW4gMjAxOCkuXCI7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGZlYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHAxLnRleHRDb250ZW50ID0gXCJCbGVuZGluZywgYm9vbGVhbiBhbmQgcGxhbmUgdHJpbW1pbmcgb3BlcmF0aW9ucyB0byBtYW5pcHVsYXRlIGZpZWxkIGZ1bmN0aW9uc1wiO1xyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcDIudGV4dENvbnRlbnQgPSBcIk11bHRpLXRocmVhZGluZyBmb3IgY2FsY3VsYXRpb24taW50ZW5zaXZlIGNvbXBvbmVudHNcIjtcclxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IGNvbXBvbmVudHMgdG8gdmlzdWFsaXplIGdlb21ldHJpYyBvdXRwdXRcIjtcclxuICAgIGZlYXR1cmVMaXN0LmFwcGVuZChwMSxwMixwMyk7XHJcbiAgICBwcm9qLnB1c2hDb250ZW50KGZlYXR1cmVMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludEZhc3Q7IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanMnO1xyXG5pbXBvcnQgR1VJIGZyb20gJy4vR1VJLmpzJ1xyXG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gXCIuL2xvYWRQcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBfbW9kZWwgPSBudWxsO1xyXG4gICAgX3ZpZXcgPSBudWxsO1xyXG4gICAgX3Byb2plY3RJbmRleCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBuZXcgTW9kZWwobG9hZFByb2plY3RzKCkpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBuZXcgR1VJKHRoaXMuX21vZGVsLlByb2plY3RJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuYmluZENhbGxQcm9qZWN0UGFnZXModGhpcy5vblByb2plY3RQYWdlQ2FsbGVkKTtcclxuICAgICAgICB0aGlzLl92aWV3LmJpbmRIb3ZlclByb2plY3RzKHRoaXMub25Qcm9qZWN0SG92ZXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9qZWN0UGFnZUNhbGxlZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLl9tb2RlbC5nZXRQcm9qZWN0KGlkKTtcclxuICAgICAgICB0aGlzLl92aWV3LmRpc3BsYXlQcm9qZWN0KHByb2plY3QuSHRtbENvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJvamVjdEhvdmVyZWQgPSAoaWQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWwuZ2V0UHJvamVjdChpZCkuQ2F0ZWdvcmllcztcclxuICAgIH1cclxufSIsImltcG9ydCBwQXJyb3dCYXNlIGZyb20gJy4uL2Fzc2V0cy9hcnJvd19wcm9qZWN0SW5kZXhfYmFzZS5zdmcnO1xyXG5pbXBvcnQgcHJldmlld19kZXNpZ24gZnJvbSAnLi4vYXNzZXRzL21hdG5ldC9mYWJfMDUuanBnJztcclxuaW1wb3J0IHByZXZpZXdfY29kZSBmcm9tICcuLi9hc3NldHMvbGJkL0hpdmVNaW5kQ2xhc3Nlcy5qcGcnO1xyXG5pbXBvcnQgcHJldmlld19hcnQgZnJvbSAnLi4vYXNzZXRzL2JhcmJpY2FuXzAwLmpwZyc7XHJcblxyXG5cclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFRleHQgLCBnZXRSYW5kb21Qb2ludCwgZ2V0Q2VudGVyUG9zIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmltcG9ydCBsb2FkQWJvdXRUYWIgZnJvbSAnLi4vY29udGVudC9sb2FkQWJvdXRUYWInO1xyXG5pbXBvcnQgbG9hZExlZnRNYWluIGZyb20gJy4uL2NvbnRlbnQvbG9hZExlZnRNYWluJztcclxuaW1wb3J0IGxvYWRSaWdodE1haW4gZnJvbSAnLi4vY29udGVudC9sb2FkUmlnaHRNYWluJztcclxuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSAnLi4vY29udGVudC9sb2FkRm9vdGVyJztcclxuaW1wb3J0IGxvYWRQcm9qZWN0VGFiIGZyb20gJy4uL2NvbnRlbnQvbG9hZFByb2plY3RUYWInO1xyXG5pbXBvcnQgbG9hZEluZGV4VGFiIGZyb20gJy4uL2NvbnRlbnQvbG9hZEluZGV4VGFiJztcclxuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gJy4uL2NvbnRlbnQvbG9hZENvbnRhY3RUYWInO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVmlldyBPYmplY3QgZm9yIHdlYnNpdGVzLiBcclxuICovXHJcbmNsYXNzIEdVSSB7XHJcblxyXG4gICAgLy9jbGFzcyBuYW1lcyBmb3IgcXVlcnkgc2VsZWN0aW9uXHJcbiAgICBfcHJvamVjdEZpbHRlckNsYXNzID0gJ3Byb2plY3RGaWx0ZXInO1xyXG4gICAgX2luZGV4QnV0dG9uSWQgPSAncHJvamVjdEFycm93JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuX2FwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcblxyXG4gICAgICAgIC8vbG9hZCBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMuX2xlZnRNYWluID0gbG9hZExlZnRNYWluKHRoaXMuX2FwcCk7XHJcbiAgICAgICAgdGhpcy5fYnRuX2luZGV4ID0gdGhpcy5fbGVmdE1haW4ucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLl9pbmRleEJ1dHRvbklkKTtcclxuICAgICAgICB0aGlzLl9yaWdodE1haW4gPSBsb2FkUmlnaHRNYWluKHRoaXMuX2FwcCk7XHJcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gbG9hZEZvb3Rlcih0aGlzLl9hcHApO1xyXG4gICAgICAgIHRoaXMuX2Fib3V0VGFiID0gbG9hZEFib3V0VGFiKHRoaXMuX3JpZ2h0TWFpbik7XHJcbiAgICAgICAgdGhpcy5faW5kZXhUYWIgPSBsb2FkSW5kZXhUYWIodGhpcy5fYXBwKTtcclxuICAgICAgICB0aGlzLl9wcmVidWlsZEluZGV4VGFiKHByb2plY3RzKTtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0VGFiID0gbG9hZFByb2plY3RUYWIodGhpcy5fcmlnaHRNYWluKTtcclxuICAgICAgICB0aGlzLl9jb250YWN0Q2FyZCA9IGxvYWRDb250YWN0VGFiKHRoaXMuX2FwcCk7XHJcblxyXG4gICAgICAgIC8vc2V0dXAgYmluZGluZ3NcclxuICAgICAgICB0aGlzLl9iaW5kUHJvZmlsZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuX2JpbmRFeGl0VGFic09uTGVmdE1haW5DbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5fYmluZENhbGxJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuX2JpbmRTZWxBbGxDaGVja2JveCgpO1xyXG4gICAgICAgIHRoaXMuX2JpbmRTZWxOb25lQ2hlY2tib3goKTtcclxuICAgICAgICB0aGlzLl9iaW5kVGFiTGVmdEVkZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fYmluZFN3aXBlUHJvamVjdEV4aXQoKTtcclxuICAgICAgICB0aGlzLl9iaW5kU3dpcGVBYm91dEV4aXQoKTtcclxuICAgICAgICB0aGlzLl9iaW5kQ2FsbENvbnRhY3RDYXJkKCk7XHJcbiAgICAgICAgdGhpcy5fYmluZEV4aXRDb250YWN0Q2FyZCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy89PT09PT09PT0gSU5ERVggVEFCID09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIF9sb2FkUHJvamVjdEluZGV4QnV0dG9uKHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IGJ0bl9pbmRleCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGJ0bl9pbmRleC5zcmMgPSBwQXJyb3dCYXNlO1xyXG4gICAgICAgIGJ0bl9pbmRleC5pZCA9IHRoaXMuX2luZGV4QnV0dG9uSWQ7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChidG5faW5kZXgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnRuX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIF9wcmVidWlsZEluZGV4VGFiKHByb2plY3RzKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29udGFpbmVyID0gdGhpcy5faW5kZXhUYWIucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLl9wcm9qZWN0RmlsdGVyQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUFsbENoaWxkcmVuKGZpbHRlckNvbnRhaW5lcik7IC8vcmVzZXQgY29udGFpbmVyXHJcblxyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVTZWxBbGxDaGVja2JveChmaWx0ZXJDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVNlbE5vbmVDaGVja2JveChmaWx0ZXJDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlGaWx0ZXJzID0gdGhpcy5fZ2V0VW5pcXVlQ2F0ZWdvcmllcyhwcm9qZWN0cyk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBjaGVja2JveCBmb3IgZWFjaCBjYXRlZ29yeVxyXG4gICAgICAgIGNhdGVnb3J5RmlsdGVycy5mb3JFYWNoKGNhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q2F0ID0gdGhpcy5fY3JlYXRlQ2F0ZWdvcnlDaGVja2JveChmaWx0ZXJDb250YWluZXIsIGNhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9iaW5kQ2F0ZWdvcnlDaGVja2JveChuZXdDYXQsIGZpbHRlckNvbnRhaW5lciwgcHJvamVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3ByZS1idWlsZCBpbmRleCB3aXRoIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLl9idWlsZEluZGV4VGFibGUocHJvamVjdHMsIHRoaXMuX2dldFVuaXF1ZUNhdGVnb3JpZXMocHJvamVjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2F0ZWdvcnlDaGVja2JveChwYXJlbnQsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuZXdDYXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgbmV3Q2F0LmlkID0gaWQ7XHJcbiAgICAgICAgbmV3Q2F0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlkKTtcclxuICAgICAgICBuZXdDYXQuY2xhc3NMaXN0LmFkZChcInRnbFwiKTtcclxuICAgICAgICBuZXdDYXQuY2xhc3NMaXN0LmFkZChcInRnbC1za2V3ZWRcIik7XHJcbiAgICAgICAgbmV3Q2F0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0Z2wtYnRuXCIpO1xyXG4gICAgICAgIC8vIGxhYmVsLnRleHRDb250ZW50ID0gaWQ7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRnLW9mZicsaWQpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vbicsIGlkKTtcclxuICAgICAgICAvLyBsYWJlbC50ZXh0Q29udGVudCA9IGlkO1xyXG4gICAgICAgIGxhYmVsLnN0eWxlLndpZHRoID0gKGlkLmxlbmd0aCowLjcpICsgJ2VtJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5ld0NhdCwgbGFiZWwpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0NhdDtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlU2VsQWxsQ2hlY2tib3gocGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc2VsQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWxBbGwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgc2VsQWxsLmlkID0gJ3NlbEFsbCc7XHJcbiAgICAgICAgc2VsQWxsLnNldEF0dHJpYnV0ZSgnbmFtZScsIHNlbEFsbC5pZCk7XHJcbiAgICAgICAgc2VsQWxsLmNsYXNzTGlzdC5hZGQoXCJ0Z2xcIik7XHJcbiAgICAgICAgc2VsQWxsLmNsYXNzTGlzdC5hZGQoXCJ0Z2wtc2tld2VkXCIpO1xyXG4gICAgICAgIHNlbEFsbC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHNlbEFsbC5pZCk7XHJcbiAgICAgICAgLy8gbGJsX3NlbEFsbC50ZXh0Q29udGVudCA9ICdBbGwnO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0Z2wtYnRuXCIpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vZmYnLCdBbGwnKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb24nLCAnQWxsJyk7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUud2lkdGggPSAzICsgJ2VtJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNlbEFsbCwgbGFiZWwpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTZWxOb25lQ2hlY2tib3gocGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc2VsTm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc2VsTm9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICBzZWxOb25lLmlkID0gJ3NlbE5vbmUnO1xyXG4gICAgICAgIHNlbE5vbmUuc2V0QXR0cmlidXRlKCduYW1lJywgc2VsTm9uZS5pZCk7XHJcbiAgICAgICAgc2VsTm9uZS5jbGFzc0xpc3QuYWRkKFwidGdsXCIpO1xyXG4gICAgICAgIHNlbE5vbmUuY2xhc3NMaXN0LmFkZChcInRnbC1za2V3ZWRcIik7XHJcbiAgICAgICAgc2VsTm9uZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzZWxOb25lLmlkKTtcclxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidGdsLWJ0blwiKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGctb2ZmJywnTm9uZScpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS10Zy1vbicsICdOb25lJylcclxuICAgICAgICBsYWJlbC5zdHlsZS53aWR0aCA9IDQgKyAnZW0nO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2VsTm9uZSwgbGFiZWwpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfYnVpbGRJbmRleFRhYmxlKHByb2plY3RzLCBjYXRlZ29yeUZpbHRlcnMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNhdGVnb3J5RmlsdGVycykpIHRocm93IFwiRXJyb3I6IHBhcmFtZXRlciBpcyBub3Qgb2YgdHlwZSBBcnJheVwiO1xyXG5cclxuICAgICAgICAvL3NvcnQgcHJvamVjdHMgZGVzY2VuZGluZyBieSB5ZWFyXHJcbiAgICAgICAgcHJvamVjdHMuc29ydCgoYSwgYikgPT4gYi55ZWFyIC0gYS55ZWFyKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEluZGV4VGFibGVcIik7XHJcbiAgICAgICAgdGhpcy5faW5pdEluZGV4SGVhZGVycyhwYXJlbnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgb2YgcHJvamVjdC5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlGaWx0ZXJzLmluY2x1ZGVzKGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93VGl0bGUgPSBjcmVhdGVFbGVtZW50VGV4dChcInRkXCIsIHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd1llYXIgPSBjcmVhdGVFbGVtZW50VGV4dCgndGQnLCBwcm9qZWN0LnllYXIudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93TG9jID0gY3JlYXRlRWxlbWVudFRleHQoJ3RkJywgcHJvamVjdC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy50ZXh0Q29udGVudCA9IEFycmF5LmZyb20ocHJvamVjdC5jYXRlZ29yaWVzKS5tYXAoYyA9PiB7cmV0dXJuIGMuc2xpY2UoMCwyKX0pLmpvaW4oJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuaWQgPSBwcm9qZWN0LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuYXBwZW5kKHJvd1llYXIsIHJvd1RpdGxlLCByb3dMb2MsIHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBwb3B1bGF0ZSB0YWJsZSB3aXRoIHByZXNldCBoZWFkZXJzICh0aXRsZSwgeWVhciwgbG9jYXRpb24sIGNhdGVnb3JpZXMpIGFuZCBhdHRhY2ggdG8gcGFyZW50XHJcbiAgICAgKiBAcmV0dXJucyBlbXB0eSA8dGFibGU+IHdpdGggaGVhZGVycy5cclxuICAgICAqL1xyXG4gICAgX2luaXRJbmRleEhlYWRlcnModGFibGVDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVBbGxDaGlsZHJlbih0YWJsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgaGVhZF90aXRsZSA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0aCcsIFwiVGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZF95ZWFyID0gY3JlYXRlRWxlbWVudFRleHQoJ3RoJywgJ1llYXInKTtcclxuICAgICAgICBjb25zdCBoZWFkX2xvYyA9IGNyZWF0ZUVsZW1lbnRUZXh0KCd0aCcsJ0xvY2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZF9jYXQgPSBjcmVhdGVFbGVtZW50VGV4dCgndGgnLCAnQ2F0ZWdvcmllcycpO1xyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmFwcGVuZChoZWFkX3RpdGxlLCBoZWFkX3llYXIsIGhlYWRfbG9jLCBoZWFkX2NhdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzbGlkZSBpbiBpbmRleCB0YWJcclxuICAgICAqL1xyXG4gICAgX3Nob3dJbmRleFRhYigpIHtcclxuICAgICAgICB0aGlzLl9pbmRleFRhYi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW5kZXhTbGlkZUluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT0gICAgQklORElOR1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBfYmluZFByb2ZpbGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYnRuX3Byb2ZpbGUgPSB0aGlzLl9sZWZ0TWFpbi5xdWVyeVNlbGVjdG9yKCcjYnRuX3Byb2ZpbGUnKTtcclxuICAgICAgICBidG5fcHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdHJhbnNpdGlvbiBpbiBhYm91dCB0YWJcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaWQgPT09ICdidG5fcHJvZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZUluRnJvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRDYWxsSW5kZXgoKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuX2luZGV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93SW5kZXhUYWIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfYmluZEV4aXRUYWJzT25MZWZ0TWFpbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fbGVmdE1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XHJcbiAgICAgICAgICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzUHJvamVjdEFycm93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNQcm9maWxlQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuaWQgPT09ICdwcm9qZWN0QXJyb3cnKSBpc1Byb2plY3RBcnJvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuaWQgPT09ICdidG5fcHJvZmlsZScpIGlzUHJvZmlsZUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdCA9IHQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNQcm9qZWN0QXJyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0SW5kZXhTbGlkZUluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUluRnJvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJvZmlsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fib3V0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlSW5Gcm9tUmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ2FsbFByb2plY3RQYWdlcyhoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEluZGV4VGFibGUnKTtcclxuICAgICAgICBjb25zdCByb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndHInKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcclxuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihyb3cuaWQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kVGFiTGVmdEVkZ2VzKCkge1xyXG4gICAgICAgIGNvbnN0IGVkZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnRFZGdlJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGVkZ2VzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZUluRnJvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUud2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckFsbFNlbGVjdGVkUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGxpdHMgPSBsZWZ0LnNwbGl0KCdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlmdCA9IHBhcnNlRmxvYXQoc3BsaXRzWzBdKSAtIDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmxlZnQgPSBzaGlmdCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdfc3BsaXRzID0gd2lkdGguc3BsaXQoJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdfc2hpZnQgPSBwYXJzZUZsb2F0KHdfc3BsaXRzWzBdKSArIDU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLndpZHRoID0gd19zaGlmdCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLndpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGxTZWxlY3RlZFByb2plY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzZWxlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2VsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwcm9qZWN0c2VsZWN0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYmluZFN3aXBlUHJvamVjdEV4aXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBUYWIgPSB0aGlzLl9wcm9qZWN0VGFiO1xyXG4gICAgICAgIGxldCB0b3VjaHN0YXJ0WCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdWNoZW5kWCA9IDA7XHJcblxyXG4gICAgICAgIHBUYWIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGUgPT4ge1xyXG4gICAgICAgICAgICB0b3VjaHN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcFRhYi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xyXG4gICAgICAgICAgICB0b3VjaGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgICAgIGlmICh0b3VjaGVuZFggPiB0b3VjaHN0YXJ0WCkge1xyXG4gICAgICAgICAgICAgICAgcFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUluRnJvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsU2VsZWN0ZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kU3dpcGVBYm91dEV4aXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFUYWIgPSB0aGlzLl9hYm91dFRhYjtcclxuICAgICAgICBsZXQgdG91Y2hzdGFydFggPSAwO1xyXG4gICAgICAgIGxldCB0b3VjaGVuZFggPSAwO1xyXG5cclxuICAgICAgICBhVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcclxuICAgICAgICAgICAgdG91Y2hzdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFUYWIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcclxuICAgICAgICAgICAgdG91Y2hlbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgICAgICBpZiAodG91Y2hlbmRYID4gdG91Y2hzdGFydFgpIHtcclxuICAgICAgICAgICAgICAgIGFUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRIb3ZlclByb2plY3RzKGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5kZXhUYWJsZScpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGhhbmRsZXIocm93LmlkKTtcclxuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxQcmV2aWV3Q2lyY2xlcyhjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3NQcmV2aWV3Q2lyY2xlcyhjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9wb3B1bGF0ZSBwcmV2aWV3IGNpcmNsZXMgd2l0aCBwcmVkZWZpbmVkIGdyYXBoaWNzXHJcbiAgICBfY2FsbFByZXZpZXdDaXJjbGVzKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoXCJkZXNpZ25cIikpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlnaHRNYWluLnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlRGVzaWduXCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBwcmV2aWV3X2Rlc2lnbiArIFwiKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW50aWF0ZUJhbm5lcihjb250YWluZXIsIDIwMCwgJ0RFU0lHTicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoXCJjb2RlXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpZ2h0TWFpbi5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZUNvZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHByZXZpZXdfY29kZSArIFwiKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW50aWF0ZUJhbm5lcihjb250YWluZXIsIDIwMCwgJ0NPREUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKFwiYXJ0XCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpZ2h0TWFpbi5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZUFydFwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcHJldmlld19hcnQgKyBcIilcIjtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFudGlhdGVCYW5uZXIoY29udGFpbmVyLCAyMDAsICdBUlQnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9kaXNtaXNzUHJldmlld0NpcmNsZXMoY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSB0aGlzLl9yaWdodE1haW4ucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gY2lyY2xlc1tpXTtcclxuICAgICAgICAgICAgYy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYW5uZXJzID0gdGhpcy5fYXBwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXInKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBiYW5uZXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fYXBwLnJlbW92ZUNoaWxkKGJhbm5lcnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW5zdGFudGlhdGVCYW5uZXIoc3Bhd25FbGVtZW50LCByYW5nZSwgY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQge3gsIHl9ID0gZ2V0Q2VudGVyUG9zKHNwYXduRWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGxldCB7bmV3WCwgbmV3WX0gPSBnZXRSYW5kb21Qb2ludCh4LHksIHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS5sZWZ0ID0gbmV3WCArICdweCc7XHJcbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS50b3AgPSBuZXdZICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FwcC5hcHBlbmQoYmFubmVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiYW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRDYXRlZ29yeUNoZWNrYm94KG5ld0NhdCwgcGFyZW50LCBwcm9qZWN0cykge1xyXG5cclxuICAgICAgICAgICAgLy9xdWVyeSBjaGVja2JveCBzdGF0ZXMgYW5kIHJlYnVpbGQgaW5kZXggb24gY2xpY2tcclxuICAgICAgICAgICAgbmV3Q2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tCb3hlcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG9ubHkgdGhlIGlkcyB0aGF0IGFyZSBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBbLi4uY2hlY2tCb3hlc11cclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGJveCA9PiBib3guY2hlY2tlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGJveCA9PiBib3guaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEluZGV4VGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZEluZGV4VGFibGUocHJvamVjdHMsIGZpbHRlcmVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2JpbmRTZWxBbGxDaGVja2JveCgpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSB0aGlzLl9pbmRleFRhYi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuX3Byb2plY3RGaWx0ZXJDbGFzcyk7XHJcbiAgICAgICAgY29uc3Qgc2VsQWxsID0gZmlsdGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNzZWxBbGwnKTtcclxuXHJcbiAgICAgICAgc2VsQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbEFsbC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgY2hlY2tib3hlcywgdHVybiBvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsQ2hlY2tzID0gZmlsdGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENoZWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGFsbENoZWNrc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm94LmlkID09PSAnc2VsTm9uZScpIGJveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm94LmlkICE9PSAnc2VsQWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfYmluZFNlbE5vbmVDaGVja2JveCgpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSB0aGlzLl9pbmRleFRhYi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuX3Byb2plY3RGaWx0ZXJDbGFzcyk7XHJcbiAgICAgICAgY29uc3Qgc2VsTm9uZSA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc2VsTm9uZScpO1xyXG5cclxuICAgICAgICBzZWxOb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbE5vbmUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIGNoZWNrYm94ZXMsIHR1cm4gb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrcyA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDaGVja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBhbGxDaGVja3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveC5pZCA9PT0gc2VsTm9uZS5pZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGVzIFByb2plY3QgdGFiIGNvbnRhaW5lciB3aXRoIGNvbnRlbnQgYW5kIHNsaWRlcyBpbnRvIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gezxkaXY+fSBodG1sQ29udGVudCAuLi4gaHRtbCBkaXYgY29udGFpbmluZyBhbGwgcGFnZSBsYXlvdXQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgZGlzcGxheVByb2plY3QoaHRtbENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25DbGFzcyA9ICdzbGlkZUluRnJvbVJpZ2h0JztcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IHRoaXMuX3Byb2plY3RUYWIucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgLy9pZiBwcm9qZWN0IHBhZ2UgYWxyZWFkeSBzaG93biwgc2xpZGUgb3V0LCBzd2FwIGNvbnRlbnQgYW5kIHNsaWRlIGJhY2sgaW4uXHJcbiAgICAgICAgLy90aW1lb3V0IGFkZGVkIHRvIGFsbG93IGFuaW1hdGlvbiB0byBmaW5pc2guXHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKGFuaW1hdGlvbkNsYXNzKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVBbGxDaGlsZHJlbihjb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9hZGRDbG9zZVByb2plY3RCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQWxsQ2hpbGRyZW4oY29udGVudENvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gdGhpcy5fYWRkQ2xvc2VQcm9qZWN0QnV0dG9uKCk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENsb3NlUHJvamVjdEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjbG9zZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2xvc2VQcm9qZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdFRhYi5hcHBlbmRDaGlsZChjbG9zZVByb2plY3QpO1xyXG5cclxuICAgICAgICBjbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2plY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVJbkZyb21SaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvc2VQcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kQ2FsbENvbnRhY3RDYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Q2FsbCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhbGxFbGVtZW50cyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gY2FsbEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xyXG4gICAgICAgICAgICAgICAgY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZCgnc2xpZGVEb3duJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9iaW5kRXhpdENvbnRhY3RDYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl9jb250YWN0Q2FyZDtcclxuICAgICAgICBsZXQgdG91Y2hzdGFydFggPSAwO1xyXG4gICAgICAgIGxldCB0b3VjaGVuZFggPSAwO1xyXG5cclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcclxuICAgICAgICAgICAgdG91Y2hzdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcclxuICAgICAgICAgICAgdG91Y2hlbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgICAgICBpZiAodG91Y2hlbmRYID4gdG91Y2hzdGFydFgpIHtcclxuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVEb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b21FZGdlJyk7XHJcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVEb3duJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09ICAgVVRJTElUWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7QXJyYXlbT2JqZWN0XX0gcHJvamVjdERhdGEgLi4uIGZpZWxkIGxhYmVsZWQgJ2NhdGVnb3JpZXMnIHJlcXVpcmVkXHJcbiAgICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiB1bmlxdWUgY2F0ZWdvcmllc1xyXG4gICAgICovXHJcbiAgICAgX2dldFVuaXF1ZUNhdGVnb3JpZXMocHJvamVjdERhdGEpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBwcm9qZWN0RGF0YS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICBwLmNhdGVnb3JpZXMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjYXRlZ29yaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFyIGFuIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICovXHJcbiAgICAgICAgX3JlbW92ZUFsbENoaWxkcmVuKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR1VJOyIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5vZGUge1xyXG4gICAgdmFsdWUgPSBudWxsO1xyXG4gICAgbmV4dCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtlZExpc3Qge1xyXG4gICAgLy9UT0RPOiBpbXBsZW1lbnQgaXRlcmF0b3JcclxuICAgIF9oZWFkID0gbnVsbDtcclxuICAgIF9zaXplID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCh2YWwpIHtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh2YWwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faGVhZCA9PT0gbnVsbCkgdGhpcy5faGVhZCA9IG5vZGU7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vaXRlcmF0ZSB0byBsYXN0IG5vZGVcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9oZWFkO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zaXplKys7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbnNlcnQgdmFsdWUgYWZ0ZXIgc3BlY2lmaWVkIGluZGV4LiBJZiBsaXN0IGlzIHNob3J0ZXIgdGhhbiBpbmRleCwgXHJcbiAgICAvL3ZhbHVlIHdpbGwgYmUgcHVzaGVkIHRvIHRoZSBlbmQuXHJcbiAgICBpbnNlcnQodmFsLCBpZHgpIHtcclxuICAgICAgICBpZiAoaWR4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5faGVhZDtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHggJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKXtcclxuICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuID0gbmV3IE5vZGUodmFsKTtcclxuICAgICAgICBwcmV2Lm5leHQgPSBuO1xyXG4gICAgICAgIG4ubmV4dCA9IGN1cnJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpemUrKztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlQXQoaWR4KXtcclxuICAgICAgICBpZiAoaWR4ID49IHRoaXMuX3NpemUgfHwgaWR4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5faGVhZDtcclxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHggJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKXtcclxuICAgICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXYubmV4dCA9IGN1cnJlbnQubmV4dDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2l6ZS0tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHBhc3MgaW4gZnVuY3Rpb24gZm9yIGNvbXBhcmluZyB0d28gZWxlbWVudHMgcmVxdWlyZWQsIGFzXHJcbiAgICBlcXVhbGl0eSBmb3IgdHdvIG9iamVjdHMgaXMgbm90IGNsZWFyIGN1dC4gKi9cclxuICAgIGRlbGV0ZSh2YWwsIGZ1bmMpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuX2hlYWQ7XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChmdW5jKHZhbCwgY3VycmVudC5uZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gY3VycmVudC5uZXh0Lm5leHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2l6ZS0tO1xyXG4gICAgfVxyXG5cclxuICAgIGF0KGlkeCkge1xyXG4gICAgICAgIGxldCBjdXJyID0gdGhpcy5faGVhZDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkeCAmJiBjdXJyICE9PSBudWxsOyBpKyspe1xyXG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Vyci52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgSGVhZCh2YWwpIHtcclxuICAgICAgICB0aGlzLl9oZWFkID0gbmV3IE5vZGUodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgIH0gICBcclxufVxyXG4iLCJjbGFzcyBNb2RlbCB7XHJcblxyXG4gICAgX3Byb2plY3RzID0gbnVsbDtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vICAgICB0aGlzLl9wcm9qZWN0cyA9IG5ldyBNYXAoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuYWRkUHJvamVjdHMocHJvamVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3Qoa2V5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdHMuc2V0KGtleSwgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFByb2plY3RzID0gKG5ld1Byb2plY3RzKSA9PiB7XHJcbiAgICAgICAgaWYgKCFuZXdQcm9qZWN0cyBpbnN0YW5jZW9mIE1hcCkgdGhyb3cgXCJNdXN0IGJlIGEgbWFwXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3RzICE9PSBudWxsICYmIHRoaXMuX3Byb2plY3RzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXJnZWQgPSBuZXcgTWFwKFt0aGlzLl9wcm9qZWN0cywgbmV3UHJvamVjdHNdKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb2plY3RzID09PSBudWxsKVxyXG4gICAgICAgIHRoaXMuX3Byb2plY3RzID0gbmV3UHJvamVjdHM7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgcmVsZXZhbnQgaW5mb3JtYXRpb24gZnJvbSBlYWNoIHByb2plY3QgdG8gYnVpbGQgYW4gaW5kZXggdGFibGUsXHJcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xyXG4gICAgICovXHJcbiAgICBnZXQgUHJvamVjdEluZGV4KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wcm9qZWN0cyA9PT0gbnVsbCkgdGhyb3cgJ05vIHByb2plY3RzIGFkZGVkISc7XHJcblxyXG4gICAgICAgIGxldCBlbnRyaWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgW2tleSwgcHJvamVjdF0gb2YgdGhpcy5fcHJvamVjdHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtleS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHByb2plY3QuVGl0bGUsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBwcm9qZWN0LlllYXIsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogcHJvamVjdC5Mb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHByb2plY3QuQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZW50cmllcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0cy5nZXQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBQcm9qZWN0Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElkcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdHMua2V5cygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWwiLCJpbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSBcIi4vTGlua2VkTGlzdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cclxuICAgIF90aXRsZSA9ICdub25lJztcclxuICAgIF9zdWJ0aXRsZSA9ICcnO1xyXG4gICAgX3llYXIgPSAwO1xyXG4gICAgX2xvY2F0aW9uID0gJyc7XHJcbiAgICBfY2F0ZWdvcmllcyA9IG51bGw7XHJcbiAgICBfY29udGVudCA9IG51bGw7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB5ZWFyLCBsb2NhdGlvbil7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLl95ZWFyID0geWVhcjtcclxuICAgICAgICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IG5ldyBMaW5rZWRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhdGVnb3J5ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0dXJucyB0cnVlIGlmIGRlbGV0ZSBzdWNjZXNzZnVsLlxyXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcy5kZWxldGUoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hDb250ZW50KGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250ZW50LnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaENvbnRlbnRzKCkge1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoQ29udGVudChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluc2VydENvbnRlbnQoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9jb250ZW50Lmluc2VydChlbGVtZW50LCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ29udGVudChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGVudC5kZWxldGUoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXR0ZXJzLCBTZXR0ZXJzXHJcbiAgICBnZXQgQ2F0ZWdvcmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcztcclxuICAgIH1cclxuICAgIGdldCBUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFN1YnRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJ0aXRsZTtcclxuICAgIH1cclxuICAgIHNldCBTdWJ0aXRsZSh2YWwpIHtcclxuICAgICAgICB0aGlzLl9zdWJ0aXRsZSA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgWWVhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feWVhcjtcclxuICAgIH1cclxuICAgIGdldCBMb2NhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEh0bWxDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5fY29udGVudC5IZWFkO1xyXG4gICAgICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLnZhbHVlKTtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudDtcclxuICAgIH1cclxuICAgIGdldCBDb250ZW50Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQuU2l6ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgbXlXZWJzaXRlIGZyb20gXCIuLi9wcm9qZWN0cy9wcm9qX215V2Vic2l0ZVwiO1xyXG5pbXBvcnQgcHJpbnRGYXN0IGZyb20gXCIuLi9wcm9qZWN0cy9wcm9qX3ByaW50RmFzdFwiO1xyXG5pbXBvcnQgYWFnIGZyb20gXCIuLi9wcm9qZWN0cy9wcm9qX2FhZ1wiO1xyXG5pbXBvcnQgbWF0bmV0IGZyb20gJy4uL3Byb2plY3RzL3Byb2pfbWF0bmV0JztcclxuaW1wb3J0IGRyb25lcyBmcm9tICcuLi9wcm9qZWN0cy9wcm9qX2Ryb25lcyc7XHJcbmltcG9ydCBubHA0bXMgZnJvbSBcIi4uL3Byb2plY3RzL3Byb2pfbmxwNG1zXCI7XHJcbmltcG9ydCBvcmdhbmljIGZyb20gXCIuLi9wcm9qZWN0cy9wcm9qX29yZ2FuaWNcIjtcclxuXHJcbmNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gbmV3IE1hcCgpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdwcmludEZhc3QnLCAgcHJpbnRGYXN0KCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdhYWcnLCBhYWcoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ3dlYnNpdGUnLCBteVdlYnNpdGUoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ21hdG5ldCcsIG1hdG5ldCgpKTtcclxuICAgIHByb2plY3RzLnNldCgnZHJvbmVzJywgZHJvbmVzKCkpO1xyXG4gICAgcHJvamVjdHMuc2V0KCdubHA0bXMnLCBubHA0bXMoKSk7XHJcbiAgICBwcm9qZWN0cy5zZXQoJ29yZ2FuaWMnLCBvcmdhbmljKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQcm9qZWN0czsiLCJleHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcclxuICAgIHJldHVybiAobyBpbnN0YW5jZW9mIEVsZW1lbnQpO1xyXG59XHJcblxyXG4vL2NvbXBhcmUgdHdvIGh0bWwgZWxlbWVudHMuIG11c3QgYmUgaHRtbCBlbGVtZW50cy5cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZUVxdWFsKGEsIGIpIHtcclxuICAgIGlmICghaXNFbGVtZW50KGEpIHx8ICFpc0VsZW1lbnQoYikpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChhLm5vZGVOYW1lICE9PSBiLm5vZGVOYW1lKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoYS50ZXh0Q29udGVudCAhPT0gYi50ZXh0Q29udGVudCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VGV4dCh0YWcsIHRleHQpIHtcclxuICAgIGlmICh0eXBlb2YgdGFnICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgb3V0cHV0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZShzb3VyY2UgPSAnJykge1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gc291cmNlO1xyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlcygpIHtcclxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuc3JjID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIG91dHB1dC5wdXNoKGltZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZShzb3VyY2UgPSAnJywgY2FwdGlvbiA9ICcnKSB7XHJcbiAgICBpZiAodHlwZW9mIGNhcHRpb24gIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoXCJjYXB0aW9uIG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cclxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gc291cmNlO1xyXG4gICAgY29uc3QgY2FwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcclxuICAgIGNhcHQudGV4dENvbnRlbnQgPSAnZmlnOiAnICsgY2FwdGlvbjtcclxuICAgIGZpZ3VyZS5hcHBlbmQoaW1nLCBjYXB0KTtcclxuICAgIHJldHVybiBmaWd1cmU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUG9pbnQoeCx5LHJhbmdlKSB7XHJcbiAgICBsZXQgeF9yID0gTWF0aC5yYW5kb20oKSAqIHJhbmdlIC0gcmFuZ2UvMjtcclxuICAgIGxldCB5X3IgPSBNYXRoLnJhbmRvbSgpICogcmFuZ2UgLSByYW5nZS8yO1xyXG5cclxuICAgIGxldCBuZXdYID0geCArIHhfcjtcclxuICAgIGxldCBuZXdZID0geSsgeV9yO1xyXG5cclxuICAgIHJldHVybiB7bmV3WCwgbmV3WX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJQb3MoZWxlbWVudCkge1xyXG4gICAgdmFyIHBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgeCA9IChwb3NpdGlvbi5sZWZ0ICsgcG9zaXRpb24ucmlnaHQpLzI7XHJcbiAgICAgICAgdmFyIHkgPSAocG9zaXRpb24udG9wICsgcG9zaXRpb24uYm90dG9tKS8yO1xyXG5cclxuICAgICAgICByZXR1cm4ge3gsIHl9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlX21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVfYW5pbV9wcm9qZWN0QXJyb3cuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVfYW5pbV9jaGVja2JveGVzLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlX21vYmlsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vc2NyaXB0cy9Db250cm9sbGVyJztcclxuXHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==