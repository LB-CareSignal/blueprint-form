(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ht-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ht/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ht/_lib/formatDistance/index.js ***!
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
    one: 'mwens pase yon segond',
    other: 'mwens pase {{count}} segond'
  },
  xSeconds: {
    one: '1 segond',
    other: '{{count}} segond'
  },
  halfAMinute: '30 segond',
  lessThanXMinutes: {
    one: 'mwens pase yon minit',
    other: 'mwens pase {{count}} minit'
  },
  xMinutes: {
    one: '1 minit',
    other: '{{count}} minit'
  },
  aboutXHours: {
    one: 'anviwon inè',
    other: 'anviwon {{count}} è'
  },
  xHours: {
    one: '1 lè',
    other: '{{count}} lè'
  },
  xDays: {
    one: '1 jou',
    other: '{{count}} jou'
  },
  aboutXWeeks: {
    one: 'anviwon 1 semèn',
    other: 'anviwon {{count}} semèn'
  },
  xWeeks: {
    one: '1 semèn',
    other: '{{count}} semèn'
  },
  aboutXMonths: {
    one: 'anviwon 1 mwa',
    other: 'anviwon {{count}} mwa'
  },
  xMonths: {
    one: '1 mwa',
    other: '{{count}} mwa'
  },
  aboutXYears: {
    one: 'anviwon 1 an',
    other: 'anviwon {{count}} an'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} an'
  },
  overXYears: {
    one: 'plis pase 1 an',
    other: 'plis pase {{count}} an'
  },
  almostXYears: {
    one: 'prèske 1 an',
    other: 'prèske {{count}} an'
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
      return 'nan ' + result;
    } else {
      return 'sa fè ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaHQtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ213ZW5zIHBhc2UgeW9uIHNlZ29uZCcsXG4gICAgb3RoZXI6ICdtd2VucyBwYXNlIHt7Y291bnR9fSBzZWdvbmQnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWdvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlZ29uZCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICczMCBzZWdvbmQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbXdlbnMgcGFzZSB5b24gbWluaXQnLFxuICAgIG90aGVyOiAnbXdlbnMgcGFzZSB7e2NvdW50fX0gbWluaXQnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW5pdCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWluaXQnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYW52aXdvbiBpbsOoJyxcbiAgICBvdGhlcjogJ2Fudml3b24ge3tjb3VudH19IMOoJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGzDqCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbMOoJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgam91JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBqb3UnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYW52aXdvbiAxIHNlbcOobicsXG4gICAgb3RoZXI6ICdhbnZpd29uIHt7Y291bnR9fSBzZW3DqG4nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgc2Vtw6huJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZW3DqG4nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fudml3b24gMSBtd2EnLFxuICAgIG90aGVyOiAnYW52aXdvbiB7e2NvdW50fX0gbXdhJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtd2EnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG13YSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhbnZpd29uIDEgYW4nLFxuICAgIG90aGVyOiAnYW52aXdvbiB7e2NvdW50fX0gYW4nXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgYW4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGFuJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAncGxpcyBwYXNlIDEgYW4nLFxuICAgIG90aGVyOiAncGxpcyBwYXNlIHt7Y291bnR9fSBhbidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncHLDqHNrZSAxIGFuJyxcbiAgICBvdGhlcjogJ3Byw6hza2Uge3tjb3VudH19IGFuJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ25hbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3NhIGbDqCAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9