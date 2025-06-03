(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bg-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/bg/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/bg/_lib/formatDistance/index.js ***!
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
    one: 'по-малко от секунда',
    other: 'по-малко от {{count}} секунди'
  },
  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },
  halfAMinute: 'половин минута',
  lessThanXMinutes: {
    one: 'по-малко от минута',
    other: 'по-малко от {{count}} минути'
  },
  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },
  aboutXHours: {
    one: 'около час',
    other: 'около {{count}} часа'
  },
  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },
  xDays: {
    one: '1 ден',
    other: '{{count}} дни'
  },
  aboutXWeeks: {
    one: 'около седмица',
    other: 'около {{count}} седмици'
  },
  xWeeks: {
    one: '1 седмица',
    other: '{{count}} седмици'
  },
  aboutXMonths: {
    one: 'около месец',
    other: 'около {{count}} месеца'
  },
  xMonths: {
    one: '1 месец',
    other: '{{count}} месеца'
  },
  aboutXYears: {
    one: 'около година',
    other: 'около {{count}} години'
  },
  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },
  overXYears: {
    one: 'над година',
    other: 'над {{count}} години'
  },
  almostXYears: {
    one: 'почти година',
    other: 'почти {{count}} години'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'след ' + result;
    } else {
      return 'преди ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JnL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtYmctX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9C/0L4t0LzQsNC70LrQviDQvtGCINGB0LXQutGD0L3QtNCwJyxcbiAgICBvdGhlcjogJ9C/0L4t0LzQsNC70LrQviDQvtGCIHt7Y291bnR9fSDRgdC10LrRg9C90LTQuCdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxINGB0LXQutGD0L3QtNCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdC10LrRg9C90LTQuCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfQv9C+0LvQvtCy0LjQvSDQvNC40L3Rg9GC0LAnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn0L/Qvi3QvNCw0LvQutC+INC+0YIg0LzQuNC90YPRgtCwJyxcbiAgICBvdGhlcjogJ9C/0L4t0LzQsNC70LrQviDQvtGCIHt7Y291bnR9fSDQvNC40L3Rg9GC0LgnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDQvNC40L3Rg9GC0LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC80LjQvdGD0YLQuCdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfQvtC60L7Qu9C+INGH0LDRgScsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDRh9Cw0YHQsCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDRh9Cw0YEnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGH0LDRgdCwJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEg0LTQtdC9JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQtNC90LgnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn0L7QutC+0LvQviDRgdC10LTQvNC40YbQsCcsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDRgdC10LTQvNC40YbQuCdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSDRgdC10LTQvNC40YbQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQtdC00LzQuNGG0LgnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9C+0LrQvtC70L4g0LzQtdGB0LXRhicsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDQvNC10YHQtdGG0LAnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxINC80LXRgdC10YYnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC80LXRgdC10YbQsCdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfQvtC60L7Qu9C+INCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9C+IHt7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfQvdCw0LQg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ9C90LDQtCB7e2NvdW50fX0g0LPQvtC00LjQvdC4J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfQv9C+0YfRgtC4INCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQv9C+0YfRgtC4IHt7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn0YHQu9C10LQgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfQv9GA0LXQtNC4ICcgKyByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=