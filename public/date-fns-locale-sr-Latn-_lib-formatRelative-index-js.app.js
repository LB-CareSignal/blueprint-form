(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-Latn-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/formatRelative/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/formatRelative/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'prošle nedelje u' p";
      case 3:
        return "'prošle srede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function nextWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'sledeće nedelje u' p";
      case 3:
        return "'sledeću sredu u' p";
      case 6:
        return "'sledeću subotu u' p";
      default:
        return "'sledeći' EEEE 'u' p";
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyLUxhdG4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc3ItTGF0bi1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSkge1xuICAgIHN3aXRjaCAoZGF0ZS5nZXRVVENEYXkoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsZSBuZWRlbGplIHUnIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGUgc3JlZGUgdScgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsZSBzdWJvdGUgdScgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGknIEVFRUUgJ3UnIHBcIjtcbiAgICB9XG4gIH0sXG4gIHllc3RlcmRheTogXCInanXEjWUgdScgcFwiLFxuICB0b2RheTogXCInZGFuYXMgdScgcFwiLFxuICB0b21vcnJvdzogXCInc3V0cmEgdScgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSkge1xuICAgIHN3aXRjaCAoZGF0ZS5nZXRVVENEYXkoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCInc2xlZGXEh2UgbmVkZWxqZSB1JyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIidzbGVkZcSHdSBzcmVkdSB1JyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidzbGVkZcSHdSBzdWJvdHUgdScgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3NsZWRlxIdpJyBFRUVFICd1JyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=