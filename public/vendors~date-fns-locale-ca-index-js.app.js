(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~date-fns-locale-ca-index-js"],{

/***/ "./node_modules/date-fns/locale/ca/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Davant de les xifres que es diuen amb vocal inicial, 1 i 11, s'apostrofen els articles el i la i la preposició de igual que si estiguessin escrits amb lletres.
 *    l'1 de juliol ('l'u')
 *    l'11 de novembre ('l'onze')
 *    l'11a clàusula del contracte ('l'onzena')
 *    la contractació d'11 jugadors ('d'onze')
 *    l'aval d'11.000 socis ('d'onze mil')
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=apostrofaci%25F3+davant+xifres&action=Principal&method=detall_completa&numPagina=1&idHit=11236&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=11236&titol=apostrofaci%F3%20davant%20de%20xifres%20%2F%20apostrofaci%F3%20davant%20de%201%20i%2011&numeroResultat=1&clickLink=detall&tipusCerca=cerca.normes
 */

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "menys d'un segon",
    eleven: "menys d'onze segons",
    other: 'menys de {{count}} segons'
  },
  xSeconds: {
    one: '1 segon',
    other: '{{count}} segons'
  },
  halfAMinute: 'mig minut',
  lessThanXMinutes: {
    one: "menys d'un minut",
    eleven: "menys d'onze minuts",
    other: 'menys de {{count}} minuts'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minuts'
  },
  aboutXHours: {
    one: 'aproximadament una hora',
    other: 'aproximadament {{count}} hores'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} hores'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dies'
  },
  aboutXWeeks: {
    one: 'aproximadament una setmana',
    other: 'aproximadament {{count}} setmanes'
  },
  xWeeks: {
    one: '1 setmana',
    other: '{{count}} setmanes'
  },
  aboutXMonths: {
    one: 'aproximadament un mes',
    other: 'aproximadament {{count}} mesos'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} mesos'
  },
  aboutXYears: {
    one: 'aproximadament un any',
    other: 'aproximadament {{count}} anys'
  },
  xYears: {
    one: '1 any',
    other: '{{count}} anys'
  },
  overXYears: {
    one: "més d'un any",
    eleven: "més d'onze anys",
    other: 'més de {{count}} anys'
  },
  almostXYears: {
    one: 'gairebé un any',
    other: 'gairebé {{count}} anys'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 11 && tokenValue.eleven) {
    result = tokenValue.eleven;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'en ' + result;
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

/***/ "./node_modules/date-fns/locale/ca/_lib/formatLong/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/_lib/formatLong/index.js ***!
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
  full: "EEEE, d 'de' MMMM y",
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
  full: "{{date}} 'a les' {{time}}",
  long: "{{date}} 'a les' {{time}}",
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

/***/ "./node_modules/date-fns/locale/ca/_lib/formatRelative/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/_lib/formatRelative/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: "'el' eeee 'passat a la' LT",
  yesterday: "'ahir a la' p",
  today: "'avui a la' p",
  tomorrow: "'demà a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'passat a les' p",
  yesterday: "'ahir a les' p",
  today: "'avui a les' p",
  tomorrow: "'demà a les' p",
  nextWeek: "eeee 'a les' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/date-fns/locale/ca/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/_lib/localize/index.js ***!
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
/**
 * General information
 * Reference: https://aplicacions.llengua.gencat.cat
 * Reference: https://www.uoc.edu/portal/ca/servei-linguistic/convencions/abreviacions/simbols/simbols-habituals.html
 */
/**
 * Abans de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abans+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6876&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6876&titol=abans%20de%20Crist%20(abreviatura)%20/%20abans%20de%20Crist%20(sigla)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 * Desprest de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=despr%E9s+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6879&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6879&titol=despr%E9s%20de%20Crist%20(sigla)%20/%20despr%E9s%20de%20Crist%20(abreviatura)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 */
var eraValues = {
  narrow: ['aC', 'dC'],
  abbreviated: ['a. de C.', 'd. de C.'],
  wide: ['abans de Crist', 'després de Crist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1r trimestre', '2n trimestre', '3r trimestre', '4t trimestre']
};

/**
 * Dins d'un text convé fer servir la forma sencera dels mesos, ja que sempre és més clar el mot sencer que l'abreviatura, encara que aquesta sigui força coneguda.
 * Cal reservar, doncs, les abreviatures per a les llistes o classificacions, els gràfics, les taules o quadres estadístics, els textos publicitaris, etc.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviacions+mesos&action=Principal&method=detall_completa&numPagina=1&idHit=8402&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8402&titol=abreviatures%20dels%20mesos%20de%20l%27any&numeroResultat=5&clickLink=detall&tipusCerca=cerca.fitxes
 */
var monthValues = {
  narrow: ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
  /**
   * Les abreviatures dels mesos de l'any es formen seguint una de les normes generals de formació d'abreviatures.
   * S'escriu la primera síl·laba i les consonants de la síl·laba següent anteriors a la primera vocal.
   * Els mesos de març, maig i juny no s'abreugen perquè són paraules d'una sola síl·laba.
   */
  abbreviated: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
  wide: ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre']
};

/**
 * Les abreviatures dels dies de la setmana comencen totes amb la lletra d.
 * Tot seguit porten la consonant següent a la i, excepte en el cas de dimarts, dimecres i diumenge, en què aquesta consonant és la m i, per tant, hi podria haver confusió.
 * Per evitar-ho, s'ha substituït la m per una t (en el cas de dimarts), una c (en el cas de dimecres) i una g (en el cas de diumenge), respectivament.
 *
 * Seguint la norma general d'ús de les abreviatures, les dels dies de la setmana sempre porten punt final.
 * Igualment, van amb la primera lletra en majúscula quan la paraula sencera també hi aniria.
 * En canvi, van amb la primera lletra en minúscula quan la inicial de la paraula sencera també hi aniria.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviatures+dies&action=Principal&method=detall_completa&numPagina=1&idHit=8387&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8387&titol=abreviatures%20dels%20dies%20de%20la%20setmana&numeroResultat=1&clickLink=detall&tipusCerca=cerca.tot
 */
var dayValues = {
  narrow: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  wide: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
};

/**
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?action=Principal&method=detall&input_cercar=parts+del+dia&numPagina=1&database=FITXES_PUB&idFont=12801&idHit=12801&tipusFont=Fitxes+de+l%27Optimot&numeroResultat=1&databases_avansada=&categories_avansada=&clickLink=detall&titol=Nom+de+les+parts+del+dia&tematica=&tipusCerca=cerca.fitxes
 */
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  }
};

