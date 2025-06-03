(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gd-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/gd/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/localize/index.js ***!
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
  narrow: ['R', 'A'],
  abbreviated: ['RC', 'AD'],
  wide: ['ro Chrìosta', 'anno domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['C1', 'C2', 'C3', 'C4'],
  wide: ["a' chiad chairteal", 'an dàrna cairteal', 'an treas cairteal', 'an ceathramh cairteal']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['F', 'G', 'M', 'G', 'C', 'Ò', 'I', 'L', 'S', 'D', 'S', 'D'],
  abbreviated: ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
  wide: ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'C', 'A', 'H', 'S'],
  short: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
  abbreviated: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  wide: ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne']
};
var dayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'd';
      case 2:
        return number + 'na';
    }
  }
  if (rem100 === 12) {
    return number + 'na';
  }
  return number + 'mh';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2dkL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZ2QtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydSQycsICdBRCddLFxuICB3aWRlOiBbJ3JvIENocsOsb3N0YScsICdhbm5vIGRvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ0MxJywgJ0MyJywgJ0MzJywgJ0M0J10sXG4gIHdpZGU6IFtcImEnIGNoaWFkIGNoYWlydGVhbFwiLCAnYW4gZMOgcm5hIGNhaXJ0ZWFsJywgJ2FuIHRyZWFzIGNhaXJ0ZWFsJywgJ2FuIGNlYXRocmFtaCBjYWlydGVhbCddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydGJywgJ0cnLCAnTScsICdHJywgJ0MnLCAnw5InLCAnSScsICdMJywgJ1MnLCAnRCcsICdTJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnRmFvaScsICdHZWFyJywgJ03DoHJ0JywgJ0dpYmwnLCAnQ8OoaXQnLCAnw5JnbWgnLCAnSXVjaCcsICdMw7luJywgJ1N1bHQnLCAnRMOgbWgnLCAnU2FtaCcsICdEw7liaCddLFxuICB3aWRlOiBbJ0FtIEZhb2lsbGVhY2gnLCAnQW4gR2VhcnJhbicsICdBbSBNw6BydCcsICdBbiBHaWJsZWFuJywgJ0FuIEPDqGl0ZWFuJywgJ0FuIHQtw5JnbWhpb3MnLCAnQW4gdC1JdWNoYXInLCAnQW4gTMO5bmFzdGFsJywgJ0FuIHQtU3VsdGFpbicsICdBbiBEw6BtaGFpcicsICdBbiB0LVNhbWhhaW4nLCAnQW4gRMO5YmhsYWNoZCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0QnLCAnTCcsICdNJywgJ0MnLCAnQScsICdIJywgJ1MnXSxcbiAgc2hvcnQ6IFsnRMOyJywgJ0x1JywgJ03DoCcsICdDaScsICdBcicsICdIYScsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydEaWQnLCAnRGlsJywgJ0RpbScsICdEaWMnLCAnRGlhJywgJ0RpaCcsICdEaXMnXSxcbiAgd2lkZTogWydEaWTDsm1obmFpY2gnLCAnRGlsdWFpbicsICdEaW3DoGlydCcsICdEaWNpYWRhaW4nLCAnRGlhcmRhb2luJywgJ0RpaGFvaW5lJywgJ0Rpc2F0aGFpcm5lJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ20nLFxuICAgIHBtOiAnZicsXG4gICAgbWlkbmlnaHQ6ICdtLm8uJyxcbiAgICBub29uOiAnbS5sLicsXG4gICAgbW9ybmluZzogJ21hZGFpbm4nLFxuICAgIGFmdGVybm9vbjogJ2ZlYXNnYXInLFxuICAgIGV2ZW5pbmc6ICdmZWFzZ2FyJyxcbiAgICBuaWdodDogJ29pZGhjaGUnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdNLicsXG4gICAgcG06ICdGLicsXG4gICAgbWlkbmlnaHQ6ICdtZWFkaGFuIG9pZGhjaGUnLFxuICAgIG5vb246ICdtZWFkaGFuIGzDoCcsXG4gICAgbW9ybmluZzogJ21hZGFpbm4nLFxuICAgIGFmdGVybm9vbjogJ2ZlYXNnYXInLFxuICAgIGV2ZW5pbmc6ICdmZWFzZ2FyJyxcbiAgICBuaWdodDogJ29pZGhjaGUnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ20uJyxcbiAgICBwbTogJ2YuJyxcbiAgICBtaWRuaWdodDogJ21lYWRoYW4gb2lkaGNoZScsXG4gICAgbm9vbjogJ21lYWRoYW4gbMOgJyxcbiAgICBtb3JuaW5nOiAnbWFkYWlubicsXG4gICAgYWZ0ZXJub29uOiAnZmVhc2dhcicsXG4gICAgZXZlbmluZzogJ2ZlYXNnYXInLFxuICAgIG5pZ2h0OiAnb2lkaGNoZSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ20nLFxuICAgIHBtOiAnZicsXG4gICAgbWlkbmlnaHQ6ICdtLm8uJyxcbiAgICBub29uOiAnbS5sLicsXG4gICAgbW9ybmluZzogJ3NhIG1oYWRhaW5uJyxcbiAgICBhZnRlcm5vb246ICdmZWFzZ2FyJyxcbiAgICBldmVuaW5nOiAnZmVhc2dhcicsXG4gICAgbmlnaHQ6ICdhaXIgYW4gb2lkaGNoZSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ00uJyxcbiAgICBwbTogJ0YuJyxcbiAgICBtaWRuaWdodDogJ21lYWRoYW4gb2lkaGNoZScsXG4gICAgbm9vbjogJ21lYWRoYW4gbMOgJyxcbiAgICBtb3JuaW5nOiAnc2EgbWhhZGFpbm4nLFxuICAgIGFmdGVybm9vbjogJ2ZlYXNnYXInLFxuICAgIGV2ZW5pbmc6ICdmZWFzZ2FyJyxcbiAgICBuaWdodDogJ2FpciBhbiBvaWRoY2hlJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdtLicsXG4gICAgcG06ICdmLicsXG4gICAgbWlkbmlnaHQ6ICdtZWFkaGFuIG9pZGhjaGUnLFxuICAgIG5vb246ICdtZWFkaGFuIGzDoCcsXG4gICAgbW9ybmluZzogJ3NhIG1oYWRhaW5uJyxcbiAgICBhZnRlcm5vb246ICdmZWFzZ2FyJyxcbiAgICBldmVuaW5nOiAnZmVhc2dhcicsXG4gICAgbmlnaHQ6ICdhaXIgYW4gb2lkaGNoZSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlcikge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ2QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25hJztcbiAgICB9XG4gIH1cbiAgaWYgKHJlbTEwMCA9PT0gMTIpIHtcbiAgICByZXR1cm4gbnVtYmVyICsgJ25hJztcbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ21oJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9