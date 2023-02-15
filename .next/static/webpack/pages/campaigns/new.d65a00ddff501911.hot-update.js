"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CampaignsNew; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CampaignsNew() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), minimumContribution = ref[0], setminimumContribution = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref1[0], setMessage = ref1[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(event) {\n            var accounts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        return [\n                            4,\n                            _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.createCampaign(minimumContribution).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        setMessage(error.message);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \" Create a Campaign\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: onSubmit,\n                error: message,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Minimum Contribution\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                label: \"wei\",\n                                labelPosition: \"right\",\n                                value: minimumContribution,\n                                onChange: function(e) {\n                                    return setminimumContribution(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(CampaignsNew, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = CampaignsNew;\nvar _c;\n$RefreshReg$(_c, \"CampaignsNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBd0M7QUFDK0I7QUFDMUI7QUFDQTtBQUNOO0FBRXhCLFNBQVNVLFlBQVksR0FBRzs7SUFDckMsSUFBc0RULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0RVLG1CQUFtQixHQUE0QlYsR0FBWSxHQUF4QyxFQUFFVyxzQkFBc0IsR0FBSVgsR0FBWSxHQUFoQjtJQUNsRCxJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQ1ksT0FBTyxHQUFnQlosSUFBWSxHQUE1QixFQUFFYSxVQUFVLEdBQUliLElBQVksR0FBaEI7SUFFMUIsSUFBTWMsUUFBUTttQkFBRyw2RkFBT0MsS0FBSyxFQUFLO2dCQUl4QkMsUUFBUSxFQUlQQyxLQUFLOzs7O3dCQVBkRixLQUFLLENBQUNHLGNBQWMsRUFBRSxDQUFDOzs7Ozs7Ozs7d0JBR0o7OzRCQUFNVixzRUFBb0IsRUFBRTswQkFBQTs7d0JBQXZDUSxRQUFRLEdBQUcsYUFBNEI7d0JBQzdDOzs0QkFBTVQsZ0ZBQThCLENBQUNHLG1CQUFtQixDQUFDLENBQUNhLElBQUksQ0FBQztnQ0FDN0RDLElBQUksRUFBRVIsUUFBUSxDQUFDLENBQUMsQ0FBQzs2QkFDbEIsQ0FBQzswQkFBQTs7d0JBRkYsYUFFRSxDQUFDOzs7Ozs7d0JBQ0lDLEtBQUs7d0JBQ1ZKLFVBQVUsQ0FBQ0ksS0FBSyxDQUFDTCxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1FBRS9CLENBQUM7d0JBWEtFLFFBQVEsQ0FBVUMsS0FBSzs7O09BVzVCO0lBRUQscUJBQ0UsOERBQUNULDBEQUFNOzswQkFDTCw4REFBQ21CLElBQUU7MEJBQUMsb0JBQWtCOzs7OztvQkFBSzswQkFDM0IsOERBQUN2QixtREFBSTtnQkFBQ1ksUUFBUSxFQUFFQSxRQUFRO2dCQUFFRyxLQUFLLEVBQUVMLE9BQU87O2tDQUN0Qyw4REFBQ1YseURBQVU7OzBDQUNULDhEQUFDeUIsT0FBSzswQ0FBQyxzQkFBb0I7Ozs7O29DQUFROzBDQUNuQyw4REFBQ3hCLG9EQUFLO2dDQUNKd0IsS0FBSyxFQUFDLEtBQUs7Z0NBQ1hDLGFBQWEsRUFBQyxPQUFPO2dDQUNyQkMsS0FBSyxFQUFFbkIsbUJBQW1CO2dDQUMxQm9CLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJDQUFLcEIsc0JBQXNCLENBQUNvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lDQUFBOzs7OztvQ0FDdkQ7Ozs7Ozs0QkFDUztrQ0FDYiw4REFBQ3hCLHNEQUFPO3dCQUFDWSxLQUFLO3dCQUFDZ0IsTUFBTSxFQUFDLE9BQU87d0JBQUNDLE9BQU8sRUFBRXRCLE9BQU87Ozs7OzRCQUFJO2tDQUNsRCw4REFBQ1gscURBQU07d0JBQUNrQyxPQUFPO2tDQUFDLFNBQU87Ozs7OzRCQUFTOzs7Ozs7b0JBQzNCOzs7Ozs7WUFDQSxDQUNUO0FBQ0osQ0FBQztHQW5DdUIxQixZQUFZO0FBQVpBLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBMYWJlbCxNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1wYWlnbnNOZXcoKSB7XHJcbiAgY29uc3QgW21pbmltdW1Db250cmlidXRpb24sIHNldG1pbmltdW1Db250cmlidXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24obWluaW11bUNvbnRyaWJ1dGlvbikuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRNZXNzYWdlKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz4gQ3JlYXRlIGEgQ2FtcGFpZ248L2gzPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXttZXNzYWdlfT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWluaW11bUNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRtaW5pbXVtQ29udHJpYnV0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17bWVzc2FnZX0gLz5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTGFiZWwiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbnNOZXciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwic2V0bWluaW11bUNvbnRyaWJ1dGlvbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsImFjY291bnRzIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJoMyIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});