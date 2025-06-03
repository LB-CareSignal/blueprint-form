(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-lb-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/lb/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lb/_lib/formatDistance/index.js ***!
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
      one: 'manner wéi eng Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    },
    withPreposition: {
      one: 'manner wéi enger Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    }
  },
  xSeconds: {
    standalone: {
      one: 'eng Sekonn',
      other: '{{count}} Sekonnen'
    },
    withPreposition: {
      one: 'enger Sekonn',
      other: '{{count}} Sekonnen'
    }
  },
  halfAMinute: {
    standalone: 'eng hallef Minutt',
    withPreposition: 'enger hallwer Minutt'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'manner wéi eng Minutt',
      other: 'manner wéi {{count}} Minutten'
    },
    withPreposition: {
      one: 'manner wéi enger Minutt',
      other: 'manner wéi {{count}} Minutten'
    }
  },
  xMinutes: {
    standalone: {
      one: 'eng Minutt',
      other: '{{count}} Minutten'
    },
    withPreposition: {
      one: 'enger Minutt',
      other: '{{count}} Minutten'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'ongeféier eng Stonn',
      other: 'ongeféier {{count}} Stonnen'
    },
    withPreposition: {
      one: 'ongeféier enger Stonn',
      other: 'ongeféier {{count}} Stonnen'
    }
  },
  xHours: {
    standalone: {
      one: 'eng Stonn',
      other: '{{count}} Stonnen'
    },
    withPreposition: {
      one: 'enger Stonn',
      other: '{{count}} Stonnen'
    }
  },
  xDays: {
    standalone: {
      one: 'een Dag',
      other: '{{count}} Deeg'
    },
    withPreposition: {
      one: 'engem Dag',
      other: '{{count}} Deeg'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'ongeféier eng Woch',
      other: 'ongeféier {{count}} Wochen'
    },
    withPreposition: {
      one: 'ongeféier enger Woche',
      other: 'ongeféier {{count}} Wochen'
    }
  },
  xWeeks: {
    standalone: {
      one: 'eng Woch',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: 'enger Woch',
      other: '{{count}} Wochen'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'ongeféier ee Mount',
      other: 'ongeféier {{count}} Méint'
    },
    withPreposition: {
      one: 'ongeféier engem Mount',
      other: 'ongeféier {{count}} Méint'
    }
  },
  xMonths: {
    standalone: {
      one: 'ee Mount',
      other: '{{count}} Méint'
    },
    withPreposition: {
      one: 'engem Mount',
      other: '{{count}} Méint'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'ongeféier ee Joer',
      other: 'ongeféier {{count}} Joer'
    },
    withPreposition: {
      one: 'ongeféier engem Joer',
      other: 'ongeféier {{count}} Joer'
    }
  },
  xYears: {
    standalone: {
      one: 'ee Joer',
      other: '{{count}} Joer'
    },
    withPreposition: {
      one: 'engem Joer',
      other: '{{count}} Joer'
    }
  },
  overXYears: {
    standalone: {
      one: 'méi wéi ee Joer',
      other: 'méi wéi {{count}} Joer'
    },
    withPreposition: {
      one: 'méi wéi engem Joer',
      other: 'méi wéi {{count}} Joer'
    }
  },
  almostXYears: {
    standalone: {
      one: 'bal ee Joer',
      other: 'bal {{count}} Joer'
    },
    withPreposition: {
      one: 'bal engem Joer',
      other: 'bal {{count}} Joer'
    }
  }
};
var EXCEPTION_CONSONANTS = ['d', 'h', 'n', 't', 'z'];
var VOWELS = ['a,', 'e', 'i', 'o', 'u'];
var DIGITS_SPOKEN_N_NEEDED = [0, 1, 2, 3, 8, 9];
var FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED = [40, 50, 60, 70];

