(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-vi-index-js"],{

/***/ "./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js ***!
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
    one: 'dưới 1 giây',
    other: 'dưới {{count}} giây'
  },
  xSeconds: {
    one: '1 giây',
    other: '{{count}} giây'
  },
  halfAMinute: 'nửa phút',
  lessThanXMinutes: {
    one: 'dưới 1 phút',
    other: 'dưới {{count}} phút'
  },
  xMinutes: {
    one: '1 phút',
    other: '{{count}} phút'
  },
  aboutXHours: {
    one: 'khoảng 1 giờ',
    other: 'khoảng {{count}} giờ'
  },
  xHours: {
    one: '1 giờ',
    other: '{{count}} giờ'
  },
  xDays: {
    one: '1 ngày',
    other: '{{count}} ngày'
  },
  aboutXWeeks: {
    one: 'khoảng 1 tuần',
    other: 'khoảng {{count}} tuần'
  },
  xWeeks: {
    one: '1 tuần',
    other: '{{count}} tuần'
  },
  aboutXMonths: {
    one: 'khoảng 1 tháng',
    other: 'khoảng {{count}} tháng'
  },
  xMonths: {
    one: '1 tháng',
    other: '{{count}} tháng'
  },
  aboutXYears: {
    one: 'khoảng 1 năm',
    other: 'khoảng {{count}} năm'
  },
  xYears: {
    one: '1 năm',
    other: '{{count}} năm'
  },
  overXYears: {
    one: 'hơn 1 năm',
    other: 'hơn {{count}} năm'
  },
  almostXYears: {
    one: 'gần 1 năm',
    other: 'gần {{count}} năm'
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
      return result + ' nữa';
    } else {
      return result + ' trước';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/vi/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/formatLong/index.js ***!
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
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: '{{date}} {{time}}',
  // ngày 25 tháng 08 năm 2017 23:25
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

/***/ "./node_modules/date-fns/locale/vi/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/vi/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/localize/index.js ***!
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
// Vietnamese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134
var eraValues = {
  narrow: ['TCN', 'SCN'],
  abbreviated: ['trước CN', 'sau CN'],
  wide: ['trước Công Nguyên', 'sau Công Nguyên']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  // I notice many news outlet use this "quý II/2018"
  wide: ['quý I', 'quý II', 'quý III', 'quý IV']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  wide: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']
};
// In Vietnamese date formatting, month number less than 10 expected to have leading zero
var formattingMonthValues = {
  narrow: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  abbreviated: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  wide: ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 12']
};
var dayValues = {
  narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  short: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  abbreviated: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  wide: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
};

// Vietnamese are used to AM/PM borrowing from English, hence `narrow` and
// `abbreviated` are just like English but I'm leaving the `wide`
// format being localized with abbreviations found in some systems (SÁng / CHiều);
// however, personally, I don't think `Chiều` sounds appropriate for `PM`
var dayPeriodValues = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'giữa trưa',
    morning: 'vào buổi sáng',
    afternoon: 'vào buổi chiều',
    evening: 'vào buổi tối',
    night: 'vào ban đêm'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === 'quarter') {
    // many news outlets use "quý I"...
    switch (number) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
    }
  } else if (unit === 'day') {
    // day of week in Vietnamese has ordinal number meaning,
    // so we should use them, else it'll sound weird
    switch (number) {
      case 1:
        return 'thứ 2';
      // meaning 2nd day but it's the first day of the week :D
      case 2:
        return 'thứ 3';
      // meaning 3rd day
      case 3:
        return 'thứ 4';
      // meaning 4th day and so on
      case 4:
        return 'thứ 5';
      case 5:
        return 'thứ 6';
      case 6:
        return 'thứ 7';
      case 7:
        return 'chủ nhật';
      // meaning Sunday, there's no 8th day :D
    }
  } else if (unit === 'week') {
    if (number === 1) {
      return 'thứ nhất';
    } else {
      return 'thứ ' + number;
    }
  } else if (unit === 'dayOfYear') {
    if (number === 1) {
      return 'đầu tiên';
    } else {
      return 'thứ ' + number;
    }
  }

  // there are no different forms of ordinal numbers in Vietnamese
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
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

