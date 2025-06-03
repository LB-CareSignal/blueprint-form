(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-cy-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/cy/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/cy/_lib/localize/index.js ***!
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
  narrow: ['C', 'O'],
  abbreviated: ['CC', 'OC'],
  wide: ['Cyn Crist', 'Ar ôl Crist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Ch1', 'Ch2', 'Ch3', 'Ch4'],
  wide: ['Chwarter 1af', '2ail chwarter', '3ydd chwarter', '4ydd chwarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['I', 'Ch', 'Ma', 'E', 'Mi', 'Me', 'G', 'A', 'Md', 'H', 'T', 'Rh'],
  abbreviated: ['Ion', 'Chwe', 'Maw', 'Ebr', 'Mai', 'Meh', 'Gor', 'Aws', 'Med', 'Hyd', 'Tach', 'Rhag'],
  wide: ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr']
};
var dayValues = {
  narrow: ['S', 'Ll', 'M', 'M', 'I', 'G', 'S'],
  short: ['Su', 'Ll', 'Ma', 'Me', 'Ia', 'Gw', 'Sa'],
  abbreviated: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
  wide: ['dydd Sul', 'dydd Llun', 'dydd Mawrth', 'dydd Mercher', 'dydd Iau', 'dydd Gwener', 'dydd Sadwrn']
};
var dayPeriodValues = {
  narrow: {
    am: 'b',
    pm: 'h',
    midnight: 'hn',
    noon: 'hd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  },
  abbreviated: {
    am: 'yb',
    pm: 'yh',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  },
  wide: {
    am: 'y.b.',
    pm: 'y.h.',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'bore',
    afternoon: 'prynhawn',
    evening: "gyda'r nos",
    night: 'nos'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'b',
    pm: 'h',
    midnight: 'hn',
    noon: 'hd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  },
  abbreviated: {
    am: 'yb',
    pm: 'yh',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  },
  wide: {
    am: 'y.b.',
    pm: 'y.h.',
    midnight: 'hanner nos',
    noon: 'hanner dydd',
    morning: 'yn y bore',
    afternoon: 'yn y prynhawn',
    evening: "gyda'r nos",
    night: 'yn y nos'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  if (number < 20) {
    switch (number) {
      case 0:
        return number + 'fed';
      case 1:
        return number + 'af';
      case 2:
        return number + 'ail';
      case 3:
      case 4:
        return number + 'ydd';
      case 5:
      case 6:
        return number + 'ed';
      case 7:
      case 8:
      case 9:
      case 10:
      case 12:
      case 15:
      case 18:
        return number + 'fed';
      case 11:
      case 13:
      case 14:
      case 16:
      case 17:
      case 19:
        return number + 'eg';
    }
  } else if (number >= 50 && number <= 60 || number === 80 || number >= 100) {
    return number + 'fed';
  }
  return number + 'ain';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2N5L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1jeS1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQycsICdPJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0NDJywgJ09DJ10sXG4gIHdpZGU6IFsnQ3luIENyaXN0JywgJ0FyIMO0bCBDcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ0NoMScsICdDaDInLCAnQ2gzJywgJ0NoNCddLFxuICB3aWRlOiBbJ0Nod2FydGVyIDFhZicsICcyYWlsIGNod2FydGVyJywgJzN5ZGQgY2h3YXJ0ZXInLCAnNHlkZCBjaHdhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydJJywgJ0NoJywgJ01hJywgJ0UnLCAnTWknLCAnTWUnLCAnRycsICdBJywgJ01kJywgJ0gnLCAnVCcsICdSaCddLFxuICBhYmJyZXZpYXRlZDogWydJb24nLCAnQ2h3ZScsICdNYXcnLCAnRWJyJywgJ01haScsICdNZWgnLCAnR29yJywgJ0F3cycsICdNZWQnLCAnSHlkJywgJ1RhY2gnLCAnUmhhZyddLFxuICB3aWRlOiBbJ0lvbmF3cicsICdDaHdlZnJvcicsICdNYXdydGgnLCAnRWJyaWxsJywgJ01haScsICdNZWhlZmluJywgJ0dvcmZmZW5uYWYnLCAnQXdzdCcsICdNZWRpJywgJ0h5ZHJlZicsICdUYWNod2VkZCcsICdSaGFnZnlyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdMbCcsICdNJywgJ00nLCAnSScsICdHJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTGwnLCAnTWEnLCAnTWUnLCAnSWEnLCAnR3cnLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VsJywgJ0xsdW4nLCAnTWF3JywgJ01lcicsICdJYXUnLCAnR3dlJywgJ1NhZCddLFxuICB3aWRlOiBbJ2R5ZGQgU3VsJywgJ2R5ZGQgTGx1bicsICdkeWRkIE1hd3J0aCcsICdkeWRkIE1lcmNoZXInLCAnZHlkZCBJYXUnLCAnZHlkZCBHd2VuZXInLCAnZHlkZCBTYWR3cm4nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYicsXG4gICAgcG06ICdoJyxcbiAgICBtaWRuaWdodDogJ2huJyxcbiAgICBub29uOiAnaGQnLFxuICAgIG1vcm5pbmc6ICdib3JlJyxcbiAgICBhZnRlcm5vb246ICdwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICdub3MnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICd5YicsXG4gICAgcG06ICd5aCcsXG4gICAgbWlkbmlnaHQ6ICdoYW5uZXIgbm9zJyxcbiAgICBub29uOiAnaGFubmVyIGR5ZGQnLFxuICAgIG1vcm5pbmc6ICdib3JlJyxcbiAgICBhZnRlcm5vb246ICdwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICdub3MnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ3kuYi4nLFxuICAgIHBtOiAneS5oLicsXG4gICAgbWlkbmlnaHQ6ICdoYW5uZXIgbm9zJyxcbiAgICBub29uOiAnaGFubmVyIGR5ZGQnLFxuICAgIG1vcm5pbmc6ICdib3JlJyxcbiAgICBhZnRlcm5vb246ICdwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICdub3MnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdiJyxcbiAgICBwbTogJ2gnLFxuICAgIG1pZG5pZ2h0OiAnaG4nLFxuICAgIG5vb246ICdoZCcsXG4gICAgbW9ybmluZzogJ3luIHkgYm9yZScsXG4gICAgYWZ0ZXJub29uOiAneW4geSBwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICd5biB5IG5vcydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3liJyxcbiAgICBwbTogJ3loJyxcbiAgICBtaWRuaWdodDogJ2hhbm5lciBub3MnLFxuICAgIG5vb246ICdoYW5uZXIgZHlkZCcsXG4gICAgbW9ybmluZzogJ3luIHkgYm9yZScsXG4gICAgYWZ0ZXJub29uOiAneW4geSBwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICd5biB5IG5vcydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAneS5iLicsXG4gICAgcG06ICd5LmguJyxcbiAgICBtaWRuaWdodDogJ2hhbm5lciBub3MnLFxuICAgIG5vb246ICdoYW5uZXIgZHlkZCcsXG4gICAgbW9ybmluZzogJ3luIHkgYm9yZScsXG4gICAgYWZ0ZXJub29uOiAneW4geSBwcnluaGF3bicsXG4gICAgZXZlbmluZzogXCJneWRhJ3Igbm9zXCIsXG4gICAgbmlnaHQ6ICd5biB5IG5vcydcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChudW1iZXIgPCAyMCkge1xuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnZmVkJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdhZic7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnYWlsJztcbiAgICAgIGNhc2UgMzpcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICd5ZGQnO1xuICAgICAgY2FzZSA1OlxuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ2VkJztcbiAgICAgIGNhc2UgNzpcbiAgICAgIGNhc2UgODpcbiAgICAgIGNhc2UgOTpcbiAgICAgIGNhc2UgMTA6XG4gICAgICBjYXNlIDEyOlxuICAgICAgY2FzZSAxNTpcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnZmVkJztcbiAgICAgIGNhc2UgMTE6XG4gICAgICBjYXNlIDEzOlxuICAgICAgY2FzZSAxNDpcbiAgICAgIGNhc2UgMTY6XG4gICAgICBjYXNlIDE3OlxuICAgICAgY2FzZSAxOTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdlZyc7XG4gICAgfVxuICB9IGVsc2UgaWYgKG51bWJlciA+PSA1MCAmJiBudW1iZXIgPD0gNjAgfHwgbnVtYmVyID09PSA4MCB8fCBudW1iZXIgPj0gMTAwKSB7XG4gICAgcmV0dXJuIG51bWJlciArICdmZWQnO1xuICB9XG4gIHJldHVybiBudW1iZXIgKyAnYWluJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9