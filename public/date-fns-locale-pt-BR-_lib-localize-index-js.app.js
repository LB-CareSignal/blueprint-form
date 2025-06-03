(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-pt-BR-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/pt-BR/_lib/localize/index.js ***!
  \*******************************************************************/
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
  narrow: ['AC', 'DC'],
  abbreviated: ['AC', 'DC'],
  wide: ['antes de cristo', 'depois de cristo']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
};
var dayValues = {
  narrow: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  abbreviated: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === 'week') {
    return number + 'ª';
  }
  return number + 'º';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3B0LUJSL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtcHQtQlItX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0FDJywgJ0RDJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0FDJywgJ0RDJ10sXG4gIHdpZGU6IFsnYW50ZXMgZGUgY3Jpc3RvJywgJ2RlcG9pcyBkZSBjcmlzdG8nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydUMScsICdUMicsICdUMycsICdUNCddLFxuICB3aWRlOiBbJzHCuiB0cmltZXN0cmUnLCAnMsK6IHRyaW1lc3RyZScsICczwrogdHJpbWVzdHJlJywgJzTCuiB0cmltZXN0cmUnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2onLCAnZicsICdtJywgJ2EnLCAnbScsICdqJywgJ2onLCAnYScsICdzJywgJ28nLCAnbicsICdkJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbicsICdmZXYnLCAnbWFyJywgJ2FicicsICdtYWknLCAnanVuJywgJ2p1bCcsICdhZ28nLCAnc2V0JywgJ291dCcsICdub3YnLCAnZGV6J10sXG4gIHdpZGU6IFsnamFuZWlybycsICdmZXZlcmVpcm8nLCAnbWFyw6dvJywgJ2FicmlsJywgJ21haW8nLCAnanVuaG8nLCAnanVsaG8nLCAnYWdvc3RvJywgJ3NldGVtYnJvJywgJ291dHVicm8nLCAnbm92ZW1icm8nLCAnZGV6ZW1icm8nXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydEJywgJ1MnLCAnVCcsICdRJywgJ1EnLCAnUycsICdTJ10sXG4gIHNob3J0OiBbJ2RvbScsICdzZWcnLCAndGVyJywgJ3F1YScsICdxdWknLCAnc2V4JywgJ3NhYiddLFxuICBhYmJyZXZpYXRlZDogWydkb21pbmdvJywgJ3NlZ3VuZGEnLCAndGVyw6dhJywgJ3F1YXJ0YScsICdxdWludGEnLCAnc2V4dGEnLCAnc8OhYmFkbyddLFxuICB3aWRlOiBbJ2RvbWluZ28nLCAnc2VndW5kYS1mZWlyYScsICd0ZXLDp2EtZmVpcmEnLCAncXVhcnRhLWZlaXJhJywgJ3F1aW50YS1mZWlyYScsICdzZXh0YS1mZWlyYScsICdzw6FiYWRvJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtbicsXG4gICAgbm9vbjogJ21kJyxcbiAgICBtb3JuaW5nOiAnbWFuaMOjJyxcbiAgICBhZnRlcm5vb246ICd0YXJkZScsXG4gICAgZXZlbmluZzogJ3RhcmRlJyxcbiAgICBuaWdodDogJ25vaXRlJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWVpYS1ub2l0ZScsXG4gICAgbm9vbjogJ21laW8tZGlhJyxcbiAgICBtb3JuaW5nOiAnbWFuaMOjJyxcbiAgICBhZnRlcm5vb246ICd0YXJkZScsXG4gICAgZXZlbmluZzogJ3RhcmRlJyxcbiAgICBuaWdodDogJ25vaXRlJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWVpYS1ub2l0ZScsXG4gICAgbm9vbjogJ21laW8tZGlhJyxcbiAgICBtb3JuaW5nOiAnbWFuaMOjJyxcbiAgICBhZnRlcm5vb246ICd0YXJkZScsXG4gICAgZXZlbmluZzogJ3RhcmRlJyxcbiAgICBuaWdodDogJ25vaXRlJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21uJyxcbiAgICBub29uOiAnbWQnLFxuICAgIG1vcm5pbmc6ICdkYSBtYW5ow6MnLFxuICAgIGFmdGVybm9vbjogJ2RhIHRhcmRlJyxcbiAgICBldmVuaW5nOiAnZGEgdGFyZGUnLFxuICAgIG5pZ2h0OiAnZGEgbm9pdGUnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtZWlhLW5vaXRlJyxcbiAgICBub29uOiAnbWVpby1kaWEnLFxuICAgIG1vcm5pbmc6ICdkYSBtYW5ow6MnLFxuICAgIGFmdGVybm9vbjogJ2RhIHRhcmRlJyxcbiAgICBldmVuaW5nOiAnZGEgdGFyZGUnLFxuICAgIG5pZ2h0OiAnZGEgbm9pdGUnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtZWlhLW5vaXRlJyxcbiAgICBub29uOiAnbWVpby1kaWEnLFxuICAgIG1vcm5pbmc6ICdkYSBtYW5ow6MnLFxuICAgIGFmdGVybm9vbjogJ2RhIHRhcmRlJyxcbiAgICBldmVuaW5nOiAnZGEgdGFyZGUnLFxuICAgIG5pZ2h0OiAnZGEgbm9pdGUnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQpID09PSAnd2VlaycpIHtcbiAgICByZXR1cm4gbnVtYmVyICsgJ8KqJztcbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ8K6Jztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9