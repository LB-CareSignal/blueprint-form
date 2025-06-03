(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-vi-_lib-match-index-js"],{

/***/ "./node_modules/date-fns/locale/vi/_lib/match/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/vi/_lib/match/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
};
var parseEraPatterns = {
  any: [/^t/i, /^s/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
};
var parseQuarterPatterns = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
};
var matchMonthPatterns = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
};
var parseMonthPatterns = {
  narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
  abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
  wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
};
var matchDayPatterns = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};
var parseDayPatterns = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'wide'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3ZpL19saWIvbWF0Y2gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsc0dBQXFDO0FBQ2pGLHFDQUFxQyxtQkFBTyxDQUFDLG9IQUE0QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUIsNEJBQTRCLElBQUk7QUFDaEMsd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQyIsImZpbGUiOiJkYXRlLWZucy1sb2NhbGUtdmktX2xpYi1tYXRjaC1pbmRleC1qcy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIikuZGVmYXVsdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIikpO1xudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKS9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14odGNufHNjbikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHRyxrDhu5tjIENOfHNhdSBDTikvaSxcbiAgd2lkZTogL14odHLGsOG7m2MgQ8O0bmcgTmd1ecOqbnxzYXUgQ8O0bmcgTmd1ecOqbikvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnQvaSwgL15zL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKFsxMjM0XXxpezEsM312PykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecShbMTIzNF18aXsxLDN9dj8pL2ksXG4gIHdpZGU6IC9ecXXDvSAoWzEyMzRdfGl7MSwzfXY/KS9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvKDF8aSkkL2ksIC8oMnxpaSkkL2ksIC8oM3xpaWkpJC9pLCAvKDR8aXYpJC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIC8vIG1vbnRoIG51bWJlciBtYXkgY29udGFpbiBsZWFkaW5nIDAsICd0aGcnIHByZWZpeCBtYXkgaGF2ZSBzcGFjZSwgdW5kZXJzY29yZSBvciBlbXB0eSBiZWZvcmUgbnVtYmVyXG4gIC8vIG5vdGUgdGhlIG9yZGVyIG9mICcxJyBzaW5jZSBpdCBpcyBhIHN1Yi1zdHJpbmcgb2YgJzEwJywgc28gbXVzdCBiZSBsb3dlciBwcmlvcml0eVxuICBuYXJyb3c6IC9eKDA/WzItOV18MTB8MTF8MTJ8MD8xKS9pLFxuICAvLyBub3RlIHRoZSBvcmRlciBvZiAndGhnIDEnIHNpbmNlIGl0IGlzIHN1Yi1zdHJpbmcgb2YgJ3RoZyAxMCcsIHNvIG11c3QgYmUgbG93ZXIgcHJpb3JpdHlcbiAgYWJicmV2aWF0ZWQ6IC9edGhnWyBfXT8oMD9bMS05XSg/IVxcZCl8MTB8MTF8MTIpL2ksXG4gIC8vIG5vdGUgdGhlIG9yZGVyIG9mICdNxrDhu51pJyBzaW5jZSBpdCBpcyBzdWItc3RyaW5nIG9mIE3GsOG7nWkgTeG7mXQsIHNvIG11c3QgYmUgbG93ZXIgcHJpb3JpdHlcbiAgd2lkZTogL150aMOhbmcgPyhN4buZdHxIYWl8QmF8VMawfE7Eg218U8OhdXxC4bqjeXxUw6FtfENow61ufE3GsOG7nWl8Tcaw4budaSA/TeG7mXR8Tcaw4budaSA/SGFpfDA/WzEtOV0oPyFcXGQpfDEwfDExfDEyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbLzA/MSQvaSwgLzA/Mi9pLCAvMy8sIC80LywgLzUvLCAvNi8sIC83LywgLzgvLCAvOS8sIC8xMC8sIC8xMS8sIC8xMi9dLFxuICBhYmJyZXZpYXRlZDogWy9edGhnWyBfXT8wPzEoPyFcXGQpL2ksIC9edGhnWyBfXT8wPzIvaSwgL150aGdbIF9dPzA/My9pLCAvXnRoZ1sgX10/MD80L2ksIC9edGhnWyBfXT8wPzUvaSwgL150aGdbIF9dPzA/Ni9pLCAvXnRoZ1sgX10/MD83L2ksIC9edGhnWyBfXT8wPzgvaSwgL150aGdbIF9dPzA/OS9pLCAvXnRoZ1sgX10/MTAvaSwgL150aGdbIF9dPzExL2ksIC9edGhnWyBfXT8xMi9pXSxcbiAgd2lkZTogWy9edGjDoW5nID8oTeG7mXR8MD8xKD8hXFxkKSkvaSwgL150aMOhbmcgPyhIYWl8MD8yKS9pLCAvXnRow6FuZyA/KEJhfDA/MykvaSwgL150aMOhbmcgPyhUxrB8MD80KS9pLCAvXnRow6FuZyA/KE7Eg218MD81KS9pLCAvXnRow6FuZyA/KFPDoXV8MD82KS9pLCAvXnRow6FuZyA/KELhuqN5fDA/NykvaSwgL150aMOhbmcgPyhUw6FtfDA/OCkvaSwgL150aMOhbmcgPyhDaMOtbnwwPzkpL2ksIC9edGjDoW5nID8oTcaw4budaXwxMCkvaSwgL150aMOhbmcgPyhNxrDhu51pID9N4buZdHwxMSkvaSwgL150aMOhbmcgPyhNxrDhu51pID9IYWl8MTIpL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oQ058VDJ8VDN8VDR8VDV8VDZ8VDcpL2ksXG4gIHNob3J0OiAvXihDTnxUaCA/MnxUaCA/M3xUaCA/NHxUaCA/NXxUaCA/NnxUaCA/NykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKENOfFRoID8yfFRoID8zfFRoID80fFRoID81fFRoID82fFRoID83KS9pLFxuICB3aWRlOiAvXihDaOG7pyA/Tmjhuq10fENow7phID9OaOG6rXR8dGjhu6kgP0hhaXx0aOG7qSA/QmF8dGjhu6kgP1TGsHx0aOG7qSA/TsSDbXx0aOG7qSA/U8OhdXx0aOG7qSA/QuG6o3kpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL0NOL2ksIC8yL2ksIC8zL2ksIC80L2ksIC81L2ksIC82L2ksIC83L2ldLFxuICBzaG9ydDogWy9DTi9pLCAvMi9pLCAvMy9pLCAvNC9pLCAvNS9pLCAvNi9pLCAvNy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvQ04vaSwgLzIvaSwgLzMvaSwgLzQvaSwgLzUvaSwgLzYvaSwgLzcvaV0sXG4gIHdpZGU6IFsvKENo4bunfENow7phKSA/Tmjhuq10L2ksIC9IYWkvaSwgL0JhL2ksIC9UxrAvaSwgL07Eg20vaSwgL1PDoXUvaSwgL0LhuqN5L2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG7hu61hIMSRw6ptfHRyxrBhfChnaeG7nSkgKHPDoW5nfGNoaeG7gXV8dOG7kWl8xJHDqm0pKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYW18cG18buG7rWEgxJHDqm18dHLGsGF8KGdp4budKSAoc8Ohbmd8Y2hp4buBdXx04buRaXzEkcOqbSkpL2ksXG4gIHdpZGU6IC9eKGNoW15pXSp8c2F8buG7rWEgxJHDqm18dHLGsGF8KGdp4budKSAoc8Ohbmd8Y2hp4buBdXx04buRaXzEkcOqbSkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eKGF8c2EpL2ksXG4gICAgcG06IC9eKHB8Y2hbXmldKikvaSxcbiAgICBtaWRuaWdodDogL27hu61hIMSRw6ptL2ksXG4gICAgbm9vbjogL3RyxrBhL2ksXG4gICAgbW9ybmluZzogL3PDoW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvY2hp4buBdS9pLFxuICAgIGV2ZW5pbmc6IC904buRaS9pLFxuICAgIG5pZ2h0OiAvXsSRw6ptL2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=