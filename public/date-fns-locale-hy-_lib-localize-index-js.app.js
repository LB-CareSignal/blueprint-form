(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-hy-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/hy/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/hy/_lib/localize/index.js ***!
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
  narrow: ['Ք', 'Մ'],
  abbreviated: ['ՔԱ', 'ՄԹ'],
  wide: ['Քրիստոսից առաջ', 'Մեր թվարկության']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Ք1', 'Ք2', 'Ք3', 'Ք4'],
  wide: ['1֊ին քառորդ', '2֊րդ քառորդ', '3֊րդ քառորդ', '4֊րդ քառորդ']
};
var monthValues = {
  narrow: ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
  abbreviated: ['հուն', 'փետ', 'մար', 'ապր', 'մայ', 'հուն', 'հուլ', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'],
  wide: ['հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր', 'դեկտեմբեր']
};
var dayValues = {
  narrow: ['Կ', 'Ե', 'Ե', 'Չ', 'Հ', 'Ո', 'Շ'],
  short: ['կր', 'եր', 'եք', 'չք', 'հգ', 'ուր', 'շբ'],
  abbreviated: ['կիր', 'երկ', 'երք', 'չոր', 'հնգ', 'ուրբ', 'շաբ'],
  wide: ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'կեսգշ',
    noon: 'կեսօր',
    morning: 'առավոտ',
    afternoon: 'ցերեկ',
    evening: 'երեկո',
    night: 'գիշեր'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'կեսգիշեր',
    noon: 'կեսօր',
    morning: 'առավոտ',
    afternoon: 'ցերեկ',
    evening: 'երեկո',
    night: 'գիշեր'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'կեսգիշեր',
    noon: 'կեսօր',
    morning: 'առավոտ',
    afternoon: 'ցերեկ',
    evening: 'երեկո',
    night: 'գիշեր'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'կեսգշ',
    noon: 'կեսօր',
    morning: 'առավոտը',
    afternoon: 'ցերեկը',
    evening: 'երեկոյան',
    night: 'գիշերը'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'կեսգիշերին',
    noon: 'կեսօրին',
    morning: 'առավոտը',
    afternoon: 'ցերեկը',
    evening: 'երեկոյան',
    night: 'գիշերը'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'կեսգիշերին',
    noon: 'կեսօրին',
    morning: 'առավոտը',
    afternoon: 'ցերեկը',
    evening: 'երեկոյան',
    night: 'գիշերը'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 < 10) {
    if (rem100 % 10 === 1) {
      return number + '֊ին';
    }
  }
  return number + '֊րդ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2h5L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1oeS1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn1ZQnLCAn1YQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn1ZTUsScsICfVhNS5J10sXG4gIHdpZGU6IFsn1ZTWgNWr1b3Vv9W41b3Vq9aBINWh1bzVodW7JywgJ9WE1aXWgCDVqdW+1aHWgNWv1bjWgtWp1bXVodW2J11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn1ZQxJywgJ9WUMicsICfVlDMnLCAn1ZQ0J10sXG4gIHdpZGU6IFsnMdaK1avVtiDWhNWh1bzVuNaA1aQnLCAnMtaK1oDVpCDWhNWh1bzVuNaA1aQnLCAnM9aK1oDVpCDWhNWh1bzVuNaA1aQnLCAnNNaK1oDVpCDWhNWh1bzVuNaA1aQnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9WAJywgJ9WTJywgJ9WEJywgJ9SxJywgJ9WEJywgJ9WAJywgJ9WAJywgJ9WVJywgJ9WNJywgJ9WAJywgJ9WGJywgJ9S0J10sXG4gIGFiYnJldmlhdGVkOiBbJ9Ww1bjWgtW2JywgJ9aD1aXVvycsICfVtNWh1oAnLCAn1aHVutaAJywgJ9W01aHVtScsICfVsNW41oLVticsICfVsNW41oLVrCcsICfWhdWj1b0nLCAn1b3VpdW6JywgJ9Ww1bjVrycsICfVttW41bUnLCAn1aTVpdWvJ10sXG4gIHdpZGU6IFsn1bDVuNaC1bbVvtWh1oAnLCAn1oPVpdW/1oDVvtWh1oAnLCAn1bTVodaA1b8nLCAn1aHVutaA1avVrCcsICfVtNWh1bXVq9W9JywgJ9Ww1bjWgtW21avVvScsICfVsNW41oLVrNWr1b0nLCAn1oXVo9W41b3Vv9W41b0nLCAn1b3VpdW61b/VpdW01aLVpdaAJywgJ9Ww1bjVr9W/1aXVtNWi1aXWgCcsICfVttW41bXVpdW01aLVpdaAJywgJ9Wk1aXVr9W/1aXVtNWi1aXWgCddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9S/JywgJ9S1JywgJ9S1JywgJ9WJJywgJ9WAJywgJ9WIJywgJ9WHJ10sXG4gIHNob3J0OiBbJ9Wv1oAnLCAn1aXWgCcsICfVpdaEJywgJ9W51oQnLCAn1bDVoycsICfVuNaC1oAnLCAn1bfVoiddLFxuICBhYmJyZXZpYXRlZDogWyfVr9Wr1oAnLCAn1aXWgNWvJywgJ9Wl1oDWhCcsICfVudW41oAnLCAn1bDVttWjJywgJ9W41oLWgNWiJywgJ9W31aHVoiddLFxuICB3aWRlOiBbJ9Wv1avWgNWh1a/VqycsICfVpdaA1a/VuNaC1bfVodWi1anVqycsICfVpdaA1aXWhNW31aHVotWp1asnLCAn1bnVuNaA1aXWhNW31aHVotWp1asnLCAn1bDVq9W21aPVt9Wh1aLVqdWrJywgJ9W41oLWgNWi1aHVqScsICfVt9Wh1aLVodWpJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICfVr9Wl1b3Vo9W3JyxcbiAgICBub29uOiAn1a/VpdW91oXWgCcsXG4gICAgbW9ybmluZzogJ9Wh1bzVodW+1bjVvycsXG4gICAgYWZ0ZXJub29uOiAn1oHVpdaA1aXVrycsXG4gICAgZXZlbmluZzogJ9Wl1oDVpdWv1bgnLFxuICAgIG5pZ2h0OiAn1aPVq9W31aXWgCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ9Wv1aXVvdWj1avVt9Wl1oAnLFxuICAgIG5vb246ICfVr9Wl1b3WhdaAJyxcbiAgICBtb3JuaW5nOiAn1aHVvNWh1b7VuNW/JyxcbiAgICBhZnRlcm5vb246ICfWgdWl1oDVpdWvJyxcbiAgICBldmVuaW5nOiAn1aXWgNWl1a/VuCcsXG4gICAgbmlnaHQ6ICfVo9Wr1bfVpdaAJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAn1a/VpdW91aPVq9W31aXWgCcsXG4gICAgbm9vbjogJ9Wv1aXVvdaF1oAnLFxuICAgIG1vcm5pbmc6ICfVodW81aHVvtW41b8nLFxuICAgIGFmdGVybm9vbjogJ9aB1aXWgNWl1a8nLFxuICAgIGV2ZW5pbmc6ICfVpdaA1aXVr9W4JyxcbiAgICBuaWdodDogJ9Wj1avVt9Wl1oAnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAn1a/VpdW91aPVtycsXG4gICAgbm9vbjogJ9Wv1aXVvdaF1oAnLFxuICAgIG1vcm5pbmc6ICfVodW81aHVvtW41b/VqCcsXG4gICAgYWZ0ZXJub29uOiAn1oHVpdaA1aXVr9WoJyxcbiAgICBldmVuaW5nOiAn1aXWgNWl1a/VuNW11aHVticsXG4gICAgbmlnaHQ6ICfVo9Wr1bfVpdaA1agnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfVr9Wl1b3Vo9Wr1bfVpdaA1avVticsXG4gICAgbm9vbjogJ9Wv1aXVvdaF1oDVq9W2JyxcbiAgICBtb3JuaW5nOiAn1aHVvNWh1b7VuNW/1agnLFxuICAgIGFmdGVybm9vbjogJ9aB1aXWgNWl1a/VqCcsXG4gICAgZXZlbmluZzogJ9Wl1oDVpdWv1bjVtdWh1bYnLFxuICAgIG5pZ2h0OiAn1aPVq9W31aXWgNWoJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAn1a/VpdW91aPVq9W31aXWgNWr1bYnLFxuICAgIG5vb246ICfVr9Wl1b3WhdaA1avVticsXG4gICAgbW9ybmluZzogJ9Wh1bzVodW+1bjVv9WoJyxcbiAgICBhZnRlcm5vb246ICfWgdWl1oDVpdWv1agnLFxuICAgIGV2ZW5pbmc6ICfVpdaA1aXVr9W41bXVodW2JyxcbiAgICBuaWdodDogJ9Wj1avVt9Wl1oDVqCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwIDwgMTApIHtcbiAgICBpZiAocmVtMTAwICUgMTAgPT09IDEpIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAn1orVq9W2JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICfWitaA1aQnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=