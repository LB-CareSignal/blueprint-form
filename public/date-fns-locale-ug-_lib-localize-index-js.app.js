(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ug-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ug/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/localize/index.js ***!
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
  narrow: ['ب', 'ك'],
  abbreviated: ['ب', 'ك'],
  wide: ['مىيلادىدىن بۇرۇن', 'مىيلادىدىن كىيىن']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1', '2', '3', '4'],
  wide: ['بىرىنجى چارەك', 'ئىككىنجى چارەك', 'ئۈچىنجى چارەك', 'تۆتىنجى چارەك']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ي', 'ف', 'م', 'ا', 'م', 'ى', 'ى', 'ا', 'س', 'ۆ', 'ن', 'د'],
  abbreviated: ['يانۋار', 'فېۋىرال', 'مارت', 'ئاپرىل', 'ماي', 'ئىيۇن', 'ئىيول', 'ئاۋغۇست', 'سىنتەبىر', 'ئۆكتەبىر', 'نويابىر', 'دىكابىر'],
  wide: ['يانۋار', 'فېۋىرال', 'مارت', 'ئاپرىل', 'ماي', 'ئىيۇن', 'ئىيول', 'ئاۋغۇست', 'سىنتەبىر', 'ئۆكتەبىر', 'نويابىر', 'دىكابىر']
};
var dayValues = {
  narrow: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  short: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  abbreviated: ['يەكشەنبە', 'دۈشەنبە', 'سەيشەنبە', 'چارشەنبە', 'پەيشەنبە', 'جۈمە', 'شەنبە'],
  wide: ['يەكشەنبە', 'دۈشەنبە', 'سەيشەنبە', 'چارشەنبە', 'پەيشەنبە', 'جۈمە', 'شەنبە']
};
var dayPeriodValues = {
  narrow: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  },
  abbreviated: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  },
  wide: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
  },
  abbreviated: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
  },
  wide: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VnL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXVnLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfYqCcsICfZgyddLFxuICBhYmJyZXZpYXRlZDogWyfYqCcsICfZgyddLFxuICB3aWRlOiBbJ9mF2YnZitmE2KfYr9mJ2K/ZidmGINio24fYsduH2YYnLCAn2YXZidmK2YTYp9iv2YnYr9mJ2YYg2YPZidmK2YnZhiddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgd2lkZTogWyfYqNmJ2LHZidmG2KzZiSDahtin2LHbldmDJywgJ9im2YnZg9mD2YnZhtis2Ykg2obYp9ix25XZgycsICfYptuI2obZidmG2KzZiSDahtin2LHbldmDJywgJ9iq24bYqtmJ2YbYrNmJINqG2KfYsduV2YMnXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn2YonLCAn2YEnLCAn2YUnLCAn2KcnLCAn2YUnLCAn2YknLCAn2YknLCAn2KcnLCAn2LMnLCAn24YnLCAn2YYnLCAn2K8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn2YrYp9mG24vYp9ixJywgJ9mB25Dbi9mJ2LHYp9mEJywgJ9mF2KfYsdiqJywgJ9im2KfZvtix2YnZhCcsICfZhdin2YonLCAn2KbZidmK24fZhicsICfYptmJ2YrZiNmEJywgJ9im2Kfbi9i624fYs9iqJywgJ9iz2YnZhtiq25XYqNmJ2LEnLCAn2KbbhtmD2Krbldio2YnYsScsICfZhtmI2YrYp9io2YnYsScsICfYr9mJ2YPYp9io2YnYsSddLFxuICB3aWRlOiBbJ9mK2KfZhtuL2KfYsScsICfZgduQ24vZidix2KfZhCcsICfZhdin2LHYqicsICfYptin2b7YsdmJ2YQnLCAn2YXYp9mKJywgJ9im2YnZituH2YYnLCAn2KbZidmK2YjZhCcsICfYptin24vYutuH2LPYqicsICfYs9mJ2YbYqtuV2KjZidixJywgJ9im24bZg9iq25XYqNmJ2LEnLCAn2YbZiNmK2KfYqNmJ2LEnLCAn2K/ZidmD2KfYqNmJ2LEnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZiicsICfYrycsICfYsycsICfahicsICfZvicsICfYrCcsICfYtCddLFxuICBzaG9ydDogWyfZiicsICfYrycsICfYsycsICfahicsICfZvicsICfYrCcsICfYtCddLFxuICBhYmJyZXZpYXRlZDogWyfZituV2YPYtNuV2YbYqNuVJywgJ9iv24jYtNuV2YbYqNuVJywgJ9iz25XZiti025XZhtio25UnLCAn2obYp9ix2LTbldmG2KjblScsICfZvtuV2YrYtNuV2YbYqNuVJywgJ9is24jZhduVJywgJ9i025XZhtio25UnXSxcbiAgd2lkZTogWyfZituV2YPYtNuV2YbYqNuVJywgJ9iv24jYtNuV2YbYqNuVJywgJ9iz25XZiti025XZhtio25UnLCAn2obYp9ix2LTbldmG2KjblScsICfZvtuV2YrYtNuV2YbYqNuVJywgJ9is24jZhduVJywgJ9i025XZhtio25UnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn2KbblScsXG4gICAgcG06ICfahicsXG4gICAgbWlkbmlnaHQ6ICfZgycsXG4gICAgbm9vbjogJ9qGJyxcbiAgICBtb3JuaW5nOiAn2Kbbldiq2Ynar9uV2YYnLFxuICAgIGFmdGVybm9vbjogJ9qG24jYtNiq2YnZhiDZg9mJ2YrZidmGJyxcbiAgICBldmVuaW5nOiAn2KbYp9iu2LTZidmFJyxcbiAgICBuaWdodDogJ9mD2YnahtuVJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn2KbblScsXG4gICAgcG06ICfahicsXG4gICAgbWlkbmlnaHQ6ICfZgycsXG4gICAgbm9vbjogJ9qGJyxcbiAgICBtb3JuaW5nOiAn2Kbbldiq2Ynar9uV2YYnLFxuICAgIGFmdGVybm9vbjogJ9qG24jYtNiq2YnZhiDZg9mJ2YrZidmGJyxcbiAgICBldmVuaW5nOiAn2KbYp9iu2LTZidmFJyxcbiAgICBuaWdodDogJ9mD2YnahtuVJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfYptuVJyxcbiAgICBwbTogJ9qGJyxcbiAgICBtaWRuaWdodDogJ9mDJyxcbiAgICBub29uOiAn2oYnLFxuICAgIG1vcm5pbmc6ICfYptuV2KrZidqv25XZhicsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNmJ2YUnLFxuICAgIG5pZ2h0OiAn2YPZidqG25UnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfYptuVJyxcbiAgICBwbTogJ9qGJyxcbiAgICBtaWRuaWdodDogJ9mDJyxcbiAgICBub29uOiAn2oYnLFxuICAgIG1vcm5pbmc6ICfYptuV2KrZidqv25XZhtiv25UnLFxuICAgIGFmdGVybm9vbjogJ9qG24jYtNiq2YnZhiDZg9mJ2YrZidmGJyxcbiAgICBldmVuaW5nOiAn2KbYp9iu2LTYp9mF2K/YpycsXG4gICAgbmlnaHQ6ICfZg9mJ2obZidiv25UnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfYptuVJyxcbiAgICBwbTogJ9qGJyxcbiAgICBtaWRuaWdodDogJ9mDJyxcbiAgICBub29uOiAn2oYnLFxuICAgIG1vcm5pbmc6ICfYptuV2KrZidqv25XZhtiv25UnLFxuICAgIGFmdGVybm9vbjogJ9qG24jYtNiq2YnZhiDZg9mJ2YrZidmGJyxcbiAgICBldmVuaW5nOiAn2KbYp9iu2LTYp9mF2K/YpycsXG4gICAgbmlnaHQ6ICfZg9mJ2obZidiv25UnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9im25UnLFxuICAgIHBtOiAn2oYnLFxuICAgIG1pZG5pZ2h0OiAn2YMnLFxuICAgIG5vb246ICfahicsXG4gICAgbW9ybmluZzogJ9im25XYqtmJ2q/bldmG2K/blScsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNin2YXYr9inJyxcbiAgICBuaWdodDogJ9mD2YnahtmJ2K/blSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIFN0cmluZyhkaXJ0eU51bWJlcik7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==