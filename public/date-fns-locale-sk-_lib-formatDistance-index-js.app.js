(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-sk-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/sk/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/sk/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function declensionGroup(scheme, count) {
  if (count === 1 && scheme.one) {
    return scheme.one;
  }
  if (count >= 2 && count <= 4 && scheme.twoFour) {
    return scheme.twoFour;
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other;
}
function declension(scheme, count, time) {
  var group = declensionGroup(scheme, count);
  var finalText = group[time];
  return finalText.replace('{{count}}', String(count));
}
function extractPreposition(token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition));
  });
  return result[0];
}
function prefixPreposition(preposition) {
  var translation = '';
  if (preposition === 'almost') {
    translation = 'takmer';
  }
  if (preposition === 'about') {
    translation = 'približne';
  }
  return translation.length > 0 ? translation + ' ' : '';
}
function suffixPreposition(preposition) {
  var translation = '';
  if (preposition === 'lessThan') {
    translation = 'menej než';
  }
  if (preposition === 'over') {
    translation = 'viac než';
  }
  return translation.length > 0 ? translation + ' ' : '';
}
function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
var formatDistanceLocale = {
  xSeconds: {
    one: {
      present: 'sekunda',
      past: 'sekundou',
      future: 'sekundu'
    },
    twoFour: {
      present: '{{count}} sekundy',
      past: '{{count}} sekundami',
      future: '{{count}} sekundy'
    },
    other: {
      present: '{{count}} sekúnd',
      past: '{{count}} sekundami',
      future: '{{count}} sekúnd'
    }
  },
  halfAMinute: {
    other: {
      present: 'pol minúty',
      past: 'pol minútou',
      future: 'pol minúty'
    }
  },
  xMinutes: {
    one: {
      present: 'minúta',
      past: 'minútou',
      future: 'minútu'
    },
    twoFour: {
      present: '{{count}} minúty',
      past: '{{count}} minútami',
      future: '{{count}} minúty'
    },
    other: {
      present: '{{count}} minút',
      past: '{{count}} minútami',
      future: '{{count}} minút'
    }
  },
  xHours: {
    one: {
      present: 'hodina',
      past: 'hodinou',
      future: 'hodinu'
    },
    twoFour: {
      present: '{{count}} hodiny',
      past: '{{count}} hodinami',
      future: '{{count}} hodiny'
    },
    other: {
      present: '{{count}} hodín',
      past: '{{count}} hodinami',
      future: '{{count}} hodín'
    }
  },
  xDays: {
    one: {
      present: 'deň',
      past: 'dňom',
      future: 'deň'
    },
    twoFour: {
      present: '{{count}} dni',
      past: '{{count}} dňami',
      future: '{{count}} dni'
    },
    other: {
      present: '{{count}} dní',
      past: '{{count}} dňami',
      future: '{{count}} dní'
    }
  },
  xWeeks: {
    one: {
      present: 'týždeň',
      past: 'týždňom',
      future: 'týždeň'
    },
    twoFour: {
      present: '{{count}} týždne',
      past: '{{count}} týždňami',
      future: '{{count}} týždne'
    },
    other: {
      present: '{{count}} týždňov',
      past: '{{count}} týždňami',
      future: '{{count}} týždňov'
    }
  },
  xMonths: {
    one: {
      present: 'mesiac',
      past: 'mesiacom',
      future: 'mesiac'
    },
    twoFour: {
      present: '{{count}} mesiace',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiace'
    },
    other: {
      present: '{{count}} mesiacov',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiacov'
    }
  },
  xYears: {
    one: {
      present: 'rok',
      past: 'rokom',
      future: 'rok'
    },
    twoFour: {
      present: '{{count}} roky',
      past: '{{count}} rokmi',
      future: '{{count}} roky'
    },
    other: {
      present: '{{count}} rokov',
      past: '{{count}} rokmi',
      future: '{{count}} rokov'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var preposition = extractPreposition(token) || '';
  var key = lowercaseFirstLetter(token.substring(preposition.length));
  var scheme = formatDistanceLocale[key];
  if (!(options !== null && options !== void 0 && options.addSuffix)) {
    return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'present');
  }
  if (options.comparison && options.comparison > 0) {
    return prefixPreposition(preposition) + 'o ' + suffixPreposition(preposition) + declension(scheme, count, 'future');
  } else {
    return prefixPreposition(preposition) + 'pred ' + suffixPreposition(preposition) + declension(scheme, count, 'past');
  }
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL3NrL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QixLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUMiLCJmaWxlIjoiZGF0ZS1mbnMtbG9jYWxlLXNrLV9saWItZm9ybWF0RGlzdGFuY2UtaW5kZXgtanMuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWNsZW5zaW9uR3JvdXAoc2NoZW1lLCBjb3VudCkge1xuICBpZiAoY291bnQgPT09IDEgJiYgc2NoZW1lLm9uZSkge1xuICAgIHJldHVybiBzY2hlbWUub25lO1xuICB9XG4gIGlmIChjb3VudCA+PSAyICYmIGNvdW50IDw9IDQgJiYgc2NoZW1lLnR3b0ZvdXIpIHtcbiAgICByZXR1cm4gc2NoZW1lLnR3b0ZvdXI7XG4gIH1cblxuICAvLyBpZiBjb3VudCA9PT0gbnVsbCB8fCBjb3VudCA9PT0gMCB8fCBjb3VudCA+PSA1XG4gIHJldHVybiBzY2hlbWUub3RoZXI7XG59XG5mdW5jdGlvbiBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQsIHRpbWUpIHtcbiAgdmFyIGdyb3VwID0gZGVjbGVuc2lvbkdyb3VwKHNjaGVtZSwgY291bnQpO1xuICB2YXIgZmluYWxUZXh0ID0gZ3JvdXBbdGltZV07XG4gIHJldHVybiBmaW5hbFRleHQucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJlcG9zaXRpb24odG9rZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFsnbGVzc1RoYW4nLCAnYWJvdXQnLCAnb3ZlcicsICdhbG1vc3QnXS5maWx0ZXIoZnVuY3Rpb24gKHByZXBvc2l0aW9uKSB7XG4gICAgcmV0dXJuICEhdG9rZW4ubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyBwcmVwb3NpdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdFswXTtcbn1cbmZ1bmN0aW9uIHByZWZpeFByZXBvc2l0aW9uKHByZXBvc2l0aW9uKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9ICcnO1xuICBpZiAocHJlcG9zaXRpb24gPT09ICdhbG1vc3QnKSB7XG4gICAgdHJhbnNsYXRpb24gPSAndGFrbWVyJztcbiAgfVxuICBpZiAocHJlcG9zaXRpb24gPT09ICdhYm91dCcpIHtcbiAgICB0cmFuc2xhdGlvbiA9ICdwcmlibGnFvm5lJztcbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb24ubGVuZ3RoID4gMCA/IHRyYW5zbGF0aW9uICsgJyAnIDogJyc7XG59XG5mdW5jdGlvbiBzdWZmaXhQcmVwb3NpdGlvbihwcmVwb3NpdGlvbikge1xuICB2YXIgdHJhbnNsYXRpb24gPSAnJztcbiAgaWYgKHByZXBvc2l0aW9uID09PSAnbGVzc1RoYW4nKSB7XG4gICAgdHJhbnNsYXRpb24gPSAnbWVuZWogbmXFvic7XG4gIH1cbiAgaWYgKHByZXBvc2l0aW9uID09PSAnb3ZlcicpIHtcbiAgICB0cmFuc2xhdGlvbiA9ICd2aWFjIG5lxb4nO1xuICB9XG4gIHJldHVybiB0cmFuc2xhdGlvbi5sZW5ndGggPiAwID8gdHJhbnNsYXRpb24gKyAnICcgOiAnJztcbn1cbmZ1bmN0aW9uIGxvd2VyY2FzZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICB4U2Vjb25kczoge1xuICAgIG9uZToge1xuICAgICAgcHJlc2VudDogJ3Nla3VuZGEnLFxuICAgICAgcGFzdDogJ3Nla3VuZG91JyxcbiAgICAgIGZ1dHVyZTogJ3Nla3VuZHUnXG4gICAgfSxcbiAgICB0d29Gb3VyOiB7XG4gICAgICBwcmVzZW50OiAne3tjb3VudH19IHNla3VuZHknLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IHNla3VuZHknXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgcHJlc2VudDogJ3t7Y291bnR9fSBzZWvDum5kJyxcbiAgICAgIHBhc3Q6ICd7e2NvdW50fX0gc2VrdW5kYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSBzZWvDum5kJ1xuICAgIH1cbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBvdGhlcjoge1xuICAgICAgcHJlc2VudDogJ3BvbCBtaW7DunR5JyxcbiAgICAgIHBhc3Q6ICdwb2wgbWluw7p0b3UnLFxuICAgICAgZnV0dXJlOiAncG9sIG1pbsO6dHknXG4gICAgfVxuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZToge1xuICAgICAgcHJlc2VudDogJ21pbsO6dGEnLFxuICAgICAgcGFzdDogJ21pbsO6dG91JyxcbiAgICAgIGZ1dHVyZTogJ21pbsO6dHUnXG4gICAgfSxcbiAgICB0d29Gb3VyOiB7XG4gICAgICBwcmVzZW50OiAne3tjb3VudH19IG1pbsO6dHknLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBtaW7DunRhbWknLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IG1pbsO6dHknXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgcHJlc2VudDogJ3t7Y291bnR9fSBtaW7DunQnLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBtaW7DunRhbWknLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IG1pbsO6dCdcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgcHJlc2VudDogJ2hvZGluYScsXG4gICAgICBwYXN0OiAnaG9kaW5vdScsXG4gICAgICBmdXR1cmU6ICdob2RpbnUnXG4gICAgfSxcbiAgICB0d29Gb3VyOiB7XG4gICAgICBwcmVzZW50OiAne3tjb3VudH19IGhvZGlueScsXG4gICAgICBwYXN0OiAne3tjb3VudH19IGhvZGluYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSBob2RpbnknXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgcHJlc2VudDogJ3t7Y291bnR9fSBob2TDrW4nLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBob2RpbmFtaScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0gaG9kw61uJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHByZXNlbnQ6ICdkZcWIJyxcbiAgICAgIHBhc3Q6ICdkxYhvbScsXG4gICAgICBmdXR1cmU6ICdkZcWIJ1xuICAgIH0sXG4gICAgdHdvRm91cjoge1xuICAgICAgcHJlc2VudDogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBkxYhhbWknLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IGRuaSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBwcmVzZW50OiAne3tjb3VudH19IGRuw60nLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBkxYhhbWknLFxuICAgICAgZnV0dXJlOiAne3tjb3VudH19IGRuw60nXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHByZXNlbnQ6ICd0w73FvmRlxYgnLFxuICAgICAgcGFzdDogJ3TDvcW+ZMWIb20nLFxuICAgICAgZnV0dXJlOiAndMO9xb5kZcWIJ1xuICAgIH0sXG4gICAgdHdvRm91cjoge1xuICAgICAgcHJlc2VudDogJ3t7Y291bnR9fSB0w73FvmRuZScsXG4gICAgICBwYXN0OiAne3tjb3VudH19IHTDvcW+ZMWIYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSB0w73FvmRuZSdcbiAgICB9LFxuICAgIG90aGVyOiB7XG4gICAgICBwcmVzZW50OiAne3tjb3VudH19IHTDvcW+ZMWIb3YnLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSB0w73FvmTFiGFtaScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0gdMO9xb5kxYhvdidcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHByZXNlbnQ6ICdtZXNpYWMnLFxuICAgICAgcGFzdDogJ21lc2lhY29tJyxcbiAgICAgIGZ1dHVyZTogJ21lc2lhYydcbiAgICB9LFxuICAgIHR3b0ZvdXI6IHtcbiAgICAgIHByZXNlbnQ6ICd7e2NvdW50fX0gbWVzaWFjZScsXG4gICAgICBwYXN0OiAne3tjb3VudH19IG1lc2lhY21pJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSBtZXNpYWNlJ1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIHByZXNlbnQ6ICd7e2NvdW50fX0gbWVzaWFjb3YnLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSBtZXNpYWNtaScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0gbWVzaWFjb3YnXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHByZXNlbnQ6ICdyb2snLFxuICAgICAgcGFzdDogJ3Jva29tJyxcbiAgICAgIGZ1dHVyZTogJ3JvaydcbiAgICB9LFxuICAgIHR3b0ZvdXI6IHtcbiAgICAgIHByZXNlbnQ6ICd7e2NvdW50fX0gcm9reScsXG4gICAgICBwYXN0OiAne3tjb3VudH19IHJva21pJyxcbiAgICAgIGZ1dHVyZTogJ3t7Y291bnR9fSByb2t5J1xuICAgIH0sXG4gICAgb3RoZXI6IHtcbiAgICAgIHByZXNlbnQ6ICd7e2NvdW50fX0gcm9rb3YnLFxuICAgICAgcGFzdDogJ3t7Y291bnR9fSByb2ttaScsXG4gICAgICBmdXR1cmU6ICd7e2NvdW50fX0gcm9rb3YnXG4gICAgfVxuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciBwcmVwb3NpdGlvbiA9IGV4dHJhY3RQcmVwb3NpdGlvbih0b2tlbikgfHwgJyc7XG4gIHZhciBrZXkgPSBsb3dlcmNhc2VGaXJzdExldHRlcih0b2tlbi5zdWJzdHJpbmcocHJlcG9zaXRpb24ubGVuZ3RoKSk7XG4gIHZhciBzY2hlbWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVtrZXldO1xuICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkpIHtcbiAgICByZXR1cm4gcHJlZml4UHJlcG9zaXRpb24ocHJlcG9zaXRpb24pICsgc3VmZml4UHJlcG9zaXRpb24ocHJlcG9zaXRpb24pICsgZGVjbGVuc2lvbihzY2hlbWUsIGNvdW50LCAncHJlc2VudCcpO1xuICB9XG4gIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgIHJldHVybiBwcmVmaXhQcmVwb3NpdGlvbihwcmVwb3NpdGlvbikgKyAnbyAnICsgc3VmZml4UHJlcG9zaXRpb24ocHJlcG9zaXRpb24pICsgZGVjbGVuc2lvbihzY2hlbWUsIGNvdW50LCAnZnV0dXJlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeFByZXBvc2l0aW9uKHByZXBvc2l0aW9uKSArICdwcmVkICcgKyBzdWZmaXhQcmVwb3NpdGlvbihwcmVwb3NpdGlvbikgKyBkZWNsZW5zaW9uKHNjaGVtZSwgY291bnQsICdwYXN0Jyk7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==