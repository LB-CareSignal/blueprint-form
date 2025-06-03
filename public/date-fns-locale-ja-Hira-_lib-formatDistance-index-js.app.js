(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ja-Hira-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ja-Hira/_lib/formatDistance/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/locale/ja-Hira/_lib/formatDistance/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1びょうみまん',
    other: '{{count}}びょうみまん',
    oneWithSuffix: 'やく1びょう',
    otherWithSuffix: 'やく{{count}}びょう'
  },
  xSeconds: {
    one: '1びょう',
    other: '{{count}}びょう'
  },
  halfAMinute: '30びょう',
  lessThanXMinutes: {
    one: '1ぷんみまん',
    other: '{{count}}ふんみまん',
    oneWithSuffix: 'やく1ぷん',
    otherWithSuffix: 'やく{{count}}ふん'
  },
  xMinutes: {
    one: '1ぷん',
    other: '{{count}}ふん'
  },
  aboutXHours: {
    one: 'やく1じかん',
    other: 'やく{{count}}じかん'
  },
  xHours: {
    one: '1じかん',
    other: '{{count}}じかん'
  },
  xDays: {
    one: '1にち',
    other: '{{count}}にち'
  },
  aboutXWeeks: {
    one: 'やく1しゅうかん',
    other: 'やく{{count}}しゅうかん'
  },
  xWeeks: {
    one: '1しゅうかん',
    other: '{{count}}しゅうかん'
  },
  aboutXMonths: {
    one: 'やく1かげつ',
    other: 'やく{{count}}かげつ'
  },
  xMonths: {
    one: '1かげつ',
    other: '{{count}}かげつ'
  },
  aboutXYears: {
    one: 'やく1ねん',
    other: 'やく{{count}}ねん'
  },
  xYears: {
    one: '1ねん',
    other: '{{count}}ねん'
  },
  overXYears: {
    one: '1ねんいじょう',
    other: '{{count}}ねんいじょう'
  },
  almostXYears: {
    one: '1ねんちかく',
    other: '{{count}}ねんちかく'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    if (options.addSuffix && tokenValue.oneWithSuffix) {
      result = tokenValue.oneWithSuffix;
    } else {
      result = tokenValue.one;
    }
  } else {
    if (options.addSuffix && tokenValue.otherWithSuffix) {
      result = tokenValue.otherWithSuffix.replace('{{count}}', String(count));
    } else {
      result = tokenValue.other.replace('{{count}}', String(count));
    }
  }
  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + 'あと';
    } else {
      return result + 'まえ';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2phLUhpcmEvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscURBQXFELE9BQU87QUFDNUQsS0FBSztBQUNMLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtamEtSGlyYS1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnMeOBs+OCh+OBhuOBv+OBvuOCkycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jgbPjgofjgYbjgb/jgb7jgpMnLFxuICAgIG9uZVdpdGhTdWZmaXg6ICfjgoTjgY8x44Gz44KH44GGJyxcbiAgICBvdGhlcldpdGhTdWZmaXg6ICfjgoTjgY97e2NvdW50fX3jgbPjgofjgYYnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMeOBs+OCh+OBhicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jgbPjgofjgYYnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnMzDjgbPjgofjgYYnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnMeOBt+OCk+OBv+OBvuOCkycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jgbXjgpPjgb/jgb7jgpMnLFxuICAgIG9uZVdpdGhTdWZmaXg6ICfjgoTjgY8x44G344KTJyxcbiAgICBvdGhlcldpdGhTdWZmaXg6ICfjgoTjgY97e2NvdW50fX3jgbXjgpMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMeOBt+OCkycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jgbXjgpMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn44KE44GPMeOBmOOBi+OCkycsXG4gICAgb3RoZXI6ICfjgoTjgY97e2NvdW50fX3jgZjjgYvjgpMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzHjgZjjgYvjgpMnLFxuICAgIG90aGVyOiAne3tjb3VudH1944GY44GL44KTJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzHjgavjgaEnLFxuICAgIG90aGVyOiAne3tjb3VudH1944Gr44GhJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ+OChOOBjzHjgZfjgoXjgYbjgYvjgpMnLFxuICAgIG90aGVyOiAn44KE44GPe3tjb3VudH1944GX44KF44GG44GL44KTJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcx44GX44KF44GG44GL44KTJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feOBl+OCheOBhuOBi+OCkydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn44KE44GPMeOBi+OBkuOBpCcsXG4gICAgb3RoZXI6ICfjgoTjgY97e2NvdW50fX3jgYvjgZLjgaQnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcx44GL44GS44GkJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feOBi+OBkuOBpCdcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICfjgoTjgY8x44Gt44KTJyxcbiAgICBvdGhlcjogJ+OChOOBj3t7Y291bnR9feOBreOCkydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMeOBreOCkycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jga3jgpMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICcx44Gt44KT44GE44GY44KH44GGJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9feOBreOCk+OBhOOBmOOCh+OBhidcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnMeOBreOCk+OBoeOBi+OBjycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX3jga3jgpPjgaHjgYvjgY8nXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGlmIChvcHRpb25zLmFkZFN1ZmZpeCAmJiB0b2tlblZhbHVlLm9uZVdpdGhTdWZmaXgpIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lV2l0aFN1ZmZpeDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb25zLmFkZFN1ZmZpeCAmJiB0b2tlblZhbHVlLm90aGVyV2l0aFN1ZmZpeCkge1xuICAgICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlcldpdGhTdWZmaXgucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfjgYLjgagnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJ+OBvuOBiCc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=