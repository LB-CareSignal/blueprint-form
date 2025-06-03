(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gd-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/gd/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gd/_lib/formatDistance/index.js ***!
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
    one: 'nas lugha na diog',
    other: 'nas lugha na {{count}} diogan'
  },
  xSeconds: {
    one: '1 diog',
    two: '2 dhiog',
    twenty: '20 diog',
    other: '{{count}} diogan'
  },
  halfAMinute: 'leth mhionaid',
  lessThanXMinutes: {
    one: 'nas lugha na mionaid',
    other: 'nas lugha na {{count}} mionaidean'
  },
  xMinutes: {
    one: '1 mionaid',
    two: '2 mhionaid',
    twenty: '20 mionaid',
    other: '{{count}} mionaidean'
  },
  aboutXHours: {
    one: 'mu uair de thìde',
    other: 'mu {{count}} uairean de thìde'
  },
  xHours: {
    one: '1 uair de thìde',
    two: '2 uair de thìde',
    twenty: '20 uair de thìde',
    other: '{{count}} uairean de thìde'
  },
  xDays: {
    one: '1 là',
    other: '{{count}} là'
  },
  aboutXWeeks: {
    one: 'mu 1 seachdain',
    other: 'mu {{count}} seachdainean'
  },
  xWeeks: {
    one: '1 seachdain',
    other: '{{count}} seachdainean'
  },
  aboutXMonths: {
    one: 'mu mhìos',
    other: 'mu {{count}} mìosan'
  },
  xMonths: {
    one: '1 mìos',
    other: '{{count}} mìosan'
  },
  aboutXYears: {
    one: 'mu bhliadhna',
    other: 'mu {{count}} bliadhnaichean'
  },
  xYears: {
    one: '1 bhliadhna',
    other: '{{count}} bliadhna'
  },
  overXYears: {
    one: 'còrr is bliadhna',
    other: 'còrr is {{count}} bliadhnaichean'
  },
  almostXYears: {
    one: 'cha mhòr bliadhna',
    other: 'cha mhòr {{count}} bliadhnaichean'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && !!tokenValue.two) {
    result = tokenValue.two;
  } else if (count === 20 && !!tokenValue.twenty) {
    result = tokenValue.twenty;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'ann an ' + result;
    } else {
      return 'o chionn ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2dkL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZ2QtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ25hcyBsdWdoYSBuYSBkaW9nJyxcbiAgICBvdGhlcjogJ25hcyBsdWdoYSBuYSB7e2NvdW50fX0gZGlvZ2FuJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgZGlvZycsXG4gICAgdHdvOiAnMiBkaGlvZycsXG4gICAgdHdlbnR5OiAnMjAgZGlvZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGlvZ2FuJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2xldGggbWhpb25haWQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbmFzIGx1Z2hhIG5hIG1pb25haWQnLFxuICAgIG90aGVyOiAnbmFzIGx1Z2hhIG5hIHt7Y291bnR9fSBtaW9uYWlkZWFuJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWlvbmFpZCcsXG4gICAgdHdvOiAnMiBtaGlvbmFpZCcsXG4gICAgdHdlbnR5OiAnMjAgbWlvbmFpZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWlvbmFpZGVhbidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdtdSB1YWlyIGRlIHRow6xkZScsXG4gICAgb3RoZXI6ICdtdSB7e2NvdW50fX0gdWFpcmVhbiBkZSB0aMOsZGUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgdWFpciBkZSB0aMOsZGUnLFxuICAgIHR3bzogJzIgdWFpciBkZSB0aMOsZGUnLFxuICAgIHR3ZW50eTogJzIwIHVhaXIgZGUgdGjDrGRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB1YWlyZWFuIGRlIHRow6xkZSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGzDoCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbMOgJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ211IDEgc2VhY2hkYWluJyxcbiAgICBvdGhlcjogJ211IHt7Y291bnR9fSBzZWFjaGRhaW5lYW4nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgc2VhY2hkYWluJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWFjaGRhaW5lYW4nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ211IG1ow6xvcycsXG4gICAgb3RoZXI6ICdtdSB7e2NvdW50fX0gbcOsb3NhbidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbcOsb3MnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG3DrG9zYW4nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnbXUgYmhsaWFkaG5hJyxcbiAgICBvdGhlcjogJ211IHt7Y291bnR9fSBibGlhZGhuYWljaGVhbidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBiaGxpYWRobmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGJsaWFkaG5hJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnY8OycnIgaXMgYmxpYWRobmEnLFxuICAgIG90aGVyOiAnY8OycnIgaXMge3tjb3VudH19IGJsaWFkaG5haWNoZWFuJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdjaGEgbWjDsnIgYmxpYWRobmEnLFxuICAgIG90aGVyOiAnY2hhIG1ow7JyIHt7Y291bnR9fSBibGlhZGhuYWljaGVhbidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMiAmJiAhIXRva2VuVmFsdWUudHdvKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS50d287XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIwICYmICEhdG9rZW5WYWx1ZS50d2VudHkpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLnR3ZW50eTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdhbm4gYW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdvIGNoaW9ubiAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9