(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-az-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/az/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/az/_lib/formatDistance/index.js ***!
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
    one: 'bir saniyədən az',
    other: '{{count}} bir saniyədən az'
  },
  xSeconds: {
    one: '1 saniyə',
    other: '{{count}} saniyə'
  },
  halfAMinute: 'yarım dəqiqə',
  lessThanXMinutes: {
    one: 'bir dəqiqədən az',
    other: '{{count}} bir dəqiqədən az'
  },
  xMinutes: {
    one: 'bir dəqiqə',
    other: '{{count}} dəqiqə'
  },
  aboutXHours: {
    one: 'təxminən 1 saat',
    other: 'təxminən {{count}} saat'
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
    one: 'təxminən 1 həftə',
    other: 'təxminən {{count}} həftə'
  },
  xWeeks: {
    one: '1 həftə',
    other: '{{count}} həftə'
  },
  aboutXMonths: {
    one: 'təxminən 1 ay',
    other: 'təxminən {{count}} ay'
  },
  xMonths: {
    one: '1 ay',
    other: '{{count}} ay'
  },
  aboutXYears: {
    one: 'təxminən 1 il',
    other: 'təxminən {{count}} il'
  },
  xYears: {
    one: '1 il',
    other: '{{count}} il'
  },
  overXYears: {
    one: '1 ildən çox',
    other: '{{count}} ildən çox'
  },
  almostXYears: {
    one: 'demək olar ki 1 il',
    other: 'demək olar ki {{count}} il'
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
      return result + ' sonra';
    } else {
      return result + ' əvvəl';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2F6L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYXotX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2JpciBzYW5pecmZZMmZbiBheicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYmlyIHNhbml5yZlkyZluIGF6J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2FuaXnJmScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2FuaXnJmSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICd5YXLEsW0gZMmZcWlxyZknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnYmlyIGTJmXFpccmZZMmZbiBheicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYmlyIGTJmXFpccmZZMmZbiBheidcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdiaXIgZMmZcWlxyZknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGTJmXFpccmZJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3TJmXhtaW7JmW4gMSBzYWF0JyxcbiAgICBvdGhlcjogJ3TJmXhtaW7JmW4ge3tjb3VudH19IHNhYXQnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgc2FhdCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2FhdCdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGfDvG4nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGfDvG4nXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAndMmZeG1pbsmZbiAxIGjJmWZ0yZknLFxuICAgIG90aGVyOiAndMmZeG1pbsmZbiB7e2NvdW50fX0gaMmZZnTJmSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBoyZlmdMmZJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBoyZlmdMmZJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICd0yZl4bWluyZluIDEgYXknLFxuICAgIG90aGVyOiAndMmZeG1pbsmZbiB7e2NvdW50fX0gYXknXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBheSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICd0yZl4bWluyZluIDEgaWwnLFxuICAgIG90aGVyOiAndMmZeG1pbsmZbiB7e2NvdW50fX0gaWwnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgaWwnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGlsJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnMSBpbGTJmW4gw6dveCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaWxkyZluIMOnb3gnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2RlbcmZayBvbGFyIGtpIDEgaWwnLFxuICAgIG90aGVyOiAnZGVtyZlrIG9sYXIga2kge3tjb3VudH19IGlsJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzb25yYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIMmZdnbJmWwnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9