(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-mn-index-js"],{

/***/ "./node_modules/date-fns/locale/mn/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/formatDistance/index.js ***!
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
    one: 'секунд хүрэхгүй',
    other: '{{count}} секунд хүрэхгүй'
  },
  xSeconds: {
    one: '1 секунд',
    other: '{{count}} секунд'
  },
  halfAMinute: 'хагас минут',
  lessThanXMinutes: {
    one: 'минут хүрэхгүй',
    other: '{{count}} минут хүрэхгүй'
  },
  xMinutes: {
    one: '1 минут',
    other: '{{count}} минут'
  },
  aboutXHours: {
    one: 'ойролцоогоор 1 цаг',
    other: 'ойролцоогоор {{count}} цаг'
  },
  xHours: {
    one: '1 цаг',
    other: '{{count}} цаг'
  },
  xDays: {
    one: '1 өдөр',
    other: '{{count}} өдөр'
  },
  aboutXWeeks: {
    one: 'ойролцоогоор 1 долоо хоног',
    other: 'ойролцоогоор {{count}} долоо хоног'
  },
  xWeeks: {
    one: '1 долоо хоног',
    other: '{{count}} долоо хоног'
  },
  aboutXMonths: {
    one: 'ойролцоогоор 1 сар',
    other: 'ойролцоогоор {{count}} сар'
  },
  xMonths: {
    one: '1 сар',
    other: '{{count}} сар'
  },
  aboutXYears: {
    one: 'ойролцоогоор 1 жил',
    other: 'ойролцоогоор {{count}} жил'
  },
  xYears: {
    one: '1 жил',
    other: '{{count}} жил'
  },
  overXYears: {
    one: '1 жил гаран',
    other: '{{count}} жил гаран'
  },
  almostXYears: {
    one: 'бараг 1 жил',
    other: 'бараг {{count}} жил'
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
    /**
     * Append genitive case
     */
    var words = result.split(' ');
    var lastword = words.pop();
    result = words.join(' ');
    switch (lastword) {
      case 'секунд':
        result += ' секундийн';
        break;
      case 'минут':
        result += ' минутын';
        break;
      case 'цаг':
        result += ' цагийн';
        break;
      case 'өдөр':
        result += ' өдрийн';
        break;
      case 'сар':
        result += ' сарын';
        break;
      case 'жил':
        result += ' жилийн';
        break;
      case 'хоног':
        result += ' хоногийн';
        break;
      case 'гаран':
        result += ' гараны';
        break;
      case 'хүрэхгүй':
        result += ' хүрэхгүй хугацааны';
        break;
      default:
        result += lastword + '-н';
    }
    if (options.comparison && options.comparison > 0) {
      return result + ' дараа';
    } else {
      return result + ' өмнө';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/mn/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/formatLong/index.js ***!
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
  full: "y 'оны' MMMM'ын' d, EEEE 'гараг'",
  long: "y 'оны' MMMM'ын' d",
  medium: "y 'оны' MMM'ын' d",
  short: 'y.MM.dd'
};
var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
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

/***/ "./node_modules/date-fns/locale/mn/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'өнгөрсөн' eeee 'гарагийн' p 'цагт'",
  yesterday: "'өчигдөр' p 'цагт'",
  today: "'өнөөдөр' p 'цагт'",
  tomorrow: "'маргааш' p 'цагт'",
  nextWeek: "'ирэх' eeee 'гарагийн' p 'цагт'",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/mn/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/localize/index.js ***!
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
  narrow: ['НТӨ', 'НТ'],
  abbreviated: ['НТӨ', 'НТ'],
  wide: ['нийтийн тооллын өмнөх', 'нийтийн тооллын']
};
var quarterValues = {
  narrow: ['I', 'II', 'III', 'IV'],
  abbreviated: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
  wide: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  abbreviated: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  wide: ['Нэгдүгээр сар', 'Хоёрдугаар сар', 'Гуравдугаар сар', 'Дөрөвдүгээр сар', 'Тавдугаар сар', 'Зургаадугаар сар', 'Долоодугаар сар', 'Наймдугаар сар', 'Есдүгээр сар', 'Аравдугаар сар', 'Арваннэгдүгээр сар', 'Арван хоёрдугаар сар']
};
var formattingMonthValues = {
  narrow: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  abbreviated: ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  wide: ['нэгдүгээр сар', 'хоёрдугаар сар', 'гуравдугаар сар', 'дөрөвдүгээр сар', 'тавдугаар сар', 'зургаадугаар сар', 'долоодугаар сар', 'наймдугаар сар', 'есдүгээр сар', 'аравдугаар сар', 'арваннэгдүгээр сар', 'арван хоёрдугаар сар']
};
var dayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']
};
var formattingDayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['ням', 'даваа', 'мягмар', 'лхагва', 'пүрэв', 'баасан', 'бямба']
};
var dayPeriodValues = {
  narrow: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  abbreviated: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  wide: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
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

/***/ "./node_modules/date-fns/locale/mn/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(нтө|нт)/i,
  abbreviated: /^(нтө|нт)/i,
  wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i
};
var parseEraPatterns = {
  any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]
};
var matchQuarterPatterns = {
  narrow: /^(iv|iii|ii|i)/i,
  abbreviated: /^(iv|iii|ii|i) улирал/i,
  wide: /^[1-4]-р улирал/i
};
var parseQuarterPatterns = {
  any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i]
};
var matchMonthPatterns = {
  narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
  abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
  wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i
};
var parseMonthPatterns = {
  narrow: [/^i$/i, /^ii$/i, /^iii$/i, /^iv$/i, /^v$/i, /^vi$/i, /^vii$/i, /^viii$/i, /^ix$/i, /^x$/i, /^xi$/i, /^xii$/i],
  any: [/^(1|нэгдүгээр)/i, /^(2|хоёрдугаар)/i, /^(3|гуравдугаар)/i, /^(4|дөрөвдүгээр)/i, /^(5|тавдугаар)/i, /^(6|зургаадугаар)/i, /^(7|долоодугаар)/i, /^(8|наймдугаар)/i, /^(9|есдүгээр)/i, /^(10|аравдугаар)/i, /^(11|арван нэгдүгээр)/i, /^(12|арван хоёрдугаар)/i]
};
var matchDayPatterns = {
  narrow: /^[ндмлпбб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
  any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ү\.ө\./i,
    pm: /^ү\.х\./i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дунд/i,
    morning: /өглөө/i,
    afternoon: /өдөр/i,
    evening: /орой/i,
    night: /шөнө/i
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

/***/ "./node_modules/date-fns/locale/mn/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/mn/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/mn/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/mn/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/mn/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/mn/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Mongolian locale.
 * @language Mongolian
 * @iso-639-2 mon
 * @author Bilguun Ochirbat [@bilguun0203]{@link https://github.com/bilguun0203}
 */
var locale = {
  code: 'mn',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21uL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9tbi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9tbi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvbW4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21uL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9tbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FB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b2NhbGUtbW4taW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICfRgdC10LrRg9C90LQg0YXSr9GA0Y3RhdCz0q/QuScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC0INGF0q/RgNGN0YXQs9Kv0LknXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDRgdC10LrRg9C90LQnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfRhdCw0LPQsNGBINC80LjQvdGD0YInLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn0LzQuNC90YPRgiDRhdKv0YDRjdGF0LPSr9C5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC40L3Rg9GCINGF0q/RgNGN0YXQs9Kv0LknXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDQvNC40L3Rg9GCJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC40L3Rg9GCJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9C+0LnRgNC+0LvRhtC+0L7Qs9C+0L7RgCAxINGG0LDQsycsXG4gICAgb3RoZXI6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAge3tjb3VudH19INGG0LDQsydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDRhtCw0LMnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGG0LDQsydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxINOp0LTTqdGAJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDTqdC006nRgCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAgMSDQtNC+0LvQvtC+INGF0L7QvdC+0LMnLFxuICAgIG90aGVyOiAn0L7QudGA0L7Qu9GG0L7QvtCz0L7QvtGAIHt7Y291bnR9fSDQtNC+0LvQvtC+INGF0L7QvdC+0LMnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEg0LTQvtC70L7QviDRhdC+0L3QvtCzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQtNC+0LvQvtC+INGF0L7QvdC+0LMnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9C+0LnRgNC+0LvRhtC+0L7Qs9C+0L7RgCAxINGB0LDRgCcsXG4gICAgb3RoZXI6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAge3tjb3VudH19INGB0LDRgCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg0YHQsNGAJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdCw0YAnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn0L7QudGA0L7Qu9GG0L7QvtCz0L7QvtGAIDEg0LbQuNC7JyxcbiAgICBvdGhlcjogJ9C+0LnRgNC+0LvRhtC+0L7Qs9C+0L7RgCB7e2NvdW50fX0g0LbQuNC7J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxINC20LjQuycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LbQuNC7J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnMSDQttC40Lsg0LPQsNGA0LDQvScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LbQuNC7INCz0LDRgNCw0L0nXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ9Cx0LDRgNCw0LMgMSDQttC40LsnLFxuICAgIG90aGVyOiAn0LHQsNGA0LDQsyB7e2NvdW50fX0g0LbQuNC7J1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgLyoqXG4gICAgICogQXBwZW5kIGdlbml0aXZlIGNhc2VcbiAgICAgKi9cbiAgICB2YXIgd29yZHMgPSByZXN1bHQuc3BsaXQoJyAnKTtcbiAgICB2YXIgbGFzdHdvcmQgPSB3b3Jkcy5wb3AoKTtcbiAgICByZXN1bHQgPSB3b3Jkcy5qb2luKCcgJyk7XG4gICAgc3dpdGNoIChsYXN0d29yZCkge1xuICAgICAgY2FzZSAn0YHQtdC60YPQvdC0JzpcbiAgICAgICAgcmVzdWx0ICs9ICcg0YHQtdC60YPQvdC00LjQudC9JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfQvNC40L3Rg9GCJzpcbiAgICAgICAgcmVzdWx0ICs9ICcg0LzQuNC90YPRgtGL0L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9GG0LDQsyc6XG4gICAgICAgIHJlc3VsdCArPSAnINGG0LDQs9C40LnQvSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAn06nQtNOp0YAnOlxuICAgICAgICByZXN1bHQgKz0gJyDTqdC00YDQuNC50L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9GB0LDRgCc6XG4gICAgICAgIHJlc3VsdCArPSAnINGB0LDRgNGL0L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9C20LjQuyc6XG4gICAgICAgIHJlc3VsdCArPSAnINC20LjQu9C40LnQvSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAn0YXQvtC90L7Qsyc6XG4gICAgICAgIHJlc3VsdCArPSAnINGF0L7QvdC+0LPQuNC50L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9Cz0LDRgNCw0L0nOlxuICAgICAgICByZXN1bHQgKz0gJyDQs9Cw0YDQsNC90YsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9GF0q/RgNGN0YXQs9Kv0LknOlxuICAgICAgICByZXN1bHQgKz0gJyDRhdKv0YDRjdGF0LPSr9C5INGF0YPQs9Cw0YbQsNCw0L3Riyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ICs9IGxhc3R3b3JkICsgJy3QvSc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg0LTQsNGA0LDQsCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnINOp0LzQvdOpJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcInkgJ9C+0L3RiycgTU1NTSfRi9C9JyBkLCBFRUVFICfQs9Cw0YDQsNCzJ1wiLFxuICBsb25nOiBcInkgJ9C+0L3RiycgTU1NTSfRi9C9JyBkXCIsXG4gIG1lZGl1bTogXCJ5ICfQvtC90YsnIE1NTSfRi9C9JyBkXCIsXG4gIHNob3J0OiAneS5NTS5kZCdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSDptbTpzcyB6JyxcbiAgbWVkaXVtOiAnSDptbTpzcycsXG4gIHNob3J0OiAnSDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBsb25nOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBtZWRpdW06ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0ge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCIn06nQvdCz06nRgNGB06nQvScgZWVlZSAn0LPQsNGA0LDQs9C40LnQvScgcCAn0YbQsNCz0YInXCIsXG4gIHllc3RlcmRheTogXCIn06nRh9C40LPQtNOp0YAnIHAgJ9GG0LDQs9GCJ1wiLFxuICB0b2RheTogXCIn06nQvdOp06nQtNOp0YAnIHAgJ9GG0LDQs9GCJ1wiLFxuICB0b21vcnJvdzogXCIn0LzQsNGA0LPQsNCw0YgnIHAgJ9GG0LDQs9GCJ1wiLFxuICBuZXh0V2VlazogXCIn0LjRgNGN0YUnIGVlZWUgJ9Cz0LDRgNCw0LPQuNC50L0nIHAgJ9GG0LDQs9GCJ1wiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0J3QotOoJywgJ9Cd0KInXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0J3QotOoJywgJ9Cd0KInXSxcbiAgd2lkZTogWyfQvdC40LnRgtC40LnQvSDRgtC+0L7Qu9C70YvQvSDTqdC80L3TqdGFJywgJ9C90LjQudGC0LjQudC9INGC0L7QvtC70LvRi9C9J11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0knLCAnSUknLCAnSUlJJywgJ0lWJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0kg0YPQu9C40YDQsNC7JywgJ0lJINGD0LvQuNGA0LDQuycsICdJSUkg0YPQu9C40YDQsNC7JywgJ0lWINGD0LvQuNGA0LDQuyddLFxuICB3aWRlOiBbJzEt0YAg0YPQu9C40YDQsNC7JywgJzIt0YAg0YPQu9C40YDQsNC7JywgJzMt0YAg0YPQu9C40YDQsNC7JywgJzQt0YAg0YPQu9C40YDQsNC7J11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0knLCAnSUknLCAnSUlJJywgJ0lWJywgJ1YnLCAnVkknLCAnVklJJywgJ1ZJSUknLCAnSVgnLCAnWCcsICdYSScsICdYSUknXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS3RgCDRgdCw0YAnLCAnMi3RgCDRgdCw0YAnLCAnMy3RgCDRgdCw0YAnLCAnNC3RgCDRgdCw0YAnLCAnNS3RgCDRgdCw0YAnLCAnNi3RgCDRgdCw0YAnLCAnNy3RgCDRgdCw0YAnLCAnOC3RgCDRgdCw0YAnLCAnOS3RgCDRgdCw0YAnLCAnMTAt0YAg0YHQsNGAJywgJzExLdGAINGB0LDRgCcsICcxMi3RgCDRgdCw0YAnXSxcbiAgd2lkZTogWyfQndGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9Cl0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQk9GD0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQlNOp0YDTqdCy0LTSr9Cz0Y3RjdGAINGB0LDRgCcsICfQotCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9CX0YPRgNCz0LDQsNC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0JTQvtC70L7QvtC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0J3QsNC50LzQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9CV0YHQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9CQ0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQkNGA0LLQsNC90L3RjdCz0LTSr9Cz0Y3RjdGAINGB0LDRgCcsICfQkNGA0LLQsNC9INGF0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgCddXG59O1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0knLCAnSUknLCAnSUlJJywgJ0lWJywgJ1YnLCAnVkknLCAnVklJJywgJ1ZJSUknLCAnSVgnLCAnWCcsICdYSScsICdYSUknXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS3RgCDRgdCw0YAnLCAnMi3RgCDRgdCw0YAnLCAnMy3RgCDRgdCw0YAnLCAnNC3RgCDRgdCw0YAnLCAnNS3RgCDRgdCw0YAnLCAnNi3RgCDRgdCw0YAnLCAnNy3RgCDRgdCw0YAnLCAnOC3RgCDRgdCw0YAnLCAnOS3RgCDRgdCw0YAnLCAnMTAt0YAg0YHQsNGAJywgJzExLdGAINGB0LDRgCcsICcxMi3RgCDRgdCw0YAnXSxcbiAgd2lkZTogWyfQvdGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9GF0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQs9GD0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQtNOp0YDTqdCy0LTSr9Cz0Y3RjdGAINGB0LDRgCcsICfRgtCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9C30YPRgNCz0LDQsNC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0LTQvtC70L7QvtC00YPQs9Cw0LDRgCDRgdCw0YAnLCAn0L3QsNC50LzQtNGD0LPQsNCw0YAg0YHQsNGAJywgJ9C10YHQtNKv0LPRjdGN0YAg0YHQsNGAJywgJ9Cw0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgCcsICfQsNGA0LLQsNC90L3RjdCz0LTSr9Cz0Y3RjdGAINGB0LDRgCcsICfQsNGA0LLQsNC9INGF0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9CdJywgJ9CUJywgJ9CcJywgJ9CbJywgJ9CfJywgJ9CRJywgJ9CRJ10sXG4gIHNob3J0OiBbJ9Cd0Y8nLCAn0JTQsCcsICfQnNGPJywgJ9Cb0YUnLCAn0J/SrycsICfQkdCwJywgJ9CR0Y8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0J3Rj9C8JywgJ9CU0LDQsicsICfQnNGP0LMnLCAn0JvRhdCwJywgJ9Cf0q/RgCcsICfQkdCw0LAnLCAn0JHRj9C8J10sXG4gIHdpZGU6IFsn0J3Rj9C8JywgJ9CU0LDQstCw0LAnLCAn0JzRj9Cz0LzQsNGAJywgJ9Cb0YXQsNCz0LLQsCcsICfQn9Kv0YDRjdCyJywgJ9CR0LDQsNGB0LDQvScsICfQkdGP0LzQsdCwJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9CdJywgJ9CUJywgJ9CcJywgJ9CbJywgJ9CfJywgJ9CRJywgJ9CRJ10sXG4gIHNob3J0OiBbJ9Cd0Y8nLCAn0JTQsCcsICfQnNGPJywgJ9Cb0YUnLCAn0J/SrycsICfQkdCwJywgJ9CR0Y8nXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0J3Rj9C8JywgJ9CU0LDQsicsICfQnNGP0LMnLCAn0JvRhdCwJywgJ9Cf0q/RgCcsICfQkdCw0LAnLCAn0JHRj9C8J10sXG4gIHdpZGU6IFsn0L3Rj9C8JywgJ9C00LDQstCw0LAnLCAn0LzRj9Cz0LzQsNGAJywgJ9C70YXQsNCz0LLQsCcsICfQv9Kv0YDRjdCyJywgJ9Cx0LDQsNGB0LDQvScsICfQsdGP0LzQsdCwJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ9KvLtOpLicsXG4gICAgcG06ICfSry7RhS4nLFxuICAgIG1pZG5pZ2h0OiAn0YjTqdC906kg0LTRg9C90LQnLFxuICAgIG5vb246ICfSr9C0INC00YPQvdC0JyxcbiAgICBtb3JuaW5nOiAn06nQs9C706nTqScsXG4gICAgYWZ0ZXJub29uOiAn06nQtNOp0YAnLFxuICAgIGV2ZW5pbmc6ICfQvtGA0L7QuScsXG4gICAgbmlnaHQ6ICfRiNOp0L3TqSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9KvLtOpLicsXG4gICAgcG06ICfSry7RhS4nLFxuICAgIG1pZG5pZ2h0OiAn0YjTqdC906kg0LTRg9C90LQnLFxuICAgIG5vb246ICfSr9C0INC00YPQvdC0JyxcbiAgICBtb3JuaW5nOiAn06nQs9C706nTqScsXG4gICAgYWZ0ZXJub29uOiAn06nQtNOp0YAnLFxuICAgIGV2ZW5pbmc6ICfQvtGA0L7QuScsXG4gICAgbmlnaHQ6ICfRiNOp0L3TqSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn0q8u06kuJyxcbiAgICBwbTogJ9KvLtGFLicsXG4gICAgbWlkbmlnaHQ6ICfRiNOp0L3TqSDQtNGD0L3QtCcsXG4gICAgbm9vbjogJ9Kv0LQg0LTRg9C90LQnLFxuICAgIG1vcm5pbmc6ICfTqdCz0LvTqdOpJyxcbiAgICBhZnRlcm5vb246ICfTqdC006nRgCcsXG4gICAgZXZlbmluZzogJ9C+0YDQvtC5JyxcbiAgICBuaWdodDogJ9GI06nQvdOpJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijQvdGC06l80L3RgikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKNC90YLTqXzQvdGCKS9pLFxuICB3aWRlOiAvXijQvdC40LnRgtC40LnQvSDRgtC+0L7Qu9C70YvQvSDTqdC80L3TqXzQvdC40LnRgtC40LnQvSDRgtC+0L7Qu9C70YvQvSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXijQvdGC06l80L3QuNC50YLQuNC50L0g0YLQvtC+0LvQu9GL0L0g06nQvNC906kpL2ksIC9eKNC90YJ80L3QuNC50YLQuNC50L0g0YLQvtC+0LvQu9GL0L0pL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGl2fGlpaXxpaXxpKS9pLFxuICBhYmJyZXZpYXRlZDogL14oaXZ8aWlpfGlpfGkpINGD0LvQuNGA0LDQuy9pLFxuICB3aWRlOiAvXlsxLTRdLdGAINGD0LvQuNGA0LDQuy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvXihpKFxcc3wkKXwxKS9pLCAvXihpaShcXHN8JCl8MikvaSwgL14oaWlpKFxcc3wkKXwzKS9pLCAvXihpdihcXHN8JCl8NCkvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHhpaXx4aXx4fGl4fHZpaWl8dmlpfHZpfHZ8aXZ8aWlpfGlpfGkpL2ksXG4gIGFiYnJldmlhdGVkOiAvXigxLdGAINGB0LDRgHwyLdGAINGB0LDRgHwzLdGAINGB0LDRgHw0LdGAINGB0LDRgHw1LdGAINGB0LDRgHw2LdGAINGB0LDRgHw3LdGAINGB0LDRgHw4LdGAINGB0LDRgHw5LdGAINGB0LDRgHwxMC3RgCDRgdCw0YB8MTEt0YAg0YHQsNGAfDEyLdGAINGB0LDRgCkvaSxcbiAgd2lkZTogL14o0L3RjdCz0LTSr9Cz0Y3RjdGAINGB0LDRgHzRhdC+0ZHRgNC00YPQs9Cw0LDRgCDRgdCw0YB80LPRg9GA0LDQstC00YPQs9Cw0LDRgCDRgdCw0YB80LTTqdGA06nQstC00q/Qs9GN0Y3RgCDRgdCw0YB80YLQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgHzQt9GD0YDQs9Cw0LDQtNGD0LPQsNCw0YAg0YHQsNGAfNC00L7Qu9C+0L7QtNGD0LPQsNCw0YAg0YHQsNGAfNC90LDQudC80LTRg9Cz0LDQsNGAINGB0LDRgHzQtdGB0LTSr9Cz0Y3RjdGAINGB0LDRgHzQsNGA0LDQstC00YPQs9Cw0LDRgCDRgdCw0YB80LDRgNCy0LDQvSDQvdGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAfNCw0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YAg0YHQsNGAKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15pJC9pLCAvXmlpJC9pLCAvXmlpaSQvaSwgL15pdiQvaSwgL152JC9pLCAvXnZpJC9pLCAvXnZpaSQvaSwgL152aWlpJC9pLCAvXml4JC9pLCAvXngkL2ksIC9eeGkkL2ksIC9eeGlpJC9pXSxcbiAgYW55OiBbL14oMXzQvdGN0LPQtNKv0LPRjdGN0YApL2ksIC9eKDJ80YXQvtGR0YDQtNGD0LPQsNCw0YApL2ksIC9eKDN80LPRg9GA0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oNHzQtNOp0YDTqdCy0LTSr9Cz0Y3RjdGAKS9pLCAvXig1fNGC0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oNnzQt9GD0YDQs9Cw0LDQtNGD0LPQsNCw0YApL2ksIC9eKDd80LTQvtC70L7QvtC00YPQs9Cw0LDRgCkvaSwgL14oOHzQvdCw0LnQvNC00YPQs9Cw0LDRgCkvaSwgL14oOXzQtdGB0LTSr9Cz0Y3RjdGAKS9pLCAvXigxMHzQsNGA0LDQstC00YPQs9Cw0LDRgCkvaSwgL14oMTF80LDRgNCy0LDQvSDQvdGN0LPQtNKv0LPRjdGN0YApL2ksIC9eKDEyfNCw0YDQstCw0L0g0YXQvtGR0YDQtNGD0LPQsNCw0YApL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15b0L3QtNC80LvQv9Cx0LFdL2ksXG4gIHNob3J0OiAvXijQvdGPfNC00LB80LzRj3zQu9GFfNC/0q980LHQsHzQsdGPKS9pLFxuICBhYmJyZXZpYXRlZDogL14o0L3Rj9C8fNC00LDQsnzQvNGP0LN80LvRhdCwfNC/0q/RgHzQsdCw0LB80LHRj9C8KS9pLFxuICB3aWRlOiAvXijQvdGP0Lx80LTQsNCy0LDQsHzQvNGP0LPQvNCw0YB80LvRhdCw0LPQstCwfNC/0q/RgNGN0LJ80LHQsNCw0YHQsNC9fNCx0Y/QvNCx0LApL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL17QvS9pLCAvXtC0L2ksIC9e0LwvaSwgL17Quy9pLCAvXtC/L2ksIC9e0LEvaSwgL17QsS9pXSxcbiAgYW55OiBbL17QvdGPL2ksIC9e0LTQsC9pLCAvXtC80Y8vaSwgL17Qu9GFL2ksIC9e0L/Sry9pLCAvXtCx0LAvaSwgL17QsdGPL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o0q9cXC7TqVxcLnzSr1xcLtGFXFwufNGI06nQvdOpINC00YPQvdC0fNKv0LQg0LTRg9C90LR806nQs9C706nTqXzTqdC006nRgHzQvtGA0L7QuXzRiNOp0L3TqSkvaSxcbiAgYW55OiAvXijSr1xcLtOpXFwufNKvXFwu0YVcXC580YjTqdC906kg0LTRg9C90LR80q/QtCDQtNGD0L3QtHzTqdCz0LvTqdOpfNOp0LTTqdGAfNC+0YDQvtC5fNGI06nQvdOpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXtKvXFwu06lcXC4vaSxcbiAgICBwbTogL17Sr1xcLtGFXFwuL2ksXG4gICAgbWlkbmlnaHQ6IC9e0YjTqdC906kg0LTRg9C90LQvaSxcbiAgICBub29uOiAvXtKv0LQg0LTRg9C90LQvaSxcbiAgICBtb3JuaW5nOiAv06nQs9C706nTqS9pLFxuICAgIGFmdGVybm9vbjogL9Op0LTTqdGAL2ksXG4gICAgZXZlbmluZzogL9C+0YDQvtC5L2ksXG4gICAgbmlnaHQ6IC/RiNOp0L3TqS9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IE1vbmdvbGlhbiBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgTW9uZ29saWFuXG4gKiBAaXNvLTYzOS0yIG1vblxuICogQGF1dGhvciBCaWxndXVuIE9jaGlyYmF0IFtAYmlsZ3V1bjAyMDNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWxndXVuMDIwM31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ21uJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9