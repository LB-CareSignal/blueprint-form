(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-oc-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/oc/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/oc/_lib/formatDistance/index.js ***!
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
    one: 'mens d’una segonda',
    other: 'mens de {{count}} segondas'
  },
  xSeconds: {
    one: '1 segonda',
    other: '{{count}} segondas'
  },
  halfAMinute: '30 segondas',
  lessThanXMinutes: {
    one: 'mens d’una minuta',
    other: 'mens de {{count}} minutas'
  },
  xMinutes: {
    one: '1 minuta',
    other: '{{count}} minutas'
  },
  aboutXHours: {
    one: 'environ 1 ora',
    other: 'environ {{count}} oras'
  },
  xHours: {
    one: '1 ora',
    other: '{{count}} oras'
  },
  xDays: {
    one: '1 jorn',
    other: '{{count}} jorns'
  },
  aboutXWeeks: {
    one: 'environ 1 setmana',
    other: 'environ {{count}} setmanas'
  },
  xWeeks: {
    one: '1 setmana',
    other: '{{count}} setmanas'
  },
  aboutXMonths: {
    one: 'environ 1 mes',
    other: 'environ {{count}} meses'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'environ 1 an',
    other: 'environ {{count}} ans'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ans'
  },
  overXYears: {
    one: 'mai d’un an',
    other: 'mai de {{count}} ans'
  },
  almostXYears: {
    one: 'gaireben un an',
    other: 'gaireben {{count}} ans'
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
      return 'd’aquí ' + result;
    } else {
      return 'fa ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL29jL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtb2MtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21lbnMgZOKAmXVuYSBzZWdvbmRhJyxcbiAgICBvdGhlcjogJ21lbnMgZGUge3tjb3VudH19IHNlZ29uZGFzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vnb25kYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vnb25kYXMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnMzAgc2Vnb25kYXMnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWVucyBk4oCZdW5hIG1pbnV0YScsXG4gICAgb3RoZXI6ICdtZW5zIGRlIHt7Y291bnR9fSBtaW51dGFzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGFzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Vudmlyb24gMSBvcmEnLFxuICAgIG90aGVyOiAnZW52aXJvbiB7e2NvdW50fX0gb3JhcydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBvcmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG9yYXMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBqb3JuJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBqb3JucydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgc2V0bWFuYScsXG4gICAgb3RoZXI6ICdlbnZpcm9uIHt7Y291bnR9fSBzZXRtYW5hcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZXRtYW5hcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnZW52aXJvbiAxIG1lcycsXG4gICAgb3RoZXI6ICdlbnZpcm9uIHt7Y291bnR9fSBtZXNlcydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbWVzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNlcydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdlbnZpcm9uIDEgYW4nLFxuICAgIG90aGVyOiAnZW52aXJvbiB7e2NvdW50fX0gYW5zJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGFuJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhbnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdtYWkgZOKAmXVuIGFuJyxcbiAgICBvdGhlcjogJ21haSBkZSB7e2NvdW50fX0gYW5zJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdnYWlyZWJlbiB1biBhbicsXG4gICAgb3RoZXI6ICdnYWlyZWJlbiB7e2NvdW50fX0gYW5zJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2TigJlhcXXDrSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2ZhICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=