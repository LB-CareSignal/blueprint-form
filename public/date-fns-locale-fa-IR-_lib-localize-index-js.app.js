(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fa-IR-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/fa-IR/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/fa-IR/_lib/localize/index.js ***!
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
  wide: ['قبل از میلاد', 'بعد از میلاد']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['س‌م1', 'س‌م2', 'س‌م3', 'س‌م4'],
  wide: ['سه‌ماهه 1', 'سه‌ماهه 2', 'سه‌ماهه 3', 'سه‌ماهه 4']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ژ', 'ف', 'م', 'آ', 'م', 'ج', 'ج', 'آ', 'س', 'ا', 'ن', 'د'],
  abbreviated: ['ژانـ', 'فور', 'مارس', 'آپر', 'می', 'جون', 'جولـ', 'آگو', 'سپتـ', 'اکتـ', 'نوامـ', 'دسامـ'],
  wide: ['ژانویه', 'فوریه', 'مارس', 'آپریل', 'می', 'جون', 'جولای', 'آگوست', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
};
var dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  short: ['1ش', '2ش', '3ش', '4ش', '5ش', 'ج', 'ش'],
  abbreviated: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  wide: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
};
var dayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZhLUlSL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWZhLUlSLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZgicsICfYqCddLFxuICBhYmJyZXZpYXRlZDogWyfZgi7ZhS4nLCAn2Kgu2YUuJ10sXG4gIHdpZGU6IFsn2YLYqNmEINin2LIg2YXbjNmE2KfYrycsICfYqNi52K8g2KfYsiDZhduM2YTYp9ivJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn2LPigIzZhTEnLCAn2LPigIzZhTInLCAn2LPigIzZhTMnLCAn2LPigIzZhTQnXSxcbiAgd2lkZTogWyfYs9mH4oCM2YXYp9mH2YcgMScsICfYs9mH4oCM2YXYp9mH2YcgMicsICfYs9mH4oCM2YXYp9mH2YcgMycsICfYs9mH4oCM2YXYp9mH2YcgNCddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfamCcsICfZgScsICfZhScsICfYoicsICfZhScsICfYrCcsICfYrCcsICfYoicsICfYsycsICfYpycsICfZhicsICfYryddLFxuICBhYmJyZXZpYXRlZDogWyfamNin2YbZgCcsICfZgdmI2LEnLCAn2YXYp9ix2LMnLCAn2KLZvtixJywgJ9mF24wnLCAn2KzZiNmGJywgJ9is2YjZhNmAJywgJ9ii2q/ZiCcsICfYs9m+2KrZgCcsICfYp9qp2KrZgCcsICfZhtmI2KfZhdmAJywgJ9iv2LPYp9mF2YAnXSxcbiAgd2lkZTogWyfamNin2YbZiNuM2YcnLCAn2YHZiNix24zZhycsICfZhdin2LHYsycsICfYotm+2LHbjNmEJywgJ9mF24wnLCAn2KzZiNmGJywgJ9is2YjZhNin24wnLCAn2KLar9mI2LPYqicsICfYs9m+2KrYp9mF2KjYsScsICfYp9qp2KrYqNixJywgJ9mG2YjYp9mF2KjYsScsICfYr9iz2KfZhdio2LEnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfbjCcsICfYrycsICfYsycsICfahicsICfZvicsICfYrCcsICfYtCddLFxuICBzaG9ydDogWycx2LQnLCAnMti0JywgJzPYtCcsICc02LQnLCAnNdi0JywgJ9isJywgJ9i0J10sXG4gIGFiYnJldmlhdGVkOiBbJ9uM2qnYtNmG2KjZhycsICfYr9mI2LTZhtio2YcnLCAn2LPZh+KAjNi02YbYqNmHJywgJ9qG2YfYp9ix2LTZhtio2YcnLCAn2b7Zhtis2LTZhtio2YcnLCAn2KzZhdi52YcnLCAn2LTZhtio2YcnXSxcbiAgd2lkZTogWyfbjNqp2LTZhtio2YcnLCAn2K/ZiNi02YbYqNmHJywgJ9iz2YfigIzYtNmG2KjZhycsICfahtmH2KfYsdi02YbYqNmHJywgJ9m+2YbYrNi02YbYqNmHJywgJ9is2YXYudmHJywgJ9i02YbYqNmHJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9mCJyxcbiAgICBwbTogJ9ioJyxcbiAgICBtaWRuaWdodDogJ9mGJyxcbiAgICBub29uOiAn2LgnLFxuICAgIG1vcm5pbmc6ICfYtScsXG4gICAgYWZ0ZXJub29uOiAn2Kgu2LguJyxcbiAgICBldmVuaW5nOiAn2LknLFxuICAgIG5pZ2h0OiAn2LQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfZgi7YuC4nLFxuICAgIHBtOiAn2Kgu2LguJyxcbiAgICBtaWRuaWdodDogJ9mG24zZhdmH4oCM2LTYqCcsXG4gICAgbm9vbjogJ9i42YfYsScsXG4gICAgbW9ybmluZzogJ9i12KjYrScsXG4gICAgYWZ0ZXJub29uOiAn2KjYudiv2KfYsti42YfYsScsXG4gICAgZXZlbmluZzogJ9i52LXYsScsXG4gICAgbmlnaHQ6ICfYtNioJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfZgtio2YTigIzYp9iy2LjZh9ixJyxcbiAgICBwbTogJ9io2LnYr9in2LLYuNmH2LEnLFxuICAgIG1pZG5pZ2h0OiAn2YbbjNmF2YfigIzYtNioJyxcbiAgICBub29uOiAn2LjZh9ixJyxcbiAgICBtb3JuaW5nOiAn2LXYqNitJyxcbiAgICBhZnRlcm5vb246ICfYqNi52K/Yp9iy2LjZh9ixJyxcbiAgICBldmVuaW5nOiAn2LnYtdixJyxcbiAgICBuaWdodDogJ9i02KgnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfZgicsXG4gICAgcG06ICfYqCcsXG4gICAgbWlkbmlnaHQ6ICfZhicsXG4gICAgbm9vbjogJ9i4JyxcbiAgICBtb3JuaW5nOiAn2LUnLFxuICAgIGFmdGVybm9vbjogJ9ioLti4LicsXG4gICAgZXZlbmluZzogJ9i5JyxcbiAgICBuaWdodDogJ9i0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn2YIu2LguJyxcbiAgICBwbTogJ9ioLti4LicsXG4gICAgbWlkbmlnaHQ6ICfZhtuM2YXZh+KAjNi02KgnLFxuICAgIG5vb246ICfYuNmH2LEnLFxuICAgIG1vcm5pbmc6ICfYtdio2K0nLFxuICAgIGFmdGVybm9vbjogJ9io2LnYr9in2LLYuNmH2LEnLFxuICAgIGV2ZW5pbmc6ICfYudi12LEnLFxuICAgIG5pZ2h0OiAn2LTYqCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn2YLYqNmE4oCM2KfYsti42YfYsScsXG4gICAgcG06ICfYqNi52K/Yp9iy2LjZh9ixJyxcbiAgICBtaWRuaWdodDogJ9mG24zZhdmH4oCM2LTYqCcsXG4gICAgbm9vbjogJ9i42YfYsScsXG4gICAgbW9ybmluZzogJ9i12KjYrScsXG4gICAgYWZ0ZXJub29uOiAn2KjYudiv2KfYsti42YfYsScsXG4gICAgZXZlbmluZzogJ9i52LXYsScsXG4gICAgbmlnaHQ6ICfYtNioJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9