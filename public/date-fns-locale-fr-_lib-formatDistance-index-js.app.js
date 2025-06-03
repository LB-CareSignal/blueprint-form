(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fr-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/fr/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fr/_lib/formatDistance/index.js ***!
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
    one: 'moins d’une seconde',
    other: 'moins de {{count}} secondes'
  },
  xSeconds: {
    one: '1 seconde',
    other: '{{count}} secondes'
  },
  halfAMinute: '30 secondes',
  lessThanXMinutes: {
    one: 'moins d’une minute',
    other: 'moins de {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'environ 1 heure',
    other: 'environ {{count}} heures'
  },
  xHours: {
    one: '1 heure',
    other: '{{count}} heures'
  },
  xDays: {
    one: '1 jour',
    other: '{{count}} jours'
  },
  aboutXWeeks: {
    one: 'environ 1 semaine',
    other: 'environ {{count}} semaines'
  },
  xWeeks: {
    one: '1 semaine',
    other: '{{count}} semaines'
  },
  aboutXMonths: {
    one: 'environ 1 mois',
    other: 'environ {{count}} mois'
  },
  xMonths: {
    one: '1 mois',
    other: '{{count}} mois'
  },
  aboutXYears: {
    one: 'environ 1 an',
    other: 'environ {{count}} ans'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ans'
  },
  overXYears: {
    one: 'plus d’un an',
    other: 'plus de {{count}} ans'
  },
  almostXYears: {
    one: 'presqu’un an',
    other: 'presque {{count}} ans'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var form = formatDistanceLocale[token];
  if (typeof form === 'string') {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'dans ' + result;
    } else {
      return 'il y a ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZnItX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21vaW5zIGTigJl1bmUgc2Vjb25kZScsXG4gICAgb3RoZXI6ICdtb2lucyBkZSB7e2NvdW50fX0gc2Vjb25kZXMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRlcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICczMCBzZWNvbmRlcycsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdtb2lucyBk4oCZdW5lIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdtb2lucyBkZSB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgaGV1cmUnLFxuICAgIG90aGVyOiAnZW52aXJvbiB7e2NvdW50fX0gaGV1cmVzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhldXJlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBoZXVyZXMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBqb3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBqb3VycydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgc2VtYWluZScsXG4gICAgb3RoZXI6ICdlbnZpcm9uIHt7Y291bnR9fSBzZW1haW5lcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzZW1haW5lJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZW1haW5lcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnZW52aXJvbiAxIG1vaXMnLFxuICAgIG90aGVyOiAnZW52aXJvbiB7e2NvdW50fX0gbW9pcydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9pcycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9pcydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgYW4nLFxuICAgIG90aGVyOiAnZW52aXJvbiB7e2NvdW50fX0gYW5zJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGFuJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhbnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdwbHVzIGTigJl1biBhbicsXG4gICAgb3RoZXI6ICdwbHVzIGRlIHt7Y291bnR9fSBhbnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ3ByZXNxdeKAmXVuIGFuJyxcbiAgICBvdGhlcjogJ3ByZXNxdWUge3tjb3VudH19IGFucydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgZm9ybSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm07XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSBmb3JtLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdkYW5zICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaWwgeSBhICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=