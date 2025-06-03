(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-zh-TW-index-js"],{

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '少於 1 秒',
    other: '少於 {{count}} 秒'
  },
  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },
  halfAMinute: '半分鐘',
  lessThanXMinutes: {
    one: '少於 1 分鐘',
    other: '少於 {{count}} 分鐘'
  },
  xMinutes: {
    one: '1 分鐘',
    other: '{{count}} 分鐘'
  },
  xHours: {
    one: '1 小時',
    other: '{{count}} 小時'
  },
  aboutXHours: {
    one: '大約 1 小時',
    other: '大約 {{count}} 小時'
  },
  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },
  aboutXWeeks: {
    one: '大約 1 個星期',
    other: '大約 {{count}} 個星期'
  },
  xWeeks: {
    one: '1 個星期',
    other: '{{count}} 個星期'
  },
  aboutXMonths: {
    one: '大約 1 個月',
    other: '大約 {{count}} 個月'
  },
  xMonths: {
    one: '1 個月',
    other: '{{count}} 個月'
  },
  aboutXYears: {
    one: '大約 1 年',
    other: '大約 {{count}} 年'
  },
  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },
  overXYears: {
    one: '超過 1 年',
    other: '超過 {{count}} 年'
  },
  almostXYears: {
    one: '將近 1 年',
    other: '將近 {{count}} 年'
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
      return result + '內';
    } else {
      return result + '前';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/formatLong/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/formatLong/index.js ***!
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
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: 'yyyy-MM-dd',
  short: 'yy-MM-dd'
};
var timeFormats = {
  full: 'zzzz a h:mm:ss',
  long: 'z a h:mm:ss',
  medium: 'a h:mm:ss',
  short: 'a h:mm'
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

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/formatRelative/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'上個'eeee p",
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: "'下個'eeee p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/localize/index.js ***!
  \*******************************************************************/
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
  narrow: ['前', '公元'],
  abbreviated: ['前', '公元'],
  wide: ['公元前', '公元']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['第一刻', '第二刻', '第三刻', '第四刻'],
  wide: ['第一刻鐘', '第二刻鐘', '第三刻鐘', '第四刻鐘']
};
var monthValues = {
  narrow: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  abbreviated: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var dayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'],
  short: ['日', '一', '二', '三', '四', '五', '六'],
  abbreviated: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};
var dayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜間'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜間'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜間'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜間'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  switch (options === null || options === void 0 ? void 0 : options.unit) {
    case 'date':
      return number + '日';
    case 'hour':
      return number + '時';
    case 'minute':
      return number + '分';
    case 'second':
      return number + '秒';
    default:
      return '第 ' + number;
  }
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

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/match/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/match/index.js ***!
  \****************************************************************/
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
var matchOrdinalNumberPattern = /^(第\s*)?\d+(日|時|分|秒)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
};
var parseEraPatterns = {
  any: [/^(前)/i, /^(公元)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻鐘/i
};
var parseQuarterPatterns = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
};
var matchMonthPatterns = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
};
var parseMonthPatterns = {
  narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
  any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
};
var matchDayPatterns = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^週[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
};
var parseDayPatterns = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
};
var matchDayPeriodPatterns = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
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

