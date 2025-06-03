(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bs-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/bs/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/formatRelative/index.js ***!
  \**********************************************************************/
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
        return "'prošle nedjelje u' p";
      case 3:
        return "'prošle srijede u' p";
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
        return "'sljedeće nedjelje u' p";
      case 3:
        return "'sljedeću srijedu u' p";
      case 6:
        return "'sljedeću subotu u' p";
      default:
        return "'sljedeći' EEEE 'u' p";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JzL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJzLV9saWItZm9ybWF0UmVsYXRpdmUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBmdW5jdGlvbiBsYXN0V2VlayhkYXRlKSB7XG4gICAgc3dpdGNoIChkYXRlLmdldFVUQ0RheSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIidwcm/FoWxlIG5lZGplbGplIHUnIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGUgc3JpamVkZSB1JyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidwcm/FoWxlIHN1Ym90ZSB1JyBwXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsaScgRUVFRSAndScgcFwiO1xuICAgIH1cbiAgfSxcbiAgeWVzdGVyZGF5OiBcIidqdcSNZSB1JyBwXCIsXG4gIHRvZGF5OiBcIidkYW5hcyB1JyBwXCIsXG4gIHRvbW9ycm93OiBcIidzdXRyYSB1JyBwXCIsXG4gIG5leHRXZWVrOiBmdW5jdGlvbiBuZXh0V2VlayhkYXRlKSB7XG4gICAgc3dpdGNoIChkYXRlLmdldFVUQ0RheSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIidzbGplZGXEh2UgbmVkamVsamUgdScgcFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCInc2xqZWRlxId1IHNyaWplZHUgdScgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCInc2xqZWRlxId1IHN1Ym90dSB1JyBwXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCInc2xqZWRlxIdpJyBFRUVFICd1JyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=