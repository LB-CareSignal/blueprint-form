(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ar-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ar/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ar/_lib/formatDistance/index.js ***!
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
    one: 'أقل من ثانية',
    two: 'أقل من ثانيتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية واحدة',
    two: 'ثانيتان',
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
    two: 'دقيقتان',
    threeToTen: '{{count}} دقائق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'ساعة واحدة تقريباً',
    two: 'ساعتين تقريبا',
    threeToTen: '{{count}} ساعات تقريباً',
    other: '{{count}} ساعة تقريباً'
  },
  xHours: {
    one: 'ساعة واحدة',
    two: 'ساعتان',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم واحد',
    two: 'يومان',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'أسبوع واحد تقريبا',
    two: 'أسبوعين تقريبا',
    threeToTen: '{{count}} أسابيع تقريبا',
    other: '{{count}} أسبوعا تقريبا'
  },
  xWeeks: {
    one: 'أسبوع واحد',
    two: 'أسبوعان',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوعا'
  },
  aboutXMonths: {
    one: 'شهر واحد تقريباً',
    two: 'شهرين تقريبا',
    threeToTen: '{{count}} أشهر تقريبا',
    other: '{{count}} شهرا تقريباً'
  },
  xMonths: {
    one: 'شهر واحد',
    two: 'شهران',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهرا'
  },
  aboutXYears: {
    one: 'سنة واحدة تقريباً',
    two: 'سنتين تقريبا',
    threeToTen: '{{count}} سنوات تقريباً',
    other: '{{count}} سنة تقريباً'
  },
  xYears: {
    one: 'سنة واحد',
    two: 'سنتان',
    threeToTen: '{{count}} سنوات',
    other: '{{count}} سنة'
  },
  overXYears: {
    one: 'أكثر من سنة',
    two: 'أكثر من سنتين',
    threeToTen: 'أكثر من {{count}} سنوات',
    other: 'أكثر من {{count}} سنة'
  },
  almostXYears: {
    one: 'ما يقارب سنة واحدة',
    two: 'ما يقارب سنتين',
    threeToTen: 'ما يقارب {{count}} سنوات',
    other: 'ما يقارب {{count}} سنة'
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
      return 'خلال ' + result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2FyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPO0FBQ3JELEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1hci1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KPZgtmEINmF2YYg2KvYp9mG2YrYqScsXG4gICAgdHdvOiAn2KPZgtmEINmF2YYg2KvYp9mG2YrYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvZiNin2YbZiicsXG4gICAgb3RoZXI6ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2KvYp9mG2YrYqSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICfYq9in2YbZitipINmI2KfYrdiv2KknLFxuICAgIHR3bzogJ9ir2KfZhtmK2KrYp9mGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INir2YjYp9mG2YonLFxuICAgIG90aGVyOiAne3tjb3VudH19INir2KfZhtmK2KknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn2YbYtdmBINiv2YLZitmC2KknLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqScsXG4gICAgdHdvOiAn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2K/Zgtin2KbZgicsXG4gICAgb3RoZXI6ICfYo9mC2YQg2YXZhiB7e2NvdW50fX0g2K/ZgtmK2YLYqSdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfYr9mC2YrZgtipINmI2KfYrdiv2KknLFxuICAgIHR3bzogJ9iv2YLZitmC2KrYp9mGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiv2YLYp9im2YInLFxuICAgIG90aGVyOiAne3tjb3VudH19INiv2YLZitmC2KknXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn2LPYp9i52Kkg2YjYp9it2K/YqSDYqtmC2LHZitio2KfZiycsXG4gICAgdHdvOiAn2LPYp9i52KrZitmGINiq2YLYsdmK2KjYpycsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYs9in2LnYp9iqINiq2YLYsdmK2KjYp9mLJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYs9in2LnYqSDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAn2LPYp9i52Kkg2YjYp9it2K/YqScsXG4gICAgdHdvOiAn2LPYp9i52KrYp9mGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2KfYudin2KonLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2KfYudipJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ9mK2YjZhSDZiNin2K3YrycsXG4gICAgdHdvOiAn2YrZiNmF2KfZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9mK2KfZhScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2YrZiNmFJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9ij2LPYqNmI2Lkg2YjYp9it2K8g2KrZgtix2YrYqNinJyxcbiAgICB0d286ICfYo9iz2KjZiNi52YrZhiDYqtmC2LHZitio2KcnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYs9in2KjZiti5INiq2YLYsdmK2KjYpycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2KPYs9io2YjYudinINiq2YLYsdmK2KjYpydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAn2KPYs9io2YjYuSDZiNin2K3YrycsXG4gICAgdHdvOiAn2KPYs9io2YjYudin2YYnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYs9in2KjZiti5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYo9iz2KjZiNi52KcnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9i02YfYsSDZiNin2K3YryDYqtmC2LHZitio2KfZiycsXG4gICAgdHdvOiAn2LTZh9ix2YrZhiDYqtmC2LHZitio2KcnLFxuICAgIHRocmVlVG9UZW46ICd7e2NvdW50fX0g2KPYtNmH2LEg2KrZgtix2YrYqNinJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDYtNmH2LHYpyDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ9i02YfYsSDZiNin2K3YrycsXG4gICAgdHdvOiAn2LTZh9ix2KfZhicsXG4gICAgdGhyZWVUb1RlbjogJ3t7Y291bnR9fSDYo9i02YfYsScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g2LTZh9ix2KcnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn2LPZhtipINmI2KfYrdiv2Kkg2KrZgtix2YrYqNin2YsnLFxuICAgIHR3bzogJ9iz2YbYqtmK2YYg2KrZgtix2YrYqNinJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2YbZiNin2Kog2KrZgtix2YrYqNin2YsnLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2YbYqSDYqtmC2LHZitio2KfZiydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAn2LPZhtipINmI2KfYrdivJyxcbiAgICB0d286ICfYs9mG2KrYp9mGJyxcbiAgICB0aHJlZVRvVGVuOiAne3tjb3VudH19INiz2YbZiNin2KonLFxuICAgIG90aGVyOiAne3tjb3VudH19INiz2YbYqSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ9ij2YPYq9ixINmF2YYg2LPZhtipJyxcbiAgICB0d286ICfYo9mD2KvYsSDZhdmGINiz2YbYqtmK2YYnLFxuICAgIHRocmVlVG9UZW46ICfYo9mD2KvYsSDZhdmGIHt7Y291bnR9fSDYs9mG2YjYp9iqJyxcbiAgICBvdGhlcjogJ9ij2YPYq9ixINmF2YYge3tjb3VudH19INiz2YbYqSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn2YXYpyDZitmC2KfYsdioINiz2YbYqSDZiNin2K3Yr9ipJyxcbiAgICB0d286ICfZhdinINmK2YLYp9ix2Kgg2LPZhtiq2YrZhicsXG4gICAgdGhyZWVUb1RlbjogJ9mF2Kcg2YrZgtin2LHYqCB7e2NvdW50fX0g2LPZhtmI2KfYqicsXG4gICAgb3RoZXI6ICfZhdinINmK2YLYp9ix2Kgge3tjb3VudH19INiz2YbYqSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdXNhZ2VHcm91cCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiB1c2FnZUdyb3VwID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXA7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB1c2FnZUdyb3VwLm9uZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMikge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAudHdvO1xuICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cC50aHJlZVRvVGVuLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ9iu2YTYp9mEICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn2YXZhtiwICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=