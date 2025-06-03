(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-gu-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'હમણાં',
    // CLDR #1461
    other: '​આશરે {{count}} સેકંડ'
  },
  xSeconds: {
    one: '1 સેકંડ',
    other: '{{count}} સેકંડ'
  },
  halfAMinute: 'અડધી મિનિટ',
  lessThanXMinutes: {
    one: 'આ મિનિટ',
    // CLDR #1448
    other: '​આશરે {{count}} મિનિટ'
  },
  xMinutes: {
    one: '1 મિનિટ',
    other: '{{count}} મિનિટ'
  },
  aboutXHours: {
    one: '​આશરે 1 કલાક',
    other: '​આશરે {{count}} કલાક'
  },
  xHours: {
    one: '1 કલાક',
    other: '{{count}} કલાક'
  },
  xDays: {
    one: '1 દિવસ',
    other: '{{count}} દિવસ'
  },
  aboutXWeeks: {
    one: 'આશરે 1 અઠવાડિયું',
    other: 'આશરે {{count}} અઠવાડિયા'
  },
  xWeeks: {
    one: '1 અઠવાડિયું',
    other: '{{count}} અઠવાડિયા'
  },
  aboutXMonths: {
    one: 'આશરે 1 મહિનો',
    other: 'આશરે {{count}} મહિના'
  },
  xMonths: {
    one: '1 મહિનો',
    other: '{{count}} મહિના'
  },
  aboutXYears: {
    one: 'આશરે 1 વર્ષ',
    other: 'આશરે {{count}} વર્ષ'
  },
  xYears: {
    one: '1 વર્ષ',
    other: '{{count}} વર્ષ'
  },
  overXYears: {
    one: '1 વર્ષથી વધુ',
    other: '{{count}} વર્ષથી વધુ'
  },
  almostXYears: {
    one: 'લગભગ 1 વર્ષ',
    other: 'લગભગ {{count}} વર્ષ'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + 'માં';
    } else {
      return result + ' પહેલાં';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/gu/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatLong/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));
//Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
var dateFormats = {
  full: 'EEEE, d MMMM, y',
  // CLDR #1825
  long: 'd MMMM, y',
  // CLDR #1826
  medium: 'd MMM, y',
  // CLDR #1827
  short: 'd/M/yy' // CLDR #1828
};

var timeFormats = {
  full: 'hh:mm:ss a zzzz',
  // CLDR #1829
  long: 'hh:mm:ss a z',
  // CLDR #1830
  medium: 'hh:mm:ss a',
  // CLDR #1831
  short: 'hh:mm a' // CLDR #1832
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  // CLDR #1833
  long: '{{date}} {{time}}',
  // CLDR #1834
  medium: '{{date}} {{time}}',
  // CLDR #1835
  short: '{{date}} {{time}}' // CLDR #1836
};

