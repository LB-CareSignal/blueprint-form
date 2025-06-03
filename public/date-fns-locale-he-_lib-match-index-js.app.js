(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-he-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/he/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/he/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i;
var parseOrdinalNumberPattern = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i;
var matchEraPatterns = {
  narrow: /^ל(ספירה|פנה״ס)/i,
  abbreviated: /^ל(ספירה|פנה״ס)/i,
  wide: /^ל(פני ה)?ספירה/i
};
var parseEraPatterns = {
  any: [/^לפ/i, /^לס/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^רבעון [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^\d+/i,
  abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
  wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i
};
var parseMonthPatterns = {
  narrow: [/^1$/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ינ/i, /^פ/i, /^מר/i, /^אפ/i, /^מא/i, /^יונ/i, /^יול/i, /^אוג/i, /^ס/i, /^אוק/i, /^נ/i, /^ד/i]
};
var matchDayPatterns = {
  narrow: /^[אבגדהוש]׳/i,
  short: /^[אבגדהוש]׳/i,
  abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
  wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i
};
var parseDayPatterns = {
  abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i],
  wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i],
  any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i]
};
var matchDayPeriodPatterns = {
  any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^לפ/i,
    pm: /^אחה/i,
    midnight: /^ח/i,
    noon: /^צ/i,
    morning: /בוקר/i,
    afternoon: /בצ|אחר/i,
    evening: /ערב/i,
    night: /לילה/i
  }
};
var ordinalName = ['רא', 'שנ', 'של', 'רב', 'ח', 'שי', 'שב', 'שמ', 'ת', 'ע'];
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      var number = parseInt(value, 10);
      return isNaN(number) ? ordinalName.indexOf(value) + 1 : number;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hlL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaGUtX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrfCjXqNeQ16nXldeffNep16DXmXzXqdec15nXqdeZfNeo15HXmdei15l815fXnteZ16nXmXzXqdeZ16nXmXzXqdeR15nXoteZfNep157Xmdeg15l816rXqdeZ16LXmXzXotep15nXqNeZfNeo15DXqdeV16DXlHzXqdeg15nXmdeUfNep15zXmdep15nXqnzXqNeR15nXoteZ16p815fXnteZ16nXmdeqfNep15nXqdeZ16p816nXkdeZ16LXmdeqfNep157Xmdeg15nXqnzXqtep15nXoteZ16p816LXqdeZ16jXmdeqKSkvaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkK3zXqNeQfNep16B816nXnHzXqNeRfNeXfNep15l816nXkXzXqdeefNeqfNeiKS9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL17XnCjXodek15nXqNeUfNek16DXlNe016EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXtecKNeh16TXmdeo15R816TXoNeU17TXoSkvaSxcbiAgd2lkZTogL17XnCjXpNeg15kg15QpP9eh16TXmdeo15QvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtec16QvaSwgL17XnNehL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL17XqNeR16LXldefIFsxMjM0XS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15cXGQrL2ksXG4gIGFiYnJldmlhdGVkOiAvXijXmdeg15V816TXkdeofNee16jXpXzXkNek16h8157XkNeZfNeZ15XXoNeZfNeZ15XXnNeZfNeQ15XXknzXodek15h815DXldenfNeg15XXkXzXk9em154p17M/L2ksXG4gIHdpZGU6IC9eKNeZ16DXldeQ16h816TXkdeo15XXkNeofNee16jXpXzXkNek16jXmdecfNee15DXmXzXmdeV16DXmXzXmdeV15zXmXzXkNeV15LXldeh15h816HXpNeY157XkdeofNeQ15XXp9eY15XXkdeofNeg15XXkdee15HXqHzXk9em157XkdeoKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL14xJC9pLCAvXjIvaSwgL14zL2ksIC9eNC9pLCAvXjUvaSwgL142L2ksIC9eNy9pLCAvXjgvaSwgL145L2ksIC9eMTAvaSwgL14xMS9pLCAvXjEyL2ldLFxuICBhbnk6IFsvXteZ16AvaSwgL17XpC9pLCAvXtee16gvaSwgL17XkNekL2ksIC9e157XkC9pLCAvXteZ15XXoC9pLCAvXteZ15XXnC9pLCAvXteQ15XXki9pLCAvXtehL2ksIC9e15DXldenL2ksIC9e16AvaSwgL17Xky9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW9eQ15HXkteT15TXldepXdezL2ksXG4gIHNob3J0OiAvXlvXkNeR15LXk9eU15XXqV3Xsy9pLFxuICBhYmJyZXZpYXRlZDogL14o16nXkdeqfNeZ15XXnSAo15B815F815J815N815R815Up17MpL2ksXG4gIHdpZGU6IC9e15nXldedICjXqNeQ16nXldeffNep16DXmXzXqdec15nXqdeZfNeo15HXmdei15l815fXnteZ16nXmXzXqdeZ16nXmXzXqdeR16opL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgYWJicmV2aWF0ZWQ6IFsv15DXsyQvaSwgL9eR17MkL2ksIC/XktezJC9pLCAv15PXsyQvaSwgL9eU17MkL2ksIC/XldezJC9pLCAvXtepL2ldLFxuICB3aWRlOiBbL9efJC9pLCAv16DXmSQvaSwgL9ec15nXqdeZJC9pLCAv16LXmSQvaSwgL9ee15nXqdeZJC9pLCAv16nXmdep15kkL2ksIC/XqiQvaV0sXG4gIGFueTogWy9e15AvaSwgL17XkS9pLCAvXteSL2ksIC9e15MvaSwgL17XlC9pLCAvXteVL2ksIC9e16kvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiAvXijXkNeX16gg15R815EpPyjXl9em15XXqnzXpteU16jXmdeZ151815HXlden16h816LXqNeRfNec15nXnNeUfNeQ15fXlNe016Z815zXpNeg15TXtNemKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXtec16QvaSxcbiAgICBwbTogL17XkNeX15QvaSxcbiAgICBtaWRuaWdodDogL17Xly9pLFxuICAgIG5vb246IC9e16YvaSxcbiAgICBtb3JuaW5nOiAv15HXlden16gvaSxcbiAgICBhZnRlcm5vb246IC/XkdemfNeQ15fXqC9pLFxuICAgIGV2ZW5pbmc6IC/Xoteo15EvaSxcbiAgICBuaWdodDogL9ec15nXnNeUL2lcbiAgfVxufTtcbnZhciBvcmRpbmFsTmFtZSA9IFsn16jXkCcsICfXqdegJywgJ9ep15wnLCAn16jXkScsICfXlycsICfXqdeZJywgJ9ep15EnLCAn16nXnicsICfXqicsICfXoiddO1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgIHJldHVybiBpc05hTihudW1iZXIpID8gb3JkaW5hbE5hbWUuaW5kZXhPZih2YWx1ZSkgKyAxIDogbnVtYmVyO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9