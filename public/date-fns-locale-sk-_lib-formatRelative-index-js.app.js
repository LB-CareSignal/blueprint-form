(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sk-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/isSameUTCWeek/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameUTCWeek;
var _index = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));
function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0, _index.default)(2, arguments);
  var dateLeftStartOfWeek = (0, _index2.default)(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0, _index2.default)(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/sk/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sk/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308
var accusativeWeekdays = ['nedeľu', 'pondelok', 'utorok', 'stredu', 'štvrtok', 'piatok', 'sobotu'];
function _lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0: /* Sun */
    case 3: /* Wed */
    case 6 /* Sat */:
      return "'minulú " + weekday + " o' p";
    default:
      return "'minulý' eeee 'o' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  if (day === 4 /* Thu */) {
    return "'vo' eeee 'o' p";
  } else {
    return "'v " + weekday + " o' p";
  }
}
function _nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0: /* Sun */
    case 4: /* Wed */
    case 6 /* Sat */:
      return "'budúcu " + weekday + " o' p";
    default:
      return "'budúci' eeee 'o' p";
  }
}
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'včera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc2svX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxvRkFBMEI7QUFDdEUscUNBQXFDLG1CQUFPLENBQUMsd0ZBQTRCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNmYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG9HQUF5QztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXNrLV9saWItZm9ybWF0UmVsYXRpdmUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTYW1lVVRDV2VlaztcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiKSk7XG5mdW5jdGlvbiBpc1NhbWVVVENXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gICgwLCBfaW5kZXguZGVmYXVsdCkoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSAoMCwgX2luZGV4Mi5kZWZhdWx0KShkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9zay5odG1sP2hpZGUjMTMwOFxudmFyIGFjY3VzYXRpdmVXZWVrZGF5cyA9IFsnbmVkZcS+dScsICdwb25kZWxvaycsICd1dG9yb2snLCAnc3RyZWR1JywgJ8WhdHZydG9rJywgJ3BpYXRvaycsICdzb2JvdHUnXTtcbmZ1bmN0aW9uIF9sYXN0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSBhY2N1c2F0aXZlV2Vla2RheXNbZGF5XTtcbiAgc3dpdGNoIChkYXkpIHtcbiAgICBjYXNlIDA6IC8qIFN1biAqL1xuICAgIGNhc2UgMzogLyogV2VkICovXG4gICAgY2FzZSA2IC8qIFNhdCAqLzpcbiAgICAgIHJldHVybiBcIidtaW51bMO6IFwiICsgd2Vla2RheSArIFwiIG8nIHBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiJ21pbnVsw70nIGVlZWUgJ28nIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIGlmIChkYXkgPT09IDQgLyogVGh1ICovKSB7XG4gICAgcmV0dXJuIFwiJ3ZvJyBlZWVlICdvJyBwXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiJ3YgXCIgKyB3ZWVrZGF5ICsgXCIgbycgcFwiO1xuICB9XG59XG5mdW5jdGlvbiBfbmV4dFdlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOiAvKiBTdW4gKi9cbiAgICBjYXNlIDQ6IC8qIFdlZCAqL1xuICAgIGNhc2UgNiAvKiBTYXQgKi86XG4gICAgICByZXR1cm4gXCInYnVkw7pjdSBcIiArIHdlZWtkYXkgKyBcIiBvJyBwXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIididWTDumNpJyBlZWVlICdvJyBwXCI7XG4gIH1cbn1cbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgaWYgKCgwLCBfaW5kZXguZGVmYXVsdCkoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gdGhpc1dlZWsoZGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9sYXN0V2VlayhkYXkpO1xuICAgIH1cbiAgfSxcbiAgeWVzdGVyZGF5OiBcIid2xI1lcmEgbycgcFwiLFxuICB0b2RheTogXCInZG5lcyBvJyBwXCIsXG4gIHRvbW9ycm93OiBcIid6YWp0cmEgbycgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX25leHRXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==