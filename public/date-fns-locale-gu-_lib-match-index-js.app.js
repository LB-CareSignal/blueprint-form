(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gu-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ઈસપૂ|ઈસ)/i,
  abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
  wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i
};
var parseEraPatterns = {
  any: [/^ઈસપૂ/i, /^ઈસ/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
  abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
  wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
};
var parseMonthPatterns = {
  narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i],
  any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]
};
var matchDayPatterns = {
  narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
  wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
};
var parseDayPatterns = {
  narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
  any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
  any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^મ\.?/i,
    noon: /^બ/i,
    morning: /સ/i,
    afternoon: /બ/i,
    evening: /સાં/i,
    night: /રા/i
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWd1LV9saWItbWF0Y2gtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKyko4KqyfOCqnHzgqqV84Kqg4KuN4KqgfOCqrik/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijgqojgqrjgqqrgq4J84KqI4Kq4KS9pLFxuICBhYmJyZXZpYXRlZDogL14o4KqIXFwu4Kq4XFwu4Kqq4KuC4Kqw4KuN4Kq14KuHfOCqiFxcLuCquFxcLikvaSxcbiAgd2lkZTogL14o4KqI4Kq44Kq14KuA4Kq44KqoXFxz4Kqq4KuC4Kqw4KuN4Kq14KuHfOCqiOCquOCqteCrgOCquOCqqCkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXuCqiOCquOCqquCrgi9pLCAvXuCqiOCquC9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKOCqsuCri3zgqpzgq4t84Kql4KuLKT8g4Kqk4KuN4Kqw4Kq/4Kqu4Kq+4Kq4L2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1pc2xlYWRpbmctY2hhcmFjdGVyLWNsYXNzXG4gIG5hcnJvdzogL15b4Kqc4Kq+4Kqr4KuH4Kqu4Kq+4KqP4Kqu4KuH4Kqc4KuC4Kqc4KuB4KqT4Kq44KqT4Kqo4Kqh4Kq/XS9pLFxuICBhYmJyZXZpYXRlZDogL14o4Kqc4Kq+4Kqo4KuN4Kqv4KuBfOCqq+Crh+CqrOCrjeCqsOCrgXzgqq7gqr7gqrDgq43gqpp84KqP4Kqq4KuN4Kqw4Kq/4KqyfOCqruCrh3zgqpzgq4Lgqqh84Kqc4KuB4Kqy4Kq+4KqIfOCqkeCql+CquOCrjeCqn3zgqrjgqqrgq43gqp/gq4d84KqT4KqV4KuN4Kqf4KuLfOCqqOCqteCrh3zgqqHgqr/gqrjgq4cpL2ksXG4gIHdpZGU6IC9eKOCqnOCqvuCqqOCrjeCqr+CrgeCqhuCqsOCrgHzgqqvgq4fgqqzgq43gqrDgq4HgqobgqrDgq4B84Kqu4Kq+4Kqw4KuN4KqafOCqj+CqquCrjeCqsOCqv+Cqsnzgqq7gq4d84Kqc4KuC4KqofOCqnOCrgeCqsuCqvuCqh3zgqpPgqpfgqrjgq43gqp984Kq44Kqq4KuN4Kqf4KuH4Kqu4KuN4Kqs4KqwfOCqk+CqleCrjeCqn+Cri+CqrOCqsHzgqqjgqrXgq4fgqq7gq43gqqzgqrB84Kqh4Kq/4Kq44KuH4Kqu4KuN4Kqs4KqwKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17gqpzgqr4vaSwgL17gqqvgq4cvaSwgL17gqq7gqr4vaSwgL17gqo8vaSwgL17gqq7gq4cvaSwgL17gqpzgq4IvaSwgL17gqpzgq4EvaSwgL17gqpHgqpcvaSwgL17gqrgvaSwgL17gqpPgqpXgq43gqp/gq4svaSwgL17gqqgvaSwgL17gqqHgqr8vaV0sXG4gIGFueTogWy9e4Kqc4Kq+L2ksIC9e4Kqr4KuHL2ksIC9e4Kqu4Kq+L2ksIC9e4KqPL2ksIC9e4Kqu4KuHL2ksIC9e4Kqc4KuCL2ksIC9e4Kqc4KuBL2ksIC9e4KqR4KqXL2ksIC9e4Kq4L2ksIC9e4KqT4KqV4KuN4Kqf4KuLL2ksIC9e4KqoL2ksIC9e4Kqh4Kq/L2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o4KqwfOCquOCri3zgqq7gqoJ84Kqs4KuBfOCql+CrgXzgqrbgq4F84Kq2KS9pLFxuICBzaG9ydDogL14o4KqwfOCquOCri3zgqq7gqoJ84Kqs4KuBfOCql+CrgXzgqrbgq4F84Kq2KS9pLFxuICBhYmJyZXZpYXRlZDogL14o4Kqw4Kq14Kq/fOCquOCri+Cqrnzgqq7gqoLgqpfgqrN84Kqs4KuB4KqnfOCql+CrgeCqsOCrgXzgqrbgq4HgqpXgq43gqrB84Kq24Kqo4Kq/KS9pLFxuICB3aWRlOiAvXijgqrDgqrXgqr/gqrXgqr7gqrB84Kq44KuL4Kqu4Kq14Kq+4KqwfOCqruCqguCql+Cqs+CqteCqvuCqsHzgqqzgq4HgqqfgqrXgqr7gqrB84KqX4KuB4Kqw4KuB4Kq14Kq+4KqwfOCqtuCrgeCqleCrjeCqsOCqteCqvuCqsHzgqrbgqqjgqr/gqrXgqr7gqrApL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17gqrAvaSwgL17gqrjgq4svaSwgL17gqq7gqoIvaSwgL17gqqzgq4EvaSwgL17gqpfgq4EvaSwgL17gqrbgq4EvaSwgL17gqrYvaV0sXG4gIGFueTogWy9e4KqwL2ksIC9e4Kq44KuLL2ksIC9e4Kqu4KqCL2ksIC9e4Kqs4KuBL2ksIC9e4KqX4KuBL2ksIC9e4Kq24KuBL2ksIC9e4Kq2L2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfOCqrlxcLj984Kq4fOCqrHzgqrjgqr7gqoJ84Kqw4Kq+KS9pLFxuICBhbnk6IC9eKGF8cHzgqq5cXC4/fOCquHzgqqx84Kq44Kq+4KqCfOCqsOCqvikvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXuCqrlxcLj8vaSxcbiAgICBub29uOiAvXuCqrC9pLFxuICAgIG1vcm5pbmc6IC/gqrgvaSxcbiAgICBhZnRlcm5vb246IC/gqqwvaSxcbiAgICBldmVuaW5nOiAv4Kq44Kq+4KqCL2ksXG4gICAgbmlnaHQ6IC/gqrDgqr4vaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==