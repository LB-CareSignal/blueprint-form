(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sr-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sr/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sr/_lib/formatDistance/index.js ***!
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
    one: {
      standalone: 'мање од 1 секунде',
      withPrepositionAgo: 'мање од 1 секунде',
      withPrepositionIn: 'мање од 1 секунду'
    },
    dual: 'мање од {{count}} секунде',
    other: 'мање од {{count}} секунди'
  },
  xSeconds: {
    one: {
      standalone: '1 секунда',
      withPrepositionAgo: '1 секунде',
      withPrepositionIn: '1 секунду'
    },
    dual: '{{count}} секунде',
    other: '{{count}} секунди'
  },
  halfAMinute: 'пола минуте',
  lessThanXMinutes: {
    one: {
      standalone: 'мање од 1 минуте',
      withPrepositionAgo: 'мање од 1 минуте',
      withPrepositionIn: 'мање од 1 минуту'
    },
    dual: 'мање од {{count}} минуте',
    other: 'мање од {{count}} минута'
  },
  xMinutes: {
    one: {
      standalone: '1 минута',
      withPrepositionAgo: '1 минуте',
      withPrepositionIn: '1 минуту'
    },
    dual: '{{count}} минуте',
    other: '{{count}} минута'
  },
  aboutXHours: {
    one: {
      standalone: 'око 1 сат',
      withPrepositionAgo: 'око 1 сат',
      withPrepositionIn: 'око 1 сат'
    },
    dual: 'око {{count}} сата',
    other: 'око {{count}} сати'
  },
  xHours: {
    one: {
      standalone: '1 сат',
      withPrepositionAgo: '1 сат',
      withPrepositionIn: '1 сат'
    },
    dual: '{{count}} сата',
    other: '{{count}} сати'
  },
  xDays: {
    one: {
      standalone: '1 дан',
      withPrepositionAgo: '1 дан',
      withPrepositionIn: '1 дан'
    },
    dual: '{{count}} дана',
    other: '{{count}} дана'
  },
  aboutXWeeks: {
    one: {
      standalone: 'око 1 недељу',
      withPrepositionAgo: 'око 1 недељу',
      withPrepositionIn: 'око 1 недељу'
    },
    dual: 'око {{count}} недеље',
    other: 'око {{count}} недеље'
  },
  xWeeks: {
    one: {
      standalone: '1 недељу',
      withPrepositionAgo: '1 недељу',
      withPrepositionIn: '1 недељу'
    },
    dual: '{{count}} недеље',
    other: '{{count}} недеље'
  },
  aboutXMonths: {
    one: {
      standalone: 'око 1 месец',
      withPrepositionAgo: 'око 1 месец',
      withPrepositionIn: 'око 1 месец'
    },
    dual: 'око {{count}} месеца',
    other: 'око {{count}} месеци'
  },
  xMonths: {
    one: {
      standalone: '1 месец',
      withPrepositionAgo: '1 месец',
      withPrepositionIn: '1 месец'
    },
    dual: '{{count}} месеца',
    other: '{{count}} месеци'
  },
  aboutXYears: {
    one: {
      standalone: 'око 1 годину',
      withPrepositionAgo: 'око 1 годину',
      withPrepositionIn: 'око 1 годину'
    },
    dual: 'око {{count}} године',
    other: 'око {{count}} година'
  },
  xYears: {
    one: {
      standalone: '1 година',
      withPrepositionAgo: '1 године',
      withPrepositionIn: '1 годину'
    },
    dual: '{{count}} године',
    other: '{{count}} година'
  },
  overXYears: {
    one: {
      standalone: 'преко 1 годину',
      withPrepositionAgo: 'преко 1 годину',
      withPrepositionIn: 'преко 1 годину'
    },
    dual: 'преко {{count}} године',
    other: 'преко {{count}} година'
  },
  almostXYears: {
    one: {
      standalone: 'готово 1 годину',
      withPrepositionAgo: 'готово 1 годину',
      withPrepositionIn: 'готово 1 годину'
    },
    dual: 'готово {{count}} године',
    other: 'готово {{count}} година'
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
      return 'за ' + result;
    } else {
      return 'пре ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NyL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLE9BQU87QUFDNUIsc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixPQUFPO0FBQzVCLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQixPQUFPO0FBQzNCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0MsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXNyLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQvNCw0ZrQtSDQvtC0IDEg0YHQtdC60YPQvdC00LUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAn0LzQsNGa0LUg0L7QtCAxINGB0LXQutGD0L3QtNC1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0LzQsNGa0LUg0L7QtCAxINGB0LXQutGD0L3QtNGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ9C80LDRmtC1INC+0LQge3tjb3VudH19INGB0LXQutGD0L3QtNC1JyxcbiAgICBvdGhlcjogJ9C80LDRmtC1INC+0LQge3tjb3VudH19INGB0LXQutGD0L3QtNC4J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0YHQtdC60YPQvdC00LAnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSDRgdC10LrRg9C90LTQtScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEg0YHQtdC60YPQvdC00YMnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INGB0LXQutGD0L3QtNC1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQuCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfQv9C+0LvQsCDQvNC40L3Rg9GC0LUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAn0LzQsNGa0LUg0L7QtCAxINC80LjQvdGD0YLQtScsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQvNCw0ZrQtSDQvtC0IDEg0LzQuNC90YPRgtC1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAn0LzQsNGa0LUg0L7QtCAxINC80LjQvdGD0YLRgydcbiAgICB9LFxuICAgIGR1YWw6ICfQvNCw0ZrQtSDQvtC0IHt7Y291bnR9fSDQvNC40L3Rg9GC0LUnLFxuICAgIG90aGVyOiAn0LzQsNGa0LUg0L7QtCB7e2NvdW50fX0g0LzQuNC90YPRgtCwJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0LzQuNC90YPRgtCwJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0LzQuNC90YPRgtC1JyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSDQvNC40L3Rg9GC0YMnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INC80LjQvdGD0YLQtScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQuNC90YPRgtCwJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ9C+0LrQviAxINGB0LDRgicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQvtC60L4gMSDRgdCw0YInLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQvtC60L4gMSDRgdCw0YInXG4gICAgfSxcbiAgICBkdWFsOiAn0L7QutC+IHt7Y291bnR9fSDRgdCw0YLQsCcsXG4gICAgb3RoZXI6ICfQvtC60L4ge3tjb3VudH19INGB0LDRgtC4J1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICcxINGB0LDRgicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICcxINGB0LDRgicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEg0YHQsNGCJ1xuICAgIH0sXG4gICAgZHVhbDogJ3t7Y291bnR9fSDRgdCw0YLQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQsNGC0LgnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSDQtNCw0L0nLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSDQtNCw0L0nLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxINC00LDQvSdcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0g0LTQsNC90LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC00LDQvdCwJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ9C+0LrQviAxINC90LXQtNC10ZnRgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQvtC60L4gMSDQvdC10LTQtdGZ0YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQvtC60L4gMSDQvdC10LTQtdGZ0YMnXG4gICAgfSxcbiAgICBkdWFsOiAn0L7QutC+IHt7Y291bnR9fSDQvdC10LTQtdGZ0LUnLFxuICAgIG90aGVyOiAn0L7QutC+IHt7Y291bnR9fSDQvdC10LTQtdGZ0LUnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJzEg0L3QtdC00LXRmdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0L3QtdC00LXRmdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkluOiAnMSDQvdC10LTQtdGZ0YMnXG4gICAgfSxcbiAgICBkdWFsOiAne3tjb3VudH19INC90LXQtNC10ZnQtScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0L3QtdC00LXRmdC1J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQvtC60L4gMSDQvNC10YHQtdGGJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ9C+0LrQviAxINC80LXRgdC10YYnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQvtC60L4gMSDQvNC10YHQtdGGJ1xuICAgIH0sXG4gICAgZHVhbDogJ9C+0LrQviB7e2NvdW50fX0g0LzQtdGB0LXRhtCwJyxcbiAgICBvdGhlcjogJ9C+0LrQviB7e2NvdW50fX0g0LzQtdGB0LXRhtC4J1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSDQvNC10YHQtdGGJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJzEg0LzQtdGB0LXRhicsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJzEg0LzQtdGB0LXRhidcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0g0LzQtdGB0LXRhtCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC10YHQtdGG0LgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAn0L7QutC+IDEg0LPQvtC00LjQvdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ9C+0LrQviAxINCz0L7QtNC40L3RgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25JbjogJ9C+0LrQviAxINCz0L7QtNC40L3RgydcbiAgICB9LFxuICAgIGR1YWw6ICfQvtC60L4ge3tjb3VudH19INCz0L7QtNC40L3QtScsXG4gICAgb3RoZXI6ICfQvtC60L4ge3tjb3VudH19INCz0L7QtNC40L3QsCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBzdGFuZGFsb25lOiAnMSDQs9C+0LTQuNC90LAnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uQWdvOiAnMSDQs9C+0LTQuNC90LUnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICcxINCz0L7QtNC40L3RgydcbiAgICB9LFxuICAgIGR1YWw6ICd7e2NvdW50fX0g0LPQvtC00LjQvdC1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQs9C+0LTQuNC90LAnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHN0YW5kYWxvbmU6ICfQv9GA0LXQutC+IDEg0LPQvtC00LjQvdGDJyxcbiAgICAgIHdpdGhQcmVwb3NpdGlvbkFnbzogJ9C/0YDQtdC60L4gMSDQs9C+0LTQuNC90YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQv9GA0LXQutC+IDEg0LPQvtC00LjQvdGDJ1xuICAgIH0sXG4gICAgZHVhbDogJ9C/0YDQtdC60L4ge3tjb3VudH19INCz0L7QtNC40L3QtScsXG4gICAgb3RoZXI6ICfQv9GA0LXQutC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LAnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgc3RhbmRhbG9uZTogJ9Cz0L7RgtC+0LLQviAxINCz0L7QtNC40L3RgycsXG4gICAgICB3aXRoUHJlcG9zaXRpb25BZ286ICfQs9C+0YLQvtCy0L4gMSDQs9C+0LTQuNC90YMnLFxuICAgICAgd2l0aFByZXBvc2l0aW9uSW46ICfQs9C+0YLQvtCy0L4gMSDQs9C+0LTQuNC90YMnXG4gICAgfSxcbiAgICBkdWFsOiAn0LPQvtGC0L7QstC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LUnLFxuICAgIG90aGVyOiAn0LPQvtGC0L7QstC+IHt7Y291bnR9fSDQs9C+0LTQuNC90LAnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUud2l0aFByZXBvc2l0aW9uSW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZS53aXRoUHJlcG9zaXRpb25BZ287XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lLnN0YW5kYWxvbmU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvdW50ICUgMTAgPiAxICYmIGNvdW50ICUgMTAgPCA1ICYmXG4gIC8vIGlmIGxhc3QgZGlnaXQgaXMgYmV0d2VlbiAyIGFuZCA0XG4gIFN0cmluZyhjb3VudCkuc3Vic3RyKC0yLCAxKSAhPT0gJzEnIC8vIHVubGVzcyB0aGUgMm5kIHRvIGxhc3QgZGlnaXQgaXMgXCIxXCJcbiAgKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5kdWFsLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ9C30LAgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfQv9GA0LUgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==