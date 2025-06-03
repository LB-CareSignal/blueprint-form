(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-is-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/is/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/is/_lib/formatDistance/index.js ***!
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
    one: 'minna en 1 sekúnda',
    other: 'minna en {{count}} sekúndur'
  },
  xSeconds: {
    one: '1 sekúnda',
    other: '{{count}} sekúndur'
  },
  halfAMinute: 'hálf mínúta',
  lessThanXMinutes: {
    one: 'minna en 1 mínúta',
    other: 'minna en {{count}} mínútur'
  },
  xMinutes: {
    one: '1 mínúta',
    other: '{{count}} mínútur'
  },
  aboutXHours: {
    one: 'u.þ.b. 1 klukkustund',
    other: 'u.þ.b. {{count}} klukkustundir'
  },
  xHours: {
    one: '1 klukkustund',
    other: '{{count}} klukkustundir'
  },
  xDays: {
    one: '1 dagur',
    other: '{{count}} dagar'
  },
  aboutXWeeks: {
    one: 'um viku',
    other: 'um {{count}} vikur'
  },
  xWeeks: {
    one: '1 viku',
    other: '{{count}} vikur'
  },
  aboutXMonths: {
    one: 'u.þ.b. 1 mánuður',
    other: 'u.þ.b. {{count}} mánuðir'
  },
  xMonths: {
    one: '1 mánuður',
    other: '{{count}} mánuðir'
  },
  aboutXYears: {
    one: 'u.þ.b. 1 ár',
    other: 'u.þ.b. {{count}} ár'
  },
  xYears: {
    one: '1 ár',
    other: '{{count}} ár'
  },
  overXYears: {
    one: 'meira en 1 ár',
    other: 'meira en {{count}} ár'
  },
  almostXYears: {
    one: 'næstum 1 ár',
    other: 'næstum {{count}} ár'
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
      return 'í ' + result;
    } else {
      return result + ' síðan';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2lzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaXMtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ21pbm5hIGVuIDEgc2Vrw7puZGEnLFxuICAgIG90aGVyOiAnbWlubmEgZW4ge3tjb3VudH19IHNla8O6bmR1cidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNla8O6bmRhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWvDum5kdXInXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaMOhbGYgbcOtbsO6dGEnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbWlubmEgZW4gMSBtw61uw7p0YScsXG4gICAgb3RoZXI6ICdtaW5uYSBlbiB7e2NvdW50fX0gbcOtbsO6dHVyJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbcOtbsO6dGEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG3DrW7DunR1cidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICd1LsO+LmIuIDEga2x1a2t1c3R1bmQnLFxuICAgIG90aGVyOiAndS7Dvi5iLiB7e2NvdW50fX0ga2x1a2t1c3R1bmRpcidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBrbHVra3VzdHVuZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0ga2x1a2t1c3R1bmRpcidcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRhZ3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYWdhcidcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICd1bSB2aWt1JyxcbiAgICBvdGhlcjogJ3VtIHt7Y291bnR9fSB2aWt1cidcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB2aWt1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB2aWt1cidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAndS7Dvi5iLiAxIG3DoW51w7B1cicsXG4gICAgb3RoZXI6ICd1LsO+LmIuIHt7Y291bnR9fSBtw6FudcOwaXInXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG3DoW51w7B1cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbcOhbnXDsGlyJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ3Uuw74uYi4gMSDDoXInLFxuICAgIG90aGVyOiAndS7Dvi5iLiB7e2NvdW50fX0gw6FyJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIMOhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gw6FyJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnbWVpcmEgZW4gMSDDoXInLFxuICAgIG90aGVyOiAnbWVpcmEgZW4ge3tjb3VudH19IMOhcidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnbsOmc3R1bSAxIMOhcicsXG4gICAgb3RoZXI6ICduw6ZzdHVtIHt7Y291bnR9fSDDoXInXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnw60gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgc8Otw7Bhbic7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=