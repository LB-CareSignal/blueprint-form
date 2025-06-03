(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uz-Cyrl-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/uz-Cyrl/_lib/localize/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/uz-Cyrl/_lib/localize/index.js ***!
  \*********************************************************************/
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
  narrow: ['М.А', 'М'],
  abbreviated: ['М.А', 'М'],
  wide: ['Милоддан Аввалги', 'Милодий']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-чор.', '2-чор.', '3-чор.', '4-чор.'],
  wide: ['1-чорак', '2-чорак', '3-чорак', '4-чорак']
};
var monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  wide: ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентабр', 'октабр', 'ноябр', 'декабр']
};
var dayValues = {
  narrow: ['Я', 'Д', 'С', 'Ч', 'П', 'Ж', 'Ш'],
  short: ['як', 'ду', 'се', 'чо', 'па', 'жу', 'ша'],
  abbreviated: ['якш', 'душ', 'сеш', 'чор', 'пай', 'жум', 'шан'],
  wide: ['якшанба', 'душанба', 'сешанба', 'чоршанба', 'пайшанба', 'жума', 'шанба']
};
var dayPeriodValues = {
  any: {
    am: 'П.О.',
    pm: 'П.К.',
    midnight: 'ярим тун',
    noon: 'пешин',
    morning: 'эрталаб',
    afternoon: 'пешиндан кейин',
    evening: 'кечаси',
    night: 'тун'
  }
};
var formattingDayPeriodValues = {
  any: {
    am: 'П.О.',
    pm: 'П.К.',
    midnight: 'ярим тун',
    noon: 'пешин',
    morning: 'эрталаб',
    afternoon: 'пешиндан кейин',
    evening: 'кечаси',
    night: 'тун'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
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
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'any'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3V6LUN5cmwvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0R0FBd0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS11ei1DeXJsLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQnC7QkCcsICfQnCddLFxuICBhYmJyZXZpYXRlZDogWyfQnC7QkCcsICfQnCddLFxuICB3aWRlOiBbJ9Cc0LjQu9C+0LTQtNCw0L0g0JDQstCy0LDQu9Cz0LgnLCAn0JzQuNC70L7QtNC40LknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdGH0L7RgC4nLCAnMi3Rh9C+0YAuJywgJzMt0YfQvtGALicsICc0LdGH0L7RgC4nXSxcbiAgd2lkZTogWycxLdGH0L7RgNCw0LonLCAnMi3Rh9C+0YDQsNC6JywgJzMt0YfQvtGA0LDQuicsICc0LdGH0L7RgNCw0LonXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9CvJywgJ9CkJywgJ9CcJywgJ9CQJywgJ9CcJywgJ9CYJywgJ9CYJywgJ9CQJywgJ9ChJywgJ9CeJywgJ9CdJywgJ9CUJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9GP0L3QsicsICfRhNC10LInLCAn0LzQsNGAJywgJ9Cw0L/RgCcsICfQvNCw0LknLCAn0LjRjtC9JywgJ9C40Y7QuycsICfQsNCy0LMnLCAn0YHQtdC9JywgJ9C+0LrRgicsICfQvdC+0Y8nLCAn0LTQtdC6J10sXG4gIHdpZGU6IFsn0Y/QvdCy0LDRgCcsICfRhNC10LLRgNCw0LsnLCAn0LzQsNGA0YInLCAn0LDQv9GA0LXQuycsICfQvNCw0LknLCAn0LjRjtC9JywgJ9C40Y7QuycsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC90YLQsNCx0YAnLCAn0L7QutGC0LDQsdGAJywgJ9C90L7Rj9Cx0YAnLCAn0LTQtdC60LDQsdGAJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0K8nLCAn0JQnLCAn0KEnLCAn0KcnLCAn0J8nLCAn0JYnLCAn0KgnXSxcbiAgc2hvcnQ6IFsn0Y/QuicsICfQtNGDJywgJ9GB0LUnLCAn0YfQvicsICfQv9CwJywgJ9C20YMnLCAn0YjQsCddLFxuICBhYmJyZXZpYXRlZDogWyfRj9C60YgnLCAn0LTRg9GIJywgJ9GB0LXRiCcsICfRh9C+0YAnLCAn0L/QsNC5JywgJ9C20YPQvCcsICfRiNCw0L0nXSxcbiAgd2lkZTogWyfRj9C60YjQsNC90LHQsCcsICfQtNGD0YjQsNC90LHQsCcsICfRgdC10YjQsNC90LHQsCcsICfRh9C+0YDRiNCw0L3QsdCwJywgJ9C/0LDQudGI0LDQvdCx0LAnLCAn0LbRg9C80LAnLCAn0YjQsNC90LHQsCddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgYW55OiB7XG4gICAgYW06ICfQny7Qni4nLFxuICAgIHBtOiAn0J8u0JouJyxcbiAgICBtaWRuaWdodDogJ9GP0YDQuNC8INGC0YPQvScsXG4gICAgbm9vbjogJ9C/0LXRiNC40L0nLFxuICAgIG1vcm5pbmc6ICfRjdGA0YLQsNC70LDQsScsXG4gICAgYWZ0ZXJub29uOiAn0L/QtdGI0LjQvdC00LDQvSDQutC10LnQuNC9JyxcbiAgICBldmVuaW5nOiAn0LrQtdGH0LDRgdC4JyxcbiAgICBuaWdodDogJ9GC0YPQvSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBhbnk6IHtcbiAgICBhbTogJ9CfLtCeLicsXG4gICAgcG06ICfQny7Qmi4nLFxuICAgIG1pZG5pZ2h0OiAn0Y/RgNC40Lwg0YLRg9C9JyxcbiAgICBub29uOiAn0L/QtdGI0LjQvScsXG4gICAgbW9ybmluZzogJ9GN0YDRgtCw0LvQsNCxJyxcbiAgICBhZnRlcm5vb246ICfQv9C10YjQuNC90LTQsNC9INC60LXQudC40L0nLFxuICAgIGV2ZW5pbmc6ICfQutC10YfQsNGB0LgnLFxuICAgIG5pZ2h0OiAn0YLRg9C9J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICdhbnknLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==