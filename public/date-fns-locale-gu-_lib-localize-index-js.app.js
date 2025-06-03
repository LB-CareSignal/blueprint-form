(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gu-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/localize/index.js ***!
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
// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1621 - #1630
var eraValues = {
  narrow: ['ઈસપૂ', 'ઈસ'],
  abbreviated: ['ઈ.સ.પૂર્વે', 'ઈ.સ.'],
  wide: ['ઈસવીસન પૂર્વે', 'ઈસવીસન']
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1631 - #1654
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1લો ત્રિમાસ', '2જો ત્રિમાસ', '3જો ત્રિમાસ', '4થો ત્રિમાસ']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1655 - #1726
var monthValues = {
  narrow: ['જા', 'ફે', 'મા', 'એ', 'મે', 'જૂ', 'જુ', 'ઓ', 'સ', 'ઓ', 'ન', 'ડિ'],
  abbreviated: ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઑગસ્ટ', 'સપ્ટે', 'ઓક્ટો', 'નવે', 'ડિસે'],
  wide: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઇ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર']
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1727 - #1768
var dayValues = {
  narrow: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  short: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  abbreviated: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  wide: ['રવિવાર' /* Sunday */, 'સોમવાર' /* Monday */, 'મંગળવાર' /* Tuesday */, 'બુધવાર' /* Wednesday */, 'ગુરુવાર' /* Thursday */, 'શુક્રવાર' /* Friday */, 'શનિવાર' /* Saturday */]
};

// https://www.unicode.org/cldr/charts/32/summary/gu.html
// #1783 - #1824
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મ.રાત્રિ',
    noon: 'બ.',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મ.રાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: '​મધ્યરાત્રિ',
    noon: 'બપોરે',
    morning: 'સવારે',
    afternoon: 'બપોરે',
    evening: 'સાંજે',
    night: 'રાત્રે'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWd1LV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbi8vIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxuLy8gIzE2MjEgLSAjMTYzMFxudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+CqiOCquOCqquCrgicsICfgqojgqrgnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn4KqILuCquC7gqqrgq4LgqrDgq43gqrXgq4cnLCAn4KqILuCquC4nXSxcbiAgd2lkZTogWyfgqojgqrjgqrXgq4Dgqrjgqqgg4Kqq4KuC4Kqw4KuN4Kq14KuHJywgJ+CqiOCquOCqteCrgOCquOCqqCddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2d1Lmh0bWxcbi8vICMxNjMxIC0gIzE2NTRcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzHgqrLgq4sg4Kqk4KuN4Kqw4Kq/4Kqu4Kq+4Kq4JywgJzLgqpzgq4sg4Kqk4KuN4Kqw4Kq/4Kqu4Kq+4Kq4JywgJzPgqpzgq4sg4Kqk4KuN4Kqw4Kq/4Kqu4Kq+4Kq4JywgJzTgqqXgq4sg4Kqk4KuN4Kqw4Kq/4Kqu4Kq+4Kq4J11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9ndS5odG1sXG4vLyAjMTY1NSAtICMxNzI2XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfgqpzgqr4nLCAn4Kqr4KuHJywgJ+CqruCqvicsICfgqo8nLCAn4Kqu4KuHJywgJ+CqnOCrgicsICfgqpzgq4EnLCAn4KqTJywgJ+CquCcsICfgqpMnLCAn4KqoJywgJ+CqoeCqvyddLFxuICBhYmJyZXZpYXRlZDogWyfgqpzgqr7gqqjgq43gqq/gq4EnLCAn4Kqr4KuH4Kqs4KuN4Kqw4KuBJywgJ+CqruCqvuCqsOCrjeCqmicsICfgqo/gqqrgq43gqrDgqr/gqrInLCAn4Kqu4KuHJywgJ+CqnOCrguCqqCcsICfgqpzgq4HgqrLgqr7gqognLCAn4KqR4KqX4Kq44KuN4KqfJywgJ+CquOCqquCrjeCqn+CrhycsICfgqpPgqpXgq43gqp/gq4snLCAn4Kqo4Kq14KuHJywgJ+CqoeCqv+CquOCrhyddLFxuICB3aWRlOiBbJ+CqnOCqvuCqqOCrjeCqr+CrgeCqhuCqsOCrgCcsICfgqqvgq4fgqqzgq43gqrDgq4HgqobgqrDgq4AnLCAn4Kqu4Kq+4Kqw4KuN4KqaJywgJ+Cqj+CqquCrjeCqsOCqv+CqsicsICfgqq7gq4cnLCAn4Kqc4KuC4KqoJywgJ+CqnOCrgeCqsuCqvuCqhycsICfgqpPgqpfgqrjgq43gqp8nLCAn4Kq44Kqq4KuN4Kqf4KuH4Kqu4KuN4Kqs4KqwJywgJ+Cqk+CqleCrjeCqn+Cri+CqrOCqsCcsICfgqqjgqrXgq4fgqq7gq43gqqzgqrAnLCAn4Kqh4Kq/4Kq44KuH4Kqu4KuN4Kqs4KqwJ11cbn07XG5cbi8vIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxuLy8gIzE3MjcgLSAjMTc2OFxudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+CqsCcsICfgqrjgq4snLCAn4Kqu4KqCJywgJ+CqrOCrgScsICfgqpfgq4EnLCAn4Kq24KuBJywgJ+CqtiddLFxuICBzaG9ydDogWyfgqrAnLCAn4Kq44KuLJywgJ+CqruCqgicsICfgqqzgq4EnLCAn4KqX4KuBJywgJ+CqtuCrgScsICfgqrYnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn4Kqw4Kq14Kq/JywgJ+CquOCri+CqricsICfgqq7gqoLgqpfgqrMnLCAn4Kqs4KuB4KqnJywgJ+Cql+CrgeCqsOCrgScsICfgqrbgq4HgqpXgq43gqrAnLCAn4Kq24Kqo4Kq/J10sXG4gIHdpZGU6IFsn4Kqw4Kq14Kq/4Kq14Kq+4KqwJyAvKiBTdW5kYXkgKi8sICfgqrjgq4vgqq7gqrXgqr7gqrAnIC8qIE1vbmRheSAqLywgJ+CqruCqguCql+Cqs+CqteCqvuCqsCcgLyogVHVlc2RheSAqLywgJ+CqrOCrgeCqp+CqteCqvuCqsCcgLyogV2VkbmVzZGF5ICovLCAn4KqX4KuB4Kqw4KuB4Kq14Kq+4KqwJyAvKiBUaHVyc2RheSAqLywgJ+CqtuCrgeCqleCrjeCqsOCqteCqvuCqsCcgLyogRnJpZGF5ICovLCAn4Kq24Kqo4Kq/4Kq14Kq+4KqwJyAvKiBTYXR1cmRheSAqL11cbn07XG5cbi8vIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxuLy8gIzE3ODMgLSAjMTgyNFxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfgqq4u4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4KqsLicsXG4gICAgbW9ybmluZzogJ+CquOCqteCqvuCqsOCrhycsXG4gICAgYWZ0ZXJub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBldmVuaW5nOiAn4Kq44Kq+4KqC4Kqc4KuHJyxcbiAgICBuaWdodDogJ+CqsOCqvuCqpOCrjeCqsOCrhydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ+KAi+CqruCqp+CrjeCqr+CqsOCqvuCqpOCrjeCqsOCqvycsXG4gICAgbm9vbjogJ+CqrOCqquCri+CqsOCrhycsXG4gICAgbW9ybmluZzogJ+CquOCqteCqvuCqsOCrhycsXG4gICAgYWZ0ZXJub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBldmVuaW5nOiAn4Kq44Kq+4KqC4Kqc4KuHJyxcbiAgICBuaWdodDogJ+CqsOCqvuCqpOCrjeCqsOCrhydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn4oCL4Kqu4Kqn4KuN4Kqv4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn4KquLuCqsOCqvuCqpOCrjeCqsOCqvycsXG4gICAgbm9vbjogJ+CqrOCqquCri+CqsOCrhycsXG4gICAgbW9ybmluZzogJ+CquOCqteCqvuCqsOCrhycsXG4gICAgYWZ0ZXJub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBldmVuaW5nOiAn4Kq44Kq+4KqC4Kqc4KuHJyxcbiAgICBuaWdodDogJ+CqsOCqvuCqpOCrjeCqsOCrhydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ+CqruCqp+CrjeCqr+CqsOCqvuCqpOCrjeCqsOCqvycsXG4gICAgbm9vbjogJ+CqrOCqquCri+CqsOCrhycsXG4gICAgbW9ybmluZzogJ+CquOCqteCqvuCqsOCrhycsXG4gICAgYWZ0ZXJub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBldmVuaW5nOiAn4Kq44Kq+4KqC4Kqc4KuHJyxcbiAgICBuaWdodDogJ+CqsOCqvuCqpOCrjeCqsOCrhydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn4oCL4Kqu4Kqn4KuN4Kqv4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9