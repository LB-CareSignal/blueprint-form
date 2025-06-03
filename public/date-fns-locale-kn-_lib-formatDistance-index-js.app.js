(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-kn-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/kn/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/kn/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// note: no implementation for weeks

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: '1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ',
      future: '1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ',
      past: '1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ'
    },
    other: {
      default: '{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ',
      future: '{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ',
      past: '{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ'
    }
  },
  xSeconds: {
    one: {
      default: '1 ಸೆಕೆಂಡ್',
      future: '1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ',
      past: '1 ಸೆಕೆಂಡ್ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ಸೆಕೆಂಡುಗಳು',
      future: '{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ',
      past: '{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ'
    }
  },
  halfAMinute: {
    other: {
      default: 'ಅರ್ಧ ನಿಮಿಷ',
      future: 'ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ',
      past: 'ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ'
    }
  },
  lessThanXMinutes: {
    one: {
      default: '1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ',
      future: '1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ',
      past: '1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ'
    },
    other: {
      default: '{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ',
      future: '{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ',
      past: '{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ'
    }
  },
  xMinutes: {
    one: {
      default: '1 ನಿಮಿಷ',
      future: '1 ನಿಮಿಷದಲ್ಲಿ',
      past: '1 ನಿಮಿಷದ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ನಿಮಿಷಗಳು',
      future: '{{count}} ನಿಮಿಷಗಳಲ್ಲಿ',
      past: '{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ'
    }
  },
  aboutXHours: {
    one: {
      default: 'ಸುಮಾರು 1 ಗಂಟೆ',
      future: 'ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ',
      past: 'ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ'
    },
    other: {
      default: 'ಸುಮಾರು {{count}} ಗಂಟೆಗಳು',
      future: 'ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ',
      past: 'ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ'
    }
  },
  xHours: {
    one: {
      default: '1 ಗಂಟೆ',
      future: '1 ಗಂಟೆಯಲ್ಲಿ',
      past: '1 ಗಂಟೆ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ಗಂಟೆಗಳು',
      future: '{{count}} ಗಂಟೆಗಳಲ್ಲಿ',
      past: '{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ'
    }
  },
  xDays: {
    one: {
      default: '1 ದಿನ',
      future: '1 ದಿನದಲ್ಲಿ',
      past: '1 ದಿನದ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ದಿನಗಳು',
      future: '{{count}} ದಿನಗಳಲ್ಲಿ',
      past: '{{count}} ದಿನಗಳ ಹಿಂದೆ'
    }
  },
  // TODO
  // aboutXWeeks: {},

  // TODO
  // xWeeks: {},

  aboutXMonths: {
    one: {
      default: 'ಸುಮಾರು 1 ತಿಂಗಳು',
      future: 'ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ',
      past: 'ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ'
    },
    other: {
      default: 'ಸುಮಾರು {{count}} ತಿಂಗಳು',
      future: 'ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ',
      past: 'ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ'
    }
  },
  xMonths: {
    one: {
      default: '1 ತಿಂಗಳು',
      future: '1 ತಿಂಗಳಲ್ಲಿ',
      past: '1 ತಿಂಗಳ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ತಿಂಗಳು',
      future: '{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ',
      past: '{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ'
    }
  },
  aboutXYears: {
    one: {
      default: 'ಸುಮಾರು 1 ವರ್ಷ',
      future: 'ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ',
      past: 'ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ'
    },
    other: {
      default: 'ಸುಮಾರು {{count}} ವರ್ಷಗಳು',
      future: 'ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ',
      past: 'ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ'
    }
  },
  xYears: {
    one: {
      default: '1 ವರ್ಷ',
      future: '1 ವರ್ಷದಲ್ಲಿ',
      past: '1 ವರ್ಷದ ಹಿಂದೆ'
    },
    other: {
      default: '{{count}} ವರ್ಷಗಳು',
      future: '{{count}} ವರ್ಷಗಳಲ್ಲಿ',
      past: '{{count}} ವರ್ಷಗಳ ಹಿಂದೆ'
    }
  },
  overXYears: {
    one: {
      default: '1 ವರ್ಷದ ಮೇಲೆ',
      future: '1 ವರ್ಷದ ಮೇಲೆ',
      past: '1 ವರ್ಷದ ಮೇಲೆ'
    },
    other: {
      default: '{{count}} ವರ್ಷಗಳ ಮೇಲೆ',
      future: '{{count}} ವರ್ಷಗಳ ಮೇಲೆ',
      past: '{{count}} ವರ್ಷಗಳ ಮೇಲೆ'
    }
  },
  almostXYears: {
    one: {
      default: 'ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ',
      future: 'ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ',
      past: 'ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ'
    },
    other: {
      default: 'ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ',
      future: 'ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ',
      past: 'ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ'
    }
  }
};
function getResultByTense(parentToken, options) {
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return parentToken.future;
    } else {
      return parentToken.past;
    }
  }
  return parentToken.default;
}
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (tokenValue.one && count === 1) {
    result = getResultByTense(tokenValue.one, options);
  } else {
    result = getResultByTense(tokenValue.other, options);
  }
  return result.replace('{{count}}', String(count));
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2tuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixpQkFBaUIsT0FBTztBQUN4QixlQUFlLE9BQU87QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGlCQUFpQixPQUFPO0FBQ3hCLGVBQWUsT0FBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGlCQUFpQixPQUFPO0FBQ3hCLGVBQWUsT0FBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsaUJBQWlCLE9BQU87QUFDeEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyx3QkFBd0IsT0FBTztBQUMvQixzQkFBc0IsT0FBTztBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsaUJBQWlCLE9BQU87QUFDeEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixpQkFBaUIsT0FBTztBQUN4QixlQUFlLE9BQU87QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsd0JBQXdCLE9BQU87QUFDL0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGlCQUFpQixPQUFPO0FBQ3hCLGVBQWUsT0FBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsd0JBQXdCLE9BQU87QUFDL0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGlCQUFpQixPQUFPO0FBQ3hCLGVBQWUsT0FBTztBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsaUJBQWlCLE9BQU87QUFDeEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyx3QkFBd0IsT0FBTztBQUMvQixzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWtuLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vLyBub3RlOiBubyBpbXBsZW1lbnRhdGlvbiBmb3Igd2Vla3NcblxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgsrjgs4bgspXgs4bgsoLgsqHgs43igIzgspfgsr/gsoLgsqQg4LKV4LKh4LK/4LKu4LOGJyxcbiAgICAgIGZ1dHVyZTogJzEg4LK44LOG4LKV4LOG4LKC4LKh4LON4oCM4LKX4LK/4LKC4LKkIOCyleCyoeCyv+CyruCzhicsXG4gICAgICBwYXN0OiAnMSDgsrjgs4bgspXgs4bgsoLgsqHgs43igIzgspfgsr/gsoLgsqQg4LKV4LKh4LK/4LKu4LOGJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGRlZmF1bHQ6ICd7e2NvdW50fX0g4LK44LOG4LKV4LOG4LKC4LKh4LON4oCM4LKX4LK/4LKC4LKkIOCyleCyoeCyv+CyruCzhicsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0g4LK44LOG4LKV4LOG4LKC4LKh4LON4oCM4LKX4LK/4LKC4LKkIOCyleCyoeCyv+CyruCzhicsXG4gICAgICBwYXN0OiAne3tjb3VudH19IOCyuOCzhuCyleCzhuCyguCyoeCzjeKAjOCyl+Cyv+CyguCypCDgspXgsqHgsr/gsq7gs4YnXG4gICAgfVxuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJzEg4LK44LOG4LKV4LOG4LKC4LKh4LONJyxcbiAgICAgIGZ1dHVyZTogJzEg4LK44LOG4LKV4LOG4LKC4LKh4LON4oCM4LKo4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICcxIOCyuOCzhuCyleCzhuCyguCyoeCzjSDgsrngsr/gsoLgsqbgs4YnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgsrjgs4bgspXgs4bgsoLgsqHgs4HgspfgsrPgs4EnLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IOCyuOCzhuCyleCzhuCyguCyoeCzjeKAjOCyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAne3tjb3VudH19IOCyuOCzhuCyleCzhuCyguCyoeCzjSDgsrngsr/gsoLgsqbgs4YnXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZToge1xuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4LKF4LKw4LON4LKnIOCyqOCyv+CyruCyv+CytycsXG4gICAgICBmdXR1cmU6ICfgsoXgsrDgs43gsqcg4LKo4LK/4LKu4LK/4LK34LKm4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICfgsoXgsrDgs43gsqcg4LKo4LK/4LKu4LK/4LK34LKmIOCyueCyv+CyguCypuCzhidcbiAgICB9XG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCyqOCyv+CyruCyv+Cyt+CyleCzjeCyleCyv+CyguCypCDgspXgsqHgsr/gsq7gs4YnLFxuICAgICAgZnV0dXJlOiAnMSDgsqjgsr/gsq7gsr/gsrfgspXgs43gspXgsr/gsoLgsqQg4LKV4LKh4LK/4LKu4LOGJyxcbiAgICAgIHBhc3Q6ICcxIOCyqOCyv+CyruCyv+Cyt+CyleCzjeCyleCyv+CyguCypCDgspXgsqHgsr/gsq7gs4YnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgsqjgsr/gsq7gsr/gsrfgspXgs43gspXgsr/gsoLgsqQg4LKV4LKh4LK/4LKu4LOGJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDgsqjgsr/gsq7gsr/gsrfgspXgs43gspXgsr/gsoLgsqQg4LKV4LKh4LK/4LKu4LOGJyxcbiAgICAgIHBhc3Q6ICd7e2NvdW50fX0g4LKo4LK/4LKu4LK/4LK34LKV4LON4LKV4LK/4LKC4LKkIOCyleCyoeCyv+CyruCzhidcbiAgICB9XG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgsqjgsr/gsq7gsr/gsrcnLFxuICAgICAgZnV0dXJlOiAnMSDgsqjgsr/gsq7gsr/gsrfgsqbgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJzEg4LKo4LK/4LKu4LK/4LK34LKmIOCyueCyv+CyguCypuCzhidcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCyqOCyv+CyruCyv+Cyt+Cyl+Cys+CzgScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0g4LKo4LK/4LKu4LK/4LK34LKX4LKz4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICd7e2NvdW50fX0g4LKo4LK/4LKu4LK/4LK34LKX4LKzIOCyueCyv+CyguCypuCzhidcbiAgICB9XG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAn4LK44LOB4LKu4LK+4LKw4LOBIDEg4LKX4LKC4LKf4LOGJyxcbiAgICAgIGZ1dHVyZTogJ+CyuOCzgeCyruCyvuCysOCzgSAxIOCyl+CyguCyn+CzhuCyr+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAn4LK44LOB4LKu4LK+4LKw4LOBIDEg4LKX4LKC4LKf4LOGIOCyueCyv+CyguCypuCzhidcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4LK44LOB4LKu4LK+4LKw4LOBIHt7Y291bnR9fSDgspfgsoLgsp/gs4bgspfgsrPgs4EnLFxuICAgICAgZnV0dXJlOiAn4LK44LOB4LKu4LK+4LKw4LOBIHt7Y291bnR9fSDgspfgsoLgsp/gs4bgspfgsrPgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJ+CyuOCzgeCyruCyvuCysOCzgSB7e2NvdW50fX0g4LKX4LKC4LKf4LOG4LKX4LKzIOCyueCyv+CyguCypuCzhidcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJzEg4LKX4LKC4LKf4LOGJyxcbiAgICAgIGZ1dHVyZTogJzEg4LKX4LKC4LKf4LOG4LKv4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICcxIOCyl+CyguCyn+CzhiDgsrngsr/gsoLgsqbgs4YnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgspfgsoLgsp/gs4bgspfgsrPgs4EnLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IOCyl+CyguCyn+CzhuCyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAne3tjb3VudH19IOCyl+CyguCyn+CzhuCyl+CysyDgsrngsr/gsoLgsqbgs4YnXG4gICAgfVxuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJzEg4LKm4LK/4LKoJyxcbiAgICAgIGZ1dHVyZTogJzEg4LKm4LK/4LKo4LKm4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICcxIOCypuCyv+CyqOCypiDgsrngsr/gsoLgsqbgs4YnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgsqbgsr/gsqjgspfgsrPgs4EnLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IOCypuCyv+CyqOCyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAne3tjb3VudH19IOCypuCyv+CyqOCyl+CysyDgsrngsr/gsoLgsqbgs4YnXG4gICAgfVxuICB9LFxuICAvLyBUT0RPXG4gIC8vIGFib3V0WFdlZWtzOiB7fSxcblxuICAvLyBUT0RPXG4gIC8vIHhXZWVrczoge30sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAn4LK44LOB4LKu4LK+4LKw4LOBIDEg4LKk4LK/4LKC4LKX4LKz4LOBJyxcbiAgICAgIGZ1dHVyZTogJ+CyuOCzgeCyruCyvuCysOCzgSAxIOCypOCyv+CyguCyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAn4LK44LOB4LKu4LK+4LKw4LOBIDEg4LKk4LK/4LKC4LKX4LKzIOCyueCyv+CyguCypuCzhidcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4LK44LOB4LKu4LK+4LKw4LOBIHt7Y291bnR9fSDgsqTgsr/gsoLgspfgsrPgs4EnLFxuICAgICAgZnV0dXJlOiAn4LK44LOB4LKu4LK+4LKw4LOBIHt7Y291bnR9fSDgsqTgsr/gsoLgspfgsrPgs4HgspfgsrPgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJ+CyuOCzgeCyruCyvuCysOCzgSB7e2NvdW50fX0g4LKk4LK/4LKC4LKX4LKz4LOB4LKX4LKzIOCyueCyv+CyguCypuCzhidcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCypOCyv+CyguCyl+Cys+CzgScsXG4gICAgICBmdXR1cmU6ICcxIOCypOCyv+CyguCyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAnMSDgsqTgsr/gsoLgspfgsrMg4LK54LK/4LKC4LKm4LOGJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGRlZmF1bHQ6ICd7e2NvdW50fX0g4LKk4LK/4LKC4LKX4LKz4LOBJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDgsqTgsr/gsoLgspfgsrPgs4HgspfgsrPgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSDgsqTgsr/gsoLgspfgsrPgs4HgspfgsrMg4LK54LK/4LKC4LKm4LOGJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICfgsrjgs4Hgsq7gsr7gsrDgs4EgMSDgsrXgsrDgs43gsrcnLFxuICAgICAgZnV0dXJlOiAn4LK44LOB4LKu4LK+4LKw4LOBIDEg4LK14LKw4LON4LK34LKm4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICfgsrjgs4Hgsq7gsr7gsrDgs4EgMSDgsrXgsrDgs43gsrfgsqYg4LK54LK/4LKC4LKm4LOGJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGRlZmF1bHQ6ICfgsrjgs4Hgsq7gsr7gsrDgs4Ege3tjb3VudH19IOCyteCysOCzjeCyt+Cyl+Cys+CzgScsXG4gICAgICBmdXR1cmU6ICfgsrjgs4Hgsq7gsr7gsrDgs4Ege3tjb3VudH19IOCyteCysOCzjeCyt+Cyl+Cys+CysuCzjeCysuCyvycsXG4gICAgICBwYXN0OiAn4LK44LOB4LKu4LK+4LKw4LOBIHt7Y291bnR9fSDgsrXgsrDgs43gsrfgspfgsrMg4LK54LK/4LKC4LKm4LOGJ1xuICAgIH1cbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgsrXgsrDgs43gsrcnLFxuICAgICAgZnV0dXJlOiAnMSDgsrXgsrDgs43gsrfgsqbgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJzEg4LK14LKw4LON4LK34LKmIOCyueCyv+CyguCypuCzhidcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCyteCysOCzjeCyt+Cyl+Cys+CzgScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0g4LK14LKw4LON4LK34LKX4LKz4LKy4LON4LKy4LK/JyxcbiAgICAgIHBhc3Q6ICd7e2NvdW50fX0g4LK14LKw4LON4LK34LKX4LKzIOCyueCyv+CyguCypuCzhidcbiAgICB9XG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCyteCysOCzjeCyt+CypiDgsq7gs4fgsrLgs4YnLFxuICAgICAgZnV0dXJlOiAnMSDgsrXgsrDgs43gsrfgsqYg4LKu4LOH4LKy4LOGJyxcbiAgICAgIHBhc3Q6ICcxIOCyteCysOCzjeCyt+CypiDgsq7gs4fgsrLgs4YnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgsrXgsrDgs43gsrfgspfgsrMg4LKu4LOH4LKy4LOGJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSDgsrXgsrDgs43gsrfgspfgsrMg4LKu4LOH4LKy4LOGJyxcbiAgICAgIHBhc3Q6ICd7e2NvdW50fX0g4LK14LKw4LON4LK34LKX4LKzIOCyruCzh+CysuCzhidcbiAgICB9XG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJ+CyrOCyueCzgeCypOCzh+CylSAxIOCyteCysOCzjeCyt+CypuCysuCzjeCysuCyvycsXG4gICAgICBmdXR1cmU6ICfgsqzgsrngs4HgsqTgs4fgspUgMSDgsrXgsrDgs43gsrfgsqbgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJ+CyrOCyueCzgeCypOCzh+CylSAxIOCyteCysOCzjeCyt+CypuCysuCzjeCysuCyvydcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4LKs4LK54LOB4LKk4LOH4LKVIHt7Y291bnR9fSDgsrXgsrDgs43gsrfgspfgsrPgsrLgs43gsrLgsr8nLFxuICAgICAgZnV0dXJlOiAn4LKs4LK54LOB4LKk4LOH4LKVIHt7Y291bnR9fSDgsrXgsrDgs43gsrfgspfgsrPgsrLgs43gsrLgsr8nLFxuICAgICAgcGFzdDogJ+CyrOCyueCzgeCypOCzh+CylSB7e2NvdW50fX0g4LK14LKw4LON4LK34LKX4LKz4LKy4LON4LKy4LK/J1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIGdldFJlc3VsdEJ5VGVuc2UocGFyZW50VG9rZW4sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gcGFyZW50VG9rZW4uZnV0dXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50VG9rZW4ucGFzdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmVudFRva2VuLmRlZmF1bHQ7XG59XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0b2tlblZhbHVlLm9uZSAmJiBjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGdldFJlc3VsdEJ5VGVuc2UodG9rZW5WYWx1ZS5vbmUsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGdldFJlc3VsdEJ5VGVuc2UodG9rZW5WYWx1ZS5vdGhlciwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==