(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sk-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/sk/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/sk/_lib/localize/index.js ***!
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
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1772
var eraValues = {
  narrow: ['pred Kr.', 'po Kr.'],
  abbreviated: ['pred Kr.', 'po Kr.'],
  wide: ['pred Kristom', 'po Kristovi']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1780
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. štvrťrok', '2. štvrťrok', '3. štvrťrok', '4. štvrťrok']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1804
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december']
};
var formattingMonthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1876
var dayValues = {
  narrow: ['n', 'p', 'u', 's', 'š', 'p', 's'],
  short: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  abbreviated: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  wide: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota']
};

// https://www.unicode.org/cldr/charts/32/summary/sk.html#1932
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'poln.',
    noon: 'pol.',
    morning: 'ráno',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noc'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'poln.',
    noon: 'pol.',
    morning: 'ráno',
    afternoon: 'popol.',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'polnoc',
    noon: 'poludnie',
    morning: 'ráno',
    afternoon: 'popoludnie',
    evening: 'večer',
    night: 'noc'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o poln.',
    noon: 'nap.',
    morning: 'ráno',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'v n.'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o poln.',
    noon: 'napol.',
    morning: 'ráno',
    afternoon: 'popol.',
    evening: 'večer',
    night: 'v noci'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'o polnoci',
    noon: 'napoludnie',
    morning: 'ráno',
    afternoon: 'popoludní',
    evening: 'večer',
    night: 'v noci'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NrL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXNrLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbi8vIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzMyL3N1bW1hcnkvc2suaHRtbCMxNzcyXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsncHJlZCBLci4nLCAncG8gS3IuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3ByZWQgS3IuJywgJ3BvIEtyLiddLFxuICB3aWRlOiBbJ3ByZWQgS3Jpc3RvbScsICdwbyBLcmlzdG92aSddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L3NrLmh0bWwjMTc4MFxudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMS4gxaF0dnLFpXJvaycsICcyLiDFoXR2csWlcm9rJywgJzMuIMWhdHZyxaVyb2snLCAnNC4gxaF0dnLFpXJvayddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L3NrLmh0bWwjMTgwNFxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ23DoWonLCAnasO6bicsICdqw7psJywgJ2F1ZycsICdzZXAnLCAnb2t0JywgJ25vdicsICdkZWMnXSxcbiAgd2lkZTogWydqYW51w6FyJywgJ2ZlYnJ1w6FyJywgJ21hcmVjJywgJ2FwcsOtbCcsICdtw6FqJywgJ2rDum4nLCAnasO6bCcsICdhdWd1c3QnLCAnc2VwdGVtYmVyJywgJ29rdMOzYmVyJywgJ25vdmVtYmVyJywgJ2RlY2VtYmVyJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnaicsICdmJywgJ20nLCAnYScsICdtJywgJ2onLCAnaicsICdhJywgJ3MnLCAnbycsICduJywgJ2QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ23DoWonLCAnasO6bicsICdqw7psJywgJ2F1ZycsICdzZXAnLCAnb2t0JywgJ25vdicsICdkZWMnXSxcbiAgd2lkZTogWydqYW51w6FyYScsICdmZWJydcOhcmEnLCAnbWFyY2EnLCAnYXByw61sYScsICdtw6FqYScsICdqw7puYScsICdqw7psYScsICdhdWd1c3RhJywgJ3NlcHRlbWJyYScsICdva3TDs2JyYScsICdub3ZlbWJyYScsICdkZWNlbWJyYSddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L3NrLmh0bWwjMTg3NlxudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ24nLCAncCcsICd1JywgJ3MnLCAnxaEnLCAncCcsICdzJ10sXG4gIHNob3J0OiBbJ25lJywgJ3BvJywgJ3V0JywgJ3N0JywgJ8WhdCcsICdwaScsICdzbyddLFxuICBhYmJyZXZpYXRlZDogWyduZScsICdwbycsICd1dCcsICdzdCcsICfFoXQnLCAncGknLCAnc28nXSxcbiAgd2lkZTogWyduZWRlxL5hJywgJ3BvbmRlbG9rJywgJ3V0b3JvaycsICdzdHJlZGEnLCAnxaF0dnJ0b2snLCAncGlhdG9rJywgJ3NvYm90YSddXG59O1xuXG4vLyBodHRwczovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8zMi9zdW1tYXJ5L3NrLmh0bWwjMTkzMlxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb2xuLicsXG4gICAgbm9vbjogJ3BvbC4nLFxuICAgIG1vcm5pbmc6ICdyw6FubycsXG4gICAgYWZ0ZXJub29uOiAncG9wLicsXG4gICAgZXZlbmluZzogJ3ZlxI0uJyxcbiAgICBuaWdodDogJ25vYydcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ3BvbG4uJyxcbiAgICBub29uOiAncG9sLicsXG4gICAgbW9ybmluZzogJ3LDoW5vJyxcbiAgICBhZnRlcm5vb246ICdwb3BvbC4nLFxuICAgIGV2ZW5pbmc6ICd2ZcSNZXInLFxuICAgIG5pZ2h0OiAnbm9jJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdwb2xub2MnLFxuICAgIG5vb246ICdwb2x1ZG5pZScsXG4gICAgbW9ybmluZzogJ3LDoW5vJyxcbiAgICBhZnRlcm5vb246ICdwb3BvbHVkbmllJyxcbiAgICBldmVuaW5nOiAndmXEjWVyJyxcbiAgICBuaWdodDogJ25vYydcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ28gcG9sbi4nLFxuICAgIG5vb246ICduYXAuJyxcbiAgICBtb3JuaW5nOiAncsOhbm8nLFxuICAgIGFmdGVybm9vbjogJ3BvcC4nLFxuICAgIGV2ZW5pbmc6ICd2ZcSNLicsXG4gICAgbmlnaHQ6ICd2IG4uJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbyBwb2xuLicsXG4gICAgbm9vbjogJ25hcG9sLicsXG4gICAgbW9ybmluZzogJ3LDoW5vJyxcbiAgICBhZnRlcm5vb246ICdwb3BvbC4nLFxuICAgIGV2ZW5pbmc6ICd2ZcSNZXInLFxuICAgIG5pZ2h0OiAndiBub2NpJ1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdvIHBvbG5vY2knLFxuICAgIG5vb246ICduYXBvbHVkbmllJyxcbiAgICBtb3JuaW5nOiAncsOhbm8nLFxuICAgIGFmdGVybm9vbjogJ3BvcG9sdWRuw60nLFxuICAgIGV2ZW5pbmc6ICd2ZcSNZXInLFxuICAgIG5pZ2h0OiAndiBub2NpJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nTW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=