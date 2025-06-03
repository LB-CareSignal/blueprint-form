(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-gu-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/gu/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/gu/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'હમણાં',
    // CLDR #1461
    other: '​આશરે {{count}} સેકંડ'
  },
  xSeconds: {
    one: '1 સેકંડ',
    other: '{{count}} સેકંડ'
  },
  halfAMinute: 'અડધી મિનિટ',
  lessThanXMinutes: {
    one: 'આ મિનિટ',
    // CLDR #1448
    other: '​આશરે {{count}} મિનિટ'
  },
  xMinutes: {
    one: '1 મિનિટ',
    other: '{{count}} મિનિટ'
  },
  aboutXHours: {
    one: '​આશરે 1 કલાક',
    other: '​આશરે {{count}} કલાક'
  },
  xHours: {
    one: '1 કલાક',
    other: '{{count}} કલાક'
  },
  xDays: {
    one: '1 દિવસ',
    other: '{{count}} દિવસ'
  },
  aboutXWeeks: {
    one: 'આશરે 1 અઠવાડિયું',
    other: 'આશરે {{count}} અઠવાડિયા'
  },
  xWeeks: {
    one: '1 અઠવાડિયું',
    other: '{{count}} અઠવાડિયા'
  },
  aboutXMonths: {
    one: 'આશરે 1 મહિનો',
    other: 'આશરે {{count}} મહિના'
  },
  xMonths: {
    one: '1 મહિનો',
    other: '{{count}} મહિના'
  },
  aboutXYears: {
    one: 'આશરે 1 વર્ષ',
    other: 'આશરે {{count}} વર્ષ'
  },
  xYears: {
    one: '1 વર્ષ',
    other: '{{count}} વર્ષ'
  },
  overXYears: {
    one: '1 વર્ષથી વધુ',
    other: '{{count}} વર્ષથી વધુ'
  },
  almostXYears: {
    one: 'લગભગ 1 વર્ષ',
    other: 'લગભગ {{count}} વર્ષ'
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
      return result + 'માં';
    } else {
      return result + ' પહેલાં';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2d1L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWd1LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vLyBTb3VyY2U6IGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvZ3UuaHRtbFxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn4Kq54Kqu4Kqj4Kq+4KqCJyxcbiAgICAvLyBDTERSICMxNDYxXG4gICAgb3RoZXI6ICfigIvgqobgqrbgqrDgq4cge3tjb3VudH19IOCquOCrh+CqleCqguCqoSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIOCquOCrh+CqleCqguCqoScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4Kq44KuH4KqV4KqC4KqhJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ+CqheCqoeCqp+CrgCDgqq7gqr/gqqjgqr/gqp8nLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn4KqGIOCqruCqv+CqqOCqv+CqnycsXG4gICAgLy8gQ0xEUiAjMTQ0OFxuICAgIG90aGVyOiAn4oCL4KqG4Kq24Kqw4KuHIHt7Y291bnR9fSDgqq7gqr/gqqjgqr/gqp8nXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDgqq7gqr/gqqjgqr/gqp8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IOCqruCqv+CqqOCqv+CqnydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfigIvgqobgqrbgqrDgq4cgMSDgqpXgqrLgqr7gqpUnLFxuICAgIG90aGVyOiAn4oCL4KqG4Kq24Kqw4KuHIHt7Y291bnR9fSDgqpXgqrLgqr7gqpUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEg4KqV4Kqy4Kq+4KqVJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqpXgqrLgqr7gqpUnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDgqqbgqr/gqrXgqrgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOCqpuCqv+CqteCquCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfgqobgqrbgqrDgq4cgMSDgqoXgqqDgqrXgqr7gqqHgqr/gqq/gq4HgqoInLFxuICAgIG90aGVyOiAn4KqG4Kq24Kqw4KuHIHt7Y291bnR9fSDgqoXgqqDgqrXgqr7gqqHgqr/gqq/gqr4nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEg4KqF4Kqg4Kq14Kq+4Kqh4Kq/4Kqv4KuB4KqCJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqoXgqqDgqrXgqr7gqqHgqr/gqq/gqr4nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ+CqhuCqtuCqsOCrhyAxIOCqruCqueCqv+CqqOCriycsXG4gICAgb3RoZXI6ICfgqobgqrbgqrDgq4cge3tjb3VudH19IOCqruCqueCqv+CqqOCqvidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg4Kqu4Kq54Kq/4Kqo4KuLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqq7gqrngqr/gqqjgqr4nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn4KqG4Kq24Kqw4KuHIDEg4Kq14Kqw4KuN4Kq3JyxcbiAgICBvdGhlcjogJ+CqhuCqtuCqsOCrhyB7e2NvdW50fX0g4Kq14Kqw4KuN4Kq3J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIOCqteCqsOCrjeCqtycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4Kq14Kqw4KuN4Kq3J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnMSDgqrXgqrDgq43gqrfgqqXgq4Ag4Kq14Kqn4KuBJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDgqrXgqrDgq43gqrfgqqXgq4Ag4Kq14Kqn4KuBJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfgqrLgqpfgqq3gqpcgMSDgqrXgqrDgq43gqrcnLFxuICAgIG90aGVyOiAn4Kqy4KqX4Kqt4KqXIHt7Y291bnR9fSDgqrXgqrDgq43gqrcnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn4Kqu4Kq+4KqCJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg4Kqq4Kq54KuH4Kqy4Kq+4KqCJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==