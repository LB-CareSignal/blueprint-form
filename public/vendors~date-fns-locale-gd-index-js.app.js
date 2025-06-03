(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-gd-index-js"],{

/***/ "./node_modules/date-fns/locale/gd/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'nas lugha na diog',
    other: 'nas lugha na {{count}} diogan'
  },
  xSeconds: {
    one: '1 diog',
    two: '2 dhiog',
    twenty: '20 diog',
    other: '{{count}} diogan'
  },
  halfAMinute: 'leth mhionaid',
  lessThanXMinutes: {
    one: 'nas lugha na mionaid',
    other: 'nas lugha na {{count}} mionaidean'
  },
  xMinutes: {
    one: '1 mionaid',
    two: '2 mhionaid',
    twenty: '20 mionaid',
    other: '{{count}} mionaidean'
  },
  aboutXHours: {
    one: 'mu uair de thìde',
    other: 'mu {{count}} uairean de thìde'
  },
  xHours: {
    one: '1 uair de thìde',
    two: '2 uair de thìde',
    twenty: '20 uair de thìde',
    other: '{{count}} uairean de thìde'
  },
  xDays: {
    one: '1 là',
    other: '{{count}} là'
  },
  aboutXWeeks: {
    one: 'mu 1 seachdain',
    other: 'mu {{count}} seachdainean'
  },
  xWeeks: {
    one: '1 seachdain',
    other: '{{count}} seachdainean'
  },
  aboutXMonths: {
    one: 'mu mhìos',
    other: 'mu {{count}} mìosan'
  },
  xMonths: {
    one: '1 mìos',
    other: '{{count}} mìosan'
  },
  aboutXYears: {
    one: 'mu bhliadhna',
    other: 'mu {{count}} bliadhnaichean'
  },
  xYears: {
    one: '1 bhliadhna',
    other: '{{count}} bliadhna'
  },
  overXYears: {
    one: 'còrr is bliadhna',
    other: 'còrr is {{count}} bliadhnaichean'
  },
  almostXYears: {
    one: 'cha mhòr bliadhna',
    other: 'cha mhòr {{count}} bliadhnaichean'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && !!tokenValue.two) {
    result = tokenValue.two;
  } else if (count === 20 && !!tokenValue.twenty) {
    result = tokenValue.twenty;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'ann an ' + result;
    } else {
      return 'o chionn ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/gd/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/formatLong/index.js ***!
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
var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'aig' {{time}}",
  long: "{{date}} 'aig' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
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

/***/ "./node_modules/date-fns/locale/gd/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'mu dheireadh' eeee 'aig' p",
  //FIX
  yesterday: "'an-dè aig' p",
  today: "'an-diugh aig' p",
  tomorrow: "'a-màireach aig' p",
  nextWeek: "eeee 'aig' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/gd/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/localize/index.js ***!
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
  narrow: ['R', 'A'],
  abbreviated: ['RC', 'AD'],
  wide: ['ro Chrìosta', 'anno domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['C1', 'C2', 'C3', 'C4'],
  wide: ["a' chiad chairteal", 'an dàrna cairteal', 'an treas cairteal', 'an ceathramh cairteal']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['F', 'G', 'M', 'G', 'C', 'Ò', 'I', 'L', 'S', 'D', 'S', 'D'],
  abbreviated: ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
  wide: ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'C', 'A', 'H', 'S'],
  short: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
  abbreviated: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  wide: ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne']
};
var dayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'madainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'oidhche'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'm',
    pm: 'f',
    midnight: 'm.o.',
    noon: 'm.l.',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  abbreviated: {
    am: 'M.',
    pm: 'F.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  },
  wide: {
    am: 'm.',
    pm: 'f.',
    midnight: 'meadhan oidhche',
    noon: 'meadhan là',
    morning: 'sa mhadainn',
    afternoon: 'feasgar',
    evening: 'feasgar',
    night: 'air an oidhche'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'd';
      case 2:
        return number + 'na';
    }
  }
  if (rem100 === 12) {
    return number + 'na';
  }
  return number + 'mh';
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

/***/ "./node_modules/date-fns/locale/gd/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(d|na|tr|mh)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(r|a)/i,
  abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,
  wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^c[1234]/i,
  wide: /^[1234](cd|na|tr|mh)? cairteal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[fgmcòilsd]/i,
  abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,
  wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i
};
var parseMonthPatterns = {
  narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i],
  any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[dlmcahs]/i,
  short: /^(dò|lu|mà|ci|ar|ha|sa)/i,
  abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i,
  wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i],
  any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,
  any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^m/i,
    pm: /^f/i,
    midnight: /^meadhan oidhche/i,
    noon: /^meadhan là/i,
    morning: /sa mhadainn/i,
    afternoon: /feasgar/i,
    evening: /feasgar/i,
    night: /air an oidhche/i
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

