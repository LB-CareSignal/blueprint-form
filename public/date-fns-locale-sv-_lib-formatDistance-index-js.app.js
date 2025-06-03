(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sv-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sv/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sv/_lib/formatDistance/index.js ***!
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
    one: 'mindre än en sekund',
    other: 'mindre än {{count}} sekunder'
  },
  xSeconds: {
    one: 'en sekund',
    other: '{{count}} sekunder'
  },
  halfAMinute: 'en halv minut',
  lessThanXMinutes: {
    one: 'mindre än en minut',
    other: 'mindre än {{count}} minuter'
  },
  xMinutes: {
    one: 'en minut',
    other: '{{count}} minuter'
  },
  aboutXHours: {
    one: 'ungefär en timme',
    other: 'ungefär {{count}} timmar'
  },
  xHours: {
    one: 'en timme',
    other: '{{count}} timmar'
  },
  xDays: {
    one: 'en dag',
    other: '{{count}} dagar'
  },
  aboutXWeeks: {
    one: 'ungefär en vecka',
    other: 'ungefär {{count}} vecka'
  },
  xWeeks: {
    one: 'en vecka',
    other: '{{count}} vecka'
  },
  aboutXMonths: {
    one: 'ungefär en månad',
    other: 'ungefär {{count}} månader'
  },
  xMonths: {
    one: 'en månad',
    other: '{{count}} månader'
  },
  aboutXYears: {
    one: 'ungefär ett år',
    other: 'ungefär {{count}} år'
  },
  xYears: {
    one: 'ett år',
    other: '{{count}} år'
  },
  overXYears: {
    one: 'över ett år',
    other: 'över {{count}} år'
  },
  almostXYears: {
    one: 'nästan ett år',
    other: 'nästan {{count}} år'
  }
};
var wordMapping = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv'];
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
      return result + ' sedan';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3N2L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xELEtBQUs7QUFDTCwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXN2LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdtaW5kcmUgw6RuIGVuIHNla3VuZCcsXG4gICAgb3RoZXI6ICdtaW5kcmUgw6RuIHt7Y291bnR9fSBzZWt1bmRlcidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICdlbiBzZWt1bmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZGVyJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2VuIGhhbHYgbWludXQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWluZHJlIMOkbiBlbiBtaW51dCcsXG4gICAgb3RoZXI6ICdtaW5kcmUgw6RuIHt7Y291bnR9fSBtaW51dGVyJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ2VuIG1pbnV0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVyJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3VuZ2Vmw6RyIGVuIHRpbW1lJyxcbiAgICBvdGhlcjogJ3VuZ2Vmw6RyIHt7Y291bnR9fSB0aW1tYXInXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJ2VuIHRpbW1lJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0aW1tYXInXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnZW4gZGFnJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYWdhcidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICd1bmdlZsOkciBlbiB2ZWNrYScsXG4gICAgb3RoZXI6ICd1bmdlZsOkciB7e2NvdW50fX0gdmVja2EnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJ2VuIHZlY2thJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2ZWNrYSdcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAndW5nZWbDpHIgZW4gbcOlbmFkJyxcbiAgICBvdGhlcjogJ3VuZ2Vmw6RyIHt7Y291bnR9fSBtw6VuYWRlcidcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ2VuIG3DpW5hZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbcOlbmFkZXInXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAndW5nZWbDpHIgZXR0IMOlcicsXG4gICAgb3RoZXI6ICd1bmdlZsOkciB7e2NvdW50fX0gw6VyJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICdldHQgw6VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDDpXInXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfDtnZlciBldHQgw6VyJyxcbiAgICBvdGhlcjogJ8O2dmVyIHt7Y291bnR9fSDDpXInXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ27DpHN0YW4gZXR0IMOlcicsXG4gICAgb3RoZXI6ICduw6RzdGFuIHt7Y291bnR9fSDDpXInXG4gIH1cbn07XG52YXIgd29yZE1hcHBpbmcgPSBbJ25vbGwnLCAnZW4nLCAndHbDpScsICd0cmUnLCAnZnlyYScsICdmZW0nLCAnc2V4JywgJ3NqdScsICfDpXR0YScsICduaW8nLCAndGlvJywgJ2VsdmEnLCAndG9sdiddO1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25seU51bWVyaWMpIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQgPCAxMyA/IHdvcmRNYXBwaW5nW2NvdW50XSA6IFN0cmluZyhjb3VudCkpO1xuICAgIH1cbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnb20gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgc2VkYW4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9