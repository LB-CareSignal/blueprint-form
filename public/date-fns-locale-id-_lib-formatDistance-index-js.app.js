(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-id-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/id/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/id/_lib/formatDistance/index.js ***!
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
    one: 'kurang dari 1 detik',
    other: 'kurang dari {{count}} detik'
  },
  xSeconds: {
    one: '1 detik',
    other: '{{count}} detik'
  },
  halfAMinute: 'setengah menit',
  lessThanXMinutes: {
    one: 'kurang dari 1 menit',
    other: 'kurang dari {{count}} menit'
  },
  xMinutes: {
    one: '1 menit',
    other: '{{count}} menit'
  },
  aboutXHours: {
    one: 'sekitar 1 jam',
    other: 'sekitar {{count}} jam'
  },
  xHours: {
    one: '1 jam',
    other: '{{count}} jam'
  },
  xDays: {
    one: '1 hari',
    other: '{{count}} hari'
  },
  aboutXWeeks: {
    one: 'sekitar 1 minggu',
    other: 'sekitar {{count}} minggu'
  },
  xWeeks: {
    one: '1 minggu',
    other: '{{count}} minggu'
  },
  aboutXMonths: {
    one: 'sekitar 1 bulan',
    other: 'sekitar {{count}} bulan'
  },
  xMonths: {
    one: '1 bulan',
    other: '{{count}} bulan'
  },
  aboutXYears: {
    one: 'sekitar 1 tahun',
    other: 'sekitar {{count}} tahun'
  },
  xYears: {
    one: '1 tahun',
    other: '{{count}} tahun'
  },
  overXYears: {
    one: 'lebih dari 1 tahun',
    other: 'lebih dari {{count}} tahun'
  },
  almostXYears: {
    one: 'hampir 1 tahun',
    other: 'hampir {{count}} tahun'
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
      return 'dalam waktu ' + result;
    } else {
      return result + ' yang lalu';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lkL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaWQtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2t1cmFuZyBkYXJpIDEgZGV0aWsnLFxuICAgIG90aGVyOiAna3VyYW5nIGRhcmkge3tjb3VudH19IGRldGlrJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgZGV0aWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRldGlrJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3NldGVuZ2FoIG1lbml0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2t1cmFuZyBkYXJpIDEgbWVuaXQnLFxuICAgIG90aGVyOiAna3VyYW5nIGRhcmkge3tjb3VudH19IG1lbml0J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWVuaXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1lbml0J1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3Nla2l0YXIgMSBqYW0nLFxuICAgIG90aGVyOiAnc2VraXRhciB7e2NvdW50fX0gamFtJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGphbScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gamFtJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgaGFyaScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaGFyaSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdzZWtpdGFyIDEgbWluZ2d1JyxcbiAgICBvdGhlcjogJ3Nla2l0YXIge3tjb3VudH19IG1pbmdndSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBtaW5nZ3UnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbmdndSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnc2VraXRhciAxIGJ1bGFuJyxcbiAgICBvdGhlcjogJ3Nla2l0YXIge3tjb3VudH19IGJ1bGFuJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBidWxhbicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYnVsYW4nXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnc2VraXRhciAxIHRhaHVuJyxcbiAgICBvdGhlcjogJ3Nla2l0YXIge3tjb3VudH19IHRhaHVuJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHRhaHVuJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0YWh1bidcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ2xlYmloIGRhcmkgMSB0YWh1bicsXG4gICAgb3RoZXI6ICdsZWJpaCBkYXJpIHt7Y291bnR9fSB0YWh1bidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnaGFtcGlyIDEgdGFodW4nLFxuICAgIG90aGVyOiAnaGFtcGlyIHt7Y291bnR9fSB0YWh1bidcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdkYWxhbSB3YWt0dSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyB5YW5nIGxhbHUnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9