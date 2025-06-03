(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-zh-CN-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-CN/_lib/formatDistance/index.js ***!
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
    one: '不到 1 秒',
    other: '不到 {{count}} 秒'
  },
  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },
  halfAMinute: '半分钟',
  lessThanXMinutes: {
    one: '不到 1 分钟',
    other: '不到 {{count}} 分钟'
  },
  xMinutes: {
    one: '1 分钟',
    other: '{{count}} 分钟'
  },
  xHours: {
    one: '1 小时',
    other: '{{count}} 小时'
  },
  aboutXHours: {
    one: '大约 1 小时',
    other: '大约 {{count}} 小时'
  },
  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },
  aboutXWeeks: {
    one: '大约 1 个星期',
    other: '大约 {{count}} 个星期'
  },
  xWeeks: {
    one: '1 个星期',
    other: '{{count}} 个星期'
  },
  aboutXMonths: {
    one: '大约 1 个月',
    other: '大约 {{count}} 个月'
  },
  xMonths: {
    one: '1 个月',
    other: '{{count}} 个月'
  },
  aboutXYears: {
    one: '大约 1 年',
    other: '大约 {{count}} 年'
  },
  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },
  overXYears: {
    one: '超过 1 年',
    other: '超过 {{count}} 年'
  },
  almostXYears: {
    one: '将近 1 年',
    other: '将近 {{count}} 年'
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
      return result + '内';
    } else {
      return result + '前';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3poLUNOL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtemgtQ04tX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ+S4jeWIsCAxIOenkicsXG4gICAgb3RoZXI6ICfkuI3liLAge3tjb3VudH19IOenkidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIOenkicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g56eSJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ+WNiuWIhumSnycsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfkuI3liLAgMSDliIbpkp8nLFxuICAgIG90aGVyOiAn5LiN5YiwIHt7Y291bnR9fSDliIbpkp8nXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDliIbpkp8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWIhumSnydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDlsI/ml7YnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWwj+aXtidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICflpKfnuqYgMSDlsI/ml7YnLFxuICAgIG90aGVyOiAn5aSn57qmIHt7Y291bnR9fSDlsI/ml7YnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDlpKknLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWkqSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICflpKfnuqYgMSDkuKrmmJ/mnJ8nLFxuICAgIG90aGVyOiAn5aSn57qmIHt7Y291bnR9fSDkuKrmmJ/mnJ8nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEg5Liq5pif5pyfJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDkuKrmmJ/mnJ8nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ+Wkp+e6piAxIOS4quaciCcsXG4gICAgb3RoZXI6ICflpKfnuqYge3tjb3VudH19IOS4quaciCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg5Liq5pyIJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDkuKrmnIgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn5aSn57qmIDEg5bm0JyxcbiAgICBvdGhlcjogJ+Wkp+e6piB7e2NvdW50fX0g5bm0J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIOW5tCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g5bm0J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn6LaF6L+HIDEg5bm0JyxcbiAgICBvdGhlcjogJ+i2hei/hyB7e2NvdW50fX0g5bm0J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICflsIbov5EgMSDlubQnLFxuICAgIG90aGVyOiAn5bCG6L+RIHt7Y291bnR9fSDlubQnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn5YaFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfliY0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9