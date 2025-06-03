(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-lt-index-js"],{

/***/ "./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var translations = {
  xseconds_other: 'sekundė_sekundžių_sekundes',
  xminutes_one: 'minutė_minutės_minutę',
  xminutes_other: 'minutės_minučių_minutes',
  xhours_one: 'valanda_valandos_valandą',
  xhours_other: 'valandos_valandų_valandas',
  xdays_one: 'diena_dienos_dieną',
  xdays_other: 'dienos_dienų_dienas',
  xweeks_one: 'savaitė_savaitės_savaitę',
  xweeks_other: 'savaitės_savaičių_savaites',
  xmonths_one: 'mėnuo_mėnesio_mėnesį',
  xmonths_other: 'mėnesiai_mėnesių_mėnesius',
  xyears_one: 'metai_metų_metus',
  xyears_other: 'metai_metų_metus',
  about: 'apie',
  over: 'daugiau nei',
  almost: 'beveik',
  lessthan: 'mažiau nei'
};
var translateSeconds = function translateSeconds(_number, addSuffix, _key, isFuture) {
  if (!addSuffix) {
    return 'kelios sekundės';
  } else {
    return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
  }
};
var translateSingular = function translateSingular(_number, addSuffix, key, isFuture) {
  return !addSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
};
var translate = function translate(number, addSuffix, key, isFuture) {
  var result = number + ' ';
  if (number === 1) {
    return result + translateSingular(number, addSuffix, key, isFuture);
  } else if (!addSuffix) {
    return result + (special(number) ? forms(key)[1] : forms(key)[0]);
  } else {
    if (isFuture) {
      return result + forms(key)[1];
    } else {
      return result + (special(number) ? forms(key)[1] : forms(key)[2]);
    }
  }
};
function special(number) {
  return number % 10 === 0 || number > 10 && number < 20;
}
function forms(key) {
  return translations[key].split('_');
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: translateSeconds,
    other: translate
  },
  xSeconds: {
    one: translateSeconds,
    other: translate
  },
  halfAMinute: 'pusė minutės',
  lessThanXMinutes: {
    one: translateSingular,
    other: translate
  },
  xMinutes: {
    one: translateSingular,
    other: translate
  },
  aboutXHours: {
    one: translateSingular,
    other: translate
  },
  xHours: {
    one: translateSingular,
    other: translate
  },
  xDays: {
    one: translateSingular,
    other: translate
  },
  aboutXWeeks: {
    one: translateSingular,
    other: translate
  },
  xWeeks: {
    one: translateSingular,
    other: translate
  },
  aboutXMonths: {
    one: translateSingular,
    other: translate
  },
  xMonths: {
    one: translateSingular,
    other: translate
  },
  aboutXYears: {
    one: translateSingular,
    other: translate
  },
  xYears: {
    one: translateSingular,
    other: translate
  },
  overXYears: {
    one: translateSingular,
    other: translate
  },
  almostXYears: {
    one: translateSingular,
    other: translate
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var adverb = token.match(/about|over|almost|lessthan/i);
  var unit = adverb ? token.replace(adverb[0], '') : token;
  var isFuture = (options === null || options === void 0 ? void 0 : options.comparison) !== undefined && options.comparison > 0;
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + '_one', isFuture);
  } else {
    result = tokenValue.other(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + '_other', isFuture);
  }
  if (adverb) {
    var _key2 = adverb[0].toLowerCase();
    result = translations[_key2] + ' ' + result;
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'po ' + result;
    } else {
      return 'prieš ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/lt/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/formatLong/index.js ***!
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
  full: "y 'm'. MMMM d 'd'., EEEE",
  long: "y 'm'. MMMM d 'd'.",
  medium: 'y-MM-dd',
  short: 'y-MM-dd'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
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

/***/ "./node_modules/date-fns/locale/lt/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'Praėjusį' eeee p",
  yesterday: "'Vakar' p",
  today: "'Šiandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: 'eeee p',
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/lt/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/localize/index.js ***!
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
  narrow: ['pr. Kr.', 'po Kr.'],
  abbreviated: ['pr. Kr.', 'po Kr.'],
  wide: ['prieš Kristų', 'po Kristaus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I ketv.', 'II ketv.', 'III ketv.', 'IV ketv.'],
  wide: ['I ketvirtis', 'II ketvirtis', 'III ketvirtis', 'IV ketvirtis']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I k.', 'II k.', 'III k.', 'IV k.'],
  wide: ['I ketvirtis', 'II ketvirtis', 'III ketvirtis', 'IV ketvirtis']
};
var monthValues = {
  narrow: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  abbreviated: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  wide: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis']
};
var formattingMonthValues = {
  narrow: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  abbreviated: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  wide: ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio']
};
var dayValues = {
  narrow: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  short: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
  abbreviated: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  wide: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis']
};
var formattingDayValues = {
  narrow: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  short: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
  abbreviated: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  wide: ['sekmadienį', 'pirmadienį', 'antradienį', 'trečiadienį', 'ketvirtadienį', 'penktadienį', 'šeštadienį']
};
var dayPeriodValues = {
  narrow: {
    am: 'pr. p.',
    pm: 'pop.',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  },
  abbreviated: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  },
  wide: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'pr. p.',
    pm: 'pop.',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  },
  abbreviated: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  },
  wide: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '-oji';
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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

