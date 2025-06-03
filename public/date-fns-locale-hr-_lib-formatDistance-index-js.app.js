(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hr-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/hr/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/hr/_lib/formatDistance/index.js ***!
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
    one: {
      standalone: 'manje od 1 sekunde',
      withPrepositionAgo: 'manje od 1 sekunde',
      withPrepositionIn: 'manje od 1 sekundu'
    },
    dual: 'manje od {{count}} sekunde',
    other: 'manje od {{count}} sekundi'
  },
  xSeconds: {
    one: {
      standalone: '1 sekunda',
      withPrepositionAgo: '1 sekunde',
      withPrepositionIn: '1 sekundu'
    },
    dual: '{{count}} sekunde',
    other: '{{count}} sekundi'
  },
  halfAMinute: 'pola minute',
  lessThanXMinutes: {
    one: {
      standalone: 'manje od 1 minute',
      withPrepositionAgo: 'manje od 1 minute',
      withPrepositionIn: 'manje od 1 minutu'
    },
    dual: 'manje od {{count}} minute',
    other: 'manje od {{count}} minuta'
  },
  xMinutes: {
    one: {
      standalone: '1 minuta',
      withPrepositionAgo: '1 minute',
      withPrepositionIn: '1 minutu'
    },
    dual: '{{count}} minute',
    other: '{{count}} minuta'
  },
  aboutXHours: {
    one: {
      standalone: 'oko 1 sat',
      withPrepositionAgo: 'oko 1 sat',
      withPrepositionIn: 'oko 1 sat'
    },
    dual: 'oko {{count}} sata',
    other: 'oko {{count}} sati'
  },
  xHours: {
    one: {
      standalone: '1 sat',
      withPrepositionAgo: '1 sat',
      withPrepositionIn: '1 sat'
    },
    dual: '{{count}} sata',
    other: '{{count}} sati'
  },
  xDays: {
    one: {
      standalone: '1 dan',
      withPrepositionAgo: '1 dan',
      withPrepositionIn: '1 dan'
    },
    dual: '{{count}} dana',
    other: '{{count}} dana'
  },
  aboutXWeeks: {
    one: {
      standalone: 'oko 1 tjedan',
      withPrepositionAgo: 'oko 1 tjedan',
      withPrepositionIn: 'oko 1 tjedan'
    },
    dual: 'oko {{count}} tjedna',
    other: 'oko {{count}} tjedana'
  },
  xWeeks: {
    one: {
      standalone: '1 tjedan',
      withPrepositionAgo: '1 tjedan',
      withPrepositionIn: '1 tjedan'
    },
    dual: '{{count}} tjedna',
    other: '{{count}} tjedana'
  },
  aboutXMonths: {
    one: {
      standalone: 'oko 1 mjesec',
      withPrepositionAgo: 'oko 1 mjesec',
      withPrepositionIn: 'oko 1 mjesec'
    },
    dual: 'oko {{count}} mjeseca',
    other: 'oko {{count}} mjeseci'
  },
  xMonths: {
    one: {
      standalone: '1 mjesec',
      withPrepositionAgo: '1 mjesec',
      withPrepositionIn: '1 mjesec'
    },
    dual: '{{count}} mjeseca',
    other: '{{count}} mjeseci'
  },
  aboutXYears: {
    one: {
      standalone: 'oko 1 godinu',
      withPrepositionAgo: 'oko 1 godinu',
      withPrepositionIn: 'oko 1 godinu'
    },
    dual: 'oko {{count}} godine',
    other: 'oko {{count}} godina'
  },
  xYears: {
    one: {
      standalone: '1 godina',
      withPrepositionAgo: '1 godine',
      withPrepositionIn: '1 godinu'
    },
    dual: '{{count}} godine',
    other: '{{count}} godina'
  },
  overXYears: {
    one: {
      standalone: 'preko 1 godinu',
      withPrepositionAgo: 'preko 1 godinu',
      withPrepositionIn: 'preko 1 godinu'
    },
    dual: 'preko {{count}} godine',
    other: 'preko {{count}} godina'
  },
  almostXYears: {
    one: {
      standalone: 'gotovo 1 godinu',
      withPrepositionAgo: 'gotovo 1 godinu',
      withPrepositionIn: 'gotovo 1 godinu'
    },
    dual: 'gotovo {{count}} godine',
    other: 'gotovo {{count}} godina'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        result = tokenValue.one.withPrepositionIn;
      } else {
        result = tokenValue.one.withPrepositionAgo;
      }
    } else {
      result = tokenValue.one.standalone;
    }
  } else if (count % 10 > 1 && count % 10 < 5 &&
  // if last digit is between 2 and 4
  String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
  ) {
    result = tokenValue.dual.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'za ' + result;
    } else {
      return 'prije ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLE9BQU87QUFDN0IsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixPQUFPO0FBQzdCLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQixPQUFPO0FBQzNCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0MsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWhyLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdtYW5qZSBvZCAxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBzZWt1bmRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnbWFuamUgb2QgMSBzZWt1bmR1J1xuICAgIH0sXG4gICAgZHVhbDogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRpJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgc2VrdW5kYScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIHNla3VuZHUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IHNla3VuZGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZGknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAncG9sYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdtYW5qZSBvZCAxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICdtYW5qZSBvZCB7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBtaW51dGEnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIHNhdCdcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHNhdGEnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgc2F0J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzYXRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBkYW4nXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGRhbmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhbmEnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgdGplZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIHRqZWRhbicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIHRqZWRhbidcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHRqZWRuYScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IHRqZWRhbmEnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgdGplZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgdGplZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSB0amVkYW4nXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IHRqZWRuYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGplZGFuYSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgbWplc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIG1qZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIG1qZXNlYydcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IG1qZXNlY2EnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBtamVzZWNpJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBtamVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBtamVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG1qZXNlYydcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gbWplc2VjYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWplc2VjaSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ29rbyB7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIGdvZGluYScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIGdvZGluZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGdvZGluYSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ3ByZWtvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ3ByZWtvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAncHJla28gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAncHJla28ge3tjb3VudH19IGdvZGluZScsXG4gICAgb3RoZXI6ICdwcmVrbyB7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdnb3Rvdm8gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnZ290b3ZvIDEgZ29kaW51JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnZ290b3ZvIDEgZ29kaW51J1xuICAgIH0sXG4gICAgZHVhbDogJ2dvdG92byB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ2dvdG92byB7e2NvdW50fX0gZ29kaW5hJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLndpdGhQcmVwb3NpdGlvbkluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uQWdvO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS5zdGFuZGFsb25lO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb3VudCAlIDEwID4gMSAmJiBjb3VudCAlIDEwIDwgNSAmJlxuICAvLyBpZiBsYXN0IGRpZ2l0IGlzIGJldHdlZW4gMiBhbmQgNFxuICBTdHJpbmcoY291bnQpLnN1YnN0cigtMiwgMSkgIT09ICcxJyAvLyB1bmxlc3MgdGhlIDJuZCB0byBsYXN0IGRpZ2l0IGlzIFwiMVwiXG4gICkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZHVhbC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICd6YSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3ByaWplICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=