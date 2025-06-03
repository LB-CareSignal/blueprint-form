(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-el-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/el/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/el/_lib/formatRelative/index.js ***!
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
      case 6:
        //Σάββατο
        return "'το προηγούμενο' eeee 'στις' p";
      default:
        return "'την προηγούμενη' eeee 'στις' p";
    }
  },
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') return format(date);
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VsL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZWwtX2xpYi1mb3JtYXRSZWxhdGl2ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICBzd2l0Y2ggKGRhdGUuZ2V0VVRDRGF5KCkpIHtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgLy/Oo86szrLOss6xz4TOv1xuICAgICAgICByZXR1cm4gXCInz4TOvyDPgM+Bzr/Ot86zzr/Pjc68zrXOvc6/JyBlZWVlICfPg8+EzrnPgicgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ8+EzrfOvSDPgM+Bzr/Ot86zzr/Pjc68zrXOvc63JyBlZWVlICfPg8+EzrnPgicgcFwiO1xuICAgIH1cbiAgfSxcbiAgeWVzdGVyZGF5OiBcIifPh864zrXPgiDPg8+EzrnPgicgcFwiLFxuICB0b2RheTogXCInz4POrs68zrXPgc6xIM+Dz4TOuc+CJyBwXCIsXG4gIHRvbW9ycm93OiBcIifOsc+Nz4HOuc6/IM+Dz4TOuc+CJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ8+Dz4TOuc+CJyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSkge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZvcm1hdChkYXRlKTtcbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==