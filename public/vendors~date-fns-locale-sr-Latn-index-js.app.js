(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-sr-Latn-index-js"],{

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/formatDistance/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/formatDistance/index.js ***!
  \***************************************************************************/
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
      standalone: 'oko 1 nedelju',
      withPrepositionAgo: 'oko 1 nedelju',
      withPrepositionIn: 'oko 1 nedelju'
    },
    dual: 'oko {{count}} nedelje',
    other: 'oko {{count}} nedelje'
  },
  xWeeks: {
    one: {
      standalone: '1 nedelju',
      withPrepositionAgo: '1 nedelju',
      withPrepositionIn: '1 nedelju'
    },
    dual: '{{count}} nedelje',
    other: '{{count}} nedelje'
  },
  aboutXMonths: {
    one: {
      standalone: 'oko 1 mesec',
      withPrepositionAgo: 'oko 1 mesec',
      withPrepositionIn: 'oko 1 mesec'
    },
    dual: 'oko {{count}} meseca',
    other: 'oko {{count}} meseci'
  },
  xMonths: {
    one: {
      standalone: '1 mesec',
      withPrepositionAgo: '1 mesec',
      withPrepositionIn: '1 mesec'
    },
    dual: '{{count}} meseca',
    other: '{{count}} meseci'
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
      return 'pre ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/formatLong/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/formatLong/index.js ***!
  \***********************************************************************/
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

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/formatRelative/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/formatRelative/index.js ***!
  \***************************************************************************/
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
        return "'prošle nedelje u' p";
      case 3:
        return "'prošle srede u' p";
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
        return "'sledeće nedelje u' p";
      case 3:
        return "'sledeću sredu u' p";
      case 6:
        return "'sledeću subotu u' p";
      default:
        return "'sledeći' EEEE 'u' p";
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

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/localize/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/localize/index.js ***!
  \*********************************************************************/
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
  wide: ['Pre Hrista', 'Posle Hrista']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'],
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
};
var dayValues = {
  narrow: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'],
  short: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  abbreviated: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  wide: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota']
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
    afternoon: 'posle podne',
    evening: 'uveče',
    night: 'noću'
  }
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
    afternoon: 'posle podne',
    evening: 'uveče',
    night: 'noću'
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

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/match/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/match/index.js ***!
  \******************************************************************/
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
  wide: /^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i
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
  wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i
};
var parseMonthPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
  wide: /^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^pono/i,
    noon: /^pod/i,
    morning: /jutro/i,
    afternoon: /(posle\s|po)+podne/i,
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

