(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/be/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/be/_lib/formatRelative/index.js ***!
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
var accusativeWeekdays = ['нядзелю', 'панядзелак', 'аўторак', 'сераду', 'чацвер', 'пятніцу', 'суботу'];
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у мінулую " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у мінулы " + weekday + " а' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'у " + weekday + " а' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступную " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у наступны " + weekday + " а' p";
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
  yesterday: "'учора а' p",
  today: "'сёння а' p",
  tomorrow: "'заўтра а' p",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDhEQUFzQjtBQUMzQyxxQ0FBcUMsbUJBQU8sQ0FBQyxvR0FBeUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYmUtX2xpYi1mb3JtYXRSZWxhdGl2ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2luZGV4LmpzXCIpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xudmFyIGFjY3VzYXRpdmVXZWVrZGF5cyA9IFsn0L3Rj9C00LfQtdC70Y4nLCAn0L/QsNC90Y/QtNC30LXQu9Cw0LonLCAn0LDRntGC0L7RgNCw0LonLCAn0YHQtdGA0LDQtNGDJywgJ9GH0LDRhtCy0LXRgCcsICfQv9GP0YLQvdGW0YbRgycsICfRgdGD0LHQvtGC0YMnXTtcbmZ1bmN0aW9uIGxhc3RXZWVrKGRheSkge1xuICB2YXIgd2Vla2RheSA9IGFjY3VzYXRpdmVXZWVrZGF5c1tkYXldO1xuICBzd2l0Y2ggKGRheSkge1xuICAgIGNhc2UgMDpcbiAgICBjYXNlIDM6XG4gICAgY2FzZSA1OlxuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBcIifRgyDQvNGW0L3Rg9C70YPRjiBcIiArIHdlZWtkYXkgKyBcIiDQsCcgcFwiO1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDI6XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFwiJ9GDINC80ZbQvdGD0LvRiyBcIiArIHdlZWtkYXkgKyBcIiDQsCcgcFwiO1xuICB9XG59XG5mdW5jdGlvbiB0aGlzV2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSBhY2N1c2F0aXZlV2Vla2RheXNbZGF5XTtcbiAgcmV0dXJuIFwiJ9GDIFwiICsgd2Vla2RheSArIFwiINCwJyBwXCI7XG59XG5mdW5jdGlvbiBuZXh0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSBhY2N1c2F0aXZlV2Vla2RheXNbZGF5XTtcbiAgc3dpdGNoIChkYXkpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNTpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YMg0L3QsNGB0YLRg9C/0L3Rg9GOIFwiICsgd2Vla2RheSArIFwiINCwJyBwXCI7XG4gICAgY2FzZSAxOlxuICAgIGNhc2UgMjpcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gXCIn0YMg0L3QsNGB0YLRg9C/0L3RiyBcIiArIHdlZWtkYXkgKyBcIiDQsCcgcFwiO1xuICB9XG59XG52YXIgbGFzdFdlZWtGb3JtYXQgPSBmdW5jdGlvbiBsYXN0V2Vla0Zvcm1hdChkaXJ0eURhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkYXRlID0gKDAsIF9pbmRleC50b0RhdGUpKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICBpZiAoKDAsIF9pbmRleDIuZGVmYXVsdCkoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHRoaXNXZWVrKGRheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxhc3RXZWVrKGRheSk7XG4gIH1cbn07XG52YXIgbmV4dFdlZWtGb3JtYXQgPSBmdW5jdGlvbiBuZXh0V2Vla0Zvcm1hdChkaXJ0eURhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkYXRlID0gKDAsIF9pbmRleC50b0RhdGUpKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICBpZiAoKDAsIF9pbmRleDIuZGVmYXVsdCkoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHRoaXNXZWVrKGRheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHRXZWVrKGRheSk7XG4gIH1cbn07XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBsYXN0V2Vla0Zvcm1hdCxcbiAgeWVzdGVyZGF5OiBcIifRg9GH0L7RgNCwINCwJyBwXCIsXG4gIHRvZGF5OiBcIifRgdGR0L3QvdGPINCwJyBwXCIsXG4gIHRvbW9ycm93OiBcIifQt9Cw0Z7RgtGA0LAg0LAnIHBcIixcbiAgbmV4dFdlZWs6IG5leHRXZWVrRm9ybWF0LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==