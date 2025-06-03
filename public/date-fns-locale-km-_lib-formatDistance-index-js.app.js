(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-km-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/km/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/km/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: 'តិចជាង {{count}} វិនាទី',
  xSeconds: '{{count}} វិនាទី',
  halfAMinute: 'កន្លះនាទី',
  lessThanXMinutes: 'តិចជាង {{count}} នាទី',
  xMinutes: '{{count}} នាទី',
  aboutXHours: 'ប្រហែល {{count}} ម៉ោង',
  xHours: '{{count}} ម៉ោង',
  xDays: '{{count}} ថ្ងៃ',
  aboutXWeeks: 'ប្រហែល {{count}} សប្តាហ៍',
  xWeeks: '{{count}} សប្តាហ៍',
  aboutXMonths: 'ប្រហែល {{count}} ខែ',
  xMonths: '{{count}} ខែ',
  aboutXYears: 'ប្រហែល {{count}} ឆ្នាំ',
  xYears: '{{count}} ឆ្នាំ',
  overXYears: 'ជាង {{count}} ឆ្នាំ',
  almostXYears: 'ជិត {{count}} ឆ្នាំ'
};
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  var result = tokenValue;
  if (typeof count === 'number') {
    result = result.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'ក្នុងរយៈពេល ' + result;
    } else {
      return result + 'មុន';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ttL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDLGVBQWUsT0FBTztBQUN0QjtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDLGVBQWUsT0FBTztBQUN0Qix5QkFBeUIsT0FBTztBQUNoQyxhQUFhLE9BQU87QUFDcEIsWUFBWSxPQUFPO0FBQ25CLHlCQUF5QixPQUFPO0FBQ2hDLGFBQWEsT0FBTztBQUNwQiwwQkFBMEIsT0FBTztBQUNqQyxjQUFjLE9BQU87QUFDckIseUJBQXlCLE9BQU87QUFDaEMsYUFBYSxPQUFPO0FBQ3BCLHFCQUFxQixPQUFPO0FBQzVCLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1rbS1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiAn4Z6P4Z634Z6F4Z6H4Z624Z6EIHt7Y291bnR9fSDhnpzhnrfhnpPhnrbhnpHhnrgnLFxuICB4U2Vjb25kczogJ3t7Y291bnR9fSDhnpzhnrfhnpPhnrbhnpHhnrgnLFxuICBoYWxmQU1pbnV0ZTogJ+GegOGek+GfkuGem+Gfh+Gek+GetuGekeGeuCcsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6ICfhno/hnrfhnoXhnofhnrbhnoQge3tjb3VudH19IOGek+GetuGekeGeuCcsXG4gIHhNaW51dGVzOiAne3tjb3VudH19IOGek+GetuGekeGeuCcsXG4gIGFib3V0WEhvdXJzOiAn4Z6U4Z+S4Z6a4Z6g4Z+C4Z6bIHt7Y291bnR9fSDhnpjhn4nhn4ThnoQnLFxuICB4SG91cnM6ICd7e2NvdW50fX0g4Z6Y4Z+J4Z+E4Z6EJyxcbiAgeERheXM6ICd7e2NvdW50fX0g4Z6Q4Z+S4Z6E4Z+DJyxcbiAgYWJvdXRYV2Vla3M6ICfhnpThn5LhnprhnqDhn4Lhnpsge3tjb3VudH19IOGen+GelOGfkuGej+GetuGeoOGfjScsXG4gIHhXZWVrczogJ3t7Y291bnR9fSDhnp/hnpThn5Lhno/hnrbhnqDhn40nLFxuICBhYm91dFhNb250aHM6ICfhnpThn5LhnprhnqDhn4Lhnpsge3tjb3VudH19IOGegeGfgicsXG4gIHhNb250aHM6ICd7e2NvdW50fX0g4Z6B4Z+CJyxcbiAgYWJvdXRYWWVhcnM6ICfhnpThn5LhnprhnqDhn4Lhnpsge3tjb3VudH19IOGehuGfkuGek+GetuGfhicsXG4gIHhZZWFyczogJ3t7Y291bnR9fSDhnobhn5LhnpPhnrbhn4YnLFxuICBvdmVyWFllYXJzOiAn4Z6H4Z624Z6EIHt7Y291bnR9fSDhnobhn5LhnpPhnrbhn4YnLFxuICBhbG1vc3RYWWVhcnM6ICfhnofhnrfhno8ge3tjb3VudH19IOGehuGfkuGek+GetuGfhidcbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIHZhciByZXN1bHQgPSB0b2tlblZhbHVlO1xuICBpZiAodHlwZW9mIGNvdW50ID09PSAnbnVtYmVyJykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAn4Z6A4Z+S4Z6T4Z674Z6E4Z6a4Z6Z4Z+I4Z6W4Z+B4Z6bICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAn4Z6Y4Z674Z6TJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==