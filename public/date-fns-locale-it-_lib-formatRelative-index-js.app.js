(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-it-_lib-formatRelative-index-js"],{

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

/***/ "./node_modules/date-fns/locale/it/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
var weekdays = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
function _lastWeek(day) {
  switch (day) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + weekdays[day] + " scorso alle' p";
  }
}
function thisWeek(day) {
  return "'" + weekdays[day] + " alle' p";
}
function _nextWeek(day) {
  switch (day) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + weekdays[day] + " prossimo alle' p";
  }
}
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvaXQvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxvRkFBMEI7QUFDdEUscUNBQXFDLG1CQUFPLENBQUMsd0ZBQTRCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNmYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG9HQUF5QztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1pdC1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzU2FtZVVUQ1dlZWs7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIikpO1xuZnVuY3Rpb24gaXNTYW1lVVRDV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICAoMCwgX2luZGV4LmRlZmF1bHQpKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9ICgwLCBfaW5kZXgyLmRlZmF1bHQpKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vLi4vX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzXCIpKTtcbnZhciB3ZWVrZGF5cyA9IFsnZG9tZW5pY2EnLCAnbHVuZWTDrCcsICdtYXJ0ZWTDrCcsICdtZXJjb2xlZMOsJywgJ2dpb3ZlZMOsJywgJ3ZlbmVyZMOsJywgJ3NhYmF0byddO1xuZnVuY3Rpb24gX2xhc3RXZWVrKGRheSkge1xuICBzd2l0Y2ggKGRheSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBcIidkb21lbmljYSBzY29yc2EgYWxsZScgcFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCInXCIgKyB3ZWVrZGF5c1tkYXldICsgXCIgc2NvcnNvIGFsbGUnIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHJldHVybiBcIidcIiArIHdlZWtkYXlzW2RheV0gKyBcIiBhbGxlJyBwXCI7XG59XG5mdW5jdGlvbiBfbmV4dFdlZWsoZGF5KSB7XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIFwiJ2RvbWVuaWNhIHByb3NzaW1hIGFsbGUnIHBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiJ1wiICsgd2Vla2RheXNbZGF5XSArIFwiIHByb3NzaW1vIGFsbGUnIHBcIjtcbiAgfVxufVxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2xhc3RXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICB5ZXN0ZXJkYXk6IFwiJ2llcmkgYWxsZScgcFwiLFxuICB0b2RheTogXCInb2dnaSBhbGxlJyBwXCIsXG4gIHRvbW9ycm93OiBcIidkb21hbmkgYWxsZScgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX25leHRXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==