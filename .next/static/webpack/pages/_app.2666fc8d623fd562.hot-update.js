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

/***/ "./components/NavBar/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_uniswap_uni_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/uniswap-uni-icon.png */ \"./assets/uniswap-uni-icon.png\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ \"./components/index.ts\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import Identicon from 'react-identicons'\nconst NavBar = ()=>{\n    _s();\n    const menuItems = [\n        {\n            name: \"Swap\",\n            link: \"/\"\n        },\n        {\n            name: \"Tokens\",\n            link: \"/\"\n        },\n        {\n            name: \"Pools\",\n            link: \"/\"\n        }\n    ];\n    const [connectedAccount, setConnectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenBox, setOpenMTokenBox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl mx-auto my-8 navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-3 items-center justify-between gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-16 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_uniswap_uni_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"uniswap\"\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-8\",\n                                children: menuItems.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: {\n                                            pathname: \"\".concat(item.name),\n                                            query: \"\".concat(item.link)\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-blue-300 font-normal\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, i + 1, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/5 bg-[#04293A] my-0 mx-auto py-3 px-2.5 rounded-md shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center gap-6 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSearchAlt2, {}, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search Token...\",\n                                    className: \"bg-transparent outline-none w-4/5 border-none text-base text-blue-300 \"\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-end gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4 hover:bg-[#04293A] shadow-lg py-2 px-2.5 rounded-md cursor-pointer capitalize\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"right-icon-ether bg-blue-300 rounded-full p-[4px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_7__.SiEthereum, {\n                                            className: \"text-xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-blue-300\",\n                                        children: \"Network\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            !connectedAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"outline-none border-nom text-blue-300 font-medium bg-[#04293A] shadow-lg py-2 px-4 rounded-md cursor-pointe\",\n                                onClick: ()=>setOpenMTokenBox(true),\n                                children: \"OXk9a...93SQK\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 14\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"outline-none border-nom text-blue-300 font-medium bg-[#04293A] shadow-lg py-2 px-4 rounded-md cursor-pointe\",\n                                onClick: ()=>setOpenModal(true),\n                                children: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                                setOpenModal: setOpenModal,\n                                connectWallet: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            openTokenBox && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.TokenList, {\n                tokenDate: \"hey\",\n                setOpenMTokenBox: setOpenMTokenBox\n            }, void 0, false, {\n                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                lineNumber: 93,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"R7eFbHtZSfNvUUD+jkIR1R+tZZU=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDM0I7QUFDRjtBQUN3QjtBQUNaO0FBQ007QUFDRjtBQUM1QywyQ0FBMkM7QUFFM0MsTUFBTVMsU0FBUyxJQUFNOztJQUNuQixNQUFNQyxZQUFZO1FBQ2hCO1lBQ0VDLE1BQUs7WUFDTEMsTUFBSztRQUNQO1FBQ0E7WUFDRUQsTUFBSztZQUNMQyxNQUFLO1FBQ1A7UUFDQTtZQUNFRCxNQUFLO1lBQ0xDLE1BQUs7UUFDUDtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHYiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3ZFLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3pELE1BQU0sQ0FBQ2dCLGNBQWNDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQVUsS0FBSztJQUVoRSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsQixtREFBS0E7b0NBQUNtQixLQUFLakIsb0VBQUlBO29DQUFFa0IsT0FBTztvQ0FBSUMsUUFBUTtvQ0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7MENBRy9DLDhEQUFDTDtnQ0FBSUMsV0FBVTswQ0FFVFYsVUFBVWUsR0FBRyxDQUFDLENBQUNDLE1BQUtDLGtCQUNsQiw4REFBQ3hCLGtEQUFJQTt3Q0FBV3lCLE1BQU07NENBQUNDLFVBQVMsR0FBYSxPQUFWSCxLQUFLZixJQUFJOzRDQUFHbUIsT0FBTSxHQUFhLE9BQVZKLEtBQUtkLElBQUk7d0NBQUU7a0RBQ2pFLDRFQUFDbUI7NENBQUVYLFdBQVU7c0RBQ1ZNLEtBQUtmLElBQUk7Ozs7Ozt1Q0FGSGdCLElBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBVXZCLDhEQUFDUjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2Isd0RBQVlBOzs7Ozs7Ozs7OzhDQUdmLDhEQUFDeUI7b0NBQ0FDLE1BQUs7b0NBQ05DLGFBQVk7b0NBQ1pkLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1oQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDWixzREFBVUE7NENBQUNZLFdBQVU7Ozs7Ozs7Ozs7O2tEQUV4Qiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7NEJBRXhDLENBQUNQLGlDQUNDLDhEQUFDc0I7Z0NBQU9mLFdBQVU7Z0NBQ21CZ0IsU0FBUyxJQUFJbEIsaUJBQWlCLElBQUk7MENBQUc7Ozs7OzBEQUUzRSw4REFBQ2lCO2dDQUFPZixXQUFVO2dDQUNtQmdCLFNBQVMsSUFBSXBCLGFBQWEsSUFBSTswQ0FBRzs7Ozs7eUNBQ3ZFOzRCQUdDRCwyQkFDRSw4REFBQ1YseUNBQUtBO2dDQUFDVyxjQUFjQTtnQ0FBY3FCLGVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU92RHBCLDhCQUNFLDhEQUFDWCw2Q0FBU0E7Z0JBQUNnQyxXQUFVO2dCQUFNcEIsa0JBQWtCQTs7Ozs7Ozs7Ozs7O0FBS3ZEO0dBeEZNVDtLQUFBQTtBQTBGTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIudHN4PzBmMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy91bmlzd2FwLXVuaS1pY29uLnBuZydcbmltcG9ydCB7TW9kYWwsVG9rZW5MaXN0fSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IEJpU2VhcmNoQWx0MiB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCB7IFNpRXRoZXJldW0gfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XG4vLyBpbXBvcnQgSWRlbnRpY29uIGZyb20gJ3JlYWN0LWlkZW50aWNvbnMnXG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6XCJTd2FwXCIsXG4gICAgICBsaW5rOicvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6XCJUb2tlbnNcIixcbiAgICAgIGxpbms6Jy8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTpcIlBvb2xzXCIsXG4gICAgICBsaW5rOicvJyxcbiAgICB9LFxuICBdXG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW29wZW5Ub2tlbkJveCwgc2V0T3Blbk1Ub2tlbkJveF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21heC13LTd4bCBteC1hdXRvIG15LTggbmF2YmFyJyA+XG4gICAgICB7LyogZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTQgICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgIG1kOmdyaWQtY29scy0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEnPlxuICAgICAgICB7LyogbGVmdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTE2IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgey8qIHVuaXN3YXAgbG9nbyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwidW5pc3dhcFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogbWVudSBpdGVtcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTgnPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zLm1hcCgoaXRlbSxpKT0+KFxuICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpKzF9IGhyZWY9e3twYXRobmFtZTpgJHtpdGVtLm5hbWV9YCxxdWVyeTpgJHtpdGVtLmxpbmt9YH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAgZm9udC1ub3JtYWwnPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogbWlkZGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy00LzUgYmctWyMwNDI5M0FdIG15LTAgbXgtYXV0byBweS0zIHB4LTIuNSByb3VuZGVkLW1kIHNoYWRvdy1sZyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0yeGwnPlxuICAgICAgICAgICAgICAgIDxCaVNlYXJjaEFsdDIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qc2VhcmNoIGlucHV0ICovfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggVG9rZW4uLi4nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHctNC81XG4gICAgICAgICAgICAgICBib3JkZXItbm9uZSB0ZXh0LWJhc2UgdGV4dC1ibHVlLTMwMCAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiByaWdodCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC00Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgaG92ZXI6YmctWyMwNDI5M0FdIHNoYWRvdy1sZyBweS0yIHB4LTIuNSAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciAgY2FwaXRhbGl6ZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1pY29uLWV0aGVyIGJnLWJsdWUtMzAwIHJvdW5kZWQtZnVsbCBwLVs0cHhdJz5cbiAgICAgICAgICAgICAgICA8U2lFdGhlcmV1bSBjbGFzc05hbWU9J3RleHQteGwnLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyB0ZXh0LWJsdWUtMzAwJz5OZXR3b3JrPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshY29ubmVjdGVkQWNjb3VudD8oXG4gICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBib3JkZXItbm9tIHRleHQtYmx1ZS0zMDAgZm9udC1tZWRpdW0gYmctWyMwNDI5M0FdIHNoYWRvdy1sZ1xuICAgICAgICAgICAgIHB5LTIgcHgtNCAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlJyBvbkNsaWNrPXsoKT0+c2V0T3Blbk1Ub2tlbkJveCh0cnVlKX0+T1hrOWEuLi45M1NRSzwvYnV0dG9uPlxuICAgICAgICAgICk6KFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBib3JkZXItbm9tIHRleHQtYmx1ZS0zMDAgZm9udC1tZWRpdW0gYmctWyMwNDI5M0FdIHNoYWRvdy1sZ1xuICAgICAgICAgICAgcHktMiBweC00ICByb3VuZGVkLW1kIGN1cnNvci1wb2ludGUnIG9uQ2xpY2s9eygpPT5zZXRPcGVuTW9kYWwodHJ1ZSl9PkNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3Blbk1vZGFsJiYoXG4gICAgICAgICAgICAgIDxNb2RhbCBzZXRPcGVuTW9kYWw9e3NldE9wZW5Nb2RhbH0gY29ubmVjdFdhbGxldD1cIkNvbm5lY3RcIi8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIHRva2VuTGlzdCAqL31cbiAgICAgIHtcbiAgICAgICAgb3BlblRva2VuQm94JiYoXG4gICAgICAgICAgPFRva2VuTGlzdCB0b2tlbkRhdGU9J2hleScgc2V0T3Blbk1Ub2tlbkJveD17c2V0T3Blbk1Ub2tlbkJveH0vPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJsb2dvIiwiTW9kYWwiLCJUb2tlbkxpc3QiLCJCaVNlYXJjaEFsdDIiLCJTaUV0aGVyZXVtIiwiTmF2QmFyIiwibWVudUl0ZW1zIiwibmFtZSIsImxpbmsiLCJjb25uZWN0ZWRBY2NvdW50Iiwic2V0Q29ubmVjdGVkQWNjb3VudCIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW5Ub2tlbkJveCIsInNldE9wZW5NVG9rZW5Cb3giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm1hcCIsIml0ZW0iLCJpIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY29ubmVjdFdhbGxldCIsInRva2VuRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar/NavBar.tsx\n"));

/***/ })

});