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

/***/ "./components/HeroSection/HeroSection.tsx":
/*!************************************************!*\
  !*** ./components/HeroSection/HeroSection.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/index */ \"./assets/index.ts\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Token_Token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Token/Token */ \"./components/Token/Token.tsx\");\n/* harmony import */ var _SearchToken_SearchToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchToken/SearchToken */ \"./components/SearchToken/SearchToken.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeroSection = (param)=>{\n    let { accounts , tokenData  } = param;\n    _s();\n    const [openSetting, setOpenSetting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openToken, setOpenToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenTow, setOpenToopenTokenTow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Token\n    const [tokenOne, setTokenOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    const [tokenTwo, setTokenTwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        image: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl my-8 mx-auto flex flex-col items-center justify-center relative hero_section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5rem] bg-[#04293A] p-4 w-11/12 sm:w-[30rem] rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"heading img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoSettingsOutline, {\n                                    className: \"text-xl\",\n                                    onClick: ()=>setOpenSetting(true)\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between border border-blue-400 rounded-lg mt-4 pl-8 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"0\",\n                                className: \"border-none outline-none bg-transparent text-blue-400 text-lg w-3/5 sm:w-4/5 lg:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setOpenToken(true),\n                                className: \"flex justify-center items-center gap-1 bg-blue-400 p-2 font-semibold text-lg rounded-br-lg rounded-tr-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: tokenOne.image || _assets_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].etherlogo,\n                                        alt: \"ehter\",\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    tokenOne.name || \"ETH\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        children: \"8078\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between border border-blue-400 rounded-lg mt-4 pl-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"0\",\n                                className: \"border-none outline-none bg-transparent text-blue-400 text-lg w-3/5 sm:w-4/5 lg:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setOpenToken(true),\n                                className: \"flex justify-center items-center gap-1 bg-blue-400 p-2 font-medium text-lg rounded-br-lg rounded-tr-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: tokenTwo.image || _assets_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].etherlogo,\n                                        alt: \"ehter\",\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    tokenTwo.name || \"ETH\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        children: \"8078\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    accounts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-400 hover:bg-blue-500 border-0 outline-0 text-lg w-full py-2 mt-4 rounded-full font-semibold\",\n                        children: \"Connect Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-400 hover:bg-blue-500 border-0 outline-0 text-lg w-full py-2 mt-4 rounded-full font-semibold\",\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            openSetting && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Token_Token__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setOpenSetting: setOpenSetting\n            }, void 0, false, {\n                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                lineNumber: 82,\n                columnNumber: 22\n            }, undefined),\n            openSetting && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchToken_SearchToken__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tokenData: tokenData,\n                openToken: setTokenOne,\n                tokens: setTokenOne\n            }, void 0, false, {\n                fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/galien/portfolio/uniswap/components/HeroSection/HeroSection.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"zPi2O+lNlOPyp0oY3r5P0Dbrz7s=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uL0hlcm9TZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF5RDtBQUNsQjtBQUNhO0FBRUE7QUFFakI7QUFDa0I7QUFXckQsTUFBTU8sY0FBYyxTQUFnQztRQUEvQixFQUFDQyxTQUFRLEVBQUNDLFVBQVMsRUFBTzs7SUFDN0MsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFVLEtBQUs7SUFDekQsTUFBTSxDQUFDYSxjQUFjQyxzQkFBc0IsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUU3RCxRQUFRO0lBQ1IsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUN4Q2lCLE1BQUs7UUFDTEMsT0FBTTtJQUNQO0lBQ0EsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBSTtRQUMzQ2lCLE1BQUs7UUFDTEMsT0FBTTtJQUNQO0lBQ0MscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNwQiw4REFBaUJBO29DQUFDb0IsV0FBVTtvQ0FDN0JFLFNBQVMsSUFBSWQsZUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJcEMsOERBQUNXO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQU1DLE1BQUs7Z0NBQ1hDLGFBQVk7Z0NBQ1pMLFdBQVU7Ozs7OzswQ0FFWCw4REFBQ007Z0NBQU9KLFNBQVMsSUFBSVosYUFBYSxJQUFJO2dDQUFHVSxXQUFVOztrREFFakQsOERBQUNuQixtREFBS0E7d0NBQ0owQixLQUFLZCxTQUFTRyxLQUFLLElBQUlqQiwrREFBZ0I7d0NBQUU4QixLQUFJO3dDQUM3Q0MsT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7O29DQUVoQmxCLFNBQVNFLElBQUksSUFBSTtrREFDcEIsOERBQUNpQjtrREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUliLDhEQUFDYjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFNQyxNQUFLO2dDQUNYQyxhQUFZO2dDQUNaTCxXQUFVOzs7Ozs7MENBRVgsOERBQUNNO2dDQUFPSixTQUFTLElBQUlaLGFBQWEsSUFBSTtnQ0FBR1UsV0FBVTs7a0RBRWpELDhEQUFDbkIsbURBQUtBO3dDQUNKMEIsS0FBS1YsU0FBU0QsS0FBSyxJQUFJakIsK0RBQWdCO3dDQUFFOEIsS0FBSTt3Q0FDN0NDLE9BQU87d0NBQUlDLFFBQVE7Ozs7OztvQ0FFaEJkLFNBQVNGLElBQUksSUFBSTtrREFDcEIsOERBQUNpQjtrREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUlaM0IseUJBQ0MsOERBQUNxQjt3QkFBT04sV0FBVTtrQ0FBdUc7Ozs7O2tEQUV6SCw4REFBQ007d0JBQU9OLFdBQVU7a0NBQXVHOzs7OztpQ0FDMUg7Ozs7Ozs7WUFFRmIsNkJBQWMsOERBQUNMLG9EQUFLQTtnQkFBRU0sZ0JBQWdCQTs7Ozs7O1lBQ3RDRCw2QkFDRCw4REFBQ0osZ0VBQVdBO2dCQUNWRyxXQUFXQTtnQkFDWEcsV0FBV0s7Z0JBQ1htQixRQUFVbkI7Ozs7Ozs7Ozs7OztBQVNsQjtHQTdFTVY7S0FBQUE7QUErRU4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvU2VjdGlvbi9IZXJvU2VjdGlvbi50c3g/YjNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi4vLi4vYXNzZXRzL2luZGV4J1xuaW1wb3J0IHsgSW9TZXR0aW5nc091dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnO1xuaW1wb3J0IHsgU2lFdGhlcmV1bSB9IGZyb20gJ3JlYWN0LWljb25zL3NpJztcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vVG9rZW4vVG9rZW4nO1xuaW1wb3J0IFNlYXJjaFRva2VuIGZyb20gJy4uL1NlYXJjaFRva2VuL1NlYXJjaFRva2VuJztcblxudHlwZSBQcm9wcz17XG4gIGFjY291bnRzOnN0cmluZyxcbiAgdG9rZW5EYXRhOnN0cmluZ1xufVxuaW50ZXJmYWNlIElUb2tlbiB7XG4gIG5hbWU6c3RyaW5nLFxuICBpbWFnZTpzdHJpbmcgfFN0YXRpY0ltYWdlRGF0YVxufVxuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7YWNjb3VudHMsdG9rZW5EYXRhfTpQcm9wcykgPT4ge1xuICBjb25zdCBbb3BlblNldHRpbmcsIHNldE9wZW5TZXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbb3BlblRva2VuLCBzZXRPcGVuVG9rZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtvcGVuVG9rZW5Ub3csIHNldE9wZW5Ub29wZW5Ub2tlblRvd10gPSB1c2VTdGF0ZShmYWxzZSlcblxuIC8vIFRva2VuXG4gY29uc3QgW3Rva2VuT25lLCBzZXRUb2tlbk9uZV0gPSB1c2VTdGF0ZSh7XG4gIG5hbWU6XCJcIixcbiAgaW1hZ2U6XCJcIlxuIH0pXG4gY29uc3QgW3Rva2VuVHdvLCBzZXRUb2tlblR3b10gPSB1c2VTdGF0ZTxJPih7XG4gIG5hbWU6XCJcIixcbiAgaW1hZ2U6XCJcIlxuIH0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21heC13LTd4bCBteS04ICBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIGhlcm9fc2VjdGlvbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtWzVyZW1dICBiZy1bIzA0MjkzQV0gcC00IHctMTEvMTIgc206dy1bMzByZW1dIHJvdW5kZWQtbGcnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICA8cD5Td2FwPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkaW5nIGltZyc+XG4gICAgICAgICAgICA8SW9TZXR0aW5nc091dGxpbmUgY2xhc3NOYW1lPSd0ZXh0LXhsJ1xuICAgICAgICAgICAgb25DbGljaz17KCk9PnNldE9wZW5TZXR0aW5nKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gIGJvcmRlciBib3JkZXItYmx1ZS00MDAgcm91bmRlZC1sZyBtdC00IHBsLTggJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj0nMCdcbiAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItbm9uZSBvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlLTQwMCB0ZXh0LWxnIHctMy81ICBzbTp3LTQvNSBsZzp3LWF1dG8nXG4gICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0T3BlblRva2VuKHRydWUpfSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xXG4gICAgICAgICAgIGJnLWJsdWUtNDAwIHAtMiBmb250LXNlbWlib2xkIHRleHQtbGcgcm91bmRlZC1ici1sZyByb3VuZGVkLXRyLWxnJz5cbiAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgc3JjPXt0b2tlbk9uZS5pbWFnZSB8fCBpbWFnZXMuZXRoZXJsb2dvfSBhbHQ9J2VodGVyJ1xuICAgICAgICAgICAgICB3aWR0aD17MjB9IGhlaWdodD17MjB9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dG9rZW5PbmUubmFtZSB8fCAnRVRIJ31cbiAgICAgICAgICAgICAgPHNtYWxsPjgwNzg8L3NtYWxsPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIG10LTQgcGwtOCc+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9JzAnXG4gICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lIGJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZS00MDAgdGV4dC1sZyB3LTMvNSBzbTp3LTQvNSBsZzp3LWF1dG8nXG4gICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0T3BlblRva2VuKHRydWUpfSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xXG4gICAgICAgICAgIGJnLWJsdWUtNDAwIHAtMiBmb250LW1lZGl1bSB0ZXh0LWxnIHJvdW5kZWQtYnItbGcgcm91bmRlZC10ci1sZyc+XG4gICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHNyYz17dG9rZW5Ud28uaW1hZ2UgfHwgaW1hZ2VzLmV0aGVybG9nb30gYWx0PSdlaHRlcidcbiAgICAgICAgICAgICAgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3Rva2VuVHdvLm5hbWUgfHwgJ0VUSCd9XG4gICAgICAgICAgICAgIDxzbWFsbD44MDc4PC9zbWFsbD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FjY291bnRzPyhcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS01MDAgYm9yZGVyLTAgb3V0bGluZS0wIHRleHQtbGcgdy1mdWxsIHB5LTIgbXQtNCByb3VuZGVkLWZ1bGwgZm9udC1zZW1pYm9sZCc+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgKTooXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNTAwIGJvcmRlci0wIG91dGxpbmUtMCB0ZXh0LWxnIHctZnVsbCBweS0yIG10LTQgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQnPlN3YXA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge29wZW5TZXR0aW5nICYmPFRva2VuICBzZXRPcGVuU2V0dGluZz17c2V0T3BlblNldHRpbmd9Lz59XG4gICAgICB7b3BlblNldHRpbmcgJiZcbiAgICAgIDxTZWFyY2hUb2tlbiBcbiAgICAgICAgdG9rZW5EYXRhPXt0b2tlbkRhdGF9XG4gICAgICAgIG9wZW5Ub2tlbj17c2V0VG9rZW5PbmV9XG4gICAgICAgIHRva2VucyA9IHtzZXRUb2tlbk9uZX1cbiAgICAgIC8+fVxuICAgICAgICB7Lyoge29wZW5TZXR0aW5nICYmPFNlYXJjaFRva2VuIFxuICAgICAgICB0b2tlbkRhdGE9e3Rva2VuRGF0YX1cbiAgICAgICAgb3BlblRva2VuPXtzZXRUb2tlblR3b31cbiAgICAgICAgdG9rZW5zID0ge3NldFRva2VuVHdvfVxuICAgICAgICAvPn0gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlcyIsIklvU2V0dGluZ3NPdXRsaW5lIiwiSW1hZ2UiLCJUb2tlbiIsIlNlYXJjaFRva2VuIiwiSGVyb1NlY3Rpb24iLCJhY2NvdW50cyIsInRva2VuRGF0YSIsIm9wZW5TZXR0aW5nIiwic2V0T3BlblNldHRpbmciLCJvcGVuVG9rZW4iLCJzZXRPcGVuVG9rZW4iLCJvcGVuVG9rZW5Ub3ciLCJzZXRPcGVuVG9vcGVuVG9rZW5Ub3ciLCJ0b2tlbk9uZSIsInNldFRva2VuT25lIiwibmFtZSIsImltYWdlIiwidG9rZW5Ud28iLCJzZXRUb2tlblR3byIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzcmMiLCJldGhlcmxvZ28iLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNtYWxsIiwidG9rZW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeroSection/HeroSection.tsx\n"));

/***/ })

});