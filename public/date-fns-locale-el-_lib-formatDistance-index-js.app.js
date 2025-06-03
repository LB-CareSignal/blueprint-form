(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-el-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/el/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/el/_lib/formatDistance/index.js ***!
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
    one: 'λιγότερο από ένα δευτερόλεπτο',
    other: 'λιγότερο από {{count}} δευτερόλεπτα'
  },
  xSeconds: {
    one: '1 δευτερόλεπτο',
    other: '{{count}} δευτερόλεπτα'
  },
  halfAMinute: 'μισό λεπτό',
  lessThanXMinutes: {
    one: 'λιγότερο από ένα λεπτό',
    other: 'λιγότερο από {{count}} λεπτά'
  },
  xMinutes: {
    one: '1 λεπτό',
    other: '{{count}} λεπτά'
  },
  aboutXHours: {
    one: 'περίπου 1 ώρα',
    other: 'περίπου {{count}} ώρες'
  },
  xHours: {
    one: '1 ώρα',
    other: '{{count}} ώρες'
  },
  xDays: {
    one: '1 ημέρα',
    other: '{{count}} ημέρες'
  },
  aboutXWeeks: {
    one: 'περίπου 1 εβδομάδα',
    other: 'περίπου {{count}} εβδομάδες'
  },
  xWeeks: {
    one: '1 εβδομάδα',
    other: '{{count}} εβδομάδες'
  },
  aboutXMonths: {
    one: 'περίπου 1 μήνας',
    other: 'περίπου {{count}} μήνες'
  },
  xMonths: {
    one: '1 μήνας',
    other: '{{count}} μήνες'
  },
  aboutXYears: {
    one: 'περίπου 1 χρόνο',
    other: 'περίπου {{count}} χρόνια'
  },
  xYears: {
    one: '1 χρόνο',
    other: '{{count}} χρόνια'
  },
  overXYears: {
    one: 'πάνω από 1 χρόνο',
    other: 'πάνω από {{count}} χρόνια'
  },
  almostXYears: {
    one: 'περίπου 1 χρόνο',
    other: 'περίπου {{count}} χρόνια'
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
      return 'σε ' + result;
    } else {
      return result + ' πριν';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VsL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZWwtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ867zrnOs8+Mz4TOtc+Bzr8gzrHPgM+MIM6tzr3OsSDOtM61z4XPhM61z4HPjM67zrXPgM+Ezr8nLFxuICAgIG90aGVyOiAnzrvOuc6zz4zPhM61z4HOvyDOsc+Az4wge3tjb3VudH19IM60zrXPhc+EzrXPgc+MzrvOtc+Az4TOsSdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIM60zrXPhc+EzrXPgc+MzrvOtc+Az4TOvycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gzrTOtc+Fz4TOtc+Bz4zOu861z4DPhM6xJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ868zrnPg8+MIM67zrXPgM+Ez4wnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnzrvOuc6zz4zPhM61z4HOvyDOsc+Az4wgzq3Ovc6xIM67zrXPgM+Ez4wnLFxuICAgIG90aGVyOiAnzrvOuc6zz4zPhM61z4HOvyDOsc+Az4wge3tjb3VudH19IM67zrXPgM+EzqwnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSDOu861z4DPhM+MJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDOu861z4DPhM6sJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ8+AzrXPgc6vz4DOv8+FIDEgz47Pgc6xJyxcbiAgICBvdGhlcjogJ8+AzrXPgc6vz4DOv8+FIHt7Y291bnR9fSDPjs+BzrXPgidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSDPjs+BzrEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IM+Oz4HOtc+CJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgzrfOvM6tz4HOsScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gzrfOvM6tz4HOtc+CJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ8+AzrXPgc6vz4DOv8+FIDEgzrXOss60zr/OvM6szrTOsScsXG4gICAgb3RoZXI6ICfPgM61z4HOr8+Azr/PhSB7e2NvdW50fX0gzrXOss60zr/OvM6szrTOtc+CJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIM61zrLOtM6/zrzOrM60zrEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IM61zrLOtM6/zrzOrM60zrXPgidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnz4DOtc+Bzq/PgM6/z4UgMSDOvM6uzr3Osc+CJyxcbiAgICBvdGhlcjogJ8+AzrXPgc6vz4DOv8+FIHt7Y291bnR9fSDOvM6uzr3Otc+CJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSDOvM6uzr3Osc+CJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDOvM6uzr3Otc+CJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ8+AzrXPgc6vz4DOv8+FIDEgz4fPgc+Mzr3OvycsXG4gICAgb3RoZXI6ICfPgM61z4HOr8+Azr/PhSB7e2NvdW50fX0gz4fPgc+Mzr3Ouc6xJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIM+Hz4HPjM69zr8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IM+Hz4HPjM69zrnOsSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ8+AzqzOvc+JIM6xz4DPjCAxIM+Hz4HPjM69zr8nLFxuICAgIG90aGVyOiAnz4DOrM69z4kgzrHPgM+MIHt7Y291bnR9fSDPh8+Bz4zOvc65zrEnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ8+AzrXPgc6vz4DOv8+FIDEgz4fPgc+Mzr3OvycsXG4gICAgb3RoZXI6ICfPgM61z4HOr8+Azr/PhSB7e2NvdW50fX0gz4fPgc+Mzr3Ouc6xJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ8+DzrUgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgz4DPgc65zr0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9