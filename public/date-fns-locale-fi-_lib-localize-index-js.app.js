(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fi-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/fi/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/localize/index.js ***!
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
  narrow: ['eaa.', 'jaa.'],
  abbreviated: ['eaa.', 'jaa.'],
  wide: ['ennen ajanlaskun alkua', 'jälkeen ajanlaskun alun']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. kvartaali', '2. kvartaali', '3. kvartaali', '4. kvartaali']
};
var monthValues = {
  narrow: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
  abbreviated: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
  wide: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
};
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: monthValues.abbreviated,
  wide: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
  short: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  abbreviated: ['sunn.', 'maan.', 'tiis.', 'kesk.', 'torst.', 'perj.', 'la'],
  wide: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
};
var formattingDayValues = {
  narrow: dayValues.narrow,
  short: dayValues.short,
  abbreviated: dayValues.abbreviated,
  wide: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina']
};
var dayPeriodValues = {
  narrow: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  abbreviated: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  wide: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyöllä',
    noon: 'keskipäivällä',
    morning: 'aamupäivällä',
    afternoon: 'iltapäivällä',
    evening: 'illalla',
    night: 'yöllä'
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZpL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZmktX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2VhYS4nLCAnamFhLiddLFxuICBhYmJyZXZpYXRlZDogWydlYWEuJywgJ2phYS4nXSxcbiAgd2lkZTogWydlbm5lbiBhamFubGFza3VuIGFsa3VhJywgJ2rDpGxrZWVuIGFqYW5sYXNrdW4gYWx1biddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMS4ga3ZhcnRhYWxpJywgJzIuIGt2YXJ0YWFsaScsICczLiBrdmFydGFhbGknLCAnNC4ga3ZhcnRhYWxpJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydUJywgJ0gnLCAnTScsICdIJywgJ1QnLCAnSycsICdIJywgJ0UnLCAnUycsICdMJywgJ00nLCAnSiddLFxuICBhYmJyZXZpYXRlZDogWyd0YW1taScsICdoZWxtaScsICdtYWFsaXMnLCAnaHVodGknLCAndG91a28nLCAna2Vzw6QnLCAnaGVpbsOkJywgJ2VsbycsICdzeXlzJywgJ2xva2EnLCAnbWFycmFzJywgJ2pvdWx1J10sXG4gIHdpZGU6IFsndGFtbWlrdXUnLCAnaGVsbWlrdXUnLCAnbWFhbGlza3V1JywgJ2h1aHRpa3V1JywgJ3RvdWtva3V1JywgJ2tlc8Oka3V1JywgJ2hlaW7DpGt1dScsICdlbG9rdXUnLCAnc3l5c2t1dScsICdsb2tha3V1JywgJ21hcnJhc2t1dScsICdqb3VsdWt1dSddXG59O1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBtb250aFZhbHVlcy5uYXJyb3csXG4gIGFiYnJldmlhdGVkOiBtb250aFZhbHVlcy5hYmJyZXZpYXRlZCxcbiAgd2lkZTogWyd0YW1taWt1dXRhJywgJ2hlbG1pa3V1dGEnLCAnbWFhbGlza3V1dGEnLCAnaHVodGlrdXV0YScsICd0b3Vrb2t1dXRhJywgJ2tlc8Oka3V1dGEnLCAnaGVpbsOka3V1dGEnLCAnZWxva3V1dGEnLCAnc3l5c2t1dXRhJywgJ2xva2FrdXV0YScsICdtYXJyYXNrdXV0YScsICdqb3VsdWt1dXRhJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnSycsICdUJywgJ1AnLCAnTCddLFxuICBzaG9ydDogWydzdScsICdtYScsICd0aScsICdrZScsICd0bycsICdwZScsICdsYSddLFxuICBhYmJyZXZpYXRlZDogWydzdW5uLicsICdtYWFuLicsICd0aWlzLicsICdrZXNrLicsICd0b3JzdC4nLCAncGVyai4nLCAnbGEnXSxcbiAgd2lkZTogWydzdW5udW50YWknLCAnbWFhbmFudGFpJywgJ3RpaXN0YWknLCAna2Vza2l2aWlra28nLCAndG9yc3RhaScsICdwZXJqYW50YWknLCAnbGF1YW50YWknXVxufTtcbnZhciBmb3JtYXR0aW5nRGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IGRheVZhbHVlcy5uYXJyb3csXG4gIHNob3J0OiBkYXlWYWx1ZXMuc2hvcnQsXG4gIGFiYnJldmlhdGVkOiBkYXlWYWx1ZXMuYWJicmV2aWF0ZWQsXG4gIHdpZGU6IFsnc3VubnVudGFpbmEnLCAnbWFhbmFudGFpbmEnLCAndGlpc3RhaW5hJywgJ2tlc2tpdmlpa2tvbmEnLCAndG9yc3RhaW5hJywgJ3BlcmphbnRhaW5hJywgJ2xhdWFudGFpbmEnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYXAnLFxuICAgIHBtOiAnaXAnLFxuICAgIG1pZG5pZ2h0OiAna2Vza2l5w7YnLFxuICAgIG5vb246ICdrZXNraXDDpGl2w6QnLFxuICAgIG1vcm5pbmc6ICdhcCcsXG4gICAgYWZ0ZXJub29uOiAnaXAnLFxuICAgIGV2ZW5pbmc6ICdpbGxhbGxhJyxcbiAgICBuaWdodDogJ3nDtmxsw6QnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdhcCcsXG4gICAgcG06ICdpcCcsXG4gICAgbWlkbmlnaHQ6ICdrZXNraXnDticsXG4gICAgbm9vbjogJ2tlc2tpcMOkaXbDpCcsXG4gICAgbW9ybmluZzogJ2FwJyxcbiAgICBhZnRlcm5vb246ICdpcCcsXG4gICAgZXZlbmluZzogJ2lsbGFsbGEnLFxuICAgIG5pZ2h0OiAnecO2bGzDpCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYXAnLFxuICAgIHBtOiAnaXAnLFxuICAgIG1pZG5pZ2h0OiAna2Vza2l5w7ZsbMOkJyxcbiAgICBub29uOiAna2Vza2lww6RpdsOkbGzDpCcsXG4gICAgbW9ybmluZzogJ2FhbXVww6RpdsOkbGzDpCcsXG4gICAgYWZ0ZXJub29uOiAnaWx0YXDDpGl2w6RsbMOkJyxcbiAgICBldmVuaW5nOiAnaWxsYWxsYScsXG4gICAgbmlnaHQ6ICd5w7ZsbMOkJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=