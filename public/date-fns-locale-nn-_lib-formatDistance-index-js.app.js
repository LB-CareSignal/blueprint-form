(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-nn-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/nn/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/nn/_lib/formatDistance/index.js ***!
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
    one: 'mindre enn eitt sekund',
    other: 'mindre enn {{count}} sekund'
  },
  xSeconds: {
    one: 'eitt sekund',
    other: '{{count}} sekund'
  },
  halfAMinute: 'eit halvt minutt',
  lessThanXMinutes: {
    one: 'mindre enn eitt minutt',
    other: 'mindre enn {{count}} minutt'
  },
  xMinutes: {
    one: 'eitt minutt',
    other: '{{count}} minutt'
  },
  aboutXHours: {
    one: 'omtrent ein time',
    other: 'omtrent {{count}} timar'
  },
  xHours: {
    one: 'ein time',
    other: '{{count}} timar'
  },
  xDays: {
    one: 'ein dag',
    other: '{{count}} dagar'
  },
  aboutXWeeks: {
    one: 'omtrent ei veke',
    other: 'omtrent {{count}} veker'
  },
  xWeeks: {
    one: 'ei veke',
    other: '{{count}} veker'
  },
  aboutXMonths: {
    one: 'omtrent ein månad',
    other: 'omtrent {{count}} månader'
  },
  xMonths: {
    one: 'ein månad',
    other: '{{count}} månader'
  },
  aboutXYears: {
    one: 'omtrent eitt år',
    other: 'omtrent {{count}} år'
  },
  xYears: {
    one: 'eitt år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'over eitt år',
    other: 'over {{count}} år'
  },
  almostXYears: {
    one: 'nesten eitt år',
    other: 'nesten {{count}} år'
  }
};
var wordMapping = ['null', 'ein', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'];
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    if (options && options.onlyNumeric) {
      result = tokenValue.other.replace('{{count}}', String(count));
    } else {
      result = tokenValue.other.replace('{{count}}', count < 13 ? wordMapping[count] : String(count));
    }
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'om ' + result;
    } else {
      return result + ' sidan';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL25uL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xELEtBQUs7QUFDTCwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLW5uLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdtaW5kcmUgZW5uIGVpdHQgc2VrdW5kJyxcbiAgICBvdGhlcjogJ21pbmRyZSBlbm4ge3tjb3VudH19IHNla3VuZCdcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICdlaXR0IHNla3VuZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW5kJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2VpdCBoYWx2dCBtaW51dHQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWluZHJlIGVubiBlaXR0IG1pbnV0dCcsXG4gICAgb3RoZXI6ICdtaW5kcmUgZW5uIHt7Y291bnR9fSBtaW51dHQnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnZWl0dCBtaW51dHQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0dCdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdvbXRyZW50IGVpbiB0aW1lJyxcbiAgICBvdGhlcjogJ29tdHJlbnQge3tjb3VudH19IHRpbWFyJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICdlaW4gdGltZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdGltYXInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnZWluIGRhZycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGFnYXInXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnb210cmVudCBlaSB2ZWtlJyxcbiAgICBvdGhlcjogJ29tdHJlbnQge3tjb3VudH19IHZla2VyJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICdlaSB2ZWtlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2ZWtlcidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnb210cmVudCBlaW4gbcOlbmFkJyxcbiAgICBvdGhlcjogJ29tdHJlbnQge3tjb3VudH19IG3DpW5hZGVyJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnZWluIG3DpW5hZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbcOlbmFkZXInXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnb210cmVudCBlaXR0IMOlcicsXG4gICAgb3RoZXI6ICdvbXRyZW50IHt7Y291bnR9fSDDpXInXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ2VpdHQgw6VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDDpXInXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIGVpdHQgw6VyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IMOlcidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnbmVzdGVuIGVpdHQgw6VyJyxcbiAgICBvdGhlcjogJ25lc3RlbiB7e2NvdW50fX0gw6VyJ1xuICB9XG59O1xudmFyIHdvcmRNYXBwaW5nID0gWydudWxsJywgJ2VpbicsICd0bycsICd0cmUnLCAnZmlyZScsICdmZW0nLCAnc2VrcycsICdzanUnLCAnw6V0dGUnLCAnbmknLCAndGknLCAnZWxsZXZlJywgJ3RvbHYnXTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9ubHlOdW1lcmljKSB7XG4gICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50IDwgMTMgPyB3b3JkTWFwcGluZ1tjb3VudF0gOiBTdHJpbmcoY291bnQpKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ29tICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIHNpZGFuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==