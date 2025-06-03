(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-fi-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function futureSeconds(text) {
  return text.replace(/sekuntia?/, 'sekunnin');
}
function futureMinutes(text) {
  return text.replace(/minuuttia?/, 'minuutin');
}
function futureHours(text) {
  return text.replace(/tuntia?/, 'tunnin');
}
function futureDays(text) {
  return text.replace(/päivää?/, 'päivän');
}
function futureWeeks(text) {
  return text.replace(/(viikko|viikkoa)/, 'viikon');
}
function futureMonths(text) {
  return text.replace(/(kuukausi|kuukautta)/, 'kuukauden');
}
function futureYears(text) {
  return text.replace(/(vuosi|vuotta)/, 'vuoden');
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'alle sekunti',
    other: 'alle {{count}} sekuntia',
    futureTense: futureSeconds
  },
  xSeconds: {
    one: 'sekunti',
    other: '{{count}} sekuntia',
    futureTense: futureSeconds
  },
  halfAMinute: {
    one: 'puoli minuuttia',
    other: 'puoli minuuttia',
    futureTense: function futureTense(_text) {
      return 'puolen minuutin';
    }
  },
  lessThanXMinutes: {
    one: 'alle minuutti',
    other: 'alle {{count}} minuuttia',
    futureTense: futureMinutes
  },
  xMinutes: {
    one: 'minuutti',
    other: '{{count}} minuuttia',
    futureTense: futureMinutes
  },
  aboutXHours: {
    one: 'noin tunti',
    other: 'noin {{count}} tuntia',
    futureTense: futureHours
  },
  xHours: {
    one: 'tunti',
    other: '{{count}} tuntia',
    futureTense: futureHours
  },
  xDays: {
    one: 'päivä',
    other: '{{count}} päivää',
    futureTense: futureDays
  },
  aboutXWeeks: {
    one: 'noin viikko',
    other: 'noin {{count}} viikkoa',
    futureTense: futureWeeks
  },
  xWeeks: {
    one: 'viikko',
    other: '{{count}} viikkoa',
    futureTense: futureWeeks
  },
  aboutXMonths: {
    one: 'noin kuukausi',
    other: 'noin {{count}} kuukautta',
    futureTense: futureMonths
  },
  xMonths: {
    one: 'kuukausi',
    other: '{{count}} kuukautta',
    futureTense: futureMonths
  },
  aboutXYears: {
    one: 'noin vuosi',
    other: 'noin {{count}} vuotta',
    futureTense: futureYears
  },
  xYears: {
    one: 'vuosi',
    other: '{{count}} vuotta',
    futureTense: futureYears
  },
  overXYears: {
    one: 'yli vuosi',
    other: 'yli {{count}} vuotta',
    futureTense: futureYears
  },
  almostXYears: {
    one: 'lähes vuosi',
    other: 'lähes {{count}} vuotta',
    futureTense: futureYears
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  var result = count === 1 ? tokenValue.one : tokenValue.other.replace('{{count}}', String(count));
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return tokenValue.futureTense(result) + ' kuluttua';
    } else {
      return result + ' sitten';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1maS1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZnVuY3Rpb24gZnV0dXJlU2Vjb25kcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL3Nla3VudGlhPy8sICdzZWt1bm5pbicpO1xufVxuZnVuY3Rpb24gZnV0dXJlTWludXRlcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL21pbnV1dHRpYT8vLCAnbWludXV0aW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZUhvdXJzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvdHVudGlhPy8sICd0dW5uaW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZURheXModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9ww6RpdsOkw6Q/LywgJ3DDpGl2w6RuJyk7XG59XG5mdW5jdGlvbiBmdXR1cmVXZWVrcyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyh2aWlra298dmlpa2tvYSkvLCAndmlpa29uJyk7XG59XG5mdW5jdGlvbiBmdXR1cmVNb250aHModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oa3V1a2F1c2l8a3V1a2F1dHRhKS8sICdrdXVrYXVkZW4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZVllYXJzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKHZ1b3NpfHZ1b3R0YSkvLCAndnVvZGVuJyk7XG59XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdhbGxlIHNla3VudGknLFxuICAgIG90aGVyOiAnYWxsZSB7e2NvdW50fX0gc2VrdW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVTZWNvbmRzXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnc2VrdW50aScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2VrdW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVTZWNvbmRzXG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgb25lOiAncHVvbGkgbWludXV0dGlhJyxcbiAgICBvdGhlcjogJ3B1b2xpIG1pbnV1dHRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1bmN0aW9uIGZ1dHVyZVRlbnNlKF90ZXh0KSB7XG4gICAgICByZXR1cm4gJ3B1b2xlbiBtaW51dXRpbic7XG4gICAgfVxuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnYWxsZSBtaW51dXR0aScsXG4gICAgb3RoZXI6ICdhbGxlIHt7Y291bnR9fSBtaW51dXR0aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNaW51dGVzXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnbWludXV0dGknLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV1dHRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZU1pbnV0ZXNcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdub2luIHR1bnRpJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IHR1bnRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZUhvdXJzXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJ3R1bnRpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0dW50aWEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVIb3Vyc1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ3DDpGl2w6QnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHDDpGl2w6TDpCcsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZURheXNcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdub2luIHZpaWtrbycsXG4gICAgb3RoZXI6ICdub2luIHt7Y291bnR9fSB2aWlra29hJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlV2Vla3NcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAndmlpa2tvJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2aWlra29hJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlV2Vla3NcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnbm9pbiBrdXVrYXVzaScsXG4gICAgb3RoZXI6ICdub2luIHt7Y291bnR9fSBrdXVrYXV0dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNb250aHNcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ2t1dWthdXNpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBrdXVrYXV0dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVNb250aHNcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdub2luIHZ1b3NpJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IHZ1b3R0YScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZVllYXJzXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJ3Z1b3NpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2dW90dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVZZWFyc1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAneWxpIHZ1b3NpJyxcbiAgICBvdGhlcjogJ3lsaSB7e2NvdW50fX0gdnVvdHRhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlWWVhcnNcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnbMOkaGVzIHZ1b3NpJyxcbiAgICBvdGhlcjogJ2zDpGhlcyB7e2NvdW50fX0gdnVvdHRhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlWWVhcnNcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgdmFyIHJlc3VsdCA9IGNvdW50ID09PSAxID8gdG9rZW5WYWx1ZS5vbmUgOiB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiB0b2tlblZhbHVlLmZ1dHVyZVRlbnNlKHJlc3VsdCkgKyAnIGt1bHV0dHVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgc2l0dGVuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==