(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-az-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/az/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/az/_lib/localize/index.js ***!
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
  narrow: ['e.ə', 'b.e'],
  abbreviated: ['e.ə', 'b.e'],
  wide: ['eramızdan əvvəl', 'bizim era']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1ci kvartal', '2ci kvartal', '3cü kvartal', '4cü kvartal']
};
var monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'İ', 'İ', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyun', 'İyul', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'],
  wide: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
};
var dayValues = {
  narrow: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'],
  short: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'],
  abbreviated: ['Baz', 'Baz.e', 'Çər.a', 'Çər', 'Cüm.a', 'Cüm', 'Şə'],
  wide: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə'
  }
};
var suffixes = {
  1: '-inci',
  5: '-inci',
  8: '-inci',
  70: '-inci',
  80: '-inci',
  2: '-nci',
  7: '-nci',
  20: '-nci',
  50: '-nci',
  3: '-üncü',
  4: '-üncü',
  100: '-üncü',
  6: '-ncı',
  9: '-uncu',
  10: '-uncu',
  30: '-uncu',
  60: '-ıncı',
  90: '-ıncı'
};
var getSuffix = function getSuffix(number) {
  if (number === 0) {
    // special case for zero
    return number + '-ıncı';
  }
  var a = number % 10;
  var b = number % 100 - a;
  var c = number >= 100 ? 100 : null;
  if (suffixes[a]) {
    return suffixes[a];
  } else if (suffixes[b]) {
    return suffixes[b];
  } else if (c !== null) {
    return suffixes[c];
  }
  return '';
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var suffix = getSuffix(number);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2F6L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hei1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnZS7JmScsICdiLmUnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZS7JmScsICdiLmUnXSxcbiAgd2lkZTogWydlcmFtxLF6ZGFuIMmZdnbJmWwnLCAnYml6aW0gZXJhJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSzEnLCAnSzInLCAnSzMnLCAnSzQnXSxcbiAgd2lkZTogWycxY2kga3ZhcnRhbCcsICcyY2kga3ZhcnRhbCcsICczY8O8IGt2YXJ0YWwnLCAnNGPDvCBrdmFydGFsJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydZJywgJ0YnLCAnTScsICdBJywgJ00nLCAnxLAnLCAnxLAnLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1lhbicsICdGZXYnLCAnTWFyJywgJ0FwcicsICdNYXknLCAnxLB5dW4nLCAnxLB5dWwnLCAnQXZxJywgJ1NlbicsICdPa3QnLCAnTm95JywgJ0RlayddLFxuICB3aWRlOiBbJ1lhbnZhcicsICdGZXZyYWwnLCAnTWFydCcsICdBcHJlbCcsICdNYXknLCAnxLB5dW4nLCAnxLB5dWwnLCAnQXZxdXN0JywgJ1NlbnR5YWJyJywgJ09rdHlhYnInLCAnTm95YWJyJywgJ0Rla2FiciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0IuJywgJ0IuZScsICfDhy5hJywgJ8OHLicsICdDLmEnLCAnQy4nLCAnxZ4uJ10sXG4gIHNob3J0OiBbJ0IuJywgJ0IuZScsICfDhy5hJywgJ8OHLicsICdDLmEnLCAnQy4nLCAnxZ4uJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JheicsICdCYXouZScsICfDh8mZci5hJywgJ8OHyZlyJywgJ0PDvG0uYScsICdDw7xtJywgJ8WeyZknXSxcbiAgd2lkZTogWydCYXphcicsICdCYXphciBlcnTJmXNpJywgJ8OHyZlyxZ/JmW5iyZkgYXjFn2FtxLEnLCAnw4fJmXLFn8mZbmLJmScsICdDw7xtyZkgYXjFn2FtxLEnLCAnQ8O8bcmZJywgJ8WeyZluYsmZJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ2dlY8mZeWFyxLEnLFxuICAgIG5vb246ICdnw7xuJyxcbiAgICBtb3JuaW5nOiAnc8mZaMmZcicsXG4gICAgYWZ0ZXJub29uOiAnZ8O8bmTDvHonLFxuICAgIGV2ZW5pbmc6ICdheMWfYW0nLFxuICAgIG5pZ2h0OiAnZ2VjyZknXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdnZWPJmXlhcsSxJyxcbiAgICBub29uOiAnZ8O8bicsXG4gICAgbW9ybmluZzogJ3PJmWjJmXInLFxuICAgIGFmdGVybm9vbjogJ2fDvG5kw7x6JyxcbiAgICBldmVuaW5nOiAnYXjFn2FtJyxcbiAgICBuaWdodDogJ2dlY8mZJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnZ2VjyZl5YXLEsScsXG4gICAgbm9vbjogJ2fDvG4nLFxuICAgIG1vcm5pbmc6ICdzyZloyZlyJyxcbiAgICBhZnRlcm5vb246ICdnw7xuZMO8eicsXG4gICAgZXZlbmluZzogJ2F4xZ9hbScsXG4gICAgbmlnaHQ6ICdnZWPJmSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdnZWPJmXlhcsSxJyxcbiAgICBub29uOiAnZ8O8bicsXG4gICAgbW9ybmluZzogJ3PJmWjJmXInLFxuICAgIGFmdGVybm9vbjogJ2fDvG5kw7x6JyxcbiAgICBldmVuaW5nOiAnYXjFn2FtJyxcbiAgICBuaWdodDogJ2dlY8mZJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnZ2VjyZl5YXLEsScsXG4gICAgbm9vbjogJ2fDvG4nLFxuICAgIG1vcm5pbmc6ICdzyZloyZlyJyxcbiAgICBhZnRlcm5vb246ICdnw7xuZMO8eicsXG4gICAgZXZlbmluZzogJ2F4xZ9hbScsXG4gICAgbmlnaHQ6ICdnZWPJmSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ2dlY8mZeWFyxLEnLFxuICAgIG5vb246ICdnw7xuJyxcbiAgICBtb3JuaW5nOiAnc8mZaMmZcicsXG4gICAgYWZ0ZXJub29uOiAnZ8O8bmTDvHonLFxuICAgIGV2ZW5pbmc6ICdheMWfYW0nLFxuICAgIG5pZ2h0OiAnZ2VjyZknXG4gIH1cbn07XG52YXIgc3VmZml4ZXMgPSB7XG4gIDE6ICctaW5jaScsXG4gIDU6ICctaW5jaScsXG4gIDg6ICctaW5jaScsXG4gIDcwOiAnLWluY2knLFxuICA4MDogJy1pbmNpJyxcbiAgMjogJy1uY2knLFxuICA3OiAnLW5jaScsXG4gIDIwOiAnLW5jaScsXG4gIDUwOiAnLW5jaScsXG4gIDM6ICctw7xuY8O8JyxcbiAgNDogJy3DvG5jw7wnLFxuICAxMDA6ICctw7xuY8O8JyxcbiAgNjogJy1uY8SxJyxcbiAgOTogJy11bmN1JyxcbiAgMTA6ICctdW5jdScsXG4gIDMwOiAnLXVuY3UnLFxuICA2MDogJy3EsW5jxLEnLFxuICA5MDogJy3EsW5jxLEnXG59O1xudmFyIGdldFN1ZmZpeCA9IGZ1bmN0aW9uIGdldFN1ZmZpeChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xuICAgIHJldHVybiBudW1iZXIgKyAnLcSxbmPEsSc7XG4gIH1cbiAgdmFyIGEgPSBudW1iZXIgJSAxMDtcbiAgdmFyIGIgPSBudW1iZXIgJSAxMDAgLSBhO1xuICB2YXIgYyA9IG51bWJlciA+PSAxMDAgPyAxMDAgOiBudWxsO1xuICBpZiAoc3VmZml4ZXNbYV0pIHtcbiAgICByZXR1cm4gc3VmZml4ZXNbYV07XG4gIH0gZWxzZSBpZiAoc3VmZml4ZXNbYl0pIHtcbiAgICByZXR1cm4gc3VmZml4ZXNbYl07XG4gIH0gZWxzZSBpZiAoYyAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzdWZmaXhlc1tjXTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHN1ZmZpeCA9IGdldFN1ZmZpeChudW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgc3VmZml4O1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=