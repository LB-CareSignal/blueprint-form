(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mk-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/mk/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/localize/index.js ***!
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
  abbreviated: ['пред н. е.', 'н. е.'],
  wide: ['пред нашата ера', 'нашата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ви кв.', '2-ри кв.', '3-ти кв.', '4-ти кв.'],
  wide: ['1-ви квартал', '2-ри квартал', '3-ти квартал', '4-ти квартал']
};
var monthValues = {
  abbreviated: ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'септ', 'окт', 'ноем', 'дек'],
  wide: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са'],
  abbreviated: ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'],
  wide: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
};
var dayPeriodValues = {
  wide: {
    am: 'претпладне',
    pm: 'попладне',
    midnight: 'полноќ',
    noon: 'напладне',
    morning: 'наутро',
    afternoon: 'попладне',
    evening: 'навечер',
    night: 'ноќе'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви';
      case 2:
        return number + '-ри';
      case 7:
      case 8:
        return number + '-ми';
    }
  }
  return number + '-ти';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21rL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1tay1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0L/RgC7QvS7QtS4nLCAn0L0u0LUuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9C/0YDQtdC0INC9LiDQtS4nLCAn0L0uINC1LiddLFxuICB3aWRlOiBbJ9C/0YDQtdC0INC90LDRiNCw0YLQsCDQtdGA0LAnLCAn0L3QsNGI0LDRgtCwINC10YDQsCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzEt0LLQuCDQutCyLicsICcyLdGA0Lgg0LrQsi4nLCAnMy3RgtC4INC60LIuJywgJzQt0YLQuCDQutCyLiddLFxuICB3aWRlOiBbJzEt0LLQuCDQutCy0LDRgNGC0LDQuycsICcyLdGA0Lgg0LrQstCw0YDRgtCw0LsnLCAnMy3RgtC4INC60LLQsNGA0YLQsNC7JywgJzQt0YLQuCDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBhYmJyZXZpYXRlZDogWyfRmNCw0L0nLCAn0YTQtdCyJywgJ9C80LDRgCcsICfQsNC/0YAnLCAn0LzQsNGYJywgJ9GY0YPQvScsICfRmNGD0LsnLCAn0LDQstCzJywgJ9GB0LXQv9GCJywgJ9C+0LrRgicsICfQvdC+0LXQvCcsICfQtNC10LonXSxcbiAgd2lkZTogWyfRmNCw0L3Rg9Cw0YDQuCcsICfRhNC10LLRgNGD0LDRgNC4JywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNGYJywgJ9GY0YPQvdC4JywgJ9GY0YPQu9C4JywgJ9Cw0LLQs9GD0YHRgicsICfRgdC10L/RgtC10LzQstGA0LgnLCAn0L7QutGC0L7QvNCy0YDQuCcsICfQvdC+0LXQvNCy0YDQuCcsICfQtNC10LrQtdC80LLRgNC4J11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0J0nLCAn0J8nLCAn0JInLCAn0KEnLCAn0KcnLCAn0J8nLCAn0KEnXSxcbiAgc2hvcnQ6IFsn0L3QtScsICfQv9C+JywgJ9Cy0YInLCAn0YHRgCcsICfRh9C1JywgJ9C/0LUnLCAn0YHQsCddLFxuICBhYmJyZXZpYXRlZDogWyfQvdC10LQnLCAn0L/QvtC9JywgJ9Cy0YLQvicsICfRgdGA0LUnLCAn0YfQtdGCJywgJ9C/0LXRgicsICfRgdCw0LEnXSxcbiAgd2lkZTogWyfQvdC10LTQtdC70LAnLCAn0L/QvtC90LXQtNC10LvQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstGA0YLQvtC6JywgJ9C/0LXRgtC+0LonLCAn0YHQsNCx0L7RgtCwJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICB3aWRlOiB7XG4gICAgYW06ICfQv9GA0LXRgtC/0LvQsNC00L3QtScsXG4gICAgcG06ICfQv9C+0L/Qu9Cw0LTQvdC1JyxcbiAgICBtaWRuaWdodDogJ9C/0L7Qu9C90L7RnCcsXG4gICAgbm9vbjogJ9C90LDQv9C70LDQtNC90LUnLFxuICAgIG1vcm5pbmc6ICfQvdCw0YPRgtGA0L4nLFxuICAgIGFmdGVybm9vbjogJ9C/0L7Qv9C70LDQtNC90LUnLFxuICAgIGV2ZW5pbmc6ICfQvdCw0LLQtdGH0LXRgCcsXG4gICAgbmlnaHQ6ICfQvdC+0ZzQtSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICct0LLQuCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnLdGA0LgnO1xuICAgICAgY2FzZSA3OlxuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3QvNC4JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICct0YLQuCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==