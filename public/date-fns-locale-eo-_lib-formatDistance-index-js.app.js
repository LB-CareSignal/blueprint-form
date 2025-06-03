(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-eo-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/eo/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/eo/_lib/formatDistance/index.js ***!
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
    one: 'malpli ol sekundo',
    other: 'malpli ol {{count}} sekundoj'
  },
  xSeconds: {
    one: '1 sekundo',
    other: '{{count}} sekundoj'
  },
  halfAMinute: 'duonminuto',
  lessThanXMinutes: {
    one: 'malpli ol minuto',
    other: 'malpli ol {{count}} minutoj'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutoj'
  },
  aboutXHours: {
    one: 'proksimume 1 horo',
    other: 'proksimume {{count}} horoj'
  },
  xHours: {
    one: '1 horo',
    other: '{{count}} horoj'
  },
  xDays: {
    one: '1 tago',
    other: '{{count}} tagoj'
  },
  aboutXMonths: {
    one: 'proksimume 1 monato',
    other: 'proksimume {{count}} monatoj'
  },
  xWeeks: {
    one: '1 semajno',
    other: '{{count}} semajnoj'
  },
  aboutXWeeks: {
    one: 'proksimume 1 semajno',
    other: 'proksimume {{count}} semajnoj'
  },
  xMonths: {
    one: '1 monato',
    other: '{{count}} monatoj'
  },
  aboutXYears: {
    one: 'proksimume 1 jaro',
    other: 'proksimume {{count}} jaroj'
  },
  xYears: {
    one: '1 jaro',
    other: '{{count}} jaroj'
  },
  overXYears: {
    one: 'pli ol 1 jaro',
    other: 'pli ol {{count}} jaroj'
  },
  almostXYears: {
    one: 'preskaŭ 1 jaro',
    other: 'preskaŭ {{count}} jaroj'
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
    if (options !== null && options !== void 0 && options.comparison && options.comparison > 0) {
      return 'post ' + result;
    } else {
      return 'antaŭ ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VvL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZW8tX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21hbHBsaSBvbCBzZWt1bmRvJyxcbiAgICBvdGhlcjogJ21hbHBsaSBvbCB7e2NvdW50fX0gc2VrdW5kb2onXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWt1bmRvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmRvaidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdkdW9ubWludXRvJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ21hbHBsaSBvbCBtaW51dG8nLFxuICAgIG90aGVyOiAnbWFscGxpIG9sIHt7Y291bnR9fSBtaW51dG9qJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dG9qJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3Byb2tzaW11bWUgMSBob3JvJyxcbiAgICBvdGhlcjogJ3Byb2tzaW11bWUge3tjb3VudH19IGhvcm9qJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvcm8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvcm9qJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgdGFnbycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGFnb2onXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ3Byb2tzaW11bWUgMSBtb25hdG8nLFxuICAgIG90aGVyOiAncHJva3NpbXVtZSB7e2NvdW50fX0gbW9uYXRvaidcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzZW1ham5vJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZW1ham5vaidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdwcm9rc2ltdW1lIDEgc2VtYWpubycsXG4gICAgb3RoZXI6ICdwcm9rc2ltdW1lIHt7Y291bnR9fSBzZW1ham5vaidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9uYXRvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb25hdG9qJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ3Byb2tzaW11bWUgMSBqYXJvJyxcbiAgICBvdGhlcjogJ3Byb2tzaW11bWUge3tjb3VudH19IGphcm9qJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGphcm8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGphcm9qJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAncGxpIG9sIDEgamFybycsXG4gICAgb3RoZXI6ICdwbGkgb2wge3tjb3VudH19IGphcm9qJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdwcmVza2HFrSAxIGphcm8nLFxuICAgIG90aGVyOiAncHJlc2thxa0ge3tjb3VudH19IGphcm9qJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ3Bvc3QgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdhbnRhxa0gJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==