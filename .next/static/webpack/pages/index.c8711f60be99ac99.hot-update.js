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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n\n\n\n\n\nfunction index(param) {\n    var props = param.props;\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Wallet: \",\n            props\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaana\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\kickstart\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\nindex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(ctx) {\n        var campaigns;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            campaigns = _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call().then(function(result) {\n                console.log(result);\n            });\n            console.log(campaigns);\n            return [\n                2\n            ];\n        });\n    });\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBb0Q7QUFDVjtBQUUxQyxTQUFTSSxLQUFLLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSztJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUFPLDhEQUFDRyxLQUFHOztZQUFDLFVBQVE7WUFBQ0gsS0FBSzs7Ozs7O1lBQU8sQ0FBQztBQUNwQyxDQUFDO0FBRURELEtBQUssQ0FBQ0ssZUFBZTtlQUFHLDZGQUFPQyxHQUFHLEVBQUs7WUFDL0JDLFNBQVM7O1lBQVRBLFNBQVMsR0FBR1Isc0ZBQ0ssRUFBRSxDQUN0QlcsSUFBSSxFQUFFLENBQ05DLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUs7Z0JBQ2hCVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDTFYsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVMsQ0FBQyxDQUFDOzs7OztJQUN6QixDQUFDO29CQVI4QkQsR0FBRzs7O0dBUWpDLENBQUM7QUFFRiwrREFBZU4sS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcblxyXG5mdW5jdGlvbiBpbmRleCh7IHByb3BzIH0pIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIDxkaXY+V2FsbGV0OiB7cHJvcHN9PC9kaXY+O1xyXG59XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ25zID0gZmFjdG9yeS5tZXRob2RzXHJcbiAgICAuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKVxyXG4gICAgLmNhbGwoKVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgY29uc29sZS5sb2coY2FtcGFpZ25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJmYWN0b3J5IiwiaW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwidGhlbiIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});