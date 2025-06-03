(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-de-index-js"],{

/***/ "./node_modules/date-fns/locale/de/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/formatDistance/index.js ***!
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
    standalone: {
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    },
    withPreposition: {
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    }
  },
  xSeconds: {
    standalone: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    },
    withPreposition: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    }
  },
  halfAMinute: {
    standalone: 'halbe Minute',
    withPreposition: 'halben Minute'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    },
    withPreposition: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    }
  },
  xMinutes: {
    standalone: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    },
    withPreposition: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    },
    withPreposition: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    }
  },
  xHours: {
    standalone: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    },
    withPreposition: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    }
  },
  xDays: {
    standalone: {
      one: '1 Tag',
      other: '{{count}} Tage'
    },
    withPreposition: {
      one: '1 Tag',
      other: '{{count}} Tagen'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    },
    withPreposition: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    }
  },
  xWeeks: {
    standalone: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monate'
    },
    withPreposition: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monaten'
    }
  },
  xMonths: {
    standalone: {
      one: '1 Monat',
      other: '{{count}} Monate'
    },
    withPreposition: {
      one: '1 Monat',
      other: '{{count}} Monaten'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahre'
    },
    withPreposition: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahren'
    }
  },
  xYears: {
    standalone: {
      one: '1 Jahr',
      other: '{{count}} Jahre'
    },
    withPreposition: {
      one: '1 Jahr',
      other: '{{count}} Jahren'
    }
  },
  overXYears: {
    standalone: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahre'
    },
    withPreposition: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahren'
    }
  },
  almostXYears: {
    standalone: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahre'
    },
    withPreposition: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahren'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return 'vor ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/de/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/formatLong/index.js ***!
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
// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
var dateFormats = {
  full: 'EEEE, do MMMM y',
  // Montag, 7. Januar 2018
  long: 'do MMMM y',
  // 7. Januar 2018
  medium: 'do MMM y',
  // 7. Jan. 2018
  short: 'dd.MM.y' // 07.01.2018
};

var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
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

/***/ "./node_modules/date-fns/locale/de/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/de/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/localize/index.js ***!
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
  narrow: ['v.Chr.', 'n.Chr.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['vor Christus', 'nach Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};

// Note: in German, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

// https://st.unicode.org/cldr-apps/v#/de/Gregorian/
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  wide: monthValues.wide
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
};

// https://www.unicode.org/cldr/charts/32/summary/de.html#1881
var dayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachm.',
    evening: 'Abend',
    night: 'Nacht'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachm.',
    evening: 'abends',
    night: 'nachts'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
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
    formattingValues: formattingMonthValues,
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

/***/ "./node_modules/date-fns/locale/de/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/match/index.js ***!
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
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
};
var parseEraPatterns = {
  any: [/^v/i, /^n/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
};
var parseDayPatterns = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i // will never be matched. Night is matched by `pm`
  }
};

