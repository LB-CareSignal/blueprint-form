(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-mk-index-js"],{

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

/***/ "./node_modules/date-fns/locale/mk/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/formatDistance/index.js ***!
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
    one: 'помалку од секунда',
    other: 'помалку од {{count}} секунди'
  },
  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },
  halfAMinute: 'половина минута',
  lessThanXMinutes: {
    one: 'помалку од минута',
    other: 'помалку од {{count}} минути'
  },
  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },
  aboutXHours: {
    one: 'околу 1 час',
    other: 'околу {{count}} часа'
  },
  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },
  xDays: {
    one: '1 ден',
    other: '{{count}} дена'
  },
  aboutXWeeks: {
    one: 'околу 1 недела',
    other: 'околу {{count}} месеци'
  },
  xWeeks: {
    one: '1 недела',
    other: '{{count}} недели'
  },
  aboutXMonths: {
    one: 'околу 1 месец',
    other: 'околу {{count}} недели'
  },
  xMonths: {
    one: '1 месец',
    other: '{{count}} месеци'
  },
  aboutXYears: {
    one: 'околу 1 година',
    other: 'околу {{count}} години'
  },
  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },
  overXYears: {
    one: 'повеќе од 1 година',
    other: 'повеќе од {{count}} години'
  },
  almostXYears: {
    one: 'безмалку 1 година',
    other: 'безмалку {{count}} години'
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
      return 'за ' + result;
    } else {
      return 'пред ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/mk/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/formatLong/index.js ***!
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

/***/ "./node_modules/date-fns/locale/mk/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/formatRelative/index.js ***!
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
var weekdays = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота'];
function _lastWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'минатата " + weekday + " во' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'минатиот " + weekday + " во' p";
  }
}
function thisWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'ова " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'овој " + weekday + " вo' p";
  }
}
function _nextWeek(day) {
  var weekday = weekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следната " + weekday + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следниот " + weekday + " вo' p";
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
  yesterday: "'вчера во' p",
  today: "'денес во' p",
  tomorrow: "'утре во' p",
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

/***/ "./node_modules/date-fns/locale/mk/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/localize/index.js ***!
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
  abbreviated: ['пред н. е.', 'н. е.'],
  wide: ['пред нашата ера', 'нашата ера']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ви кв.', '2-ри кв.', '3-ти кв.', '4-ти кв.'],
  wide: ['1-ви квартал', '2-ри квартал', '3-ти квартал', '4-ти квартал']
};
var monthValues = {
  abbreviated: ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'септ', 'окт', 'ноем', 'дек'],
  wide: ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
};
var dayValues = {
  narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са'],
  abbreviated: ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'],
  wide: ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
};
var dayPeriodValues = {
  wide: {
    am: 'претпладне',
    pm: 'попладне',
    midnight: 'полноќ',
    noon: 'напладне',
    morning: 'наутро',
    afternoon: 'попладне',
    evening: 'навечер',
    night: 'ноќе'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви';
      case 2:
        return number + '-ри';
      case 7:
      case 8:
        return number + '-ми';
    }
  }
  return number + '-ти';
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

