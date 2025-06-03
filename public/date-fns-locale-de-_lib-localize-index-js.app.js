(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-de-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/de/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/localize/index.js ***!
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
var eraValues = {
  narrow: ['v.Chr.', 'n.Chr.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['vor Christus', 'nach Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};

// Note: in German, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

// https://st.unicode.org/cldr-apps/v#/de/Gregorian/
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  wide: monthValues.wide
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
};

// https://www.unicode.org/cldr/charts/32/summary/de.html#1881
var dayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachm.',
    evening: 'Abend',
    night: 'Nacht'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachm.',
    evening: 'abends',
    night: 'nachts'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + '.';
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
    formattingValues: formattingMonthValues,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2RlL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZGUtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ3YuQ2hyLicsICduLkNoci4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsndi5DaHIuJywgJ24uQ2hyLiddLFxuICB3aWRlOiBbJ3ZvciBDaHJpc3R1cycsICduYWNoIENocmlzdHVzJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxLiBRdWFydGFsJywgJzIuIFF1YXJ0YWwnLCAnMy4gUXVhcnRhbCcsICc0LiBRdWFydGFsJ11cbn07XG5cbi8vIE5vdGU6IGluIEdlcm1hbiwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNw6RyJywgJ0FwcicsICdNYWknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09rdCcsICdOb3YnLCAnRGV6J10sXG4gIHdpZGU6IFsnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXVxufTtcblxuLy8gaHR0cHM6Ly9zdC51bmljb2RlLm9yZy9jbGRyLWFwcHMvdiMvZGUvR3JlZ29yaWFuL1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBtb250aFZhbHVlcy5uYXJyb3csXG4gIGFiYnJldmlhdGVkOiBbJ0phbi4nLCAnRmViLicsICdNw6RyeicsICdBcHIuJywgJ01haScsICdKdW5pJywgJ0p1bGknLCAnQXVnLicsICdTZXAuJywgJ09rdC4nLCAnTm92LicsICdEZXouJ10sXG4gIHdpZGU6IG1vbnRoVmFsdWVzLndpZGVcbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ0QnLCAnTScsICdEJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTbycsICdNbycsICdEaScsICdNaScsICdEbycsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgd2lkZTogWydTb25udGFnJywgJ01vbnRhZycsICdEaWVuc3RhZycsICdNaXR0d29jaCcsICdEb25uZXJzdGFnJywgJ0ZyZWl0YWcnLCAnU2Ftc3RhZyddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2RlLmh0bWwjMTg4MVxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICd2bS4nLFxuICAgIHBtOiAnbm0uJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnTW9yZ2VuJyxcbiAgICBhZnRlcm5vb246ICdOYWNobS4nLFxuICAgIGV2ZW5pbmc6ICdBYmVuZCcsXG4gICAgbmlnaHQ6ICdOYWNodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3Zvcm0uJyxcbiAgICBwbTogJ25hY2htLicsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ01vcmdlbicsXG4gICAgYWZ0ZXJub29uOiAnTmFjaG1pdHRhZycsXG4gICAgZXZlbmluZzogJ0FiZW5kJyxcbiAgICBuaWdodDogJ05hY2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICd2b3JtaXR0YWdzJyxcbiAgICBwbTogJ25hY2htaXR0YWdzJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnTW9yZ2VuJyxcbiAgICBhZnRlcm5vb246ICdOYWNobWl0dGFnJyxcbiAgICBldmVuaW5nOiAnQWJlbmQnLFxuICAgIG5pZ2h0OiAnTmFjaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICd2bS4nLFxuICAgIHBtOiAnbm0uJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnbW9yZ2VucycsXG4gICAgYWZ0ZXJub29uOiAnbmFjaG0uJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3Zvcm0uJyxcbiAgICBwbTogJ25hY2htLicsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ21vcmdlbnMnLFxuICAgIGFmdGVybm9vbjogJ25hY2htaXR0YWdzJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAndm9ybWl0dGFncycsXG4gICAgcG06ICduYWNobWl0dGFncycsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ21vcmdlbnMnLFxuICAgIGFmdGVybm9vbjogJ25hY2htaXR0YWdzJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlcikge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==