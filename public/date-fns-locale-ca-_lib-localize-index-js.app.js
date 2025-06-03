(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ca-_lib-localize-index-js"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NhL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1jYS1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG4vKipcbiAqIEdlbmVyYWwgaW5mb3JtYXRpb25cbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXRcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly93d3cudW9jLmVkdS9wb3J0YWwvY2Evc2VydmVpLWxpbmd1aXN0aWMvY29udmVuY2lvbnMvYWJyZXZpYWNpb25zL3NpbWJvbHMvc2ltYm9scy1oYWJpdHVhbHMuaHRtbFxuICovXG4vKipcbiAqIEFiYW5zIGRlIENyaXN0OiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2lucHV0X2NlcmNhcj1hYmFucytkZStjcmlzdCZhY3Rpb249UHJpbmNpcGFsJm1ldGhvZD1kZXRhbGxfY29tcGxldGEmbnVtUGFnaW5hPTEmaWRIaXQ9Njg3NiZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD02ODc2JnRpdG9sPWFiYW5zJTIwZGUlMjBDcmlzdCUyMChhYnJldmlhdHVyYSklMjAvJTIwYWJhbnMlMjBkZSUyMENyaXN0JTIwKHNpZ2xhKSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS5maXR4ZXNcbiAqIERlc3ByZXN0IGRlIENyaXN0OiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2lucHV0X2NlcmNhcj1kZXNwciVFOXMrZGUrY3Jpc3QmYWN0aW9uPVByaW5jaXBhbCZtZXRob2Q9ZGV0YWxsX2NvbXBsZXRhJm51bVBhZ2luYT0xJmlkSGl0PTY4NzkmZGF0YWJhc2U9RklUWEVTX1BVQiZ0aXB1c0ZvbnQ9Rml0eGVzJTIwZGUlMjBsJTI3T3B0aW1vdCZpZEZvbnQ9Njg3OSZ0aXRvbD1kZXNwciVFOXMlMjBkZSUyMENyaXN0JTIwKHNpZ2xhKSUyMC8lMjBkZXNwciVFOXMlMjBkZSUyMENyaXN0JTIwKGFicmV2aWF0dXJhKSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS5maXR4ZXNcbiAqL1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2FDJywgJ2RDJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2EuIGRlIEMuJywgJ2QuIGRlIEMuJ10sXG4gIHdpZGU6IFsnYWJhbnMgZGUgQ3Jpc3QnLCAnZGVzcHLDqXMgZGUgQ3Jpc3QnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydUMScsICdUMicsICdUMycsICdUNCddLFxuICB3aWRlOiBbJzFyIHRyaW1lc3RyZScsICcybiB0cmltZXN0cmUnLCAnM3IgdHJpbWVzdHJlJywgJzR0IHRyaW1lc3RyZSddXG59O1xuXG4vKipcbiAqIERpbnMgZCd1biB0ZXh0IGNvbnbDqSBmZXIgc2VydmlyIGxhIGZvcm1hIHNlbmNlcmEgZGVscyBtZXNvcywgamEgcXVlIHNlbXByZSDDqXMgbcOpcyBjbGFyIGVsIG1vdCBzZW5jZXIgcXVlIGwnYWJyZXZpYXR1cmEsIGVuY2FyYSBxdWUgYXF1ZXN0YSBzaWd1aSBmb3LDp2EgY29uZWd1ZGEuXG4gKiBDYWwgcmVzZXJ2YXIsIGRvbmNzLCBsZXMgYWJyZXZpYXR1cmVzIHBlciBhIGxlcyBsbGlzdGVzIG8gY2xhc3NpZmljYWNpb25zLCBlbHMgZ3LDoGZpY3MsIGxlcyB0YXVsZXMgbyBxdWFkcmVzIGVzdGFkw61zdGljcywgZWxzIHRleHRvcyBwdWJsaWNpdGFyaXMsIGV0Yy5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWFicmV2aWFjaW9ucyttZXNvcyZhY3Rpb249UHJpbmNpcGFsJm1ldGhvZD1kZXRhbGxfY29tcGxldGEmbnVtUGFnaW5hPTEmaWRIaXQ9ODQwMiZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD04NDAyJnRpdG9sPWFicmV2aWF0dXJlcyUyMGRlbHMlMjBtZXNvcyUyMGRlJTIwbCUyN2FueSZudW1lcm9SZXN1bHRhdD01JmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS5maXR4ZXNcbiAqL1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnR04nLCAnRkInLCAnTcOHJywgJ0FCJywgJ01HJywgJ0pOJywgJ0pMJywgJ0FHJywgJ1NUJywgJ09DJywgJ05WJywgJ0RTJ10sXG4gIC8qKlxuICAgKiBMZXMgYWJyZXZpYXR1cmVzIGRlbHMgbWVzb3MgZGUgbCdhbnkgZXMgZm9ybWVuIHNlZ3VpbnQgdW5hIGRlIGxlcyBub3JtZXMgZ2VuZXJhbHMgZGUgZm9ybWFjacOzIGQnYWJyZXZpYXR1cmVzLlxuICAgKiBTJ2VzY3JpdSBsYSBwcmltZXJhIHPDrWzCt2xhYmEgaSBsZXMgY29uc29uYW50cyBkZSBsYSBzw61swrdsYWJhIHNlZ8O8ZW50IGFudGVyaW9ycyBhIGxhIHByaW1lcmEgdm9jYWwuXG4gICAqIEVscyBtZXNvcyBkZSBtYXLDpywgbWFpZyBpIGp1bnkgbm8gcydhYnJldWdlbiBwZXJxdcOoIHPDs24gcGFyYXVsZXMgZCd1bmEgc29sYSBzw61swrdsYWJhLlxuICAgKi9cbiAgYWJicmV2aWF0ZWQ6IFsnZ2VuLicsICdmZWJyLicsICdtYXLDpycsICdhYnIuJywgJ21haWcnLCAnanVueScsICdqdWwuJywgJ2FnLicsICdzZXQuJywgJ29jdC4nLCAnbm92LicsICdkZXMuJ10sXG4gIHdpZGU6IFsnZ2VuZXInLCAnZmVicmVyJywgJ21hcsOnJywgJ2FicmlsJywgJ21haWcnLCAnanVueScsICdqdWxpb2wnLCAnYWdvc3QnLCAnc2V0ZW1icmUnLCAnb2N0dWJyZScsICdub3ZlbWJyZScsICdkZXNlbWJyZSddXG59O1xuXG4vKipcbiAqIExlcyBhYnJldmlhdHVyZXMgZGVscyBkaWVzIGRlIGxhIHNldG1hbmEgY29tZW5jZW4gdG90ZXMgYW1iIGxhIGxsZXRyYSBkLlxuICogVG90IHNlZ3VpdCBwb3J0ZW4gbGEgY29uc29uYW50IHNlZ8O8ZW50IGEgbGEgaSwgZXhjZXB0ZSBlbiBlbCBjYXMgZGUgZGltYXJ0cywgZGltZWNyZXMgaSBkaXVtZW5nZSwgZW4gcXXDqCBhcXVlc3RhIGNvbnNvbmFudCDDqXMgbGEgbSBpLCBwZXIgdGFudCwgaGkgcG9kcmlhIGhhdmVyIGNvbmZ1c2nDsy5cbiAqIFBlciBldml0YXItaG8sIHMnaGEgc3Vic3RpdHXDr3QgbGEgbSBwZXIgdW5hIHQgKGVuIGVsIGNhcyBkZSBkaW1hcnRzKSwgdW5hIGMgKGVuIGVsIGNhcyBkZSBkaW1lY3JlcykgaSB1bmEgZyAoZW4gZWwgY2FzIGRlIGRpdW1lbmdlKSwgcmVzcGVjdGl2YW1lbnQuXG4gKlxuICogU2VndWludCBsYSBub3JtYSBnZW5lcmFsIGQnw7pzIGRlIGxlcyBhYnJldmlhdHVyZXMsIGxlcyBkZWxzIGRpZXMgZGUgbGEgc2V0bWFuYSBzZW1wcmUgcG9ydGVuIHB1bnQgZmluYWwuXG4gKiBJZ3VhbG1lbnQsIHZhbiBhbWIgbGEgcHJpbWVyYSBsbGV0cmEgZW4gbWFqw7pzY3VsYSBxdWFuIGxhIHBhcmF1bGEgc2VuY2VyYSB0YW1iw6kgaGkgYW5pcmlhLlxuICogRW4gY2FudmksIHZhbiBhbWIgbGEgcHJpbWVyYSBsbGV0cmEgZW4gbWluw7pzY3VsYSBxdWFuIGxhIGluaWNpYWwgZGUgbGEgcGFyYXVsYSBzZW5jZXJhIHRhbWLDqSBoaSBhbmlyaWEuXG4gKlxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2lucHV0X2NlcmNhcj1hYnJldmlhdHVyZXMrZGllcyZhY3Rpb249UHJpbmNpcGFsJm1ldGhvZD1kZXRhbGxfY29tcGxldGEmbnVtUGFnaW5hPTEmaWRIaXQ9ODM4NyZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD04Mzg3JnRpdG9sPWFicmV2aWF0dXJlcyUyMGRlbHMlMjBkaWVzJTIwZGUlMjBsYSUyMHNldG1hbmEmbnVtZXJvUmVzdWx0YXQ9MSZjbGlja0xpbms9ZGV0YWxsJnRpcHVzQ2VyY2E9Y2VyY2EudG90XG4gKi9cbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydkZy4nLCAnZGwuJywgJ2R0LicsICdkbS4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgc2hvcnQ6IFsnZGcuJywgJ2RsLicsICdkdC4nLCAnZG0uJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2RnLicsICdkbC4nLCAnZHQuJywgJ2RtLicsICdkai4nLCAnZHYuJywgJ2RzLiddLFxuICB3aWRlOiBbJ2RpdW1lbmdlJywgJ2RpbGx1bnMnLCAnZGltYXJ0cycsICdkaW1lY3JlcycsICdkaWpvdXMnLCAnZGl2ZW5kcmVzJywgJ2Rpc3NhYnRlJ11cbn07XG5cbi8qKlxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2FjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbCZpbnB1dF9jZXJjYXI9cGFydHMrZGVsK2RpYSZudW1QYWdpbmE9MSZkYXRhYmFzZT1GSVRYRVNfUFVCJmlkRm9udD0xMjgwMSZpZEhpdD0xMjgwMSZ0aXB1c0ZvbnQ9Rml0eGVzK2RlK2wlMjdPcHRpbW90Jm51bWVyb1Jlc3VsdGF0PTEmZGF0YWJhc2VzX2F2YW5zYWRhPSZjYXRlZ29yaWVzX2F2YW5zYWRhPSZjbGlja0xpbms9ZGV0YWxsJnRpdG9sPU5vbStkZStsZXMrcGFydHMrZGVsK2RpYSZ0ZW1hdGljYT0mdGlwdXNDZXJjYT1jZXJjYS5maXR4ZXNcbiAqL1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdtaXRqYW5pdCcsXG4gICAgbm9vbjogJ21pZ2RpYScsXG4gICAgbW9ybmluZzogJ21hdMOtJyxcbiAgICBhZnRlcm5vb246ICd0YXJkYScsXG4gICAgZXZlbmluZzogJ3Zlc3ByZScsXG4gICAgbmlnaHQ6ICduaXQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWl0amFuaXQnLFxuICAgIG5vb246ICdtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdtYXTDrScsXG4gICAgYWZ0ZXJub29uOiAndGFyZGEnLFxuICAgIGV2ZW5pbmc6ICd2ZXNwcmUnLFxuICAgIG5pZ2h0OiAnbml0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhbnRlIG1lcmlkaWVtJyxcbiAgICBwbTogJ3Bvc3QgbWVyaWRpZW0nLFxuICAgIG1pZG5pZ2h0OiAnbWl0amFuaXQnLFxuICAgIG5vb246ICdtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdtYXTDrScsXG4gICAgYWZ0ZXJub29uOiAndGFyZGEnLFxuICAgIGV2ZW5pbmc6ICd2ZXNwcmUnLFxuICAgIG5pZ2h0OiAnbml0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAnZGUgbGEgbWl0amFuaXQnLFxuICAgIG5vb246ICdkZWwgbWlnZGlhJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdMOtJyxcbiAgICBhZnRlcm5vb246ICdkZSBsYSB0YXJkYScsXG4gICAgZXZlbmluZzogJ2RlbCB2ZXNwcmUnLFxuICAgIG5pZ2h0OiAnZGUgbGEgbml0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnZGUgbGEgbWl0amFuaXQnLFxuICAgIG5vb246ICdkZWwgbWlnZGlhJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdMOtJyxcbiAgICBhZnRlcm5vb246ICdkZSBsYSB0YXJkYScsXG4gICAgZXZlbmluZzogJ2RlbCB2ZXNwcmUnLFxuICAgIG5pZ2h0OiAnZGUgbGEgbml0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhbnRlIG1lcmlkaWVtJyxcbiAgICBwbTogJ3Bvc3QgbWVyaWRpZW0nLFxuICAgIG1pZG5pZ2h0OiAnZGUgbGEgbWl0amFuaXQnLFxuICAgIG5vb246ICdkZWwgbWlnZGlhJyxcbiAgICBtb3JuaW5nOiAnZGVsIG1hdMOtJyxcbiAgICBhZnRlcm5vb246ICdkZSBsYSB0YXJkYScsXG4gICAgZXZlbmluZzogJ2RlbCB2ZXNwcmUnLFxuICAgIG5pZ2h0OiAnZGUgbGEgbml0J1xuICB9XG59O1xuXG4vKipcbiAqIFF1YW4gdmFuIGVuIHNpbmd1bGFyLCBlbHMgbm9tYnJlcyBvcmRpbmFscyBlcyByZXByZXNlbnRlbiwgZW4gZm9ybWEgZOKAmWFicmV2aWF0dXJhLCBhbWIgbGEgeGlmcmEgc2VndWlkYSBkZSBs4oCZw7psdGltYSBsbGV0cmEgZGVsIG1vdCBkZXNwbGVnYXQuXG4gKiDDiXMgb3B0YXRpdSBwb3NhciBwdW50IGRlc3Byw6lzIGRlIGxhIGxsZXRyYS5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL3BkZi9hYnJldmlhLnBkZiNwYWdlPTE4XG4gKi9cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyJztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyJztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICd0JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICfDqCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==