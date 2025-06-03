(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-sr-index-js"],{

/***/ "./node_modules/date-fns/locale/sr/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/formatDistance/index.js ***!
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
      standalone: 'мање од 1 секунде',
      withPrepositionAgo: 'мање од 1 секунде',
      withPrepositionIn: 'мање од 1 секунду'
    },
    dual: 'мање од {{count}} секунде',
    other: 'мање од {{count}} секунди'
  },
  xSeconds: {
    one: {
      standalone: '1 секунда',
      withPrepositionAgo: '1 секунде',
      withPrepositionIn: '1 секунду'
    },
    dual: '{{count}} секунде',
    other: '{{count}} секунди'
  },
  halfAMinute: 'пола минуте',
  lessThanXMinutes: {
    one: {
      standalone: 'мање од 1 минуте',
      withPrepositionAgo: 'мање од 1 минуте',
      withPrepositionIn: 'мање од 1 минуту'
    },
    dual: 'мање од {{count}} минуте',
    other: 'мање од {{count}} минута'
  },
  xMinutes: {
    one: {
      standalone: '1 минута',
      withPrepositionAgo: '1 минуте',
      withPrepositionIn: '1 минуту'
    },
    dual: '{{count}} минуте',
    other: '{{count}} минута'
  },
  aboutXHours: {
    one: {
      standalone: 'око 1 сат',
      withPrepositionAgo: 'око 1 сат',
      withPrepositionIn: 'око 1 сат'
    },
    dual: 'око {{count}} сата',
    other: 'око {{count}} сати'
  },
  xHours: {
    one: {
      standalone: '1 сат',
      withPrepositionAgo: '1 сат',
      withPrepositionIn: '1 сат'
    },
    dual: '{{count}} сата',
    other: '{{count}} сати'
  },
  xDays: {
    one: {
      standalone: '1 дан',
      withPrepositionAgo: '1 дан',
      withPrepositionIn: '1 дан'
    },
    dual: '{{count}} дана',
    other: '{{count}} дана'
  },
  aboutXWeeks: {
    one: {
      standalone: 'око 1 недељу',
      withPrepositionAgo: 'око 1 недељу',
      withPrepositionIn: 'око 1 недељу'
    },
    dual: 'око {{count}} недеље',
    other: 'око {{count}} недеље'
  },
  xWeeks: {
    one: {
      standalone: '1 недељу',
      withPrepositionAgo: '1 недељу',
      withPrepositionIn: '1 недељу'
    },
    dual: '{{count}} недеље',
    other: '{{count}} недеље'
  },
  aboutXMonths: {
    one: {
      standalone: 'око 1 месец',
      withPrepositionAgo: 'око 1 месец',
      withPrepositionIn: 'око 1 месец'
    },
    dual: 'око {{count}} месеца',
    other: 'око {{count}} месеци'
  },
  xMonths: {
    one: {
      standalone: '1 месец',
      withPrepositionAgo: '1 месец',
      withPrepositionIn: '1 месец'
    },
    dual: '{{count}} месеца',
    other: '{{count}} месеци'
  },
  aboutXYears: {
    one: {
      standalone: 'око 1 годину',
      withPrepositionAgo: 'око 1 годину',
      withPrepositionIn: 'око 1 годину'
    },
    dual: 'око {{count}} године',
    other: 'око {{count}} година'
  },
  xYears: {
    one: {
      standalone: '1 година',
      withPrepositionAgo: '1 године',
      withPrepositionIn: '1 годину'
    },
    dual: '{{count}} године',
    other: '{{count}} година'
  },
  overXYears: {
    one: {
      standalone: 'преко 1 годину',
      withPrepositionAgo: 'преко 1 годину',
      withPrepositionIn: 'преко 1 годину'
    },
    dual: 'преко {{count}} године',
    other: 'преко {{count}} година'
  },
  almostXYears: {
    one: {
      standalone: 'готово 1 годину',
      withPrepositionAgo: 'готово 1 годину',
      withPrepositionIn: 'готово 1 годину'
    },
    dual: 'готово {{count}} године',
    other: 'готово {{count}} година'
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
      return 'за ' + result;
    } else {
      return 'пре ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/sr/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/formatLong/index.js ***!
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
  full: "{{date}} 'у' {{time}}",
  long: "{{date}} 'у' {{time}}",
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

/***/ "./node_modules/date-fns/locale/sr/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/formatRelative/index.js ***!
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
    switch (day) {
      case 0:
        return "'прошле недеље у' p";
      case 3:
        return "'прошле среде у' p";
      case 6:
        return "'прошле суботе у' p";
      default:
        return "'прошли' EEEE 'у' p";
    }
  },
  yesterday: "'јуче у' p",
  today: "'данас у' p",
  tomorrow: "'сутра у' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'следеће недеље у' p";
      case 3:
        return "'следећу среду у' p";
      case 6:
        return "'следећу суботу у' p";
      default:
        return "'следећи' EEEE 'у' p";
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

