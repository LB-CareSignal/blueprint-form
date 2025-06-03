(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-DZ-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-DZ/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-DZ/_lib/formatDistance/index.js ***!
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
  options = options || {};
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
  if (options.addSuffix) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLURaL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPO0FBQ3JELEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hci1EWi1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KPZgtmEINmF2YYg2KvYp9mG2YrYqSDZiNin2K3Yr9ipJyxcbiAgICB0d286ICfYo9mC2YQg2YXZhiDYq9in2YbYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvZiNin2YbZiicsXG4gICAgb3RoZXI6ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvYp9mG2YrYqSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICfYq9in2YbZitipINmI2KfYrdiv2KknLFxuICAgIHR3bzogJ9ir2KfZhtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYq9mI2KfZhtmKJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYq9in2YbZitipJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ9mG2LXZgSDYr9mC2YrZgtipJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ9ij2YLZhCDZhdmGINiv2YLZitmC2KknLFxuICAgIHR3bzogJ9ij2YLZhCDZhdmGINiv2YLZitmC2KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAn2KPZgtmEINmF2YYge3tjb3VudH19INiv2YLYp9im2YInLFxuICAgIG90aGVyOiAn2KPZgtmEINmF2YYge3tjb3VudH19INiv2YLZitmC2KknXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAn2K/ZgtmK2YLYqSDZiNin2K3Yr9ipJyxcbiAgICB0d286ICfYr9mC2YrZgtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYr9mC2KfYptmCJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYr9mC2YrZgtipJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9iz2KfYudipINmI2KfYrdiv2Kkg2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9iz2KfYudiq2YrZhiDYqtmC2LHZitio2KfZiycsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYs9in2LnYp9iqINiq2YLYsdmK2KjYp9mLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYs9in2LnYqSDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAn2LPYp9i52Kkg2YjYp9it2K/YqScsXG4gICAgdHdvOiAn2LPYp9i52KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2KfYudin2KonLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2KfYudipJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ9mK2YjZhSDZiNin2K3YrycsXG4gICAgdHdvOiAn2YrZiNmF2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9mK2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2YrZiNmFJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9ij2LPYqNmI2Lkg2YjYp9it2K8g2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9ij2LPYqNmI2LnZitmGINiq2YLYsdmK2KjYp9mLJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2LPYp9io2YrYuSDYqtmC2LHZitio2KfZiycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KPYs9io2YjYuSDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAn2KPYs9io2YjYuSDZiNin2K3YrycsXG4gICAgdHdvOiAn2KPYs9io2YjYudmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYs9in2KjZiti5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYo9iz2KjZiNi5J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICfYtNmH2LEg2YjYp9it2K8g2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9i02YfYsdmK2YYg2KrZgtix2YrYqNin2YsnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYtNmH2LEg2KrZgtix2YrYqNin2YsnLFxuICAgIG90aGVyOiAne3tjb3VudH19INi02YfYsSDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ9i02YfYsSDZiNin2K3YrycsXG4gICAgdHdvOiAn2LTZh9ix2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i02YfYsScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LTZh9ixJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ9i52KfZhSDZiNin2K3YryDYqtmC2LHZitio2KfZiycsXG4gICAgdHdvOiAn2LnYp9mF2YrZhiDYqtmC2LHZitio2KfZiycsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i52YjYp9mFINiq2YLYsdmK2KjYp9mLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYudin2YUg2KrZgtix2YrYqNin2YsnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ9i52KfZhSDZiNin2K3YrycsXG4gICAgdHdvOiAn2LnYp9mF2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i52YjYp9mFJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYudin2YUnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfYo9mD2KvYsSDZhdmGINi52KfZhScsXG4gICAgdHdvOiAn2KPZg9ir2LEg2YXZhiDYudin2YXZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAn2KPZg9ir2LEg2YXZhiB7e2NvdW50fX0g2KPYudmI2KfZhScsXG4gICAgb3RoZXI6ICfYo9mD2KvYsSDZhdmGIHt7Y291bnR9fSDYudin2YUnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ9i52KfZhSDZiNin2K3YryDYqtmC2LHZitio2KfZiycsXG4gICAgdHdvOiAn2LnYp9mF2YrZhiDYqtmC2LHZitio2KfZiycsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i52YjYp9mFINiq2YLYsdmK2KjYp9mLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYudin2YUg2KrZgtix2YrYqNin2YsnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB1c2FnZUdyb3VwID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB2YXIgcmVzdWx0O1xuICBpZiAodHlwZW9mIHVzYWdlR3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cDtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC50d287XG4gIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwLnRocmVlVG9UZW4ucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn2YHZiiDYrtmE2KfZhCAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9mF2YbYsCAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9