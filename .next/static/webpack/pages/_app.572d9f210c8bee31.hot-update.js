"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst Modal = (param)=>{\n    let { setOpenModal , connectWallet  } = param;\n    const walletMenu = [\n        \"MetaMask\",\n        \"Coinbase\",\n        \"Wallet\",\n        \"WalletConnect\"\n    ];\n    funct;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute bg-[#04293A] bg-opacity-0 transform duration-300 w-screen h-screen inset-0 shadow-xl grid justify-center items-center z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-4 px-6 py-4 rounded-lg bg-[#04293A] h-7/12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between pb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-medium\",\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"Modal_box_img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoMdClose, {\n                                className: \"text-2xl cursor-pointer\",\n                                onClick: ()=>setOpenModal(false)\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"setOpenModal_wallet\",\n                    children: walletMenu.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"p-4 bg-[#041C32] my-2 rounded-lg font-semibold cursor-pointer \",\n                            onClick: ()=>connectWallet(),\n                            children: item\n                        }, i + 1, false, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"py-4 leading-4 text-gray-100\",\n                    children: [\n                        \"By connecting a wallet, you agree to Uniswap Labs’ \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 63\n                        }, undefined),\n                        \"Terms of Service and consent to its Privacy Policy.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/galien/portfolio/uniswap/components/Modal/Modal.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsL01vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUN5QjtBQUNrQjtBQVEzQyxNQUFNRSxRQUFRLFNBQXdDO1FBQXZDLEVBQUNDLGFBQVksRUFBQ0MsY0FBYSxFQUFPO0lBQy9DLE1BQU1DLGFBQWE7UUFBQztRQUFXO1FBQVc7UUFBUztLQUFnQjtJQUNuRUM7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUVELFdBQVU7c0NBQXNCOzs7Ozs7c0NBQ25DLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ1AscURBQVNBO2dDQUFDTyxXQUFVO2dDQUEwQkUsU0FBUyxJQUFJUCxhQUFhLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsRiw4REFBQ0k7b0JBQUlDLFdBQVU7OEJBQ1ZILFdBQVdNLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxrQkFDcEIsOERBQUNKOzRCQUNERCxXQUFVOzRCQUNDRSxTQUFTLElBQUlOO3NDQUNyQlE7MkJBREdDLElBQUU7Ozs7Ozs7Ozs7OEJBS2QsOERBQUNKO29CQUNERCxXQUFVOzt3QkFDVDtzQ0FBbUQsOERBQUNNOzs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBFO0tBOUJNWjtBQWdDTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFsL01vZGFsLnRzeD82ODIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RlZCB9IGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW9NZENsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5cbnR5cGUgUHJvcHM9e1xuICBzZXRPcGVuTW9kYWw6KG9wZW5Nb2RhbDogYm9vbGVhbikgPT4gdm9pZDtcbiAgY29ubmVjdFdhbGxldDpzdHJpbmdcblxufVxuY29uc3QgTW9kYWwgPSAoe3NldE9wZW5Nb2RhbCxjb25uZWN0V2FsbGV0fTpQcm9wcykgPT4ge1xuICBjb25zdCB3YWxsZXRNZW51ID0gWydNZXRhTWFzaycsJ0NvaW5iYXNlJywnV2FsbGV0JywnV2FsbGV0Q29ubmVjdCddXG4gIGZ1bmN0XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGJnLVsjMDQyOTNBXSBiZy1vcGFjaXR5LTAgXG4gICAgdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAgdy1zY3JlZW4gaC1zY3JlZW4gaW5zZXQtMCBzaGFkb3cteGwgZ3JpZCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei01MCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbS00IHB4LTYgcHktNCByb3VuZGVkLWxnIGJnLVsjMDQyOTNBXSBoLTcvMTInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTInPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LW1lZGl1bSc+Q29ubmVjdCBXYWxsZXQ8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01vZGFsX2JveF9pbWcnPlxuICAgICAgICAgICAgICA8SW9NZENsb3NlIGNsYXNzTmFtZT0ndGV4dC0yeGwgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpPT5zZXRPcGVuTW9kYWwoZmFsc2UpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXRPcGVuTW9kYWxfd2FsbGV0Jz5cbiAgICAgICAgICAgICAge3dhbGxldE1lbnUubWFwKChpdGVtLGkpPT4oXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3AtNCBiZy1bIzA0MUMzMl0gbXktMiByb3VuZGVkLWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICAgICBrZXk9e2krMX0gb25DbGljaz17KCk9PmNvbm5lY3RXYWxsZXQoKX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIFxuICAgICAgICAgIGNsYXNzTmFtZT0ncHktNCBsZWFkaW5nLTQgdGV4dC1ncmF5LTEwMCdcbiAgICAgICAgICA+QnkgY29ubmVjdGluZyBhIHdhbGxldCwgeW91IGFncmVlIHRvIFVuaXN3YXAgTGFic+KAmSA8YnIgLz5cbiAgICAgICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBjb25zZW50IHRvIGl0cyBQcml2YWN5IFBvbGljeS48L3A+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJJb01kQ2xvc2UiLCJNb2RhbCIsInNldE9wZW5Nb2RhbCIsImNvbm5lY3RXYWxsZXQiLCJ3YWxsZXRNZW51IiwiZnVuY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJpIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal/Modal.tsx\n"));

/***/ })

});