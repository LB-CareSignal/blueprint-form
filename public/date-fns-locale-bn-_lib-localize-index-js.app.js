(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-fns-locale-bn-_lib-localize-index-js"],{

/***/ "./node_modules/date-fns/locale/bn/_lib/localize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/bn/_lib/localize/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.numberToLocale = numberToLocale;
var _index = _interopRequireDefault(__webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));
var numberValues = {
  locale: {
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
    '0': '০'
  },
  number: {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0'
  }
};
var eraValues = {
  narrow: ['খ্রিঃপূঃ', 'খ্রিঃ'],
  abbreviated: ['খ্রিঃপূর্ব', 'খ্রিঃ'],
  wide: ['খ্রিস্টপূর্ব', 'খ্রিস্টাব্দ']
};
var quarterValues = {
  narrow: ['১', '২', '৩', '৪'],
  abbreviated: ['১ত্রৈ', '২ত্রৈ', '৩ত্রৈ', '৪ত্রৈ'],
  wide: ['১ম ত্রৈমাসিক', '২য় ত্রৈমাসিক', '৩য় ত্রৈমাসিক', '৪র্থ ত্রৈমাসিক']
};
var monthValues = {
  narrow: ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্ট', 'অক্টো', 'নভে', 'ডিসে'],
  abbreviated: ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্ট', 'অক্টো', 'নভে', 'ডিসে'],
  wide: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']
};
var dayValues = {
  narrow: ['র', 'সো', 'ম', 'বু', 'বৃ', 'শু', 'শ'],
  short: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'],
  abbreviated: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'],
  wide: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার ', 'শুক্রবার', 'শনিবার']
};
var dayPeriodValues = {
  narrow: {
    am: 'পূ',
    pm: 'অপ',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  },
  abbreviated: {
    am: 'পূর্বাহ্ন',
    pm: 'অপরাহ্ন',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  },
  wide: {
    am: 'পূর্বাহ্ন',
    pm: 'অপরাহ্ন',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'পূ',
    pm: 'অপ',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  },
  abbreviated: {
    am: 'পূর্বাহ্ন',
    pm: 'অপরাহ্ন',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  },
  wide: {
    am: 'পূর্বাহ্ন',
    pm: 'অপরাহ্ন',
    midnight: 'মধ্যরাত',
    noon: 'মধ্যাহ্ন',
    morning: 'সকাল',
    afternoon: 'বিকাল',
    evening: 'সন্ধ্যা',
    night: 'রাত'
  }
};
function dateOrdinalNumber(number, localeNumber) {
  if (number > 18 && number <= 31) {
    return localeNumber + 'শে';
  } else {
    switch (number) {
      case 1:
        return localeNumber + 'লা';
      case 2:
      case 3:
        return localeNumber + 'রা';
      case 4:
        return localeNumber + 'ঠা';
      default:
        return localeNumber + 'ই';
    }
  }
}
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var localeNumber = numberToLocale(number);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === 'date') {
    return dateOrdinalNumber(number, localeNumber);
  }
  if (number > 10 || number === 0) return localeNumber + 'তম';
  var rem10 = number % 10;
  switch (rem10) {
    case 2:
    case 3:
      return localeNumber + 'য়';
    case 4:
      return localeNumber + 'র্থ';
    case 6:
      return localeNumber + 'ষ্ঠ';
    default:
      return localeNumber + 'ম';
  }
};

// function localeToNumber(locale: string): number {
//   const enNumber = locale.toString().replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
//     return numberValues.number[match as keyof typeof numberValues.number]
//   })
//   return Number(enNumber)
// }

