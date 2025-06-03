(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-es-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/es/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/es/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  } else {
    return formatRelativeLocale[token];
  }
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VzL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWVzLV9saWItZm9ybWF0UmVsYXRpdmUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidlbCcgZWVlZSAncGFzYWRvIGEgbGEnIHBcIixcbiAgeWVzdGVyZGF5OiBcIidheWVyIGEgbGEnIHBcIixcbiAgdG9kYXk6IFwiJ2hveSBhIGxhJyBwXCIsXG4gIHRvbW9ycm93OiBcIidtYcOxYW5hIGEgbGEnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYSBsYScgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlUGx1cmFsID0ge1xuICBsYXN0V2VlazogXCInZWwnIGVlZWUgJ3Bhc2FkbyBhIGxhcycgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2F5ZXIgYSBsYXMnIHBcIixcbiAgdG9kYXk6IFwiJ2hveSBhIGxhcycgcFwiLFxuICB0b21vcnJvdzogXCInbWHDsWFuYSBhIGxhcycgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhIGxhcycgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgaWYgKGRhdGUuZ2V0VVRDSG91cnMoKSAhPT0gMSkge1xuICAgIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVBsdXJhbFt0b2tlbl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9