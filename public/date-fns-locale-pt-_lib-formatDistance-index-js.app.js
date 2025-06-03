(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-pt-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/pt/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/pt/_lib/formatDistance/index.js ***!
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
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'meio minuto',
  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'aproximadamente 1 hora',
    other: 'aproximadamente {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dias'
  },
  aboutXWeeks: {
    one: 'aproximadamente 1 semana',
    other: 'aproximadamente {{count}} semanas'
  },
  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
  },
  aboutXMonths: {
    one: 'aproximadamente 1 mês',
    other: 'aproximadamente {{count}} meses'
  },
  xMonths: {
    one: '1 mês',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'aproximadamente 1 ano',
    other: 'aproximadamente {{count}} anos'
  },
  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },
  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },
  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos'
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
      return 'daqui a ' + result;
    } else {
      return 'há ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3B0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLE9BQU87QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtcHQtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21lbm9zIGRlIHVtIHNlZ3VuZG8nLFxuICAgIG90aGVyOiAnbWVub3MgZGUge3tjb3VudH19IHNlZ3VuZG9zJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2VndW5kbycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VndW5kb3MnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnbWVpbyBtaW51dG8nLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWVub3MgZGUgdW0gbWludXRvJyxcbiAgICBvdGhlcjogJ21lbm9zIGRlIHt7Y291bnR9fSBtaW51dG9zJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dG9zJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fwcm94aW1hZGFtZW50ZSAxIGhvcmEnLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnRlIHt7Y291bnR9fSBob3JhcydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3JhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3JhcydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRpYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGlhcydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhcHJveGltYWRhbWVudGUgMSBzZW1hbmEnLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnRlIHt7Y291bnR9fSBzZW1hbmFzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHNlbWFuYScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VtYW5hcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnRlIDEgbcOqcycsXG4gICAgb3RoZXI6ICdhcHJveGltYWRhbWVudGUge3tjb3VudH19IG1lc2VzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtw6pzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNlcydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhcHJveGltYWRhbWVudGUgMSBhbm8nLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnRlIHt7Y291bnR9fSBhbm9zJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIGFubycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYW5vcydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ21haXMgZGUgMSBhbm8nLFxuICAgIG90aGVyOiAnbWFpcyBkZSB7e2NvdW50fX0gYW5vcydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncXVhc2UgMSBhbm8nLFxuICAgIG90aGVyOiAncXVhc2Uge3tjb3VudH19IGFub3MnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnZGFxdWkgYSAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2jDoSAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9