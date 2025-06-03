(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bn-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/bn/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/bn/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i,
  abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i,
  wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i
};
var parseEraPatterns = {
  narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i],
  abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i],
  wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i]
};
var matchQuarterPatterns = {
  narrow: /^[১২৩৪]/i,
  abbreviated: /^[১২৩৪]ত্রৈ/i,
  wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i
};
var parseQuarterPatterns = {
  any: [/১/i, /২/i, /৩/i, /৪/i]
};
var matchMonthPatterns = {
  narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i
};
var parseMonthPatterns = {
  any: [/^জানু/i, /^ফেব্রু/i, /^মার্চ/i, /^এপ্রিল/i, /^মে/i, /^জুন/i, /^জুলাই/i, /^আগস্ট/i, /^সেপ্ট/i, /^অক্টো/i, /^নভে/i, /^ডিসে/i]
};
var matchDayPatterns = {
  narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i,
  short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i
};
var parseDayPatterns = {
  narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i],
  short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
  abbreviated: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
  wide: [/^রবিবার/i, /^সোমবার/i, /^মঙ্গলবার/i, /^বুধবার/i, /^বৃহস্পতিবার /i, /^শুক্রবার/i, /^শনিবার/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^পূ/i,
    pm: /^অপ/i,
    midnight: /^মধ্যরাত/i,
    noon: /^মধ্যাহ্ন/i,
    morning: /সকাল/i,
    afternoon: /বিকাল/i,
    evening: /সন্ধ্যা/i,
    night: /রাত/i
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
    defaultParseWidth: 'wide'
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
    defaultParseWidth: 'wide'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JuL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJuLV9saWItbWF0Y2gtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKyko4KaufOCnn3zgprDgp43gpqV84Ka34KeN4KagfOCmtuCnh3zgpod84Kak4KauKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCmluCnjeCmsOCmv+Cmg+CmquCnguCmg3zgppbgp43gprDgpr/gpoMpL2ksXG4gIGFiYnJldmlhdGVkOiAvXijgppbgp43gprDgpr/gpoPgpqrgp4LgprDgp43gpqx84KaW4KeN4Kaw4Ka/4KaDKS9pLFxuICB3aWRlOiAvXijgppbgp43gprDgpr/gprjgp43gpp/gpqrgp4LgprDgp43gpqx84KaW4KeN4Kaw4Ka/4Ka44KeN4Kaf4Ka+4Kas4KeN4KamKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e4KaW4KeN4Kaw4Ka/4KaD4Kaq4KeC4KaDL2ksIC9e4KaW4KeN4Kaw4Ka/4KaDL2ldLFxuICBhYmJyZXZpYXRlZDogWy9e4KaW4KeN4Kaw4Ka/4KaD4Kaq4KeC4Kaw4KeN4KasL2ksIC9e4KaW4KeN4Kaw4Ka/4KaDL2ldLFxuICB3aWRlOiBbL17gppbgp43gprDgpr/gprjgp43gpp/gpqrgp4LgprDgp43gpqwvaSwgL17gppbgp43gprDgpr/gprjgp43gpp/gpr7gpqzgp43gpqYvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b4Ken4Keo4Kep4KeqXS9pLFxuICBhYmJyZXZpYXRlZDogL15b4Ken4Keo4Kep4KeqXeCmpOCnjeCmsOCniC9pLFxuICB3aWRlOiAvXlvgp6fgp6jgp6ngp6pdKOCmrnzgp5984Kaw4KeN4KalKT8g4Kak4KeN4Kaw4KeI4Kau4Ka+4Ka44Ka/4KaVL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy/gp6cvaSwgL+CnqC9pLCAv4KepL2ksIC/gp6ovaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCmnOCmvuCmqOCngXzgpqvgp4fgpqzgp43gprDgp4F84Kau4Ka+4Kaw4KeN4KaafOCmj+CmquCnjeCmsOCmv+Cmsnzgpq7gp4d84Kac4KeB4KaofOCmnOCngeCmsuCmvuCmh3zgpobgppfgprjgp43gpp984Ka44KeH4Kaq4KeN4KaffOCmheCmleCnjeCmn+Cni3zgpqjgpq3gp4d84Kah4Ka/4Ka44KeHKS9pLFxuICBhYmJyZXZpYXRlZDogL14o4Kac4Ka+4Kao4KeBfOCmq+Cnh+CmrOCnjeCmsOCngXzgpq7gpr7gprDgp43gppp84KaP4Kaq4KeN4Kaw4Ka/4KayfOCmruCnh3zgppzgp4Hgpqh84Kac4KeB4Kay4Ka+4KaHfOCmhuCml+CmuOCnjeCmn3zgprjgp4fgpqrgp43gpp984KaF4KaV4KeN4Kaf4KeLfOCmqOCmreCnh3zgpqHgpr/gprjgp4cpL2ksXG4gIHdpZGU6IC9eKOCmnOCmvuCmqOCngeCnn+CmvuCmsOCmv3zgpqvgp4fgpqzgp43gprDgp4Hgp5/gpr7gprDgpr984Kau4Ka+4Kaw4KeN4KaafOCmj+CmquCnjeCmsOCmv+Cmsnzgpq7gp4d84Kac4KeB4KaofOCmnOCngeCmsuCmvuCmh3zgpobgppfgprjgp43gpp984Ka44KeH4Kaq4KeN4Kaf4KeH4Kau4KeN4Kas4KawfOCmheCmleCnjeCmn+Cni+CmrOCmsHzgpqjgpq3gp4fgpq7gp43gpqzgprB84Kah4Ka/4Ka44KeH4Kau4KeN4Kas4KawKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgYW55OiBbL17gppzgpr7gpqjgp4EvaSwgL17gpqvgp4fgpqzgp43gprDgp4EvaSwgL17gpq7gpr7gprDgp43gppovaSwgL17gpo/gpqrgp43gprDgpr/gprIvaSwgL17gpq7gp4cvaSwgL17gppzgp4HgpqgvaSwgL17gppzgp4HgprLgpr7gpocvaSwgL17gpobgppfgprjgp43gpp8vaSwgL17gprjgp4fgpqrgp43gpp8vaSwgL17gpoXgppXgp43gpp/gp4svaSwgL17gpqjgpq3gp4cvaSwgL17gpqHgpr/gprjgp4cvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijgprB84Ka44KeLfOCmrnzgpqzgp4F84Kas4KeDfOCmtuCngXzgprYpKy9pLFxuICBzaG9ydDogL14o4Kaw4Kas4Ka/fOCmuOCni+Cmrnzgpq7gppngp43gppfgprJ84Kas4KeB4KanfOCmrOCng+CmuXzgprbgp4HgppXgp43gprB84Ka24Kao4Ka/KSsvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCmsOCmrOCmv3zgprjgp4vgpq584Kau4KaZ4KeN4KaX4KayfOCmrOCngeCmp3zgpqzgp4Pgprl84Ka24KeB4KaV4KeN4KawfOCmtuCmqOCmvykrL2ksXG4gIHdpZGU6IC9eKOCmsOCmrOCmv+CmrOCmvuCmsHzgprjgp4vgpq7gpqzgpr7gprB84Kau4KaZ4KeN4KaX4Kay4Kas4Ka+4KawfOCmrOCngeCmp+CmrOCmvuCmsHzgpqzgp4Pgprngprjgp43gpqrgpqTgpr/gpqzgpr7gprAgfOCmtuCngeCmleCnjeCmsOCmrOCmvuCmsHzgprbgpqjgpr/gpqzgpr7gprApKy9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e4KawL2ksIC9e4Ka44KeLL2ksIC9e4KauL2ksIC9e4Kas4KeBL2ksIC9e4Kas4KeDL2ksIC9e4Ka24KeBL2ksIC9e4Ka2L2ldLFxuICBzaG9ydDogWy9e4Kaw4Kas4Ka/L2ksIC9e4Ka44KeL4KauL2ksIC9e4Kau4KaZ4KeN4KaX4KayL2ksIC9e4Kas4KeB4KanL2ksIC9e4Kas4KeD4Ka5L2ksIC9e4Ka24KeB4KaV4KeN4KawL2ksIC9e4Ka24Kao4Ka/L2ldLFxuICBhYmJyZXZpYXRlZDogWy9e4Kaw4Kas4Ka/L2ksIC9e4Ka44KeL4KauL2ksIC9e4Kau4KaZ4KeN4KaX4KayL2ksIC9e4Kas4KeB4KanL2ksIC9e4Kas4KeD4Ka5L2ksIC9e4Ka24KeB4KaV4KeN4KawL2ksIC9e4Ka24Kao4Ka/L2ldLFxuICB3aWRlOiBbL17gprDgpqzgpr/gpqzgpr7gprAvaSwgL17gprjgp4vgpq7gpqzgpr7gprAvaSwgL17gpq7gppngp43gppfgprLgpqzgpr7gprAvaSwgL17gpqzgp4Hgpqfgpqzgpr7gprAvaSwgL17gpqzgp4Pgprngprjgp43gpqrgpqTgpr/gpqzgpr7gprAgL2ksIC9e4Ka24KeB4KaV4KeN4Kaw4Kas4Ka+4KawL2ksIC9e4Ka24Kao4Ka/4Kas4Ka+4KawL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o4Kaq4KeCfOCmheCmqnzgpq7gpqfgp43gpq/gprDgpr7gpqR84Kau4Kan4KeN4Kav4Ka+4Ka54KeN4KaofOCmuOCmleCmvuCmsnzgpqzgpr/gppXgpr7gprJ84Ka44Kao4KeN4Kan4KeN4Kav4Ka+fOCmsOCmvuCmpCkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCmquCnguCmsOCnjeCmrOCmvuCmueCnjeCmqHzgpoXgpqrgprDgpr7gprngp43gpqh84Kau4Kan4KeN4Kav4Kaw4Ka+4KakfOCmruCmp+CnjeCmr+CmvuCmueCnjeCmqHzgprjgppXgpr7gprJ84Kas4Ka/4KaV4Ka+4KayfOCmuOCmqOCnjeCmp+CnjeCmr+CmvnzgprDgpr7gpqQpL2ksXG4gIHdpZGU6IC9eKOCmquCnguCmsOCnjeCmrOCmvuCmueCnjeCmqHzgpoXgpqrgprDgpr7gprngp43gpqh84Kau4Kan4KeN4Kav4Kaw4Ka+4KakfOCmruCmp+CnjeCmr+CmvuCmueCnjeCmqHzgprjgppXgpr7gprJ84Kas4Ka/4KaV4Ka+4KayfOCmuOCmqOCnjeCmp+CnjeCmr+CmvnzgprDgpr7gpqQpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9e4Kaq4KeCL2ksXG4gICAgcG06IC9e4KaF4KaqL2ksXG4gICAgbWlkbmlnaHQ6IC9e4Kau4Kan4KeN4Kav4Kaw4Ka+4KakL2ksXG4gICAgbm9vbjogL17gpq7gpqfgp43gpq/gpr7gprngp43gpqgvaSxcbiAgICBtb3JuaW5nOiAv4Ka44KaV4Ka+4KayL2ksXG4gICAgYWZ0ZXJub29uOiAv4Kas4Ka/4KaV4Ka+4KayL2ksXG4gICAgZXZlbmluZzogL+CmuOCmqOCnjeCmp+CnjeCmr+Cmvi9pLFxuICAgIG5pZ2h0OiAv4Kaw4Ka+4KakL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=