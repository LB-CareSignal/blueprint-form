(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ja-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ja/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ja/_lib/formatDistance/index.js ***!
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
    one: '1秒未満',
    other: '{{count}}秒未満',
    oneWithSuffix: '約1秒',
    otherWithSuffix: '約{{count}}秒'
  },
  xSeconds: {
    one: '1秒',
    other: '{{count}}秒'
  },
  halfAMinute: '30秒',
  lessThanXMinutes: {
    one: '1分未満',
    other: '{{count}}分未満',
    oneWithSuffix: '約1分',
    otherWithSuffix: '約{{count}}分'
  },
  xMinutes: {
    one: '1分',
    other: '{{count}}分'
  },
  aboutXHours: {
    one: '約1時間',
    other: '約{{count}}時間'
  },
  xHours: {
    one: '1時間',
    other: '{{count}}時間'
  },
  xDays: {
    one: '1日',
    other: '{{count}}日'
  },
  aboutXWeeks: {
    one: '約1週間',
    other: '約{{count}}週間'
  },
  xWeeks: {
    one: '1週間',
    other: '{{count}}週間'
  },
  aboutXMonths: {
    one: '約1か月',
    other: '約{{count}}か月'
  },
  xMonths: {
    one: '1か月',
    other: '{{count}}か月'
  },
  aboutXYears: {
    one: '約1年',
    other: '約{{count}}年'
  },
  xYears: {
    one: '1年',
    other: '{{count}}年'
  },
  overXYears: {
    one: '1年以上',
    other: '{{count}}年以上'
  },
  almostXYears: {
    one: '1年近く',
    other: '{{count}}年近く'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    if (options.addSuffix && tokenValue.oneWithSuffix) {
      result = tokenValue.oneWithSuffix;
    } else {
      result = tokenValue.one;
    }
  } else {
    if (options.addSuffix && tokenValue.otherWithSuffix) {
      result = tokenValue.otherWithSuffix.replace('{{count}}', String(count));
    } else {
      result = tokenValue.other.replace('{{count}}', String(count));
    }
  }
  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + '後';
    } else {
      return result + '前';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2phL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxREFBcUQsT0FBTztBQUM1RCxLQUFLO0FBQ0wsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1qYS1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnMeenkuacqua6gCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3np5LmnKrmuoAnLFxuICAgIG9uZVdpdGhTdWZmaXg6ICfntIQx56eSJyxcbiAgICBvdGhlcldpdGhTdWZmaXg6ICfntIR7e2NvdW50fX3np5InXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMeenkicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3np5InXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnMzDnp5InLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnMeWIhuacqua6gCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3liIbmnKrmuoAnLFxuICAgIG9uZVdpdGhTdWZmaXg6ICfntIQx5YiGJyxcbiAgICBvdGhlcldpdGhTdWZmaXg6ICfntIR7e2NvdW50fX3liIYnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMeWIhicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3liIYnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn57SEMeaZgumWkycsXG4gICAgb3RoZXI6ICfntIR7e2NvdW50fX3mmYLplpMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzHmmYLplpMnLFxuICAgIG90aGVyOiAne3tjb3VudH195pmC6ZaTJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzHml6UnLFxuICAgIG90aGVyOiAne3tjb3VudH195pelJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ+e0hDHpgLHplpMnLFxuICAgIG90aGVyOiAn57SEe3tjb3VudH196YCx6ZaTJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcx6YCx6ZaTJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9femAsemWkydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn57SEMeOBi+aciCcsXG4gICAgb3RoZXI6ICfntIR7e2NvdW50fX3jgYvmnIgnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcx44GL5pyIJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feOBi+aciCdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfntIQx5bm0JyxcbiAgICBvdGhlcjogJ+e0hHt7Y291bnR9feW5tCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMeW5tCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3lubQnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICcx5bm05Lul5LiKJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feW5tOS7peS4iidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnMeW5tOi/keOBjycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3lubTov5HjgY8nXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGlmIChvcHRpb25zLmFkZFN1ZmZpeCAmJiB0b2tlblZhbHVlLm9uZVdpdGhTdWZmaXgpIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lV2l0aFN1ZmZpeDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb25zLmFkZFN1ZmZpeCAmJiB0b2tlblZhbHVlLm90aGVyV2l0aFN1ZmZpeCkge1xuICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlcldpdGhTdWZmaXgucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICflvownO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJ+WJjSc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=