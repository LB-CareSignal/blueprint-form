(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-mn-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/mn/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/mn/_lib/formatDistance/index.js ***!
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
    one: 'секунд хүрэхгүй',
    other: '{{count}} секунд хүрэхгүй'
  },
  xSeconds: {
    one: '1 секунд',
    other: '{{count}} секунд'
  },
  halfAMinute: 'хагас минут',
  lessThanXMinutes: {
    one: 'минут хүрэхгүй',
    other: '{{count}} минут хүрэхгүй'
  },
  xMinutes: {
    one: '1 минут',
    other: '{{count}} минут'
  },
  aboutXHours: {
    one: 'ойролцоогоор 1 цаг',
    other: 'ойролцоогоор {{count}} цаг'
  },
  xHours: {
    one: '1 цаг',
    other: '{{count}} цаг'
  },
  xDays: {
    one: '1 өдөр',
    other: '{{count}} өдөр'
  },
  aboutXWeeks: {
    one: 'ойролцоогоор 1 долоо хоног',
    other: 'ойролцоогоор {{count}} долоо хоног'
  },
  xWeeks: {
    one: '1 долоо хоног',
    other: '{{count}} долоо хоног'
  },
  aboutXMonths: {
    one: 'ойролцоогоор 1 сар',
    other: 'ойролцоогоор {{count}} сар'
  },
  xMonths: {
    one: '1 сар',
    other: '{{count}} сар'
  },
  aboutXYears: {
    one: 'ойролцоогоор 1 жил',
    other: 'ойролцоогоор {{count}} жил'
  },
  xYears: {
    one: '1 жил',
    other: '{{count}} жил'
  },
  overXYears: {
    one: '1 жил гаран',
    other: '{{count}} жил гаран'
  },
  almostXYears: {
    one: 'бараг 1 жил',
    other: 'бараг {{count}} жил'
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
    /**
     * Append genitive case
     */
    var words = result.split(' ');
    var lastword = words.pop();
    result = words.join(' ');
    switch (lastword) {
      case 'секунд':
        result += ' секундийн';
        break;
      case 'минут':
        result += ' минутын';
        break;
      case 'цаг':
        result += ' цагийн';
        break;
      case 'өдөр':
        result += ' өдрийн';
        break;
      case 'сар':
        result += ' сарын';
        break;
      case 'жил':
        result += ' жилийн';
        break;
      case 'хоног':
        result += ' хоногийн';
        break;
      case 'гаран':
        result += ' гараны';
        break;
      case 'хүрэхгүй':
        result += ' хүрэхгүй хугацааны';
        break;
      default:
        result += lastword + '-н';
    }
    if (options.comparison && options.comparison > 0) {
      return result + ' дараа';
    } else {
      return result + ' өмнө';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL21uL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1tbi1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn0YHQtdC60YPQvdC0INGF0q/RgNGN0YXQs9Kv0LknLFxuICAgIG90aGVyOiAne3tjb3VudH19INGB0LXQutGD0L3QtCDRhdKv0YDRjdGF0LPSr9C5J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEg0YHQtdC60YPQvdC0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRgdC10LrRg9C90LQnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAn0YXQsNCz0LDRgSDQvNC40L3Rg9GCJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ9C80LjQvdGD0YIg0YXSr9GA0Y3RhdCz0q/QuScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQuNC90YPRgiDRhdKv0YDRjdGF0LPSr9C5J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEg0LzQuNC90YPRgicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LzQuNC90YPRgidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAgMSDRhtCw0LMnLFxuICAgIG90aGVyOiAn0L7QudGA0L7Qu9GG0L7QvtCz0L7QvtGAIHt7Y291bnR9fSDRhtCw0LMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEg0YbQsNCzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDRhtCw0LMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSDTqdC006nRgCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g06nQtNOp0YAnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn0L7QudGA0L7Qu9GG0L7QvtCz0L7QvtGAIDEg0LTQvtC70L7QviDRhdC+0L3QvtCzJyxcbiAgICBvdGhlcjogJ9C+0LnRgNC+0LvRhtC+0L7Qs9C+0L7RgCB7e2NvdW50fX0g0LTQvtC70L7QviDRhdC+0L3QvtCzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxINC00L7Qu9C+0L4g0YXQvtC90L7QsycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0LTQvtC70L7QviDRhdC+0L3QvtCzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAgMSDRgdCw0YAnLFxuICAgIG90aGVyOiAn0L7QudGA0L7Qu9GG0L7QvtCz0L7QvtGAIHt7Y291bnR9fSDRgdCw0YAnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxINGB0LDRgCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g0YHQsNGAJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ9C+0LnRgNC+0LvRhtC+0L7Qs9C+0L7RgCAxINC20LjQuycsXG4gICAgb3RoZXI6ICfQvtC50YDQvtC70YbQvtC+0LPQvtC+0YAge3tjb3VudH19INC20LjQuydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDQttC40LsnLFxuICAgIG90aGVyOiAne3tjb3VudH19INC20LjQuydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJzEg0LbQuNC7INCz0LDRgNCw0L0nLFxuICAgIG90aGVyOiAne3tjb3VudH19INC20LjQuyDQs9Cw0YDQsNC9J1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICfQsdCw0YDQsNCzIDEg0LbQuNC7JyxcbiAgICBvdGhlcjogJ9Cx0LDRgNCw0LMge3tjb3VudH19INC20LjQuydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIC8qKlxuICAgICAqIEFwcGVuZCBnZW5pdGl2ZSBjYXNlXG4gICAgICovXG4gICAgdmFyIHdvcmRzID0gcmVzdWx0LnNwbGl0KCcgJyk7XG4gICAgdmFyIGxhc3R3b3JkID0gd29yZHMucG9wKCk7XG4gICAgcmVzdWx0ID0gd29yZHMuam9pbignICcpO1xuICAgIHN3aXRjaCAobGFzdHdvcmQpIHtcbiAgICAgIGNhc2UgJ9GB0LXQutGD0L3QtCc6XG4gICAgICAgIHJlc3VsdCArPSAnINGB0LXQutGD0L3QtNC40LnQvSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAn0LzQuNC90YPRgic6XG4gICAgICAgIHJlc3VsdCArPSAnINC80LjQvdGD0YLRi9C9JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfRhtCw0LMnOlxuICAgICAgICByZXN1bHQgKz0gJyDRhtCw0LPQuNC50L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9Op0LTTqdGAJzpcbiAgICAgICAgcmVzdWx0ICs9ICcg06nQtNGA0LjQudC9JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfRgdCw0YAnOlxuICAgICAgICByZXN1bHQgKz0gJyDRgdCw0YDRi9C9JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfQttC40LsnOlxuICAgICAgICByZXN1bHQgKz0gJyDQttC40LvQuNC50L0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ9GF0L7QvdC+0LMnOlxuICAgICAgICByZXN1bHQgKz0gJyDRhdC+0L3QvtCz0LjQudC9JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfQs9Cw0YDQsNC9JzpcbiAgICAgICAgcmVzdWx0ICs9ICcg0LPQsNGA0LDQvdGLJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICfRhdKv0YDRjdGF0LPSr9C5JzpcbiAgICAgICAgcmVzdWx0ICs9ICcg0YXSr9GA0Y3RhdCz0q/QuSDRhdGD0LPQsNGG0LDQsNC90YsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCArPSBsYXN0d29yZCArICct0L0nO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnINC00LDRgNCw0LAnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyDTqdC80L3TqSc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=