var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value);
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
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/de/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/de/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/de/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/de/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/de/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/de/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/de/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary German locale.
 * @language German
 * @iso-639-2 deu
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
 * @author RomanErnst [@pex]{@link https://github.com/pex}
 * @author Philipp Keck [@Philipp91]{@link https://github.com/Philipp91}
 */
var locale = {
  code: 'de',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2RlL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9kZS9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9kZS9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZGUvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2RlL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9kZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUM1R2E7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDNUUscUNBQXFDLG1CQUFPLENBQUMsOEZBQTRCO0FBQ3pFLHFDQUFxQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQywwRkFBMEI7QUFDdkUscUNBQXFDLG1CQUFPLENBQUMsb0ZBQXVCO0FBQ3BFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDBCQUEwQjtBQUMxQix3Q0FBd0M7QUFDeEMsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJ2ZW5kb3JzfmRhdGUtZm5zLWxvY2FsZS1kZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ3dlbmlnZXIgYWxzIDEgU2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3dlbmlnZXIgYWxzIHt7Y291bnR9fSBTZWt1bmRlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnd2VuaWdlciBhbHMgMSBTZWt1bmRlJyxcbiAgICAgIG90aGVyOiAnd2VuaWdlciBhbHMge3tjb3VudH19IFNla3VuZGVuJ1xuICAgIH1cbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIFNla3VuZGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gU2VrdW5kZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgU2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBTZWt1bmRlbidcbiAgICB9XG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgc3RhbmRhbG9uZTogJ2hhbGJlIE1pbnV0ZScsXG4gICAgd2l0aFByZXBvc2l0aW9uOiAnaGFsYmVuIE1pbnV0ZSdcbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ3dlbmlnZXIgYWxzIDEgTWludXRlJyxcbiAgICAgIG90aGVyOiAnd2VuaWdlciBhbHMge3tjb3VudH19IE1pbnV0ZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ3dlbmlnZXIgYWxzIDEgTWludXRlJyxcbiAgICAgIG90aGVyOiAnd2VuaWdlciBhbHMge3tjb3VudH19IE1pbnV0ZW4nXG4gICAgfVxuICB9LFxuICB4TWludXRlczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJzEgTWludXRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE1pbnV0ZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgTWludXRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE1pbnV0ZW4nXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2V0d2EgMSBTdHVuZGUnLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBTdHVuZGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdldHdhIDEgU3R1bmRlJyxcbiAgICAgIG90aGVyOiAnZXR3YSB7e2NvdW50fX0gU3R1bmRlbidcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJzEgU3R1bmRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFN0dW5kZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgU3R1bmRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFN0dW5kZW4nXG4gICAgfVxuICB9LFxuICB4RGF5czoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJzEgVGFnJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFRhZ2UnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgVGFnJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFRhZ2VuJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdldHdhIDEgV29jaGUnLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBXb2NoZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2V0d2EgMSBXb2NoZScsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IFdvY2hlbidcbiAgICB9XG4gIH0sXG4gIHhXZWVrczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJzEgV29jaGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gV29jaGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICcxIFdvY2hlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFdvY2hlbidcbiAgICB9XG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2V0d2EgMSBNb25hdCcsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IE1vbmF0ZSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZXR3YSAxIE1vbmF0JyxcbiAgICAgIG90aGVyOiAnZXR3YSB7e2NvdW50fX0gTW9uYXRlbidcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIE1vbmF0JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE1vbmF0ZSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnMSBNb25hdCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNb25hdGVuJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdldHdhIDEgSmFocicsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IEphaHJlJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdldHdhIDEgSmFocicsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IEphaHJlbidcbiAgICB9XG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJzEgSmFocicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBKYWhyZSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnMSBKYWhyJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IEphaHJlbidcbiAgICB9XG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdtZWhyIGFscyAxIEphaHInLFxuICAgICAgb3RoZXI6ICdtZWhyIGFscyB7e2NvdW50fX0gSmFocmUnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ21laHIgYWxzIDEgSmFocicsXG4gICAgICBvdGhlcjogJ21laHIgYWxzIHt7Y291bnR9fSBKYWhyZW4nXG4gICAgfVxuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdmYXN0IDEgSmFocicsXG4gICAgICBvdGhlcjogJ2Zhc3Qge3tjb3VudH19IEphaHJlJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdmYXN0IDEgSmFocicsXG4gICAgICBvdGhlcjogJ2Zhc3Qge3tjb3VudH19IEphaHJlbidcbiAgICB9XG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCA/IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS53aXRoUHJlcG9zaXRpb24gOiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0uc3RhbmRhbG9uZTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3ZvciAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiKSk7XG4vLyBESU4gNTAwODogaHR0cHM6Ly9kZS53aWtpcGVkaWEub3JnL3dpa2kvRGF0dW1zZm9ybWF0I0RJTl81MDA4XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBkbyBNTU1NIHknLFxuICAvLyBNb250YWcsIDcuIEphbnVhciAyMDE4XG4gIGxvbmc6ICdkbyBNTU1NIHknLFxuICAvLyA3LiBKYW51YXIgMjAxOFxuICBtZWRpdW06ICdkbyBNTU0geScsXG4gIC8vIDcuIEphbi4gMjAxOFxuICBzaG9ydDogJ2RkLk1NLnknIC8vIDA3LjAxLjIwMThcbn07XG5cbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICd1bScge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAndW0nIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0TG9uZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsZXR6dGVuJyBlZWVlICd1bScgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2dlc3Rlcm4gdW0nIHBcIixcbiAgdG9kYXk6IFwiJ2hldXRlIHVtJyBwXCIsXG4gIHRvbW9ycm93OiBcIidtb3JnZW4gdW0nIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAndW0nIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ3YuQ2hyLicsICduLkNoci4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsndi5DaHIuJywgJ24uQ2hyLiddLFxuICB3aWRlOiBbJ3ZvciBDaHJpc3R1cycsICduYWNoIENocmlzdHVzJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxLiBRdWFydGFsJywgJzIuIFF1YXJ0YWwnLCAnMy4gUXVhcnRhbCcsICc0LiBRdWFydGFsJ11cbn07XG5cbi8vIE5vdGU6IGluIEdlcm1hbiwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNw6RyJywgJ0FwcicsICdNYWknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09rdCcsICdOb3YnLCAnRGV6J10sXG4gIHdpZGU6IFsnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXVxufTtcblxuLy8gaHR0cHM6Ly9zdC51bmljb2RlLm9yZy9jbGRyLWFwcHMvdiMvZGUvR3JlZ29yaWFuL1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBtb250aFZhbHVlcy5uYXJyb3csXG4gIGFiYnJldmlhdGVkOiBbJ0phbi4nLCAnRmViLicsICdNw6RyeicsICdBcHIuJywgJ01haScsICdKdW5pJywgJ0p1bGknLCAnQXVnLicsICdTZXAuJywgJ09rdC4nLCAnTm92LicsICdEZXouJ10sXG4gIHdpZGU6IG1vbnRoVmFsdWVzLndpZGVcbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ0QnLCAnTScsICdEJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTbycsICdNbycsICdEaScsICdNaScsICdEbycsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgd2lkZTogWydTb25udGFnJywgJ01vbnRhZycsICdEaWVuc3RhZycsICdNaXR0d29jaCcsICdEb25uZXJzdGFnJywgJ0ZyZWl0YWcnLCAnU2Ftc3RhZyddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L2RlLmh0bWwjMTg4MVxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICd2bS4nLFxuICAgIHBtOiAnbm0uJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnTW9yZ2VuJyxcbiAgICBhZnRlcm5vb246ICdOYWNobS4nLFxuICAgIGV2ZW5pbmc6ICdBYmVuZCcsXG4gICAgbmlnaHQ6ICdOYWNodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3Zvcm0uJyxcbiAgICBwbTogJ25hY2htLicsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ01vcmdlbicsXG4gICAgYWZ0ZXJub29uOiAnTmFjaG1pdHRhZycsXG4gICAgZXZlbmluZzogJ0FiZW5kJyxcbiAgICBuaWdodDogJ05hY2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICd2b3JtaXR0YWdzJyxcbiAgICBwbTogJ25hY2htaXR0YWdzJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnTW9yZ2VuJyxcbiAgICBhZnRlcm5vb246ICdOYWNobWl0dGFnJyxcbiAgICBldmVuaW5nOiAnQWJlbmQnLFxuICAgIG5pZ2h0OiAnTmFjaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICd2bS4nLFxuICAgIHBtOiAnbm0uJyxcbiAgICBtaWRuaWdodDogJ01pdHRlcm5hY2h0JyxcbiAgICBub29uOiAnTWl0dGFnJyxcbiAgICBtb3JuaW5nOiAnbW9yZ2VucycsXG4gICAgYWZ0ZXJub29uOiAnbmFjaG0uJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3Zvcm0uJyxcbiAgICBwbTogJ25hY2htLicsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ21vcmdlbnMnLFxuICAgIGFmdGVybm9vbjogJ25hY2htaXR0YWdzJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAndm9ybWl0dGFncycsXG4gICAgcG06ICduYWNobWl0dGFncycsXG4gICAgbWlkbmlnaHQ6ICdNaXR0ZXJuYWNodCcsXG4gICAgbm9vbjogJ01pdHRhZycsXG4gICAgbW9ybmluZzogJ21vcmdlbnMnLFxuICAgIGFmdGVybm9vbjogJ25hY2htaXR0YWdzJyxcbiAgICBldmVuaW5nOiAnYWJlbmRzJyxcbiAgICBuaWdodDogJ25hY2h0cydcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlcikge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykoXFwuKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHZcXC4/ID9DaHJcXC4/fG5cXC4/ID9DaHJcXC4/KS9pLFxuICBhYmJyZXZpYXRlZDogL14odlxcLj8gP0NoclxcLj98blxcLj8gP0NoclxcLj8pL2ksXG4gIHdpZGU6IC9eKHZvciBDaHJpc3R1c3x2b3IgdW5zZXJlciBaZWl0cmVjaG51bmd8bmFjaCBDaHJpc3R1c3x1bnNlcmVyIFplaXRyZWNobnVuZykvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnYvaSwgL15uL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0oXFwuKT8gUXVhcnRhbC9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqW2HDpF1ufGZlYnxtw6RyW3pdP3xhcHJ8bWFpfGp1bltpXT98anVsW2ldP3xhdWd8c2VwfG9rdHxub3Z8ZGV6KVxcLj8vaSxcbiAgd2lkZTogL14oamFudWFyfGZlYnJ1YXJ8bcOkcnp8YXByaWx8bWFpfGp1bml8anVsaXxhdWd1c3R8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGV6ZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qW2HDpF0vaSwgL15mL2ksIC9ebcOkci9pLCAvXmFwL2ksIC9ebWFpL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc21kbWZdL2ksXG4gIHNob3J0OiAvXihzb3xtb3xkaXxtaXxkb3xmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHNvbj98bW9uP3xkaWU/fG1pdD98ZG9uP3xmcmU/fHNhbT8pXFwuPy9pLFxuICB3aWRlOiAvXihzb25udGFnfG1vbnRhZ3xkaWVuc3RhZ3xtaXR0d29jaHxkb25uZXJzdGFnfGZyZWl0YWd8c2Ftc3RhZykvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnNvL2ksIC9ebW8vaSwgL15kaS9pLCAvXm1pL2ksIC9eZG8vaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXih2bVxcLj98bm1cXC4/fE1pdHRlcm5hY2h0fE1pdHRhZ3xtb3JnZW5zfG5hY2htXFwuP3xhYmVuZHN8bmFjaHRzKS9pLFxuICBhYmJyZXZpYXRlZDogL14odm9ybVxcLj98bmFjaG1cXC4/fE1pdHRlcm5hY2h0fE1pdHRhZ3xtb3JnZW5zfG5hY2htXFwuP3xhYmVuZHN8bmFjaHRzKS9pLFxuICB3aWRlOiAvXih2b3JtaXR0YWdzfG5hY2htaXR0YWdzfE1pdHRlcm5hY2h0fE1pdHRhZ3xtb3JnZW5zfG5hY2htaXR0YWdzfGFiZW5kc3xuYWNodHMpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9edi9pLFxuICAgIHBtOiAvXm4vaSxcbiAgICBtaWRuaWdodDogL15NaXR0ZS9pLFxuICAgIG5vb246IC9eTWl0dGEvaSxcbiAgICBtb3JuaW5nOiAvbW9yZ2Vucy9pLFxuICAgIGFmdGVybm9vbjogL25hY2htaXR0YWdzL2ksXG4gICAgLy8gd2lsbCBuZXZlciBiZSBtYXRjaGVkLiBBZnRlcm5vb24gaXMgbWF0Y2hlZCBieSBgcG1gXG4gICAgZXZlbmluZzogL2FiZW5kcy9pLFxuICAgIG5pZ2h0OiAvbmFjaHRzL2kgLy8gd2lsbCBuZXZlciBiZSBtYXRjaGVkLiBOaWdodCBpcyBtYXRjaGVkIGJ5IGBwbWBcbiAgfVxufTtcblxudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBHZXJtYW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIEdlcm1hblxuICogQGlzby02MzktMiBkZXVcbiAqIEBhdXRob3IgVGhvbWFzIEVpbG1zdGVpbmVyIFtARGVNdXVde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9EZU11dX1cbiAqIEBhdXRob3IgQXNpYSBbQGFzaWEtdF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2FzaWEtdH1cbiAqIEBhdXRob3IgVmFuIFZ1b25nIE5nbyBbQHZhbnZ1b25nbmdvXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vdmFudnVvbmduZ299XG4gKiBAYXV0aG9yIFJvbWFuRXJuc3QgW0BwZXhde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXh9XG4gKiBAYXV0aG9yIFBoaWxpcHAgS2VjayBbQFBoaWxpcHA5MV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1BoaWxpcHA5MX1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2RlJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9