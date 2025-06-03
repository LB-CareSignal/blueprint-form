(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-da-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/da/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/da/_lib/formatDistance/index.js ***!
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
    one: 'mindre end ét sekund',
    other: 'mindre end {{count}} sekunder'
  },
  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekunder'
  },
  halfAMinute: 'ét halvt minut',
  lessThanXMinutes: {
    one: 'mindre end ét minut',
    other: 'mindre end {{count}} minutter'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minutter'
  },
  aboutXHours: {
    one: 'cirka 1 time',
    other: 'cirka {{count}} timer'
  },
  xHours: {
    one: '1 time',
    other: '{{count}} timer'
  },
  xDays: {
    one: '1 dag',
    other: '{{count}} dage'
  },
  aboutXWeeks: {
    one: 'cirka 1 uge',
    other: 'cirka {{count}} uger'
  },
  xWeeks: {
    one: '1 uge',
    other: '{{count}} uger'
  },
  aboutXMonths: {
    one: 'cirka 1 måned',
    other: 'cirka {{count}} måneder'
  },
  xMonths: {
    one: '1 måned',
    other: '{{count}} måneder'
  },
  aboutXYears: {
    one: 'cirka 1 år',
    other: 'cirka {{count}} år'
  },
  xYears: {
    one: '1 år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'over 1 år',
    other: 'over {{count}} år'
  },
  almostXYears: {
    one: 'næsten 1 år',
    other: 'næsten {{count}} år'
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
      return 'om ' + result;
    } else {
      return result + ' siden';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2RhL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZGEtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21pbmRyZSBlbmQgw6l0IHNla3VuZCcsXG4gICAgb3RoZXI6ICdtaW5kcmUgZW5kIHt7Y291bnR9fSBzZWt1bmRlcidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNla3VuZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kZXInXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnw6l0IGhhbHZ0IG1pbnV0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ21pbmRyZSBlbmQgw6l0IG1pbnV0JyxcbiAgICBvdGhlcjogJ21pbmRyZSBlbmQge3tjb3VudH19IG1pbnV0dGVyJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0dGVyJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2NpcmthIDEgdGltZScsXG4gICAgb3RoZXI6ICdjaXJrYSB7e2NvdW50fX0gdGltZXInXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgdGltZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGltZXInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYWcnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhZ2UnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnY2lya2EgMSB1Z2UnLFxuICAgIG90aGVyOiAnY2lya2Ege3tjb3VudH19IHVnZXInXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgdWdlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1Z2VyJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdjaXJrYSAxIG3DpW5lZCcsXG4gICAgb3RoZXI6ICdjaXJrYSB7e2NvdW50fX0gbcOlbmVkZXInXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG3DpW5lZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbcOlbmVkZXInXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnY2lya2EgMSDDpXInLFxuICAgIG90aGVyOiAnY2lya2Ege3tjb3VudH19IMOlcidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDDpXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IMOlcidcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSDDpXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0gw6VyJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICduw6ZzdGVuIDEgw6VyJyxcbiAgICBvdGhlcjogJ27DpnN0ZW4ge3tjb3VudH19IMOlcidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdvbSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzaWRlbic7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=