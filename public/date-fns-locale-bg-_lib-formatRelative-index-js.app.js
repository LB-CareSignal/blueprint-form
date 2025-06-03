(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bg-_lib-formatRelative-index-js"],{

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

/***/ "./node_modules/date-fns/locale/bg/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
// Adapted from the `ru` translation

var weekdays = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
function lastWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'миналата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'миналия " + weekday + " в' p";
  }
}
function thisWeek(day) {
  var weekday = weekdays[day];
  if (day === 2 /* Tue */) {
    return "'във " + weekday + " в' p";
  } else {
    return "'в " + weekday + " в' p";
  }
}
function nextWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следващата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следващия " + weekday + " в' p";
  }
}
var lastWeekFormatToken = function lastWeekFormatToken(dirtyDate, baseDate, options) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormatToken = function nextWeekFormatToken(dirtyDate, baseDate, options) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormatToken,
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: nextWeekFormatToken,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvYmcvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxvRkFBMEI7QUFDdEUscUNBQXFDLG1CQUFPLENBQUMsd0ZBQTRCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNmYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDRFQUE2QjtBQUN6RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvR0FBeUM7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJnLV9saWItZm9ybWF0UmVsYXRpdmUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTYW1lVVRDV2VlaztcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiKSk7XG5mdW5jdGlvbiBpc1NhbWVVVENXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gICgwLCBfaW5kZXguZGVmYXVsdCkoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSAoMCwgX2luZGV4Mi5kZWZhdWx0KShkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90b0RhdGUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xuLy8gQWRhcHRlZCBmcm9tIHRoZSBgcnVgIHRyYW5zbGF0aW9uXG5cbnZhciB3ZWVrZGF5cyA9IFsn0L3QtdC00LXQu9GPJywgJ9C/0L7QvdC10LTQtdC70L3QuNC6JywgJ9Cy0YLQvtGA0L3QuNC6JywgJ9GB0YDRj9C00LAnLCAn0YfQtdGC0LLRitGA0YLRitC6JywgJ9C/0LXRgtGK0LonLCAn0YHRitCx0L7RgtCwJ107XG5mdW5jdGlvbiBsYXN0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXldO1xuICBzd2l0Y2ggKGRheSkge1xuICAgIGNhc2UgMDpcbiAgICBjYXNlIDM6XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiJ9C80LjQvdCw0LvQsNGC0LAgXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0LzQuNC90LDQu9C40Y8gXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gd2Vla2RheXNbZGF5XTtcbiAgaWYgKGRheSA9PT0gMiAvKiBUdWUgKi8pIHtcbiAgICByZXR1cm4gXCIn0LLRitCyIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiJ9CyIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIG5leHRXZWVrKGRheSkge1xuICB2YXIgd2Vla2RheSA9IHdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQstCw0YnQsNGC0LAgXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQstCw0YnQuNGPIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH1cbn1cbnZhciBsYXN0V2Vla0Zvcm1hdFRva2VuID0gZnVuY3Rpb24gbGFzdFdlZWtGb3JtYXRUb2tlbihkaXJ0eURhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkYXRlID0gKDAsIF9pbmRleC5kZWZhdWx0KShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsYXN0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIG5leHRXZWVrRm9ybWF0VG9rZW4gPSBmdW5jdGlvbiBuZXh0V2Vla0Zvcm1hdFRva2VuKGRpcnR5RGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSAoMCwgX2luZGV4LmRlZmF1bHQpKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICBpZiAoKDAsIF9pbmRleDIuZGVmYXVsdCkoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHRoaXNXZWVrKGRheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHRXZWVrKGRheSk7XG4gIH1cbn07XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBsYXN0V2Vla0Zvcm1hdFRva2VuLFxuICB5ZXN0ZXJkYXk6IFwiJ9Cy0YfQtdGA0LAg0LInIHBcIixcbiAgdG9kYXk6IFwiJ9C00L3QtdGBINCyJyBwXCIsXG4gIHRvbW9ycm93OiBcIifRg9GC0YDQtSDQsicgcFwiLFxuICBuZXh0V2VlazogbmV4dFdlZWtGb3JtYXRUb2tlbixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=