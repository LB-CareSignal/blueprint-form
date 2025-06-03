(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hi-_lib-formatLong-index-js"],{

/***/ "./node_modules/date-fns/locale/hi/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/hi/_lib/formatLong/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));
var dateFormats = {
  full: 'EEEE, do MMMM, y',
  // CLDR #1787
  long: 'do MMMM, y',
  // CLDR #1788
  medium: 'd MMM, y',
  // CLDR #1789
  short: 'dd/MM/yyyy' // CLDR #1790
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  // CLDR #1791
  long: 'h:mm:ss a z',
  // CLDR #1792
  medium: 'h:mm:ss a',
  // CLDR #1793
  short: 'h:mm a' // CLDR #1794
};

var dateTimeFormats = {
  full: "{{date}} 'को' {{time}}",
  // CLDR #1795
  long: "{{date}} 'को' {{time}}",
  // CLDR #1796
  medium: '{{date}}, {{time}}',
  // CLDR #1797
  short: '{{date}}, {{time}}' // CLDR #1798
};

var formatLong = {
  date: (0, _index.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0, _index.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0, _index.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hpL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsTUFBTSxRQUFRLE1BQU07QUFDL0I7QUFDQSxXQUFXLE1BQU0sUUFBUSxNQUFNO0FBQy9CO0FBQ0EsYUFBYSxNQUFNLElBQUksTUFBTTtBQUM3QjtBQUNBLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaGktX2xpYi1mb3JtYXRMb25nLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIGRvIE1NTU0sIHknLFxuICAvLyBDTERSICMxNzg3XG4gIGxvbmc6ICdkbyBNTU1NLCB5JyxcbiAgLy8gQ0xEUiAjMTc4OFxuICBtZWRpdW06ICdkIE1NTSwgeScsXG4gIC8vIENMRFIgIzE3ODlcbiAgc2hvcnQ6ICdkZC9NTS95eXl5JyAvLyBDTERSICMxNzkwXG59O1xuXG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIC8vIENMRFIgIzE3OTFcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgLy8gQ0xEUiAjMTc5MlxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICAvLyBDTERSICMxNzkzXG4gIHNob3J0OiAnaDptbSBhJyAvLyBDTERSICMxNzk0XG59O1xuXG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICfgpJXgpYsnIHt7dGltZX19XCIsXG4gIC8vIENMRFIgIzE3OTVcbiAgbG9uZzogXCJ7e2RhdGV9fSAn4KSV4KWLJyB7e3RpbWV9fVwiLFxuICAvLyBDTERSICMxNzk2XG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIC8vIENMRFIgIzE3OTdcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nIC8vIENMRFIgIzE3OThcbn07XG5cbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9