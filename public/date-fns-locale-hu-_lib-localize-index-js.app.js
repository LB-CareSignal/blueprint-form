(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hu-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/hu/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/hu/_lib/localize/index.js ***!
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
  narrow: ['ie.', 'isz.'],
  abbreviated: ['i. e.', 'i. sz.'],
  wide: ['Krisztus előtt', 'időszámításunk szerint']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. n.év', '2. n.év', '3. n.év', '4. n.év'],
  wide: ['1. negyedév', '2. negyedév', '3. negyedév', '4. negyedév']
};
var formattingQuarterValues = {
  narrow: ['I.', 'II.', 'III.', 'IV.'],
  abbreviated: ['I. n.év', 'II. n.év', 'III. n.év', 'IV. n.év'],
  wide: ['I. negyedév', 'II. negyedév', 'III. negyedév', 'IV. negyedév']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'Á', 'M', 'J', 'J', 'A', 'Sz', 'O', 'N', 'D'],
  abbreviated: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
  wide: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december']
};
var dayValues = {
  narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
  short: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  abbreviated: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  wide: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
};
var dayPeriodValues = {
  narrow: {
    am: 'de.',
    pm: 'du.',
    midnight: 'éjfél',
    noon: 'dél',
    morning: 'reggel',
    afternoon: 'du.',
    evening: 'este',
    night: 'éjjel'
  },
  abbreviated: {
    am: 'de.',
    pm: 'du.',
    midnight: 'éjfél',
    noon: 'dél',
    morning: 'reggel',
    afternoon: 'du.',
    evening: 'este',
    night: 'éjjel'
  },
  wide: {
    am: 'de.',
    pm: 'du.',
    midnight: 'éjfél',
    noon: 'dél',
    morning: 'reggel',
    afternoon: 'délután',
    evening: 'este',
    night: 'éjjel'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
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
    },
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide'
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
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h1L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWh1LV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydpZS4nLCAnaXN6LiddLFxuICBhYmJyZXZpYXRlZDogWydpLiBlLicsICdpLiBzei4nXSxcbiAgd2lkZTogWydLcmlzenR1cyBlbMWRdHQnLCAnaWTFkXN6w6Ftw610w6FzdW5rIHN6ZXJpbnQnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4gbi7DqXYnLCAnMi4gbi7DqXYnLCAnMy4gbi7DqXYnLCAnNC4gbi7DqXYnXSxcbiAgd2lkZTogWycxLiBuZWd5ZWTDqXYnLCAnMi4gbmVneWVkw6l2JywgJzMuIG5lZ3llZMOpdicsICc0LiBuZWd5ZWTDqXYnXVxufTtcbnZhciBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0kuJywgJ0lJLicsICdJSUkuJywgJ0lWLiddLFxuICBhYmJyZXZpYXRlZDogWydJLiBuLsOpdicsICdJSS4gbi7DqXYnLCAnSUlJLiBuLsOpdicsICdJVi4gbi7DqXYnXSxcbiAgd2lkZTogWydJLiBuZWd5ZWTDqXYnLCAnSUkuIG5lZ3llZMOpdicsICdJSUkuIG5lZ3llZMOpdicsICdJVi4gbmVneWVkw6l2J11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICfDgScsICdNJywgJ0onLCAnSicsICdBJywgJ1N6JywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbi4nLCAnZmVici4nLCAnbcOhcmMuJywgJ8OhcHIuJywgJ23DoWouJywgJ2rDum4uJywgJ2rDumwuJywgJ2F1Zy4nLCAnc3plcHQuJywgJ29rdC4nLCAnbm92LicsICdkZWMuJ10sXG4gIHdpZGU6IFsnamFudcOhcicsICdmZWJydcOhcicsICdtw6FyY2l1cycsICfDoXByaWxpcycsICdtw6FqdXMnLCAnasO6bml1cycsICdqw7psaXVzJywgJ2F1Z3VzenR1cycsICdzemVwdGVtYmVyJywgJ29rdMOzYmVyJywgJ25vdmVtYmVyJywgJ2RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnVicsICdIJywgJ0snLCAnU3onLCAnQ3MnLCAnUCcsICdTeiddLFxuICBzaG9ydDogWydWJywgJ0gnLCAnSycsICdTemUnLCAnQ3MnLCAnUCcsICdTem8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnVicsICdIJywgJ0snLCAnU3plJywgJ0NzJywgJ1AnLCAnU3pvJ10sXG4gIHdpZGU6IFsndmFzw6FybmFwJywgJ2jDqXRmxZEnLCAna2VkZCcsICdzemVyZGEnLCAnY3PDvHTDtnJ0w7ZrJywgJ3DDqW50ZWsnLCAnc3pvbWJhdCddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdkZS4nLFxuICAgIHBtOiAnZHUuJyxcbiAgICBtaWRuaWdodDogJ8OpambDqWwnLFxuICAgIG5vb246ICdkw6lsJyxcbiAgICBtb3JuaW5nOiAncmVnZ2VsJyxcbiAgICBhZnRlcm5vb246ICdkdS4nLFxuICAgIGV2ZW5pbmc6ICdlc3RlJyxcbiAgICBuaWdodDogJ8OpamplbCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2RlLicsXG4gICAgcG06ICdkdS4nLFxuICAgIG1pZG5pZ2h0OiAnw6lqZsOpbCcsXG4gICAgbm9vbjogJ2TDqWwnLFxuICAgIG1vcm5pbmc6ICdyZWdnZWwnLFxuICAgIGFmdGVybm9vbjogJ2R1LicsXG4gICAgZXZlbmluZzogJ2VzdGUnLFxuICAgIG5pZ2h0OiAnw6lqamVsJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdkZS4nLFxuICAgIHBtOiAnZHUuJyxcbiAgICBtaWRuaWdodDogJ8OpambDqWwnLFxuICAgIG5vb246ICdkw6lsJyxcbiAgICBtb3JuaW5nOiAncmVnZ2VsJyxcbiAgICBhZnRlcm5vb246ICdkw6lsdXTDoW4nLFxuICAgIGV2ZW5pbmc6ICdlc3RlJyxcbiAgICBuaWdodDogJ8OpamplbCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXIgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfSxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=