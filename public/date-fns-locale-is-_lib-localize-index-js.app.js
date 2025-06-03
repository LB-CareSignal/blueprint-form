(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-is-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/is/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/localize/index.js ***!
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
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['fyrir Krist', 'eftir Krist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1F', '2F', '3F', '4F'],
  wide: ['1. fjórðungur', '2. fjórðungur', '3. fjórðungur', '4. fjórðungur']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'Á', 'S', 'Ó', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'sept.', 'okt.', 'nóv.', 'des.'],
  wide: ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember']
};
var dayValues = {
  narrow: ['S', 'M', 'Þ', 'M', 'F', 'F', 'L'],
  short: ['Su', 'Má', 'Þr', 'Mi', 'Fi', 'Fö', 'La'],
  abbreviated: ['sun.', 'mán.', 'þri.', 'mið.', 'fim.', 'fös.', 'lau.'],
  wide: ['sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur']
};
var dayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lzL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaXMtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2YuS3IuJywgJ2UuS3IuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2YuS3IuJywgJ2UuS3IuJ10sXG4gIHdpZGU6IFsnZnlyaXIgS3Jpc3QnLCAnZWZ0aXIgS3Jpc3QnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxRicsICcyRicsICczRicsICc0RiddLFxuICB3aWRlOiBbJzEuIGZqw7Nyw7B1bmd1cicsICcyLiBmasOzcsOwdW5ndXInLCAnMy4gZmrDs3LDsHVuZ3VyJywgJzQuIGZqw7Nyw7B1bmd1ciddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICfDgScsICdTJywgJ8OTJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydqYW4uJywgJ2ZlYi4nLCAnbWFycycsICdhcHLDrWwnLCAnbWHDrScsICdqw7puw60nLCAnasO6bMOtJywgJ8OhZ8O6c3QnLCAnc2VwdC4nLCAnb2t0LicsICduw7N2LicsICdkZXMuJ10sXG4gIHdpZGU6IFsnamFuw7phcicsICdmZWJyw7phcicsICdtYXJzJywgJ2FwcsOtbCcsICdtYcOtJywgJ2rDum7DrScsICdqw7psw60nLCAnw6Fnw7pzdCcsICdzZXB0ZW1iZXInLCAnb2t0w7NiZXInLCAnbsOzdmVtYmVyJywgJ2Rlc2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ8OeJywgJ00nLCAnRicsICdGJywgJ0wnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTcOhJywgJ8OecicsICdNaScsICdGaScsICdGw7YnLCAnTGEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3VuLicsICdtw6FuLicsICfDvnJpLicsICdtacOwLicsICdmaW0uJywgJ2bDtnMuJywgJ2xhdS4nXSxcbiAgd2lkZTogWydzdW5udWRhZ3VyJywgJ23DoW51ZGFndXInLCAnw75yacOwanVkYWd1cicsICdtacOwdmlrdWRhZ3VyJywgJ2ZpbW10dWRhZ3VyJywgJ2bDtnN0dWRhZ3VyJywgJ2xhdWdhcmRhZ3VyJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2YnLFxuICAgIHBtOiAnZScsXG4gICAgbWlkbmlnaHQ6ICdtacOwbsOmdHRpJyxcbiAgICBub29uOiAnaMOhZGVnaScsXG4gICAgbW9ybmluZzogJ21vcmd1bm4nLFxuICAgIGFmdGVybm9vbjogJ3PDrcOwZGVnaScsXG4gICAgZXZlbmluZzogJ2t2w7ZsZCcsXG4gICAgbmlnaHQ6ICduw7N0dCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2YuaC4nLFxuICAgIHBtOiAnZS5oLicsXG4gICAgbWlkbmlnaHQ6ICdtacOwbsOmdHRpJyxcbiAgICBub29uOiAnaMOhZGVnaScsXG4gICAgbW9ybmluZzogJ21vcmd1bm4nLFxuICAgIGFmdGVybm9vbjogJ3PDrcOwZGVnaScsXG4gICAgZXZlbmluZzogJ2t2w7ZsZCcsXG4gICAgbmlnaHQ6ICduw7N0dCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnZnlyaXIgaMOhZGVnaScsXG4gICAgcG06ICdlZnRpciBow6FkZWdpJyxcbiAgICBtaWRuaWdodDogJ21pw7Buw6Z0dGknLFxuICAgIG5vb246ICdow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnbW9yZ3VubicsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpJyxcbiAgICBldmVuaW5nOiAna3bDtmxkJyxcbiAgICBuaWdodDogJ27Ds3R0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnZicsXG4gICAgcG06ICdlJyxcbiAgICBtaWRuaWdodDogJ8OhIG1pw7Buw6Z0dGknLFxuICAgIG5vb246ICfDoSBow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnYcOwIG1vcmduaScsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpcycsXG4gICAgZXZlbmluZzogJ3VtIGt2w7ZsZCcsXG4gICAgbmlnaHQ6ICd1bSBuw7N0dCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2YuaC4nLFxuICAgIHBtOiAnZS5oLicsXG4gICAgbWlkbmlnaHQ6ICfDoSBtacOwbsOmdHRpJyxcbiAgICBub29uOiAnw6EgaMOhZGVnaScsXG4gICAgbW9ybmluZzogJ2HDsCBtb3JnbmknLFxuICAgIGFmdGVybm9vbjogJ3PDrcOwZGVnaXMnLFxuICAgIGV2ZW5pbmc6ICd1bSBrdsO2bGQnLFxuICAgIG5pZ2h0OiAndW0gbsOzdHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2Z5cmlyIGjDoWRlZ2knLFxuICAgIHBtOiAnZWZ0aXIgaMOhZGVnaScsXG4gICAgbWlkbmlnaHQ6ICfDoSBtacOwbsOmdHRpJyxcbiAgICBub29uOiAnw6EgaMOhZGVnaScsXG4gICAgbW9ybmluZzogJ2HDsCBtb3JnbmknLFxuICAgIGFmdGVybm9vbjogJ3PDrcOwZGVnaXMnLFxuICAgIGV2ZW5pbmc6ICd1bSBrdsO2bGQnLFxuICAgIG5pZ2h0OiAndW0gbsOzdHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy4nO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=