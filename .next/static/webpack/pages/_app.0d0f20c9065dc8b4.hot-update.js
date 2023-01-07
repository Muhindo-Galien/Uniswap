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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_uniswap_uni_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/uniswap-uni-icon.png */ \"./assets/uniswap-uni-icon.png\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ \"./components/index.ts\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import Identicon from 'react-identicons'\nconst NavBar = ()=>{\n    _s();\n    const menuItems = [\n        {\n            name: \"Swap\",\n            link: \"/\"\n        },\n        {\n            name: \"Tokens\",\n            link: \"/\"\n        },\n        {\n            name: \"Pools\",\n            link: \"/\"\n        }\n    ];\n    const [connectedAccount, seSconnectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenBox, setOpenMTokenBox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl mx-auto my-8 navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-3 items-center justify-between gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-16 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_uniswap_uni_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"uniswap\"\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-8\",\n                                children: menuItems.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: {\n                                            pathname: \"\".concat(item.name),\n                                            query: \"\".concat(item.link)\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-blue-300 font-normal\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, i + 1, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/5 bg-[#04293A] my-0 mx-auto py-3 px-2.5 rounded-md shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center gap-6 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSearchAlt2, {}, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search Token...\",\n                                    className: \"bg-transparent outline-none w-4/5 border-none text-base text-blue-300 \"\n                                }, void 0, false, {\n                                    fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-end gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4 hover:bg-[#04293A] shadow-lg py-2 px-2.5 rounded-md cursor-pointer capitalize\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"right-icon-ether bg-blue-300 rounded-full p-[4px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_7__.SiEthereum, {\n                                            className: \"text-xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-blue-300\",\n                                        onClick: ()=>setOpenMTokenBox(true),\n                                        children: \"Network\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"outline-none border-nom text-blue-300 font-medium bg-[#04293A] shadow-lg py-2 px-4 rounded-md cursor-pointe\",\n                                onClick: ()=>setOpenModal(true),\n                                children: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                                setOpenModal: setOpenModal,\n                                connectWallet: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            openTokenBox && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.TokenList, {\n                tokenDate: \"hey\",\n                setOpenMTokenBox: setOpenMTokenBox\n            }, void 0, false, {\n                fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n                lineNumber: 87,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/galien/portfolio/uniswap/components/NavBar/NavBar.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"0VSDHO7HwrJrKFldKs3qx8rIB9c=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUQ7QUFDM0I7QUFDRjtBQUN3QjtBQUNaO0FBQ007QUFDRjtBQUM1QywyQ0FBMkM7QUFFM0MsTUFBTVMsU0FBUyxJQUFNOztJQUNuQixNQUFNQyxZQUFZO1FBQ2hCO1lBQ0VDLE1BQUs7WUFDTEMsTUFBSztRQUNQO1FBQ0E7WUFDRUQsTUFBSztZQUNMQyxNQUFLO1FBQ1A7UUFDQTtZQUNFRCxNQUFLO1lBQ0xDLE1BQUs7UUFDUDtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHYiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3ZFLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3pELE1BQU0sQ0FBQ2dCLGNBQWNDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQVUsS0FBSztJQUVoRSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsQixtREFBS0E7b0NBQUNtQixLQUFLakIsb0VBQUlBO29DQUFFa0IsT0FBTztvQ0FBSUMsUUFBUTtvQ0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7MENBRy9DLDhEQUFDTDtnQ0FBSUMsV0FBVTswQ0FFVFYsVUFBVWUsR0FBRyxDQUFDLENBQUNDLE1BQUtDLGtCQUNsQiw4REFBQ3hCLGtEQUFJQTt3Q0FBV3lCLE1BQU07NENBQUNDLFVBQVMsR0FBYSxPQUFWSCxLQUFLZixJQUFJOzRDQUFHbUIsT0FBTSxHQUFhLE9BQVZKLEtBQUtkLElBQUk7d0NBQUU7a0RBQ2pFLDRFQUFDbUI7NENBQUVYLFdBQVU7c0RBQ1ZNLEtBQUtmLElBQUk7Ozs7Ozt1Q0FGSGdCLElBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBVXZCLDhEQUFDUjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2Isd0RBQVlBOzs7Ozs7Ozs7OzhDQUdmLDhEQUFDeUI7b0NBQ0FDLE1BQUs7b0NBQ05DLGFBQVk7b0NBQ1pkLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1oQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDWixzREFBVUE7NENBQUNZLFdBQVU7Ozs7Ozs7Ozs7O2tEQUV4Qiw4REFBQ1c7d0NBQUVYLFdBQVU7d0NBQXdCZSxTQUFTLElBQUlqQixpQkFBaUIsSUFBSTtrREFBRzs7Ozs7Ozs7Ozs7OzBDQUU5RSw4REFBQ2tCO2dDQUFPaEIsV0FBVTtnQ0FDbUJlLFNBQVMsSUFBSW5CLGFBQWEsSUFBSTswQ0FBRzs7Ozs7OzRCQUVwRUQsMkJBQ0UsOERBQUNWLHlDQUFLQTtnQ0FBQ1csY0FBY0E7Z0NBQWNxQixlQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPdkRwQiw4QkFDRSw4REFBQ1gsNkNBQVNBO2dCQUFDZ0MsV0FBVTtnQkFBTXBCLGtCQUFrQkE7Ozs7Ozs7Ozs7OztBQUt2RDtHQWxGTVQ7S0FBQUE7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLnRzeD8wZjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvdW5pc3dhcC11bmktaWNvbi5wbmcnXG5pbXBvcnQge01vZGFsLFRva2VuTGlzdH0gZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQgeyBTaUV0aGVyZXVtIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xuLy8gaW1wb3J0IElkZW50aWNvbiBmcm9tICdyZWFjdC1pZGVudGljb25zJ1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOlwiU3dhcFwiLFxuICAgICAgbGluazonLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOlwiVG9rZW5zXCIsXG4gICAgICBsaW5rOicvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6XCJQb29sc1wiLFxuICAgICAgbGluazonLycsXG4gICAgfSxcbiAgXVxuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2VTY29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtvcGVuVG9rZW5Cb3gsIHNldE9wZW5NVG9rZW5Cb3hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy03eGwgbXgtYXV0byBteS04IG5hdmJhcicgPlxuICAgICAgey8qIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy00ICAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkICBtZDpncmlkLWNvbHMtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0xJz5cbiAgICAgICAgey8qIGxlZnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0xNiBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIHsvKiB1bmlzd2FwIGxvZ28gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cInVuaXN3YXBcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIG1lbnUgaXRlbXMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC04Jz5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKGl0ZW0saSk9PihcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aSsxfSBocmVmPXt7cGF0aG5hbWU6YCR7aXRlbS5uYW1lfWAscXVlcnk6YCR7aXRlbS5saW5rfWB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwIGZvbnQtbm9ybWFsJz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNC81IGJnLVsjMDQyOTNBXSBteS0wIG14LWF1dG8gcHktMyBweC0yLjUgcm91bmRlZC1tZCBzaGFkb3ctbGcnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtMnhsJz5cbiAgICAgICAgICAgICAgICA8QmlTZWFyY2hBbHQyLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKnNlYXJjaCBpbnB1dCAqL31cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIFRva2VuLi4uJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSB3LTQvNVxuICAgICAgICAgICAgICAgYm9yZGVyLW5vbmUgdGV4dC1iYXNlIHRleHQtYmx1ZS0zMDAgJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogcmlnaHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtNCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC00IGhvdmVyOmJnLVsjMDQyOTNBXSBzaGFkb3ctbGcgcHktMiBweC0yLjUgIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgIGNhcGl0YWxpemUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtaWNvbi1ldGhlciBiZy1ibHVlLTMwMCByb3VuZGVkLWZ1bGwgcC1bNHB4XSc+XG4gICAgICAgICAgICAgICAgPFNpRXRoZXJldW0gY2xhc3NOYW1lPSd0ZXh0LXhsJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgdGV4dC1ibHVlLTMwMCcgb25DbGljaz17KCk9PnNldE9wZW5NVG9rZW5Cb3godHJ1ZSl9Pk5ldHdvcms8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBib3JkZXItbm9tIHRleHQtYmx1ZS0zMDAgZm9udC1tZWRpdW0gYmctWyMwNDI5M0FdIHNoYWRvdy1sZ1xuICAgICAgICAgIHB5LTIgcHgtNCAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlJyBvbkNsaWNrPXsoKT0+c2V0T3Blbk1vZGFsKHRydWUpfT5Db25uZWN0PC9idXR0b24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgb3Blbk1vZGFsJiYoXG4gICAgICAgICAgICAgIDxNb2RhbCBzZXRPcGVuTW9kYWw9e3NldE9wZW5Nb2RhbH0gY29ubmVjdFdhbGxldD1cIkNvbm5lY3RcIi8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIHRva2VuTGlzdCAqL31cbiAgICAgIHtcbiAgICAgICAgb3BlblRva2VuQm94JiYoXG4gICAgICAgICAgPFRva2VuTGlzdCB0b2tlbkRhdGU9J2hleScgc2V0T3Blbk1Ub2tlbkJveD17c2V0T3Blbk1Ub2tlbkJveH0vPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJsb2dvIiwiTW9kYWwiLCJUb2tlbkxpc3QiLCJCaVNlYXJjaEFsdDIiLCJTaUV0aGVyZXVtIiwiTmF2QmFyIiwibWVudUl0ZW1zIiwibmFtZSIsImxpbmsiLCJjb25uZWN0ZWRBY2NvdW50Iiwic2VTY29ubmVjdGVkQWNjb3VudCIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm9wZW5Ub2tlbkJveCIsInNldE9wZW5NVG9rZW5Cb3giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm1hcCIsIml0ZW0iLCJpIiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwiYnV0dG9uIiwiY29ubmVjdFdhbGxldCIsInRva2VuRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar/NavBar.tsx\n"));

/***/ })

});