// Eifeler Regel
function isFinalNNeeded(nextWords) {
  var firstLetter = nextWords.charAt(0).toLowerCase();
  if (VOWELS.indexOf(firstLetter) != -1 || EXCEPTION_CONSONANTS.indexOf(firstLetter) != -1) {
    return true;
  }

  // Numbers would need to converted into words for checking.
  // Therefore, I have listed the digits that require a preceeding n with a few exceptions.
  var firstWord = nextWords.split(' ')[0];
  var number = parseInt(firstWord);
  if (!isNaN(number) && DIGITS_SPOKEN_N_NEEDED.indexOf(number % 10) != -1 && FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED.indexOf(parseInt(firstWord.substring(0, 2))) == -1) {
    return true;
  }

  // Omit other checks as they are not expected here.
  return false;
}
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? tokenValue.withPreposition : tokenValue.standalone;
  if (typeof usageGroup === 'string') {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'a' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result;
    } else {
      return 'viru' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2xiL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWxiLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdtYW5uZXIgd8OpaSBlbmcgU2Vrb25uJyxcbiAgICAgIG90aGVyOiAnbWFubmVyIHfDqWkge3tjb3VudH19IFNla29ubmVuJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdtYW5uZXIgd8OpaSBlbmdlciBTZWtvbm4nLFxuICAgICAgb3RoZXI6ICdtYW5uZXIgd8OpaSB7e2NvdW50fX0gU2Vrb25uZW4nXG4gICAgfVxuICB9LFxuICB4U2Vjb25kczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2VuZyBTZWtvbm4nLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gU2Vrb25uZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2VuZ2VyIFNla29ubicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBTZWtvbm5lbidcbiAgICB9XG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgc3RhbmRhbG9uZTogJ2VuZyBoYWxsZWYgTWludXR0JyxcbiAgICB3aXRoUHJlcG9zaXRpb246ICdlbmdlciBoYWxsd2VyIE1pbnV0dCdcbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ21hbm5lciB3w6lpIGVuZyBNaW51dHQnLFxuICAgICAgb3RoZXI6ICdtYW5uZXIgd8OpaSB7e2NvdW50fX0gTWludXR0ZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ21hbm5lciB3w6lpIGVuZ2VyIE1pbnV0dCcsXG4gICAgICBvdGhlcjogJ21hbm5lciB3w6lpIHt7Y291bnR9fSBNaW51dHRlbidcbiAgICB9XG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZW5nIE1pbnV0dCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNaW51dHRlbidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZXIgTWludXR0JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE1pbnV0dGVuJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdvbmdlZsOpaWVyIGVuZyBTdG9ubicsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IFN0b25uZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ29uZ2Vmw6lpZXIgZW5nZXIgU3Rvbm4nLFxuICAgICAgb3RoZXI6ICdvbmdlZsOpaWVyIHt7Y291bnR9fSBTdG9ubmVuJ1xuICAgIH1cbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnZW5nIFN0b25uJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFN0b25uZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2VuZ2VyIFN0b25uJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IFN0b25uZW4nXG4gICAgfVxuICB9LFxuICB4RGF5czoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2VlbiBEYWcnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gRGVlZydcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZW0gRGFnJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IERlZWcnXG4gICAgfVxuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ29uZ2Vmw6lpZXIgZW5nIFdvY2gnLFxuICAgICAgb3RoZXI6ICdvbmdlZsOpaWVyIHt7Y291bnR9fSBXb2NoZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ29uZ2Vmw6lpZXIgZW5nZXIgV29jaGUnLFxuICAgICAgb3RoZXI6ICdvbmdlZsOpaWVyIHt7Y291bnR9fSBXb2NoZW4nXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdlbmcgV29jaCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBXb2NoZW4nXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2VuZ2VyIFdvY2gnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gV29jaGVuJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlZSBNb3VudCcsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IE3DqWludCdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlbmdlbSBNb3VudCcsXG4gICAgICBvdGhlcjogJ29uZ2Vmw6lpZXIge3tjb3VudH19IE3DqWludCdcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICdlZSBNb3VudCcsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBNw6lpbnQnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ2VuZ2VtIE1vdW50JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IE3DqWludCdcbiAgICB9XG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlZSBKb2VyJyxcbiAgICAgIG90aGVyOiAnb25nZWbDqWllciB7e2NvdW50fX0gSm9lcidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnb25nZWbDqWllciBlbmdlbSBKb2VyJyxcbiAgICAgIG90aGVyOiAnb25nZWbDqWllciB7e2NvdW50fX0gSm9lcidcbiAgICB9XG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2VlIEpvZXInLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gSm9lcidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAnZW5nZW0gSm9lcicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBKb2VyJ1xuICAgIH1cbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ23DqWkgd8OpaSBlZSBKb2VyJyxcbiAgICAgIG90aGVyOiAnbcOpaSB3w6lpIHt7Y291bnR9fSBKb2VyJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdtw6lpIHfDqWkgZW5nZW0gSm9lcicsXG4gICAgICBvdGhlcjogJ23DqWkgd8OpaSB7e2NvdW50fX0gSm9lcidcbiAgICB9XG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ2JhbCBlZSBKb2VyJyxcbiAgICAgIG90aGVyOiAnYmFsIHt7Y291bnR9fSBKb2VyJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICdiYWwgZW5nZW0gSm9lcicsXG4gICAgICBvdGhlcjogJ2JhbCB7e2NvdW50fX0gSm9lcidcbiAgICB9XG4gIH1cbn07XG52YXIgRVhDRVBUSU9OX0NPTlNPTkFOVFMgPSBbJ2QnLCAnaCcsICduJywgJ3QnLCAneiddO1xudmFyIFZPV0VMUyA9IFsnYSwnLCAnZScsICdpJywgJ28nLCAndSddO1xudmFyIERJR0lUU19TUE9LRU5fTl9ORUVERUQgPSBbMCwgMSwgMiwgMywgOCwgOV07XG52YXIgRklSU1RfVFdPX0RJR0lUU19TUE9LRU5fTk9fTl9ORUVERUQgPSBbNDAsIDUwLCA2MCwgNzBdO1xuXG4vLyBFaWZlbGVyIFJlZ2VsXG5mdW5jdGlvbiBpc0ZpbmFsTk5lZWRlZChuZXh0V29yZHMpIHtcbiAgdmFyIGZpcnN0TGV0dGVyID0gbmV4dFdvcmRzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoVk9XRUxTLmluZGV4T2YoZmlyc3RMZXR0ZXIpICE9IC0xIHx8IEVYQ0VQVElPTl9DT05TT05BTlRTLmluZGV4T2YoZmlyc3RMZXR0ZXIpICE9IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBOdW1iZXJzIHdvdWxkIG5lZWQgdG8gY29udmVydGVkIGludG8gd29yZHMgZm9yIGNoZWNraW5nLlxuICAvLyBUaGVyZWZvcmUsIEkgaGF2ZSBsaXN0ZWQgdGhlIGRpZ2l0cyB0aGF0IHJlcXVpcmUgYSBwcmVjZWVkaW5nIG4gd2l0aCBhIGZldyBleGNlcHRpb25zLlxuICB2YXIgZmlyc3RXb3JkID0gbmV4dFdvcmRzLnNwbGl0KCcgJylbMF07XG4gIHZhciBudW1iZXIgPSBwYXJzZUludChmaXJzdFdvcmQpO1xuICBpZiAoIWlzTmFOKG51bWJlcikgJiYgRElHSVRTX1NQT0tFTl9OX05FRURFRC5pbmRleE9mKG51bWJlciAlIDEwKSAhPSAtMSAmJiBGSVJTVF9UV09fRElHSVRTX1NQT0tFTl9OT19OX05FRURFRC5pbmRleE9mKHBhcnNlSW50KGZpcnN0V29yZC5zdWJzdHJpbmcoMCwgMikpKSA9PSAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gT21pdCBvdGhlciBjaGVja3MgYXMgdGhleSBhcmUgbm90IGV4cGVjdGVkIGhlcmUuXG4gIHJldHVybiBmYWxzZTtcbn1cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgdmFyIHVzYWdlR3JvdXAgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCA/IHRva2VuVmFsdWUud2l0aFByZXBvc2l0aW9uIDogdG9rZW5WYWx1ZS5zdGFuZGFsb25lO1xuICBpZiAodHlwZW9mIHVzYWdlR3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdXNhZ2VHcm91cDtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHVzYWdlR3JvdXAub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2EnICsgKGlzRmluYWxOTmVlZGVkKHJlc3VsdCkgPyAnbicgOiAnJykgKyAnICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndmlydScgKyAoaXNGaW5hbE5OZWVkZWQocmVzdWx0KSA/ICduJyA6ICcnKSArICcgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==