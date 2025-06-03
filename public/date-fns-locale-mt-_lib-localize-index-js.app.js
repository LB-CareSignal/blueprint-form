(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mt-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/mt/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/mt/_lib/localize/index.js ***!
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
  narrow: ['Q', 'W'],
  abbreviated: ['QK', 'WK'],
  wide: ['qabel Kristu', 'wara Kristu']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1. kwart', '2. kwart', '3. kwart', '4. kwart']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'Ġ', 'L', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
  wide: ['Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru', 'Ottubru', 'Novembru', 'Diċembru']
};
var dayValues = {
  narrow: ['Ħ', 'T', 'T', 'E', 'Ħ', 'Ġ', 'S'],
  short: ['Ħa', 'Tn', 'Tl', 'Er', 'Ħa', 'Ġi', 'Si'],
  abbreviated: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  wide: ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'nofsillejl',
    noon: 'nofsinhar',
    morning: 'għodwa',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'lejl'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: 'filgħodu',
    afternoon: 'wara nofsinhar',
    evening: 'filgħaxija',
    night: 'billejl'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + 'º';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL210L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbXQtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1EnLCAnVyddLFxuICBhYmJyZXZpYXRlZDogWydRSycsICdXSyddLFxuICB3aWRlOiBbJ3FhYmVsIEtyaXN0dScsICd3YXJhIEtyaXN0dSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ0sxJywgJ0syJywgJ0szJywgJ0s0J10sXG4gIHdpZGU6IFsnMS4ga3dhcnQnLCAnMi4ga3dhcnQnLCAnMy4ga3dhcnQnLCAnNC4ga3dhcnQnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICfEoCcsICdMJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRnJhJywgJ01hcicsICdBcHInLCAnTWVqJywgJ8SgdW4nLCAnTHVsJywgJ0F3dycsICdTZXQnLCAnT3R0JywgJ05vdicsICdEacSLJ10sXG4gIHdpZGU6IFsnSmFubmFyJywgJ0ZyYXInLCAnTWFyenUnLCAnQXByaWwnLCAnTWVqanUnLCAnxKB1bmp1JywgJ0x1bGp1JywgJ0F3d2lzc3UnLCAnU2V0dGVtYnJ1JywgJ090dHVicnUnLCAnTm92ZW1icnUnLCAnRGnEi2VtYnJ1J11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnxKYnLCAnVCcsICdUJywgJ0UnLCAnxKYnLCAnxKAnLCAnUyddLFxuICBzaG9ydDogWyfEpmEnLCAnVG4nLCAnVGwnLCAnRXInLCAnxKZhJywgJ8SgaScsICdTaSddLFxuICBhYmJyZXZpYXRlZDogWyfEpmFkJywgJ1RuZScsICdUbGknLCAnRXJiJywgJ8SmYW0nLCAnxKBpbScsICdTaWInXSxcbiAgd2lkZTogWydJbC3EpmFkZCcsICdJdC1UbmVqbicsICdJdC1UbGlldGEnLCAnTC1FcmJnxKdhJywgJ0lsLcSmYW1pcycsICdJbC3EoGltZ8SnYScsICdJcy1TaWJ0J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdub2ZzaWxsZWpsJyxcbiAgICBub29uOiAnbm9mc2luaGFyJyxcbiAgICBtb3JuaW5nOiAnZ8Snb2R3YScsXG4gICAgYWZ0ZXJub29uOiAnd2FyYSBub2ZzaW5oYXInLFxuICAgIGV2ZW5pbmc6ICdmaWxnxKdheGlqYScsXG4gICAgbmlnaHQ6ICdsZWpsJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbm9mc2lsbGVqbCcsXG4gICAgbm9vbjogJ25vZnNpbmhhcicsXG4gICAgbW9ybmluZzogJ2fEp29kd2EnLFxuICAgIGFmdGVybm9vbjogJ3dhcmEgbm9mc2luaGFyJyxcbiAgICBldmVuaW5nOiAnZmlsZ8SnYXhpamEnLFxuICAgIG5pZ2h0OiAnbGVqbCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ25vZnNpbGxlamwnLFxuICAgIG5vb246ICdub2ZzaW5oYXInLFxuICAgIG1vcm5pbmc6ICdnxKdvZHdhJyxcbiAgICBhZnRlcm5vb246ICd3YXJhIG5vZnNpbmhhcicsXG4gICAgZXZlbmluZzogJ2ZpbGfEp2F4aWphJyxcbiAgICBuaWdodDogJ2xlamwnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiBcImYnbm9mc2lsbGVqbFwiLFxuICAgIG5vb246IFwiZidub2ZzaW5oYXJcIixcbiAgICBtb3JuaW5nOiAnZmlsZ8Snb2R1JyxcbiAgICBhZnRlcm5vb246ICd3YXJhIG5vZnNpbmhhcicsXG4gICAgZXZlbmluZzogJ2ZpbGfEp2F4aWphJyxcbiAgICBuaWdodDogJ2JpbGxlamwnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6IFwiZidub2ZzaWxsZWpsXCIsXG4gICAgbm9vbjogXCJmJ25vZnNpbmhhclwiLFxuICAgIG1vcm5pbmc6ICdmaWxnxKdvZHUnLFxuICAgIGFmdGVybm9vbjogJ3dhcmEgbm9mc2luaGFyJyxcbiAgICBldmVuaW5nOiAnZmlsZ8SnYXhpamEnLFxuICAgIG5pZ2h0OiAnYmlsbGVqbCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogXCJmJ25vZnNpbGxlamxcIixcbiAgICBub29uOiBcImYnbm9mc2luaGFyXCIsXG4gICAgbW9ybmluZzogJ2ZpbGfEp29kdScsXG4gICAgYWZ0ZXJub29uOiAnd2FyYSBub2ZzaW5oYXInLFxuICAgIGV2ZW5pbmc6ICdmaWxnxKdheGlqYScsXG4gICAgbmlnaHQ6ICdiaWxsZWpsJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICfCuic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==