(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mt-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/mt/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mt/_lib/formatDistance/index.js ***!
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
    one: 'inqas minn sekonda',
    other: 'inqas minn {{count}} sekondi'
  },
  xSeconds: {
    one: 'sekonda',
    other: '{{count}} sekondi'
  },
  halfAMinute: 'nofs minuta',
  lessThanXMinutes: {
    one: 'inqas minn minuta',
    other: 'inqas minn {{count}} minuti'
  },
  xMinutes: {
    one: 'minuta',
    other: '{{count}} minuti'
  },
  aboutXHours: {
    one: 'madwar siegħa',
    other: 'madwar {{count}} siegħat'
  },
  xHours: {
    one: 'siegħa',
    other: '{{count}} siegħat'
  },
  xDays: {
    one: 'ġurnata',
    other: '{{count}} ġranet'
  },
  aboutXWeeks: {
    one: 'madwar ġimgħa',
    other: 'madwar {{count}} ġimgħat'
  },
  xWeeks: {
    one: 'ġimgħa',
    other: '{{count}} ġimgħat'
  },
  aboutXMonths: {
    one: 'madwar xahar',
    other: 'madwar {{count}} xhur'
  },
  xMonths: {
    one: 'xahar',
    other: '{{count}} xhur'
  },
  aboutXYears: {
    one: 'madwar sena',
    two: 'madwar sentejn',
    other: 'madwar {{count}} snin'
  },
  xYears: {
    one: 'sena',
    two: 'sentejn',
    other: '{{count}} snin'
  },
  overXYears: {
    one: 'aktar minn sena',
    two: 'aktar minn sentejn',
    other: 'aktar minn {{count}} snin'
  },
  almostXYears: {
    one: 'kważi sena',
    two: 'kważi sentejn',
    other: 'kważi {{count}} snin'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && tokenValue.two) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "f'" + result;
    } else {
      return result + ' ilu';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL210L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1tdC1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnaW5xYXMgbWlubiBzZWtvbmRhJyxcbiAgICBvdGhlcjogJ2lucWFzIG1pbm4ge3tjb3VudH19IHNla29uZGknXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnc2Vrb25kYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vrb25kaSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdub2ZzIG1pbnV0YScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdpbnFhcyBtaW5uIG1pbnV0YScsXG4gICAgb3RoZXI6ICdpbnFhcyBtaW5uIHt7Y291bnR9fSBtaW51dGknXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnbWludXRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGknXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnbWFkd2FyIHNpZWfEp2EnLFxuICAgIG90aGVyOiAnbWFkd2FyIHt7Y291bnR9fSBzaWVnxKdhdCdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnc2llZ8SnYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2llZ8SnYXQnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnxKF1cm5hdGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IMShcmFuZXQnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnbWFkd2FyIMShaW1nxKdhJyxcbiAgICBvdGhlcjogJ21hZHdhciB7e2NvdW50fX0gxKFpbWfEp2F0J1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICfEoWltZ8SnYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gxKFpbWfEp2F0J1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdtYWR3YXIgeGFoYXInLFxuICAgIG90aGVyOiAnbWFkd2FyIHt7Y291bnR9fSB4aHVyJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAneGFoYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHhodXInXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnbWFkd2FyIHNlbmEnLFxuICAgIHR3bzogJ21hZHdhciBzZW50ZWpuJyxcbiAgICBvdGhlcjogJ21hZHdhciB7e2NvdW50fX0gc25pbidcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnc2VuYScsXG4gICAgdHdvOiAnc2VudGVqbicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc25pbidcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ2FrdGFyIG1pbm4gc2VuYScsXG4gICAgdHdvOiAnYWt0YXIgbWlubiBzZW50ZWpuJyxcbiAgICBvdGhlcjogJ2FrdGFyIG1pbm4ge3tjb3VudH19IHNuaW4nXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2t3YcW8aSBzZW5hJyxcbiAgICB0d286ICdrd2HFvGkgc2VudGVqbicsXG4gICAgb3RoZXI6ICdrd2HFvGkge3tjb3VudH19IHNuaW4nXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIgJiYgdG9rZW5WYWx1ZS50d28pIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLnR3bztcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiZidcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgaWx1JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==