(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-ug-index-js"],{

/***/ "./node_modules/date-fns/locale/ug/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/formatDistance/index.js ***!
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
    one: 'بىر سىكۇنت ئىچىدە',
    other: 'سىكۇنت ئىچىدە {{count}}'
  },
  xSeconds: {
    one: 'بىر سىكۇنت',
    other: 'سىكۇنت {{count}}'
  },
  halfAMinute: 'يىرىم مىنۇت',
  lessThanXMinutes: {
    one: 'بىر مىنۇت ئىچىدە',
    other: 'مىنۇت ئىچىدە {{count}}'
  },
  xMinutes: {
    one: 'بىر مىنۇت',
    other: 'مىنۇت {{count}}'
  },
  aboutXHours: {
    one: 'تەخمىنەن بىر سائەت',
    other: 'سائەت {{count}} تەخمىنەن'
  },
  xHours: {
    one: 'بىر سائەت',
    other: 'سائەت {{count}}'
  },
  xDays: {
    one: 'بىر كۈن',
    other: 'كۈن {{count}}'
  },
  aboutXWeeks: {
    one: 'تەخمىنەن بىرھەپتە',
    other: 'ھەپتە {{count}} تەخمىنەن'
  },
  xWeeks: {
    one: 'بىرھەپتە',
    other: 'ھەپتە {{count}}'
  },
  aboutXMonths: {
    one: 'تەخمىنەن بىر ئاي',
    other: 'ئاي {{count}} تەخمىنەن'
  },
  xMonths: {
    one: 'بىر ئاي',
    other: 'ئاي {{count}}'
  },
  aboutXYears: {
    one: 'تەخمىنەن بىر يىل',
    other: 'يىل {{count}} تەخمىنەن'
  },
  xYears: {
    one: 'بىر يىل',
    other: 'يىل {{count}}'
  },
  overXYears: {
    one: 'بىر يىلدىن ئارتۇق',
    other: 'يىلدىن ئارتۇق {{count}}'
  },
  almostXYears: {
    one: 'ئاساسەن بىر يىل',
    other: 'يىل {{count}} ئاساسەن'
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
      return result;
    } else {
      return result + ' بولدى';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/ug/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/formatLong/index.js ***!
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
  full: "{{date}} 'دە' {{time}}",
  long: "{{date}} 'دە' {{time}}",
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

/***/ "./node_modules/date-fns/locale/ug/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'ئ‍ۆتكەن' eeee 'دە' p",
  yesterday: "'تۈنۈگۈن دە' p",
  today: "'بۈگۈن دە' p",
  tomorrow: "'ئەتە دە' p",
  nextWeek: "eeee 'دە' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/ug/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/localize/index.js ***!
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
  narrow: ['ب', 'ك'],
  abbreviated: ['ب', 'ك'],
  wide: ['مىيلادىدىن بۇرۇن', 'مىيلادىدىن كىيىن']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1', '2', '3', '4'],
  wide: ['بىرىنجى چارەك', 'ئىككىنجى چارەك', 'ئۈچىنجى چارەك', 'تۆتىنجى چارەك']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ي', 'ف', 'م', 'ا', 'م', 'ى', 'ى', 'ا', 'س', 'ۆ', 'ن', 'د'],
  abbreviated: ['يانۋار', 'فېۋىرال', 'مارت', 'ئاپرىل', 'ماي', 'ئىيۇن', 'ئىيول', 'ئاۋغۇست', 'سىنتەبىر', 'ئۆكتەبىر', 'نويابىر', 'دىكابىر'],
  wide: ['يانۋار', 'فېۋىرال', 'مارت', 'ئاپرىل', 'ماي', 'ئىيۇن', 'ئىيول', 'ئاۋغۇست', 'سىنتەبىر', 'ئۆكتەبىر', 'نويابىر', 'دىكابىر']
};
var dayValues = {
  narrow: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  short: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  abbreviated: ['يەكشەنبە', 'دۈشەنبە', 'سەيشەنبە', 'چارشەنبە', 'پەيشەنبە', 'جۈمە', 'شەنبە'],
  wide: ['يەكشەنبە', 'دۈشەنبە', 'سەيشەنبە', 'چارشەنبە', 'پەيشەنبە', 'جۈمە', 'شەنبە']
};
var dayPeriodValues = {
  narrow: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  },
  abbreviated: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  },
  wide: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەن',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشىم',
    night: 'كىچە'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
  },
  abbreviated: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
  },
  wide: {
    am: 'ئە',
    pm: 'چ',
    midnight: 'ك',
    noon: 'چ',
    morning: 'ئەتىگەندە',
    afternoon: 'چۈشتىن كىيىن',
    evening: 'ئاخشامدا',
    night: 'كىچىدە'
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

/***/ "./node_modules/date-fns/locale/ug/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ب|ك)/i,
  wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i
};
var parseEraPatterns = {
  any: [/^بۇرۇن/i, /^كىيىن/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^چ[1234]/i,
  wide: /^چارەك [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[يفمئامئ‍ئاسۆند]/i,
  abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
  wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i
};
var parseMonthPatterns = {
  narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i],
  any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i]
};
var matchDayPatterns = {
  narrow: /^[دسچپجشي]/i,
  short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i
};
var parseDayPatterns = {
  narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
  any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ئە/i,
    pm: /^چ/i,
    midnight: /^ك/i,
    noon: /^چ/i,
    morning: /ئەتىگەن/i,
    afternoon: /چۈشتىن كىيىن/i,
    evening: /ئاخشىم/i,
    night: /كىچە/i
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

/***/ "./node_modules/date-fns/locale/ug/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/ug/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/ug/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/ug/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/ug/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/ug/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Uighur locale
 * @language Uighur
 * @iso-639-2 uig
 * @author Abduwaly M. [@abduwaly]{@link https://github.com/abduwaly}
 */
var locale = {
  code: 'ug',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VnL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS91Zy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS91Zy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvdWcvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VnL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS91Zy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNI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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQzFHYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM1RSxxQ0FBcUMsbUJBQU8sQ0FBQyw4RkFBNEI7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsc0dBQWdDO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDBGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvRkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoidmVuZG9yc35kYXRlLWZucy1sb2NhbGUtdWctaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2LPZidmD24fZhtiqINim2YnahtmJ2K/blScsXG4gICAgb3RoZXI6ICfYs9mJ2YPbh9mG2Kog2KbZidqG2YnYr9uVIHt7Y291bnR9fSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2LPZidmD24fZhtiqJyxcbiAgICBvdGhlcjogJ9iz2YnZg9uH2YbYqiB7e2NvdW50fX0nXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn2YrZidix2YnZhSDZhdmJ2Ybbh9iqJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ9io2YnYsSDZhdmJ2Ybbh9iqINim2YnahtmJ2K/blScsXG4gICAgb3RoZXI6ICfZhdmJ2Ybbh9iqINim2YnahtmJ2K/blSB7e2NvdW50fX0nXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAn2KjZidixINmF2YnZhtuH2KonLFxuICAgIG90aGVyOiAn2YXZidmG24fYqiB7e2NvdW50fX0nXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn2Krbldiu2YXZidmG25XZhiDYqNmJ2LEg2LPYp9im25XYqicsXG4gICAgb3RoZXI6ICfYs9in2KbbldiqIHt7Y291bnR9fSDYqtuV2K7ZhdmJ2YbbldmGJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2LPYp9im25XYqicsXG4gICAgb3RoZXI6ICfYs9in2KbbldiqIHt7Y291bnR9fSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2YPbiNmGJyxcbiAgICBvdGhlcjogJ9mD24jZhiB7e2NvdW50fX0nXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn2Krbldiu2YXZidmG25XZhiDYqNmJ2LHavtuV2b7YqtuVJyxcbiAgICBvdGhlcjogJ9q+25XZvtiq25Uge3tjb3VudH19INiq25XYrtmF2YnZhtuV2YYnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJ9io2YnYsdq+25XZvtiq25UnLFxuICAgIG90aGVyOiAn2r7bldm+2KrblSB7e2NvdW50fX0nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9iq25XYrtmF2YnZhtuV2YYg2KjZidixINim2KfZiicsXG4gICAgb3RoZXI6ICfYptin2Yoge3tjb3VudH19INiq25XYrtmF2YnZhtuV2YYnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2KbYp9mKJyxcbiAgICBvdGhlcjogJ9im2KfZiiB7e2NvdW50fX0nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn2Krbldiu2YXZidmG25XZhiDYqNmJ2LEg2YrZidmEJyxcbiAgICBvdGhlcjogJ9mK2YnZhCB7e2NvdW50fX0g2Krbldiu2YXZidmG25XZhidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAn2KjZidixINmK2YnZhCcsXG4gICAgb3RoZXI6ICfZitmJ2YQge3tjb3VudH19J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn2KjZidixINmK2YnZhNiv2YnZhiDYptin2LHYqtuH2YInLFxuICAgIG90aGVyOiAn2YrZidmE2K/ZidmGINim2KfYsdiq24fZgiB7e2NvdW50fX0nXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ9im2KfYs9in2LPbldmGINio2YnYsSDZitmJ2YQnLFxuICAgIG90aGVyOiAn2YrZidmEIHt7Y291bnR9fSDYptin2LPYp9iz25XZhidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg2KjZiNmE2K/ZiSc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAn2K/blScge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAn2K/blScge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCIn2KbigI3bhtiq2YPbldmGJyBlZWVlICfYr9uVJyBwXCIsXG4gIHllc3RlcmRheTogXCIn2KrbiNmG24jar9uI2YYg2K/blScgcFwiLFxuICB0b2RheTogXCIn2KjbiNqv24jZhiDYr9uVJyBwXCIsXG4gIHRvbW9ycm93OiBcIifYptuV2KrblSDYr9uVJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ9iv25UnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9ioJywgJ9mDJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9ioJywgJ9mDJ10sXG4gIHdpZGU6IFsn2YXZidmK2YTYp9iv2YnYr9mJ2YYg2Kjbh9ix24fZhicsICfZhdmJ2YrZhNin2K/Zidiv2YnZhiDZg9mJ2YrZidmGJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICB3aWRlOiBbJ9io2YnYsdmJ2YbYrNmJINqG2KfYsduV2YMnLCAn2KbZidmD2YPZidmG2KzZiSDahtin2LHbldmDJywgJ9im24jahtmJ2YbYrNmJINqG2KfYsduV2YMnLCAn2Krbhtiq2YnZhtis2Ykg2obYp9ix25XZgyddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfZiicsICfZgScsICfZhScsICfYpycsICfZhScsICfZiScsICfZiScsICfYpycsICfYsycsICfbhicsICfZhicsICfYryddLFxuICBhYmJyZXZpYXRlZDogWyfZitin2Ybbi9in2LEnLCAn2YHbkNuL2YnYsdin2YQnLCAn2YXYp9ix2KonLCAn2KbYp9m+2LHZidmEJywgJ9mF2KfZiicsICfYptmJ2Yrbh9mGJywgJ9im2YnZitmI2YQnLCAn2KbYp9uL2Lrbh9iz2KonLCAn2LPZidmG2Krbldio2YnYsScsICfYptuG2YPYqtuV2KjZidixJywgJ9mG2YjZitin2KjZidixJywgJ9iv2YnZg9in2KjZidixJ10sXG4gIHdpZGU6IFsn2YrYp9mG24vYp9ixJywgJ9mB25Dbi9mJ2LHYp9mEJywgJ9mF2KfYsdiqJywgJ9im2KfZvtix2YnZhCcsICfZhdin2YonLCAn2KbZidmK24fZhicsICfYptmJ2YrZiNmEJywgJ9im2Kfbi9i624fYs9iqJywgJ9iz2YnZhtiq25XYqNmJ2LEnLCAn2KbbhtmD2Krbldio2YnYsScsICfZhtmI2YrYp9io2YnYsScsICfYr9mJ2YPYp9io2YnYsSddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9mKJywgJ9ivJywgJ9izJywgJ9qGJywgJ9m+JywgJ9isJywgJ9i0J10sXG4gIHNob3J0OiBbJ9mKJywgJ9ivJywgJ9izJywgJ9qGJywgJ9m+JywgJ9isJywgJ9i0J10sXG4gIGFiYnJldmlhdGVkOiBbJ9mK25XZg9i025XZhtio25UnLCAn2K/biNi025XZhtio25UnLCAn2LPbldmK2LTbldmG2KjblScsICfahtin2LHYtNuV2YbYqNuVJywgJ9m+25XZiti025XZhtio25UnLCAn2KzbiNmF25UnLCAn2LTbldmG2KjblSddLFxuICB3aWRlOiBbJ9mK25XZg9i025XZhtio25UnLCAn2K/biNi025XZhtio25UnLCAn2LPbldmK2LTbldmG2KjblScsICfahtin2LHYtNuV2YbYqNuVJywgJ9m+25XZiti025XZhtio25UnLCAn2KzbiNmF25UnLCAn2LTbldmG2KjblSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfYptuVJyxcbiAgICBwbTogJ9qGJyxcbiAgICBtaWRuaWdodDogJ9mDJyxcbiAgICBub29uOiAn2oYnLFxuICAgIG1vcm5pbmc6ICfYptuV2KrZidqv25XZhicsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNmJ2YUnLFxuICAgIG5pZ2h0OiAn2YPZidqG25UnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfYptuVJyxcbiAgICBwbTogJ9qGJyxcbiAgICBtaWRuaWdodDogJ9mDJyxcbiAgICBub29uOiAn2oYnLFxuICAgIG1vcm5pbmc6ICfYptuV2KrZidqv25XZhicsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNmJ2YUnLFxuICAgIG5pZ2h0OiAn2YPZidqG25UnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9im25UnLFxuICAgIHBtOiAn2oYnLFxuICAgIG1pZG5pZ2h0OiAn2YMnLFxuICAgIG5vb246ICfahicsXG4gICAgbW9ybmluZzogJ9im25XYqtmJ2q/bldmGJyxcbiAgICBhZnRlcm5vb246ICfahtuI2LTYqtmJ2YYg2YPZidmK2YnZhicsXG4gICAgZXZlbmluZzogJ9im2KfYrti02YnZhScsXG4gICAgbmlnaHQ6ICfZg9mJ2obblSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9im25UnLFxuICAgIHBtOiAn2oYnLFxuICAgIG1pZG5pZ2h0OiAn2YMnLFxuICAgIG5vb246ICfahicsXG4gICAgbW9ybmluZzogJ9im25XYqtmJ2q/bldmG2K/blScsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNin2YXYr9inJyxcbiAgICBuaWdodDogJ9mD2YnahtmJ2K/blSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9im25UnLFxuICAgIHBtOiAn2oYnLFxuICAgIG1pZG5pZ2h0OiAn2YMnLFxuICAgIG5vb246ICfahicsXG4gICAgbW9ybmluZzogJ9im25XYqtmJ2q/bldmG2K/blScsXG4gICAgYWZ0ZXJub29uOiAn2obbiNi02KrZidmGINmD2YnZitmJ2YYnLFxuICAgIGV2ZW5pbmc6ICfYptin2K7YtNin2YXYr9inJyxcbiAgICBuaWdodDogJ9mD2YnahtmJ2K/blSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn2KbblScsXG4gICAgcG06ICfahicsXG4gICAgbWlkbmlnaHQ6ICfZgycsXG4gICAgbm9vbjogJ9qGJyxcbiAgICBtb3JuaW5nOiAn2Kbbldiq2Ynar9uV2YbYr9uVJyxcbiAgICBhZnRlcm5vb246ICfahtuI2LTYqtmJ2YYg2YPZidmK2YnZhicsXG4gICAgZXZlbmluZzogJ9im2KfYrti02KfZhdiv2KcnLFxuICAgIG5pZ2h0OiAn2YPZidqG2YnYr9uVJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijYqHzZgykvaSxcbiAgd2lkZTogL14o2YXZidmK2YTYp9iv2YnYr9mJ2YYg2Kjbh9ix24fZhnzZhdmJ2YrZhNin2K/Zidiv2YnZhiDZg9mJ2YrZidmGKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9e2Kjbh9ix24fZhi9pLCAvXtmD2YnZitmJ2YYvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9e2oZbMTIzNF0vaSxcbiAgd2lkZTogL17ahtin2LHbldmDIFsxMjM0XS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1taXNsZWFkaW5nLWNoYXJhY3Rlci1jbGFzc1xuICBuYXJyb3c6IC9eW9mK2YHZhdim2KfZhdim4oCN2KbYp9iz24bZhtivXS9pLFxuICBhYmJyZXZpYXRlZDogL14o2YrYp9mG24vYp9ixfNmB25Dbi9mJ2LHYp9mEfNmF2KfYsdiqfNim2KfZvtix2YnZhHzZhdin2Yp82KbZidmK24fZhnzYptmJ2YrZiNmEfNim2Kfbi9i624fYs9iqfNiz2YnZhtiq25XYqNmJ2LF82KbbhtmD2Krbldio2YnYsXzZhtmI2YrYp9io2YnYsXzYr9mJ2YPYp9io2YnYsSkvaSxcbiAgd2lkZTogL14o2YrYp9mG24vYp9ixfNmB25Dbi9mJ2LHYp9mEfNmF2KfYsdiqfNim2KfZvtix2YnZhHzZhdin2Yp82KbZidmK24fZhnzYptmJ2YrZiNmEfNim2Kfbi9i624fYs9iqfNiz2YnZhtiq25XYqNmJ2LF82KbbhtmD2Krbldio2YnYsXzZhtmI2YrYp9io2YnYsXzYr9mJ2YPYp9io2YnYsSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e2YovaSwgL17ZgS9pLCAvXtmFL2ksIC9e2KcvaSwgL17ZhS9pLCAvXtmJ4oCNL2ksIC9e2YnigI0vaSwgL17Yp+KAjS9pLCAvXtizL2ksIC9e24YvaSwgL17Zhi9pLCAvXtivL2ldLFxuICBhbnk6IFsvXtmK2KfZhi9pLCAvXtmB25Dbiy9pLCAvXtmF2KfYsS9pLCAvXtim2KfZvi9pLCAvXtmF2KfZii9pLCAvXtim2YnZituH2YYvaSwgL17YptmJ2YrZiNmEL2ksIC9e2KbYp9uLL2ksIC9e2LPZidmGL2ksIC9e2KbbhtmDL2ksIC9e2YbZiNmKL2ksIC9e2K/ZidmDL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b2K/Ys9qG2b7YrNi02YpdL2ksXG4gIHNob3J0OiAvXijZituVfNiv24h82LPblXzahtinfNm+25V82KzbiHzYtNuVKS9pLFxuICBhYmJyZXZpYXRlZDogL14o2YrblXzYr9uIfNiz25V82obYp3zZvtuVfNis24h82LTblSkvaSxcbiAgd2lkZTogL14o2YrbldmD2LTbldmG2KjblXzYr9uI2LTbldmG2KjblXzYs9uV2YrYtNuV2YbYqNuVfNqG2KfYsdi025XZhtio25V82b7bldmK2LTbldmG2KjblXzYrNuI2YXblXzYtNuV2YbYqNuVKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e2YovaSwgL17Yry9pLCAvXtizL2ksIC9e2oYvaSwgL17Zvi9pLCAvXtisL2ksIC9e2LQvaV0sXG4gIGFueTogWy9e2YovaSwgL17Yry9pLCAvXtizL2ksIC9e2oYvaSwgL17Zvi9pLCAvXtisL2ksIC9e2LQvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijYptuVfNqGfNmDfNqGfCjYr9uVfNim25XYqtmJ2q/bldmGKSAoINim25XigI182obbiNi02KrZidmGINmD2YnZitmJ2YZ82KbYp9iu2LTZidmFfNmD2YnahtuVKSkvaSxcbiAgYW55OiAvXijYptuVfNqGfNmDfNqGfCjYr9uVfNim25XYqtmJ2q/bldmGKSAoINim25XigI182obbiNi02KrZidmGINmD2YnZitmJ2YZ82KbYp9iu2LTZidmFfNmD2YnahtuVKSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL17YptuVL2ksXG4gICAgcG06IC9e2oYvaSxcbiAgICBtaWRuaWdodDogL17Zgy9pLFxuICAgIG5vb246IC9e2oYvaSxcbiAgICBtb3JuaW5nOiAv2Kbbldiq2Ynar9uV2YYvaSxcbiAgICBhZnRlcm5vb246IC/ahtuI2LTYqtmJ2YYg2YPZidmK2YnZhi9pLFxuICAgIGV2ZW5pbmc6IC/Yptin2K7YtNmJ2YUvaSxcbiAgICBuaWdodDogL9mD2YnahtuVL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgVWlnaHVyIGxvY2FsZVxuICogQGxhbmd1YWdlIFVpZ2h1clxuICogQGlzby02MzktMiB1aWdcbiAqIEBhdXRob3IgQWJkdXdhbHkgTS4gW0BhYmR1d2FseV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2FiZHV3YWx5fVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAndWcnLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=