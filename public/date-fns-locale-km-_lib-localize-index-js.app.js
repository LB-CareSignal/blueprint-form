(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-km-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/km/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/km/_lib/localize/index.js ***!
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
  narrow: ['ម.គស', 'គស'],
  abbreviated: ['មុនគ.ស', 'គ.ស'],
  wide: ['មុនគ្រិស្តសករាជ', 'នៃគ្រិស្តសករាជ']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['ត្រីមាសទី 1', 'ត្រីមាសទី 2', 'ត្រីមាសទី 3', 'ត្រីមាសទី 4']
};
var monthValues = {
  narrow: ['ម.ក', 'ក.ម', 'មិ', 'ម.ស', 'ឧ.ស', 'ម.ថ', 'ក.ដ', 'សី', 'កញ', 'តុ', 'វិ', 'ធ'],
  abbreviated: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
  wide: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
};
var dayValues = {
  narrow: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  short: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  abbreviated: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'],
  wide: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍']
};
var dayPeriodValues = {
  narrow: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​ពេលកណ្ដាលអធ្រាត្រ',
    noon: 'ពេលថ្ងៃត្រង់',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេលរសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _) {
  var number = Number(dirtyNumber);
  return number.toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ttL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta20tX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+GemC7hnoLhnp8nLCAn4Z6C4Z6fJ10sXG4gIGFiYnJldmlhdGVkOiBbJ+GemOGeu+Gek+Gegi7hnp8nLCAn4Z6CLuGenyddLFxuICB3aWRlOiBbJ+GemOGeu+Gek+GeguGfkuGemuGet+Gen+GfkuGej+Gen+GegOGemuGetuGehycsICfhnpPhn4PhnoLhn5Lhnprhnrfhnp/hn5Lhno/hnp/hnoDhnprhnrbhnocnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJ+Gej+GfkuGemuGeuOGemOGetuGen+GekeGeuCAxJywgJ+Gej+GfkuGemuGeuOGemOGetuGen+GekeGeuCAyJywgJ+Gej+GfkuGemuGeuOGemOGetuGen+GekeGeuCAzJywgJ+Gej+GfkuGemuGeuOGemOGetuGen+GekeGeuCA0J11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfhnpgu4Z6AJywgJ+GegC7hnpgnLCAn4Z6Y4Z63JywgJ+GemC7hnp8nLCAn4Z6nLuGenycsICfhnpgu4Z6QJywgJ+GegC7hnoonLCAn4Z6f4Z64JywgJ+GegOGeiScsICfhno/hnrsnLCAn4Z6c4Z63JywgJ+GekiddLFxuICBhYmJyZXZpYXRlZDogWyfhnpjhnoDhnprhnrYnLCAn4Z6A4Z674Z6Y4Z+S4Z6X4Z+IJywgJ+GemOGeuOGek+GeticsICfhnpjhn4Hhnp/hnrYnLCAn4Z6n4Z6f4Z6X4Z62JywgJ+GemOGet+GekOGeu+Gek+GeticsICfhnoDhnoDhn5LhnoDhnorhnrYnLCAn4Z6f4Z644Z6g4Z62JywgJ+GegOGeieGfkuGeieGeticsICfhno/hnrvhnpvhnrYnLCAn4Z6c4Z634Z6F4Z+S4Z6G4Z634Z6A4Z62JywgJ+GekuGfkuGek+GevCddLFxuICB3aWRlOiBbJ+GemOGegOGemuGeticsICfhnoDhnrvhnpjhn5Lhnpfhn4gnLCAn4Z6Y4Z644Z6T4Z62JywgJ+GemOGfgeGen+GeticsICfhnqfhnp/hnpfhnrYnLCAn4Z6Y4Z634Z6Q4Z674Z6T4Z62JywgJ+GegOGegOGfkuGegOGeiuGeticsICfhnp/hnrjhnqDhnrYnLCAn4Z6A4Z6J4Z+S4Z6J4Z62JywgJ+Gej+Geu+Gem+GeticsICfhnpzhnrfhnoXhn5LhnobhnrfhnoDhnrYnLCAn4Z6S4Z+S4Z6T4Z68J11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4Z6i4Z62JywgJ+GehScsICfhnqInLCAn4Z6WJywgJ+GeluGfkuGemicsICfhnp/hnrsnLCAn4Z6fJ10sXG4gIHNob3J0OiBbJ+GeouGeticsICfhnoUnLCAn4Z6iJywgJ+GelicsICfhnpbhn5LhnponLCAn4Z6f4Z67JywgJ+GenyddLFxuICBhYmJyZXZpYXRlZDogWyfhnqLhnrYnLCAn4Z6FJywgJ+GeoicsICfhnpYnLCAn4Z6W4Z+S4Z6aJywgJ+Gen+GeuycsICfhnp8nXSxcbiAgd2lkZTogWyfhnqLhnrbhnpHhnrfhno/hn5LhnpknLCAn4Z6F4Z6T4Z+S4Z6RJywgJ+GeouGehOGfkuGeguGetuGemicsICfhnpbhnrvhnpInLCAn4Z6W4Z+S4Z6a4Z6g4Z6f4Z+S4Z6U4Z6P4Z634Z+NJywgJ+Gen+Geu+GegOGfkuGemicsICfhnp/hn4Xhnprhn40nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn4Z6W4Z+S4Z6a4Z654Z6AJyxcbiAgICBwbTogJ+Gem+GfkuGehOGetuGehScsXG4gICAgbWlkbmlnaHQ6ICfigIvhnpbhn4HhnpvhnoDhno7hn5LhnorhnrbhnpvhnqLhnpLhn5Lhnprhnrbhno/hn5LhnponLFxuICAgIG5vb246ICfhnpbhn4HhnpvhnpDhn5LhnoThn4Phno/hn5LhnprhnoThn4snLFxuICAgIG1vcm5pbmc6ICfhnpbhn4Hhnpvhnpbhn5LhnprhnrnhnoAnLFxuICAgIGFmdGVybm9vbjogJ+GeluGfgeGem+GemuGen+GfgOGemycsXG4gICAgZXZlbmluZzogJ+GeluGfgeGem+Gem+GfkuGehOGetuGehScsXG4gICAgbmlnaHQ6ICfhnpbhn4HhnpvhnpnhnpThn4snXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfhnpbhn5LhnprhnrnhnoAnLFxuICAgIHBtOiAn4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBtaWRuaWdodDogJ+KAi+GeluGfgeGem+GegOGejuGfkuGeiuGetuGem+GeouGekuGfkuGemuGetuGej+GfkuGemicsXG4gICAgbm9vbjogJ+GeluGfgeGem+GekOGfkuGehOGfg+Gej+GfkuGemuGehOGfiycsXG4gICAgbW9ybmluZzogJ+GeluGfgeGem+GeluGfkuGemuGeueGegCcsXG4gICAgYWZ0ZXJub29uOiAn4Z6W4Z+B4Z6b4Z6a4Z6f4Z+A4Z6bJyxcbiAgICBldmVuaW5nOiAn4Z6W4Z+B4Z6b4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBuaWdodDogJ+GeluGfgeGem+GemeGelOGfiydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn4Z6W4Z+S4Z6a4Z654Z6AJyxcbiAgICBwbTogJ+Gem+GfkuGehOGetuGehScsXG4gICAgbWlkbmlnaHQ6ICfigIvhnpbhn4HhnpvhnoDhno7hn5LhnorhnrbhnpvhnqLhnpLhn5Lhnprhnrbhno/hn5LhnponLFxuICAgIG5vb246ICfhnpbhn4HhnpvhnpDhn5LhnoThn4Phno/hn5LhnprhnoThn4snLFxuICAgIG1vcm5pbmc6ICfhnpbhn4Hhnpvhnpbhn5LhnprhnrnhnoAnLFxuICAgIGFmdGVybm9vbjogJ+GeluGfgeGem+GemuGen+GfgOGemycsXG4gICAgZXZlbmluZzogJ+GeluGfgeGem+Gem+GfkuGehOGetuGehScsXG4gICAgbmlnaHQ6ICfhnpbhn4HhnpvhnpnhnpThn4snXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfhnpbhn5LhnprhnrnhnoAnLFxuICAgIHBtOiAn4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBtaWRuaWdodDogJ+KAi+GeluGfgeGem+GegOGejuGfkuGeiuGetuGem+GeouGekuGfkuGemuGetuGej+GfkuGemicsXG4gICAgbm9vbjogJ+GeluGfgeGem+GekOGfkuGehOGfg+Gej+GfkuGemuGehOGfiycsXG4gICAgbW9ybmluZzogJ+GeluGfgeGem+GeluGfkuGemuGeueGegCcsXG4gICAgYWZ0ZXJub29uOiAn4Z6W4Z+B4Z6b4Z6a4Z6f4Z+A4Z6bJyxcbiAgICBldmVuaW5nOiAn4Z6W4Z+B4Z6b4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBuaWdodDogJ+GeluGfgeGem+GemeGelOGfiydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+GeluGfkuGemuGeueGegCcsXG4gICAgcG06ICfhnpvhn5LhnoThnrbhnoUnLFxuICAgIG1pZG5pZ2h0OiAn4oCL4Z6W4Z+B4Z6b4Z6A4Z6O4Z+S4Z6K4Z624Z6b4Z6i4Z6S4Z+S4Z6a4Z624Z6P4Z+S4Z6aJyxcbiAgICBub29uOiAn4Z6W4Z+B4Z6b4Z6Q4Z+S4Z6E4Z+D4Z6P4Z+S4Z6a4Z6E4Z+LJyxcbiAgICBtb3JuaW5nOiAn4Z6W4Z+B4Z6b4Z6W4Z+S4Z6a4Z654Z6AJyxcbiAgICBhZnRlcm5vb246ICfhnpbhn4Hhnpvhnprhnp/hn4DhnpsnLFxuICAgIGV2ZW5pbmc6ICfhnpbhn4Hhnpvhnpvhn5LhnoThnrbhnoUnLFxuICAgIG5pZ2h0OiAn4Z6W4Z+B4Z6b4Z6Z4Z6U4Z+LJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfhnpbhn5LhnprhnrnhnoAnLFxuICAgIHBtOiAn4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBtaWRuaWdodDogJ+KAi+GeluGfgeGem+GegOGejuGfkuGeiuGetuGem+GeouGekuGfkuGemuGetuGej+GfkuGemicsXG4gICAgbm9vbjogJ+GeluGfgeGem+GekOGfkuGehOGfg+Gej+GfkuGemuGehOGfiycsXG4gICAgbW9ybmluZzogJ+GeluGfgeGem+GeluGfkuGemuGeueGegCcsXG4gICAgYWZ0ZXJub29uOiAn4Z6W4Z+B4Z6b4Z6a4Z6f4Z+A4Z6bJyxcbiAgICBldmVuaW5nOiAn4Z6W4Z+B4Z6b4Z6b4Z+S4Z6E4Z624Z6FJyxcbiAgICBuaWdodDogJ+GeluGfgeGem+GemeGelOGfiydcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgXykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlci50b1N0cmluZygpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=