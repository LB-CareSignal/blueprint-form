(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-nb-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/nb/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/nb/_lib/formatDistance/index.js ***!
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
    one: 'mindre enn ett sekund',
    other: 'mindre enn {{count}} sekunder'
  },
  xSeconds: {
    one: 'ett sekund',
    other: '{{count}} sekunder'
  },
  halfAMinute: 'et halvt minutt',
  lessThanXMinutes: {
    one: 'mindre enn ett minutt',
    other: 'mindre enn {{count}} minutter'
  },
  xMinutes: {
    one: 'ett minutt',
    other: '{{count}} minutter'
  },
  aboutXHours: {
    one: 'omtrent en time',
    other: 'omtrent {{count}} timer'
  },
  xHours: {
    one: 'en time',
    other: '{{count}} timer'
  },
  xDays: {
    one: 'en dag',
    other: '{{count}} dager'
  },
  aboutXWeeks: {
    one: 'omtrent en uke',
    other: 'omtrent {{count}} uker'
  },
  xWeeks: {
    one: 'en uke',
    other: '{{count}} uker'
  },
  aboutXMonths: {
    one: 'omtrent en måned',
    other: 'omtrent {{count}} måneder'
  },
  xMonths: {
    one: 'en måned',
    other: '{{count}} måneder'
  },
  aboutXYears: {
    one: 'omtrent ett år',
    other: 'omtrent {{count}} år'
  },
  xYears: {
    one: 'ett år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'over ett år',
    other: 'over {{count}} år'
  },
  almostXYears: {
    one: 'nesten ett år',
    other: 'nesten {{count}} år'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL25iL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbmItX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21pbmRyZSBlbm4gZXR0IHNla3VuZCcsXG4gICAgb3RoZXI6ICdtaW5kcmUgZW5uIHt7Y291bnR9fSBzZWt1bmRlcidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICdldHQgc2VrdW5kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmRlcidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdldCBoYWx2dCBtaW51dHQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWluZHJlIGVubiBldHQgbWludXR0JyxcbiAgICBvdGhlcjogJ21pbmRyZSBlbm4ge3tjb3VudH19IG1pbnV0dGVyJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ2V0dCBtaW51dHQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0dGVyJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ29tdHJlbnQgZW4gdGltZScsXG4gICAgb3RoZXI6ICdvbXRyZW50IHt7Y291bnR9fSB0aW1lcidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnZW4gdGltZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGltZXInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnZW4gZGFnJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYWdlcidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdvbXRyZW50IGVuIHVrZScsXG4gICAgb3RoZXI6ICdvbXRyZW50IHt7Y291bnR9fSB1a2VyJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICdlbiB1a2UnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHVrZXInXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ29tdHJlbnQgZW4gbcOlbmVkJyxcbiAgICBvdGhlcjogJ29tdHJlbnQge3tjb3VudH19IG3DpW5lZGVyJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnZW4gbcOlbmVkJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtw6VuZWRlcidcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdvbXRyZW50IGV0dCDDpXInLFxuICAgIG90aGVyOiAnb210cmVudCB7e2NvdW50fX0gw6VyJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICdldHQgw6VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDDpXInXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIGV0dCDDpXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0gw6VyJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICduZXN0ZW4gZXR0IMOlcicsXG4gICAgb3RoZXI6ICduZXN0ZW4ge3tjb3VudH19IMOlcidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdvbSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzaWRlbic7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=