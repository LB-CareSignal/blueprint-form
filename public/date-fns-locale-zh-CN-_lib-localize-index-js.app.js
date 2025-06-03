(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-zh-CN-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/zh-CN/_lib/localize/index.js ***!
  \*******************************************************************/
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
  narrow: ['前', '公元'],
  abbreviated: ['前', '公元'],
  wide: ['公元前', '公元']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['第一季', '第二季', '第三季', '第四季'],
  wide: ['第一季度', '第二季度', '第三季度', '第四季度']
};
var monthValues = {
  narrow: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  abbreviated: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var dayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'],
  short: ['日', '一', '二', '三', '四', '五', '六'],
  abbreviated: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};
var dayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  switch (options === null || options === void 0 ? void 0 : options.unit) {
    case 'date':
      return number.toString() + '日';
    case 'hour':
      return number.toString() + '时';
    case 'minute':
      return number.toString() + '分';
    case 'second':
      return number.toString() + '秒';
    default:
      return '第 ' + number.toString();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3poLUNOL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsNEdBQXdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXpoLUNOLV9saWItbG9jYWxpemUtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpLmRlZmF1bHQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCIpKTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfliY0nLCAn5YWs5YWDJ10sXG4gIGFiYnJldmlhdGVkOiBbJ+WJjScsICflhazlhYMnXSxcbiAgd2lkZTogWyflhazlhYPliY0nLCAn5YWs5YWDJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsn56ys5LiA5a2jJywgJ+esrOS6jOWtoycsICfnrKzkuInlraMnLCAn56ys5Zub5a2jJ10sXG4gIHdpZGU6IFsn56ys5LiA5a2j5bqmJywgJ+esrOS6jOWto+W6picsICfnrKzkuInlraPluqYnLCAn56ys5Zub5a2j5bqmJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfljYEnLCAn5Y2B5LiAJywgJ+WNgeS6jCddLFxuICBhYmJyZXZpYXRlZDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuICB3aWRlOiBbJ+S4gOaciCcsICfkuozmnIgnLCAn5LiJ5pyIJywgJ+Wbm+aciCcsICfkupTmnIgnLCAn5YWt5pyIJywgJ+S4g+aciCcsICflhavmnIgnLCAn5Lmd5pyIJywgJ+WNgeaciCcsICfljYHkuIDmnIgnLCAn5Y2B5LqM5pyIJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG4gIHNob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuICBhYmJyZXZpYXRlZDogWyflkajml6UnLCAn5ZGo5LiAJywgJ+WRqOS6jCcsICflkajkuIknLCAn5ZGo5ZubJywgJ+WRqOS6lCcsICflkajlha0nXSxcbiAgd2lkZTogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn5LiKJyxcbiAgICBwbTogJ+S4iycsXG4gICAgbWlkbmlnaHQ6ICflh4zmmagnLFxuICAgIG5vb246ICfljYgnLFxuICAgIG1vcm5pbmc6ICfml6knLFxuICAgIGFmdGVybm9vbjogJ+S4i+WNiCcsXG4gICAgZXZlbmluZzogJ+aZmicsXG4gICAgbmlnaHQ6ICflpJwnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfkuIrljYgnLFxuICAgIHBtOiAn5LiL5Y2IJyxcbiAgICBtaWRuaWdodDogJ+WHjOaZqCcsXG4gICAgbm9vbjogJ+S4reWNiCcsXG4gICAgbW9ybmluZzogJ+aXqeaZqCcsXG4gICAgYWZ0ZXJub29uOiAn5Lit5Y2IJyxcbiAgICBldmVuaW5nOiAn5pma5LiKJyxcbiAgICBuaWdodDogJ+WknOmXtCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn5LiK5Y2IJyxcbiAgICBwbTogJ+S4i+WNiCcsXG4gICAgbWlkbmlnaHQ6ICflh4zmmagnLFxuICAgIG5vb246ICfkuK3ljYgnLFxuICAgIG1vcm5pbmc6ICfml6nmmagnLFxuICAgIGFmdGVybm9vbjogJ+S4reWNiCcsXG4gICAgZXZlbmluZzogJ+aZmuS4iicsXG4gICAgbmlnaHQ6ICflpJzpl7QnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICfkuIonLFxuICAgIHBtOiAn5LiLJyxcbiAgICBtaWRuaWdodDogJ+WHjOaZqCcsXG4gICAgbm9vbjogJ+WNiCcsXG4gICAgbW9ybmluZzogJ+aXqScsXG4gICAgYWZ0ZXJub29uOiAn5LiL5Y2IJyxcbiAgICBldmVuaW5nOiAn5pmaJyxcbiAgICBuaWdodDogJ+WknCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ+S4iuWNiCcsXG4gICAgcG06ICfkuIvljYgnLFxuICAgIG1pZG5pZ2h0OiAn5YeM5pmoJyxcbiAgICBub29uOiAn5Lit5Y2IJyxcbiAgICBtb3JuaW5nOiAn5pep5pmoJyxcbiAgICBhZnRlcm5vb246ICfkuK3ljYgnLFxuICAgIGV2ZW5pbmc6ICfmmZrkuIonLFxuICAgIG5pZ2h0OiAn5aSc6Ze0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICfkuIrljYgnLFxuICAgIHBtOiAn5LiL5Y2IJyxcbiAgICBtaWRuaWdodDogJ+WHjOaZqCcsXG4gICAgbm9vbjogJ+S4reWNiCcsXG4gICAgbW9ybmluZzogJ+aXqeaZqCcsXG4gICAgYWZ0ZXJub29uOiAn5Lit5Y2IJyxcbiAgICBldmVuaW5nOiAn5pma5LiKJyxcbiAgICBuaWdodDogJ+WknOmXtCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgc3dpdGNoIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdCkge1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG51bWJlci50b1N0cmluZygpICsgJ+aXpSc7XG4gICAgY2FzZSAnaG91cic6XG4gICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkgKyAn5pe2JztcbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIG51bWJlci50b1N0cmluZygpICsgJ+WIhic7XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKSArICfnp5InO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ+esrCAnICsgbnVtYmVyLnRvU3RyaW5nKCk7XG4gIH1cbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9