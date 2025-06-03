(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-et-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/et/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/et/_lib/formatDistance/index.js ***!
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
    standalone: {
      one: 'vähem kui üks sekund',
      other: 'vähem kui {{count}} sekundit'
    },
    withPreposition: {
      one: 'vähem kui ühe sekundi',
      other: 'vähem kui {{count}} sekundi'
    }
  },
  xSeconds: {
    standalone: {
      one: 'üks sekund',
      other: '{{count}} sekundit'
    },
    withPreposition: {
      one: 'ühe sekundi',
      other: '{{count}} sekundi'
    }
  },
  halfAMinute: {
    standalone: 'pool minutit',
    withPreposition: 'poole minuti'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'vähem kui üks minut',
      other: 'vähem kui {{count}} minutit'
    },
    withPreposition: {
      one: 'vähem kui ühe minuti',
      other: 'vähem kui {{count}} minuti'
    }
  },
  xMinutes: {
    standalone: {
      one: 'üks minut',
      other: '{{count}} minutit'
    },
    withPreposition: {
      one: 'ühe minuti',
      other: '{{count}} minuti'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'umbes üks tund',
      other: 'umbes {{count}} tundi'
    },
    withPreposition: {
      one: 'umbes ühe tunni',
      other: 'umbes {{count}} tunni'
    }
  },
  xHours: {
    standalone: {
      one: 'üks tund',
      other: '{{count}} tundi'
    },
    withPreposition: {
      one: 'ühe tunni',
      other: '{{count}} tunni'
    }
  },
  xDays: {
    standalone: {
      one: 'üks päev',
      other: '{{count}} päeva'
    },
    withPreposition: {
      one: 'ühe päeva',
      other: '{{count}} päeva'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'umbes üks nädal',
      other: 'umbes {{count}} nädalat'
    },
    withPreposition: {
      one: 'umbes ühe nädala',
      other: 'umbes {{count}} nädala'
    }
  },
  xWeeks: {
    standalone: {
      one: 'üks nädal',
      other: '{{count}} nädalat'
    },
    withPreposition: {
      one: 'ühe nädala',
      other: '{{count}} nädala'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'umbes üks kuu',
      other: 'umbes {{count}} kuud'
    },
    withPreposition: {
      one: 'umbes ühe kuu',
      other: 'umbes {{count}} kuu'
    }
  },
  xMonths: {
    standalone: {
      one: 'üks kuu',
      other: '{{count}} kuud'
    },
    withPreposition: {
      one: 'ühe kuu',
      other: '{{count}} kuu'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'umbes üks aasta',
      other: 'umbes {{count}} aastat'
    },
    withPreposition: {
      one: 'umbes ühe aasta',
      other: 'umbes {{count}} aasta'
    }
  },
  xYears: {
    standalone: {
      one: 'üks aasta',
      other: '{{count}} aastat'
    },
    withPreposition: {
      one: 'ühe aasta',
      other: '{{count}} aasta'
    }
  },
  overXYears: {
    standalone: {
      one: 'rohkem kui üks aasta',
      other: 'rohkem kui {{count}} aastat'
    },
    withPreposition: {
      one: 'rohkem kui ühe aasta',
      other: 'rohkem kui {{count}} aasta'
    }
  },
  almostXYears: {
    standalone: {
      one: 'peaaegu üks aasta',
      other: 'peaaegu {{count}} aastat'
    },
    withPreposition: {
      one: 'peaaegu ühe aasta',
      other: 'peaaegu {{count}} aasta'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
  var result;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + ' pärast';
    } else {
      return result + ' eest';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2V0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWV0LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd2w6RoZW0ga3VpIMO8a3Mgc2VrdW5kJyxcbiAgICAgIG90aGVyOiAndsOkaGVtIGt1aSB7e2NvdW50fX0gc2VrdW5kaXQnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ3bDpGhlbSBrdWkgw7xoZSBzZWt1bmRpJyxcbiAgICAgIG90aGVyOiAndsOkaGVtIGt1aSB7e2NvdW50fX0gc2VrdW5kaSdcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnw7xrcyBzZWt1bmQnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kaXQnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ8O8aGUgc2VrdW5kaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmRpJ1xuICAgIH1cbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBzdGFuZGFsb25lOiAncG9vbCBtaW51dGl0JyxcbiAgICB3aXRoUHJlcG9zaXRpb246ICdwb29sZSBtaW51dGknXG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd2w6RoZW0ga3VpIMO8a3MgbWludXQnLFxuICAgICAgb3RoZXI6ICd2w6RoZW0ga3VpIHt7Y291bnR9fSBtaW51dGl0J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICd2w6RoZW0ga3VpIMO8aGUgbWludXRpJyxcbiAgICAgIG90aGVyOiAndsOkaGVtIGt1aSB7e2NvdW50fX0gbWludXRpJ1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfDvGtzIG1pbnV0JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0aXQnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ8O8aGUgbWludXRpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0aSdcbiAgICB9XG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAndW1iZXMgw7xrcyB0dW5kJyxcbiAgICAgIG90aGVyOiAndW1iZXMge3tjb3VudH19IHR1bmRpJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICd1bWJlcyDDvGhlIHR1bm5pJyxcbiAgICAgIG90aGVyOiAndW1iZXMge3tjb3VudH19IHR1bm5pJ1xuICAgIH1cbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnw7xrcyB0dW5kJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHR1bmRpJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfDvGhlIHR1bm5pJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHR1bm5pJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfDvGtzIHDDpGV2JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHDDpGV2YSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnw7xoZSBww6RldmEnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gcMOkZXZhJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd1bWJlcyDDvGtzIG7DpGRhbCcsXG4gICAgICBvdGhlcjogJ3VtYmVzIHt7Y291bnR9fSBuw6RkYWxhdCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAndW1iZXMgw7xoZSBuw6RkYWxhJyxcbiAgICAgIG90aGVyOiAndW1iZXMge3tjb3VudH19IG7DpGRhbGEnXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfDvGtzIG7DpGRhbCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBuw6RkYWxhdCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnw7xoZSBuw6RkYWxhJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG7DpGRhbGEnXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd1bWJlcyDDvGtzIGt1dScsXG4gICAgICBvdGhlcjogJ3VtYmVzIHt7Y291bnR9fSBrdXVkJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICd1bWJlcyDDvGhlIGt1dScsXG4gICAgICBvdGhlcjogJ3VtYmVzIHt7Y291bnR9fSBrdXUnXG4gICAgfVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnw7xrcyBrdXUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0ga3V1ZCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnw7xoZSBrdXUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0ga3V1J1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd1bWJlcyDDvGtzIGFhc3RhJyxcbiAgICAgIG90aGVyOiAndW1iZXMge3tjb3VudH19IGFhc3RhdCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAndW1iZXMgw7xoZSBhYXN0YScsXG4gICAgICBvdGhlcjogJ3VtYmVzIHt7Y291bnR9fSBhYXN0YSdcbiAgICB9XG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ8O8a3MgYWFzdGEnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gYWFzdGF0J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfDvGhlIGFhc3RhJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGFhc3RhJ1xuICAgIH1cbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ3JvaGtlbSBrdWkgw7xrcyBhYXN0YScsXG4gICAgICBvdGhlcjogJ3JvaGtlbSBrdWkge3tjb3VudH19IGFhc3RhdCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAncm9oa2VtIGt1aSDDvGhlIGFhc3RhJyxcbiAgICAgIG90aGVyOiAncm9oa2VtIGt1aSB7e2NvdW50fX0gYWFzdGEnXG4gICAgfVxuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdwZWFhZWd1IMO8a3MgYWFzdGEnLFxuICAgICAgb3RoZXI6ICdwZWFhZWd1IHt7Y291bnR9fSBhYXN0YXQnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ3BlYWFlZ3Ugw7xoZSBhYXN0YScsXG4gICAgICBvdGhlcjogJ3BlYWFlZ3Uge3tjb3VudH19IGFhc3RhJ1xuICAgIH1cbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdXNhZ2VHcm91cCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4ID8gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLndpdGhQcmVwb3NpdGlvbiA6IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5zdGFuZGFsb25lO1xuICB2YXIgcmVzdWx0O1xuICBpZiAodHlwZW9mIHVzYWdlR3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cDtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBww6RyYXN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgZWVzdCc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=