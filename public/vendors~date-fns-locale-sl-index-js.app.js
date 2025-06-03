(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-sl-index-js"],{

/***/ "./node_modules/date-fns/locale/sl/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function isPluralType(val) {
  return val.one !== undefined;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    present: {
      one: 'manj kot {{count}} sekunda',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    },
    past: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundama',
      few: 'manj kot {{count}} sekundami',
      other: 'manj kot {{count}} sekundami'
    },
    future: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    }
  },
  xSeconds: {
    present: {
      one: '{{count}} sekunda',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    },
    past: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundama',
      few: '{{count}} sekundami',
      other: '{{count}} sekundami'
    },
    future: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    }
  },
  halfAMinute: 'pol minute',
  lessThanXMinutes: {
    present: {
      one: 'manj kot {{count}} minuta',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    },
    past: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minutama',
      few: 'manj kot {{count}} minutami',
      other: 'manj kot {{count}} minutami'
    },
    future: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    }
  },
  xMinutes: {
    present: {
      one: '{{count}} minuta',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    },
    past: {
      one: '{{count}} minuto',
      two: '{{count}} minutama',
      few: '{{count}} minutami',
      other: '{{count}} minutami'
    },
    future: {
      one: '{{count}} minuto',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    }
  },
  aboutXHours: {
    present: {
      one: 'približno {{count}} ura',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    },
    past: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} urama',
      few: 'približno {{count}} urami',
      other: 'približno {{count}} urami'
    },
    future: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    }
  },
  xHours: {
    present: {
      one: '{{count}} ura',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    },
    past: {
      one: '{{count}} uro',
      two: '{{count}} urama',
      few: '{{count}} urami',
      other: '{{count}} urami'
    },
    future: {
      one: '{{count}} uro',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    }
  },
  xDays: {
    present: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    },
    past: {
      one: '{{count}} dnem',
      two: '{{count}} dnevoma',
      few: '{{count}} dnevi',
      other: '{{count}} dnevi'
    },
    future: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    }
  },
  // no tenses for weeks?
  aboutXWeeks: {
    one: 'približno {{count}} teden',
    two: 'približno {{count}} tedna',
    few: 'približno {{count}} tedne',
    other: 'približno {{count}} tednov'
  },
  // no tenses for weeks?
  xWeeks: {
    one: '{{count}} teden',
    two: '{{count}} tedna',
    few: '{{count}} tedne',
    other: '{{count}} tednov'
  },
  aboutXMonths: {
    present: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    },
    past: {
      one: 'približno {{count}} mesecem',
      two: 'približno {{count}} mesecema',
      few: 'približno {{count}} meseci',
      other: 'približno {{count}} meseci'
    },
    future: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    }
  },
  xMonths: {
    present: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} meseci',
      other: '{{count}} mesecev'
    },
    past: {
      one: '{{count}} mesecem',
      two: '{{count}} mesecema',
      few: '{{count}} meseci',
      other: '{{count}} meseci'
    },
    future: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} mesece',
      other: '{{count}} mesecev'
    }
  },
  aboutXYears: {
    present: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    },
    past: {
      one: 'približno {{count}} letom',
      two: 'približno {{count}} letoma',
      few: 'približno {{count}} leti',
      other: 'približno {{count}} leti'
    },
    future: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    }
  },
  xYears: {
    present: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    },
    past: {
      one: '{{count}} letom',
      two: '{{count}} letoma',
      few: '{{count}} leti',
      other: '{{count}} leti'
    },
    future: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    }
  },
  overXYears: {
    present: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    },
    past: {
      one: 'več kot {{count}} letom',
      two: 'več kot {{count}} letoma',
      few: 'več kot {{count}} leti',
      other: 'več kot {{count}} leti'
    },
    future: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    }
  },
  almostXYears: {
    present: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    },
    past: {
      one: 'skoraj {{count}} letom',
      two: 'skoraj {{count}} letoma',
      few: 'skoraj {{count}} leti',
      other: 'skoraj {{count}} leti'
    },
    future: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    }
  }
};
function getFormFromCount(count) {
  switch (count % 100) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
    case 4:
      return 'few';
    default:
      return 'other';
  }
}
var formatDistance = function formatDistance(token, count, options) {
  var result = '';
  var tense = 'present';
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      tense = 'future';
      result = 'čez ';
    } else {
      tense = 'past';
      result = 'pred ';
    }
  }
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result += tokenValue;
  } else {
    var form = getFormFromCount(count);
    if (isPluralType(tokenValue)) {
      result += tokenValue[form].replace('{{count}}', String(count));
    } else {
      result += tokenValue[tense][form].replace('{{count}}', String(count));
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/sl/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/formatLong/index.js ***!
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
  full: 'EEEE, dd. MMMM y',
  long: 'dd. MMMM y',
  medium: 'd. MMM y',
  short: 'd. MM. yy'
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

/***/ "./node_modules/date-fns/locale/sl/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/formatRelative/index.js ***!
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
        return "'prejšnjo nedeljo ob' p";
      case 3:
        return "'prejšnjo sredo ob' p";
      case 6:
        return "'prejšnjo soboto ob' p";
      default:
        return "'prejšnji' EEEE 'ob' p";
    }
  },
  yesterday: "'včeraj ob' p",
  today: "'danes ob' p",
  tomorrow: "'jutri ob' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'naslednjo nedeljo ob' p";
      case 3:
        return "'naslednjo sredo ob' p";
      case 6:
        return "'naslednjo soboto ob' p";
      default:
        return "'naslednji' EEEE 'ob' p";
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

