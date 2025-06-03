(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uz-Cyrl-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/uz-Cyrl/_lib/formatDistance/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/uz-Cyrl/_lib/formatDistance/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1 сониядан кам',
    other: '{{count}} сониядан кам'
  },
  xSeconds: {
    one: '1 сония',
    other: '{{count}} сония'
  },
  halfAMinute: 'ярим дақиқа',
  lessThanXMinutes: {
    one: '1 дақиқадан кам',
    other: '{{count}} дақиқадан кам'
  },
  xMinutes: {
    one: '1 дақиқа',
    other: '{{count}} дақиқа'
  },
  aboutXHours: {
    one: 'тахминан 1 соат',
    other: 'тахминан {{count}} соат'
  },
  xHours: {
    one: '1 соат',
    other: '{{count}} соат'
  },
  xDays: {
    one: '1 кун',
    other: '{{count}} кун'
  },
  aboutXWeeks: {
    one: 'тахминан 1 хафта',
    other: 'тахминан {{count}} хафта'
  },
  xWeeks: {
    one: '1 хафта',
    other: '{{count}} хафта'
  },
  aboutXMonths: {
    one: 'тахминан 1 ой',
    other: 'тахминан {{count}} ой'
  },
  xMonths: {
    one: '1 ой',
    other: '{{count}} ой'
  },
  aboutXYears: {
    one: 'тахминан 1 йил',
    other: 'тахминан {{count}} йил'
  },
  xYears: {
    one: '1 йил',
    other: '{{count}} йил'
  },
  overXYears: {
    one: '1 йилдан кўп',
    other: '{{count}} йилдан кўп'
  },
  almostXYears: {
    one: 'деярли 1 йил',
    other: 'деярли {{count}} йил'
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
      return result + 'дан кейин';
    } else {
      return result + ' олдин';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3V6LUN5cmwvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS11ei1DeXJsLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICcxINGB0L7QvdC40Y/QtNCw0L0g0LrQsNC8JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdC+0L3QuNGP0LTQsNC9INC60LDQvCdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxINGB0L7QvdC40Y8nLFxuICAgIG90aGVyOiAne3tjb3VudH19INGB0L7QvdC40Y8nXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn0Y/RgNC40Lwg0LTQsNKb0LjSm9CwJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJzEg0LTQsNKb0LjSm9Cw0LTQsNC9INC60LDQvCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LTQsNKb0LjSm9Cw0LTQsNC9INC60LDQvCdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxINC00LDSm9C40pvQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LTQsNKb0LjSm9CwJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9GC0LDRhdC80LjQvdCw0L0gMSDRgdC+0LDRgicsXG4gICAgb3RoZXI6ICfRgtCw0YXQvNC40L3QsNC9IHt7Y291bnR9fSDRgdC+0LDRgidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDRgdC+0LDRgicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQvtCw0YInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDQutGD0L0nLFxuICAgIG90aGVyOiAne3tjb3VudH19INC60YPQvSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfRgtCw0YXQvNC40L3QsNC9IDEg0YXQsNGE0YLQsCcsXG4gICAgb3RoZXI6ICfRgtCw0YXQvNC40L3QsNC9IHt7Y291bnR9fSDRhdCw0YTRgtCwJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxINGF0LDRhNGC0LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGF0LDRhNGC0LAnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9GC0LDRhdC80LjQvdCw0L0gMSDQvtC5JyxcbiAgICBvdGhlcjogJ9GC0LDRhdC80LjQvdCw0L0ge3tjb3VudH19INC+0LknXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxINC+0LknLFxuICAgIG90aGVyOiAne3tjb3VudH19INC+0LknXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn0YLQsNGF0LzQuNC90LDQvSAxINC50LjQuycsXG4gICAgb3RoZXI6ICfRgtCw0YXQvNC40L3QsNC9IHt7Y291bnR9fSDQudC40LsnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEg0LnQuNC7JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQudC40LsnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICcxINC50LjQu9C00LDQvSDQutGe0L8nLFxuICAgIG90aGVyOiAne3tjb3VudH19INC50LjQu9C00LDQvSDQutGe0L8nXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ9C00LXRj9GA0LvQuCAxINC50LjQuycsXG4gICAgb3RoZXI6ICfQtNC10Y/RgNC70Lgge3tjb3VudH19INC50LjQuydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfQtNCw0L0g0LrQtdC50LjQvSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnINC+0LvQtNC40L0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9