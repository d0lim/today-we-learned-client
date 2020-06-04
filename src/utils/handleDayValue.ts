import { DayValue } from "react-modern-calendar-datepicker";

export const addDays = (dayValue: DayValue, days: number): DayValue => {
  if (dayValue) {
    let d: Date = new Date(dayValue.year, dayValue.month - 1, dayValue.day);
    d.setDate(d.getDate() + days);
    const newDayValue: DayValue = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
    }
    return newDayValue;
  } else {
    console.log("Not proper dayValue");
    return undefined;
  }
}