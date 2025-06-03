(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-bg-index-js"],{

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

/***/ "./node_modules/date-fns/locale/bg/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/formatDistance/index.js ***!
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
    one: 'по-малко от секунда',
    other: 'по-малко от {{count}} секунди'
  },
  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },
  halfAMinute: 'половин минута',
  lessThanXMinutes: {
    one: 'по-малко от минута',
    other: 'по-малко от {{count}} минути'
  },
  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },
  aboutXHours: {
    one: 'около час',
    other: 'около {{count}} часа'
  },
  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },
  xDays: {
    one: '1 ден',
    other: '{{count}} дни'
  },
  aboutXWeeks: {
    one: 'около седмица',
    other: 'около {{count}} седмици'
  },
  xWeeks: {
    one: '1 седмица',
    other: '{{count}} седмици'
  },
  aboutXMonths: {
    one: 'около месец',
    other: 'около {{count}} месеца'
  },
  xMonths: {
    one: '1 месец',
    other: '{{count}} месеца'
  },
  aboutXYears: {
    one: 'около година',
    other: 'около {{count}} години'
  },
  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },
  overXYears: {
    one: 'над година',
    other: 'над {{count}} години'
  },
  almostXYears: {
    one: 'почти година',
    other: 'почти {{count}} години'
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
      return 'след ' + result;
    } else {
      return 'преди ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bg/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/formatLong/index.js ***!
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
  full: 'EEEE, dd MMMM yyyy',
  long: 'dd MMMM yyyy',
  medium: 'dd MMM yyyy',
  short: 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  any: '{{date}} {{time}}'
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
    defaultWidth: 'any'
  })
};
var _default = formatLong;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bg/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../../toDate/index.js */ "./node_modules/date-fns/toDate/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
// Adapted from the `ru` translation

