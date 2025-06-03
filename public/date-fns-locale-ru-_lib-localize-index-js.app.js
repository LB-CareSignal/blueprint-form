(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ru-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ru/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/localize/index.js ***!
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
  narrow: ['до н.э.', 'н.э.'],
  abbreviated: ['до н. э.', 'н. э.'],
  wide: ['до нашей эры', 'нашей эры']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
};
var monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
};
var formattingMonthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
};
var dayValues = {
  narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],
  wide: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утро',
    afternoon: 'день',
    evening: 'вечер',
    night: 'ночь'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'вечера',
    night: 'ночи'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  var suffix;
  if (unit === 'date') {
    suffix = '-е';
  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {
    suffix = '-я';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3J1L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtcnUtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9C00L4g0L0u0Y0uJywgJ9C9LtGNLiddLFxuICBhYmJyZXZpYXRlZDogWyfQtNC+INC9LiDRjS4nLCAn0L0uINGNLiddLFxuICB3aWRlOiBbJ9C00L4g0L3QsNGI0LXQuSDRjdGA0YsnLCAn0L3QsNGI0LXQuSDRjdGA0YsnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdC5INC60LIuJywgJzIt0Lkg0LrQsi4nLCAnMy3QuSDQutCyLicsICc0LdC5INC60LIuJ10sXG4gIHdpZGU6IFsnMS3QuSDQutCy0LDRgNGC0LDQuycsICcyLdC5INC60LLQsNGA0YLQsNC7JywgJzMt0Lkg0LrQstCw0YDRgtCw0LsnLCAnNC3QuSDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0K8nLCAn0KQnLCAn0JwnLCAn0JAnLCAn0JwnLCAn0JgnLCAn0JgnLCAn0JAnLCAn0KEnLCAn0J4nLCAn0J0nLCAn0JQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0Y/QvdCyLicsICfRhNC10LIuJywgJ9C80LDRgNGCJywgJ9Cw0L/RgC4nLCAn0LzQsNC5JywgJ9C40Y7QvdGMJywgJ9C40Y7Qu9GMJywgJ9Cw0LLQsy4nLCAn0YHQtdC90YIuJywgJ9C+0LrRgi4nLCAn0L3QvtGP0LEuJywgJ9C00LXQui4nXSxcbiAgd2lkZTogWyfRj9C90LLQsNGA0YwnLCAn0YTQtdCy0YDQsNC70YwnLCAn0LzQsNGA0YInLCAn0LDQv9GA0LXQu9GMJywgJ9C80LDQuScsICfQuNGO0L3RjCcsICfQuNGO0LvRjCcsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC90YLRj9Cx0YDRjCcsICfQvtC60YLRj9Cx0YDRjCcsICfQvdC+0Y/QsdGA0YwnLCAn0LTQtdC60LDQsdGA0YwnXVxufTtcbnZhciBmb3JtYXR0aW5nTW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQrycsICfQpCcsICfQnCcsICfQkCcsICfQnCcsICfQmCcsICfQmCcsICfQkCcsICfQoScsICfQnicsICfQnScsICfQlCddLFxuICBhYmJyZXZpYXRlZDogWyfRj9C90LIuJywgJ9GE0LXQsi4nLCAn0LzQsNGALicsICfQsNC/0YAuJywgJ9C80LDRjycsICfQuNGO0L0uJywgJ9C40Y7Quy4nLCAn0LDQstCzLicsICfRgdC10L3Rgi4nLCAn0L7QutGCLicsICfQvdC+0Y/QsS4nLCAn0LTQtdC6LiddLFxuICB3aWRlOiBbJ9GP0L3QstCw0YDRjycsICfRhNC10LLRgNCw0LvRjycsICfQvNCw0YDRgtCwJywgJ9Cw0L/RgNC10LvRjycsICfQvNCw0Y8nLCAn0LjRjtC90Y8nLCAn0LjRjtC70Y8nLCAn0LDQstCz0YPRgdGC0LAnLCAn0YHQtdC90YLRj9Cx0YDRjycsICfQvtC60YLRj9Cx0YDRjycsICfQvdC+0Y/QsdGA0Y8nLCAn0LTQtdC60LDQsdGA0Y8nXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQkicsICfQnycsICfQkicsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICBzaG9ydDogWyfQstGBJywgJ9C/0L0nLCAn0LLRgicsICfRgdGAJywgJ9GH0YInLCAn0L/RgicsICfRgdCxJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9Cy0YHQuicsICfQv9C90LQnLCAn0LLRgtGAJywgJ9GB0YDQtCcsICfRh9GC0LInLCAn0L/RgtC9JywgJ9GB0YPQsSddLFxuICB3aWRlOiBbJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnLCAn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNCwJywgJ9GH0LXRgtCy0LXRgNCzJywgJ9C/0Y/RgtC90LjRhtCwJywgJ9GB0YPQsdCx0L7RgtCwJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0LvQvS4nLFxuICAgIG5vb246ICfQv9C+0LvQtC4nLFxuICAgIG1vcm5pbmc6ICfRg9GC0YDQvicsXG4gICAgYWZ0ZXJub29uOiAn0LTQtdC90YwnLFxuICAgIGV2ZW5pbmc6ICfQstC10YcuJyxcbiAgICBuaWdodDogJ9C90L7Rh9GMJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn0JTQnycsXG4gICAgcG06ICfQn9CfJyxcbiAgICBtaWRuaWdodDogJ9C/0L7Qu9C9LicsXG4gICAgbm9vbjogJ9C/0L7Qu9C0LicsXG4gICAgbW9ybmluZzogJ9GD0YLRgNC+JyxcbiAgICBhZnRlcm5vb246ICfQtNC10L3RjCcsXG4gICAgZXZlbmluZzogJ9Cy0LXRhy4nLFxuICAgIG5pZ2h0OiAn0L3QvtGH0YwnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0LvQvdC+0YfRjCcsXG4gICAgbm9vbjogJ9C/0L7Qu9C00LXQvdGMJyxcbiAgICBtb3JuaW5nOiAn0YPRgtGA0L4nLFxuICAgIGFmdGVybm9vbjogJ9C00LXQvdGMJyxcbiAgICBldmVuaW5nOiAn0LLQtdGH0LXRgCcsXG4gICAgbmlnaHQ6ICfQvdC+0YfRjCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0LvQvS4nLFxuICAgIG5vb246ICfQv9C+0LvQtC4nLFxuICAgIG1vcm5pbmc6ICfRg9GC0YDQsCcsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YfQuCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0LvQvS4nLFxuICAgIG5vb246ICfQv9C+0LvQtC4nLFxuICAgIG1vcm5pbmc6ICfRg9GC0YDQsCcsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YfQuCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn0JTQnycsXG4gICAgcG06ICfQn9CfJyxcbiAgICBtaWRuaWdodDogJ9C/0L7Qu9C90L7Rh9GMJyxcbiAgICBub29uOiAn0L/QvtC70LTQtdC90YwnLFxuICAgIG1vcm5pbmc6ICfRg9GC0YDQsCcsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGH0LXRgNCwJyxcbiAgICBuaWdodDogJ9C90L7Rh9C4J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICB2YXIgc3VmZml4O1xuICBpZiAodW5pdCA9PT0gJ2RhdGUnKSB7XG4gICAgc3VmZml4ID0gJy3QtSc7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dlZWsnIHx8IHVuaXQgPT09ICdtaW51dGUnIHx8IHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgc3VmZml4ID0gJy3Rjyc7XG4gIH0gZWxzZSB7XG4gICAgc3VmZml4ID0gJy3QuSc7XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIHN1ZmZpeDtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2FueScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==