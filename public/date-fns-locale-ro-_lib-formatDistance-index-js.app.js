(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ro-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ro/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ro/_lib/formatDistance/index.js ***!
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
    one: 'mai puțin de o secundă',
    other: 'mai puțin de {{count}} secunde'
  },
  xSeconds: {
    one: '1 secundă',
    other: '{{count}} secunde'
  },
  halfAMinute: 'jumătate de minut',
  lessThanXMinutes: {
    one: 'mai puțin de un minut',
    other: 'mai puțin de {{count}} minute'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minute'
  },
  aboutXHours: {
    one: 'circa 1 oră',
    other: 'circa {{count}} ore'
  },
  xHours: {
    one: '1 oră',
    other: '{{count}} ore'
  },
  xDays: {
    one: '1 zi',
    other: '{{count}} zile'
  },
  aboutXWeeks: {
    one: 'circa o săptămână',
    other: 'circa {{count}} săptămâni'
  },
  xWeeks: {
    one: '1 săptămână',
    other: '{{count}} săptămâni'
  },
  aboutXMonths: {
    one: 'circa 1 lună',
    other: 'circa {{count}} luni'
  },
  xMonths: {
    one: '1 lună',
    other: '{{count}} luni'
  },
  aboutXYears: {
    one: 'circa 1 an',
    other: 'circa {{count}} ani'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ani'
  },
  overXYears: {
    one: 'peste 1 an',
    other: 'peste {{count}} ani'
  },
  almostXYears: {
    one: 'aproape 1 an',
    other: 'aproape {{count}} ani'
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
      return 'în ' + result;
    } else {
      return result + ' în urmă';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3JvL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtcm8tX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21haSBwdcibaW4gZGUgbyBzZWN1bmTEgycsXG4gICAgb3RoZXI6ICdtYWkgcHXIm2luIGRlIHt7Y291bnR9fSBzZWN1bmRlJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2VjdW5kxIMnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY3VuZGUnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnanVtxIN0YXRlIGRlIG1pbnV0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ21haSBwdcibaW4gZGUgdW4gbWludXQnLFxuICAgIG90aGVyOiAnbWFpIHB1yJtpbiBkZSB7e2NvdW50fX0gbWludXRlJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZSdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdjaXJjYSAxIG9yxIMnLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IG9yZSdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBvcsSDJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBvcmUnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSB6aScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gemlsZSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdjaXJjYSBvIHPEg3B0xINtw6JuxIMnLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IHPEg3B0xINtw6JuaSdcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzxINwdMSDbcOibsSDJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzxINwdMSDbcOibmknXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2NpcmNhIDEgbHVuxIMnLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IGx1bmknXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIGx1bsSDJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBsdW5pJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2NpcmNhIDEgYW4nLFxuICAgIG90aGVyOiAnY2lyY2Ege3tjb3VudH19IGFuaSdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBhbicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gYW5pJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAncGVzdGUgMSBhbicsXG4gICAgb3RoZXI6ICdwZXN0ZSB7e2NvdW50fX0gYW5pJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhcHJvYXBlIDEgYW4nLFxuICAgIG90aGVyOiAnYXByb2FwZSB7e2NvdW50fX0gYW5pJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ8OubiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyDDrm4gdXJtxIMnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9