var weekdays = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
function lastWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'миналата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'миналия " + weekday + " в' p";
  }
}
function thisWeek(day) {
  var weekday = weekdays[day];
  if (day === 2 /* Tue */) {
    return "'във " + weekday + " в' p";
  } else {
    return "'в " + weekday + " в' p";
  }
}
function nextWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следващата " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следващия " + weekday + " в' p";
  }
}
var lastWeekFormatToken = function lastWeekFormatToken(dirtyDate, baseDate, options) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormatToken = function nextWeekFormatToken(dirtyDate, baseDate, options) {
  var date = (0, _index.default)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormatToken,
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: nextWeekFormatToken,
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

/***/ "./node_modules/date-fns/locale/bg/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/localize/index.js ***!
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
  narrow: ['пр.н.е.', 'н.е.'],
  abbreviated: ['преди н. е.', 'н. е.'],
  wide: ['преди новата ера', 'новата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-во тримес.', '2-ро тримес.', '3-то тримес.', '4-то тримес.'],
  wide: ['1-во тримесечие', '2-ро тримесечие', '3-то тримесечие', '4-то тримесечие']
};
var monthValues = {
  abbreviated: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
};
var dayPeriodValues = {
  wide: {
    am: 'преди обяд',
    pm: 'след обяд',
    midnight: 'в полунощ',
    noon: 'на обяд',
    morning: 'сутринта',
    afternoon: 'следобед',
    evening: 'вечерта',
    night: 'през нощта'
  }
};
function isFeminine(unit) {
  return unit === 'year' || unit === 'week' || unit === 'minute' || unit === 'second';
}
function isNeuter(unit) {
  return unit === 'quarter';
}
function numberWithSuffix(number, unit, masculine, feminine, neuter) {
  var suffix = isNeuter(unit) ? neuter : isFeminine(unit) ? feminine : masculine;
  return number + '-' + suffix;
}
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (number === 0) {
    return numberWithSuffix(0, unit, 'ев', 'ева', 'ево');
  } else if (number % 1000 === 0) {
    return numberWithSuffix(number, unit, 'ен', 'на', 'но');
  } else if (number % 100 === 0) {
    return numberWithSuffix(number, unit, 'тен', 'тна', 'тно');
  }
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return numberWithSuffix(number, unit, 'ви', 'ва', 'во');
      case 2:
        return numberWithSuffix(number, unit, 'ри', 'ра', 'ро');
      case 7:
      case 8:
        return numberWithSuffix(number, unit, 'ми', 'ма', 'мо');
    }
  }
  return numberWithSuffix(number, unit, 'ти', 'та', 'то');
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
    defaultWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/bg/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((пр)?н\.?\s?е\.?)/i,
  abbreviated: /^((пр)?н\.?\s?е\.?)/i,
  wide: /^(преди новата ера|новата ера|нова ера)/i
};
var parseEraPatterns = {
  any: [/^п/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
  wide: /^[1234](-?[врт]?о?)? тримесечие/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchDayPatterns = {
  narrow: /^[нпвсч]/i,
  short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
  abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
  wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i]
};
var matchMonthPatterns = {
  abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
  wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i
};
var parseMonthPatterns = {
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
};
var matchDayPeriodPatterns = {
  any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^преди о/i,
    pm: /^след о/i,
    midnight: /^в пол/i,
    noon: /^на об/i,
    morning: /^сут/i,
    afternoon: /^следо/i,
    evening: /^веч/i,
    night: /^през н/i
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

/***/ "./node_modules/date-fns/locale/bg/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/bg/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/bg/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/bg/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/bg/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/bg/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Bulgarian locale.
 * @language Bulgarian
 * @iso-639-2 bul
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 * @author Tsvetan Ovedenski [@fintara]{@link https://github.com/fintara}
 */
var locale = {
  code: 'bg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvYmcvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JnL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JnL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9iZy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvYmcvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JnL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG9GQUEwQjtBQUN0RSxxQ0FBcUMsbUJBQU8sQ0FBQyx3RkFBNEI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FB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O0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQWdDO0FBQzVFLHFDQUFxQyxtQkFBTyxDQUFDLDhGQUE0QjtBQUN6RSxxQ0FBcUMsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDN0UscUNBQXFDLG1CQUFPLENBQUMsMEZBQTBCO0FBQ3ZFLHFDQUFxQyxtQkFBTyxDQUFDLG9GQUF1QjtBQUNwRTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoidmVuZG9yc35kYXRlLWZucy1sb2NhbGUtYmctaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTYW1lVVRDV2VlaztcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiKSk7XG5mdW5jdGlvbiBpc1NhbWVVVENXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gICgwLCBfaW5kZXguZGVmYXVsdCkoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSAoMCwgX2luZGV4Mi5kZWZhdWx0KShkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn0L/Qvi3QvNCw0LvQutC+INC+0YIg0YHQtdC60YPQvdC00LAnLFxuICAgIG90aGVyOiAn0L/Qvi3QvNCw0LvQutC+INC+0YIge3tjb3VudH19INGB0LXQutGD0L3QtNC4J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEg0YHQtdC60YPQvdC00LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGB0LXQutGD0L3QtNC4J1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ9C/0L7Qu9C+0LLQuNC9INC80LjQvdGD0YLQsCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfQv9C+LdC80LDQu9C60L4g0L7RgiDQvNC40L3Rg9GC0LAnLFxuICAgIG90aGVyOiAn0L/Qvi3QvNCw0LvQutC+INC+0YIge3tjb3VudH19INC80LjQvdGD0YLQuCdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxINC80LjQvdGD0YLQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQuNC90YPRgtC4J1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9C+0LrQvtC70L4g0YfQsNGBJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70L4ge3tjb3VudH19INGH0LDRgdCwJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxINGH0LDRgScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YfQsNGB0LAnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDQtNC10L0nLFxuICAgIG90aGVyOiAne3tjb3VudH19INC00L3QuCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfQvtC60L7Qu9C+INGB0LXQtNC80LjRhtCwJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70L4ge3tjb3VudH19INGB0LXQtNC80LjRhtC4J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxINGB0LXQtNC80LjRhtCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdC10LTQvNC40YbQuCdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn0L7QutC+0LvQviDQvNC10YHQtdGGJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70L4ge3tjb3VudH19INC80LXRgdC10YbQsCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg0LzQtdGB0LXRhicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQtdGB0LXRhtCwJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ9C+0LrQvtC70L4g0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70L4ge3tjb3VudH19INCz0L7QtNC40L3QuCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDQs9C+0LTQuNC90LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INCz0L7QtNC40L3QuCdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ9C90LDQtCDQs9C+0LTQuNC90LAnLFxuICAgIG90aGVyOiAn0L3QsNC0IHt7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ9C/0L7Rh9GC0Lgg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ9C/0L7Rh9GC0Lgge3tjb3VudH19INCz0L7QtNC40L3QuCdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfRgdC70LXQtCAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9C/0YDQtdC00LggJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZGQgTU1NTSB5eXl5JyxcbiAgbG9uZzogJ2RkIE1NTU0geXl5eScsXG4gIG1lZGl1bTogJ2RkIE1NTSB5eXl5JyxcbiAgc2hvcnQ6ICdkZC9NTS95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdIOm1tJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGFueTogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90b0RhdGUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xuLy8gQWRhcHRlZCBmcm9tIHRoZSBgcnVgIHRyYW5zbGF0aW9uXG5cbnZhciB3ZWVrZGF5cyA9IFsn0L3QtdC00LXQu9GPJywgJ9C/0L7QvdC10LTQtdC70L3QuNC6JywgJ9Cy0YLQvtGA0L3QuNC6JywgJ9GB0YDRj9C00LAnLCAn0YfQtdGC0LLRitGA0YLRitC6JywgJ9C/0LXRgtGK0LonLCAn0YHRitCx0L7RgtCwJ107XG5mdW5jdGlvbiBsYXN0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXldO1xuICBzd2l0Y2ggKGRheSkge1xuICAgIGNhc2UgMDpcbiAgICBjYXNlIDM6XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiJ9C80LjQvdCw0LvQsNGC0LAgXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0LzQuNC90LDQu9C40Y8gXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gd2Vla2RheXNbZGF5XTtcbiAgaWYgKGRheSA9PT0gMiAvKiBUdWUgKi8pIHtcbiAgICByZXR1cm4gXCIn0LLRitCyIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiJ9CyIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIG5leHRXZWVrKGRheSkge1xuICB2YXIgd2Vla2RheSA9IHdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQstCw0YnQsNGC0LAgXCIgKyB3ZWVrZGF5ICsgXCIg0LInIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQstCw0YnQuNGPIFwiICsgd2Vla2RheSArIFwiINCyJyBwXCI7XG4gIH1cbn1cbnZhciBsYXN0V2Vla0Zvcm1hdFRva2VuID0gZnVuY3Rpb24gbGFzdFdlZWtGb3JtYXRUb2tlbihkaXJ0eURhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkYXRlID0gKDAsIF9pbmRleC5kZWZhdWx0KShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsYXN0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIG5leHRXZWVrRm9ybWF0VG9rZW4gPSBmdW5jdGlvbiBuZXh0V2Vla0Zvcm1hdFRva2VuKGRpcnR5RGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSAoMCwgX2luZGV4LmRlZmF1bHQpKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICBpZiAoKDAsIF9pbmRleDIuZGVmYXVsdCkoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHRoaXNXZWVrKGRheSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5leHRXZWVrKGRheSk7XG4gIH1cbn07XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBsYXN0V2Vla0Zvcm1hdFRva2VuLFxuICB5ZXN0ZXJkYXk6IFwiJ9Cy0YfQtdGA0LAg0LInIHBcIixcbiAgdG9kYXk6IFwiJ9C00L3QtdGBINCyJyBwXCIsXG4gIHRvbW9ycm93OiBcIifRg9GC0YDQtSDQsicgcFwiLFxuICBuZXh0V2VlazogbmV4dFdlZWtGb3JtYXRUb2tlbixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0L/RgC7QvS7QtS4nLCAn0L0u0LUuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9C/0YDQtdC00Lgg0L0uINC1LicsICfQvS4g0LUuJ10sXG4gIHdpZGU6IFsn0L/RgNC10LTQuCDQvdC+0LLQsNGC0LAg0LXRgNCwJywgJ9C90L7QstCw0YLQsCDQtdGA0LAnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdCy0L4g0YLRgNC40LzQtdGBLicsICcyLdGA0L4g0YLRgNC40LzQtdGBLicsICczLdGC0L4g0YLRgNC40LzQtdGBLicsICc0LdGC0L4g0YLRgNC40LzQtdGBLiddLFxuICB3aWRlOiBbJzEt0LLQviDRgtGA0LjQvNC10YHQtdGH0LjQtScsICcyLdGA0L4g0YLRgNC40LzQtdGB0LXRh9C40LUnLCAnMy3RgtC+INGC0YDQuNC80LXRgdC10YfQuNC1JywgJzQt0YLQviDRgtGA0LjQvNC10YHQtdGH0LjQtSddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBhYmJyZXZpYXRlZDogWyfRj9C90YMnLCAn0YTQtdCyJywgJ9C80LDRgCcsICfQsNC/0YAnLCAn0LzQsNC5JywgJ9GO0L3QuCcsICfRjtC70LgnLCAn0LDQstCzJywgJ9GB0LXQvycsICfQvtC60YInLCAn0L3QvtC1JywgJ9C00LXQuiddLFxuICB3aWRlOiBbJ9GP0L3Rg9Cw0YDQuCcsICfRhNC10LLRgNGD0LDRgNC4JywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNC5JywgJ9GO0L3QuCcsICfRjtC70LgnLCAn0LDQstCz0YPRgdGCJywgJ9GB0LXQv9GC0LXQvNCy0YDQuCcsICfQvtC60YLQvtC80LLRgNC4JywgJ9C90L7QtdC80LLRgNC4JywgJ9C00LXQutC10LzQstGA0LgnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQnScsICfQnycsICfQkicsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICBzaG9ydDogWyfQvdC0JywgJ9C/0L0nLCAn0LLRgicsICfRgdGAJywgJ9GH0YInLCAn0L/RgicsICfRgdCxJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9C90LXQtCcsICfQv9C+0L0nLCAn0LLRgtC+JywgJ9GB0YDRjycsICfRh9C10YInLCAn0L/QtdGCJywgJ9GB0YrQsSddLFxuICB3aWRlOiBbJ9C90LXQtNC10LvRjycsICfQv9C+0L3QtdC00LXQu9C90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0Y/QtNCwJywgJ9GH0LXRgtCy0YrRgNGC0YrQuicsICfQv9C10YLRitC6JywgJ9GB0YrQsdC+0YLQsCddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgd2lkZToge1xuICAgIGFtOiAn0L/RgNC10LTQuCDQvtCx0Y/QtCcsXG4gICAgcG06ICfRgdC70LXQtCDQvtCx0Y/QtCcsXG4gICAgbWlkbmlnaHQ6ICfQsiDQv9C+0LvRg9C90L7RiScsXG4gICAgbm9vbjogJ9C90LAg0L7QsdGP0LQnLFxuICAgIG1vcm5pbmc6ICfRgdGD0YLRgNC40L3RgtCwJyxcbiAgICBhZnRlcm5vb246ICfRgdC70LXQtNC+0LHQtdC0JyxcbiAgICBldmVuaW5nOiAn0LLQtdGH0LXRgNGC0LAnLFxuICAgIG5pZ2h0OiAn0L/RgNC10Lcg0L3QvtGJ0YLQsCdcbiAgfVxufTtcbmZ1bmN0aW9uIGlzRmVtaW5pbmUodW5pdCkge1xuICByZXR1cm4gdW5pdCA9PT0gJ3llYXInIHx8IHVuaXQgPT09ICd3ZWVrJyB8fCB1bml0ID09PSAnbWludXRlJyB8fCB1bml0ID09PSAnc2Vjb25kJztcbn1cbmZ1bmN0aW9uIGlzTmV1dGVyKHVuaXQpIHtcbiAgcmV0dXJuIHVuaXQgPT09ICdxdWFydGVyJztcbn1cbmZ1bmN0aW9uIG51bWJlcldpdGhTdWZmaXgobnVtYmVyLCB1bml0LCBtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpIHtcbiAgdmFyIHN1ZmZpeCA9IGlzTmV1dGVyKHVuaXQpID8gbmV1dGVyIDogaXNGZW1pbmluZSh1bml0KSA/IGZlbWluaW5lIDogbWFzY3VsaW5lO1xuICByZXR1cm4gbnVtYmVyICsgJy0nICsgc3VmZml4O1xufVxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIG51bWJlcldpdGhTdWZmaXgoMCwgdW5pdCwgJ9C10LInLCAn0LXQstCwJywgJ9C10LLQvicpO1xuICB9IGVsc2UgaWYgKG51bWJlciAlIDEwMDAgPT09IDApIHtcbiAgICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfQtdC9JywgJ9C90LAnLCAn0L3QvicpO1xuICB9IGVsc2UgaWYgKG51bWJlciAlIDEwMCA9PT0gMCkge1xuICAgIHJldHVybiBudW1iZXJXaXRoU3VmZml4KG51bWJlciwgdW5pdCwgJ9GC0LXQvScsICfRgtC90LAnLCAn0YLQvdC+Jyk7XG4gIH1cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfQstC4JywgJ9Cy0LAnLCAn0LLQvicpO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfRgNC4JywgJ9GA0LAnLCAn0YDQvicpO1xuICAgICAgY2FzZSA3OlxuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfQvNC4JywgJ9C80LAnLCAn0LzQvicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyV2l0aFN1ZmZpeChudW1iZXIsIHVuaXQsICfRgtC4JywgJ9GC0LAnLCAn0YLQvicpO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKC0/W9Cy0YDQvNGCXVvQsNC4XXwtP9GCPyjQtdC9fNC90LApfC0/KNC10LJ80LXQstCwKSk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXigo0L/RgCk/0L1cXC4/XFxzP9C1XFwuPykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKCjQv9GAKT/QvVxcLj9cXHM/0LVcXC4/KS9pLFxuICB3aWRlOiAvXijQv9GA0LXQtNC4INC90L7QstCw0YLQsCDQtdGA0LB80L3QvtCy0LDRgtCwINC10YDQsHzQvdC+0LLQsCDQtdGA0LApL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL17Qvy9pLCAvXtC9L2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXlsxMjM0XSgtP1vQstGA0YJdP28/KT8g0YLRgNC40LzQtdGBLj8vaSxcbiAgd2lkZTogL15bMTIzNF0oLT9b0LLRgNGCXT/Qvj8pPyDRgtGA0LjQvNC10YHQtdGH0LjQtS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW9C90L/QstGB0YddL2ksXG4gIHNob3J0OiAvXijQvdC0fNC/0L180LLRgnzRgdGAfNGH0YJ80L/RgnzRgdCxKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L3QtdC0fNC/0L7QvXzQstGC0L580YHRgNGPfNGH0LXRgnzQv9C10YJ80YHRitCxKS9pLFxuICB3aWRlOiAvXijQvdC10LTQtdC70Y980L/QvtC90LXQtNC10LvQvdC40Lp80LLRgtC+0YDQvdC40Lp80YHRgNGP0LTQsHzRh9C10YLQstGK0YDRgtGK0Lp80L/QtdGC0YrQunzRgdGK0LHQvtGC0LApL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17QvS9pLCAvXtC/L2ksIC9e0LIvaSwgL17RgS9pLCAvXtGHL2ksIC9e0L8vaSwgL17RgS9pXSxcbiAgYW55OiBbL17QvVvQtdC0XS9pLCAvXtC/W9C+0L1dL2ksIC9e0LLRgi9pLCAvXtGB0YAvaSwgL17Rh1vQtdGCXS9pLCAvXtC/W9C10YJdL2ksIC9e0YFb0YrQsV0vaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBhYmJyZXZpYXRlZDogL14o0Y/QvdGDfNGE0LXQsnzQvNCw0YB80LDQv9GAfNC80LDQuXzRjtC90Lh80Y7Qu9C4fNCw0LLQs3zRgdC10L980L7QutGCfNC90L7QtXzQtNC10LopL2ksXG4gIHdpZGU6IC9eKNGP0L3Rg9Cw0YDQuHzRhNC10LLRgNGD0LDRgNC4fNC80LDRgNGCfNCw0L/RgNC40Lt80LzQsNC5fNGO0L3QuHzRjtC70Lh80LDQstCz0YPRgdGCfNGB0LXQv9GC0LXQvNCy0YDQuHzQvtC60YLQvtC80LLRgNC4fNC90L7QtdC80LLRgNC4fNC00LXQutC10LzQstGA0LgpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtGPL2ksIC9e0YQvaSwgL17QvNCw0YAvaSwgL17QsNC/L2ksIC9e0LzQsNC5L2ksIC9e0Y7QvS9pLCAvXtGO0LsvaSwgL17QsNCyL2ksIC9e0YHQtS9pLCAvXtC+0LrRgi9pLCAvXtC90L4vaSwgL17QtNC1L2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueTogL14o0L/RgNC10LTQuCDQvnzRgdC70LXQtCDQvnzQsiDQv9C+fNC90LAg0L580L/RgNC10Ld80LLQtdGHfNGB0YPRgnzRgdC70LXQtNC+KS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXtC/0YDQtdC00Lgg0L4vaSxcbiAgICBwbTogL17RgdC70LXQtCDQvi9pLFxuICAgIG1pZG5pZ2h0OiAvXtCyINC/0L7Quy9pLFxuICAgIG5vb246IC9e0L3QsCDQvtCxL2ksXG4gICAgbW9ybmluZzogL17RgdGD0YIvaSxcbiAgICBhZnRlcm5vb246IC9e0YHQu9C10LTQvi9pLFxuICAgIGV2ZW5pbmc6IC9e0LLQtdGHL2ksXG4gICAgbmlnaHQ6IC9e0L/RgNC10Lcg0L0vaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBtYXRjaDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXg1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCIpKTtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBCdWxnYXJpYW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIEJ1bGdhcmlhblxuICogQGlzby02MzktMiBidWxcbiAqIEBhdXRob3IgTmlrb2xheSBTdG95bm92IFtAYXJ2aWdldXNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hcnZpZ2V1c31cbiAqIEBhdXRob3IgVHN2ZXRhbiBPdmVkZW5za2kgW0BmaW50YXJhXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmludGFyYX1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2JnJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9