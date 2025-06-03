(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mn-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/mn/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/localize/index.js ***!
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
  narrow: ['НТӨ', 'НТ'],
  abbreviated: ['НТӨ', 'НТ'],
  wide: ['нийтийн тооллын өмнөх', 'нийтийн тооллын']
};
var quarterValues = {
  narrow: ['I', 'II', 'III', 'IV'],
  abbreviated: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
  wide: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  abbreviated: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  wide: ['Нэгдүгээр сар', 'Хоёрдугаар сар', 'Гуравдугаар сар', 'Дөрөвдүгээр сар', 'Тавдугаар сар', 'Зургаадугаар сар', 'Долоодугаар сар', 'Наймдугаар сар', 'Есдүгээр сар', 'Аравдугаар сар', 'Арваннэгдүгээр сар', 'Арван хоёрдугаар сар']
};
var formattingMonthValues = {
  narrow: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  abbreviated: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  wide: ['нэгдүгээр сар', 'хоёрдугаар сар', 'гуравдугаар сар', 'дөрөвдүгээр сар', 'тавдугаар сар', 'зургаадугаар сар', 'долоодугаар сар', 'наймдугаар сар', 'есдүгээр сар', 'аравдугаар сар', 'арваннэгдүгээр сар', 'арван хоёрдугаар сар']
};
var dayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']
};
var formattingDayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['ням', 'даваа', 'мягмар', 'лхагва', 'пүрэв', 'баасан', 'бямба']
};
var dayPeriodValues = {
  narrow: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  abbreviated: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  wide: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21uL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLW1uLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQndCi06gnLCAn0J3QoiddLFxuICBhYmJyZXZpYXRlZDogWyfQndCi06gnLCAn0J3QoiddLFxuICB3aWRlOiBbJ9C90LjQudGC0LjQudC9INGC0L7QvtC70LvRi9C9INOp0LzQvdOp0YUnLCAn0L3QuNC50YLQuNC50L0g0YLQvtC+0LvQu9GL0L0nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSScsICdJSScsICdJSUknLCAnSVYnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSSDRg9C70LjRgNCw0LsnLCAnSUkg0YPQu9C40YDQsNC7JywgJ0lJSSDRg9C70LjRgNCw0LsnLCAnSVYg0YPQu9C40YDQsNC7J10sXG4gIHdpZGU6IFsnMS3RgCDRg9C70LjRgNCw0LsnLCAnMi3RgCDRg9C70LjRgNCw0LsnLCAnMy3RgCDRg9C70LjRgNCw0LsnLCAnNC3RgCDRg9C70LjRgNCw0LsnXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSScsICdJSScsICdJSUknLCAnSVYnLCAnVicsICdWSScsICdWSUknLCAnVklJSScsICdJWCcsICdYJywgJ1hJJywgJ1hJSSddLFxuICBhYmJyZXZpYXRlZDogWycxLdGAINGB0LDRgCcsICcyLdGAINGB0LDRgCcsICczLdGAINGB0LDRgCcsICc0LdGAINGB0LDRgCcsICc1LdGAINGB0LDRgCcsICc2LdGAINGB0LDRgCcsICc3LdGAINGB0LDRgCcsICc4LdGAINGB0LDRgCcsICc5LdGAINGB0LDRgCcsICcxMC3RgCDRgdCw0YAnLCAnMTEt0YAg0YHQsNGAJywgJzEyLdGAINGB0LDRgCddLFxuICB3aWRlOiBbJ9Cd0Y3Qs9C00q/Qs9GN0Y3RgCDRgdCw0YAnLCAn0KXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9CT0YPRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9CU06nRgNOp0LLQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9Ci0LDQstC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0JfRg9GA0LPQsNCw0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQlNC+0LvQvtC+0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQndCw0LnQvNC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0JXRgdC00q/Qs9GN0Y3RgCDRgdCw0YAnLCAn0JDRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9CQ0YDQstCw0L3QvdGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9CQ0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSScsICdJSScsICdJSUknLCAnSVYnLCAnVicsICdWSScsICdWSUknLCAnVklJSScsICdJWCcsICdYJywgJ1hJJywgJ1hJSSddLFxuICBhYmJyZXZpYXRlZDogWycxLdGAINGB0LDRgCcsICcyLdGAINGB0LDRgCcsICczLdGAINGB0LDRgCcsICc0LdGAINGB0LDRgCcsICc1LdGAINGB0LDRgCcsICc2LdGAINGB0LDRgCcsICc3LdGAINGB0LDRgCcsICc4LdGAINGB0LDRgCcsICc5LdGAINGB0LDRgCcsICcxMC3RgCDRgdCw0YAnLCAnMTEt0YAg0YHQsNGAJywgJzEyLdGAINGB0LDRgCddLFxuICB3aWRlOiBbJ9C90Y3Qs9C00q/Qs9GN0Y3RgCDRgdCw0YAnLCAn0YXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9Cz0YPRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9C006nRgNOp0LLQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9GC0LDQstC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0LfRg9GA0LPQsNCw0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQtNC+0LvQvtC+0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQvdCw0LnQvNC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0LXRgdC00q/Qs9GN0Y3RgCDRgdCw0YAnLCAn0LDRgNCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9Cw0YDQstCw0L3QvdGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9Cw0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0J0nLCAn0JQnLCAn0JwnLCAn0JsnLCAn0J8nLCAn0JEnLCAn0JEnXSxcbiAgc2hvcnQ6IFsn0J3RjycsICfQlNCwJywgJ9Cc0Y8nLCAn0JvRhScsICfQn9KvJywgJ9CR0LAnLCAn0JHRjyddLFxuICBhYmJyZXZpYXRlZDogWyfQndGP0LwnLCAn0JTQsNCyJywgJ9Cc0Y/QsycsICfQm9GF0LAnLCAn0J/Sr9GAJywgJ9CR0LDQsCcsICfQkdGP0LwnXSxcbiAgd2lkZTogWyfQndGP0LwnLCAn0JTQsNCy0LDQsCcsICfQnNGP0LPQvNCw0YAnLCAn0JvRhdCw0LPQstCwJywgJ9Cf0q/RgNGN0LInLCAn0JHQsNCw0YHQsNC9JywgJ9CR0Y/QvNCx0LAnXVxufTtcbnZhciBmb3JtYXR0aW5nRGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0J0nLCAn0JQnLCAn0JwnLCAn0JsnLCAn0J8nLCAn0JEnLCAn0JEnXSxcbiAgc2hvcnQ6IFsn0J3RjycsICfQlNCwJywgJ9Cc0Y8nLCAn0JvRhScsICfQn9KvJywgJ9CR0LAnLCAn0JHRjyddLFxuICBhYmJyZXZpYXRlZDogWyfQndGP0LwnLCAn0JTQsNCyJywgJ9Cc0Y/QsycsICfQm9GF0LAnLCAn0J/Sr9GAJywgJ9CR0LDQsCcsICfQkdGP0LwnXSxcbiAgd2lkZTogWyfQvdGP0LwnLCAn0LTQsNCy0LDQsCcsICfQvNGP0LPQvNCw0YAnLCAn0LvRhdCw0LPQstCwJywgJ9C/0q/RgNGN0LInLCAn0LHQsNCw0YHQsNC9JywgJ9Cx0Y/QvNCx0LAnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn0q8u06kuJyxcbiAgICBwbTogJ9KvLtGFLicsXG4gICAgbWlkbmlnaHQ6ICfRiNOp0L3TqSDQtNGD0L3QtCcsXG4gICAgbm9vbjogJ9Kv0LQg0LTRg9C90LQnLFxuICAgIG1vcm5pbmc6ICfTqdCz0LvTqdOpJyxcbiAgICBhZnRlcm5vb246ICfTqdC006nRgCcsXG4gICAgZXZlbmluZzogJ9C+0YDQvtC5JyxcbiAgICBuaWdodDogJ9GI06nQvdOpJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn0q8u06kuJyxcbiAgICBwbTogJ9KvLtGFLicsXG4gICAgbWlkbmlnaHQ6ICfRiNOp0L3TqSDQtNGD0L3QtCcsXG4gICAgbm9vbjogJ9Kv0LQg0LTRg9C90LQnLFxuICAgIG1vcm5pbmc6ICfTqdCz0LvTqdOpJyxcbiAgICBhZnRlcm5vb246ICfTqdC006nRgCcsXG4gICAgZXZlbmluZzogJ9C+0YDQvtC5JyxcbiAgICBuaWdodDogJ9GI06nQvdOpJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfSry7TqS4nLFxuICAgIHBtOiAn0q8u0YUuJyxcbiAgICBtaWRuaWdodDogJ9GI06nQvdOpINC00YPQvdC0JyxcbiAgICBub29uOiAn0q/QtCDQtNGD0L3QtCcsXG4gICAgbW9ybmluZzogJ9Op0LPQu9Op06knLFxuICAgIGFmdGVybm9vbjogJ9Op0LTTqdGAJyxcbiAgICBldmVuaW5nOiAn0L7RgNC+0LknLFxuICAgIG5pZ2h0OiAn0YjTqdC906knXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHJldHVybiBTdHJpbmcoZGlydHlOdW1iZXIpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==