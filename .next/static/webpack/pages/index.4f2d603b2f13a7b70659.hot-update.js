"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\git\\plural-sight-design-components\\src\\components\\Speaker.js";


function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: ["Room: ", room]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

_c = Session;

function Sessions(_ref2) {
  var sessions = _ref2.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {
      title: sessions[0].title,
      room: sessions[0].room.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c2 = Sessions;

function SpeakerImage(_ref3) {
  var id = _ref3.id,
      first = _ref3.first,
      last = _ref3.last;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c3 = SpeakerImage;

function SpeakerFavorite(_ref4) {
  var favorite = _ref4.favorite,
      onFavoriteToggle = _ref4.onFavoriteToggle;

  function doneCallback() {
    console.log("in SpeakerFavorite:doneCallback ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      onClick: function onClick() {
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: favorite ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), " ", "Favorite", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_c4 = SpeakerFavorite;

function SpeakerDemographics(_ref5) {
  var first = _ref5.first,
      last = _ref5.last,
      bio = _ref5.bio,
      company = _ref5.company,
      twitterHandle = _ref5.twitterHandle,
      favorite = _ref5.favorite,
      onFavoriteToggle = _ref5.onFavoriteToggle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_c5 = SpeakerDemographics;

function Speaker(_ref6) {
  var speaker = _ref6.speaker,
      showSessions = _ref6.showSessions,
      onFavoriteToggle = _ref6.onFavoriteToggle;
  var id = speaker.id,
      bio = speaker.bio,
      first = speaker.first,
      last = speaker.last,
      favorite = speaker.favorite,
      twitterHandle = speaker.twitterHandle,
      company = speaker.company,
      sessions = speaker.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-sx-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {
        id: id,
        first: first,
        last: last
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {
        first: first,
        last: last,
        bio: bio,
        company: company,
        twitterHandle: twitterHandle,
        favorite: favorite,
        onFavoriteToggle: onFavoriteToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), showSessions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {
      sessions: sessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

_c6 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerFavorite");
$RefreshReg$(_c5, "SpeakerDemographics");
$RefreshReg$(_c6, "Speaker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYyZDYwM2IyZjEzYTdiNzA2NTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsT0FBVCxPQUFrQztBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNoQyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBLGVBQ0dELEtBREgsb0JBQ1U7QUFBQSwyQkFBZUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRjs7QUFRVCxTQUFTRyxRQUFULFFBQWdDO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0UsOERBQUMsT0FBRDtBQUFTLFdBQUssRUFBRUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSCxLQUE1QjtBQUFtQyxVQUFJLEVBQUVHLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUYsSUFBWixDQUFpQkc7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztNQU5RRjs7QUFRVCxTQUFTRyxZQUFULFFBQTJDO0FBQUEsTUFBbkJDLEVBQW1CLFNBQW5CQSxFQUFtQjtBQUFBLE1BQWZDLEtBQWUsU0FBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsU0FBUkEsSUFBUTtBQUN6QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxFQUFDLGFBRFo7QUFFRSxTQUFHLDRCQUFxQkYsRUFBckIsU0FGTDtBQUdFLFdBQUssRUFBQyxLQUhSO0FBSUUsU0FBRyxZQUFLQyxLQUFMLGNBQWNDLElBQWQ7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFB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REYsQ0FBOEJaLFFBQTlCO0FBQUEsTUFBd0NVLGFBQXhDLEdBQ0VFLE9BREYsQ0FBd0NGLGFBQXhDO0FBQUEsTUFBdURELE9BQXZELEdBQ0VHLE9BREYsQ0FBdURILE9BQXZEO0FBQUEsTUFBZ0VoQixRQUFoRSxHQUNFbUIsT0FERixDQUFnRW5CLFFBQWhFO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFLDhEQUFDLFlBQUQ7QUFBYyxVQUFFLEVBQUVHLEVBQWxCO0FBQXNCLGFBQUssRUFBRUMsS0FBN0I7QUFBb0MsWUFBSSxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxtQkFBRDtBQUNFLGFBQUssRUFBRUQsS0FEVDtBQUVFLFlBQUksRUFBRUMsSUFGUjtBQUdFLFdBQUcsRUFBRVUsR0FIUDtBQUlFLGVBQU8sRUFBRUMsT0FKWDtBQUtFLHFCQUFhLEVBQUVDLGFBTGpCO0FBTUUsZ0JBQVEsRUFBRVYsUUFOWjtBQU9FLHdCQUFnQixFQUFFQztBQVBwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFhR1ksWUFBWSxnQkFBRyw4REFBQyxRQUFEO0FBQVUsY0FBUSxFQUFFcEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQXNDLElBYnJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztNQXBCUWtCO0FBc0JULCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb219PC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAgPFNlc3Npb24gdGl0bGU9e3Nlc3Npb25zWzBdLnRpdGxlfSByb29tPXtzZXNzaW9uc1swXS5yb29tLm5hbWV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSh7IGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYGluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9e2Zhdm9yaXRlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9IC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7XG4gIGZpcnN0LFxuICBsYXN0LFxuICBiaW8sXG4gIGNvbXBhbnksXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIGZhdm9yaXRlLFxuICBvbkZhdm9yaXRlVG9nZ2xlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZVxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxuICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucywgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XG4gIGNvbnN0IHsgaWQsIGJpbywgZmlyc3QsIGxhc3QsIGZhdm9yaXRlLCB0d2l0dGVySGFuZGxlLCBjb21wYW55LCBzZXNzaW9ucyB9ID1cbiAgICBzcGVha2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN4LTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3NcbiAgICAgICAgICBmaXJzdD17Zmlyc3R9XG4gICAgICAgICAgbGFzdD17bGFzdH1cbiAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxuICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e3R3aXR0ZXJIYW5kbGV9XG4gICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93U2Vzc2lvbnMgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XG4iXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJuYW1lIiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==