/***/ "./node_modules/date-fns/locale/lt/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(-oji)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
  abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
  wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i
};
var parseEraPatterns = {
  wide: [/prieš/i, /(po|mūsų)/i],
  any: [/^pr/i, /^(po|m)/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234])/i,
  abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
  wide: /^(I|II|III|IV)\s?ketvirtis/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/I$/i, /II$/i, /III/i, /IV/i]
};
var matchMonthPatterns = {
  narrow: /^[svkbglr]/i,
  abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
  wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i
};
var parseMonthPatterns = {
  narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i],
  any: [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i]
};
var matchDayPatterns = {
  narrow: /^[spatkš]/i,
  short: /^(sk|pr|an|tr|kt|pn|št)/i,
  abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
  wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
  wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
  any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
  any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^pr/i,
    pm: /^pop./i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
  },
  any: {
    am: /^pr/i,
    pm: /^popiet$/i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
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

/***/ "./node_modules/date-fns/locale/lt/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/lt/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/lt/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/lt/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/lt/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Lithuanian locale.
 * @language Lithuanian
 * @iso-639-2 lit
 * @author Pavlo Shpak [@pshpak]{@link https://github.com/pshpak}
 * @author Eduardo Pardo [@eduardopsll]{@link https://github.com/eduardopsll}
 */
var locale = {
  code: 'lt',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2x0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sdC9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sdC9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvbHQvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2x0L19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9sdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDbEphOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsZ0hBQTBDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLEdBQUcsTUFBTTtBQUMxQixXQUFXLE1BQU0sR0FBRyxNQUFNO0FBQzFCLGFBQWEsTUFBTSxHQUFHLE1BQU07QUFDNUIsWUFBWSxNQUFNLEdBQUcsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQzFDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNySmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBcUM7QUFDakYscUNBQXFDLG1CQUFPLENBQUMsb0hBQTRDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUN2SGE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDNUUscUNBQXFDLG1CQUFPLENBQUMsOEZBQTRCO0FBQ3pFLHFDQUFxQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQywwRkFBMEI7QUFDdkUscUNBQXFDLG1CQUFPLENBQUMsb0ZBQXVCO0FBQ3BFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJ2ZW5kb3JzfmRhdGUtZm5zLWxvY2FsZS1sdC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciB0cmFuc2xhdGlvbnMgPSB7XG4gIHhzZWNvbmRzX290aGVyOiAnc2VrdW5kxJdfc2VrdW5kxb5pxbNfc2VrdW5kZXMnLFxuICB4bWludXRlc19vbmU6ICdtaW51dMSXX21pbnV0xJdzX21pbnV0xJknLFxuICB4bWludXRlc19vdGhlcjogJ21pbnV0xJdzX21pbnXEjWnFs19taW51dGVzJyxcbiAgeGhvdXJzX29uZTogJ3ZhbGFuZGFfdmFsYW5kb3NfdmFsYW5kxIUnLFxuICB4aG91cnNfb3RoZXI6ICd2YWxhbmRvc192YWxhbmTFs192YWxhbmRhcycsXG4gIHhkYXlzX29uZTogJ2RpZW5hX2RpZW5vc19kaWVuxIUnLFxuICB4ZGF5c19vdGhlcjogJ2RpZW5vc19kaWVuxbNfZGllbmFzJyxcbiAgeHdlZWtzX29uZTogJ3NhdmFpdMSXX3NhdmFpdMSXc19zYXZhaXTEmScsXG4gIHh3ZWVrc19vdGhlcjogJ3NhdmFpdMSXc19zYXZhacSNacWzX3NhdmFpdGVzJyxcbiAgeG1vbnRoc19vbmU6ICdtxJdudW9fbcSXbmVzaW9fbcSXbmVzxK8nLFxuICB4bW9udGhzX290aGVyOiAnbcSXbmVzaWFpX23El25lc2nFs19txJduZXNpdXMnLFxuICB4eWVhcnNfb25lOiAnbWV0YWlfbWV0xbNfbWV0dXMnLFxuICB4eWVhcnNfb3RoZXI6ICdtZXRhaV9tZXTFs19tZXR1cycsXG4gIGFib3V0OiAnYXBpZScsXG4gIG92ZXI6ICdkYXVnaWF1IG5laScsXG4gIGFsbW9zdDogJ2JldmVpaycsXG4gIGxlc3N0aGFuOiAnbWHFvmlhdSBuZWknXG59O1xudmFyIHRyYW5zbGF0ZVNlY29uZHMgPSBmdW5jdGlvbiB0cmFuc2xhdGVTZWNvbmRzKF9udW1iZXIsIGFkZFN1ZmZpeCwgX2tleSwgaXNGdXR1cmUpIHtcbiAgaWYgKCFhZGRTdWZmaXgpIHtcbiAgICByZXR1cm4gJ2tlbGlvcyBzZWt1bmTEl3MnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpxbMgc2VrdW5kxb5pxbMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XG4gIH1cbn07XG52YXIgdHJhbnNsYXRlU2luZ3VsYXIgPSBmdW5jdGlvbiB0cmFuc2xhdGVTaW5ndWxhcihfbnVtYmVyLCBhZGRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgcmV0dXJuICFhZGRTdWZmaXggPyBmb3JtcyhrZXkpWzBdIDogaXNGdXR1cmUgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXTtcbn07XG52YXIgdHJhbnNsYXRlID0gZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgYWRkU3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gIHZhciByZXN1bHQgPSBudW1iZXIgKyAnICc7XG4gIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtYmVyLCBhZGRTdWZmaXgsIGtleSwgaXNGdXR1cmUpO1xuICB9IGVsc2UgaWYgKCFhZGRTdWZmaXgpIHtcbiAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtYmVyKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzBdKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBmb3JtcyhrZXkpWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtYmVyKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBzcGVjaWFsKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyICUgMTAgPT09IDAgfHwgbnVtYmVyID4gMTAgJiYgbnVtYmVyIDwgMjA7XG59XG5mdW5jdGlvbiBmb3JtcyhrZXkpIHtcbiAgcmV0dXJuIHRyYW5zbGF0aW9uc1trZXldLnNwbGl0KCdfJyk7XG59XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNlY29uZHMsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2Vjb25kcyxcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIGhhbGZBTWludXRlOiAncHVzxJcgbWludXTEl3MnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIGFkdmVyYiA9IHRva2VuLm1hdGNoKC9hYm91dHxvdmVyfGFsbW9zdHxsZXNzdGhhbi9pKTtcbiAgdmFyIHVuaXQgPSBhZHZlcmIgPyB0b2tlbi5yZXBsYWNlKGFkdmVyYlswXSwgJycpIDogdG9rZW47XG4gIHZhciBpc0Z1dHVyZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29tcGFyaXNvbikgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwO1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZShjb3VudCwgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpID09PSB0cnVlLCB1bml0LnRvTG93ZXJDYXNlKCkgKyAnX29uZScsIGlzRnV0dXJlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyKGNvdW50LCAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCkgPT09IHRydWUsIHVuaXQudG9Mb3dlckNhc2UoKSArICdfb3RoZXInLCBpc0Z1dHVyZSk7XG4gIH1cbiAgaWYgKGFkdmVyYikge1xuICAgIHZhciBfa2V5MiA9IGFkdmVyYlswXS50b0xvd2VyQ2FzZSgpO1xuICAgIHJlc3VsdCA9IHRyYW5zbGF0aW9uc1tfa2V5Ml0gKyAnICcgKyByZXN1bHQ7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ3BvICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncHJpZcWhICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCIpKTtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ5ICdtJy4gTU1NTSBkICdkJy4sIEVFRUVcIixcbiAgbG9uZzogXCJ5ICdtJy4gTU1NTSBkICdkJy5cIixcbiAgbWVkaXVtOiAneS1NTS1kZCcsXG4gIHNob3J0OiAneS1NTS1kZCdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyB6enp6JyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbG9uZzogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ1ByYcSXanVzxK8nIGVlZWUgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ1Zha2FyJyBwXCIsXG4gIHRvZGF5OiBcIifFoGlhbmRpZW4nIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ1J5dG9qJyBwXCIsXG4gIG5leHRXZWVrOiAnZWVlZSBwJyxcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdFJlbGF0aXZlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ3ByLiBLci4nLCAncG8gS3IuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3ByLiBLci4nLCAncG8gS3IuJ10sXG4gIHdpZGU6IFsncHJpZcWhIEtyaXN0xbMnLCAncG8gS3Jpc3RhdXMnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydJIGtldHYuJywgJ0lJIGtldHYuJywgJ0lJSSBrZXR2LicsICdJViBrZXR2LiddLFxuICB3aWRlOiBbJ0kga2V0dmlydGlzJywgJ0lJIGtldHZpcnRpcycsICdJSUkga2V0dmlydGlzJywgJ0lWIGtldHZpcnRpcyddXG59O1xudmFyIGZvcm1hdHRpbmdRdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydJIGsuJywgJ0lJIGsuJywgJ0lJSSBrLicsICdJViBrLiddLFxuICB3aWRlOiBbJ0kga2V0dmlydGlzJywgJ0lJIGtldHZpcnRpcycsICdJSUkga2V0dmlydGlzJywgJ0lWIGtldHZpcnRpcyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdWJywgJ0snLCAnQicsICdHJywgJ0InLCAnTCcsICdSJywgJ1InLCAnUycsICdMJywgJ0cnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc2F1cy4nLCAndmFzLicsICdrb3YuJywgJ2JhbC4nLCAnZ2VnLicsICdiaXLFvi4nLCAnbGllcC4nLCAncnVncC4nLCAncnVncy4nLCAnc3BhbC4nLCAnbGFwa3IuJywgJ2dydW9kLiddLFxuICB3aWRlOiBbJ3NhdXNpcycsICd2YXNhcmlzJywgJ2tvdmFzJywgJ2JhbGFuZGlzJywgJ2dlZ3XFvsSXJywgJ2JpcsW+ZWxpcycsICdsaWVwYScsICdydWdwasWrdGlzJywgJ3J1Z3PEl2ppcycsICdzcGFsaXMnLCAnbGFwa3JpdGlzJywgJ2dydW9kaXMnXVxufTtcbnZhciBmb3JtYXR0aW5nTW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ1YnLCAnSycsICdCJywgJ0cnLCAnQicsICdMJywgJ1InLCAnUicsICdTJywgJ0wnLCAnRyddLFxuICBhYmJyZXZpYXRlZDogWydzYXVzLicsICd2YXMuJywgJ2tvdi4nLCAnYmFsLicsICdnZWcuJywgJ2JpcsW+LicsICdsaWVwLicsICdydWdwLicsICdydWdzLicsICdzcGFsLicsICdsYXBrci4nLCAnZ3J1b2QuJ10sXG4gIHdpZGU6IFsnc2F1c2lvJywgJ3Zhc2FyaW8nLCAna292bycsICdiYWxhbmTFvmlvJywgJ2dlZ3XFvsSXcycsICdiaXLFvmVsaW8nLCAnbGllcG9zJywgJ3J1Z3BqxavEjWlvJywgJ3J1Z3PEl2pvJywgJ3NwYWxpbycsICdsYXBrcmnEjWlvJywgJ2dydW9kxb5pbyddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnUCcsICdBJywgJ1QnLCAnSycsICdQJywgJ8WgJ10sXG4gIHNob3J0OiBbJ1NrJywgJ1ByJywgJ0FuJywgJ1RyJywgJ0t0JywgJ1BuJywgJ8WgdCddLFxuICBhYmJyZXZpYXRlZDogWydzaycsICdwcicsICdhbicsICd0cicsICdrdCcsICdwbicsICfFoXQnXSxcbiAgd2lkZTogWydzZWttYWRpZW5pcycsICdwaXJtYWRpZW5pcycsICdhbnRyYWRpZW5pcycsICd0cmXEjWlhZGllbmlzJywgJ2tldHZpcnRhZGllbmlzJywgJ3Blbmt0YWRpZW5pcycsICfFoWXFoXRhZGllbmlzJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnUCcsICdBJywgJ1QnLCAnSycsICdQJywgJ8WgJ10sXG4gIHNob3J0OiBbJ1NrJywgJ1ByJywgJ0FuJywgJ1RyJywgJ0t0JywgJ1BuJywgJ8WgdCddLFxuICBhYmJyZXZpYXRlZDogWydzaycsICdwcicsICdhbicsICd0cicsICdrdCcsICdwbicsICfFoXQnXSxcbiAgd2lkZTogWydzZWttYWRpZW7ErycsICdwaXJtYWRpZW7ErycsICdhbnRyYWRpZW7ErycsICd0cmXEjWlhZGllbsSvJywgJ2tldHZpcnRhZGllbsSvJywgJ3Blbmt0YWRpZW7ErycsICfFoWXFoXRhZGllbsSvJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ3ByLiBwLicsXG4gICAgcG06ICdwb3AuJyxcbiAgICBtaWRuaWdodDogJ3ZpZHVybmFrdGlzJyxcbiAgICBub29uOiAndmlkdXJkaWVuaXMnLFxuICAgIG1vcm5pbmc6ICdyeXRhcycsXG4gICAgYWZ0ZXJub29uOiAnZGllbmEnLFxuICAgIGV2ZW5pbmc6ICd2YWthcmFzJyxcbiAgICBuaWdodDogJ25ha3RpcydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ3ByaWXFoXBpZXQnLFxuICAgIHBtOiAncG9waWV0JyxcbiAgICBtaWRuaWdodDogJ3ZpZHVybmFrdGlzJyxcbiAgICBub29uOiAndmlkdXJkaWVuaXMnLFxuICAgIG1vcm5pbmc6ICdyeXRhcycsXG4gICAgYWZ0ZXJub29uOiAnZGllbmEnLFxuICAgIGV2ZW5pbmc6ICd2YWthcmFzJyxcbiAgICBuaWdodDogJ25ha3RpcydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAncHJpZcWhcGlldCcsXG4gICAgcG06ICdwb3BpZXQnLFxuICAgIG1pZG5pZ2h0OiAndmlkdXJuYWt0aXMnLFxuICAgIG5vb246ICd2aWR1cmRpZW5pcycsXG4gICAgbW9ybmluZzogJ3J5dGFzJyxcbiAgICBhZnRlcm5vb246ICdkaWVuYScsXG4gICAgZXZlbmluZzogJ3Zha2FyYXMnLFxuICAgIG5pZ2h0OiAnbmFrdGlzJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAncHIuIHAuJyxcbiAgICBwbTogJ3BvcC4nLFxuICAgIG1pZG5pZ2h0OiAndmlkdXJuYWt0aXMnLFxuICAgIG5vb246ICdwZXJwaWV0JyxcbiAgICBtb3JuaW5nOiAncnl0YXMnLFxuICAgIGFmdGVybm9vbjogJ3BvcGlldMSXJyxcbiAgICBldmVuaW5nOiAndmFrYXJhcycsXG4gICAgbmlnaHQ6ICduYWt0aXMnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdwcmllxaFwaWV0JyxcbiAgICBwbTogJ3BvcGlldCcsXG4gICAgbWlkbmlnaHQ6ICd2aWR1cm5ha3RpcycsXG4gICAgbm9vbjogJ3BlcnBpZXQnLFxuICAgIG1vcm5pbmc6ICdyeXRhcycsXG4gICAgYWZ0ZXJub29uOiAncG9waWV0xJcnLFxuICAgIGV2ZW5pbmc6ICd2YWthcmFzJyxcbiAgICBuaWdodDogJ25ha3RpcydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAncHJpZcWhcGlldCcsXG4gICAgcG06ICdwb3BpZXQnLFxuICAgIG1pZG5pZ2h0OiAndmlkdXJuYWt0aXMnLFxuICAgIG5vb246ICdwZXJwaWV0JyxcbiAgICBtb3JuaW5nOiAncnl0YXMnLFxuICAgIGFmdGVybm9vbjogJ3BvcGlldMSXJyxcbiAgICBldmVuaW5nOiAndmFrYXJhcycsXG4gICAgbmlnaHQ6ICduYWt0aXMnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy1vamknO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdRdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKC1vamkpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15wKHJ8bylcXC4/XFxzPyhrclxcLj98bWUpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihwclxcLlxccz8oa3JcXC58bVxcLlxccz9lXFwuKXxwb1xccz9rclxcLnxtxatzxbMgZXJvamUpL2ksXG4gIHdpZGU6IC9eKHByaWXFoSBLcmlzdMWzfHByaWXFoSBtxatzxbMgZXLEhXxwbyBLcmlzdGF1c3xtxatzxbMgZXJvamUpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgd2lkZTogWy9wcmllxaEvaSwgLyhwb3xtxatzxbMpL2ldLFxuICBhbnk6IFsvXnByL2ksIC9eKHBvfG0pL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKFsxMjM0XSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKEl8SUl8SUlJfElWKVxccz9rZXR2P1xcLj8vaSxcbiAgd2lkZTogL14oSXxJSXxJSUl8SVYpXFxzP2tldHZpcnRpcy9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbiAgYW55OiBbL0kkL2ksIC9JSSQvaSwgL0lJSS9pLCAvSVYvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3N2a2JnbHJdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzYXVzXFwufHZhc1xcLnxrb3ZcXC58YmFsXFwufGdlZ1xcLnxiaXLFvlxcLnxsaWVwXFwufHJ1Z3BcXC58cnVnc1xcLnxzcGFsXFwufGxhcGtyXFwufGdydW9kXFwuKS9pLFxuICB3aWRlOiAvXihzYXVzaShzfG8pfHZhc2FyaShzfG8pfGtvdihhfG8pc3xiYWxhbmTFvj9pKHN8byl8Z2VndcW+xJdzP3xiaXLFvmVsaShzfG8pfGxpZXAoYXxvcyl8cnVncGrFqyh0fMSNKWkoc3xvKXxydWdzxJdqKGlzfG8pfHNwYWxpKHN8byl8bGFwa3JpKHR8xI0paShzfG8pfGdydW9kxb4/aShzfG8pKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9edi9pLCAvXmsvaSwgL15iL2ksIC9eZy9pLCAvXmIvaSwgL15sL2ksIC9eci9pLCAvXnIvaSwgL15zL2ksIC9ebC9pLCAvXmcvaV0sXG4gIGFueTogWy9ec2F1cy9pLCAvXnZhcy9pLCAvXmtvdi9pLCAvXmJhbC9pLCAvXmdlZy9pLCAvXmJpcsW+L2ksIC9ebGllcC9pLCAvXnJ1Z3AvaSwgL15ydWdzL2ksIC9ec3BhbC9pLCAvXmxhcGtyL2ksIC9eZ3J1b2QvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzcGF0a8WhXS9pLFxuICBzaG9ydDogL14oc2t8cHJ8YW58dHJ8a3R8cG58xaF0KS9pLFxuICBhYmJyZXZpYXRlZDogL14oc2t8cHJ8YW58dHJ8a3R8cG58xaF0KS9pLFxuICB3aWRlOiAvXihzZWttYWRpZW4oaXN8xK8pfHBpcm1hZGllbihpc3zEryl8YW50cmFkaWVuKGlzfMSvKXx0cmXEjWlhZGllbihpc3zEryl8a2V0dmlydGFkaWVuKGlzfMSvKXxwZW5rdGFkaWVuKGlzfMSvKXzFoWXFoXRhZGllbihpc3zErykpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ecC9pLCAvXmEvaSwgL150L2ksIC9eay9pLCAvXnAvaSwgL17FoS9pXSxcbiAgd2lkZTogWy9ec2UvaSwgL15waS9pLCAvXmFuL2ksIC9edHIvaSwgL15rZS9pLCAvXnBlL2ksIC9exaFlL2ldLFxuICBhbnk6IFsvXnNrL2ksIC9ecHIvaSwgL15hbi9pLCAvXnRyL2ksIC9ea3QvaSwgL15wbi9pLCAvXsWhdC9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHByLlxccz9wLnxwb3AufHZpZHVybmFrdGlzfCh2aWR1cmRpZW5pc3xwZXJwaWV0KXxyeXRhc3woZGllbmF8cG9waWV0xJcpfHZha2FyYXN8bmFrdGlzKS9pLFxuICBhbnk6IC9eKHByaWXFoXBpZXR8cG9waWV0JHx2aWR1cm5ha3Rpc3wodmlkdXJkaWVuaXN8cGVycGlldCl8cnl0YXN8KGRpZW5hfHBvcGlldMSXKXx2YWthcmFzfG5ha3RpcykvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogL15wci9pLFxuICAgIHBtOiAvXnBvcC4vaSxcbiAgICBtaWRuaWdodDogL152aWR1cm5ha3Rpcy9pLFxuICAgIG5vb246IC9eKHZpZHVyZGllbmlzfHBlcnApL2ksXG4gICAgbW9ybmluZzogL3J5dGFzL2ksXG4gICAgYWZ0ZXJub29uOiAvKGRpZXxwb3BpZXTElykvaSxcbiAgICBldmVuaW5nOiAvdmFrYXJhcy9pLFxuICAgIG5pZ2h0OiAvbmFrdGlzL2lcbiAgfSxcbiAgYW55OiB7XG4gICAgYW06IC9ecHIvaSxcbiAgICBwbTogL15wb3BpZXQkL2ksXG4gICAgbWlkbmlnaHQ6IC9edmlkdXJuYWt0aXMvaSxcbiAgICBub29uOiAvXih2aWR1cmRpZW5pc3xwZXJwKS9pLFxuICAgIG1vcm5pbmc6IC9yeXRhcy9pLFxuICAgIGFmdGVybm9vbjogLyhkaWV8cG9waWV0xJcpL2ksXG4gICAgZXZlbmluZzogL3Zha2FyYXMvaSxcbiAgICBuaWdodDogL25ha3Rpcy9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IExpdGh1YW5pYW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIExpdGh1YW5pYW5cbiAqIEBpc28tNjM5LTIgbGl0XG4gKiBAYXV0aG9yIFBhdmxvIFNocGFrIFtAcHNocGFrXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcHNocGFrfVxuICogQGF1dGhvciBFZHVhcmRvIFBhcmRvIFtAZWR1YXJkb3BzbGxde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9lZHVhcmRvcHNsbH1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2x0JyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9