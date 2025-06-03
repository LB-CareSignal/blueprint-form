(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ro-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ro/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ro/_lib/localize/index.js ***!
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
  narrow: ['Î', 'D'],
  abbreviated: ['Î.d.C.', 'D.C.'],
  wide: ['Înainte de Cristos', 'După Cristos']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['primul trimestru', 'al doilea trimestru', 'al treilea trimestru', 'al patrulea trimestru']
};
var monthValues = {
  narrow: ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec'],
  wide: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
};
var dayValues = {
  narrow: ['d', 'l', 'm', 'm', 'j', 'v', 's'],
  short: ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ'],
  abbreviated: ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm'],
  wide: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'ami',
    morning: 'dim',
    afternoon: 'da',
    evening: 's',
    night: 'n'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'miezul nopții',
    noon: 'amiază',
    morning: 'dimineață',
    afternoon: 'după-amiază',
    evening: 'seară',
    night: 'noapte'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3JvL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXJvLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfDjicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ8OOLmQuQy4nLCAnRC5DLiddLFxuICB3aWRlOiBbJ8OObmFpbnRlIGRlIENyaXN0b3MnLCAnRHVwxIMgQ3Jpc3RvcyddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1QxJywgJ1QyJywgJ1QzJywgJ1Q0J10sXG4gIHdpZGU6IFsncHJpbXVsIHRyaW1lc3RydScsICdhbCBkb2lsZWEgdHJpbWVzdHJ1JywgJ2FsIHRyZWlsZWEgdHJpbWVzdHJ1JywgJ2FsIHBhdHJ1bGVhIHRyaW1lc3RydSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSScsICdGJywgJ00nLCAnQScsICdNJywgJ0knLCAnSScsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnaWFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21haScsICdpdW4nLCAnaXVsJywgJ2F1ZycsICdzZXAnLCAnb2N0JywgJ25vaScsICdkZWMnXSxcbiAgd2lkZTogWydpYW51YXJpZScsICdmZWJydWFyaWUnLCAnbWFydGllJywgJ2FwcmlsaWUnLCAnbWFpJywgJ2l1bmllJywgJ2l1bGllJywgJ2F1Z3VzdCcsICdzZXB0ZW1icmllJywgJ29jdG9tYnJpZScsICdub2llbWJyaWUnLCAnZGVjZW1icmllJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnZCcsICdsJywgJ20nLCAnbScsICdqJywgJ3YnLCAncyddLFxuICBzaG9ydDogWydkdScsICdsdScsICdtYScsICdtaScsICdqbycsICd2aScsICdzw6InXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZHVtJywgJ2x1bicsICdtYXInLCAnbWllJywgJ2pvaScsICd2aW4nLCAnc8OibSddLFxuICB3aWRlOiBbJ2R1bWluaWPEgycsICdsdW5pJywgJ21hcsibaScsICdtaWVyY3VyaScsICdqb2knLCAndmluZXJpJywgJ3PDom1ixIN0xIMnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21uJyxcbiAgICBub29uOiAnYW1pJyxcbiAgICBtb3JuaW5nOiAnZGltJyxcbiAgICBhZnRlcm5vb246ICdkYScsXG4gICAgZXZlbmluZzogJ3MnLFxuICAgIG5pZ2h0OiAnbidcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZXp1bCBub3DIm2lpJyxcbiAgICBub29uOiAnYW1pYXrEgycsXG4gICAgbW9ybmluZzogJ2RpbWluZWHIm8SDJyxcbiAgICBhZnRlcm5vb246ICdkdXDEgy1hbWlhesSDJyxcbiAgICBldmVuaW5nOiAnc2VhcsSDJyxcbiAgICBuaWdodDogJ25vYXB0ZSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZXp1bCBub3DIm2lpJyxcbiAgICBub29uOiAnYW1pYXrEgycsXG4gICAgbW9ybmluZzogJ2RpbWluZWHIm8SDJyxcbiAgICBhZnRlcm5vb246ICdkdXDEgy1hbWlhesSDJyxcbiAgICBldmVuaW5nOiAnc2VhcsSDJyxcbiAgICBuaWdodDogJ25vYXB0ZSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtbicsXG4gICAgbm9vbjogJ2FtaWF6xIMnLFxuICAgIG1vcm5pbmc6ICdkaW1pbmVhyJvEgycsXG4gICAgYWZ0ZXJub29uOiAnZHVwxIMtYW1pYXrEgycsXG4gICAgZXZlbmluZzogJ3NlYXLEgycsXG4gICAgbmlnaHQ6ICdub2FwdGUnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWV6dWwgbm9wyJtpaScsXG4gICAgbm9vbjogJ2FtaWF6xIMnLFxuICAgIG1vcm5pbmc6ICdkaW1pbmVhyJvEgycsXG4gICAgYWZ0ZXJub29uOiAnZHVwxIMtYW1pYXrEgycsXG4gICAgZXZlbmluZzogJ3NlYXLEgycsXG4gICAgbmlnaHQ6ICdub2FwdGUnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWV6dWwgbm9wyJtpaScsXG4gICAgbm9vbjogJ2FtaWF6xIMnLFxuICAgIG1vcm5pbmc6ICdkaW1pbmVhyJvEgycsXG4gICAgYWZ0ZXJub29uOiAnZHVwxIMtYW1pYXrEgycsXG4gICAgZXZlbmluZzogJ3NlYXLEgycsXG4gICAgbmlnaHQ6ICdub2FwdGUnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHJldHVybiBTdHJpbmcoZGlydHlOdW1iZXIpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=