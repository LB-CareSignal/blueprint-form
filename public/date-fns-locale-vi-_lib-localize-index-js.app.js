(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-vi-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/vi/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/localize/index.js ***!
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
// Vietnamese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134
var eraValues = {
  narrow: ['TCN', 'SCN'],
  abbreviated: ['trước CN', 'sau CN'],
  wide: ['trước Công Nguyên', 'sau Công Nguyên']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  // I notice many news outlet use this "quý II/2018"
  wide: ['quý I', 'quý II', 'quý III', 'quý IV']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  wide: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']
};
// In Vietnamese date formatting, month number less than 10 expected to have leading zero
var formattingMonthValues = {
  narrow: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  abbreviated: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  wide: ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 12']
};
var dayValues = {
  narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  short: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  abbreviated: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  wide: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
};

// Vietnamese are used to AM/PM borrowing from English, hence `narrow` and
// `abbreviated` are just like English but I'm leaving the `wide`
// format being localized with abbreviations found in some systems (SÁng / CHiều);
// however, personally, I don't think `Chiều` sounds appropriate for `PM`
var dayPeriodValues = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'giữa trưa',
    morning: 'vào buổi sáng',
    afternoon: 'vào buổi chiều',
    evening: 'vào buổi tối',
    night: 'vào ban đêm'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === 'quarter') {
    // many news outlets use "quý I"...
    switch (number) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
    }
  } else if (unit === 'day') {
    // day of week in Vietnamese has ordinal number meaning,
    // so we should use them, else it'll sound weird
    switch (number) {
      case 1:
        return 'thứ 2';
      // meaning 2nd day but it's the first day of the week :D
      case 2:
        return 'thứ 3';
      // meaning 3rd day
      case 3:
        return 'thứ 4';
      // meaning 4th day and so on
      case 4:
        return 'thứ 5';
      case 5:
        return 'thứ 6';
      case 6:
        return 'thứ 7';
      case 7:
        return 'chủ nhật';
      // meaning Sunday, there's no 8th day :D
    }
  } else if (unit === 'week') {
    if (number === 1) {
      return 'thứ nhất';
    } else {
      return 'thứ ' + number;
    }
  } else if (unit === 'dayOfYear') {
    if (number === 1) {
      return 'đầu tiên';
    } else {
      return 'thứ ' + number;
    }
  }

  // there are no different forms of ordinal numbers in Vietnamese
  return String(number);
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3ZpL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdmktX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xuLy8gVmlldG5hbWVzZSBsb2NhbGUgcmVmZXJlbmNlOiBodHRwOi8vd3d3LmxvY2FsZXBsYW5ldC5jb20vaWN1L3ZpLVZOL2luZGV4Lmh0bWxcbi8vIENhcGl0YWxpemF0aW9uIHJlZmVyZW5jZTogaHR0cDovL2hjbXVwLmVkdS52bi9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9YXJ0aWNsZSZpZD00MTA2JTNBdml0LWhvYS10cm9uZy12bi1ibi1oYW5oLWNoaW5oJmNhdGlkPTIzNDUlM0F0aGFtLWtobyZJdGVtaWQ9NDEwMyZsYW5nPXZpJnNpdGU9MTM0XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnVENOJywgJ1NDTiddLFxuICBhYmJyZXZpYXRlZDogWyd0csaw4bubYyBDTicsICdzYXUgQ04nXSxcbiAgd2lkZTogWyd0csaw4bubYyBDw7RuZyBOZ3V5w6puJywgJ3NhdSBDw7RuZyBOZ3V5w6puJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWydRdcO9IDEnLCAnUXXDvSAyJywgJ1F1w70gMycsICdRdcO9IDQnXVxufTtcbnZhciBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgLy8gSSBub3RpY2UgbWFueSBuZXdzIG91dGxldCB1c2UgdGhpcyBcInF1w70gSUkvMjAxOFwiXG4gIHdpZGU6IFsncXXDvSBJJywgJ3F1w70gSUknLCAncXXDvSBJSUknLCAncXXDvSBJViddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddLFxuICBhYmJyZXZpYXRlZDogWydUaGcgMScsICdUaGcgMicsICdUaGcgMycsICdUaGcgNCcsICdUaGcgNScsICdUaGcgNicsICdUaGcgNycsICdUaGcgOCcsICdUaGcgOScsICdUaGcgMTAnLCAnVGhnIDExJywgJ1RoZyAxMiddLFxuICB3aWRlOiBbJ1Row6FuZyBN4buZdCcsICdUaMOhbmcgSGFpJywgJ1Row6FuZyBCYScsICdUaMOhbmcgVMawJywgJ1Row6FuZyBOxINtJywgJ1Row6FuZyBTw6F1JywgJ1Row6FuZyBC4bqjeScsICdUaMOhbmcgVMOhbScsICdUaMOhbmcgQ2jDrW4nLCAnVGjDoW5nIE3GsOG7nWknLCAnVGjDoW5nIE3GsOG7nWkgTeG7mXQnLCAnVGjDoW5nIE3GsOG7nWkgSGFpJ11cbn07XG4vLyBJbiBWaWV0bmFtZXNlIGRhdGUgZm9ybWF0dGluZywgbW9udGggbnVtYmVyIGxlc3MgdGhhbiAxMCBleHBlY3RlZCB0byBoYXZlIGxlYWRpbmcgemVyb1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3RoZyAxJywgJ3RoZyAyJywgJ3RoZyAzJywgJ3RoZyA0JywgJ3RoZyA1JywgJ3RoZyA2JywgJ3RoZyA3JywgJ3RoZyA4JywgJ3RoZyA5JywgJ3RoZyAxMCcsICd0aGcgMTEnLCAndGhnIDEyJ10sXG4gIHdpZGU6IFsndGjDoW5nIDAxJywgJ3Row6FuZyAwMicsICd0aMOhbmcgMDMnLCAndGjDoW5nIDA0JywgJ3Row6FuZyAwNScsICd0aMOhbmcgMDYnLCAndGjDoW5nIDA3JywgJ3Row6FuZyAwOCcsICd0aMOhbmcgMDknLCAndGjDoW5nIDEwJywgJ3Row6FuZyAxMScsICd0aMOhbmcgMTInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydDTicsICdUMicsICdUMycsICdUNCcsICdUNScsICdUNicsICdUNyddLFxuICBzaG9ydDogWydDTicsICdUaCAyJywgJ1RoIDMnLCAnVGggNCcsICdUaCA1JywgJ1RoIDYnLCAnVGggNyddLFxuICBhYmJyZXZpYXRlZDogWydDTicsICdUaOG7qSAyJywgJ1Ro4bupIDMnLCAnVGjhu6kgNCcsICdUaOG7qSA1JywgJ1Ro4bupIDYnLCAnVGjhu6kgNyddLFxuICB3aWRlOiBbJ0No4bunIE5o4bqtdCcsICdUaOG7qSBIYWknLCAnVGjhu6kgQmEnLCAnVGjhu6kgVMawJywgJ1Ro4bupIE7Eg20nLCAnVGjhu6kgU8OhdScsICdUaOG7qSBC4bqjeSddXG59O1xuXG4vLyBWaWV0bmFtZXNlIGFyZSB1c2VkIHRvIEFNL1BNIGJvcnJvd2luZyBmcm9tIEVuZ2xpc2gsIGhlbmNlIGBuYXJyb3dgIGFuZFxuLy8gYGFiYnJldmlhdGVkYCBhcmUganVzdCBsaWtlIEVuZ2xpc2ggYnV0IEknbSBsZWF2aW5nIHRoZSBgd2lkZWBcbi8vIGZvcm1hdCBiZWluZyBsb2NhbGl6ZWQgd2l0aCBhYmJyZXZpYXRpb25zIGZvdW5kIGluIHNvbWUgc3lzdGVtcyAoU8OBbmcgLyBDSGnhu4F1KTtcbi8vIGhvd2V2ZXIsIHBlcnNvbmFsbHksIEkgZG9uJ3QgdGhpbmsgYENoaeG7gXVgIHNvdW5kcyBhcHByb3ByaWF0ZSBmb3IgYFBNYFxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgLy8gbmFycm93IGRhdGUgcGVyaW9kIGlzIGV4dHJlbWVseSByYXJlIGluIFZpZXRuYW1lc2VcbiAgLy8gSSB1c2VkIGFiYnJldmlhdGVkIGZvcm0gZm9yIG5vb24sIG1vcm5pbmcgYW5kIGFmdGVybm9vblxuICAvLyB3aGljaCBhcmUgcmVnY29uaXphYmxlIGJ5IFZpZXRuYW1lc2UsIG90aGVycyBjYW5ub3QgYmUgYW55IHNob3J0ZXJcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyJyxcbiAgICBtb3JuaW5nOiAnc2cnLFxuICAgIGFmdGVybm9vbjogJ2NoJyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyxrBhJyxcbiAgICBtb3JuaW5nOiAnc8OhbmcnLFxuICAgIGFmdGVybm9vbjogJ2NoaeG7gXUnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnU0EnLFxuICAgIHBtOiAnQ0gnLFxuICAgIG1pZG5pZ2h0OiAnbuG7rWEgxJHDqm0nLFxuICAgIG5vb246ICd0csawYScsXG4gICAgbW9ybmluZzogJ3PDoW5nJyxcbiAgICBhZnRlcm5vb246ICdjaGnhu4F1JyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyJyxcbiAgICBtb3JuaW5nOiAnc2cnLFxuICAgIGFmdGVybm9vbjogJ2NoJyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyxrBhJyxcbiAgICBtb3JuaW5nOiAnc8OhbmcnLFxuICAgIGFmdGVybm9vbjogJ2NoaeG7gXUnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnU0EnLFxuICAgIHBtOiAnQ0gnLFxuICAgIG1pZG5pZ2h0OiAnbuG7rWEgxJHDqm0nLFxuICAgIG5vb246ICdnaeG7r2EgdHLGsGEnLFxuICAgIG1vcm5pbmc6ICd2w6BvIGJ14buVaSBzw6FuZycsXG4gICAgYWZ0ZXJub29uOiAndsOgbyBideG7lWkgY2hp4buBdScsXG4gICAgZXZlbmluZzogJ3bDoG8gYnXhu5VpIHThu5FpJyxcbiAgICBuaWdodDogJ3bDoG8gYmFuIMSRw6ptJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgLy8gbWFueSBuZXdzIG91dGxldHMgdXNlIFwicXXDvSBJXCIuLi5cbiAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJ0knO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ0lJJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuICdJSUknO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gJ0lWJztcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICAvLyBkYXkgb2Ygd2VlayBpbiBWaWV0bmFtZXNlIGhhcyBvcmRpbmFsIG51bWJlciBtZWFuaW5nLFxuICAgIC8vIHNvIHdlIHNob3VsZCB1c2UgdGhlbSwgZWxzZSBpdCdsbCBzb3VuZCB3ZWlyZFxuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAndGjhu6kgMic7XG4gICAgICAvLyBtZWFuaW5nIDJuZCBkYXkgYnV0IGl0J3MgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayA6RFxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ3Ro4bupIDMnO1xuICAgICAgLy8gbWVhbmluZyAzcmQgZGF5XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAndGjhu6kgNCc7XG4gICAgICAvLyBtZWFuaW5nIDR0aCBkYXkgYW5kIHNvIG9uXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAndGjhu6kgNSc7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiAndGjhu6kgNic7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiAndGjhu6kgNyc7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiAnY2jhu6cgbmjhuq10JztcbiAgICAgIC8vIG1lYW5pbmcgU3VuZGF5LCB0aGVyZSdzIG5vIDh0aCBkYXkgOkRcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuICd0aOG7qSBuaOG6pXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Ro4bupICcgKyBudW1iZXI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXlPZlllYXInKSB7XG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuICfEkeG6p3UgdGnDqm4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Ro4bupICcgKyBudW1iZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhlcmUgYXJlIG5vIGRpZmZlcmVudCBmb3JtcyBvZiBvcmRpbmFsIG51bWJlcnMgaW4gVmlldG5hbWVzZVxuICByZXR1cm4gU3RyaW5nKG51bWJlcik7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ1F1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==