var formatLong = {
  date: (0, _index.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0, _index.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0, _index.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/gu/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html

var formatRelativeLocale = {
  lastWeek: "'પાછલા' eeee p",
  // CLDR #1384
  yesterday: "'ગઈકાલે' p",
  // CLDR #1409
  today: "'આજે' p",
  // CLDR #1410
  tomorrow: "'આવતીકાલે' p",
  // CLDR #1411
  nextWeek: 'eeee p',
  // CLDR #1386
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

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

/***/ }),

/***/ "./node_modules/date-fns/locale/gu/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/match/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ઈસપૂ|ઈસ)/i,
  abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
  wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i
};
var parseEraPatterns = {
  any: [/^ઈસપૂ/i, /^ઈસ/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
  abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
  wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
};
var parseMonthPatterns = {
  narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i],
  any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]
};
var matchDayPatterns = {
  narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
  abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
  wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
};
var parseDayPatterns = {
  narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
  any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
  any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^મ\.?/i,
    noon: /^બ/i,
    morning: /સ/i,
    afternoon: /બ/i,
    evening: /સાં/i,
    night: /રા/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/gu/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/gu/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/gu/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/gu/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/gu/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/gu/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Gujarati locale (India).
 * @language Gujarati
 * @iso-639-2 guj
 * @author Manaday Mavani [@ManadayM]{@link https://github.com/manadaym}
 */
var locale = {
  code: 'gu',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9ndS9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9ndS9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZ3UvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9ndS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFH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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLWd1LWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLy8gU291cmNlOiBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2d1Lmh0bWxcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ+CqueCqruCqo+CqvuCqgicsXG4gICAgLy8gQ0xEUiAjMTQ2MVxuICAgIG90aGVyOiAn4oCL4KqG4Kq24Kqw4KuHIHt7Y291bnR9fSDgqrjgq4fgqpXgqoLgqqEnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDgqrjgq4fgqpXgqoLgqqEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOCquOCrh+CqleCqguCqoSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfgqoXgqqHgqqfgq4Ag4Kqu4Kq/4Kqo4Kq/4KqfJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ+CqhiDgqq7gqr/gqqjgqr/gqp8nLFxuICAgIC8vIENMRFIgIzE0NDhcbiAgICBvdGhlcjogJ+KAi+CqhuCqtuCqsOCrhyB7e2NvdW50fX0g4Kqu4Kq/4Kqo4Kq/4KqfJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEg4Kqu4Kq/4Kqo4Kq/4KqfJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqq7gqr/gqqjgqr/gqp8nXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn4oCL4KqG4Kq24Kqw4KuHIDEg4KqV4Kqy4Kq+4KqVJyxcbiAgICBvdGhlcjogJ+KAi+CqhuCqtuCqsOCrhyB7e2NvdW50fX0g4KqV4Kqy4Kq+4KqVJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIOCqleCqsuCqvuCqlScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4KqV4Kqy4Kq+4KqVJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEg4Kqm4Kq/4Kq14Kq4JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqqbgqr/gqrXgqrgnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn4KqG4Kq24Kqw4KuHIDEg4KqF4Kqg4Kq14Kq+4Kqh4Kq/4Kqv4KuB4KqCJyxcbiAgICBvdGhlcjogJ+CqhuCqtuCqsOCrhyB7e2NvdW50fX0g4KqF4Kqg4Kq14Kq+4Kqh4Kq/4Kqv4Kq+J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIOCqheCqoOCqteCqvuCqoeCqv+Cqr+CrgeCqgicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4KqF4Kqg4Kq14Kq+4Kqh4Kq/4Kqv4Kq+J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICfgqobgqrbgqrDgq4cgMSDgqq7gqrngqr/gqqjgq4snLFxuICAgIG90aGVyOiAn4KqG4Kq24Kqw4KuHIHt7Y291bnR9fSDgqq7gqrngqr/gqqjgqr4nXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIOCqruCqueCqv+CqqOCriycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4Kqu4Kq54Kq/4Kqo4Kq+J1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ+CqhuCqtuCqsOCrhyAxIOCqteCqsOCrjeCqtycsXG4gICAgb3RoZXI6ICfgqobgqrbgqrDgq4cge3tjb3VudH19IOCqteCqsOCrjeCqtydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDgqrXgqrDgq43gqrcnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOCqteCqsOCrjeCqtydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJzEg4Kq14Kqw4KuN4Kq34Kql4KuAIOCqteCqp+CrgScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4Kq14Kqw4KuN4Kq34Kql4KuAIOCqteCqp+CrgSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn4Kqy4KqX4Kqt4KqXIDEg4Kq14Kqw4KuN4Kq3JyxcbiAgICBvdGhlcjogJ+CqsuCql+CqreCqlyB7e2NvdW50fX0g4Kq14Kqw4KuN4Kq3J1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJ+CqruCqvuCqgic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIOCqquCqueCrh+CqsuCqvuCqgic7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbi8vU291cmNlOiBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2d1Lmh0bWxcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIGQgTU1NTSwgeScsXG4gIC8vIENMRFIgIzE4MjVcbiAgbG9uZzogJ2QgTU1NTSwgeScsXG4gIC8vIENMRFIgIzE4MjZcbiAgbWVkaXVtOiAnZCBNTU0sIHknLFxuICAvLyBDTERSICMxODI3XG4gIHNob3J0OiAnZC9NL3l5JyAvLyBDTERSICMxODI4XG59O1xuXG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoaDptbTpzcyBhIHp6enonLFxuICAvLyBDTERSICMxODI5XG4gIGxvbmc6ICdoaDptbTpzcyBhIHonLFxuICAvLyBDTERSICMxODMwXG4gIG1lZGl1bTogJ2hoOm1tOnNzIGEnLFxuICAvLyBDTERSICMxODMxXG4gIHNob3J0OiAnaGg6bW0gYScgLy8gQ0xEUiAjMTgzMlxufTtcblxudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgLy8gQ0xEUiAjMTgzM1xuICBsb25nOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICAvLyBDTERSICMxODM0XG4gIG1lZGl1bTogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgLy8gQ0xEUiAjMTgzNVxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19JyAvLyBDTERSICMxODM2XG59O1xuXG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0TG9uZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vLyBTb3VyY2U6IGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxuXG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIifgqqrgqr7gqpvgqrLgqr4nIGVlZWUgcFwiLFxuICAvLyBDTERSICMxMzg0XG4gIHllc3RlcmRheTogXCIn4KqX4KqI4KqV4Kq+4Kqy4KuHJyBwXCIsXG4gIC8vIENMRFIgIzE0MDlcbiAgdG9kYXk6IFwiJ+CqhuCqnOCrhycgcFwiLFxuICAvLyBDTERSICMxNDEwXG4gIHRvbW9ycm93OiBcIifgqobgqrXgqqTgq4DgqpXgqr7gqrLgq4cnIHBcIixcbiAgLy8gQ0xEUiAjMTQxMVxuICBuZXh0V2VlazogJ2VlZWUgcCcsXG4gIC8vIENMRFIgIzEzODZcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9ndS5odG1sXG4vLyAjMTYyMSAtICMxNjMwXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4KqI4Kq44Kqq4KuCJywgJ+CqiOCquCddLFxuICBhYmJyZXZpYXRlZDogWyfgqogu4Kq4LuCqquCrguCqsOCrjeCqteCrhycsICfgqogu4Kq4LiddLFxuICB3aWRlOiBbJ+CqiOCquOCqteCrgOCquOCqqCDgqqrgq4LgqrDgq43gqrXgq4cnLCAn4KqI4Kq44Kq14KuA4Kq44KqoJ11cbn07XG5cbi8vIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxuLy8gIzE2MzEgLSAjMTY1NFxudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMeCqsuCriyDgqqTgq43gqrDgqr/gqq7gqr7gqrgnLCAnMuCqnOCriyDgqqTgq43gqrDgqr/gqq7gqr7gqrgnLCAnM+CqnOCriyDgqqTgq43gqrDgqr/gqq7gqr7gqrgnLCAnNOCqpeCriyDgqqTgq43gqrDgqr/gqq7gqr7gqrgnXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2d1Lmh0bWxcbi8vICMxNjU1IC0gIzE3MjZcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+CqnOCqvicsICfgqqvgq4cnLCAn4Kqu4Kq+JywgJ+CqjycsICfgqq7gq4cnLCAn4Kqc4KuCJywgJ+CqnOCrgScsICfgqpMnLCAn4Kq4JywgJ+CqkycsICfgqqgnLCAn4Kqh4Kq/J10sXG4gIGFiYnJldmlhdGVkOiBbJ+CqnOCqvuCqqOCrjeCqr+CrgScsICfgqqvgq4fgqqzgq43gqrDgq4EnLCAn4Kqu4Kq+4Kqw4KuN4KqaJywgJ+Cqj+CqquCrjeCqsOCqv+CqsicsICfgqq7gq4cnLCAn4Kqc4KuC4KqoJywgJ+CqnOCrgeCqsuCqvuCqiCcsICfgqpHgqpfgqrjgq43gqp8nLCAn4Kq44Kqq4KuN4Kqf4KuHJywgJ+Cqk+CqleCrjeCqn+CriycsICfgqqjgqrXgq4cnLCAn4Kqh4Kq/4Kq44KuHJ10sXG4gIHdpZGU6IFsn4Kqc4Kq+4Kqo4KuN4Kqv4KuB4KqG4Kqw4KuAJywgJ+Cqq+Crh+CqrOCrjeCqsOCrgeCqhuCqsOCrgCcsICfgqq7gqr7gqrDgq43gqponLCAn4KqP4Kqq4KuN4Kqw4Kq/4KqyJywgJ+CqruCrhycsICfgqpzgq4LgqqgnLCAn4Kqc4KuB4Kqy4Kq+4KqHJywgJ+Cqk+Cql+CquOCrjeCqnycsICfgqrjgqqrgq43gqp/gq4fgqq7gq43gqqzgqrAnLCAn4KqT4KqV4KuN4Kqf4KuL4Kqs4KqwJywgJ+CqqOCqteCrh+CqruCrjeCqrOCqsCcsICfgqqHgqr/gqrjgq4fgqq7gq43gqqzgqrAnXVxufTtcblxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9ndS5odG1sXG4vLyAjMTcyNyAtICMxNzY4XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4KqwJywgJ+CquOCriycsICfgqq7gqoInLCAn4Kqs4KuBJywgJ+Cql+CrgScsICfgqrbgq4EnLCAn4Kq2J10sXG4gIHNob3J0OiBbJ+CqsCcsICfgqrjgq4snLCAn4Kqu4KqCJywgJ+CqrOCrgScsICfgqpfgq4EnLCAn4Kq24KuBJywgJ+CqtiddLFxuICBhYmJyZXZpYXRlZDogWyfgqrDgqrXgqr8nLCAn4Kq44KuL4KquJywgJ+CqruCqguCql+CqsycsICfgqqzgq4HgqqcnLCAn4KqX4KuB4Kqw4KuBJywgJ+CqtuCrgeCqleCrjeCqsCcsICfgqrbgqqjgqr8nXSxcbiAgd2lkZTogWyfgqrDgqrXgqr/gqrXgqr7gqrAnIC8qIFN1bmRheSAqLywgJ+CquOCri+CqruCqteCqvuCqsCcgLyogTW9uZGF5ICovLCAn4Kqu4KqC4KqX4Kqz4Kq14Kq+4KqwJyAvKiBUdWVzZGF5ICovLCAn4Kqs4KuB4Kqn4Kq14Kq+4KqwJyAvKiBXZWRuZXNkYXkgKi8sICfgqpfgq4HgqrDgq4HgqrXgqr7gqrAnIC8qIFRodXJzZGF5ICovLCAn4Kq24KuB4KqV4KuN4Kqw4Kq14Kq+4KqwJyAvKiBGcmlkYXkgKi8sICfgqrbgqqjgqr/gqrXgqr7gqrAnIC8qIFNhdHVyZGF5ICovXVxufTtcblxuLy8gaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS9ndS5odG1sXG4vLyAjMTc4MyAtICMxODI0XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ+Cqri7gqrDgqr7gqqTgq43gqrDgqr8nLFxuICAgIG5vb246ICfgqqwuJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn4oCL4Kqu4Kqn4KuN4Kqv4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfigIvgqq7gqqfgq43gqq/gqrDgqr7gqqTgq43gqrDgqr8nLFxuICAgIG5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIG1vcm5pbmc6ICfgqrjgqrXgqr7gqrDgq4cnLFxuICAgIGFmdGVybm9vbjogJ+CqrOCqquCri+CqsOCrhycsXG4gICAgZXZlbmluZzogJ+CquOCqvuCqguCqnOCrhycsXG4gICAgbmlnaHQ6ICfgqrDgqr7gqqTgq43gqrDgq4cnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfgqq4u4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn4Kqu4Kqn4KuN4Kqv4Kqw4Kq+4Kqk4KuN4Kqw4Kq/JyxcbiAgICBub29uOiAn4Kqs4Kqq4KuL4Kqw4KuHJyxcbiAgICBtb3JuaW5nOiAn4Kq44Kq14Kq+4Kqw4KuHJyxcbiAgICBhZnRlcm5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIGV2ZW5pbmc6ICfgqrjgqr7gqoLgqpzgq4cnLFxuICAgIG5pZ2h0OiAn4Kqw4Kq+4Kqk4KuN4Kqw4KuHJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfigIvgqq7gqqfgq43gqq/gqrDgqr7gqqTgq43gqrDgqr8nLFxuICAgIG5vb246ICfgqqzgqqrgq4vgqrDgq4cnLFxuICAgIG1vcm5pbmc6ICfgqrjgqrXgqr7gqrDgq4cnLFxuICAgIGFmdGVybm9vbjogJ+CqrOCqquCri+CqsOCrhycsXG4gICAgZXZlbmluZzogJ+CquOCqvuCqguCqnOCrhycsXG4gICAgbmlnaHQ6ICfgqrDgqr7gqqTgq43gqrDgq4cnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHJldHVybiBTdHJpbmcoZGlydHlOdW1iZXIpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKOCqsnzgqpx84KqlfOCqoOCrjeCqoHzgqq4pPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o4KqI4Kq44Kqq4KuCfOCqiOCquCkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCqiFxcLuCquFxcLuCqquCrguCqsOCrjeCqteCrh3zgqohcXC7gqrhcXC4pL2ksXG4gIHdpZGU6IC9eKOCqiOCquOCqteCrgOCquOCqqFxcc+CqquCrguCqsOCrjeCqteCrh3zgqojgqrjgqrXgq4DgqrjgqqgpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL17gqojgqrjgqqrgq4IvaSwgL17gqojgqrgvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSjgqrLgq4t84Kqc4KuLfOCqpeCriyk/IOCqpOCrjeCqsOCqv+CqruCqvuCquC9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1taXNsZWFkaW5nLWNoYXJhY3Rlci1jbGFzc1xuICBuYXJyb3c6IC9eW+CqnOCqvuCqq+Crh+CqruCqvuCqj+CqruCrh+CqnOCrguCqnOCrgeCqk+CquOCqk+CqqOCqoeCqv10vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCqnOCqvuCqqOCrjeCqr+CrgXzgqqvgq4fgqqzgq43gqrDgq4F84Kqu4Kq+4Kqw4KuN4KqafOCqj+CqquCrjeCqsOCqv+Cqsnzgqq7gq4d84Kqc4KuC4KqofOCqnOCrgeCqsuCqvuCqiHzgqpHgqpfgqrjgq43gqp984Kq44Kqq4KuN4Kqf4KuHfOCqk+CqleCrjeCqn+Cri3zgqqjgqrXgq4d84Kqh4Kq/4Kq44KuHKS9pLFxuICB3aWRlOiAvXijgqpzgqr7gqqjgq43gqq/gq4HgqobgqrDgq4B84Kqr4KuH4Kqs4KuN4Kqw4KuB4KqG4Kqw4KuAfOCqruCqvuCqsOCrjeCqmnzgqo/gqqrgq43gqrDgqr/gqrJ84Kqu4KuHfOCqnOCrguCqqHzgqpzgq4HgqrLgqr7gqod84KqT4KqX4Kq44KuN4KqffOCquOCqquCrjeCqn+Crh+CqruCrjeCqrOCqsHzgqpPgqpXgq43gqp/gq4vgqqzgqrB84Kqo4Kq14KuH4Kqu4KuN4Kqs4KqwfOCqoeCqv+CquOCrh+CqruCrjeCqrOCqsCkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e4Kqc4Kq+L2ksIC9e4Kqr4KuHL2ksIC9e4Kqu4Kq+L2ksIC9e4KqPL2ksIC9e4Kqu4KuHL2ksIC9e4Kqc4KuCL2ksIC9e4Kqc4KuBL2ksIC9e4KqR4KqXL2ksIC9e4Kq4L2ksIC9e4KqT4KqV4KuN4Kqf4KuLL2ksIC9e4KqoL2ksIC9e4Kqh4Kq/L2ldLFxuICBhbnk6IFsvXuCqnOCqvi9pLCAvXuCqq+Crhy9pLCAvXuCqruCqvi9pLCAvXuCqjy9pLCAvXuCqruCrhy9pLCAvXuCqnOCrgi9pLCAvXuCqnOCrgS9pLCAvXuCqkeCqly9pLCAvXuCquC9pLCAvXuCqk+CqleCrjeCqn+Criy9pLCAvXuCqqC9pLCAvXuCqoeCqvy9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKOCqsHzgqrjgq4t84Kqu4KqCfOCqrOCrgXzgqpfgq4F84Kq24KuBfOCqtikvaSxcbiAgc2hvcnQ6IC9eKOCqsHzgqrjgq4t84Kqu4KqCfOCqrOCrgXzgqpfgq4F84Kq24KuBfOCqtikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOCqsOCqteCqv3zgqrjgq4vgqq584Kqu4KqC4KqX4KqzfOCqrOCrgeCqp3zgqpfgq4HgqrDgq4F84Kq24KuB4KqV4KuN4KqwfOCqtuCqqOCqvykvaSxcbiAgd2lkZTogL14o4Kqw4Kq14Kq/4Kq14Kq+4KqwfOCquOCri+CqruCqteCqvuCqsHzgqq7gqoLgqpfgqrPgqrXgqr7gqrB84Kqs4KuB4Kqn4Kq14Kq+4KqwfOCql+CrgeCqsOCrgeCqteCqvuCqsHzgqrbgq4HgqpXgq43gqrDgqrXgqr7gqrB84Kq24Kqo4Kq/4Kq14Kq+4KqwKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e4KqwL2ksIC9e4Kq44KuLL2ksIC9e4Kqu4KqCL2ksIC9e4Kqs4KuBL2ksIC9e4KqX4KuBL2ksIC9e4Kq24KuBL2ksIC9e4Kq2L2ldLFxuICBhbnk6IFsvXuCqsC9pLCAvXuCquOCriy9pLCAvXuCqruCqgi9pLCAvXuCqrOCrgS9pLCAvXuCql+CrgS9pLCAvXuCqtuCrgS9pLCAvXuCqti9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHzgqq5cXC4/fOCquHzgqqx84Kq44Kq+4KqCfOCqsOCqvikvaSxcbiAgYW55OiAvXihhfHB84KquXFwuP3zgqrh84KqsfOCquOCqvuCqgnzgqrDgqr4pL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL17gqq5cXC4/L2ksXG4gICAgbm9vbjogL17gqqwvaSxcbiAgICBtb3JuaW5nOiAv4Kq4L2ksXG4gICAgYWZ0ZXJub29uOiAv4KqsL2ksXG4gICAgZXZlbmluZzogL+CquOCqvuCqgi9pLFxuICAgIG5pZ2h0OiAv4Kqw4Kq+L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgR3VqYXJhdGkgbG9jYWxlIChJbmRpYSkuXG4gKiBAbGFuZ3VhZ2UgR3VqYXJhdGlcbiAqIEBpc28tNjM5LTIgZ3VqXG4gKiBAYXV0aG9yIE1hbmFkYXkgTWF2YW5pIFtATWFuYWRheU1de0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tYW5hZGF5bX1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2d1JyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9