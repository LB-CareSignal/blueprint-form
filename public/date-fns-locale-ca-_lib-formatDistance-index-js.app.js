(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ca-_lib-formatDistance-index-js"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NhL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtY2EtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qKlxuICogRGF2YW50IGRlIGxlcyB4aWZyZXMgcXVlIGVzIGRpdWVuIGFtYiB2b2NhbCBpbmljaWFsLCAxIGkgMTEsIHMnYXBvc3Ryb2ZlbiBlbHMgYXJ0aWNsZXMgZWwgaSBsYSBpIGxhIHByZXBvc2ljacOzIGRlIGlndWFsIHF1ZSBzaSBlc3RpZ3Vlc3NpbiBlc2NyaXRzIGFtYiBsbGV0cmVzLlxuICogICAgbCcxIGRlIGp1bGlvbCAoJ2wndScpXG4gKiAgICBsJzExIGRlIG5vdmVtYnJlICgnbCdvbnplJylcbiAqICAgIGwnMTFhIGNsw6B1c3VsYSBkZWwgY29udHJhY3RlICgnbCdvbnplbmEnKVxuICogICAgbGEgY29udHJhY3RhY2nDsyBkJzExIGp1Z2Fkb3JzICgnZCdvbnplJylcbiAqICAgIGwnYXZhbCBkJzExLjAwMCBzb2NpcyAoJ2Qnb256ZSBtaWwnKVxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXQvbGxjL0FwcEphdmEvaW5kZXguaHRtbD9pbnB1dF9jZXJjYXI9YXBvc3Ryb2ZhY2klMjVGMytkYXZhbnQreGlmcmVzJmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD0xMTIzNiZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD0xMTIzNiZ0aXRvbD1hcG9zdHJvZmFjaSVGMyUyMGRhdmFudCUyMGRlJTIweGlmcmVzJTIwJTJGJTIwYXBvc3Ryb2ZhY2klRjMlMjBkYXZhbnQlMjBkZSUyMDElMjBpJTIwMTEmbnVtZXJvUmVzdWx0YXQ9MSZjbGlja0xpbms9ZGV0YWxsJnRpcHVzQ2VyY2E9Y2VyY2Eubm9ybWVzXG4gKi9cblxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcIm1lbnlzIGQndW4gc2Vnb25cIixcbiAgICBlbGV2ZW46IFwibWVueXMgZCdvbnplIHNlZ29uc1wiLFxuICAgIG90aGVyOiAnbWVueXMgZGUge3tjb3VudH19IHNlZ29ucydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlZ29uJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWdvbnMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnbWlnIG1pbnV0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJtZW55cyBkJ3VuIG1pbnV0XCIsXG4gICAgZWxldmVuOiBcIm1lbnlzIGQnb256ZSBtaW51dHNcIixcbiAgICBvdGhlcjogJ21lbnlzIGRlIHt7Y291bnR9fSBtaW51dHMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fwcm94aW1hZGFtZW50IHVuYSBob3JhJyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBob3JlcydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3JhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3JlcydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRpYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGllcydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhcHJveGltYWRhbWVudCB1bmEgc2V0bWFuYScsXG4gICAgb3RoZXI6ICdhcHJveGltYWRhbWVudCB7e2NvdW50fX0gc2V0bWFuZXMnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgc2V0bWFuYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2V0bWFuZXMnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fwcm94aW1hZGFtZW50IHVuIG1lcycsXG4gICAgb3RoZXI6ICdhcHJveGltYWRhbWVudCB7e2NvdW50fX0gbWVzb3MnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1lcycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzb3MnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnQgdW4gYW55JyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBhbnlzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGFueScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYW55cydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJtw6lzIGQndW4gYW55XCIsXG4gICAgZWxldmVuOiBcIm3DqXMgZCdvbnplIGFueXNcIixcbiAgICBvdGhlcjogJ23DqXMgZGUge3tjb3VudH19IGFueXMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2dhaXJlYsOpIHVuIGFueScsXG4gICAgb3RoZXI6ICdnYWlyZWLDqSB7e2NvdW50fX0gYW55cydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMTEgJiYgdG9rZW5WYWx1ZS5lbGV2ZW4pIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLmVsZXZlbjtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdlbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2ZhICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=