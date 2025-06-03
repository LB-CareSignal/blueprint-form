(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-EG-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-EG/_lib/formatRelative/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-EG/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "eeee 'اللي جاي الساعة' p",
  yesterday: "'إمبارح الساعة' p",
  today: "'النهاردة الساعة' p",
  tomorrow: "'بكرة الساعة' p",
  nextWeek: "eeee 'الساعة' p",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLUVHL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hci1FRy1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCJlZWVlICfYp9mE2YTZiiDYrNin2Yog2KfZhNiz2KfYudipJyBwXCIsXG4gIHllc3RlcmRheTogXCIn2KXZhdio2KfYsditINin2YTYs9in2LnYqScgcFwiLFxuICB0b2RheTogXCIn2KfZhNmG2YfYp9ix2K/YqSDYp9mE2LPYp9i52KknIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ9io2YPYsdipINin2YTYs9in2LnYqScgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICfYp9mE2LPYp9i52KknIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9