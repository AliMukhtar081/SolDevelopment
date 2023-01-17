"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance1 = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), executable = ref2[0], setExecutable = ref2[1];\n    var addressSubmittedHandler = function(address) {\n        try {\n            setAddress(address);\n            var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getBalance(key).then(function(balance) {\n                setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);\n            });\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    var addressExecutable = function(address) {\n        try {\n            setAddress(address);\n            var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getAccountInfo(key).then(function(accountInfo) {\n                setExecutable(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.executable);\n            });\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance1, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"`Executable $\",\n                        \"`\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Solana\\\\Game of Dev\\\\frount_end_challenge\\\\solana-intro-frontend\\\\pages\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"KZkRine9LxJkKwHNmmUDg8aGNYQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0nXHJcbmltcG9ydCAqIGFzIFdlYjMgZnJvbSAnQHNvbGFuYS93ZWIzLmpzJ1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZXhlY3V0YWJsZSwgc2V0RXhlY3V0YWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXIgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRBZGRyZXNzKGFkZHJlc3MpXHJcbiAgICAgIGNvbnN0IGtleSA9IG5ldyBXZWIzLlB1YmxpY0tleShhZGRyZXNzKVxyXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IFdlYjMuQ29ubmVjdGlvbihXZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKVxyXG4gICAgICBjb25uZWN0aW9uLmdldEJhbGFuY2Uoa2V5KS50aGVuKGJhbGFuY2UgPT4ge1xyXG4gICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSAvIFdlYjMuTEFNUE9SVFNfUEVSX1NPTClcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEFkZHJlc3MoJycpXHJcbiAgICAgIHNldEJhbGFuY2UoMClcclxuICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRyZXNzRXhlY3V0YWJsZSA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEFkZHJlc3MoYWRkcmVzcylcclxuICAgICAgY29uc3Qga2V5ID0gbmV3IFdlYjMuUHVibGljS2V5KGFkZHJlc3MpXHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgV2ViMy5Db25uZWN0aW9uKFdlYjMuY2x1c3RlckFwaVVybCgnZGV2bmV0JykpXHJcbiAgICAgIGNvbm5lY3Rpb24uZ2V0QWNjb3VudEluZm8oa2V5KS50aGVuKGFjY291bnRJbmZvID0+IHtcclxuICAgICAgICBzZXRFeGVjdXRhYmxlKGFjY291bnRJbmZvPy5leGVjdXRhYmxlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRBZGRyZXNzKCcnKVxyXG4gICAgICBzZXRCYWxhbmNlKDApXHJcbiAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBTdGFydCBZb3VyIFNvbGFuYSBKb3VybmV5XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxBZGRyZXNzRm9ybSBoYW5kbGVyPXthZGRyZXNzU3VibWl0dGVkSGFuZGxlcn0gLz5cclxuICAgICAgICA8cD57YEFkZHJlc3M6ICR7YWRkcmVzc31gfTwvcD5cclxuICAgICAgICA8cD57YEJhbGFuY2U6ICR7YmFsYW5jZX0gU09MYH08L3A+XHJcbiAgICAgICAgPHA+YEV4ZWN1dGFibGUgJHt9YDwvcD5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQWRkcmVzc0Zvcm0iLCJXZWIzIiwiSG9tZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJleGVjdXRhYmxlIiwic2V0RXhlY3V0YWJsZSIsImFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyIiwia2V5IiwiUHVibGljS2V5IiwiY29ubmVjdGlvbiIsIkNvbm5lY3Rpb24iLCJjbHVzdGVyQXBpVXJsIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJMQU1QT1JUU19QRVJfU09MIiwiZXJyb3IiLCJhbGVydCIsImFkZHJlc3NFeGVjdXRhYmxlIiwiZ2V0QWNjb3VudEluZm8iLCJhY2NvdW50SW5mbyIsImRpdiIsImNsYXNzTmFtZSIsIkFwcCIsImhlYWRlciIsIkFwcEhlYWRlciIsInAiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});