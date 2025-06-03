(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-lv-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/lv/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/lv/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function buildLocalizeTokenFn(schema) {
  return function (count, options) {
    if (count === 1) {
      if (options !== null && options !== void 0 && options.addSuffix) {
        return schema.one[0].replace('{{time}}', schema.one[2]);
      } else {
        return schema.one[0].replace('{{time}}', schema.one[1]);
      }
    } else {
      var rem = count % 10 === 1 && count % 100 !== 11;
      if (options !== null && options !== void 0 && options.addSuffix) {
        return schema.other[0].replace('{{time}}', rem ? schema.other[3] : schema.other[4]).replace('{{count}}', String(count));
      } else {
        return schema.other[0].replace('{{time}}', rem ? schema.other[1] : schema.other[2]).replace('{{count}}', String(count));
      }
    }
  };
}
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'sekundi', 'sekundi'],
    other: ['mazāk nekā {{count}} {{time}}', 'sekunde', 'sekundes', 'sekundes', 'sekundēm']
  }),
  xSeconds: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'sekunde', 'sekundes'],
    other: ['{{count}} {{time}}', 'sekunde', 'sekundes', 'sekundes', 'sekundēm']
  }),
  halfAMinute: function halfAMinute(_count, options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      return 'pusminūtes';
    } else {
      return 'pusminūte';
    }
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'minūti', 'minūti'],
    other: ['mazāk nekā {{count}} {{time}}', 'minūte', 'minūtes', 'minūtes', 'minūtēm']
  }),
  xMinutes: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'minūte', 'minūtes'],
    other: ['{{count}} {{time}}', 'minūte', 'minūtes', 'minūtes', 'minūtēm']
  }),
  aboutXHours: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'stunda', 'stundas'],
    other: ['apmēram {{count}} {{time}}', 'stunda', 'stundas', 'stundas', 'stundām']
  }),
  xHours: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'stunda', 'stundas'],
    other: ['{{count}} {{time}}', 'stunda', 'stundas', 'stundas', 'stundām']
  }),
  xDays: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'diena', 'dienas'],
    other: ['{{count}} {{time}}', 'diena', 'dienas', 'dienas', 'dienām']
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'nedēļa', 'nedēļas'],
    other: ['apmēram {{count}} {{time}}', 'nedēļa', 'nedēļu', 'nedēļas', 'nedēļām']
  }),
  xWeeks: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'nedēļa', 'nedēļas'],
    other: ['{{count}} {{time}}',
    // TODO
    'nedēļa', 'nedēļu', 'nedēļas', 'nedēļām']
  }),
  aboutXMonths: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'mēnesis', 'mēneša'],
    other: ['apmēram {{count}} {{time}}', 'mēnesis', 'mēneši', 'mēneša', 'mēnešiem']
  }),
  xMonths: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'mēnesis', 'mēneša'],
    other: ['{{count}} {{time}}', 'mēnesis', 'mēneši', 'mēneša', 'mēnešiem']
  }),
  aboutXYears: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'gads', 'gada'],
    other: ['apmēram {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  xYears: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'gads', 'gada'],
    other: ['{{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  overXYears: buildLocalizeTokenFn({
    one: ['ilgāk par 1 {{time}}', 'gadu', 'gadu'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  almostXYears: buildLocalizeTokenFn({
    one: ['gandrīz 1 {{time}}', 'gads', 'gada'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  })
};
var formatDistance = function formatDistance(token, count, options) {
  var result = formatDistanceLocale[token](count, options);
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'pēc ' + result;
    } else {
      return 'pirms ' + result;
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2x2L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDLE9BQU87QUFDUCx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMENBQTBDLE1BQU0sdURBQXVELE9BQU87QUFDOUcsT0FBTztBQUNQLDBDQUEwQyxNQUFNLHVEQUF1RCxPQUFPO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCLDBCQUEwQixPQUFPLEdBQUcsTUFBTTtBQUMxQyxHQUFHO0FBQ0g7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPLEdBQUcsTUFBTTtBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QiwwQkFBMEIsT0FBTyxHQUFHLE1BQU07QUFDMUMsR0FBRztBQUNIO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsT0FBTyxHQUFHLE1BQU07QUFDL0IsR0FBRztBQUNIO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsdUJBQXVCLE9BQU8sR0FBRyxNQUFNO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU8sR0FBRyxNQUFNO0FBQy9CLEdBQUc7QUFDSDtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU8sR0FBRyxNQUFNO0FBQy9CLEdBQUc7QUFDSDtBQUNBLHVCQUF1QixNQUFNO0FBQzdCLHVCQUF1QixPQUFPLEdBQUcsTUFBTTtBQUN2QyxHQUFHO0FBQ0g7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPLEdBQUcsTUFBTTtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsdUJBQXVCLE9BQU8sR0FBRyxNQUFNO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU8sR0FBRyxNQUFNO0FBQy9CLEdBQUc7QUFDSDtBQUNBLHVCQUF1QixNQUFNO0FBQzdCLHVCQUF1QixPQUFPLEdBQUcsTUFBTTtBQUN2QyxHQUFHO0FBQ0g7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPLEdBQUcsTUFBTTtBQUMvQixHQUFHO0FBQ0g7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQiwyQkFBMkIsT0FBTyxHQUFHLE1BQU07QUFDM0MsR0FBRztBQUNIO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsMkJBQTJCLE9BQU8sR0FBRyxNQUFNO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtbHYtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVUb2tlbkZuKHNjaGVtYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvdW50LCBvcHRpb25zKSB7XG4gICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYS5vbmVbMF0ucmVwbGFjZSgne3t0aW1lfX0nLCBzY2hlbWEub25lWzJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWEub25lWzBdLnJlcGxhY2UoJ3t7dGltZX19Jywgc2NoZW1hLm9uZVsxXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZW0gPSBjb3VudCAlIDEwID09PSAxICYmIGNvdW50ICUgMTAwICE9PSAxMTtcbiAgICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gc2NoZW1hLm90aGVyWzBdLnJlcGxhY2UoJ3t7dGltZX19JywgcmVtID8gc2NoZW1hLm90aGVyWzNdIDogc2NoZW1hLm90aGVyWzRdKS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWEub3RoZXJbMF0ucmVwbGFjZSgne3t0aW1lfX0nLCByZW0gPyBzY2hlbWEub3RoZXJbMV0gOiBzY2hlbWEub3RoZXJbMl0pLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydtYXrEgWsgcGFyIHt7dGltZX19JywgJ3Nla3VuZGknLCAnc2VrdW5kaSddLFxuICAgIG90aGVyOiBbJ21hesSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnc2VrdW5kZScsICdzZWt1bmRlcycsICdzZWt1bmRlcycsICdzZWt1bmTEk20nXVxuICB9KSxcbiAgeFNlY29uZHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdzZWt1bmRlJywgJ3Nla3VuZGVzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ3Nla3VuZGUnLCAnc2VrdW5kZXMnLCAnc2VrdW5kZXMnLCAnc2VrdW5kxJNtJ11cbiAgfSksXG4gIGhhbGZBTWludXRlOiBmdW5jdGlvbiBoYWxmQU1pbnV0ZShfY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgIHJldHVybiAncHVzbWluxat0ZXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3B1c21pbsWrdGUnO1xuICAgIH1cbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydtYXrEgWsgcGFyIHt7dGltZX19JywgJ21pbsWrdGknLCAnbWluxat0aSddLFxuICAgIG90aGVyOiBbJ21hesSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnbWluxat0ZScsICdtaW7Fq3RlcycsICdtaW7Fq3RlcycsICdtaW7Fq3TEk20nXVxuICB9KSxcbiAgeE1pbnV0ZXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdtaW7Fq3RlJywgJ21pbsWrdGVzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ21pbsWrdGUnLCAnbWluxat0ZXMnLCAnbWluxat0ZXMnLCAnbWluxat0xJNtJ11cbiAgfSksXG4gIGFib3V0WEhvdXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2FwbcSTcmFtIDEge3t0aW1lfX0nLCAnc3R1bmRhJywgJ3N0dW5kYXMnXSxcbiAgICBvdGhlcjogWydhcG3Ek3JhbSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnc3R1bmRhJywgJ3N0dW5kYXMnLCAnc3R1bmRhcycsICdzdHVuZMSBbSddXG4gIH0pLFxuICB4SG91cnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdzdHVuZGEnLCAnc3R1bmRhcyddLFxuICAgIG90aGVyOiBbJ3t7Y291bnR9fSB7e3RpbWV9fScsICdzdHVuZGEnLCAnc3R1bmRhcycsICdzdHVuZGFzJywgJ3N0dW5kxIFtJ11cbiAgfSksXG4gIHhEYXlzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnZGllbmEnLCAnZGllbmFzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ2RpZW5hJywgJ2RpZW5hcycsICdkaWVuYXMnLCAnZGllbsSBbSddXG4gIH0pLFxuICBhYm91dFhXZWVrczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydhcG3Ek3JhbSAxIHt7dGltZX19JywgJ25lZMSTxLxhJywgJ25lZMSTxLxhcyddLFxuICAgIG90aGVyOiBbJ2FwbcSTcmFtIHt7Y291bnR9fSB7e3RpbWV9fScsICduZWTEk8S8YScsICduZWTEk8S8dScsICduZWTEk8S8YXMnLCAnbmVkxJPEvMSBbSddXG4gIH0pLFxuICB4V2Vla3M6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICduZWTEk8S8YScsICduZWTEk8S8YXMnXSxcbiAgICBvdGhlcjogWyd7e2NvdW50fX0ge3t0aW1lfX0nLFxuICAgIC8vIFRPRE9cbiAgICAnbmVkxJPEvGEnLCAnbmVkxJPEvHUnLCAnbmVkxJPEvGFzJywgJ25lZMSTxLzEgW0nXVxuICB9KSxcbiAgYWJvdXRYTW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2FwbcSTcmFtIDEge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWEnXSxcbiAgICBvdGhlcjogWydhcG3Ek3JhbSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWknLCAnbcSTbmXFoWEnLCAnbcSTbmXFoWllbSddXG4gIH0pLFxuICB4TW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWEnXSxcbiAgICBvdGhlcjogWyd7e2NvdW50fX0ge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWknLCAnbcSTbmXFoWEnLCAnbcSTbmXFoWllbSddXG4gIH0pLFxuICBhYm91dFhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydhcG3Ek3JhbSAxIHt7dGltZX19JywgJ2dhZHMnLCAnZ2FkYSddLFxuICAgIG90aGVyOiBbJ2FwbcSTcmFtIHt7Y291bnR9fSB7e3RpbWV9fScsICdnYWRzJywgJ2dhZGknLCAnZ2FkYScsICdnYWRpZW0nXVxuICB9KSxcbiAgeFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRhJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ2dhZHMnLCAnZ2FkaScsICdnYWRhJywgJ2dhZGllbSddXG4gIH0pLFxuICBvdmVyWFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2lsZ8SBayBwYXIgMSB7e3RpbWV9fScsICdnYWR1JywgJ2dhZHUnXSxcbiAgICBvdGhlcjogWyd2YWlyxIFrIG5la8SBIHt7Y291bnR9fSB7e3RpbWV9fScsICdnYWRzJywgJ2dhZGknLCAnZ2FkYScsICdnYWRpZW0nXVxuICB9KSxcbiAgYWxtb3N0WFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2dhbmRyxKt6IDEge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRhJ10sXG4gICAgb3RoZXI6IFsndmFpcsSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRpJywgJ2dhZGEnLCAnZ2FkaWVtJ11cbiAgfSlcbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXShjb3VudCwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdwxJNjICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncGlybXMgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==