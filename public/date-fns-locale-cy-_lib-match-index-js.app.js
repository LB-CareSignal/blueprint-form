(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-cy-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/cy/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/cy/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(c|o)/i,
  abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i,
  wide: /^(cyn christ|ar ôl crist|ar ol crist)/i
};
var parseEraPatterns = {
  wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i],
  any: [/^c/i, /^o/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ch[1234]/i,
  wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(i|ch|m|e|g|a|h|t|rh)/i,
  abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,
  wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i
};
var parseMonthPatterns = {
  narrow: [/^i/i, /^ch/i, /^m/i, /^e/i, /^m/i, /^m/i, /^g/i, /^a/i, /^m/i, /^h/i, /^t/i, /^rh/i],
  any: [/^io/i, /^ch/i, /^maw/i, /^e/i, /^mai/i, /^meh/i, /^g/i, /^a/i, /^med/i, /^h/i, /^t/i, /^rh/i]
};
var matchDayPatterns = {
  narrow: /^(s|ll|m|i|g)/i,
  short: /^(su|ll|ma|me|ia|gw|sa)/i,
  abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i,
  wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i],
  wide: [/^dydd su/i, /^dydd ll/i, /^dydd ma/i, /^dydd me/i, /^dydd i/i, /^dydd g/i, /^dydd sa/i],
  any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,
  any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^b|(y\.?\s?b\.?)/i,
    pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i,
    midnight: /^hn|hanner nos/i,
    noon: /^hd|hanner dydd/i,
    morning: /bore/i,
    afternoon: /prynhawn/i,
    evening: /^gyda'r nos$/i,
    night: /blah/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2N5L19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtY3ktX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKShhZnxhaWx8eWRkfGVkfGZlZHxlZ3xhaW4pPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oY3xvKS9pLFxuICBhYmJyZXZpYXRlZDogL14oY1xcLj9cXHM/Y1xcLj98b1xcLj9cXHM/Y1xcLj8pL2ksXG4gIHdpZGU6IC9eKGN5biBjaHJpc3R8YXIgw7RsIGNyaXN0fGFyIG9sIGNyaXN0KS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIHdpZGU6IFsvXmMvaSwgL14oYXIgw7RsIGNyaXN0fGFyIG9sIGNyaXN0KS9pXSxcbiAgYW55OiBbL15jL2ksIC9eby9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15jaFsxMjM0XS9pLFxuICB3aWRlOiAvXihjaHdhcnRlciAxYWYpfChbMjM0XShhaWx8eWRkKT8gY2h3YXJ0ZXIpL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihpfGNofG18ZXxnfGF8aHx0fHJoKS9pLFxuICBhYmJyZXZpYXRlZDogL14oaW9ufGNod2V8bWF3fGVicnxtYWl8bWVofGdvcnxhd3N8bWVkfGh5ZHx0YWNofHJoYWcpL2ksXG4gIHdpZGU6IC9eKGlvbmF3cnxjaHdlZnJvcnxtYXdydGh8ZWJyaWxsfG1haXxtZWhlZmlufGdvcmZmZW5uYWZ8YXdzdHxtZWRpfGh5ZHJlZnx0YWNod2VkZHxyaGFnZnlyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15pL2ksIC9eY2gvaSwgL15tL2ksIC9eZS9pLCAvXm0vaSwgL15tL2ksIC9eZy9pLCAvXmEvaSwgL15tL2ksIC9eaC9pLCAvXnQvaSwgL15yaC9pXSxcbiAgYW55OiBbL15pby9pLCAvXmNoL2ksIC9ebWF3L2ksIC9eZS9pLCAvXm1haS9pLCAvXm1laC9pLCAvXmcvaSwgL15hL2ksIC9ebWVkL2ksIC9eaC9pLCAvXnQvaSwgL15yaC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHN8bGx8bXxpfGcpL2ksXG4gIHNob3J0OiAvXihzdXxsbHxtYXxtZXxpYXxnd3xzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bHxsbHVufG1hd3xtZXJ8aWF1fGd3ZXxzYWQpL2ksXG4gIHdpZGU6IC9eZHlkZCAoc3VsfGxsdW58bWF3cnRofG1lcmNoZXJ8aWF1fGd3ZW5lcnxzYWR3cm4pL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebGwvaSwgL15tL2ksIC9ebS9pLCAvXmkvaSwgL15nL2ksIC9ecy9pXSxcbiAgd2lkZTogWy9eZHlkZCBzdS9pLCAvXmR5ZGQgbGwvaSwgL15keWRkIG1hL2ksIC9eZHlkZCBtZS9pLCAvXmR5ZGQgaS9pLCAvXmR5ZGQgZy9pLCAvXmR5ZGQgc2EvaV0sXG4gIGFueTogWy9ec3UvaSwgL15sbC9pLCAvXm1hL2ksIC9ebWUvaSwgL15pL2ksIC9eZy9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxofGhufGhkfCh5biB5fHl8eXJ8Z3lkYSdyKSAoYm9yZXxwcnluaGF3bnxub3N8aHd5cikpL2ksXG4gIGFueTogL14oeVxcLj9cXHM/W2JoXVxcLj98aGFubmVyIG5vc3xoYW5uZXIgZHlkZHwoeW4geXx5fHlyfGd5ZGEncikgKGJvcmV8cHJ5bmhhd258bm9zfGh3eXIpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmJ8KHlcXC4/XFxzP2JcXC4/KS9pLFxuICAgIHBtOiAvXmh8KHlcXC4/XFxzP2hcXC4/KXwoeXIgaHd5cikvaSxcbiAgICBtaWRuaWdodDogL15obnxoYW5uZXIgbm9zL2ksXG4gICAgbm9vbjogL15oZHxoYW5uZXIgZHlkZC9pLFxuICAgIG1vcm5pbmc6IC9ib3JlL2ksXG4gICAgYWZ0ZXJub29uOiAvcHJ5bmhhd24vaSxcbiAgICBldmVuaW5nOiAvXmd5ZGEnciBub3MkL2ksXG4gICAgbmlnaHQ6IC9ibGFoL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=