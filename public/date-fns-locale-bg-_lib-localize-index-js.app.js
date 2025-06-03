(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bg-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/bg/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/localize/index.js ***!
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
  narrow: ['пр.н.е.', 'н.е.'],
  abbreviated: ['преди н. е.', 'н. е.'],
  wide: ['преди новата ера', 'новата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-во тримес.', '2-ро тримес.', '3-то тримес.', '4-то тримес.'],
  wide: ['1-во тримесечие', '2-ро тримесечие', '3-то тримесечие', '4-то тримесечие']
};
var monthValues = {
  abbreviated: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
};
var dayPeriodValues = {
  wide: {
    am: 'преди обяд',
    pm: 'след обяд',
    midnight: 'в полунощ',
    noon: 'на обяд',
    morning: 'сутринта',
    afternoon: 'следобед',
    evening: 'вечерта',
    night: 'през нощта'
  }
};
function isFeminine(unit) {
  return unit === 'year' || unit === 'week' || unit === 'minute' || unit === 'second';
}
function isNeuter(unit) {
  return unit === 'quarter';
}
function numberWithSuffix(number, unit, masculine, feminine, neuter) {
  var suffix = isNeuter(unit) ? neuter : isFeminine(unit) ? feminine : masculine;
  return number + '-' + suffix;
}
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (number === 0) {
    return numberWithSuffix(0, unit, 'ев', 'ева', 'ево');
  } else if (number % 1000 === 0) {
    return numberWithSuffix(number, unit, 'ен', 'на', 'но');
  } else if (number % 100 === 0) {
    return numberWithSuffix(number, unit, 'тен', 'тна', 'тно');
  }
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return numberWithSuffix(number, unit, 'ви', 'ва', 'во');
      case 2:
        return numberWithSuffix(number, unit, 'ри', 'ра', 'ро');
      case 7:
      case 8:
        return numberWithSuffix(number, unit, 'ми', 'ма', 'мо');
    }
  }
  return numberWithSuffix(number, unit, 'ти', 'та', 'то');
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
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JnL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYmctX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9C/0YAu0L0u0LUuJywgJ9C9LtC1LiddLFxuICBhYmJyZXZpYXRlZDogWyfQv9GA0LXQtNC4INC9LiDQtS4nLCAn0L0uINC1LiddLFxuICB3aWRlOiBbJ9C/0YDQtdC00Lgg0L3QvtCy0LDRgtCwINC10YDQsCcsICfQvdC+0LLQsNGC0LAg0LXRgNCwJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS3QstC+INGC0YDQuNC80LXRgS4nLCAnMi3RgNC+INGC0YDQuNC80LXRgS4nLCAnMy3RgtC+INGC0YDQuNC80LXRgS4nLCAnNC3RgtC+INGC0YDQuNC80LXRgS4nXSxcbiAgd2lkZTogWycxLdCy0L4g0YLRgNC40LzQtdGB0LXRh9C40LUnLCAnMi3RgNC+INGC0YDQuNC80LXRgdC10YfQuNC1JywgJzMt0YLQviDRgtGA0LjQvNC10YHQtdGH0LjQtScsICc0LdGC0L4g0YLRgNC40LzQtdGB0LXRh9C40LUnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgYWJicmV2aWF0ZWQ6IFsn0Y/QvdGDJywgJ9GE0LXQsicsICfQvNCw0YAnLCAn0LDQv9GAJywgJ9C80LDQuScsICfRjtC90LgnLCAn0Y7Qu9C4JywgJ9Cw0LLQsycsICfRgdC10L8nLCAn0L7QutGCJywgJ9C90L7QtScsICfQtNC10LonXSxcbiAgd2lkZTogWyfRj9C90YPQsNGA0LgnLCAn0YTQtdCy0YDRg9Cw0YDQuCcsICfQvNCw0YDRgicsICfQsNC/0YDQuNC7JywgJ9C80LDQuScsICfRjtC90LgnLCAn0Y7Qu9C4JywgJ9Cw0LLQs9GD0YHRgicsICfRgdC10L/RgtC10LzQstGA0LgnLCAn0L7QutGC0L7QvNCy0YDQuCcsICfQvdC+0LXQvNCy0YDQuCcsICfQtNC10LrQtdC80LLRgNC4J11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0J0nLCAn0J8nLCAn0JInLCAn0KEnLCAn0KcnLCAn0J8nLCAn0KEnXSxcbiAgc2hvcnQ6IFsn0L3QtCcsICfQv9C9JywgJ9Cy0YInLCAn0YHRgCcsICfRh9GCJywgJ9C/0YInLCAn0YHQsSddLFxuICBhYmJyZXZpYXRlZDogWyfQvdC10LQnLCAn0L/QvtC9JywgJ9Cy0YLQvicsICfRgdGA0Y8nLCAn0YfQtdGCJywgJ9C/0LXRgicsICfRgdGK0LEnXSxcbiAgd2lkZTogWyfQvdC10LTQtdC70Y8nLCAn0L/QvtC90LXQtNC10LvQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNGP0LTQsCcsICfRh9C10YLQstGK0YDRgtGK0LonLCAn0L/QtdGC0YrQuicsICfRgdGK0LHQvtGC0LAnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIHdpZGU6IHtcbiAgICBhbTogJ9C/0YDQtdC00Lgg0L7QsdGP0LQnLFxuICAgIHBtOiAn0YHQu9C10LQg0L7QsdGP0LQnLFxuICAgIG1pZG5pZ2h0OiAn0LIg0L/QvtC70YPQvdC+0YknLFxuICAgIG5vb246ICfQvdCwINC+0LHRj9C0JyxcbiAgICBtb3JuaW5nOiAn0YHRg9GC0YDQuNC90YLQsCcsXG4gICAgYWZ0ZXJub29uOiAn0YHQu9C10LTQvtCx0LXQtCcsXG4gICAgZXZlbmluZzogJ9Cy0LXRh9C10YDRgtCwJyxcbiAgICBuaWdodDogJ9C/0YDQtdC3INC90L7RidGC0LAnXG4gIH1cbn07XG5mdW5jdGlvbiBpc0ZlbWluaW5lKHVuaXQpIHtcbiAgcmV0dXJuIHVuaXQgPT09ICd5ZWFyJyB8fCB1bml0ID09PSAnd2VlaycgfHwgdW5pdCA9PT0gJ21pbnV0ZScgfHwgdW5pdCA9PT0gJ3NlY29uZCc7XG59XG5mdW5jdGlvbiBpc05ldXRlcih1bml0KSB7XG4gIHJldHVybiB1bml0ID09PSAncXVhcnRlcic7XG59XG5mdW5jdGlvbiBudW1iZXJXaXRoU3VmZml4KG51bWJlciwgdW5pdCwgbWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKSB7XG4gIHZhciBzdWZmaXggPSBpc05ldXRlcih1bml0KSA/IG5ldXRlciA6IGlzRmVtaW5pbmUodW5pdCkgPyBmZW1pbmluZSA6IG1hc2N1bGluZTtcbiAgcmV0dXJuIG51bWJlciArICctJyArIHN1ZmZpeDtcbn1cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHVuaXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdDtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIHJldHVybiBudW1iZXJXaXRoU3VmZml4KDAsIHVuaXQsICfQtdCyJywgJ9C10LLQsCcsICfQtdCy0L4nKTtcbiAgfSBlbHNlIGlmIChudW1iZXIgJSAxMDAwID09PSAwKSB7XG4gICAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCAn0LXQvScsICfQvdCwJywgJ9C90L4nKTtcbiAgfSBlbHNlIGlmIChudW1iZXIgJSAxMDAgPT09IDApIHtcbiAgICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfRgtC10L0nLCAn0YLQvdCwJywgJ9GC0L3QvicpO1xuICB9XG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCAn0LLQuCcsICfQstCwJywgJ9Cy0L4nKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCAn0YDQuCcsICfRgNCwJywgJ9GA0L4nKTtcbiAgICAgIGNhc2UgNzpcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCAn0LzQuCcsICfQvNCwJywgJ9C80L4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCAn0YLQuCcsICfRgtCwJywgJ9GC0L4nKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9