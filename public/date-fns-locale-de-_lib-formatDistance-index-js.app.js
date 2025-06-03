(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-de-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/de/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/de/_lib/formatDistance/index.js ***!
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
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    },
    withPreposition: {
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    }
  },
  xSeconds: {
    standalone: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    },
    withPreposition: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    }
  },
  halfAMinute: {
    standalone: 'halbe Minute',
    withPreposition: 'halben Minute'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    },
    withPreposition: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    }
  },
  xMinutes: {
    standalone: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    },
    withPreposition: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    },
    withPreposition: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    }
  },
  xHours: {
    standalone: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    },
    withPreposition: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    }
  },
  xDays: {
    standalone: {
      one: '1 Tag',
      other: '{{count}} Tage'
    },
    withPreposition: {
      one: '1 Tag',
      other: '{{count}} Tagen'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    },
    withPreposition: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    }
  },
  xWeeks: {
    standalone: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monate'
    },
    withPreposition: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monaten'
    }
  },
  xMonths: {
    standalone: {
      one: '1 Monat',
      other: '{{count}} Monate'
    },
    withPreposition: {
      one: '1 Monat',
      other: '{{count}} Monaten'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahre'
    },
    withPreposition: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahren'
    }
  },
  xYears: {
    standalone: {
      one: '1 Jahr',
      other: '{{count}} Jahre'
    },
    withPreposition: {
      one: '1 Jahr',
      other: '{{count}} Jahren'
    }
  },
  overXYears: {
    standalone: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahre'
    },
    withPreposition: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahren'
    }
  },
  almostXYears: {
    standalone: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahre'
    },
    withPreposition: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahren'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return 'vor ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2RlL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWRlLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd3ZW5pZ2VyIGFscyAxIFNla3VuZGUnLFxuICAgICAgb3RoZXI6ICd3ZW5pZ2VyIGFscyB7e2NvdW50fX0gU2VrdW5kZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ3dlbmlnZXIgYWxzIDEgU2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3dlbmlnZXIgYWxzIHt7Y291bnR9fSBTZWt1bmRlbidcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnMSBTZWt1bmRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFNla3VuZGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICcxIFNla3VuZGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gU2VrdW5kZW4nXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZToge1xuICAgIHN0YW5kYWxvbmU6ICdoYWxiZSBNaW51dGUnLFxuICAgIHdpdGhQcmVwb3NpdGlvbjogJ2hhbGJlbiBNaW51dGUnXG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICd3ZW5pZ2VyIGFscyAxIE1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3dlbmlnZXIgYWxzIHt7Y291bnR9fSBNaW51dGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICd3ZW5pZ2VyIGFscyAxIE1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3dlbmlnZXIgYWxzIHt7Y291bnR9fSBNaW51dGVuJ1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIE1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNaW51dGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICcxIE1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNaW51dGVuJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdldHdhIDEgU3R1bmRlJyxcbiAgICAgIG90aGVyOiAnZXR3YSB7e2NvdW50fX0gU3R1bmRlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZXR3YSAxIFN0dW5kZScsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IFN0dW5kZW4nXG4gICAgfVxuICB9LFxuICB4SG91cnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIFN0dW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBTdHVuZGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICcxIFN0dW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBTdHVuZGVuJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIFRhZycsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBUYWdlJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICcxIFRhZycsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBUYWdlbidcbiAgICB9XG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZXR3YSAxIFdvY2hlJyxcbiAgICAgIG90aGVyOiAnZXR3YSB7e2NvdW50fX0gV29jaGVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdldHdhIDEgV29jaGUnLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBXb2NoZW4nXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIFdvY2hlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFdvY2hlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnMSBXb2NoZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBXb2NoZW4nXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdldHdhIDEgTW9uYXQnLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBNb25hdGUnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2V0d2EgMSBNb25hdCcsXG4gICAgICBvdGhlcjogJ2V0d2Ege3tjb3VudH19IE1vbmF0ZW4nXG4gICAgfVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnMSBNb25hdCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNb25hdGUnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgTW9uYXQnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gTW9uYXRlbidcbiAgICB9XG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZXR3YSAxIEphaHInLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBKYWhyZSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZXR3YSAxIEphaHInLFxuICAgICAgb3RoZXI6ICdldHdhIHt7Y291bnR9fSBKYWhyZW4nXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICcxIEphaHInLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gSmFocmUnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJzEgSmFocicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBKYWhyZW4nXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnbWVociBhbHMgMSBKYWhyJyxcbiAgICAgIG90aGVyOiAnbWVociBhbHMge3tjb3VudH19IEphaHJlJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdtZWhyIGFscyAxIEphaHInLFxuICAgICAgb3RoZXI6ICdtZWhyIGFscyB7e2NvdW50fX0gSmFocmVuJ1xuICAgIH1cbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZmFzdCAxIEphaHInLFxuICAgICAgb3RoZXI6ICdmYXN0IHt7Y291bnR9fSBKYWhyZSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZmFzdCAxIEphaHInLFxuICAgICAgb3RoZXI6ICdmYXN0IHt7Y291bnR9fSBKYWhyZW4nXG4gICAgfVxuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXggPyBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ud2l0aFByZXBvc2l0aW9uIDogZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLnN0YW5kYWxvbmU7XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd2b3IgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==