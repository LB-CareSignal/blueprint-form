(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-eu-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/eu/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/eu/_lib/formatDistance/index.js ***!
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
    one: 'segundo bat baino gutxiago',
    other: '{{count}} segundo baino gutxiago'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundo'
  },
  halfAMinute: 'minutu erdi',
  lessThanXMinutes: {
    one: 'minutu bat baino gutxiago',
    other: '{{count}} minutu baino gutxiago'
  },
  xMinutes: {
    one: '1 minutu',
    other: '{{count}} minutu'
  },
  aboutXHours: {
    one: '1 ordu gutxi gorabehera',
    other: '{{count}} ordu gutxi gorabehera'
  },
  xHours: {
    one: '1 ordu',
    other: '{{count}} ordu'
  },
  xDays: {
    one: '1 egun',
    other: '{{count}} egun'
  },
  aboutXWeeks: {
    one: 'aste 1 inguru',
    other: '{{count}} aste inguru'
  },
  xWeeks: {
    one: '1 aste',
    other: '{{count}} astean'
  },
  aboutXMonths: {
    one: '1 hilabete gutxi gorabehera',
    other: '{{count}} hilabete gutxi gorabehera'
  },
  xMonths: {
    one: '1 hilabete',
    other: '{{count}} hilabete'
  },
  aboutXYears: {
    one: '1 urte gutxi gorabehera',
    other: '{{count}} urte gutxi gorabehera'
  },
  xYears: {
    one: '1 urte',
    other: '{{count}} urte'
  },
  overXYears: {
    one: '1 urte baino gehiago',
    other: '{{count}} urte baino gehiago'
  },
  almostXYears: {
    one: 'ia 1 urte',
    other: 'ia {{count}} urte'
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
      return 'en ' + result;
    } else {
      return 'duela ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2V1L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWV1LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdzZWd1bmRvIGJhdCBiYWlubyBndXR4aWFnbycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VndW5kbyBiYWlubyBndXR4aWFnbydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlZ3VuZG8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlZ3VuZG8nXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnbWludXR1IGVyZGknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWludXR1IGJhdCBiYWlubyBndXR4aWFnbycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXR1IGJhaW5vIGd1dHhpYWdvJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXR1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dHUnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnMSBvcmR1IGd1dHhpIGdvcmFiZWhlcmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG9yZHUgZ3V0eGkgZ29yYWJlaGVyYSdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBvcmR1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBvcmR1J1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZWd1bicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZWd1bidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhc3RlIDEgaW5ndXJ1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhc3RlIGluZ3VydSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBhc3RlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhc3RlYW4nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJzEgaGlsYWJldGUgZ3V0eGkgZ29yYWJlaGVyYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaGlsYWJldGUgZ3V0eGkgZ29yYWJlaGVyYSdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgaGlsYWJldGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhpbGFiZXRlJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJzEgdXJ0ZSBndXR4aSBnb3JhYmVoZXJhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1cnRlIGd1dHhpIGdvcmFiZWhlcmEnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgdXJ0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdXJ0ZSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJzEgdXJ0ZSBiYWlubyBnZWhpYWdvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1cnRlIGJhaW5vIGdlaGlhZ28nXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2lhIDEgdXJ0ZScsXG4gICAgb3RoZXI6ICdpYSB7e2NvdW50fX0gdXJ0ZSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdlbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2R1ZWxhICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=