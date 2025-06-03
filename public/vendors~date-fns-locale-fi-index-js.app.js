(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-fi-index-js"],{

/***/ "./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function futureSeconds(text) {
  return text.replace(/sekuntia?/, 'sekunnin');
}
function futureMinutes(text) {
  return text.replace(/minuuttia?/, 'minuutin');
}
function futureHours(text) {
  return text.replace(/tuntia?/, 'tunnin');
}
function futureDays(text) {
  return text.replace(/päivää?/, 'päivän');
}
function futureWeeks(text) {
  return text.replace(/(viikko|viikkoa)/, 'viikon');
}
function futureMonths(text) {
  return text.replace(/(kuukausi|kuukautta)/, 'kuukauden');
}
function futureYears(text) {
  return text.replace(/(vuosi|vuotta)/, 'vuoden');
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'alle sekunti',
    other: 'alle {{count}} sekuntia',
    futureTense: futureSeconds
  },
  xSeconds: {
    one: 'sekunti',
    other: '{{count}} sekuntia',
    futureTense: futureSeconds
  },
  halfAMinute: {
    one: 'puoli minuuttia',
    other: 'puoli minuuttia',
    futureTense: function futureTense(_text) {
      return 'puolen minuutin';
    }
  },
  lessThanXMinutes: {
    one: 'alle minuutti',
    other: 'alle {{count}} minuuttia',
    futureTense: futureMinutes
  },
  xMinutes: {
    one: 'minuutti',
    other: '{{count}} minuuttia',
    futureTense: futureMinutes
  },
  aboutXHours: {
    one: 'noin tunti',
    other: 'noin {{count}} tuntia',
    futureTense: futureHours
  },
  xHours: {
    one: 'tunti',
    other: '{{count}} tuntia',
    futureTense: futureHours
  },
  xDays: {
    one: 'päivä',
    other: '{{count}} päivää',
    futureTense: futureDays
  },
  aboutXWeeks: {
    one: 'noin viikko',
    other: 'noin {{count}} viikkoa',
    futureTense: futureWeeks
  },
  xWeeks: {
    one: 'viikko',
    other: '{{count}} viikkoa',
    futureTense: futureWeeks
  },
  aboutXMonths: {
    one: 'noin kuukausi',
    other: 'noin {{count}} kuukautta',
    futureTense: futureMonths
  },
  xMonths: {
    one: 'kuukausi',
    other: '{{count}} kuukautta',
    futureTense: futureMonths
  },
  aboutXYears: {
    one: 'noin vuosi',
    other: 'noin {{count}} vuotta',
    futureTense: futureYears
  },
  xYears: {
    one: 'vuosi',
    other: '{{count}} vuotta',
    futureTense: futureYears
  },
  overXYears: {
    one: 'yli vuosi',
    other: 'yli {{count}} vuotta',
    futureTense: futureYears
  },
  almostXYears: {
    one: 'lähes vuosi',
    other: 'lähes {{count}} vuotta',
    futureTense: futureYears
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  var result = count === 1 ? tokenValue.one : tokenValue.other.replace('{{count}}', String(count));
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return tokenValue.futureTense(result) + ' kuluttua';
    } else {
      return result + ' sitten';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/fi/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/formatLong/index.js ***!
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
  full: 'eeee d. MMMM y',
  long: 'd. MMMM y',
  medium: 'd. MMM y',
  short: 'd.M.y'
};
var timeFormats = {
  full: 'HH.mm.ss zzzz',
  long: 'HH.mm.ss z',
  medium: 'HH.mm.ss',
  short: 'HH.mm'
};
var dateTimeFormats = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
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

