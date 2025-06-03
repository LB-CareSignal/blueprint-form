(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-he-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/he/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/he/_lib/formatDistance/index.js ***!
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
    one: 'פחות משנייה',
    two: 'פחות משתי שניות',
    other: 'פחות מ־{{count}} שניות'
  },
  xSeconds: {
    one: 'שנייה',
    two: 'שתי שניות',
    other: '{{count}} שניות'
  },
  halfAMinute: 'חצי דקה',
  lessThanXMinutes: {
    one: 'פחות מדקה',
    two: 'פחות משתי דקות',
    other: 'פחות מ־{{count}} דקות'
  },
  xMinutes: {
    one: 'דקה',
    two: 'שתי דקות',
    other: '{{count}} דקות'
  },
  aboutXHours: {
    one: 'כשעה',
    two: 'כשעתיים',
    other: 'כ־{{count}} שעות'
  },
  xHours: {
    one: 'שעה',
    two: 'שעתיים',
    other: '{{count}} שעות'
  },
  xDays: {
    one: 'יום',
    two: 'יומיים',
    other: '{{count}} ימים'
  },
  aboutXWeeks: {
    one: 'כשבוע',
    two: 'כשבועיים',
    other: 'כ־{{count}} שבועות'
  },
  xWeeks: {
    one: 'שבוע',
    two: 'שבועיים',
    other: '{{count}} שבועות'
  },
  aboutXMonths: {
    one: 'כחודש',
    two: 'כחודשיים',
    other: 'כ־{{count}} חודשים'
  },
  xMonths: {
    one: 'חודש',
    two: 'חודשיים',
    other: '{{count}} חודשים'
  },
  aboutXYears: {
    one: 'כשנה',
    two: 'כשנתיים',
    other: 'כ־{{count}} שנים'
  },
  xYears: {
    one: 'שנה',
    two: 'שנתיים',
    other: '{{count}} שנים'
  },
  overXYears: {
    one: 'יותר משנה',
    two: 'יותר משנתיים',
    other: 'יותר מ־{{count}} שנים'
  },
  almostXYears: {
    one: 'כמעט שנה',
    two: 'כמעט שנתיים',
    other: 'כמעט {{count}} שנים'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  // Return word instead of `in one day` or `one day ago`
  if (token === 'xDays' && options !== null && options !== void 0 && options.addSuffix && count <= 2) {
    if (options.comparison && options.comparison > 0) {
      return count === 1 ? 'מחר' : 'מחרתיים';
    }
    return count === 1 ? 'אתמול' : 'שלשום';
  }
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'בעוד ' + result;
    } else {
      return 'לפני ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2hlL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1oZS1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAn16TXl9eV16og157Xqdeg15nXmdeUJyxcbiAgICB0d286ICfXpNeX15XXqiDXntep16rXmSDXqdeg15nXldeqJyxcbiAgICBvdGhlcjogJ9ek15fXldeqINee1r57e2NvdW50fX0g16nXoNeZ15XXqidcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICfXqdeg15nXmdeUJyxcbiAgICB0d286ICfXqdeq15kg16nXoNeZ15XXqicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g16nXoNeZ15XXqidcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfXl9em15kg15PXp9eUJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ9ek15fXldeqINee15PXp9eUJyxcbiAgICB0d286ICfXpNeX15XXqiDXntep16rXmSDXk9en15XXqicsXG4gICAgb3RoZXI6ICfXpNeX15XXqiDXnta+e3tjb3VudH19INeT16fXldeqJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJ9eT16fXlCcsXG4gICAgdHdvOiAn16nXqteZINeT16fXldeqJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDXk9en15XXqidcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICfXm9ep16LXlCcsXG4gICAgdHdvOiAn15vXqdei16rXmdeZ150nLFxuICAgIG90aGVyOiAn15vWvnt7Y291bnR9fSDXqdei15XXqidcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAn16nXoteUJyxcbiAgICB0d286ICfXqdei16rXmdeZ150nLFxuICAgIG90aGVyOiAne3tjb3VudH19INep16LXldeqJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJ9eZ15XXnScsXG4gICAgdHdvOiAn15nXldee15nXmdedJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDXmdee15nXnSdcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICfXm9ep15HXldeiJyxcbiAgICB0d286ICfXm9ep15HXldei15nXmdedJyxcbiAgICBvdGhlcjogJ9eb1r57e2NvdW50fX0g16nXkdeV16LXldeqJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICfXqdeR15XXoicsXG4gICAgdHdvOiAn16nXkdeV16LXmdeZ150nLFxuICAgIG90aGVyOiAne3tjb3VudH19INep15HXldei15XXqidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAn15vXl9eV15PXqScsXG4gICAgdHdvOiAn15vXl9eV15PXqdeZ15nXnScsXG4gICAgb3RoZXI6ICfXm9a+e3tjb3VudH19INeX15XXk9ep15nXnSdcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJ9eX15XXk9epJyxcbiAgICB0d286ICfXl9eV15PXqdeZ15nXnScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g15fXldeT16nXmdedJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ9eb16nXoNeUJyxcbiAgICB0d286ICfXm9ep16DXqteZ15nXnScsXG4gICAgb3RoZXI6ICfXm9a+e3tjb3VudH19INep16DXmdedJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICfXqdeg15QnLFxuICAgIHR3bzogJ9ep16DXqteZ15nXnScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g16nXoNeZ150nXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICfXmdeV16rXqCDXntep16DXlCcsXG4gICAgdHdvOiAn15nXldeq16gg157Xqdeg16rXmdeZ150nLFxuICAgIG90aGVyOiAn15nXldeq16gg157Wvnt7Y291bnR9fSDXqdeg15nXnSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn15vXntei15gg16nXoNeUJyxcbiAgICB0d286ICfXm9ee16LXmCDXqdeg16rXmdeZ150nLFxuICAgIG90aGVyOiAn15vXntei15gge3tjb3VudH19INep16DXmdedJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIC8vIFJldHVybiB3b3JkIGluc3RlYWQgb2YgYGluIG9uZSBkYXlgIG9yIGBvbmUgZGF5IGFnb2BcbiAgaWYgKHRva2VuID09PSAneERheXMnICYmIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4ICYmIGNvdW50IDw9IDIpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBjb3VudCA9PT0gMSA/ICfXnteX16gnIDogJ9ee15fXqNeq15nXmdedJztcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ID09PSAxID8gJ9eQ16rXnteV15wnIDogJ9ep15zXqdeV150nO1xuICB9XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS50d287XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn15HXoteV15MgJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfXnNek16DXmSAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9