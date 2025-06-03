(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ka-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ka/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ka/_lib/formatDistance/index.js ***!
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
    past: '{{count}} წამზე ნაკლები ხნის წინ',
    present: '{{count}} წამზე ნაკლები',
    future: '{{count}} წამზე ნაკლებში'
  },
  xSeconds: {
    past: '{{count}} წამის წინ',
    present: '{{count}} წამი',
    future: '{{count}} წამში'
  },
  halfAMinute: {
    past: 'ნახევარი წუთის წინ',
    present: 'ნახევარი წუთი',
    future: 'ნახევარი წუთში'
  },
  lessThanXMinutes: {
    past: '{{count}} წუთზე ნაკლები ხნის წინ',
    present: '{{count}} წუთზე ნაკლები',
    future: '{{count}} წუთზე ნაკლებში'
  },
  xMinutes: {
    past: '{{count}} წუთის წინ',
    present: '{{count}} წუთი',
    future: '{{count}} წუთში'
  },
  aboutXHours: {
    past: 'დაახლოებით {{count}} საათის წინ',
    present: 'დაახლოებით {{count}} საათი',
    future: 'დაახლოებით {{count}} საათში'
  },
  xHours: {
    past: '{{count}} საათის წინ',
    present: '{{count}} საათი',
    future: '{{count}} საათში'
  },
  xDays: {
    past: '{{count}} დღის წინ',
    present: '{{count}} დღე',
    future: '{{count}} დღეში'
  },
  aboutXWeeks: {
    past: 'დაახლოებით {{count}} კვირას წინ',
    present: 'დაახლოებით {{count}} კვირა',
    future: 'დაახლოებით {{count}} კვირაში'
  },
  xWeeks: {
    past: '{{count}} კვირას კვირა',
    present: '{{count}} კვირა',
    future: '{{count}} კვირაში'
  },
  aboutXMonths: {
    past: 'დაახლოებით {{count}} თვის წინ',
    present: 'დაახლოებით {{count}} თვე',
    future: 'დაახლოებით {{count}} თვეში'
  },
  xMonths: {
    past: '{{count}} თვის წინ',
    present: '{{count}} თვე',
    future: '{{count}} თვეში'
  },
  aboutXYears: {
    past: 'დაახლოებით {{count}} წლის წინ',
    present: 'დაახლოებით {{count}} წელი',
    future: 'დაახლოებით {{count}} წელში'
  },
  xYears: {
    past: '{{count}} წლის წინ',
    present: '{{count}} წელი',
    future: '{{count}} წელში'
  },
  overXYears: {
    past: '{{count}} წელზე მეტი ხნის წინ',
    present: '{{count}} წელზე მეტი',
    future: '{{count}} წელზე მეტი ხნის შემდეგ'
  },
  almostXYears: {
    past: 'თითქმის {{count}} წლის წინ',
    present: 'თითქმის {{count}} წელი',
    future: 'თითქმის {{count}} წელში'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (options !== null && options !== void 0 && options.addSuffix && options.comparison && options.comparison > 0) {
    result = tokenValue.future.replace('{{count}}', String(count));
  } else if (options !== null && options !== void 0 && options.addSuffix) {
    result = tokenValue.past.replace('{{count}}', String(count));
  } else {
    result = tokenValue.present.replace('{{count}}', String(count));
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2thL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQixPQUFPO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixHQUFHO0FBQ0g7QUFDQSxhQUFhLE9BQU87QUFDcEIsZ0JBQWdCLE9BQU87QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGFBQWEsT0FBTztBQUNwQixnQkFBZ0IsT0FBTztBQUN2QixlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQixPQUFPO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiwyQkFBMkIsT0FBTztBQUNsQywwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQSxhQUFhLE9BQU87QUFDcEIsZ0JBQWdCLE9BQU87QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLEdBQUc7QUFDSDtBQUNBLGFBQWEsT0FBTztBQUNwQixnQkFBZ0IsT0FBTztBQUN2QixlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsMkJBQTJCLE9BQU87QUFDbEMsMEJBQTBCLE9BQU87QUFDakMsR0FBRztBQUNIO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQixPQUFPO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiwyQkFBMkIsT0FBTztBQUNsQywwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQSxhQUFhLE9BQU87QUFDcEIsZ0JBQWdCLE9BQU87QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDJCQUEyQixPQUFPO0FBQ2xDLDBCQUEwQixPQUFPO0FBQ2pDLEdBQUc7QUFDSDtBQUNBLGFBQWEsT0FBTztBQUNwQixnQkFBZ0IsT0FBTztBQUN2QixlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQixPQUFPO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixHQUFHO0FBQ0g7QUFDQSxxQkFBcUIsT0FBTztBQUM1Qix3QkFBd0IsT0FBTztBQUMvQix1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQ0FBMEMsT0FBTztBQUNqRCxHQUFHO0FBQ0gsd0NBQXdDLE9BQU87QUFDL0MsR0FBRztBQUNILDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta2EtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOs4YOQ4YOb4YOW4YOUIOGDnOGDkOGDmeGDmuGDlOGDkeGDmCDhg67hg5zhg5jhg6Eg4YOs4YOY4YOcJyxcbiAgICBwcmVzZW50OiAne3tjb3VudH19IOGDrOGDkOGDm+GDluGDlCDhg5zhg5Dhg5nhg5rhg5Thg5Hhg5gnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg6zhg5Dhg5vhg5bhg5Qg4YOc4YOQ4YOZ4YOa4YOU4YOR4YOo4YOYJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOs4YOQ4YOb4YOY4YOhIOGDrOGDmOGDnCcsXG4gICAgcHJlc2VudDogJ3t7Y291bnR9fSDhg6zhg5Dhg5vhg5gnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg6zhg5Dhg5vhg6jhg5gnXG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgcGFzdDogJ+GDnOGDkOGDruGDlOGDleGDkOGDoOGDmCDhg6zhg6Phg5fhg5jhg6Eg4YOs4YOY4YOcJyxcbiAgICBwcmVzZW50OiAn4YOc4YOQ4YOu4YOU4YOV4YOQ4YOg4YOYIOGDrOGDo+GDl+GDmCcsXG4gICAgZnV0dXJlOiAn4YOc4YOQ4YOu4YOU4YOV4YOQ4YOg4YOYIOGDrOGDo+GDl+GDqOGDmCdcbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOs4YOj4YOX4YOW4YOUIOGDnOGDkOGDmeGDmuGDlOGDkeGDmCDhg67hg5zhg5jhg6Eg4YOs4YOY4YOcJyxcbiAgICBwcmVzZW50OiAne3tjb3VudH19IOGDrOGDo+GDl+GDluGDlCDhg5zhg5Dhg5nhg5rhg5Thg5Hhg5gnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg6zhg6Phg5fhg5bhg5Qg4YOc4YOQ4YOZ4YOa4YOU4YOR4YOo4YOYJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOs4YOj4YOX4YOY4YOhIOGDrOGDmOGDnCcsXG4gICAgcHJlc2VudDogJ3t7Y291bnR9fSDhg6zhg6Phg5fhg5gnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg6zhg6Phg5fhg6jhg5gnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgcGFzdDogJ+GDk+GDkOGDkOGDruGDmuGDneGDlOGDkeGDmOGDlyB7e2NvdW50fX0g4YOh4YOQ4YOQ4YOX4YOY4YOhIOGDrOGDmOGDnCcsXG4gICAgcHJlc2VudDogJ+GDk+GDkOGDkOGDruGDmuGDneGDlOGDkeGDmOGDlyB7e2NvdW50fX0g4YOh4YOQ4YOQ4YOX4YOYJyxcbiAgICBmdXR1cmU6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDoeGDkOGDkOGDl+GDqOGDmCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgcGFzdDogJ3t7Y291bnR9fSDhg6Hhg5Dhg5Dhg5fhg5jhg6Eg4YOs4YOY4YOcJyxcbiAgICBwcmVzZW50OiAne3tjb3VudH19IOGDoeGDkOGDkOGDl+GDmCcsXG4gICAgZnV0dXJlOiAne3tjb3VudH19IOGDoeGDkOGDkOGDl+GDqOGDmCdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBwYXN0OiAne3tjb3VudH19IOGDk+GDpuGDmOGDoSDhg6zhg5jhg5wnLFxuICAgIHByZXNlbnQ6ICd7e2NvdW50fX0g4YOT4YOm4YOUJyxcbiAgICBmdXR1cmU6ICd7e2NvdW50fX0g4YOT4YOm4YOU4YOo4YOYJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIHBhc3Q6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDmeGDleGDmOGDoOGDkOGDoSDhg6zhg5jhg5wnLFxuICAgIHByZXNlbnQ6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDmeGDleGDmOGDoOGDkCcsXG4gICAgZnV0dXJlOiAn4YOT4YOQ4YOQ4YOu4YOa4YOd4YOU4YOR4YOY4YOXIHt7Y291bnR9fSDhg5nhg5Xhg5jhg6Dhg5Dhg6jhg5gnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOZ4YOV4YOY4YOg4YOQ4YOhIOGDmeGDleGDmOGDoOGDkCcsXG4gICAgcHJlc2VudDogJ3t7Y291bnR9fSDhg5nhg5Xhg5jhg6Dhg5AnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg5nhg5Xhg5jhg6Dhg5Dhg6jhg5gnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIHBhc3Q6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDl+GDleGDmOGDoSDhg6zhg5jhg5wnLFxuICAgIHByZXNlbnQ6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDl+GDleGDlCcsXG4gICAgZnV0dXJlOiAn4YOT4YOQ4YOQ4YOu4YOa4YOd4YOU4YOR4YOY4YOXIHt7Y291bnR9fSDhg5fhg5Xhg5Thg6jhg5gnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBwYXN0OiAne3tjb3VudH19IOGDl+GDleGDmOGDoSDhg6zhg5jhg5wnLFxuICAgIHByZXNlbnQ6ICd7e2NvdW50fX0g4YOX4YOV4YOUJyxcbiAgICBmdXR1cmU6ICd7e2NvdW50fX0g4YOX4YOV4YOU4YOo4YOYJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIHBhc3Q6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDrOGDmuGDmOGDoSDhg6zhg5jhg5wnLFxuICAgIHByZXNlbnQ6ICfhg5Phg5Dhg5Dhg67hg5rhg53hg5Thg5Hhg5jhg5cge3tjb3VudH19IOGDrOGDlOGDmuGDmCcsXG4gICAgZnV0dXJlOiAn4YOT4YOQ4YOQ4YOu4YOa4YOd4YOU4YOR4YOY4YOXIHt7Y291bnR9fSDhg6zhg5Thg5rhg6jhg5gnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHBhc3Q6ICd7e2NvdW50fX0g4YOs4YOa4YOY4YOhIOGDrOGDmOGDnCcsXG4gICAgcHJlc2VudDogJ3t7Y291bnR9fSDhg6zhg5Thg5rhg5gnLFxuICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDhg6zhg5Thg5rhg6jhg5gnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBwYXN0OiAne3tjb3VudH19IOGDrOGDlOGDmuGDluGDlCDhg5vhg5Thg6Lhg5gg4YOu4YOc4YOY4YOhIOGDrOGDmOGDnCcsXG4gICAgcHJlc2VudDogJ3t7Y291bnR9fSDhg6zhg5Thg5rhg5bhg5Qg4YOb4YOU4YOi4YOYJyxcbiAgICBmdXR1cmU6ICd7e2NvdW50fX0g4YOs4YOU4YOa4YOW4YOUIOGDm+GDlOGDouGDmCDhg67hg5zhg5jhg6Eg4YOo4YOU4YOb4YOT4YOU4YOSJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBwYXN0OiAn4YOX4YOY4YOX4YOl4YOb4YOY4YOhIHt7Y291bnR9fSDhg6zhg5rhg5jhg6Eg4YOs4YOY4YOcJyxcbiAgICBwcmVzZW50OiAn4YOX4YOY4YOX4YOl4YOb4YOY4YOhIHt7Y291bnR9fSDhg6zhg5Thg5rhg5gnLFxuICAgIGZ1dHVyZTogJ+GDl+GDmOGDl+GDpeGDm+GDmOGDoSB7e2NvdW50fX0g4YOs4YOU4YOa4YOo4YOYJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCAmJiBvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZnV0dXJlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5wYXN0LnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUucHJlc2VudC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9