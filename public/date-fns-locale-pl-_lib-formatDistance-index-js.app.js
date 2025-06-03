(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-pl-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/pl/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/pl/_lib/formatDistance/index.js ***!
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
    one: {
      regular: 'mniej niż sekunda',
      past: 'mniej niż sekundę',
      future: 'mniej niż sekundę'
    },
    twoFour: 'mniej niż {{count}} sekundy',
    other: 'mniej niż {{count}} sekund'
  },
  xSeconds: {
    one: {
      regular: 'sekunda',
      past: 'sekundę',
      future: 'sekundę'
    },
    twoFour: '{{count}} sekundy',
    other: '{{count}} sekund'
  },
  halfAMinute: {
    one: 'pół minuty',
    twoFour: 'pół minuty',
    other: 'pół minuty'
  },
  lessThanXMinutes: {
    one: {
      regular: 'mniej niż minuta',
      past: 'mniej niż minutę',
      future: 'mniej niż minutę'
    },
    twoFour: 'mniej niż {{count}} minuty',
    other: 'mniej niż {{count}} minut'
  },
  xMinutes: {
    one: {
      regular: 'minuta',
      past: 'minutę',
      future: 'minutę'
    },
    twoFour: '{{count}} minuty',
    other: '{{count}} minut'
  },
  aboutXHours: {
    one: {
      regular: 'około godziny',
      past: 'około godziny',
      future: 'około godzinę'
    },
    twoFour: 'około {{count}} godziny',
    other: 'około {{count}} godzin'
  },
  xHours: {
    one: {
      regular: 'godzina',
      past: 'godzinę',
      future: 'godzinę'
    },
    twoFour: '{{count}} godziny',
    other: '{{count}} godzin'
  },
  xDays: {
    one: {
      regular: 'dzień',
      past: 'dzień',
      future: '1 dzień'
    },
    twoFour: '{{count}} dni',
    other: '{{count}} dni'
  },
  aboutXWeeks: {
    one: 'około tygodnia',
    twoFour: 'około {{count}} tygodni',
    other: 'około {{count}} tygodni'
  },
  xWeeks: {
    one: 'tydzień',
    twoFour: '{{count}} tygodnie',
    other: '{{count}} tygodni'
  },
  aboutXMonths: {
    one: 'około miesiąc',
    twoFour: 'około {{count}} miesiące',
    other: 'około {{count}} miesięcy'
  },
  xMonths: {
    one: 'miesiąc',
    twoFour: '{{count}} miesiące',
    other: '{{count}} miesięcy'
  },
  aboutXYears: {
    one: 'około rok',
    twoFour: 'około {{count}} lata',
    other: 'około {{count}} lat'
  },
  xYears: {
    one: 'rok',
    twoFour: '{{count}} lata',
    other: '{{count}} lat'
  },
  overXYears: {
    one: 'ponad rok',
    twoFour: 'ponad {{count}} lata',
    other: 'ponad {{count}} lat'
  },
  almostXYears: {
    one: 'prawie rok',
    twoFour: 'prawie {{count}} lata',
    other: 'prawie {{count}} lat'
  }
};
function declensionGroup(scheme, count) {
  if (count === 1) {
    return scheme.one;
  }
  var rem100 = count % 100;

  // ends with 11-20
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other;
  }
  var rem10 = rem100 % 10;

  // ends with 2, 3, 4
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour;
  }
  return scheme.other;
}
function declension(scheme, count, time) {
  var group = declensionGroup(scheme, count);
  var finalText = typeof group === 'string' ? group : group[time];
  return finalText.replace('{{count}}', String(count));
}
var formatDistance = function formatDistance(token, count, options) {
  var scheme = formatDistanceLocale[token];
  if (!(options !== null && options !== void 0 && options.addSuffix)) {
    return declension(scheme, count, 'regular');
  }
  if (options.comparison && options.comparison > 0) {
    return 'za ' + declension(scheme, count, 'future');
  } else {
    return declension(scheme, count, 'past') + ' temu';
  }
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3BsL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLE9BQU87QUFDakMsd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCLE9BQU87QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBCQUEwQixPQUFPO0FBQ2pDLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixPQUFPO0FBQ3ZCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsT0FBTztBQUM3QixvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQkFBZ0IsT0FBTztBQUN2QixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCLE9BQU87QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0Isb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0Isb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1wbC1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbW5pZWogbmnFvCBzZWt1bmRhJyxcbiAgICAgIHBhc3Q6ICdtbmllaiBuacW8IHNla3VuZMSZJyxcbiAgICAgIGZ1dHVyZTogJ21uaWVqIG5pxbwgc2VrdW5kxJknXG4gICAgfSxcbiAgICB0d29Gb3VyOiAnbW5pZWogbmnFvCB7e2NvdW50fX0gc2VrdW5keScsXG4gICAgb3RoZXI6ICdtbmllaiBuacW8IHt7Y291bnR9fSBzZWt1bmQnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnc2VrdW5kYScsXG4gICAgICBwYXN0OiAnc2VrdW5kxJknLFxuICAgICAgZnV0dXJlOiAnc2VrdW5kxJknXG4gICAgfSxcbiAgICB0d29Gb3VyOiAne3tjb3VudH19IHNla3VuZHknLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBvbmU6ICdww7PFgiBtaW51dHknLFxuICAgIHR3b0ZvdXI6ICdww7PFgiBtaW51dHknLFxuICAgIG90aGVyOiAncMOzxYIgbWludXR5J1xuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbW5pZWogbmnFvCBtaW51dGEnLFxuICAgICAgcGFzdDogJ21uaWVqIG5pxbwgbWludXTEmScsXG4gICAgICBmdXR1cmU6ICdtbmllaiBuacW8IG1pbnV0xJknXG4gICAgfSxcbiAgICB0d29Gb3VyOiAnbW5pZWogbmnFvCB7e2NvdW50fX0gbWludXR5JyxcbiAgICBvdGhlcjogJ21uaWVqIG5pxbwge3tjb3VudH19IG1pbnV0J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ21pbnV0YScsXG4gICAgICBwYXN0OiAnbWludXTEmScsXG4gICAgICBmdXR1cmU6ICdtaW51dMSZJ1xuICAgIH0sXG4gICAgdHdvRm91cjogJ3t7Y291bnR9fSBtaW51dHknLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0J1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ29rb8WCbyBnb2R6aW55JyxcbiAgICAgIHBhc3Q6ICdva2/Fgm8gZ29kemlueScsXG4gICAgICBmdXR1cmU6ICdva2/Fgm8gZ29kemluxJknXG4gICAgfSxcbiAgICB0d29Gb3VyOiAnb2tvxYJvIHt7Y291bnR9fSBnb2R6aW55JyxcbiAgICBvdGhlcjogJ29rb8WCbyB7e2NvdW50fX0gZ29kemluJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdnb2R6aW5hJyxcbiAgICAgIHBhc3Q6ICdnb2R6aW7EmScsXG4gICAgICBmdXR1cmU6ICdnb2R6aW7EmSdcbiAgICB9LFxuICAgIHR3b0ZvdXI6ICd7e2NvdW50fX0gZ29kemlueScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ29kemluJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ2R6aWXFhCcsXG4gICAgICBwYXN0OiAnZHppZcWEJyxcbiAgICAgIGZ1dHVyZTogJzEgZHppZcWEJ1xuICAgIH0sXG4gICAgdHdvRm91cjogJ3t7Y291bnR9fSBkbmknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRuaSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdva2/Fgm8gdHlnb2RuaWEnLFxuICAgIHR3b0ZvdXI6ICdva2/Fgm8ge3tjb3VudH19IHR5Z29kbmknLFxuICAgIG90aGVyOiAnb2tvxYJvIHt7Y291bnR9fSB0eWdvZG5pJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd0eWR6aWXFhCcsXG4gICAgdHdvRm91cjogJ3t7Y291bnR9fSB0eWdvZG5pZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gdHlnb2RuaSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnb2tvxYJvIG1pZXNpxIVjJyxcbiAgICB0d29Gb3VyOiAnb2tvxYJvIHt7Y291bnR9fSBtaWVzacSFY2UnLFxuICAgIG90aGVyOiAnb2tvxYJvIHt7Y291bnR9fSBtaWVzacSZY3knXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICdtaWVzacSFYycsXG4gICAgdHdvRm91cjogJ3t7Y291bnR9fSBtaWVzacSFY2UnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pZXNpxJljeSdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdva2/Fgm8gcm9rJyxcbiAgICB0d29Gb3VyOiAnb2tvxYJvIHt7Y291bnR9fSBsYXRhJyxcbiAgICBvdGhlcjogJ29rb8WCbyB7e2NvdW50fX0gbGF0J1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICdyb2snLFxuICAgIHR3b0ZvdXI6ICd7e2NvdW50fX0gbGF0YScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbGF0J1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAncG9uYWQgcm9rJyxcbiAgICB0d29Gb3VyOiAncG9uYWQge3tjb3VudH19IGxhdGEnLFxuICAgIG90aGVyOiAncG9uYWQge3tjb3VudH19IGxhdCdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAncHJhd2llIHJvaycsXG4gICAgdHdvRm91cjogJ3ByYXdpZSB7e2NvdW50fX0gbGF0YScsXG4gICAgb3RoZXI6ICdwcmF3aWUge3tjb3VudH19IGxhdCdcbiAgfVxufTtcbmZ1bmN0aW9uIGRlY2xlbnNpb25Hcm91cChzY2hlbWUsIGNvdW50KSB7XG4gIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJldHVybiBzY2hlbWUub25lO1xuICB9XG4gIHZhciByZW0xMDAgPSBjb3VudCAlIDEwMDtcblxuICAvLyBlbmRzIHdpdGggMTEtMjBcbiAgaWYgKHJlbTEwMCA8PSAyMCAmJiByZW0xMDAgPiAxMCkge1xuICAgIHJldHVybiBzY2hlbWUub3RoZXI7XG4gIH1cbiAgdmFyIHJlbTEwID0gcmVtMTAwICUgMTA7XG5cbiAgLy8gZW5kcyB3aXRoIDIsIDMsIDRcbiAgaWYgKHJlbTEwID49IDIgJiYgcmVtMTAgPD0gNCkge1xuICAgIHJldHVybiBzY2hlbWUudHdvRm91cjtcbiAgfVxuICByZXR1cm4gc2NoZW1lLm90aGVyO1xufVxuZnVuY3Rpb24gZGVjbGVuc2lvbihzY2hlbWUsIGNvdW50LCB0aW1lKSB7XG4gIHZhciBncm91cCA9IGRlY2xlbnNpb25Hcm91cChzY2hlbWUsIGNvdW50KTtcbiAgdmFyIGZpbmFsVGV4dCA9IHR5cGVvZiBncm91cCA9PT0gJ3N0cmluZycgPyBncm91cCA6IGdyb3VwW3RpbWVdO1xuICByZXR1cm4gZmluYWxUZXh0LnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xufVxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciBzY2hlbWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSkge1xuICAgIHJldHVybiBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQsICdyZWd1bGFyJyk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgcmV0dXJuICd6YSAnICsgZGVjbGVuc2lvbihzY2hlbWUsIGNvdW50LCAnZnV0dXJlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlY2xlbnNpb24oc2NoZW1lLCBjb3VudCwgJ3Bhc3QnKSArICcgdGVtdSc7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==