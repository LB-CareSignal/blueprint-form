(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hu-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/hu/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/hu/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var translations = {
  about: 'körülbelül',
  over: 'több mint',
  almost: 'majdnem',
  lessthan: 'kevesebb mint'
};
var withoutSuffixes = {
  xseconds: ' másodperc',
  halfaminute: 'fél perc',
  xminutes: ' perc',
  xhours: ' óra',
  xdays: ' nap',
  xweeks: ' hét',
  xmonths: ' hónap',
  xyears: ' év'
};
var withSuffixes = {
  xseconds: {
    '-1': ' másodperccel ezelőtt',
    '1': ' másodperc múlva',
    '0': ' másodperce'
  },
  halfaminute: {
    '-1': 'fél perccel ezelőtt',
    '1': 'fél perc múlva',
    '0': 'fél perce'
  },
  xminutes: {
    '-1': ' perccel ezelőtt',
    '1': ' perc múlva',
    '0': ' perce'
  },
  xhours: {
    '-1': ' órával ezelőtt',
    '1': ' óra múlva',
    '0': ' órája'
  },
  xdays: {
    '-1': ' nappal ezelőtt',
    '1': ' nap múlva',
    '0': ' napja'
  },
  xweeks: {
    '-1': ' héttel ezelőtt',
    '1': ' hét múlva',
    '0': ' hete'
  },
  xmonths: {
    '-1': ' hónappal ezelőtt',
    '1': ' hónap múlva',
    '0': ' hónapja'
  },
  xyears: {
    '-1': ' évvel ezelőtt',
    '1': ' év múlva',
    '0': ' éve'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var adverb = token.match(/about|over|almost|lessthan/i);
  var unit = adverb ? token.replace(adverb[0], '') : token;
  var addSuffix = (options === null || options === void 0 ? void 0 : options.addSuffix) === true;
  var key = unit.toLowerCase();
  var comparison = (options === null || options === void 0 ? void 0 : options.comparison) || 0;
  var translated = addSuffix ? withSuffixes[key][comparison] : withoutSuffixes[key];
  var result = key === 'halfaminute' ? translated : count + translated;
  if (adverb) {
    var adv = adverb[0].toLowerCase();
    result = translations[adv] + ' ' + result;
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h1L19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtaHUtX2xpYi1mb3JtYXREaXN0YW5jZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciB0cmFuc2xhdGlvbnMgPSB7XG4gIGFib3V0OiAna8O2csO8bGJlbMO8bCcsXG4gIG92ZXI6ICd0w7ZiYiBtaW50JyxcbiAgYWxtb3N0OiAnbWFqZG5lbScsXG4gIGxlc3N0aGFuOiAna2V2ZXNlYmIgbWludCdcbn07XG52YXIgd2l0aG91dFN1ZmZpeGVzID0ge1xuICB4c2Vjb25kczogJyBtw6Fzb2RwZXJjJyxcbiAgaGFsZmFtaW51dGU6ICdmw6lsIHBlcmMnLFxuICB4bWludXRlczogJyBwZXJjJyxcbiAgeGhvdXJzOiAnIMOzcmEnLFxuICB4ZGF5czogJyBuYXAnLFxuICB4d2Vla3M6ICcgaMOpdCcsXG4gIHhtb250aHM6ICcgaMOzbmFwJyxcbiAgeHllYXJzOiAnIMOpdidcbn07XG52YXIgd2l0aFN1ZmZpeGVzID0ge1xuICB4c2Vjb25kczoge1xuICAgICctMSc6ICcgbcOhc29kcGVyY2NlbCBlemVsxZF0dCcsXG4gICAgJzEnOiAnIG3DoXNvZHBlcmMgbcO6bHZhJyxcbiAgICAnMCc6ICcgbcOhc29kcGVyY2UnXG4gIH0sXG4gIGhhbGZhbWludXRlOiB7XG4gICAgJy0xJzogJ2bDqWwgcGVyY2NlbCBlemVsxZF0dCcsXG4gICAgJzEnOiAnZsOpbCBwZXJjIG3Dumx2YScsXG4gICAgJzAnOiAnZsOpbCBwZXJjZSdcbiAgfSxcbiAgeG1pbnV0ZXM6IHtcbiAgICAnLTEnOiAnIHBlcmNjZWwgZXplbMWRdHQnLFxuICAgICcxJzogJyBwZXJjIG3Dumx2YScsXG4gICAgJzAnOiAnIHBlcmNlJ1xuICB9LFxuICB4aG91cnM6IHtcbiAgICAnLTEnOiAnIMOzcsOhdmFsIGV6ZWzFkXR0JyxcbiAgICAnMSc6ICcgw7NyYSBtw7psdmEnLFxuICAgICcwJzogJyDDs3LDoWphJ1xuICB9LFxuICB4ZGF5czoge1xuICAgICctMSc6ICcgbmFwcGFsIGV6ZWzFkXR0JyxcbiAgICAnMSc6ICcgbmFwIG3Dumx2YScsXG4gICAgJzAnOiAnIG5hcGphJ1xuICB9LFxuICB4d2Vla3M6IHtcbiAgICAnLTEnOiAnIGjDqXR0ZWwgZXplbMWRdHQnLFxuICAgICcxJzogJyBow6l0IG3Dumx2YScsXG4gICAgJzAnOiAnIGhldGUnXG4gIH0sXG4gIHhtb250aHM6IHtcbiAgICAnLTEnOiAnIGjDs25hcHBhbCBlemVsxZF0dCcsXG4gICAgJzEnOiAnIGjDs25hcCBtw7psdmEnLFxuICAgICcwJzogJyBow7NuYXBqYSdcbiAgfSxcbiAgeHllYXJzOiB7XG4gICAgJy0xJzogJyDDqXZ2ZWwgZXplbMWRdHQnLFxuICAgICcxJzogJyDDqXYgbcO6bHZhJyxcbiAgICAnMCc6ICcgw6l2ZSdcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgYWR2ZXJiID0gdG9rZW4ubWF0Y2goL2Fib3V0fG92ZXJ8YWxtb3N0fGxlc3N0aGFuL2kpO1xuICB2YXIgdW5pdCA9IGFkdmVyYiA/IHRva2VuLnJlcGxhY2UoYWR2ZXJiWzBdLCAnJykgOiB0b2tlbjtcbiAgdmFyIGFkZFN1ZmZpeCA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSA9PT0gdHJ1ZTtcbiAgdmFyIGtleSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGNvbXBhcmlzb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbXBhcmlzb24pIHx8IDA7XG4gIHZhciB0cmFuc2xhdGVkID0gYWRkU3VmZml4ID8gd2l0aFN1ZmZpeGVzW2tleV1bY29tcGFyaXNvbl0gOiB3aXRob3V0U3VmZml4ZXNba2V5XTtcbiAgdmFyIHJlc3VsdCA9IGtleSA9PT0gJ2hhbGZhbWludXRlJyA/IHRyYW5zbGF0ZWQgOiBjb3VudCArIHRyYW5zbGF0ZWQ7XG4gIGlmIChhZHZlcmIpIHtcbiAgICB2YXIgYWR2ID0gYWR2ZXJiWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgcmVzdWx0ID0gdHJhbnNsYXRpb25zW2Fkdl0gKyAnICcgKyByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==