(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-tr-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/tr/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/tr/_lib/formatDistance/index.js ***!
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
    one: 'bir saniyeden az',
    other: '{{count}} saniyeden az'
  },
  xSeconds: {
    one: '1 saniye',
    other: '{{count}} saniye'
  },
  halfAMinute: 'yarım dakika',
  lessThanXMinutes: {
    one: 'bir dakikadan az',
    other: '{{count}} dakikadan az'
  },
  xMinutes: {
    one: '1 dakika',
    other: '{{count}} dakika'
  },
  aboutXHours: {
    one: 'yaklaşık 1 saat',
    other: 'yaklaşık {{count}} saat'
  },
  xHours: {
    one: '1 saat',
    other: '{{count}} saat'
  },
  xDays: {
    one: '1 gün',
    other: '{{count}} gün'
  },
  aboutXWeeks: {
    one: 'yaklaşık 1 hafta',
    other: 'yaklaşık {{count}} hafta'
  },
  xWeeks: {
    one: '1 hafta',
    other: '{{count}} hafta'
  },
  aboutXMonths: {
    one: 'yaklaşık 1 ay',
    other: 'yaklaşık {{count}} ay'
  },
  xMonths: {
    one: '1 ay',
    other: '{{count}} ay'
  },
  aboutXYears: {
    one: 'yaklaşık 1 yıl',
    other: 'yaklaşık {{count}} yıl'
  },
  xYears: {
    one: '1 yıl',
    other: '{{count}} yıl'
  },
  overXYears: {
    one: '1 yıldan fazla',
    other: '{{count}} yıldan fazla'
  },
  almostXYears: {
    one: 'neredeyse 1 yıl',
    other: 'neredeyse {{count}} yıl'
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
      return result + ' sonra';
    } else {
      return result + ' önce';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdHItX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2JpciBzYW5peWVkZW4gYXonLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNhbml5ZWRlbiBheidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNhbml5ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2FuaXllJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3lhcsSxbSBkYWtpa2EnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnYmlyIGRha2lrYWRhbiBheicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGFraWthZGFuIGF6J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgZGFraWthJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYWtpa2EnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAneWFrbGHFn8SxayAxIHNhYXQnLFxuICAgIG90aGVyOiAneWFrbGHFn8SxayB7e2NvdW50fX0gc2FhdCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBzYWF0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzYWF0J1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZ8O8bicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ8O8bidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICd5YWtsYcWfxLFrIDEgaGFmdGEnLFxuICAgIG90aGVyOiAneWFrbGHFn8SxayB7e2NvdW50fX0gaGFmdGEnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgaGFmdGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhhZnRhJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICd5YWtsYcWfxLFrIDEgYXknLFxuICAgIG90aGVyOiAneWFrbGHFn8SxayB7e2NvdW50fX0gYXknXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBheSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICd5YWtsYcWfxLFrIDEgecSxbCcsXG4gICAgb3RoZXI6ICd5YWtsYcWfxLFrIHt7Y291bnR9fSB5xLFsJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHnEsWwnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHnEsWwnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICcxIHnEsWxkYW4gZmF6bGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHnEsWxkYW4gZmF6bGEnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ25lcmVkZXlzZSAxIHnEsWwnLFxuICAgIG90aGVyOiAnbmVyZWRleXNlIHt7Y291bnR9fSB5xLFsJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzb25yYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIMO2bmNlJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==