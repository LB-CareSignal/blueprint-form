(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-kk-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/kk/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/kk/_lib/formatDistance/index.js ***!
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
    regular: {
      one: '1 секундтан аз',
      singularNominative: '{{count}} секундтан аз',
      singularGenitive: '{{count}} секундтан аз',
      pluralGenitive: '{{count}} секундтан аз'
    },
    future: {
      one: 'бір секундтан кейін',
      singularNominative: '{{count}} секундтан кейін',
      singularGenitive: '{{count}} секундтан кейін',
      pluralGenitive: '{{count}} секундтан кейін'
    }
  },
  xSeconds: {
    regular: {
      singularNominative: '{{count}} секунд',
      singularGenitive: '{{count}} секунд',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунд бұрын',
      singularGenitive: '{{count}} секунд бұрын',
      pluralGenitive: '{{count}} секунд бұрын'
    },
    future: {
      singularNominative: '{{count}} секундтан кейін',
      singularGenitive: '{{count}} секундтан кейін',
      pluralGenitive: '{{count}} секундтан кейін'
    }
  },
  halfAMinute: function halfAMinute(options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return 'жарты минут ішінде';
      } else {
        return 'жарты минут бұрын';
      }
    }
    return 'жарты минут';
  },
  lessThanXMinutes: {
    regular: {
      one: '1 минуттан аз',
      singularNominative: '{{count}} минуттан аз',
      singularGenitive: '{{count}} минуттан аз',
      pluralGenitive: '{{count}} минуттан аз'
    },
    future: {
      one: 'минуттан кем ',
      singularNominative: '{{count}} минуттан кем',
      singularGenitive: '{{count}} минуттан кем',
      pluralGenitive: '{{count}} минуттан кем'
    }
  },
  xMinutes: {
    regular: {
      singularNominative: '{{count}} минут',
      singularGenitive: '{{count}} минут',
      pluralGenitive: '{{count}} минут'
    },
    past: {
      singularNominative: '{{count}} минут бұрын',
      singularGenitive: '{{count}} минут бұрын',
      pluralGenitive: '{{count}} минут бұрын'
    },
    future: {
      singularNominative: '{{count}} минуттан кейін',
      singularGenitive: '{{count}} минуттан кейін',
      pluralGenitive: '{{count}} минуттан кейін'
    }
  },
  aboutXHours: {
    regular: {
      singularNominative: 'шамамен {{count}} сағат',
      singularGenitive: 'шамамен {{count}} сағат',
      pluralGenitive: 'шамамен {{count}} сағат'
    },
    future: {
      singularNominative: 'шамамен {{count}} сағаттан кейін',
      singularGenitive: 'шамамен {{count}} сағаттан кейін',
      pluralGenitive: 'шамамен {{count}} сағаттан кейін'
    }
  },
  xHours: {
    regular: {
      singularNominative: '{{count}} сағат',
      singularGenitive: '{{count}} сағат',
      pluralGenitive: '{{count}} сағат'
    }
  },
  xDays: {
    regular: {
      singularNominative: '{{count}} күн',
      singularGenitive: '{{count}} күн',
      pluralGenitive: '{{count}} күн'
    },
    future: {
      singularNominative: '{{count}} күннен кейін',
      singularGenitive: '{{count}} күннен кейін',
      pluralGenitive: '{{count}} күннен кейін'
    }
  },
  aboutXWeeks: {
    type: 'weeks',
    one: 'шамамен 1 апта',
    other: 'шамамен {{count}} апта'
  },
  xWeeks: {
    type: 'weeks',
    one: '1 апта',
    other: '{{count}} апта'
  },
  aboutXMonths: {
    regular: {
      singularNominative: 'шамамен {{count}} ай',
      singularGenitive: 'шамамен {{count}} ай',
      pluralGenitive: 'шамамен {{count}} ай'
    },
    future: {
      singularNominative: 'шамамен {{count}} айдан кейін',
      singularGenitive: 'шамамен {{count}} айдан кейін',
      pluralGenitive: 'шамамен {{count}} айдан кейін'
    }
  },
  xMonths: {
    regular: {
      singularNominative: '{{count}} ай',
      singularGenitive: '{{count}} ай',
      pluralGenitive: '{{count}} ай'
    }
  },
  aboutXYears: {
    regular: {
      singularNominative: 'шамамен {{count}} жыл',
      singularGenitive: 'шамамен {{count}} жыл',
      pluralGenitive: 'шамамен {{count}} жыл'
    },
    future: {
      singularNominative: 'шамамен {{count}} жылдан кейін',
      singularGenitive: 'шамамен {{count}} жылдан кейін',
      pluralGenitive: 'шамамен {{count}} жылдан кейін'
    }
  },
  xYears: {
    regular: {
      singularNominative: '{{count}} жыл',
      singularGenitive: '{{count}} жыл',
      pluralGenitive: '{{count}} жыл'
    },
    future: {
      singularNominative: '{{count}} жылдан кейін',
      singularGenitive: '{{count}} жылдан кейін',
      pluralGenitive: '{{count}} жылдан кейін'
    }
  },
  overXYears: {
    regular: {
      singularNominative: '{{count}} жылдан астам',
      singularGenitive: '{{count}} жылдан астам',
      pluralGenitive: '{{count}} жылдан астам'
    },
    future: {
      singularNominative: '{{count}} жылдан астам',
      singularGenitive: '{{count}} жылдан астам',
      pluralGenitive: '{{count}} жылдан астам'
    }
  },
  almostXYears: {
    regular: {
      singularNominative: '{{count}} жылға жақын',
      singularGenitive: '{{count}} жылға жақын',
      pluralGenitive: '{{count}} жылға жақын'
    },
    future: {
      singularNominative: '{{count}} жылдан кейін',
      singularGenitive: '{{count}} жылдан кейін',
      pluralGenitive: '{{count}} жылдан кейін'
    }
  }
};
function declension(scheme, count) {
  // scheme for count=1 exists
  if (scheme.one && count === 1) return scheme.one;
  var rem10 = count % 10;
  var rem100 = count % 100;

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', String(count));

    // 2, 3, 4, 22, 23, 24, 32 ...
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', String(count));

    // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', String(count));
  }
}
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'function') return tokenValue(options);
  if (tokenValue.type === 'weeks') {
    return count === 1 ? tokenValue.one : tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (tokenValue.future) {
        return declension(tokenValue.future, count);
      } else {
        return declension(tokenValue.regular, count) + ' кейін';
      }
    } else {
      if (tokenValue.past) {
        return declension(tokenValue.past, count);
      } else {
        return declension(tokenValue.regular, count) + ' бұрын';
      }
    }
  } else {
    return declension(tokenValue.regular, count);
  }
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2trL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QyxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QyxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEMsS0FBSztBQUNMO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPOztBQUV2RDtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsT0FBTzs7QUFFckQ7QUFDQSxHQUFHO0FBQ0gsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE9BQU87QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta2stX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIG9uZTogJzEg0YHQtdC60YPQvdC00YLQsNC9INCw0LcnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGC0LDQvSDQsNC3JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YLQsNC9INCw0LcnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YLQsNC9INCw0LcnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ9Cx0ZbRgCDRgdC10LrRg9C90LTRgtCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YLQsNC9INC60LXQudGW0L0nLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTRgtCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTRgtCw0L0g0LrQtdC50ZbQvSdcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC0INCx0rHRgNGL0L0nLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQg0LHSsdGA0YvQvScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQg0LHSsdGA0YvQvSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGC0LDQvSDQutC10LnRltC9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YLQsNC9INC60LXQudGW0L0nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YLQsNC9INC60LXQudGW0L0nXG4gICAgfVxuICB9LFxuICBoYWxmQU1pbnV0ZTogZnVuY3Rpb24gaGFsZkFNaW51dGUob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIHJldHVybiAn0LbQsNGA0YLRiyDQvNC40L3Rg9GCINGW0YjRltC90LTQtSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ9C20LDRgNGC0Ysg0LzQuNC90YPRgiDQsdKx0YDRi9C9JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICfQttCw0YDRgtGLINC80LjQvdGD0YInO1xuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgcmVndWxhcjoge1xuICAgICAgb25lOiAnMSDQvNC40L3Rg9GC0YLQsNC9INCw0LcnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YLRgtCw0L0g0LDQtycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YLRgtCw0L0g0LDQtycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YLQsNC9INCw0LcnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ9C80LjQvdGD0YLRgtCw0L0g0LrQtdC8ICcsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzQuNC90YPRgtGC0LDQvSDQutC10LwnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YLQsNC9INC60LXQvCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YLQsNC9INC60LXQvCdcbiAgICB9XG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YInLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GCJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YInXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzQuNC90YPRgiDQsdKx0YDRi9C9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LzQuNC90YPRgiDQsdKx0YDRi9C9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YIg0LHSsdGA0YvQvSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YLRgtCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YLRgtCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YLQsNC9INC60LXQudGW0L0nXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDRgdCw0pPQsNGCJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0YHQsNKT0LDRgicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDRgdCw0pPQsNGCJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0YHQsNKT0LDRgtGC0LDQvSDQutC10LnRltC9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0YHQsNKT0LDRgtGC0LDQvSDQutC10LnRltC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INGB0LDSk9Cw0YLRgtCw0L0g0LrQtdC50ZbQvSdcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRgdCw0pPQsNGCJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQsNKT0LDRgicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdCw0pPQsNGCJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LrSr9C9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LrSr9C9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC60q/QvSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC60q/QvdC90LXQvSDQutC10LnRltC9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LrSr9C90L3QtdC9INC60LXQudGW0L0nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LrSr9C90L3QtdC9INC60LXQudGW0L0nXG4gICAgfVxuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIHR5cGU6ICd3ZWVrcycsXG4gICAgb25lOiAn0YjQsNC80LDQvNC10L0gMSDQsNC/0YLQsCcsXG4gICAgb3RoZXI6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0LDQv9GC0LAnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIHR5cGU6ICd3ZWVrcycsXG4gICAgb25lOiAnMSDQsNC/0YLQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LDQv9GC0LAnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDQsNC5JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0LDQuScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDQsNC5J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0LDQudC00LDQvSDQutC10LnRltC9JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfRiNCw0LzQsNC80LXQvSB7e2NvdW50fX0g0LDQudC00LDQvSDQutC10LnRltC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INCw0LnQtNCw0L0g0LrQtdC50ZbQvSdcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LDQuScsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INCw0LknLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LDQuSdcbiAgICB9XG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INC20YvQuycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INC20YvQuycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDQttGL0LsnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9GI0LDQvNCw0LzQtdC9IHt7Y291bnR9fSDQttGL0LvQtNCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INC20YvQu9C00LDQvSDQutC10LnRltC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0YjQsNC80LDQvNC10L0ge3tjb3VudH19INC20YvQu9C00LDQvSDQutC10LnRltC9J1xuICAgIH1cbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC20YvQuycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC20YvQuycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LsnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC20YvQu9C00LDQvSDQutC10LnRltC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC20YvQu9C00LDQvSDQutC10LnRltC9J1xuICAgIH1cbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LDRgdGC0LDQvCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC20YvQu9C00LDQvSDQsNGB0YLQsNC8JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC20YvQu9C00LDQvSDQsNGB0YLQsNC8J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LbRi9C70LTQsNC9INCw0YHRgtCw0LwnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LDRgdGC0LDQvCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LDRgdGC0LDQvCdcbiAgICB9XG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvSk9CwINC20LDSm9GL0L0nLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvSk9CwINC20LDSm9GL0L0nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LbRi9C70pPQsCDQttCw0pvRi9C9J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LbRi9C70LTQsNC9INC60LXQudGW0L0nLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LrQtdC50ZbQvScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQttGL0LvQtNCw0L0g0LrQtdC50ZbQvSdcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQpIHtcbiAgLy8gc2NoZW1lIGZvciBjb3VudD0xIGV4aXN0c1xuICBpZiAoc2NoZW1lLm9uZSAmJiBjb3VudCA9PT0gMSkgcmV0dXJuIHNjaGVtZS5vbmU7XG4gIHZhciByZW0xMCA9IGNvdW50ICUgMTA7XG4gIHZhciByZW0xMDAgPSBjb3VudCAlIDEwMDtcblxuICAvLyAxLCAyMSwgMzEsIC4uLlxuICBpZiAocmVtMTAgPT09IDEgJiYgcmVtMTAwICE9PSAxMSkge1xuICAgIHJldHVybiBzY2hlbWUuc2luZ3VsYXJOb21pbmF0aXZlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuXG4gICAgLy8gMiwgMywgNCwgMjIsIDIzLCAyNCwgMzIgLi4uXG4gIH0gZWxzZSBpZiAocmVtMTAgPj0gMiAmJiByZW0xMCA8PSA0ICYmIChyZW0xMDAgPCAxMCB8fCByZW0xMDAgPiAyMCkpIHtcbiAgICByZXR1cm4gc2NoZW1lLnNpbmd1bGFyR2VuaXRpdmUucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG5cbiAgICAvLyA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIC4uLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzY2hlbWUucGx1cmFsR2VuaXRpdmUucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbn1cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdG9rZW5WYWx1ZShvcHRpb25zKTtcbiAgaWYgKHRva2VuVmFsdWUudHlwZSA9PT0gJ3dlZWtzJykge1xuICAgIHJldHVybiBjb3VudCA9PT0gMSA/IHRva2VuVmFsdWUub25lIDogdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIGlmICh0b2tlblZhbHVlLmZ1dHVyZSkge1xuICAgICAgICByZXR1cm4gZGVjbGVuc2lvbih0b2tlblZhbHVlLmZ1dHVyZSwgY291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24odG9rZW5WYWx1ZS5yZWd1bGFyLCBjb3VudCkgKyAnINC60LXQudGW0L0nO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9rZW5WYWx1ZS5wYXN0KSB7XG4gICAgICAgIHJldHVybiBkZWNsZW5zaW9uKHRva2VuVmFsdWUucGFzdCwgY291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24odG9rZW5WYWx1ZS5yZWd1bGFyLCBjb3VudCkgKyAnINCx0rHRgNGL0L0nO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGVjbGVuc2lvbih0b2tlblZhbHVlLnJlZ3VsYXIsIGNvdW50KTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9