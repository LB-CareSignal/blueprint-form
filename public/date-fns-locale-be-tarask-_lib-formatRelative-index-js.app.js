(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-tarask-_lib-formatRelative-index-js"],{

/***/ "./node_modules/date-fns/locale/be-tarask/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/locale/be-tarask/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = __webpack_require__(/*! ../../../../index.js */ "./node_modules/date-fns/index.js");
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js"));
var accusativeWeekdays = ['нядзелю', 'панядзелак', 'аўторак', 'сераду', 'чацьвер', 'пятніцу', 'суботу'];
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у мінулую " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у мінулы " + weekday + " а' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'у " + weekday + " а' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступную " + weekday + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у наступны " + weekday + " а' p";
  }
}
var lastWeekFormat = function lastWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormat = function nextWeekFormat(dirtyDate, baseDate, options) {
  var date = (0, _index.toDate)(dirtyDate);
  var day = date.getUTCDay();
  if ((0, _index2.default)(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'учора а' p",
  today: "'сёньня а' p",
  tomorrow: "'заўтра а' p",
  nextWeek: nextWeekFormat,
  other: 'P'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlLXRhcmFzay9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyw4REFBc0I7QUFDM0MscUNBQXFDLG1CQUFPLENBQUMsb0dBQXlDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLWJlLXRhcmFzay1fbGliLWZvcm1hdFJlbGF0aXZlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW5kZXguanNcIik7XG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uLy4uL19saWIvaXNTYW1lVVRDV2Vlay9pbmRleC5qc1wiKSk7XG52YXIgYWNjdXNhdGl2ZVdlZWtkYXlzID0gWyfQvdGP0LTQt9C10LvRjicsICfQv9Cw0L3Rj9C00LfQtdC70LDQuicsICfQsNGe0YLQvtGA0LDQuicsICfRgdC10YDQsNC00YMnLCAn0YfQsNGG0YzQstC10YAnLCAn0L/Rj9GC0L3RltGG0YMnLCAn0YHRg9Cx0L7RgtGDJ107XG5mdW5jdGlvbiBsYXN0V2VlayhkYXkpIHtcbiAgdmFyIHdlZWtkYXkgPSBhY2N1c2F0aXZlV2Vla2RheXNbZGF5XTtcbiAgc3dpdGNoIChkYXkpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNTpcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gXCIn0YMg0LzRltC90YPQu9GD0Y4gXCIgKyB3ZWVrZGF5ICsgXCIg0LAnIHBcIjtcbiAgICBjYXNlIDE6XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBcIifRgyDQvNGW0L3Rg9C70YsgXCIgKyB3ZWVrZGF5ICsgXCIg0LAnIHBcIjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc1dlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIHJldHVybiBcIifRgyBcIiArIHdlZWtkYXkgKyBcIiDQsCcgcFwiO1xufVxuZnVuY3Rpb24gbmV4dFdlZWsoZGF5KSB7XG4gIHZhciB3ZWVrZGF5ID0gYWNjdXNhdGl2ZVdlZWtkYXlzW2RheV07XG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDU6XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFwiJ9GDINC90LDRgdGC0YPQv9C90YPRjiBcIiArIHdlZWtkYXkgKyBcIiDQsCcgcFwiO1xuICAgIGNhc2UgMTpcbiAgICBjYXNlIDI6XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFwiJ9GDINC90LDRgdGC0YPQv9C90YsgXCIgKyB3ZWVrZGF5ICsgXCIg0LAnIHBcIjtcbiAgfVxufVxudmFyIGxhc3RXZWVrRm9ybWF0ID0gZnVuY3Rpb24gbGFzdFdlZWtGb3JtYXQoZGlydHlEYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsYXN0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIG5leHRXZWVrRm9ybWF0ID0gZnVuY3Rpb24gbmV4dFdlZWtGb3JtYXQoZGlydHlEYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgaWYgKCgwLCBfaW5kZXgyLmRlZmF1bHQpKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiB0aGlzV2VlayhkYXkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXh0V2VlayhkYXkpO1xuICB9XG59O1xudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogbGFzdFdlZWtGb3JtYXQsXG4gIHllc3RlcmRheTogXCIn0YPRh9C+0YDQsCDQsCcgcFwiLFxuICB0b2RheTogXCIn0YHRkdC90YzQvdGPINCwJyBwXCIsXG4gIHRvbW9ycm93OiBcIifQt9Cw0Z7RgtGA0LAg0LAnIHBcIixcbiAgbmV4dFdlZWs6IG5leHRXZWVrRm9ybWF0LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXRSZWxhdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==