(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-ta-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/ta/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/ta/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function isPluralType(val) {
  return val.one !== undefined;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: 'ஒரு வினாடிக்கு குறைவாக',
      in: 'ஒரு வினாடிக்குள்',
      ago: 'ஒரு வினாடிக்கு முன்பு'
    },
    other: {
      default: '{{count}} வினாடிகளுக்கு குறைவாக',
      in: '{{count}} வினாடிகளுக்குள்',
      ago: '{{count}} வினாடிகளுக்கு முன்பு'
    }
  },
  xSeconds: {
    one: {
      default: '1 வினாடி',
      in: '1 வினாடியில்',
      ago: '1 வினாடி முன்பு'
    },
    other: {
      default: '{{count}} விநாடிகள்',
      in: '{{count}} வினாடிகளில்',
      ago: '{{count}} விநாடிகளுக்கு முன்பு'
    }
  },
  halfAMinute: {
    default: 'அரை நிமிடம்',
    in: 'அரை நிமிடத்தில்',
    ago: 'அரை நிமிடம் முன்பு'
  },
  lessThanXMinutes: {
    one: {
      default: 'ஒரு நிமிடத்திற்கும் குறைவாக',
      in: 'ஒரு நிமிடத்திற்குள்',
      ago: 'ஒரு நிமிடத்திற்கு முன்பு'
    },
    other: {
      default: '{{count}} நிமிடங்களுக்கும் குறைவாக',
      in: '{{count}} நிமிடங்களுக்குள்',
      ago: '{{count}} நிமிடங்களுக்கு முன்பு'
    }
  },
  xMinutes: {
    one: {
      default: '1 நிமிடம்',
      in: '1 நிமிடத்தில்',
      ago: '1 நிமிடம் முன்பு'
    },
    other: {
      default: '{{count}} நிமிடங்கள்',
      in: '{{count}} நிமிடங்களில்',
      ago: '{{count}} நிமிடங்களுக்கு முன்பு'
    }
  },
  aboutXHours: {
    one: {
      default: 'சுமார் 1 மணி நேரம்',
      in: 'சுமார் 1 மணி நேரத்தில்',
      ago: 'சுமார் 1 மணி நேரத்திற்கு முன்பு'
    },
    other: {
      default: 'சுமார் {{count}} மணி நேரம்',
      in: 'சுமார் {{count}} மணி நேரத்திற்கு முன்பு',
      ago: 'சுமார் {{count}} மணி நேரத்தில்'
    }
  },
  xHours: {
    one: {
      default: '1 மணி நேரம்',
      in: '1 மணி நேரத்தில்',
      ago: '1 மணி நேரத்திற்கு முன்பு'
    },
    other: {
      default: '{{count}} மணி நேரம்',
      in: '{{count}} மணி நேரத்தில்',
      ago: '{{count}} மணி நேரத்திற்கு முன்பு'
    }
  },
  xDays: {
    one: {
      default: '1 நாள்',
      in: '1 நாளில்',
      ago: '1 நாள் முன்பு'
    },
    other: {
      default: '{{count}} நாட்கள்',
      in: '{{count}} நாட்களில்',
      ago: '{{count}} நாட்களுக்கு முன்பு'
    }
  },
  aboutXWeeks: {
    one: {
      default: 'சுமார் 1 வாரம்',
      in: 'சுமார் 1 வாரத்தில்',
      ago: 'சுமார் 1 வாரம் முன்பு'
    },
    other: {
      default: 'சுமார் {{count}} வாரங்கள்',
      in: 'சுமார் {{count}} வாரங்களில்',
      ago: 'சுமார் {{count}} வாரங்களுக்கு முன்பு'
    }
  },
  xWeeks: {
    one: {
      default: '1 வாரம்',
      in: '1 வாரத்தில்',
      ago: '1 வாரம் முன்பு'
    },
    other: {
      default: '{{count}} வாரங்கள்',
      in: '{{count}} வாரங்களில்',
      ago: '{{count}} வாரங்களுக்கு முன்பு'
    }
  },
  aboutXMonths: {
    one: {
      default: 'சுமார் 1 மாதம்',
      in: 'சுமார் 1 மாதத்தில்',
      ago: 'சுமார் 1 மாதத்திற்கு முன்பு'
    },
    other: {
      default: 'சுமார் {{count}} மாதங்கள்',
      in: 'சுமார் {{count}} மாதங்களில்',
      ago: 'சுமார் {{count}} மாதங்களுக்கு முன்பு'
    }
  },
  xMonths: {
    one: {
      default: '1 மாதம்',
      in: '1 மாதத்தில்',
      ago: '1 மாதம் முன்பு'
    },
    other: {
      default: '{{count}} மாதங்கள்',
      in: '{{count}} மாதங்களில்',
      ago: '{{count}} மாதங்களுக்கு முன்பு'
    }
  },
  aboutXYears: {
    one: {
      default: 'சுமார் 1 வருடம்',
      in: 'சுமார் 1 ஆண்டில்',
      ago: 'சுமார் 1 வருடம் முன்பு'
    },
    other: {
      default: 'சுமார் {{count}} ஆண்டுகள்',
      in: 'சுமார் {{count}} ஆண்டுகளில்',
      ago: 'சுமார் {{count}} ஆண்டுகளுக்கு முன்பு'
    }
  },
  xYears: {
    one: {
      default: '1 வருடம்',
      in: '1 ஆண்டில்',
      ago: '1 வருடம் முன்பு'
    },
    other: {
      default: '{{count}} ஆண்டுகள்',
      in: '{{count}} ஆண்டுகளில்',
      ago: '{{count}} ஆண்டுகளுக்கு முன்பு'
    }
  },
  overXYears: {
    one: {
      default: '1 வருடத்திற்கு மேல்',
      in: '1 வருடத்திற்கும் மேலாக',
      ago: '1 வருடம் முன்பு'
    },
    other: {
      default: '{{count}} ஆண்டுகளுக்கும் மேலாக',
      in: '{{count}} ஆண்டுகளில்',
      ago: '{{count}} ஆண்டுகளுக்கு முன்பு'
    }
  },
  almostXYears: {
    one: {
      default: 'கிட்டத்தட்ட 1 வருடம்',
      in: 'கிட்டத்தட்ட 1 ஆண்டில்',
      ago: 'கிட்டத்தட்ட 1 வருடம் முன்பு'
    },
    other: {
      default: 'கிட்டத்தட்ட {{count}} ஆண்டுகள்',
      in: 'கிட்டத்தட்ட {{count}} ஆண்டுகளில்',
      ago: 'கிட்டத்தட்ட {{count}} ஆண்டுகளுக்கு முன்பு'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var tense = options !== null && options !== void 0 && options.addSuffix ? options.comparison && options.comparison > 0 ? 'in' : 'ago' : 'default';
  var tokenValue = formatDistanceLocale[token];
  if (!isPluralType(tokenValue)) return tokenValue[tense];
  if (count === 1) {
    return tokenValue.one[tense];
  } else {
    return tokenValue.other[tense].replace('{{count}}', String(count));
  }
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3RhL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxvQkFBb0IsT0FBTztBQUMzQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLE9BQU87QUFDaEMsb0JBQW9CLE9BQU87QUFDM0IscUJBQXFCLE9BQU87QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLG9CQUFvQixPQUFPO0FBQzNCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyxvQkFBb0IsT0FBTztBQUMzQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEJBQThCLE9BQU87QUFDckMseUJBQXlCLE9BQU87QUFDaEMsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXRhLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5mdW5jdGlvbiBpc1BsdXJhbFR5cGUodmFsKSB7XG4gIHJldHVybiB2YWwub25lICE9PSB1bmRlZmluZWQ7XG59XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICfgrpLgrrDgr4Eg4K614K6/4K6p4K6+4K6f4K6/4K6V4K+N4K6V4K+BIOCuleCvgeCuseCviOCuteCuvuCulScsXG4gICAgICBpbjogJ+CukuCusOCvgSDgrrXgrr/grqngrr7grp/grr/grpXgr43grpXgr4HgrrPgr40nLFxuICAgICAgYWdvOiAn4K6S4K6w4K+BIOCuteCuv+CuqeCuvuCun+Cuv+CuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgrrXgrr/grqngrr7grp/grr/grpXgrrPgr4HgrpXgr43grpXgr4Eg4K6V4K+B4K6x4K+I4K614K6+4K6VJyxcbiAgICAgIGluOiAne3tjb3VudH19IOCuteCuv+CuqeCuvuCun+Cuv+CuleCus+CvgeCuleCvjeCuleCvgeCus+CvjScsXG4gICAgICBhZ286ICd7e2NvdW50fX0g4K614K6/4K6p4K6+4K6f4K6/4K6V4K6z4K+B4K6V4K+N4K6V4K+BIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgrrXgrr/grqngrr7grp/grr8nLFxuICAgICAgaW46ICcxIOCuteCuv+CuqeCuvuCun+Cuv+Cur+Cuv+CusuCvjScsXG4gICAgICBhZ286ICcxIOCuteCuv+CuqeCuvuCun+CuvyDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgrrXgrr/grqjgrr7grp/grr/grpXgrrPgr40nLFxuICAgICAgaW46ICd7e2NvdW50fX0g4K614K6/4K6p4K6+4K6f4K6/4K6V4K6z4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrrXgrr/grqjgrr7grp/grr/grpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBkZWZhdWx0OiAn4K6F4K6w4K+IIOCuqOCuv+CuruCuv+Cun+CuruCvjScsXG4gICAgaW46ICfgroXgrrDgr4gg4K6o4K6/4K6u4K6/4K6f4K6k4K+N4K6k4K6/4K6y4K+NJyxcbiAgICBhZ286ICfgroXgrrDgr4gg4K6o4K6/4K6u4K6/4K6f4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJ+CukuCusOCvgSDgrqjgrr/grq7grr/grp/grqTgr43grqTgrr/grrHgr43grpXgr4Hgrq7gr40g4K6V4K+B4K6x4K+I4K614K6+4K6VJyxcbiAgICAgIGluOiAn4K6S4K6w4K+BIOCuqOCuv+CuruCuv+Cun+CupOCvjeCupOCuv+CuseCvjeCuleCvgeCus+CvjScsXG4gICAgICBhZ286ICfgrpLgrrDgr4Eg4K6o4K6/4K6u4K6/4K6f4K6k4K+N4K6k4K6/4K6x4K+N4K6V4K+BIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCuqOCuv+CuruCuv+Cun+CumeCvjeCuleCus+CvgeCuleCvjeCuleCvgeCuruCvjSDgrpXgr4HgrrHgr4jgrrXgrr7grpUnLFxuICAgICAgaW46ICd7e2NvdW50fX0g4K6o4K6/4K6u4K6/4K6f4K6Z4K+N4K6V4K6z4K+B4K6V4K+N4K6V4K+B4K6z4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrqjgrr/grq7grr/grp/grpngr43grpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCuqOCuv+CuruCuv+Cun+CuruCvjScsXG4gICAgICBpbjogJzEg4K6o4K6/4K6u4K6/4K6f4K6k4K+N4K6k4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJzEg4K6o4K6/4K6u4K6/4K6f4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCuqOCuv+CuruCuv+Cun+CumeCvjeCuleCus+CvjScsXG4gICAgICBpbjogJ3t7Y291bnR9fSDgrqjgrr/grq7grr/grp/grpngr43grpXgrrPgrr/grrLgr40nLFxuICAgICAgYWdvOiAne3tjb3VudH19IOCuqOCuv+CuruCuv+Cun+CumeCvjeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJ+CumuCvgeCuruCuvuCusOCvjSAxIOCuruCuo+CuvyDgrqjgr4fgrrDgrq7gr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrq7grqPgrr8g4K6o4K+H4K6w4K6k4K+N4K6k4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ+CumuCvgeCuruCuvuCusOCvjSAxIOCuruCuo+CuvyDgrqjgr4fgrrDgrqTgr43grqTgrr/grrHgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGRlZmF1bHQ6ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuruCuo+CuvyDgrqjgr4fgrrDgrq7gr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuruCuo+CuvyDgrqjgr4fgrrDgrqTgr43grqTgrr/grrHgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJyxcbiAgICAgIGFnbzogJ+CumuCvgeCuruCuvuCusOCvjSB7e2NvdW50fX0g4K6u4K6j4K6/IOCuqOCvh+CusOCupOCvjeCupOCuv+CusuCvjSdcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgZGVmYXVsdDogJzEg4K6u4K6j4K6/IOCuqOCvh+CusOCuruCvjScsXG4gICAgICBpbjogJzEg4K6u4K6j4K6/IOCuqOCvh+CusOCupOCvjeCupOCuv+CusuCvjScsXG4gICAgICBhZ286ICcxIOCuruCuo+CuvyDgrqjgr4fgrrDgrqTgr43grqTgrr/grrHgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIGRlZmF1bHQ6ICd7e2NvdW50fX0g4K6u4K6j4K6/IOCuqOCvh+CusOCuruCvjScsXG4gICAgICBpbjogJ3t7Y291bnR9fSDgrq7grqPgrr8g4K6o4K+H4K6w4K6k4K+N4K6k4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrq7grqPgrr8g4K6o4K+H4K6w4K6k4K+N4K6k4K6/4K6x4K+N4K6V4K+BIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9XG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgrqjgrr7grrPgr40nLFxuICAgICAgaW46ICcxIOCuqOCuvuCus+Cuv+CusuCvjScsXG4gICAgICBhZ286ICcxIOCuqOCuvuCus+CvjSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgrqjgrr7grp/gr43grpXgrrPgr40nLFxuICAgICAgaW46ICd7e2NvdW50fX0g4K6o4K6+4K6f4K+N4K6V4K6z4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrqjgrr7grp/gr43grpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrrXgrr7grrDgrq7gr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrrXgrr7grrDgrqTgr43grqTgrr/grrLgr40nLFxuICAgICAgYWdvOiAn4K6a4K+B4K6u4K6+4K6w4K+NIDEg4K614K6+4K6w4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4K6a4K+B4K6u4K6+4K6w4K+NIHt7Y291bnR9fSDgrrXgrr7grrDgrpngr43grpXgrrPgr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuteCuvuCusOCumeCvjeCuleCus+Cuv+CusuCvjScsXG4gICAgICBhZ286ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuteCuvuCusOCumeCvjeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCuteCuvuCusOCuruCvjScsXG4gICAgICBpbjogJzEg4K614K6+4K6w4K6k4K+N4K6k4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJzEg4K614K6+4K6w4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCuteCuvuCusOCumeCvjeCuleCus+CvjScsXG4gICAgICBpbjogJ3t7Y291bnR9fSDgrrXgrr7grrDgrpngr43grpXgrrPgrr/grrLgr40nLFxuICAgICAgYWdvOiAne3tjb3VudH19IOCuteCuvuCusOCumeCvjeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrq7grr7grqTgrq7gr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrq7grr7grqTgrqTgr43grqTgrr/grrLgr40nLFxuICAgICAgYWdvOiAn4K6a4K+B4K6u4K6+4K6w4K+NIDEg4K6u4K6+4K6k4K6k4K+N4K6k4K6/4K6x4K+N4K6V4K+BIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4K6a4K+B4K6u4K6+4K6w4K+NIHt7Y291bnR9fSDgrq7grr7grqTgrpngr43grpXgrrPgr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuruCuvuCupOCumeCvjeCuleCus+Cuv+CusuCvjScsXG4gICAgICBhZ286ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuruCuvuCupOCumeCvjeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgrq7grr7grqTgrq7gr40nLFxuICAgICAgaW46ICcxIOCuruCuvuCupOCupOCvjeCupOCuv+CusuCvjScsXG4gICAgICBhZ286ICcxIOCuruCuvuCupOCuruCvjSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ3t7Y291bnR9fSDgrq7grr7grqTgrpngr43grpXgrrPgr40nLFxuICAgICAgaW46ICd7e2NvdW50fX0g4K6u4K6+4K6k4K6Z4K+N4K6V4K6z4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrq7grr7grqTgrpngr43grpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrrXgrrDgr4Hgrp/grq7gr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40gMSDgrobgrqPgr43grp/grr/grrLgr40nLFxuICAgICAgYWdvOiAn4K6a4K+B4K6u4K6+4K6w4K+NIDEg4K614K6w4K+B4K6f4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAn4K6a4K+B4K6u4K6+4K6w4K+NIHt7Y291bnR9fSDgrobgrqPgr43grp/gr4HgrpXgrrPgr40nLFxuICAgICAgaW46ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuhuCuo+CvjeCun+CvgeCuleCus+Cuv+CusuCvjScsXG4gICAgICBhZ286ICfgrprgr4Hgrq7grr7grrDgr40ge3tjb3VudH19IOCuhuCuo+CvjeCun+CvgeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIGRlZmF1bHQ6ICcxIOCuteCusOCvgeCun+CuruCvjScsXG4gICAgICBpbjogJzEg4K6G4K6j4K+N4K6f4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJzEg4K614K6w4K+B4K6f4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCuhuCuo+CvjeCun+CvgeCuleCus+CvjScsXG4gICAgICBpbjogJ3t7Y291bnR9fSDgrobgrqPgr43grp/gr4HgrpXgrrPgrr/grrLgr40nLFxuICAgICAgYWdvOiAne3tjb3VudH19IOCuhuCuo+CvjeCun+CvgeCuleCus+CvgeCuleCvjeCuleCvgSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAnMSDgrrXgrrDgr4Hgrp/grqTgr43grqTgrr/grrHgr43grpXgr4Eg4K6u4K+H4K6y4K+NJyxcbiAgICAgIGluOiAnMSDgrrXgrrDgr4Hgrp/grqTgr43grqTgrr/grrHgr43grpXgr4Hgrq7gr40g4K6u4K+H4K6y4K6+4K6VJyxcbiAgICAgIGFnbzogJzEg4K614K6w4K+B4K6f4K6u4K+NIOCuruCvgeCuqeCvjeCuquCvgSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBkZWZhdWx0OiAne3tjb3VudH19IOCuhuCuo+CvjeCun+CvgeCuleCus+CvgeCuleCvjeCuleCvgeCuruCvjSDgrq7gr4fgrrLgrr7grpUnLFxuICAgICAgaW46ICd7e2NvdW50fX0g4K6G4K6j4K+N4K6f4K+B4K6V4K6z4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ3t7Y291bnR9fSDgrobgrqPgr43grp/gr4HgrpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICBkZWZhdWx0OiAn4K6V4K6/4K6f4K+N4K6f4K6k4K+N4K6k4K6f4K+N4K6fIDEg4K614K6w4K+B4K6f4K6u4K+NJyxcbiAgICAgIGluOiAn4K6V4K6/4K6f4K+N4K6f4K6k4K+N4K6k4K6f4K+N4K6fIDEg4K6G4K6j4K+N4K6f4K6/4K6y4K+NJyxcbiAgICAgIGFnbzogJ+CuleCuv+Cun+CvjeCun+CupOCvjeCupOCun+CvjeCunyAxIOCuteCusOCvgeCun+CuruCvjSDgrq7gr4Hgrqngr43grqrgr4EnXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgZGVmYXVsdDogJ+CuleCuv+Cun+CvjeCun+CupOCvjeCupOCun+CvjeCunyB7e2NvdW50fX0g4K6G4K6j4K+N4K6f4K+B4K6V4K6z4K+NJyxcbiAgICAgIGluOiAn4K6V4K6/4K6f4K+N4K6f4K6k4K+N4K6k4K6f4K+N4K6fIHt7Y291bnR9fSDgrobgrqPgr43grp/gr4HgrpXgrrPgrr/grrLgr40nLFxuICAgICAgYWdvOiAn4K6V4K6/4K6f4K+N4K6f4K6k4K+N4K6k4K6f4K+N4K6fIHt7Y291bnR9fSDgrobgrqPgr43grp/gr4HgrpXgrrPgr4HgrpXgr43grpXgr4Eg4K6u4K+B4K6p4K+N4K6q4K+BJ1xuICAgIH1cbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgdGVuc2UgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCA/IG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwID8gJ2luJyA6ICdhZ28nIDogJ2RlZmF1bHQnO1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKCFpc1BsdXJhbFR5cGUodG9rZW5WYWx1ZSkpIHJldHVybiB0b2tlblZhbHVlW3RlbnNlXTtcbiAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmV0dXJuIHRva2VuVmFsdWUub25lW3RlbnNlXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdG9rZW5WYWx1ZS5vdGhlclt0ZW5zZV0ucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==