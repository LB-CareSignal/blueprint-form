(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gu-_lib-formatLong-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatLong/index.js ***!
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
//Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
var dateFormats = {
  full: 'EEEE, d MMMM, y',
  // CLDR #1825
  long: 'd MMMM, y',
  // CLDR #1826
  medium: 'd MMM, y',
  // CLDR #1827
  short: 'd/M/yy' // CLDR #1828
};

var timeFormats = {
  full: 'hh:mm:ss a zzzz',
  // CLDR #1829
  long: 'hh:mm:ss a z',
  // CLDR #1830
  medium: 'hh:mm:ss a',
  // CLDR #1831
  short: 'hh:mm a' // CLDR #1832
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  // CLDR #1833
  long: '{{date}} {{time}}',
  // CLDR #1834
  medium: '{{date}} {{time}}',
  // CLDR #1835
  short: '{{date}} {{time}}' // CLDR #1836
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsTUFBTTtBQUMxQjtBQUNBLFdBQVcsTUFBTSxHQUFHLE1BQU07QUFDMUI7QUFDQSxhQUFhLE1BQU0sR0FBRyxNQUFNO0FBQzVCO0FBQ0EsWUFBWSxNQUFNLEdBQUcsTUFBTTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1ndS1fbGliLWZvcm1hdExvbmctaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xuLy9Tb3VyY2U6IGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZCBNTU1NLCB5JyxcbiAgLy8gQ0xEUiAjMTgyNVxuICBsb25nOiAnZCBNTU1NLCB5JyxcbiAgLy8gQ0xEUiAjMTgyNlxuICBtZWRpdW06ICdkIE1NTSwgeScsXG4gIC8vIENMRFIgIzE4MjdcbiAgc2hvcnQ6ICdkL00veXknIC8vIENMRFIgIzE4Mjhcbn07XG5cbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2hoOm1tOnNzIGEgenp6eicsXG4gIC8vIENMRFIgIzE4MjlcbiAgbG9uZzogJ2hoOm1tOnNzIGEgeicsXG4gIC8vIENMRFIgIzE4MzBcbiAgbWVkaXVtOiAnaGg6bW06c3MgYScsXG4gIC8vIENMRFIgIzE4MzFcbiAgc2hvcnQ6ICdoaDptbSBhJyAvLyBDTERSICMxODMyXG59O1xuXG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICAvLyBDTERSICMxODMzXG4gIGxvbmc6ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIC8vIENMRFIgIzE4MzRcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICAvLyBDTERSICMxODM1XG4gIHNob3J0OiAne3tkYXRlfX0ge3t0aW1lfX0nIC8vIENMRFIgIzE4MzZcbn07XG5cbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9