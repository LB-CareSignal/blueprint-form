(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-es-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/es/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/es/_lib/formatDistance/index.js ***!
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
    one: 'menos de un segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'medio minuto',
  lessThanXMinutes: {
    one: 'menos de un minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'alrededor de 1 hora',
    other: 'alrededor de {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 día',
    other: '{{count}} días'
  },
  aboutXWeeks: {
    one: 'alrededor de 1 semana',
    other: 'alrededor de {{count}} semanas'
  },
  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
  },
  aboutXMonths: {
    one: 'alrededor de 1 mes',
    other: 'alrededor de {{count}} meses'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'alrededor de 1 año',
    other: 'alrededor de {{count}} años'
  },
  xYears: {
    one: '1 año',
    other: '{{count}} años'
  },
  overXYears: {
    one: 'más de 1 año',
    other: 'más de {{count}} años'
  },
  almostXYears: {
    one: 'casi 1 año',
    other: 'casi {{count}} años'
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
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'en ' + result;
    } else {
      return 'hace ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtZXMtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21lbm9zIGRlIHVuIHNlZ3VuZG8nLFxuICAgIG90aGVyOiAnbWVub3MgZGUge3tjb3VudH19IHNlZ3VuZG9zJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2VndW5kbycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VndW5kb3MnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnbWVkaW8gbWludXRvJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ21lbm9zIGRlIHVuIG1pbnV0bycsXG4gICAgb3RoZXI6ICdtZW5vcyBkZSB7e2NvdW50fX0gbWludXRvcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0bycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRvcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhbHJlZGVkb3IgZGUgMSBob3JhJyxcbiAgICBvdGhlcjogJ2FscmVkZWRvciBkZSB7e2NvdW50fX0gaG9yYXMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG9yYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG9yYXMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkw61hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkw61hcydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhbHJlZGVkb3IgZGUgMSBzZW1hbmEnLFxuICAgIG90aGVyOiAnYWxyZWRlZG9yIGRlIHt7Y291bnR9fSBzZW1hbmFzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHNlbWFuYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VtYW5hcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWxyZWRlZG9yIGRlIDEgbWVzJyxcbiAgICBvdGhlcjogJ2FscmVkZWRvciBkZSB7e2NvdW50fX0gbWVzZXMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1lcycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzZXMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWxyZWRlZG9yIGRlIDEgYcOxbycsXG4gICAgb3RoZXI6ICdhbHJlZGVkb3IgZGUge3tjb3VudH19IGHDsW9zJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGHDsW8nLFxuICAgIG90aGVyOiAne3tjb3VudH19IGHDsW9zJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnbcOhcyBkZSAxIGHDsW8nLFxuICAgIG90aGVyOiAnbcOhcyBkZSB7e2NvdW50fX0gYcOxb3MnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2Nhc2kgMSBhw7FvJyxcbiAgICBvdGhlcjogJ2Nhc2kge3tjb3VudH19IGHDsW9zJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2VuICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaGFjZSAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9