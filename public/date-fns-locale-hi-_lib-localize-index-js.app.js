(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hi-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/hi/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/hi/_lib/localize/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.localeToNumber = localeToNumber;
exports.numberToLocale = numberToLocale;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));
var numberValues = {
  locale: {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
  },
  number: {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
  }
};

// CLDR #1585 - #1592
var eraValues = {
  narrow: ['ईसा-पूर्व', 'ईस्वी'],
  abbreviated: ['ईसा-पूर्व', 'ईस्वी'],
  wide: ['ईसा-पूर्व', 'ईसवी सन']
};

// CLDR #1593 - #1616
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ति1', 'ति2', 'ति3', 'ति4'],
  wide: ['पहली तिमाही', 'दूसरी तिमाही', 'तीसरी तिमाही', 'चौथी तिमाही']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
// https://www.unicode.org/cldr/charts/32/summary/hi.html
// CLDR #1617 - #1688
var monthValues = {
  narrow: ['ज', 'फ़', 'मा', 'अ', 'मई', 'जू', 'जु', 'अग', 'सि', 'अक्टू', 'न', 'दि'],
  abbreviated: ['जन', 'फ़र', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुल', 'अग', 'सित', 'अक्टू', 'नव', 'दिस'],
  wide: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']
};

// CLDR #1689 - #1744
var dayValues = {
  narrow: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  short: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  abbreviated: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  wide: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
};
var dayPeriodValues = {
  narrow: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  },
  abbreviated: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  },
  wide: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  },
  abbreviated: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  },
  wide: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return numberToLocale(number);
};
function localeToNumber(locale) {
  var enNumber = locale.toString().replace(/[१२३४५६७८९०]/g, function (match) {
    return numberValues.number[match];
  });
  return Number(enNumber);
}
function numberToLocale(enNumber) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match];
  });
}
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hpL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDRHQUF3QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1oaS1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMubG9jYWxlVG9OdW1iZXIgPSBsb2NhbGVUb051bWJlcjtcbmV4cG9ydHMubnVtYmVyVG9Mb2NhbGUgPSBudW1iZXJUb0xvY2FsZTtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgbnVtYmVyVmFsdWVzID0ge1xuICBsb2NhbGU6IHtcbiAgICAnMSc6ICfgpacnLFxuICAgICcyJzogJ+ClqCcsXG4gICAgJzMnOiAn4KWpJyxcbiAgICAnNCc6ICfgpaonLFxuICAgICc1JzogJ+ClqycsXG4gICAgJzYnOiAn4KWsJyxcbiAgICAnNyc6ICfgpa0nLFxuICAgICc4JzogJ+ClricsXG4gICAgJzknOiAn4KWvJyxcbiAgICAnMCc6ICfgpaYnXG4gIH0sXG4gIG51bWJlcjoge1xuICAgICfgpacnOiAnMScsXG4gICAgJ+ClqCc6ICcyJyxcbiAgICAn4KWpJzogJzMnLFxuICAgICfgpaonOiAnNCcsXG4gICAgJ+Clqyc6ICc1JyxcbiAgICAn4KWsJzogJzYnLFxuICAgICfgpa0nOiAnNycsXG4gICAgJ+Clric6ICc4JyxcbiAgICAn4KWvJzogJzknLFxuICAgICfgpaYnOiAnMCdcbiAgfVxufTtcblxuLy8gQ0xEUiAjMTU4NSAtICMxNTkyXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4KSI4KS44KS+LeCkquClguCksOCljeCktScsICfgpIjgpLjgpY3gpLXgpYAnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn4KSI4KS44KS+LeCkquClguCksOCljeCktScsICfgpIjgpLjgpY3gpLXgpYAnXSxcbiAgd2lkZTogWyfgpIjgpLjgpL4t4KSq4KWC4KSw4KWN4KS1JywgJ+CkiOCkuOCkteClgCDgpLjgpKgnXVxufTtcblxuLy8gQ0xEUiAjMTU5MyAtICMxNjE2XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn4KSk4KS/MScsICfgpKTgpL8yJywgJ+CkpOCkvzMnLCAn4KSk4KS/NCddLFxuICB3aWRlOiBbJ+CkquCkueCksuClgCDgpKTgpL/gpK7gpL7gpLngpYAnLCAn4KSm4KWC4KS44KSw4KWAIOCkpOCkv+CkruCkvuCkueClgCcsICfgpKTgpYDgpLjgpLDgpYAg4KSk4KS/4KSu4KS+4KS54KWAJywgJ+CkmuCljOCkpeClgCDgpKTgpL/gpK7gpL7gpLngpYAnXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9oaS5odG1sXG4vLyBDTERSICMxNjE3IC0gIzE2ODhcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+CknCcsICfgpKvgpLwnLCAn4KSu4KS+JywgJ+CkhScsICfgpK7gpIgnLCAn4KSc4KWCJywgJ+CknOClgScsICfgpIXgpJcnLCAn4KS44KS/JywgJ+CkheCkleCljeCkn+ClgicsICfgpKgnLCAn4KSm4KS/J10sXG4gIGFiYnJldmlhdGVkOiBbJ+CknOCkqCcsICfgpKvgpLzgpLAnLCAn4KSu4KS+4KSw4KWN4KSaJywgJ+CkheCkquCljeCksOCliOCksicsICfgpK7gpIgnLCAn4KSc4KWC4KSoJywgJ+CknOClgeCksicsICfgpIXgpJcnLCAn4KS44KS/4KSkJywgJ+CkheCkleCljeCkn+ClgicsICfgpKjgpLUnLCAn4KSm4KS/4KS4J10sXG4gIHdpZGU6IFsn4KSc4KSo4KS14KSw4KWAJywgJ+Ckq+CkvOCksOCkteCksOClgCcsICfgpK7gpL7gpLDgpY3gpJonLCAn4KSF4KSq4KWN4KSw4KWI4KSyJywgJ+CkruCkiCcsICfgpJzgpYLgpKgnLCAn4KSc4KWB4KSy4KS+4KSIJywgJ+CkheCkl+CkuOCljeCkpCcsICfgpLjgpL/gpKTgpILgpKzgpLAnLCAn4KSF4KSV4KWN4KSf4KWC4KSs4KSwJywgJ+CkqOCkteCkguCkrOCksCcsICfgpKbgpL/gpLjgpILgpKzgpLAnXVxufTtcblxuLy8gQ0xEUiAjMTY4OSAtICMxNzQ0XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4KSwJywgJ+CkuOCliycsICfgpK7gpIInLCAn4KSs4KWBJywgJ+Ckl+ClgScsICfgpLbgpYEnLCAn4KS2J10sXG4gIHNob3J0OiBbJ+CksCcsICfgpLjgpYsnLCAn4KSu4KSCJywgJ+CkrOClgScsICfgpJfgpYEnLCAn4KS24KWBJywgJ+CktiddLFxuICBhYmJyZXZpYXRlZDogWyfgpLDgpLXgpL8nLCAn4KS44KWL4KSuJywgJ+CkruCkguCkl+CksicsICfgpKzgpYHgpKcnLCAn4KSX4KWB4KSw4KWBJywgJ+CktuClgeCkleCljeCksCcsICfgpLbgpKjgpL8nXSxcbiAgd2lkZTogWyfgpLDgpLXgpL/gpLXgpL7gpLAnLCAn4KS44KWL4KSu4KS14KS+4KSwJywgJ+CkruCkguCkl+CksuCkteCkvuCksCcsICfgpKzgpYHgpKfgpLXgpL7gpLAnLCAn4KSX4KWB4KSw4KWB4KS14KS+4KSwJywgJ+CktuClgeCkleCljeCksOCkteCkvuCksCcsICfgpLbgpKjgpL/gpLXgpL7gpLAnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn4KSq4KWC4KSw4KWN4KS14KS+4KS54KWN4KSoJyxcbiAgICBwbTogJ+CkheCkquCksOCkvuCkueCljeCkqCcsXG4gICAgbWlkbmlnaHQ6ICfgpK7gpKfgpY3gpK/gpLDgpL7gpKTgpY3gpLDgpL8nLFxuICAgIG5vb246ICfgpKbgpYvgpKrgpLngpLAnLFxuICAgIG1vcm5pbmc6ICfgpLjgpYHgpKzgpLknLFxuICAgIGFmdGVybm9vbjogJ+CkpuCli+CkquCkueCksCcsXG4gICAgZXZlbmluZzogJ+CktuCkvuCkricsXG4gICAgbmlnaHQ6ICfgpLDgpL7gpKQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfgpKrgpYLgpLDgpY3gpLXgpL7gpLngpY3gpKgnLFxuICAgIHBtOiAn4KSF4KSq4KSw4KS+4KS54KWN4KSoJyxcbiAgICBtaWRuaWdodDogJ+CkruCkp+CljeCkr+CksOCkvuCkpOCljeCksOCkvycsXG4gICAgbm9vbjogJ+CkpuCli+CkquCkueCksCcsXG4gICAgbW9ybmluZzogJ+CkuOClgeCkrOCkuScsXG4gICAgYWZ0ZXJub29uOiAn4KSm4KWL4KSq4KS54KSwJyxcbiAgICBldmVuaW5nOiAn4KS24KS+4KSuJyxcbiAgICBuaWdodDogJ+CksOCkvuCkpCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn4KSq4KWC4KSw4KWN4KS14KS+4KS54KWN4KSoJyxcbiAgICBwbTogJ+CkheCkquCksOCkvuCkueCljeCkqCcsXG4gICAgbWlkbmlnaHQ6ICfgpK7gpKfgpY3gpK/gpLDgpL7gpKTgpY3gpLDgpL8nLFxuICAgIG5vb246ICfgpKbgpYvgpKrgpLngpLAnLFxuICAgIG1vcm5pbmc6ICfgpLjgpYHgpKzgpLknLFxuICAgIGFmdGVybm9vbjogJ+CkpuCli+CkquCkueCksCcsXG4gICAgZXZlbmluZzogJ+CktuCkvuCkricsXG4gICAgbmlnaHQ6ICfgpLDgpL7gpKQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfgpKrgpYLgpLDgpY3gpLXgpL7gpLngpY3gpKgnLFxuICAgIHBtOiAn4KSF4KSq4KSw4KS+4KS54KWN4KSoJyxcbiAgICBtaWRuaWdodDogJ+CkruCkp+CljeCkr+CksOCkvuCkpOCljeCksOCkvycsXG4gICAgbm9vbjogJ+CkpuCli+CkquCkueCksCcsXG4gICAgbW9ybmluZzogJ+CkuOClgeCkrOCkuScsXG4gICAgYWZ0ZXJub29uOiAn4KSm4KWL4KSq4KS54KSwJyxcbiAgICBldmVuaW5nOiAn4KS24KS+4KSuJyxcbiAgICBuaWdodDogJ+CksOCkvuCkpCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+CkquClguCksOCljeCkteCkvuCkueCljeCkqCcsXG4gICAgcG06ICfgpIXgpKrgpLDgpL7gpLngpY3gpKgnLFxuICAgIG1pZG5pZ2h0OiAn4KSu4KSn4KWN4KSv4KSw4KS+4KSk4KWN4KSw4KS/JyxcbiAgICBub29uOiAn4KSm4KWL4KSq4KS54KSwJyxcbiAgICBtb3JuaW5nOiAn4KS44KWB4KSs4KS5JyxcbiAgICBhZnRlcm5vb246ICfgpKbgpYvgpKrgpLngpLAnLFxuICAgIGV2ZW5pbmc6ICfgpLbgpL7gpK4nLFxuICAgIG5pZ2h0OiAn4KSw4KS+4KSkJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfgpKrgpYLgpLDgpY3gpLXgpL7gpLngpY3gpKgnLFxuICAgIHBtOiAn4KSF4KSq4KSw4KS+4KS54KWN4KSoJyxcbiAgICBtaWRuaWdodDogJ+CkruCkp+CljeCkr+CksOCkvuCkpOCljeCksOCkvycsXG4gICAgbm9vbjogJ+CkpuCli+CkquCkueCksCcsXG4gICAgbW9ybmluZzogJ+CkuOClgeCkrOCkuScsXG4gICAgYWZ0ZXJub29uOiAn4KSm4KWL4KSq4KS54KSwJyxcbiAgICBldmVuaW5nOiAn4KS24KS+4KSuJyxcbiAgICBuaWdodDogJ+CksOCkvuCkpCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXJUb0xvY2FsZShudW1iZXIpO1xufTtcbmZ1bmN0aW9uIGxvY2FsZVRvTnVtYmVyKGxvY2FsZSkge1xuICB2YXIgZW5OdW1iZXIgPSBsb2NhbGUudG9TdHJpbmcoKS5yZXBsYWNlKC9b4KWn4KWo4KWp4KWq4KWr4KWs4KWt4KWu4KWv4KWmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbnVtYmVyVmFsdWVzLm51bWJlclttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gTnVtYmVyKGVuTnVtYmVyKTtcbn1cbmZ1bmN0aW9uIG51bWJlclRvTG9jYWxlKGVuTnVtYmVyKSB7XG4gIHJldHVybiBlbk51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbnVtYmVyVmFsdWVzLmxvY2FsZVttYXRjaF07XG4gIH0pO1xufVxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=