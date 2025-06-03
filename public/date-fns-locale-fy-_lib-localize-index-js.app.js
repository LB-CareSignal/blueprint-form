(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fy-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/fy/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/fy/_lib/localize/index.js ***!
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
  narrow: ['f.K.', 'n.K.'],
  abbreviated: ['f.Kr.', 'n.Kr.'],
  wide: ['foar Kristus', 'nei Kristus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1e fearnsjier', '2e fearnsjier', '3e fearnsjier', '4e fearnsjier']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan.', 'feb.', 'mrt.', 'apr.', 'mai.', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  wide: ['jannewaris', 'febrewaris', 'maart', 'april', 'maaie', 'juny', 'july', 'augustus', 'septimber', 'oktober', 'novimber', 'desimber']
};
var dayValues = {
  narrow: ['s', 'm', 't', 'w', 't', 'f', 's'],
  short: ['si', 'mo', 'ti', 'wo', 'to', 'fr', 'so'],
  abbreviated: ['snein', 'moa', 'tii', 'woa', 'ton', 'fre', 'sneon'],
  wide: ['snein', 'moandei', 'tiisdei', 'woansdei', 'tongersdei', 'freed', 'sneon']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: 'moarns',
    afternoon: 'middeis',
    evening: 'jûns',
    night: 'nachts'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: 'moarns',
    afternoon: 'middeis',
    evening: 'jûns',
    night: 'nachts'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: 'moarns',
    afternoon: 'middeis',
    evening: 'jûns',
    night: 'nachts'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + 'e';
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
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2Z5L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZnktX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2YuSy4nLCAnbi5LLiddLFxuICBhYmJyZXZpYXRlZDogWydmLktyLicsICduLktyLiddLFxuICB3aWRlOiBbJ2ZvYXIgS3Jpc3R1cycsICduZWkgS3Jpc3R1cyddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ0sxJywgJ0syJywgJ0szJywgJ0s0J10sXG4gIHdpZGU6IFsnMWUgZmVhcm5zamllcicsICcyZSBmZWFybnNqaWVyJywgJzNlIGZlYXJuc2ppZXInLCAnNGUgZmVhcm5zamllciddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFuLicsICdmZWIuJywgJ21ydC4nLCAnYXByLicsICdtYWkuJywgJ2p1bi4nLCAnanVsLicsICdhdWcuJywgJ3NlcC4nLCAnb2t0LicsICdub3YuJywgJ2Rlcy4nXSxcbiAgd2lkZTogWydqYW5uZXdhcmlzJywgJ2ZlYnJld2FyaXMnLCAnbWFhcnQnLCAnYXByaWwnLCAnbWFhaWUnLCAnanVueScsICdqdWx5JywgJ2F1Z3VzdHVzJywgJ3NlcHRpbWJlcicsICdva3RvYmVyJywgJ25vdmltYmVyJywgJ2Rlc2ltYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsncycsICdtJywgJ3QnLCAndycsICd0JywgJ2YnLCAncyddLFxuICBzaG9ydDogWydzaScsICdtbycsICd0aScsICd3bycsICd0bycsICdmcicsICdzbyddLFxuICBhYmJyZXZpYXRlZDogWydzbmVpbicsICdtb2EnLCAndGlpJywgJ3dvYScsICd0b24nLCAnZnJlJywgJ3NuZW9uJ10sXG4gIHdpZGU6IFsnc25laW4nLCAnbW9hbmRlaScsICd0aWlzZGVpJywgJ3dvYW5zZGVpJywgJ3RvbmdlcnNkZWknLCAnZnJlZWQnLCAnc25lb24nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkZGVybmFjaHQnLFxuICAgIG5vb246ICdtaWRkZWknLFxuICAgIG1vcm5pbmc6ICdtb2FybnMnLFxuICAgIGFmdGVybm9vbjogJ21pZGRlaXMnLFxuICAgIGV2ZW5pbmc6ICdqw7tucycsXG4gICAgbmlnaHQ6ICduYWNodHMnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRkZXJuYWNodCcsXG4gICAgbm9vbjogJ21pZGRlaScsXG4gICAgbW9ybmluZzogJ21vYXJucycsXG4gICAgYWZ0ZXJub29uOiAnbWlkZGVpcycsXG4gICAgZXZlbmluZzogJ2rDu25zJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkZGVybmFjaHQnLFxuICAgIG5vb246ICdtaWRkZWknLFxuICAgIG1vcm5pbmc6ICdtb2FybnMnLFxuICAgIGFmdGVybm9vbjogJ21pZGRlaXMnLFxuICAgIGV2ZW5pbmc6ICdqw7tucycsXG4gICAgbmlnaHQ6ICduYWNodHMnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJ2UnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=