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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\n\n\n\nfunction index(param) {\n    var props = param.props;\n    var renderCampaigns = function renderCampaigns(params) {\n        var _this = this;\n        var items = params.map(function(address) {\n            return {\n                header: address,\n                description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"View Campaign\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 22\n                }, _this),\n                fluid: true\n            };\n        });\n        return {\n            props: items\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                async: true,\n                rel: \"stylesheet\",\n                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Open Campaigns\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                props: props\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                floated: \"right\",\n                icon: \"add circle\",\n                content: \"Create Campaign\",\n                primary: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            renderCampaigns()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n// return <div>Wallet: {props}</div>;\n}\nindex.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n    var campaignsWallet;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                ];\n            case 1:\n                campaignsWallet = _state.sent();\n                return [\n                    2,\n                    {\n                        props: campaignsWallet\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUE4RDtBQUNwQjtBQUNrQjtBQUNsQjtBQUUxQyxTQUFTUyxLQUFLLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSztRQUdYQyxlQUFlLEdBQXhCLFNBQVNBLGVBQWUsQ0FBQ0MsTUFBTSxFQUFFOztRQUMvQixJQUFNQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSztZQUNwQyxPQUFPO2dCQUNMQyxNQUFNLEVBQUVELE9BQU87Z0JBQ2ZFLFdBQVcsZ0JBQUUsOERBQUNDLEdBQUM7OEJBQUMsZUFBYTs7Ozs7eUJBQUk7Z0JBQ2pDQyxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRixPQUFPO1lBQUVULEtBQUssRUFBRUcsS0FBSztTQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFCQUNFLDhEQUFDTCwwREFBTTs7MEJBQ0wsOERBQUNZLE1BQUk7Z0JBQ0hDLEtBQUs7Z0JBQ0xDLEdBQUcsRUFBQyxZQUFZO2dCQUNoQkMsSUFBSSxFQUFDLGtFQUFrRTs7Ozs7b0JBQ3ZFOzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLGdCQUFjOzs7OztvQkFBSzswQkFDdkIsOERBQUNuQix5REFBVTtnQkFBQ0ssS0FBSyxFQUFFQSxLQUFLOzs7OztvQkFBSTswQkFFNUIsOERBQUNILHFEQUFNO2dCQUNMbUIsT0FBTyxFQUFDLE9BQU87Z0JBQ2ZDLElBQUksRUFBQyxZQUFZO2dCQUNqQkMsT0FBTyxFQUFDLGlCQUFpQjtnQkFDekJDLE9BQU87Ozs7O29CQUNQO1lBQ0RsQixlQUFlLEVBQUU7Ozs7OztZQUNYLENBQ1Q7QUFFRixxQ0FBcUM7QUFDdkMsQ0FBQztBQUlERixLQUFLLENBQUNxQixlQUFlLGlCQUFHLCtGQUFZO1FBQzVCQyxlQUFlOzs7O2dCQUFHOztvQkFBTTNCLHNGQUFvQyxFQUFFLENBQUM4QixJQUFJLEVBQUU7a0JBQUE7O2dCQUFyRUgsZUFBZSxHQUFHLGFBQW1EO2dCQUMzRTs7b0JBQU87d0JBQUVyQixLQUFLLEVBQUVxQixlQUFlO3FCQUFFO2tCQUFDOzs7QUFDcEMsQ0FBQyxFQUFDO0FBRUYsK0RBQWV0QixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IENhcmQsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5mdW5jdGlvbiBpbmRleCh7IHByb3BzIH0pIHtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhbXBhaWducyhwYXJhbXMpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gcGFyYW1zLm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBDYW1wYWlnbjwvYT4sXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHByb3BzOiBpdGVtcyB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgYXN5bmNcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XHJcbiAgICAgIDxDYXJkLkdyb3VwIHByb3BzPXtwcm9wc30gLz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcclxuICAgICAgICBwcmltYXJ5XHJcbiAgICAgIC8+XHJcbiAgICAgIHtyZW5kZXJDYW1wYWlnbnMoKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcblxyXG4gIC8vIHJldHVybiA8ZGl2PldhbGxldDoge3Byb3BzfTwvZGl2PjtcclxufVxyXG5cclxuXHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ25zV2FsbGV0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gIHJldHVybiB7IHByb3BzOiBjYW1wYWlnbnNXYWxsZXQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZhY3RvcnkiLCJDYXJkIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTGF5b3V0IiwiaW5kZXgiLCJwcm9wcyIsInJlbmRlckNhbXBhaWducyIsInBhcmFtcyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiYSIsImZsdWlkIiwibGluayIsImFzeW5jIiwicmVsIiwiaHJlZiIsImgzIiwiR3JvdXAiLCJmbG9hdGVkIiwiaWNvbiIsImNvbnRlbnQiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ25zV2FsbGV0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});