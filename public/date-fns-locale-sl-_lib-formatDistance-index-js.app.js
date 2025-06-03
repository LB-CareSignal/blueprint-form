(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sl-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sl/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sl/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function isPluralType(val) {
  return val.one !== undefined;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    present: {
      one: 'manj kot {{count}} sekunda',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    },
    past: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundama',
      few: 'manj kot {{count}} sekundami',
      other: 'manj kot {{count}} sekundami'
    },
    future: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    }
  },
  xSeconds: {
    present: {
      one: '{{count}} sekunda',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    },
    past: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundama',
      few: '{{count}} sekundami',
      other: '{{count}} sekundami'
    },
    future: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    }
  },
  halfAMinute: 'pol minute',
  lessThanXMinutes: {
    present: {
      one: 'manj kot {{count}} minuta',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    },
    past: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minutama',
      few: 'manj kot {{count}} minutami',
      other: 'manj kot {{count}} minutami'
    },
    future: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    }
  },
  xMinutes: {
    present: {
      one: '{{count}} minuta',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    },
    past: {
      one: '{{count}} minuto',
      two: '{{count}} minutama',
      few: '{{count}} minutami',
      other: '{{count}} minutami'
    },
    future: {
      one: '{{count}} minuto',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    }
  },
  aboutXHours: {
    present: {
      one: 'približno {{count}} ura',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    },
    past: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} urama',
      few: 'približno {{count}} urami',
      other: 'približno {{count}} urami'
    },
    future: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    }
  },
  xHours: {
    present: {
      one: '{{count}} ura',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    },
    past: {
      one: '{{count}} uro',
      two: '{{count}} urama',
      few: '{{count}} urami',
      other: '{{count}} urami'
    },
    future: {
      one: '{{count}} uro',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    }
  },
  xDays: {
    present: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    },
    past: {
      one: '{{count}} dnem',
      two: '{{count}} dnevoma',
      few: '{{count}} dnevi',
      other: '{{count}} dnevi'
    },
    future: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    }
  },
  // no tenses for weeks?
  aboutXWeeks: {
    one: 'približno {{count}} teden',
    two: 'približno {{count}} tedna',
    few: 'približno {{count}} tedne',
    other: 'približno {{count}} tednov'
  },
  // no tenses for weeks?
  xWeeks: {
    one: '{{count}} teden',
    two: '{{count}} tedna',
    few: '{{count}} tedne',
    other: '{{count}} tednov'
  },
  aboutXMonths: {
    present: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    },
    past: {
      one: 'približno {{count}} mesecem',
      two: 'približno {{count}} mesecema',
      few: 'približno {{count}} meseci',
      other: 'približno {{count}} meseci'
    },
    future: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    }
  },
  xMonths: {
    present: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} meseci',
      other: '{{count}} mesecev'
    },
    past: {
      one: '{{count}} mesecem',
      two: '{{count}} mesecema',
      few: '{{count}} meseci',
      other: '{{count}} meseci'
    },
    future: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} mesece',
      other: '{{count}} mesecev'
    }
  },
  aboutXYears: {
    present: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    },
    past: {
      one: 'približno {{count}} letom',
      two: 'približno {{count}} letoma',
      few: 'približno {{count}} leti',
      other: 'približno {{count}} leti'
    },
    future: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    }
  },
  xYears: {
    present: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    },
    past: {
      one: '{{count}} letom',
      two: '{{count}} letoma',
      few: '{{count}} leti',
      other: '{{count}} leti'
    },
    future: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    }
  },
  overXYears: {
    present: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    },
    past: {
      one: 'več kot {{count}} letom',
      two: 'več kot {{count}} letoma',
      few: 'več kot {{count}} leti',
      other: 'več kot {{count}} leti'
    },
    future: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    }
  },
  almostXYears: {
    present: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    },
    past: {
      one: 'skoraj {{count}} letom',
      two: 'skoraj {{count}} letoma',
      few: 'skoraj {{count}} leti',
      other: 'skoraj {{count}} leti'
    },
    future: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    }
  }
};
function getFormFromCount(count) {
  switch (count % 100) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
    case 4:
      return 'few';
    default:
      return 'other';
  }
}
var formatDistance = function formatDistance(token, count, options) {
  var result = '';
  var tense = 'present';
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      tense = 'future';
      result = 'čez ';
    } else {
      tense = 'past';
      result = 'pred ';
    }
  }
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result += tokenValue;
  } else {
    var form = getFormFromCount(count);
    if (isPluralType(tokenValue)) {
      result += tokenValue[form].replace('{{count}}', String(count));
    } else {
      result += tokenValue[tense][form].replace('{{count}}', String(count));
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NsL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsT0FBTztBQUM5Qix5QkFBeUIsT0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIseUJBQXlCLE9BQU87QUFDaEMsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIseUJBQXlCLE9BQU87QUFDaEMsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUIseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQiwwQkFBMEIsT0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQiwwQkFBMEIsT0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQix3QkFBd0IsT0FBTztBQUMvQiwwQkFBMEIsT0FBTztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0IsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0IsMEJBQTBCLE9BQU87QUFDakMsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0IsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsT0FBTztBQUMvQixLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsT0FBTztBQUMvQixLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3QixzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsT0FBTztBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIsdUJBQXVCLE9BQU87QUFDOUIsS0FBSztBQUNMO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIsdUJBQXVCLE9BQU87QUFDOUIsS0FBSztBQUNMO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQsS0FBSztBQUNMLG1EQUFtRCxPQUFPO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1zbC1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNQbHVyYWxUeXBlKHZhbCkge1xuICByZXR1cm4gdmFsLm9uZSAhPT0gdW5kZWZpbmVkO1xufVxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGEnLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGknLFxuICAgICAgZmV3OiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGFtYScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kYW1pJyxcbiAgICAgIG90aGVyOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGknLFxuICAgICAgZmV3OiAnbWFuaiBrb3Qge3tjb3VudH19IHNla3VuZGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH1cbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kYScsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kYW1hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICd7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmQnXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3BvbCBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0YScsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRpJyxcbiAgICAgIGZldzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRvJyxcbiAgICAgIHR3bzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGFtYScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRhbWknLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRhbWknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ21hbmoga290IHt7Y291bnR9fSBtaW51dG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0aScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRlJyxcbiAgICAgIG90aGVyOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0J1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbWludXRhJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtaW51dGknLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtaW51dG8nLFxuICAgICAgdHdvOiAne3tjb3VudH19IG1pbnV0YW1hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtaW51dGFtaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAne3tjb3VudH19IG1pbnV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbWludXRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXQnXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyYScsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmknLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJlJyxcbiAgICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXInXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cm8nLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJhbWEnLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJhbWknLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJvJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmUnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cidcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSB1cmEnLFxuICAgICAgdHdvOiAne3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gdXJlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHVyJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IHVybycsXG4gICAgICB0d286ICd7e2NvdW50fX0gdXJhbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IHVyYW1pJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHVyYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gdXJvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSB1cmknLFxuICAgICAgZmV3OiAne3tjb3VudH19IHVyZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSB1cidcbiAgICB9XG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAne3tjb3VudH19IGRhbicsXG4gICAgICB0d286ICd7e2NvdW50fX0gZG5pJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gZG5pJ1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IGRuZW0nLFxuICAgICAgdHdvOiAne3tjb3VudH19IGRuZXZvbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IGRuZXZpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGRuZXZpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gZGFuJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgZmV3OiAne3tjb3VudH19IGRuaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBkbmknXG4gICAgfVxuICB9LFxuICAvLyBubyB0ZW5zZXMgZm9yIHdlZWtzP1xuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IHRlZGVuJyxcbiAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSB0ZWRuYScsXG4gICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdGVkbmUnLFxuICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdGVkbm92J1xuICB9LFxuICAvLyBubyB0ZW5zZXMgZm9yIHdlZWtzP1xuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd7e2NvdW50fX0gdGVkZW4nLFxuICAgIHR3bzogJ3t7Y291bnR9fSB0ZWRuYScsXG4gICAgZmV3OiAne3tjb3VudH19IHRlZG5lJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0ZWRub3YnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2UnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2V2J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWNlbScsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2VtYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2knLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2knXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2UnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2V2J1xuICAgIH1cbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtZXNlYycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbWVzZWNhJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtZXNlY2knLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzZWNldidcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtZXNlY2VtJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtZXNlY2VtYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbWVzZWNpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1lc2VjaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAne3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtZXNlY2EnLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1lc2VjZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNlY2V2J1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldG9tJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0aSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAne3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG9tJyxcbiAgICAgIHR3bzogJ3ZlxI0ga290IHt7Y291bnR9fSBsZXRvbWEnLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0aSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAndmXEjSBrb3Qge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAndmXEjSBrb3Qge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0J1xuICAgIH1cbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICdza29yYWoge3tjb3VudH19IGxldGEnLFxuICAgICAgb3RoZXI6ICdza29yYWoge3tjb3VudH19IGxldCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRvbWEnLFxuICAgICAgZmV3OiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIG90aGVyOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICdza29yYWoge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0J1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIGdldEZvcm1Gcm9tQ291bnQoY291bnQpIHtcbiAgc3dpdGNoIChjb3VudCAlIDEwMCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnb25lJztcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ3R3byc7XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAnZmV3JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdvdGhlcic7XG4gIH1cbn1cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciB0ZW5zZSA9ICdwcmVzZW50JztcbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICB0ZW5zZSA9ICdmdXR1cmUnO1xuICAgICAgcmVzdWx0ID0gJ8SNZXogJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGVuc2UgPSAncGFzdCc7XG4gICAgICByZXN1bHQgPSAncHJlZCAnO1xuICAgIH1cbiAgfVxuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCArPSB0b2tlblZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBmb3JtID0gZ2V0Rm9ybUZyb21Db3VudChjb3VudCk7XG4gICAgaWYgKGlzUGx1cmFsVHlwZSh0b2tlblZhbHVlKSkge1xuICAgICAgcmVzdWx0ICs9IHRva2VuVmFsdWVbZm9ybV0ucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSB0b2tlblZhbHVlW3RlbnNlXVtmb3JtXS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==