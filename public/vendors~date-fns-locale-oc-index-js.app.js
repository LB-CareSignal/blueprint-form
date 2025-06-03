(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-oc-index-js"],{

/***/ "./node_modules/date-fns/locale/oc/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/formatDistance/index.js ***!
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
    one: 'mens d’una segonda',
    other: 'mens de {{count}} segondas'
  },
  xSeconds: {
    one: '1 segonda',
    other: '{{count}} segondas'
  },
  halfAMinute: '30 segondas',
  lessThanXMinutes: {
    one: 'mens d’una minuta',
    other: 'mens de {{count}} minutas'
  },
  xMinutes: {
    one: '1 minuta',
    other: '{{count}} minutas'
  },
  aboutXHours: {
    one: 'environ 1 ora',
    other: 'environ {{count}} oras'
  },
  xHours: {
    one: '1 ora',
    other: '{{count}} oras'
  },
  xDays: {
    one: '1 jorn',
    other: '{{count}} jorns'
  },
  aboutXWeeks: {
    one: 'environ 1 setmana',
    other: 'environ {{count}} setmanas'
  },
  xWeeks: {
    one: '1 setmana',
    other: '{{count}} setmanas'
  },
  aboutXMonths: {
    one: 'environ 1 mes',
    other: 'environ {{count}} meses'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'environ 1 an',
    other: 'environ {{count}} ans'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ans'
  },
  overXYears: {
    one: 'mai d’un an',
    other: 'mai de {{count}} ans'
  },
  almostXYears: {
    one: 'gaireben un an',
    other: 'gaireben {{count}} ans'
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
      return 'd’aquí ' + result;
    } else {
      return 'fa ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/oc/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/formatLong/index.js ***!
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
  full: "EEEE d 'de' MMMM y",
  long: "d 'de' MMMM y",
  medium: 'd MMM y',
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'a' {{time}}",
  long: "{{date}} 'a' {{time}}",
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

/***/ "./node_modules/date-fns/locale/oc/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "eeee 'passat a' p",
  yesterday: "'ièr a' p",
  today: "'uèi a' p",
  tomorrow: "'deman a' p",
  nextWeek: "eeee 'a' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/oc/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/localize/index.js ***!
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
  narrow: ['ab. J.C.', 'apr. J.C.'],
  abbreviated: ['ab. J.C.', 'apr. J.C.'],
  wide: ['abans Jèsus-Crist', 'après Jèsus-Crist']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1èr trim.', '2nd trim.', '3en trim.', '4en trim.'],
  wide: ['1èr trimèstre', '2nd trimèstre', '3en trimèstre', '4en trimèstre']
};
var monthValues = {
  narrow: ['GN', 'FB', 'MÇ', 'AB', 'MA', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DC'],
  abbreviated: ['gen.', 'febr.', 'març', 'abr.', 'mai', 'junh', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'dec.'],
  wide: ['genièr', 'febrièr', 'març', 'abril', 'mai', 'junh', 'julhet', 'agost', 'setembre', 'octòbre', 'novembre', 'decembre']
};
var dayValues = {
  narrow: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  wide: ['dimenge', 'diluns', 'dimars', 'dimècres', 'dijòus', 'divendres', 'dissabte']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  var ordinal;
  switch (number) {
    case 1:
      ordinal = 'èr';
      break;
    case 2:
      ordinal = 'nd';
      break;
    default:
      ordinal = 'en';
  }

  // feminine for year, week, hour, minute, second
  if (unit === 'year' || unit === 'week' || unit === 'hour' || unit === 'minute' || unit === 'second') {
    ordinal += 'a';
  }
  return number + ordinal;
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

/***/ "./node_modules/date-fns/locale/oc/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(èr|nd|en)?[a]?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,
  abbreviated: /^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(abans Jèsus-Crist|après Jèsus-Crist)/i
};
var parseEraPatterns = {
  any: [/^ab/i, /^ap/i]
};
var matchQuarterPatterns = {
  narrow: /^T[1234]/i,
  abbreviated: /^[1234](èr|nd|en)? trim\.?/i,
  wide: /^[1234](èr|nd|en)? trimèstre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,
  abbreviated: /^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,
  wide: /^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i
};
var parseMonthPatterns = {
  any: [/^g/i, /^f/i, /^ma[r?]|MÇ/i, /^ab/i, /^ma[i?]/i, /^ju[n?]|JN/i, /^ju[l?]|JL/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^d[glmcjvs]\.?/i,
  short: /^d[glmcjvs]\.?/i,
  abbreviated: /^d[glmcjvs]\.?/i,
  wide: /^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i
};
var parseDayPatterns = {
  narrow: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  short: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  abbreviated: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
  any: [/^dg|dime/i, /^dl|dil/i, /^dm|dima/i, /^dc|dimè/i, /^dj|dij/i, /^dv|div/i, /^ds|dis/i]
};
var matchDayPeriodPatterns = {
  any: /(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /(^a)|ante meridiem/i,
    pm: /(^p)|post meridiem/i,
    midnight: /^mièj/i,
    noon: /^mièg/i,
    morning: /matin/i,
    afternoon: /aprèp-miègjorn/i,
    evening: /vèspre|ser/i,
    night: /nuèch/i
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

/***/ "./node_modules/date-fns/locale/oc/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/oc/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/oc/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/oc/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/oc/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/oc/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Occitan locale.
 * @language Occitan
 * @iso-639-2 oci
 * @author Quentin PAGÈS
 */
var locale = {
  code: 'oc',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL29jL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9vYy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9vYy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvb2MvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL29jL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9vYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNB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LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbWVucyBk4oCZdW5hIHNlZ29uZGEnLFxuICAgIG90aGVyOiAnbWVucyBkZSB7e2NvdW50fX0gc2Vnb25kYXMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWdvbmRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWdvbmRhcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICczMCBzZWdvbmRhcycsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdtZW5zIGTigJl1bmEgbWludXRhJyxcbiAgICBvdGhlcjogJ21lbnMgZGUge3tjb3VudH19IG1pbnV0YXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0YXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnZW52aXJvbiAxIG9yYScsXG4gICAgb3RoZXI6ICdlbnZpcm9uIHt7Y291bnR9fSBvcmFzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIG9yYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gb3JhcydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGpvcm4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGpvcm5zJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Vudmlyb24gMSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ2Vudmlyb24ge3tjb3VudH19IHNldG1hbmFzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHNldG1hbmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNldG1hbmFzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgbWVzJyxcbiAgICBvdGhlcjogJ2Vudmlyb24ge3tjb3VudH19IG1lc2VzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtZXMnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1lc2VzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Vudmlyb24gMSBhbicsXG4gICAgb3RoZXI6ICdlbnZpcm9uIHt7Y291bnR9fSBhbnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgYW4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGFucydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ21haSBk4oCZdW4gYW4nLFxuICAgIG90aGVyOiAnbWFpIGRlIHt7Y291bnR9fSBhbnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2dhaXJlYmVuIHVuIGFuJyxcbiAgICBvdGhlcjogJ2dhaXJlYmVuIHt7Y291bnR9fSBhbnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnZOKAmWFxdcOtICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZmEgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUgZCAnZGUnIE1NTU0geVwiLFxuICBsb25nOiBcImQgJ2RlJyBNTU1NIHlcIixcbiAgbWVkaXVtOiAnZCBNTU0geScsXG4gIHNob3J0OiAnZGQvTU0veSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyB6enp6JyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYScge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYScge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCJlZWVlICdwYXNzYXQgYScgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2nDqHIgYScgcFwiLFxuICB0b2RheTogXCIndcOoaSBhJyBwXCIsXG4gIHRvbW9ycm93OiBcIidkZW1hbiBhJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2EnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2FiLiBKLkMuJywgJ2Fwci4gSi5DLiddLFxuICBhYmJyZXZpYXRlZDogWydhYi4gSi5DLicsICdhcHIuIEouQy4nXSxcbiAgd2lkZTogWydhYmFucyBKw6hzdXMtQ3Jpc3QnLCAnYXByw6hzIErDqHN1cy1DcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydUMScsICdUMicsICdUMycsICdUNCddLFxuICBhYmJyZXZpYXRlZDogWycxw6hyIHRyaW0uJywgJzJuZCB0cmltLicsICczZW4gdHJpbS4nLCAnNGVuIHRyaW0uJ10sXG4gIHdpZGU6IFsnMcOociB0cmltw6hzdHJlJywgJzJuZCB0cmltw6hzdHJlJywgJzNlbiB0cmltw6hzdHJlJywgJzRlbiB0cmltw6hzdHJlJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUEnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnREMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZ2VuLicsICdmZWJyLicsICdtYXLDpycsICdhYnIuJywgJ21haScsICdqdW5oJywgJ2p1bC4nLCAnYWcuJywgJ3NldC4nLCAnb2N0LicsICdub3YuJywgJ2RlYy4nXSxcbiAgd2lkZTogWydnZW5pw6hyJywgJ2ZlYnJpw6hyJywgJ21hcsOnJywgJ2FicmlsJywgJ21haScsICdqdW5oJywgJ2p1bGhldCcsICdhZ29zdCcsICdzZXRlbWJyZScsICdvY3TDsmJyZScsICdub3ZlbWJyZScsICdkZWNlbWJyZSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2RnLicsICdkbC4nLCAnZG0uJywgJ2RjLicsICdkai4nLCAnZHYuJywgJ2RzLiddLFxuICBzaG9ydDogWydkZy4nLCAnZGwuJywgJ2RtLicsICdkYy4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZGcuJywgJ2RsLicsICdkbS4nLCAnZGMuJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gIHdpZGU6IFsnZGltZW5nZScsICdkaWx1bnMnLCAnZGltYXJzJywgJ2RpbcOoY3JlcycsICdkaWrDsnVzJywgJ2RpdmVuZHJlcycsICdkaXNzYWJ0ZSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdtacOoamFudcOoY2gnLFxuICAgIG5vb246ICdtacOoZ2pvcm4nLFxuICAgIG1vcm5pbmc6ICdtYXRpbicsXG4gICAgYWZ0ZXJub29uOiAnYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ3bDqHNwcmUnLFxuICAgIG5pZ2h0OiAnbnXDqGNoJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pw6hqYW51w6hjaCcsXG4gICAgbm9vbjogJ21pw6hnam9ybicsXG4gICAgbW9ybmluZzogJ21hdGluJyxcbiAgICBhZnRlcm5vb246ICdhcHLDqHAtbWnDqGdqb3JuJyxcbiAgICBldmVuaW5nOiAndsOoc3ByZScsXG4gICAgbmlnaHQ6ICdudcOoY2gnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtacOoamFudcOoY2gnLFxuICAgIG5vb246ICdtacOoZ2pvcm4nLFxuICAgIG1vcm5pbmc6ICdtYXRpbicsXG4gICAgYWZ0ZXJub29uOiAnYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ3bDqHNwcmUnLFxuICAgIG5pZ2h0OiAnbnXDqGNoJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhbnRlIG1lcmlkaWVtJyxcbiAgICBwbTogJ3Bvc3QgbWVyaWRpZW0nLFxuICAgIG1pZG5pZ2h0OiAnbWnDqGphbnXDqGNoJyxcbiAgICBub29uOiAnbWnDqGdqb3JuJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdGluJyxcbiAgICBhZnRlcm5vb246ICdkZSBs4oCZYXByw6hwLW1pw6hnam9ybicsXG4gICAgZXZlbmluZzogJ2RlbCBzZXInLFxuICAgIG5pZ2h0OiAnZGUgbGEgbnXDqGNoJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICB2YXIgb3JkaW5hbDtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICBvcmRpbmFsID0gJ8Oocic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBvcmRpbmFsID0gJ25kJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBvcmRpbmFsID0gJ2VuJztcbiAgfVxuXG4gIC8vIGZlbWluaW5lIGZvciB5ZWFyLCB3ZWVrLCBob3VyLCBtaW51dGUsIHNlY29uZFxuICBpZiAodW5pdCA9PT0gJ3llYXInIHx8IHVuaXQgPT09ICd3ZWVrJyB8fCB1bml0ID09PSAnaG91cicgfHwgdW5pdCA9PT0gJ21pbnV0ZScgfHwgdW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICBvcmRpbmFsICs9ICdhJztcbiAgfVxuICByZXR1cm4gbnVtYmVyICsgb3JkaW5hbDtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSjDqHJ8bmR8ZW4pP1thXT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGFiXFwuSlxcLkN8YXByXFwuSlxcLkN8YXByXFwuSlxcLi1DKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYWJcXC5KXFwuLUN8YWJcXC5KLUN8YXByXFwuSlxcLi1DfGFwclxcLkotQ3xhcFxcLkotQykvaSxcbiAgd2lkZTogL14oYWJhbnMgSsOoc3VzLUNyaXN0fGFwcsOocyBKw6hzdXMtQ3Jpc3QpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15hYi9pLCAvXmFwL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eVFsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15bMTIzNF0ow6hyfG5kfGVuKT8gdHJpbVxcLj8vaSxcbiAgd2lkZTogL15bMTIzNF0ow6hyfG5kfGVuKT8gdHJpbcOoc3RyZS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oR058RkJ8TcOHfEFCfE1BfEpOfEpMfEFHfFNUfE9DfE5WfERDKS9pLFxuICBhYmJyZXZpYXRlZDogL14oZ2VufGZlYnJ8bWFyw6d8YWJyfG1haXxqdW5ofGp1bHxhZ3xzZXR8b2N0fG5vdnxkZWMpXFwuPy9pLFxuICB3aWRlOiAvXihnZW5pw6hyfGZlYnJpw6hyfG1hcsOnfGFicmlsfG1haXxqdW5ofGp1bGhldHxhZ29zdHxzZXRlbWJyZXxvY3TDsmJyZXxub3ZlbWJyZXxkZWNlbWJyZSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIGFueTogWy9eZy9pLCAvXmYvaSwgL15tYVtyP118TcOHL2ksIC9eYWIvaSwgL15tYVtpP10vaSwgL15qdVtuP118Sk4vaSwgL15qdVtsP118SkwvaSwgL15hZy9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXmRbZ2xtY2p2c11cXC4/L2ksXG4gIHNob3J0OiAvXmRbZ2xtY2p2c11cXC4/L2ksXG4gIGFiYnJldmlhdGVkOiAvXmRbZ2xtY2p2c11cXC4/L2ksXG4gIHdpZGU6IC9eKGRpbWVuZ2V8ZGlsdW5zfGRpbWFyc3xkaW3DqGNyZXN8ZGlqw7J1c3xkaXZlbmRyZXN8ZGlzc2FidGUpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15kZy9pLCAvXmRsL2ksIC9eZG0vaSwgL15kYy9pLCAvXmRqL2ksIC9eZHYvaSwgL15kcy9pXSxcbiAgc2hvcnQ6IFsvXmRnL2ksIC9eZGwvaSwgL15kbS9pLCAvXmRjL2ksIC9eZGovaSwgL15kdi9pLCAvXmRzL2ldLFxuICBhYmJyZXZpYXRlZDogWy9eZGcvaSwgL15kbC9pLCAvXmRtL2ksIC9eZGMvaSwgL15kai9pLCAvXmR2L2ksIC9eZHMvaV0sXG4gIGFueTogWy9eZGd8ZGltZS9pLCAvXmRsfGRpbC9pLCAvXmRtfGRpbWEvaSwgL15kY3xkaW3DqC9pLCAvXmRqfGRpai9pLCAvXmR2fGRpdi9pLCAvXmRzfGRpcy9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IC8oXihhXFwuP218cFxcLj9tKSl8KGFudGUgbWVyaWRpZW18cG9zdCBtZXJpZGllbSl8KChkZWwgfGRlIGxhIHxkZSBs4oCZKShtYXRpbnxhcHLDqHAtbWnDqGdqb3JufHbDqHNwcmV8c2VyfG51w6hjaCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC8oXmEpfGFudGUgbWVyaWRpZW0vaSxcbiAgICBwbTogLyhecCl8cG9zdCBtZXJpZGllbS9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pw6hqL2ksXG4gICAgbm9vbjogL15tacOoZy9pLFxuICAgIG1vcm5pbmc6IC9tYXRpbi9pLFxuICAgIGFmdGVybm9vbjogL2FwcsOocC1tacOoZ2pvcm4vaSxcbiAgICBldmVuaW5nOiAvdsOoc3ByZXxzZXIvaSxcbiAgICBuaWdodDogL251w6hjaC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IE9jY2l0YW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIE9jY2l0YW5cbiAqIEBpc28tNjM5LTIgb2NpXG4gKiBAYXV0aG9yIFF1ZW50aW4gUEFHw4hTXG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdvYycsXG4gIGZvcm1hdERpc3RhbmNlOiBfaW5kZXguZGVmYXVsdCxcbiAgZm9ybWF0TG9uZzogX2luZGV4Mi5kZWZhdWx0LFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4My5kZWZhdWx0LFxuICBsb2NhbGl6ZTogX2luZGV4NC5kZWZhdWx0LFxuICBtYXRjaDogX2luZGV4NS5kZWZhdWx0LFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAxIC8qIE1vbmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==