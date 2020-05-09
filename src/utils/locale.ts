export const myCustomLocale = {
  // months list by order
  months: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],

  // week days by order
  weekDays: [
    {
      name: "일요일", // used for accessibility
      short: "일", // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: "월요일",
      short: "월",
    },
    {
      name: "화요일",
      short: "화",
    },
    {
      name: "수요일",
      short: "수",
    },
    {
      name: "목요일",
      short: "목",
    },
    {
      name: "금요일",
      short: "금",
    },
    {
      name: "토요일",
      short: "토",
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: any) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: "다음달",
  previousMonth: "저번달",
  openMonthSelector: "월 선택기 열기",
  openYearSelector: "연 선택기 열기",
  closeMonthSelector: "월 선택기 닫기",
  closeYearSelector: "연 선택기 닫기",
  defaultPlaceholder: "선택...",

  // for input range value
  from: "부터",
  to: "까지",

  // used for input value when multi dates are selected
  digitSeparator: ",",

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};
