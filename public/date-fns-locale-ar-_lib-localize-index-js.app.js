(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ar/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar/_lib/localize/index.js ***!
  \****************************************************************/
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
  abbreviated: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
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
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    morning: 'الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'المساء',
    night: 'الليل',
    midnight: 'منتصف الليل'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    morning: 'في الصباح',
    noon: 'الظهر',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل',
    midnight: 'منتصف الليل'
  }
};
var ordinalNumber = function ordinalNumber(num) {
  return String(num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWFyLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZgicsICfYqCddLFxuICBhYmJyZXZpYXRlZDogWyfZgi7ZhS4nLCAn2Kgu2YUuJ10sXG4gIHdpZGU6IFsn2YLYqNmEINin2YTZhdmK2YTYp9ivJywgJ9io2LnYryDYp9mE2YXZitmE2KfYryddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ9ixMScsICfYsTInLCAn2LEzJywgJ9ixNCddLFxuICB3aWRlOiBbJ9in2YTYsdio2Lkg2KfZhNij2YjZhCcsICfYp9mE2LHYqNi5INin2YTYq9in2YbZiicsICfYp9mE2LHYqNi5INin2YTYq9in2YTYqycsICfYp9mE2LHYqNi5INin2YTYsdin2KjYuSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn2YonLCAn2YEnLCAn2YUnLCAn2KMnLCAn2YUnLCAn2YonLCAn2YonLCAn2KMnLCAn2LMnLCAn2KMnLCAn2YYnLCAn2K8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn2YrZhtin2YrYsScsICfZgdio2LHYp9mK2LEnLCAn2YXYp9ix2LMnLCAn2KPYqNix2YrZhCcsICfZhdin2YrZiCcsICfZitmI2YbZitmIJywgJ9mK2YjZhNmK2YgnLCAn2KPYutiz2LfYsycsICfYs9io2KrZhdio2LEnLCAn2KPZg9iq2YjYqNixJywgJ9mG2YjZgdmF2KjYsScsICfYr9mK2LPZhdio2LEnXSxcbiAgd2lkZTogWyfZitmG2KfZitixJywgJ9mB2KjYsdin2YrYsScsICfZhdin2LHYsycsICfYo9io2LHZitmEJywgJ9mF2KfZitmIJywgJ9mK2YjZhtmK2YgnLCAn2YrZiNmE2YrZiCcsICfYo9i62LPYt9izJywgJ9iz2KjYqtmF2KjYsScsICfYo9mD2KrZiNio2LEnLCAn2YbZiNmB2YXYqNixJywgJ9iv2YrYs9mF2KjYsSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9itJywgJ9mGJywgJ9irJywgJ9ixJywgJ9iuJywgJ9isJywgJ9izJ10sXG4gIHNob3J0OiBbJ9ij2K3YrycsICfYp9ir2YbZitmGJywgJ9ir2YTYp9ir2KfYoScsICfYo9ix2KjYudin2KEnLCAn2K7ZhdmK2LMnLCAn2KzZhdi52KknLCAn2LPYqNiqJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9ij2K3YrycsICfYp9ir2YbZitmGJywgJ9ir2YTYp9ir2KfYoScsICfYo9ix2KjYudin2KEnLCAn2K7ZhdmK2LMnLCAn2KzZhdi52KknLCAn2LPYqNiqJ10sXG4gIHdpZGU6IFsn2KfZhNij2K3YrycsICfYp9mE2KfYq9mG2YrZhicsICfYp9mE2KvZhNin2KvYp9ihJywgJ9in2YTYo9ix2KjYudin2KEnLCAn2KfZhNiu2YXZitizJywgJ9in2YTYrNmF2LnYqScsICfYp9mE2LPYqNiqJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtb3JuaW5nOiAn2KfZhNi12KjYp9itJyxcbiAgICBub29uOiAn2KfZhNi42YfYsScsXG4gICAgYWZ0ZXJub29uOiAn2KjYudivINin2YTYuNmH2LEnLFxuICAgIGV2ZW5pbmc6ICfYp9mE2YXYs9in2KEnLFxuICAgIG5pZ2h0OiAn2KfZhNmE2YrZhCcsXG4gICAgbWlkbmlnaHQ6ICfZhdmG2KrYtdmBINin2YTZhNmK2YQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfYtScsXG4gICAgcG06ICfZhScsXG4gICAgbW9ybmluZzogJ9in2YTYtdio2KfYrScsXG4gICAgbm9vbjogJ9in2YTYuNmH2LEnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9in2YTZhNmK2YQnLFxuICAgIG1pZG5pZ2h0OiAn2YXZhtiq2LXZgSDYp9mE2YTZitmEJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfYtScsXG4gICAgcG06ICfZhScsXG4gICAgbW9ybmluZzogJ9in2YTYtdio2KfYrScsXG4gICAgbm9vbjogJ9in2YTYuNmH2LEnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9in2YTZhNmK2YQnLFxuICAgIG1pZG5pZ2h0OiAn2YXZhtiq2LXZgSDYp9mE2YTZitmEJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn2LUnLFxuICAgIHBtOiAn2YUnLFxuICAgIG1vcm5pbmc6ICfZgdmKINin2YTYtdio2KfYrScsXG4gICAgbm9vbjogJ9in2YTYuNmH2LEnLFxuICAgIGFmdGVybm9vbjogJ9io2LnYryDYp9mE2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2YHZiiDYp9mE2YXYs9in2KEnLFxuICAgIG5pZ2h0OiAn2YHZiiDYp9mE2YTZitmEJyxcbiAgICBtaWRuaWdodDogJ9mF2YbYqti12YEg2KfZhNmE2YrZhCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtb3JuaW5nOiAn2YHZiiDYp9mE2LXYqNin2K0nLFxuICAgIG5vb246ICfYp9mE2LjZh9ixJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mB2Yog2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9mB2Yog2KfZhNmE2YrZhCcsXG4gICAgbWlkbmlnaHQ6ICfZhdmG2KrYtdmBINin2YTZhNmK2YQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9i1JyxcbiAgICBwbTogJ9mFJyxcbiAgICBtb3JuaW5nOiAn2YHZiiDYp9mE2LXYqNin2K0nLFxuICAgIG5vb246ICfYp9mE2LjZh9ixJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K8g2KfZhNi42YfYsScsXG4gICAgZXZlbmluZzogJ9mB2Yog2KfZhNmF2LPYp9ihJyxcbiAgICBuaWdodDogJ9mB2Yog2KfZhNmE2YrZhCcsXG4gICAgbWlkbmlnaHQ6ICfZhdmG2KrYtdmBINin2YTZhNmK2YQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIobnVtKSB7XG4gIHJldHVybiBTdHJpbmcobnVtKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9