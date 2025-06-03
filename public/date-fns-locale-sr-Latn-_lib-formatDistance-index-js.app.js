(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-Latn-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sr-Latn/_lib/formatDistance/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr-Latn/_lib/formatDistance/index.js ***!
  \***************************************************************************/
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
      standalone: 'oko 1 nedelju',
      withPrepositionAgo: 'oko 1 nedelju',
      withPrepositionIn: 'oko 1 nedelju'
    },
    dual: 'oko {{count}} nedelje',
    other: 'oko {{count}} nedelje'
  },
  xWeeks: {
    one: {
      standalone: '1 nedelju',
      withPrepositionAgo: '1 nedelju',
      withPrepositionIn: '1 nedelju'
    },
    dual: '{{count}} nedelje',
    other: '{{count}} nedelje'
  },
  aboutXMonths: {
    one: {
      standalone: 'oko 1 mesec',
      withPrepositionAgo: 'oko 1 mesec',
      withPrepositionIn: 'oko 1 mesec'
    },
    dual: 'oko {{count}} meseca',
    other: 'oko {{count}} meseci'
  },
  xMonths: {
    one: {
      standalone: '1 mesec',
      withPrepositionAgo: '1 mesec',
      withPrepositionIn: '1 mesec'
    },
    dual: '{{count}} meseca',
    other: '{{count}} meseci'
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
      return 'pre ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyLUxhdG4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsT0FBTztBQUM3Qix1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLE9BQU87QUFDN0IsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLE9BQU87QUFDM0IscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQyxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc3ItTGF0bi1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnbWFuamUgb2QgMSBzZWt1bmRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ21hbmplIG9kIDEgc2VrdW5kZScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ21hbmplIG9kIDEgc2VrdW5kdSdcbiAgICB9LFxuICAgIGR1YWw6ICdtYW5qZSBvZCB7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgb3RoZXI6ICdtYW5qZSBvZCB7e2NvdW50fX0gc2VrdW5kaSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIHNla3VuZGEnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBzZWt1bmRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBzZWt1bmR1J1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBzZWt1bmRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmRpJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3BvbGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ21hbmplIG9kIDEgbWludXRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ21hbmplIG9kIDEgbWludXRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnbWFuamUgb2QgMSBtaW51dHUnXG4gICAgfSxcbiAgICBkdWFsOiAnbWFuamUgb2Qge3tjb3VudH19IG1pbnV0ZScsXG4gICAgb3RoZXI6ICdtYW5qZSBvZCB7e2NvdW50fX0gbWludXRhJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgbWludXRhJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgbWludXRlJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBtaW51dHUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRhJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIHNhdCcsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBzYXQnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBzYXQnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBzYXRhJyxcbiAgICBvdGhlcjogJ29rbyB7e2NvdW50fX0gc2F0aSdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBzYXQnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBzYXQnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxIHNhdCdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gc2F0YScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2F0aSdcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxIGRhbicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxIGRhbicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgZGFuJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSBkYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYW5hJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIG5lZGVsanUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgbmVkZWxqdScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ29rbyAxIG5lZGVsanUnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBuZWRlbGplJyxcbiAgICBvdGhlcjogJ29rbyB7e2NvdW50fX0gbmVkZWxqZSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSBuZWRlbGp1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgbmVkZWxqdScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgbmVkZWxqdSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0gbmVkZWxqZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbmVkZWxqZSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnb2tvIDEgbWVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnb2tvIDEgbWVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBtZXNlYydcbiAgICB9LFxuICAgIGR1YWw6ICdva28ge3tjb3VudH19IG1lc2VjYScsXG4gICAgb3RoZXI6ICdva28ge3tjb3VudH19IG1lc2VjaSdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgbWVzZWMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSBtZXNlYycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEgbWVzZWMnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IG1lc2VjYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzZWNpJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ29rbyAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdva28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdva28gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnb2tvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnb2tvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEgZ29kaW5hJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEgZ29kaW5lJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19IGdvZGluZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ29kaW5hJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAncHJla28gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdwcmVrbyAxIGdvZGludSdcbiAgICB9LFxuICAgIGR1YWw6ICdwcmVrbyB7e2NvdW50fX0gZ29kaW5lJyxcbiAgICBvdGhlcjogJ3ByZWtvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ2dvdG92byAxIGdvZGludScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICdnb3Rvdm8gMSBnb2RpbnUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICdnb3Rvdm8gMSBnb2RpbnUnXG4gICAgfSxcbiAgICBkdWFsOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmUnLFxuICAgIG90aGVyOiAnZ290b3ZvIHt7Y291bnR9fSBnb2RpbmEnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uSW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS53aXRoUHJlcG9zaXRpb25BZ287XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLnN0YW5kYWxvbmU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvdW50ICUgMTAgPiAxICYmIGNvdW50ICUgMTAgPCA1ICYmXG4gIC8vIGlmIGxhc3QgZGlnaXQgaXMgYmV0d2VlbiAyIGFuZCA0XG4gIFN0cmluZyhjb3VudCkuc3Vic3RyKC0yLCAxKSAhPT0gJzEnIC8vIHVubGVzcyB0aGUgMm5kIHRvIGxhc3QgZGlnaXQgaXMgXCIxXCJcbiAgKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5kdWFsLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ3phICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncHJlICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=