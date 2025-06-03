(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-EG-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ar-EG/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar-EG/_lib/formatDistance/index.js ***!
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
    two: 'أقل من ثانيتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية',
    two: 'ثانيتين',
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
    one: 'حوالي ساعة',
    two: 'حوالي ساعتين',
    threeToTen: 'حوالي {{count}} ساعات',
    other: 'حوالي {{count}} ساعة'
  },
  xHours: {
    one: 'ساعة',
    two: 'ساعتين',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم',
    two: 'يومين',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'حوالي أسبوع',
    two: 'حوالي أسبوعين',
    threeToTen: 'حوالي {{count}} أسابيع',
    other: 'حوالي {{count}} أسبوع'
  },
  xWeeks: {
    one: 'أسبوع',
    two: 'أسبوعين',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوع'
  },
  aboutXMonths: {
    one: 'حوالي شهر',
    two: 'حوالي شهرين',
    threeToTen: 'حوالي {{count}} أشهر',
    other: 'حوالي {{count}} شهر'
  },
  xMonths: {
    one: 'شهر',
    two: 'شهرين',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهر'
  },
  aboutXYears: {
    one: 'حوالي سنة',
    two: 'حوالي سنتين',
    threeToTen: 'حوالي {{count}} سنين',
    other: 'حوالي {{count}} سنة'
  },
  xYears: {
    one: 'عام',
    two: 'عامين',
    threeToTen: '{{count}} أعوام',
    other: '{{count}} عام'
  },
  overXYears: {
    one: 'أكثر من سنة',
    two: 'أكثر من سنتين',
    threeToTen: 'أكثر من {{count}} سنين',
    other: 'أكثر من {{count}} سنة'
  },
  almostXYears: {
    one: 'عام تقريبًا',
    two: 'عامين تقريبًا',
    threeToTen: '{{count}} أعوام تقريبًا',
    other: '{{count}} عام تقريبًا'
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
      return "\u0641\u064A \u062E\u0644\u0627\u0644 ".concat(result);
    } else {
      return "\u0645\u0646\u0630 ".concat(result);
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyLUVHL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPO0FBQ3JELEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hci1FRy1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KPZgtmEINmF2YYg2KvYp9mG2YrYqScsXG4gICAgdHdvOiAn2KPZgtmEINmF2YYg2KvYp9mG2YrYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvZiNin2YbZiicsXG4gICAgb3RoZXI6ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvYp9mG2YrYqSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICfYq9in2YbZitipJyxcbiAgICB0d286ICfYq9in2YbZitiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYq9mI2KfZhtmKJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYq9in2YbZitipJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ9mG2LUg2K/ZgtmK2YLYqScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfYo9mC2YQg2YXZhiDYr9mC2YrZgtipJyxcbiAgICB0d286ICfYo9mC2YQg2YXZhiDYr9mC2YrZgtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9ij2YLZhCDZhdmGIHt7Y291bnR9fSDYr9mC2KfZitmCJyxcbiAgICBvdGhlcjogJ9ij2YLZhCDZhdmGIHt7Y291bnR9fSDYr9mC2YrZgtipJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ9iv2YLZitmC2KknLFxuICAgIHR3bzogJ9iv2YLZitmC2KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiv2YLYp9mK2YInLFxuICAgIG90aGVyOiAne3tjb3VudH19INiv2YLZitmC2KknXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn2K3ZiNin2YTZiiDYs9in2LnYqScsXG4gICAgdHdvOiAn2K3ZiNin2YTZiiDYs9in2LnYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYrdmI2KfZhNmKIHt7Y291bnR9fSDYs9in2LnYp9iqJyxcbiAgICBvdGhlcjogJ9it2YjYp9mE2Yoge3tjb3VudH19INiz2KfYudipJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICfYs9in2LnYqScsXG4gICAgdHdvOiAn2LPYp9i52KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2KfYudin2KonLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2KfYudipJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ9mK2YjZhScsXG4gICAgdHdvOiAn2YrZiNmF2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9mK2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2YrZiNmFJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9it2YjYp9mE2Yog2KPYs9io2YjYuScsXG4gICAgdHdvOiAn2K3ZiNin2YTZiiDYo9iz2KjZiNi52YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9it2YjYp9mE2Yoge3tjb3VudH19INij2LPYp9io2YrYuScsXG4gICAgb3RoZXI6ICfYrdmI2KfZhNmKIHt7Y291bnR9fSDYo9iz2KjZiNi5J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICfYo9iz2KjZiNi5JyxcbiAgICB0d286ICfYo9iz2KjZiNi52YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9iz2KfYqNmK2LknLFxuICAgIG90aGVyOiAne3tjb3VudH19INij2LPYqNmI2LknXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9it2YjYp9mE2Yog2LTZh9ixJyxcbiAgICB0d286ICfYrdmI2KfZhNmKINi02YfYsdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYrdmI2KfZhNmKIHt7Y291bnR9fSDYo9i02YfYsScsXG4gICAgb3RoZXI6ICfYrdmI2KfZhNmKIHt7Y291bnR9fSDYtNmH2LEnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICfYtNmH2LEnLFxuICAgIHR3bzogJ9i02YfYsdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYtNmH2LEnLFxuICAgIG90aGVyOiAne3tjb3VudH19INi02YfYsSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfYrdmI2KfZhNmKINiz2YbYqScsXG4gICAgdHdvOiAn2K3ZiNin2YTZiiDYs9mG2KrZitmGJyxcbiAgICB0aHJlZVRvVGVuOiAn2K3ZiNin2YTZiiB7e2NvdW50fX0g2LPZhtmK2YYnLFxuICAgIG90aGVyOiAn2K3ZiNin2YTZiiB7e2NvdW50fX0g2LPZhtipJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICfYudin2YUnLFxuICAgIHR3bzogJ9i52KfZhdmK2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYudmI2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LnYp9mFJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAn2KPZg9ir2LEg2YXZhiDYs9mG2KknLFxuICAgIHR3bzogJ9ij2YPYq9ixINmF2YYg2LPZhtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9ij2YPYq9ixINmF2YYge3tjb3VudH19INiz2YbZitmGJyxcbiAgICBvdGhlcjogJ9ij2YPYq9ixINmF2YYge3tjb3VudH19INiz2YbYqSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn2LnYp9mFINiq2YLYsdmK2KjZi9inJyxcbiAgICB0d286ICfYudin2YXZitmGINiq2YLYsdmK2KjZi9inJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INij2LnZiNin2YUg2KrZgtix2YrYqNmL2KcnLFxuICAgIG90aGVyOiAne3tjb3VudH19INi52KfZhSDYqtmC2LHZitio2YvYpydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUudHdvO1xuICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS50aHJlZVRvVGVuLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJcXHUwNjQxXFx1MDY0QSBcXHUwNjJFXFx1MDY0NFxcdTA2MjdcXHUwNjQ0IFwiLmNvbmNhdChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcXHUwNjQ1XFx1MDY0NlxcdTA2MzAgXCIuY29uY2F0KHJlc3VsdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=