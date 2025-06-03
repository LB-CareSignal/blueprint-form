(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bs-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/bs/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bs/_lib/formatDistance/index.js ***!
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
      standalone: 'oko 1 sedmicu',
      withPrepositionAgo: 'oko 1 sedmicu',
      withPrepositionIn: 'oko 1 sedmicu'
    },
    dual: 'oko {{count}} sedmice',
    other: 'oko {{count}} sedmice'
  },
  xWeeks: {
    one: {
      standalone: '1 sedmicu',
      withPrepositionAgo: '1 sedmicu',
      withPrepositionIn: '1 sedmicu'
    },
    dual: '{{count}} sedmice',
    other: '{{count}} sedmice'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLE9BQU87QUFDN0IsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixPQUFPO0FBQzdCLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQixPQUFPO0FBQzNCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0MsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJzLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdtYW5qZSBvZCAxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBzZWt1bmRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnbWFuamUgb2QgMSBzZWt1bmR1J1xuICAgIH0sXG4gICAgZHVhbDogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBzZWt1bmRpJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgc2VrdW5kYScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNla3VuZGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIHNla3VuZHUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IHNla3VuZGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZGknXG4gIH0sXG4gIGhhbGZBTWludXRlOiAncG9sYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnbWFuamUgb2QgMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdtYW5qZSBvZCAxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICdtYW5qZSBvZCB7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ21hbmplIG9kIHt7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBtaW51dGEnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBtaW51dGUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIG1pbnV0dSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGEnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgc2F0JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ29rbyAxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIHNhdCdcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHNhdGEnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgc2F0J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzYXRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzYXRpJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZGFuJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBkYW4nXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGRhbmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRhbmEnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgc2VkbWljdScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBzZWRtaWN1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgc2VkbWljdSdcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IHNlZG1pY2UnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBzZWRtaWNlJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNlZG1pY3UnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBzZWRtaWN1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBzZWRtaWN1J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzZWRtaWNlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWRtaWNlJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICdva28gMSBtamVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgbWplc2VjJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnb2tvIDEgbWplc2VjJ1xuICAgIH0sXG4gICAgZHVhbDogJ29rbyB7e2NvdW50fX0gbWplc2VjYScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IG1qZXNlY2knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIG1qZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIG1qZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgbWplc2VjJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBtamVzZWNhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtamVzZWNpJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZ29kaW5hJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZ29kaW5lJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGdvZGluZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdwcmVrbyAxIGdvZGludSdcbiAgICB9LFxuICAgIGR1YWw6ICdwcmVrbyB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ3ByZWtvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ2dvdG92byAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdnb3Rvdm8gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdnb3Rvdm8gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uSW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS53aXRoUHJlcG9zaXRpb25BZ287XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLnN0YW5kYWxvbmU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvdW50ICUgMTAgPiAxICYmIGNvdW50ICUgMTAgPCA1ICYmXG4gIC8vIGlmIGxhc3QgZGlnaXQgaXMgYmV0d2VlbiAyIGFuZCA0XG4gIFN0cmluZyhjb3VudCkuc3Vic3RyKC0yLCAxKSAhPT0gJzEnIC8vIHVubGVzcyB0aGUgMm5kIHRvIGxhc3QgZGlnaXQgaXMgXCIxXCJcbiAgKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5kdWFsLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ3phICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncHJpamUgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==