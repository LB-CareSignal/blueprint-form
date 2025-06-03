(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sl-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/sl/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/localize/index.js ***!
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
  narrow: ['pr. n. št.', 'po n. št.'],
  abbreviated: ['pr. n. št.', 'po n. št.'],
  wide: ['pred našim štetjem', 'po našem štetju']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  wide: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
};
var dayValues = {
  narrow: ['n', 'p', 't', 's', 'č', 'p', 's'],
  short: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  abbreviated: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  wide: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'j',
    afternoon: 'p',
    evening: 'v',
    night: 'n'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'poln.',
    noon: 'pold.',
    morning: 'jut.',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noč'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'polnoč',
    noon: 'poldne',
    morning: 'jutro',
    afternoon: 'popoldne',
    evening: 'večer',
    night: 'noč'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'zj',
    afternoon: 'p',
    evening: 'zv',
    night: 'po'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opoln.',
    noon: 'opold.',
    morning: 'zjut.',
    afternoon: 'pop.',
    evening: 'zveč.',
    night: 'ponoči'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opolnoči',
    noon: 'opoldne',
    morning: 'zjutraj',
    afternoon: 'popoldan',
    evening: 'zvečer',
    night: 'ponoči'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NsL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc2wtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ3ByLiBuLiDFoXQuJywgJ3BvIG4uIMWhdC4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsncHIuIG4uIMWhdC4nLCAncG8gbi4gxaF0LiddLFxuICB3aWRlOiBbJ3ByZWQgbmHFoWltIMWhdGV0amVtJywgJ3BvIG5hxaFlbSDFoXRldGp1J11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4gxI1ldC4nLCAnMi4gxI1ldC4nLCAnMy4gxI1ldC4nLCAnNC4gxI1ldC4nXSxcbiAgd2lkZTogWycxLiDEjWV0cnRsZXRqZScsICcyLiDEjWV0cnRsZXRqZScsICczLiDEjWV0cnRsZXRqZScsICc0LiDEjWV0cnRsZXRqZSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFuLicsICdmZWIuJywgJ21hci4nLCAnYXByLicsICdtYWonLCAnanVuLicsICdqdWwuJywgJ2F2Zy4nLCAnc2VwLicsICdva3QuJywgJ25vdi4nLCAnZGVjLiddLFxuICB3aWRlOiBbJ2phbnVhcicsICdmZWJydWFyJywgJ21hcmVjJywgJ2FwcmlsJywgJ21haicsICdqdW5paicsICdqdWxpaicsICdhdmd1c3QnLCAnc2VwdGVtYmVyJywgJ29rdG9iZXInLCAnbm92ZW1iZXInLCAnZGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyduJywgJ3AnLCAndCcsICdzJywgJ8SNJywgJ3AnLCAncyddLFxuICBzaG9ydDogWyduZWQuJywgJ3Bvbi4nLCAndG9yLicsICdzcmUuJywgJ8SNZXQuJywgJ3BldC4nLCAnc29iLiddLFxuICBhYmJyZXZpYXRlZDogWyduZWQuJywgJ3Bvbi4nLCAndG9yLicsICdzcmUuJywgJ8SNZXQuJywgJ3BldC4nLCAnc29iLiddLFxuICB3aWRlOiBbJ25lZGVsamEnLCAncG9uZWRlbGplaycsICd0b3JlaycsICdzcmVkYScsICfEjWV0cnRlaycsICdwZXRlaycsICdzb2JvdGEnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnZCcsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJzI0LjAwJyxcbiAgICBub29uOiAnMTIuMDAnLFxuICAgIG1vcm5pbmc6ICdqJyxcbiAgICBhZnRlcm5vb246ICdwJyxcbiAgICBldmVuaW5nOiAndicsXG4gICAgbmlnaHQ6ICduJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnZG9wLicsXG4gICAgcG06ICdwb3AuJyxcbiAgICBtaWRuaWdodDogJ3BvbG4uJyxcbiAgICBub29uOiAncG9sZC4nLFxuICAgIG1vcm5pbmc6ICdqdXQuJyxcbiAgICBhZnRlcm5vb246ICdwb3AuJyxcbiAgICBldmVuaW5nOiAndmXEjS4nLFxuICAgIG5pZ2h0OiAnbm/EjSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnZG9wLicsXG4gICAgcG06ICdwb3AuJyxcbiAgICBtaWRuaWdodDogJ3BvbG5vxI0nLFxuICAgIG5vb246ICdwb2xkbmUnLFxuICAgIG1vcm5pbmc6ICdqdXRybycsXG4gICAgYWZ0ZXJub29uOiAncG9wb2xkbmUnLFxuICAgIGV2ZW5pbmc6ICd2ZcSNZXInLFxuICAgIG5pZ2h0OiAnbm/EjSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2QnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICcyNC4wMCcsXG4gICAgbm9vbjogJzEyLjAwJyxcbiAgICBtb3JuaW5nOiAnemonLFxuICAgIGFmdGVybm9vbjogJ3AnLFxuICAgIGV2ZW5pbmc6ICd6dicsXG4gICAgbmlnaHQ6ICdwbydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2RvcC4nLFxuICAgIHBtOiAncG9wLicsXG4gICAgbWlkbmlnaHQ6ICdvcG9sbi4nLFxuICAgIG5vb246ICdvcG9sZC4nLFxuICAgIG1vcm5pbmc6ICd6anV0LicsXG4gICAgYWZ0ZXJub29uOiAncG9wLicsXG4gICAgZXZlbmluZzogJ3p2ZcSNLicsXG4gICAgbmlnaHQ6ICdwb25vxI1pJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdkb3AuJyxcbiAgICBwbTogJ3BvcC4nLFxuICAgIG1pZG5pZ2h0OiAnb3BvbG5vxI1pJyxcbiAgICBub29uOiAnb3BvbGRuZScsXG4gICAgbW9ybmluZzogJ3pqdXRyYWonLFxuICAgIGFmdGVybm9vbjogJ3BvcG9sZGFuJyxcbiAgICBldmVuaW5nOiAnenZlxI1lcicsXG4gICAgbmlnaHQ6ICdwb25vxI1pJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9