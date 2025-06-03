(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fy-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/fy/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fy/_lib/formatDistance/index.js ***!
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
    one: 'minder as 1 sekonde',
    other: 'minder as {{count}} sekonden'
  },
  xSeconds: {
    one: '1 sekonde',
    other: '{{count}} sekonden'
  },
  halfAMinute: 'oardel minút',
  lessThanXMinutes: {
    one: 'minder as 1 minút',
    other: 'minder as {{count}} minuten'
  },
  xMinutes: {
    one: '1 minút',
    other: '{{count}} minuten'
  },
  aboutXHours: {
    one: 'sawat 1 oere',
    other: 'sawat {{count}} oere'
  },
  xHours: {
    one: '1 oere',
    other: '{{count}} oere'
  },
  xDays: {
    one: '1 dei',
    other: '{{count}} dagen'
  },
  aboutXWeeks: {
    one: 'sawat 1 wike',
    other: 'sawat {{count}} wiken'
  },
  xWeeks: {
    one: '1 wike',
    other: '{{count}} wiken'
  },
  aboutXMonths: {
    one: 'sawat 1 moanne',
    other: 'sawat {{count}} moannen'
  },
  xMonths: {
    one: '1 moanne',
    other: '{{count}} moannen'
  },
  aboutXYears: {
    one: 'sawat 1 jier',
    other: 'sawat {{count}} jier'
  },
  xYears: {
    one: '1 jier',
    other: '{{count}} jier'
  },
  overXYears: {
    one: 'mear as 1 jier',
    other: 'mear as {{count}}s jier'
  },
  almostXYears: {
    one: 'hast 1 jier',
    other: 'hast {{count}} jier'
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
      return 'oer ' + result;
    } else {
      return result + ' lyn';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2Z5L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZnktX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21pbmRlciBhcyAxIHNla29uZGUnLFxuICAgIG90aGVyOiAnbWluZGVyIGFzIHt7Y291bnR9fSBzZWtvbmRlbidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNla29uZGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla29uZGVuJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ29hcmRlbCBtaW7DunQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWluZGVyIGFzIDEgbWluw7p0JyxcbiAgICBvdGhlcjogJ21pbmRlciBhcyB7e2NvdW50fX0gbWludXRlbidcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbsO6dCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlbidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdzYXdhdCAxIG9lcmUnLFxuICAgIG90aGVyOiAnc2F3YXQge3tjb3VudH19IG9lcmUnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgb2VyZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gb2VyZSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRlaScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGFnZW4nXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnc2F3YXQgMSB3aWtlJyxcbiAgICBvdGhlcjogJ3Nhd2F0IHt7Y291bnR9fSB3aWtlbidcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3aWtlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3aWtlbidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnc2F3YXQgMSBtb2FubmUnLFxuICAgIG90aGVyOiAnc2F3YXQge3tjb3VudH19IG1vYW5uZW4nXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vYW5uZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9hbm5lbidcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdzYXdhdCAxIGppZXInLFxuICAgIG90aGVyOiAnc2F3YXQge3tjb3VudH19IGppZXInXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgamllcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gamllcidcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ21lYXIgYXMgMSBqaWVyJyxcbiAgICBvdGhlcjogJ21lYXIgYXMge3tjb3VudH19cyBqaWVyJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdoYXN0IDEgamllcicsXG4gICAgb3RoZXI6ICdoYXN0IHt7Y291bnR9fSBqaWVyJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ29lciAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBseW4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9