/***/ "./node_modules/date-fns/locale/zh-TW/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/zh-TW/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/zh-TW/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/zh-TW/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/zh-TW/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/zh-TW/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Chinese Traditional locale.
 * @language Chinese Traditional
 * @iso-639-2 zho
 * @author tonypai [@tpai]{@link https://github.com/tpai}
 * @author Jack Hsu [@jackhsu978]{@link https://github.com/jackhsu978}
 * @author Terrence Lam [@skyuplam]{@link https://github.com/skyuplam}
 */
var locale = {
  code: 'zh-TW',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3poLVRXL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS96aC1UVy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS96aC1UVy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvemgtVFcvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3poLVRXL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS96aC1UVy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixH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Y2FsZS16aC1UVy1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ+WwkeaWvCAxIOenkicsXG4gICAgb3RoZXI6ICflsJHmlrwge3tjb3VudH19IOenkidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIOenkicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g56eSJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ+WNiuWIhumQmCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICflsJHmlrwgMSDliIbpkJgnLFxuICAgIG90aGVyOiAn5bCR5pa8IHt7Y291bnR9fSDliIbpkJgnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDliIbpkJgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWIhumQmCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDlsI/mmYInLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWwj+aZgidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICflpKfntIQgMSDlsI/mmYInLFxuICAgIG90aGVyOiAn5aSn57SEIHt7Y291bnR9fSDlsI/mmYInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDlpKknLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWkqSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICflpKfntIQgMSDlgIvmmJ/mnJ8nLFxuICAgIG90aGVyOiAn5aSn57SEIHt7Y291bnR9fSDlgIvmmJ/mnJ8nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEg5YCL5pif5pyfJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDlgIvmmJ/mnJ8nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ+Wkp+e0hCAxIOWAi+aciCcsXG4gICAgb3RoZXI6ICflpKfntIQge3tjb3VudH19IOWAi+aciCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg5YCL5pyIJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDlgIvmnIgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn5aSn57SEIDEg5bm0JyxcbiAgICBvdGhlcjogJ+Wkp+e0hCB7e2NvdW50fX0g5bm0J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIOW5tCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g5bm0J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn6LaF6YGOIDEg5bm0JyxcbiAgICBvdGhlcjogJ+i2hemBjiB7e2NvdW50fX0g5bm0J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICflsIfov5EgMSDlubQnLFxuICAgIG90aGVyOiAn5bCH6L+RIHt7Y291bnR9fSDlubQnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn5YWnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfliY0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiKSk7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwieSflubQnTSfmnIgnZCfml6UnIEVFRUVcIixcbiAgbG9uZzogXCJ5J+W5tCdNJ+aciCdkJ+aXpSdcIixcbiAgbWVkaXVtOiAneXl5eS1NTS1kZCcsXG4gIHNob3J0OiAneXktTU0tZGQnXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnenp6eiBhIGg6bW06c3MnLFxuICBsb25nOiAneiBhIGg6bW06c3MnLFxuICBtZWRpdW06ICdhIGg6bW06c3MnLFxuICBzaG9ydDogJ2EgaDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBsb25nOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBtZWRpdW06ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0ge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCIn5LiK5YCLJ2VlZWUgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ+aYqOWkqScgcFwiLFxuICB0b2RheTogXCIn5LuK5aSpJyBwXCIsXG4gIHRvbW9ycm93OiBcIifmmI7lpKknIHBcIixcbiAgbmV4dFdlZWs6IFwiJ+S4i+WAiydlZWVlIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+WJjScsICflhazlhYMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn5YmNJywgJ+WFrOWFgyddLFxuICB3aWRlOiBbJ+WFrOWFg+WJjScsICflhazlhYMnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWyfnrKzkuIDliLsnLCAn56ys5LqM5Yi7JywgJ+esrOS4ieWIuycsICfnrKzlm5vliLsnXSxcbiAgd2lkZTogWyfnrKzkuIDliLvpkJgnLCAn56ys5LqM5Yi76ZCYJywgJ+esrOS4ieWIu+mQmCcsICfnrKzlm5vliLvpkJgnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgJ+WNgScsICfljYHkuIAnLCAn5Y2B5LqMJ10sXG4gIGFiYnJldmlhdGVkOiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG4gIHdpZGU6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcbiAgc2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG4gIGFiYnJldmlhdGVkOiBbJ+mAseaXpScsICfpgLHkuIAnLCAn6YCx5LqMJywgJ+mAseS4iScsICfpgLHlm5snLCAn6YCx5LqUJywgJ+mAseWFrSddLFxuICB3aWRlOiBbJ+aYn+acn+aXpScsICfmmJ/mnJ/kuIAnLCAn5pif5pyf5LqMJywgJ+aYn+acn+S4iScsICfmmJ/mnJ/lm5snLCAn5pif5pyf5LqUJywgJ+aYn+acn+WFrSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfkuIonLFxuICAgIHBtOiAn5LiLJyxcbiAgICBtaWRuaWdodDogJ+WHjOaZqCcsXG4gICAgbm9vbjogJ+WNiCcsXG4gICAgbW9ybmluZzogJ+aXqScsXG4gICAgYWZ0ZXJub29uOiAn5LiL5Y2IJyxcbiAgICBldmVuaW5nOiAn5pmaJyxcbiAgICBuaWdodDogJ+WknCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+S4iuWNiCcsXG4gICAgcG06ICfkuIvljYgnLFxuICAgIG1pZG5pZ2h0OiAn5YeM5pmoJyxcbiAgICBub29uOiAn5Lit5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pep5pmoJyxcbiAgICBhZnRlcm5vb246ICfkuK3ljYgnLFxuICAgIGV2ZW5pbmc6ICfmmZrkuIonLFxuICAgIG5pZ2h0OiAn5aSc6ZaTJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfkuIrljYgnLFxuICAgIHBtOiAn5LiL5Y2IJyxcbiAgICBtaWRuaWdodDogJ+WHjOaZqCcsXG4gICAgbm9vbjogJ+S4reWNiCcsXG4gICAgbW9ybmluZzogJ+aXqeaZqCcsXG4gICAgYWZ0ZXJub29uOiAn5Lit5Y2IJyxcbiAgICBldmVuaW5nOiAn5pma5LiKJyxcbiAgICBuaWdodDogJ+WknOmWkydcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ+S4iicsXG4gICAgcG06ICfkuIsnLFxuICAgIG1pZG5pZ2h0OiAn5YeM5pmoJyxcbiAgICBub29uOiAn5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pepJyxcbiAgICBhZnRlcm5vb246ICfkuIvljYgnLFxuICAgIGV2ZW5pbmc6ICfmmZonLFxuICAgIG5pZ2h0OiAn5aScJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn5LiK5Y2IJyxcbiAgICBwbTogJ+S4i+WNiCcsXG4gICAgbWlkbmlnaHQ6ICflh4zmmagnLFxuICAgIG5vb246ICfkuK3ljYgnLFxuICAgIG1vcm5pbmc6ICfml6nmmagnLFxuICAgIGFmdGVybm9vbjogJ+S4reWNiCcsXG4gICAgZXZlbmluZzogJ+aZmuS4iicsXG4gICAgbmlnaHQ6ICflpJzplpMnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+S4iuWNiCcsXG4gICAgcG06ICfkuIvljYgnLFxuICAgIG1pZG5pZ2h0OiAn5YeM5pmoJyxcbiAgICBub29uOiAn5Lit5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pep5pmoJyxcbiAgICBhZnRlcm5vb246ICfkuK3ljYgnLFxuICAgIGV2ZW5pbmc6ICfmmZrkuIonLFxuICAgIG5pZ2h0OiAn5aSc6ZaTJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBzd2l0Y2ggKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0KSB7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gbnVtYmVyICsgJ+aXpSc7XG4gICAgY2FzZSAnaG91cic6XG4gICAgICByZXR1cm4gbnVtYmVyICsgJ+aZgic7XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICAgIHJldHVybiBudW1iZXIgKyAn5YiGJztcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIG51bWJlciArICfnp5InO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ+esrCAnICsgbnVtYmVyO1xuICB9XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCIpKTtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14o56ysXFxzKik/XFxkKyjml6V85pmCfOWIhnznp5IpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14o5YmNKS9pLFxuICBhYmJyZXZpYXRlZDogL14o5YmNKS9pLFxuICB3aWRlOiAvXijlhazlhYPliY185YWs5YWDKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eKOWJjSkvaSwgL14o5YWs5YWDKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL17nrKxb5LiA5LqM5LiJ5ZubXeWIuy9pLFxuICB3aWRlOiAvXuesrFvkuIDkuozkuInlm5td5Yi76ZCYL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8oMXzkuIApL2ksIC8oMnzkuowpL2ksIC8oM3zkuIkpL2ksIC8oNHzlm5spL2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXijkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nXzljYFb5LqM5LiAXSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKOS4gHzkuox85LiJfOWbm3zkupR85YWtfOS4g3zlhat85LmdfOWNgVvkuozkuIBdfFxcZHwxWzEyXSnmnIgvaSxcbiAgd2lkZTogL14o5LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ185Y2BW+S6jOS4gF0p5pyIL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXuS4gC9pLCAvXuS6jC9pLCAvXuS4iS9pLCAvXuWbmy9pLCAvXuS6lC9pLCAvXuWFrS9pLCAvXuS4gy9pLCAvXuWFqy9pLCAvXuS5nS9pLCAvXuWNgSg/ISjkuIB85LqMKSkvaSwgL17ljYHkuIAvaSwgL17ljYHkuowvaV0sXG4gIGFueTogWy9e5LiAfDEvaSwgL17kuox8Mi9pLCAvXuS4iXwzL2ksIC9e5ZubfDQvaSwgL17kupR8NS9pLCAvXuWFrXw2L2ksIC9e5LiDfDcvaSwgL17lhat8OC9pLCAvXuS5nXw5L2ksIC9e5Y2BKD8hKOS4gHzkuowpKXwxMC9pLCAvXuWNgeS4gHwxMS9pLCAvXuWNgeS6jHwxMi9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW+S4gOS6jOS4ieWbm+S6lOWFreaXpV0vaSxcbiAgc2hvcnQ6IC9eW+S4gOS6jOS4ieWbm+S6lOWFreaXpV0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9e6YCxW+S4gOS6jOS4ieWbm+S6lOWFreaXpV0vaSxcbiAgd2lkZTogL17mmJ/mnJ9b5LiA5LqM5LiJ5Zub5LqU5YWt5pelXS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIGFueTogWy/ml6UvaSwgL+S4gC9pLCAv5LqML2ksIC/kuIkvaSwgL+Wbmy9pLCAv5LqUL2ksIC/lha0vaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiAvXijkuIrljYg/fOS4i+WNiD985Y2I5aScfFvkuK3mraNd5Y2IfOaXqeS4ij985LiL5Y2IfOaZmuS4ij985YeM5pmoKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXuS4iuWNiD8vaSxcbiAgICBwbTogL17kuIvljYg/L2ksXG4gICAgbWlkbmlnaHQ6IC9e5Y2I5aScL2ksXG4gICAgbm9vbjogL15b5Lit5q2jXeWNiC9pLFxuICAgIG1vcm5pbmc6IC9e5pep5LiKL2ksXG4gICAgYWZ0ZXJub29uOiAvXuS4i+WNiC9pLFxuICAgIGV2ZW5pbmc6IC9e5pma5LiKPy9pLFxuICAgIG5pZ2h0OiAvXuWHjOaZqC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IENoaW5lc2UgVHJhZGl0aW9uYWwgbG9jYWxlLlxuICogQGxhbmd1YWdlIENoaW5lc2UgVHJhZGl0aW9uYWxcbiAqIEBpc28tNjM5LTIgemhvXG4gKiBAYXV0aG9yIHRvbnlwYWkgW0B0cGFpXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vdHBhaX1cbiAqIEBhdXRob3IgSmFjayBIc3UgW0BqYWNraHN1OTc4XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vamFja2hzdTk3OH1cbiAqIEBhdXRob3IgVGVycmVuY2UgTGFtIFtAc2t5dXBsYW1de0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9za3l1cGxhbX1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ3poLVRXJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9