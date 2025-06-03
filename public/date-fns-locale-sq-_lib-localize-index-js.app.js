(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sq-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/sq/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sq/_lib/localize/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['P', 'M'],
  abbreviated: ['PK', 'MK'],
  wide: ['Para Krishtit', 'Mbas Krishtit']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['4-mujori I', '4-mujori II', '4-mujori III', '4-mujori IV']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'S', 'M', 'P', 'M', 'Q', 'K', 'G', 'S', 'T', 'N', 'D'],
  abbreviated: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
  wide: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor']
};
var dayValues = {
  narrow: ['D', 'H', 'M', 'M', 'E', 'P', 'S'],
  short: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
  abbreviated: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
  wide: ['Dielë', 'Hënë', 'Martë', 'Mërkurë', 'Enjte', 'Premte', 'Shtunë']
};
var dayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'mëngjes',
    afternoon: 'dite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === 'hour') return String(number);
  if (number === 1) return number + '-rë';
  if (number === 4) return number + 't';
  return number + '-të';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NxL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtc3EtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1AnLCAnTSddLFxuICBhYmJyZXZpYXRlZDogWydQSycsICdNSyddLFxuICB3aWRlOiBbJ1BhcmEgS3Jpc2h0aXQnLCAnTWJhcyBLcmlzaHRpdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnNC1tdWpvcmkgSScsICc0LW11am9yaSBJSScsICc0LW11am9yaSBJSUknLCAnNC1tdWpvcmkgSVYnXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdTJywgJ00nLCAnUCcsICdNJywgJ1EnLCAnSycsICdHJywgJ1MnLCAnVCcsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ1NoaycsICdNYXInLCAnUHJpJywgJ01haicsICdRZXInLCAnS29yJywgJ0d1cycsICdTaHQnLCAnVGV0JywgJ07Dq24nLCAnRGhqJ10sXG4gIHdpZGU6IFsnSmFuYXInLCAnU2hrdXJ0JywgJ01hcnMnLCAnUHJpbGwnLCAnTWFqJywgJ1FlcnNob3InLCAnS29ycmlrJywgJ0d1c2h0JywgJ1NodGF0b3InLCAnVGV0b3InLCAnTsOrbnRvcicsICdEaGpldG9yJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnRCcsICdIJywgJ00nLCAnTScsICdFJywgJ1AnLCAnUyddLFxuICBzaG9ydDogWydEaScsICdIw6snLCAnTWEnLCAnTcOrJywgJ0VuJywgJ1ByJywgJ1NoJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0RpZScsICdIw6tuJywgJ01hcicsICdNw6tyJywgJ0VuaicsICdQcmUnLCAnU2h0J10sXG4gIHdpZGU6IFsnRGllbMOrJywgJ0jDq27DqycsICdNYXJ0w6snLCAnTcOrcmt1csOrJywgJ0VuanRlJywgJ1ByZW10ZScsICdTaHR1bsOrJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ3AnLFxuICAgIHBtOiAnbScsXG4gICAgbWlkbmlnaHQ6ICdtJyxcbiAgICBub29uOiAnZCcsXG4gICAgbW9ybmluZzogJ23Dq25namVzJyxcbiAgICBhZnRlcm5vb246ICdkaXRlJyxcbiAgICBldmVuaW5nOiAnbWJyw6ttamUnLFxuICAgIG5pZ2h0OiAnbmF0w6snXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdQRCcsXG4gICAgcG06ICdNRCcsXG4gICAgbWlkbmlnaHQ6ICdtZXNuw6t0w6snLFxuICAgIG5vb246ICdkcmVrJyxcbiAgICBtb3JuaW5nOiAnbcOrbmdqZXMnLFxuICAgIGFmdGVybm9vbjogJ21iYXNkaXRlJyxcbiAgICBldmVuaW5nOiAnbWJyw6ttamUnLFxuICAgIG5pZ2h0OiAnbmF0w6snXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ3AuZC4nLFxuICAgIHBtOiAnbS5kLicsXG4gICAgbWlkbmlnaHQ6ICdtZXNuw6t0w6snLFxuICAgIG5vb246ICdkcmVrJyxcbiAgICBtb3JuaW5nOiAnbcOrbmdqZXMnLFxuICAgIGFmdGVybm9vbjogJ21iYXNkaXRlJyxcbiAgICBldmVuaW5nOiAnbWJyw6ttamUnLFxuICAgIG5pZ2h0OiAnbmF0w6snXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdwJyxcbiAgICBwbTogJ20nLFxuICAgIG1pZG5pZ2h0OiAnbScsXG4gICAgbm9vbjogJ2QnLFxuICAgIG1vcm5pbmc6ICduw6sgbcOrbmdqZXMnLFxuICAgIGFmdGVybm9vbjogJ27DqyBtYmFzZGl0ZScsXG4gICAgZXZlbmluZzogJ27DqyBtYnLDq21qZScsXG4gICAgbmlnaHQ6ICduw6sgbWVzbmF0w6snXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdQRCcsXG4gICAgcG06ICdNRCcsXG4gICAgbWlkbmlnaHQ6ICdtZXNuYXTDqycsXG4gICAgbm9vbjogJ2RyZWsnLFxuICAgIG1vcm5pbmc6ICduw6sgbcOrbmdqZXMnLFxuICAgIGFmdGVybm9vbjogJ27DqyBtYmFzZGl0ZScsXG4gICAgZXZlbmluZzogJ27DqyBtYnLDq21qZScsXG4gICAgbmlnaHQ6ICduw6sgbWVzbmF0w6snXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ3AuZC4nLFxuICAgIHBtOiAnbS5kLicsXG4gICAgbWlkbmlnaHQ6ICdtZXNuYXTDqycsXG4gICAgbm9vbjogJ2RyZWsnLFxuICAgIG1vcm5pbmc6ICduw6sgbcOrbmdqZXMnLFxuICAgIGFmdGVybm9vbjogJ27DqyBtYmFzZGl0ZScsXG4gICAgZXZlbmluZzogJ27DqyBtYnLDq21qZScsXG4gICAgbmlnaHQ6ICduw6sgbWVzbmF0w6snXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQpID09PSAnaG91cicpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgaWYgKG51bWJlciA9PT0gMSkgcmV0dXJuIG51bWJlciArICctcsOrJztcbiAgaWYgKG51bWJlciA9PT0gNCkgcmV0dXJuIG51bWJlciArICd0JztcbiAgcmV0dXJuIG51bWJlciArICctdMOrJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9