(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ja-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ja/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ja/_lib/localize/index.js ***!
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
  narrow: ['BC', 'AC'],
  abbreviated: ['紀元前', '西暦'],
  wide: ['紀元前', '西暦']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['第1四半期', '第2四半期', '第3四半期', '第4四半期']
};
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  wide: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
};
var dayValues = {
  narrow: ['日', '月', '火', '水', '木', '金', '土'],
  short: ['日', '月', '火', '水', '木', '金', '土'],
  abbreviated: ['日', '月', '火', '水', '木', '金', '土'],
  wide: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
};
var dayPeriodValues = {
  narrow: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  },
  abbreviated: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  },
  wide: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  },
  abbreviated: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  },
  wide: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case 'year':
      return "".concat(number, "\u5E74");
    case 'quarter':
      return "\u7B2C".concat(number, "\u56DB\u534A\u671F");
    case 'month':
      return "".concat(number, "\u6708");
    case 'week':
      return "\u7B2C".concat(number, "\u9031");
    case 'date':
      return "".concat(number, "\u65E5");
    case 'hour':
      return "".concat(number, "\u6642");
    case 'minute':
      return "".concat(number, "\u5206");
    case 'second':
      return "".concat(number, "\u79D2");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2phL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWphLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCQycsICdBQyddLFxuICBhYmJyZXZpYXRlZDogWyfntIDlhYPliY0nLCAn6KW/5pqmJ10sXG4gIHdpZGU6IFsn57SA5YWD5YmNJywgJ+ilv+aapiddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsn56ysMeWbm+WNiuacnycsICfnrKwy5Zub5Y2K5pyfJywgJ+esrDPlm5vljYrmnJ8nLCAn56ysNOWbm+WNiuacnyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcbiAgd2lkZTogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+aXpScsICfmnIgnLCAn54GrJywgJ+awtCcsICfmnKgnLCAn6YeRJywgJ+WcnyddLFxuICBzaG9ydDogWyfml6UnLCAn5pyIJywgJ+eBqycsICfmsLQnLCAn5pyoJywgJ+mHkScsICflnJ8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn5pelJywgJ+aciCcsICfngasnLCAn5rC0JywgJ+acqCcsICfph5EnLCAn5ZyfJ10sXG4gIHdpZGU6IFsn5pel5puc5pelJywgJ+aciOabnOaXpScsICfngavmm5zml6UnLCAn5rC05puc5pelJywgJ+acqOabnOaXpScsICfph5Hmm5zml6UnLCAn5Zyf5puc5pelJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ+WNiOWJjScsXG4gICAgcG06ICfljYjlvownLFxuICAgIG1pZG5pZ2h0OiAn5rex5aScJyxcbiAgICBub29uOiAn5q2j5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pydJyxcbiAgICBhZnRlcm5vb246ICfljYjlvownLFxuICAgIGV2ZW5pbmc6ICflpJwnLFxuICAgIG5pZ2h0OiAn5rex5aScJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn5Y2I5YmNJyxcbiAgICBwbTogJ+WNiOW+jCcsXG4gICAgbWlkbmlnaHQ6ICfmt7HlpJwnLFxuICAgIG5vb246ICfmraPljYgnLFxuICAgIG1vcm5pbmc6ICfmnJ0nLFxuICAgIGFmdGVybm9vbjogJ+WNiOW+jCcsXG4gICAgZXZlbmluZzogJ+WknCcsXG4gICAgbmlnaHQ6ICfmt7HlpJwnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+WNiOWJjScsXG4gICAgcG06ICfljYjlvownLFxuICAgIG1pZG5pZ2h0OiAn5rex5aScJyxcbiAgICBub29uOiAn5q2j5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pydJyxcbiAgICBhZnRlcm5vb246ICfljYjlvownLFxuICAgIGV2ZW5pbmc6ICflpJwnLFxuICAgIG5pZ2h0OiAn5rex5aScJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn5Y2I5YmNJyxcbiAgICBwbTogJ+WNiOW+jCcsXG4gICAgbWlkbmlnaHQ6ICfmt7HlpJwnLFxuICAgIG5vb246ICfmraPljYgnLFxuICAgIG1vcm5pbmc6ICfmnJ0nLFxuICAgIGFmdGVybm9vbjogJ+WNiOW+jCcsXG4gICAgZXZlbmluZzogJ+WknCcsXG4gICAgbmlnaHQ6ICfmt7HlpJwnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfljYjliY0nLFxuICAgIHBtOiAn5Y2I5b6MJyxcbiAgICBtaWRuaWdodDogJ+a3seWknCcsXG4gICAgbm9vbjogJ+ato+WNiCcsXG4gICAgbW9ybmluZzogJ+acnScsXG4gICAgYWZ0ZXJub29uOiAn5Y2I5b6MJyxcbiAgICBldmVuaW5nOiAn5aScJyxcbiAgICBuaWdodDogJ+a3seWknCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn5Y2I5YmNJyxcbiAgICBwbTogJ+WNiOW+jCcsXG4gICAgbWlkbmlnaHQ6ICfmt7HlpJwnLFxuICAgIG5vb246ICfmraPljYgnLFxuICAgIG1vcm5pbmc6ICfmnJ0nLFxuICAgIGFmdGVybm9vbjogJ+WNiOW+jCcsXG4gICAgZXZlbmluZzogJ+WknCcsXG4gICAgbmlnaHQ6ICfmt7HlpJwnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0KTtcbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobnVtYmVyLCBcIlxcdTVFNzRcIik7XG4gICAgY2FzZSAncXVhcnRlcic6XG4gICAgICByZXR1cm4gXCJcXHU3QjJDXCIuY29uY2F0KG51bWJlciwgXCJcXHU1NkRCXFx1NTM0QVxcdTY3MUZcIik7XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHU2NzA4XCIpO1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgcmV0dXJuIFwiXFx1N0IyQ1wiLmNvbmNhdChudW1iZXIsIFwiXFx1OTAzMVwiKTtcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIsIFwiXFx1NjVFNVwiKTtcbiAgICBjYXNlICdob3VyJzpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIsIFwiXFx1NjY0MlwiKTtcbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG51bWJlciwgXCJcXHU1MjA2XCIpO1xuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobnVtYmVyLCBcIlxcdTc5RDJcIik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChudW1iZXIpO1xuICB9XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9