/***/ "./node_modules/date-fns/locale/vi/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
};
var parseEraPatterns = {
  any: [/^t/i, /^s/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
};
var parseQuarterPatterns = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
};
var matchMonthPatterns = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
};
var parseMonthPatterns = {
  narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
  abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
  wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
};
var matchDayPatterns = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};
var parseDayPatterns = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
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
    defaultParseWidth: 'wide'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'wide'
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

/***/ "./node_modules/date-fns/locale/vi/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/vi/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/vi/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/vi/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/vi/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Vietnamese locale (Vietnam).
 * @language Vietnamese
 * @iso-639-2 vie
 * @author Thanh Tran [@trongthanh]{@link https://github.com/trongthanh}
 * @author Leroy Hopson [@lihop]{@link https://github.com/lihop}
 */
var locale = {
  code: 'vi',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1 /* First week of new year contains Jan 1st  */
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS92aS9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS92aS9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvdmkvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3ZpL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS92aS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUMxRmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxnSEFBMEM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsTUFBTTtBQUMxQjtBQUNBLFdBQVcsTUFBTSxHQUFHLE1BQU07QUFDMUIsYUFBYSxNQUFNLEdBQUcsTUFBTTtBQUM1QixZQUFZLE1BQU0sR0FBRyxNQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDaERhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNuQmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0R0FBd0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNqTmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBcUM7QUFDakYscUNBQXFDLG1CQUFPLENBQUMsb0hBQTRDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSTtBQUMxQiw0QkFBNEIsSUFBSTtBQUNoQyx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNsSGE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDNUUscUNBQXFDLG1CQUFPLENBQUMsOEZBQTRCO0FBQ3pFLHFDQUFxQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQywwRkFBMEI7QUFDdkUscUNBQXFDLG1CQUFPLENBQUMsb0ZBQXVCO0FBQ3BFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJ2ZW5kb3JzfmRhdGUtZm5zLWxvY2FsZS12aS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2TGsOG7m2kgMSBnacOieScsXG4gICAgb3RoZXI6ICdkxrDhu5tpIHt7Y291bnR9fSBnacOieSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIGdpw6J5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBnacOieSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdu4butYSBwaMO6dCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdkxrDhu5tpIDEgcGjDunQnLFxuICAgIG90aGVyOiAnZMaw4bubaSB7e2NvdW50fX0gcGjDunQnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBwaMO6dCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gcGjDunQnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAna2hv4bqjbmcgMSBnaeG7nScsXG4gICAgb3RoZXI6ICdraG/huqNuZyB7e2NvdW50fX0gZ2nhu50nXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgZ2nhu50nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGdp4budJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgbmfDoHknLFxuICAgIG90aGVyOiAne3tjb3VudH19IG5nw6B5J1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgdHXhuqduJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSB0deG6p24nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgdHXhuqduJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0deG6p24nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgdGjDoW5nJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSB0aMOhbmcnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIHRow6FuZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGjDoW5nJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgbsSDbScsXG4gICAgb3RoZXI6ICdraG/huqNuZyB7e2NvdW50fX0gbsSDbSdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBuxINtJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBuxINtJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnaMahbiAxIG7Eg20nLFxuICAgIG90aGVyOiAnaMahbiB7e2NvdW50fX0gbsSDbSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnZ+G6p24gMSBuxINtJyxcbiAgICBvdGhlcjogJ2fhuqduIHt7Y291bnR9fSBuxINtJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBu4buvYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIHRyxrDhu5tjJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICAvLyB0aOG7qSBTw6F1LCBuZ8OgeSAyNSB0aMOhbmcgMDggbsSDbSAyMDE3XG4gIGZ1bGw6IFwiRUVFRSwgJ25nw6B5JyBkIE1NTU0gJ27Eg20nIHlcIixcbiAgLy8gbmfDoHkgMjUgdGjDoW5nIDA4IG7Eg20gMjAxN1xuICBsb25nOiBcIiduZ8OgeScgZCBNTU1NICduxINtJyB5XCIsXG4gIC8vIDI1IHRoZyAwOCBuxINtIDIwMTdcbiAgbWVkaXVtOiBcImQgTU1NICduxINtJyB5XCIsXG4gIC8vIDI1LzA4LzIwMTdcbiAgc2hvcnQ6ICdkZC9NTS95J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICAvLyB0aOG7qSBTw6F1LCBuZ8OgeSAyNSB0aMOhbmcgMDggbsSDbSAyMDE3IDIzOjI1OjU5XG4gIGZ1bGw6ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIC8vIG5nw6B5IDI1IHRow6FuZyAwOCBuxINtIDIwMTcgMjM6MjVcbiAgbG9uZzogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiZWVlZSAndHXhuqduIHRyxrDhu5tjIHbDoG8gbMO6YycgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2jDtG0gcXVhIHbDoG8gbMO6YycgcFwiLFxuICB0b2RheTogXCInaMO0bSBuYXkgdsOgbyBsw7pjJyBwXCIsXG4gIHRvbW9ycm93OiBcIiduZ8OgeSBtYWkgdsOgbyBsw7pjJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ3Thu5tpIHbDoG8gbMO6YycgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG4vLyBWaWV0bmFtZXNlIGxvY2FsZSByZWZlcmVuY2U6IGh0dHA6Ly93d3cubG9jYWxlcGxhbmV0LmNvbS9pY3UvdmktVk4vaW5kZXguaHRtbFxuLy8gQ2FwaXRhbGl6YXRpb24gcmVmZXJlbmNlOiBodHRwOi8vaGNtdXAuZWR1LnZuL2luZGV4LnBocD9vcHRpb249Y29tX2NvbnRlbnQmdmlldz1hcnRpY2xlJmlkPTQxMDYlM0F2aXQtaG9hLXRyb25nLXZuLWJuLWhhbmgtY2hpbmgmY2F0aWQ9MjM0NSUzQXRoYW0ta2hvJkl0ZW1pZD00MTAzJmxhbmc9dmkmc2l0ZT0xMzRcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydUQ04nLCAnU0NOJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3RyxrDhu5tjIENOJywgJ3NhdSBDTiddLFxuICB3aWRlOiBbJ3RyxrDhu5tjIEPDtG5nIE5ndXnDqm4nLCAnc2F1IEPDtG5nIE5ndXnDqm4nXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJ1F1w70gMScsICdRdcO9IDInLCAnUXXDvSAzJywgJ1F1w70gNCddXG59O1xudmFyIGZvcm1hdHRpbmdRdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICAvLyBJIG5vdGljZSBtYW55IG5ld3Mgb3V0bGV0IHVzZSB0aGlzIFwicXXDvSBJSS8yMDE4XCJcbiAgd2lkZTogWydxdcO9IEknLCAncXXDvSBJSScsICdxdcO9IElJSScsICdxdcO9IElWJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1RoZyAxJywgJ1RoZyAyJywgJ1RoZyAzJywgJ1RoZyA0JywgJ1RoZyA1JywgJ1RoZyA2JywgJ1RoZyA3JywgJ1RoZyA4JywgJ1RoZyA5JywgJ1RoZyAxMCcsICdUaGcgMTEnLCAnVGhnIDEyJ10sXG4gIHdpZGU6IFsnVGjDoW5nIE3hu5l0JywgJ1Row6FuZyBIYWknLCAnVGjDoW5nIEJhJywgJ1Row6FuZyBUxrAnLCAnVGjDoW5nIE7Eg20nLCAnVGjDoW5nIFPDoXUnLCAnVGjDoW5nIELhuqN5JywgJ1Row6FuZyBUw6FtJywgJ1Row6FuZyBDaMOtbicsICdUaMOhbmcgTcaw4budaScsICdUaMOhbmcgTcaw4budaSBN4buZdCcsICdUaMOhbmcgTcaw4budaSBIYWknXVxufTtcbi8vIEluIFZpZXRuYW1lc2UgZGF0ZSBmb3JtYXR0aW5nLCBtb250aCBudW1iZXIgbGVzcyB0aGFuIDEwIGV4cGVjdGVkIHRvIGhhdmUgbGVhZGluZyB6ZXJvXG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgYWJicmV2aWF0ZWQ6IFsndGhnIDEnLCAndGhnIDInLCAndGhnIDMnLCAndGhnIDQnLCAndGhnIDUnLCAndGhnIDYnLCAndGhnIDcnLCAndGhnIDgnLCAndGhnIDknLCAndGhnIDEwJywgJ3RoZyAxMScsICd0aGcgMTInXSxcbiAgd2lkZTogWyd0aMOhbmcgMDEnLCAndGjDoW5nIDAyJywgJ3Row6FuZyAwMycsICd0aMOhbmcgMDQnLCAndGjDoW5nIDA1JywgJ3Row6FuZyAwNicsICd0aMOhbmcgMDcnLCAndGjDoW5nIDA4JywgJ3Row6FuZyAwOScsICd0aMOhbmcgMTAnLCAndGjDoW5nIDExJywgJ3Row6FuZyAxMiddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0NOJywgJ1QyJywgJ1QzJywgJ1Q0JywgJ1Q1JywgJ1Q2JywgJ1Q3J10sXG4gIHNob3J0OiBbJ0NOJywgJ1RoIDInLCAnVGggMycsICdUaCA0JywgJ1RoIDUnLCAnVGggNicsICdUaCA3J10sXG4gIGFiYnJldmlhdGVkOiBbJ0NOJywgJ1Ro4bupIDInLCAnVGjhu6kgMycsICdUaOG7qSA0JywgJ1Ro4bupIDUnLCAnVGjhu6kgNicsICdUaOG7qSA3J10sXG4gIHdpZGU6IFsnQ2jhu6cgTmjhuq10JywgJ1Ro4bupIEhhaScsICdUaOG7qSBCYScsICdUaOG7qSBUxrAnLCAnVGjhu6kgTsSDbScsICdUaOG7qSBTw6F1JywgJ1Ro4bupIELhuqN5J11cbn07XG5cbi8vIFZpZXRuYW1lc2UgYXJlIHVzZWQgdG8gQU0vUE0gYm9ycm93aW5nIGZyb20gRW5nbGlzaCwgaGVuY2UgYG5hcnJvd2AgYW5kXG4vLyBgYWJicmV2aWF0ZWRgIGFyZSBqdXN0IGxpa2UgRW5nbGlzaCBidXQgSSdtIGxlYXZpbmcgdGhlIGB3aWRlYFxuLy8gZm9ybWF0IGJlaW5nIGxvY2FsaXplZCB3aXRoIGFiYnJldmlhdGlvbnMgZm91bmQgaW4gc29tZSBzeXN0ZW1zIChTw4FuZyAvIENIaeG7gXUpO1xuLy8gaG93ZXZlciwgcGVyc29uYWxseSwgSSBkb24ndCB0aGluayBgQ2hp4buBdWAgc291bmRzIGFwcHJvcHJpYXRlIGZvciBgUE1gXG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICAvLyBuYXJyb3cgZGF0ZSBwZXJpb2QgaXMgZXh0cmVtZWx5IHJhcmUgaW4gVmlldG5hbWVzZVxuICAvLyBJIHVzZWQgYWJicmV2aWF0ZWQgZm9ybSBmb3Igbm9vbiwgbW9ybmluZyBhbmQgYWZ0ZXJub29uXG4gIC8vIHdoaWNoIGFyZSByZWdjb25pemFibGUgYnkgVmlldG5hbWVzZSwgb3RoZXJzIGNhbm5vdCBiZSBhbnkgc2hvcnRlclxuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ27hu61hIMSRw6ptJyxcbiAgICBub29uOiAndHInLFxuICAgIG1vcm5pbmc6ICdzZycsXG4gICAgYWZ0ZXJub29uOiAnY2gnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ27hu61hIMSRw6ptJyxcbiAgICBub29uOiAndHLGsGEnLFxuICAgIG1vcm5pbmc6ICdzw6FuZycsXG4gICAgYWZ0ZXJub29uOiAnY2hp4buBdScsXG4gICAgZXZlbmluZzogJ3Thu5FpJyxcbiAgICBuaWdodDogJ8SRw6ptJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdTQScsXG4gICAgcG06ICdDSCcsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyxrBhJyxcbiAgICBtb3JuaW5nOiAnc8OhbmcnLFxuICAgIGFmdGVybm9vbjogJ2NoaeG7gXUnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ27hu61hIMSRw6ptJyxcbiAgICBub29uOiAndHInLFxuICAgIG1vcm5pbmc6ICdzZycsXG4gICAgYWZ0ZXJub29uOiAnY2gnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ27hu61hIMSRw6ptJyxcbiAgICBub29uOiAndHLGsGEnLFxuICAgIG1vcm5pbmc6ICdzw6FuZycsXG4gICAgYWZ0ZXJub29uOiAnY2hp4buBdScsXG4gICAgZXZlbmluZzogJ3Thu5FpJyxcbiAgICBuaWdodDogJ8SRw6ptJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdTQScsXG4gICAgcG06ICdDSCcsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ2dp4buvYSB0csawYScsXG4gICAgbW9ybmluZzogJ3bDoG8gYnXhu5VpIHPDoW5nJyxcbiAgICBhZnRlcm5vb246ICd2w6BvIGJ14buVaSBjaGnhu4F1JyxcbiAgICBldmVuaW5nOiAndsOgbyBideG7lWkgdOG7kWknLFxuICAgIG5pZ2h0OiAndsOgbyBiYW4gxJHDqm0nXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciB1bml0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQ7XG4gIGlmICh1bml0ID09PSAncXVhcnRlcicpIHtcbiAgICAvLyBtYW55IG5ld3Mgb3V0bGV0cyB1c2UgXCJxdcO9IElcIi4uLlxuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAnSSc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAnSUknO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gJ0lJSSc7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAnSVYnO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1bml0ID09PSAnZGF5Jykge1xuICAgIC8vIGRheSBvZiB3ZWVrIGluIFZpZXRuYW1lc2UgaGFzIG9yZGluYWwgbnVtYmVyIG1lYW5pbmcsXG4gICAgLy8gc28gd2Ugc2hvdWxkIHVzZSB0aGVtLCBlbHNlIGl0J2xsIHNvdW5kIHdlaXJkXG4gICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICd0aOG7qSAyJztcbiAgICAgIC8vIG1lYW5pbmcgMm5kIGRheSBidXQgaXQncyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIDpEXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAndGjhu6kgMyc7XG4gICAgICAvLyBtZWFuaW5nIDNyZCBkYXlcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuICd0aOG7qSA0JztcbiAgICAgIC8vIG1lYW5pbmcgNHRoIGRheSBhbmQgc28gb25cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuICd0aOG7qSA1JztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuICd0aOG7qSA2JztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuICd0aOG7qSA3JztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuICdjaOG7pyBuaOG6rXQnO1xuICAgICAgLy8gbWVhbmluZyBTdW5kYXksIHRoZXJlJ3Mgbm8gOHRoIGRheSA6RFxuICAgIH1cbiAgfSBlbHNlIGlmICh1bml0ID09PSAnd2VlaycpIHtcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICByZXR1cm4gJ3Ro4bupIG5o4bqldCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndGjhu6kgJyArIG51bWJlcjtcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheU9mWWVhcicpIHtcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICByZXR1cm4gJ8SR4bqndSB0acOqbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndGjhu6kgJyArIG51bWJlcjtcbiAgICB9XG4gIH1cblxuICAvLyB0aGVyZSBhcmUgbm8gZGlmZmVyZW50IGZvcm1zIG9mIG9yZGluYWwgbnVtYmVycyBpbiBWaWV0bmFtZXNlXG4gIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ01vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKS9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14odGNufHNjbikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHRyxrDhu5tjIENOfHNhdSBDTikvaSxcbiAgd2lkZTogL14odHLGsOG7m2MgQ8O0bmcgTmd1ecOqbnxzYXUgQ8O0bmcgTmd1ecOqbikvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnQvaSwgL15zL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKFsxMjM0XXxpezEsM312PykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecShbMTIzNF18aXsxLDN9dj8pL2ksXG4gIHdpZGU6IC9ecXXDvSAoWzEyMzRdfGl7MSwzfXY/KS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvKDF8aSkkL2ksIC8oMnxpaSkkL2ksIC8oM3xpaWkpJC9pLCAvKDR8aXYpJC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIC8vIG1vbnRoIG51bWJlciBtYXkgY29udGFpbiBsZWFkaW5nIDAsICd0aGcnIHByZWZpeCBtYXkgaGF2ZSBzcGFjZSwgdW5kZXJzY29yZSBvciBlbXB0eSBiZWZvcmUgbnVtYmVyXG4gIC8vIG5vdGUgdGhlIG9yZGVyIG9mICcxJyBzaW5jZSBpdCBpcyBhIHN1Yi1zdHJpbmcgb2YgJzEwJywgc28gbXVzdCBiZSBsb3dlciBwcmlvcml0eVxuICBuYXJyb3c6IC9eKDA/WzItOV18MTB8MTF8MTJ8MD8xKS9pLFxuICAvLyBub3RlIHRoZSBvcmRlciBvZiAndGhnIDEnIHNpbmNlIGl0IGlzIHN1Yi1zdHJpbmcgb2YgJ3RoZyAxMCcsIHNvIG11c3QgYmUgbG93ZXIgcHJpb3JpdHlcbiAgYWJicmV2aWF0ZWQ6IC9edGhnWyBfXT8oMD9bMS05XSg/IVxcZCl8MTB8MTF8MTIpL2ksXG4gIC8vIG5vdGUgdGhlIG9yZGVyIG9mICdNxrDhu51pJyBzaW5jZSBpdCBpcyBzdWItc3RyaW5nIG9mIE3GsOG7nWkgTeG7mXQsIHNvIG11c3QgYmUgbG93ZXIgcHJpb3JpdHlcbiAgd2lkZTogL150aMOhbmcgPyhN4buZdHxIYWl8QmF8VMawfE7Eg218U8OhdXxC4bqjeXxUw6FtfENow61ufE3GsOG7nWl8Tcaw4budaSA/TeG7mXR8Tcaw4budaSA/SGFpfDA/WzEtOV0oPyFcXGQpfDEwfDExfDEyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbLzA/MSQvaSwgLzA/Mi9pLCAvMy8sIC80LywgLzUvLCAvNi8sIC83LywgLzgvLCAvOS8sIC8xMC8sIC8xMS8sIC8xMi9dLFxuICBhYmJyZXZpYXRlZDogWy9edGhnWyBfXT8wPzEoPyFcXGQpL2ksIC9edGhnWyBfXT8wPzIvaSwgL150aGdbIF9dPzA/My9pLCAvXnRoZ1sgX10/MD80L2ksIC9edGhnWyBfXT8wPzUvaSwgL150aGdbIF9dPzA/Ni9pLCAvXnRoZ1sgX10/MD83L2ksIC9edGhnWyBfXT8wPzgvaSwgL150aGdbIF9dPzA/OS9pLCAvXnRoZ1sgX10/MTAvaSwgL150aGdbIF9dPzExL2ksIC9edGhnWyBfXT8xMi9pXSxcbiAgd2lkZTogWy9edGjDoW5nID8oTeG7mXR8MD8xKD8hXFxkKSkvaSwgL150aMOhbmcgPyhIYWl8MD8yKS9pLCAvXnRow6FuZyA/KEJhfDA/MykvaSwgL150aMOhbmcgPyhUxrB8MD80KS9pLCAvXnRow6FuZyA/KE7Eg218MD81KS9pLCAvXnRow6FuZyA/KFPDoXV8MD82KS9pLCAvXnRow6FuZyA/KELhuqN5fDA/NykvaSwgL150aMOhbmcgPyhUw6FtfDA/OCkvaSwgL150aMOhbmcgPyhDaMOtbnwwPzkpL2ksIC9edGjDoW5nID8oTcaw4budaXwxMCkvaSwgL150aMOhbmcgPyhNxrDhu51pID9N4buZdHwxMSkvaSwgL150aMOhbmcgPyhNxrDhu51pID9IYWl8MTIpL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oQ058VDJ8VDN8VDR8VDV8VDZ8VDcpL2ksXG4gIHNob3J0OiAvXihDTnxUaCA/MnxUaCA/M3xUaCA/NHxUaCA/NXxUaCA/NnxUaCA/NykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKENOfFRoID8yfFRoID8zfFRoID80fFRoID81fFRoID82fFRoID83KS9pLFxuICB3aWRlOiAvXihDaOG7pyA/Tmjhuq10fENow7phID9OaOG6rXR8dGjhu6kgP0hhaXx0aOG7qSA/QmF8dGjhu6kgP1TGsHx0aOG7qSA/TsSDbXx0aOG7qSA/U8OhdXx0aOG7qSA/QuG6o3kpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL0NOL2ksIC8yL2ksIC8zL2ksIC80L2ksIC81L2ksIC82L2ksIC83L2ldLFxuICBzaG9ydDogWy9DTi9pLCAvMi9pLCAvMy9pLCAvNC9pLCAvNS9pLCAvNi9pLCAvNy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvQ04vaSwgLzIvaSwgLzMvaSwgLzQvaSwgLzUvaSwgLzYvaSwgLzcvaV0sXG4gIHdpZGU6IFsvKENo4bunfENow7phKSA/Tmjhuq10L2ksIC9IYWkvaSwgL0JhL2ksIC9UxrAvaSwgL07Eg20vaSwgL1PDoXUvaSwgL0LhuqN5L2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG7hu61hIMSRw6ptfHRyxrBhfChnaeG7nSkgKHPDoW5nfGNoaeG7gXV8dOG7kWl8xJHDqm0pKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYW18cG18buG7rWEgxJHDqm18dHLGsGF8KGdp4budKSAoc8Ohbmd8Y2hp4buBdXx04buRaXzEkcOqbSkpL2ksXG4gIHdpZGU6IC9eKGNoW15pXSp8c2F8buG7rWEgxJHDqm18dHLGsGF8KGdp4budKSAoc8Ohbmd8Y2hp4buBdXx04buRaXzEkcOqbSkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eKGF8c2EpL2ksXG4gICAgcG06IC9eKHB8Y2hbXmldKikvaSxcbiAgICBtaWRuaWdodDogL27hu61hIMSRw6ptL2ksXG4gICAgbm9vbjogL3RyxrBhL2ksXG4gICAgbW9ybmluZzogL3PDoW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvY2hp4buBdS9pLFxuICAgIGV2ZW5pbmc6IC904buRaS9pLFxuICAgIG5pZ2h0OiAvXsSRw6ptL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgVmlldG5hbWVzZSBsb2NhbGUgKFZpZXRuYW0pLlxuICogQGxhbmd1YWdlIFZpZXRuYW1lc2VcbiAqIEBpc28tNjM5LTIgdmllXG4gKiBAYXV0aG9yIFRoYW5oIFRyYW4gW0B0cm9uZ3RoYW5oXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vdHJvbmd0aGFuaH1cbiAqIEBhdXRob3IgTGVyb3kgSG9wc29uIFtAbGlob3Bde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9saWhvcH1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ3ZpJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSAvKiBGaXJzdCB3ZWVrIG9mIG5ldyB5ZWFyIGNvbnRhaW5zIEphbiAxc3QgICovXG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=