(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-cs-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/cs/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/cs/_lib/formatDistance/index.js ***!
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
    one: {
      regular: 'méně než sekunda',
      past: 'před méně než sekundou',
      future: 'za méně než sekundu'
    },
    few: {
      regular: 'méně než {{count}} sekundy',
      past: 'před méně než {{count}} sekundami',
      future: 'za méně než {{count}} sekundy'
    },
    many: {
      regular: 'méně než {{count}} sekund',
      past: 'před méně než {{count}} sekundami',
      future: 'za méně než {{count}} sekund'
    }
  },
  xSeconds: {
    one: {
      regular: 'sekunda',
      past: 'před sekundou',
      future: 'za sekundu'
    },
    few: {
      regular: '{{count}} sekundy',
      past: 'před {{count}} sekundami',
      future: 'za {{count}} sekundy'
    },
    many: {
      regular: '{{count}} sekund',
      past: 'před {{count}} sekundami',
      future: 'za {{count}} sekund'
    }
  },
  halfAMinute: {
    type: 'other',
    other: {
      regular: 'půl minuty',
      past: 'před půl minutou',
      future: 'za půl minuty'
    }
  },
  lessThanXMinutes: {
    one: {
      regular: 'méně než minuta',
      past: 'před méně než minutou',
      future: 'za méně než minutu'
    },
    few: {
      regular: 'méně než {{count}} minuty',
      past: 'před méně než {{count}} minutami',
      future: 'za méně než {{count}} minuty'
    },
    many: {
      regular: 'méně než {{count}} minut',
      past: 'před méně než {{count}} minutami',
      future: 'za méně než {{count}} minut'
    }
  },
  xMinutes: {
    one: {
      regular: 'minuta',
      past: 'před minutou',
      future: 'za minutu'
    },
    few: {
      regular: '{{count}} minuty',
      past: 'před {{count}} minutami',
      future: 'za {{count}} minuty'
    },
    many: {
      regular: '{{count}} minut',
      past: 'před {{count}} minutami',
      future: 'za {{count}} minut'
    }
  },
  aboutXHours: {
    one: {
      regular: 'přibližně hodina',
      past: 'přibližně před hodinou',
      future: 'přibližně za hodinu'
    },
    few: {
      regular: 'přibližně {{count}} hodiny',
      past: 'přibližně před {{count}} hodinami',
      future: 'přibližně za {{count}} hodiny'
    },
    many: {
      regular: 'přibližně {{count}} hodin',
      past: 'přibližně před {{count}} hodinami',
      future: 'přibližně za {{count}} hodin'
    }
  },
  xHours: {
    one: {
      regular: 'hodina',
      past: 'před hodinou',
      future: 'za hodinu'
    },
    few: {
      regular: '{{count}} hodiny',
      past: 'před {{count}} hodinami',
      future: 'za {{count}} hodiny'
    },
    many: {
      regular: '{{count}} hodin',
      past: 'před {{count}} hodinami',
      future: 'za {{count}} hodin'
    }
  },
  xDays: {
    one: {
      regular: 'den',
      past: 'před dnem',
      future: 'za den'
    },
    few: {
      regular: '{{count}} dny',
      past: 'před {{count}} dny',
      future: 'za {{count}} dny'
    },
    many: {
      regular: '{{count}} dní',
      past: 'před {{count}} dny',
      future: 'za {{count}} dní'
    }
  },
  aboutXWeeks: {
    one: {
      regular: 'přibližně týden',
      past: 'přibližně před týdnem',
      future: 'přibližně za týden'
    },
    few: {
      regular: 'přibližně {{count}} týdny',
      past: 'přibližně před {{count}} týdny',
      future: 'přibližně za {{count}} týdny'
    },
    many: {
      regular: 'přibližně {{count}} týdnů',
      past: 'přibližně před {{count}} týdny',
      future: 'přibližně za {{count}} týdnů'
    }
  },
  xWeeks: {
    one: {
      regular: 'týden',
      past: 'před týdnem',
      future: 'za týden'
    },
    few: {
      regular: '{{count}} týdny',
      past: 'před {{count}} týdny',
      future: 'za {{count}} týdny'
    },
    many: {
      regular: '{{count}} týdnů',
      past: 'před {{count}} týdny',
      future: 'za {{count}} týdnů'
    }
  },
  aboutXMonths: {
    one: {
      regular: 'přibližně měsíc',
      past: 'přibližně před měsícem',
      future: 'přibližně za měsíc'
    },
    few: {
      regular: 'přibližně {{count}} měsíce',
      past: 'přibližně před {{count}} měsíci',
      future: 'přibližně za {{count}} měsíce'
    },
    many: {
      regular: 'přibližně {{count}} měsíců',
      past: 'přibližně před {{count}} měsíci',
      future: 'přibližně za {{count}} měsíců'
    }
  },
  xMonths: {
    one: {
      regular: 'měsíc',
      past: 'před měsícem',
      future: 'za měsíc'
    },
    few: {
      regular: '{{count}} měsíce',
      past: 'před {{count}} měsíci',
      future: 'za {{count}} měsíce'
    },
    many: {
      regular: '{{count}} měsíců',
      past: 'před {{count}} měsíci',
      future: 'za {{count}} měsíců'
    }
  },
  aboutXYears: {
    one: {
      regular: 'přibližně rok',
      past: 'přibližně před rokem',
      future: 'přibližně za rok'
    },
    few: {
      regular: 'přibližně {{count}} roky',
      past: 'přibližně před {{count}} roky',
      future: 'přibližně za {{count}} roky'
    },
    many: {
      regular: 'přibližně {{count}} roků',
      past: 'přibližně před {{count}} roky',
      future: 'přibližně za {{count}} roků'
    }
  },
  xYears: {
    one: {
      regular: 'rok',
      past: 'před rokem',
      future: 'za rok'
    },
    few: {
      regular: '{{count}} roky',
      past: 'před {{count}} roky',
      future: 'za {{count}} roky'
    },
    many: {
      regular: '{{count}} roků',
      past: 'před {{count}} roky',
      future: 'za {{count}} roků'
    }
  },
  overXYears: {
    one: {
      regular: 'více než rok',
      past: 'před více než rokem',
      future: 'za více než rok'
    },
    few: {
      regular: 'více než {{count}} roky',
      past: 'před více než {{count}} roky',
      future: 'za více než {{count}} roky'
    },
    many: {
      regular: 'více než {{count}} roků',
      past: 'před více než {{count}} roky',
      future: 'za více než {{count}} roků'
    }
  },
  almostXYears: {
    one: {
      regular: 'skoro rok',
      past: 'skoro před rokem',
      future: 'skoro za rok'
    },
    few: {
      regular: 'skoro {{count}} roky',
      past: 'skoro před {{count}} roky',
      future: 'skoro za {{count}} roky'
    },
    many: {
      regular: 'skoro {{count}} roků',
      past: 'skoro před {{count}} roky',
      future: 'skoro za {{count}} roků'
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var pluralResult;
  var tokenValue = formatDistanceLocale[token];

  // cs pluralization
  if (tokenValue.type === 'other') {
    pluralResult = tokenValue.other;
  } else if (count === 1) {
    pluralResult = tokenValue.one;
  } else if (count > 1 && count < 5) {
    pluralResult = tokenValue.few;
  } else {
    pluralResult = tokenValue.many;
  }

  // times
  var suffixExist = (options === null || options === void 0 ? void 0 : options.addSuffix) === true;
  var comparison = options === null || options === void 0 ? void 0 : options.comparison;
  var timeResult;
  if (suffixExist && comparison === -1) {
    timeResult = pluralResult.past;
  } else if (suffixExist && comparison === 1) {
    timeResult = pluralResult.future;
  } else {
    timeResult = pluralResult.regular;
  }
  return timeResult.replace('{{count}}', String(count));
};
var _default = formatDistance;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyw2QkFBNkIsT0FBTztBQUNwQyw2QkFBNkIsT0FBTztBQUNwQyxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsT0FBTztBQUNsQyw2QkFBNkIsT0FBTztBQUNwQyw2QkFBNkIsT0FBTztBQUNwQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsb0JBQW9CLE9BQU87QUFDM0Isb0JBQW9CLE9BQU87QUFDM0IsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsb0JBQW9CLE9BQU87QUFDM0Isb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDZCQUE2QixPQUFPO0FBQ3BDLDZCQUE2QixPQUFPO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDZCQUE2QixPQUFPO0FBQ3BDLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixvQkFBb0IsT0FBTztBQUMzQixvQkFBb0IsT0FBTztBQUMzQixLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixvQkFBb0IsT0FBTztBQUMzQixv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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDLDBCQUEwQixPQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1jcy1fbGliLWZvcm1hdERpc3RhbmNlLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4gc2VrdW5kYScsXG4gICAgICBwYXN0OiAncMWZZWQgbcOpbsSbIG5lxb4gc2VrdW5kb3UnLFxuICAgICAgZnV0dXJlOiAnemEgbcOpbsSbIG5lxb4gc2VrdW5kdSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ23DqW7EmyBuZcW+IHt7Y291bnR9fSBzZWt1bmR5JyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtw6luxJsgbmXFviB7e2NvdW50fX0gc2VrdW5kYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBzZWt1bmR5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ23DqW7EmyBuZcW+IHt7Y291bnR9fSBzZWt1bmQnLFxuICAgICAgcGFzdDogJ3DFmWVkIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgZnV0dXJlOiAnemEgbcOpbsSbIG5lxb4ge3tjb3VudH19IHNla3VuZCdcbiAgICB9XG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnc2VrdW5kYScsXG4gICAgICBwYXN0OiAncMWZZWQgc2VrdW5kb3UnLFxuICAgICAgZnV0dXJlOiAnemEgc2VrdW5kdSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBzZWt1bmR5JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gc2VrdW5kYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBzZWt1bmR5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBzZWt1bmQnLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IHNla3VuZCdcbiAgICB9XG4gIH0sXG4gIGhhbGZBTWludXRlOiB7XG4gICAgdHlwZTogJ290aGVyJyxcbiAgICBvdGhlcjoge1xuICAgICAgcmVndWxhcjogJ3DFr2wgbWludXR5JyxcbiAgICAgIHBhc3Q6ICdwxZllZCBwxa9sIG1pbnV0b3UnLFxuICAgICAgZnV0dXJlOiAnemEgcMWvbCBtaW51dHknXG4gICAgfVxuICB9LFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4gbWludXRhJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtw6luxJsgbmXFviBtaW51dG91JyxcbiAgICAgIGZ1dHVyZTogJ3phIG3DqW7EmyBuZcW+IG1pbnV0dSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ23DqW7EmyBuZcW+IHt7Y291bnR9fSBtaW51dHknLFxuICAgICAgcGFzdDogJ3DFmWVkIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBtaW51dGFtaScsXG4gICAgICBmdXR1cmU6ICd6YSBtw6luxJsgbmXFviB7e2NvdW50fX0gbWludXR5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ23DqW7EmyBuZcW+IHt7Y291bnR9fSBtaW51dCcsXG4gICAgICBwYXN0OiAncMWZZWQgbcOpbsSbIG5lxb4ge3tjb3VudH19IG1pbnV0YW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBtaW51dCdcbiAgICB9XG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbWludXRhJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtaW51dG91JyxcbiAgICAgIGZ1dHVyZTogJ3phIG1pbnV0dSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBtaW51dHknLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBtaW51dGFtaScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gbWludXR5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBtaW51dCcsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IG1pbnV0YW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBtaW51dCdcbiAgICB9XG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIGhvZGluYScsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIGhvZGlub3UnLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIGhvZGludSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB7e2NvdW50fX0gaG9kaW55JyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQge3tjb3VudH19IGhvZGluYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSB7e2NvdW50fX0gaG9kaW55J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB7e2NvdW50fX0gaG9kaW4nLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gaG9kaW5hbWknLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSBob2RpbidcbiAgICB9XG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ2hvZGluYScsXG4gICAgICBwYXN0OiAncMWZZWQgaG9kaW5vdScsXG4gICAgICBmdXR1cmU6ICd6YSBob2RpbnUnXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gaG9kaW55JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gaG9kaW5hbWknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IGhvZGlueSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gaG9kaW4nLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBob2RpbmFtaScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gaG9kaW4nXG4gICAgfVxuICB9LFxuICB4RGF5czoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ2RlbicsXG4gICAgICBwYXN0OiAncMWZZWQgZG5lbScsXG4gICAgICBmdXR1cmU6ICd6YSBkZW4nXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gZG55JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gZG55JyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBkbnknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IGRuw60nLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBkbnknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IGRuw60nXG4gICAgfVxuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB0w71kZW4nLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB0w71kbmVtJyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSB0w71kZW4nXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsge3tjb3VudH19IHTDvWRueScsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHt7Y291bnR9fSB0w71kbnknLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSB0w71kbnknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSB0w71kbsWvJyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQge3tjb3VudH19IHTDvWRueScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IHTDvWRuxa8nXG4gICAgfVxuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICd0w71kZW4nLFxuICAgICAgcGFzdDogJ3DFmWVkIHTDvWRuZW0nLFxuICAgICAgZnV0dXJlOiAnemEgdMO9ZGVuJ1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IHTDvWRueScsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IHTDvWRueScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gdMO9ZG55J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSB0w71kbsWvJyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gdMO9ZG55JyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSB0w71kbsWvJ1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIG3Em3PDrWMnLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCBtxJtzw61jZW0nLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIG3Em3PDrWMnXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsge3tjb3VudH19IG3Em3PDrWNlJyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQge3tjb3VudH19IG3Em3PDrWNpJyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSB7e2NvdW50fX0gbcSbc8OtY2UnXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSBtxJtzw61jxa8nLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gbcSbc8OtY2knLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSBtxJtzw61jxa8nXG4gICAgfVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnbcSbc8OtYycsXG4gICAgICBwYXN0OiAncMWZZWQgbcSbc8OtY2VtJyxcbiAgICAgIGZ1dHVyZTogJ3phIG3Em3PDrWMnXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gbcSbc8OtY2UnLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBtxJtzw61jaScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gbcSbc8OtY2UnXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IG3Em3PDrWPFrycsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IG3Em3PDrWNpJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBtxJtzw61jxa8nXG4gICAgfVxuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyByb2snLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCByb2tlbScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEgcm9rJ1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQge3tjb3VudH19IHJva3knLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSByb2t5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB7e2NvdW50fX0gcm9rxa8nLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IHJva8WvJ1xuICAgIH1cbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAncm9rJyxcbiAgICAgIHBhc3Q6ICdwxZllZCByb2tlbScsXG4gICAgICBmdXR1cmU6ICd6YSByb2snXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gcm9reScsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IHJva3knLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IHJva3knXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IHJva8WvJyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gcm9rxa8nXG4gICAgfVxuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAndsOtY2UgbmXFviByb2snLFxuICAgICAgcGFzdDogJ3DFmWVkIHbDrWNlIG5lxb4gcm9rZW0nLFxuICAgICAgZnV0dXJlOiAnemEgdsOtY2UgbmXFviByb2snXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd2w61jZSBuZcW+IHt7Y291bnR9fSByb2t5JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB2w61jZSBuZcW+IHt7Y291bnR9fSByb2t5JyxcbiAgICAgIGZ1dHVyZTogJ3phIHbDrWNlIG5lxb4ge3tjb3VudH19IHJva3knXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAndsOtY2UgbmXFviB7e2NvdW50fX0gcm9rxa8nLFxuICAgICAgcGFzdDogJ3DFmWVkIHbDrWNlIG5lxb4ge3tjb3VudH19IHJva3knLFxuICAgICAgZnV0dXJlOiAnemEgdsOtY2UgbmXFviB7e2NvdW50fX0gcm9rxa8nXG4gICAgfVxuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdza29ybyByb2snLFxuICAgICAgcGFzdDogJ3Nrb3JvIHDFmWVkIHJva2VtJyxcbiAgICAgIGZ1dHVyZTogJ3Nrb3JvIHphIHJvaydcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3Nrb3JvIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIHBhc3Q6ICdza29ybyBwxZllZCB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICdza29ybyB6YSB7e2NvdW50fX0gcm9reSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICdza29ybyB7e2NvdW50fX0gcm9rxa8nLFxuICAgICAgcGFzdDogJ3Nrb3JvIHDFmWVkIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIGZ1dHVyZTogJ3Nrb3JvIHphIHt7Y291bnR9fSByb2vFrydcbiAgICB9XG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHBsdXJhbFJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgLy8gY3MgcGx1cmFsaXphdGlvblxuICBpZiAodG9rZW5WYWx1ZS50eXBlID09PSAnb3RoZXInKSB7XG4gICAgcGx1cmFsUmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlcjtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHBsdXJhbFJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpIHtcbiAgICBwbHVyYWxSZXN1bHQgPSB0b2tlblZhbHVlLmZldztcbiAgfSBlbHNlIHtcbiAgICBwbHVyYWxSZXN1bHQgPSB0b2tlblZhbHVlLm1hbnk7XG4gIH1cblxuICAvLyB0aW1lc1xuICB2YXIgc3VmZml4RXhpc3QgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCkgPT09IHRydWU7XG4gIHZhciBjb21wYXJpc29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbXBhcmlzb247XG4gIHZhciB0aW1lUmVzdWx0O1xuICBpZiAoc3VmZml4RXhpc3QgJiYgY29tcGFyaXNvbiA9PT0gLTEpIHtcbiAgICB0aW1lUmVzdWx0ID0gcGx1cmFsUmVzdWx0LnBhc3Q7XG4gIH0gZWxzZSBpZiAoc3VmZml4RXhpc3QgJiYgY29tcGFyaXNvbiA9PT0gMSkge1xuICAgIHRpbWVSZXN1bHQgPSBwbHVyYWxSZXN1bHQuZnV0dXJlO1xuICB9IGVsc2Uge1xuICAgIHRpbWVSZXN1bHQgPSBwbHVyYWxSZXN1bHQucmVndWxhcjtcbiAgfVxuICByZXR1cm4gdGltZVJlc3VsdC5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbn07XG52YXIgX2RlZmF1bHQgPSBmb3JtYXREaXN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==