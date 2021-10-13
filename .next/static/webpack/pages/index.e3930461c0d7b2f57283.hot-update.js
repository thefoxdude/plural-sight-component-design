"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTM5MzA0NjFjMGQ3YjJmNTcyODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1HLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsT0FBTyxFQUFFLFNBRFk7QUFFckJDLEVBQUFBLE9BQU8sRUFBRSxTQUZZO0FBR3JCQyxFQUFBQSxPQUFPLEVBQUU7QUFIWSxDQUF2Qjs7QUFNQSxTQUFTQyxrQkFBVCxDQUE0QkMsU0FBNUIsRUFBdUM7QUFBQTs7QUFDckMsa0JBQXdDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPTyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUNBLG1CQUFrQ1YsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT2MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NmLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9nQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUEwQ2pCLCtDQUFRLENBQUNDLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPZ0IsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCbkIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT29CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ3VCLFNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsK1JBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVWIsS0FBSyxDQUFDLElBQUQsQ0FGZjs7QUFBQTtBQUdJO0FBQ0FVLGdCQUFBQSxnQkFBZ0IsQ0FBQ2xCLGNBQWMsQ0FBQ0UsT0FBaEIsQ0FBaEI7QUFDQUssZ0JBQUFBLGVBQWUsQ0FBQ1YsOENBQUQsQ0FBZjtBQUxKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0lxQixnQkFBQUEsZ0JBQWdCLENBQUNsQixjQUFjLENBQUNHLE9BQWhCLENBQWhCO0FBQ0FpQixnQkFBQUEsUUFBUSxhQUFSOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQVlkQyxJQUFBQSxTQUFTO0FBQ1YsR0FiUSxDQUFUOztBQWVBLFdBQVNDLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixRQUFNQyxtQkFBbUIsR0FBR2xCLFlBQVksQ0FBQ21CLElBQWIsQ0FBa0IsVUFBVUMsR0FBVixFQUFlO0FBQzNELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFsQjtBQUNELEtBRjJCLENBQTVCOztBQUdBLFFBQU1JLGlCQUFpQixtQ0FDbEJILG1CQURrQjtBQUVyQkksTUFBQUEsUUFBUSxFQUFFLENBQUNKLG1CQUFtQixDQUFDSTtBQUZWLE1BQXZCOztBQUlBLFFBQU1DLGVBQWUsR0FBR3ZCLFlBQVksQ0FBQ3dCLEdBQWIsQ0FBaUIsVUFBVUosR0FBVixFQUFlO0FBQ3RELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxpQkFBaEIsR0FBb0NELEdBQTNDO0FBQ0QsS0FGdUIsQ0FBeEI7QUFHQW5CLElBQUFBLGVBQWUsQ0FBQ3NCLGVBQUQsQ0FBZjtBQUNEOztBQUVELFNBQU87QUFBRXZCLElBQUFBLFlBQVksRUFBWkEsWUFBRjtBQUFnQlcsSUFBQUEsYUFBYSxFQUFiQSxhQUFoQjtBQUErQkUsSUFBQUEsS0FBSyxFQUFMQSxLQUEvQjtBQUFzQ0csSUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUF0QyxHQUFQO0FBQ0Q7O0dBdENRbEI7O0FBd0NULCtEQUFlQSxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0U3BlYWtlcnMoZGVsYXlUaW1lKSB7XG4gIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtoYXNFcnJvcmVkLCBzZXRIYXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvci5cIlxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XG4gICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmMoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XG4gIH1cblxuICByZXR1cm4geyBzcGVha2Vyc0RhdGEsIHJlcXVlc3RTdGF0dXMsIGVycm9yLCBvbkZhdm9yaXRlVG9nZ2xlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VycztcbiJdLCJuYW1lcyI6WyJkYXRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwic2V0SGFzRXJyb3JlZCIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5RnVuYyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=