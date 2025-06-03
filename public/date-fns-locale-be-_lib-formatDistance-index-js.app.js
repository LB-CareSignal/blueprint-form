(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/be/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/be/_lib/formatDistance/index.js ***!
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
          return 'праз ' + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + ' таму';
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
var halfAMinute = function halfAMinute(_, options) {
  if (options && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'праз паўхвіліны';
    } else {
      return 'паўхвіліны таму';
    }
  }
  return 'паўхвіліны';
};
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'менш за секунду',
      singularNominative: 'менш за {{count}} секунду',
      singularGenitive: 'менш за {{count}} секунды',
      pluralGenitive: 'менш за {{count}} секунд'
    },
    future: {
      one: 'менш, чым праз секунду',
      singularNominative: 'менш, чым праз {{count}} секунду',
      singularGenitive: 'менш, чым праз {{count}} секунды',
      pluralGenitive: 'менш, чым праз {{count}} секунд'
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунды',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду таму',
      singularGenitive: '{{count}} секунды таму',
      pluralGenitive: '{{count}} секунд таму'
    },
    future: {
      singularNominative: 'праз {{count}} секунду',
      singularGenitive: 'праз {{count}} секунды',
      pluralGenitive: 'праз {{count}} секунд'
    }
  }),
  halfAMinute: halfAMinute,
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'менш за хвіліну',
      singularNominative: 'менш за {{count}} хвіліну',
      singularGenitive: 'менш за {{count}} хвіліны',
      pluralGenitive: 'менш за {{count}} хвілін'
    },
    future: {
      one: 'менш, чым праз хвіліну',
      singularNominative: 'менш, чым праз {{count}} хвіліну',
      singularGenitive: 'менш, чым праз {{count}} хвіліны',
      pluralGenitive: 'менш, чым праз {{count}} хвілін'
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} хвіліна',
      singularGenitive: '{{count}} хвіліны',
      pluralGenitive: '{{count}} хвілін'
    },
    past: {
      singularNominative: '{{count}} хвіліну таму',
      singularGenitive: '{{count}} хвіліны таму',
      pluralGenitive: '{{count}} хвілін таму'
    },
    future: {
      singularNominative: 'праз {{count}} хвіліну',
      singularGenitive: 'праз {{count}} хвіліны',
      pluralGenitive: 'праз {{count}} хвілін'
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'каля {{count}} гадзіны',
      singularGenitive: 'каля {{count}} гадзін',
      pluralGenitive: 'каля {{count}} гадзін'
    },
    future: {
      singularNominative: 'прыблізна праз {{count}} гадзіну',
      singularGenitive: 'прыблізна праз {{count}} гадзіны',
      pluralGenitive: 'прыблізна праз {{count}} гадзін'
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} гадзіна',
      singularGenitive: '{{count}} гадзіны',
      pluralGenitive: '{{count}} гадзін'
    },
    past: {
      singularNominative: '{{count}} гадзіну таму',
      singularGenitive: '{{count}} гадзіны таму',
      pluralGenitive: '{{count}} гадзін таму'
    },
    future: {
      singularNominative: 'праз {{count}} гадзіну',
      singularGenitive: 'праз {{count}} гадзіны',
      pluralGenitive: 'праз {{count}} гадзін'
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} дзень',
      singularGenitive: '{{count}} дні',
      pluralGenitive: '{{count}} дзён'
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'каля {{count}} месяца',
      // TODO
      singularGenitive: 'каля {{count}} месяцаў',
      // TODO
      pluralGenitive: 'каля {{count}} месяцаў' // TODO
    },

    future: {
      singularNominative: 'прыблізна праз {{count}} месяц',
      // TODO
      singularGenitive: 'прыблізна праз {{count}} месяцы',
      // TODO
      pluralGenitive: 'прыблізна праз {{count}} месяцаў' // TODO
    }
  }),

  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} месяц',
      singularGenitive: '{{count}} месяцы',
      pluralGenitive: '{{count}} месяцаў'
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'каля {{count}} месяца',
      singularGenitive: 'каля {{count}} месяцаў',
      pluralGenitive: 'каля {{count}} месяцаў'
    },
    future: {
      singularNominative: 'прыблізна праз {{count}} месяц',
      singularGenitive: 'прыблізна праз {{count}} месяцы',
      pluralGenitive: 'прыблізна праз {{count}} месяцаў'
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} месяц',
      singularGenitive: '{{count}} месяцы',
      pluralGenitive: '{{count}} месяцаў'
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'каля {{count}} года',
      singularGenitive: 'каля {{count}} гадоў',
      pluralGenitive: 'каля {{count}} гадоў'
    },
    future: {
      singularNominative: 'прыблізна праз {{count}} год',
      singularGenitive: 'прыблізна праз {{count}} гады',
      pluralGenitive: 'прыблізна праз {{count}} гадоў'
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} год',
      singularGenitive: '{{count}} гады',
      pluralGenitive: '{{count}} гадоў'
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'больш за {{count}} год',
      singularGenitive: 'больш за {{count}} гады',
      pluralGenitive: 'больш за {{count}} гадоў'
    },
    future: {
      singularNominative: 'больш, чым праз {{count}} год',
      singularGenitive: 'больш, чым праз {{count}} гады',
      pluralGenitive: 'больш, чым праз {{count}} гадоў'
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'амаль {{count}} год',
      singularGenitive: 'амаль {{count}} гады',
      pluralGenitive: 'амаль {{count}} гадоў'
    },
    future: {
      singularNominative: 'амаль праз {{count}} год',
      singularGenitive: 'амаль праз {{count}} гады',
      pluralGenitive: 'амаль праз {{count}} гадоў'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87O0FBRXZEO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPOztBQUVyRDtBQUNBLEdBQUc7QUFDSCw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25ELDBDQUEwQyxPQUFPO0FBQ2pELHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQyxLQUFLO0FBQ0w7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QyxnQ0FBZ0MsT0FBTztBQUN2Qyw4QkFBOEIsT0FBTztBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJlLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQpIHtcbiAgLy8gc2NoZW1lIGZvciBjb3VudD0xIGV4aXN0c1xuICBpZiAoc2NoZW1lLm9uZSAhPT0gdW5kZWZpbmVkICYmIGNvdW50ID09PSAxKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5vbmU7XG4gIH1cbiAgdmFyIHJlbTEwID0gY291bnQgJSAxMDtcbiAgdmFyIHJlbTEwMCA9IGNvdW50ICUgMTAwO1xuXG4gIC8vIDEsIDIxLCAzMSwgLi4uXG4gIGlmIChyZW0xMCA9PT0gMSAmJiByZW0xMDAgIT09IDExKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5zaW5ndWxhck5vbWluYXRpdmUucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG5cbiAgICAvLyAyLCAzLCA0LCAyMiwgMjMsIDI0LCAzMiAuLi5cbiAgfSBlbHNlIGlmIChyZW0xMCA+PSAyICYmIHJlbTEwIDw9IDQgJiYgKHJlbTEwMCA8IDEwIHx8IHJlbTEwMCA+IDIwKSkge1xuICAgIHJldHVybiBzY2hlbWUuc2luZ3VsYXJHZW5pdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcblxuICAgIC8vIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgLi4uXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNjaGVtZS5wbHVyYWxHZW5pdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxufVxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZVRva2VuRm4oc2NoZW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIGlmIChzY2hlbWUuZnV0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLmZ1dHVyZSwgY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAn0L/RgNCw0LcgJyArIGRlY2xlbnNpb24oc2NoZW1lLnJlZ3VsYXIsIGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNjaGVtZS5wYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLnBhc3QsIGNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUucmVndWxhciwgY291bnQpICsgJyDRgtCw0LzRgyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLnJlZ3VsYXIsIGNvdW50KTtcbiAgICB9XG4gIH07XG59XG52YXIgaGFsZkFNaW51dGUgPSBmdW5jdGlvbiBoYWxmQU1pbnV0ZShfLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ9C/0YDQsNC3INC/0LDRntGF0LLRltC70ZbQvdGLJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfQv9Cw0Z7RhdCy0ZbQu9GW0L3RiyDRgtCw0LzRgyc7XG4gICAgfVxuICB9XG4gIHJldHVybiAn0L/QsNGe0YXQstGW0LvRltC90YsnO1xufTtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGIINC30LAg0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGIINC30LAge3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICfQvNC10L3RiCwg0YfRi9C8INC/0YDQsNC3INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvNC10L3RiCwg0YfRi9C8INC/0YDQsNC3IHt7Y291bnR9fSDRgdC10LrRg9C90LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgICB9XG4gIH0pLFxuICB4U2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTRgyDRgtCw0LzRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGLINGC0LDQvNGDJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtCDRgtCw0LzRgydcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNCw0Lcge3tjb3VudH19INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH1cbiAgfSksXG4gIGhhbGZBTWludXRlOiBoYWxmQU1pbnV0ZSxcbiAgbGVzc1RoYW5YTWludXRlczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGIINC30LAg0YXQstGW0LvRltC90YMnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YXQstGW0LvRltC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGIINC30LAge3tjb3VudH19INGF0LLRltC70ZbQvdGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YXQstGW0LvRltC9J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICfQvNC10L3RiCwg0YfRi9C8INC/0YDQsNC3INGF0LLRltC70ZbQvdGDJyxcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGF0LLRltC70ZbQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvNC10L3RiCwg0YfRi9C8INC/0YDQsNC3IHt7Y291bnR9fSDRhdCy0ZbQu9GW0L3RiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGF0LLRltC70ZbQvSdcbiAgICB9XG4gIH0pLFxuICB4TWludXRlczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRhdCy0ZbQu9GW0L3QsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvdGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvSdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRhdCy0ZbQu9GW0L3RgyDRgtCw0LzRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvdGLINGC0LDQvNGDJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvSDRgtCw0LzRgydcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNCw0Lcge3tjb3VudH19INGF0LLRltC70ZbQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YXQstGW0LvRltC90YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YXQstGW0LvRltC9J1xuICAgIH1cbiAgfSksXG4gIGFib3V0WEhvdXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INCz0LDQtNC30ZbQvdGLJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LPQsNC00LfRltC9JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INCz0LDQtNC30ZbQvSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQt9GW0L3RgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQt9GW0L3RiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00LfRltC9J1xuICAgIH1cbiAgfSksXG4gIHhIb3VyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQs9Cw0LTQt9GW0L3QsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvdGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvSdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQs9Cw0LTQt9GW0L3RgyDRgtCw0LzRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvdGLINGC0LDQvNGDJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvSDRgtCw0LzRgydcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC30ZbQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00LfRltC90YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00LfRltC9J1xuICAgIH1cbiAgfSksXG4gIHhEYXlzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC00LfQtdC90YwnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQtNC90ZYnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LTQt9GR0L0nXG4gICAgfVxuICB9KSxcbiAgYWJvdXRYV2Vla3M6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCwJyxcbiAgICAgIC8vIFRPRE9cbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nLFxuICAgICAgLy8gVE9ET1xuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nIC8vIFRPRE9cbiAgICB9LFxuXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INC80LXRgdGP0YYnLFxuICAgICAgLy8gVE9ET1xuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LzQtdGB0Y/RhtGLJyxcbiAgICAgIC8vIFRPRE9cbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQvNC10YHRj9GG0LDRnicgLy8gVE9ET1xuICAgIH1cbiAgfSksXG5cbiAgeFdlZWtzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC80LXRgdGP0YYnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC10YHRj9GG0YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nXG4gICAgfVxuICB9KSxcbiAgYWJvdXRYTW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INC80LXRgdGP0YbQsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INC80LXRgdGP0YbQsNGeJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INC80LXRgdGP0YbQsNGeJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INC80LXRgdGP0YYnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LzQtdGB0Y/RhtGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQvNC10YHRj9GG0LDRnidcbiAgICB9XG4gIH0pLFxuICB4TW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INC80LXRgdGP0YYnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC10YHRj9GG0YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nXG4gICAgfVxuICB9KSxcbiAgYWJvdXRYWWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LPQvtC00LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQs9Cw0LTQvtGeJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQvtGeJ1xuICAgIH1cbiAgfSksXG4gIHhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQs9C+0LQnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQs9Cw0LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQs9Cw0LTQvtGeJ1xuICAgIH1cbiAgfSksXG4gIG92ZXJYWWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQsdC+0LvRjNGIINC30LAge3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LHQvtC70YzRiCDQt9CwIHt7Y291bnR9fSDQs9Cw0LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cx0L7Qu9GM0Ygg0LfQsCB7e2NvdW50fX0g0LPQsNC00L7RnidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHQvtC70YzRiCwg0YfRi9C8INC/0YDQsNC3IHt7Y291bnR9fSDQs9C+0LQnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9Cx0L7Qu9GM0YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQsdC+0LvRjNGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfVxuICB9KSxcbiAgYWxtb3N0WFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LDQvNCw0LvRjCB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsNC80LDQu9GMIHt7Y291bnR9fSDQs9Cw0LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cw0LzQsNC70Ywge3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9Cw0LzQsNC70Ywg0L/RgNCw0Lcge3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LDQvNCw0LvRjCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQsNC80LDQu9GMINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQvtGeJ1xuICAgIH1cbiAgfSlcbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHJldHVybiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0oY291bnQsIG9wdGlvbnMpO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9