/***/ "./node_modules/date-fns/locale/sl/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/localize/index.js ***!
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
  narrow: ['pr. n. št.', 'po n. št.'],
  abbreviated: ['pr. n. št.', 'po n. št.'],
  wide: ['pred našim štetjem', 'po našem štetju']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  wide: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
};
var dayValues = {
  narrow: ['n', 'p', 't', 's', 'č', 'p', 's'],
  short: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  abbreviated: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  wide: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'j',
    afternoon: 'p',
    evening: 'v',
    night: 'n'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'poln.',
    noon: 'pold.',
    morning: 'jut.',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noč'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'polnoč',
    noon: 'poldne',
    morning: 'jutro',
    afternoon: 'popoldne',
    evening: 'večer',
    night: 'noč'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'zj',
    afternoon: 'p',
    evening: 'zv',
    night: 'po'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opoln.',
    noon: 'opold.',
    morning: 'zjut.',
    afternoon: 'pop.',
    evening: 'zveč.',
    night: 'ponoči'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opolnoči',
    noon: 'opoldne',
    morning: 'zjutraj',
    afternoon: 'popoldan',
    evening: 'zvečer',
    night: 'ponoči'
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

/***/ "./node_modules/date-fns/locale/sl/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/match/index.js ***!
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
  abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i,
  wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|na[sš]em)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?[čc]et\.?/i,
  wide: /^[1234]\. [čc]etrtletje/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,
  wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i],
  wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[nptsčc]/i,
  short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i],
  any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,
  any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^d/i,
    pm: /^p/i,
    midnight: /^24/i,
    noon: /^12/i,
    morning: /^(z?j)/i,
    afternoon: /^p/i,
    evening: /^(z?v)/i,
    night: /^(n|po)/i
  },
  any: {
    am: /^dop\./i,
    pm: /^pop\./i,
    midnight: /^o?poln/i,
    noon: /^o?pold/i,
    morning: /j/i,
    afternoon: /^pop\./i,
    evening: /^z?ve/i,
    night: /(po)?no/i
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

/***/ "./node_modules/date-fns/locale/sl/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/sl/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/sl/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/sl/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/sl/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/sl/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Slovenian locale.
 * @language Slovenian
 * @iso-639-2 slv
 * @author Adam Stradovnik [@Neoglyph]{@link https://github.com/Neoglyph}
 * @author Mato Žgajner [@mzgajner]{@link https://github.com/mzgajner}
 */
var locale = {
  code: 'sl',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NsL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zbC9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zbC9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvc2wvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NsL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9zbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHVCQUF1QixPQUFPO0FBQzlCLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQSxjQUFjLE9B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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQy9IYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFxQztBQUNqRixxQ0FBcUMsbUJBQU8sQ0FBQyxvSEFBNEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ3BIYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM1RSxxQ0FBcUMsbUJBQU8sQ0FBQyw4RkFBNEI7QUFDekUscUNBQXFDLG1CQUFPLENBQUMsc0dBQWdDO0FBQzdFLHFDQUFxQyxtQkFBTyxDQUFDLDBGQUEwQjtBQUN2RSxxQ0FBcUMsbUJBQU8sQ0FBQyxvRkFBdUI7QUFDcEU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLXNsLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNQbHVyYWxUeXBlKHZhbCkge1xuICByZXR1cm4gdmFsLm9uZSAhPT0gdW5kZWZpbmVkO1xufVxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGEnLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGknLFxuICAgICAgZmV3OiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGFtYScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kYW1pJyxcbiAgICAgIG90aGVyOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGknLFxuICAgICAgZmV3OiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH1cbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kYScsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kYW1hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmQnXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3BvbCBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0YScsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRpJyxcbiAgICAgIGZldzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRvJyxcbiAgICAgIHR3bzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGFtYScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRhbWknLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRhbWknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ21hbmoga290IHt7Y291bnR9fSBtaW51dG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0aScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRlJyxcbiAgICAgIG90aGVyOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0J1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbWludXRhJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtaW51dGknLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtaW51dG8nLFxuICAgICAgdHdvOiAne3tjb3VudH19IG1pbnV0YW1hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtaW51dGFtaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAne3tjb3VudH19IG1pbnV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbWludXRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXQnXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyYScsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmknLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJlJyxcbiAgICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXInXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cm8nLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJhbWEnLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJhbWknLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJvJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmUnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cidcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSB1cmEnLFxuICAgICAgdHdvOiAne3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gdXJlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHVyJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IHVybycsXG4gICAgICB0d286ICd7e2NvdW50fX0gdXJhbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IHVyYW1pJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHVyYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gdXJvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSB1cmknLFxuICAgICAgZmV3OiAne3tjb3VudH19IHVyZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSB1cidcbiAgICB9XG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAne3tjb3VudH19IGRhbicsXG4gICAgICB0d286ICd7e2NvdW50fX0gZG5pJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gZG5pJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IGRuZW0nLFxuICAgICAgdHdvOiAne3tjb3VudH19IGRuZXZvbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IGRuZXZpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGRuZXZpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gZGFuJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgZmV3OiAne3tjb3VudH19IGRuaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBkbmknXG4gICAgfVxuICB9LFxuICAvLyBubyB0ZW5zZXMgZm9yIHdlZWtzP1xuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IHRlZGVuJyxcbiAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSB0ZWRuYScsXG4gICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdGVkbmUnLFxuICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdGVkbm92J1xuICB9LFxuICAvLyBubyB0ZW5zZXMgZm9yIHdlZWtzP1xuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd7e2NvdW50fX0gdGVkZW4nLFxuICAgIHR3bzogJ3t7Y291bnR9fSB0ZWRuYScsXG4gICAgZmV3OiAne3tjb3VudH19IHRlZG5lJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0ZWRub3YnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2UnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2V2J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWNlbScsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2VtYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2knLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2knXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2UnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2V2J1xuICAgIH1cbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtZXNlYycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbWVzZWNhJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtZXNlY2knLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzZWNldidcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtZXNlY2VtJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtZXNlY2VtYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbWVzZWNpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1lc2VjaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAne3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtZXNlY2EnLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1lc2VjZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNlY2V2J1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldG9tJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0aSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAne3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG9tJyxcbiAgICAgIHR3bzogJ3ZlxI0ga290IHt7Y291bnR9fSBsZXRvbWEnLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0aSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0J1xuICAgIH1cbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICdza29yYWoge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICdza29yYWoge3tjb3VudH19IGxldCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRvbWEnLFxuICAgICAgZmV3OiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIG90aGVyOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICdza29yYWoge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0J1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIGdldEZvcm1Gcm9tQ291bnQoY291bnQpIHtcbiAgc3dpdGNoIChjb3VudCAlIDEwMCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnb25lJztcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ3R3byc7XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAnZmV3JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdvdGhlcic7XG4gIH1cbn1cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciB0ZW5zZSA9ICdwcmVzZW50JztcbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICB0ZW5zZSA9ICdmdXR1cmUnO1xuICAgICAgcmVzdWx0ID0gJ8SNZXogJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGVuc2UgPSAncGFzdCc7XG4gICAgICByZXN1bHQgPSAncHJlZCAnO1xuICAgIH1cbiAgfVxuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCArPSB0b2tlblZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBmb3JtID0gZ2V0Rm9ybUZyb21Db3VudChjb3VudCk7XG4gICAgaWYgKGlzUGx1cmFsVHlwZSh0b2tlblZhbHVlKSkge1xuICAgICAgcmVzdWx0ICs9IHRva2VuVmFsdWVbZm9ybV0ucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSB0b2tlblZhbHVlW3RlbnNlXVtmb3JtXS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZGQuIE1NTU0geScsXG4gIGxvbmc6ICdkZC4gTU1NTSB5JyxcbiAgbWVkaXVtOiAnZC4gTU1NIHknLFxuICBzaG9ydDogJ2QuIE1NLiB5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyB6enp6JyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbG9uZzogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRMb25nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmpvIG5lZGVsam8gb2InIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3ByZWrFoW5qbyBzcmVkbyBvYicgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmpvIHNvYm90byBvYicgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3ByZWrFoW5qaScgRUVFRSAnb2InIHBcIjtcbiAgICB9XG4gIH0sXG4gIHllc3RlcmRheTogXCIndsSNZXJhaiBvYicgcFwiLFxuICB0b2RheTogXCInZGFuZXMgb2InIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ2p1dHJpIG9iJyBwXCIsXG4gIG5leHRXZWVrOiBmdW5jdGlvbiBuZXh0V2VlayhkYXRlKSB7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qbyBuZWRlbGpvIG9iJyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIiduYXNsZWRuam8gc3JlZG8gb2InIHBcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qbyBzb2JvdG8gb2InIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIiduYXNsZWRuamknIEVFRUUgJ29iJyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsncHIuIG4uIMWhdC4nLCAncG8gbi4gxaF0LiddLFxuICBhYmJyZXZpYXRlZDogWydwci4gbi4gxaF0LicsICdwbyBuLiDFoXQuJ10sXG4gIHdpZGU6IFsncHJlZCBuYcWhaW0gxaF0ZXRqZW0nLCAncG8gbmHFoWVtIMWhdGV0anUnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLiDEjWV0LicsICcyLiDEjWV0LicsICczLiDEjWV0LicsICc0LiDEjWV0LiddLFxuICB3aWRlOiBbJzEuIMSNZXRydGxldGplJywgJzIuIMSNZXRydGxldGplJywgJzMuIMSNZXRydGxldGplJywgJzQuIMSNZXRydGxldGplJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydqJywgJ2YnLCAnbScsICdhJywgJ20nLCAnaicsICdqJywgJ2EnLCAncycsICdvJywgJ24nLCAnZCddLFxuICBhYmJyZXZpYXRlZDogWydqYW4uJywgJ2ZlYi4nLCAnbWFyLicsICdhcHIuJywgJ21haicsICdqdW4uJywgJ2p1bC4nLCAnYXZnLicsICdzZXAuJywgJ29rdC4nLCAnbm92LicsICdkZWMuJ10sXG4gIHdpZGU6IFsnamFudWFyJywgJ2ZlYnJ1YXInLCAnbWFyZWMnLCAnYXByaWwnLCAnbWFqJywgJ2p1bmlqJywgJ2p1bGlqJywgJ2F2Z3VzdCcsICdzZXB0ZW1iZXInLCAnb2t0b2JlcicsICdub3ZlbWJlcicsICdkZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ24nLCAncCcsICd0JywgJ3MnLCAnxI0nLCAncCcsICdzJ10sXG4gIHNob3J0OiBbJ25lZC4nLCAncG9uLicsICd0b3IuJywgJ3NyZS4nLCAnxI1ldC4nLCAncGV0LicsICdzb2IuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ25lZC4nLCAncG9uLicsICd0b3IuJywgJ3NyZS4nLCAnxI1ldC4nLCAncGV0LicsICdzb2IuJ10sXG4gIHdpZGU6IFsnbmVkZWxqYScsICdwb25lZGVsamVrJywgJ3RvcmVrJywgJ3NyZWRhJywgJ8SNZXRydGVrJywgJ3BldGVrJywgJ3NvYm90YSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdkJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnMjQuMDAnLFxuICAgIG5vb246ICcxMi4wMCcsXG4gICAgbW9ybmluZzogJ2onLFxuICAgIGFmdGVybm9vbjogJ3AnLFxuICAgIGV2ZW5pbmc6ICd2JyxcbiAgICBuaWdodDogJ24nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdkb3AuJyxcbiAgICBwbTogJ3BvcC4nLFxuICAgIG1pZG5pZ2h0OiAncG9sbi4nLFxuICAgIG5vb246ICdwb2xkLicsXG4gICAgbW9ybmluZzogJ2p1dC4nLFxuICAgIGFmdGVybm9vbjogJ3BvcC4nLFxuICAgIGV2ZW5pbmc6ICd2ZcSNLicsXG4gICAgbmlnaHQ6ICdub8SNJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdkb3AuJyxcbiAgICBwbTogJ3BvcC4nLFxuICAgIG1pZG5pZ2h0OiAncG9sbm/EjScsXG4gICAgbm9vbjogJ3BvbGRuZScsXG4gICAgbW9ybmluZzogJ2p1dHJvJyxcbiAgICBhZnRlcm5vb246ICdwb3BvbGRuZScsXG4gICAgZXZlbmluZzogJ3ZlxI1lcicsXG4gICAgbmlnaHQ6ICdub8SNJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnZCcsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJzI0LjAwJyxcbiAgICBub29uOiAnMTIuMDAnLFxuICAgIG1vcm5pbmc6ICd6aicsXG4gICAgYWZ0ZXJub29uOiAncCcsXG4gICAgZXZlbmluZzogJ3p2JyxcbiAgICBuaWdodDogJ3BvJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnZG9wLicsXG4gICAgcG06ICdwb3AuJyxcbiAgICBtaWRuaWdodDogJ29wb2xuLicsXG4gICAgbm9vbjogJ29wb2xkLicsXG4gICAgbW9ybmluZzogJ3pqdXQuJyxcbiAgICBhZnRlcm5vb246ICdwb3AuJyxcbiAgICBldmVuaW5nOiAnenZlxI0uJyxcbiAgICBuaWdodDogJ3Bvbm/EjWknXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2RvcC4nLFxuICAgIHBtOiAncG9wLicsXG4gICAgbWlkbmlnaHQ6ICdvcG9sbm/EjWknLFxuICAgIG5vb246ICdvcG9sZG5lJyxcbiAgICBtb3JuaW5nOiAnemp1dHJhaicsXG4gICAgYWZ0ZXJub29uOiAncG9wb2xkYW4nLFxuICAgIGV2ZW5pbmc6ICd6dmXEjWVyJyxcbiAgICBuaWdodDogJ3Bvbm/EjWknXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICByZXR1cm4gbnVtYmVyICsgJy4nO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiKSk7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiKSk7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspXFwuL2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgYWJicmV2aWF0ZWQ6IC9eKHByXFwuIG5cXC4gxaF0XFwufHBvIG5cXC4gxaF0XFwuKS9pLFxuICB3aWRlOiAvXihwcmVkIEtyaXN0dXNvbXxwcmVkIG5hW3PFoV1pbSBbc8WhXXRldGplbXxwbyBLcmlzdHVzdXxwbyBuYVtzxaFdZW0gW3PFoV10ZXRqdXxuYVtzxaFdZWdhIFtzxaFddGV0amEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15wci9pLCAvXihwb3xuYVtzxaFdZW0pL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXlsxMjM0XVxcLlxccz9bxI1jXWV0XFwuPy9pLFxuICB3aWRlOiAvXlsxMjM0XVxcLiBbxI1jXWV0cnRsZXRqZS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW5cXC58ZmViXFwufG1hclxcLnxhcHJcXC58bWFqfGp1blxcLnxqdWxcXC58YXZnXFwufHNlcFxcLnxva3RcXC58bm92XFwufGRlY1xcLikvaSxcbiAgd2lkZTogL14oamFudWFyfGZlYnJ1YXJ8bWFyZWN8YXByaWx8bWFqfGp1bmlqfGp1bGlqfGF2Z3VzdHxzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhYmJyZXZpYXRlZDogWy9eamEvaSwgL15mZS9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWFqL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXYvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICB3aWRlOiBbL15qYS9pLCAvXmZlL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYWovaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdi9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltucHRzxI1jXS9pLFxuICBzaG9ydDogL14obmVkXFwufHBvblxcLnx0b3JcXC58c3JlXFwufFtjxI1dZXRcXC58cGV0XFwufHNvYlxcLikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKG5lZFxcLnxwb25cXC58dG9yXFwufHNyZVxcLnxbY8SNXWV0XFwufHBldFxcLnxzb2JcXC4pL2ksXG4gIHdpZGU6IC9eKG5lZGVsamF8cG9uZWRlbGpla3x0b3Jla3xzcmVkYXxbY8SNXWV0cnRla3xwZXRla3xzb2JvdGEpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15uL2ksIC9ecC9pLCAvXnQvaSwgL15zL2ksIC9eW2PEjV0vaSwgL15wL2ksIC9ecy9pXSxcbiAgYW55OiBbL15uL2ksIC9ecG8vaSwgL150L2ksIC9ec3IvaSwgL15bY8SNXS9pLCAvXnBlL2ksIC9ec28vaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihkfHBvP3x6P3Z8bnx6P2p8MjRcXC4wMHwxMlxcLjAwKS9pLFxuICBhbnk6IC9eKGRvcFxcLnxwb3BcXC58bz9wb2xuKFxcLnxvW2PEjV1pPyl8bz9wb2xkKFxcLnxuZSl8ej92ZVtjxI1dKFxcLnxlcil8KHBvKT9ub1tjxI1daT98cG9wb2xkKG5lfGFuKXxqdXQoXFwufHJvKXx6anV0KFxcLnxyYWopKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAvXmQvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9eMjQvaSxcbiAgICBub29uOiAvXjEyL2ksXG4gICAgbW9ybmluZzogL14oej9qKS9pLFxuICAgIGFmdGVybm9vbjogL15wL2ksXG4gICAgZXZlbmluZzogL14oej92KS9pLFxuICAgIG5pZ2h0OiAvXihufHBvKS9pXG4gIH0sXG4gIGFueToge1xuICAgIGFtOiAvXmRvcFxcLi9pLFxuICAgIHBtOiAvXnBvcFxcLi9pLFxuICAgIG1pZG5pZ2h0OiAvXm8/cG9sbi9pLFxuICAgIG5vb246IC9ebz9wb2xkL2ksXG4gICAgbW9ybmluZzogL2ovaSxcbiAgICBhZnRlcm5vb246IC9ecG9wXFwuL2ksXG4gICAgZXZlbmluZzogL156P3ZlL2ksXG4gICAgbmlnaHQ6IC8ocG8pP25vL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IFNsb3ZlbmlhbiBsb2NhbGUuXG4gKiBAbGFuZ3VhZ2UgU2xvdmVuaWFuXG4gKiBAaXNvLTYzOS0yIHNsdlxuICogQGF1dGhvciBBZGFtIFN0cmFkb3ZuaWsgW0BOZW9nbHlwaF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL05lb2dseXBofVxuICogQGF1dGhvciBNYXRvIMW9Z2FqbmVyIFtAbXpnYWpuZXJde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9temdham5lcn1cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ3NsJyxcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5kZWZhdWx0LFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmRlZmF1bHQsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmRlZmF1bHQsXG4gIGxvY2FsaXplOiBfaW5kZXg0LmRlZmF1bHQsXG4gIG1hdGNoOiBfaW5kZXg1LmRlZmF1bHQsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9