(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-af-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/af/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/af/_lib/formatDistance/index.js ***!
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
    one: "minder as 'n sekonde",
    other: 'minder as {{count}} sekondes'
  },
  xSeconds: {
    one: '1 sekonde',
    other: '{{count}} sekondes'
  },
  halfAMinute: "'n halwe minuut",
  lessThanXMinutes: {
    one: "minder as 'n minuut",
    other: 'minder as {{count}} minute'
  },
  xMinutes: {
    one: "'n minuut",
    other: '{{count}} minute'
  },
  aboutXHours: {
    one: 'ongeveer 1 uur',
    other: 'ongeveer {{count}} ure'
  },
  xHours: {
    one: '1 uur',
    other: '{{count}} ure'
  },
  xDays: {
    one: '1 dag',
    other: '{{count}} dae'
  },
  aboutXWeeks: {
    one: 'ongeveer 1 week',
    other: 'ongeveer {{count}} weke'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weke'
  },
  aboutXMonths: {
    one: 'ongeveer 1 maand',
    other: 'ongeveer {{count}} maande'
  },
  xMonths: {
    one: '1 maand',
    other: '{{count}} maande'
  },
  aboutXYears: {
    one: 'ongeveer 1 jaar',
    other: 'ongeveer {{count}} jaar'
  },
  xYears: {
    one: '1 jaar',
    other: '{{count}} jaar'
  },
  overXYears: {
    one: 'meer as 1 jaar',
    other: 'meer as {{count}} jaar'
  },
  almostXYears: {
    one: 'byna 1 jaar',
    other: 'byna {{count}} jaar'
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
      return 'oor ' + result;
    } else {
      return result + ' gelede';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FmL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYWYtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJtaW5kZXIgYXMgJ24gc2Vrb25kZVwiLFxuICAgIG90aGVyOiAnbWluZGVyIGFzIHt7Y291bnR9fSBzZWtvbmRlcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNla29uZGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla29uZGVzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogXCInbiBoYWx3ZSBtaW51dXRcIixcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJtaW5kZXIgYXMgJ24gbWludXV0XCIsXG4gICAgb3RoZXI6ICdtaW5kZXIgYXMge3tjb3VudH19IG1pbnV0ZSdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiJ24gbWludXV0XCIsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ29uZ2V2ZWVyIDEgdXVyJyxcbiAgICBvdGhlcjogJ29uZ2V2ZWVyIHt7Y291bnR9fSB1cmUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgdXVyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1cmUnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYWcnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhZSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdvbmdldmVlciAxIHdlZWsnLFxuICAgIG90aGVyOiAnb25nZXZlZXIge3tjb3VudH19IHdla2UnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2VrZSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnb25nZXZlZXIgMSBtYWFuZCcsXG4gICAgb3RoZXI6ICdvbmdldmVlciB7e2NvdW50fX0gbWFhbmRlJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtYWFuZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWFhbmRlJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ29uZ2V2ZWVyIDEgamFhcicsXG4gICAgb3RoZXI6ICdvbmdldmVlciB7e2NvdW50fX0gamFhcidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBqYWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBqYWFyJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnbWVlciBhcyAxIGphYXInLFxuICAgIG90aGVyOiAnbWVlciBhcyB7e2NvdW50fX0gamFhcidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYnluYSAxIGphYXInLFxuICAgIG90aGVyOiAnYnluYSB7e2NvdW50fX0gamFhcidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdvb3IgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgZ2VsZWRlJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==