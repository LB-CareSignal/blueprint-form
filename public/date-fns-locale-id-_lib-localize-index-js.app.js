(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-id-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/id/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/id/_lib/localize/index.js ***!
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
// All data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/id.html
var eraValues = {
  narrow: ['SM', 'M'],
  abbreviated: ['SM', 'M'],
  wide: ['Sebelum Masehi', 'Masehi']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['Kuartal ke-1', 'Kuartal ke-2', 'Kuartal ke-3', 'Kuartal ke-4']
};

// Note: in Indonesian, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
  wide: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
};
var dayValues = {
  narrow: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  short: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  abbreviated: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  wide: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'siang',
    evening: 'sore',
    night: 'malam'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // Can't use "pertama", "kedua" because can't be parsed

  return 'ke-' + number;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lkL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1pZC1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG4vLyBBbGwgZGF0YSBmb3IgbG9jYWxpemF0aW9uIGFyZSB0YWtlbiBmcm9tIHRoaXMgcGFnZVxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9pZC5odG1sXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnU00nLCAnTSddLFxuICBhYmJyZXZpYXRlZDogWydTTScsICdNJ10sXG4gIHdpZGU6IFsnU2ViZWx1bSBNYXNlaGknLCAnTWFzZWhpJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSzEnLCAnSzInLCAnSzMnLCAnSzQnXSxcbiAgd2lkZTogWydLdWFydGFsIGtlLTEnLCAnS3VhcnRhbCBrZS0yJywgJ0t1YXJ0YWwga2UtMycsICdLdWFydGFsIGtlLTQnXVxufTtcblxuLy8gTm90ZTogaW4gSW5kb25lc2lhbiwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01laScsICdKdW4nLCAnSnVsJywgJ0FndCcsICdTZXAnLCAnT2t0JywgJ05vdicsICdEZXMnXSxcbiAgd2lkZTogWydKYW51YXJpJywgJ0ZlYnJ1YXJpJywgJ01hcmV0JywgJ0FwcmlsJywgJ01laScsICdKdW5pJywgJ0p1bGknLCAnQWd1c3R1cycsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZXNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ00nLCAnUycsICdTJywgJ1InLCAnSycsICdKJywgJ1MnXSxcbiAgc2hvcnQ6IFsnTWluJywgJ1NlbicsICdTZWwnLCAnUmFiJywgJ0thbScsICdKdW0nLCAnU2FiJ10sXG4gIGFiYnJldmlhdGVkOiBbJ01pbicsICdTZW4nLCAnU2VsJywgJ1JhYicsICdLYW0nLCAnSnVtJywgJ1NhYiddLFxuICB3aWRlOiBbJ01pbmdndScsICdTZW5pbicsICdTZWxhc2EnLCAnUmFidScsICdLYW1pcycsICdKdW1hdCcsICdTYWJ0dSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICd0ZW5nYWggbWFsYW0nLFxuICAgIG5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgbW9ybmluZzogJ3BhZ2knLFxuICAgIGFmdGVybm9vbjogJ3NpYW5nJyxcbiAgICBldmVuaW5nOiAnc29yZScsXG4gICAgbmlnaHQ6ICdtYWxhbSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3RlbmdhaCBtYWxhbScsXG4gICAgbm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBtb3JuaW5nOiAncGFnaScsXG4gICAgYWZ0ZXJub29uOiAnc2lhbmcnLFxuICAgIGV2ZW5pbmc6ICdzb3JlJyxcbiAgICBuaWdodDogJ21hbGFtJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICd0ZW5nYWggbWFsYW0nLFxuICAgIG5vb246ICd0ZW5nYWggaGFyaScsXG4gICAgbW9ybmluZzogJ3BhZ2knLFxuICAgIGFmdGVybm9vbjogJ3NpYW5nJyxcbiAgICBldmVuaW5nOiAnc29yZScsXG4gICAgbmlnaHQ6ICdtYWxhbSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3RlbmdhaCBtYWxhbScsXG4gICAgbm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBtb3JuaW5nOiAncGFnaScsXG4gICAgYWZ0ZXJub29uOiAnc2lhbmcnLFxuICAgIGV2ZW5pbmc6ICdzb3JlJyxcbiAgICBuaWdodDogJ21hbGFtJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAndGVuZ2FoIG1hbGFtJyxcbiAgICBub29uOiAndGVuZ2FoIGhhcmknLFxuICAgIG1vcm5pbmc6ICdwYWdpJyxcbiAgICBhZnRlcm5vb246ICdzaWFuZycsXG4gICAgZXZlbmluZzogJ3NvcmUnLFxuICAgIG5pZ2h0OiAnbWFsYW0nXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3RlbmdhaCBtYWxhbScsXG4gICAgbm9vbjogJ3RlbmdhaCBoYXJpJyxcbiAgICBtb3JuaW5nOiAncGFnaScsXG4gICAgYWZ0ZXJub29uOiAnc2lhbmcnLFxuICAgIGV2ZW5pbmc6ICdzb3JlJyxcbiAgICBuaWdodDogJ21hbGFtJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBDYW4ndCB1c2UgXCJwZXJ0YW1hXCIsIFwia2VkdWFcIiBiZWNhdXNlIGNhbid0IGJlIHBhcnNlZFxuXG4gIHJldHVybiAna2UtJyArIG51bWJlcjtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9