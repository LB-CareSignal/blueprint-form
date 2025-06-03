(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-kk-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/kk/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/kk/_lib/match/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(-?(ші|шы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((б )?з\.?\s?д\.?)/i,
  abbreviated: /^((б )?з\.?\s?д\.?)/i,
  wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
};
var parseEraPatterns = {
  any: [/^б/i, /^з/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?ші)? тоқ.?/i,
  wide: /^[1234](-?ші)? тоқсан/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
  abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
};
var parseMonthPatterns = {
  narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i],
  abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i],
  any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i]
};
var matchDayPatterns = {
  narrow: /^(ж|д|с|с|б|ж|с)/i,
  short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
  wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
};
var parseDayPatterns = {
  narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
  short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
  any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ТД/i,
    pm: /^ТК/i,
    midnight: /^түн орта/i,
    noon: /^күндіз/i,
    morning: /таң/i,
    afternoon: /түс/i,
    evening: /кеш/i,
    night: /түн/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2trL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta2stX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSgtPyjRiNGWfNGI0YspKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKCjQsSApP9C3XFwuP1xccz/QtFxcLj8pL2ksXG4gIGFiYnJldmlhdGVkOiAvXigo0LEgKT/Qt1xcLj9cXHM/0LRcXC4/KS9pLFxuICB3aWRlOiAvXijQsdGW0LfQtNGW0qMg0LfQsNC80LDQvdGL0LzRi9C30pPQsCDQtNC10LnRltC9fNCx0ZbQt9C00ZbSoyDQt9Cw0LzQsNC90YvQvNGL0Ld80LHRltC30LTRltKjINC30LDQvNCw0L3Ri9C80YvQt9C00LDQvSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtCxL2ksIC9e0LcvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eWzEyMzRdKC0/0YjRlik/INGC0L7Smy4/L2ksXG4gIHdpZGU6IC9eWzEyMzRdKC0/0YjRlik/INGC0L7Sm9GB0LDQvS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o0pt80LB80L180YF80Lx80LzQsNGDfNGIfNGCfNKb0YvRgHzSm9Cw0Ld80pvQsNGAfNC2KS9pLFxuICBhYmJyZXZpYXRlZDogL14o0pvQsNKjfNCw0pvQv3zQvdCw0YN80YHTmdGDfNC80LDQvHzQvNCw0YN80YjRltC7fNGC0LDQvHzSm9GL0YB80pvQsNC3fNKb0LDRgHzQttC10LspL2ksXG4gIHdpZGU6IC9eKNKb0LDSo9GC0LDRgHzQsNKb0L/QsNC9fNC90LDRg9GA0YvQt3zRgdOZ0YPRltGAfNC80LDQvNGL0YB80LzQsNGD0YHRi9C8fNGI0ZbQu9C00LV80YLQsNC80YvQt3zSm9GL0YDQutKv0LnQtdC6fNKb0LDQt9Cw0L180pvQsNGA0LDRiNCwfNC20LXQu9GC0L7Sm9GB0LDQvSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e0psvaSwgL17QsC9pLCAvXtC9L2ksIC9e0YEvaSwgL17QvC9pLCAvXtC8L2ksIC9e0YgvaSwgL17Rgi9pLCAvXtKbL2ksIC9e0psvaSwgL17Smy9pLCAvXtC2L2ldLFxuICBhYmJyZXZpYXRlZDogWy9e0pvQsNKjL2ksIC9e0LDSm9C/L2ksIC9e0L3QsNGDL2ksIC9e0YHTmdGDL2ksIC9e0LzQsNC8L2ksIC9e0LzQsNGDL2ksIC9e0YjRltC7L2ksIC9e0YLQsNC8L2ksIC9e0pvRi9GAL2ksIC9e0pvQsNC3L2ksIC9e0pvQsNGAL2ksIC9e0LbQtdC7L2ldLFxuICBhbnk6IFsvXtKbL2ksIC9e0LAvaSwgL17QvS9pLCAvXtGBL2ksIC9e0LwvaSwgL17QvC9pLCAvXtGIL2ksIC9e0YIvaSwgL17Smy9pLCAvXtKbL2ksIC9e0psvaSwgL17Qti9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKNC2fNC0fNGBfNGBfNCxfNC2fNGBKS9pLFxuICBzaG9ydDogL14o0LbRgXzQtNGBfNGB0YF80YHRgHzQsdGBfNC20Lx80YHQsSkvaSxcbiAgd2lkZTogL14o0LbQtdC60YHQtdC90LHRlnzQtNKv0LnRgdC10L3QsdGWfNGB0LXQudGB0LXQvdCx0ZZ80YHTmdGA0YHQtdC90LHRlnzQsdC10LnRgdC10L3QsdGWfNC20rHQvNCwfNGB0LXQvdCx0ZYpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17Qti9pLCAvXtC0L2ksIC9e0YEvaSwgL17RgS9pLCAvXtCxL2ksIC9e0LYvaSwgL17RgS9pXSxcbiAgc2hvcnQ6IFsvXtC20YEvaSwgL17QtNGBL2ksIC9e0YHRgS9pLCAvXtGB0YAvaSwgL17QsdGBL2ksIC9e0LbQvC9pLCAvXtGB0LEvaV0sXG4gIGFueTogWy9e0LZb0LXQul0vaSwgL17QtFvSr9C5XS9pLCAvXtGBZVvQuV0vaSwgL17RgdOZW9GAXS9pLCAvXtCxW9C10LldL2ksIC9e0LZb0rHQvF0vaSwgL17RgdC1W9C9XS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9e0KJcXC4/XFxzP1vQlNCaXVxcLj980YLSr9C9INC+0YDRgtCw0YHRi9C90LTQsHwoKNGC0q/RgdGC0LV80YLQsNKj0LXRgNGC0LXSo3zRgtCw0qPQtNCwfNGC0LDSo9C10YDRgtC10qN80YLQsNKj0LzQtdC9fNGC0LDSo3zQutKv0L3QtNGW0Ld80LrSr9C9fNC60LXRiNGC0LV80LrQtdGIfNGC0q/QvdC00LV80YLSr9C9KVxcLj8pL2ksXG4gIHdpZGU6IC9e0KJcXC4/XFxzP1vQlNCaXVxcLj980YLSr9C9INC+0YDRgtCw0YHRi9C90LTQsHwoKNGC0q/RgdGC0LV80YLQsNKj0LXRgNGC0LXSo3zRgtCw0qPQtNCwfNGC0LDSo9C10YDRgtC10qN80YLQsNKj0LzQtdC9fNGC0LDSo3zQutKv0L3QtNGW0Ld80LrSr9C9fNC60LXRiNGC0LV80LrQtdGIfNGC0q/QvdC00LV80YLSr9C9KVxcLj8pL2ksXG4gIGFueTogL17QolxcLj9cXHM/W9CU0JpdXFwuP3zRgtKv0L0g0L7RgNGC0LDRgdGL0L3QtNCwfCgo0YLSr9GB0YLQtXzRgtCw0qPQtdGA0YLQtdKjfNGC0LDSo9C00LB80YLQsNKj0LXRgNGC0LXSo3zRgtCw0qPQvNC10L180YLQsNKjfNC60q/QvdC00ZbQt3zQutKv0L180LrQtdGI0YLQtXzQutC10Yh80YLSr9C90LTQtXzRgtKv0L0pXFwuPykvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL17QotCUL2ksXG4gICAgcG06IC9e0KLQmi9pLFxuICAgIG1pZG5pZ2h0OiAvXtGC0q/QvSDQvtGA0YLQsC9pLFxuICAgIG5vb246IC9e0LrSr9C90LTRltC3L2ksXG4gICAgbW9ybmluZzogL9GC0LDSoy9pLFxuICAgIGFmdGVybm9vbjogL9GC0q/RgS9pLFxuICAgIGV2ZW5pbmc6IC/QutC10YgvaSxcbiAgICBuaWdodDogL9GC0q/QvS9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==