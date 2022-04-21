exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 456:
/***/ ((module) => {

// Exports
module.exports = {
	"navBar": "Nav_navBar__CSVy5",
	"aeroPayDropDownBtn": "Nav_aeroPayDropDownBtn__K36Fg",
	"aeroLabIcon": "Nav_aeroLabIcon__OGALx",
	"coinAmount": "Nav_coinAmount__09ZyN",
	"dropDownArrow": "Nav_dropDownArrow___J3n7"
};


/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(456);
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Nav() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().navBar),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://aerolab.us/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().aeroLabLogo),
                        src: "/icons/aerolab-logo-1.svg",
                        alt: "aerolab logo"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().aeroPayDropDownBtn),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().aeroLabIcon),
                            src: "/icons/aeropay-1.svg",
                            width: "32px",
                            height: "32px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().coinAmount),
                            children: "10.000"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDownArrow),
                            src: "/icons/chevron-default.svg",
                            alt: "arrow pointing down"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;