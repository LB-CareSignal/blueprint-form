(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-oc-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/oc/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/localize/index.js ***!
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
  narrow: ['ab. J.C.', 'apr. J.C.'],
  abbreviated: ['ab. J.C.', 'apr. J.C.'],
  wide: ['abans Jèsus-Crist', 'après Jèsus-Crist']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1èr trim.', '2nd trim.', '3en trim.', '4en trim.'],
  wide: ['1èr trimèstre', '2nd trimèstre', '3en trimèstre', '4en trimèstre']
};
var monthValues = {
  narrow: ['GN', 'FB', 'MÇ', 'AB', 'MA', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DC'],
  abbreviated: ['gen.', 'febr.', 'març', 'abr.', 'mai', 'junh', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'dec.'],
  wide: ['genièr', 'febrièr', 'març', 'abril', 'mai', 'junh', 'julhet', 'agost', 'setembre', 'octòbre', 'novembre', 'decembre']
};
var dayValues = {
  narrow: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  wide: ['dimenge', 'diluns', 'dimars', 'dimècres', 'dijòus', 'divendres', 'dissabte']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  var ordinal;
  switch (number) {
    case 1:
      ordinal = 'èr';
      break;
    case 2:
      ordinal = 'nd';
      break;
    default:
      ordinal = 'en';
  }

  // feminine for year, week, hour, minute, second
  if (unit === 'year' || unit === 'week' || unit === 'hour' || unit === 'minute' || unit === 'second') {
    ordinal += 'a';
  }
  return number + ordinal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL29jL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtb2MtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2FiLiBKLkMuJywgJ2Fwci4gSi5DLiddLFxuICBhYmJyZXZpYXRlZDogWydhYi4gSi5DLicsICdhcHIuIEouQy4nXSxcbiAgd2lkZTogWydhYmFucyBKw6hzdXMtQ3Jpc3QnLCAnYXByw6hzIErDqHN1cy1DcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydUMScsICdUMicsICdUMycsICdUNCddLFxuICBhYmJyZXZpYXRlZDogWycxw6hyIHRyaW0uJywgJzJuZCB0cmltLicsICczZW4gdHJpbS4nLCAnNGVuIHRyaW0uJ10sXG4gIHdpZGU6IFsnMcOociB0cmltw6hzdHJlJywgJzJuZCB0cmltw6hzdHJlJywgJzNlbiB0cmltw6hzdHJlJywgJzRlbiB0cmltw6hzdHJlJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUEnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnREMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZ2VuLicsICdmZWJyLicsICdtYXLDpycsICdhYnIuJywgJ21haScsICdqdW5oJywgJ2p1bC4nLCAnYWcuJywgJ3NldC4nLCAnb2N0LicsICdub3YuJywgJ2RlYy4nXSxcbiAgd2lkZTogWydnZW5pw6hyJywgJ2ZlYnJpw6hyJywgJ21hcsOnJywgJ2FicmlsJywgJ21haScsICdqdW5oJywgJ2p1bGhldCcsICdhZ29zdCcsICdzZXRlbWJyZScsICdvY3TDsmJyZScsICdub3ZlbWJyZScsICdkZWNlbWJyZSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2RnLicsICdkbC4nLCAnZG0uJywgJ2RjLicsICdkai4nLCAnZHYuJywgJ2RzLiddLFxuICBzaG9ydDogWydkZy4nLCAnZGwuJywgJ2RtLicsICdkYy4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZGcuJywgJ2RsLicsICdkbS4nLCAnZGMuJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gIHdpZGU6IFsnZGltZW5nZScsICdkaWx1bnMnLCAnZGltYXJzJywgJ2RpbcOoY3JlcycsICdkaWrDsnVzJywgJ2RpdmVuZHJlcycsICdkaXNzYWJ0ZSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdtacOoamFudcOoY2gnLFxuICAgIG5vb246ICdtacOoZ2pvcm4nLFxuICAgIG1vcm5pbmc6ICdtYXRpbicsXG4gICAgYWZ0ZXJub29uOiAnYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ3bDqHNwcmUnLFxuICAgIG5pZ2h0OiAnbnXDqGNoJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pw6hqYW51w6hjaCcsXG4gICAgbm9vbjogJ21pw6hnam9ybicsXG4gICAgbW9ybmluZzogJ21hdGluJyxcbiAgICBhZnRlcm5vb246ICdhcHLDqHAtbWnDqGdqb3JuJyxcbiAgICBldmVuaW5nOiAndsOoc3ByZScsXG4gICAgbmlnaHQ6ICdudcOoY2gnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtacOoamFudcOoY2gnLFxuICAgIG5vb246ICdtacOoZ2pvcm4nLFxuICAgIG1vcm5pbmc6ICdtYXRpbicsXG4gICAgYWZ0ZXJub29uOiAnYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ3bDqHNwcmUnLFxuICAgIG5pZ2h0OiAnbnXDqGNoJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhbnRlIG1lcmlkaWVtJyxcbiAgICBwbTogJ3Bvc3QgbWVyaWRpZW0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICB2YXIgb3JkaW5hbDtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICBvcmRpbmFsID0gJ8Oocic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBvcmRpbmFsID0gJ25kJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBvcmRpbmFsID0gJ2VuJztcbiAgfVxuXG4gIC8vIGZlbWluaW5lIGZvciB5ZWFyLCB3ZWVrLCBob3VyLCBtaW51dGUsIHNlY29uZFxuICBpZiAodW5pdCA9PT0gJ3llYXInIHx8IHVuaXQgPT09ICd3ZWVrJyB8fCB1bml0ID09PSAnaG91cicgfHwgdW5pdCA9PT0gJ21pbnV0ZScgfHwgdW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICBvcmRpbmFsICs9ICdhJztcbiAgfVxuICByZXR1cm4gbnVtYmVyICsgb3JkaW5hbDtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9