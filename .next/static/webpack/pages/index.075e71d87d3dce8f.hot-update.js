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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\n\n\n\nfunction index(param) {\n    var props = param.props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                async: true,\n                rel: \"stylesheet\",\n                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Open Campaigns\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                props: props\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                floated: \"right\",\n                icon: \"add circle\",\n                content: \"Create Campaign\",\n                primary: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            renderCampaigns()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n// return <div>Wallet: {props}</div>;\n}\nfunction renderCampaigns(params) {\n    console.log(params);\n}\nindex.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n    var campaignsWallet;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                ];\n            case 1:\n                campaignsWallet = _state.sent();\n                return [\n                    2,\n                    {\n                        props: campaignsWallet\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUE4RDtBQUNwQjtBQUNrQjtBQUNsQjtBQUUxQyxTQUFTUyxLQUFLLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSztJQUVwQixxQkFDRSw4REFBQ0YsMERBQU07OzBCQUNMLDhEQUFDRyxNQUFJO2dCQUNIQyxLQUFLO2dCQUNMQyxHQUFHLEVBQUMsWUFBWTtnQkFDaEJDLElBQUksRUFBQyxrRUFBa0U7Ozs7O29CQUN2RTswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7b0JBQUs7MEJBQ3ZCLDhEQUFDVix5REFBVTtnQkFBQ0ssS0FBSyxFQUFFQSxLQUFLOzs7OztvQkFBSTswQkFFNUIsOERBQUNILHFEQUFNO2dCQUNMVSxPQUFPLEVBQUMsT0FBTztnQkFDZkMsSUFBSSxFQUFDLFlBQVk7Z0JBQ2pCQyxPQUFPLEVBQUMsaUJBQWlCO2dCQUN6QkMsT0FBTzs7Ozs7b0JBQ1A7WUFDREMsZUFBZSxFQUFFOzs7Ozs7WUFDWCxDQUNUO0FBRUYscUNBQXFDO0FBQ3ZDLENBQUM7QUFFRCxTQUFTQSxlQUFlLENBQUNDLE1BQU0sRUFBRTtJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0FBRXRCLENBQUM7QUFFRGIsS0FBSyxDQUFDZ0IsZUFBZSxpQkFBRywrRkFBWTtRQUM1QkMsZUFBZTs7OztnQkFBRzs7b0JBQU10QixzRkFBb0MsRUFBRSxDQUFDeUIsSUFBSSxFQUFFO2tCQUFBOztnQkFBckVILGVBQWUsR0FBRyxhQUFtRDtnQkFDM0U7O29CQUFPO3dCQUFFaEIsS0FBSyxFQUFFZ0IsZUFBZTtxQkFBRTtrQkFBQzs7O0FBQ3BDLENBQUMsRUFBQztBQUVGLCtEQUFlakIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoeyBwcm9wcyB9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIGFzeW5jXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICA8Q2FyZC5Hcm91cCBwcm9wcz17cHJvcHN9IC8+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXHJcbiAgICAgICAgcHJpbWFyeVxyXG4gICAgICAvPlxyXG4gICAgICB7cmVuZGVyQ2FtcGFpZ25zKCl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG5cclxuICAvLyByZXR1cm4gPGRpdj5XYWxsZXQ6IHtwcm9wc308L2Rpdj47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhbXBhaWducyhwYXJhbXMpIHtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIFxyXG59XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ25zV2FsbGV0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gIHJldHVybiB7IHByb3BzOiBjYW1wYWlnbnNXYWxsZXQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZhY3RvcnkiLCJDYXJkIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTGF5b3V0IiwiaW5kZXgiLCJwcm9wcyIsImxpbmsiLCJhc3luYyIsInJlbCIsImhyZWYiLCJoMyIsIkdyb3VwIiwiZmxvYXRlZCIsImljb24iLCJjb250ZW50IiwicHJpbWFyeSIsInJlbmRlckNhbXBhaWducyIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbnNXYWxsZXQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});