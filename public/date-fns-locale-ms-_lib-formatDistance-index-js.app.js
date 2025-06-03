(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ms-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ms/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ms/_lib/formatDistance/index.js ***!
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
    one: 'kurang dari 1 saat',
    other: 'kurang dari {{count}} saat'
  },
  xSeconds: {
    one: '1 saat',
    other: '{{count}} saat'
  },
  halfAMinute: 'setengah minit',
  lessThanXMinutes: {
    one: 'kurang dari 1 minit',
    other: 'kurang dari {{count}} minit'
  },
  xMinutes: {
    one: '1 minit',
    other: '{{count}} minit'
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
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'dalam masa ' + result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21zL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbXMtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2t1cmFuZyBkYXJpIDEgc2FhdCcsXG4gICAgb3RoZXI6ICdrdXJhbmcgZGFyaSB7e2NvdW50fX0gc2FhdCdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNhYXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNhYXQnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnc2V0ZW5nYWggbWluaXQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAna3VyYW5nIGRhcmkgMSBtaW5pdCcsXG4gICAgb3RoZXI6ICdrdXJhbmcgZGFyaSB7e2NvdW50fX0gbWluaXQnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW5pdCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWluaXQnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnc2VraXRhciAxIGphbScsXG4gICAgb3RoZXI6ICdzZWtpdGFyIHt7Y291bnR9fSBqYW0nXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgamFtJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBqYW0nXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBoYXJpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBoYXJpJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ3Nla2l0YXIgMSBtaW5nZ3UnLFxuICAgIG90aGVyOiAnc2VraXRhciB7e2NvdW50fX0gbWluZ2d1J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIG1pbmdndScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWluZ2d1J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdzZWtpdGFyIDEgYnVsYW4nLFxuICAgIG90aGVyOiAnc2VraXRhciB7e2NvdW50fX0gYnVsYW4nXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIGJ1bGFuJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBidWxhbidcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdzZWtpdGFyIDEgdGFodW4nLFxuICAgIG90aGVyOiAnc2VraXRhciB7e2NvdW50fX0gdGFodW4nXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgdGFodW4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHRhaHVuJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnbGViaWggZGFyaSAxIHRhaHVuJyxcbiAgICBvdGhlcjogJ2xlYmloIGRhcmkge3tjb3VudH19IHRhaHVuJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdoYW1waXIgMSB0YWh1bicsXG4gICAgb3RoZXI6ICdoYW1waXIge3tjb3VudH19IHRhaHVuJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2RhbGFtIG1hc2EgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgeWFuZyBsYWx1JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==