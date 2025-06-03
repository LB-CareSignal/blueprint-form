(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hu-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/hu/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/hu/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var accusativeWeekdays = ['vasárnap', 'hétfőn', 'kedden', 'szerdán', 'csütörtökön', 'pénteken', 'szombaton'];
function week(isFuture) {
  return function (date) {
    var weekday = accusativeWeekdays[date.getUTCDay()];
    var prefix = isFuture ? '' : "'múlt' ";
    return "".concat(prefix, "'").concat(weekday, "' p'-kor'");
  };
}
var formatRelativeLocale = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
  other: 'P'
};
var formatRelative = function formatRelative(token, date) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h1L19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1odS1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGFjY3VzYXRpdmVXZWVrZGF5cyA9IFsndmFzw6FybmFwJywgJ2jDqXRmxZFuJywgJ2tlZGRlbicsICdzemVyZMOhbicsICdjc8O8dMO2cnTDtmvDtm4nLCAncMOpbnRla2VuJywgJ3N6b21iYXRvbiddO1xuZnVuY3Rpb24gd2Vlayhpc0Z1dHVyZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgd2Vla2RheSA9IGFjY3VzYXRpdmVXZWVrZGF5c1tkYXRlLmdldFVUQ0RheSgpXTtcbiAgICB2YXIgcHJlZml4ID0gaXNGdXR1cmUgPyAnJyA6IFwiJ23Dumx0JyBcIjtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4LCBcIidcIikuY29uY2F0KHdlZWtkYXksIFwiJyBwJy1rb3InXCIpO1xuICB9O1xufVxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2Vlazogd2VlayhmYWxzZSksXG4gIHllc3RlcmRheTogXCIndGVnbmFwJyBwJy1rb3InXCIsXG4gIHRvZGF5OiBcIidtYScgcCcta29yJ1wiLFxuICB0b21vcnJvdzogXCInaG9sbmFwJyBwJy1rb3InXCIsXG4gIG5leHRXZWVrOiB3ZWVrKHRydWUpLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=