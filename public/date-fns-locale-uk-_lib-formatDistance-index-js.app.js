(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-uk-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/uk/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/uk/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function declension(scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one;
  }
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
function buildLocalizeTokenFn(scheme) {
  return function (count, options) {
    if (options && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return 'за ' + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + ' тому';
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
var halfAtMinute = function halfAtMinute(_, options) {
  if (options && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'за півхвилини';
    } else {
      return 'півхвилини тому';
    }
  }
  return 'півхвилини';
};
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'менше секунди',
      singularNominative: 'менше {{count}} секунди',
      singularGenitive: 'менше {{count}} секунд',
      pluralGenitive: 'менше {{count}} секунд'
    },
    future: {
      one: 'менше, ніж за секунду',
      singularNominative: 'менше, ніж за {{count}} секунду',
      singularGenitive: 'менше, ніж за {{count}} секунди',
      pluralGenitive: 'менше, ніж за {{count}} секунд'
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунди',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду тому',
      singularGenitive: '{{count}} секунди тому',
      pluralGenitive: '{{count}} секунд тому'
    },
    future: {
      singularNominative: 'за {{count}} секунду',
      singularGenitive: 'за {{count}} секунди',
      pluralGenitive: 'за {{count}} секунд'
    }
  }),
  halfAMinute: halfAtMinute,
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'менше хвилини',
      singularNominative: 'менше {{count}} хвилини',
      singularGenitive: 'менше {{count}} хвилин',
      pluralGenitive: 'менше {{count}} хвилин'
    },
    future: {
      one: 'менше, ніж за хвилину',
      singularNominative: 'менше, ніж за {{count}} хвилину',
      singularGenitive: 'менше, ніж за {{count}} хвилини',
      pluralGenitive: 'менше, ніж за {{count}} хвилин'
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} хвилина',
      singularGenitive: '{{count}} хвилини',
      pluralGenitive: '{{count}} хвилин'
    },
    past: {
      singularNominative: '{{count}} хвилину тому',
      singularGenitive: '{{count}} хвилини тому',
      pluralGenitive: '{{count}} хвилин тому'
    },
    future: {
      singularNominative: 'за {{count}} хвилину',
      singularGenitive: 'за {{count}} хвилини',
      pluralGenitive: 'за {{count}} хвилин'
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} години',
      singularGenitive: 'близько {{count}} годин',
      pluralGenitive: 'близько {{count}} годин'
    },
    future: {
      singularNominative: 'приблизно за {{count}} годину',
      singularGenitive: 'приблизно за {{count}} години',
      pluralGenitive: 'приблизно за {{count}} годин'
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} годину',
      singularGenitive: '{{count}} години',
      pluralGenitive: '{{count}} годин'
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} день',
      singularGenitive: '{{count}} днi',
      pluralGenitive: '{{count}} днів'
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} тижня',
      singularGenitive: 'близько {{count}} тижнів',
      pluralGenitive: 'близько {{count}} тижнів'
    },
    future: {
      singularNominative: 'приблизно за {{count}} тиждень',
      singularGenitive: 'приблизно за {{count}} тижні',
      pluralGenitive: 'приблизно за {{count}} тижнів'
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} тиждень',
      singularGenitive: '{{count}} тижні',
      pluralGenitive: '{{count}} тижнів'
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} місяця',
      singularGenitive: 'близько {{count}} місяців',
      pluralGenitive: 'близько {{count}} місяців'
    },
    future: {
      singularNominative: 'приблизно за {{count}} місяць',
      singularGenitive: 'приблизно за {{count}} місяці',
      pluralGenitive: 'приблизно за {{count}} місяців'
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} місяць',
      singularGenitive: '{{count}} місяці',
      pluralGenitive: '{{count}} місяців'
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} року',
      singularGenitive: 'близько {{count}} років',
      pluralGenitive: 'близько {{count}} років'
    },
    future: {
      singularNominative: 'приблизно за {{count}} рік',
      singularGenitive: 'приблизно за {{count}} роки',
      pluralGenitive: 'приблизно за {{count}} років'
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} рік',
      singularGenitive: '{{count}} роки',
      pluralGenitive: '{{count}} років'
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'більше {{count}} року',
      singularGenitive: 'більше {{count}} років',
      pluralGenitive: 'більше {{count}} років'
    },
    future: {
      singularNominative: 'більше, ніж за {{count}} рік',
      singularGenitive: 'більше, ніж за {{count}} роки',
      pluralGenitive: 'більше, ніж за {{count}} років'
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'майже {{count}} рік',
      singularGenitive: 'майже {{count}} роки',
      pluralGenitive: 'майже {{count}} років'
    },
    future: {
      singularNominative: 'майже за {{count}} рік',
      singularGenitive: 'майже за {{count}} роки',
      pluralGenitive: 'майже за {{count}} років'
    }
  })
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  return formatDistanceLocale[token](count, options);
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3VrL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87O0FBRXZEO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPOztBQUVyRDtBQUNBLEdBQUc7QUFDSCw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QywrQkFBK0IsT0FBTztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xELHlDQUF5QyxPQUFPO0FBQ2hELHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2Qyw4QkFBOEIsT0FBTztBQUNyQyw0QkFBNEIsT0FBTztBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLCtCQUErQixPQUFPO0FBQ3RDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQseUNBQXlDLE9BQU87QUFDaEQsdUNBQXVDLE9BQU87QUFDOUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDLDhCQUE4QixPQUFPO0FBQ3JDLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QyxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRCx3Q0FBd0MsT0FBTztBQUMvQyxzQ0FBc0MsT0FBTztBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QyxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRCx3Q0FBd0MsT0FBTztBQUMvQyxzQ0FBc0MsT0FBTztBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pELHdDQUF3QyxPQUFPO0FBQy9DLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUMsbUNBQW1DLE9BQU87QUFDMUMsaUNBQWlDLE9BQU87QUFDeEMsS0FBSztBQUNMO0FBQ0EsMENBQTBDLE9BQU87QUFDakQsd0NBQXdDLE9BQU87QUFDL0Msc0NBQXNDLE9BQU87QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyxrQ0FBa0MsT0FBTztBQUN6QyxnQ0FBZ0MsT0FBTztBQUN2QyxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRCwwQ0FBMEMsT0FBTztBQUNqRCx3Q0FBd0MsT0FBTztBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUMsaUNBQWlDLE9BQU87QUFDeEMsK0JBQStCLE9BQU87QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0Msb0NBQW9DLE9BQU87QUFDM0Msa0NBQWtDLE9BQU87QUFDekM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdWstX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIGRlY2xlbnNpb24oc2NoZW1lLCBjb3VudCkge1xuICAvLyBzY2hlbWUgZm9yIGNvdW50PTEgZXhpc3RzXG4gIGlmIChzY2hlbWUub25lICE9PSB1bmRlZmluZWQgJiYgY291bnQgPT09IDEpIHtcbiAgICByZXR1cm4gc2NoZW1lLm9uZTtcbiAgfVxuICB2YXIgcmVtMTAgPSBjb3VudCAlIDEwO1xuICB2YXIgcmVtMTAwID0gY291bnQgJSAxMDA7XG5cbiAgLy8gMSwgMjEsIDMxLCAuLi5cbiAgaWYgKHJlbTEwID09PSAxICYmIHJlbTEwMCAhPT0gMTEpIHtcbiAgICByZXR1cm4gc2NoZW1lLnNpbmd1bGFyTm9taW5hdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcblxuICAgIC8vIDIsIDMsIDQsIDIyLCAyMywgMjQsIDMyIC4uLlxuICB9IGVsc2UgaWYgKHJlbTEwID49IDIgJiYgcmVtMTAgPD0gNCAmJiAocmVtMTAwIDwgMTAgfHwgcmVtMTAwID4gMjApKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5zaW5ndWxhckdlbml0aXZlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuXG4gICAgLy8gNSwgNiwgNywgOCwgOSwgMTAsIDExLCAuLi5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2NoZW1lLnBsdXJhbEdlbml0aXZlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG59XG5mdW5jdGlvbiBidWlsZExvY2FsaXplVG9rZW5GbihzY2hlbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgaWYgKHNjaGVtZS5mdXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUuZnV0dXJlLCBjb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICfQt9CwICcgKyBkZWNsZW5zaW9uKHNjaGVtZS5yZWd1bGFyLCBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzY2hlbWUucGFzdCkge1xuICAgICAgICAgIHJldHVybiBkZWNsZW5zaW9uKHNjaGVtZS5wYXN0LCBjb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLnJlZ3VsYXIsIGNvdW50KSArICcg0YLQvtC80YMnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZWNsZW5zaW9uKHNjaGVtZS5yZWd1bGFyLCBjb3VudCk7XG4gICAgfVxuICB9O1xufVxudmFyIGhhbGZBdE1pbnV0ZSA9IGZ1bmN0aW9uIGhhbGZBdE1pbnV0ZShfLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ9C30LAg0L/RltCy0YXQstC40LvQuNC90LgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9C/0ZbQstGF0LLQuNC70LjQvdC4INGC0L7QvNGDJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICfQv9GW0LLRhdCy0LjQu9C40L3QuCc7XG59O1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgb25lOiAn0LzQtdC90YjQtSDRgdC10LrRg9C90LTQuCcsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiNC1IHt7Y291bnR9fSDRgdC10LrRg9C90LTQuCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LzQtdC90YjQtSB7e2NvdW50fX0g0YHQtdC60YPQvdC0JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90YjQtSB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICfQvNC10L3RiNC1LCDQvdGW0LYg0LfQsCDRgdC10LrRg9C90LTRgycsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiNC1LCDQvdGW0LYg0LfQsCB7e2NvdW50fX0g0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGI0LUsINC90ZbQtiDQt9CwIHt7Y291bnR9fSDRgdC10LrRg9C90LTQuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGI0LUsINC90ZbQtiDQt9CwIHt7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gICAgfVxuICB9KSxcbiAgeFNlY29uZHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YMg0YLQvtC80YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQuCDRgtC+0LzRgycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQg0YLQvtC80YMnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C30LAge3tjb3VudH19INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQt9CwIHt7Y291bnR9fSDRgdC10LrRg9C90LTQuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C30LAge3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgICB9XG4gIH0pLFxuICBoYWxmQU1pbnV0ZTogaGFsZkF0TWludXRlLFxuICBsZXNzVGhhblhNaW51dGVzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgb25lOiAn0LzQtdC90YjQtSDRhdCy0LjQu9C40L3QuCcsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiNC1IHt7Y291bnR9fSDRhdCy0LjQu9C40L3QuCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LzQtdC90YjQtSB7e2NvdW50fX0g0YXQstC40LvQuNC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90YjQtSB7e2NvdW50fX0g0YXQstC40LvQuNC9J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICfQvNC10L3RiNC1LCDQvdGW0LYg0LfQsCDRhdCy0LjQu9C40L3RgycsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiNC1LCDQvdGW0LYg0LfQsCB7e2NvdW50fX0g0YXQstC40LvQuNC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGI0LUsINC90ZbQtiDQt9CwIHt7Y291bnR9fSDRhdCy0LjQu9C40L3QuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGI0LUsINC90ZbQtiDQt9CwIHt7Y291bnR9fSDRhdCy0LjQu9C40L0nXG4gICAgfVxuICB9KSxcbiAgeE1pbnV0ZXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YXQstC40LvQuNC90LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRhdCy0LjQu9C40L3QuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRhdCy0LjQu9C40L0nXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YXQstC40LvQuNC90YMg0YLQvtC80YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDRhdCy0LjQu9C40L3QuCDRgtC+0LzRgycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRhdCy0LjQu9C40L0g0YLQvtC80YMnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C30LAge3tjb3VudH19INGF0LLQuNC70LjQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQt9CwIHt7Y291bnR9fSDRhdCy0LjQu9C40L3QuCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C30LAge3tjb3VudH19INGF0LLQuNC70LjQvSdcbiAgICB9XG4gIH0pLFxuICBhYm91dFhIb3VyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9Cx0LvQuNC30YzQutC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LgnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9Cx0LvQuNC30YzQutC+IHt7Y291bnR9fSDQs9C+0LTQuNC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INCz0L7QtNC40L0nXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDQuNCx0LvQuNC30L3QviDQt9CwIHt7Y291bnR9fSDQs9C+0LTQuNC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDQuNCx0LvQuNC30L3QviDQt9CwIHt7Y291bnR9fSDQs9C+0LTQuNC90LgnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0LPQvtC00LjQvSdcbiAgICB9XG4gIH0pLFxuICB4SG91cnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LPQvtC00LjQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LPQvtC00LjQvdC4JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INCz0L7QtNC40L0nXG4gICAgfVxuICB9KSxcbiAgeERheXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LTQtdC90YwnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQtNC9aScsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQtNC90ZbQsidcbiAgICB9XG4gIH0pLFxuICBhYm91dFhXZWVrczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9Cx0LvQuNC30YzQutC+IHt7Y291bnR9fSDRgtC40LbQvdGPJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsdC70LjQt9GM0LrQviB7e2NvdW50fX0g0YLQuNC20L3RltCyJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INGC0LjQttC90ZbQsidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNC40LHQu9C40LfQvdC+INC30LAge3tjb3VudH19INGC0LjQttC00LXQvdGMJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0YLQuNC20L3RlicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDQuNCx0LvQuNC30L3QviDQt9CwIHt7Y291bnR9fSDRgtC40LbQvdGW0LInXG4gICAgfVxuICB9KSxcbiAgeFdlZWtzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGC0LjQttC00LXQvdGMJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YLQuNC20L3RlicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgtC40LbQvdGW0LInXG4gICAgfVxuICB9KSxcbiAgYWJvdXRYTW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INC80ZbRgdGP0YbRjycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INC80ZbRgdGP0YbRltCyJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INC80ZbRgdGP0YbRltCyJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0LzRltGB0Y/RhtGMJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0LzRltGB0Y/RhtGWJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNC40LHQu9C40LfQvdC+INC30LAge3tjb3VudH19INC80ZbRgdGP0YbRltCyJ1xuICAgIH1cbiAgfSksXG4gIHhNb250aHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzRltGB0Y/RhtGMJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LzRltGB0Y/RhtGWJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC80ZbRgdGP0YbRltCyJ1xuICAgIH1cbiAgfSksXG4gIGFib3V0WFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHQu9C40LfRjNC60L4ge3tjb3VudH19INGA0L7QutGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsdC70LjQt9GM0LrQviB7e2NvdW50fX0g0YDQvtC60ZbQsicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cx0LvQuNC30YzQutC+IHt7Y291bnR9fSDRgNC+0LrRltCyJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0YDRltC6JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0YDQvtC60LgnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C90L4g0LfQsCB7e2NvdW50fX0g0YDQvtC60ZbQsidcbiAgICB9XG4gIH0pLFxuICB4WWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YDRltC6JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YDQvtC60LgnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YDQvtC60ZbQsidcbiAgICB9XG4gIH0pLFxuICBvdmVyWFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHRltC70YzRiNC1IHt7Y291bnR9fSDRgNC+0LrRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LHRltC70YzRiNC1IHt7Y291bnR9fSDRgNC+0LrRltCyJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHRltC70YzRiNC1IHt7Y291bnR9fSDRgNC+0LrRltCyJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQsdGW0LvRjNGI0LUsINC90ZbQtiDQt9CwIHt7Y291bnR9fSDRgNGW0LonLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9Cx0ZbQu9GM0YjQtSwg0L3RltC2INC30LAge3tjb3VudH19INGA0L7QutC4JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHRltC70YzRiNC1LCDQvdGW0LYg0LfQsCB7e2NvdW50fX0g0YDQvtC60ZbQsidcbiAgICB9XG4gIH0pLFxuICBhbG1vc3RYWWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNCw0LnQttC1IHt7Y291bnR9fSDRgNGW0LonLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LDQudC20LUge3tjb3VudH19INGA0L7QutC4JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQsNC50LbQtSB7e2NvdW50fX0g0YDQvtC60ZbQsidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LzQsNC50LbQtSDQt9CwIHt7Y291bnR9fSDRgNGW0LonLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LDQudC20LUg0LfQsCB7e2NvdW50fX0g0YDQvtC60LgnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvNCw0LnQttC1INC30LAge3tjb3VudH19INGA0L7QutGW0LInXG4gICAgfVxuICB9KVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXShjb3VudCwgb3B0aW9ucyk7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=