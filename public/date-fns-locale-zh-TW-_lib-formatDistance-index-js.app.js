(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-zh-TW-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/zh-TW/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-TW/_lib/formatDistance/index.js ***!
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
    one: '少於 1 秒',
    other: '少於 {{count}} 秒'
  },
  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },
  halfAMinute: '半分鐘',
  lessThanXMinutes: {
    one: '少於 1 分鐘',
    other: '少於 {{count}} 分鐘'
  },
  xMinutes: {
    one: '1 分鐘',
    other: '{{count}} 分鐘'
  },
  xHours: {
    one: '1 小時',
    other: '{{count}} 小時'
  },
  aboutXHours: {
    one: '大約 1 小時',
    other: '大約 {{count}} 小時'
  },
  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },
  aboutXWeeks: {
    one: '大約 1 個星期',
    other: '大約 {{count}} 個星期'
  },
  xWeeks: {
    one: '1 個星期',
    other: '{{count}} 個星期'
  },
  aboutXMonths: {
    one: '大約 1 個月',
    other: '大約 {{count}} 個月'
  },
  xMonths: {
    one: '1 個月',
    other: '{{count}} 個月'
  },
  aboutXYears: {
    one: '大約 1 年',
    other: '大約 {{count}} 年'
  },
  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },
  overXYears: {
    one: '超過 1 年',
    other: '超過 {{count}} 年'
  },
  almostXYears: {
    one: '將近 1 年',
    other: '將近 {{count}} 年'
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
      return result + '內';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3poLVRXL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtemgtVFctX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ+WwkeaWvCAxIOenkicsXG4gICAgb3RoZXI6ICflsJHmlrwge3tjb3VudH19IOenkidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIOenkicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g56eSJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ+WNiuWIhumQmCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICflsJHmlrwgMSDliIbpkJgnLFxuICAgIG90aGVyOiAn5bCR5pa8IHt7Y291bnR9fSDliIbpkJgnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDliIbpkJgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWIhumQmCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDlsI/mmYInLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWwj+aZgidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICflpKfntIQgMSDlsI/mmYInLFxuICAgIG90aGVyOiAn5aSn57SEIHt7Y291bnR9fSDlsI/mmYInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDlpKknLFxuICAgIG90aGVyOiAne3tjb3VudH19IOWkqSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICflpKfntIQgMSDlgIvmmJ/mnJ8nLFxuICAgIG90aGVyOiAn5aSn57SEIHt7Y291bnR9fSDlgIvmmJ/mnJ8nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEg5YCL5pif5pyfJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDlgIvmmJ/mnJ8nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ+Wkp+e0hCAxIOWAi+aciCcsXG4gICAgb3RoZXI6ICflpKfntIQge3tjb3VudH19IOWAi+aciCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEg5YCL5pyIJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDlgIvmnIgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn5aSn57SEIDEg5bm0JyxcbiAgICBvdGhlcjogJ+Wkp+e0hCB7e2NvdW50fX0g5bm0J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIOW5tCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g5bm0J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn6LaF6YGOIDEg5bm0JyxcbiAgICBvdGhlcjogJ+i2hemBjiB7e2NvdW50fX0g5bm0J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICflsIfov5EgMSDlubQnLFxuICAgIG90aGVyOiAn5bCH6L+RIHt7Y291bnR9fSDlubQnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn5YWnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfliY0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9