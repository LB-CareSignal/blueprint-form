(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-it-CH-index-js"],{

/***/ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/_lib/isSameUTCWeek/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameUTCWeek;
var _index = _interopRequireDefault(__webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/_lib/requiredArgs/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js"));
function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0, _index.default)(2, arguments);
  var dateLeftStartOfWeek = (0, _index2.default)(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0, _index2.default)(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/it-CH/_lib/formatLong/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/it-CH/_lib/formatLong/index.js ***!
  \*********************************************************************/
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
  full: 'EEEE d MMMM y',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'dd.MM.y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
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

/***/ "./node_modules/date-fns/locale/it-CH/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/it-CH/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../it/_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/it/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../it/_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/it/_lib/formatRelative/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ../it/_lib/localize/index.js */ "./node_modules/date-fns/locale/it/_lib/localize/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ../it/_lib/match/index.js */ "./node_modules/date-fns/locale/it/_lib/match/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/it-CH/_lib/formatLong/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Italian locale (Switzerland).
 * @language Italian
 * @iso-639-2 ita
 * @author Mike Peyer [@maic66]{@link https://github.com/maic66}
 */
var locale = {
  code: 'it-CH',
  formatDistance: _index.default,
  formatLong: _index5.default,
  formatRelative: _index2.default,
  localize: _index3.default,
  match: _index4.default,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/it/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/formatDistance/index.js ***!
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
    one: 'meno di un secondo',
    other: 'meno di {{count}} secondi'
  },
  xSeconds: {
    one: 'un secondo',
    other: '{{count}} secondi'
  },
  halfAMinute: 'alcuni secondi',
  lessThanXMinutes: {
    one: 'meno di un minuto',
    other: 'meno di {{count}} minuti'
  },
  xMinutes: {
    one: 'un minuto',
    other: '{{count}} minuti'
  },
  aboutXHours: {
    one: "circa un'ora",
    other: 'circa {{count}} ore'
  },
  xHours: {
    one: "un'ora",
    other: '{{count}} ore'
  },
  xDays: {
    one: 'un giorno',
    other: '{{count}} giorni'
  },
  aboutXWeeks: {
    one: 'circa una settimana',
    other: 'circa {{count}} settimane'
  },
  xWeeks: {
    one: 'una settimana',
    other: '{{count}} settimane'
  },
  aboutXMonths: {
    one: 'circa un mese',
    other: 'circa {{count}} mesi'
  },
  xMonths: {
    one: 'un mese',
    other: '{{count}} mesi'
  },
  aboutXYears: {
    one: 'circa un anno',
    other: 'circa {{count}} anni'
  },
  xYears: {
    one: 'un anno',
    other: '{{count}} anni'
  },
  overXYears: {
    one: 'più di un anno',
    other: 'più di {{count}} anni'
  },
  almostXYears: {
    one: 'quasi un anno',
    other: 'quasi {{count}} anni'
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
      return 'tra ' + result;
    } else {
      return result + ' fa';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/it/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
var weekdays = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
function _lastWeek(day) {
  switch (day) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + weekdays[day] + " scorso alle' p";
  }
}
function thisWeek(day) {
  return "'" + weekdays[day] + " alle' p";
}
function _nextWeek(day) {
  switch (day) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + weekdays[day] + " prossimo alle' p";
  }
}
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getUTCDay();
    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/it/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/localize/index.js ***!
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
  narrow: ['aC', 'dC'],
  abbreviated: ['a.C.', 'd.C.'],
  wide: ['avanti Cristo', 'dopo Cristo']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues = {
  narrow: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  wide: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
  short: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  abbreviated: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  wide: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
};
var dayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return String(number);
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

/***/ "./node_modules/date-fns/locale/it/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
};
var parseEraPatterns = {
  any: [/^a/i, /^(d|e)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
};
var parseMonthPatterns = {
  narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvaXQtQ0gvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvaXQtQ0gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9pdC9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvaXQvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2l0L19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9pdC9fbGliL21hdGNoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG9GQUEwQjtBQUN0RSxxQ0FBcUMsbUJBQU8sQ0FBQyx3RkFBNEI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsZ0hBQTBDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoidmVuZG9yc35kYXRlLWZucy1sb2NhbGUtaXQtQ0gtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTYW1lVVRDV2VlaztcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiKSk7XG5mdW5jdGlvbiBpc1NhbWVVVENXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gICgwLCBfaW5kZXguZGVmYXVsdCkoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSAoMCwgX2luZGV4Mi5kZWZhdWx0KShkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUgZCBNTU1NIHknLFxuICBsb25nOiAnZCBNTU1NIHknLFxuICBtZWRpdW06ICdkIE1NTSB5JyxcbiAgc2hvcnQ6ICdkZC5NTS55J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBsb25nOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBtZWRpdW06ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0ge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pdC9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vaXQvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2l0L19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pdC9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEl0YWxpYW4gbG9jYWxlIChTd2l0emVybGFuZCkuXG4gKiBAbGFuZ3VhZ2UgSXRhbGlhblxuICogQGlzby02MzktMiBpdGFcbiAqIEBhdXRob3IgTWlrZSBQZXllciBbQG1haWM2Nl17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21haWM2Nn1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2l0LUNIJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXg1LmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXgzLmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21lbm8gZGkgdW4gc2Vjb25kbycsXG4gICAgb3RoZXI6ICdtZW5vIGRpIHt7Y291bnR9fSBzZWNvbmRpJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJ3VuIHNlY29uZG8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZGknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnYWxjdW5pIHNlY29uZGknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWVubyBkaSB1biBtaW51dG8nLFxuICAgIG90aGVyOiAnbWVubyBkaSB7e2NvdW50fX0gbWludXRpJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ3VuIG1pbnV0bycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRpJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJjaXJjYSB1bidvcmFcIixcbiAgICBvdGhlcjogJ2NpcmNhIHt7Y291bnR9fSBvcmUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCJ1bidvcmFcIixcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBvcmUnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAndW4gZ2lvcm5vJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBnaW9ybmknXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnY2lyY2EgdW5hIHNldHRpbWFuYScsXG4gICAgb3RoZXI6ICdjaXJjYSB7e2NvdW50fX0gc2V0dGltYW5lJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd1bmEgc2V0dGltYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZXR0aW1hbmUnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2NpcmNhIHVuIG1lc2UnLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IG1lc2knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICd1biBtZXNlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNpJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2NpcmNhIHVuIGFubm8nLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IGFubmknXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ3VuIGFubm8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGFubmknXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdwacO5IGRpIHVuIGFubm8nLFxuICAgIG90aGVyOiAncGnDuSBkaSB7e2NvdW50fX0gYW5uaSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncXVhc2kgdW4gYW5ubycsXG4gICAgb3RoZXI6ICdxdWFzaSB7e2NvdW50fX0gYW5uaSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICd0cmEgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgZmEnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vLi4vX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzXCIpKTtcbnZhciB3ZWVrZGF5cyA9IFsnZG9tZW5pY2EnLCAnbHVuZWTDrCcsICdtYXJ0ZWTDrCcsICdtZXJjb2xlZMOsJywgJ2dpb3ZlZMOsJywgJ3ZlbmVyZMOsJywgJ3NhYmF0byddO1xuZnVuY3Rpb24gX2xhc3RXZWVrKGRheSkge1xuICBzd2l0Y2ggKGRheSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBcIidkb21lbmljYSBzY29yc2EgYWxsZScgcFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCInXCIgKyB3ZWVrZGF5c1tkYXldICsgXCIgc2NvcnNvIGFsbGUnIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHJldHVybiBcIidcIiArIHdlZWtkYXlzW2RheV0gKyBcIiBhbGxlJyBwXCI7XG59XG5mdW5jdGlvbiBfbmV4dFdlZWsoZGF5KSB7XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIFwiJ2RvbWVuaWNhIHByb3NzaW1hIGFsbGUnIHBcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiJ1wiICsgd2Vla2RheXNbZGF5XSArIFwiIHByb3NzaW1vIGFsbGUnIHBcIjtcbiAgfVxufVxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2xhc3RXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICB5ZXN0ZXJkYXk6IFwiJ2llcmkgYWxsZScgcFwiLFxuICB0b2RheTogXCInb2dnaSBhbGxlJyBwXCIsXG4gIHRvbW9ycm93OiBcIidkb21hbmkgYWxsZScgcFwiLFxuICBuZXh0V2VlazogZnVuY3Rpb24gbmV4dFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX25leHRXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydhQycsICdkQyddLFxuICBhYmJyZXZpYXRlZDogWydhLkMuJywgJ2QuQy4nXSxcbiAgd2lkZTogWydhdmFudGkgQ3Jpc3RvJywgJ2RvcG8gQ3Jpc3RvJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnVDEnLCAnVDInLCAnVDMnLCAnVDQnXSxcbiAgd2lkZTogWycxwrogdHJpbWVzdHJlJywgJzLCuiB0cmltZXN0cmUnLCAnM8K6IHRyaW1lc3RyZScsICc0wrogdHJpbWVzdHJlJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydHJywgJ0YnLCAnTScsICdBJywgJ00nLCAnRycsICdMJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydnZW4nLCAnZmViJywgJ21hcicsICdhcHInLCAnbWFnJywgJ2dpdScsICdsdWcnLCAnYWdvJywgJ3NldCcsICdvdHQnLCAnbm92JywgJ2RpYyddLFxuICB3aWRlOiBbJ2dlbm5haW8nLCAnZmViYnJhaW8nLCAnbWFyem8nLCAnYXByaWxlJywgJ21hZ2dpbycsICdnaXVnbm8nLCAnbHVnbGlvJywgJ2Fnb3N0bycsICdzZXR0ZW1icmUnLCAnb3R0b2JyZScsICdub3ZlbWJyZScsICdkaWNlbWJyZSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0QnLCAnTCcsICdNJywgJ00nLCAnRycsICdWJywgJ1MnXSxcbiAgc2hvcnQ6IFsnZG9tJywgJ2x1bicsICdtYXInLCAnbWVyJywgJ2dpbycsICd2ZW4nLCAnc2FiJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2RvbScsICdsdW4nLCAnbWFyJywgJ21lcicsICdnaW8nLCAndmVuJywgJ3NhYiddLFxuICB3aWRlOiBbJ2RvbWVuaWNhJywgJ2x1bmVkw6wnLCAnbWFydGVkw6wnLCAnbWVyY29sZWTDrCcsICdnaW92ZWTDrCcsICd2ZW5lcmTDrCcsICdzYWJhdG8nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnbS4nLFxuICAgIHBtOiAncC4nLFxuICAgIG1pZG5pZ2h0OiAnbWV6emFub3R0ZScsXG4gICAgbm9vbjogJ21lenpvZ2lvcm5vJyxcbiAgICBtb3JuaW5nOiAnbWF0dGluYScsXG4gICAgYWZ0ZXJub29uOiAncG9tZXJpZ2dpbycsXG4gICAgZXZlbmluZzogJ3NlcmEnLFxuICAgIG5pZ2h0OiAnbm90dGUnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtZXp6YW5vdHRlJyxcbiAgICBub29uOiAnbWV6em9naW9ybm8nLFxuICAgIG1vcm5pbmc6ICdtYXR0aW5hJyxcbiAgICBhZnRlcm5vb246ICdwb21lcmlnZ2lvJyxcbiAgICBldmVuaW5nOiAnc2VyYScsXG4gICAgbmlnaHQ6ICdub3R0ZSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWV6emFub3R0ZScsXG4gICAgbm9vbjogJ21lenpvZ2lvcm5vJyxcbiAgICBtb3JuaW5nOiAnbWF0dGluYScsXG4gICAgYWZ0ZXJub29uOiAncG9tZXJpZ2dpbycsXG4gICAgZXZlbmluZzogJ3NlcmEnLFxuICAgIG5pZ2h0OiAnbm90dGUnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdtLicsXG4gICAgcG06ICdwLicsXG4gICAgbWlkbmlnaHQ6ICdtZXp6YW5vdHRlJyxcbiAgICBub29uOiAnbWV6em9naW9ybm8nLFxuICAgIG1vcm5pbmc6ICdkaSBtYXR0aW5hJyxcbiAgICBhZnRlcm5vb246ICdkZWwgcG9tZXJpZ2dpbycsXG4gICAgZXZlbmluZzogJ2RpIHNlcmEnLFxuICAgIG5pZ2h0OiAnZGkgbm90dGUnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtZXp6YW5vdHRlJyxcbiAgICBub29uOiAnbWV6em9naW9ybm8nLFxuICAgIG1vcm5pbmc6ICdkaSBtYXR0aW5hJyxcbiAgICBhZnRlcm5vb246ICdkZWwgcG9tZXJpZ2dpbycsXG4gICAgZXZlbmluZzogJ2RpIHNlcmEnLFxuICAgIG5pZ2h0OiAnZGkgbm90dGUnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21lenphbm90dGUnLFxuICAgIG5vb246ICdtZXp6b2dpb3JubycsXG4gICAgbW9ybmluZzogJ2RpIG1hdHRpbmEnLFxuICAgIGFmdGVybm9vbjogJ2RlbCBwb21lcmlnZ2lvJyxcbiAgICBldmVuaW5nOiAnZGkgc2VyYScsXG4gICAgbmlnaHQ6ICdkaSBub3R0ZSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSjCuik/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhQ3xkQykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGFcXC4/XFxzP0NcXC4/fGFcXC4/XFxzP2VcXC4/XFxzP3ZcXC4/fGRcXC4/XFxzP0NcXC4/fGVcXC4/XFxzP3ZcXC4/KS9pLFxuICB3aWRlOiAvXihhdmFudGkgQ3Jpc3RvfGF2YW50aSBFcmEgVm9sZ2FyZXxkb3BvIENyaXN0b3xFcmEgVm9sZ2FyZSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmEvaSwgL14oZHxlKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL150WzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKMK6KT8gdHJpbWVzdHJlL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltnZm1hbHNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihnZW58ZmVifG1hcnxhcHJ8bWFnfGdpdXxsdWd8YWdvfHNldHxvdHR8bm92fGRpYykvaSxcbiAgd2lkZTogL14oZ2VubmFpb3xmZWJicmFpb3xtYXJ6b3xhcHJpbGV8bWFnZ2lvfGdpdWdub3xsdWdsaW98YWdvc3RvfHNldHRlbWJyZXxvdHRvYnJlfG5vdmVtYnJlfGRpY2VtYnJlKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15nL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmcvaSwgL15sL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eZ2UvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYWcvaSwgL15naS9pLCAvXmwvaSwgL15hZy9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltkbG1ndnNdL2ksXG4gIHNob3J0OiAvXihkb3xsdXxtYXxtZXxnaXx2ZXxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGRvbXxsdW58bWFyfG1lcnxnaW98dmVufHNhYikvaSxcbiAgd2lkZTogL14oZG9tZW5pY2F8bHVuZWRbaXzDrF18bWFydGVkW2l8w6xdfG1lcmNvbGVkW2l8w6xdfGdpb3ZlZFtpfMOsXXx2ZW5lcmRbaXzDrF18c2FiYXRvKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eZC9pLCAvXmwvaSwgL15tL2ksIC9ebS9pLCAvXmcvaSwgL152L2ksIC9ecy9pXSxcbiAgYW55OiBbL15kL2ksIC9ebC9pLCAvXm1hL2ksIC9ebWUvaSwgL15nL2ksIC9edi9pLCAvXnMvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfG1cXC58cHxtZXp6YW5vdHRlfG1lenpvZ2lvcm5vfChkaXxkZWwpIChtYXR0aW5hfHBvbWVyaWdnaW98c2VyYXxub3R0ZSkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWV6emFub3R0ZXxtZXp6b2dpb3Jub3woZGl8ZGVsKSAobWF0dGluYXxwb21lcmlnZ2lvfHNlcmF8bm90dGUpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWV6emEvaSxcbiAgICBub29uOiAvXm1lenpvL2ksXG4gICAgbW9ybmluZzogL21hdHRpbmEvaSxcbiAgICBhZnRlcm5vb246IC9wb21lcmlnZ2lvL2ksXG4gICAgZXZlbmluZzogL3NlcmEvaSxcbiAgICBuaWdodDogL25vdHRlL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=