(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sl-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/sl/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/formatRelative/index.js ***!
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
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'prejšnjo nedeljo ob' p";
      case 3:
        return "'prejšnjo sredo ob' p";
      case 6:
        return "'prejšnjo soboto ob' p";
      default:
        return "'prejšnji' EEEE 'ob' p";
    }
  },
  yesterday: "'včeraj ob' p",
  today: "'danes ob' p",
  tomorrow: "'jutri ob' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'naslednjo nedeljo ob' p";
      case 3:
        return "'naslednjo sredo ob' p";
      case 6:
        return "'naslednjo soboto ob' p";
      default:
        return "'naslednji' EEEE 'ob' p";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NsL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1zbC1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSkge1xuICAgIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIidwcmVqxaFuam8gbmVkZWxqbyBvYicgcFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmpvIHNyZWRvIG9iJyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidwcmVqxaFuam8gc29ib3RvIG9iJyBwXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmppJyBFRUVFICdvYicgcFwiO1xuICAgIH1cbiAgfSxcbiAgeWVzdGVyZGF5OiBcIid2xI1lcmFqIG9iJyBwXCIsXG4gIHRvZGF5OiBcIidkYW5lcyBvYicgcFwiLFxuICB0b21vcnJvdzogXCInanV0cmkgb2InIHBcIixcbiAgbmV4dFdlZWs6IGZ1bmN0aW9uIG5leHRXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCInbmFzbGVkbmpvIG5lZGVsam8gb2InIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qbyBzcmVkbyBvYicgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCInbmFzbGVkbmpvIHNvYm90byBvYicgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qaScgRUVFRSAnb2InIHBcIjtcbiAgICB9XG4gIH0sXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==