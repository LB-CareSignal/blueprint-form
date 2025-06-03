(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-tarask-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/be-tarask/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/be-tarask/_lib/match/index.js ***!
  \********************************************************************/
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
var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((да )?н\.?\s?э\.?)/i,
  abbreviated: /^((да )?н\.?\s?э\.?)/i,
  wide: /^(да нашай эры|нашай эры|наша эра)/i
};
var parseEraPatterns = {
  any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыі]?)? кв.?/i,
  wide: /^[1234](-?[ыі]?)? квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[слкмчжв]/i,
  abbreviated: /^(студз|лют|сак|крас|тр(ав)?|чэрв|ліп|жн|вер|кастр|ліст|сьнеж)\.?/i,
  wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|тра(вень|ўня)|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|сьнеж(ань|ня))/i
};
var parseMonthPatterns = {
  narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i],
  any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^тр/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i]
};
var matchDayPatterns = {
  narrow: /^[нпасч]/i,
  short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,
  abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцьв|чаць|птн|пят|суб).?/i,
  wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацьв(ер|ярга)|пятніц[аы]|субот[аы])/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^поўн/i,
    noon: /^поўд/i,
    morning: /^р/i,
    afternoon: /^д[зн]/i,
    evening: /^в/i,
    night: /^н/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlLXRhcmFzay9fbGliL21hdGNoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFxQztBQUNqRixxQ0FBcUMsbUJBQU8sQ0FBQyxvSEFBNEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1iZS10YXJhc2stX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSgtPyjQtXzRj3zQs9CwfNGWfNGLfNCw0LV80LDRj3zRj9GPfNGI0Yt80LPRlnzRhtGWfNGC0Yt80LzRiykpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oKNC00LAgKT/QvVxcLj9cXHM/0Y1cXC4/KS9pLFxuICBhYmJyZXZpYXRlZDogL14oKNC00LAgKT/QvVxcLj9cXHM/0Y1cXC4/KS9pLFxuICB3aWRlOiAvXijQtNCwINC90LDRiNCw0Lkg0Y3RgNGLfNC90LDRiNCw0Lkg0Y3RgNGLfNC90LDRiNCwINGN0YDQsCkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtC0L2ksIC9e0L0vaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eWzEyMzRdKC0/W9GL0ZZdPyk/INC60LIuPy9pLFxuICB3aWRlOiAvXlsxMjM0XSgtP1vRi9GWXT8pPyDQutCy0LDRgNGC0LDQuy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b0YHQu9C60LzRh9C20LJdL2ksXG4gIGFiYnJldmlhdGVkOiAvXijRgdGC0YPQtNC3fNC70Y7RgnzRgdCw0Lp80LrRgNCw0YF80YLRgCjQsNCyKT980YfRjdGA0LJ80LvRltC/fNC20L180LLQtdGAfNC60LDRgdGC0YB80LvRltGB0YJ80YHRjNC90LXQtilcXC4/L2ksXG4gIHdpZGU6IC9eKNGB0YLRg9C00LfQtdC9W9GM0Y9dfNC70Y7RgijRi3zQsNCz0LApfNGB0LDQutCw0LLRltC60LA/fNC60YDQsNGB0LDQstGW0LrQsD980YLRgNCwKNCy0LXQvdGMfNGe0L3Rjyl80YfRjdGA0LLQtdC9W9GM0Y9dfNC70ZbQv9C10L1b0YzRj1180LbQvdGWKNCy0LXQvdGMfNGe0L3Rjyl80LLQtdGA0LDRgSjQtdC90Yx80L3Rjyl80LrQsNGB0YLRgNGL0YfQvdGW0LrQsD980LvRltGB0YLQsNC/0LDQtNCwP3zRgdGM0L3QtdC2KNCw0L3RjHzQvdGPKSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e0YEvaSwgL17Quy9pLCAvXtGBL2ksIC9e0LovaSwgL17Rgi9pLCAvXtGHL2ksIC9e0LsvaSwgL17Qti9pLCAvXtCyL2ksIC9e0LovaSwgL17Quy9pLCAvXtGBL2ldLFxuICBhbnk6IFsvXtGB0YIvaSwgL17Qu9GOL2ksIC9e0YHQsC9pLCAvXtC60YAvaSwgL17RgtGAL2ksIC9e0YcvaSwgL17Qu9GW0L8vaSwgL17Qti9pLCAvXtCyL2ksIC9e0LrQsC9pLCAvXtC70ZbRgS9pLCAvXtGB0L0vaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlvQvdC/0LDRgdGHXS9pLFxuICBzaG9ydDogL14o0L3QtHzQvdGPfNC/0L180L/QsHzQsNGefNCw0YJ80YHRgHzRgdC1fNGH0YZ80YfQsHzQv9GCfNC/0Y980YHQsXzRgdGDKVxcLj8vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNC90Y/QtNC3P3zQvdC00Ld80L/QvdC0fNC/0LDQvXzQsNGe0YJ80YHRgNC0fNGB0LXRgHzRh9GG0YzQsnzRh9Cw0YbRjHzQv9GC0L180L/Rj9GCfNGB0YPQsSkuPy9pLFxuICB3aWRlOiAvXijQvdGP0LTQt9C10Ltb0Y/Rll180L/QsNC90Y/QtNC30LXQuyjQsNC6fNC60LApfNCw0Z7RgtC+0YAo0LDQunzQutCwKXzRgdC10YDQsNC0W9Cw0YtdfNGH0LDRhtGM0LIo0LXRgHzRj9GA0LPQsCl80L/Rj9GC0L3RltGGW9Cw0YtdfNGB0YPQsdC+0YJb0LDRi10pL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17QvS9pLCAvXtC/L2ksIC9e0LAvaSwgL17RgS9pLCAvXtGHL2ksIC9e0L8vaSwgL17RgS9pXSxcbiAgYW55OiBbL17QvS9pLCAvXtC/W9Cw0L1dL2ksIC9e0LAvaSwgL17RgVvQtdGAXS9pLCAvXtGHL2ksIC9e0L9b0Y/Rgl0vaSwgL17RgVvRg9CxXS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKFvQtNC/XdC/fNC/0L7RntC9XFwuP3zQv9C+0Z7QtFxcLj980YDQsNC9XFwuP3zQtNC30LXQvdGMfNC00L3Rj3zQstC10YdcXC4/fNC90L7Rh9GLPykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKFvQtNC/XdC/fNC/0L7RntC9XFwuP3zQv9C+0Z7QtFxcLj980YDQsNC9XFwuP3zQtNC30LXQvdGMfNC00L3Rj3zQstC10YdcXC4/fNC90L7Rh9GLPykvaSxcbiAgd2lkZTogL14oW9C00L9d0L980L/QvtGe0L3QsNGHfNC/0L7RntC00LfQtdC90Yx80YDQsNC90ZbRhlvQsNGLXXzQtNC30LXQvdGMfNC00L3Rj3zQstC10YfQsNGA0LA/fNC90L7Rh9GLPykvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL17QtNC/L2ksXG4gICAgcG06IC9e0L/Qvy9pLFxuICAgIG1pZG5pZ2h0OiAvXtC/0L7RntC9L2ksXG4gICAgbm9vbjogL17Qv9C+0Z7QtC9pLFxuICAgIG1vcm5pbmc6IC9e0YAvaSxcbiAgICBhZnRlcm5vb246IC9e0LRb0LfQvV0vaSxcbiAgICBldmVuaW5nOiAvXtCyL2ksXG4gICAgbmlnaHQ6IC9e0L0vaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=