(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mk-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/mk/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mk/_lib/formatDistance/index.js ***!
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
    one: 'помалку од секунда',
    other: 'помалку од {{count}} секунди'
  },
  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },
  halfAMinute: 'половина минута',
  lessThanXMinutes: {
    one: 'помалку од минута',
    other: 'помалку од {{count}} минути'
  },
  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },
  aboutXHours: {
    one: 'околу 1 час',
    other: 'околу {{count}} часа'
  },
  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },
  xDays: {
    one: '1 ден',
    other: '{{count}} дена'
  },
  aboutXWeeks: {
    one: 'околу 1 недела',
    other: 'околу {{count}} месеци'
  },
  xWeeks: {
    one: '1 недела',
    other: '{{count}} недели'
  },
  aboutXMonths: {
    one: 'околу 1 месец',
    other: 'околу {{count}} недели'
  },
  xMonths: {
    one: '1 месец',
    other: '{{count}} месеци'
  },
  aboutXYears: {
    one: 'околу 1 година',
    other: 'околу {{count}} години'
  },
  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },
  overXYears: {
    one: 'повеќе од 1 година',
    other: 'повеќе од {{count}} години'
  },
  almostXYears: {
    one: 'безмалку 1 година',
    other: 'безмалку {{count}} години'
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
      return 'за ' + result;
    } else {
      return 'пред ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21rL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbWstX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9C/0L7QvNCw0LvQutGDINC+0LQg0YHQtdC60YPQvdC00LAnLFxuICAgIG90aGVyOiAn0L/QvtC80LDQu9C60YMg0L7QtCB7e2NvdW50fX0g0YHQtdC60YPQvdC00LgnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDRgdC10LrRg9C90LTQsCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQtdC60YPQvdC00LgnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn0L/QvtC70L7QstC40L3QsCDQvNC40L3Rg9GC0LAnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn0L/QvtC80LDQu9C60YMg0L7QtCDQvNC40L3Rg9GC0LAnLFxuICAgIG90aGVyOiAn0L/QvtC80LDQu9C60YMg0L7QtCB7e2NvdW50fX0g0LzQuNC90YPRgtC4J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEg0LzQuNC90YPRgtCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC40L3Rg9GC0LgnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINGH0LDRgScsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9GDIHt7Y291bnR9fSDRh9Cw0YHQsCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDRh9Cw0YEnLFxuICAgIG90aGVyOiAne3tjb3VudH19INGH0LDRgdCwJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEg0LTQtdC9JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQtNC10L3QsCdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfQvtC60L7Qu9GDIDEg0L3QtdC00LXQu9CwJyxcbiAgICBvdGhlcjogJ9C+0LrQvtC70YMge3tjb3VudH19INC80LXRgdC10YbQuCdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSDQvdC10LTQtdC70LAnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC90LXQtNC10LvQuCdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINC80LXRgdC10YYnLFxuICAgIG90aGVyOiAn0L7QutC+0LvRgyB7e2NvdW50fX0g0L3QtdC00LXQu9C4J1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSDQvNC10YHQtdGGJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQvNC10YHQtdGG0LgnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAn0L7QutC+0LvRgyAxINCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQvtC60L7Qu9GDIHt7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDQs9C+0LTQuNC90LgnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfQv9C+0LLQtdGc0LUg0L7QtCAxINCz0L7QtNC40L3QsCcsXG4gICAgb3RoZXI6ICfQv9C+0LLQtdGc0LUg0L7QtCB7e2NvdW50fX0g0LPQvtC00LjQvdC4J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfQsdC10LfQvNCw0LvQutGDIDEg0LPQvtC00LjQvdCwJyxcbiAgICBvdGhlcjogJ9Cx0LXQt9C80LDQu9C60YMge3tjb3VudH19INCz0L7QtNC40L3QuCdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICfQt9CwICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn0L/RgNC10LQgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==