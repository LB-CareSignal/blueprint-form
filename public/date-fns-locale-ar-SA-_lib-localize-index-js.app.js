(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-SA-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-SA/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-SA/_lib/localize/index.js ***!
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
  abbreviated: ['ق.م.', 'ب.م.'],
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
  abbreviated: ['أحد', 'اثنـ', 'ثلا', 'أربـ', 'خميـ', 'جمعة', 'سبت'],
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
    evening: 'مساءاً',
    night: 'ليلاً'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءاً',
    night: 'ليلاً'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءاً',
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
    afternoon: 'بعد الظـهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'في الصباح',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظـهر',
    evening: 'في المساء',
    night: 'في الليل'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLVNBL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWFyLVNBLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZgicsICfYqCddLFxuICBhYmJyZXZpYXRlZDogWyfZgi7ZhS4nLCAn2Kgu2YUuJ10sXG4gIHdpZGU6IFsn2YLYqNmEINin2YTZhdmK2YTYp9ivJywgJ9io2LnYryDYp9mE2YXZitmE2KfYryddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ9ixMScsICfYsTInLCAn2LEzJywgJ9ixNCddLFxuICB3aWRlOiBbJ9in2YTYsdio2Lkg2KfZhNij2YjZhCcsICfYp9mE2LHYqNi5INin2YTYq9in2YbZiicsICfYp9mE2LHYqNi5INin2YTYq9in2YTYqycsICfYp9mE2LHYqNi5INin2YTYsdin2KjYuSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn2YonLCAn2YEnLCAn2YUnLCAn2KMnLCAn2YUnLCAn2YonLCAn2YonLCAn2KMnLCAn2LMnLCAn2KMnLCAn2YYnLCAn2K8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn2YrZhtinJywgJ9mB2KjYsScsICfZhdin2LHYsycsICfYo9io2LHZitmEJywgJ9mF2KfZitmIJywgJ9mK2YjZhtmAJywgJ9mK2YjZhNmAJywgJ9ij2LrYs9mAJywgJ9iz2KjYqtmAJywgJ9ij2YPYqtmAJywgJ9mG2YjZgdmAJywgJ9iv2YrYs9mAJ10sXG4gIHdpZGU6IFsn2YrZhtin2YrYsScsICfZgdio2LHYp9mK2LEnLCAn2YXYp9ix2LMnLCAn2KPYqNix2YrZhCcsICfZhdin2YrZiCcsICfZitmI2YbZitmIJywgJ9mK2YjZhNmK2YgnLCAn2KPYutiz2LfYsycsICfYs9io2KrZhdio2LEnLCAn2KPZg9iq2YjYqNixJywgJ9mG2YjZgdmF2KjYsScsICfYr9mK2LPZhdio2LEnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfYrScsICfZhicsICfYqycsICfYsScsICfYricsICfYrCcsICfYsyddLFxuICBzaG9ydDogWyfYo9it2K8nLCAn2KfYq9mG2YrZhicsICfYq9mE2KfYq9in2KEnLCAn2KPYsdio2LnYp9ihJywgJ9iu2YXZitizJywgJ9is2YXYudipJywgJ9iz2KjYqiddLFxuICBhYmJyZXZpYXRlZDogWyfYo9it2K8nLCAn2KfYq9mG2YAnLCAn2KvZhNinJywgJ9ij2LHYqNmAJywgJ9iu2YXZitmAJywgJ9is2YXYudipJywgJ9iz2KjYqiddLFxuICB3aWRlOiBbJ9in2YTYo9it2K8nLCAn2KfZhNin2KvZhtmK2YYnLCAn2KfZhNir2YTYp9ir2KfYoScsICfYp9mE2KPYsdio2LnYp9ihJywgJ9in2YTYrtmF2YrYsycsICfYp9mE2KzZhdi52KknLCAn2KfZhNiz2KjYqiddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfYtScsXG4gICAgcG06ICfZhScsXG4gICAgbWlkbmlnaHQ6ICfZhicsXG4gICAgbm9vbjogJ9i4JyxcbiAgICBtb3JuaW5nOiAn2LXYqNin2K3Yp9mLJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mF2LPYp9ih2KfZiycsXG4gICAgbmlnaHQ6ICfZhNmK2YTYp9mLJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YbYtdmBINin2YTZhNmK2YQnLFxuICAgIG5vb246ICfYuNmH2LEnLFxuICAgIG1vcm5pbmc6ICfYtdio2KfYrdin2YsnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2YXYs9in2KHYp9mLJyxcbiAgICBuaWdodDogJ9mE2YrZhNin2YsnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtaWRuaWdodDogJ9mG2LXZgSDYp9mE2YTZitmEJyxcbiAgICBub29uOiAn2LjZh9ixJyxcbiAgICBtb3JuaW5nOiAn2LXYqNin2K3Yp9mLJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mF2LPYp9ih2KfZiycsXG4gICAgbmlnaHQ6ICfZhNmK2YTYp9mLJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YYnLFxuICAgIG5vb246ICfYuCcsXG4gICAgbW9ybmluZzogJ9mB2Yog2KfZhNi12KjYp9itJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YDZh9ixJyxcbiAgICBldmVuaW5nOiAn2YHZiiDYp9mE2YXYs9in2KEnLFxuICAgIG5pZ2h0OiAn2YHZiiDYp9mE2YTZitmEJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1pZG5pZ2h0OiAn2YbYtdmBINin2YTZhNmK2YQnLFxuICAgIG5vb246ICfYuNmH2LEnLFxuICAgIG1vcm5pbmc6ICfZgdmKINin2YTYtdio2KfYrScsXG4gICAgYWZ0ZXJub29uOiAn2KjYudivINin2YTYuNmH2LEnLFxuICAgIGV2ZW5pbmc6ICfZgdmKINin2YTZhdiz2KfYoScsXG4gICAgbmlnaHQ6ICfZgdmKINin2YTZhNmK2YQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtaWRuaWdodDogJ9mG2LXZgSDYp9mE2YTZitmEJyxcbiAgICBub29uOiAn2LjZh9ixJyxcbiAgICBtb3JuaW5nOiAn2LXYqNin2K3Yp9mLJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YDZh9ixJyxcbiAgICBldmVuaW5nOiAn2YHZiiDYp9mE2YXYs9in2KEnLFxuICAgIG5pZ2h0OiAn2YHZiiDYp9mE2YTZitmEJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyKSB7XG4gIHJldHVybiBTdHJpbmcoZGlydHlOdW1iZXIpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=