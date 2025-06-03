(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gu-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html

var formatRelativeLocale = {
  lastWeek: "'પાછલા' eeee p",
  // CLDR #1384
  yesterday: "'ગઈકાલે' p",
  // CLDR #1409
  today: "'આજે' p",
  // CLDR #1410
  tomorrow: "'આવતીકાલે' p",
  // CLDR #1411
  nextWeek: 'eeee p',
  // CLDR #1386
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZ3UtX2xpYi1mb3JtYXRSZWxhdGl2ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIFNvdXJjZTogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9ndS5odG1sXG5cbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ+CqquCqvuCqm+CqsuCqvicgZWVlZSBwXCIsXG4gIC8vIENMRFIgIzEzODRcbiAgeWVzdGVyZGF5OiBcIifgqpfgqojgqpXgqr7gqrLgq4cnIHBcIixcbiAgLy8gQ0xEUiAjMTQwOVxuICB0b2RheTogXCIn4KqG4Kqc4KuHJyBwXCIsXG4gIC8vIENMRFIgIzE0MTBcbiAgdG9tb3Jyb3c6IFwiJ+CqhuCqteCqpOCrgOCqleCqvuCqsuCrhycgcFwiLFxuICAvLyBDTERSICMxNDExXG4gIG5leHRXZWVrOiAnZWVlZSBwJyxcbiAgLy8gQ0xEUiAjMTM4NlxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=