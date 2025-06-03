(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-lb-index-js"],{

/***/ "./node_modules/date-fns/locale/lb/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/formatDistance/index.js ***!
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
      one: 'manner wéi eng Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    },
    withPreposition: {
      one: 'manner wéi enger Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    }
  },
  xSeconds: {
    standalone: {
      one: 'eng Sekonn',
      other: '{{count}} Sekonnen'
    },
    withPreposition: {
      one: 'enger Sekonn',
      other: '{{count}} Sekonnen'
    }
  },
  halfAMinute: {
    standalone: 'eng hallef Minutt',
    withPreposition: 'enger hallwer Minutt'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'manner wéi eng Minutt',
      other: 'manner wéi {{count}} Minutten'
    },
    withPreposition: {
      one: 'manner wéi enger Minutt',
      other: 'manner wéi {{count}} Minutten'
    }
  },
  xMinutes: {
    standalone: {
      one: 'eng Minutt',
      other: '{{count}} Minutten'
    },
    withPreposition: {
      one: 'enger Minutt',
      other: '{{count}} Minutten'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'ongeféier eng Stonn',
      other: 'ongeféier {{count}} Stonnen'
    },
    withPreposition: {
      one: 'ongeféier enger Stonn',
      other: 'ongeféier {{count}} Stonnen'
    }
  },
  xHours: {
    standalone: {
      one: 'eng Stonn',
      other: '{{count}} Stonnen'
    },
    withPreposition: {
      one: 'enger Stonn',
      other: '{{count}} Stonnen'
    }
  },
  xDays: {
    standalone: {
      one: 'een Dag',
      other: '{{count}} Deeg'
    },
    withPreposition: {
      one: 'engem Dag',
      other: '{{count}} Deeg'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'ongeféier eng Woch',
      other: 'ongeféier {{count}} Wochen'
    },
    withPreposition: {
      one: 'ongeféier enger Woche',
      other: 'ongeféier {{count}} Wochen'
    }
  },
  xWeeks: {
    standalone: {
      one: 'eng Woch',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: 'enger Woch',
      other: '{{count}} Wochen'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'ongeféier ee Mount',
      other: 'ongeféier {{count}} Méint'
    },
    withPreposition: {
      one: 'ongeféier engem Mount',
      other: 'ongeféier {{count}} Méint'
    }
  },
  xMonths: {
    standalone: {
      one: 'ee Mount',
      other: '{{count}} Méint'
    },
    withPreposition: {
      one: 'engem Mount',
      other: '{{count}} Méint'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'ongeféier ee Joer',
      other: 'ongeféier {{count}} Joer'
    },
    withPreposition: {
      one: 'ongeféier engem Joer',
      other: 'ongeféier {{count}} Joer'
    }
  },
  xYears: {
    standalone: {
      one: 'ee Joer',
      other: '{{count}} Joer'
    },
    withPreposition: {
      one: 'engem Joer',
      other: '{{count}} Joer'
    }
  },
  overXYears: {
    standalone: {
      one: 'méi wéi ee Joer',
      other: 'méi wéi {{count}} Joer'
    },
    withPreposition: {
      one: 'méi wéi engem Joer',
      other: 'méi wéi {{count}} Joer'
    }
  },
  almostXYears: {
    standalone: {
      one: 'bal ee Joer',
      other: 'bal {{count}} Joer'
    },
    withPreposition: {
      one: 'bal engem Joer',
      other: 'bal {{count}} Joer'
    }
  }
};
var EXCEPTION_CONSONANTS = ['d', 'h', 'n', 't', 'z'];
var VOWELS = ['a,', 'e', 'i', 'o', 'u'];
var DIGITS_SPOKEN_N_NEEDED = [0, 1, 2, 3, 8, 9];
var FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED = [40, 50, 60, 70];

