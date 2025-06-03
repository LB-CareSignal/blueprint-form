(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-eu-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/eu/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/eu/_lib/localize/index.js ***!
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
  narrow: ['k.a.', 'k.o.'],
  abbreviated: ['k.a.', 'k.o.'],
  wide: ['kristo aurretik', 'kristo ondoren']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1H', '2H', '3H', '4H'],
  wide: ['1. hiruhilekoa', '2. hiruhilekoa', '3. hiruhilekoa', '4. hiruhilekoa']
};
var monthValues = {
  narrow: ['u', 'o', 'm', 'a', 'm', 'e', 'u', 'a', 'i', 'u', 'a', 'a'],
  abbreviated: ['urt', 'ots', 'mar', 'api', 'mai', 'eka', 'uzt', 'abu', 'ira', 'urr', 'aza', 'abe'],
  wide: ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina', 'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua']
};
var dayValues = {
  narrow: ['i', 'a', 'a', 'a', 'o', 'o', 'l'],
  short: ['ig', 'al', 'as', 'az', 'og', 'or', 'lr'],
  abbreviated: ['iga', 'ast', 'ast', 'ast', 'ost', 'ost', 'lar'],
  wide: ['igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'ge',
    noon: 'eg',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goiza',
    afternoon: 'arratsaldea',
    evening: 'arratsaldea',
    night: 'gaua'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'ge',
    noon: 'eg',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gauerdia',
    noon: 'eguerdia',
    morning: 'goizean',
    afternoon: 'arratsaldean',
    evening: 'arratsaldean',
    night: 'gauean'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2V1L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZXUtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2suYS4nLCAnay5vLiddLFxuICBhYmJyZXZpYXRlZDogWydrLmEuJywgJ2suby4nXSxcbiAgd2lkZTogWydrcmlzdG8gYXVycmV0aWsnLCAna3Jpc3RvIG9uZG9yZW4nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxSCcsICcySCcsICczSCcsICc0SCddLFxuICB3aWRlOiBbJzEuIGhpcnVoaWxla29hJywgJzIuIGhpcnVoaWxla29hJywgJzMuIGhpcnVoaWxla29hJywgJzQuIGhpcnVoaWxla29hJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyd1JywgJ28nLCAnbScsICdhJywgJ20nLCAnZScsICd1JywgJ2EnLCAnaScsICd1JywgJ2EnLCAnYSddLFxuICBhYmJyZXZpYXRlZDogWyd1cnQnLCAnb3RzJywgJ21hcicsICdhcGknLCAnbWFpJywgJ2VrYScsICd1enQnLCAnYWJ1JywgJ2lyYScsICd1cnInLCAnYXphJywgJ2FiZSddLFxuICB3aWRlOiBbJ3VydGFycmlsYScsICdvdHNhaWxhJywgJ21hcnR4b2EnLCAnYXBpcmlsYScsICdtYWlhdHphJywgJ2VrYWluYScsICd1enRhaWxhJywgJ2FidXp0dWEnLCAnaXJhaWxhJywgJ3VycmlhJywgJ2F6YXJvYScsICdhYmVuZHVhJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnaScsICdhJywgJ2EnLCAnYScsICdvJywgJ28nLCAnbCddLFxuICBzaG9ydDogWydpZycsICdhbCcsICdhcycsICdheicsICdvZycsICdvcicsICdsciddLFxuICBhYmJyZXZpYXRlZDogWydpZ2EnLCAnYXN0JywgJ2FzdCcsICdhc3QnLCAnb3N0JywgJ29zdCcsICdsYXInXSxcbiAgd2lkZTogWydpZ2FuZGVhJywgJ2FzdGVsZWhlbmEnLCAnYXN0ZWFydGVhJywgJ2FzdGVhemtlbmEnLCAnb3N0ZWd1bmEnLCAnb3N0aXJhbGEnLCAnbGFydW5iYXRhJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdnZScsXG4gICAgbm9vbjogJ2VnJyxcbiAgICBtb3JuaW5nOiAnZ29pemEnLFxuICAgIGFmdGVybm9vbjogJ2FycmF0c2FsZGVhJyxcbiAgICBldmVuaW5nOiAnYXJyYXRzYWxkZWEnLFxuICAgIG5pZ2h0OiAnZ2F1YSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ2dhdWVyZGlhJyxcbiAgICBub29uOiAnZWd1ZXJkaWEnLFxuICAgIG1vcm5pbmc6ICdnb2l6YScsXG4gICAgYWZ0ZXJub29uOiAnYXJyYXRzYWxkZWEnLFxuICAgIGV2ZW5pbmc6ICdhcnJhdHNhbGRlYScsXG4gICAgbmlnaHQ6ICdnYXVhJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnZ2F1ZXJkaWEnLFxuICAgIG5vb246ICdlZ3VlcmRpYScsXG4gICAgbW9ybmluZzogJ2dvaXphJyxcbiAgICBhZnRlcm5vb246ICdhcnJhdHNhbGRlYScsXG4gICAgZXZlbmluZzogJ2FycmF0c2FsZGVhJyxcbiAgICBuaWdodDogJ2dhdWEnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnZ2UnLFxuICAgIG5vb246ICdlZycsXG4gICAgbW9ybmluZzogJ2dvaXplYW4nLFxuICAgIGFmdGVybm9vbjogJ2FycmF0c2FsZGVhbicsXG4gICAgZXZlbmluZzogJ2FycmF0c2FsZGVhbicsXG4gICAgbmlnaHQ6ICdnYXVlYW4nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdnYXVlcmRpYScsXG4gICAgbm9vbjogJ2VndWVyZGlhJyxcbiAgICBtb3JuaW5nOiAnZ29pemVhbicsXG4gICAgYWZ0ZXJub29uOiAnYXJyYXRzYWxkZWFuJyxcbiAgICBldmVuaW5nOiAnYXJyYXRzYWxkZWFuJyxcbiAgICBuaWdodDogJ2dhdWVhbidcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ2dhdWVyZGlhJyxcbiAgICBub29uOiAnZWd1ZXJkaWEnLFxuICAgIG1vcm5pbmc6ICdnb2l6ZWFuJyxcbiAgICBhZnRlcm5vb246ICdhcnJhdHNhbGRlYW4nLFxuICAgIGV2ZW5pbmc6ICdhcnJhdHNhbGRlYW4nLFxuICAgIG5pZ2h0OiAnZ2F1ZWFuJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9