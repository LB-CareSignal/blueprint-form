(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-is-index-js"],{

/***/ "./node_modules/date-fns/locale/is/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/formatDistance/index.js ***!
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
    one: 'minna en 1 sekúnda',
    other: 'minna en {{count}} sekúndur'
  },
  xSeconds: {
    one: '1 sekúnda',
    other: '{{count}} sekúndur'
  },
  halfAMinute: 'hálf mínúta',
  lessThanXMinutes: {
    one: 'minna en 1 mínúta',
    other: 'minna en {{count}} mínútur'
  },
  xMinutes: {
    one: '1 mínúta',
    other: '{{count}} mínútur'
  },
  aboutXHours: {
    one: 'u.þ.b. 1 klukkustund',
    other: 'u.þ.b. {{count}} klukkustundir'
  },
  xHours: {
    one: '1 klukkustund',
    other: '{{count}} klukkustundir'
  },
  xDays: {
    one: '1 dagur',
    other: '{{count}} dagar'
  },
  aboutXWeeks: {
    one: 'um viku',
    other: 'um {{count}} vikur'
  },
  xWeeks: {
    one: '1 viku',
    other: '{{count}} vikur'
  },
  aboutXMonths: {
    one: 'u.þ.b. 1 mánuður',
    other: 'u.þ.b. {{count}} mánuðir'
  },
  xMonths: {
    one: '1 mánuður',
    other: '{{count}} mánuðir'
  },
  aboutXYears: {
    one: 'u.þ.b. 1 ár',
    other: 'u.þ.b. {{count}} ár'
  },
  xYears: {
    one: '1 ár',
    other: '{{count}} ár'
  },
  overXYears: {
    one: 'meira en 1 ár',
    other: 'meira en {{count}} ár'
  },
  almostXYears: {
    one: 'næstum 1 ár',
    other: 'næstum {{count}} ár'
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
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'í ' + result;
    } else {
      return result + ' síðan';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/is/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/formatLong/index.js ***!
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
  full: 'EEEE, do MMMM y',
  long: 'do MMMM y',
  medium: 'do MMM y',
  short: 'd.MM.y'
};
var timeFormats = {
  full: "'kl'. HH:mm:ss zzzz",
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
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

/***/ "./node_modules/date-fns/locale/is/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'síðasta' dddd 'kl.' p",
  yesterday: "'í gær kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'á morgun kl.' p",
  nextWeek: "dddd 'kl.' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/is/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/localize/index.js ***!
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
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['fyrir Krist', 'eftir Krist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1F', '2F', '3F', '4F'],
  wide: ['1. fjórðungur', '2. fjórðungur', '3. fjórðungur', '4. fjórðungur']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'Á', 'S', 'Ó', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'sept.', 'okt.', 'nóv.', 'des.'],
  wide: ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember']
};
var dayValues = {
  narrow: ['S', 'M', 'Þ', 'M', 'F', 'F', 'L'],
  short: ['Su', 'Má', 'Þr', 'Mi', 'Fi', 'Fö', 'La'],
  abbreviated: ['sun.', 'mán.', 'þri.', 'mið.', 'fim.', 'fös.', 'lau.'],
  wide: ['sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur']
};
var dayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt'
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

/***/ }),

/***/ "./node_modules/date-fns/locale/is/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+(\.)?/i;
var matchEraPatterns = {
  narrow: /^(f\.Kr\.|e\.Kr\.)/i,
  abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
  wide: /^(fyrir Krist|eftir Krist)/i
};
var parseEraPatterns = {
  any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^q[1234]\.?/i,
  wide: /^[1234]\.? fjórðungur/i
};
var parseQuarterPatterns = {
  any: [/1\.?/i, /2\.?/i, /3\.?/i, /4\.?/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmásónd]/i,
  abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
  wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|má|þr|mi|fi|fö|la)/i,
  abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
  wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i],
  any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
  any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^há/i,
    morning: /morgunn/i,
    afternoon: /síðdegi/i,
    evening: /kvöld/i,
    night: /nótt/i
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