/***/ "./node_modules/date-fns/locale/gd/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/gd/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/gd/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/gd/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/gd/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/gd/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Scottish Gaelic.
 * @language Scottish Gaelic
 * @iso-639-2 gla
 * @author Lee Driscoll [@leedriscoll]{@link https://github.com/leedriscoll}
 */
var locale = {
  code: 'gd',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2dkL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9nZC9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9nZC9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZ2QvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2dkL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9nZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJ2ZW5kb3JzfmRhdGUtZm5zLWxvY2FsZS1nZC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ25hcyBsdWdoYSBuYSBkaW9nJyxcbiAgICBvdGhlcjogJ25hcyBsdWdoYSBuYSB7e2NvdW50fX0gZGlvZ2FuJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgZGlvZycsXG4gICAgdHdvOiAnMiBkaGlvZycsXG4gICAgdHdlbnR5OiAnMjAgZGlvZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGlvZ2FuJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2xldGggbWhpb25haWQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbmFzIGx1Z2hhIG5hIG1pb25haWQnLFxuICAgIG90aGVyOiAnbmFzIGx1Z2hhIG5hIHt7Y291bnR9fSBtaW9uYWlkZWFuJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWlvbmFpZCcsXG4gICAgdHdvOiAnMiBtaGlvbmFpZCcsXG4gICAgdHdlbnR5OiAnMjAgbWlvbmFpZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWlvbmFpZGVhbidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdtdSB1YWlyIGRlIHRow6xkZScsXG4gICAgb3RoZXI6ICdtdSB7e2NvdW50fX0gdWFpcmVhbiBkZSB0aMOsZGUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgdWFpciBkZSB0aMOsZGUnLFxuICAgIHR3bzogJzIgdWFpciBkZSB0aMOsZGUnLFxuICAgIHR3ZW50eTogJzIwIHVhaXIgZGUgdGjDrGRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1YWlyZWFuIGRlIHRow6xkZSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGzDoCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbMOgJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ211IDEgc2VhY2hkYWluJyxcbiAgICBvdGhlcjogJ211IHt7Y291bnR9fSBzZWFjaGRhaW5lYW4nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgc2VhY2hkYWluJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWFjaGRhaW5lYW4nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ211IG1ow6xvcycsXG4gICAgb3RoZXI6ICdtdSB7e2NvdW50fX0gbcOsb3NhbidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbcOsb3MnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG3DrG9zYW4nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnbXUgYmhsaWFkaG5hJyxcbiAgICBvdGhlcjogJ211IHt7Y291bnR9fSBibGlhZGhuYWljaGVhbidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBiaGxpYWRobmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGJsaWFkaG5hJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnY8OycnIgaXMgYmxpYWRobmEnLFxuICAgIG90aGVyOiAnY8OycnIgaXMge3tjb3VudH19IGJsaWFkaG5haWNoZWFuJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdjaGEgbWjDsnIgYmxpYWRobmEnLFxuICAgIG90aGVyOiAnY2hhIG1ow7JyIHt7Y291bnR9fSBibGlhZGhuYWljaGVhbidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMiAmJiAhIXRva2VuVmFsdWUudHdvKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS50d287XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIwICYmICEhdG9rZW5WYWx1ZS50d2VudHkpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLnR3ZW50eTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdhbm4gYW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdvIGNoaW9ubiAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiKSk7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2FpZycge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYWlnJyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0TG9uZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidtdSBkaGVpcmVhZGgnIGVlZWUgJ2FpZycgcFwiLFxuICAvL0ZJWFxuICB5ZXN0ZXJkYXk6IFwiJ2FuLWTDqCBhaWcnIHBcIixcbiAgdG9kYXk6IFwiJ2FuLWRpdWdoIGFpZycgcFwiLFxuICB0b21vcnJvdzogXCInYS1tw6BpcmVhY2ggYWlnJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2FpZycgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1JDJywgJ0FEJ10sXG4gIHdpZGU6IFsncm8gQ2hyw6xvc3RhJywgJ2Fubm8gZG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQzEnLCAnQzInLCAnQzMnLCAnQzQnXSxcbiAgd2lkZTogW1wiYScgY2hpYWQgY2hhaXJ0ZWFsXCIsICdhbiBkw6BybmEgY2FpcnRlYWwnLCAnYW4gdHJlYXMgY2FpcnRlYWwnLCAnYW4gY2VhdGhyYW1oIGNhaXJ0ZWFsJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0YnLCAnRycsICdNJywgJ0cnLCAnQycsICfDkicsICdJJywgJ0wnLCAnUycsICdEJywgJ1MnLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydGYW9pJywgJ0dlYXInLCAnTcOgcnQnLCAnR2libCcsICdDw6hpdCcsICfDkmdtaCcsICdJdWNoJywgJ0zDuW4nLCAnU3VsdCcsICdEw6BtaCcsICdTYW1oJywgJ0TDuWJoJ10sXG4gIHdpZGU6IFsnQW0gRmFvaWxsZWFjaCcsICdBbiBHZWFycmFuJywgJ0FtIE3DoHJ0JywgJ0FuIEdpYmxlYW4nLCAnQW4gQ8OoaXRlYW4nLCAnQW4gdC3DkmdtaGlvcycsICdBbiB0LUl1Y2hhcicsICdBbiBMw7luYXN0YWwnLCAnQW4gdC1TdWx0YWluJywgJ0FuIETDoG1oYWlyJywgJ0FuIHQtU2FtaGFpbicsICdBbiBEw7liaGxhY2hkJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnRCcsICdMJywgJ00nLCAnQycsICdBJywgJ0gnLCAnUyddLFxuICBzaG9ydDogWydEw7InLCAnTHUnLCAnTcOgJywgJ0NpJywgJ0FyJywgJ0hhJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0RpZCcsICdEaWwnLCAnRGltJywgJ0RpYycsICdEaWEnLCAnRGloJywgJ0RpcyddLFxuICB3aWRlOiBbJ0RpZMOybWhuYWljaCcsICdEaWx1YWluJywgJ0RpbcOgaXJ0JywgJ0RpY2lhZGFpbicsICdEaWFyZGFvaW4nLCAnRGloYW9pbmUnLCAnRGlzYXRoYWlybmUnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnbScsXG4gICAgcG06ICdmJyxcbiAgICBtaWRuaWdodDogJ20uby4nLFxuICAgIG5vb246ICdtLmwuJyxcbiAgICBtb3JuaW5nOiAnbWFkYWlubicsXG4gICAgYWZ0ZXJub29uOiAnZmVhc2dhcicsXG4gICAgZXZlbmluZzogJ2ZlYXNnYXInLFxuICAgIG5pZ2h0OiAnb2lkaGNoZSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ00uJyxcbiAgICBwbTogJ0YuJyxcbiAgICBtaWRuaWdodDogJ21lYWRoYW4gb2lkaGNoZScsXG4gICAgbm9vbjogJ21lYWRoYW4gbMOgJyxcbiAgICBtb3JuaW5nOiAnbWFkYWlubicsXG4gICAgYWZ0ZXJub29uOiAnZmVhc2dhcicsXG4gICAgZXZlbmluZzogJ2ZlYXNnYXInLFxuICAgIG5pZ2h0OiAnb2lkaGNoZSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnbS4nLFxuICAgIHBtOiAnZi4nLFxuICAgIG1pZG5pZ2h0OiAnbWVhZGhhbiBvaWRoY2hlJyxcbiAgICBub29uOiAnbWVhZGhhbiBsw6AnLFxuICAgIG1vcm5pbmc6ICdtYWRhaW5uJyxcbiAgICBhZnRlcm5vb246ICdmZWFzZ2FyJyxcbiAgICBldmVuaW5nOiAnZmVhc2dhcicsXG4gICAgbmlnaHQ6ICdvaWRoY2hlJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnbScsXG4gICAgcG06ICdmJyxcbiAgICBtaWRuaWdodDogJ20uby4nLFxuICAgIG5vb246ICdtLmwuJyxcbiAgICBtb3JuaW5nOiAnc2EgbWhhZGFpbm4nLFxuICAgIGFmdGVybm9vbjogJ2ZlYXNnYXInLFxuICAgIGV2ZW5pbmc6ICdmZWFzZ2FyJyxcbiAgICBuaWdodDogJ2FpciBhbiBvaWRoY2hlJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnTS4nLFxuICAgIHBtOiAnRi4nLFxuICAgIG1pZG5pZ2h0OiAnbWVhZGhhbiBvaWRoY2hlJyxcbiAgICBub29uOiAnbWVhZGhhbiBsw6AnLFxuICAgIG1vcm5pbmc6ICdzYSBtaGFkYWlubicsXG4gICAgYWZ0ZXJub29uOiAnZmVhc2dhcicsXG4gICAgZXZlbmluZzogJ2ZlYXNnYXInLFxuICAgIG5pZ2h0OiAnYWlyIGFuIG9pZGhjaGUnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ20uJyxcbiAgICBwbTogJ2YuJyxcbiAgICBtaWRuaWdodDogJ21lYWRoYW4gb2lkaGNoZScsXG4gICAgbm9vbjogJ21lYWRoYW4gbMOgJyxcbiAgICBtb3JuaW5nOiAnc2EgbWhhZGFpbm4nLFxuICAgIGFmdGVybm9vbjogJ2ZlYXNnYXInLFxuICAgIGV2ZW5pbmc6ICdmZWFzZ2FyJyxcbiAgICBuaWdodDogJ2FpciBhbiBvaWRoY2hlJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnZCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmEnO1xuICAgIH1cbiAgfVxuICBpZiAocmVtMTAwID09PSAxMikge1xuICAgIHJldHVybiBudW1iZXIgKyAnbmEnO1xuICB9XG4gIHJldHVybiBudW1iZXIgKyAnbWgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKGR8bmF8dHJ8bWgpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14ocnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oclxcLj9cXHM/Y1xcLj98clxcLj9cXHM/YVxcLj9cXHM/Y1xcLj98YVxcLj9cXHM/ZFxcLj98YVxcLj9cXHM/Y1xcLj8pL2ksXG4gIHdpZGU6IC9eKHJvIENocsOsb3N0YXxyb24gYW9pcyBjaG9pdGNoaW5ufGFubm8gZG9taW5pfGFvaXMgY2hvaXRjaGVhbm4pL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eY1sxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XShjZHxuYXx0cnxtaCk/IGNhaXJ0ZWFsL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltmZ21jw7JpbHNkXS9pLFxuICBhYmJyZXZpYXRlZDogL14oZmFvaXxnZWFyfG3DoHJ0fGdpYmx8Y8OoaXR8w7JnbWh8aXVjaHxsw7lufHN1bHR8ZMOgbWh8c2FtaHxkw7liaCkvaSxcbiAgd2lkZTogL14oYW0gZmFvaWxsZWFjaHxhbiBnZWFycmFufGFtIG3DoHJ0fGFuIGdpYmxlYW58YW4gY8OoaXRlYW58YW4gdC3DkmdtaGlvc3xhbiB0LUl1Y2hhcnxhbiBsw7luYXN0YWx8YW4gdC1TdWx0YWlufGFuIGTDoG1oYWlyfGFuIHQtU2FtaGFpbnxhbiBkw7liaGxhY2hkKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15mL2ksIC9eZy9pLCAvXm0vaSwgL15nL2ksIC9eYy9pLCAvXsOyL2ksIC9eaS9pLCAvXmwvaSwgL15zL2ksIC9eZC9pLCAvXnMvaSwgL15kL2ldLFxuICBhbnk6IFsvXmZhL2ksIC9eZ2UvaSwgL15tw6AvaSwgL15naS9pLCAvXmMvaSwgL17Dsi9pLCAvXmkvaSwgL15sL2ksIC9ec3UvaSwgL15kL2ksIC9ec2EvaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bZGxtY2Foc10vaSxcbiAgc2hvcnQ6IC9eKGTDsnxsdXxtw6B8Y2l8YXJ8aGF8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihkaWR8ZGlsfGRpbXxkaWN8ZGlhfGRpaHxkaXMpL2ksXG4gIHdpZGU6IC9eKGRpZMOybWhuYWljaHxkaWx1YWlufGRpbcOgaXJ0fGRpY2lhZGFpbnxkaWFyZGFvaW58ZGloYW9pbmV8ZGlzYXRoYWlybmUpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15kL2ksIC9ebC9pLCAvXm0vaSwgL15jL2ksIC9eYS9pLCAvXmgvaSwgL15zL2ldLFxuICBhbnk6IFsvXmQvaSwgL15sL2ksIC9ebS9pLCAvXmMvaSwgL15hL2ksIC9eaC9pLCAvXnMvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoc2FufGFpZykgKG1hZGFpbm58ZmVhc2dhcnxmZWFzZ2FyfG9pZGhjaGUpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1lYWRoYW4gb2lkaGNoZXxtZWFkaGFuIGzDoHwoc2FufGFpZykgKG1hZGFpbm58ZmVhc2dhcnxmZWFzZ2FyfG9pZGhjaGUpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXm0vaSxcbiAgICBwbTogL15mL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWVhZGhhbiBvaWRoY2hlL2ksXG4gICAgbm9vbjogL15tZWFkaGFuIGzDoC9pLFxuICAgIG1vcm5pbmc6IC9zYSBtaGFkYWlubi9pLFxuICAgIGFmdGVybm9vbjogL2ZlYXNnYXIvaSxcbiAgICBldmVuaW5nOiAvZmVhc2dhci9pLFxuICAgIG5pZ2h0OiAvYWlyIGFuIG9pZGhjaGUvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBTY290dGlzaCBHYWVsaWMuXG4gKiBAbGFuZ3VhZ2UgU2NvdHRpc2ggR2FlbGljXG4gKiBAaXNvLTYzOS0yIGdsYVxuICogQGF1dGhvciBMZWUgRHJpc2NvbGwgW0BsZWVkcmlzY29sbF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlZWRyaXNjb2xsfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZ2QnLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=