/***/ "./node_modules/date-fns/locale/fi/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'viime' eeee 'klo' p",
  yesterday: "'eilen klo' p",
  today: "'tänään klo' p",
  tomorrow: "'huomenna klo' p",
  nextWeek: "'ensi' eeee 'klo' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/fi/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/localize/index.js ***!
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
  narrow: ['eaa.', 'jaa.'],
  abbreviated: ['eaa.', 'jaa.'],
  wide: ['ennen ajanlaskun alkua', 'jälkeen ajanlaskun alun']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. kvartaali', '2. kvartaali', '3. kvartaali', '4. kvartaali']
};
var monthValues = {
  narrow: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
  abbreviated: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
  wide: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
};
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: monthValues.abbreviated,
  wide: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
  short: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  abbreviated: ['sunn.', 'maan.', 'tiis.', 'kesk.', 'torst.', 'perj.', 'la'],
  wide: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
};
var formattingDayValues = {
  narrow: dayValues.narrow,
  short: dayValues.short,
  abbreviated: dayValues.abbreviated,
  wide: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina']
};
var dayPeriodValues = {
  narrow: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  abbreviated: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyö',
    noon: 'keskipäivä',
    morning: 'ap',
    afternoon: 'ip',
    evening: 'illalla',
    night: 'yöllä'
  },
  wide: {
    am: 'ap',
    pm: 'ip',
    midnight: 'keskiyöllä',
    noon: 'keskipäivällä',
    morning: 'aamupäivällä',
    afternoon: 'iltapäivällä',
    evening: 'illalla',
    night: 'yöllä'
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/fi/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(\.)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(e|j)/i,
  abbreviated: /^(eaa.|jaa.)/i,
  wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
};
var parseEraPatterns = {
  any: [/^e/i, /^j/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\.? kvartaali/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[thmkeslj]/i,
  abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
  wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
};
var parseMonthPatterns = {
  narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
  any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
};
var matchDayPatterns = {
  narrow: /^[smtkpl]/i,
  short: /^(su|ma|ti|ke|to|pe|la)/i,
  abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
  wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
  any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ap/i,
    pm: /^ip/i,
    midnight: /^keskiyö/i,
    noon: /^keskipäivä/i,
    morning: /aamupäivällä/i,
    afternoon: /iltapäivällä/i,
    evening: /illalla/i,
    night: /yöllä/i
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

/***/ "./node_modules/date-fns/locale/fi/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/fi/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/fi/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/fi/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/fi/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Finnish locale.
 * @language Finnish
 * @iso-639-2 fin
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 * @author Edo Rivai [@mikolajgrzyb]{@link https://github.com/mikolajgrzyb}
 * @author Samu Juvonen [@sjuvonen]{@link https://github.com/sjuvonen}
 */
var locale = {
  code: 'fi',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9maS9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9maS9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZmkvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZpL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9maS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FB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bG9jYWxlLWZpLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZnVuY3Rpb24gZnV0dXJlU2Vjb25kcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL3Nla3VudGlhPy8sICdzZWt1bm5pbicpO1xufVxuZnVuY3Rpb24gZnV0dXJlTWludXRlcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL21pbnV1dHRpYT8vLCAnbWludXV0aW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZUhvdXJzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvdHVudGlhPy8sICd0dW5uaW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZURheXModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9ww6RpdsOkw6Q/LywgJ3DDpGl2w6RuJyk7XG59XG5mdW5jdGlvbiBmdXR1cmVXZWVrcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyh2aWlra298dmlpa2tvYSkvLCAndmlpa29uJyk7XG59XG5mdW5jdGlvbiBmdXR1cmVNb250aHModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oa3V1a2F1c2l8a3V1a2F1dHRhKS8sICdrdXVrYXVkZW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZVllYXJzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKHZ1b3NpfHZ1b3R0YSkvLCAndnVvZGVuJyk7XG59XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdhbGxlIHNla3VudGknLFxuICAgIG90aGVyOiAnYWxsZSB7e2NvdW50fX0gc2VrdW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVTZWNvbmRzXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnc2VrdW50aScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVTZWNvbmRzXG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgb25lOiAncHVvbGkgbWludXV0dGlhJyxcbiAgICBvdGhlcjogJ3B1b2xpIG1pbnV1dHRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1bmN0aW9uIGZ1dHVyZVRlbnNlKF90ZXh0KSB7XG4gICAgICByZXR1cm4gJ3B1b2xlbiBtaW51dXRpbic7XG4gICAgfVxuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnYWxsZSBtaW51dXR0aScsXG4gICAgb3RoZXI6ICdhbGxlIHt7Y291bnR9fSBtaW51dXR0aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNaW51dGVzXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnbWludXV0dGknLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV1dHRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZU1pbnV0ZXNcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdub2luIHR1bnRpJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IHR1bnRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZUhvdXJzXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJ3R1bnRpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0dW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVIb3Vyc1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ3DDpGl2w6QnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHDDpGl2w6TDpCcsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZURheXNcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdub2luIHZpaWtrbycsXG4gICAgb3RoZXI6ICdub2luIHt7Y291bnR9fSB2aWlra29hJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlV2Vla3NcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAndmlpa2tvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2aWlra29hJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlV2Vla3NcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnbm9pbiBrdXVrYXVzaScsXG4gICAgb3RoZXI6ICdub2luIHt7Y291bnR9fSBrdXVrYXV0dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNb250aHNcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ2t1dWthdXNpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBrdXVrYXV0dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNb250aHNcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdub2luIHZ1b3NpJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IHZ1b3R0YScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZVllYXJzXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ3Z1b3NpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2dW90dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVZZWFyc1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAneWxpIHZ1b3NpJyxcbiAgICBvdGhlcjogJ3lsaSB7e2NvdW50fX0gdnVvdHRhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlWWVhcnNcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnbMOkaGVzIHZ1b3NpJyxcbiAgICBvdGhlcjogJ2zDpGhlcyB7e2NvdW50fX0gdnVvdHRhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlWWVhcnNcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgdmFyIHJlc3VsdCA9IGNvdW50ID09PSAxID8gdG9rZW5WYWx1ZS5vbmUgOiB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiB0b2tlblZhbHVlLmZ1dHVyZVRlbnNlKHJlc3VsdCkgKyAnIGt1bHV0dHVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgc2l0dGVuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnZWVlZSBkLiBNTU1NIHknLFxuICBsb25nOiAnZC4gTU1NTSB5JyxcbiAgbWVkaXVtOiAnZC4gTU1NIHknLFxuICBzaG9ydDogJ2QuTS55J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hILm1tLnNzIHp6enonLFxuICBsb25nOiAnSEgubW0uc3MgeicsXG4gIG1lZGl1bTogJ0hILm1tLnNzJyxcbiAgc2hvcnQ6ICdISC5tbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdrbG8nIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2tsbycge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ3ZpaW1lJyBlZWVlICdrbG8nIHBcIixcbiAgeWVzdGVyZGF5OiBcIidlaWxlbiBrbG8nIHBcIixcbiAgdG9kYXk6IFwiJ3TDpG7DpMOkbiBrbG8nIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ2h1b21lbm5hIGtsbycgcFwiLFxuICBuZXh0V2VlazogXCInZW5zaScgZWVlZSAna2xvJyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydlYWEuJywgJ2phYS4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZWFhLicsICdqYWEuJ10sXG4gIHdpZGU6IFsnZW5uZW4gYWphbmxhc2t1biBhbGt1YScsICdqw6Rsa2VlbiBhamFubGFza3VuIGFsdW4nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzEuIGt2YXJ0YWFsaScsICcyLiBrdmFydGFhbGknLCAnMy4ga3ZhcnRhYWxpJywgJzQuIGt2YXJ0YWFsaSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnVCcsICdIJywgJ00nLCAnSCcsICdUJywgJ0snLCAnSCcsICdFJywgJ1MnLCAnTCcsICdNJywgJ0onXSxcbiAgYWJicmV2aWF0ZWQ6IFsndGFtbWknLCAnaGVsbWknLCAnbWFhbGlzJywgJ2h1aHRpJywgJ3RvdWtvJywgJ2tlc8OkJywgJ2hlaW7DpCcsICdlbG8nLCAnc3l5cycsICdsb2thJywgJ21hcnJhcycsICdqb3VsdSddLFxuICB3aWRlOiBbJ3RhbW1pa3V1JywgJ2hlbG1pa3V1JywgJ21hYWxpc2t1dScsICdodWh0aWt1dScsICd0b3Vrb2t1dScsICdrZXPDpGt1dScsICdoZWluw6RrdXUnLCAnZWxva3V1JywgJ3N5eXNrdXUnLCAnbG9rYWt1dScsICdtYXJyYXNrdXUnLCAnam91bHVrdXUnXVxufTtcbnZhciBmb3JtYXR0aW5nTW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogbW9udGhWYWx1ZXMubmFycm93LFxuICBhYmJyZXZpYXRlZDogbW9udGhWYWx1ZXMuYWJicmV2aWF0ZWQsXG4gIHdpZGU6IFsndGFtbWlrdXV0YScsICdoZWxtaWt1dXRhJywgJ21hYWxpc2t1dXRhJywgJ2h1aHRpa3V1dGEnLCAndG91a29rdXV0YScsICdrZXPDpGt1dXRhJywgJ2hlaW7DpGt1dXRhJywgJ2Vsb2t1dXRhJywgJ3N5eXNrdXV0YScsICdsb2tha3V1dGEnLCAnbWFycmFza3V1dGEnLCAnam91bHVrdXV0YSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ0snLCAnVCcsICdQJywgJ0wnXSxcbiAgc2hvcnQ6IFsnc3UnLCAnbWEnLCAndGknLCAna2UnLCAndG8nLCAncGUnLCAnbGEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3Vubi4nLCAnbWFhbi4nLCAndGlpcy4nLCAna2Vzay4nLCAndG9yc3QuJywgJ3BlcmouJywgJ2xhJ10sXG4gIHdpZGU6IFsnc3VubnVudGFpJywgJ21hYW5hbnRhaScsICd0aWlzdGFpJywgJ2tlc2tpdmlpa2tvJywgJ3RvcnN0YWknLCAncGVyamFudGFpJywgJ2xhdWFudGFpJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVZhbHVlcyA9IHtcbiAgbmFycm93OiBkYXlWYWx1ZXMubmFycm93LFxuICBzaG9ydDogZGF5VmFsdWVzLnNob3J0LFxuICBhYmJyZXZpYXRlZDogZGF5VmFsdWVzLmFiYnJldmlhdGVkLFxuICB3aWRlOiBbJ3N1bm51bnRhaW5hJywgJ21hYW5hbnRhaW5hJywgJ3RpaXN0YWluYScsICdrZXNraXZpaWtrb25hJywgJ3RvcnN0YWluYScsICdwZXJqYW50YWluYScsICdsYXVhbnRhaW5hJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FwJyxcbiAgICBwbTogJ2lwJyxcbiAgICBtaWRuaWdodDogJ2tlc2tpecO2JyxcbiAgICBub29uOiAna2Vza2lww6RpdsOkJyxcbiAgICBtb3JuaW5nOiAnYXAnLFxuICAgIGFmdGVybm9vbjogJ2lwJyxcbiAgICBldmVuaW5nOiAnaWxsYWxsYScsXG4gICAgbmlnaHQ6ICd5w7ZsbMOkJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnYXAnLFxuICAgIHBtOiAnaXAnLFxuICAgIG1pZG5pZ2h0OiAna2Vza2l5w7YnLFxuICAgIG5vb246ICdrZXNraXDDpGl2w6QnLFxuICAgIG1vcm5pbmc6ICdhcCcsXG4gICAgYWZ0ZXJub29uOiAnaXAnLFxuICAgIGV2ZW5pbmc6ICdpbGxhbGxhJyxcbiAgICBuaWdodDogJ3nDtmxsw6QnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FwJyxcbiAgICBwbTogJ2lwJyxcbiAgICBtaWRuaWdodDogJ2tlc2tpecO2bGzDpCcsXG4gICAgbm9vbjogJ2tlc2tpcMOkaXbDpGxsw6QnLFxuICAgIG1vcm5pbmc6ICdhYW11cMOkaXbDpGxsw6QnLFxuICAgIGFmdGVybm9vbjogJ2lsdGFww6RpdsOkbGzDpCcsXG4gICAgZXZlbmluZzogJ2lsbGFsbGEnLFxuICAgIG5pZ2h0OiAnecO2bGzDpCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXIgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ01vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5VmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKShcXC4pL2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihlfGopL2ksXG4gIGFiYnJldmlhdGVkOiAvXihlYWEufGphYS4pL2ksXG4gIHdpZGU6IC9eKGVubmVuIGFqYW5sYXNrdW4gYWxrdWF8asOkbGtlZW4gYWphbmxhc2t1biBhbHVuKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eZS9pLCAvXmovaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XVxcLj8ga3ZhcnRhYWxpL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlt0aG1rZXNsal0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHRhbW1pfGhlbG1pfG1hYWxpc3xodWh0aXx0b3Vrb3xrZXPDpHxoZWluw6R8ZWxvfHN5eXN8bG9rYXxtYXJyYXN8am91bHUpL2ksXG4gIHdpZGU6IC9eKHRhbW1pa3V1fGhlbG1pa3V1fG1hYWxpc2t1dXxodWh0aWt1dXx0b3Vrb2t1dXxrZXPDpGt1dXxoZWluw6RrdXV8ZWxva3V1fHN5eXNrdXV8bG9rYWt1dXxtYXJyYXNrdXV8am91bHVrdXUpKHRhKT8vaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9edC9pLCAvXmgvaSwgL15tL2ksIC9eaC9pLCAvXnQvaSwgL15rL2ksIC9eaC9pLCAvXmUvaSwgL15zL2ksIC9ebC9pLCAvXm0vaSwgL15qL2ldLFxuICBhbnk6IFsvXnRhL2ksIC9eaGVsL2ksIC9ebWFhL2ksIC9eaHUvaSwgL150by9pLCAvXmsvaSwgL15oZWkvaSwgL15lL2ksIC9ecy9pLCAvXmwvaSwgL15tYXIvaSwgL15qL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210a3BsXS9pLFxuICBzaG9ydDogL14oc3V8bWF8dGl8a2V8dG98cGV8bGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW5uLnxtYWFuLnx0aWlzLnxrZXNrLnx0b3JzdC58cGVyai58bGEpL2ksXG4gIHdpZGU6IC9eKHN1bm51bnRhaXxtYWFuYW50YWl8dGlpc3RhaXxrZXNraXZpaWtrb3x0b3JzdGFpfHBlcmphbnRhaXxsYXVhbnRhaSkobmEpPy9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9eay9pLCAvXnQvaSwgL15wL2ksIC9ebC9pXSxcbiAgYW55OiBbL15zL2ksIC9ebS9pLCAvXnRpL2ksIC9eay9pLCAvXnRvL2ksIC9ecC9pLCAvXmwvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhcHxpcHxrZXNraXnDtnxrZXNraXDDpGl2w6R8YWFtdXDDpGl2w6RsbMOkfGlsdGFww6RpdsOkbGzDpHxpbGxhbGxhfHnDtmxsw6QpL2ksXG4gIGFueTogL14oYXB8aXB8a2Vza2l5w7ZsbMOkfGtlc2tpcMOkaXbDpGxsw6R8YWFtdXDDpGl2w6RsbMOkfGlsdGFww6RpdsOkbGzDpHxpbGxhbGxhfHnDtmxsw6QpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYXAvaSxcbiAgICBwbTogL15pcC9pLFxuICAgIG1pZG5pZ2h0OiAvXmtlc2tpecO2L2ksXG4gICAgbm9vbjogL15rZXNraXDDpGl2w6QvaSxcbiAgICBtb3JuaW5nOiAvYWFtdXDDpGl2w6RsbMOkL2ksXG4gICAgYWZ0ZXJub29uOiAvaWx0YXDDpGl2w6RsbMOkL2ksXG4gICAgZXZlbmluZzogL2lsbGFsbGEvaSxcbiAgICBuaWdodDogL3nDtmxsw6QvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBGaW5uaXNoIGxvY2FsZS5cbiAqIEBsYW5ndWFnZSBGaW5uaXNoXG4gKiBAaXNvLTYzOS0yIGZpblxuICogQGF1dGhvciBQeXJ5LVNhbXVsaSBMYWh0aSBbQFB5cHBlXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vUHlwcGV9XG4gKiBAYXV0aG9yIEVkbyBSaXZhaSBbQG1pa29sYWpncnp5Yl17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21pa29sYWpncnp5Yn1cbiAqIEBhdXRob3IgU2FtdSBKdXZvbmVuIFtAc2p1dm9uZW5de0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zanV2b25lbn1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2ZpJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9