// Eifeler Regel
function isFinalNNeeded(nextWords) {
  var firstLetter = nextWords.charAt(0).toLowerCase();
  if (VOWELS.indexOf(firstLetter) != -1 || EXCEPTION_CONSONANTS.indexOf(firstLetter) != -1) {
    return true;
  }

  // Numbers would need to converted into words for checking.
  // Therefore, I have listed the digits that require a preceeding n with a few exceptions.
  var firstWord = nextWords.split(' ')[0];
  var number = parseInt(firstWord);
  if (!isNaN(number) && DIGITS_SPOKEN_N_NEEDED.indexOf(number % 10) != -1 && FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED.indexOf(parseInt(firstWord.substring(0, 2))) == -1) {
    return true;
  }

  // Omit other checks as they are not expected here.
  return false;
}
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? tokenValue.withPreposition : tokenValue.standalone;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'a' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result;
    } else {
      return 'viru' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/lb/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/formatLong/index.js ***!
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
  // Méindeg, 7. Januar 2018
  long: 'do MMMM y',
  // 7. Januar 2018
  medium: 'do MMM y',
  // 7. Jan 2018
  short: 'dd.MM.yy' // 07.01.18
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

/***/ "./node_modules/date-fns/locale/lb/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/formatRelative/index.js ***!
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
    var day = date.getUTCDay();
    var result = "'läschte";
    if (day === 2 || day === 4) {
      // Eifeler Regel: Add an n before the consonant d; Here "Dënschdeg" "and Donneschde".
      result += 'n';
    }
    result += "' eeee 'um' p";
    return result;
  },
  yesterday: "'gëschter um' p",
  today: "'haut um' p",
  tomorrow: "'moien um' p",
  nextWeek: "eeee 'um' p",
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

