(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ka-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/ka/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ka/_lib/localize/index.js ***!
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
  narrow: ['ჩ.წ-მდე', 'ჩ.წ'],
  abbreviated: ['ჩვ.წ-მდე', 'ჩვ.წ'],
  wide: ['ჩვენს წელთაღრიცხვამდე', 'ჩვენი წელთაღრიცხვით']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ლი კვ', '2-ე კვ', '3-ე კვ', '4-ე კვ'],
  wide: ['1-ლი კვარტალი', '2-ე კვარტალი', '3-ე კვარტალი', '4-ე კვარტალი']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ია', 'თე', 'მა', 'აპ', 'მს', 'ვნ', 'ვლ', 'აგ', 'სე', 'ოქ', 'ნო', 'დე'],
  abbreviated: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
  wide: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
};
var dayValues = {
  narrow: ['კვ', 'ორ', 'სა', 'ოთ', 'ხუ', 'პა', 'შა'],
  short: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  abbreviated: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  wide: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'შუაღამე',
    noon: 'შუადღე',
    morning: 'დილა',
    afternoon: 'საღამო',
    evening: 'საღამო',
    night: 'ღამე'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'შუაღამე',
    noon: 'შუადღე',
    morning: 'დილა',
    afternoon: 'საღამო',
    evening: 'საღამო',
    night: 'ღამე'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'შუაღამე',
    noon: 'შუადღე',
    morning: 'დილა',
    afternoon: 'საღამო',
    evening: 'საღამო',
    night: 'ღამე'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'შუაღამით',
    noon: 'შუადღისას',
    morning: 'დილით',
    afternoon: 'ნაშუადღევს',
    evening: 'საღამოს',
    night: 'ღამით'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'შუაღამით',
    noon: 'შუადღისას',
    morning: 'დილით',
    afternoon: 'ნაშუადღევს',
    evening: 'საღამოს',
    night: 'ღამით'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'შუაღამით',
    noon: 'შუადღისას',
    morning: 'დილით',
    afternoon: 'ნაშუადღევს',
    evening: 'საღამოს',
    night: 'ღამით'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  if (number === 1) {
    return number + '-ლი';
  }
  return number + '-ე';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2thL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUta2EtX2xpYi1sb2NhbGl6ZS1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIikpO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+GDqS7hg6wt4YOb4YOT4YOUJywgJ+GDqS7hg6wnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn4YOp4YOVLuGDrC3hg5vhg5Phg5QnLCAn4YOp4YOVLuGDrCddLFxuICB3aWRlOiBbJ+GDqeGDleGDlOGDnOGDoSDhg6zhg5Thg5rhg5fhg5Dhg6bhg6Dhg5jhg6rhg67hg5Xhg5Dhg5vhg5Phg5QnLCAn4YOp4YOV4YOU4YOc4YOYIOGDrOGDlOGDmuGDl+GDkOGDpuGDoOGDmOGDquGDruGDleGDmOGDlyddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzEt4YOa4YOYIOGDmeGDlScsICcyLeGDlCDhg5nhg5UnLCAnMy3hg5Qg4YOZ4YOVJywgJzQt4YOUIOGDmeGDlSddLFxuICB3aWRlOiBbJzEt4YOa4YOYIOGDmeGDleGDkOGDoOGDouGDkOGDmuGDmCcsICcyLeGDlCDhg5nhg5Xhg5Dhg6Dhg6Lhg5Dhg5rhg5gnLCAnMy3hg5Qg4YOZ4YOV4YOQ4YOg4YOi4YOQ4YOa4YOYJywgJzQt4YOUIOGDmeGDleGDkOGDoOGDouGDkOGDmuGDmCddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfhg5jhg5AnLCAn4YOX4YOUJywgJ+GDm+GDkCcsICfhg5Dhg54nLCAn4YOb4YOhJywgJ+GDleGDnCcsICfhg5Xhg5onLCAn4YOQ4YOSJywgJ+GDoeGDlCcsICfhg53hg6UnLCAn4YOc4YOdJywgJ+GDk+GDlCddLFxuICBhYmJyZXZpYXRlZDogWyfhg5jhg5Dhg5wnLCAn4YOX4YOU4YORJywgJ+GDm+GDkOGDoCcsICfhg5Dhg57hg6AnLCAn4YOb4YOQ4YOYJywgJ+GDmOGDleGDnCcsICfhg5jhg5Xhg5onLCAn4YOQ4YOS4YOVJywgJ+GDoeGDlOGDpScsICfhg53hg6Xhg6InLCAn4YOc4YOd4YOUJywgJ+GDk+GDlOGDmSddLFxuICB3aWRlOiBbJ+GDmOGDkOGDnOGDleGDkOGDoOGDmCcsICfhg5fhg5Thg5Hhg5Thg6Dhg5Xhg5Dhg5rhg5gnLCAn4YOb4YOQ4YOg4YOi4YOYJywgJ+GDkOGDnuGDoOGDmOGDmuGDmCcsICfhg5vhg5Dhg5jhg6Hhg5gnLCAn4YOY4YOV4YOc4YOY4YOh4YOYJywgJ+GDmOGDleGDmuGDmOGDoeGDmCcsICfhg5Dhg5Lhg5Xhg5jhg6Hhg6Lhg50nLCAn4YOh4YOU4YOl4YOi4YOU4YOb4YOR4YOU4YOg4YOYJywgJ+GDneGDpeGDouGDneGDm+GDkeGDlOGDoOGDmCcsICfhg5zhg53hg5Thg5vhg5Hhg5Thg6Dhg5gnLCAn4YOT4YOU4YOZ4YOU4YOb4YOR4YOU4YOg4YOYJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4YOZ4YOVJywgJ+GDneGDoCcsICfhg6Hhg5AnLCAn4YOd4YOXJywgJ+GDruGDoycsICfhg57hg5AnLCAn4YOo4YOQJ10sXG4gIHNob3J0OiBbJ+GDmeGDleGDmCcsICfhg53hg6Dhg6gnLCAn4YOh4YOQ4YObJywgJ+GDneGDl+GDricsICfhg67hg6Phg5cnLCAn4YOe4YOQ4YOgJywgJ+GDqOGDkOGDkSddLFxuICBhYmJyZXZpYXRlZDogWyfhg5nhg5Xhg5gnLCAn4YOd4YOg4YOoJywgJ+GDoeGDkOGDmycsICfhg53hg5fhg64nLCAn4YOu4YOj4YOXJywgJ+GDnuGDkOGDoCcsICfhg6jhg5Dhg5EnXSxcbiAgd2lkZTogWyfhg5nhg5Xhg5jhg6Dhg5AnLCAn4YOd4YOg4YOo4YOQ4YOR4YOQ4YOX4YOYJywgJ+GDoeGDkOGDm+GDqOGDkOGDkeGDkOGDl+GDmCcsICfhg53hg5fhg67hg6jhg5Dhg5Hhg5Dhg5fhg5gnLCAn4YOu4YOj4YOX4YOo4YOQ4YOR4YOQ4YOX4YOYJywgJ+GDnuGDkOGDoOGDkOGDoeGDmeGDlOGDleGDmCcsICfhg6jhg5Dhg5Hhg5Dhg5fhg5gnXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ+GDqOGDo+GDkOGDpuGDkOGDm+GDlCcsXG4gICAgbm9vbjogJ+GDqOGDo+GDkOGDk+GDpuGDlCcsXG4gICAgbW9ybmluZzogJ+GDk+GDmOGDmuGDkCcsXG4gICAgYWZ0ZXJub29uOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBldmVuaW5nOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBuaWdodDogJ+GDpuGDkOGDm+GDlCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ+GDqOGDo+GDkOGDpuGDkOGDm+GDlCcsXG4gICAgbm9vbjogJ+GDqOGDo+GDkOGDk+GDpuGDlCcsXG4gICAgbW9ybmluZzogJ+GDk+GDmOGDmuGDkCcsXG4gICAgYWZ0ZXJub29uOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBldmVuaW5nOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBuaWdodDogJ+GDpuGDkOGDm+GDlCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ+GDqOGDo+GDkOGDpuGDkOGDm+GDlCcsXG4gICAgbm9vbjogJ+GDqOGDo+GDkOGDk+GDpuGDlCcsXG4gICAgbW9ybmluZzogJ+GDk+GDmOGDmuGDkCcsXG4gICAgYWZ0ZXJub29uOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBldmVuaW5nOiAn4YOh4YOQ4YOm4YOQ4YOb4YOdJyxcbiAgICBuaWdodDogJ+GDpuGDkOGDm+GDlCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICfhg6jhg6Phg5Dhg6bhg5Dhg5vhg5jhg5cnLFxuICAgIG5vb246ICfhg6jhg6Phg5Dhg5Phg6bhg5jhg6Hhg5Dhg6EnLFxuICAgIG1vcm5pbmc6ICfhg5Phg5jhg5rhg5jhg5cnLFxuICAgIGFmdGVybm9vbjogJ+GDnOGDkOGDqOGDo+GDkOGDk+GDpuGDlOGDleGDoScsXG4gICAgZXZlbmluZzogJ+GDoeGDkOGDpuGDkOGDm+GDneGDoScsXG4gICAgbmlnaHQ6ICfhg6bhg5Dhg5vhg5jhg5cnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICfhg6jhg6Phg5Dhg6bhg5Dhg5vhg5jhg5cnLFxuICAgIG5vb246ICfhg6jhg6Phg5Dhg5Phg6bhg5jhg6Hhg5Dhg6EnLFxuICAgIG1vcm5pbmc6ICfhg5Phg5jhg5rhg5jhg5cnLFxuICAgIGFmdGVybm9vbjogJ+GDnOGDkOGDqOGDo+GDkOGDk+GDpuGDlOGDleGDoScsXG4gICAgZXZlbmluZzogJ+GDoeGDkOGDpuGDkOGDm+GDneGDoScsXG4gICAgbmlnaHQ6ICfhg6bhg5Dhg5vhg5jhg5cnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICfhg6jhg6Phg5Dhg6bhg5Dhg5vhg5jhg5cnLFxuICAgIG5vb246ICfhg6jhg6Phg5Dhg5Phg6bhg5jhg6Hhg5Dhg6EnLFxuICAgIG1vcm5pbmc6ICfhg5Phg5jhg5rhg5jhg5cnLFxuICAgIGFmdGVybm9vbjogJ+GDnOGDkOGDqOGDo+GDkOGDk+GDpuGDlOGDleGDoScsXG4gICAgZXZlbmluZzogJ+GDoeGDkOGDpuGDkOGDm+GDneGDoScsXG4gICAgbmlnaHQ6ICfhg6bhg5Dhg5vhg5jhg5cnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICByZXR1cm4gbnVtYmVyICsgJy3hg5rhg5gnO1xuICB9XG4gIHJldHVybiBudW1iZXIgKyAnLeGDlCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==