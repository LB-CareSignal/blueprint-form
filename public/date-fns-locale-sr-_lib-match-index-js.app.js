(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/sr/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(пр\.н\.е\.|АД)/i,
  abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
  wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i
};
var parseEraPatterns = {
  any: [/^пр/i, /^(по|нова)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?кв\.?/i,
  wide: /^[1234]\. квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
  wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i
};
var parseMonthPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
  narrow: /^[пусчн]/i,
  short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i
};
var parseDayPatterns = {
  narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^п/i, /^с/i, /^н/i],
  any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i]
};
var matchDayPeriodPatterns = {
  any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^поно/i,
    noon: /^под/i,
    morning: /ујутру/i,
    afternoon: /(после\s|по)+подне/i,
    evening: /(увече)/i,
    night: /(ноћу)/i
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
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc3ItX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKVxcLi9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o0L/RgFxcLtC9XFwu0LVcXC580JDQlCkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNC/0YBcXC5cXHM/0KXRgFxcLnzQv9C+XFwuXFxzP9Cl0YBcXC4pL2ksXG4gIHdpZGU6IC9eKNCf0YDQtSDQpdGA0LjRgdGC0LB80L/RgNC1INC90L7QstC1INC10YDQtXzQn9C+0YHQu9C1INCl0YDQuNGB0YLQsHzQvdC+0LLQsCDQtdGA0LApL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL17Qv9GAL2ksIC9eKNC/0L580L3QvtCy0LApL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXlsxMjM0XVxcLlxccz/QutCyXFwuPy9pLFxuICB3aWRlOiAvXlsxMjM0XVxcLiDQutCy0LDRgNGC0LDQuy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oMTB8MTF8MTJ8WzEyMzQ1Njc4OV0pXFwuL2ksXG4gIGFiYnJldmlhdGVkOiAvXijRmNCw0L180YTQtdCxfNC80LDRgHzQsNC/0YB80LzQsNGYfNGY0YPQvXzRmNGD0Lt80LDQstCzfNGB0LXQv3zQvtC60YJ80L3QvtCyfNC00LXRhikvaSxcbiAgd2lkZTogL14oKNGY0LDQvdGD0LDRgHzRmNCw0L3Rg9Cw0YDQsCl8KNGE0LXQsdGA0YPQsNGAfNGE0LXQsdGA0YPQsNGA0LApfCjQvNCw0YDRgnzQvNCw0YDRgtCwKXwo0LDQv9GA0LjQu3zQsNC/0YDQuNC70LApfCjQvNGY0LB80LzQsNGY0LApfCjRmNGD0L180ZjRg9C90LApfCjRmNGD0Lt80ZjRg9C70LApfCjQsNCy0LPRg9GB0YJ80LDQstCz0YPRgdGC0LApfCjRgdC10L/RgtC10LzQsdCw0YB80YHQtdC/0YLQtdC80LHRgNCwKXwo0L7QutGC0L7QsdCw0YB80L7QutGC0L7QsdGA0LApfCjQvdC+0LLQtdC80LHQsNGAfNC90L7QstC10LzQsdGA0LApfCjQtNC10YbQtdC80LHQsNGAfNC00LXRhtC10LzQsdGA0LApKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL14xL2ksIC9eMi9pLCAvXjMvaSwgL140L2ksIC9eNS9pLCAvXjYvaSwgL143L2ksIC9eOC9pLCAvXjkvaSwgL14xMC9pLCAvXjExL2ksIC9eMTIvaV0sXG4gIGFueTogWy9e0ZjQsC9pLCAvXtGEL2ksIC9e0LzQsNGAL2ksIC9e0LDQvy9pLCAvXtC80LDRmC9pLCAvXtGY0YPQvS9pLCAvXtGY0YPQuy9pLCAvXtCw0LLQsy9pLCAvXtGBL2ksIC9e0L4vaSwgL17QvS9pLCAvXtC0L2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b0L/Rg9GB0YfQvV0vaSxcbiAgc2hvcnQ6IC9eKNC90LXQtHzQv9C+0L180YPRgtC+fNGB0YDQtXzRh9C10YJ80L/QtdGCfNGB0YPQsSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNC90LXQtHzQv9C+0L180YPRgtC+fNGB0YDQtXzRh9C10YJ80L/QtdGCfNGB0YPQsSkvaSxcbiAgd2lkZTogL14o0L3QtdC00LXRmdCwfNC/0L7QvdC10LTQtdGZ0LDQunzRg9GC0L7RgNCw0Lp80YHRgNC10LTQsHzRh9C10YLQstGA0YLQsNC6fNC/0LXRgtCw0Lp80YHRg9Cx0L7RgtCwKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e0L8vaSwgL17Rgy9pLCAvXtGBL2ksIC9e0YcvaSwgL17Qvy9pLCAvXtGBL2ksIC9e0L0vaV0sXG4gIGFueTogWy9e0L3QtdC0L2ksIC9e0L/QvtC9L2ksIC9e0YPRgtC+L2ksIC9e0YHRgNC1L2ksIC9e0YfQtdGCL2ksIC9e0L/QtdGCL2ksIC9e0YHRg9CxL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueTogL14o0LDQvHzQv9C8fNC/0L7QvdC+0Zt8KNC/0L4pP9C/0L7QtNC90LV80YPQstC10YfQtXzQvdC+0ZvRg3zQv9C+0YHQu9C1INC/0L7QtNC90LV80YPRmNGD0YLRgNGDKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9e0L/QvtC90L4vaSxcbiAgICBub29uOiAvXtC/0L7QtC9pLFxuICAgIG1vcm5pbmc6IC/Rg9GY0YPRgtGA0YMvaSxcbiAgICBhZnRlcm5vb246IC8o0L/QvtGB0LvQtVxcc3zQv9C+KSvQv9C+0LTQvdC1L2ksXG4gICAgZXZlbmluZzogLyjRg9Cy0LXRh9C1KS9pLFxuICAgIG5pZ2h0OiAvKNC90L7Rm9GDKS9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9