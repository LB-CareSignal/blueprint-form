(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-nl-BE-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/nl-BE/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/nl-BE/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'minder dan een seconde',
    other: 'minder dan {{count}} seconden'
  },
  xSeconds: {
    one: '1 seconde',
    other: '{{count}} seconden'
  },
  halfAMinute: 'een halve minuut',
  lessThanXMinutes: {
    one: 'minder dan een minuut',
    other: 'minder dan {{count}} minuten'
  },
  xMinutes: {
    one: 'een minuut',
    other: '{{count}} minuten'
  },
  aboutXHours: {
    one: 'ongeveer 1 uur',
    other: 'ongeveer {{count}} uur'
  },
  xHours: {
    one: '1 uur',
    other: '{{count}} uur'
  },
  xDays: {
    one: '1 dag',
    other: '{{count}} dagen'
  },
  aboutXWeeks: {
    one: 'ongeveer 1 week',
    other: 'ongeveer {{count}} weken'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weken'
  },
  aboutXMonths: {
    one: 'ongeveer 1 maand',
    other: 'ongeveer {{count}} maanden'
  },
  xMonths: {
    one: '1 maand',
    other: '{{count}} maanden'
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
    one: 'meer dan 1 jaar',
    other: 'meer dan {{count}} jaar'
  },
  almostXYears: {
    one: 'bijna 1 jaar',
    other: 'bijna {{count}} jaar'
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
      return 'over ' + result;
    } else {
      return result + ' geleden';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL25sLUJFL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbmwtQkUtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21pbmRlciBkYW4gZWVuIHNlY29uZGUnLFxuICAgIG90aGVyOiAnbWluZGVyIGRhbiB7e2NvdW50fX0gc2Vjb25kZW4nXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRlbidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdlZW4gaGFsdmUgbWludXV0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ21pbmRlciBkYW4gZWVuIG1pbnV1dCcsXG4gICAgb3RoZXI6ICdtaW5kZXIgZGFuIHt7Y291bnR9fSBtaW51dGVuJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ2VlbiBtaW51dXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZW4nXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnb25nZXZlZXIgMSB1dXInLFxuICAgIG90aGVyOiAnb25nZXZlZXIge3tjb3VudH19IHV1cidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSB1dXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHV1cidcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRhZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGFnZW4nXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnb25nZXZlZXIgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ29uZ2V2ZWVyIHt7Y291bnR9fSB3ZWtlbidcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWtlbidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnb25nZXZlZXIgMSBtYWFuZCcsXG4gICAgb3RoZXI6ICdvbmdldmVlciB7e2NvdW50fX0gbWFhbmRlbidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbWFhbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1hYW5kZW4nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnb25nZXZlZXIgMSBqYWFyJyxcbiAgICBvdGhlcjogJ29uZ2V2ZWVyIHt7Y291bnR9fSBqYWFyJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGphYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGphYXInXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdtZWVyIGRhbiAxIGphYXInLFxuICAgIG90aGVyOiAnbWVlciBkYW4ge3tjb3VudH19IGphYXInXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2Jpam5hIDEgamFhcicsXG4gICAgb3RoZXI6ICdiaWpuYSB7e2NvdW50fX0gamFhcidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdvdmVyICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGdlbGVkZW4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9