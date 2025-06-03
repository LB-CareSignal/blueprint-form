(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ko-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ko/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ko/_lib/localize/index.js ***!
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
  narrow: ['BC', 'AD'],
  abbreviated: ['BC', 'AD'],
  wide: ['기원전', '서기']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1분기', '2분기', '3분기', '4분기']
};
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  wide: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
};
var dayValues = {
  narrow: ['일', '월', '화', '수', '목', '금', '토'],
  short: ['일', '월', '화', '수', '목', '금', '토'],
  abbreviated: ['일', '월', '화', '수', '목', '금', '토'],
  wide: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
};
var dayPeriodValues = {
  narrow: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  abbreviated: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  wide: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  abbreviated: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  },
  wide: {
    am: '오전',
    pm: '오후',
    midnight: '자정',
    noon: '정오',
    morning: '아침',
    afternoon: '오후',
    evening: '저녁',
    night: '밤'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case 'minute':
    case 'second':
      return String(number);
    case 'date':
      return number + '일';
    default:
      return number + '번째';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2tvL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta28tX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0JDJywgJ0FEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsn6riw7JuQ7KCEJywgJ+yEnOq4sCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMeu2hOq4sCcsICcy67aE6riwJywgJzPrtoTquLAnLCAnNOu2hOq4sCddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMeyblCcsICcy7JuUJywgJzPsm5QnLCAnNOyblCcsICc17JuUJywgJzbsm5QnLCAnN+yblCcsICc47JuUJywgJznsm5QnLCAnMTDsm5QnLCAnMTHsm5QnLCAnMTLsm5QnXSxcbiAgd2lkZTogWycx7JuUJywgJzLsm5QnLCAnM+yblCcsICc07JuUJywgJzXsm5QnLCAnNuyblCcsICc37JuUJywgJzjsm5QnLCAnOeyblCcsICcxMOyblCcsICcxMeyblCcsICcxMuyblCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+ydvCcsICfsm5QnLCAn7ZmUJywgJ+yImCcsICfrqqknLCAn6riIJywgJ+2GoCddLFxuICBzaG9ydDogWyfsnbwnLCAn7JuUJywgJ+2ZlCcsICfsiJgnLCAn66qpJywgJ+q4iCcsICfthqAnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn7J28JywgJ+yblCcsICftmZQnLCAn7IiYJywgJ+uqqScsICfquIgnLCAn7YagJ10sXG4gIHdpZGU6IFsn7J287JqU7J28JywgJ+yblOyalOydvCcsICftmZTsmpTsnbwnLCAn7IiY7JqU7J28JywgJ+uqqeyalOydvCcsICfquIjsmpTsnbwnLCAn7Yag7JqU7J28J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ+yYpOyghCcsXG4gICAgcG06ICfsmKTtm4QnLFxuICAgIG1pZG5pZ2h0OiAn7J6Q7KCVJyxcbiAgICBub29uOiAn7KCV7JikJyxcbiAgICBtb3JuaW5nOiAn7JWE7LmoJyxcbiAgICBhZnRlcm5vb246ICfsmKTtm4QnLFxuICAgIGV2ZW5pbmc6ICfsoIDrhYEnLFxuICAgIG5pZ2h0OiAn67CkJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn7Jik7KCEJyxcbiAgICBwbTogJ+yYpO2bhCcsXG4gICAgbWlkbmlnaHQ6ICfsnpDsoJUnLFxuICAgIG5vb246ICfsoJXsmKQnLFxuICAgIG1vcm5pbmc6ICfslYTsuagnLFxuICAgIGFmdGVybm9vbjogJ+yYpO2bhCcsXG4gICAgZXZlbmluZzogJ+yggOuFgScsXG4gICAgbmlnaHQ6ICfrsKQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+yYpOyghCcsXG4gICAgcG06ICfsmKTtm4QnLFxuICAgIG1pZG5pZ2h0OiAn7J6Q7KCVJyxcbiAgICBub29uOiAn7KCV7JikJyxcbiAgICBtb3JuaW5nOiAn7JWE7LmoJyxcbiAgICBhZnRlcm5vb246ICfsmKTtm4QnLFxuICAgIGV2ZW5pbmc6ICfsoIDrhYEnLFxuICAgIG5pZ2h0OiAn67CkJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn7Jik7KCEJyxcbiAgICBwbTogJ+yYpO2bhCcsXG4gICAgbWlkbmlnaHQ6ICfsnpDsoJUnLFxuICAgIG5vb246ICfsoJXsmKQnLFxuICAgIG1vcm5pbmc6ICfslYTsuagnLFxuICAgIGFmdGVybm9vbjogJ+yYpO2bhCcsXG4gICAgZXZlbmluZzogJ+yggOuFgScsXG4gICAgbmlnaHQ6ICfrsKQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfsmKTsoIQnLFxuICAgIHBtOiAn7Jik7ZuEJyxcbiAgICBtaWRuaWdodDogJ+yekOyglScsXG4gICAgbm9vbjogJ+ygleyYpCcsXG4gICAgbW9ybmluZzogJ+yVhOy5qCcsXG4gICAgYWZ0ZXJub29uOiAn7Jik7ZuEJyxcbiAgICBldmVuaW5nOiAn7KCA64WBJyxcbiAgICBuaWdodDogJ+uwpCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn7Jik7KCEJyxcbiAgICBwbTogJ+yYpO2bhCcsXG4gICAgbWlkbmlnaHQ6ICfsnpDsoJUnLFxuICAgIG5vb246ICfsoJXsmKQnLFxuICAgIG1vcm5pbmc6ICfslYTsuagnLFxuICAgIGFmdGVybm9vbjogJ+yYpO2bhCcsXG4gICAgZXZlbmluZzogJ+yggOuFgScsXG4gICAgbmlnaHQ6ICfrsKQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0KTtcbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIFN0cmluZyhudW1iZXIpO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG51bWJlciArICfsnbwnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVtYmVyICsgJ+uyiOynuCc7XG4gIH1cbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9