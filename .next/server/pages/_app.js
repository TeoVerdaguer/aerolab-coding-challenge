"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyle */ \"./styles/GlobalStyle.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {\n                fileName: \"/Users/mateoverdaguer/Documents/projects/aerolab-coding-challenge/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mateoverdaguer/Documents/projects/aerolab-coding-challenge/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFtRDtBQUVwQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDRTs7MEJBQ0UsOERBQUNILDREQUFXOzs7O29CQUFHOzBCQUNiLDhEQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOztvQkFDN0IsQ0FDSjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWVyb2xhYi1jb2RpbmctY2hhbGxlbmdlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/GlobalStyle.js":
/*!*******************************!*\
  !*** ./styles/GlobalStyle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n\n  :root {\n    /* -- COLORS -- */\n    --neutrals0: #FFFFFF;\n    --neutrals100: #F5F9FF;\n    --neutrals200: #E6EDF7;\n    --neutrals300: #DAE4F2;\n    --neutrals500: #8FA3BF;\n    --neutrals600: #7C899C;\n    --neutrals900: #252F3D;\n    --brandDefault: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);\n    --brandHover: linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);\n    --brandLight: #E5F0FF;\n    --brandLight2: #CCE1FF;\n    --greenDefault: #29CC74;\n    --greenLight: #CCFFE3;\n    --redDefault: #E07F4F;\n    --redLight: #FFDFD9;\n    --illustrationBg: linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%);\n    --sectionBg: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);\n    --aerolab: linear-gradient(180deg, #FF8800 0%, #FF6600 100%);\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  /* Texts */\n  .titleL1 {\n    font-weight: 900;\n    font-size: 200px;\n    line-height: 80%;\n    letter-spacing: 0;\n    text-transform: uppercase;\n    color: $neutrals900;\n  }\n\n  .titleL2 {\n    font-weight: 900;\n    font-size: 48px;\n    line-height: 80%;\n    letter-spacing: 0;\n    text-transform: uppercase;\n    color: $neutrals900;\n  }\n\n  .titleL3 {\n    font-weight: 900;\n    font-size: 32px;\n    line-height: 100%;\n    letter-spacing: 0;\n    text-transform: uppercase;\n    color: $neutrals900;\n  }\n\n  .textL1Default {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 150%;\n    letter-spacing: 0;\n  }\n\n  .textL1AllCaps {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 150%;\n    letter-spacing: 0.24em;\n    text-transform: uppercase;\n  }\n\n  .textL1Light {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 150%;\n    letter-spacing: 0;\n  }\n\n  .textL2Default {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    letter-spacing: 0;\n  }\n\n  .textL2AllCaps {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    letter-spacing: 0.5em;\n    text-transform: uppercase;\n  }\n\n  /* Button, selectors and links */\n  .landingCTA {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    position: static;\n    width: 318px;\n    height: 80px;\n    left: 0px;\n    top: 497px;\n    background: var(--brandDefault);\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);\n    border-radius: 24px;\n    border: none;\n    margin: 64px 0px;\n    &:hover {\n      background: var(--brandHover);\n      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);\n      border-radius: 24px;\n    }\n    p {\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 600;\n      font-size: 18px;\n      line-height: 150%;\n      color: var(--neutrals0);\n    }\n    img {\n      height: 27px;\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvR2xvYmFsU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1DLFdBQVcsR0FBR0QsZ0VBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9JN0MsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWVyb2xhYi1jb2RpbmctY2hhbGxlbmdlLy4vc3R5bGVzL0dsb2JhbFN0eWxlLmpzP2U5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgOnJvb3Qge1xuICAgIC8qIC0tIENPTE9SUyAtLSAqL1xuICAgIC0tbmV1dHJhbHMwOiAjRkZGRkZGO1xuICAgIC0tbmV1dHJhbHMxMDA6ICNGNUY5RkY7XG4gICAgLS1uZXV0cmFsczIwMDogI0U2RURGNztcbiAgICAtLW5ldXRyYWxzMzAwOiAjREFFNEYyO1xuICAgIC0tbmV1dHJhbHM1MDA6ICM4RkEzQkY7XG4gICAgLS1uZXV0cmFsczYwMDogIzdDODk5QztcbiAgICAtLW5ldXRyYWxzOTAwOiAjMjUyRjNEO1xuICAgIC0tYnJhbmREZWZhdWx0OiBsaW5lYXItZ3JhZGllbnQoMTAyLjQ3ZGVnLCAjMTc2RkVCIC01LjM0JSwgI0ZGODBGRiAxMDYuNTglKTtcbiAgICAtLWJyYW5kSG92ZXI6IGxpbmVhci1ncmFkaWVudCgxMDIuNDdkZWcsICMxNjY3RDkgLTUuMzQlLCAjRjI3OUYyIDEwNi41OCUpO1xuICAgIC0tYnJhbmRMaWdodDogI0U1RjBGRjtcbiAgICAtLWJyYW5kTGlnaHQyOiAjQ0NFMUZGO1xuICAgIC0tZ3JlZW5EZWZhdWx0OiAjMjlDQzc0O1xuICAgIC0tZ3JlZW5MaWdodDogI0NDRkZFMztcbiAgICAtLXJlZERlZmF1bHQ6ICNFMDdGNEY7XG4gICAgLS1yZWRMaWdodDogI0ZGREZEOTtcbiAgICAtLWlsbHVzdHJhdGlvbkJnOiBsaW5lYXItZ3JhZGllbnQoMTAyLjQ3ZGVnLCAjNzI5NkVCIC01LjM0JSwgI0VBQzBFOSAxMDYuNTglLCAjRUFDMEU5IDEwNi41OCUpO1xuICAgIC0tc2VjdGlvbkJnOiBsaW5lYXItZ3JhZGllbnQoMTAyLjQ3ZGVnLCByZ2JhKDIzLCAxMTEsIDIzNSwgMC41KSAtNS4zNCUsIHJnYmEoMjU1LCAxMjgsIDI1NSwgMC41KSAxMDYuNTglKTtcbiAgICAtLWFlcm9sYWI6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRjg4MDAgMCUsICNGRjY2MDAgMTAwJSk7XG4gIH1cblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC8qIFRleHRzICovXG4gIC50aXRsZUwxIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkbmV1dHJhbHM5MDA7XG4gIH1cblxuICAudGl0bGVMMiB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkbmV1dHJhbHM5MDA7XG4gIH1cblxuICAudGl0bGVMMyB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogJG5ldXRyYWxzOTAwO1xuICB9XG5cbiAgLnRleHRMMURlZmF1bHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG5cbiAgLnRleHRMMUFsbENhcHMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI0ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC50ZXh0TDFMaWdodCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICAudGV4dEwyRGVmYXVsdCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICAudGV4dEwyQWxsQ2FwcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAvKiBCdXR0b24sIHNlbGVjdG9ycyBhbmQgbGlua3MgKi9cbiAgLmxhbmRpbmdDVEEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAzMThweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogNDk3cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmREZWZhdWx0KTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogNjRweCAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icmFuZEhvdmVyKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgY29sb3I6IHZhcigtLW5ldXRyYWxzMCk7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();