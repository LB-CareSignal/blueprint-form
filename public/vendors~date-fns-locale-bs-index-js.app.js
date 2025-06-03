(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-bs-index-js"],{

/***/ "./node_modules/date-fns/locale/bs/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/formatDistance/index.js ***!
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
    one: {
      standalone: 'manje od 1 sekunde',
      withPrepositionAgo: 'manje od 1 sekunde',
      withPrepositionIn: 'manje od 1 sekundu'
    },
    dual: 'manje od {{count}} sekunde',
    other: 'manje od {{count}} sekundi'
  },
  xSeconds: {
    one: {
      standalone: '1 sekunda',
      withPrepositionAgo: '1 sekunde',
      withPrepositionIn: '1 sekundu'
    },
    dual: '{{count}} sekunde',
    other: '{{count}} sekundi'
  },
  halfAMinute: 'pola minute',
  lessThanXMinutes: {
    one: {
      standalone: 'manje od 1 minute',
      withPrepositionAgo: 'manje od 1 minute',
      withPrepositionIn: 'manje od 1 minutu'
    },
    dual: 'manje od {{count}} minute',
    other: 'manje od {{count}} minuta'
  },
  xMinutes: {
    one: {
      standalone: '1 minuta',
      withPrepositionAgo: '1 minute',
      withPrepositionIn: '1 minutu'
    },
    dual: '{{count}} minute',
    other: '{{count}} minuta'
  },
  aboutXHours: {
    one: {
      standalone: 'oko 1 sat',
      withPrepositionAgo: 'oko 1 sat',
      withPrepositionIn: 'oko 1 sat'
    },
    dual: 'oko {{count}} sata',
    other: 'oko {{count}} sati'
  },
  xHours: {
    one: {
      standalone: '1 sat',
      withPrepositionAgo: '1 sat',
      withPrepositionIn: '1 sat'
    },
    dual: '{{count}} sata',
    other: '{{count}} sati'
  },
  xDays: {
    one: {
      standalone: '1 dan',
      withPrepositionAgo: '1 dan',
      withPrepositionIn: '1 dan'
    },
    dual: '{{count}} dana',
    other: '{{count}} dana'
  },
  aboutXWeeks: {
    one: {
      standalone: 'oko 1 sedmicu',
      withPrepositionAgo: 'oko 1 sedmicu',
      withPrepositionIn: 'oko 1 sedmicu'
    },
    dual: 'oko {{count}} sedmice',
    other: 'oko {{count}} sedmice'
  },
  xWeeks: {
    one: {
      standalone: '1 sedmicu',
      withPrepositionAgo: '1 sedmicu',
      withPrepositionIn: '1 sedmicu'
    },
    dual: '{{count}} sedmice',
    other: '{{count}} sedmice'
  },
  aboutXMonths: {
    one: {
      standalone: 'oko 1 mjesec',
      withPrepositionAgo: 'oko 1 mjesec',
      withPrepositionIn: 'oko 1 mjesec'
    },
    dual: 'oko {{count}} mjeseca',
    other: 'oko {{count}} mjeseci'
  },
  xMonths: {
    one: {
      standalone: '1 mjesec',
      withPrepositionAgo: '1 mjesec',
      withPrepositionIn: '1 mjesec'
    },
    dual: '{{count}} mjeseca',
    other: '{{count}} mjeseci'
  },
  aboutXYears: {
    one: {
      standalone: 'oko 1 godinu',
      withPrepositionAgo: 'oko 1 godinu',
      withPrepositionIn: 'oko 1 godinu'
    },
    dual: 'oko {{count}} godine',
    other: 'oko {{count}} godina'
  },
  xYears: {
    one: {
      standalone: '1 godina',
      withPrepositionAgo: '1 godine',
      withPrepositionIn: '1 godinu'
    },
    dual: '{{count}} godine',
    other: '{{count}} godina'
  },
  overXYears: {
    one: {
      standalone: 'preko 1 godinu',
      withPrepositionAgo: 'preko 1 godinu',
      withPrepositionIn: 'preko 1 godinu'
    },
    dual: 'preko {{count}} godine',
    other: 'preko {{count}} godina'
  },
  almostXYears: {
    one: {
      standalone: 'gotovo 1 godinu',
      withPrepositionAgo: 'gotovo 1 godinu',
      withPrepositionIn: 'gotovo 1 godinu'
    },
    dual: 'gotovo {{count}} godine',
    other: 'gotovo {{count}} godina'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        result = tokenValue.one.withPrepositionIn;
      } else {
        result = tokenValue.one.withPrepositionAgo;
      }
    } else {
      result = tokenValue.one.standalone;
    }
  } else if (count % 10 > 1 && count % 10 < 5 &&
  // if last digit is between 2 and 4
  String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
  ) {
    result = tokenValue.dual.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'za ' + result;
    } else {
      return 'prije ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bs/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/formatLong/index.js ***!
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
  full: 'EEEE, d. MMMM yyyy.',
  long: 'd. MMMM yyyy.',
  medium: 'd. MMM yy.',
  short: 'dd. MM. yy.'
};
var timeFormats = {
  full: 'HH:mm:ss (zzzz)',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'u' {{time}}",
  long: "{{date}} 'u' {{time}}",
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

/***/ "./node_modules/date-fns/locale/bs/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'prošle nedjelje u' p";
      case 3:
        return "'prošle srijede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function nextWeek(date) {
    switch (date.getUTCDay()) {
      case 0:
        return "'sljedeće nedjelje u' p";
      case 3:
        return "'sljedeću srijedu u' p";
      case 6:
        return "'sljedeću subotu u' p";
      default:
        return "'sljedeći' EEEE 'u' p";
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bs/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/localize/index.js ***!
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
  narrow: ['pr.n.e.', 'AD'],
  abbreviated: ['pr. Hr.', 'po. Hr.'],
  wide: ['Prije Hrista', 'Poslije Hrista']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var dayValues = {
  narrow: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  short: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  abbreviated: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  wide: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'poslije podne',
    evening: 'uveče',
    night: 'noću'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'popodne',
    evening: 'uveče',
    night: 'noću'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'ujutru',
    afternoon: 'poslije podne',
    evening: 'uveče',
    night: 'noću'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return String(number) + '.';
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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bs/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(pr\.n\.e\.|AD)/i,
  abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,
  wide: /^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|nova)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?kv\.?/i,
  wide: /^[1234]\. kvartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,
  wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i
};
var parseMonthPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^pono/i,
    noon: /^pod/i,
    morning: /jutro/i,
    afternoon: /(poslije\s|po)+podne/i,
    evening: /(uvece|uveče)/i,
    night: /(nocu|noću)/i
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

/***/ "./node_modules/date-fns/locale/bs/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/bs/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/bs/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/bs/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/bs/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/bs/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Bosnian locale.
 * @language Bosnian
 * @iso-639-2 bos
 * @author Branislav Lazić [@branislavlazic]{@link https://github.com/branislavlazic}
 */
var locale = {
  code: 'bs',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9icy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9icy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvYnMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JzL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9icy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsT0FBTztBQUM3Qix1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLE9BQU87QUFDN0IsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ3pHYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM1RSxxQ0FBcUMsbUJBQU8sQ0FBQyw4RkFBNEI7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsc0dBQWdDO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDBGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvRkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoidmVuZG9yc35kYXRlLWZucy1sb2NhbGUtYnMtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdtYW5qZSBvZCAxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBzZWt1bmRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnbWFuamUgb2QgMSBzZWt1bmR1J1xuICAgIH0sXG4gICAgZHVhbDogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRpJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgc2VrdW5kYScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIHNla3VuZHUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IHNla3VuZGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZGknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAncG9sYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdtYW5qZSBvZCAxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICdtYW5qZSBvZCB7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBtaW51dGEnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIHNhdCdcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHNhdGEnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgc2F0J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzYXRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBkYW4nXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGRhbmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhbmEnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgc2VkbWljdScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBzZWRtaWN1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgc2VkbWljdSdcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHNlZG1pY2UnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBzZWRtaWNlJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNlZG1pY3UnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBzZWRtaWN1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBzZWRtaWN1J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzZWRtaWNlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWRtaWNlJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBtamVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgbWplc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgbWplc2VjJ1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gbWplc2VjYScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IG1qZXNlY2knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIG1qZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIG1qZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgbWplc2VjJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBtamVzZWNhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtamVzZWNpJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZ29kaW5hJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZ29kaW5lJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGdvZGluZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdwcmVrbyAxIGdvZGludSdcbiAgICB9LFxuICAgIGR1YWw6ICdwcmVrbyB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ3ByZWtvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ2dvdG92byAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdnb3Rvdm8gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdnb3Rvdm8gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uSW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS53aXRoUHJlcG9zaXRpb25BZ287XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLnN0YW5kYWxvbmU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvdW50ICUgMTAgPiAxICYmIGNvdW50ICUgMTAgPCA1ICYmXG4gIC8vIGlmIGxhc3QgZGlnaXQgaXMgYmV0d2VlbiAyIGFuZCA0XG4gIFN0cmluZyhjb3VudCkuc3Vic3RyKC0yLCAxKSAhPT0gJzEnIC8vIHVubGVzcyB0aGUgMm5kIHRvIGxhc3QgZGlnaXQgaXMgXCIxXCJcbiAgKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5kdWFsLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ3phICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncHJpamUgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZC4gTU1NTSB5eXl5LicsXG4gIGxvbmc6ICdkLiBNTU1NIHl5eXkuJyxcbiAgbWVkaXVtOiAnZC4gTU1NIHl5LicsXG4gIHNob3J0OiAnZGQuIE1NLiB5eS4nXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnSEg6bW06c3MgKHp6enopJyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAndScge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAndScge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICBzd2l0Y2ggKGRhdGUuZ2V0VVRDRGF5KCkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGUgbmVkamVsamUgdScgcFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsZSBzcmlqZWRlIHUnIHBcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGUgc3Vib3RlIHUnIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIidwcm/FoWxpJyBFRUVFICd1JyBwXCI7XG4gICAgfVxuICB9LFxuICB5ZXN0ZXJkYXk6IFwiJ2p1xI1lIHUnIHBcIixcbiAgdG9kYXk6IFwiJ2RhbmFzIHUnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3N1dHJhIHUnIHBcIixcbiAgbmV4dFdlZWs6IGZ1bmN0aW9uIG5leHRXZWVrKGRhdGUpIHtcbiAgICBzd2l0Y2ggKGRhdGUuZ2V0VVRDRGF5KCkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiJ3NsamVkZcSHZSBuZWRqZWxqZSB1JyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIidzbGplZGXEh3Ugc3JpamVkdSB1JyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidzbGplZGXEh3Ugc3Vib3R1IHUnIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIidzbGplZGXEh2knIEVFRUUgJ3UnIHBcIjtcbiAgICB9XG4gIH0sXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydwci5uLmUuJywgJ0FEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3ByLiBIci4nLCAncG8uIEhyLiddLFxuICB3aWRlOiBbJ1ByaWplIEhyaXN0YScsICdQb3NsaWplIEhyaXN0YSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxLicsICcyLicsICczLicsICc0LiddLFxuICBhYmJyZXZpYXRlZDogWycxLiBrdi4nLCAnMi4ga3YuJywgJzMuIGt2LicsICc0LiBrdi4nXSxcbiAgd2lkZTogWycxLiBrdmFydGFsJywgJzIuIGt2YXJ0YWwnLCAnMy4ga3ZhcnRhbCcsICc0LiBrdmFydGFsJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxLicsICcyLicsICczLicsICc0LicsICc1LicsICc2LicsICc3LicsICc4LicsICc5LicsICcxMC4nLCAnMTEuJywgJzEyLiddLFxuICBhYmJyZXZpYXRlZDogWydqYW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbWFqJywgJ2p1bicsICdqdWwnLCAnYXZnJywgJ3NlcCcsICdva3QnLCAnbm92JywgJ2RlYyddLFxuICB3aWRlOiBbJ2phbnVhcicsICdmZWJydWFyJywgJ21hcnQnLCAnYXByaWwnLCAnbWFqJywgJ2p1bmknLCAnanVsaScsICdhdmd1c3QnLCAnc2VwdGVtYmFyJywgJ29rdG9iYXInLCAnbm92ZW1iYXInLCAnZGVjZW1iYXInXVxufTtcbnZhciBmb3JtYXR0aW5nTW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxLicsICcyLicsICczLicsICc0LicsICc1LicsICc2LicsICc3LicsICc4LicsICc5LicsICcxMC4nLCAnMTEuJywgJzEyLiddLFxuICBhYmJyZXZpYXRlZDogWydqYW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbWFqJywgJ2p1bicsICdqdWwnLCAnYXZnJywgJ3NlcCcsICdva3QnLCAnbm92JywgJ2RlYyddLFxuICB3aWRlOiBbJ2phbnVhcicsICdmZWJydWFyJywgJ21hcnQnLCAnYXByaWwnLCAnbWFqJywgJ2p1bmknLCAnanVsaScsICdhdmd1c3QnLCAnc2VwdGVtYmFyJywgJ29rdG9iYXInLCAnbm92ZW1iYXInLCAnZGVjZW1iYXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydOJywgJ1AnLCAnVScsICdTJywgJ8SMJywgJ1AnLCAnUyddLFxuICBzaG9ydDogWyduZWQnLCAncG9uJywgJ3V0bycsICdzcmUnLCAnxI1ldCcsICdwZXQnLCAnc3ViJ10sXG4gIGFiYnJldmlhdGVkOiBbJ25lZCcsICdwb24nLCAndXRvJywgJ3NyZScsICfEjWV0JywgJ3BldCcsICdzdWInXSxcbiAgd2lkZTogWyduZWRqZWxqYScsICdwb25lZGplbGphaycsICd1dG9yYWsnLCAnc3JpamVkYScsICfEjWV0dnJ0YWsnLCAncGV0YWsnLCAnc3Vib3RhJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3Bvbm/EhycsXG4gICAgbm9vbjogJ3BvZG5lJyxcbiAgICBtb3JuaW5nOiAndWp1dHJ1JyxcbiAgICBhZnRlcm5vb246ICdwb3BvZG5lJyxcbiAgICBldmVuaW5nOiAndXZlxI1lJyxcbiAgICBuaWdodDogJ25vxId1J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncG9ub8SHJyxcbiAgICBub29uOiAncG9kbmUnLFxuICAgIG1vcm5pbmc6ICd1anV0cnUnLFxuICAgIGFmdGVybm9vbjogJ3BvcG9kbmUnLFxuICAgIGV2ZW5pbmc6ICd1dmXEjWUnLFxuICAgIG5pZ2h0OiAnbm/Eh3UnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3Bvbm/EhycsXG4gICAgbm9vbjogJ3BvZG5lJyxcbiAgICBtb3JuaW5nOiAndWp1dHJ1JyxcbiAgICBhZnRlcm5vb246ICdwb3NsaWplIHBvZG5lJyxcbiAgICBldmVuaW5nOiAndXZlxI1lJyxcbiAgICBuaWdodDogJ25vxId1J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncG9ub8SHJyxcbiAgICBub29uOiAncG9kbmUnLFxuICAgIG1vcm5pbmc6ICd1anV0cnUnLFxuICAgIGFmdGVybm9vbjogJ3BvcG9kbmUnLFxuICAgIGV2ZW5pbmc6ICd1dmXEjWUnLFxuICAgIG5pZ2h0OiAnbm/Eh3UnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb25vxIcnLFxuICAgIG5vb246ICdwb2RuZScsXG4gICAgbW9ybmluZzogJ3VqdXRydScsXG4gICAgYWZ0ZXJub29uOiAncG9wb2RuZScsXG4gICAgZXZlbmluZzogJ3V2ZcSNZScsXG4gICAgbmlnaHQ6ICdub8SHdSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncG9ub8SHJyxcbiAgICBub29uOiAncG9kbmUnLFxuICAgIG1vcm5pbmc6ICd1anV0cnUnLFxuICAgIGFmdGVybm9vbjogJ3Bvc2xpamUgcG9kbmUnLFxuICAgIGV2ZW5pbmc6ICd1dmXEjWUnLFxuICAgIG5pZ2h0OiAnbm/Eh3UnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gU3RyaW5nKG51bWJlcikgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ01vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKVxcLi9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14ocHJcXC5uXFwuZVxcLnxBRCkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHByXFwuXFxzP0hyXFwufHBvXFwuXFxzP0hyXFwuKS9pLFxuICB3aWRlOiAvXihQcmlqZSBIcmlzdGF8cHJpamUgbm92ZSBlcmV8UG9zbGlqZSBIcmlzdGF8bm92YSBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15wci9pLCAvXihwb3xub3ZhKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15bMTIzNF1cXC5cXHM/a3ZcXC4/L2ksXG4gIHdpZGU6IC9eWzEyMzRdXFwuIGt2YXJ0YWwvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKDEwfDExfDEyfFsxMjM0NTY3ODldKVxcLi9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1hanxqdW58anVsfGF2Z3xzZXB8b2t0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKChqYW51YXJ8amFudWFyYSl8KGZlYnJ1YXJ8ZmVicnVhcmEpfChtYXJ0fG1hcnRhKXwoYXByaWx8YXByaWxhKXwobWFqfG1hamEpfChqdW5pfGp1bmEpfChqdWxpfGp1bGEpfChhdmd1c3R8YXZndXN0YSl8KHNlcHRlbWJhcnxzZXB0ZW1icmEpfChva3RvYmFyfG9rdG9icmEpfChub3ZlbWJhcnxub3ZlbWJyYSl8KGRlY2VtYmFyfGRlY2VtYnJhKSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eMS9pLCAvXjIvaSwgL14zL2ksIC9eNC9pLCAvXjUvaSwgL142L2ksIC9eNy9pLCAvXjgvaSwgL145L2ksIC9eMTAvaSwgL14xMS9pLCAvXjEyL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWFqL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXZnL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW25wdXPEjWNdL2ksXG4gIHNob3J0OiAvXihuZWR8cG9ufHV0b3xzcmV8KMSNZXR8Y2V0KXxwZXR8c3ViKS9pLFxuICBhYmJyZXZpYXRlZDogL14obmVkfHBvbnx1dG98c3JlfCjEjWV0fGNldCl8cGV0fHN1YikvaSxcbiAgd2lkZTogL14obmVkamVsamF8cG9uZWRqZWxqYWt8dXRvcmFrfHNyaWplZGF8KMSNZXR2cnRha3xjZXR2cnRhayl8cGV0YWt8c3Vib3RhKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IC9eKGFtfHBtfHBvbm9jfHBvbm/Eh3wocG8pP3BvZG5lfHV2ZWNlfHV2ZcSNZXxub8SHdXxwb3NsaWplIHBvZG5lfHVqdXRydSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXnBvbm8vaSxcbiAgICBub29uOiAvXnBvZC9pLFxuICAgIG1vcm5pbmc6IC9qdXRyby9pLFxuICAgIGFmdGVybm9vbjogLyhwb3NsaWplXFxzfHBvKStwb2RuZS9pLFxuICAgIGV2ZW5pbmc6IC8odXZlY2V8dXZlxI1lKS9pLFxuICAgIG5pZ2h0OiAvKG5vY3V8bm/Eh3UpL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgQm9zbmlhbiBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgQm9zbmlhblxuICogQGlzby02MzktMiBib3NcbiAqIEBhdXRob3IgQnJhbmlzbGF2IExhemnEhyBbQGJyYW5pc2xhdmxhemljXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYnJhbmlzbGF2bGF6aWN9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdicycsXG4gIGZvcm1hdERpc3RhbmNlOiBfaW5kZXguZGVmYXVsdCxcbiAgZm9ybWF0TG9uZzogX2luZGV4Mi5kZWZhdWx0LFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4My5kZWZhdWx0LFxuICBsb2NhbGl6ZTogX2luZGV4NC5kZWZhdWx0LFxuICBtYXRjaDogX2luZGV4NS5kZWZhdWx0LFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAxIC8qIE1vbmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==