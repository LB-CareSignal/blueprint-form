(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/sr/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/localize/index.js ***!
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
  narrow: ['пр.н.е.', 'АД'],
  abbreviated: ['пр. Хр.', 'по. Хр.'],
  wide: ['Пре Христа', 'После Христа']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. кв.', '2. кв.', '3. кв.', '4. кв.'],
  wide: ['1. квартал', '2. квартал', '3. квартал', '4. квартал']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var dayValues = {
  narrow: ['Н', 'П', 'У', 'С', 'Ч', 'П', 'С'],
  short: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  abbreviated: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  wide: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота']
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
  }
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1zci1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0L/RgC7QvS7QtS4nLCAn0JDQlCddLFxuICBhYmJyZXZpYXRlZDogWyfQv9GALiDQpdGALicsICfQv9C+LiDQpdGALiddLFxuICB3aWRlOiBbJ9Cf0YDQtSDQpdGA0LjRgdGC0LAnLCAn0J/QvtGB0LvQtSDQpdGA0LjRgdGC0LAnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4g0LrQsi4nLCAnMi4g0LrQsi4nLCAnMy4g0LrQsi4nLCAnNC4g0LrQsi4nXSxcbiAgd2lkZTogWycxLiDQutCy0LDRgNGC0LDQuycsICcyLiDQutCy0LDRgNGC0LDQuycsICczLiDQutCy0LDRgNGC0LDQuycsICc0LiDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nLCAnNS4nLCAnNi4nLCAnNy4nLCAnOC4nLCAnOS4nLCAnMTAuJywgJzExLicsICcxMi4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0ZjQsNC9JywgJ9GE0LXQsScsICfQvNCw0YAnLCAn0LDQv9GAJywgJ9C80LDRmCcsICfRmNGD0L0nLCAn0ZjRg9C7JywgJ9Cw0LLQsycsICfRgdC10L8nLCAn0L7QutGCJywgJ9C90L7QsicsICfQtNC10YYnXSxcbiAgd2lkZTogWyfRmNCw0L3Rg9Cw0YAnLCAn0YTQtdCx0YDRg9Cw0YAnLCAn0LzQsNGA0YInLCAn0LDQv9GA0LjQuycsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LHQsNGAJywgJ9C+0LrRgtC+0LHQsNGAJywgJ9C90L7QstC10LzQsdCw0YAnLCAn0LTQtdGG0LXQvNCx0LDRgCddXG59O1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEuJywgJzIuJywgJzMuJywgJzQuJywgJzUuJywgJzYuJywgJzcuJywgJzguJywgJzkuJywgJzEwLicsICcxMS4nLCAnMTIuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9GY0LDQvScsICfRhNC10LEnLCAn0LzQsNGAJywgJ9Cw0L/RgCcsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LMnLCAn0YHQtdC/JywgJ9C+0LrRgicsICfQvdC+0LInLCAn0LTQtdGGJ10sXG4gIHdpZGU6IFsn0ZjQsNC90YPQsNGAJywgJ9GE0LXQsdGA0YPQsNGAJywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNGYJywgJ9GY0YPQvScsICfRmNGD0LsnLCAn0LDQstCz0YPRgdGCJywgJ9GB0LXQv9GC0LXQvNCx0LDRgCcsICfQvtC60YLQvtCx0LDRgCcsICfQvdC+0LLQtdC80LHQsNGAJywgJ9C00LXRhtC10LzQsdCw0YAnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQnScsICfQnycsICfQoycsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICBzaG9ydDogWyfQvdC10LQnLCAn0L/QvtC9JywgJ9GD0YLQvicsICfRgdGA0LUnLCAn0YfQtdGCJywgJ9C/0LXRgicsICfRgdGD0LEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0L3QtdC0JywgJ9C/0L7QvScsICfRg9GC0L4nLCAn0YHRgNC1JywgJ9GH0LXRgicsICfQv9C10YInLCAn0YHRg9CxJ10sXG4gIHdpZGU6IFsn0L3QtdC00LXRmdCwJywgJ9C/0L7QvdC10LTQtdGZ0LDQuicsICfRg9GC0L7RgNCw0LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstGA0YLQsNC6JywgJ9C/0LXRgtCw0LonLCAn0YHRg9Cx0L7RgtCwJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfQkNCcJyxcbiAgICBwbTogJ9Cf0JwnLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtC90L7RmycsXG4gICAgbm9vbjogJ9C/0L7QtNC90LUnLFxuICAgIG1vcm5pbmc6ICfRg9GY0YPRgtGA0YMnLFxuICAgIGFmdGVybm9vbjogJ9C/0L7Qv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CQ0JwnLFxuICAgIHBtOiAn0J/QnCcsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0L3QvtGbJyxcbiAgICBub29uOiAn0L/QvtC00L3QtScsXG4gICAgbW9ybmluZzogJ9GD0ZjRg9GC0YDRgycsXG4gICAgYWZ0ZXJub29uOiAn0L/QvtC/0L7QtNC90LUnLFxuICAgIGV2ZW5pbmc6ICfRg9Cy0LXRh9C1JyxcbiAgICBuaWdodDogJ9C90L7Rm9GDJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0L3QvtGbJyxcbiAgICBub29uOiAn0L/QvtC00L3QtScsXG4gICAgbW9ybmluZzogJ9GD0ZjRg9GC0YDRgycsXG4gICAgYWZ0ZXJub29uOiAn0L/QvtGB0LvQtSDQv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtC90L7RmycsXG4gICAgbm9vbjogJ9C/0L7QtNC90LUnLFxuICAgIG1vcm5pbmc6ICfRg9GY0YPRgtGA0YMnLFxuICAgIGFmdGVybm9vbjogJ9C/0L7Qv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ9C/0L7QvdC+0ZsnLFxuICAgIG5vb246ICfQv9C+0LTQvdC1JyxcbiAgICBtb3JuaW5nOiAn0YPRmNGD0YLRgNGDJyxcbiAgICBhZnRlcm5vb246ICfQv9C+0L/QvtC00L3QtScsXG4gICAgZXZlbmluZzogJ9GD0LLQtdGH0LUnLFxuICAgIG5pZ2h0OiAn0L3QvtGb0YMnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ9C/0L7QvdC+0ZsnLFxuICAgIG5vb246ICfQv9C+0LTQvdC1JyxcbiAgICBtb3JuaW5nOiAn0YPRmNGD0YLRgNGDJyxcbiAgICBhZnRlcm5vb246ICfQv9C+0YHQu9C1INC/0L7QtNC90LUnLFxuICAgIGV2ZW5pbmc6ICfRg9Cy0LXRh9C1JyxcbiAgICBuaWdodDogJ9C90L7Rm9GDJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=