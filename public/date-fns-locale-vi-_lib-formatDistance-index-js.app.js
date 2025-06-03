(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-vi-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js ***!
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
    one: 'dưới 1 giây',
    other: 'dưới {{count}} giây'
  },
  xSeconds: {
    one: '1 giây',
    other: '{{count}} giây'
  },
  halfAMinute: 'nửa phút',
  lessThanXMinutes: {
    one: 'dưới 1 phút',
    other: 'dưới {{count}} phút'
  },
  xMinutes: {
    one: '1 phút',
    other: '{{count}} phút'
  },
  aboutXHours: {
    one: 'khoảng 1 giờ',
    other: 'khoảng {{count}} giờ'
  },
  xHours: {
    one: '1 giờ',
    other: '{{count}} giờ'
  },
  xDays: {
    one: '1 ngày',
    other: '{{count}} ngày'
  },
  aboutXWeeks: {
    one: 'khoảng 1 tuần',
    other: 'khoảng {{count}} tuần'
  },
  xWeeks: {
    one: '1 tuần',
    other: '{{count}} tuần'
  },
  aboutXMonths: {
    one: 'khoảng 1 tháng',
    other: 'khoảng {{count}} tháng'
  },
  xMonths: {
    one: '1 tháng',
    other: '{{count}} tháng'
  },
  aboutXYears: {
    one: 'khoảng 1 năm',
    other: 'khoảng {{count}} năm'
  },
  xYears: {
    one: '1 năm',
    other: '{{count}} năm'
  },
  overXYears: {
    one: 'hơn 1 năm',
    other: 'hơn {{count}} năm'
  },
  almostXYears: {
    one: 'gần 1 năm',
    other: 'gần {{count}} năm'
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
      return result + ' nữa';
    } else {
      return result + ' trước';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdmktX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2TGsOG7m2kgMSBnacOieScsXG4gICAgb3RoZXI6ICdkxrDhu5tpIHt7Y291bnR9fSBnacOieSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIGdpw6J5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBnacOieSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdu4butYSBwaMO6dCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdkxrDhu5tpIDEgcGjDunQnLFxuICAgIG90aGVyOiAnZMaw4bubaSB7e2NvdW50fX0gcGjDunQnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBwaMO6dCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gcGjDunQnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAna2hv4bqjbmcgMSBnaeG7nScsXG4gICAgb3RoZXI6ICdraG/huqNuZyB7e2NvdW50fX0gZ2nhu50nXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgZ2nhu50nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGdp4budJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgbmfDoHknLFxuICAgIG90aGVyOiAne3tjb3VudH19IG5nw6B5J1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgdHXhuqduJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSB0deG6p24nXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgdHXhuqduJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0deG6p24nXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgdGjDoW5nJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSB0aMOhbmcnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIHRow6FuZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGjDoW5nJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2tob+G6o25nIDEgbsSDbScsXG4gICAgb3RoZXI6ICdraG/huqNuZyB7e2NvdW50fX0gbsSDbSdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBuxINtJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBuxINtJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnaMahbiAxIG7Eg20nLFxuICAgIG90aGVyOiAnaMahbiB7e2NvdW50fX0gbsSDbSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnZ+G6p24gMSBuxINtJyxcbiAgICBvdGhlcjogJ2fhuqduIHt7Y291bnR9fSBuxINtJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBu4buvYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIHRyxrDhu5tjJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==