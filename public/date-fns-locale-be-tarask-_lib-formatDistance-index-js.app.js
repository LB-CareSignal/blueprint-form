(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-tarask-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/be-tarask/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/locale/be-tarask/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlLXRhcmFzay9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPOztBQUV2RDtBQUNBLEdBQUc7QUFDSCw4Q0FBOEMsT0FBTzs7QUFFckQ7QUFDQSxHQUFHO0FBQ0gsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUMsbUNBQW1DLE9BQU87QUFDMUMsaUNBQWlDLE9BQU87QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRCwwQ0FBMEMsT0FBTztBQUNqRCx3Q0FBd0MsT0FBTztBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEMsS0FBSztBQUNMO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEMsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLE9BQU87QUFDekMsZ0NBQWdDLE9BQU87QUFDdkMsOEJBQThCLE9BQU87QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxx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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1iZS10YXJhc2stX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIGRlY2xlbnNpb24oc2NoZW1lLCBjb3VudCkge1xuICAvLyBzY2hlbWUgZm9yIGNvdW50PTEgZXhpc3RzXG4gIGlmIChzY2hlbWUub25lICE9PSB1bmRlZmluZWQgJiYgY291bnQgPT09IDEpIHtcbiAgICByZXR1cm4gc2NoZW1lLm9uZTtcbiAgfVxuICB2YXIgcmVtMTAgPSBjb3VudCAlIDEwO1xuICB2YXIgcmVtMTAwID0gY291bnQgJSAxMDA7XG5cbiAgLy8gMSwgMjEsIDMxLCAuLi5cbiAgaWYgKHJlbTEwID09PSAxICYmIHJlbTEwMCAhPT0gMTEpIHtcbiAgICByZXR1cm4gc2NoZW1lLnNpbmd1bGFyTm9taW5hdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcblxuICAgIC8vIDIsIDMsIDQsIDIyLCAyMywgMjQsIDMyIC4uLlxuICB9IGVsc2UgaWYgKHJlbTEwID49IDIgJiYgcmVtMTAgPD0gNCAmJiAocmVtMTAwIDwgMTAgfHwgcmVtMTAwID4gMjApKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5zaW5ndWxhckdlbml0aXZlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuXG4gICAgLy8gNSwgNiwgNywgOCwgOSwgMTAsIDExLCAuLi5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2NoZW1lLnBsdXJhbEdlbml0aXZlLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG59XG5mdW5jdGlvbiBidWlsZExvY2FsaXplVG9rZW5GbihzY2hlbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgaWYgKHNjaGVtZS5mdXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUuZnV0dXJlLCBjb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICfQv9GA0LDQtyAnICsgZGVjbGVuc2lvbihzY2hlbWUucmVndWxhciwgY291bnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2NoZW1lLnBhc3QpIHtcbiAgICAgICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUucGFzdCwgY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkZWNsZW5zaW9uKHNjaGVtZS5yZWd1bGFyLCBjb3VudCkgKyAnINGC0LDQvNGDJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUucmVndWxhciwgY291bnQpO1xuICAgIH1cbiAgfTtcbn1cbnZhciBoYWxmQU1pbnV0ZSA9IGZ1bmN0aW9uIGhhbGZBTWludXRlKF8sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn0L/RgNCw0Lcg0L/QsNGe0YXQstGW0LvRltC90YsnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ9C/0LDRntGF0LLRltC70ZbQvdGLINGC0LDQvNGDJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICfQv9Cw0Z7RhdCy0ZbQu9GW0L3Riyc7XG59O1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgb25lOiAn0LzQtdC90Ygg0LfQsCDRgdC10LrRg9C90LTRgycsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiCDQt9CwIHt7Y291bnR9fSDRgdC10LrRg9C90LTRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YHQtdC60YPQvdC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvNC10L3RiCDQt9CwIHt7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcg0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LzQtdC90YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH1cbiAgfSksXG4gIHhTZWNvbmRzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNCwJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGDINGC0LDQvNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00Ysg0YLQsNC80YMnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC0INGC0LDQvNGDJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDRgdC10LrRg9C90LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gICAgfVxuICB9KSxcbiAgaGFsZkFNaW51dGU6IGhhbGZBTWludXRlLFxuICBsZXNzVGhhblhNaW51dGVzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgb25lOiAn0LzQtdC90Ygg0LfQsCDRhdCy0ZbQu9GW0L3RgycsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RiCDQt9CwIHt7Y291bnR9fSDRhdCy0ZbQu9GW0L3RgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LzQtdC90Ygg0LfQsCB7e2NvdW50fX0g0YXQstGW0LvRltC90YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvNC10L3RiCDQt9CwIHt7Y291bnR9fSDRhdCy0ZbQu9GW0L0nXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcg0YXQstGW0LvRltC90YMnLFxuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LzQtdC90YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0YXQstGW0LvRltC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C80LXQvdGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INGF0LLRltC70ZbQvdGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0YXQstGW0LvRltC9J1xuICAgIH1cbiAgfSksXG4gIHhNaW51dGVzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvdCwJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YXQstGW0LvRltC90YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YXQstGW0LvRltC9J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INGF0LLRltC70ZbQvdGDINGC0LDQvNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YXQstGW0LvRltC90Ysg0YLQsNC80YMnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YXQstGW0LvRltC9INGC0LDQvNGDJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0YXQstGW0LvRltC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDRhdCy0ZbQu9GW0L3RiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDRhdCy0ZbQu9GW0L0nXG4gICAgfVxuICB9KSxcbiAgYWJvdXRYSG91cnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LPQsNC00LfRltC90YsnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQs9Cw0LTQt9GW0L0nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LPQsNC00LfRltC9J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC30ZbQvdGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC30ZbQvdGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQt9GW0L0nXG4gICAgfVxuICB9KSxcbiAgeEhvdXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvdCwJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LPQsNC00LfRltC90YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LPQsNC00LfRltC9J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INCz0LDQtNC30ZbQvdGDINGC0LDQvNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0LPQsNC00LfRltC90Ysg0YLQsNC80YMnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LPQsNC00LfRltC9INGC0LDQvNGDJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00LfRltC90YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQt9GW0L3RiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTQt9GW0L0nXG4gICAgfVxuICB9KSxcbiAgeERheXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LTQt9C10L3RjCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC00L3RlicsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQtNC30ZHQvSdcbiAgICB9XG4gIH0pLFxuICBhYm91dFhXZWVrczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQvNC10YHRj9GG0LAnLFxuICAgICAgLy8gVE9ET1xuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQvNC10YHRj9GG0LDRnicsXG4gICAgICAvLyBUT0RPXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQvNC10YHRj9GG0LDRnicgLy8gVE9ET1xuICAgIH0sXG5cbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICAvLyBUT0RPXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQvNC10YHRj9GG0YsnLFxuICAgICAgLy8gVE9ET1xuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INC80LXRgdGP0YbQsNGeJyAvLyBUT0RPXG4gICAgfVxuICB9KSxcblxuICB4V2Vla3M6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LXRgdGP0YbRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC10YHRj9GG0LDRnidcbiAgICB9XG4gIH0pLFxuICBhYm91dFhNb250aHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCwJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LzQtdGB0Y/RhtCw0Z4nXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQvNC10YHRj9GG0YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INC80LXRgdGP0YbQsNGeJ1xuICAgIH1cbiAgfSksXG4gIHhNb250aHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LXRgdGP0YbRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC10YHRj9GG0LDRnidcbiAgICB9XG4gIH0pLFxuICBhYm91dFhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C60LDQu9GPIHt7Y291bnR9fSDQs9C+0LTQsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LrQsNC70Y8ge3tjb3VudH19INCz0LDQtNC+0Z4nLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQutCw0LvRjyB7e2NvdW50fX0g0LPQsNC00L7RnidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L/RgNGL0LHQu9GW0LfQvdCwINC/0YDQsNC3IHt7Y291bnR9fSDQs9C+0LQnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0YDRi9Cx0LvRltC30L3QsCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0YvQsdC70ZbQt9C90LAg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfVxuICB9KSxcbiAgeFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfVxuICB9KSxcbiAgb3ZlclhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9Cx0L7Qu9GM0Ygg0LfQsCB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsdC+0LvRjNGIINC30LAge3tjb3VudH19INCz0LDQtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LHQvtC70YzRiCDQt9CwIHt7Y291bnR9fSDQs9Cw0LTQvtGeJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQsdC+0LvRjNGILCDRh9GL0Lwg0L/RgNCw0Lcge3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LHQvtC70YzRiCwg0YfRi9C8INC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cx0L7Qu9GM0YgsINGH0YvQvCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQsNC00L7RnidcbiAgICB9XG4gIH0pLFxuICBhbG1vc3RYWWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQsNC80LDQu9GMIHt7Y291bnR9fSDQs9C+0LQnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9Cw0LzQsNC70Ywge3tjb3VudH19INCz0LDQtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LDQvNCw0LvRjCB7e2NvdW50fX0g0LPQsNC00L7RnidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LDQvNCw0LvRjCDQv9GA0LDQtyB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsNC80LDQu9GMINC/0YDQsNC3IHt7Y291bnR9fSDQs9Cw0LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cw0LzQsNC70Ywg0L/RgNCw0Lcge3tjb3VudH19INCz0LDQtNC+0Z4nXG4gICAgfVxuICB9KVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXShjb3VudCwgb3B0aW9ucyk7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=