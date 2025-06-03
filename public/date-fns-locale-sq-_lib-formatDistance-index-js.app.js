(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sq-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sq/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sq/_lib/formatDistance/index.js ***!
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
    one: 'më pak se një sekondë',
    other: 'më pak se {{count}} sekonda'
  },
  xSeconds: {
    one: '1 sekondë',
    other: '{{count}} sekonda'
  },
  halfAMinute: 'gjysëm minuti',
  lessThanXMinutes: {
    one: 'më pak se një minute',
    other: 'më pak se {{count}} minuta'
  },
  xMinutes: {
    one: '1 minutë',
    other: '{{count}} minuta'
  },
  aboutXHours: {
    one: 'rreth 1 orë',
    other: 'rreth {{count}} orë'
  },
  xHours: {
    one: '1 orë',
    other: '{{count}} orë'
  },
  xDays: {
    one: '1 ditë',
    other: '{{count}} ditë'
  },
  aboutXWeeks: {
    one: 'rreth 1 javë',
    other: 'rreth {{count}} javë'
  },
  xWeeks: {
    one: '1 javë',
    other: '{{count}} javë'
  },
  aboutXMonths: {
    one: 'rreth 1 muaj',
    other: 'rreth {{count}} muaj'
  },
  xMonths: {
    one: '1 muaj',
    other: '{{count}} muaj'
  },
  aboutXYears: {
    one: 'rreth 1 vit',
    other: 'rreth {{count}} vite'
  },
  xYears: {
    one: '1 vit',
    other: '{{count}} vite'
  },
  overXYears: {
    one: 'mbi 1 vit',
    other: 'mbi {{count}} vite'
  },
  almostXYears: {
    one: 'pothuajse 1 vit',
    other: 'pothuajse {{count}} vite'
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
      return 'në ' + result;
    } else {
      return result + ' më parë';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NxL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc3EtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ23DqyBwYWsgc2UgbmrDqyBzZWtvbmTDqycsXG4gICAgb3RoZXI6ICdtw6sgcGFrIHNlIHt7Y291bnR9fSBzZWtvbmRhJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vrb25kw6snLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla29uZGEnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnZ2p5c8OrbSBtaW51dGknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbcOrIHBhayBzZSBuasOrIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdtw6sgcGFrIHNlIHt7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dMOrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAncnJldGggMSBvcsOrJyxcbiAgICBvdGhlcjogJ3JyZXRoIHt7Y291bnR9fSBvcsOrJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIG9yw6snLFxuICAgIG90aGVyOiAne3tjb3VudH19IG9yw6snXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkaXTDqycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGl0w6snXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAncnJldGggMSBqYXbDqycsXG4gICAgb3RoZXI6ICdycmV0aCB7e2NvdW50fX0gamF2w6snXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgamF2w6snLFxuICAgIG90aGVyOiAne3tjb3VudH19IGphdsOrJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdycmV0aCAxIG11YWonLFxuICAgIG90aGVyOiAncnJldGgge3tjb3VudH19IG11YWonXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG11YWonLFxuICAgIG90aGVyOiAne3tjb3VudH19IG11YWonXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAncnJldGggMSB2aXQnLFxuICAgIG90aGVyOiAncnJldGgge3tjb3VudH19IHZpdGUnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgdml0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2aXRlJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnbWJpIDEgdml0JyxcbiAgICBvdGhlcjogJ21iaSB7e2NvdW50fX0gdml0ZSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncG90aHVhanNlIDEgdml0JyxcbiAgICBvdGhlcjogJ3BvdGh1YWpzZSB7e2NvdW50fX0gdml0ZSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICduw6sgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgbcOrIHBhcsOrJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==