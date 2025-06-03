(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ru-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ru/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/formatDistance/index.js ***!
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
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return 'через ' + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + ' назад';
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'меньше секунды',
      singularNominative: 'меньше {{count}} секунды',
      singularGenitive: 'меньше {{count}} секунд',
      pluralGenitive: 'меньше {{count}} секунд'
    },
    future: {
      one: 'меньше, чем через секунду',
      singularNominative: 'меньше, чем через {{count}} секунду',
      singularGenitive: 'меньше, чем через {{count}} секунды',
      pluralGenitive: 'меньше, чем через {{count}} секунд'
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунды',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду назад',
      singularGenitive: '{{count}} секунды назад',
      pluralGenitive: '{{count}} секунд назад'
    },
    future: {
      singularNominative: 'через {{count}} секунду',
      singularGenitive: 'через {{count}} секунды',
      pluralGenitive: 'через {{count}} секунд'
    }
  }),
  halfAMinute: function halfAMinute(_count, options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return 'через полминуты';
      } else {
        return 'полминуты назад';
      }
    }
    return 'полминуты';
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'меньше минуты',
      singularNominative: 'меньше {{count}} минуты',
      singularGenitive: 'меньше {{count}} минут',
      pluralGenitive: 'меньше {{count}} минут'
    },
    future: {
      one: 'меньше, чем через минуту',
      singularNominative: 'меньше, чем через {{count}} минуту',
      singularGenitive: 'меньше, чем через {{count}} минуты',
      pluralGenitive: 'меньше, чем через {{count}} минут'
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} минута',
      singularGenitive: '{{count}} минуты',
      pluralGenitive: '{{count}} минут'
    },
    past: {
      singularNominative: '{{count}} минуту назад',
      singularGenitive: '{{count}} минуты назад',
      pluralGenitive: '{{count}} минут назад'
    },
    future: {
      singularNominative: 'через {{count}} минуту',
      singularGenitive: 'через {{count}} минуты',
      pluralGenitive: 'через {{count}} минут'
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} часа',
      singularGenitive: 'около {{count}} часов',
      pluralGenitive: 'около {{count}} часов'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} час',
      singularGenitive: 'приблизительно через {{count}} часа',
      pluralGenitive: 'приблизительно через {{count}} часов'
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} час',
      singularGenitive: '{{count}} часа',
      pluralGenitive: '{{count}} часов'
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} день',
      singularGenitive: '{{count}} дня',
      pluralGenitive: '{{count}} дней'
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} недели',
      singularGenitive: 'около {{count}} недель',
      pluralGenitive: 'около {{count}} недель'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} неделю',
      singularGenitive: 'приблизительно через {{count}} недели',
      pluralGenitive: 'приблизительно через {{count}} недель'
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} неделя',
      singularGenitive: '{{count}} недели',
      pluralGenitive: '{{count}} недель'
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} месяца',
      singularGenitive: 'около {{count}} месяцев',
      pluralGenitive: 'около {{count}} месяцев'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} месяц',
      singularGenitive: 'приблизительно через {{count}} месяца',
      pluralGenitive: 'приблизительно через {{count}} месяцев'
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} месяц',
      singularGenitive: '{{count}} месяца',
      pluralGenitive: '{{count}} месяцев'
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} года',
      singularGenitive: 'около {{count}} лет',
      pluralGenitive: 'около {{count}} лет'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} год',
      singularGenitive: 'приблизительно через {{count}} года',
      pluralGenitive: 'приблизительно через {{count}} лет'
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} год',
      singularGenitive: '{{count}} года',
      pluralGenitive: '{{count}} лет'
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'больше {{count}} года',
      singularGenitive: 'больше {{count}} лет',
      pluralGenitive: 'больше {{count}} лет'
    },
    future: {
      singularNominative: 'больше, чем через {{count}} год',
      singularGenitive: 'больше, чем через {{count}} года',
      pluralGenitive: 'больше, чем через {{count}} лет'
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'почти {{count}} год',
      singularGenitive: 'почти {{count}} года',
      pluralGenitive: 'почти {{count}} лет'
    },
    future: {
      singularNominative: 'почти через {{count}} год',
      singularGenitive: 'почти через {{count}} года',
      pluralGenitive: 'почти через {{count}} лет'
    }
  })
};
var formatDistance = function formatDistance(token, count, options) {
  return formatDistanceLocale[token](count, options);
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3J1L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87O0FBRXZEO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPOztBQUVyRDtBQUNBLEdBQUc7QUFDSCw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLGtDQUFrQyxPQUFPO0FBQ3pDLGdDQUFnQyxPQUFPO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQsNkNBQTZDLE9BQU87QUFDcEQsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLGtDQUFrQyxPQUFPO0FBQ3pDLGdDQUFnQyxPQUFPO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQsNkNBQTZDLE9BQU87QUFDcEQsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QywrQkFBK0IsT0FBTztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxrREFBa0QsT0FBTztBQUN6RCxnREFBZ0QsT0FBTztBQUN2RCw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQyxpQ0FBaUMsT0FBTztBQUN4QywrQkFBK0IsT0FBTztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxrREFBa0QsT0FBTztBQUN6RCxnREFBZ0QsT0FBTztBQUN2RCw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEMsMkJBQTJCLE9BQU87QUFDbEMseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDLGlDQUFpQyxPQUFPO0FBQ3hDLCtCQUErQixPQUFPO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pELGdEQUFnRCxPQUFPO0FBQ3ZELDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQywyQkFBMkIsT0FBTztBQUNsQyx5QkFBeUIsT0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUMsaUNBQWlDLE9BQU87QUFDeEMsK0JBQStCLE9BQU87QUFDdEMsS0FBSztBQUNMO0FBQ0Esa0RBQWtELE9BQU87QUFDekQsZ0RBQWdELE9BQU87QUFDdkQsOENBQThDLE9BQU87QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDJCQUEyQixPQUFPO0FBQ2xDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyxrQ0FBa0MsT0FBTztBQUN6QyxnQ0FBZ0MsT0FBTztBQUN2QyxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RCw2Q0FBNkMsT0FBTztBQUNwRCwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUMsaUNBQWlDLE9BQU87QUFDeEMsK0JBQStCLE9BQU87QUFDdEMsS0FBSztBQUNMO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQsdUNBQXVDLE9BQU87QUFDOUMscUNBQXFDLE9BQU87QUFDNUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXJ1LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQpIHtcbiAgLy8gc2NoZW1lIGZvciBjb3VudD0xIGV4aXN0c1xuICBpZiAoc2NoZW1lLm9uZSAhPT0gdW5kZWZpbmVkICYmIGNvdW50ID09PSAxKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5vbmU7XG4gIH1cbiAgdmFyIHJlbTEwID0gY291bnQgJSAxMDtcbiAgdmFyIHJlbTEwMCA9IGNvdW50ICUgMTAwO1xuXG4gIC8vIDEsIDIxLCAzMSwgLi4uXG4gIGlmIChyZW0xMCA9PT0gMSAmJiByZW0xMDAgIT09IDExKSB7XG4gICAgcmV0dXJuIHNjaGVtZS5zaW5ndWxhck5vbWluYXRpdmUucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG5cbiAgICAvLyAyLCAzLCA0LCAyMiwgMjMsIDI0LCAzMiAuLi5cbiAgfSBlbHNlIGlmIChyZW0xMCA+PSAyICYmIHJlbTEwIDw9IDQgJiYgKHJlbTEwMCA8IDEwIHx8IHJlbTEwMCA+IDIwKSkge1xuICAgIHJldHVybiBzY2hlbWUuc2luZ3VsYXJHZW5pdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcblxuICAgIC8vIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgLi4uXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNjaGVtZS5wbHVyYWxHZW5pdGl2ZS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxufVxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZVRva2VuRm4oc2NoZW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgICBpZiAoc2NoZW1lLmZ1dHVyZSkge1xuICAgICAgICAgIHJldHVybiBkZWNsZW5zaW9uKHNjaGVtZS5mdXR1cmUsIGNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ9GH0LXRgNC10LcgJyArIGRlY2xlbnNpb24oc2NoZW1lLnJlZ3VsYXIsIGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNjaGVtZS5wYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLnBhc3QsIGNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUucmVndWxhciwgY291bnQpICsgJyDQvdCw0LfQsNC0JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVjbGVuc2lvbihzY2hlbWUucmVndWxhciwgY291bnQpO1xuICAgIH1cbiAgfTtcbn1cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGM0YjQtSDRgdC10LrRg9C90LTRiycsXG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvNC10L3RjNGI0LUge3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvNC10L3RjNGI0LUge3tjb3VudH19INGB0LXQutGD0L3QtCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGM0YjQtSB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICfQvNC10L3RjNGI0LUsINGH0LXQvCDRh9C10YDQtdC3INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C80LXQvdGM0YjQtSwg0YfQtdC8INGH0LXRgNC10Lcge3tjb3VudH19INGB0LXQutGD0L3QtNGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvNC10L3RjNGI0LUsINGH0LXQvCDRh9C10YDQtdC3IHt7Y291bnR9fSDRgdC10LrRg9C90LTRiycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C80LXQvdGM0YjQtSwg0YfQtdC8INGH0LXRgNC10Lcge3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgICB9XG4gIH0pLFxuICB4U2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INGB0LXQutGD0L3QtCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTRgyDQvdCw0LfQsNC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00Ysg0L3QsNC30LDQtCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQg0L3QsNC30LDQtCdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0YfQtdGA0LXQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC00YMnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9GH0LXRgNC10Lcge3tjb3VudH19INGB0LXQutGD0L3QtNGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0YfQtdGA0LXQtyB7e2NvdW50fX0g0YHQtdC60YPQvdC0J1xuICAgIH1cbiAgfSksXG4gIGhhbGZBTWludXRlOiBmdW5jdGlvbiBoYWxmQU1pbnV0ZShfY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgICByZXR1cm4gJ9GH0LXRgNC10Lcg0L/QvtC70LzQuNC90YPRgtGLJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAn0L/QvtC70LzQuNC90YPRgtGLINC90LDQt9Cw0LQnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ9C/0L7Qu9C80LjQvdGD0YLRiyc7XG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBvbmU6ICfQvNC10L3RjNGI0LUg0LzQuNC90YPRgtGLJyxcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C80LXQvdGM0YjQtSB7e2NvdW50fX0g0LzQuNC90YPRgtGLJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvNC10L3RjNGI0LUge3tjb3VudH19INC80LjQvdGD0YInLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvNC10L3RjNGI0LUge3tjb3VudH19INC80LjQvdGD0YInXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ9C80LXQvdGM0YjQtSwg0YfQtdC8INGH0LXRgNC10Lcg0LzQuNC90YPRgtGDJyxcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C80LXQvdGM0YjQtSwg0YfQtdC8INGH0LXRgNC10Lcge3tjb3VudH19INC80LjQvdGD0YLRgycsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LzQtdC90YzRiNC1LCDRh9C10Lwg0YfQtdGA0LXQtyB7e2NvdW50fX0g0LzQuNC90YPRgtGLJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0LzQtdC90YzRiNC1LCDRh9C10Lwg0YfQtdGA0LXQtyB7e2NvdW50fX0g0LzQuNC90YPRgidcbiAgICB9XG4gIH0pLFxuICB4TWludXRlczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0LzQuNC90YPRgidcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0YMg0L3QsNC30LDQtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YLRiyDQvdCw0LfQsNC0JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC80LjQvdGD0YIg0L3QsNC30LDQtCdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0YfQtdGA0LXQtyB7e2NvdW50fX0g0LzQuNC90YPRgtGDJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfRh9C10YDQtdC3IHt7Y291bnR9fSDQvNC40L3Rg9GC0YsnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfRh9C10YDQtdC3IHt7Y291bnR9fSDQvNC40L3Rg9GCJ1xuICAgIH1cbiAgfSksXG4gIGFib3V0WEhvdXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0L7QutC+0LvQviB7e2NvdW50fX0g0YfQsNGB0LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C+0LrQvtC70L4ge3tjb3VudH19INGH0LDRgdC+0LInLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDRh9Cw0YHQvtCyJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LjQsdC70LjQt9C40YLQtdC70YzQvdC+INGH0LXRgNC10Lcge3tjb3VudH19INGH0LDRgScsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNC40LHQu9C40LfQuNGC0LXQu9GM0L3QviDRh9C10YDQtdC3IHt7Y291bnR9fSDRh9Cw0YHQsCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0YDQuNCx0LvQuNC30LjRgtC10LvRjNC90L4g0YfQtdGA0LXQtyB7e2NvdW50fX0g0YfQsNGB0L7QsidcbiAgICB9XG4gIH0pLFxuICB4SG91cnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0YfQsNGBJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0YfQsNGB0LAnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICd7e2NvdW50fX0g0YfQsNGB0L7QsidcbiAgICB9XG4gIH0pLFxuICB4RGF5czogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ3t7Y291bnR9fSDQtNC10L3RjCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC00L3RjycsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQtNC90LXQuSdcbiAgICB9XG4gIH0pLFxuICBhYm91dFhXZWVrczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C+0LrQvtC70L4ge3tjb3VudH19INC90LXQtNC10LvQuCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L7QutC+0LvQviB7e2NvdW50fX0g0L3QtdC00LXQu9GMJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L7QutC+0LvQviB7e2NvdW50fX0g0L3QtdC00LXQu9GMJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9GA0LjQsdC70LjQt9C40YLQtdC70YzQvdC+INGH0LXRgNC10Lcge3tjb3VudH19INC90LXQtNC10LvRjicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNC40LHQu9C40LfQuNGC0LXQu9GM0L3QviDRh9C10YDQtdC3IHt7Y291bnR9fSDQvdC10LTQtdC70LgnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C40YLQtdC70YzQvdC+INGH0LXRgNC10Lcge3tjb3VudH19INC90LXQtNC10LvRjCdcbiAgICB9XG4gIH0pLFxuICB4V2Vla3M6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0L3QtdC00LXQu9GPJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICd7e2NvdW50fX0g0L3QtdC00LXQu9C4JyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC90LXQtNC10LvRjCdcbiAgICB9XG4gIH0pLFxuICBhYm91dFhNb250aHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDQvNC10YHRj9GG0LAnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C+0LrQvtC70L4ge3tjb3VudH19INC80LXRgdGP0YbQtdCyJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L7QutC+0LvQviB7e2NvdW50fX0g0LzQtdGB0Y/RhtC10LInXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDQuNCx0LvQuNC30LjRgtC10LvRjNC90L4g0YfQtdGA0LXQtyB7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/RgNC40LHQu9C40LfQuNGC0LXQu9GM0L3QviDRh9C10YDQtdC3IHt7Y291bnR9fSDQvNC10YHRj9GG0LAnLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C40YLQtdC70YzQvdC+INGH0LXRgNC10Lcge3tjb3VudH19INC80LXRgdGP0YbQtdCyJ1xuICAgIH1cbiAgfSksXG4gIHhNb250aHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICd7e2NvdW50fX0g0LzQtdGB0Y/RhicsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INC80LXRgdGP0YbQsCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ3t7Y291bnR9fSDQvNC10YHRj9GG0LXQsidcbiAgICB9XG4gIH0pLFxuICBhYm91dFhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIHJlZ3VsYXI6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C+0LrQvtC70L4ge3tjb3VudH19INCz0L7QtNCwJyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDQu9C10YInLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDQu9C10YInXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIHNpbmd1bGFyTm9taW5hdGl2ZTogJ9C/0YDQuNCx0LvQuNC30LjRgtC10LvRjNC90L4g0YfQtdGA0LXQtyB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQv9GA0LjQsdC70LjQt9C40YLQtdC70YzQvdC+INGH0LXRgNC10Lcge3tjb3VudH19INCz0L7QtNCwJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/RgNC40LHQu9C40LfQuNGC0LXQu9GM0L3QviDRh9C10YDQtdC3IHt7Y291bnR9fSDQu9C10YInXG4gICAgfVxuICB9KSxcbiAgeFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAne3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAne3tjb3VudH19INCz0L7QtNCwJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAne3tjb3VudH19INC70LXRgidcbiAgICB9XG4gIH0pLFxuICBvdmVyWFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgcmVndWxhcjoge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHQvtC70YzRiNC1IHt7Y291bnR9fSDQs9C+0LTQsCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0LHQvtC70YzRiNC1IHt7Y291bnR9fSDQu9C10YInLFxuICAgICAgcGx1cmFsR2VuaXRpdmU6ICfQsdC+0LvRjNGI0LUge3tjb3VudH19INC70LXRgidcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgc2luZ3VsYXJOb21pbmF0aXZlOiAn0LHQvtC70YzRiNC1LCDRh9C10Lwg0YfQtdGA0LXQtyB7e2NvdW50fX0g0LPQvtC0JyxcbiAgICAgIHNpbmd1bGFyR2VuaXRpdmU6ICfQsdC+0LvRjNGI0LUsINGH0LXQvCDRh9C10YDQtdC3IHt7Y291bnR9fSDQs9C+0LTQsCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9Cx0L7Qu9GM0YjQtSwg0YfQtdC8INGH0LXRgNC10Lcge3tjb3VudH19INC70LXRgidcbiAgICB9XG4gIH0pLFxuICBhbG1vc3RYWWVhcnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICByZWd1bGFyOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9C+0YfRgtC4IHt7Y291bnR9fSDQs9C+0LQnLFxuICAgICAgc2luZ3VsYXJHZW5pdGl2ZTogJ9C/0L7Rh9GC0Lgge3tjb3VudH19INCz0L7QtNCwJyxcbiAgICAgIHBsdXJhbEdlbml0aXZlOiAn0L/QvtGH0YLQuCB7e2NvdW50fX0g0LvQtdGCJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBzaW5ndWxhck5vbWluYXRpdmU6ICfQv9C+0YfRgtC4INGH0LXRgNC10Lcge3tjb3VudH19INCz0L7QtCcsXG4gICAgICBzaW5ndWxhckdlbml0aXZlOiAn0L/QvtGH0YLQuCDRh9C10YDQtdC3IHt7Y291bnR9fSDQs9C+0LTQsCcsXG4gICAgICBwbHVyYWxHZW5pdGl2ZTogJ9C/0L7Rh9GC0Lgg0YfQtdGA0LXQtyB7e2NvdW50fX0g0LvQtdGCJ1xuICAgIH1cbiAgfSlcbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXShjb3VudCwgb3B0aW9ucyk7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=