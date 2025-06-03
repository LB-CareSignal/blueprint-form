(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-EG-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-EG/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-EG/_lib/localize/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['ق', 'ب'],
  abbreviated: ['ق.م', 'ب.م'],
  wide: ['قبل الميلاد', 'بعد الميلاد']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ر1', 'ر2', 'ر3', 'ر4'],
  wide: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع']
};
var monthValues = {
  narrow: ['ي', 'ف', 'م', 'أ', 'م', 'ي', 'ي', 'أ', 'س', 'أ', 'ن', 'د'],
  abbreviated: ['ينا', 'فبر', 'مارس', 'أبريل', 'مايو', 'يونـ', 'يولـ', 'أغسـ', 'سبتـ', 'أكتـ', 'نوفـ', 'ديسـ'],
  wide: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
};
var dayValues = {
  narrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  short: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  abbreviated: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
};
var dayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءً',
    night: 'ليلاً'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهراً',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءً',
    night: 'ليلاً'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهراً',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءً',
    night: 'ليلاً'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'في الصباح',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهراً',
    morning: 'في الصباح',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    morning: 'في الصباح',
    noon: 'ظهراً',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLUVHL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWFyLUVHLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZgicsICfYqCddLFxuICBhYmJyZXZpYXRlZDogWyfZgi7ZhScsICfYqC7ZhSddLFxuICB3aWRlOiBbJ9mC2KjZhCDYp9mE2YXZitmE2KfYrycsICfYqNi52K8g2KfZhNmF2YrZhNin2K8nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWyfYsTEnLCAn2LEyJywgJ9ixMycsICfYsTQnXSxcbiAgd2lkZTogWyfYp9mE2LHYqNi5INin2YTYo9mI2YQnLCAn2KfZhNix2KjYuSDYp9mE2KvYp9mG2YonLCAn2KfZhNix2KjYuSDYp9mE2KvYp9mE2KsnLCAn2KfZhNix2KjYuSDYp9mE2LHYp9io2LknXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9mKJywgJ9mBJywgJ9mFJywgJ9ijJywgJ9mFJywgJ9mKJywgJ9mKJywgJ9ijJywgJ9izJywgJ9ijJywgJ9mGJywgJ9ivJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9mK2YbYpycsICfZgdio2LEnLCAn2YXYp9ix2LMnLCAn2KPYqNix2YrZhCcsICfZhdin2YrZiCcsICfZitmI2YbZgCcsICfZitmI2YTZgCcsICfYo9i62LPZgCcsICfYs9io2KrZgCcsICfYo9mD2KrZgCcsICfZhtmI2YHZgCcsICfYr9mK2LPZgCddLFxuICB3aWRlOiBbJ9mK2YbYp9mK2LEnLCAn2YHYqNix2KfZitixJywgJ9mF2KfYsdizJywgJ9ij2KjYsdmK2YQnLCAn2YXYp9mK2YgnLCAn2YrZiNmG2YrZiCcsICfZitmI2YTZitmIJywgJ9ij2LrYs9i32LMnLCAn2LPYqNiq2YXYqNixJywgJ9ij2YPYqtmI2KjYsScsICfZhtmI2YHZhdio2LEnLCAn2K/Zitiz2YXYqNixJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn2K0nLCAn2YYnLCAn2KsnLCAn2LEnLCAn2K4nLCAn2KwnLCAn2LMnXSxcbiAgc2hvcnQ6IFsn2KPYrdivJywgJ9in2KvZhtmK2YYnLCAn2KvZhNin2KvYp9ihJywgJ9ij2LHYqNi52KfYoScsICfYrtmF2YrYsycsICfYrNmF2LnYqScsICfYs9io2KonXSxcbiAgYWJicmV2aWF0ZWQ6IFsn2KPYrdivJywgJ9in2KvZhtmK2YYnLCAn2KvZhNin2KvYp9ihJywgJ9ij2LHYqNi52KfYoScsICfYrtmF2YrYsycsICfYrNmF2LnYqScsICfYs9io2KonXSxcbiAgd2lkZTogWyfYp9mE2KPYrdivJywgJ9in2YTYp9ir2YbZitmGJywgJ9in2YTYq9mE2KfYq9in2KEnLCAn2KfZhNij2LHYqNi52KfYoScsICfYp9mE2K7ZhdmK2LMnLCAn2KfZhNis2YXYudipJywgJ9in2YTYs9io2KonXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YYnLFxuICAgIG5vb246ICfYuCcsXG4gICAgbW9ybmluZzogJ9i12KjYp9it2KfZiycsXG4gICAgYWZ0ZXJub29uOiAn2KjYudivINin2YTYuNmH2LEnLFxuICAgIGV2ZW5pbmc6ICfZhdiz2KfYodmLJyxcbiAgICBuaWdodDogJ9mE2YrZhNin2YsnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfYtScsXG4gICAgcG06ICfZhScsXG4gICAgbWlkbmlnaHQ6ICfZhti12YEg2KfZhNmE2YrZhCcsXG4gICAgbm9vbjogJ9i42YfYsdin2YsnLFxuICAgIG1vcm5pbmc6ICfYtdio2KfYrdin2YsnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2YXYs9in2KHZiycsXG4gICAgbmlnaHQ6ICfZhNmK2YTYp9mLJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfYtScsXG4gICAgcG06ICfZhScsXG4gICAgbWlkbmlnaHQ6ICfZhti12YEg2KfZhNmE2YrZhCcsXG4gICAgbm9vbjogJ9i42YfYsdin2YsnLFxuICAgIG1vcm5pbmc6ICfYtdio2KfYrdin2YsnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2YXYs9in2KHZiycsXG4gICAgbmlnaHQ6ICfZhNmK2YTYp9mLJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YYnLFxuICAgIG5vb246ICfYuCcsXG4gICAgbW9ybmluZzogJ9mB2Yog2KfZhNi12KjYp9itJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mB2Yog2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9mB2Yog2KfZhNmE2YrZhCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtaWRuaWdodDogJ9mG2LXZgSDYp9mE2YTZitmEJyxcbiAgICBub29uOiAn2LjZh9ix2KfZiycsXG4gICAgbW9ybmluZzogJ9mB2Yog2KfZhNi12KjYp9itJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mB2Yog2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9mB2Yog2KfZhNmE2YrZhCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YbYtdmBINin2YTZhNmK2YQnLFxuICAgIG1vcm5pbmc6ICfZgdmKINin2YTYtdio2KfYrScsXG4gICAgbm9vbjogJ9i42YfYsdin2YsnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2YHZiiDYp9mE2YXYs9in2KEnLFxuICAgIG5pZ2h0OiAn2YHZiiDYp9mE2YTZitmEJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9