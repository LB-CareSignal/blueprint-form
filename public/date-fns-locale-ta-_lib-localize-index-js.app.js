(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ta-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ta/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ta/_lib/localize/index.js ***!
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
// Ref: https://www.unicode.org/cldr/charts/32/summary/ta.html

var eraValues = {
  narrow: ['கி.மு.', 'கி.பி.'],
  abbreviated: ['கி.மு.', 'கி.பி.'],
  // CLDR #1624, #1626
  wide: ['கிறிஸ்துவுக்கு முன்', 'அன்னோ டோமினி'] // CLDR #1620, #1622
};

var quarterValues = {
  // CLDR #1644 - #1647
  narrow: ['1', '2', '3', '4'],
  // CLDR #1636 - #1639
  abbreviated: ['காலா.1', 'காலா.2', 'காலா.3', 'காலா.4'],
  // CLDR #1628 - #1631
  wide: ['ஒன்றாம் காலாண்டு', 'இரண்டாம் காலாண்டு', 'மூன்றாம் காலாண்டு', 'நான்காம் காலாண்டு']
};
var monthValues = {
  // CLDR #700 - #711
  narrow: ['ஜ', 'பி', 'மா', 'ஏ', 'மே', 'ஜூ', 'ஜூ', 'ஆ', 'செ', 'அ', 'ந', 'டி'],
  // CLDR #1676 - #1687
  abbreviated: ['ஜன.', 'பிப்.', 'மார்.', 'ஏப்.', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக.', 'செப்.', 'அக்.', 'நவ.', 'டிச.'],
  // CLDR #1652 - #1663
  wide: ['ஜனவரி',
  // January
  'பிப்ரவரி',
  // February
  'மார்ச்',
  // March
  'ஏப்ரல்',
  // April
  'மே',
  // May
  'ஜூன்',
  // June
  'ஜூலை',
  // July
  'ஆகஸ்ட்',
  // August
  'செப்டம்பர்',
  // September
  'அக்டோபர்',
  // October
  'நவம்பர்',
  // November
  'டிசம்பர்' // December
  ]
};

var dayValues = {
  // CLDR #1766 - #1772
  narrow: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  // CLDR #1752 - #1758
  short: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  // CLDR #1738 - #1744
  abbreviated: ['ஞாயி.', 'திங்.', 'செவ்.', 'புத.', 'வியா.', 'வெள்.', 'சனி'],
  // CLDR #1724 - #1730
  wide: ['ஞாயிறு',
  // Sunday
  'திங்கள்',
  // Monday
  'செவ்வாய்',
  // Tuesday
  'புதன்',
  // Wednesday
  'வியாழன்',
  // Thursday
  'வெள்ளி',
  // Friday
  'சனி' // Saturday
  ]
};

// CLDR #1780 - #1845
var dayPeriodValues = {
  narrow: {
    am: 'மு.ப',
    pm: 'பி.ப',
    midnight: 'நள்.',
    noon: 'நண்.',
    morning: 'கா.',
    afternoon: 'மதி.',
    evening: 'மா.',
    night: 'இர.'
  },
  abbreviated: {
    am: 'முற்பகல்',
    pm: 'பிற்பகல்',
    midnight: 'நள்ளிரவு',
    noon: 'நண்பகல்',
    morning: 'காலை',
    afternoon: 'மதியம்',
    evening: 'மாலை',
    night: 'இரவு'
  },
  wide: {
    am: 'முற்பகல்',
    pm: 'பிற்பகல்',
    midnight: 'நள்ளிரவு',
    noon: 'நண்பகல்',
    morning: 'காலை',
    afternoon: 'மதியம்',
    evening: 'மாலை',
    night: 'இரவு'
  }
};

// CLDR #1780 - #1845
var formattingDayPeriodValues = {
  narrow: {
    am: 'மு.ப',
    pm: 'பி.ப',
    midnight: 'நள்.',
    noon: 'நண்.',
    morning: 'கா.',
    afternoon: 'மதி.',
    evening: 'மா.',
    night: 'இர.'
  },
  abbreviated: {
    am: 'முற்பகல்',
    pm: 'பிற்பகல்',
    midnight: 'நள்ளிரவு',
    noon: 'நண்பகல்',
    morning: 'காலை',
    afternoon: 'மதியம்',
    evening: 'மாலை',
    night: 'இரவு'
  },
  wide: {
    am: 'முற்பகல்',
    pm: 'பிற்பகல்',
    midnight: 'நள்ளிரவு',
    noon: 'நண்பகல்',
    morning: 'காலை',
    afternoon: 'மதியம்',
    evening: 'மாலை',
    night: 'இரவு'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RhL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXRhLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbi8vIFJlZjogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMzIvc3VtbWFyeS90YS5odG1sXG5cbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfgrpXgrr8u4K6u4K+BLicsICfgrpXgrr8u4K6q4K6/LiddLFxuICBhYmJyZXZpYXRlZDogWyfgrpXgrr8u4K6u4K+BLicsICfgrpXgrr8u4K6q4K6/LiddLFxuICAvLyBDTERSICMxNjI0LCAjMTYyNlxuICB3aWRlOiBbJ+CuleCuv+CuseCuv+CuuOCvjeCupOCvgeCuteCvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr40nLCAn4K6F4K6p4K+N4K6p4K+LIOCun+Cvi+CuruCuv+CuqeCuvyddIC8vIENMRFIgIzE2MjAsICMxNjIyXG59O1xuXG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgLy8gQ0xEUiAjMTY0NCAtICMxNjQ3XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIC8vIENMRFIgIzE2MzYgLSAjMTYzOVxuICBhYmJyZXZpYXRlZDogWyfgrpXgrr7grrLgrr4uMScsICfgrpXgrr7grrLgrr4uMicsICfgrpXgrr7grrLgrr4uMycsICfgrpXgrr7grrLgrr4uNCddLFxuICAvLyBDTERSICMxNjI4IC0gIzE2MzFcbiAgd2lkZTogWyfgrpLgrqngr43grrHgrr7grq7gr40g4K6V4K6+4K6y4K6+4K6j4K+N4K6f4K+BJywgJ+Cuh+CusOCuo+CvjeCun+CuvuCuruCvjSDgrpXgrr7grrLgrr7grqPgr43grp/gr4EnLCAn4K6u4K+C4K6p4K+N4K6x4K6+4K6u4K+NIOCuleCuvuCusuCuvuCuo+CvjeCun+CvgScsICfgrqjgrr7grqngr43grpXgrr7grq7gr40g4K6V4K6+4K6y4K6+4K6j4K+N4K6f4K+BJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIC8vIENMRFIgIzcwMCAtICM3MTFcbiAgbmFycm93OiBbJ+CunCcsICfgrqrgrr8nLCAn4K6u4K6+JywgJ+CujycsICfgrq7gr4cnLCAn4K6c4K+CJywgJ+CunOCvgicsICfgroYnLCAn4K6a4K+GJywgJ+CuhScsICfgrqgnLCAn4K6f4K6/J10sXG4gIC8vIENMRFIgIzE2NzYgLSAjMTY4N1xuICBhYmJyZXZpYXRlZDogWyfgrpzgrqkuJywgJ+CuquCuv+CuquCvjS4nLCAn4K6u4K6+4K6w4K+NLicsICfgro/grqrgr40uJywgJ+CuruCvhycsICfgrpzgr4Lgrqngr40nLCAn4K6c4K+C4K6y4K+IJywgJ+CuhuCulS4nLCAn4K6a4K+G4K6q4K+NLicsICfgroXgrpXgr40uJywgJ+CuqOCutS4nLCAn4K6f4K6/4K6aLiddLFxuICAvLyBDTERSICMxNjUyIC0gIzE2NjNcbiAgd2lkZTogWyfgrpzgrqngrrXgrrDgrr8nLFxuICAvLyBKYW51YXJ5XG4gICfgrqrgrr/grqrgr43grrDgrrXgrrDgrr8nLFxuICAvLyBGZWJydWFyeVxuICAn4K6u4K6+4K6w4K+N4K6a4K+NJyxcbiAgLy8gTWFyY2hcbiAgJ+Cuj+CuquCvjeCusOCusuCvjScsXG4gIC8vIEFwcmlsXG4gICfgrq7gr4cnLFxuICAvLyBNYXlcbiAgJ+CunOCvguCuqeCvjScsXG4gIC8vIEp1bmVcbiAgJ+CunOCvguCusuCviCcsXG4gIC8vIEp1bHlcbiAgJ+CuhuCuleCuuOCvjeCun+CvjScsXG4gIC8vIEF1Z3VzdFxuICAn4K6a4K+G4K6q4K+N4K6f4K6u4K+N4K6q4K6w4K+NJyxcbiAgLy8gU2VwdGVtYmVyXG4gICfgroXgrpXgr43grp/gr4vgrqrgrrDgr40nLFxuICAvLyBPY3RvYmVyXG4gICfgrqjgrrXgrq7gr43grqrgrrDgr40nLFxuICAvLyBOb3ZlbWJlclxuICAn4K6f4K6/4K6a4K6u4K+N4K6q4K6w4K+NJyAvLyBEZWNlbWJlclxuICBdXG59O1xuXG52YXIgZGF5VmFsdWVzID0ge1xuICAvLyBDTERSICMxNzY2IC0gIzE3NzJcbiAgbmFycm93OiBbJ+CunuCuvicsICfgrqTgrr8nLCAn4K6a4K+GJywgJ+CuquCvgScsICfgrrXgrr8nLCAn4K614K+GJywgJ+CumiddLFxuICAvLyBDTERSICMxNzUyIC0gIzE3NThcbiAgc2hvcnQ6IFsn4K6e4K6+JywgJ+CupOCuvycsICfgrprgr4YnLCAn4K6q4K+BJywgJ+CuteCuvycsICfgrrXgr4YnLCAn4K6aJ10sXG4gIC8vIENMRFIgIzE3MzggLSAjMTc0NFxuICBhYmJyZXZpYXRlZDogWyfgrp7grr7grq/grr8uJywgJ+CupOCuv+CumeCvjS4nLCAn4K6a4K+G4K614K+NLicsICfgrqrgr4HgrqQuJywgJ+CuteCuv+Cur+Cuvi4nLCAn4K614K+G4K6z4K+NLicsICfgrprgrqngrr8nXSxcbiAgLy8gQ0xEUiAjMTcyNCAtICMxNzMwXG4gIHdpZGU6IFsn4K6e4K6+4K6v4K6/4K6x4K+BJyxcbiAgLy8gU3VuZGF5XG4gICfgrqTgrr/grpngr43grpXgrrPgr40nLFxuICAvLyBNb25kYXlcbiAgJ+CumuCvhuCuteCvjeCuteCuvuCur+CvjScsXG4gIC8vIFR1ZXNkYXlcbiAgJ+CuquCvgeCupOCuqeCvjScsXG4gIC8vIFdlZG5lc2RheVxuICAn4K614K6/4K6v4K6+4K604K6p4K+NJyxcbiAgLy8gVGh1cnNkYXlcbiAgJ+CuteCvhuCus+CvjeCus+CuvycsXG4gIC8vIEZyaWRheVxuICAn4K6a4K6p4K6/JyAvLyBTYXR1cmRheVxuICBdXG59O1xuXG4vLyBDTERSICMxNzgwIC0gIzE4NDVcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn4K6u4K+BLuCuqicsXG4gICAgcG06ICfgrqrgrr8u4K6qJyxcbiAgICBtaWRuaWdodDogJ+CuqOCus+CvjS4nLFxuICAgIG5vb246ICfgrqjgrqPgr40uJyxcbiAgICBtb3JuaW5nOiAn4K6V4K6+LicsXG4gICAgYWZ0ZXJub29uOiAn4K6u4K6k4K6/LicsXG4gICAgZXZlbmluZzogJ+CuruCuvi4nLFxuICAgIG5pZ2h0OiAn4K6H4K6wLidcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+CuruCvgeCuseCvjeCuquCuleCusuCvjScsXG4gICAgcG06ICfgrqrgrr/grrHgr43grqrgrpXgrrLgr40nLFxuICAgIG1pZG5pZ2h0OiAn4K6o4K6z4K+N4K6z4K6/4K6w4K614K+BJyxcbiAgICBub29uOiAn4K6o4K6j4K+N4K6q4K6V4K6y4K+NJyxcbiAgICBtb3JuaW5nOiAn4K6V4K6+4K6y4K+IJyxcbiAgICBhZnRlcm5vb246ICfgrq7grqTgrr/grq/grq7gr40nLFxuICAgIGV2ZW5pbmc6ICfgrq7grr7grrLgr4gnLFxuICAgIG5pZ2h0OiAn4K6H4K6w4K614K+BJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfgrq7gr4HgrrHgr43grqrgrpXgrrLgr40nLFxuICAgIHBtOiAn4K6q4K6/4K6x4K+N4K6q4K6V4K6y4K+NJyxcbiAgICBtaWRuaWdodDogJ+CuqOCus+CvjeCus+Cuv+CusOCuteCvgScsXG4gICAgbm9vbjogJ+CuqOCuo+CvjeCuquCuleCusuCvjScsXG4gICAgbW9ybmluZzogJ+CuleCuvuCusuCviCcsXG4gICAgYWZ0ZXJub29uOiAn4K6u4K6k4K6/4K6v4K6u4K+NJyxcbiAgICBldmVuaW5nOiAn4K6u4K6+4K6y4K+IJyxcbiAgICBuaWdodDogJ+Cuh+CusOCuteCvgSdcbiAgfVxufTtcblxuLy8gQ0xEUiAjMTc4MCAtICMxODQ1XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfgrq7gr4Eu4K6qJyxcbiAgICBwbTogJ+CuquCuvy7grqonLFxuICAgIG1pZG5pZ2h0OiAn4K6o4K6z4K+NLicsXG4gICAgbm9vbjogJ+CuqOCuo+CvjS4nLFxuICAgIG1vcm5pbmc6ICfgrpXgrr4uJyxcbiAgICBhZnRlcm5vb246ICfgrq7grqTgrr8uJyxcbiAgICBldmVuaW5nOiAn4K6u4K6+LicsXG4gICAgbmlnaHQ6ICfgrofgrrAuJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn4K6u4K+B4K6x4K+N4K6q4K6V4K6y4K+NJyxcbiAgICBwbTogJ+CuquCuv+CuseCvjeCuquCuleCusuCvjScsXG4gICAgbWlkbmlnaHQ6ICfgrqjgrrPgr43grrPgrr/grrDgrrXgr4EnLFxuICAgIG5vb246ICfgrqjgrqPgr43grqrgrpXgrrLgr40nLFxuICAgIG1vcm5pbmc6ICfgrpXgrr7grrLgr4gnLFxuICAgIGFmdGVybm9vbjogJ+CuruCupOCuv+Cur+CuruCvjScsXG4gICAgZXZlbmluZzogJ+CuruCuvuCusuCviCcsXG4gICAgbmlnaHQ6ICfgrofgrrDgrrXgr4EnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+CuruCvgeCuseCvjeCuquCuleCusuCvjScsXG4gICAgcG06ICfgrqrgrr/grrHgr43grqrgrpXgrrLgr40nLFxuICAgIG1pZG5pZ2h0OiAn4K6o4K6z4K+N4K6z4K6/4K6w4K614K+BJyxcbiAgICBub29uOiAn4K6o4K6j4K+N4K6q4K6V4K6y4K+NJyxcbiAgICBtb3JuaW5nOiAn4K6V4K6+4K6y4K+IJyxcbiAgICBhZnRlcm5vb246ICfgrq7grqTgrr/grq/grq7gr40nLFxuICAgIGV2ZW5pbmc6ICfgrq7grr7grrLgr4gnLFxuICAgIG5pZ2h0OiAn4K6H4K6w4K614K+BJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICByZXR1cm4gU3RyaW5nKGRpcnR5TnVtYmVyKTtcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9