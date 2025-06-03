(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-th-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/th/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/th/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'น้อยกว่า 1 วินาที',
    other: 'น้อยกว่า {{count}} วินาที'
  },
  xSeconds: {
    one: '1 วินาที',
    other: '{{count}} วินาที'
  },
  halfAMinute: 'ครึ่งนาที',
  lessThanXMinutes: {
    one: 'น้อยกว่า 1 นาที',
    other: 'น้อยกว่า {{count}} นาที'
  },
  xMinutes: {
    one: '1 นาที',
    other: '{{count}} นาที'
  },
  aboutXHours: {
    one: 'ประมาณ 1 ชั่วโมง',
    other: 'ประมาณ {{count}} ชั่วโมง'
  },
  xHours: {
    one: '1 ชั่วโมง',
    other: '{{count}} ชั่วโมง'
  },
  xDays: {
    one: '1 วัน',
    other: '{{count}} วัน'
  },
  aboutXWeeks: {
    one: 'ประมาณ 1 สัปดาห์',
    other: 'ประมาณ {{count}} สัปดาห์'
  },
  xWeeks: {
    one: '1 สัปดาห์',
    other: '{{count}} สัปดาห์'
  },
  aboutXMonths: {
    one: 'ประมาณ 1 เดือน',
    other: 'ประมาณ {{count}} เดือน'
  },
  xMonths: {
    one: '1 เดือน',
    other: '{{count}} เดือน'
  },
  aboutXYears: {
    one: 'ประมาณ 1 ปี',
    other: 'ประมาณ {{count}} ปี'
  },
  xYears: {
    one: '1 ปี',
    other: '{{count}} ปี'
  },
  overXYears: {
    one: 'มากกว่า 1 ปี',
    other: 'มากกว่า {{count}} ปี'
  },
  almostXYears: {
    one: 'เกือบ 1 ปี',
    other: 'เกือบ {{count}} ปี'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (token === 'halfAMinute') {
        return 'ใน' + result;
      } else {
        return 'ใน ' + result;
      }
    } else {
      return result + 'ที่ผ่านมา';
    }
  }
  return result;
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RoL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXRoLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICfguJnguYnguK3guKLguIHguKfguYjguLIgMSDguKfguLTguJnguLLguJfguLUnLFxuICAgIG90aGVyOiAn4LiZ4LmJ4Lit4Lii4LiB4Lin4LmI4LiyIHt7Y291bnR9fSDguKfguLTguJnguLLguJfguLUnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSDguKfguLTguJnguLLguJfguLUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOC4p+C4tOC4meC4suC4l+C4tSdcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICfguITguKPguLbguYjguIfguJnguLLguJfguLUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAn4LiZ4LmJ4Lit4Lii4LiB4Lin4LmI4LiyIDEg4LiZ4Liy4LiX4Li1JyxcbiAgICBvdGhlcjogJ+C4meC5ieC4reC4ouC4geC4p+C5iOC4siB7e2NvdW50fX0g4LiZ4Liy4LiX4Li1J1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEg4LiZ4Liy4LiX4Li1JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDguJnguLLguJfguLUnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAn4Lib4Lij4Liw4Lih4Liy4LiTIDEg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcbiAgICBvdGhlcjogJ+C4m+C4o+C4sOC4oeC4suC4kyB7e2NvdW50fX0g4LiK4Lix4LmI4Lin4LmC4Lih4LiHJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIOC4iuC4seC5iOC4p+C5guC4oeC4hycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4LiK4Lix4LmI4Lin4LmC4Lih4LiHJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEg4Lin4Lix4LiZJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSDguKfguLHguJknXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAn4Lib4Lij4Liw4Lih4Liy4LiTIDEg4Liq4Lix4Lib4LiU4Liy4Lir4LmMJyxcbiAgICBvdGhlcjogJ+C4m+C4o+C4sOC4oeC4suC4kyB7e2NvdW50fX0g4Liq4Lix4Lib4LiU4Liy4Lir4LmMJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIOC4quC4seC4m+C4lOC4suC4q+C5jCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4Liq4Lix4Lib4LiU4Liy4Lir4LmMJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICfguJvguKPguLDguKHguLLguJMgMSDguYDguJTguLfguK3guJknLFxuICAgIG90aGVyOiAn4Lib4Lij4Liw4Lih4Liy4LiTIHt7Y291bnR9fSDguYDguJTguLfguK3guJknXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIOC5gOC4lOC4t+C4reC4mScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0g4LmA4LiU4Li34Lit4LiZJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ+C4m+C4o+C4sOC4oeC4suC4kyAxIOC4m+C4tScsXG4gICAgb3RoZXI6ICfguJvguKPguLDguKHguLLguJMge3tjb3VudH19IOC4m+C4tSdcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSDguJvguLUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IOC4m+C4tSdcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ+C4oeC4suC4geC4geC4p+C5iOC4siAxIOC4m+C4tScsXG4gICAgb3RoZXI6ICfguKHguLLguIHguIHguKfguYjguLIge3tjb3VudH19IOC4m+C4tSdcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAn4LmA4LiB4Li34Lit4LiaIDEg4Lib4Li1JyxcbiAgICBvdGhlcjogJ+C5gOC4geC4t+C4reC4miB7e2NvdW50fX0g4Lib4Li1J1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICBpZiAodG9rZW4gPT09ICdoYWxmQU1pbnV0ZScpIHtcbiAgICAgICAgcmV0dXJuICfguYPguJknICsgcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICfguYPguJkgJyArIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICfguJfguLXguYjguJzguYjguLLguJnguKHguLInO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9