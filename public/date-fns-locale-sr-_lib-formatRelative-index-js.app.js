(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/sr/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/formatRelative/index.js ***!
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
        return "'прошле недеље у' p";
      case 3:
        return "'прошле среде у' p";
      case 6:
        return "'прошле суботе у' p";
      default:
        return "'прошли' EEEE 'у' p";
    }
  },
  yesterday: "'јуче у' p",
  today: "'данас у' p",
  tomorrow: "'сутра у' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'следеће недеље у' p";
      case 3:
        return "'следећу среду у' p";
      case 6:
        return "'следећу суботу у' p";
      default:
        return "'следећи' EEEE 'у' p";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1zci1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSkge1xuICAgIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIifQv9GA0L7RiNC70LUg0L3QtdC00LXRmdC1INGDJyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIifQv9GA0L7RiNC70LUg0YHRgNC10LTQtSDRgycgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIn0L/RgNC+0YjQu9C1INGB0YPQsdC+0YLQtSDRgycgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ9C/0YDQvtGI0LvQuCcgRUVFRSAn0YMnIHBcIjtcbiAgICB9XG4gIH0sXG4gIHllc3RlcmRheTogXCIn0ZjRg9GH0LUg0YMnIHBcIixcbiAgdG9kYXk6IFwiJ9C00LDQvdCw0YEg0YMnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ9GB0YPRgtGA0LAg0YMnIHBcIixcbiAgbmV4dFdlZWs6IGZ1bmN0aW9uIG5leHRXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIn0YHQu9C10LTQtdGb0LUg0L3QtdC00LXRmdC1INGDJyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIifRgdC70LXQtNC10ZvRgyDRgdGA0LXQtNGDINGDJyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIifRgdC70LXQtNC10ZvRgyDRgdGD0LHQvtGC0YMg0YMnIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIifRgdC70LXQtNC10ZvQuCcgRUVFRSAn0YMnIHBcIjtcbiAgICB9XG4gIH0sXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==