(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-lt-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var translations = {
  xseconds_other: 'sekundė_sekundžių_sekundes',
  xminutes_one: 'minutė_minutės_minutę',
  xminutes_other: 'minutės_minučių_minutes',
  xhours_one: 'valanda_valandos_valandą',
  xhours_other: 'valandos_valandų_valandas',
  xdays_one: 'diena_dienos_dieną',
  xdays_other: 'dienos_dienų_dienas',
  xweeks_one: 'savaitė_savaitės_savaitę',
  xweeks_other: 'savaitės_savaičių_savaites',
  xmonths_one: 'mėnuo_mėnesio_mėnesį',
  xmonths_other: 'mėnesiai_mėnesių_mėnesius',
  xyears_one: 'metai_metų_metus',
  xyears_other: 'metai_metų_metus',
  about: 'apie',
  over: 'daugiau nei',
  almost: 'beveik',
  lessthan: 'mažiau nei'
};
var translateSeconds = function translateSeconds(_number, addSuffix, _key, isFuture) {
  if (!addSuffix) {
    return 'kelios sekundės';
  } else {
    return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
  }
};
var translateSingular = function translateSingular(_number, addSuffix, key, isFuture) {
  return !addSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
};
var translate = function translate(number, addSuffix, key, isFuture) {
  var result = number + ' ';
  if (number === 1) {
    return result + translateSingular(number, addSuffix, key, isFuture);
  } else if (!addSuffix) {
    return result + (special(number) ? forms(key)[1] : forms(key)[0]);
  } else {
    if (isFuture) {
      return result + forms(key)[1];
    } else {
      return result + (special(number) ? forms(key)[1] : forms(key)[2]);
    }
  }
};
function special(number) {
  return number % 10 === 0 || number > 10 && number < 20;
}
function forms(key) {
  return translations[key].split('_');
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: translateSeconds,
    other: translate
  },
  xSeconds: {
    one: translateSeconds,
    other: translate
  },
  halfAMinute: 'pusė minutės',
  lessThanXMinutes: {
    one: translateSingular,
    other: translate
  },
  xMinutes: {
    one: translateSingular,
    other: translate
  },
  aboutXHours: {
    one: translateSingular,
    other: translate
  },
  xHours: {
    one: translateSingular,
    other: translate
  },
  xDays: {
    one: translateSingular,
    other: translate
  },
  aboutXWeeks: {
    one: translateSingular,
    other: translate
  },
  xWeeks: {
    one: translateSingular,
    other: translate
  },
  aboutXMonths: {
    one: translateSingular,
    other: translate
  },
  xMonths: {
    one: translateSingular,
    other: translate
  },
  aboutXYears: {
    one: translateSingular,
    other: translate
  },
  xYears: {
    one: translateSingular,
    other: translate
  },
  overXYears: {
    one: translateSingular,
    other: translate
  },
  almostXYears: {
    one: translateSingular,
    other: translate
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var adverb = token.match(/about|over|almost|lessthan/i);
  var unit = adverb ? token.replace(adverb[0], '') : token;
  var isFuture = (options === null || options === void 0 ? void 0 : options.comparison) !== undefined && options.comparison > 0;
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + '_one', isFuture);
  } else {
    result = tokenValue.other(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + '_other', isFuture);
  }
  if (adverb) {
    var _key2 = adverb[0].toLowerCase();
    result = translations[_key2] + ' ' + result;
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'po ' + result;
    } else {
      return 'prieš ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2x0L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWx0LV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgdHJhbnNsYXRpb25zID0ge1xuICB4c2Vjb25kc19vdGhlcjogJ3Nla3VuZMSXX3Nla3VuZMW+acWzX3Nla3VuZGVzJyxcbiAgeG1pbnV0ZXNfb25lOiAnbWludXTEl19taW51dMSXc19taW51dMSZJyxcbiAgeG1pbnV0ZXNfb3RoZXI6ICdtaW51dMSXc19taW51xI1pxbNfbWludXRlcycsXG4gIHhob3Vyc19vbmU6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMSFJyxcbiAgeGhvdXJzX290aGVyOiAndmFsYW5kb3NfdmFsYW5kxbNfdmFsYW5kYXMnLFxuICB4ZGF5c19vbmU6ICdkaWVuYV9kaWVub3NfZGllbsSFJyxcbiAgeGRheXNfb3RoZXI6ICdkaWVub3NfZGllbsWzX2RpZW5hcycsXG4gIHh3ZWVrc19vbmU6ICdzYXZhaXTEl19zYXZhaXTEl3Nfc2F2YWl0xJknLFxuICB4d2Vla3Nfb3RoZXI6ICdzYXZhaXTEl3Nfc2F2YWnEjWnFs19zYXZhaXRlcycsXG4gIHhtb250aHNfb25lOiAnbcSXbnVvX23El25lc2lvX23El25lc8SvJyxcbiAgeG1vbnRoc19vdGhlcjogJ23El25lc2lhaV9txJduZXNpxbNfbcSXbmVzaXVzJyxcbiAgeHllYXJzX29uZTogJ21ldGFpX21ldMWzX21ldHVzJyxcbiAgeHllYXJzX290aGVyOiAnbWV0YWlfbWV0xbNfbWV0dXMnLFxuICBhYm91dDogJ2FwaWUnLFxuICBvdmVyOiAnZGF1Z2lhdSBuZWknLFxuICBhbG1vc3Q6ICdiZXZlaWsnLFxuICBsZXNzdGhhbjogJ21hxb5pYXUgbmVpJ1xufTtcbnZhciB0cmFuc2xhdGVTZWNvbmRzID0gZnVuY3Rpb24gdHJhbnNsYXRlU2Vjb25kcyhfbnVtYmVyLCBhZGRTdWZmaXgsIF9rZXksIGlzRnV0dXJlKSB7XG4gIGlmICghYWRkU3VmZml4KSB7XG4gICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kxJdzJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNGdXR1cmUgPyAna2VsacWzIHNla3VuZMW+acWzJyA6ICdrZWxpYXMgc2VrdW5kZXMnO1xuICB9XG59O1xudmFyIHRyYW5zbGF0ZVNpbmd1bGFyID0gZnVuY3Rpb24gdHJhbnNsYXRlU2luZ3VsYXIoX251bWJlciwgYWRkU3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gIHJldHVybiAhYWRkU3VmZml4ID8gZm9ybXMoa2V5KVswXSA6IGlzRnV0dXJlID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl07XG59O1xudmFyIHRyYW5zbGF0ZSA9IGZ1bmN0aW9uIHRyYW5zbGF0ZShudW1iZXIsIGFkZFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xuICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgcmV0dXJuIHJlc3VsdCArIHRyYW5zbGF0ZVNpbmd1bGFyKG51bWJlciwgYWRkU3VmZml4LCBrZXksIGlzRnV0dXJlKTtcbiAgfSBlbHNlIGlmICghYWRkU3VmZml4KSB7XG4gICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bWJlcikgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRnV0dXJlKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bWJlcikgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gc3BlY2lhbChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlciAlIDEwID09PSAwIHx8IG51bWJlciA+IDEwICYmIG51bWJlciA8IDIwO1xufVxuZnVuY3Rpb24gZm9ybXMoa2V5KSB7XG4gIHJldHVybiB0cmFuc2xhdGlvbnNba2V5XS5zcGxpdCgnXycpO1xufVxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTZWNvbmRzLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNlY29uZHMsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICBoYWxmQU1pbnV0ZTogJ3B1c8SXIG1pbnV0xJdzJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgIG90aGVyOiB0cmFuc2xhdGVcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICBvdGhlcjogdHJhbnNsYXRlXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgb3RoZXI6IHRyYW5zbGF0ZVxuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciBhZHZlcmIgPSB0b2tlbi5tYXRjaCgvYWJvdXR8b3ZlcnxhbG1vc3R8bGVzc3RoYW4vaSk7XG4gIHZhciB1bml0ID0gYWR2ZXJiID8gdG9rZW4ucmVwbGFjZShhZHZlcmJbMF0sICcnKSA6IHRva2VuO1xuICB2YXIgaXNGdXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbXBhcmlzb24pICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMDtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmUoY291bnQsIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSA9PT0gdHJ1ZSwgdW5pdC50b0xvd2VyQ2FzZSgpICsgJ19vbmUnLCBpc0Z1dHVyZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlcihjb3VudCwgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpID09PSB0cnVlLCB1bml0LnRvTG93ZXJDYXNlKCkgKyAnX290aGVyJywgaXNGdXR1cmUpO1xuICB9XG4gIGlmIChhZHZlcmIpIHtcbiAgICB2YXIgX2tleTIgPSBhZHZlcmJbMF0udG9Mb3dlckNhc2UoKTtcbiAgICByZXN1bHQgPSB0cmFuc2xhdGlvbnNbX2tleTJdICsgJyAnICsgcmVzdWx0O1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdwbyAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3ByaWXFoSAnICsgcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9