/***/ "./node_modules/date-fns/locale/mk/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(-?[врмт][и])?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((пр)?н\.?\s?е\.?)/i,
  abbreviated: /^((пр)?н\.?\s?е\.?)/i,
  wide: /^(пред нашата ера|нашата ера)/i
};
var parseEraPatterns = {
  any: [/^п/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[врт]?и?)? кв.?/i,
  wide: /^[1234](-?[врт]?и?)? квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchDayPatterns = {
  narrow: /^[нпвсч]/i,
  short: /^(не|по|вт|ср|че|пе|са)/i,
  abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i,
  wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i]
};
var matchMonthPatterns = {
  abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,
  wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i
};
var parseMonthPatterns = {
  any: [/^ја/i, /^Ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
};
var matchDayPeriodPatterns = {
  any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /претпладне/i,
    pm: /попладне/i,
    midnight: /полноќ/i,
    noon: /напладне/i,
    morning: /наутро/i,
    afternoon: /попладне/i,
    evening: /навечер/i,
    night: /ноќе/i
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

/***/ "./node_modules/date-fns/locale/mk/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/mk/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/mk/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/mk/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/mk/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/mk/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Macedonian locale.
 * @language Macedonian
 * @iso-639-2 mkd
 * @author Petar Vlahu [@vlahupetar]{@link https://github.com/vlahupetar}
 * @author Altrim Beqiri [@altrim]{@link https://github.com/altrim}
 */
var locale = {
  code: 'mk',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvbWsvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21rL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21rL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9tay9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvbWsvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21rL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG9GQUEwQjtBQUN0RSxxQ0FBcUMsbUJBQU8sQ0FBQyx3RkFBNEI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FB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QkFBTyxDQUFDLDBGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvRkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLW1rLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzU2FtZVVUQ1dlZWs7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIikpO1xuZnVuY3Rpb24gaXNTYW1lVVRDV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICAoMCwgX2luZGV4LmRlZmF1bHQpKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gKDAsIF9pbmRleDIuZGVmYXVsdCkoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9ICgwLCBfaW5kZXgyLmRlZmF1bHQpKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9C/0L7QvNCw0LvQutGDINC+0LQg0YHQtdC60YPQvdC00LAnLFxuICAgIG90aGVyOiAn0L/QvtC80LDQu9C60YMg0L7QtCB7e2NvdW50fX0g0YHQtdC60YPQvdC00LgnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDRgdC10LrRg9C90LTQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00LgnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn0L/QvtC70L7QstC40L3QsCDQvNC40L3Rg9GC0LAnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn0L/QvtC80LDQu9C60YMg0L7QtCDQvNC40L3Rg9GC0LAnLFxuICAgIG90aGVyOiAn0L/QvtC80LDQu9C60YMg0L7QtCB7e2NvdW50fX0g0LzQuNC90YPRgtC4J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEg0LzQuNC90YPRgtCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0LgnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINGH0LDRgScsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9GDIHt7Y291bnR9fSDRh9Cw0YHQsCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDRh9Cw0YEnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGH0LDRgdCwJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEg0LTQtdC9JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQtNC10L3QsCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfQvtC60L7Qu9GDIDEg0L3QtdC00LXQu9CwJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70YMge3tjb3VudH19INC80LXRgdC10YbQuCdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSDQvdC10LTQtdC70LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC90LXQtNC10LvQuCdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINC80LXRgdC10YYnLFxuICAgIG90aGVyOiAn0L7QutC+0LvRgyB7e2NvdW50fX0g0L3QtdC00LXQu9C4J1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSDQvNC10YHQtdGGJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC10YHQtdGG0LgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9GDIHt7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfQv9C+0LLQtdGc0LUg0L7QtCAxINCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQv9C+0LLQtdGc0LUg0L7QtCB7e2NvdW50fX0g0LPQvtC00LjQvdC4J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfQsdC10LfQvNCw0LvQutGDIDEg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ9Cx0LXQt9C80LDQu9C60YMge3tjb3VudH19INCz0L7QtNC40L3QuCdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfQt9CwICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn0L/RgNC10LQgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZGQgTU1NTSB5eXl5JyxcbiAgbG9uZzogJ2RkIE1NTU0geXl5eScsXG4gIG1lZGl1bTogJ2RkIE1NTSB5eXl5JyxcbiAgc2hvcnQ6ICdkZC9NTS95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdIOm1tJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGFueTogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIikpO1xudmFyIHdlZWtkYXlzID0gWyfQvdC10LTQtdC70LAnLCAn0L/QvtC90LXQtNC10LvQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstGA0YLQvtC6JywgJ9C/0LXRgtC+0LonLCAn0YHQsNCx0L7RgtCwJ107XG5mdW5jdGlvbiBfbGFzdFdlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gd2Vla2RheXNbZGF5XTtcbiAgc3dpdGNoIChkYXkpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBcIifQvNC40L3QsNGC0LDRgtCwIFwiICsgd2Vla2RheSArIFwiINCy0L4nIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0LzQuNC90LDRgtC40L7RgiBcIiArIHdlZWtkYXkgKyBcIiDQstC+JyBwXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIHRoaXNXZWVrKGRheSkge1xuICB2YXIgd2Vla2RheSA9IHdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0L7QstCwIFwiICsgd2Vla2RheSArIFwiINCybycgcFwiO1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDI6XG4gICAgY2FzZSA0OlxuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBcIifQvtCy0L7RmCBcIiArIHdlZWtkYXkgKyBcIiDQsm8nIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gX25leHRXZWVrKGRheSkge1xuICB2YXIgd2Vla2RheSA9IHdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQvdCw0YLQsCBcIiArIHdlZWtkYXkgKyBcIiDQsm8nIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCIn0YHQu9C10LTQvdC40L7RgiBcIiArIHdlZWtkYXkgKyBcIiDQsm8nIHBcIjtcbiAgfVxufVxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogZnVuY3Rpb24gbGFzdFdlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBpZiAoKDAsIF9pbmRleC5kZWZhdWx0KShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX2xhc3RXZWVrKGRheSk7XG4gICAgfVxuICB9LFxuICB5ZXN0ZXJkYXk6IFwiJ9Cy0YfQtdGA0LAg0LLQvicgcFwiLFxuICB0b2RheTogXCIn0LTQtdC90LXRgSDQstC+JyBwXCIsXG4gIHRvbW9ycm93OiBcIifRg9GC0YDQtSDQstC+JyBwXCIsXG4gIG5leHRXZWVrOiBmdW5jdGlvbiBuZXh0V2VlayhkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIGlmICgoMCwgX2luZGV4LmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRoaXNXZWVrKGRheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfbmV4dFdlZWsoZGF5KTtcbiAgICB9XG4gIH0sXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9C/0YAu0L0u0LUuJywgJ9C9LtC1LiddLFxuICBhYmJyZXZpYXRlZDogWyfQv9GA0LXQtCDQvS4g0LUuJywgJ9C9LiDQtS4nXSxcbiAgd2lkZTogWyfQv9GA0LXQtCDQvdCw0YjQsNGC0LAg0LXRgNCwJywgJ9C90LDRiNCw0YLQsCDQtdGA0LAnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdCy0Lgg0LrQsi4nLCAnMi3RgNC4INC60LIuJywgJzMt0YLQuCDQutCyLicsICc0LdGC0Lgg0LrQsi4nXSxcbiAgd2lkZTogWycxLdCy0Lgg0LrQstCw0YDRgtCw0LsnLCAnMi3RgNC4INC60LLQsNGA0YLQsNC7JywgJzMt0YLQuCDQutCy0LDRgNGC0LDQuycsICc0LdGC0Lgg0LrQstCw0YDRgtCw0LsnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgYWJicmV2aWF0ZWQ6IFsn0ZjQsNC9JywgJ9GE0LXQsicsICfQvNCw0YAnLCAn0LDQv9GAJywgJ9C80LDRmCcsICfRmNGD0L0nLCAn0ZjRg9C7JywgJ9Cw0LLQsycsICfRgdC10L/RgicsICfQvtC60YInLCAn0L3QvtC10LwnLCAn0LTQtdC6J10sXG4gIHdpZGU6IFsn0ZjQsNC90YPQsNGA0LgnLCAn0YTQtdCy0YDRg9Cw0YDQuCcsICfQvNCw0YDRgicsICfQsNC/0YDQuNC7JywgJ9C80LDRmCcsICfRmNGD0L3QuCcsICfRmNGD0LvQuCcsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LLRgNC4JywgJ9C+0LrRgtC+0LzQstGA0LgnLCAn0L3QvtC10LzQstGA0LgnLCAn0LTQtdC60LXQvNCy0YDQuCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9CdJywgJ9CfJywgJ9CSJywgJ9ChJywgJ9CnJywgJ9CfJywgJ9ChJ10sXG4gIHNob3J0OiBbJ9C90LUnLCAn0L/QvicsICfQstGCJywgJ9GB0YAnLCAn0YfQtScsICfQv9C1JywgJ9GB0LAnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0L3QtdC0JywgJ9C/0L7QvScsICfQstGC0L4nLCAn0YHRgNC1JywgJ9GH0LXRgicsICfQv9C10YInLCAn0YHQsNCxJ10sXG4gIHdpZGU6IFsn0L3QtdC00LXQu9CwJywgJ9C/0L7QvdC10LTQtdC70L3QuNC6JywgJ9Cy0YLQvtGA0L3QuNC6JywgJ9GB0YDQtdC00LAnLCAn0YfQtdGC0LLRgNGC0L7QuicsICfQv9C10YLQvtC6JywgJ9GB0LDQsdC+0YLQsCddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgd2lkZToge1xuICAgIGFtOiAn0L/RgNC10YLQv9C70LDQtNC90LUnLFxuICAgIHBtOiAn0L/QvtC/0LvQsNC00L3QtScsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0LvQvdC+0ZwnLFxuICAgIG5vb246ICfQvdCw0L/Qu9Cw0LTQvdC1JyxcbiAgICBtb3JuaW5nOiAn0L3QsNGD0YLRgNC+JyxcbiAgICBhZnRlcm5vb246ICfQv9C+0L/Qu9Cw0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0L3QsNCy0LXRh9C10YAnLFxuICAgIG5pZ2h0OiAn0L3QvtGc0LUnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnLdCy0LgnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3RgNC4JztcbiAgICAgIGNhc2UgNzpcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICct0LzQuCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAnLdGC0LgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKC0/W9Cy0YDQvNGCXVvQuF0pPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oKNC/0YApP9C9XFwuP1xccz/QtVxcLj8pL2ksXG4gIGFiYnJldmlhdGVkOiAvXigo0L/RgCk/0L1cXC4/XFxzP9C1XFwuPykvaSxcbiAgd2lkZTogL14o0L/RgNC10LQg0L3QsNGI0LDRgtCwINC10YDQsHzQvdCw0YjQsNGC0LAg0LXRgNCwKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9e0L8vaSwgL17QvS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15bMTIzNF0oLT9b0LLRgNGCXT/QuD8pPyDQutCyLj8vaSxcbiAgd2lkZTogL15bMTIzNF0oLT9b0LLRgNGCXT/QuD8pPyDQutCy0LDRgNGC0LDQuy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW9C90L/QstGB0YddL2ksXG4gIHNob3J0OiAvXijQvdC1fNC/0L580LLRgnzRgdGAfNGH0LV80L/QtXzRgdCwKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L3QtdC0fNC/0L7QvXzQstGC0L580YHRgNC1fNGH0LXRgnzQv9C10YJ80YHQsNCxKS9pLFxuICB3aWRlOiAvXijQvdC10LTQtdC70LB80L/QvtC90LXQtNC10LvQvdC40Lp80LLRgtC+0YDQvdC40Lp80YHRgNC10LTQsHzRh9C10YLQstGA0YLQvtC6fNC/0LXRgtC+0Lp80YHQsNCx0L7RgtCwKS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9e0L0vaSwgL17Qvy9pLCAvXtCyL2ksIC9e0YEvaSwgL17Rhy9pLCAvXtC/L2ksIC9e0YEvaV0sXG4gIGFueTogWy9e0L1b0LXQtF0vaSwgL17Qv1vQvtC9XS9pLCAvXtCy0YIvaSwgL17RgdGAL2ksIC9e0Ydb0LXRgl0vaSwgL17Qv1vQtdGCXS9pLCAvXtGBW9Cw0LFdL2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgYWJicmV2aWF0ZWQ6IC9eKNGY0LDQvXzRhNC10LJ80LzQsNGAfNCw0L/RgHzQvNCw0Zh80ZjRg9C9fNGY0YPQu3zQsNCy0LN80YHQtdC/fNC+0LrRgnzQvdC+0LXQvHzQtNC10LopL2ksXG4gIHdpZGU6IC9eKNGY0LDQvdGD0LDRgNC4fNGE0LXQstGA0YPQsNGA0Lh80LzQsNGA0YJ80LDQv9GA0LjQu3zQvNCw0Zh80ZjRg9C90Lh80ZjRg9C70Lh80LDQstCz0YPRgdGCfNGB0LXQv9GC0LXQvNCy0YDQuHzQvtC60YLQvtC80LLRgNC4fNC90L7QtdC80LLRgNC4fNC00LXQutC10LzQstGA0LgpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtGY0LAvaSwgL17QpC9pLCAvXtC80LDRgC9pLCAvXtCw0L8vaSwgL17QvNCw0ZgvaSwgL17RmNGD0L0vaSwgL17RmNGD0LsvaSwgL17QsNCyL2ksIC9e0YHQtS9pLCAvXtC+0LrRgi9pLCAvXtC90L4vaSwgL17QtNC1L2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueTogL14o0L/RgNC10YLQv3zQv9C+0L/Qu3zQv9C+0LvQvdC+0Zx80YPRgtGA0L580L/Qu9Cw0LTQvdC1fNCy0LXRh9C10YB80L3QvtGcKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAv0L/RgNC10YLQv9C70LDQtNC90LUvaSxcbiAgICBwbTogL9C/0L7Qv9C70LDQtNC90LUvaSxcbiAgICBtaWRuaWdodDogL9C/0L7Qu9C90L7RnC9pLFxuICAgIG5vb246IC/QvdCw0L/Qu9Cw0LTQvdC1L2ksXG4gICAgbW9ybmluZzogL9C90LDRg9GC0YDQvi9pLFxuICAgIGFmdGVybm9vbjogL9C/0L7Qv9C70LDQtNC90LUvaSxcbiAgICBldmVuaW5nOiAv0L3QsNCy0LXRh9C10YAvaSxcbiAgICBuaWdodDogL9C90L7RnNC1L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgTWFjZWRvbmlhbiBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgTWFjZWRvbmlhblxuICogQGlzby02MzktMiBta2RcbiAqIEBhdXRob3IgUGV0YXIgVmxhaHUgW0B2bGFodXBldGFyXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vdmxhaHVwZXRhcn1cbiAqIEBhdXRob3IgQWx0cmltIEJlcWlyaSBbQGFsdHJpbV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2FsdHJpbX1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ21rJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9