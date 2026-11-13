"use client";

import { useState } from "react";
import type { BookingDateRange } from "../types";
import styles from "./BookingPopover.module.css";

type BookingCalendarProps = {
  dateRange: BookingDateRange;
  onChange: (dateRange: BookingDateRange) => void;
  onComplete: () => void;
};

type CalendarMonthProps = {
  month: Date;
  today: string;
  dateRange: BookingDateRange;
  onSelect: (date: string) => void;
};

const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function toDateKey(year: number, month: number, day: number) {
  const monthText = String(month + 1).padStart(2, "0");
  const dayText = String(day).padStart(2, "0");
  return `${year}-${monthText}-${dayText}`;
}

function CalendarMonth({ month, today, dateRange, onSelect }: CalendarMonthProps) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstWeekday = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const dayCount = new Date(year, monthIndex + 1, 0).getDate();
  const monthLabel = `Tháng ${monthIndex + 1} ${year}`;

  return (
    <section className={styles.calendarMonth} aria-label={monthLabel}>
      <h3 className={styles.monthTitle}>{monthLabel}</h3>
      <div className={styles.calendarGrid}>
        {weekdays.map((weekday) => (
          <span key={weekday} className={styles.weekday}>
            {weekday}
          </span>
        ))}
        {Array.from({ length: firstWeekday }, (_, index) => (
          <span key={`empty-${index}`} className={styles.emptyDay} />
        ))}
        {Array.from({ length: dayCount }, (_, index) => {
          const day = index + 1;
          const date = toDateKey(year, monthIndex, day);
          const isStart = date === dateRange.checkIn;
          const isEnd = date === dateRange.checkOut;
          const isInRange =
            dateRange.checkIn !== null &&
            dateRange.checkOut !== null &&
            date > dateRange.checkIn &&
            date < dateRange.checkOut;
          const isDisabled = date < today;

          return (
            <button
              key={date}
              className={[
                styles.calendarDay,
                isStart || isEnd ? styles.selectedDay : "",
                isInRange ? styles.rangeDay : "",
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              aria-label={date}
              aria-pressed={isStart || isEnd}
              disabled={isDisabled}
              onClick={() => onSelect(date)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function BookingCalendar({
  dateRange,
  onChange,
  onComplete,
}: BookingCalendarProps) {
  const [firstMonth, setFirstMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const today = toDateKey(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );
  const secondMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth() + 1, 1);
  const earliestMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const changeMonth = (difference: number) => {
    setFirstMonth((current) =>
      new Date(current.getFullYear(), current.getMonth() + difference, 1),
    );
  };

  const selectDate = (date: string) => {
    if (
      dateRange.checkIn === null ||
      dateRange.checkOut !== null ||
      date < dateRange.checkIn
    ) {
      onChange({ checkIn: date, checkOut: null });
      return;
    }

    onChange({ checkIn: dateRange.checkIn, checkOut: date });
    onComplete();
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarNavigation}>
        <button
          className={styles.monthArrow}
          type="button"
          aria-label="Tháng trước"
          disabled={firstMonth <= earliestMonth}
          onClick={() => changeMonth(-1)}
        >
          ‹
        </button>
        <div className={styles.months}>
          <CalendarMonth
            month={firstMonth}
            today={today}
            dateRange={dateRange}
            onSelect={selectDate}
          />
          <CalendarMonth
            month={secondMonth}
            today={today}
            dateRange={dateRange}
            onSelect={selectDate}
          />
        </div>
        <button
          className={styles.monthArrow}
          type="button"
          aria-label="Tháng sau"
          onClick={() => changeMonth(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
