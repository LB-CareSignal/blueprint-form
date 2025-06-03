(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uk-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/uk/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/uk/_lib/localize/index.js ***!
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
  narrow: ['до н.е.', 'н.е.'],
  abbreviated: ['до н. е.', 'н. е.'],
  wide: ['до нашої ери', 'нашої ери']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
};
var monthValues = {
  // ДСТУ 3582:2013
  narrow: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'],
  abbreviated: ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'],
  wide: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
};
var formattingMonthValues = {
  narrow: ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'],
  abbreviated: ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'],
  wide: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['нед', 'пон', 'вів', 'сер', 'чтв', 'птн', 'суб'],
  wide: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ніч'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ніч'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'північ',
    noon: 'полудень',
    morning: 'ранок',
    afternoon: 'день',
    evening: 'вечір',
    night: 'ніч'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'півн.',
    noon: 'пол.',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'північ',
    noon: 'полудень',
    morning: 'ранку',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночі'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  var number = Number(dirtyNumber);
  var suffix;
  if (unit === 'date') {
    if (number === 3 || number === 23) {
      suffix = '-є';
    } else {
      suffix = '-е';
    }
  } else if (unit === 'minute' || unit === 'second' || unit === 'hour') {
    suffix = '-а';
  } else {
    suffix = '-й';
  }
  return number + suffix;
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VrL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdWstX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9C00L4g0L0u0LUuJywgJ9C9LtC1LiddLFxuICBhYmJyZXZpYXRlZDogWyfQtNC+INC9LiDQtS4nLCAn0L0uINC1LiddLFxuICB3aWRlOiBbJ9C00L4g0L3QsNGI0L7RlyDQtdGA0LgnLCAn0L3QsNGI0L7RlyDQtdGA0LgnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdC5INC60LIuJywgJzIt0Lkg0LrQsi4nLCAnMy3QuSDQutCyLicsICc0LdC5INC60LIuJ10sXG4gIHdpZGU6IFsnMS3QuSDQutCy0LDRgNGC0LDQuycsICcyLdC5INC60LLQsNGA0YLQsNC7JywgJzMt0Lkg0LrQstCw0YDRgtCw0LsnLCAnNC3QuSDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICAvLyDQlNCh0KLQoyAzNTgyOjIwMTNcbiAgbmFycm93OiBbJ9ChJywgJ9CbJywgJ9CRJywgJ9CaJywgJ9CiJywgJ9CnJywgJ9CbJywgJ9ChJywgJ9CSJywgJ9CWJywgJ9CbJywgJ9CTJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9GB0ZbRhy4nLCAn0LvRjtGCLicsICfQsdC10YDQtdC3LicsICfQutCy0ZbRgi4nLCAn0YLRgNCw0LIuJywgJ9GH0LXRgNCyLicsICfQu9C40L8uJywgJ9GB0LXRgNC/LicsICfQstC10YDQtdGBLicsICfQttC+0LLRgi4nLCAn0LvQuNGB0YLQvtC/LicsICfQs9GA0YPQtC4nXSxcbiAgd2lkZTogWyfRgdGW0YfQtdC90YwnLCAn0LvRjtGC0LjQuScsICfQsdC10YDQtdC30LXQvdGMJywgJ9C60LLRltGC0LXQvdGMJywgJ9GC0YDQsNCy0LXQvdGMJywgJ9GH0LXRgNCy0LXQvdGMJywgJ9C70LjQv9C10L3RjCcsICfRgdC10YDQv9C10L3RjCcsICfQstC10YDQtdGB0LXQvdGMJywgJ9C20L7QstGC0LXQvdGMJywgJ9C70LjRgdGC0L7Qv9Cw0LQnLCAn0LPRgNGD0LTQtdC90YwnXVxufTtcbnZhciBmb3JtYXR0aW5nTW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQoScsICfQmycsICfQkScsICfQmicsICfQoicsICfQpycsICfQmycsICfQoScsICfQkicsICfQlicsICfQmycsICfQkyddLFxuICBhYmJyZXZpYXRlZDogWyfRgdGW0YcuJywgJ9C70Y7Rgi4nLCAn0LHQtdGA0LXQty4nLCAn0LrQstGW0YIuJywgJ9GC0YDQsNCyLicsICfRh9C10YDQsi4nLCAn0LvQuNC/LicsICfRgdC10YDQvy4nLCAn0LLQtdGA0LXRgS4nLCAn0LbQvtCy0YIuJywgJ9C70LjRgdGC0L7Qvy4nLCAn0LPRgNGD0LQuJ10sXG4gIHdpZGU6IFsn0YHRltGH0L3RjycsICfQu9GO0YLQvtCz0L4nLCAn0LHQtdGA0LXQt9C90Y8nLCAn0LrQstGW0YLQvdGPJywgJ9GC0YDQsNCy0L3RjycsICfRh9C10YDQstC90Y8nLCAn0LvQuNC/0L3RjycsICfRgdC10YDQv9C90Y8nLCAn0LLQtdGA0LXRgdC90Y8nLCAn0LbQvtCy0YLQvdGPJywgJ9C70LjRgdGC0L7Qv9Cw0LTQsCcsICfQs9GA0YPQtNC90Y8nXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQnScsICfQnycsICfQkicsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICBzaG9ydDogWyfQvdC0JywgJ9C/0L0nLCAn0LLRgicsICfRgdGAJywgJ9GH0YInLCAn0L/RgicsICfRgdCxJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9C90LXQtCcsICfQv9C+0L0nLCAn0LLRltCyJywgJ9GB0LXRgCcsICfRh9GC0LInLCAn0L/RgtC9JywgJ9GB0YPQsSddLFxuICB3aWRlOiBbJ9C90LXQtNGW0LvRjycsICfQv9C+0L3QtdC00ZbQu9C+0LonLCAn0LLRltCy0YLQvtGA0L7QuicsICfRgdC10YDQtdC00LAnLCAn0YfQtdGC0LLQtdGAJywgJ9C/4oCZ0Y/RgtC90LjRhtGPJywgJ9GB0YPQsdC+0YLQsCddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfQlNCfJyxcbiAgICBwbTogJ9Cf0J8nLFxuICAgIG1pZG5pZ2h0OiAn0L/RltCy0L0uJyxcbiAgICBub29uOiAn0L/QvtC7LicsXG4gICAgbW9ybmluZzogJ9GA0LDQvdC+0LonLFxuICAgIGFmdGVybm9vbjogJ9C00LXQvdGMJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdGW0YcnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfQlNCfJyxcbiAgICBwbTogJ9Cf0J8nLFxuICAgIG1pZG5pZ2h0OiAn0L/RltCy0L0uJyxcbiAgICBub29uOiAn0L/QvtC7LicsXG4gICAgbW9ybmluZzogJ9GA0LDQvdC+0LonLFxuICAgIGFmdGVybm9vbjogJ9C00LXQvdGMJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdGW0YcnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9GW0LLQvdGW0YcnLFxuICAgIG5vb246ICfQv9C+0LvRg9C00LXQvdGMJyxcbiAgICBtb3JuaW5nOiAn0YDQsNC90L7QuicsXG4gICAgYWZ0ZXJub29uOiAn0LTQtdC90YwnLFxuICAgIGV2ZW5pbmc6ICfQstC10YfRltGAJyxcbiAgICBuaWdodDogJ9C90ZbRhydcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9GW0LLQvS4nLFxuICAgIG5vb246ICfQv9C+0LsuJyxcbiAgICBtb3JuaW5nOiAn0YDQsNC90LrRgycsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YfRlidcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9GW0LLQvS4nLFxuICAgIG5vb246ICfQv9C+0LsuJyxcbiAgICBtb3JuaW5nOiAn0YDQsNC90LrRgycsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YfRlidcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn0JTQnycsXG4gICAgcG06ICfQn9CfJyxcbiAgICBtaWRuaWdodDogJ9C/0ZbQstC90ZbRhycsXG4gICAgbm9vbjogJ9C/0L7Qu9GD0LTQtdC90YwnLFxuICAgIG1vcm5pbmc6ICfRgNCw0L3QutGDJyxcbiAgICBhZnRlcm5vb246ICfQtNC90Y8nLFxuICAgIGV2ZW5pbmc6ICfQstC10YcuJyxcbiAgICBuaWdodDogJ9C90L7Rh9GWJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0KTtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciBzdWZmaXg7XG4gIGlmICh1bml0ID09PSAnZGF0ZScpIHtcbiAgICBpZiAobnVtYmVyID09PSAzIHx8IG51bWJlciA9PT0gMjMpIHtcbiAgICAgIHN1ZmZpeCA9ICct0ZQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWZmaXggPSAnLdC1JztcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScgfHwgdW5pdCA9PT0gJ3NlY29uZCcgfHwgdW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgc3VmZml4ID0gJy3QsCc7XG4gIH0gZWxzZSB7XG4gICAgc3VmZml4ID0gJy3QuSc7XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIHN1ZmZpeDtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2FueScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==