/***/ "./node_modules/date-fns/locale/lb/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/localize/index.js ***!
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
  wide: ['viru Christus', 'no Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'Mäerz', 'Abrëll', 'Mee', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mé', 'Dë', 'Më', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonndeg', 'Méindeg', 'Dënschdeg', 'Mëttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg']
};
var dayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nomë.',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'Mëtteg',
    morning: 'Moien',
    afternoon: 'Nomëtteg',
    evening: 'Owend',
    night: 'Nuecht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'mo.',
    pm: 'nom.',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  abbreviated: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
  },
  wide: {
    am: 'moies',
    pm: 'nomëttes',
    midnight: 'Mëtternuecht',
    noon: 'mëttes',
    morning: 'moies',
    afternoon: 'nomëttes',
    evening: 'owes',
    night: 'nuets'
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

/***/ "./node_modules/date-fns/locale/lb/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/match/index.js ***!
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
  wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i
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
  abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,
  wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mä/i, /^ab/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smdf]/i,
  short: /^(so|mé|dë|më|do|fr|sa)/i,
  abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,
  wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i
};
var parseDayPatterns = {
  any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
  abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
  wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^m/i,
    pm: /^n/i,
    midnight: /^Mëtter/i,
    noon: /^mëttes/i,
    morning: /moies/i,
    afternoon: /nomëttes/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /owes/i,
    night: /nuets/i // will never be matched. Night is matched by `pm`
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
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/lb/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/lb/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/lb/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/lb/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/lb/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/lb/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Luxembourgish locale.
 * @language Luxembourgish
 * @iso-639-2 ltz
 * @author Daniel Waxweiler [@dwaxweiler]{@link https://github.com/dwaxweiler}
 */
var locale = {
  code: 'lb',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2xiL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sYi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sYi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvbGIvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2xiL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDL01hOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsZ0hBQTBDO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTSxRQUFRLE1BQU07QUFDL0IsV0FBVyxNQUFNLFFBQVEsTUFBTTtBQUMvQixhQUFhLE1BQU0sR0FBRyxNQUFNO0FBQzVCLFlBQVksTUFBTSxHQUFHLE1BQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNoRGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ2hDYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDRHQUF3QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQy9IYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFxQztBQUNqRixxQ0FBcUMsbUJBQU8sQ0FBQyxvSEFBNEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDNUdhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQWdDO0FBQzVFLHFDQUFxQyxtQkFBTyxDQUFDLDhGQUE0QjtBQUN6RSxxQ0FBcUMsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDN0UscUNBQXFDLG1CQUFPLENBQUMsMEZBQTBCO0FBQ3ZFLHFDQUFxQyxtQkFBTyxDQUFDLG9GQUF1QjtBQUNwRTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJ2ZW5kb3JzfmRhdGUtZm5zLWxvY2FsZS1sYi1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ21hbm5lciB3w6lpIGVuZyBTZWtvbm4nLFxuICAgICAgb3RoZXI6ICdtYW5uZXIgd8OpaSB7e2NvdW50fX0gU2Vrb25uZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ21hbm5lciB3w6lpIGVuZ2VyIFNla29ubicsXG4gICAgICBvdGhlcjogJ21hbm5lciB3w6lpIHt7Y291bnR9fSBTZWtvbm5lbidcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZW5nIFNla29ubicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBTZWtvbm5lbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZXIgU2Vrb25uJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFNla29ubmVuJ1xuICAgIH1cbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBzdGFuZGFsb25lOiAnZW5nIGhhbGxlZiBNaW51dHQnLFxuICAgIHdpdGhQcmVwb3NpdGlvbjogJ2VuZ2VyIGhhbGx3ZXIgTWludXR0J1xuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnbWFubmVyIHfDqWkgZW5nIE1pbnV0dCcsXG4gICAgICBvdGhlcjogJ21hbm5lciB3w6lpIHt7Y291bnR9fSBNaW51dHRlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnbWFubmVyIHfDqWkgZW5nZXIgTWludXR0JyxcbiAgICAgIG90aGVyOiAnbWFubmVyIHfDqWkge3tjb3VudH19IE1pbnV0dGVuJ1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdlbmcgTWludXR0JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE1pbnV0dGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdlbmdlciBNaW51dHQnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gTWludXR0ZW4nXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ29uZ2Vmw6lpZXIgZW5nIFN0b25uJyxcbiAgICAgIG90aGVyOiAnb25nZWbDqWllciB7e2NvdW50fX0gU3Rvbm5lbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlbmdlciBTdG9ubicsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IFN0b25uZW4nXG4gICAgfVxuICB9LFxuICB4SG91cnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdlbmcgU3Rvbm4nLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gU3Rvbm5lbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZXIgU3Rvbm4nLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gU3Rvbm5lbidcbiAgICB9XG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZWVuIERhZycsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBEZWVnJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdlbmdlbSBEYWcnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gRGVlZydcbiAgICB9XG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlbmcgV29jaCcsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IFdvY2hlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlbmdlciBXb2NoZScsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IFdvY2hlbidcbiAgICB9XG4gIH0sXG4gIHhXZWVrczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2VuZyBXb2NoJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFdvY2hlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZXIgV29jaCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBXb2NoZW4nXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdvbmdlZsOpaWVyIGVlIE1vdW50JyxcbiAgICAgIG90aGVyOiAnb25nZWbDqWllciB7e2NvdW50fX0gTcOpaW50J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdvbmdlZsOpaWVyIGVuZ2VtIE1vdW50JyxcbiAgICAgIG90aGVyOiAnb25nZWbDqWllciB7e2NvdW50fX0gTcOpaW50J1xuICAgIH1cbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2VlIE1vdW50JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE3DqWludCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZW0gTW91bnQnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gTcOpaW50J1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdvbmdlZsOpaWVyIGVlIEpvZXInLFxuICAgICAgb3RoZXI6ICdvbmdlZsOpaWVyIHt7Y291bnR9fSBKb2VyJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdvbmdlZsOpaWVyIGVuZ2VtIEpvZXInLFxuICAgICAgb3RoZXI6ICdvbmdlZsOpaWVyIHt7Y291bnR9fSBKb2VyJ1xuICAgIH1cbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZWUgSm9lcicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBKb2VyJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdlbmdlbSBKb2VyJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IEpvZXInXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnbcOpaSB3w6lpIGVlIEpvZXInLFxuICAgICAgb3RoZXI6ICdtw6lpIHfDqWkge3tjb3VudH19IEpvZXInXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ23DqWkgd8OpaSBlbmdlbSBKb2VyJyxcbiAgICAgIG90aGVyOiAnbcOpaSB3w6lpIHt7Y291bnR9fSBKb2VyJ1xuICAgIH1cbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnYmFsIGVlIEpvZXInLFxuICAgICAgb3RoZXI6ICdiYWwge3tjb3VudH19IEpvZXInXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2JhbCBlbmdlbSBKb2VyJyxcbiAgICAgIG90aGVyOiAnYmFsIHt7Y291bnR9fSBKb2VyJ1xuICAgIH1cbiAgfVxufTtcbnZhciBFWENFUFRJT05fQ09OU09OQU5UUyA9IFsnZCcsICdoJywgJ24nLCAndCcsICd6J107XG52YXIgVk9XRUxTID0gWydhLCcsICdlJywgJ2knLCAnbycsICd1J107XG52YXIgRElHSVRTX1NQT0tFTl9OX05FRURFRCA9IFswLCAxLCAyLCAzLCA4LCA5XTtcbnZhciBGSVJTVF9UV09fRElHSVRTX1NQT0tFTl9OT19OX05FRURFRCA9IFs0MCwgNTAsIDYwLCA3MF07XG5cbi8vIEVpZmVsZXIgUmVnZWxcbmZ1bmN0aW9uIGlzRmluYWxOTmVlZGVkKG5leHRXb3Jkcykge1xuICB2YXIgZmlyc3RMZXR0ZXIgPSBuZXh0V29yZHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChWT1dFTFMuaW5kZXhPZihmaXJzdExldHRlcikgIT0gLTEgfHwgRVhDRVBUSU9OX0NPTlNPTkFOVFMuaW5kZXhPZihmaXJzdExldHRlcikgIT0gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIE51bWJlcnMgd291bGQgbmVlZCB0byBjb252ZXJ0ZWQgaW50byB3b3JkcyBmb3IgY2hlY2tpbmcuXG4gIC8vIFRoZXJlZm9yZSwgSSBoYXZlIGxpc3RlZCB0aGUgZGlnaXRzIHRoYXQgcmVxdWlyZSBhIHByZWNlZWRpbmcgbiB3aXRoIGEgZmV3IGV4Y2VwdGlvbnMuXG4gIHZhciBmaXJzdFdvcmQgPSBuZXh0V29yZHMuc3BsaXQoJyAnKVswXTtcbiAgdmFyIG51bWJlciA9IHBhcnNlSW50KGZpcnN0V29yZCk7XG4gIGlmICghaXNOYU4obnVtYmVyKSAmJiBESUdJVFNfU1BPS0VOX05fTkVFREVELmluZGV4T2YobnVtYmVyICUgMTApICE9IC0xICYmIEZJUlNUX1RXT19ESUdJVFNfU1BPS0VOX05PX05fTkVFREVELmluZGV4T2YocGFyc2VJbnQoZmlyc3RXb3JkLnN1YnN0cmluZygwLCAyKSkpID09IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBPbWl0IG90aGVyIGNoZWNrcyBhcyB0aGV5IGFyZSBub3QgZXhwZWN0ZWQgaGVyZS5cbiAgcmV0dXJuIGZhbHNlO1xufVxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB2YXIgdXNhZ2VHcm91cCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4ID8gdG9rZW5WYWx1ZS53aXRoUHJlcG9zaXRpb24gOiB0b2tlblZhbHVlLnN0YW5kYWxvbmU7XG4gIGlmICh0eXBlb2YgdXNhZ2VHcm91cCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnYScgKyAoaXNGaW5hbE5OZWVkZWQocmVzdWx0KSA/ICduJyA6ICcnKSArICcgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd2aXJ1JyArIChpc0ZpbmFsTk5lZWRlZChyZXN1bHQpID8gJ24nIDogJycpICsgJyAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiKSk7XG4vLyBESU4gNTAwODogaHR0cHM6Ly9kZS53aWtpcGVkaWEub3JnL3dpa2kvRGF0dW1zZm9ybWF0I0RJTl81MDA4XG5cbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIGRvIE1NTU0geScsXG4gIC8vIE3DqWluZGVnLCA3LiBKYW51YXIgMjAxOFxuICBsb25nOiAnZG8gTU1NTSB5JyxcbiAgLy8gNy4gSmFudWFyIDIwMThcbiAgbWVkaXVtOiAnZG8gTU1NIHknLFxuICAvLyA3LiBKYW4gMjAxOFxuICBzaG9ydDogJ2RkLk1NLnl5JyAvLyAwNy4wMS4xOFxufTtcblxudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnSEg6bW06c3Mgenp6eicsXG4gIGxvbmc6ICdISDptbTpzcyB6JyxcbiAgbWVkaXVtOiAnSEg6bW06c3MnLFxuICBzaG9ydDogJ0hIOm1tJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ3VtJyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICd1bScge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgcmVzdWx0ID0gXCInbMOkc2NodGVcIjtcbiAgICBpZiAoZGF5ID09PSAyIHx8IGRheSA9PT0gNCkge1xuICAgICAgLy8gRWlmZWxlciBSZWdlbDogQWRkIGFuIG4gYmVmb3JlIHRoZSBjb25zb25hbnQgZDsgSGVyZSBcIkTDq25zY2hkZWdcIiBcImFuZCBEb25uZXNjaGRlXCIuXG4gICAgICByZXN1bHQgKz0gJ24nO1xuICAgIH1cbiAgICByZXN1bHQgKz0gXCInIGVlZWUgJ3VtJyBwXCI7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgeWVzdGVyZGF5OiBcIidnw6tzY2h0ZXIgdW0nIHBcIixcbiAgdG9kYXk6IFwiJ2hhdXQgdW0nIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ21vaWVuIHVtJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ3VtJyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyd2LkNoci4nLCAnbi5DaHIuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3YuQ2hyLicsICduLkNoci4nXSxcbiAgd2lkZTogWyd2aXJ1IENocmlzdHVzJywgJ25vIENocmlzdHVzJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxLiBRdWFydGFsJywgJzIuIFF1YXJ0YWwnLCAnMy4gUXVhcnRhbCcsICc0LiBRdWFydGFsJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ03DpGUnLCAnQWJyJywgJ01lZScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2t0JywgJ05vdicsICdEZXonXSxcbiAgd2lkZTogWydKYW51YXInLCAnRmVicnVhcicsICdNw6RlcnonLCAnQWJyw6tsbCcsICdNZWUnLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZXplbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdEJywgJ00nLCAnRCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU28nLCAnTcOpJywgJ0TDqycsICdNw6snLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU28uJywgJ03DqS4nLCAnRMOrLicsICdNw6suJywgJ0RvLicsICdGci4nLCAnU2EuJ10sXG4gIHdpZGU6IFsnU29ubmRlZycsICdNw6lpbmRlZycsICdEw6tuc2NoZGVnJywgJ03Dq3R0d29jaCcsICdEb25uZXNjaGRlZycsICdGcmVpZGVnJywgJ1NhbXNjaGRlZyddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdtby4nLFxuICAgIHBtOiAnbm9tw6suJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdNw6t0dGVnJyxcbiAgICBtb3JuaW5nOiAnTW9pZW4nLFxuICAgIGFmdGVybm9vbjogJ05vbcOrdHRlZycsXG4gICAgZXZlbmluZzogJ093ZW5kJyxcbiAgICBuaWdodDogJ051ZWNodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ21vaWVzJyxcbiAgICBwbTogJ25vbcOrdHRlcycsXG4gICAgbWlkbmlnaHQ6ICdNw6t0dGVybnVlY2h0JyxcbiAgICBub29uOiAnTcOrdHRlZycsXG4gICAgbW9ybmluZzogJ01vaWVuJyxcbiAgICBhZnRlcm5vb246ICdOb23Dq3R0ZWcnLFxuICAgIGV2ZW5pbmc6ICdPd2VuZCcsXG4gICAgbmlnaHQ6ICdOdWVjaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ21vaWVzJyxcbiAgICBwbTogJ25vbcOrdHRlcycsXG4gICAgbWlkbmlnaHQ6ICdNw6t0dGVybnVlY2h0JyxcbiAgICBub29uOiAnTcOrdHRlZycsXG4gICAgbW9ybmluZzogJ01vaWVuJyxcbiAgICBhZnRlcm5vb246ICdOb23Dq3R0ZWcnLFxuICAgIGV2ZW5pbmc6ICdPd2VuZCcsXG4gICAgbmlnaHQ6ICdOdWVjaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdtby4nLFxuICAgIHBtOiAnbm9tLicsXG4gICAgbWlkbmlnaHQ6ICdNw6t0dGVybnVlY2h0JyxcbiAgICBub29uOiAnbcOrdHRlcycsXG4gICAgbW9ybmluZzogJ21vaWVzJyxcbiAgICBhZnRlcm5vb246ICdub23Dq3R0ZXMnLFxuICAgIGV2ZW5pbmc6ICdvd2VzJyxcbiAgICBuaWdodDogJ251ZXRzJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnbW9pZXMnLFxuICAgIHBtOiAnbm9tw6t0dGVzJyxcbiAgICBtaWRuaWdodDogJ03Dq3R0ZXJudWVjaHQnLFxuICAgIG5vb246ICdtw6t0dGVzJyxcbiAgICBtb3JuaW5nOiAnbW9pZXMnLFxuICAgIGFmdGVybm9vbjogJ25vbcOrdHRlcycsXG4gICAgZXZlbmluZzogJ293ZXMnLFxuICAgIG5pZ2h0OiAnbnVldHMnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ21vaWVzJyxcbiAgICBwbTogJ25vbcOrdHRlcycsXG4gICAgbWlkbmlnaHQ6ICdNw6t0dGVybnVlY2h0JyxcbiAgICBub29uOiAnbcOrdHRlcycsXG4gICAgbW9ybmluZzogJ21vaWVzJyxcbiAgICBhZnRlcm5vb246ICdub23Dq3R0ZXMnLFxuICAgIGV2ZW5pbmc6ICdvd2VzJyxcbiAgICBuaWdodDogJ251ZXRzJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKShcXC4pPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14odlxcLj8gP0NoclxcLj98blxcLj8gP0NoclxcLj8pL2ksXG4gIGFiYnJldmlhdGVkOiAvXih2XFwuPyA/Q2hyXFwuP3xuXFwuPyA/Q2hyXFwuPykvaSxcbiAgd2lkZTogL14odmlydSBDaHJpc3R1c3x2aXJ1biBlaXNlciBaw6RpdHJlY2hudW5nfG5vIENocmlzdHVzfGVpc2VyIFrDpGl0cmVjaG51bmcpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL152L2ksIC9ebi9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKFxcLik/IFF1YXJ0YWwvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtw6RlfGFicnxtZWV8anVufGp1bHxhdWd8c2VwfG9rdHxub3Z8ZGV6KS9pLFxuICB3aWRlOiAvXihqYW51YXJ8ZmVicnVhcnxtw6Rlcnp8YWJyw6tsbHxtZWV8anVuaXxqdWxpfGF1Z3VzdHxzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZXplbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm3DpC9pLCAvXmFiL2ksIC9ebWUvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbWRmXS9pLFxuICBzaG9ydDogL14oc298bcOpfGTDq3xtw6t8ZG98ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzb24/fG3DqWk/fGTDq24/fG3Dq3Q/fGRvbj98ZnJlP3xzYW0/KVxcLj8vaSxcbiAgd2lkZTogL14oc29ubmRlZ3xtw6lpbmRlZ3xkw6tuc2NoZGVnfG3Dq3R0d29jaHxkb25uZXNjaGRlZ3xmcmVpZGVnfHNhbXNjaGRlZykvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnNvL2ksIC9ebcOpL2ksIC9eZMOrL2ksIC9ebcOrL2ksIC9eZG8vaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihtb1xcLj98bm9tw6tcXC4/fE3Dq3R0ZXJudWVjaHR8bcOrdHRlc3xtb2llc3xub23Dq3R0ZXN8b3dlc3xudWV0cykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKG1vaVxcLj98bm9tw6t0XFwuP3xNw6t0dGVybnVlY2h0fG3Dq3R0ZXN8bW9pZXN8bm9tw6t0dGVzfG93ZXN8bnVldHMpL2ksXG4gIHdpZGU6IC9eKG1vaWVzfG5vbcOrdHRlc3xNw6t0dGVybnVlY2h0fG3Dq3R0ZXN8bW9pZXN8bm9tw6t0dGVzfG93ZXN8bnVldHMpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9ebS9pLFxuICAgIHBtOiAvXm4vaSxcbiAgICBtaWRuaWdodDogL15Nw6t0dGVyL2ksXG4gICAgbm9vbjogL15tw6t0dGVzL2ksXG4gICAgbW9ybmluZzogL21vaWVzL2ksXG4gICAgYWZ0ZXJub29uOiAvbm9tw6t0dGVzL2ksXG4gICAgLy8gd2lsbCBuZXZlciBiZSBtYXRjaGVkLiBBZnRlcm5vb24gaXMgbWF0Y2hlZCBieSBgcG1gXG4gICAgZXZlbmluZzogL293ZXMvaSxcbiAgICBuaWdodDogL251ZXRzL2kgLy8gd2lsbCBuZXZlciBiZSBtYXRjaGVkLiBOaWdodCBpcyBtYXRjaGVkIGJ5IGBwbWBcbiAgfVxufTtcblxudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgTHV4ZW1ib3VyZ2lzaCBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgTHV4ZW1ib3VyZ2lzaFxuICogQGlzby02MzktMiBsdHpcbiAqIEBhdXRob3IgRGFuaWVsIFdheHdlaWxlciBbQGR3YXh3ZWlsZXJde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9kd2F4d2VpbGVyfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnbGInLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMSAvKiBNb25kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=