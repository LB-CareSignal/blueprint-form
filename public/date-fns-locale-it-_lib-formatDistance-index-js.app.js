(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-it-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/it/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/it/_lib/formatDistance/index.js ***!
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
    one: 'meno di un secondo',
    other: 'meno di {{count}} secondi'
  },
  xSeconds: {
    one: 'un secondo',
    other: '{{count}} secondi'
  },
  halfAMinute: 'alcuni secondi',
  lessThanXMinutes: {
    one: 'meno di un minuto',
    other: 'meno di {{count}} minuti'
  },
  xMinutes: {
    one: 'un minuto',
    other: '{{count}} minuti'
  },
  aboutXHours: {
    one: "circa un'ora",
    other: 'circa {{count}} ore'
  },
  xHours: {
    one: "un'ora",
    other: '{{count}} ore'
  },
  xDays: {
    one: 'un giorno',
    other: '{{count}} giorni'
  },
  aboutXWeeks: {
    one: 'circa una settimana',
    other: 'circa {{count}} settimane'
  },
  xWeeks: {
    one: 'una settimana',
    other: '{{count}} settimane'
  },
  aboutXMonths: {
    one: 'circa un mese',
    other: 'circa {{count}} mesi'
  },
  xMonths: {
    one: 'un mese',
    other: '{{count}} mesi'
  },
  aboutXYears: {
    one: 'circa un anno',
    other: 'circa {{count}} anni'
  },
  xYears: {
    one: 'un anno',
    other: '{{count}} anni'
  },
  overXYears: {
    one: 'più di un anno',
    other: 'più di {{count}} anni'
  },
  almostXYears: {
    one: 'quasi un anno',
    other: 'quasi {{count}} anni'
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
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'tra ' + result;
    } else {
      return result + ' fa';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2l0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaXQtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21lbm8gZGkgdW4gc2Vjb25kbycsXG4gICAgb3RoZXI6ICdtZW5vIGRpIHt7Y291bnR9fSBzZWNvbmRpJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJ3VuIHNlY29uZG8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZGknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnYWxjdW5pIHNlY29uZGknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWVubyBkaSB1biBtaW51dG8nLFxuICAgIG90aGVyOiAnbWVubyBkaSB7e2NvdW50fX0gbWludXRpJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ3VuIG1pbnV0bycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRpJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJjaXJjYSB1bidvcmFcIixcbiAgICBvdGhlcjogJ2NpcmNhIHt7Y291bnR9fSBvcmUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCJ1bidvcmFcIixcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBvcmUnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAndW4gZ2lvcm5vJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBnaW9ybmknXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnY2lyY2EgdW5hIHNldHRpbWFuYScsXG4gICAgb3RoZXI6ICdjaXJjYSB7e2NvdW50fX0gc2V0dGltYW5lJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd1bmEgc2V0dGltYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZXR0aW1hbmUnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2NpcmNhIHVuIG1lc2UnLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IG1lc2knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICd1biBtZXNlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNpJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2NpcmNhIHVuIGFubm8nLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IGFubmknXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ3VuIGFubm8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGFubmknXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdwacO5IGRpIHVuIGFubm8nLFxuICAgIG90aGVyOiAncGnDuSBkaSB7e2NvdW50fX0gYW5uaSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncXVhc2kgdW4gYW5ubycsXG4gICAgb3RoZXI6ICdxdWFzaSB7e2NvdW50fX0gYW5uaSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICd0cmEgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgZmEnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9