/***/ "./node_modules/date-fns/locale/is/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/is/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/is/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/is/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/is/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/is/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/is/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Icelandic locale.
 * @language Icelandic
 * @iso-639-2 isl
 * @author Derek Blank [@derekblank]{@link https://github.com/derekblank}
 * @author Arnór Ýmir [@lamayg]{@link https://github.com/lamayg}
 */
var locale = {
  code: 'is',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9pcy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9pcy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvaXMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lzL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9pcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQzFHYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM1RSxxQ0FBcUMsbUJBQU8sQ0FBQyw4RkFBNEI7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsc0dBQWdDO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDBGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvRkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLWlzLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbWlubmEgZW4gMSBzZWvDum5kYScsXG4gICAgb3RoZXI6ICdtaW5uYSBlbiB7e2NvdW50fX0gc2Vrw7puZHVyJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vrw7puZGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla8O6bmR1cidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdow6FsZiBtw61uw7p0YScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdtaW5uYSBlbiAxIG3DrW7DunRhJyxcbiAgICBvdGhlcjogJ21pbm5hIGVuIHt7Y291bnR9fSBtw61uw7p0dXInXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtw61uw7p0YScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbcOtbsO6dHVyJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3Uuw74uYi4gMSBrbHVra3VzdHVuZCcsXG4gICAgb3RoZXI6ICd1LsO+LmIuIHt7Y291bnR9fSBrbHVra3VzdHVuZGlyJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGtsdWtrdXN0dW5kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBrbHVra3VzdHVuZGlyJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGFndXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhZ2FyJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ3VtIHZpa3UnLFxuICAgIG90aGVyOiAndW0ge3tjb3VudH19IHZpa3VyJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHZpa3UnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHZpa3VyJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICd1LsO+LmIuIDEgbcOhbnXDsHVyJyxcbiAgICBvdGhlcjogJ3Uuw74uYi4ge3tjb3VudH19IG3DoW51w7BpcidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbcOhbnXDsHVyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtw6FudcOwaXInXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAndS7Dvi5iLiAxIMOhcicsXG4gICAgb3RoZXI6ICd1LsO+LmIuIHt7Y291bnR9fSDDoXInXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgw6FyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDDoXInXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdtZWlyYSBlbiAxIMOhcicsXG4gICAgb3RoZXI6ICdtZWlyYSBlbiB7e2NvdW50fX0gw6FyJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICduw6ZzdHVtIDEgw6FyJyxcbiAgICBvdGhlcjogJ27DpnN0dW0ge3tjb3VudH19IMOhcidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfDrSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzw63DsGFuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZG8gTU1NTSB5JyxcbiAgbG9uZzogJ2RvIE1NTU0geScsXG4gIG1lZGl1bTogJ2RvIE1NTSB5JyxcbiAgc2hvcnQ6ICdkLk1NLnknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcIidrbCcuIEhIOm1tOnNzIHp6enpcIixcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAna2wuJyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdrbC4nIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0TG9uZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidzw63DsGFzdGEnIGRkZGQgJ2tsLicgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ8OtIGfDpnIga2wuJyBwXCIsXG4gIHRvZGF5OiBcIifDrSBkYWcga2wuJyBwXCIsXG4gIHRvbW9ycm93OiBcIifDoSBtb3JndW4ga2wuJyBwXCIsXG4gIG5leHRXZWVrOiBcImRkZGQgJ2tsLicgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnZi5Lci4nLCAnZS5Lci4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZi5Lci4nLCAnZS5Lci4nXSxcbiAgd2lkZTogWydmeXJpciBLcmlzdCcsICdlZnRpciBLcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzFGJywgJzJGJywgJzNGJywgJzRGJ10sXG4gIHdpZGU6IFsnMS4gZmrDs3LDsHVuZ3VyJywgJzIuIGZqw7Nyw7B1bmd1cicsICczLiBmasOzcsOwdW5ndXInLCAnNC4gZmrDs3LDsHVuZ3VyJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ8OBJywgJ1MnLCAnw5MnLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbi4nLCAnZmViLicsICdtYXJzJywgJ2FwcsOtbCcsICdtYcOtJywgJ2rDum7DrScsICdqw7psw60nLCAnw6Fnw7pzdCcsICdzZXB0LicsICdva3QuJywgJ27Ds3YuJywgJ2Rlcy4nXSxcbiAgd2lkZTogWydqYW7DumFyJywgJ2ZlYnLDumFyJywgJ21hcnMnLCAnYXByw61sJywgJ21hw60nLCAnasO6bsOtJywgJ2rDumzDrScsICfDoWfDunN0JywgJ3NlcHRlbWJlcicsICdva3TDs2JlcicsICduw7N2ZW1iZXInLCAnZGVzZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnw54nLCAnTScsICdGJywgJ0YnLCAnTCddLFxuICBzaG9ydDogWydTdScsICdNw6EnLCAnw55yJywgJ01pJywgJ0ZpJywgJ0bDticsICdMYSddLFxuICBhYmJyZXZpYXRlZDogWydzdW4uJywgJ23DoW4uJywgJ8O+cmkuJywgJ21pw7AuJywgJ2ZpbS4nLCAnZsO2cy4nLCAnbGF1LiddLFxuICB3aWRlOiBbJ3N1bm51ZGFndXInLCAnbcOhbnVkYWd1cicsICfDvnJpw7BqdWRhZ3VyJywgJ21pw7B2aWt1ZGFndXInLCAnZmltbXR1ZGFndXInLCAnZsO2c3R1ZGFndXInLCAnbGF1Z2FyZGFndXInXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnZicsXG4gICAgcG06ICdlJyxcbiAgICBtaWRuaWdodDogJ21pw7Buw6Z0dGknLFxuICAgIG5vb246ICdow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnbW9yZ3VubicsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpJyxcbiAgICBldmVuaW5nOiAna3bDtmxkJyxcbiAgICBuaWdodDogJ27Ds3R0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnZi5oLicsXG4gICAgcG06ICdlLmguJyxcbiAgICBtaWRuaWdodDogJ21pw7Buw6Z0dGknLFxuICAgIG5vb246ICdow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnbW9yZ3VubicsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpJyxcbiAgICBldmVuaW5nOiAna3bDtmxkJyxcbiAgICBuaWdodDogJ27Ds3R0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdmeXJpciBow6FkZWdpJyxcbiAgICBwbTogJ2VmdGlyIGjDoWRlZ2knLFxuICAgIG1pZG5pZ2h0OiAnbWnDsG7DpnR0aScsXG4gICAgbm9vbjogJ2jDoWRlZ2knLFxuICAgIG1vcm5pbmc6ICdtb3JndW5uJyxcbiAgICBhZnRlcm5vb246ICdzw63DsGRlZ2knLFxuICAgIGV2ZW5pbmc6ICdrdsO2bGQnLFxuICAgIG5pZ2h0OiAnbsOzdHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdmJyxcbiAgICBwbTogJ2UnLFxuICAgIG1pZG5pZ2h0OiAnw6EgbWnDsG7DpnR0aScsXG4gICAgbm9vbjogJ8OhIGjDoWRlZ2knLFxuICAgIG1vcm5pbmc6ICdhw7AgbW9yZ25pJyxcbiAgICBhZnRlcm5vb246ICdzw63DsGRlZ2lzJyxcbiAgICBldmVuaW5nOiAndW0ga3bDtmxkJyxcbiAgICBuaWdodDogJ3VtIG7Ds3R0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnZi5oLicsXG4gICAgcG06ICdlLmguJyxcbiAgICBtaWRuaWdodDogJ8OhIG1pw7Buw6Z0dGknLFxuICAgIG5vb246ICfDoSBow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnYcOwIG1vcmduaScsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpcycsXG4gICAgZXZlbmluZzogJ3VtIGt2w7ZsZCcsXG4gICAgbmlnaHQ6ICd1bSBuw7N0dCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnZnlyaXIgaMOhZGVnaScsXG4gICAgcG06ICdlZnRpciBow6FkZWdpJyxcbiAgICBtaWRuaWdodDogJ8OhIG1pw7Buw6Z0dGknLFxuICAgIG5vb246ICfDoSBow6FkZWdpJyxcbiAgICBtb3JuaW5nOiAnYcOwIG1vcmduaScsXG4gICAgYWZ0ZXJub29uOiAnc8Otw7BkZWdpcycsXG4gICAgZXZlbmluZzogJ3VtIGt2w7ZsZCcsXG4gICAgbmlnaHQ6ICd1bSBuw7N0dCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXIgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykoXFwuKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsoXFwuKT8vaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGZcXC5LclxcLnxlXFwuS3JcXC4pL2ksXG4gIGFiYnJldmlhdGVkOiAvXihmXFwuS3JcXC58ZVxcLktyXFwuKS9pLFxuICB3aWRlOiAvXihmeXJpciBLcmlzdHxlZnRpciBLcmlzdCkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXihmXFwuS3JcXC4pL2ksIC9eKGVcXC5LclxcLikvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF1cXC4/L2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF1cXC4/L2ksXG4gIHdpZGU6IC9eWzEyMzRdXFwuPyBmasOzcsOwdW5ndXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzFcXC4/L2ksIC8yXFwuPy9pLCAvM1xcLj8vaSwgLzRcXC4/L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm3DoXPDs25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFuXFwufGZlYlxcLnxtYXJzXFwufGFwcsOtbFxcLnxtYcOtfGrDum7DrXxqw7psw618w6FndXN0fHNlcFxcLnxvY3RcXC58bm92XFwufGRlY1xcLikvaSxcbiAgd2lkZTogL14oamFudWFyfGZlYnLDumFyfG1hcnN8YXByw61sfG1hw618asO6bsOtfGrDumzDrXzDoWd1c3R8c2VwdGVtYmVyfG9rdMOzYmVyfG7Ds3ZlbWJlcnxkZXNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXsOhL2ksIC9ecy9pLCAvXsOzL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYcOtL2ksIC9easO6bi9pLCAvXmrDumwvaSwgL17DoXUvaSwgL15zL2ksIC9ew7MvaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bcOhfMO+cnxtaXxmaXxmw7Z8bGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bcOhbnzDvnJpfG1pw7B8ZmltfGbDtnN8bGF1KVxcLj8vaSxcbiAgd2lkZTogL14oc3VubnVkYWd1cnxtw6FudWRhZ3VyfMO+cmnDsGp1ZGFndXJ8bWnDsHZpa3VkYWd1cnxmaW1tdHVkYWd1cnxmw7ZzdHVkYWd1cnxsYXVnYXJkYWd1cikvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9ew74vaSwgL15tL2ksIC9eZi9pLCAvXmYvaSwgL15sL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebcOhL2ksIC9ew75yL2ksIC9ebWkvaSwgL15maS9pLCAvXmbDti9pLCAvXmxhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oZnxlfHPDrcOwZGVnaXN8KMOhfGHDsHx1bSkgKG1vcmduaXxrdsO2bGR8bsOzdHR8bWnDsG7DpnR0aSkpL2ksXG4gIGFueTogL14oZnlyaXIgaMOhZGVnaXxlZnRpciBow6FkZWdpfFtlZl1cXC4/aFxcLj98c8Otw7BkZWdpc3xtb3JndW5ufCjDoXxhw7B8dW0pIChtb3Jnbml8a3bDtmxkfG7Ds3R0fG1pw7Buw6Z0dGkpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmYvaSxcbiAgICBwbTogL15lL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXmjDoS9pLFxuICAgIG1vcm5pbmc6IC9tb3JndW5uL2ksXG4gICAgYWZ0ZXJub29uOiAvc8Otw7BkZWdpL2ksXG4gICAgZXZlbmluZzogL2t2w7ZsZC9pLFxuICAgIG5pZ2h0OiAvbsOzdHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBJY2VsYW5kaWMgbG9jYWxlLlxuICogQGxhbmd1YWdlIEljZWxhbmRpY1xuICogQGlzby02MzktMiBpc2xcbiAqIEBhdXRob3IgRGVyZWsgQmxhbmsgW0BkZXJla2JsYW5rXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZGVyZWtibGFua31cbiAqIEBhdXRob3IgQXJuw7NyIMOdbWlyIFtAbGFtYXlnXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGFtYXlnfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnaXMnLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMSAvKiBNb25kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=