/***/ "./node_modules/date-fns/locale/sr/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/localize/index.js ***!
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
  narrow: ['пр.н.е.', 'АД'],
  abbreviated: ['пр. Хр.', 'по. Хр.'],
  wide: ['Пре Христа', 'После Христа']
};
var quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'],
  abbreviated: ['1. кв.', '2. кв.', '3. кв.', '4. кв.'],
  wide: ['1. квартал', '2. квартал', '3. квартал', '4. квартал']
};
var monthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var formattingMonthValues = {
  narrow: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
  abbreviated: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  wide: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар']
};
var dayValues = {
  narrow: ['Н', 'П', 'У', 'С', 'Ч', 'П', 'С'],
  short: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  abbreviated: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  wide: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота']
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'АМ',
    pm: 'ПМ',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
  }
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'поподне',
    evening: 'увече',
    night: 'ноћу'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'поноћ',
    noon: 'подне',
    morning: 'ујутру',
    afternoon: 'после подне',
    evening: 'увече',
    night: 'ноћу'
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

/***/ "./node_modules/date-fns/locale/sr/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/match/index.js ***!
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
  narrow: /^(пр\.н\.е\.|АД)/i,
  abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
  wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i
};
var parseEraPatterns = {
  any: [/^пр/i, /^(по|нова)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?кв\.?/i,
  wide: /^[1234]\. квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
  wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i
};
var parseMonthPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
  any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
  narrow: /^[пусчн]/i,
  short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
  wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i
};
var parseDayPatterns = {
  narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^п/i, /^с/i, /^н/i],
  any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i]
};
var matchDayPeriodPatterns = {
  any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^поно/i,
    noon: /^под/i,
    morning: /ујутру/i,
    afternoon: /(после\s|по)+подне/i,
    evening: /(увече)/i,
    night: /(ноћу)/i
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

/***/ "./node_modules/date-fns/locale/sr/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/sr/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/sr/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/sr/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/sr/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/sr/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Serbian cyrillic locale.
 * @language Serbian
 * @iso-639-2 srp
 * @author Igor Radivojević [@rogyvoje]{@link https://github.com/rogyvoje}
 */
var locale = {
  code: 'sr',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zci9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zci9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc3IvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsT0FBTztBQUM1QixzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLE9BQU87QUFDNUIsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLE9BQU87QUFDM0IscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQyxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDbExhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsZ0hBQTBDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLE9BQU8sTUFBTTtBQUM5QixXQUFXLE1BQU0sT0FBTyxNQUFNO0FBQzlCLGFBQWEsTUFBTSxHQUFHLE1BQU07QUFDNUIsWUFBWSxNQUFNLEdBQUcsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQzFDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDL0NhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUN0SWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBcUM7QUFDakYscUNBQXFDLG1CQUFPLENBQUMsb0hBQTRDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUN6R2E7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDNUUscUNBQXFDLG1CQUFPLENBQUMsOEZBQTRCO0FBQ3pFLHFDQUFxQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQywwRkFBMEI7QUFDdkUscUNBQXFDLG1CQUFPLENBQUMsb0ZBQXVCO0FBQ3BFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLXNyLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAn0LzQsNGa0LUg0L7QtCAxINGB0LXQutGD0L3QtNC1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ9C80LDRmtC1INC+0LQgMSDRgdC10LrRg9C90LTQtScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ9C80LDRmtC1INC+0LQgMSDRgdC10LrRg9C90LTRgydcbiAgICB9LFxuICAgIGR1YWw6ICfQvNCw0ZrQtSDQvtC0IHt7Y291bnR9fSDRgdC10LrRg9C90LTQtScsXG4gICAgb3RoZXI6ICfQvNCw0ZrQtSDQvtC0IHt7Y291bnR9fSDRgdC10LrRg9C90LTQuCdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxINGB0LXQutGD0L3QtNCwJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0YHQtdC60YPQvdC00LUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxINGB0LXQutGD0L3QtNGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQtScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00LgnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn0L/QvtC70LAg0LzQuNC90YPRgtC1JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ9C80LDRmtC1INC+0LQgMSDQvNC40L3Rg9GC0LUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAn0LzQsNGa0LUg0L7QtCAxINC80LjQvdGD0YLQtScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ9C80LDRmtC1INC+0LQgMSDQvNC40L3Rg9GC0YMnXG4gICAgfSxcbiAgICBkdWFsOiAn0LzQsNGa0LUg0L7QtCB7e2NvdW50fX0g0LzQuNC90YPRgtC1JyxcbiAgICBvdGhlcjogJ9C80LDRmtC1INC+0LQge3tjb3VudH19INC80LjQvdGD0YLQsCdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxINC80LjQvdGD0YLQsCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxINC80LjQvdGD0YLQtScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEg0LzQuNC90YPRgtGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0LUnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC80LjQvdGD0YLQsCdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQvtC60L4gMSDRgdCw0YInLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAn0L7QutC+IDEg0YHQsNGCJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0L7QutC+IDEg0YHQsNGCJ1xuICAgIH0sXG4gICAgZHVhbDogJ9C+0LrQviB7e2NvdW50fX0g0YHQsNGC0LAnLFxuICAgIG90aGVyOiAn0L7QutC+IHt7Y291bnR9fSDRgdCw0YLQuCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSDRgdCw0YInLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSDRgdCw0YInLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxINGB0LDRgidcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0g0YHQsNGC0LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGB0LDRgtC4J1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0LTQsNC9JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0LTQsNC9JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSDQtNCw0L0nXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INC00LDQvdCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQtNCw0L3QsCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQvtC60L4gMSDQvdC10LTQtdGZ0YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAn0L7QutC+IDEg0L3QtdC00LXRmdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0L7QutC+IDEg0L3QtdC00LXRmdGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ9C+0LrQviB7e2NvdW50fX0g0L3QtdC00LXRmdC1JyxcbiAgICBvdGhlcjogJ9C+0LrQviB7e2NvdW50fX0g0L3QtdC00LXRmdC1J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxINC90LXQtNC10ZnRgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxINC90LXQtNC10ZnRgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEg0L3QtdC00LXRmdGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSDQvdC10LTQtdGZ0LUnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC90LXQtNC10ZnQtSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAn0L7QutC+IDEg0LzQtdGB0LXRhicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQvtC60L4gMSDQvNC10YHQtdGGJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0L7QutC+IDEg0LzQtdGB0LXRhidcbiAgICB9LFxuICAgIGR1YWw6ICfQvtC60L4ge3tjb3VudH19INC80LXRgdC10YbQsCcsXG4gICAgb3RoZXI6ICfQvtC60L4ge3tjb3VudH19INC80LXRgdC10YbQuCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0LzQtdGB0LXRhicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxINC80LXRgdC10YYnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxINC80LXRgdC10YYnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INC80LXRgdC10YbQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQtdGB0LXRhtC4J1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ9C+0LrQviAxINCz0L7QtNC40L3RgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQvtC60L4gMSDQs9C+0LTQuNC90YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQvtC60L4gMSDQs9C+0LTQuNC90YMnXG4gICAgfSxcbiAgICBkdWFsOiAn0L7QutC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LUnLFxuICAgIG90aGVyOiAn0L7QutC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LAnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0LPQvtC00LjQvdCwJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0LPQvtC00LjQvdC1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSDQs9C+0LTQuNC90YMnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INCz0L7QtNC40L3QtScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LPQvtC00LjQvdCwJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAn0L/RgNC10LrQviAxINCz0L7QtNC40L3RgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQv9GA0LXQutC+IDEg0LPQvtC00LjQvdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0L/RgNC10LrQviAxINCz0L7QtNC40L3RgydcbiAgICB9LFxuICAgIGR1YWw6ICfQv9GA0LXQutC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LUnLFxuICAgIG90aGVyOiAn0L/RgNC10LrQviB7e2NvdW50fX0g0LPQvtC00LjQvdCwJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQs9C+0YLQvtCy0L4gMSDQs9C+0LTQuNC90YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAn0LPQvtGC0L7QstC+IDEg0LPQvtC00LjQvdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0LPQvtGC0L7QstC+IDEg0LPQvtC00LjQvdGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ9Cz0L7RgtC+0LLQviB7e2NvdW50fX0g0LPQvtC00LjQvdC1JyxcbiAgICBvdGhlcjogJ9Cz0L7RgtC+0LLQviB7e2NvdW50fX0g0LPQvtC00LjQvdCwJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLndpdGhQcmVwb3NpdGlvbkluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uQWdvO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS5zdGFuZGFsb25lO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb3VudCAlIDEwID4gMSAmJiBjb3VudCAlIDEwIDwgNSAmJlxuICAvLyBpZiBsYXN0IGRpZ2l0IGlzIGJldHdlZW4gMiBhbmQgNFxuICBTdHJpbmcoY291bnQpLnN1YnN0cigtMiwgMSkgIT09ICcxJyAvLyB1bmxlc3MgdGhlIDJuZCB0byBsYXN0IGRpZ2l0IGlzIFwiMVwiXG4gICkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZHVhbC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfQt9CwICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn0L/RgNC1ICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIGQuIE1NTU0geXl5eS4nLFxuICBsb25nOiAnZC4gTU1NTSB5eXl5LicsXG4gIG1lZGl1bTogJ2QuIE1NTSB5eS4nLFxuICBzaG9ydDogJ2RkLiBNTS4geXkuJ1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzICh6enp6KScsXG4gIGxvbmc6ICdISDptbTpzcyB6JyxcbiAgbWVkaXVtOiAnSEg6bW06c3MnLFxuICBzaG9ydDogJ0hIOm1tJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ9GDJyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICfRgycge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIn0L/RgNC+0YjQu9C1INC90LXQtNC10ZnQtSDRgycgcFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCIn0L/RgNC+0YjQu9C1INGB0YDQtdC00LUg0YMnIHBcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiJ9C/0YDQvtGI0LvQtSDRgdGD0LHQvtGC0LUg0YMnIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIifQv9GA0L7RiNC70LgnIEVFRUUgJ9GDJyBwXCI7XG4gICAgfVxuICB9LFxuICB5ZXN0ZXJkYXk6IFwiJ9GY0YPRh9C1INGDJyBwXCIsXG4gIHRvZGF5OiBcIifQtNCw0L3QsNGBINGDJyBwXCIsXG4gIHRvbW9ycm93OiBcIifRgdGD0YLRgNCwINGDJyBwXCIsXG4gIG5leHRXZWVrOiBmdW5jdGlvbiBuZXh0V2VlayhkYXRlKSB7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiJ9GB0LvQtdC00LXRm9C1INC90LXQtNC10ZnQtSDRgycgcFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCIn0YHQu9C10LTQtdGb0YMg0YHRgNC10LTRgyDRgycgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIn0YHQu9C10LTQtdGb0YMg0YHRg9Cx0L7RgtGDINGDJyBwXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCIn0YHQu9C10LTQtdGb0LgnIEVFRUUgJ9GDJyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0L/RgC7QvS7QtS4nLCAn0JDQlCddLFxuICBhYmJyZXZpYXRlZDogWyfQv9GALiDQpdGALicsICfQv9C+LiDQpdGALiddLFxuICB3aWRlOiBbJ9Cf0YDQtSDQpdGA0LjRgdGC0LAnLCAn0J/QvtGB0LvQtSDQpdGA0LjRgdGC0LAnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4g0LrQsi4nLCAnMi4g0LrQsi4nLCAnMy4g0LrQsi4nLCAnNC4g0LrQsi4nXSxcbiAgd2lkZTogWycxLiDQutCy0LDRgNGC0LDQuycsICcyLiDQutCy0LDRgNGC0LDQuycsICczLiDQutCy0LDRgNGC0LDQuycsICc0LiDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMS4nLCAnMi4nLCAnMy4nLCAnNC4nLCAnNS4nLCAnNi4nLCAnNy4nLCAnOC4nLCAnOS4nLCAnMTAuJywgJzExLicsICcxMi4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0ZjQsNC9JywgJ9GE0LXQsScsICfQvNCw0YAnLCAn0LDQv9GAJywgJ9C80LDRmCcsICfRmNGD0L0nLCAn0ZjRg9C7JywgJ9Cw0LLQsycsICfRgdC10L8nLCAn0L7QutGCJywgJ9C90L7QsicsICfQtNC10YYnXSxcbiAgd2lkZTogWyfRmNCw0L3Rg9Cw0YAnLCAn0YTQtdCx0YDRg9Cw0YAnLCAn0LzQsNGA0YInLCAn0LDQv9GA0LjQuycsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LHQsNGAJywgJ9C+0LrRgtC+0LHQsNGAJywgJ9C90L7QstC10LzQsdCw0YAnLCAn0LTQtdGG0LXQvNCx0LDRgCddXG59O1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEuJywgJzIuJywgJzMuJywgJzQuJywgJzUuJywgJzYuJywgJzcuJywgJzguJywgJzkuJywgJzEwLicsICcxMS4nLCAnMTIuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ9GY0LDQvScsICfRhNC10LEnLCAn0LzQsNGAJywgJ9Cw0L/RgCcsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LMnLCAn0YHQtdC/JywgJ9C+0LrRgicsICfQvdC+0LInLCAn0LTQtdGGJ10sXG4gIHdpZGU6IFsn0ZjQsNC90YPQsNGAJywgJ9GE0LXQsdGA0YPQsNGAJywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNGYJywgJ9GY0YPQvScsICfRmNGD0LsnLCAn0LDQstCz0YPRgdGCJywgJ9GB0LXQv9GC0LXQvNCx0LDRgCcsICfQvtC60YLQvtCx0LDRgCcsICfQvdC+0LLQtdC80LHQsNGAJywgJ9C00LXRhtC10LzQsdCw0YAnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfQnScsICfQnycsICfQoycsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICBzaG9ydDogWyfQvdC10LQnLCAn0L/QvtC9JywgJ9GD0YLQvicsICfRgdGA0LUnLCAn0YfQtdGCJywgJ9C/0LXRgicsICfRgdGD0LEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0L3QtdC0JywgJ9C/0L7QvScsICfRg9GC0L4nLCAn0YHRgNC1JywgJ9GH0LXRgicsICfQv9C10YInLCAn0YHRg9CxJ10sXG4gIHdpZGU6IFsn0L3QtdC00LXRmdCwJywgJ9C/0L7QvdC10LTQtdGZ0LDQuicsICfRg9GC0L7RgNCw0LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstGA0YLQsNC6JywgJ9C/0LXRgtCw0LonLCAn0YHRg9Cx0L7RgtCwJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfQkNCcJyxcbiAgICBwbTogJ9Cf0JwnLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtC90L7RmycsXG4gICAgbm9vbjogJ9C/0L7QtNC90LUnLFxuICAgIG1vcm5pbmc6ICfRg9GY0YPRgtGA0YMnLFxuICAgIGFmdGVybm9vbjogJ9C/0L7Qv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CQ0JwnLFxuICAgIHBtOiAn0J/QnCcsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0L3QvtGbJyxcbiAgICBub29uOiAn0L/QvtC00L3QtScsXG4gICAgbW9ybmluZzogJ9GD0ZjRg9GC0YDRgycsXG4gICAgYWZ0ZXJub29uOiAn0L/QvtC/0L7QtNC90LUnLFxuICAgIGV2ZW5pbmc6ICfRg9Cy0LXRh9C1JyxcbiAgICBuaWdodDogJ9C90L7Rm9GDJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0L3QvtGbJyxcbiAgICBub29uOiAn0L/QvtC00L3QtScsXG4gICAgbW9ybmluZzogJ9GD0ZjRg9GC0YDRgycsXG4gICAgYWZ0ZXJub29uOiAn0L/QvtGB0LvQtSDQv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtC90L7RmycsXG4gICAgbm9vbjogJ9C/0L7QtNC90LUnLFxuICAgIG1vcm5pbmc6ICfRg9GY0YPRgtGA0YMnLFxuICAgIGFmdGVybm9vbjogJ9C/0L7Qv9C+0LTQvdC1JyxcbiAgICBldmVuaW5nOiAn0YPQstC10YfQtScsXG4gICAgbmlnaHQ6ICfQvdC+0ZvRgydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ9C/0L7QvdC+0ZsnLFxuICAgIG5vb246ICfQv9C+0LTQvdC1JyxcbiAgICBtb3JuaW5nOiAn0YPRmNGD0YLRgNGDJyxcbiAgICBhZnRlcm5vb246ICfQv9C+0L/QvtC00L3QtScsXG4gICAgZXZlbmluZzogJ9GD0LLQtdGH0LUnLFxuICAgIG5pZ2h0OiAn0L3QvtGb0YMnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ9C/0L7QvdC+0ZsnLFxuICAgIG5vb246ICfQv9C+0LTQvdC1JyxcbiAgICBtb3JuaW5nOiAn0YPRmNGD0YLRgNGDJyxcbiAgICBhZnRlcm5vb246ICfQv9C+0YHQu9C1INC/0L7QtNC90LUnLFxuICAgIGV2ZW5pbmc6ICfRg9Cy0LXRh9C1JyxcbiAgICBuaWdodDogJ9C90L7Rm9GDJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspXFwuL2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijQv9GAXFwu0L1cXC7QtVxcLnzQkNCUKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L/RgFxcLlxccz/QpdGAXFwufNC/0L5cXC5cXHM/0KXRgFxcLikvaSxcbiAgd2lkZTogL14o0J/RgNC1INCl0YDQuNGB0YLQsHzQv9GA0LUg0L3QvtCy0LUg0LXRgNC1fNCf0L7RgdC70LUg0KXRgNC40YHRgtCwfNC90L7QstCwINC10YDQsCkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXtC/0YAvaSwgL14o0L/QvnzQvdC+0LLQsCkvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eWzEyMzRdXFwuXFxzP9C60LJcXC4/L2ksXG4gIHdpZGU6IC9eWzEyMzRdXFwuINC60LLQsNGA0YLQsNC7L2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXigxMHwxMXwxMnxbMTIzNDU2Nzg5XSlcXC4vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNGY0LDQvXzRhNC10LF80LzQsNGAfNCw0L/RgHzQvNCw0Zh80ZjRg9C9fNGY0YPQu3zQsNCy0LN80YHQtdC/fNC+0LrRgnzQvdC+0LJ80LTQtdGGKS9pLFxuICB3aWRlOiAvXigo0ZjQsNC90YPQsNGAfNGY0LDQvdGD0LDRgNCwKXwo0YTQtdCx0YDRg9Cw0YB80YTQtdCx0YDRg9Cw0YDQsCl8KNC80LDRgNGCfNC80LDRgNGC0LApfCjQsNC/0YDQuNC7fNCw0L/RgNC40LvQsCl8KNC80ZjQsHzQvNCw0ZjQsCl8KNGY0YPQvXzRmNGD0L3QsCl8KNGY0YPQu3zRmNGD0LvQsCl8KNCw0LLQs9GD0YHRgnzQsNCy0LPRg9GB0YLQsCl8KNGB0LXQv9GC0LXQvNCx0LDRgHzRgdC10L/RgtC10LzQsdGA0LApfCjQvtC60YLQvtCx0LDRgHzQvtC60YLQvtCx0YDQsCl8KNC90L7QstC10LzQsdCw0YB80L3QvtCy0LXQvNCx0YDQsCl8KNC00LXRhtC10LzQsdCw0YB80LTQtdGG0LXQvNCx0YDQsCkpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXjEvaSwgL14yL2ksIC9eMy9pLCAvXjQvaSwgL141L2ksIC9eNi9pLCAvXjcvaSwgL144L2ksIC9eOS9pLCAvXjEwL2ksIC9eMTEvaSwgL14xMi9pXSxcbiAgYW55OiBbL17RmNCwL2ksIC9e0YQvaSwgL17QvNCw0YAvaSwgL17QsNC/L2ksIC9e0LzQsNGYL2ksIC9e0ZjRg9C9L2ksIC9e0ZjRg9C7L2ksIC9e0LDQstCzL2ksIC9e0YEvaSwgL17Qvi9pLCAvXtC9L2ksIC9e0LQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlvQv9GD0YHRh9C9XS9pLFxuICBzaG9ydDogL14o0L3QtdC0fNC/0L7QvXzRg9GC0L580YHRgNC1fNGH0LXRgnzQv9C10YJ80YHRg9CxKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L3QtdC0fNC/0L7QvXzRg9GC0L580YHRgNC1fNGH0LXRgnzQv9C10YJ80YHRg9CxKS9pLFxuICB3aWRlOiAvXijQvdC10LTQtdGZ0LB80L/QvtC90LXQtNC10ZnQsNC6fNGD0YLQvtGA0LDQunzRgdGA0LXQtNCwfNGH0LXRgtCy0YDRgtCw0Lp80L/QtdGC0LDQunzRgdGD0LHQvtGC0LApL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17Qvy9pLCAvXtGDL2ksIC9e0YEvaSwgL17Rhy9pLCAvXtC/L2ksIC9e0YEvaSwgL17QvS9pXSxcbiAgYW55OiBbL17QvdC10LQvaSwgL17Qv9C+0L0vaSwgL17Rg9GC0L4vaSwgL17RgdGA0LUvaSwgL17Rh9C10YIvaSwgL17Qv9C10YIvaSwgL17RgdGD0LEvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiAvXijQsNC8fNC/0Lx80L/QvtC90L7Rm3wo0L/Qvik/0L/QvtC00L3QtXzRg9Cy0LXRh9C1fNC90L7Rm9GDfNC/0L7RgdC70LUg0L/QvtC00L3QtXzRg9GY0YPRgtGA0YMpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL17Qv9C+0L3Qvi9pLFxuICAgIG5vb246IC9e0L/QvtC0L2ksXG4gICAgbW9ybmluZzogL9GD0ZjRg9GC0YDRgy9pLFxuICAgIGFmdGVybm9vbjogLyjQv9C+0YHQu9C1XFxzfNC/0L4pK9C/0L7QtNC90LUvaSxcbiAgICBldmVuaW5nOiAvKNGD0LLQtdGH0LUpL2ksXG4gICAgbmlnaHQ6IC8o0L3QvtGb0YMpL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgU2VyYmlhbiBjeXJpbGxpYyBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgU2VyYmlhblxuICogQGlzby02MzktMiBzcnBcbiAqIEBhdXRob3IgSWdvciBSYWRpdm9qZXZpxIcgW0Byb2d5dm9qZV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3JvZ3l2b2plfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnc3InLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMSAvKiBNb25kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=