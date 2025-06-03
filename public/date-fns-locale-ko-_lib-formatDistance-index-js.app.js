(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ko-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ko/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ko/_lib/formatDistance/index.js ***!
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
    one: '1초 미만',
    other: '{{count}}초 미만'
  },
  xSeconds: {
    one: '1초',
    other: '{{count}}초'
  },
  halfAMinute: '30초',
  lessThanXMinutes: {
    one: '1분 미만',
    other: '{{count}}분 미만'
  },
  xMinutes: {
    one: '1분',
    other: '{{count}}분'
  },
  aboutXHours: {
    one: '약 1시간',
    other: '약 {{count}}시간'
  },
  xHours: {
    one: '1시간',
    other: '{{count}}시간'
  },
  xDays: {
    one: '1일',
    other: '{{count}}일'
  },
  aboutXWeeks: {
    one: '약 1주',
    other: '약 {{count}}주'
  },
  xWeeks: {
    one: '1주',
    other: '{{count}}주'
  },
  aboutXMonths: {
    one: '약 1개월',
    other: '약 {{count}}개월'
  },
  xMonths: {
    one: '1개월',
    other: '{{count}}개월'
  },
  aboutXYears: {
    one: '약 1년',
    other: '약 {{count}}년'
  },
  xYears: {
    one: '1년',
    other: '{{count}}년'
  },
  overXYears: {
    one: '1년 이상',
    other: '{{count}}년 이상'
  },
  almostXYears: {
    one: '거의 1년',
    other: '거의 {{count}}년'
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
      return result + ' 후';
    } else {
      return result + ' 전';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2tvL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta28tX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJzHstIgg66+466eMJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fey0iCDrr7jrp4wnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMey0iCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3stIgnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnMzDstIgnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnMeu2hCDrr7jrp4wnLFxuICAgIG90aGVyOiAne3tjb3VudH1967aEIOuvuOunjCdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcx67aEJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feu2hCdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfslb0gMeyLnOqwhCcsXG4gICAgb3RoZXI6ICfslb0ge3tjb3VudH197Iuc6rCEJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcx7Iuc6rCEJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feyLnOqwhCdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcx7J28JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feydvCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfslb0gMeyjvCcsXG4gICAgb3RoZXI6ICfslb0ge3tjb3VudH197KO8J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcx7KO8JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feyjvCdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn7JW9IDHqsJzsm5QnLFxuICAgIG90aGVyOiAn7JW9IHt7Y291bnR9feqwnOyblCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzHqsJzsm5QnLFxuICAgIG90aGVyOiAne3tjb3VudH196rCc7JuUJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ+yVvSAx64WEJyxcbiAgICBvdGhlcjogJ+yVvSB7e2NvdW50fX3rhYQnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzHrhYQnLFxuICAgIG90aGVyOiAne3tjb3VudH1964WEJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnMeuFhCDsnbTsg4EnLFxuICAgIG90aGVyOiAne3tjb3VudH1964WEIOydtOyDgSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn6rGw7J2YIDHrhYQnLFxuICAgIG90aGVyOiAn6rGw7J2YIHt7Y291bnR9feuFhCdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg7ZuEJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg7KCEJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==