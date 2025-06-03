(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-EG-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-EG/_lib/match/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-EG/_lib/match/index.js ***!
  \****************************************************************/
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
var matchOrdinalNumberPattern = /^(\d+)/;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/g,
  abbreviated: /^(ق.م|ب.م)/g,
  wide: /^(قبل الميلاد|بعد الميلاد)/g
};
var parseEraPatterns = {
  any: [/^ق/g, /^ب/g]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/,
  abbreviated: /^ر[1234]/,
  wide: /^الربع (الأول|الثاني|الثالث|الرابع)/
};
var parseQuarterPatterns = {
  wide: [/الربع الأول/, /الربع الثاني/, /الربع الثالث/, /الربع الرابع/],
  any: [/1/, /2/, /3/, /4/]
};
var matchMonthPatterns = {
  narrow: /^(ي|ف|م|أ|س|ن|د)/,
  abbreviated: /^(ينا|فبر|مارس|أبريل|مايو|يونـ|يولـ|أغسـ|سبتـ|أكتـ|نوفـ|ديسـ)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
};
var parseMonthPatterns = {
  narrow: [/^ي/, /^ف/, /^م/, /^أ/, /^م/, /^ي/, /^ي/, /^أ/, /^س/, /^أ/, /^ن/, /^د/],
  any: [/^ينا/, /^فبر/, /^مارس/, /^أبريل/, /^مايو/, /^يون/, /^يول/, /^أغس/, /^سبت/, /^أكت/, /^نوف/, /^ديس/]
};
var matchDayPatterns = {
  narrow: /^(ح|ن|ث|ر|خ|ج|س)/,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/
};
var parseDayPatterns = {
  narrow: [/^ح/, /^ن/, /^ث/, /^ر/, /^خ/, /^ج/, /^س/],
  any: [/أحد/, /اثنين/, /ثلاثاء/, /أربعاء/, /خميس/, /جمعة/, /سبت/]
};
var matchDayPeriodPatterns = {
  narrow: /^(ص|م|ن|ظ|في الصباح|بعد الظهر|في المساء|في الليل)/,
  abbreviated: /^(ص|م|نصف الليل|ظهراً|في الصباح|بعد الظهر|في المساء|في الليل)/,
  wide: /^(ص|م|نصف الليل|في الصباح|ظهراً|بعد الظهر|في المساء|في الليل)/,
  any: /^(ص|م|صباح|ظهر|مساء|ليل)/
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /^ن/,
    noon: /^ظ/,
    morning: /^ص/,
    afternoon: /^بعد/,
    evening: /^م/,
    night: /^ل/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLUVHL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hci1FRy1fbGliLW1hdGNoLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspLztcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKNmCfNioKS9nLFxuICBhYmJyZXZpYXRlZDogL14o2YIu2YV82Kgu2YUpL2csXG4gIHdpZGU6IC9eKNmC2KjZhCDYp9mE2YXZitmE2KfYr3zYqNi52K8g2KfZhNmF2YrZhNin2K8pL2dcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL17Zgi9nLCAvXtioL2ddXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdLyxcbiAgYWJicmV2aWF0ZWQ6IC9e2LFbMTIzNF0vLFxuICB3aWRlOiAvXtin2YTYsdio2LkgKNin2YTYo9mI2YR82KfZhNir2KfZhtmKfNin2YTYq9in2YTYq3zYp9mE2LHYp9io2LkpL1xufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgd2lkZTogWy/Yp9mE2LHYqNi5INin2YTYo9mI2YQvLCAv2KfZhNix2KjYuSDYp9mE2KvYp9mG2YovLCAv2KfZhNix2KjYuSDYp9mE2KvYp9mE2KsvLCAv2KfZhNix2KjYuSDYp9mE2LHYp9io2LkvXSxcbiAgYW55OiBbLzEvLCAvMi8sIC8zLywgLzQvXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o2Yp82YF82YV82KN82LN82YZ82K8pLyxcbiAgYWJicmV2aWF0ZWQ6IC9eKNmK2YbYp3zZgdio2LF82YXYp9ix2LN82KPYqNix2YrZhHzZhdin2YrZiHzZitmI2YbZgHzZitmI2YTZgHzYo9i62LPZgHzYs9io2KrZgHzYo9mD2KrZgHzZhtmI2YHZgHzYr9mK2LPZgCkvLFxuICB3aWRlOiAvXijZitmG2KfZitixfNmB2KjYsdin2YrYsXzZhdin2LHYs3zYo9io2LHZitmEfNmF2KfZitmIfNmK2YjZhtmK2Yh82YrZiNmE2YrZiHzYo9i62LPYt9izfNiz2KjYqtmF2KjYsXzYo9mD2KrZiNio2LF82YbZiNmB2YXYqNixfNiv2YrYs9mF2KjYsSkvXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17Zii8sIC9e2YEvLCAvXtmFLywgL17Yoy8sIC9e2YUvLCAvXtmKLywgL17Zii8sIC9e2KMvLCAvXtizLywgL17Yoy8sIC9e2YYvLCAvXtivL10sXG4gIGFueTogWy9e2YrZhtinLywgL17Zgdio2LEvLCAvXtmF2KfYsdizLywgL17Yo9io2LHZitmELywgL17Zhdin2YrZiC8sIC9e2YrZiNmGLywgL17ZitmI2YQvLCAvXtij2LrYsy8sIC9e2LPYqNiqLywgL17Yo9mD2KovLCAvXtmG2YjZgS8sIC9e2K/ZitizL11cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijYrXzZhnzYq3zYsXzYrnzYrHzYsykvLFxuICBzaG9ydDogL14o2KPYrdivfNin2KvZhtmK2YZ82KvZhNin2KvYp9ihfNij2LHYqNi52KfYoXzYrtmF2YrYs3zYrNmF2LnYqXzYs9io2KopLyxcbiAgYWJicmV2aWF0ZWQ6IC9eKNij2K3Yr3zYp9ir2YbZitmGfNir2YTYp9ir2KfYoXzYo9ix2KjYudin2KF82K7ZhdmK2LN82KzZhdi52Kl82LPYqNiqKS8sXG4gIHdpZGU6IC9eKNin2YTYo9it2K982KfZhNin2KvZhtmK2YZ82KfZhNir2YTYp9ir2KfYoXzYp9mE2KPYsdio2LnYp9ihfNin2YTYrtmF2YrYs3zYp9mE2KzZhdi52Kl82KfZhNiz2KjYqikvXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e2K0vLCAvXtmGLywgL17Yqy8sIC9e2LEvLCAvXtiuLywgL17YrC8sIC9e2LMvXSxcbiAgYW55OiBbL9ij2K3Yry8sIC/Yp9ir2YbZitmGLywgL9ir2YTYp9ir2KfYoS8sIC/Yo9ix2KjYudin2KEvLCAv2K7ZhdmK2LMvLCAv2KzZhdi52KkvLCAv2LPYqNiqL11cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijYtXzZhXzZhnzYuHzZgdmKINin2YTYtdio2KfYrXzYqNi52K8g2KfZhNi42YfYsXzZgdmKINin2YTZhdiz2KfYoXzZgdmKINin2YTZhNmK2YQpLyxcbiAgYWJicmV2aWF0ZWQ6IC9eKNi1fNmFfNmG2LXZgSDYp9mE2YTZitmEfNi42YfYsdin2Yt82YHZiiDYp9mE2LXYqNin2K182KjYudivINin2YTYuNmH2LF82YHZiiDYp9mE2YXYs9in2KF82YHZiiDYp9mE2YTZitmEKS8sXG4gIHdpZGU6IC9eKNi1fNmFfNmG2LXZgSDYp9mE2YTZitmEfNmB2Yog2KfZhNi12KjYp9itfNi42YfYsdin2Yt82KjYudivINin2YTYuNmH2LF82YHZiiDYp9mE2YXYs9in2KF82YHZiiDYp9mE2YTZitmEKS8sXG4gIGFueTogL14o2LV82YV82LXYqNin2K182LjZh9ixfNmF2LPYp9ihfNmE2YrZhCkvXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXti1LyxcbiAgICBwbTogL17ZhS8sXG4gICAgbWlkbmlnaHQ6IC9e2YYvLFxuICAgIG5vb246IC9e2LgvLFxuICAgIG1vcm5pbmc6IC9e2LUvLFxuICAgIGFmdGVybm9vbjogL17YqNi52K8vLFxuICAgIGV2ZW5pbmc6IC9e2YUvLFxuICAgIG5pZ2h0OiAvXtmEL1xuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==