(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-el-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/el/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/el/_lib/localize/index.js ***!
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
  narrow: ['πΧ', 'μΧ'],
  abbreviated: ['π.Χ.', 'μ.Χ.'],
  wide: ['προ Χριστού', 'μετά Χριστόν']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Τ1', 'Τ2', 'Τ3', 'Τ4'],
  wide: ['1ο τρίμηνο', '2ο τρίμηνο', '3ο τρίμηνο', '4ο τρίμηνο']
};
var monthValues = {
  narrow: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
  abbreviated: ['Ιαν', 'Φεβ', 'Μάρ', 'Απρ', 'Μάι', 'Ιούν', 'Ιούλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'],
  wide: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
};
var formattingMonthValues = {
  narrow: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
  abbreviated: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
  wide: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
};
var dayValues = {
  narrow: ['Κ', 'Δ', 'T', 'Τ', 'Π', 'Π', 'Σ'],
  short: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά'],
  abbreviated: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
  wide: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
};
var dayPeriodValues = {
  narrow: {
    am: 'πμ',
    pm: 'μμ',
    midnight: 'μεσάνυχτα',
    noon: 'μεσημέρι',
    morning: 'πρωί',
    afternoon: 'απόγευμα',
    evening: 'βράδυ',
    night: 'νύχτα'
  },
  abbreviated: {
    am: 'π.μ.',
    pm: 'μ.μ.',
    midnight: 'μεσάνυχτα',
    noon: 'μεσημέρι',
    morning: 'πρωί',
    afternoon: 'απόγευμα',
    evening: 'βράδυ',
    night: 'νύχτα'
  },
  wide: {
    am: 'π.μ.',
    pm: 'μ.μ.',
    midnight: 'μεσάνυχτα',
    noon: 'μεσημέρι',
    morning: 'πρωί',
    afternoon: 'απόγευμα',
    evening: 'βράδυ',
    night: 'νύχτα'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  var suffix;
  if (unit === 'year' || unit === 'month') {
    suffix = 'ος';
  } else if (unit === 'week' || unit === 'dayOfYear' || unit === 'day' || unit === 'hour' || unit === 'date') {
    suffix = 'η';
  } else {
    suffix = 'ο';
  }
  return number + suffix;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VsL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZWwtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ8+AzqcnLCAnzrzOpyddLFxuICBhYmJyZXZpYXRlZDogWyfPgC7Opy4nLCAnzrwuzqcuJ10sXG4gIHdpZGU6IFsnz4DPgc6/IM6nz4HOuc+Dz4TOv8+NJywgJ868zrXPhM6sIM6nz4HOuc+Dz4TPjM69J11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnzqQxJywgJ86kMicsICfOpDMnLCAnzqQ0J10sXG4gIHdpZGU6IFsnMc6/IM+Ez4HOr868zrfOvc6/JywgJzLOvyDPhM+Bzq/OvM63zr3OvycsICczzr8gz4TPgc6vzrzOt869zr8nLCAnNM6/IM+Ez4HOr868zrfOvc6/J11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfOmScsICfOpicsICfOnCcsICfOkScsICfOnCcsICfOmScsICfOmScsICfOkScsICfOoycsICfOnycsICfOnScsICfOlCddLFxuICBhYmJyZXZpYXRlZDogWyfOmc6xzr0nLCAnzqbOtc6yJywgJ86czqzPgScsICfOkc+Az4EnLCAnzpzOrM65JywgJ86Zzr/Pjc69JywgJ86Zzr/Pjc67JywgJ86Rz43OsycsICfOo861z4AnLCAnzp/Ous+EJywgJ86dzr/OrScsICfOlM61zronXSxcbiAgd2lkZTogWyfOmc6xzr3Ov8+FzqzPgc65zr/PgicsICfOps61zrLPgc6/z4XOrM+BzrnOv8+CJywgJ86czqzPgc+EzrnOv8+CJywgJ86Rz4DPgc6vzrvOuc6/z4InLCAnzpzOrM65zr/PgicsICfOmc6/z43Ovc65zr/PgicsICfOmc6/z43Ou865zr/PgicsICfOkc+NzrPOv8+Fz4PPhM6/z4InLCAnzqPOtc+Az4TOrc68zrLPgc65zr/PgicsICfOn866z4TPjs6yz4HOuc6/z4InLCAnzp3Ov86tzrzOss+BzrnOv8+CJywgJ86UzrXOus6tzrzOss+BzrnOv8+CJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnzpknLCAnzqYnLCAnzpwnLCAnzpEnLCAnzpwnLCAnzpknLCAnzpknLCAnzpEnLCAnzqMnLCAnzp8nLCAnzp0nLCAnzpQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnzpnOsc69JywgJ86mzrXOsicsICfOnM6xz4EnLCAnzpHPgM+BJywgJ86czrHOkCcsICfOmc6/z4XOvScsICfOmc6/z4XOuycsICfOkc+FzrMnLCAnzqPOtc+AJywgJ86fzrrPhCcsICfOnc6/zrUnLCAnzpTOtc66J10sXG4gIHdpZGU6IFsnzpnOsc69zr/Phc6xz4HOr86/z4UnLCAnzqbOtc6yz4HOv8+FzrHPgc6vzr/PhScsICfOnM6xz4HPhM6vzr/PhScsICfOkc+Az4HOuc67zq/Ov8+FJywgJ86czrHOkM6/z4UnLCAnzpnOv8+Fzr3Or86/z4UnLCAnzpnOv8+FzrvOr86/z4UnLCAnzpHPhc6zzr/Pjc+Dz4TOv8+FJywgJ86jzrXPgM+EzrXOvM6yz4HOr86/z4UnLCAnzp/Ous+Ez4nOss+Bzq/Ov8+FJywgJ86dzr/Otc68zrLPgc6vzr/PhScsICfOlM61zrrOtc68zrLPgc6vzr/PhSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ86aJywgJ86UJywgJ1QnLCAnzqQnLCAnzqAnLCAnzqAnLCAnzqMnXSxcbiAgc2hvcnQ6IFsnzprPhScsICfOlM61JywgJ86kz4EnLCAnzqTOtScsICfOoM6tJywgJ86gzrEnLCAnzqPOrCddLFxuICBhYmJyZXZpYXRlZDogWyfOms+Fz4EnLCAnzpTOtc+FJywgJ86kz4HOrycsICfOpM61z4QnLCAnzqDOrc68JywgJ86gzrHPgScsICfOo86szrInXSxcbiAgd2lkZTogWyfOms+Fz4HOuc6xzrrOricsICfOlM61z4XPhM6tz4HOsScsICfOpM+Bzq/PhM63JywgJ86kzrXPhM6sz4HPhM63JywgJ86gzq3OvM+Az4TOtycsICfOoM6xz4HOsc+DzrrOtc+Fzq4nLCAnzqPOrM6yzrLOsc+Ezr8nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnz4DOvCcsXG4gICAgcG06ICfOvM68JyxcbiAgICBtaWRuaWdodDogJ868zrXPg86szr3Phc+Hz4TOsScsXG4gICAgbm9vbjogJ868zrXPg863zrzOrc+BzrknLFxuICAgIG1vcm5pbmc6ICfPgM+Bz4nOrycsXG4gICAgYWZ0ZXJub29uOiAnzrHPgM+MzrPOtc+FzrzOsScsXG4gICAgZXZlbmluZzogJ86yz4HOrM60z4UnLFxuICAgIG5pZ2h0OiAnzr3Pjc+Hz4TOsSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ8+ALs68LicsXG4gICAgcG06ICfOvC7OvC4nLFxuICAgIG1pZG5pZ2h0OiAnzrzOtc+DzqzOvc+Fz4fPhM6xJyxcbiAgICBub29uOiAnzrzOtc+DzrfOvM6tz4HOuScsXG4gICAgbW9ybmluZzogJ8+Az4HPic6vJyxcbiAgICBhZnRlcm5vb246ICfOsc+Az4zOs861z4XOvM6xJyxcbiAgICBldmVuaW5nOiAnzrLPgc6szrTPhScsXG4gICAgbmlnaHQ6ICfOvc+Nz4fPhM6xJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfPgC7OvC4nLFxuICAgIHBtOiAnzrwuzrwuJyxcbiAgICBtaWRuaWdodDogJ868zrXPg86szr3Phc+Hz4TOsScsXG4gICAgbm9vbjogJ868zrXPg863zrzOrc+BzrknLFxuICAgIG1vcm5pbmc6ICfPgM+Bz4nOrycsXG4gICAgYWZ0ZXJub29uOiAnzrHPgM+MzrPOtc+FzrzOsScsXG4gICAgZXZlbmluZzogJ86yz4HOrM60z4UnLFxuICAgIG5pZ2h0OiAnzr3Pjc+Hz4TOsSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHVuaXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdDtcbiAgdmFyIHN1ZmZpeDtcbiAgaWYgKHVuaXQgPT09ICd5ZWFyJyB8fCB1bml0ID09PSAnbW9udGgnKSB7XG4gICAgc3VmZml4ID0gJ86/z4InO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd3ZWVrJyB8fCB1bml0ID09PSAnZGF5T2ZZZWFyJyB8fCB1bml0ID09PSAnZGF5JyB8fCB1bml0ID09PSAnaG91cicgfHwgdW5pdCA9PT0gJ2RhdGUnKSB7XG4gICAgc3VmZml4ID0gJ863JztcbiAgfSBlbHNlIHtcbiAgICBzdWZmaXggPSAnzr8nO1xuICB9XG4gIHJldHVybiBudW1iZXIgKyBzdWZmaXg7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ01vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9