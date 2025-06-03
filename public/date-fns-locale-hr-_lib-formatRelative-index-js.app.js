(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hr-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/hr/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/hr/_lib/formatRelative/index.js ***!
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
        return "'prošlu nedjelju u' p";
      case 3:
        return "'prošlu srijedu u' p";
      case 6:
        return "'prošlu subotu u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'jučer u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function nextWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'iduću nedjelju u' p";
      case 3:
        return "'iduću srijedu u' p";
      case 6:
        return "'iduću subotu u' p";
      default:
        return "'prošli' EEEE 'u' p";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hyL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWhyLV9saWItZm9ybWF0UmVsYXRpdmUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBmdW5jdGlvbiBsYXN0V2VlayhkYXRlKSB7XG4gICAgc3dpdGNoIChkYXRlLmdldFVUQ0RheSgpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIidwcm/FoWx1IG5lZGplbGp1IHUnIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbHUgc3JpamVkdSB1JyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidwcm/FoWx1IHN1Ym90dSB1JyBwXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsaScgRUVFRSAndScgcFwiO1xuICAgIH1cbiAgfSxcbiAgeWVzdGVyZGF5OiBcIidqdcSNZXIgdScgcFwiLFxuICB0b2RheTogXCInZGFuYXMgdScgcFwiLFxuICB0b21vcnJvdzogXCInc3V0cmEgdScgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSkge1xuICAgIHN3aXRjaCAoZGF0ZS5nZXRVVENEYXkoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCInaWR1xId1IG5lZGplbGp1IHUnIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ2lkdcSHdSBzcmlqZWR1IHUnIHBcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiJ2lkdcSHdSBzdWJvdHUgdScgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGknIEVFRUUgJ3UnIHBcIjtcbiAgICB9XG4gIH0sXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==