"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-placeholder/lib */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useRequestSpeakers */ "./src/hooks/useRequestSpeakers.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git\\plural-sight-design-components\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();






function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestSpeakers = (0,_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__.default)(2000),
      speakersData = _useRequestSpeakers.speakersData,
      isLoading = _useRequestSpeakers.isLoading,
      hasErrored = _useRequestSpeakers.hasErrored,
      error = _useRequestSpeakers.error,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle;

  if (hasErrored) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: ["Loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__.default, {
      type: "media",
      row: 15,
      className: "speakerslist-placeholder",
      ready: !isLoading,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_0__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "S2K88XHlT8N/hhrDpiKp2T/KtRU=", false, function () {
  return [_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function useRequestSpeakers(delayTime) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      hasErrored = _useState3[0],
      setHasErrored = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(2000);

              case 3:
                //throw "Had Error."
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 10;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                setHasErrored(true);
                setError(_context.t0);

              case 10:
                setIsLoading(false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  });

  function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData: speakersData,
    isLoading: isLoading,
    hasErrored: hasErrored,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "lcG0h/4K/LZTU9GG3mqtP69E18g=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU3MzZhOGI2MGJkMzY2YTIxYTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxZQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDdEMsNEJBQ0VGLGtFQUFrQixDQUFDLElBQUQsQ0FEcEI7QUFBQSxNQUFRRyxZQUFSLHVCQUFRQSxZQUFSO0FBQUEsTUFBc0JDLFNBQXRCLHVCQUFzQkEsU0FBdEI7QUFBQSxNQUFpQ0MsVUFBakMsdUJBQWlDQSxVQUFqQztBQUFBLE1BQTZDQyxLQUE3Qyx1QkFBNkNBLEtBQTdDO0FBQUEsTUFBb0RDLGlCQUFwRCx1QkFBb0RBLGdCQUFwRDs7QUFHQSxNQUFJRixVQUFKLEVBQWdCO0FBQ2Qsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsbURBQWdDQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBRSxFQUZQO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFFLENBQUNGLFNBSlY7QUFBQSw2QkFNRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHRCxZQUFZLENBQUNLLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyw4QkFDRSw4REFBQyw2Q0FBRDtBQUVFLG1CQUFPLEVBQUVBLE9BRlg7QUFHRSx3QkFBWSxFQUFFUCxZQUhoQjtBQUlFLDRCQUFnQixFQUFFLDRCQUFNO0FBQ3RCSyxjQUFBQSxpQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDQyxFQUFULENBQWhC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WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXIvbGliXCI7XG5pbXBvcnQgdXNlUmVxdWVzdFNwZWFrZXJzIGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0U3BlYWtlcnNcIjtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcbiAgY29uc3QgeyBzcGVha2Vyc0RhdGEsIGlzTG9hZGluZywgaGFzRXJyb3JlZCwgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGUgfSA9XG4gICAgdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApO1xuXG4gIGlmIChoYXNFcnJvcmVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgRVJST1I6IDxiPkxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93PXsxNX1cbiAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgcmVhZHk9eyFpc0xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSkge1xuICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaGFzRXJyb3JlZCwgc2V0SGFzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvci5cIlxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldEhhc0Vycm9yZWQodHJ1ZSk7XG4gICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgfSk7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XG4gICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxuICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlLFxuICAgIH07XG4gICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xuICB9XG5cbiAgcmV0dXJuIHsgc3BlYWtlcnNEYXRhLCBpc0xvYWRpbmcsIGhhc0Vycm9yZWQsIGVycm9yLCBvbkZhdm9yaXRlVG9nZ2xlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VycztcbiJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3RTcGVha2VycyIsIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJzRGF0YSIsImlzTG9hZGluZyIsImhhc0Vycm9yZWQiLCJlcnJvciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJkYXRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkZWxheVRpbWUiLCJzZXRTcGVha2Vyc0RhdGEiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic2V0SXNMb2FkaW5nIiwic2V0SGFzRXJyb3JlZCIsInNldEVycm9yIiwiZGVsYXlGdW5jIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3Il0sInNvdXJjZVJvb3QiOiIifQ==