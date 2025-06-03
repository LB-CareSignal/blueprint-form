(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fa-IR-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/fa-IR/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/fa-IR/_lib/formatDistance/index.js ***!
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
    one: 'کمتر از یک ثانیه',
    other: 'کمتر از {{count}} ثانیه'
  },
  xSeconds: {
    one: '1 ثانیه',
    other: '{{count}} ثانیه'
  },
  halfAMinute: 'نیم دقیقه',
  lessThanXMinutes: {
    one: 'کمتر از یک دقیقه',
    other: 'کمتر از {{count}} دقیقه'
  },
  xMinutes: {
    one: '1 دقیقه',
    other: '{{count}} دقیقه'
  },
  aboutXHours: {
    one: 'حدود 1 ساعت',
    other: 'حدود {{count}} ساعت'
  },
  xHours: {
    one: '1 ساعت',
    other: '{{count}} ساعت'
  },
  xDays: {
    one: '1 روز',
    other: '{{count}} روز'
  },
  aboutXWeeks: {
    one: 'حدود 1 هفته',
    other: 'حدود {{count}} هفته'
  },
  xWeeks: {
    one: '1 هفته',
    other: '{{count}} هفته'
  },
  aboutXMonths: {
    one: 'حدود 1 ماه',
    other: 'حدود {{count}} ماه'
  },
  xMonths: {
    one: '1 ماه',
    other: '{{count}} ماه'
  },
  aboutXYears: {
    one: 'حدود 1 سال',
    other: 'حدود {{count}} سال'
  },
  xYears: {
    one: '1 سال',
    other: '{{count}} سال'
  },
  overXYears: {
    one: 'بیشتر از 1 سال',
    other: 'بیشتر از {{count}} سال'
  },
  almostXYears: {
    one: 'نزدیک 1 سال',
    other: 'نزدیک {{count}} سال'
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
      return 'در ' + result;
    } else {
      return result + ' قبل';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZhLUlSL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZmEtSVItX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9qp2YXYqtixINin2LIg24zaqSDYq9in2YbbjNmHJyxcbiAgICBvdGhlcjogJ9qp2YXYqtixINin2LIge3tjb3VudH19INir2KfZhtuM2YcnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDYq9in2YbbjNmHJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYq9in2YbbjNmHJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ9mG24zZhSDYr9mC24zZgtmHJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ9qp2YXYqtixINin2LIg24zaqSDYr9mC24zZgtmHJyxcbiAgICBvdGhlcjogJ9qp2YXYqtixINin2LIge3tjb3VudH19INiv2YLbjNmC2YcnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDYr9mC24zZgtmHJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYr9mC24zZgtmHJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9it2K/ZiNivIDEg2LPYp9i52KonLFxuICAgIG90aGVyOiAn2K3Yr9mI2K8ge3tjb3VudH19INiz2KfYudiqJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxINiz2KfYudiqJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYs9in2LnYqidcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxINix2YjYsicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LHZiNiyJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9it2K/ZiNivIDEg2YfZgdiq2YcnLFxuICAgIG90aGVyOiAn2K3Yr9mI2K8ge3tjb3VudH19INmH2YHYqtmHJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxINmH2YHYqtmHJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDZh9mB2KrZhydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn2K3Yr9mI2K8gMSDZhdin2YcnLFxuICAgIG90aGVyOiAn2K3Yr9mI2K8ge3tjb3VudH19INmF2KfZhydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg2YXYp9mHJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDZhdin2YcnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn2K3Yr9mI2K8gMSDYs9in2YQnLFxuICAgIG90aGVyOiAn2K3Yr9mI2K8ge3tjb3VudH19INiz2KfZhCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDYs9in2YQnLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2KfZhCdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ9io24zYtNiq2LEg2KfYsiAxINiz2KfZhCcsXG4gICAgb3RoZXI6ICfYqNuM2LTYqtixINin2LIge3tjb3VudH19INiz2KfZhCdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn2YbYstiv24zaqSAxINiz2KfZhCcsXG4gICAgb3RoZXI6ICfZhtiy2K/bjNqpIHt7Y291bnR9fSDYs9in2YQnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn2K/YsSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyDZgtio2YQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9