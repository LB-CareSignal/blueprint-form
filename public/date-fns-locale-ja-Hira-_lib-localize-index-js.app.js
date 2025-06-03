(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ja-Hira-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ja-Hira/_lib/localize/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ja-Hira/_lib/localize/index.js ***!
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
  narrow: ['BC', 'AC'],
  abbreviated: ['きげんぜん', 'せいれき'],
  wide: ['きげんぜん', 'せいれき']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['だい1しはんき', 'だい2しはんき', 'だい3しはんき', 'だい4しはんき']
};
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['1がつ', '2がつ', '3がつ', '4がつ', '5がつ', '6がつ', '7がつ', '8がつ', '9がつ', '10がつ', '11がつ', '12がつ'],
  wide: ['1がつ', '2がつ', '3がつ', '4がつ', '5がつ', '6がつ', '7がつ', '8がつ', '9がつ', '10がつ', '11がつ', '12がつ']
};
var dayValues = {
  narrow: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  short: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  abbreviated: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  wide: ['にちようび', 'げつようび', 'かようび', 'すいようび', 'もくようび', 'きんようび', 'どようび']
};
var dayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case 'year':
      return "".concat(number, "\u306D\u3093");
    case 'quarter':
      return "\u3060\u3044".concat(number, "\u3057\u306F\u3093\u304D");
    case 'month':
      return "".concat(number, "\u304C\u3064");
    case 'week':
      return "\u3060\u3044".concat(number, "\u3057\u3085\u3046");
    case 'date':
      return "".concat(number, "\u306B\u3061");
    case 'hour':
      return "".concat(number, "\u3058");
    case 'minute':
      return "".concat(number, "\u3075\u3093");
    case 'second':
      return "".concat(number, "\u3073\u3087\u3046");
    default:
      return "".concat(number);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2phLUhpcmEvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0R0FBd0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtamEtSGlyYS1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQkMnLCAnQUMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn44GN44GS44KT44Gc44KTJywgJ+OBm+OBhOOCjOOBjSddLFxuICB3aWRlOiBbJ+OBjeOBkuOCk+OBnOOCkycsICfjgZvjgYTjgozjgY0nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJ+OBoOOBhDHjgZfjga/jgpPjgY0nLCAn44Gg44GEMuOBl+OBr+OCk+OBjScsICfjgaDjgYQz44GX44Gv44KT44GNJywgJ+OBoOOBhDTjgZfjga/jgpPjgY0nXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ10sXG4gIGFiYnJldmlhdGVkOiBbJzHjgYzjgaQnLCAnMuOBjOOBpCcsICcz44GM44GkJywgJzTjgYzjgaQnLCAnNeOBjOOBpCcsICc244GM44GkJywgJzfjgYzjgaQnLCAnOOOBjOOBpCcsICc544GM44GkJywgJzEw44GM44GkJywgJzEx44GM44GkJywgJzEy44GM44GkJ10sXG4gIHdpZGU6IFsnMeOBjOOBpCcsICcy44GM44GkJywgJzPjgYzjgaQnLCAnNOOBjOOBpCcsICc144GM44GkJywgJzbjgYzjgaQnLCAnN+OBjOOBpCcsICc444GM44GkJywgJznjgYzjgaQnLCAnMTDjgYzjgaQnLCAnMTHjgYzjgaQnLCAnMTLjgYzjgaQnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfjgavjgaEnLCAn44GS44GkJywgJ+OBiycsICfjgZnjgYQnLCAn44KC44GPJywgJ+OBjeOCkycsICfjgaknXSxcbiAgc2hvcnQ6IFsn44Gr44GhJywgJ+OBkuOBpCcsICfjgYsnLCAn44GZ44GEJywgJ+OCguOBjycsICfjgY3jgpMnLCAn44GpJ10sXG4gIGFiYnJldmlhdGVkOiBbJ+OBq+OBoScsICfjgZLjgaQnLCAn44GLJywgJ+OBmeOBhCcsICfjgoLjgY8nLCAn44GN44KTJywgJ+OBqSddLFxuICB3aWRlOiBbJ+OBq+OBoeOCiOOBhuOBsycsICfjgZLjgaTjgojjgYbjgbMnLCAn44GL44KI44GG44GzJywgJ+OBmeOBhOOCiOOBhuOBsycsICfjgoLjgY/jgojjgYbjgbMnLCAn44GN44KT44KI44GG44GzJywgJ+OBqeOCiOOBhuOBsyddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfjgZTjgZzjgpMnLFxuICAgIHBtOiAn44GU44GUJyxcbiAgICBtaWRuaWdodDogJ+OBl+OCk+OChCcsXG4gICAgbm9vbjogJ+OBl+OCh+OBhuOBlCcsXG4gICAgbW9ybmluZzogJ+OBguOBlScsXG4gICAgYWZ0ZXJub29uOiAn44GU44GUJyxcbiAgICBldmVuaW5nOiAn44KI44KLJyxcbiAgICBuaWdodDogJ+OBl+OCk+OChCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+OBlOOBnOOCkycsXG4gICAgcG06ICfjgZTjgZQnLFxuICAgIG1pZG5pZ2h0OiAn44GX44KT44KEJyxcbiAgICBub29uOiAn44GX44KH44GG44GUJyxcbiAgICBtb3JuaW5nOiAn44GC44GVJyxcbiAgICBhZnRlcm5vb246ICfjgZTjgZQnLFxuICAgIGV2ZW5pbmc6ICfjgojjgosnLFxuICAgIG5pZ2h0OiAn44GX44KT44KEJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfjgZTjgZzjgpMnLFxuICAgIHBtOiAn44GU44GUJyxcbiAgICBtaWRuaWdodDogJ+OBl+OCk+OChCcsXG4gICAgbm9vbjogJ+OBl+OCh+OBhuOBlCcsXG4gICAgbW9ybmluZzogJ+OBguOBlScsXG4gICAgYWZ0ZXJub29uOiAn44GU44GUJyxcbiAgICBldmVuaW5nOiAn44KI44KLJyxcbiAgICBuaWdodDogJ+OBl+OCk+OChCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ+OBlOOBnOOCkycsXG4gICAgcG06ICfjgZTjgZQnLFxuICAgIG1pZG5pZ2h0OiAn44GX44KT44KEJyxcbiAgICBub29uOiAn44GX44KH44GG44GUJyxcbiAgICBtb3JuaW5nOiAn44GC44GVJyxcbiAgICBhZnRlcm5vb246ICfjgZTjgZQnLFxuICAgIGV2ZW5pbmc6ICfjgojjgosnLFxuICAgIG5pZ2h0OiAn44GX44KT44KEJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn44GU44Gc44KTJyxcbiAgICBwbTogJ+OBlOOBlCcsXG4gICAgbWlkbmlnaHQ6ICfjgZfjgpPjgoQnLFxuICAgIG5vb246ICfjgZfjgofjgYbjgZQnLFxuICAgIG1vcm5pbmc6ICfjgYLjgZUnLFxuICAgIGFmdGVybm9vbjogJ+OBlOOBlCcsXG4gICAgZXZlbmluZzogJ+OCiOOCiycsXG4gICAgbmlnaHQ6ICfjgZfjgpPjgoQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+OBlOOBnOOCkycsXG4gICAgcG06ICfjgZTjgZQnLFxuICAgIG1pZG5pZ2h0OiAn44GX44KT44KEJyxcbiAgICBub29uOiAn44GX44KH44GG44GUJyxcbiAgICBtb3JuaW5nOiAn44GC44GVJyxcbiAgICBhZnRlcm5vb246ICfjgZTjgZQnLFxuICAgIGV2ZW5pbmc6ICfjgojjgosnLFxuICAgIG5pZ2h0OiAn44GX44KT44KEJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdCk7XG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHUzMDZEXFx1MzA5M1wiKTtcbiAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgIHJldHVybiBcIlxcdTMwNjBcXHUzMDQ0XCIuY29uY2F0KG51bWJlciwgXCJcXHUzMDU3XFx1MzA2RlxcdTMwOTNcXHUzMDREXCIpO1xuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIsIFwiXFx1MzA0Q1xcdTMwNjRcIik7XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICByZXR1cm4gXCJcXHUzMDYwXFx1MzA0NFwiLmNvbmNhdChudW1iZXIsIFwiXFx1MzA1N1xcdTMwODVcXHUzMDQ2XCIpO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHUzMDZCXFx1MzA2MVwiKTtcbiAgICBjYXNlICdob3VyJzpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIsIFwiXFx1MzA1OFwiKTtcbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHUzMDc1XFx1MzA5M1wiKTtcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHUzMDczXFx1MzA4N1xcdTMwNDZcIik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIpO1xuICB9XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9