(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-TN-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-TN/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-TN/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'أقل من ثانية',
    two: 'أقل من زوز ثواني',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية',
    two: 'زوز ثواني',
    threeToTen: '{{count}} ثواني',
    other: '{{count}} ثانية'
  },
  halfAMinute: 'نص دقيقة',
  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: 'أقل من دقيقتين',
    threeToTen: 'أقل من {{count}} دقايق',
    other: 'أقل من {{count}} دقيقة'
  },
  xMinutes: {
    one: 'دقيقة',
    two: 'دقيقتين',
    threeToTen: '{{count}} دقايق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'ساعة تقريب',
    two: 'ساعتين تقريب',
    threeToTen: '{{count}} سوايع تقريب',
    other: '{{count}} ساعة تقريب'
  },
  xHours: {
    one: 'ساعة',
    two: 'ساعتين',
    threeToTen: '{{count}} سوايع',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'نهار',
    two: 'نهارين',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'جمعة تقريب',
    two: 'جمعتين تقريب',
    threeToTen: '{{count}} جماع تقريب',
    other: '{{count}} جمعة تقريب'
  },
  xWeeks: {
    one: 'جمعة',
    two: 'جمعتين',
    threeToTen: '{{count}} جماع',
    other: '{{count}} جمعة'
  },
  aboutXMonths: {
    one: 'شهر تقريب',
    two: 'شهرين تقريب',
    threeToTen: '{{count}} أشهرة تقريب',
    other: '{{count}} شهر تقريب'
  },
  xMonths: {
    one: 'شهر',
    two: 'شهرين',
    threeToTen: '{{count}} أشهرة',
    other: '{{count}} شهر'
  },
  aboutXYears: {
    one: 'عام تقريب',
    two: 'عامين تقريب',
    threeToTen: '{{count}} أعوام تقريب',
    other: '{{count}} عام تقريب'
  },
  xYears: {
    one: 'عام',
    two: 'عامين',
    threeToTen: '{{count}} أعوام',
    other: '{{count}} عام'
  },
  overXYears: {
    one: 'أكثر من عام',
    two: 'أكثر من عامين',
    threeToTen: 'أكثر من {{count}} أعوام',
    other: 'أكثر من {{count}} عام'
  },
  almostXYears: {
    one: 'عام تقريب',
    two: 'عامين تقريب',
    threeToTen: '{{count}} أعوام تقريب',
    other: '{{count}} عام تقريب'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var usageGroup = formatDistanceLocale[token];
  var result;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else if (count === 2) {
    result = usageGroup.two;
  } else if (count <= 10) {
    result = usageGroup.threeToTen.replace('{{count}}', String(count));
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'في ' + result;
    } else {
      return 'عندو ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLVROL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsT0FBTztBQUNyRCxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYXItVE4tX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9ij2YLZhCDZhdmGINir2KfZhtmK2KknLFxuICAgIHR3bzogJ9ij2YLZhCDZhdmGINiy2YjYsiDYq9mI2KfZhtmKJyxcbiAgICB0aHJlZVRvVGVuOiAn2KPZgtmEINmF2YYge3tjb3VudH19INir2YjYp9mG2YonLFxuICAgIG90aGVyOiAn2KPZgtmEINmF2YYge3tjb3VudH19INir2KfZhtmK2KknXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KvYp9mG2YrYqScsXG4gICAgdHdvOiAn2LLZiNiyINir2YjYp9mG2YonLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KvZiNin2YbZiicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KvYp9mG2YrYqSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfZhti1INiv2YLZitmC2KknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqScsXG4gICAgdHdvOiAn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2K/Zgtin2YrZgicsXG4gICAgb3RoZXI6ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2K/ZgtmK2YLYqSdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfYr9mC2YrZgtipJyxcbiAgICB0d286ICfYr9mC2YrZgtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYr9mC2KfZitmCJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYr9mC2YrZgtipJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9iz2KfYudipINiq2YLYsdmK2KgnLFxuICAgIHR3bzogJ9iz2KfYudiq2YrZhiDYqtmC2LHZitioJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2YjYp9mK2Lkg2KrZgtix2YrYqCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LPYp9i52Kkg2KrZgtix2YrYqCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAn2LPYp9i52KknLFxuICAgIHR3bzogJ9iz2KfYudiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYs9mI2KfZiti5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYs9in2LnYqSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICfZhtmH2KfYsScsXG4gICAgdHdvOiAn2YbZh9in2LHZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2YrYp9mFJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDZitmI2YUnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn2KzZhdi52Kkg2KrZgtix2YrYqCcsXG4gICAgdHdvOiAn2KzZhdi52KrZitmGINiq2YLYsdmK2KgnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KzZhdin2Lkg2KrZgtix2YrYqCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KzZhdi52Kkg2KrZgtix2YrYqCdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAn2KzZhdi52KknLFxuICAgIHR3bzogJ9is2YXYudiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYrNmF2KfYuScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KzZhdi52KknXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9i02YfYsSDYqtmC2LHZitioJyxcbiAgICB0d286ICfYtNmH2LHZitmGINiq2YLYsdmK2KgnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYtNmH2LHYqSDYqtmC2LHZitioJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYtNmH2LEg2KrZgtix2YrYqCdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ9i02YfYsScsXG4gICAgdHdvOiAn2LTZh9ix2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i02YfYsdipJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYtNmH2LEnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn2LnYp9mFINiq2YLYsdmK2KgnLFxuICAgIHR3bzogJ9i52KfZhdmK2YYg2KrZgtix2YrYqCcsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i52YjYp9mFINiq2YLYsdmK2KgnLFxuICAgIG90aGVyOiAne3tjb3VudH19INi52KfZhSDYqtmC2LHZitioJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUnLFxuICAgIHR3bzogJ9i52KfZhdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYudmI2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn2KPZg9ir2LEg2YXZhiDYudin2YUnLFxuICAgIHR3bzogJ9ij2YPYq9ixINmF2YYg2LnYp9mF2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9ij2YPYq9ixINmF2YYge3tjb3VudH19INij2LnZiNin2YUnLFxuICAgIG90aGVyOiAn2KPZg9ir2LEg2YXZhiB7e2NvdW50fX0g2LnYp9mFJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUg2KrZgtix2YrYqCcsXG4gICAgdHdvOiAn2LnYp9mF2YrZhiDYqtmC2LHZitioJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2LnZiNin2YUg2KrZgtix2YrYqCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFINiq2YLYsdmK2KgnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHVzYWdlR3JvdXAgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgdXNhZ2VHcm91cCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC5vbmU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIpIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwLnR3bztcbiAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAudGhyZWVUb1Rlbi5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfZgdmKICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn2LnZhtiv2YggJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==