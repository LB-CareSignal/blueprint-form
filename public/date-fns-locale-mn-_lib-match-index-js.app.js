(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mn-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/mn/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(нтө|нт)/i,
  abbreviated: /^(нтө|нт)/i,
  wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i
};
var parseEraPatterns = {
  any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]
};
var matchQuarterPatterns = {
  narrow: /^(iv|iii|ii|i)/i,
  abbreviated: /^(iv|iii|ii|i) улирал/i,
  wide: /^[1-4]-р улирал/i
};
var parseQuarterPatterns = {
  any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i]
};
var matchMonthPatterns = {
  narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
  abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
  wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i
};
var parseMonthPatterns = {
  narrow: [/^i$/i, /^ii$/i, /^iii$/i, /^iv$/i, /^v$/i, /^vi$/i, /^vii$/i, /^viii$/i, /^ix$/i, /^x$/i, /^xi$/i, /^xii$/i],
  any: [/^(1|нэгдүгээр)/i, /^(2|хоёрдугаар)/i, /^(3|гуравдугаар)/i, /^(4|дөрөвдүгээр)/i, /^(5|тавдугаар)/i, /^(6|зургаадугаар)/i, /^(7|долоодугаар)/i, /^(8|наймдугаар)/i, /^(9|есдүгээр)/i, /^(10|аравдугаар)/i, /^(11|арван нэгдүгээр)/i, /^(12|арван хоёрдугаар)/i]
};
var matchDayPatterns = {
  narrow: /^[ндмлпбб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
  any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ү\.ө\./i,
    pm: /^ү\.х\./i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дунд/i,
    morning: /өглөө/i,
    afternoon: /өдөр/i,
    evening: /орой/i,
    night: /шөнө/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21uL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1tbi1fbGliLW1hdGNoLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijQvdGC06l80L3RgikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNC90YLTqXzQvdGCKS9pLFxuICB3aWRlOiAvXijQvdC40LnRgtC40LnQvSDRgtC+0L7Qu9C70YvQvSDTqdC80L3TqXzQvdC40LnRgtC40LnQvSDRgtC+0L7Qu9C70YvQvSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXijQvdGC06l80L3QuNC50YLQuNC50L0g0YLQvtC+0LvQu9GL0L0g06nQvNC906kpL2ksIC9eKNC90YJ80L3QuNC50YLQuNC50L0g0YLQvtC+0LvQu9GL0L0pL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGl2fGlpaXxpaXxpKS9pLFxuICBhYmJyZXZpYXRlZDogL14oaXZ8aWlpfGlpfGkpINGD0LvQuNGA0LDQuy9pLFxuICB3aWRlOiAvXlsxLTRdLdGAINGD0LvQuNGA0LDQuy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvXihpKFxcc3wkKXwxKS9pLCAvXihpaShcXHN8JCl8MikvaSwgL14oaWlpKFxcc3wkKXwzKS9pLCAvXihpdihcXHN8JCl8NCkvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHhpaXx4aXx4fGl4fHZpaWl8dmlpfHZpfHZ8aXZ8aWlpfGlpfGkpL2ksXG4gIGFiYnJldmlhdGVkOiAvXigxLdGAINGB0LDRgHwyLdGAINGB0LDRgHwzLdGAINGB0LDRgHw0LdGAINGB0LDRgHw1LdGAINGB0LDRgHw2LdGAINGB0LDRgHw3LdGAINGB0LDRgHw4LdGAINGB0LDRgHw5LdGAINGB0LDRgHwxMC3RgCDRgdCw0YB8MTEt0YAg0YHQsNGAfDEyLdGAINGB0LDRgCkvaSxcbiAgd2lkZTogL14o0L3RjdCz0LTSr9Cz0Y3RjdGAINGB0LDRgHzRhdC+0ZHRgNC00YPQs9Cw0LDRgCDRgdCw0YB80LPRg9GA0LDQstC00YPQs9Cw0LDRgCDRgdCw0YB80LTTqdGA06nQstC00q/Qs9GN0Y3RgCDRgdCw0YB80YLQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgHzQt9GD0YDQs9Cw0LDQtNGD0LPQsNCw0YAg0YHQsNGAfNC00L7Qu9C+0L7QtNGD0LPQsNCw0YAg0YHQsNGAfNC90LDQudC80LTRg9Cz0LDQsNGAINGB0LDRgHzQtdGB0LTSr9Cz0Y3RjdGAINGB0LDRgHzQsNGA0LDQstC00YPQs9Cw0LDRgCDRgdCw0YB80LDRgNCy0LDQvSDQvdGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAfNCw0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15pJC9pLCAvXmlpJC9pLCAvXmlpaSQvaSwgL15pdiQvaSwgL152JC9pLCAvXnZpJC9pLCAvXnZpaSQvaSwgL152aWlpJC9pLCAvXml4JC9pLCAvXngkL2ksIC9eeGkkL2ksIC9eeGlpJC9pXSxcbiAgYW55OiBbL14oMXzQvdGN0LPQtNKv0LPRjdGN0YApL2ksIC9eKDJ80YXQvtGR0YDQtNGD0LPQsNCw0YApL2ksIC9eKDN80LPRg9GA0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oNHzQtNOp0YDTqdCy0LTSr9Cz0Y3RjdGAKS9pLCAvXig1fNGC0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oNnzQt9GD0YDQs9Cw0LDQtNGD0LPQsNCw0YApL2ksIC9eKDd80LTQvtC70L7QvtC00YPQs9Cw0LDRgCkvaSwgL14oOHzQvdCw0LnQvNC00YPQs9Cw0LDRgCkvaSwgL14oOXzQtdGB0LTSr9Cz0Y3RjdGAKS9pLCAvXigxMHzQsNGA0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oMTF80LDRgNCy0LDQvSDQvdGN0LPQtNKv0LPRjdGN0YApL2ksIC9eKDEyfNCw0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YApL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b0L3QtNC80LvQv9Cx0LFdL2ksXG4gIHNob3J0OiAvXijQvdGPfNC00LB80LzRj3zQu9GFfNC/0q980LHQsHzQsdGPKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L3Rj9C8fNC00LDQsnzQvNGP0LN80LvRhdCwfNC/0q/RgHzQsdCw0LB80LHRj9C8KS9pLFxuICB3aWRlOiAvXijQvdGP0Lx80LTQsNCy0LDQsHzQvNGP0LPQvNCw0YB80LvRhdCw0LPQstCwfNC/0q/RgNGN0LJ80LHQsNCw0YHQsNC9fNCx0Y/QvNCx0LApL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17QvS9pLCAvXtC0L2ksIC9e0LwvaSwgL17Quy9pLCAvXtC/L2ksIC9e0LEvaSwgL17QsS9pXSxcbiAgYW55OiBbL17QvdGPL2ksIC9e0LTQsC9pLCAvXtC80Y8vaSwgL17Qu9GFL2ksIC9e0L/Sry9pLCAvXtCx0LAvaSwgL17QsdGPL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o0q9cXC7TqVxcLnzSr1xcLtGFXFwufNGI06nQvdOpINC00YPQvdC0fNKv0LQg0LTRg9C90LR806nQs9C706nTqXzTqdC006nRgHzQvtGA0L7QuXzRiNOp0L3TqSkvaSxcbiAgYW55OiAvXijSr1xcLtOpXFwufNKvXFwu0YVcXC580YjTqdC906kg0LTRg9C90LR80q/QtCDQtNGD0L3QtHzTqdCz0LvTqdOpfNOp0LTTqdGAfNC+0YDQvtC5fNGI06nQvdOpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXtKvXFwu06lcXC4vaSxcbiAgICBwbTogL17Sr1xcLtGFXFwuL2ksXG4gICAgbWlkbmlnaHQ6IC9e0YjTqdC906kg0LTRg9C90LQvaSxcbiAgICBub29uOiAvXtKv0LQg0LTRg9C90LQvaSxcbiAgICBtb3JuaW5nOiAv06nQs9C706nTqS9pLFxuICAgIGFmdGVybm9vbjogL9Op0LTTqdGAL2ksXG4gICAgZXZlbmluZzogL9C+0YDQvtC5L2ksXG4gICAgbmlnaHQ6IC/RiNOp0L3TqS9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9