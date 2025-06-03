(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-lv-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/lv/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/lv/_lib/localize/index.js ***!
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
  narrow: ['p.m.ē', 'm.ē'],
  abbreviated: ['p. m. ē.', 'm. ē.'],
  wide: ['pirms mūsu ēras', 'mūsu ērā']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmais ceturksnis', 'otrais ceturksnis', 'trešais ceturksnis', 'ceturtais ceturksnis']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmajā ceturksnī', 'otrajā ceturksnī', 'trešajā ceturksnī', 'ceturtajā ceturksnī']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris']
};
var formattingMonthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'martā', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvārī', 'februārī', 'martā', 'aprīlī', 'maijā', 'jūnijā', 'jūlijā', 'augustā', 'septembrī', 'oktobrī', 'novembrī', 'decembrī']
};
var dayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena']
};
var formattingDayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdienā', 'pirmdienā', 'otrdienā', 'trešdienā', 'ceturtdienā', 'piektdienā', 'sestdienā']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'diena',
    evening: 'vakars',
    night: 'nakts'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'pēcpusd.',
    evening: 'vakars',
    night: 'nakts'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnakts',
    noon: 'pusdienlaiks',
    morning: 'rīts',
    afternoon: 'pēcpusdiena',
    evening: 'vakars',
    night: 'nakts'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'dienā',
    evening: 'vakarā',
    night: 'naktī'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'pēcpusd.',
    evening: 'vakarā',
    night: 'naktī'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnaktī',
    noon: 'pusdienlaikā',
    morning: 'rītā',
    afternoon: 'pēcpusdienā',
    evening: 'vakarā',
    night: 'naktī'
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2x2L19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1sdi1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsncC5tLsSTJywgJ20uxJMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsncC4gbS4gxJMuJywgJ20uIMSTLiddLFxuICB3aWRlOiBbJ3Bpcm1zIG3Fq3N1IMSTcmFzJywgJ23Fq3N1IMSTcsSBJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4gY2V0LicsICcyLiBjZXQuJywgJzMuIGNldC4nLCAnNC4gY2V0LiddLFxuICB3aWRlOiBbJ3Bpcm1haXMgY2V0dXJrc25pcycsICdvdHJhaXMgY2V0dXJrc25pcycsICd0cmXFoWFpcyBjZXR1cmtzbmlzJywgJ2NldHVydGFpcyBjZXR1cmtzbmlzJ11cbn07XG52YXIgZm9ybWF0dGluZ1F1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzEuIGNldC4nLCAnMi4gY2V0LicsICczLiBjZXQuJywgJzQuIGNldC4nXSxcbiAgd2lkZTogWydwaXJtYWrEgSBjZXR1cmtzbsSrJywgJ290cmFqxIEgY2V0dXJrc27EqycsICd0cmXFoWFqxIEgY2V0dXJrc27EqycsICdjZXR1cnRhasSBIGNldHVya3NuxKsnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbnYuJywgJ2ZlYnIuJywgJ21hcnRzJywgJ2Fwci4nLCAnbWFpanMnLCAnasWrbi4nLCAnasWrbC4nLCAnYXVnLicsICdzZXB0LicsICdva3QuJywgJ25vdi4nLCAnZGVjLiddLFxuICB3aWRlOiBbJ2phbnbEgXJpcycsICdmZWJydcSBcmlzJywgJ21hcnRzJywgJ2FwcsSrbGlzJywgJ21haWpzJywgJ2rFq25panMnLCAnasWrbGlqcycsICdhdWd1c3RzJywgJ3NlcHRlbWJyaXMnLCAnb2t0b2JyaXMnLCAnbm92ZW1icmlzJywgJ2RlY2VtYnJpcyddXG59O1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbnYuJywgJ2ZlYnIuJywgJ21hcnTEgScsICdhcHIuJywgJ21haWpzJywgJ2rFq24uJywgJ2rFq2wuJywgJ2F1Zy4nLCAnc2VwdC4nLCAnb2t0LicsICdub3YuJywgJ2RlYy4nXSxcbiAgd2lkZTogWydqYW52xIFyxKsnLCAnZmVicnXEgXLEqycsICdtYXJ0xIEnLCAnYXByxKtsxKsnLCAnbWFpasSBJywgJ2rFq25pasSBJywgJ2rFq2xpasSBJywgJ2F1Z3VzdMSBJywgJ3NlcHRlbWJyxKsnLCAnb2t0b2JyxKsnLCAnbm92ZW1icsSrJywgJ2RlY2VtYnLEqyddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3YnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQaycsICdTJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3N2xJN0ZC4nLCAncGlybWQuJywgJ290cmQuJywgJ3RyZcWhZC4nLCAnY2V0dXJ0ZC4nLCAncGlla3RkLicsICdzZXN0ZC4nXSxcbiAgd2lkZTogWydzdsSTdGRpZW5hJywgJ3Bpcm1kaWVuYScsICdvdHJkaWVuYScsICd0cmXFoWRpZW5hJywgJ2NldHVydGRpZW5hJywgJ3BpZWt0ZGllbmEnLCAnc2VzdGRpZW5hJ11cbn07XG52YXIgZm9ybWF0dGluZ0RheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3YnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQaycsICdTJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3N2xJN0ZC4nLCAncGlybWQuJywgJ290cmQuJywgJ3RyZcWhZC4nLCAnY2V0dXJ0ZC4nLCAncGlla3RkLicsICdzZXN0ZC4nXSxcbiAgd2lkZTogWydzdsSTdGRpZW7EgScsICdwaXJtZGllbsSBJywgJ290cmRpZW7EgScsICd0cmXFoWRpZW7EgScsICdjZXR1cnRkaWVuxIEnLCAncGlla3RkaWVuxIEnLCAnc2VzdGRpZW7EgSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdwdXNuLicsXG4gICAgbm9vbjogJ3B1c2QuJyxcbiAgICBtb3JuaW5nOiAncsSrdHMnLFxuICAgIGFmdGVybm9vbjogJ2RpZW5hJyxcbiAgICBldmVuaW5nOiAndmFrYXJzJyxcbiAgICBuaWdodDogJ25ha3RzJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAncHVzbi4nLFxuICAgIG5vb246ICdwdXNkLicsXG4gICAgbW9ybmluZzogJ3LEq3RzJyxcbiAgICBhZnRlcm5vb246ICdwxJNjcHVzZC4nLFxuICAgIGV2ZW5pbmc6ICd2YWthcnMnLFxuICAgIG5pZ2h0OiAnbmFrdHMnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3B1c25ha3RzJyxcbiAgICBub29uOiAncHVzZGllbmxhaWtzJyxcbiAgICBtb3JuaW5nOiAncsSrdHMnLFxuICAgIGFmdGVybm9vbjogJ3DEk2NwdXNkaWVuYScsXG4gICAgZXZlbmluZzogJ3Zha2FycycsXG4gICAgbmlnaHQ6ICduYWt0cydcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3B1c24uJyxcbiAgICBub29uOiAncHVzZC4nLFxuICAgIG1vcm5pbmc6ICdyxKt0xIEnLFxuICAgIGFmdGVybm9vbjogJ2RpZW7EgScsXG4gICAgZXZlbmluZzogJ3Zha2FyxIEnLFxuICAgIG5pZ2h0OiAnbmFrdMSrJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAncHVzbi4nLFxuICAgIG5vb246ICdwdXNkLicsXG4gICAgbW9ybmluZzogJ3LEq3TEgScsXG4gICAgYWZ0ZXJub29uOiAncMSTY3B1c2QuJyxcbiAgICBldmVuaW5nOiAndmFrYXLEgScsXG4gICAgbmlnaHQ6ICduYWt0xKsnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3B1c25ha3TEqycsXG4gICAgbm9vbjogJ3B1c2RpZW5sYWlrxIEnLFxuICAgIG1vcm5pbmc6ICdyxKt0xIEnLFxuICAgIGFmdGVybm9vbjogJ3DEk2NwdXNkaWVuxIEnLFxuICAgIGV2ZW5pbmc6ICd2YWthcsSBJyxcbiAgICBuaWdodDogJ25ha3TEqydcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXIgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ1F1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==