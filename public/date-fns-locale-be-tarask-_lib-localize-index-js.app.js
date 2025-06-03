(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-be-tarask-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/be-tarask/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/locale/be-tarask/_lib/localize/index.js ***!
  \***********************************************************************/
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
  narrow: ['да н.э.', 'н.э.'],
  abbreviated: ['да н. э.', 'н. э.'],
  wide: ['да нашай эры', 'нашай эры']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ы кв.', '2-і кв.', '3-і кв.', '4-ы кв.'],
  wide: ['1-ы квартал', '2-і квартал', '3-і квартал', '4-ы квартал']
};
var monthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'Т', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'],
  abbreviated: ['студз.', 'лют.', 'сак.', 'крас.', 'трав.', 'чэрв.', 'ліп.', 'жн.', 'вер.', 'кастр.', 'ліст.', 'сьнеж.'],
  wide: ['студзень', 'люты', 'сакавік', 'красавік', 'травень', 'чэрвень', 'ліпень', 'жнівень', 'верасень', 'кастрычнік', 'лістапад', 'сьнежань']
};
var formattingMonthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'Т', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'],
  abbreviated: ['студз.', 'лют.', 'сак.', 'крас.', 'трав.', 'чэрв.', 'ліп.', 'жн.', 'вер.', 'кастр.', 'ліст.', 'сьнеж.'],
  wide: ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'траўня', 'чэрвеня', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'сьнежня']
};
var dayValues = {
  narrow: ['Н', 'П', 'А', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
  abbreviated: ['нядз', 'пан', 'аўт', 'сер', 'чаць', 'пят', 'суб'],
  wide: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацьвер', 'пятніца', 'субота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніца',
    afternoon: 'дзень',
    evening: 'вечар',
    night: 'ноч'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніцы',
    afternoon: 'дня',
    evening: 'вечара',
    night: 'ночы'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  var number = Number(dirtyNumber);
  var suffix;

  /** Though it's an incorrect ordinal form of a date we use it here for consistency with other similar locales (ru, uk)
   *  For date-month combinations should be used `d` formatter.
   *  Correct:   `d MMMM` (4 верасня)
   *  Incorrect: `do MMMM` (4-га верасня)
   *
   *  But following the consistency leads to mistakes for literal uses of `do` formatter (ordinal day of month).
   *  So for phrase "5th day of month" (`do дзень месяца`)
   *  library will produce:            `5-га дзень месяца`
   *  but correct spelling should be:  `5-ы дзень месяца`
   *
   *  So I guess there should be a stand-alone and a formatting version of "day of month" formatters
   */
  if (unit === 'date') {
    suffix = '-га';
  } else if (unit === 'hour' || unit === 'minute' || unit === 'second') {
    suffix = '-я';
  } else {
    suffix = (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? '-і' : '-ы';
  }
  return number + suffix;
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JlLXRhcmFzay9fbGliL2xvY2FsaXplL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDRHQUF3QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1iZS10YXJhc2stX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9C00LAg0L0u0Y0uJywgJ9C9LtGNLiddLFxuICBhYmJyZXZpYXRlZDogWyfQtNCwINC9LiDRjS4nLCAn0L0uINGNLiddLFxuICB3aWRlOiBbJ9C00LAg0L3QsNGI0LDQuSDRjdGA0YsnLCAn0L3QsNGI0LDQuSDRjdGA0YsnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLdGLINC60LIuJywgJzIt0ZYg0LrQsi4nLCAnMy3RliDQutCyLicsICc0LdGLINC60LIuJ10sXG4gIHdpZGU6IFsnMS3RiyDQutCy0LDRgNGC0LDQuycsICcyLdGWINC60LLQsNGA0YLQsNC7JywgJzMt0ZYg0LrQstCw0YDRgtCw0LsnLCAnNC3RiyDQutCy0LDRgNGC0LDQuyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0KEnLCAn0JsnLCAn0KEnLCAn0JonLCAn0KInLCAn0KcnLCAn0JsnLCAn0JYnLCAn0JInLCAn0JonLCAn0JsnLCAn0KEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0YHRgtGD0LTQty4nLCAn0LvRjtGCLicsICfRgdCw0LouJywgJ9C60YDQsNGBLicsICfRgtGA0LDQsi4nLCAn0YfRjdGA0LIuJywgJ9C70ZbQvy4nLCAn0LbQvS4nLCAn0LLQtdGALicsICfQutCw0YHRgtGALicsICfQu9GW0YHRgi4nLCAn0YHRjNC90LXQti4nXSxcbiAgd2lkZTogWyfRgdGC0YPQtNC30LXQvdGMJywgJ9C70Y7RgtGLJywgJ9GB0LDQutCw0LLRltC6JywgJ9C60YDQsNGB0LDQstGW0LonLCAn0YLRgNCw0LLQtdC90YwnLCAn0YfRjdGA0LLQtdC90YwnLCAn0LvRltC/0LXQvdGMJywgJ9C20L3RltCy0LXQvdGMJywgJ9Cy0LXRgNCw0YHQtdC90YwnLCAn0LrQsNGB0YLRgNGL0YfQvdGW0LonLCAn0LvRltGB0YLQsNC/0LDQtCcsICfRgdGM0L3QtdC20LDQvdGMJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsn0KEnLCAn0JsnLCAn0KEnLCAn0JonLCAn0KInLCAn0KcnLCAn0JsnLCAn0JYnLCAn0JInLCAn0JonLCAn0JsnLCAn0KEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0YHRgtGD0LTQty4nLCAn0LvRjtGCLicsICfRgdCw0LouJywgJ9C60YDQsNGBLicsICfRgtGA0LDQsi4nLCAn0YfRjdGA0LIuJywgJ9C70ZbQvy4nLCAn0LbQvS4nLCAn0LLQtdGALicsICfQutCw0YHRgtGALicsICfQu9GW0YHRgi4nLCAn0YHRjNC90LXQti4nXSxcbiAgd2lkZTogWyfRgdGC0YPQtNC30LXQvdGPJywgJ9C70Y7RgtCw0LPQsCcsICfRgdCw0LrQsNCy0ZbQutCwJywgJ9C60YDQsNGB0LDQstGW0LrQsCcsICfRgtGA0LDRntC90Y8nLCAn0YfRjdGA0LLQtdC90Y8nLCAn0LvRltC/0LXQvdGPJywgJ9C20L3RltGe0L3RjycsICfQstC10YDQsNGB0L3RjycsICfQutCw0YHRgtGA0YvRh9C90ZbQutCwJywgJ9C70ZbRgdGC0LDQv9Cw0LTQsCcsICfRgdGM0L3QtdC20L3RjyddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ9CdJywgJ9CfJywgJ9CQJywgJ9ChJywgJ9CnJywgJ9CfJywgJ9ChJ10sXG4gIHNob3J0OiBbJ9C90LQnLCAn0L/QvScsICfQsNGeJywgJ9GB0YAnLCAn0YfRhicsICfQv9GCJywgJ9GB0LEnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn0L3Rj9C00LcnLCAn0L/QsNC9JywgJ9Cw0Z7RgicsICfRgdC10YAnLCAn0YfQsNGG0YwnLCAn0L/Rj9GCJywgJ9GB0YPQsSddLFxuICB3aWRlOiBbJ9C90Y/QtNC30LXQu9GPJywgJ9C/0LDQvdGP0LTQt9C10LvQsNC6JywgJ9Cw0Z7RgtC+0YDQsNC6JywgJ9GB0LXRgNCw0LTQsCcsICfRh9Cw0YbRjNCy0LXRgCcsICfQv9GP0YLQvdGW0YbQsCcsICfRgdGD0LHQvtGC0LAnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn0JTQnycsXG4gICAgcG06ICfQn9CfJyxcbiAgICBtaWRuaWdodDogJ9C/0L7RntC9LicsXG4gICAgbm9vbjogJ9C/0L7RntC0LicsXG4gICAgbW9ybmluZzogJ9GA0LDQvS4nLFxuICAgIGFmdGVybm9vbjogJ9C00LfQtdC90YwnLFxuICAgIGV2ZW5pbmc6ICfQstC10YcuJyxcbiAgICBuaWdodDogJ9C90L7RhydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0Z7QvS4nLFxuICAgIG5vb246ICfQv9C+0Z7QtC4nLFxuICAgIG1vcm5pbmc6ICfRgNCw0L0uJyxcbiAgICBhZnRlcm5vb246ICfQtNC30LXQvdGMJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YcnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0Z7QvdCw0YcnLFxuICAgIG5vb246ICfQv9C+0Z7QtNC30LXQvdGMJyxcbiAgICBtb3JuaW5nOiAn0YDQsNC90ZbRhtCwJyxcbiAgICBhZnRlcm5vb246ICfQtNC30LXQvdGMJyxcbiAgICBldmVuaW5nOiAn0LLQtdGH0LDRgCcsXG4gICAgbmlnaHQ6ICfQvdC+0YcnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfQlNCfJyxcbiAgICBwbTogJ9Cf0J8nLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtGe0L0uJyxcbiAgICBub29uOiAn0L/QvtGe0LQuJyxcbiAgICBtb3JuaW5nOiAn0YDQsNC9LicsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGHLicsXG4gICAgbmlnaHQ6ICfQvdC+0YfRiydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ9CU0J8nLFxuICAgIHBtOiAn0J/QnycsXG4gICAgbWlkbmlnaHQ6ICfQv9C+0Z7QvS4nLFxuICAgIG5vb246ICfQv9C+0Z7QtC4nLFxuICAgIG1vcm5pbmc6ICfRgNCw0L0uJyxcbiAgICBhZnRlcm5vb246ICfQtNC90Y8nLFxuICAgIGV2ZW5pbmc6ICfQstC10YcuJyxcbiAgICBuaWdodDogJ9C90L7Rh9GLJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfQlNCfJyxcbiAgICBwbTogJ9Cf0J8nLFxuICAgIG1pZG5pZ2h0OiAn0L/QvtGe0L3QsNGHJyxcbiAgICBub29uOiAn0L/QvtGe0LTQt9C10L3RjCcsXG4gICAgbW9ybmluZzogJ9GA0LDQvdGW0YbRiycsXG4gICAgYWZ0ZXJub29uOiAn0LTQvdGPJyxcbiAgICBldmVuaW5nOiAn0LLQtdGH0LDRgNCwJyxcbiAgICBuaWdodDogJ9C90L7Rh9GLJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0KTtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciBzdWZmaXg7XG5cbiAgLyoqIFRob3VnaCBpdCdzIGFuIGluY29ycmVjdCBvcmRpbmFsIGZvcm0gb2YgYSBkYXRlIHdlIHVzZSBpdCBoZXJlIGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIHNpbWlsYXIgbG9jYWxlcyAocnUsIHVrKVxuICAgKiAgRm9yIGRhdGUtbW9udGggY29tYmluYXRpb25zIHNob3VsZCBiZSB1c2VkIGBkYCBmb3JtYXR0ZXIuXG4gICAqICBDb3JyZWN0OiAgIGBkIE1NTU1gICg0INCy0LXRgNCw0YHQvdGPKVxuICAgKiAgSW5jb3JyZWN0OiBgZG8gTU1NTWAgKDQt0LPQsCDQstC10YDQsNGB0L3RjylcbiAgICpcbiAgICogIEJ1dCBmb2xsb3dpbmcgdGhlIGNvbnNpc3RlbmN5IGxlYWRzIHRvIG1pc3Rha2VzIGZvciBsaXRlcmFsIHVzZXMgb2YgYGRvYCBmb3JtYXR0ZXIgKG9yZGluYWwgZGF5IG9mIG1vbnRoKS5cbiAgICogIFNvIGZvciBwaHJhc2UgXCI1dGggZGF5IG9mIG1vbnRoXCIgKGBkbyDQtNC30LXQvdGMINC80LXRgdGP0YbQsGApXG4gICAqICBsaWJyYXJ5IHdpbGwgcHJvZHVjZTogICAgICAgICAgICBgNS3Qs9CwINC00LfQtdC90Ywg0LzQtdGB0Y/RhtCwYFxuICAgKiAgYnV0IGNvcnJlY3Qgc3BlbGxpbmcgc2hvdWxkIGJlOiAgYDUt0Ysg0LTQt9C10L3RjCDQvNC10YHRj9GG0LBgXG4gICAqXG4gICAqICBTbyBJIGd1ZXNzIHRoZXJlIHNob3VsZCBiZSBhIHN0YW5kLWFsb25lIGFuZCBhIGZvcm1hdHRpbmcgdmVyc2lvbiBvZiBcImRheSBvZiBtb250aFwiIGZvcm1hdHRlcnNcbiAgICovXG4gIGlmICh1bml0ID09PSAnZGF0ZScpIHtcbiAgICBzdWZmaXggPSAnLdCz0LAnO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJyB8fCB1bml0ID09PSAnbWludXRlJyB8fCB1bml0ID09PSAnc2Vjb25kJykge1xuICAgIHN1ZmZpeCA9ICct0Y8nO1xuICB9IGVsc2Uge1xuICAgIHN1ZmZpeCA9IChudW1iZXIgJSAxMCA9PT0gMiB8fCBudW1iZXIgJSAxMCA9PT0gMykgJiYgbnVtYmVyICUgMTAwICE9PSAxMiAmJiBudW1iZXIgJSAxMDAgIT09IDEzID8gJy3RlicgOiAnLdGLJztcbiAgfVxuICByZXR1cm4gbnVtYmVyICsgc3VmZml4O1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnYW55JyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9