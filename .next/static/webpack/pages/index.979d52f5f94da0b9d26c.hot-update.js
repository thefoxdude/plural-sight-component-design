"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
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




var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState4[0],
      setRequestStatus = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      error = _useState5[0],
      setError = _useState5[1];

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
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
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
    requestStatus: requestStatus,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "F1gVx3MpHv20pLKb3AaJmisInG8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTc5ZDUyZjVmOTRkYTBiOWQyNmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1HLGNBQWMsR0FBRztBQUM1QkMsRUFBQUEsT0FBTyxFQUFFLFNBRG1CO0FBRTVCQyxFQUFBQSxPQUFPLEVBQUUsU0FGbUI7QUFHNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUhtQixDQUF2Qjs7QUFNUCxTQUFTQyxrQkFBVCxDQUE0QkMsU0FBNUIsRUFBdUM7QUFBQTs7QUFDckMsa0JBQXdDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPTyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUNBLG1CQUFrQ1YsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT2MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NmLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9nQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUEwQ2pCLCtDQUFRLENBQUNDLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPZ0IsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCbkIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT29CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ3VCLFNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsK1JBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVWIsS0FBSyxDQUFDLElBQUQsQ0FGZjs7QUFBQTtBQUdJO0FBQ0FVLGdCQUFBQSxnQkFBZ0IsQ0FBQ2xCLGNBQWMsQ0FBQ0UsT0FBaEIsQ0FBaEI7QUFDQUssZ0JBQUFBLGVBQWUsQ0FBQ1YsOENBQUQsQ0FBZjtBQUxKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0lxQixnQkFBQUEsZ0JBQWdCLENBQUNsQixjQUFjLENBQUNHLE9BQWhCLENBQWhCO0FBQ0FpQixnQkFBQUEsUUFBUSxhQUFSOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQVlkQyxJQUFBQSxTQUFTO0FBQ1YsR0FiUSxDQUFUOztBQWVBLFdBQVNDLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixRQUFNQyxtQkFBbUIsR0FBR2xCLFlBQVksQ0FBQ21CLElBQWIsQ0FBa0IsVUFBVUMsR0FBVixFQUFlO0FBQzNELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFsQjtBQUNELEtBRjJCLENBQTVCOztBQUdBLFFBQU1JLGlCQUFpQixtQ0FDbEJILG1CQURrQjtBQUVyQkksTUFBQUEsUUFBUSxFQUFFLENBQUNKLG1CQUFtQixDQUFDSTtBQUZWLE1BQXZCOztBQUlBLFFBQU1DLGVBQWUsR0FBR3ZCLFlBQVksQ0FBQ3dCLEdBQWIsQ0FBaUIsVUFBVUosR0FBVixFQUFlO0FBQ3RELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxpQkFBaEIsR0FBb0NELEdBQTNDO0FBQ0QsS0FGdUIsQ0FBeEI7QUFHQW5CLElBQUFBLGVBQWUsQ0FBQ3NCLGVBQUQsQ0FBZjtBQUNEOztBQUVELFNBQU87QUFBRXZCLElBQUFBLFlBQVksRUFBWkEsWUFBRjtBQUFnQlcsSUFBQUEsYUFBYSxFQUFiQSxhQUFoQjtBQUErQkUsSUFBQUEsS0FBSyxFQUFMQSxLQUEvQjtBQUFzQ0csSUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUF0QyxHQUFQO0FBQ0Q7O0dBdENRbEI7O0FBd0NULCtEQUFlQSxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxufTtcblxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSkge1xuICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaGFzRXJyb3JlZCwgc2V0SGFzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICAgIC8vdGhyb3cgXCJIYWQgRXJyb3IuXCJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgfSk7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XG4gICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxuICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlLFxuICAgIH07XG4gICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xuICB9XG5cbiAgcmV0dXJuIHsgc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvciwgb25GYXZvcml0ZVRvZ2dsZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0U3BlYWtlcnM7XG4iXSwibmFtZXMiOlsiZGF0YSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsInNldEhhc0Vycm9yZWQiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheUZ1bmMiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9