/**
 * Quan van en singular, els nombres ordinals es representen, en forma d’abreviatura, amb la xifra seguida de l’última lletra del mot desplegat.
 * És optatiu posar punt després de la lletra.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/pdf/abrevia.pdf#page=18
 */
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'r';
      case 2:
        return number + 'n';
      case 3:
        return number + 'r';
      case 4:
        return number + 't';
    }
  }
  return number + 'è';
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

/***/ "./node_modules/date-fns/locale/ca/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/_lib/match/index.js ***!
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
var matchOrdinalNumberPattern = /^(\d+)(è|r|n|r|t)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a. de C.|d. de C.)/i,
  wide: /^(abans de Crist|despr[eé]s de Crist)/i
};
var parseEraPatterns = {
  narrow: [/^aC/i, /^dC/i],
  abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
  wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](è|r|n|r|t)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
  abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
  wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
};
var parseMonthPatterns = {
  narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i],
  abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i],
  wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i]
};
var matchDayPatterns = {
  narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
};
var parseDayPatterns = {
  narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
  abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
  wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mitjanit/i,
    noon: /^migdia/i,
    morning: /matí/i,
    afternoon: /tarda/i,
    evening: /vespre/i,
    night: /nit/i
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
    defaultParseWidth: 'wide'
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

/***/ "./node_modules/date-fns/locale/ca/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/ca/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/ca/_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/ca/_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/ca/_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(__webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/ca/_lib/localize/index.js"));
var _index5 = _interopRequireDefault(__webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/ca/_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Catalan locale.
 * @language Catalan
 * @iso-639-2 cat
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Alex Vizcaino [@avizcaino]{@link https://github.com/avizcaino}
 */
var locale = {
  code: 'ca',
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
var _default = locale; // throw new Error('ca locale is currently unavailable. Please check the progress of converting this locale to v2.0.0 in this issue on Github: TBA')
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NhL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9jYS9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9jYS9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvY2EvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NhL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9jYS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FB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O0FBQ25GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxzR0FBZ0M7QUFDNUUscUNBQXFDLG1CQUFPLENBQUMsOEZBQTRCO0FBQ3pFLHFDQUFxQyxtQkFBTyxDQUFDLHNHQUFnQztBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQywwRkFBMEI7QUFDdkUscUNBQXFDLG1CQUFPLENBQUMsb0ZBQXVCO0FBQ3BFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLGlDIiwiZmlsZSI6InZlbmRvcnN+ZGF0ZS1mbnMtbG9jYWxlLWNhLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLyoqXG4gKiBEYXZhbnQgZGUgbGVzIHhpZnJlcyBxdWUgZXMgZGl1ZW4gYW1iIHZvY2FsIGluaWNpYWwsIDEgaSAxMSwgcydhcG9zdHJvZmVuIGVscyBhcnRpY2xlcyBlbCBpIGxhIGkgbGEgcHJlcG9zaWNpw7MgZGUgaWd1YWwgcXVlIHNpIGVzdGlndWVzc2luIGVzY3JpdHMgYW1iIGxsZXRyZXMuXG4gKiAgICBsJzEgZGUganVsaW9sICgnbCd1JylcbiAqICAgIGwnMTEgZGUgbm92ZW1icmUgKCdsJ29uemUnKVxuICogICAgbCcxMWEgY2zDoHVzdWxhIGRlbCBjb250cmFjdGUgKCdsJ29uemVuYScpXG4gKiAgICBsYSBjb250cmFjdGFjacOzIGQnMTEganVnYWRvcnMgKCdkJ29uemUnKVxuICogICAgbCdhdmFsIGQnMTEuMDAwIHNvY2lzICgnZCdvbnplIG1pbCcpXG4gKlxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2lucHV0X2NlcmNhcj1hcG9zdHJvZmFjaSUyNUYzK2RhdmFudCt4aWZyZXMmYWN0aW9uPVByaW5jaXBhbCZtZXRob2Q9ZGV0YWxsX2NvbXBsZXRhJm51bVBhZ2luYT0xJmlkSGl0PTExMjM2JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTExMjM2JnRpdG9sPWFwb3N0cm9mYWNpJUYzJTIwZGF2YW50JTIwZGUlMjB4aWZyZXMlMjAlMkYlMjBhcG9zdHJvZmFjaSVGMyUyMGRhdmFudCUyMGRlJTIwMSUyMGklMjAxMSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS5ub3JtZXNcbiAqL1xuXG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibWVueXMgZCd1biBzZWdvblwiLFxuICAgIGVsZXZlbjogXCJtZW55cyBkJ29uemUgc2Vnb25zXCIsXG4gICAgb3RoZXI6ICdtZW55cyBkZSB7e2NvdW50fX0gc2Vnb25zJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vnb24nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlZ29ucydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdtaWcgbWludXQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcIm1lbnlzIGQndW4gbWludXRcIixcbiAgICBlbGV2ZW46IFwibWVueXMgZCdvbnplIG1pbnV0c1wiLFxuICAgIG90aGVyOiAnbWVueXMgZGUge3tjb3VudH19IG1pbnV0cydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dHMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnQgdW5hIGhvcmEnLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnQge3tjb3VudH19IGhvcmVzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvcmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvcmVzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGlhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkaWVzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fwcm94aW1hZGFtZW50IHVuYSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBzZXRtYW5lcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZXRtYW5lcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnQgdW4gbWVzJyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBtZXNvcydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbWVzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNvcydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhcHJveGltYWRhbWVudCB1biBhbnknLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnQge3tjb3VudH19IGFueXMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgYW55JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhbnlzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm3DqXMgZCd1biBhbnlcIixcbiAgICBlbGV2ZW46IFwibcOpcyBkJ29uemUgYW55c1wiLFxuICAgIG90aGVyOiAnbcOpcyBkZSB7e2NvdW50fX0gYW55cydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnZ2FpcmViw6kgdW4gYW55JyxcbiAgICBvdGhlcjogJ2dhaXJlYsOpIHt7Y291bnR9fSBhbnlzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxMSAmJiB0b2tlblZhbHVlLmVsZXZlbikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZWxldmVuO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2VuICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZmEgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIGQgJ2RlJyBNTU1NIHlcIixcbiAgbG9uZzogXCJkICdkZScgTU1NTSB5XCIsXG4gIG1lZGl1bTogJ2QgTU1NIHknLFxuICBzaG9ydDogJ2RkL01NL3knXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnSEg6bW06c3Mgenp6eicsXG4gIGxvbmc6ICdISDptbTpzcyB6JyxcbiAgbWVkaXVtOiAnSEg6bW06c3MnLFxuICBzaG9ydDogJ0hIOm1tJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2EgbGVzJyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhIGxlcycge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInZWwnIGVlZWUgJ3Bhc3NhdCBhIGxhJyBMVFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2FoaXIgYSBsYScgcFwiLFxuICB0b2RheTogXCInYXZ1aSBhIGxhJyBwXCIsXG4gIHRvbW9ycm93OiBcIidkZW3DoCBhIGxhJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2EgbGEnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZVBsdXJhbCA9IHtcbiAgbGFzdFdlZWs6IFwiJ2VsJyBlZWVlICdwYXNzYXQgYSBsZXMnIHBcIixcbiAgeWVzdGVyZGF5OiBcIidhaGlyIGEgbGVzJyBwXCIsXG4gIHRvZGF5OiBcIidhdnVpIGEgbGVzJyBwXCIsXG4gIHRvbW9ycm93OiBcIidkZW3DoCBhIGxlcycgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhIGxlcycgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgaWYgKGRhdGUuZ2V0VVRDSG91cnMoKSAhPT0gMSkge1xuICAgIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVBsdXJhbFt0b2tlbl07XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbi8qKlxuICogR2VuZXJhbCBpbmZvcm1hdGlvblxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdFxuICogUmVmZXJlbmNlOiBodHRwczovL3d3dy51b2MuZWR1L3BvcnRhbC9jYS9zZXJ2ZWktbGluZ3Vpc3RpYy9jb252ZW5jaW9ucy9hYnJldmlhY2lvbnMvc2ltYm9scy9zaW1ib2xzLWhhYml0dWFscy5odG1sXG4gKi9cbi8qKlxuICogQWJhbnMgZGUgQ3Jpc3Q6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWFiYW5zK2RlK2NyaXN0JmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD02ODc2JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTY4NzYmdGl0b2w9YWJhbnMlMjBkZSUyMENyaXN0JTIwKGFicmV2aWF0dXJhKSUyMC8lMjBhYmFucyUyMGRlJTIwQ3Jpc3QlMjAoc2lnbGEpJm51bWVyb1Jlc3VsdGF0PTEmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICogRGVzcHJlc3QgZGUgQ3Jpc3Q6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWRlc3ByJUU5cytkZStjcmlzdCZhY3Rpb249UHJpbmNpcGFsJm1ldGhvZD1kZXRhbGxfY29tcGxldGEmbnVtUGFnaW5hPTEmaWRIaXQ9Njg3OSZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD02ODc5JnRpdG9sPWRlc3ByJUU5cyUyMGRlJTIwQ3Jpc3QlMjAoc2lnbGEpJTIwLyUyMGRlc3ByJUU5cyUyMGRlJTIwQ3Jpc3QlMjAoYWJyZXZpYXR1cmEpJm51bWVyb1Jlc3VsdGF0PTEmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnYUMnLCAnZEMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnYS4gZGUgQy4nLCAnZC4gZGUgQy4nXSxcbiAgd2lkZTogWydhYmFucyBkZSBDcmlzdCcsICdkZXNwcsOpcyBkZSBDcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1QxJywgJ1QyJywgJ1QzJywgJ1Q0J10sXG4gIHdpZGU6IFsnMXIgdHJpbWVzdHJlJywgJzJuIHRyaW1lc3RyZScsICczciB0cmltZXN0cmUnLCAnNHQgdHJpbWVzdHJlJ11cbn07XG5cbi8qKlxuICogRGlucyBkJ3VuIHRleHQgY29udsOpIGZlciBzZXJ2aXIgbGEgZm9ybWEgc2VuY2VyYSBkZWxzIG1lc29zLCBqYSBxdWUgc2VtcHJlIMOpcyBtw6lzIGNsYXIgZWwgbW90IHNlbmNlciBxdWUgbCdhYnJldmlhdHVyYSwgZW5jYXJhIHF1ZSBhcXVlc3RhIHNpZ3VpIGZvcsOnYSBjb25lZ3VkYS5cbiAqIENhbCByZXNlcnZhciwgZG9uY3MsIGxlcyBhYnJldmlhdHVyZXMgcGVyIGEgbGVzIGxsaXN0ZXMgbyBjbGFzc2lmaWNhY2lvbnMsIGVscyBncsOgZmljcywgbGVzIHRhdWxlcyBvIHF1YWRyZXMgZXN0YWTDrXN0aWNzLCBlbHMgdGV4dG9zIHB1YmxpY2l0YXJpcywgZXRjLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXQvbGxjL0FwcEphdmEvaW5kZXguaHRtbD9pbnB1dF9jZXJjYXI9YWJyZXZpYWNpb25zK21lc29zJmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD04NDAyJmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTg0MDImdGl0b2w9YWJyZXZpYXR1cmVzJTIwZGVscyUyMG1lc29zJTIwZGUlMjBsJTI3YW55Jm51bWVyb1Jlc3VsdGF0PTUmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUcnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnRFMnXSxcbiAgLyoqXG4gICAqIExlcyBhYnJldmlhdHVyZXMgZGVscyBtZXNvcyBkZSBsJ2FueSBlcyBmb3JtZW4gc2VndWludCB1bmEgZGUgbGVzIG5vcm1lcyBnZW5lcmFscyBkZSBmb3JtYWNpw7MgZCdhYnJldmlhdHVyZXMuXG4gICAqIFMnZXNjcml1IGxhIHByaW1lcmEgc8OtbMK3bGFiYSBpIGxlcyBjb25zb25hbnRzIGRlIGxhIHPDrWzCt2xhYmEgc2Vnw7xlbnQgYW50ZXJpb3JzIGEgbGEgcHJpbWVyYSB2b2NhbC5cbiAgICogRWxzIG1lc29zIGRlIG1hcsOnLCBtYWlnIGkganVueSBubyBzJ2FicmV1Z2VuIHBlcnF1w6ggc8OzbiBwYXJhdWxlcyBkJ3VuYSBzb2xhIHPDrWzCt2xhYmEuXG4gICAqL1xuICBhYmJyZXZpYXRlZDogWydnZW4uJywgJ2ZlYnIuJywgJ21hcsOnJywgJ2Fici4nLCAnbWFpZycsICdqdW55JywgJ2p1bC4nLCAnYWcuJywgJ3NldC4nLCAnb2N0LicsICdub3YuJywgJ2Rlcy4nXSxcbiAgd2lkZTogWydnZW5lcicsICdmZWJyZXInLCAnbWFyw6cnLCAnYWJyaWwnLCAnbWFpZycsICdqdW55JywgJ2p1bGlvbCcsICdhZ29zdCcsICdzZXRlbWJyZScsICdvY3R1YnJlJywgJ25vdmVtYnJlJywgJ2Rlc2VtYnJlJ11cbn07XG5cbi8qKlxuICogTGVzIGFicmV2aWF0dXJlcyBkZWxzIGRpZXMgZGUgbGEgc2V0bWFuYSBjb21lbmNlbiB0b3RlcyBhbWIgbGEgbGxldHJhIGQuXG4gKiBUb3Qgc2VndWl0IHBvcnRlbiBsYSBjb25zb25hbnQgc2Vnw7xlbnQgYSBsYSBpLCBleGNlcHRlIGVuIGVsIGNhcyBkZSBkaW1hcnRzLCBkaW1lY3JlcyBpIGRpdW1lbmdlLCBlbiBxdcOoIGFxdWVzdGEgY29uc29uYW50IMOpcyBsYSBtIGksIHBlciB0YW50LCBoaSBwb2RyaWEgaGF2ZXIgY29uZnVzacOzLlxuICogUGVyIGV2aXRhci1obywgcydoYSBzdWJzdGl0dcOvdCBsYSBtIHBlciB1bmEgdCAoZW4gZWwgY2FzIGRlIGRpbWFydHMpLCB1bmEgYyAoZW4gZWwgY2FzIGRlIGRpbWVjcmVzKSBpIHVuYSBnIChlbiBlbCBjYXMgZGUgZGl1bWVuZ2UpLCByZXNwZWN0aXZhbWVudC5cbiAqXG4gKiBTZWd1aW50IGxhIG5vcm1hIGdlbmVyYWwgZCfDunMgZGUgbGVzIGFicmV2aWF0dXJlcywgbGVzIGRlbHMgZGllcyBkZSBsYSBzZXRtYW5hIHNlbXByZSBwb3J0ZW4gcHVudCBmaW5hbC5cbiAqIElndWFsbWVudCwgdmFuIGFtYiBsYSBwcmltZXJhIGxsZXRyYSBlbiBtYWrDunNjdWxhIHF1YW4gbGEgcGFyYXVsYSBzZW5jZXJhIHRhbWLDqSBoaSBhbmlyaWEuXG4gKiBFbiBjYW52aSwgdmFuIGFtYiBsYSBwcmltZXJhIGxsZXRyYSBlbiBtaW7DunNjdWxhIHF1YW4gbGEgaW5pY2lhbCBkZSBsYSBwYXJhdWxhIHNlbmNlcmEgdGFtYsOpIGhpIGFuaXJpYS5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWFicmV2aWF0dXJlcytkaWVzJmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD04Mzg3JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTgzODcmdGl0b2w9YWJyZXZpYXR1cmVzJTIwZGVscyUyMGRpZXMlMjBkZSUyMGxhJTIwc2V0bWFuYSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS50b3RcbiAqL1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2RnLicsICdkbC4nLCAnZHQuJywgJ2RtLicsICdkai4nLCAnZHYuJywgJ2RzLiddLFxuICBzaG9ydDogWydkZy4nLCAnZGwuJywgJ2R0LicsICdkbS4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZGcuJywgJ2RsLicsICdkdC4nLCAnZG0uJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gIHdpZGU6IFsnZGl1bWVuZ2UnLCAnZGlsbHVucycsICdkaW1hcnRzJywgJ2RpbWVjcmVzJywgJ2Rpam91cycsICdkaXZlbmRyZXMnLCAnZGlzc2FidGUnXVxufTtcblxuLyoqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/YWN0aW9uPVByaW5jaXBhbCZtZXRob2Q9ZGV0YWxsJmlucHV0X2NlcmNhcj1wYXJ0cytkZWwrZGlhJm51bVBhZ2luYT0xJmRhdGFiYXNlPUZJVFhFU19QVUImaWRGb250PTEyODAxJmlkSGl0PTEyODAxJnRpcHVzRm9udD1GaXR4ZXMrZGUrbCUyN09wdGltb3QmbnVtZXJvUmVzdWx0YXQ9MSZkYXRhYmFzZXNfYXZhbnNhZGE9JmNhdGVnb3JpZXNfYXZhbnNhZGE9JmNsaWNrTGluaz1kZXRhbGwmdGl0b2w9Tm9tK2RlK2xlcytwYXJ0cytkZWwrZGlhJnRlbWF0aWNhPSZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ21pdGphbml0JyxcbiAgICBub29uOiAnbWlnZGlhJyxcbiAgICBtb3JuaW5nOiAnbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ3RhcmRhJyxcbiAgICBldmVuaW5nOiAndmVzcHJlJyxcbiAgICBuaWdodDogJ25pdCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaXRqYW5pdCcsXG4gICAgbm9vbjogJ21pZ2RpYScsXG4gICAgbW9ybmluZzogJ21hdMOtJyxcbiAgICBhZnRlcm5vb246ICd0YXJkYScsXG4gICAgZXZlbmluZzogJ3Zlc3ByZScsXG4gICAgbmlnaHQ6ICduaXQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FudGUgbWVyaWRpZW0nLFxuICAgIHBtOiAncG9zdCBtZXJpZGllbScsXG4gICAgbWlkbmlnaHQ6ICdtaXRqYW5pdCcsXG4gICAgbm9vbjogJ21pZ2RpYScsXG4gICAgbW9ybmluZzogJ21hdMOtJyxcbiAgICBhZnRlcm5vb246ICd0YXJkYScsXG4gICAgZXZlbmluZzogJ3Zlc3ByZScsXG4gICAgbmlnaHQ6ICduaXQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FudGUgbWVyaWRpZW0nLFxuICAgIHBtOiAncG9zdCBtZXJpZGllbScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH1cbn07XG5cbi8qKlxuICogUXVhbiB2YW4gZW4gc2luZ3VsYXIsIGVscyBub21icmVzIG9yZGluYWxzIGVzIHJlcHJlc2VudGVuLCBlbiBmb3JtYSBk4oCZYWJyZXZpYXR1cmEsIGFtYiBsYSB4aWZyYSBzZWd1aWRhIGRlIGzigJnDumx0aW1hIGxsZXRyYSBkZWwgbW90IGRlc3BsZWdhdC5cbiAqIMOJcyBvcHRhdGl1IHBvc2FyIHB1bnQgZGVzcHLDqXMgZGUgbGEgbGxldHJhLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXQvbGxjL0FwcEphdmEvcGRmL2FicmV2aWEucGRmI3BhZ2U9MThcbiAqL1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3InO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ24nO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3InO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3QnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ8OoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSjDqHxyfG58cnx0KT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGFDfGRDKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYS4gZGUgQy58ZC4gZGUgQy4pL2ksXG4gIHdpZGU6IC9eKGFiYW5zIGRlIENyaXN0fGRlc3ByW2XDqV1zIGRlIENyaXN0KS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eYUMvaSwgL15kQy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXihhLiBkZSBDLikvaSwgL14oZC4gZGUgQy4pL2ldLFxuICB3aWRlOiBbL14oYWJhbnMgZGUgQ3Jpc3QpL2ksIC9eKGRlc3ByW2XDqV1zIGRlIENyaXN0KS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15UWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKMOofHJ8bnxyfHQpPyB0cmltZXN0cmUvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKEdOfEZCfE3Dh3xBQnxNR3xKTnxKTHxBR3xTVHxPQ3xOVnxEUykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGdlbi58ZmVici58bWFyw6d8YWJyLnxtYWlnfGp1bnl8anVsLnxhZy58c2V0LnxvY3QufG5vdi58ZGVzLikvaSxcbiAgd2lkZTogL14oZ2VuZXJ8ZmVicmVyfG1hcsOnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eR04vaSwgL15GQi9pLCAvXk3Dhy9pLCAvXkFCL2ksIC9eTUcvaSwgL15KTi9pLCAvXkpML2ksIC9eQUcvaSwgL15TVC9pLCAvXk9DL2ksIC9eTlYvaSwgL15EUy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXmdlbi4vaSwgL15mZWJyLi9pLCAvXm1hcsOnL2ksIC9eYWJyLi9pLCAvXm1haWcvaSwgL15qdW55L2ksIC9eanVsLi9pLCAvXmFnLi9pLCAvXnNldC4vaSwgL15vY3QuL2ksIC9ebm92Li9pLCAvXmRlcy4vaV0sXG4gIHdpZGU6IFsvXmdlbmVyL2ksIC9eZmVicmVyL2ksIC9ebWFyw6cvaSwgL15hYnJpbC9pLCAvXm1haWcvaSwgL15qdW55L2ksIC9eanVsaW9sL2ksIC9eYWdvc3QvaSwgL15zZXRlbWJyZS9pLCAvXm9jdHVicmUvaSwgL15ub3ZlbWJyZS9pLCAvXmRlc2VtYnJlL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oZGdcXC58ZGxcXC58ZHRcXC58ZG1cXC58ZGpcXC58ZHZcXC58ZHNcXC4pL2ksXG4gIHNob3J0OiAvXihkZ1xcLnxkbFxcLnxkdFxcLnxkbVxcLnxkalxcLnxkdlxcLnxkc1xcLikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGRnXFwufGRsXFwufGR0XFwufGRtXFwufGRqXFwufGR2XFwufGRzXFwuKS9pLFxuICB3aWRlOiAvXihkaXVtZW5nZXxkaWxsdW5zfGRpbWFydHN8ZGltZWNyZXN8ZGlqb3VzfGRpdmVuZHJlc3xkaXNzYWJ0ZSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmRnLi9pLCAvXmRsLi9pLCAvXmR0Li9pLCAvXmRtLi9pLCAvXmRqLi9pLCAvXmR2Li9pLCAvXmRzLi9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXmRnLi9pLCAvXmRsLi9pLCAvXmR0Li9pLCAvXmRtLi9pLCAvXmRqLi9pLCAvXmR2Li9pLCAvXmRzLi9pXSxcbiAgd2lkZTogWy9eZGl1bWVuZ2UvaSwgL15kaWxsdW5zL2ksIC9eZGltYXJ0cy9pLCAvXmRpbWVjcmVzL2ksIC9eZGlqb3VzL2ksIC9eZGl2ZW5kcmVzL2ksIC9eZGlzc3NhYnRlL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1ufG1kfChkZWx8ZGUgbGEpIChtYXTDrXx0YXJkYXx2ZXNwcmV8bml0KSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pdGphbml0fG1pZ2RpYXwoZGVsfGRlIGxhKSAobWF0w618dGFyZGF8dmVzcHJlfG5pdCkpL2ksXG4gIHdpZGU6IC9eKGFudGUgbWVyaWRpZW18cG9zdCBtZXJpZGllbXxtaXRqYW5pdHxtaWdkaWF8KGRlbHxkZSBsYSkgKG1hdMOtfHRhcmRhfHZlc3ByZXxuaXQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWl0amFuaXQvaSxcbiAgICBub29uOiAvXm1pZ2RpYS9pLFxuICAgIG1vcm5pbmc6IC9tYXTDrS9pLFxuICAgIGFmdGVybm9vbjogL3RhcmRhL2ksXG4gICAgZXZlbmluZzogL3Zlc3ByZS9pLFxuICAgIG5pZ2h0OiAvbml0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IG1hdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIikpO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IENhdGFsYW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIENhdGFsYW5cbiAqIEBpc28tNjM5LTIgY2F0XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBHcmF1IFtAZ3VpZ3JwYV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2d1aWdycGF9XG4gKiBAYXV0aG9yIEFsZXggVml6Y2Fpbm8gW0Bhdml6Y2Fpbm9de0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hdml6Y2Fpbm99XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdjYScsXG4gIGZvcm1hdERpc3RhbmNlOiBfaW5kZXguZGVmYXVsdCxcbiAgZm9ybWF0TG9uZzogX2luZGV4Mi5kZWZhdWx0LFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4My5kZWZhdWx0LFxuICBsb2NhbGl6ZTogX2luZGV4NC5kZWZhdWx0LFxuICBtYXRjaDogX2luZGV4NS5kZWZhdWx0LFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAxIC8qIE1vbmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTsgLy8gdGhyb3cgbmV3IEVycm9yKCdjYSBsb2NhbGUgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIHByb2dyZXNzIG9mIGNvbnZlcnRpbmcgdGhpcyBsb2NhbGUgdG8gdjIuMC4wIGluIHRoaXMgaXNzdWUgb24gR2l0aHViOiBUQkEnKVxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9