function numberToLocale(enNumber) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match];
  });
}
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2JuL19saWIvbG9jYWxpemUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0R0FBd0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCIiwiZmlsZSI6ImRhdGUtZm5zLWxvY2FsZS1ibi1fbGliLWxvY2FsaXplLWluZGV4LWpzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKS5kZWZhdWx0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMubnVtYmVyVG9Mb2NhbGUgPSBudW1iZXJUb0xvY2FsZTtcbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG52YXIgbnVtYmVyVmFsdWVzID0ge1xuICBsb2NhbGU6IHtcbiAgICAnMSc6ICfgp6cnLFxuICAgICcyJzogJ+CnqCcsXG4gICAgJzMnOiAn4KepJyxcbiAgICAnNCc6ICfgp6onLFxuICAgICc1JzogJ+CnqycsXG4gICAgJzYnOiAn4KesJyxcbiAgICAnNyc6ICfgp60nLFxuICAgICc4JzogJ+CnricsXG4gICAgJzknOiAn4KevJyxcbiAgICAnMCc6ICfgp6YnXG4gIH0sXG4gIG51bWJlcjoge1xuICAgICfgp6cnOiAnMScsXG4gICAgJ+CnqCc6ICcyJyxcbiAgICAn4KepJzogJzMnLFxuICAgICfgp6onOiAnNCcsXG4gICAgJ+Cnqyc6ICc1JyxcbiAgICAn4KesJzogJzYnLFxuICAgICfgp60nOiAnNycsXG4gICAgJ+Cnric6ICc4JyxcbiAgICAn4KevJzogJzknLFxuICAgICfgp6YnOiAnMCdcbiAgfVxufTtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfgppbgp43gprDgpr/gpoPgpqrgp4LgpoMnLCAn4KaW4KeN4Kaw4Ka/4KaDJ10sXG4gIGFiYnJldmlhdGVkOiBbJ+CmluCnjeCmsOCmv+Cmg+CmquCnguCmsOCnjeCmrCcsICfgppbgp43gprDgpr/gpoMnXSxcbiAgd2lkZTogWyfgppbgp43gprDgpr/gprjgp43gpp/gpqrgp4LgprDgp43gpqwnLCAn4KaW4KeN4Kaw4Ka/4Ka44KeN4Kaf4Ka+4Kas4KeN4KamJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ+CnpycsICfgp6gnLCAn4KepJywgJ+CnqiddLFxuICBhYmJyZXZpYXRlZDogWyfgp6fgpqTgp43gprDgp4gnLCAn4Keo4Kak4KeN4Kaw4KeIJywgJ+CnqeCmpOCnjeCmsOCniCcsICfgp6rgpqTgp43gprDgp4gnXSxcbiAgd2lkZTogWyfgp6fgpq4g4Kak4KeN4Kaw4KeI4Kau4Ka+4Ka44Ka/4KaVJywgJ+CnqOCnnyDgpqTgp43gprDgp4jgpq7gpr7gprjgpr/gppUnLCAn4Kep4KefIOCmpOCnjeCmsOCniOCmruCmvuCmuOCmv+CmlScsICfgp6rgprDgp43gpqUg4Kak4KeN4Kaw4KeI4Kau4Ka+4Ka44Ka/4KaVJ11cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWyfgppzgpr7gpqjgp4EnLCAn4Kar4KeH4Kas4KeN4Kaw4KeBJywgJ+CmruCmvuCmsOCnjeCmmicsICfgpo/gpqrgp43gprDgpr/gprInLCAn4Kau4KeHJywgJ+CmnOCngeCmqCcsICfgppzgp4HgprLgpr7gpocnLCAn4KaG4KaX4Ka44KeN4KafJywgJ+CmuOCnh+CmquCnjeCmnycsICfgpoXgppXgp43gpp/gp4snLCAn4Kao4Kat4KeHJywgJ+CmoeCmv+CmuOCnhyddLFxuICBhYmJyZXZpYXRlZDogWyfgppzgpr7gpqjgp4EnLCAn4Kar4KeH4Kas4KeN4Kaw4KeBJywgJ+CmruCmvuCmsOCnjeCmmicsICfgpo/gpqrgp43gprDgpr/gprInLCAn4Kau4KeHJywgJ+CmnOCngeCmqCcsICfgppzgp4HgprLgpr7gpocnLCAn4KaG4KaX4Ka44KeN4KafJywgJ+CmuOCnh+CmquCnjeCmnycsICfgpoXgppXgp43gpp/gp4snLCAn4Kao4Kat4KeHJywgJ+CmoeCmv+CmuOCnhyddLFxuICB3aWRlOiBbJ+CmnOCmvuCmqOCngeCnn+CmvuCmsOCmvycsICfgpqvgp4fgpqzgp43gprDgp4Hgp5/gpr7gprDgpr8nLCAn4Kau4Ka+4Kaw4KeN4KaaJywgJ+Cmj+CmquCnjeCmsOCmv+CmsicsICfgpq7gp4cnLCAn4Kac4KeB4KaoJywgJ+CmnOCngeCmsuCmvuCmhycsICfgpobgppfgprjgp43gpp8nLCAn4Ka44KeH4Kaq4KeN4Kaf4KeH4Kau4KeN4Kas4KawJywgJ+CmheCmleCnjeCmn+Cni+CmrOCmsCcsICfgpqjgpq3gp4fgpq7gp43gpqzgprAnLCAn4Kah4Ka/4Ka44KeH4Kau4KeN4Kas4KawJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsn4KawJywgJ+CmuOCniycsICfgpq4nLCAn4Kas4KeBJywgJ+CmrOCngycsICfgprbgp4EnLCAn4Ka2J10sXG4gIHNob3J0OiBbJ+CmsOCmrOCmvycsICfgprjgp4vgpq4nLCAn4Kau4KaZ4KeN4KaX4KayJywgJ+CmrOCngeCmpycsICfgpqzgp4PgprknLCAn4Ka24KeB4KaV4KeN4KawJywgJ+CmtuCmqOCmvyddLFxuICBhYmJyZXZpYXRlZDogWyfgprDgpqzgpr8nLCAn4Ka44KeL4KauJywgJ+CmruCmmeCnjeCml+CmsicsICfgpqzgp4HgpqcnLCAn4Kas4KeD4Ka5JywgJ+CmtuCngeCmleCnjeCmsCcsICfgprbgpqjgpr8nXSxcbiAgd2lkZTogWyfgprDgpqzgpr/gpqzgpr7gprAnLCAn4Ka44KeL4Kau4Kas4Ka+4KawJywgJ+CmruCmmeCnjeCml+CmsuCmrOCmvuCmsCcsICfgpqzgp4Hgpqfgpqzgpr7gprAnLCAn4Kas4KeD4Ka54Ka44KeN4Kaq4Kak4Ka/4Kas4Ka+4KawICcsICfgprbgp4HgppXgp43gprDgpqzgpr7gprAnLCAn4Ka24Kao4Ka/4Kas4Ka+4KawJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ+CmquCngicsXG4gICAgcG06ICfgpoXgpqonLFxuICAgIG1pZG5pZ2h0OiAn4Kau4Kan4KeN4Kav4Kaw4Ka+4KakJyxcbiAgICBub29uOiAn4Kau4Kan4KeN4Kav4Ka+4Ka54KeN4KaoJyxcbiAgICBtb3JuaW5nOiAn4Ka44KaV4Ka+4KayJyxcbiAgICBhZnRlcm5vb246ICfgpqzgpr/gppXgpr7gprInLFxuICAgIGV2ZW5pbmc6ICfgprjgpqjgp43gpqfgp43gpq/gpr4nLFxuICAgIG5pZ2h0OiAn4Kaw4Ka+4KakJ1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAn4Kaq4KeC4Kaw4KeN4Kas4Ka+4Ka54KeN4KaoJyxcbiAgICBwbTogJ+CmheCmquCmsOCmvuCmueCnjeCmqCcsXG4gICAgbWlkbmlnaHQ6ICfgpq7gpqfgp43gpq/gprDgpr7gpqQnLFxuICAgIG5vb246ICfgpq7gpqfgp43gpq/gpr7gprngp43gpqgnLFxuICAgIG1vcm5pbmc6ICfgprjgppXgpr7gprInLFxuICAgIGFmdGVybm9vbjogJ+CmrOCmv+CmleCmvuCmsicsXG4gICAgZXZlbmluZzogJ+CmuOCmqOCnjeCmp+CnjeCmr+CmvicsXG4gICAgbmlnaHQ6ICfgprDgpr7gpqQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ+CmquCnguCmsOCnjeCmrOCmvuCmueCnjeCmqCcsXG4gICAgcG06ICfgpoXgpqrgprDgpr7gprngp43gpqgnLFxuICAgIG1pZG5pZ2h0OiAn4Kau4Kan4KeN4Kav4Kaw4Ka+4KakJyxcbiAgICBub29uOiAn4Kau4Kan4KeN4Kav4Ka+4Ka54KeN4KaoJyxcbiAgICBtb3JuaW5nOiAn4Ka44KaV4Ka+4KayJyxcbiAgICBhZnRlcm5vb246ICfgpqzgpr/gppXgpr7gprInLFxuICAgIGV2ZW5pbmc6ICfgprjgpqjgp43gpqfgp43gpq/gpr4nLFxuICAgIG5pZ2h0OiAn4Kaw4Ka+4KakJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAn4Kaq4KeCJyxcbiAgICBwbTogJ+CmheCmqicsXG4gICAgbWlkbmlnaHQ6ICfgpq7gpqfgp43gpq/gprDgpr7gpqQnLFxuICAgIG5vb246ICfgpq7gpqfgp43gpq/gpr7gprngp43gpqgnLFxuICAgIG1vcm5pbmc6ICfgprjgppXgpr7gprInLFxuICAgIGFmdGVybm9vbjogJ+CmrOCmv+CmleCmvuCmsicsXG4gICAgZXZlbmluZzogJ+CmuOCmqOCnjeCmp+CnjeCmr+CmvicsXG4gICAgbmlnaHQ6ICfgprDgpr7gpqQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICfgpqrgp4LgprDgp43gpqzgpr7gprngp43gpqgnLFxuICAgIHBtOiAn4KaF4Kaq4Kaw4Ka+4Ka54KeN4KaoJyxcbiAgICBtaWRuaWdodDogJ+CmruCmp+CnjeCmr+CmsOCmvuCmpCcsXG4gICAgbm9vbjogJ+CmruCmp+CnjeCmr+CmvuCmueCnjeCmqCcsXG4gICAgbW9ybmluZzogJ+CmuOCmleCmvuCmsicsXG4gICAgYWZ0ZXJub29uOiAn4Kas4Ka/4KaV4Ka+4KayJyxcbiAgICBldmVuaW5nOiAn4Ka44Kao4KeN4Kan4KeN4Kav4Ka+JyxcbiAgICBuaWdodDogJ+CmsOCmvuCmpCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAn4Kaq4KeC4Kaw4KeN4Kas4Ka+4Ka54KeN4KaoJyxcbiAgICBwbTogJ+CmheCmquCmsOCmvuCmueCnjeCmqCcsXG4gICAgbWlkbmlnaHQ6ICfgpq7gpqfgp43gpq/gprDgpr7gpqQnLFxuICAgIG5vb246ICfgpq7gpqfgp43gpq/gpr7gprngp43gpqgnLFxuICAgIG1vcm5pbmc6ICfgprjgppXgpr7gprInLFxuICAgIGFmdGVybm9vbjogJ+CmrOCmv+CmleCmvuCmsicsXG4gICAgZXZlbmluZzogJ+CmuOCmqOCnjeCmp+CnjeCmr+CmvicsXG4gICAgbmlnaHQ6ICfgprDgpr7gpqQnXG4gIH1cbn07XG5mdW5jdGlvbiBkYXRlT3JkaW5hbE51bWJlcihudW1iZXIsIGxvY2FsZU51bWJlcikge1xuICBpZiAobnVtYmVyID4gMTggJiYgbnVtYmVyIDw9IDMxKSB7XG4gICAgcmV0dXJuIGxvY2FsZU51bWJlciArICfgprbgp4cnO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBsb2NhbGVOdW1iZXIgKyAn4Kay4Ka+JztcbiAgICAgIGNhc2UgMjpcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIGxvY2FsZU51bWJlciArICfgprDgpr4nO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gbG9jYWxlTnVtYmVyICsgJ+CmoOCmvic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxlTnVtYmVyICsgJ+Cmhyc7XG4gICAgfVxuICB9XG59XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHZhciBsb2NhbGVOdW1iZXIgPSBudW1iZXJUb0xvY2FsZShudW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICBpZiAodW5pdCA9PT0gJ2RhdGUnKSB7XG4gICAgcmV0dXJuIGRhdGVPcmRpbmFsTnVtYmVyKG51bWJlciwgbG9jYWxlTnVtYmVyKTtcbiAgfVxuICBpZiAobnVtYmVyID4gMTAgfHwgbnVtYmVyID09PSAwKSByZXR1cm4gbG9jYWxlTnVtYmVyICsgJ+CmpOCmric7XG4gIHZhciByZW0xMCA9IG51bWJlciAlIDEwO1xuICBzd2l0Y2ggKHJlbTEwKSB7XG4gICAgY2FzZSAyOlxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBsb2NhbGVOdW1iZXIgKyAn4KefJztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gbG9jYWxlTnVtYmVyICsgJ+CmsOCnjeCmpSc7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGxvY2FsZU51bWJlciArICfgprfgp43gpqAnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbG9jYWxlTnVtYmVyICsgJ+Cmric7XG4gIH1cbn07XG5cbi8vIGZ1bmN0aW9uIGxvY2FsZVRvTnVtYmVyKGxvY2FsZTogc3RyaW5nKTogbnVtYmVyIHtcbi8vICAgY29uc3QgZW5OdW1iZXIgPSBsb2NhbGUudG9TdHJpbmcoKS5yZXBsYWNlKC9b4Ken4Keo4Kep4Keq4Ker4Kes4Ket4Keu4Kev4KemXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbi8vICAgICByZXR1cm4gbnVtYmVyVmFsdWVzLm51bWJlclttYXRjaCBhcyBrZXlvZiB0eXBlb2YgbnVtYmVyVmFsdWVzLm51bWJlcl1cbi8vICAgfSlcbi8vICAgcmV0dXJuIE51bWJlcihlbk51bWJlcilcbi8vIH1cblxuZnVuY3Rpb24gbnVtYmVyVG9Mb2NhbGUoZW5OdW1iZXIpIHtcbiAgcmV0dXJuIGVuTnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBudW1iZXJWYWx1ZXMubG9jYWxlW21hdGNoXTtcbiAgfSk7XG59XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==