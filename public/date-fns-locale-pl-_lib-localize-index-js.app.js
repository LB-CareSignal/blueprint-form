(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-pl-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/pl/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/pl/_lib/localize/index.js ***!
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
  narrow: ['p.n.e.', 'n.e.'],
  abbreviated: ['p.n.e.', 'n.e.'],
  wide: ['przed naszą erą', 'naszej ery']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I kw.', 'II kw.', 'III kw.', 'IV kw.'],
  wide: ['I kwartał', 'II kwartał', 'III kwartał', 'IV kwartał']
};
var monthValues = {
  narrow: ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'],
  abbreviated: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  wide: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
};
var monthFormattingValues = {
  narrow: ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'],
  abbreviated: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  wide: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
};
var dayValues = {
  narrow: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
  short: ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
  abbreviated: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  wide: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
};
var dayFormattingValues = {
  narrow: ['n', 'p', 'w', 'ś', 'c', 'p', 's'],
  short: ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'],
  abbreviated: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
  wide: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'półn.',
    noon: 'poł',
    morning: 'rano',
    afternoon: 'popoł.',
    evening: 'wiecz.',
    night: 'noc'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'północ',
    noon: 'południe',
    morning: 'rano',
    afternoon: 'popołudnie',
    evening: 'wieczór',
    night: 'noc'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'północ',
    noon: 'południe',
    morning: 'rano',
    afternoon: 'popołudnie',
    evening: 'wieczór',
    night: 'noc'
  }
};
var dayPeriodFormattingValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'o półn.',
    noon: 'w poł.',
    morning: 'rano',
    afternoon: 'po poł.',
    evening: 'wiecz.',
    night: 'w nocy'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o północy',
    noon: 'w południe',
    morning: 'rano',
    afternoon: 'po południu',
    evening: 'wieczorem',
    night: 'w nocy'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o północy',
    noon: 'w południe',
    morning: 'rano',
    afternoon: 'po południu',
    evening: 'wieczorem',
    night: 'w nocy'
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
    defaultWidth: 'wide',
    formattingValues: monthFormattingValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: dayFormattingValues,
    defaultFormattingWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: dayPeriodFormattingValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3BsL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXBsLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydwLm4uZS4nLCAnbi5lLiddLFxuICBhYmJyZXZpYXRlZDogWydwLm4uZS4nLCAnbi5lLiddLFxuICB3aWRlOiBbJ3ByemVkIG5hc3rEhSBlcsSFJywgJ25hc3plaiBlcnknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydJIGt3LicsICdJSSBrdy4nLCAnSUlJIGt3LicsICdJViBrdy4nXSxcbiAgd2lkZTogWydJIGt3YXJ0YcWCJywgJ0lJIGt3YXJ0YcWCJywgJ0lJSSBrd2FydGHFgicsICdJViBrd2FydGHFgiddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdMJywgJ00nLCAnSycsICdNJywgJ0MnLCAnTCcsICdTJywgJ1cnLCAnUCcsICdMJywgJ0cnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3R5JywgJ2x1dCcsICdtYXInLCAna3dpJywgJ21haicsICdjemUnLCAnbGlwJywgJ3NpZScsICd3cnonLCAncGHFuicsICdsaXMnLCAnZ3J1J10sXG4gIHdpZGU6IFsnc3R5Y3plxYQnLCAnbHV0eScsICdtYXJ6ZWMnLCAna3dpZWNpZcWEJywgJ21haicsICdjemVyd2llYycsICdsaXBpZWMnLCAnc2llcnBpZcWEJywgJ3dyemVzaWXFhCcsICdwYcW6ZHppZXJuaWsnLCAnbGlzdG9wYWQnLCAnZ3J1ZHppZcWEJ11cbn07XG52YXIgbW9udGhGb3JtYXR0aW5nVmFsdWVzID0ge1xuICBuYXJyb3c6IFsncycsICdsJywgJ20nLCAnaycsICdtJywgJ2MnLCAnbCcsICdzJywgJ3cnLCAncCcsICdsJywgJ2cnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3R5JywgJ2x1dCcsICdtYXInLCAna3dpJywgJ21haicsICdjemUnLCAnbGlwJywgJ3NpZScsICd3cnonLCAncGHFuicsICdsaXMnLCAnZ3J1J10sXG4gIHdpZGU6IFsnc3R5Y3puaWEnLCAnbHV0ZWdvJywgJ21hcmNhJywgJ2t3aWV0bmlhJywgJ21hamEnLCAnY3plcndjYScsICdsaXBjYScsICdzaWVycG5pYScsICd3cnplxZtuaWEnLCAncGHFumR6aWVybmlrYScsICdsaXN0b3BhZGEnLCAnZ3J1ZG5pYSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ04nLCAnUCcsICdXJywgJ8WaJywgJ0MnLCAnUCcsICdTJ10sXG4gIHNob3J0OiBbJ25pZScsICdwb24nLCAnd3RvJywgJ8Wbcm8nLCAnY3p3JywgJ3BpxIUnLCAnc29iJ10sXG4gIGFiYnJldmlhdGVkOiBbJ25pZWR6LicsICdwb24uJywgJ3d0LicsICfFm3IuJywgJ2N6dy4nLCAncHQuJywgJ3NvYi4nXSxcbiAgd2lkZTogWyduaWVkemllbGEnLCAncG9uaWVkemlhxYJlaycsICd3dG9yZWsnLCAnxZtyb2RhJywgJ2N6d2FydGVrJywgJ3BpxIV0ZWsnLCAnc29ib3RhJ11cbn07XG52YXIgZGF5Rm9ybWF0dGluZ1ZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ24nLCAncCcsICd3JywgJ8WbJywgJ2MnLCAncCcsICdzJ10sXG4gIHNob3J0OiBbJ25pZScsICdwb24nLCAnd3RvJywgJ8Wbcm8nLCAnY3p3JywgJ3BpxIUnLCAnc29iJ10sXG4gIGFiYnJldmlhdGVkOiBbJ25pZWR6LicsICdwb24uJywgJ3d0LicsICfFm3IuJywgJ2N6dy4nLCAncHQuJywgJ3NvYi4nXSxcbiAgd2lkZTogWyduaWVkemllbGEnLCAncG9uaWVkemlhxYJlaycsICd3dG9yZWsnLCAnxZtyb2RhJywgJ2N6d2FydGVrJywgJ3BpxIV0ZWsnLCAnc29ib3RhJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdww7PFgm4uJyxcbiAgICBub29uOiAncG/FgicsXG4gICAgbW9ybmluZzogJ3Jhbm8nLFxuICAgIGFmdGVybm9vbjogJ3BvcG/Fgi4nLFxuICAgIGV2ZW5pbmc6ICd3aWVjei4nLFxuICAgIG5pZ2h0OiAnbm9jJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncMOzxYJub2MnLFxuICAgIG5vb246ICdwb8WCdWRuaWUnLFxuICAgIG1vcm5pbmc6ICdyYW5vJyxcbiAgICBhZnRlcm5vb246ICdwb3BvxYJ1ZG5pZScsXG4gICAgZXZlbmluZzogJ3dpZWN6w7NyJyxcbiAgICBuaWdodDogJ25vYydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncMOzxYJub2MnLFxuICAgIG5vb246ICdwb8WCdWRuaWUnLFxuICAgIG1vcm5pbmc6ICdyYW5vJyxcbiAgICBhZnRlcm5vb246ICdwb3BvxYJ1ZG5pZScsXG4gICAgZXZlbmluZzogJ3dpZWN6w7NyJyxcbiAgICBuaWdodDogJ25vYydcbiAgfVxufTtcbnZhciBkYXlQZXJpb2RGb3JtYXR0aW5nVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdvIHDDs8WCbi4nLFxuICAgIG5vb246ICd3IHBvxYIuJyxcbiAgICBtb3JuaW5nOiAncmFubycsXG4gICAgYWZ0ZXJub29uOiAncG8gcG/Fgi4nLFxuICAgIGV2ZW5pbmc6ICd3aWVjei4nLFxuICAgIG5pZ2h0OiAndyBub2N5J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbyBww7PFgm5vY3knLFxuICAgIG5vb246ICd3IHBvxYJ1ZG5pZScsXG4gICAgbW9ybmluZzogJ3Jhbm8nLFxuICAgIGFmdGVybm9vbjogJ3BvIHBvxYJ1ZG5pdScsXG4gICAgZXZlbmluZzogJ3dpZWN6b3JlbScsXG4gICAgbmlnaHQ6ICd3IG5vY3knXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ28gcMOzxYJub2N5JyxcbiAgICBub29uOiAndyBwb8WCdWRuaWUnLFxuICAgIG1vcm5pbmc6ICdyYW5vJyxcbiAgICBhZnRlcm5vb246ICdwbyBwb8WCdWRuaXUnLFxuICAgIGV2ZW5pbmc6ICd3aWVjem9yZW0nLFxuICAgIG5pZ2h0OiAndyBub2N5J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBtb250aEZvcm1hdHRpbmdWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGRheUZvcm1hdHRpbmdWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGRheVBlcmlvZEZvcm1hdHRpbmdWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=