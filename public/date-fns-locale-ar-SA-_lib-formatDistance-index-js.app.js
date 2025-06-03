(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-SA-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-SA/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-SA/_lib/formatDistance/index.js ***!
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
    one: 'أقل من ثانية واحدة',
    two: 'أقل من ثانتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية واحدة',
    two: 'ثانتين',
    threeToTen: '{{count}} ثواني',
    other: '{{count}} ثانية'
  },
  halfAMinute: 'نصف دقيقة',
  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: 'أقل من دقيقتين',
    threeToTen: 'أقل من {{count}} دقائق',
    other: 'أقل من {{count}} دقيقة'
  },
  xMinutes: {
    one: 'دقيقة واحدة',
    two: 'دقيقتين',
    threeToTen: '{{count}} دقائق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'ساعة واحدة تقريباً',
    two: 'ساعتين تقريباً',
    threeToTen: '{{count}} ساعات تقريباً',
    other: '{{count}} ساعة تقريباً'
  },
  xHours: {
    one: 'ساعة واحدة',
    two: 'ساعتين',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم واحد',
    two: 'يومين',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'أسبوع واحد تقريباً',
    two: 'أسبوعين تقريباً',
    threeToTen: '{{count}} أسابيع تقريباً',
    other: '{{count}} أسبوع تقريباً'
  },
  xWeeks: {
    one: 'أسبوع واحد',
    two: 'أسبوعين',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوع'
  },
  aboutXMonths: {
    one: 'شهر واحد تقريباً',
    two: 'شهرين تقريباً',
    threeToTen: '{{count}} أشهر تقريباً',
    other: '{{count}} شهر تقريباً'
  },
  xMonths: {
    one: 'شهر واحد',
    two: 'شهرين',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهر'
  },
  aboutXYears: {
    one: 'عام واحد تقريباً',
    two: 'عامين تقريباً',
    threeToTen: '{{count}} أعوام تقريباً',
    other: '{{count}} عام تقريباً'
  },
  xYears: {
    one: 'عام واحد',
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
    one: 'عام واحد تقريباً',
    two: 'عامين تقريباً',
    threeToTen: '{{count}} أعوام تقريباً',
    other: '{{count}} عام تقريباً'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2) {
    result = tokenValue.two;
  } else if (count <= 10) {
    result = tokenValue.threeToTen.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'في خلال ' + result;
    } else {
      return 'منذ ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLVNBL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsT0FBTztBQUNyRCxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYXItU0EtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9ij2YLZhCDZhdmGINir2KfZhtmK2Kkg2YjYp9it2K/YqScsXG4gICAgdHdvOiAn2KPZgtmEINmF2YYg2KvYp9mG2KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAn2KPZgtmEINmF2YYge3tjb3VudH19INir2YjYp9mG2YonLFxuICAgIG90aGVyOiAn2KPZgtmEINmF2YYge3tjb3VudH19INir2KfZhtmK2KknXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KvYp9mG2YrYqSDZiNin2K3Yr9ipJyxcbiAgICB0d286ICfYq9in2YbYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KvZiNin2YbZiicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KvYp9mG2YrYqSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfZhti12YEg2K/ZgtmK2YLYqScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfYo9mC2YQg2YXZhiDYr9mC2YrZgtipJyxcbiAgICB0d286ICfYo9mC2YQg2YXZhiDYr9mC2YrZgtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9ij2YLZhCDZhdmGIHt7Y291bnR9fSDYr9mC2KfYptmCJyxcbiAgICBvdGhlcjogJ9ij2YLZhCDZhdmGIHt7Y291bnR9fSDYr9mC2YrZgtipJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ9iv2YLZitmC2Kkg2YjYp9it2K/YqScsXG4gICAgdHdvOiAn2K/ZgtmK2YLYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2K/Zgtin2KbZgicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2K/ZgtmK2YLYqSdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfYs9in2LnYqSDZiNin2K3Yr9ipINiq2YLYsdmK2KjYp9mLJyxcbiAgICB0d286ICfYs9in2LnYqtmK2YYg2KrZgtix2YrYqNin2YsnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2LPYp9i52KfYqiDYqtmC2LHZitio2KfZiycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LPYp9i52Kkg2KrZgtix2YrYqNin2YsnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJ9iz2KfYudipINmI2KfYrdiv2KknLFxuICAgIHR3bzogJ9iz2KfYudiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYs9in2LnYp9iqJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYs9in2LnYqSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICfZitmI2YUg2YjYp9it2K8nLFxuICAgIHR3bzogJ9mK2YjZhdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPZitin2YUnLFxuICAgIG90aGVyOiAne3tjb3VudH19INmK2YjZhSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfYo9iz2KjZiNi5INmI2KfYrdivINiq2YLYsdmK2KjYp9mLJyxcbiAgICB0d286ICfYo9iz2KjZiNi52YrZhiDYqtmC2LHZitio2KfZiycsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9iz2KfYqNmK2Lkg2KrZgtix2YrYqNin2YsnLFxuICAgIG90aGVyOiAne3tjb3VudH19INij2LPYqNmI2Lkg2KrZgtix2YrYqNin2YsnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJ9ij2LPYqNmI2Lkg2YjYp9it2K8nLFxuICAgIHR3bzogJ9ij2LPYqNmI2LnZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2LPYp9io2YrYuScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KPYs9io2YjYuSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn2LTZh9ixINmI2KfYrdivINiq2YLYsdmK2KjYp9mLJyxcbiAgICB0d286ICfYtNmH2LHZitmGINiq2YLYsdmK2KjYp9mLJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2LTZh9ixINiq2YLYsdmK2KjYp9mLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYtNmH2LEg2KrZgtix2YrYqNin2YsnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICfYtNmH2LEg2YjYp9it2K8nLFxuICAgIHR3bzogJ9i02YfYsdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYtNmH2LEnLFxuICAgIG90aGVyOiAne3tjb3VudH19INi02YfYsSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUg2YjYp9it2K8g2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9i52KfZhdmK2YYg2KrZgtix2YrYqNin2YsnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYudmI2KfZhSDYqtmC2LHZitio2KfZiycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFINiq2YLYsdmK2KjYp9mLJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUg2YjYp9it2K8nLFxuICAgIHR3bzogJ9i52KfZhdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYudmI2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn2KPZg9ir2LEg2YXZhiDYudin2YUnLFxuICAgIHR3bzogJ9ij2YPYq9ixINmF2YYg2LnYp9mF2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9ij2YPYq9ixINmF2YYge3tjb3VudH19INij2LnZiNin2YUnLFxuICAgIG90aGVyOiAn2KPZg9ir2LEg2YXZhiB7e2NvdW50fX0g2LnYp9mFJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUg2YjYp9it2K8g2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9i52KfZhdmK2YYg2KrZgtix2YrYqNin2YsnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYudmI2KfZhSDYqtmC2LHZitio2KfZiycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFINiq2YLYsdmK2KjYp9mLJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS50d287XG4gIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLnRocmVlVG9UZW4ucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn2YHZiiDYrtmE2KfZhCAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9mF2YbYsCAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9