(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uz-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/uz/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/uz/_lib/formatDistance/index.js ***!
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
    one: 'sekunddan kam',
    other: '{{count}} sekunddan kam'
  },
  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekund'
  },
  halfAMinute: 'yarim minut',
  lessThanXMinutes: {
    one: 'bir minutdan kam',
    other: '{{count}} minutdan kam'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minut'
  },
  aboutXHours: {
    one: 'tahminan 1 soat',
    other: 'tahminan {{count}} soat'
  },
  xHours: {
    one: '1 soat',
    other: '{{count}} soat'
  },
  xDays: {
    one: '1 kun',
    other: '{{count}} kun'
  },
  aboutXWeeks: {
    one: 'tahminan 1 hafta',
    other: 'tahminan {{count}} hafta'
  },
  xWeeks: {
    one: '1 hafta',
    other: '{{count}} hafta'
  },
  aboutXMonths: {
    one: 'tahminan 1 oy',
    other: 'tahminan {{count}} oy'
  },
  xMonths: {
    one: '1 oy',
    other: '{{count}} oy'
  },
  aboutXYears: {
    one: 'tahminan 1 yil',
    other: 'tahminan {{count}} yil'
  },
  xYears: {
    one: '1 yil',
    other: '{{count}} yil'
  },
  overXYears: {
    one: "1 yildan ko'p",
    other: "{{count}} yildan ko'p"
  },
  almostXYears: {
    one: 'deyarli 1 yil',
    other: 'deyarli {{count}} yil'
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
      return result + ' dan keyin';
    } else {
      return result + ' oldin';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3V6L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdXotX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ3Nla3VuZGRhbiBrYW0nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZGRhbiBrYW0nXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWt1bmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICd5YXJpbSBtaW51dCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdiaXIgbWludXRkYW4ga2FtJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGRhbiBrYW0nXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXQnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAndGFobWluYW4gMSBzb2F0JyxcbiAgICBvdGhlcjogJ3RhaG1pbmFuIHt7Y291bnR9fSBzb2F0J1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIHNvYXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNvYXQnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBrdW4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGt1bidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICd0YWhtaW5hbiAxIGhhZnRhJyxcbiAgICBvdGhlcjogJ3RhaG1pbmFuIHt7Y291bnR9fSBoYWZ0YSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBoYWZ0YScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaGFmdGEnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ3RhaG1pbmFuIDEgb3knLFxuICAgIG90aGVyOiAndGFobWluYW4ge3tjb3VudH19IG95J1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBveScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gb3knXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAndGFobWluYW4gMSB5aWwnLFxuICAgIG90aGVyOiAndGFobWluYW4ge3tjb3VudH19IHlpbCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5aWwnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHlpbCdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCIxIHlpbGRhbiBrbydwXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHlpbGRhbiBrbydwXCJcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnZGV5YXJsaSAxIHlpbCcsXG4gICAgb3RoZXI6ICdkZXlhcmxpIHt7Y291bnR9fSB5aWwnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGRhbiBrZXlpbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIG9sZGluJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==