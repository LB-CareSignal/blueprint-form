(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-kn-_lib-formatLong-index-js"],{

/***/ "./node_modules/date-fns/locale/kn/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/kn/_lib/formatLong/index.js ***!
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
// Reference: https://www.unicode.org/cldr/charts/32/summary/kn.html

var dateFormats = {
  full: 'EEEE, MMMM d, y',
  // CLDR 1816
  long: 'MMMM d, y',
  // CLDR 1817
  medium: 'MMM d, y',
  // CLDR 1818
  short: 'd/M/yy' // CLDR 1819
};

var timeFormats = {
  full: 'hh:mm:ss a zzzz',
  // CLDR 1820
  long: 'hh:mm:ss a z',
  // CLDR 1821
  medium: 'hh:mm:ss a',
  // CLDR 1822
  short: 'hh:mm a' // CLDR 1823
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  // CLDR 1824
  long: '{{date}} {{time}}',
  // CLDR 1825
  medium: '{{date}} {{time}}',
  // CLDR 1826
  short: '{{date}} {{time}}' // CLDR 1827
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2tuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsTUFBTSxHQUFHLE1BQU07QUFDMUI7QUFDQSxXQUFXLE1BQU0sR0FBRyxNQUFNO0FBQzFCO0FBQ0EsYUFBYSxNQUFNLEdBQUcsTUFBTTtBQUM1QjtBQUNBLFlBQVksTUFBTSxHQUFHLE1BQU07QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta24tX2xpYi1mb3JtYXRMb25nLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9rbi5odG1sXG5cbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZCwgeScsXG4gIC8vIENMRFIgMTgxNlxuICBsb25nOiAnTU1NTSBkLCB5JyxcbiAgLy8gQ0xEUiAxODE3XG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgLy8gQ0xEUiAxODE4XG4gIHNob3J0OiAnZC9NL3l5JyAvLyBDTERSIDE4MTlcbn07XG5cbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2hoOm1tOnNzIGEgenp6eicsXG4gIC8vIENMRFIgMTgyMFxuICBsb25nOiAnaGg6bW06c3MgYSB6JyxcbiAgLy8gQ0xEUiAxODIxXG4gIG1lZGl1bTogJ2hoOm1tOnNzIGEnLFxuICAvLyBDTERSIDE4MjJcbiAgc2hvcnQ6ICdoaDptbSBhJyAvLyBDTERSIDE4MjNcbn07XG5cbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIC8vIENMRFIgMTgyNFxuICBsb25nOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICAvLyBDTERSIDE4MjVcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICAvLyBDTERSIDE4MjZcbiAgc2hvcnQ6ICd7e2RhdGV9fSB7e3RpbWV9fScgLy8gQ0xEUiAxODI3XG59O1xuXG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0TG9uZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==