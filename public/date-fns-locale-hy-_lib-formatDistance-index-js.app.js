(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hy-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/hy/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/hy/_lib/formatDistance/index.js ***!
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
    one: 'ավելի քիչ քան 1 վայրկյան',
    other: 'ավելի քիչ քան {{count}} վայրկյան'
  },
  xSeconds: {
    one: '1 վայրկյան',
    other: '{{count}} վայրկյան'
  },
  halfAMinute: 'կես րոպե',
  lessThanXMinutes: {
    one: 'ավելի քիչ քան 1 րոպե',
    other: 'ավելի քիչ քան {{count}} րոպե'
  },
  xMinutes: {
    one: '1 րոպե',
    other: '{{count}} րոպե'
  },
  aboutXHours: {
    one: 'մոտ 1 ժամ',
    other: 'մոտ {{count}} ժամ'
  },
  xHours: {
    one: '1 ժամ',
    other: '{{count}} ժամ'
  },
  xDays: {
    one: '1 օր',
    other: '{{count}} օր'
  },
  aboutXWeeks: {
    one: 'մոտ 1 շաբաթ',
    other: 'մոտ {{count}} շաբաթ'
  },
  xWeeks: {
    one: '1 շաբաթ',
    other: '{{count}} շաբաթ'
  },
  aboutXMonths: {
    one: 'մոտ 1 ամիս',
    other: 'մոտ {{count}} ամիս'
  },
  xMonths: {
    one: '1 ամիս',
    other: '{{count}} ամիս'
  },
  aboutXYears: {
    one: 'մոտ 1 տարի',
    other: 'մոտ {{count}} տարի'
  },
  xYears: {
    one: '1 տարի',
    other: '{{count}} տարի'
  },
  overXYears: {
    one: 'ավելի քան 1 տարի',
    other: 'ավելի քան {{count}} տարի'
  },
  almostXYears: {
    one: 'համարյա 1 տարի',
    other: 'համարյա {{count}} տարի'
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
      return result + ' հետո';
    } else {
      return result + ' առաջ';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h5L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaHktX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ9Wh1b7VpdWs1asg1oTVq9W5INaE1aHVtiAxINW+1aHVtdaA1a/VtdWh1bYnLFxuICAgIG90aGVyOiAn1aHVvtWl1azVqyDWhNWr1bkg1oTVodW2IHt7Y291bnR9fSDVvtWh1bXWgNWv1bXVodW2J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEg1b7VodW11oDVr9W11aHVticsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g1b7VodW11oDVr9W11aHVtidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfVr9Wl1b0g1oDVuNW61aUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn1aHVvtWl1azVqyDWhNWr1bkg1oTVodW2IDEg1oDVuNW61aUnLFxuICAgIG90aGVyOiAn1aHVvtWl1azVqyDWhNWr1bkg1oTVodW2IHt7Y291bnR9fSDWgNW41brVpSdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxINaA1bjVutWlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDWgNW41brVpSdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfVtNW41b8gMSDVqtWh1bQnLFxuICAgIG90aGVyOiAn1bTVuNW/IHt7Y291bnR9fSDVqtWh1bQnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEg1arVodW0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDVqtWh1bQnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDWhdaAJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDWhdaAJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ9W01bjVvyAxINW31aHVotWh1aknLFxuICAgIG90aGVyOiAn1bTVuNW/IHt7Y291bnR9fSDVt9Wh1aLVodWpJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxINW31aHVotWh1aknLFxuICAgIG90aGVyOiAne3tjb3VudH19INW31aHVotWh1aknXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ9W01bjVvyAxINWh1bTVq9W9JyxcbiAgICBvdGhlcjogJ9W01bjVvyB7e2NvdW50fX0g1aHVtNWr1b0nXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxINWh1bTVq9W9JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDVodW01avVvSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfVtNW41b8gMSDVv9Wh1oDVqycsXG4gICAgb3RoZXI6ICfVtNW41b8ge3tjb3VudH19INW/1aHWgNWrJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxINW/1aHWgNWrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDVv9Wh1oDVqydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ9Wh1b7VpdWs1asg1oTVodW2IDEg1b/VodaA1asnLFxuICAgIG90aGVyOiAn1aHVvtWl1azVqyDWhNWh1bYge3tjb3VudH19INW/1aHWgNWrJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfVsNWh1bTVodaA1bXVoSAxINW/1aHWgNWrJyxcbiAgICBvdGhlcjogJ9Ww1aHVtNWh1oDVtdWhIHt7Y291bnR9fSDVv9Wh1oDVqydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcg1bDVpdW/1bgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyDVodW81aHVuyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=