/***/ "./node_modules/date-fns/locale/sr-Latn/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/sr-Latn/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/sr-Latn/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/sr-Latn/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/sr-Latn/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/sr-Latn/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Serbian latin locale.
 * @language Serbian
 * @iso-639-2 srp
 * @author Igor Radivojević [@rogyvoje]{@link https://github.com/rogyvoje}
 */
var locale = {
  code: 'sr-Latn',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyLUxhdG4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyLUxhdG4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc3ItTGF0bi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc3ItTGF0bi9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc3ItTGF0bi9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc3ItTGF0bi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsT0FBTztBQUM3Qix1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLE9BQU87QUFDN0IsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ3pHYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDJHQUFnQztBQUM1RSxxQ0FBcUMsbUJBQU8sQ0FBQyxtR0FBNEI7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsMkdBQWdDO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLCtGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyx5RkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoidmVuZG9yc35kYXRlLWZucy1sb2NhbGUtc3ItTGF0bi1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ21hbmplIG9kIDEgc2VrdW5kZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdtYW5qZSBvZCAxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdtYW5qZSBvZCAxIHNla3VuZHUnXG4gICAgfSxcbiAgICBkdWFsOiAnbWFuamUgb2Qge3tjb3VudH19IHNla3VuZGUnLFxuICAgIG90aGVyOiAnbWFuamUgb2Qge3tjb3VudH19IHNla3VuZGknXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBzZWt1bmRhJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgc2VrdW5kZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgc2VrdW5kdSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kaSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdwb2xhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdtYW5qZSBvZCAxIG1pbnV0ZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdtYW5qZSBvZCAxIG1pbnV0ZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ21hbmplIG9kIDEgbWludXR1J1xuICAgIH0sXG4gICAgZHVhbDogJ21hbmplIG9kIHt7Y291bnR9fSBtaW51dGUnLFxuICAgIG90aGVyOiAnbWFuamUgb2Qge3tjb3VudH19IG1pbnV0YSdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIG1pbnV0YScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIG1pbnV0ZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgbWludXR1J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0YSdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBzYXQnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgc2F0J1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gc2F0YScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IHNhdGknXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBzYXQnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IHNhdGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNhdGknXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBkYW4nLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBkYW4nLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIGRhbidcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gZGFuYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGFuYSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBuZWRlbGp1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIG5lZGVsanUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBuZWRlbGp1J1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gbmVkZWxqZScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IG5lZGVsamUnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgbmVkZWxqdScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIG5lZGVsanUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG5lZGVsanUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IG5lZGVsamUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG5lZGVsamUnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIG1lc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIG1lc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgbWVzZWMnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBtZXNlY2EnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBtZXNlY2knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIG1lc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgbWVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG1lc2VjJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBtZXNlY2EnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1lc2VjaSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ29rbyB7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIGdvZGluYScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIGdvZGluZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGdvZGluYSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ3ByZWtvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ3ByZWtvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAncHJla28gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAncHJla28ge3tjb3VudH19IGdvZGluZScsXG4gICAgb3RoZXI6ICdwcmVrbyB7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdnb3Rvdm8gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnZ290b3ZvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnZ290b3ZvIDEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ2dvdG92byB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ2dvdG92byB7e2NvdW50fX0gZ29kaW5hJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLndpdGhQcmVwb3NpdGlvbkluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uQWdvO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS5zdGFuZGFsb25lO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb3VudCAlIDEwID4gMSAmJiBjb3VudCAlIDEwIDwgNSAmJlxuICAvLyBpZiBsYXN0IGRpZ2l0IGlzIGJldHdlZW4gMiBhbmQgNFxuICBTdHJpbmcoY291bnQpLnN1YnN0cigtMiwgMSkgIT09ICcxJyAvLyB1bmxlc3MgdGhlIDJuZCB0byBsYXN0IGRpZ2l0IGlzIFwiMVwiXG4gICkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZHVhbC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICd6YSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3ByZSAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiKSk7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBkLiBNTU1NIHl5eXkuJyxcbiAgbG9uZzogJ2QuIE1NTU0geXl5eS4nLFxuICBtZWRpdW06ICdkLiBNTU0geXkuJyxcbiAgc2hvcnQ6ICdkZC4gTU0uIHl5Lidcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyAoenp6eiknLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICd1JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICd1JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0ge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSkge1xuICAgIHN3aXRjaCAoZGF0ZS5nZXRVVENEYXkoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsZSBuZWRlbGplIHUnIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGUgc3JlZGUgdScgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIncHJvxaFsZSBzdWJvdGUgdScgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3Byb8WhbGknIEVFRUUgJ3UnIHBcIjtcbiAgICB9XG4gIH0sXG4gIHllc3RlcmRheTogXCInanXEjWUgdScgcFwiLFxuICB0b2RheTogXCInZGFuYXMgdScgcFwiLFxuICB0b21vcnJvdzogXCInc3V0cmEgdScgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSkge1xuICAgIHN3aXRjaCAoZGF0ZS5nZXRVVENEYXkoKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCInc2xlZGXEh2UgbmVkZWxqZSB1JyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIidzbGVkZcSHdSBzcmVkdSB1JyBwXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIidzbGVkZcSHdSBzdWJvdHUgdScgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3NsZWRlxIdpJyBFRUVFICd1JyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsncHIubi5lLicsICdBRCddLFxuICBhYmJyZXZpYXRlZDogWydwci4gSHIuJywgJ3BvLiBIci4nXSxcbiAgd2lkZTogWydQcmUgSHJpc3RhJywgJ1Bvc2xlIEhyaXN0YSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxLicsICcyLicsICczLicsICc0LiddLFxuICBhYmJyZXZpYXRlZDogWycxLiBrdi4nLCAnMi4ga3YuJywgJzMuIGt2LicsICc0LiBrdi4nXSxcbiAgd2lkZTogWycxLiBrdmFydGFsJywgJzIuIGt2YXJ0YWwnLCAnMy4ga3ZhcnRhbCcsICc0LiBrdmFydGFsJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxLicsICcyLicsICczLicsICc0LicsICc1LicsICc2LicsICc3LicsICc4LicsICc5LicsICcxMC4nLCAnMTEuJywgJzEyLiddLFxuICBhYmJyZXZpYXRlZDogWydqYW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbWFqJywgJ2p1bicsICdqdWwnLCAnYXZnJywgJ3NlcCcsICdva3QnLCAnbm92JywgJ2RlYyddLFxuICB3aWRlOiBbJ2phbnVhcicsICdmZWJydWFyJywgJ21hcnQnLCAnYXByaWwnLCAnbWFqJywgJ2p1bicsICdqdWwnLCAnYXZndXN0JywgJ3NlcHRlbWJhcicsICdva3RvYmFyJywgJ25vdmVtYmFyJywgJ2RlY2VtYmFyJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nLCAnNS4nLCAnNi4nLCAnNy4nLCAnOC4nLCAnOS4nLCAnMTAuJywgJzExLicsICcxMi4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21haicsICdqdW4nLCAnanVsJywgJ2F2ZycsICdzZXAnLCAnb2t0JywgJ25vdicsICdkZWMnXSxcbiAgd2lkZTogWydqYW51YXInLCAnZmVicnVhcicsICdtYXJ0JywgJ2FwcmlsJywgJ21haicsICdqdW4nLCAnanVsJywgJ2F2Z3VzdCcsICdzZXB0ZW1iYXInLCAnb2t0b2JhcicsICdub3ZlbWJhcicsICdkZWNlbWJhciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ04nLCAnUCcsICdVJywgJ1MnLCAnxIwnLCAnUCcsICdTJ10sXG4gIHNob3J0OiBbJ25lZCcsICdwb24nLCAndXRvJywgJ3NyZScsICfEjWV0JywgJ3BldCcsICdzdWInXSxcbiAgYWJicmV2aWF0ZWQ6IFsnbmVkJywgJ3BvbicsICd1dG8nLCAnc3JlJywgJ8SNZXQnLCAncGV0JywgJ3N1YiddLFxuICB3aWRlOiBbJ25lZGVsamEnLCAncG9uZWRlbGphaycsICd1dG9yYWsnLCAnc3JlZGEnLCAnxI1ldHZydGFrJywgJ3BldGFrJywgJ3N1Ym90YSddXG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncG9ub8SHJyxcbiAgICBub29uOiAncG9kbmUnLFxuICAgIG1vcm5pbmc6ICd1anV0cnUnLFxuICAgIGFmdGVybm9vbjogJ3BvcG9kbmUnLFxuICAgIGV2ZW5pbmc6ICd1dmXEjWUnLFxuICAgIG5pZ2h0OiAnbm/Eh3UnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb25vxIcnLFxuICAgIG5vb246ICdwb2RuZScsXG4gICAgbW9ybmluZzogJ3VqdXRydScsXG4gICAgYWZ0ZXJub29uOiAncG9wb2RuZScsXG4gICAgZXZlbmluZzogJ3V2ZcSNZScsXG4gICAgbmlnaHQ6ICdub8SHdSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAncG9ub8SHJyxcbiAgICBub29uOiAncG9kbmUnLFxuICAgIG1vcm5pbmc6ICd1anV0cnUnLFxuICAgIGFmdGVybm9vbjogJ3Bvc2xlIHBvZG5lJyxcbiAgICBldmVuaW5nOiAndXZlxI1lJyxcbiAgICBuaWdodDogJ25vxId1J1xuICB9XG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb25vxIcnLFxuICAgIG5vb246ICdwb2RuZScsXG4gICAgbW9ybmluZzogJ3VqdXRydScsXG4gICAgYWZ0ZXJub29uOiAncG9wb2RuZScsXG4gICAgZXZlbmluZzogJ3V2ZcSNZScsXG4gICAgbmlnaHQ6ICdub8SHdSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3Bvbm/EhycsXG4gICAgbm9vbjogJ3BvZG5lJyxcbiAgICBtb3JuaW5nOiAndWp1dHJ1JyxcbiAgICBhZnRlcm5vb246ICdwb3BvZG5lJyxcbiAgICBldmVuaW5nOiAndXZlxI1lJyxcbiAgICBuaWdodDogJ25vxId1J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb25vxIcnLFxuICAgIG5vb246ICdwb2RuZScsXG4gICAgbW9ybmluZzogJ3VqdXRydScsXG4gICAgYWZ0ZXJub29uOiAncG9zbGUgcG9kbmUnLFxuICAgIGV2ZW5pbmc6ICd1dmXEjWUnLFxuICAgIG5pZ2h0OiAnbm/Eh3UnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy4nO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKylcXC4vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHByXFwublxcLmVcXC58QUQpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihwclxcLlxccz9IclxcLnxwb1xcLlxccz9IclxcLikvaSxcbiAgd2lkZTogL14oUHJlIEhyaXN0YXxwcmUgbm92ZSBlcmV8UG9zbGUgSHJpc3RhfG5vdmEgZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9ecHIvaSwgL14ocG98bm92YSkvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eWzEyMzRdXFwuXFxzP2t2XFwuPy9pLFxuICB3aWRlOiAvXlsxMjM0XVxcLiBrdmFydGFsL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXigxMHwxMXwxMnxbMTIzNDU2Nzg5XSlcXC4vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYWp8anVufGp1bHxhdmd8c2VwfG9rdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXigoamFudWFyfGphbnVhcmEpfChmZWJydWFyfGZlYnJ1YXJhKXwobWFydHxtYXJ0YSl8KGFwcmlsfGFwcmlsYSl8KG1hanxtYWphKXwoanVufGp1bmEpfChqdWx8anVsYSl8KGF2Z3VzdHxhdmd1c3RhKXwoc2VwdGVtYmFyfHNlcHRlbWJyYSl8KG9rdG9iYXJ8b2t0b2JyYSl8KG5vdmVtYmFyfG5vdmVtYnJhKXwoZGVjZW1iYXJ8ZGVjZW1icmEpKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL14xL2ksIC9eMi9pLCAvXjMvaSwgL140L2ksIC9eNS9pLCAvXjYvaSwgL143L2ksIC9eOC9pLCAvXjkvaSwgL14xMC9pLCAvXjExL2ksIC9eMTIvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYWovaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdmcvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bbnB1c8SNY10vaSxcbiAgc2hvcnQ6IC9eKG5lZHxwb258dXRvfHNyZXwoxI1ldHxjZXQpfHBldHxzdWIpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihuZWR8cG9ufHV0b3xzcmV8KMSNZXR8Y2V0KXxwZXR8c3ViKS9pLFxuICB3aWRlOiAvXihuZWRlbGphfHBvbmVkZWxqYWt8dXRvcmFrfHNyZWRhfCjEjWV0dnJ0YWt8Y2V0dnJ0YWspfHBldGFrfHN1Ym90YSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiAvXihhbXxwbXxwb25vY3xwb25vxId8KHBvKT9wb2RuZXx1dmVjZXx1dmXEjWV8bm/Eh3V8cG9zbGUgcG9kbmV8dWp1dHJ1KS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ecG9uby9pLFxuICAgIG5vb246IC9ecG9kL2ksXG4gICAgbW9ybmluZzogL2p1dHJvL2ksXG4gICAgYWZ0ZXJub29uOiAvKHBvc2xlXFxzfHBvKStwb2RuZS9pLFxuICAgIGV2ZW5pbmc6IC8odXZlY2V8dXZlxI1lKS9pLFxuICAgIG5pZ2h0OiAvKG5vY3V8bm/Eh3UpL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgU2VyYmlhbiBsYXRpbiBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgU2VyYmlhblxuICogQGlzby02MzktMiBzcnBcbiAqIEBhdXRob3IgSWdvciBSYWRpdm9qZXZpxIcgW0Byb2d5dm9qZV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3JvZ3l2b2plfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnc3ItTGF0bicsXG4gIGZvcm1hdERpc3RhbmNlOiBfaW5kZXguZGVmYXVsdCxcbiAgZm9ybWF0TG9uZzogX2luZGV4Mi5kZWZhdWx0LFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4My5kZWZhdWx0LFxuICBsb2NhbGl6ZTogX2luZGV4NC5kZWZhdWx0LFxuICBtYXRjaDogX2luZGV4NS5kZWZhdWx0LFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAxIC8qIE1vbmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==