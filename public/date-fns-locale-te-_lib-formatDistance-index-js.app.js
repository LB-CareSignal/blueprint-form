(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-te-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/te/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/te/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Source: https://www.unicode.org/cldr/charts/32/summary/te.html

var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: 'సెకను కన్నా తక్కువ',
      other: '{{count}} సెకన్ల కన్నా తక్కువ'
    },
    withPreposition: {
      one: 'సెకను',
      other: '{{count}} సెకన్ల'
    }
  },
  xSeconds: {
    standalone: {
      one: 'ఒక సెకను',
      // CLDR #1314
      other: '{{count}} సెకన్ల'
    },
    withPreposition: {
      one: 'ఒక సెకను',
      other: '{{count}} సెకన్ల'
    }
  },
  halfAMinute: {
    standalone: 'అర నిమిషం',
    withPreposition: 'అర నిమిషం'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'ఒక నిమిషం కన్నా తక్కువ',
      other: '{{count}} నిమిషాల కన్నా తక్కువ'
    },
    withPreposition: {
      one: 'ఒక నిమిషం',
      other: '{{count}} నిమిషాల'
    }
  },
  xMinutes: {
    standalone: {
      one: 'ఒక నిమిషం',
      // CLDR #1311
      other: '{{count}} నిమిషాలు'
    },
    withPreposition: {
      one: 'ఒక నిమిషం',
      // CLDR #1311
      other: '{{count}} నిమిషాల'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'సుమారు ఒక గంట',
      other: 'సుమారు {{count}} గంటలు'
    },
    withPreposition: {
      one: 'సుమారు ఒక గంట',
      other: 'సుమారు {{count}} గంటల'
    }
  },
  xHours: {
    standalone: {
      one: 'ఒక గంట',
      // CLDR #1308
      other: '{{count}} గంటలు'
    },
    withPreposition: {
      one: 'ఒక గంట',
      other: '{{count}} గంటల'
    }
  },
  xDays: {
    standalone: {
      one: 'ఒక రోజు',
      // CLDR #1292
      other: '{{count}} రోజులు'
    },
    withPreposition: {
      one: 'ఒక రోజు',
      other: '{{count}} రోజుల'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'సుమారు ఒక వారం',
      other: 'సుమారు {{count}} వారాలు'
    },
    withPreposition: {
      one: 'సుమారు ఒక వారం',
      other: 'సుమారు {{count}} వారాలల'
    }
  },
  xWeeks: {
    standalone: {
      one: 'ఒక వారం',
      other: '{{count}} వారాలు'
    },
    withPreposition: {
      one: 'ఒక వారం',
      other: '{{count}} వారాలల'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'సుమారు ఒక నెల',
      other: 'సుమారు {{count}} నెలలు'
    },
    withPreposition: {
      one: 'సుమారు ఒక నెల',
      other: 'సుమారు {{count}} నెలల'
    }
  },
  xMonths: {
    standalone: {
      one: 'ఒక నెల',
      // CLDR #1281
      other: '{{count}} నెలలు'
    },
    withPreposition: {
      one: 'ఒక నెల',
      other: '{{count}} నెలల'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'సుమారు ఒక సంవత్సరం',
      other: 'సుమారు {{count}} సంవత్సరాలు'
    },
    withPreposition: {
      one: 'సుమారు ఒక సంవత్సరం',
      other: 'సుమారు {{count}} సంవత్సరాల'
    }
  },
  xYears: {
    standalone: {
      one: 'ఒక సంవత్సరం',
      // CLDR #1275
      other: '{{count}} సంవత్సరాలు'
    },
    withPreposition: {
      one: 'ఒక సంవత్సరం',
      other: '{{count}} సంవత్సరాల'
    }
  },
  overXYears: {
    standalone: {
      one: 'ఒక సంవత్సరం పైగా',
      other: '{{count}} సంవత్సరాలకు పైగా'
    },
    withPreposition: {
      one: 'ఒక సంవత్సరం',
      other: '{{count}} సంవత్సరాల'
    }
  },
  almostXYears: {
    standalone: {
      one: 'దాదాపు ఒక సంవత్సరం',
      other: 'దాదాపు {{count}} సంవత్సరాలు'
    },
    withPreposition: {
      one: 'దాదాపు ఒక సంవత్సరం',
      other: 'దాదాపు {{count}} సంవత్సరాల'
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
      return result + 'లో';
    } else {
      return result + ' క్రితం';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RlL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdGUtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIFNvdXJjZTogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS90ZS5odG1sXG5cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ+CwuOCxhuCwleCwqOCxgSDgsJXgsKjgsY3gsKjgsL4g4LCk4LCV4LGN4LCV4LGB4LC1JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwuOCxhuCwleCwqOCxjeCwsiDgsJXgsKjgsY3gsKjgsL4g4LCk4LCV4LGN4LCV4LGB4LC1J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsLjgsYbgsJXgsKjgsYEnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0g4LC44LGG4LCV4LCo4LGN4LCyJ1xuICAgIH1cbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LC44LGG4LCV4LCo4LGBJyxcbiAgICAgIC8vIENMRFIgIzEzMTRcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwuOCxhuCwleCwqOCxjeCwsidcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAn4LCS4LCVIOCwuOCxhuCwleCwqOCxgScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsLjgsYbgsJXgsKjgsY3gsLInXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZToge1xuICAgIHN0YW5kYWxvbmU6ICfgsIXgsLAg4LCo4LC/4LCu4LC/4LC34LCCJyxcbiAgICB3aXRoUHJlcG9zaXRpb246ICfgsIXgsLAg4LCo4LC/4LCu4LC/4LC34LCCJ1xuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAn4LCS4LCVIOCwqOCwv+CwruCwv+Cwt+CwgiDgsJXgsKjgsY3gsKjgsL4g4LCk4LCV4LGN4LCV4LGB4LC1JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwqOCwv+CwruCwv+Cwt+CwvuCwsiDgsJXgsKjgsY3gsKjgsL4g4LCk4LCV4LGN4LCV4LGB4LC1J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LCo4LC/4LCu4LC/4LC34LCCJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwqOCwv+CwruCwv+Cwt+CwvuCwsidcbiAgICB9XG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAn4LCS4LCVIOCwqOCwv+CwruCwv+Cwt+CwgicsXG4gICAgICAvLyBDTERSICMxMzExXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsKjgsL/gsK7gsL/gsLfgsL7gsLLgsYEnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ+CwkuCwlSDgsKjgsL/gsK7gsL/gsLfgsIInLFxuICAgICAgLy8gQ0xEUiAjMTMxMVxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0g4LCo4LC/4LCu4LC/4LC34LC+4LCyJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsLjgsYHgsK7gsL7gsLDgsYEg4LCS4LCVIOCwl+CwguCwnycsXG4gICAgICBvdGhlcjogJ+CwuOCxgeCwruCwvuCwsOCxgSB7e2NvdW50fX0g4LCX4LCC4LCf4LCy4LGBJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsLjgsYHgsK7gsL7gsLDgsYEg4LCS4LCVIOCwl+CwguCwnycsXG4gICAgICBvdGhlcjogJ+CwuOCxgeCwruCwvuCwsOCxgSB7e2NvdW50fX0g4LCX4LCC4LCf4LCyJ1xuICAgIH1cbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAn4LCS4LCVIOCwl+CwguCwnycsXG4gICAgICAvLyBDTERSICMxMzA4XG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsJfgsILgsJ/gsLLgsYEnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ+CwkuCwlSDgsJfgsILgsJ8nLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0g4LCX4LCC4LCf4LCyJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LCw4LGL4LCc4LGBJyxcbiAgICAgIC8vIENMRFIgIzEyOTJcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwsOCxi+CwnOCxgeCwsuCxgSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAn4LCS4LCVIOCwsOCxi+CwnOCxgScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsLDgsYvgsJzgsYHgsLInXG4gICAgfVxuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ+CwuOCxgeCwruCwvuCwsOCxgSDgsJLgsJUg4LC14LC+4LCw4LCCJyxcbiAgICAgIG90aGVyOiAn4LC44LGB4LCu4LC+4LCw4LGBIHt7Y291bnR9fSDgsLXgsL7gsLDgsL7gsLLgsYEnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ+CwuOCxgeCwruCwvuCwsOCxgSDgsJLgsJUg4LC14LC+4LCw4LCCJyxcbiAgICAgIG90aGVyOiAn4LC44LGB4LCu4LC+4LCw4LGBIHt7Y291bnR9fSDgsLXgsL7gsLDgsL7gsLLgsLInXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LC14LC+4LCw4LCCJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwteCwvuCwsOCwvuCwsuCxgSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAn4LCS4LCVIOCwteCwvuCwsOCwgicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsLXgsL7gsLDgsL7gsLLgsLInXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsLjgsYHgsK7gsL7gsLDgsYEg4LCS4LCVIOCwqOCxhuCwsicsXG4gICAgICBvdGhlcjogJ+CwuOCxgeCwruCwvuCwsOCxgSB7e2NvdW50fX0g4LCo4LGG4LCy4LCy4LGBJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsLjgsYHgsK7gsL7gsLDgsYEg4LCS4LCVIOCwqOCxhuCwsicsXG4gICAgICBvdGhlcjogJ+CwuOCxgeCwruCwvuCwsOCxgSB7e2NvdW50fX0g4LCo4LGG4LCy4LCyJ1xuICAgIH1cbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ+CwkuCwlSDgsKjgsYbgsLInLFxuICAgICAgLy8gQ0xEUiAjMTI4MVxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0g4LCo4LGG4LCy4LCy4LGBJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LCo4LGG4LCyJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwqOCxhuCwsuCwsidcbiAgICB9XG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgc3RhbmRhbG9uZToge1xuICAgICAgb25lOiAn4LC44LGB4LCu4LC+4LCw4LGBIOCwkuCwlSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsIInLFxuICAgICAgb3RoZXI6ICfgsLjgsYHgsK7gsL7gsLDgsYEge3tjb3VudH19IOCwuOCwguCwteCwpOCxjeCwuOCwsOCwvuCwsuCxgSdcbiAgICB9LFxuICAgIHdpdGhQcmVwb3NpdGlvbjoge1xuICAgICAgb25lOiAn4LC44LGB4LCu4LC+4LCw4LGBIOCwkuCwlSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsIInLFxuICAgICAgb3RoZXI6ICfgsLjgsYHgsK7gsL7gsLDgsYEge3tjb3VudH19IOCwuOCwguCwteCwpOCxjeCwuOCwsOCwvuCwsidcbiAgICB9XG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ+CwkuCwlSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsIInLFxuICAgICAgLy8gQ0xEUiAjMTI3NVxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0g4LC44LCC4LC14LCk4LGN4LC44LCw4LC+4LCy4LGBJ1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LC44LCC4LC14LCk4LGN4LC44LCw4LCCJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwuOCwguCwteCwpOCxjeCwuOCwsOCwvuCwsidcbiAgICB9XG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBzdGFuZGFsb25lOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LC44LCC4LC14LCk4LGN4LC44LCw4LCCIOCwquCxiOCwl+CwvicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsL7gsLLgsJXgsYEg4LCq4LGI4LCX4LC+J1xuICAgIH0sXG4gICAgd2l0aFByZXBvc2l0aW9uOiB7XG4gICAgICBvbmU6ICfgsJLgsJUg4LC44LCC4LC14LCk4LGN4LC44LCw4LCCJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IOCwuOCwguCwteCwpOCxjeCwuOCwsOCwvuCwsidcbiAgICB9XG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIHN0YW5kYWxvbmU6IHtcbiAgICAgIG9uZTogJ+CwpuCwvuCwpuCwvuCwquCxgSDgsJLgsJUg4LC44LCC4LC14LCk4LGN4LC44LCw4LCCJyxcbiAgICAgIG90aGVyOiAn4LCm4LC+4LCm4LC+4LCq4LGBIHt7Y291bnR9fSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsL7gsLLgsYEnXG4gICAgfSxcbiAgICB3aXRoUHJlcG9zaXRpb246IHtcbiAgICAgIG9uZTogJ+CwpuCwvuCwpuCwvuCwquCxgSDgsJLgsJUg4LC44LCC4LC14LCk4LGN4LC44LCw4LCCJyxcbiAgICAgIG90aGVyOiAn4LCm4LC+4LCm4LC+4LCq4LGBIHt7Y291bnR9fSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsL7gsLInXG4gICAgfVxuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXggPyBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ud2l0aFByZXBvc2l0aW9uIDogZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLnN0YW5kYWxvbmU7XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn4LCy4LGLJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg4LCV4LGN4LCw4LC/4LCk4LCCJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==