(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uk-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/uk/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/uk/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = __webpack_require__(/*! ../../../../index.js */ "./node_modules/date-fns/index.js");
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
var accusativeWeekdays = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу'];
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + weekday + " о' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'у " + weekday + " о' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + weekday + " о' p";
  }
}
var lastWeekFormat = function lastWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormat = function nextWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: nextWeekFormat,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VrL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDhEQUFzQjtBQUMzQyxxQ0FBcUMsbUJBQU8sQ0FBQyxvR0FBeUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdWstX2xpYi1mb3JtYXRSZWxhdGl2ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2luZGV4LmpzXCIpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xudmFyIGFjY3VzYXRpdmVXZWVrZGF5cyA9IFsn0L3QtdC00ZbQu9GOJywgJ9C/0L7QvdC10LTRltC70L7QuicsICfQstGW0LLRgtC+0YDQvtC6JywgJ9GB0LXRgNC10LTRgycsICfRh9C10YLQstC10YAnLCAn0L/igJnRj9GC0L3QuNGG0Y4nLCAn0YHRg9Cx0L7RgtGDJ107XG5mdW5jdGlvbiBsYXN0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSBhY2N1c2F0aXZlV2Vla2RheXNbZGF5XTtcbiAgc3dpdGNoIChkYXkpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNTpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YMg0LzQuNC90YPQu9GDIFwiICsgd2Vla2RheSArIFwiINC+JyBwXCI7XG4gICAgY2FzZSAxOlxuICAgIGNhc2UgMjpcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gXCIn0YMg0LzQuNC90YPQu9C40LkgXCIgKyB3ZWVrZGF5ICsgXCIg0L4nIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIHJldHVybiBcIifRgyBcIiArIHdlZWtkYXkgKyBcIiDQvicgcFwiO1xufVxuZnVuY3Rpb24gbmV4dFdlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDU6XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiJ9GDINC90LDRgdGC0YPQv9C90YMgXCIgKyB3ZWVrZGF5ICsgXCIg0L4nIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBcIifRgyDQvdCw0YHRgtGD0L/QvdC40LkgXCIgKyB3ZWVrZGF5ICsgXCIg0L4nIHBcIjtcbiAgfVxufVxudmFyIGxhc3RXZWVrRm9ybWF0ID0gZnVuY3Rpb24gbGFzdFdlZWtGb3JtYXQoZGlydHlEYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsYXN0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIG5leHRXZWVrRm9ybWF0ID0gZnVuY3Rpb24gbmV4dFdlZWtGb3JtYXQoZGlydHlEYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXh0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogbGFzdFdlZWtGb3JtYXQsXG4gIHllc3RlcmRheTogXCIn0LLRh9C+0YDQsCDQvicgcFwiLFxuICB0b2RheTogXCIn0YHRjNC+0LPQvtC00L3RliDQvicgcFwiLFxuICB0b21vcnJvdzogXCIn0LfQsNCy0YLRgNCwINC+JyBwXCIsXG4gIG5leHRXZWVrOiBuZXh0V2Vla0Zvcm1hdCxcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=