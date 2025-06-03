(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ug-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ug/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ug/_lib/formatDistance/index.js ***!
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
    one: 'بىر سىكۇنت ئىچىدە',
    other: 'سىكۇنت ئىچىدە {{count}}'
  },
  xSeconds: {
    one: 'بىر سىكۇنت',
    other: 'سىكۇنت {{count}}'
  },
  halfAMinute: 'يىرىم مىنۇت',
  lessThanXMinutes: {
    one: 'بىر مىنۇت ئىچىدە',
    other: 'مىنۇت ئىچىدە {{count}}'
  },
  xMinutes: {
    one: 'بىر مىنۇت',
    other: 'مىنۇت {{count}}'
  },
  aboutXHours: {
    one: 'تەخمىنەن بىر سائەت',
    other: 'سائەت {{count}} تەخمىنەن'
  },
  xHours: {
    one: 'بىر سائەت',
    other: 'سائەت {{count}}'
  },
  xDays: {
    one: 'بىر كۈن',
    other: 'كۈن {{count}}'
  },
  aboutXWeeks: {
    one: 'تەخمىنەن بىرھەپتە',
    other: 'ھەپتە {{count}} تەخمىنەن'
  },
  xWeeks: {
    one: 'بىرھەپتە',
    other: 'ھەپتە {{count}}'
  },
  aboutXMonths: {
    one: 'تەخمىنەن بىر ئاي',
    other: 'ئاي {{count}} تەخمىنەن'
  },
  xMonths: {
    one: 'بىر ئاي',
    other: 'ئاي {{count}}'
  },
  aboutXYears: {
    one: 'تەخمىنەن بىر يىل',
    other: 'يىل {{count}} تەخمىنەن'
  },
  xYears: {
    one: 'بىر يىل',
    other: 'يىل {{count}}'
  },
  overXYears: {
    one: 'بىر يىلدىن ئارتۇق',
    other: 'يىلدىن ئارتۇق {{count}}'
  },
  almostXYears: {
    one: 'ئاساسەن بىر يىل',
    other: 'يىل {{count}} ئاساسەن'
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
      return result;
    } else {
      return result + ' بولدى';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VnL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkMsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS11Zy1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KjZidixINiz2YnZg9uH2YbYqiDYptmJ2obZidiv25UnLFxuICAgIG90aGVyOiAn2LPZidmD24fZhtiqINim2YnahtmJ2K/blSB7e2NvdW50fX0nXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAn2KjZidixINiz2YnZg9uH2YbYqicsXG4gICAgb3RoZXI6ICfYs9mJ2YPbh9mG2Koge3tjb3VudH19J1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ9mK2YnYsdmJ2YUg2YXZidmG24fYqicsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICfYqNmJ2LEg2YXZidmG24fYqiDYptmJ2obZidiv25UnLFxuICAgIG90aGVyOiAn2YXZidmG24fYqiDYptmJ2obZidiv25Uge3tjb3VudH19J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ9io2YnYsSDZhdmJ2Ybbh9iqJyxcbiAgICBvdGhlcjogJ9mF2YnZhtuH2Koge3tjb3VudH19J1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ9iq25XYrtmF2YnZhtuV2YYg2KjZidixINiz2KfYptuV2KonLFxuICAgIG90aGVyOiAn2LPYp9im25XYqiB7e2NvdW50fX0g2Krbldiu2YXZidmG25XZhidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAn2KjZidixINiz2KfYptuV2KonLFxuICAgIG90aGVyOiAn2LPYp9im25XYqiB7e2NvdW50fX0nXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAn2KjZidixINmD24jZhicsXG4gICAgb3RoZXI6ICfZg9uI2YYge3tjb3VudH19J1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9iq25XYrtmF2YnZhtuV2YYg2KjZidix2r7bldm+2KrblScsXG4gICAgb3RoZXI6ICfavtuV2b7YqtuVIHt7Y291bnR9fSDYqtuV2K7ZhdmJ2YbbldmGJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICfYqNmJ2LHavtuV2b7YqtuVJyxcbiAgICBvdGhlcjogJ9q+25XZvtiq25Uge3tjb3VudH19J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICfYqtuV2K7ZhdmJ2YbbldmGINio2YnYsSDYptin2YonLFxuICAgIG90aGVyOiAn2KbYp9mKIHt7Y291bnR9fSDYqtuV2K7ZhdmJ2YbbldmGJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAn2KjZidixINim2KfZiicsXG4gICAgb3RoZXI6ICfYptin2Yoge3tjb3VudH19J1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ9iq25XYrtmF2YnZhtuV2YYg2KjZidixINmK2YnZhCcsXG4gICAgb3RoZXI6ICfZitmJ2YQge3tjb3VudH19INiq25XYrtmF2YnZhtuV2YYnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ9io2YnYsSDZitmJ2YQnLFxuICAgIG90aGVyOiAn2YrZidmEIHt7Y291bnR9fSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ9io2YnYsSDZitmJ2YTYr9mJ2YYg2KbYp9ix2Krbh9mCJyxcbiAgICBvdGhlcjogJ9mK2YnZhNiv2YnZhiDYptin2LHYqtuH2YIge3tjb3VudH19J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfYptin2LPYp9iz25XZhiDYqNmJ2LEg2YrZidmEJyxcbiAgICBvdGhlcjogJ9mK2YnZhCB7e2NvdW50fX0g2KbYp9iz2KfYs9uV2YYnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnINio2YjZhNiv2YknO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9