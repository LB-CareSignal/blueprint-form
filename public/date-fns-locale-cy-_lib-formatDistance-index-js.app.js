(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-cy-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/cy/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/cy/_lib/formatDistance/index.js ***!
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
    one: 'llai na eiliad',
    other: 'llai na {{count}} eiliad'
  },
  xSeconds: {
    one: '1 eiliad',
    other: '{{count}} eiliad'
  },
  halfAMinute: 'hanner munud',
  lessThanXMinutes: {
    one: 'llai na munud',
    two: 'llai na 2 funud',
    other: 'llai na {{count}} munud'
  },
  xMinutes: {
    one: '1 munud',
    two: '2 funud',
    other: '{{count}} munud'
  },
  aboutXHours: {
    one: 'tua 1 awr',
    other: 'tua {{count}} awr'
  },
  xHours: {
    one: '1 awr',
    other: '{{count}} awr'
  },
  xDays: {
    one: '1 diwrnod',
    two: '2 ddiwrnod',
    other: '{{count}} diwrnod'
  },
  aboutXWeeks: {
    one: 'tua 1 wythnos',
    two: 'tua pythefnos',
    other: 'tua {{count}} wythnos'
  },
  xWeeks: {
    one: '1 wythnos',
    two: 'pythefnos',
    other: '{{count}} wythnos'
  },
  aboutXMonths: {
    one: 'tua 1 mis',
    two: 'tua 2 fis',
    other: 'tua {{count}} mis'
  },
  xMonths: {
    one: '1 mis',
    two: '2 fis',
    other: '{{count}} mis'
  },
  aboutXYears: {
    one: 'tua 1 flwyddyn',
    two: 'tua 2 flynedd',
    other: 'tua {{count}} mlynedd'
  },
  xYears: {
    one: '1 flwyddyn',
    two: '2 flynedd',
    other: '{{count}} mlynedd'
  },
  overXYears: {
    one: 'dros 1 flwyddyn',
    two: 'dros 2 flynedd',
    other: 'dros {{count}} mlynedd'
  },
  almostXYears: {
    one: 'bron 1 flwyddyn',
    two: 'bron 2 flynedd',
    other: 'bron {{count}} mlynedd'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && !!tokenValue.two) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'mewn ' + result;
    } else {
      return result + ' yn ôl';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2N5L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWN5LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsbGFpIG5hIGVpbGlhZCcsXG4gICAgb3RoZXI6ICdsbGFpIG5hIHt7Y291bnR9fSBlaWxpYWQnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBlaWxpYWQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGVpbGlhZCdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYW5uZXIgbXVudWQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGxhaSBuYSBtdW51ZCcsXG4gICAgdHdvOiAnbGxhaSBuYSAyIGZ1bnVkJyxcbiAgICBvdGhlcjogJ2xsYWkgbmEge3tjb3VudH19IG11bnVkJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbXVudWQnLFxuICAgIHR3bzogJzIgZnVudWQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG11bnVkJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ3R1YSAxIGF3cicsXG4gICAgb3RoZXI6ICd0dWEge3tjb3VudH19IGF3cidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBhd3InLFxuICAgIG90aGVyOiAne3tjb3VudH19IGF3cidcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRpd3Jub2QnLFxuICAgIHR3bzogJzIgZGRpd3Jub2QnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRpd3Jub2QnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAndHVhIDEgd3l0aG5vcycsXG4gICAgdHdvOiAndHVhIHB5dGhlZm5vcycsXG4gICAgb3RoZXI6ICd0dWEge3tjb3VudH19IHd5dGhub3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd3l0aG5vcycsXG4gICAgdHdvOiAncHl0aGVmbm9zJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3eXRobm9zJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICd0dWEgMSBtaXMnLFxuICAgIHR3bzogJ3R1YSAyIGZpcycsXG4gICAgb3RoZXI6ICd0dWEge3tjb3VudH19IG1pcydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbWlzJyxcbiAgICB0d286ICcyIGZpcycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWlzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ3R1YSAxIGZsd3lkZHluJyxcbiAgICB0d286ICd0dWEgMiBmbHluZWRkJyxcbiAgICBvdGhlcjogJ3R1YSB7e2NvdW50fX0gbWx5bmVkZCdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSBmbHd5ZGR5bicsXG4gICAgdHdvOiAnMiBmbHluZWRkJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtbHluZWRkJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnZHJvcyAxIGZsd3lkZHluJyxcbiAgICB0d286ICdkcm9zIDIgZmx5bmVkZCcsXG4gICAgb3RoZXI6ICdkcm9zIHt7Y291bnR9fSBtbHluZWRkJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdicm9uIDEgZmx3eWRkeW4nLFxuICAgIHR3bzogJ2Jyb24gMiBmbHluZWRkJyxcbiAgICBvdGhlcjogJ2Jyb24ge3tjb3VudH19IG1seW5lZGQnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIgJiYgISF0b2tlblZhbHVlLnR3bykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUudHdvO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ21ld24gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgeW4gw7RsJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==