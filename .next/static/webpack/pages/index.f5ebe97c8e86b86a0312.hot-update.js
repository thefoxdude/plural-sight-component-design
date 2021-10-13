"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_git_plural_sight_design_components_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-placeholder/lib */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\git\\plural-sight-design-components\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_git_plural_sight_design_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      hasErrored = _useState3[0],
      setHasErrored = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
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
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);
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

  function _onFavoriteToggle(id) {
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

  if (hasErrored) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
        children: ["Loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_6__.default, {
      type: "media",
      row: 15,
      className: "speakerslist-placeholder",
      ready: !isLoading,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_3__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "lcG0h/4K/LZTU9GG3mqtP69E18g=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjVlYmU5N2M4ZTg2Yjg2YTAzMTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssWUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQ3RDLGtCQUF3Q0gsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0FBQUEsTUFBT0ksWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFDQSxtQkFBa0NQLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DWiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPYSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUEwQmQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFBQSxhQUNDa0IsU0FERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrUkFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVVWCxLQUFLLENBQUMsSUFBRCxDQUZmOztBQUFBO0FBR0k7QUFDQUQsZ0JBQUFBLGVBQWUsQ0FBQ1AsOENBQUQsQ0FBZjtBQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUlnQixnQkFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBRSxnQkFBQUEsUUFBUSxhQUFSOztBQVBKO0FBU0VKLGdCQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQVlkSyxJQUFBQSxTQUFTO0FBQ1YsR0FiUSxDQUFUOztBQWVBLFdBQVNDLGlCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixRQUFNQyxtQkFBbUIsR0FBR2hCLFlBQVksQ0FBQ2lCLElBQWIsQ0FBa0IsVUFBVUMsR0FBVixFQUFlO0FBQzNELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFsQjtBQUNELEtBRjJCLENBQTVCOztBQUdBLFFBQU1JLGlCQUFpQixtQ0FDbEJILG1CQURrQjtBQUVyQkksTUFBQUEsUUFBUSxFQUFFLENBQUNKLG1CQUFtQixDQUFDSTtBQUZWLE1BQXZCOztBQUlBLFFBQU1DLGVBQWUsR0FBR3JCLFlBQVksQ0FBQ3NCLEdBQWIsQ0FBaUIsVUFBVUosR0FBVixFQUFlO0FBQ3RELGFBQU9BLEdBQUcsQ0FBQ0gsRUFBSixLQUFXQSxFQUFYLEdBQWdCSSxpQkFBaEIsR0FBb0NELEdBQTNDO0FBQ0QsS0FGdUIsQ0FBeEI7QUFHQWpCLElBQUFBLGVBQWUsQ0FBQ29CLGVBQUQsQ0FBZjtBQUNEOztBQUVELE1BQUlaLFVBQUosRUFBZ0I7QUFDZCx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxtREFBZ0NFLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsU0FBRyxFQUFFLEVBRlA7QUFHRSxlQUFTLEVBQUMsMEJBSFo7QUFJRSxXQUFLLEVBQUUsQ0FBQ0osU0FKVjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dQLFlBQVksQ0FBQ3NCLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyw4QkFDRSw4REFBQyw2Q0FBRDtBQUVFLG1CQUFPLEVBQUVBLE9BRlg7QUFHRSx3QkFBWSxFQUFFeEIsWUFIaEI7QUFJRSw0QkFBZ0IsRUFBRSw0QkFBTTtBQUN0QmUsY0FBQUEsaUJBQWdCLENBQUNTLE9BQU8sQ0FBQ1IsRUFBVCxDQUFoQjtBQUNEO0FBTkgsYUFDT1EsT0FBTyxDQUFDUixFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFVRCxTQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBckVRakI7O0tBQUFBO0FBdUVULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXIvbGliXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG4gIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtoYXNFcnJvcmVkLCBzZXRIYXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBkZWxheUZ1bmMoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XG4gIH1cblxuICBpZiAoaGFzRXJyb3JlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5Mb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXG4gICAgICAgIHJvdz17MTV9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXshaXNMb2FkaW5nfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XG4iXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0UGxhY2Vob2xkZXIiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsInNldEhhc0Vycm9yZWQiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXlGdW5jIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=