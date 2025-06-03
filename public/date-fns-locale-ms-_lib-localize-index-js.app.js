(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ms-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ms/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ms/_lib/localize/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));
// Most data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/ms.html
var eraValues = {
  narrow: ['SM', 'M'],
  abbreviated: ['SM', 'M'],
  wide: ['Sebelum Masihi', 'Masihi']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['S1', 'S2', 'S3', 'S4'],
  wide: ['Suku pertama', 'Suku kedua', 'Suku ketiga', 'Suku keempat']
};

// Note: in Malay, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
  wide: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember']
};
var dayValues = {
  narrow: ['A', 'I', 'S', 'R', 'K', 'J', 'S'],
  short: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  abbreviated: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  wide: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'tgh malam',
    noon: 'tgh hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  // Can't use "pertama", "kedua" because can't be parsed
  return 'ke-' + Number(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21zL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLW1zLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbi8vIE1vc3QgZGF0YSBmb3IgbG9jYWxpemF0aW9uIGFyZSB0YWtlbiBmcm9tIHRoaXMgcGFnZVxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9tcy5odG1sXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnU00nLCAnTSddLFxuICBhYmJyZXZpYXRlZDogWydTTScsICdNJ10sXG4gIHdpZGU6IFsnU2ViZWx1bSBNYXNpaGknLCAnTWFzaWhpJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUzEnLCAnUzInLCAnUzMnLCAnUzQnXSxcbiAgd2lkZTogWydTdWt1IHBlcnRhbWEnLCAnU3VrdSBrZWR1YScsICdTdWt1IGtldGlnYScsICdTdWt1IGtlZW1wYXQnXVxufTtcblxuLy8gTm90ZTogaW4gTWFsYXksIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnTycsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFjJywgJ0FwcicsICdNZWknLCAnSnVuJywgJ0p1bCcsICdPZ28nLCAnU2VwJywgJ09rdCcsICdOb3YnLCAnRGlzJ10sXG4gIHdpZGU6IFsnSmFudWFyaScsICdGZWJydWFyaScsICdNYWMnLCAnQXByaWwnLCAnTWVpJywgJ0p1bicsICdKdWxhaScsICdPZ29zJywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0Rpc2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQScsICdJJywgJ1MnLCAnUicsICdLJywgJ0onLCAnUyddLFxuICBzaG9ydDogWydBaGQnLCAnSXNuJywgJ1NlbCcsICdSYWInLCAnS2hhJywgJ0p1bScsICdTYWInXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQWhkJywgJ0lzbicsICdTZWwnLCAnUmFiJywgJ0toYScsICdKdW0nLCAnU2FiJ10sXG4gIHdpZGU6IFsnQWhhZCcsICdJc25pbicsICdTZWxhc2EnLCAnUmFidScsICdLaGFtaXMnLCAnSnVtYWF0JywgJ1NhYnR1J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3RnaCBtYWxhbScsXG4gICAgbm9vbjogJ3RnaCBoYXJpJyxcbiAgICBtb3JuaW5nOiAncGFnaScsXG4gICAgYWZ0ZXJub29uOiAndGVuZ2FoIGhhcmknLFxuICAgIGV2ZW5pbmc6ICdwZXRhbmcnLFxuICAgIG5pZ2h0OiAnbWFsYW0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICd0ZW5nYWggbWFsYW0nLFxuICAgIG5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgbW9ybmluZzogJ3BhZ2knLFxuICAgIGFmdGVybm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBldmVuaW5nOiAncGV0YW5nJyxcbiAgICBuaWdodDogJ21hbGFtJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAndGVuZ2FoIG1hbGFtJyxcbiAgICBub29uOiAndGVuZ2FoIGhhcmknLFxuICAgIG1vcm5pbmc6ICdwYWdpJyxcbiAgICBhZnRlcm5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgZXZlbmluZzogJ3BldGFuZycsXG4gICAgbmlnaHQ6ICdtYWxhbSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3RlbmdhaCBtYWxhbScsXG4gICAgbm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBtb3JuaW5nOiAncGFnaScsXG4gICAgYWZ0ZXJub29uOiAndGVuZ2FoIGhhcmknLFxuICAgIGV2ZW5pbmc6ICdwZXRhbmcnLFxuICAgIG5pZ2h0OiAnbWFsYW0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICd0ZW5nYWggbWFsYW0nLFxuICAgIG5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgbW9ybmluZzogJ3BhZ2knLFxuICAgIGFmdGVybm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBldmVuaW5nOiAncGV0YW5nJyxcbiAgICBuaWdodDogJ21hbGFtJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAndGVuZ2FoIG1hbGFtJyxcbiAgICBub29uOiAndGVuZ2FoIGhhcmknLFxuICAgIG1vcm5pbmc6ICdwYWdpJyxcbiAgICBhZnRlcm5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgZXZlbmluZzogJ3BldGFuZycsXG4gICAgbmlnaHQ6ICdtYWxhbSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgLy8gQ2FuJ3QgdXNlIFwicGVydGFtYVwiLCBcImtlZHVhXCIgYmVjYXVzZSBjYW4ndCBiZSBwYXJzZWRcbiAgcmV0dXJuICdrZS0nICsgTnVtYmVyKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9