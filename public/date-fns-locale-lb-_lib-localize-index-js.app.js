(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-lb-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/lb/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/localize/index.js ***!
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
  wide: ['viru Christus', 'no Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'Mäerz', 'Abrëll', 'Mee', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mé', 'Dë', 'Më', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonndeg', 'Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg']
};
var dayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nomë.',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nom.',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2xiL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbGItX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ3YuQ2hyLicsICduLkNoci4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsndi5DaHIuJywgJ24uQ2hyLiddLFxuICB3aWRlOiBbJ3ZpcnUgQ2hyaXN0dXMnLCAnbm8gQ2hyaXN0dXMnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzEuIFF1YXJ0YWwnLCAnMi4gUXVhcnRhbCcsICczLiBRdWFydGFsJywgJzQuIFF1YXJ0YWwnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTcOkZScsICdBYnInLCAnTWVlJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddLFxuICB3aWRlOiBbJ0phbnVhcicsICdGZWJydWFyJywgJ03DpGVyeicsICdBYnLDq2xsJywgJ01lZScsICdKdW5pJywgJ0p1bGknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ0QnLCAnTScsICdEJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTbycsICdNw6knLCAnRMOrJywgJ03DqycsICdEbycsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTby4nLCAnTcOpLicsICdEw6suJywgJ03Dqy4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgd2lkZTogWydTb25uZGVnJywgJ03DqWluZGVnJywgJ0TDq25zY2hkZWcnLCAnTcOrdHR3b2NoJywgJ0Rvbm5lc2NoZGVnJywgJ0ZyZWlkZWcnLCAnU2Ftc2NoZGVnJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ21vLicsXG4gICAgcG06ICdub23Dqy4nLFxuICAgIG1pZG5pZ2h0OiAnTcOrdHRlcm51ZWNodCcsXG4gICAgbm9vbjogJ03Dq3R0ZWcnLFxuICAgIG1vcm5pbmc6ICdNb2llbicsXG4gICAgYWZ0ZXJub29uOiAnTm9tw6t0dGVnJyxcbiAgICBldmVuaW5nOiAnT3dlbmQnLFxuICAgIG5pZ2h0OiAnTnVlY2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnbW9pZXMnLFxuICAgIHBtOiAnbm9tw6t0dGVzJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdNw6t0dGVnJyxcbiAgICBtb3JuaW5nOiAnTW9pZW4nLFxuICAgIGFmdGVybm9vbjogJ05vbcOrdHRlZycsXG4gICAgZXZlbmluZzogJ093ZW5kJyxcbiAgICBuaWdodDogJ051ZWNodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnbW9pZXMnLFxuICAgIHBtOiAnbm9tw6t0dGVzJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdNw6t0dGVnJyxcbiAgICBtb3JuaW5nOiAnTW9pZW4nLFxuICAgIGFmdGVybm9vbjogJ05vbcOrdHRlZycsXG4gICAgZXZlbmluZzogJ093ZW5kJyxcbiAgICBuaWdodDogJ051ZWNodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ21vLicsXG4gICAgcG06ICdub20uJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdtw6t0dGVzJyxcbiAgICBtb3JuaW5nOiAnbW9pZXMnLFxuICAgIGFmdGVybm9vbjogJ25vbcOrdHRlcycsXG4gICAgZXZlbmluZzogJ293ZXMnLFxuICAgIG5pZ2h0OiAnbnVldHMnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdtb2llcycsXG4gICAgcG06ICdub23Dq3R0ZXMnLFxuICAgIG1pZG5pZ2h0OiAnTcOrdHRlcm51ZWNodCcsXG4gICAgbm9vbjogJ23Dq3R0ZXMnLFxuICAgIG1vcm5pbmc6ICdtb2llcycsXG4gICAgYWZ0ZXJub29uOiAnbm9tw6t0dGVzJyxcbiAgICBldmVuaW5nOiAnb3dlcycsXG4gICAgbmlnaHQ6ICdudWV0cydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnbW9pZXMnLFxuICAgIHBtOiAnbm9tw6t0dGVzJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdtw6t0dGVzJyxcbiAgICBtb3JuaW5nOiAnbW9pZXMnLFxuICAgIGFmdGVybm9vbjogJ25vbcOrdHRlcycsXG4gICAgZXZlbmluZzogJ293ZXMnLFxuICAgIG5pZ2h0OiAnbnVldHMnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy4nO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=