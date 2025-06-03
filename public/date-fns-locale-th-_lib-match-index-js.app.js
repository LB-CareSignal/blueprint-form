(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-th-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/th/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/th/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^([bB]|[aA]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
};
var parseEraPatterns = {
  any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)? ?[1234]/i
};
var parseQuarterPatterns = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
};
var matchMonthPatterns = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
};
var parseMonthPatterns = {
  wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
  any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
};
var matchDayPatterns = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
};
var parseDayPatterns = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
};
var matchDayPeriodPatterns = {
  any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ก่อนเที่ยง/i,
    pm: /^หลังเที่ยง/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RoL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdGgtX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXlxcZCsvaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKFtiQl18W2FBXXzguITguKgpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihbYkJdXFwuP1xccz9bY0NdXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuP3zguIRcXC4/4LioXFwuPykvaSxcbiAgd2lkZTogL14o4LiB4LmI4Lit4LiZ4LiE4Lij4Li04Liq4LiV4LiB4Liy4LilfOC4hOC4o+C4tOC4quC4leC5jOC4qOC4seC4geC4o+C4suC4inzguITguKPguLTguKrguJXguIHguLLguKUpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15bYkJdL2ksIC9eKF5bYUFdfOC4hFxcLj/guKhcXC4/fOC4hOC4o+C4tOC4quC4leC4geC4suC4pXzguITguKPguLTguKrguJXguYzguKjguLHguIHguKPguLLguIp8KS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9e4LmE4LiV4Lij4Lih4Liy4LiqKOC4l+C4teC5iCk/ID9bMTIzNF0vaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLygxfOC5geC4o+C4gXzguKvguJnguLbguYjguIcpL2ksIC8oMnzguKrguK3guIcpL2ksIC8oM3zguKrguLLguKEpL2ksIC8oNHzguKrguLXguYgpL2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijguKFcXC4/4LiEXFwuP3zguIFcXC4/4LieXFwuP3zguKHguLVcXC4/4LiEXFwuP3zguYDguKFcXC4/4LiiXFwuP3zguJ5cXC4/4LiEXFwuP3zguKHguLRcXC4/4LiiXFwuP3zguIFcXC4/4LiEXFwuP3zguKpcXC4/4LiEXFwuP3zguIFcXC4/4LiiXFwuP3zguJVcXC4/4LiEXFwuP3zguJ5cXC4/4LiiXFwuP3zguJhcXC4/4LiEXFwuPykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOC4oVxcLj/guIRcXC4/fOC4gVxcLj/guJ5cXC4/fOC4oeC4tVxcLj/guIRcXC4/fOC5gOC4oVxcLj/guKJcXC4/fOC4nlxcLj/guIRcXC4/fOC4oeC4tFxcLj/guKJcXC4/fOC4gVxcLj/guIRcXC4/fOC4qlxcLj/guIRcXC4/fOC4gVxcLj/guKJcXC4/fOC4lVxcLj/guIRcXC4/fOC4nlxcLj/guKJcXC4/fOC4mFxcLj/guIRcXC4/JykvaSxcbiAgd2lkZTogL14o4Lih4LiB4Lij4Liy4LiE4LihfOC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jHzguKHguLXguJnguLLguITguKF84LmA4Lih4Lip4Liy4Lii4LiZfOC4nuC4pOC4qeC4oOC4suC4hOC4oXzguKHguLTguJbguLjguJnguLLguKLguJl84LiB4Lij4LiB4LiO4Liy4LiE4LihfOC4quC4tOC4h+C4q+C4suC4hOC4oXzguIHguLHguJnguKLguLLguKLguJl84LiV4Li44Lil4Liy4LiE4LihfOC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mXzguJjguLHguJnguKfguLLguITguKEpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICB3aWRlOiBbL17guKHguIEvaSwgL17guIHguLjguKEvaSwgL17guKHguLUvaSwgL17guYDguKEvaSwgL17guJ7guKTguKkvaSwgL17guKHguLQvaSwgL17guIHguKPguIEvaSwgL17guKovaSwgL17guIHguLHguJkvaSwgL17guJUvaSwgL17guJ7guKTguKgvaSwgL17guJgvaV0sXG4gIGFueTogWy9e4LihXFwuP+C4hFxcLj8vaSwgL17guIFcXC4/4LieXFwuPy9pLCAvXuC4oeC4tVxcLj/guIRcXC4/L2ksIC9e4LmA4LihXFwuP+C4olxcLj8vaSwgL17guJ5cXC4/4LiEXFwuPy9pLCAvXuC4oeC4tFxcLj/guKJcXC4/L2ksIC9e4LiBXFwuP+C4hFxcLj8vaSwgL17guKpcXC4/4LiEXFwuPy9pLCAvXuC4gVxcLj/guKJcXC4/L2ksIC9e4LiVXFwuP+C4hFxcLj8vaSwgL17guJ5cXC4/4LiiXFwuPy9pLCAvXuC4mFxcLj/guIRcXC4/L2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o4Lit4LiyXFwuP3zguIhcXC4/fOC4rVxcLj984Lie4LikXFwuP3zguJ5cXC4/fOC4qFxcLj984LiqXFwuPykvaSxcbiAgc2hvcnQ6IC9eKOC4reC4slxcLj984LiIXFwuP3zguK1cXC4/fOC4nuC4pFxcLj984LieXFwuP3zguKhcXC4/fOC4qlxcLj8pL2ksXG4gIGFiYnJldmlhdGVkOiAvXijguK3guLJcXC4/fOC4iFxcLj984LitXFwuP3zguJ7guKRcXC4/fOC4nlxcLj984LioXFwuP3zguKpcXC4/KS9pLFxuICB3aWRlOiAvXijguK3guLLguJfguLTguJXguKLguYx84LiI4Lix4LiZ4LiX4Lij4LmMfOC4reC4seC4h+C4hOC4suC4o3zguJ7guLjguJh84Lie4Lik4Lir4Lix4Liq4Lia4LiU4Li1fOC4qOC4uOC4geC4o+C5jHzguYDguKrguLLguKPguYwpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgd2lkZTogWy9e4Lit4LiyL2ksIC9e4LiI4LixL2ksIC9e4Lit4LixL2ksIC9e4Lie4Li44LiYL2ksIC9e4Lie4LikL2ksIC9e4LioL2ksIC9e4LmA4LiqL2ldLFxuICBhbnk6IFsvXuC4reC4si9pLCAvXuC4iC9pLCAvXuC4rS9pLCAvXuC4nig/IeC4pCkvaSwgL17guJ7guKQvaSwgL17guKgvaSwgL17guKovaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiAvXijguIHguYjguK3guJnguYDguJfguLXguYjguKLguId84Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHfOC5gOC4l+C4teC5iOC4ouC4h+C4hOC4t+C4mXzguYDguJfguLXguYjguKLguId8KOC4leC4reC4mS4qPyk/Lioo4LmA4LiX4Li14LmI4Lii4LiHfOC5gOC4iuC5ieC4snzguJrguYjguLLguKJ84LmA4Lii4LmH4LiZfOC4geC4peC4suC4h+C4hOC4t+C4mSkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9e4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHL2ksXG4gICAgcG06IC9e4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHL2ksXG4gICAgbWlkbmlnaHQ6IC9e4LmA4LiX4Li14LmI4Lii4LiH4LiE4Li34LiZL2ksXG4gICAgbm9vbjogL17guYDguJfguLXguYjguKLguIcvaSxcbiAgICBtb3JuaW5nOiAv4LmA4LiK4LmJ4LiyL2ksXG4gICAgYWZ0ZXJub29uOiAv4Lia4LmI4Liy4LiiL2ksXG4gICAgZXZlbmluZzogL+C5gOC4ouC5h+C4mS9pLFxuICAgIG5pZ2h0OiAv4LiB4Lil4Liy4LiH4LiE4Li34LiZL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=