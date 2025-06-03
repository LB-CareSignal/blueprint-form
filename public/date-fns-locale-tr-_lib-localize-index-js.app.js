(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-tr-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/tr/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/tr/_lib/localize/index.js ***!
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
  narrow: ['MÖ', 'MS'],
  abbreviated: ['MÖ', 'MS'],
  wide: ['Milattan Önce', 'Milattan Sonra']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1Ç', '2Ç', '3Ç', '4Ç'],
  wide: ['İlk çeyrek', 'İkinci Çeyrek', 'Üçüncü çeyrek', 'Son çeyrek']
};
var monthValues = {
  narrow: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
  abbreviated: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  wide: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
};
var dayValues = {
  narrow: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  short: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
  abbreviated: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
  wide: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
};
var dayPeriodValues = {
  narrow: {
    am: 'öö',
    pm: 'ös',
    midnight: 'gy',
    noon: 'ö',
    morning: 'sa',
    afternoon: 'ös',
    evening: 'ak',
    night: 'ge'
  },
  abbreviated: {
    am: 'ÖÖ',
    pm: 'ÖS',
    midnight: 'gece yarısı',
    noon: 'öğle',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  wide: {
    am: 'Ö.Ö.',
    pm: 'Ö.S.',
    midnight: 'gece yarısı',
    noon: 'öğle',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'öö',
    pm: 'ös',
    midnight: 'gy',
    noon: 'ö',
    morning: 'sa',
    afternoon: 'ös',
    evening: 'ak',
    night: 'ge'
  },
  abbreviated: {
    am: 'ÖÖ',
    pm: 'ÖS',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahleyin',
    afternoon: 'öğleden sonra',
    evening: 'akşamleyin',
    night: 'geceleyin'
  },
  wide: {
    am: 'ö.ö.',
    pm: 'ö.s.',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahleyin',
    afternoon: 'öğleden sonra',
    evening: 'akşamleyin',
    night: 'geceleyin'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
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
      return Number(quarter) - 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RyL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdHItX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ03DlicsICdNUyddLFxuICBhYmJyZXZpYXRlZDogWydNw5YnLCAnTVMnXSxcbiAgd2lkZTogWydNaWxhdHRhbiDDlm5jZScsICdNaWxhdHRhbiBTb25yYSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzHDhycsICcyw4cnLCAnM8OHJywgJzTDhyddLFxuICB3aWRlOiBbJ8SwbGsgw6dleXJlaycsICfEsGtpbmNpIMOHZXlyZWsnLCAnw5zDp8O8bmPDvCDDp2V5cmVrJywgJ1NvbiDDp2V5cmVrJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydPJywgJ8WeJywgJ00nLCAnTicsICdNJywgJ0gnLCAnVCcsICdBJywgJ0UnLCAnRScsICdLJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnT2NhJywgJ8WedWInLCAnTWFyJywgJ05pcycsICdNYXknLCAnSGF6JywgJ1RlbScsICdBxJ91JywgJ0V5bCcsICdFa2knLCAnS2FzJywgJ0FyYSddLFxuICB3aWRlOiBbJ09jYWsnLCAnxZ51YmF0JywgJ01hcnQnLCAnTmlzYW4nLCAnTWF5xLFzJywgJ0hhemlyYW4nLCAnVGVtbXV6JywgJ0HEn3VzdG9zJywgJ0V5bMO8bCcsICdFa2ltJywgJ0thc8SxbScsICdBcmFsxLFrJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUCcsICdQJywgJ1MnLCAnw4cnLCAnUCcsICdDJywgJ0MnXSxcbiAgc2hvcnQ6IFsnUHonLCAnUHQnLCAnU2EnLCAnw4dhJywgJ1BlJywgJ0N1JywgJ0N0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1BheicsICdQenQnLCAnU2FsJywgJ8OHYXInLCAnUGVyJywgJ0N1bScsICdDdHMnXSxcbiAgd2lkZTogWydQYXphcicsICdQYXphcnRlc2knLCAnU2FsxLEnLCAnw4dhcsWfYW1iYScsICdQZXLFn2VtYmUnLCAnQ3VtYScsICdDdW1hcnRlc2knXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnw7bDticsXG4gICAgcG06ICfDtnMnLFxuICAgIG1pZG5pZ2h0OiAnZ3knLFxuICAgIG5vb246ICfDticsXG4gICAgbW9ybmluZzogJ3NhJyxcbiAgICBhZnRlcm5vb246ICfDtnMnLFxuICAgIGV2ZW5pbmc6ICdhaycsXG4gICAgbmlnaHQ6ICdnZSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ8OWw5YnLFxuICAgIHBtOiAnw5ZTJyxcbiAgICBtaWRuaWdodDogJ2dlY2UgeWFyxLFzxLEnLFxuICAgIG5vb246ICfDtsSfbGUnLFxuICAgIG1vcm5pbmc6ICdzYWJhaCcsXG4gICAgYWZ0ZXJub29uOiAnw7bEn2xlZGVuIHNvbnJhJyxcbiAgICBldmVuaW5nOiAnYWvFn2FtJyxcbiAgICBuaWdodDogJ2dlY2UnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ8OWLsOWLicsXG4gICAgcG06ICfDli5TLicsXG4gICAgbWlkbmlnaHQ6ICdnZWNlIHlhcsSxc8SxJyxcbiAgICBub29uOiAnw7bEn2xlJyxcbiAgICBtb3JuaW5nOiAnc2FiYWgnLFxuICAgIGFmdGVybm9vbjogJ8O2xJ9sZWRlbiBzb25yYScsXG4gICAgZXZlbmluZzogJ2FrxZ9hbScsXG4gICAgbmlnaHQ6ICdnZWNlJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnw7bDticsXG4gICAgcG06ICfDtnMnLFxuICAgIG1pZG5pZ2h0OiAnZ3knLFxuICAgIG5vb246ICfDticsXG4gICAgbW9ybmluZzogJ3NhJyxcbiAgICBhZnRlcm5vb246ICfDtnMnLFxuICAgIGV2ZW5pbmc6ICdhaycsXG4gICAgbmlnaHQ6ICdnZSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ8OWw5YnLFxuICAgIHBtOiAnw5ZTJyxcbiAgICBtaWRuaWdodDogJ2dlY2UgeWFyxLFzxLEnLFxuICAgIG5vb246ICfDtsSfbGVuJyxcbiAgICBtb3JuaW5nOiAnc2FiYWhsZXlpbicsXG4gICAgYWZ0ZXJub29uOiAnw7bEn2xlZGVuIHNvbnJhJyxcbiAgICBldmVuaW5nOiAnYWvFn2FtbGV5aW4nLFxuICAgIG5pZ2h0OiAnZ2VjZWxleWluJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfDti7Dti4nLFxuICAgIHBtOiAnw7Yucy4nLFxuICAgIG1pZG5pZ2h0OiAnZ2VjZSB5YXLEsXPEsScsXG4gICAgbm9vbjogJ8O2xJ9sZW4nLFxuICAgIG1vcm5pbmc6ICdzYWJhaGxleWluJyxcbiAgICBhZnRlcm5vb246ICfDtsSfbGVkZW4gc29ucmEnLFxuICAgIGV2ZW5pbmc6ICdha8WfYW1sZXlpbicsXG4gICAgbmlnaHQ6ICdnZWNlbGV5aW4nXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy4nO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIE51bWJlcihxdWFydGVyKSAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==