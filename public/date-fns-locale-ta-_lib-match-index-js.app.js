(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ta-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/ta/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/ta/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(வது)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(கி.மு.|கி.பி.)/i,
  abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
  wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
};
var parseEraPatterns = {
  any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^காலா.[1234]/i,
  wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i]
};
var matchMonthPatterns = {
  narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
  abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
  wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
};
var parseMonthPatterns = {
  narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i],
  any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i]
};
var matchDayPatterns = {
  narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
  wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
};
var parseDayPatterns = {
  narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
  any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
  any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^மு/i,
    pm: /^பி/i,
    midnight: /^நள்/i,
    noon: /^நண்/i,
    morning: /காலை/i,
    afternoon: /மதியம்/i,
    evening: /மாலை/i,
    night: /இரவு/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RhL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXRhLV9saWItbWF0Y2gtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKyko4K614K6k4K+BKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCuleCuvy7grq7gr4EufOCuleCuvy7grqrgrr8uKS9pLFxuICBhYmJyZXZpYXRlZDogL14o4K6V4K6/XFwuP1xccz/grq7gr4FcXC4/fOCuleCuv1xcLj9cXHM/4K6q4K6/XFwuPykvLFxuICB3aWRlOiAvXijgrpXgrr/grrHgrr/grrjgr43grqTgr4HgrrXgr4HgrpXgr43grpXgr4FcXHPgrq7gr4Hgrqngr4184K6F4K6p4K+N4K6p4K+LXFxz4K6f4K+L4K6u4K6/4K6p4K6/KS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy/grpXgrr9cXC4/XFxzP+CuruCvgVxcLj8vLCAv4K6V4K6/XFwuP1xccz/grqrgrr9cXC4/L11cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9e4K6V4K6+4K6y4K6+LlsxMjM0XS9pLFxuICB3aWRlOiAvXijgrpLgrqngr43grrHgrr7grq7gr4184K6H4K6w4K6j4K+N4K6f4K6+4K6u4K+NfOCuruCvguCuqeCvjeCuseCuvuCuruCvjXzgrqjgrr7grqngr43grpXgrr7grq7gr40pIOCuleCuvuCusuCuvuCuo+CvjeCun+CvgS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbiAgYW55OiBbLygxfOCuleCuvuCusuCuvi4xfOCukuCuqeCvjeCuseCuvuCuruCvjSkvaSwgLygyfOCuleCuvuCusuCuvi4yfOCuh+CusOCuo+CvjeCun+CuvuCuruCvjSkvaSwgLygzfOCuleCuvuCusuCuvi4zfOCuruCvguCuqeCvjeCuseCuvuCuruCvjSkvaSwgLyg0fOCuleCuvuCusuCuvi40fOCuqOCuvuCuqeCvjeCuleCuvuCuruCvjSkvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCunHzgrqrgrr984K6u4K6+fOCuj3zgrq7gr4d84K6c4K+CfOCuhnzgrprgr4Z84K6FfOCuqHzgrp/grr8pJC9pLFxuICBhYmJyZXZpYXRlZDogL14o4K6c4K6pLnzgrqrgrr/grqrgr40ufOCuruCuvuCusOCvjS584K6P4K6q4K+NLnzgrq7gr4d84K6c4K+C4K6p4K+NfOCunOCvguCusuCviHzgrobgrpUufOCumuCvhuCuquCvjS584K6F4K6V4K+NLnzgrqjgrrUufOCun+Cuv+Cumi4pL2ksXG4gIHdpZGU6IC9eKOCunOCuqeCuteCusOCuv3zgrqrgrr/grqrgr43grrDgrrXgrrDgrr984K6u4K6+4K6w4K+N4K6a4K+NfOCuj+CuquCvjeCusOCusuCvjXzgrq7gr4d84K6c4K+C4K6p4K+NfOCunOCvguCusuCviHzgrobgrpXgrrjgr43grp/gr4184K6a4K+G4K6q4K+N4K6f4K6u4K+N4K6q4K6w4K+NfOCuheCuleCvjeCun+Cvi+CuquCusOCvjXzgrqjgrrXgrq7gr43grqrgrrDgr4184K6f4K6/4K6a4K6u4K+N4K6q4K6w4K+NKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17grpwkL2ksIC9e4K6q4K6/L2ksIC9e4K6u4K6+L2ksIC9e4K6PL2ksIC9e4K6u4K+HL2ksIC9e4K6c4K+CL2ksIC9e4K6c4K+CL2ksIC9e4K6GL2ksIC9e4K6a4K+GL2ksIC9e4K6FL2ksIC9e4K6oL2ksIC9e4K6f4K6/L2ldLFxuICBhbnk6IFsvXuCunOCuqS9pLCAvXuCuquCuvy9pLCAvXuCuruCuvi9pLCAvXuCujy9pLCAvXuCuruCvhy9pLCAvXuCunOCvguCuqeCvjS9pLCAvXuCunOCvguCusuCviC9pLCAvXuCuhi9pLCAvXuCumuCvhi9pLCAvXuCuhS9pLCAvXuCuqC9pLCAvXuCun+Cuvy9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCunuCuvnzgrqTgrr984K6a4K+GfOCuquCvgXzgrrXgrr984K614K+GfOCumikvaSxcbiAgc2hvcnQ6IC9eKOCunuCuvnzgrqTgrr984K6a4K+GfOCuquCvgXzgrrXgrr984K614K+GfOCumikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCunuCuvuCur+Cuvy584K6k4K6/4K6Z4K+NLnzgrprgr4bgrrXgr40ufOCuquCvgeCupC584K614K6/4K6v4K6+LnzgrrXgr4bgrrPgr40ufOCumuCuqeCuvykvaSxcbiAgd2lkZTogL14o4K6e4K6+4K6v4K6/4K6x4K+BfOCupOCuv+CumeCvjeCuleCus+CvjXzgrprgr4bgrrXgr43grrXgrr7grq/gr4184K6q4K+B4K6k4K6p4K+NfOCuteCuv+Cur+CuvuCutOCuqeCvjXzgrrXgr4bgrrPgr43grrPgrr984K6a4K6p4K6/KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e4K6e4K6+L2ksIC9e4K6k4K6/L2ksIC9e4K6a4K+GL2ksIC9e4K6q4K+BL2ksIC9e4K614K6/L2ksIC9e4K614K+GL2ksIC9e4K6aL2ldLFxuICBhbnk6IFsvXuCunuCuvi9pLCAvXuCupOCuvy9pLCAvXuCumuCvhi9pLCAvXuCuquCvgS9pLCAvXuCuteCuvy9pLCAvXuCuteCvhi9pLCAvXuCumi9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCuruCvgS7grqp84K6q4K6/LuCuqnzgrqjgrrPgr4184K6o4K6j4K+NfOCuleCuvuCusuCviHzgrq7grqTgrr/grq/grq7gr4184K6u4K6+4K6y4K+IfOCuh+CusOCuteCvgSkvaSxcbiAgYW55OiAvXijgrq7gr4Eu4K6qfOCuquCuvy7grqp84K6u4K+B4K6x4K+N4K6q4K6V4K6y4K+NfOCuquCuv+CuseCvjeCuquCuleCusuCvjXzgrqjgrrPgr43grrPgrr/grrDgrrXgr4F84K6o4K6j4K+N4K6q4K6V4K6y4K+NfOCuleCuvuCusuCviHzgrq7grqTgrr/grq/grq7gr4184K6u4K6+4K6y4K+IfOCuh+CusOCuteCvgSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL17grq7gr4EvaSxcbiAgICBwbTogL17grqrgrr8vaSxcbiAgICBtaWRuaWdodDogL17grqjgrrPgr40vaSxcbiAgICBub29uOiAvXuCuqOCuo+CvjS9pLFxuICAgIG1vcm5pbmc6IC/grpXgrr7grrLgr4gvaSxcbiAgICBhZnRlcm5vb246IC/grq7grqTgrr/grq/grq7gr40vaSxcbiAgICBldmVuaW5nOiAv4K6u4K6+4K6y4K+IL2ksXG4gICAgbmlnaHQ6IC/grofgrrDgrrXgr4EvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==