import React, { useState } from "react";

// import from library date-fns
import {
  add,
  addDays,
  sub,
  format,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  // isEqual,
  parseISO,
  isSameDay,
  isWithinInterval,
  // set,
} from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // 1 = Monday
  const formattedDate = format(currentDate, "EEEE - dd.MM.yyyy");
  const formattedstartOfWeekDate = format(startOfWeekDate, "EEEE - dd.MM.yyyy");

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    // weekDates.push(add(startOfWeekDate, { days: i }));
    weekDates.push(addDays(startOfWeekDate, i));
  }
  //   console.log(weekDates);

  const [selected, setSelected] = useState("");
  function handleChange(event) {
    setSelected(event.target.value);
    console.log(event.target.value);
  }
  // generate 4 weeks from today's week start date
  const weeks = [];
  let currentWeekStart = startOfWeekDate;
  for (let w = 1; w < 5; w++) {
    const daysarray = [];

    for (let d = 0; d < 7; d++) {
      daysarray.push(addDays(currentWeekStart, d));
    }
    // console.log("days of week ", daysarray);
    const selector =
      "< " +
      format(daysarray[0], "EE-dd.MM").toString() +
      " bis " +
      format(daysarray[6], "EE-dd.MM.yyyy").toString() +
      " >";

    weeks.push({ week: w, selector: selector, days: daysarray });
    currentWeekStart = addDays(currentWeekStart, 7);
  }

  console.log("sets of weeks ", weeks);
  //   console.log(weeks);

  return (
    <div>
      <p>Today's date: {formattedDate}</p>
      <p>Today's week started: {formattedstartOfWeekDate}</p>
      <p>
        from {format(weekDates[0], "EE - dd.MM.yyyy")} to{" "}
        {format(weekDates[6], "EE - dd.MM.yyyy")}
      </p>

      <p>Week dates:</p>
      {weekDates.map((date, index) => (
        <li key={index}>{format(date, "EE - dd.MM.yyyy")}</li>
      ))}

      <select value={selected} onChange={handleChange}>
        {weekDates.map((date, index) => (
          <option key={index} value={date}>
            {format(date, "EE - dd.MM.yyyy")}
          </option>
        ))}
      </select>

      <h3>Actual Week from today</h3>
      {/* <pre>{JSON.stringify(weekDates, null, 2)}</pre> */}
      {weekDates.map((date, index) => (
        <p key={index}>{format(date, "EE - dd.MM.yyyy")}</p>
      ))}

      <h3>All possible Weeks</h3>
      <select value={selected} onChange={handleChange}>
        {weeks.map((set, index) => (
          <option key={index} value={set.selector}>
            {set.selector}
          </option>
        ))}
      </select>

      {/* <pre>{JSON.stringify(weeks, null, 2)}</pre> */}
      {weeks.map((set, index) => (
        <div key={index}>
          <p>Week number {set.week}</p>
          {set.days.map((date, index) => (
            <p key={index}>{format(date, "EE - dd.MM.yyyy")}</p>
          ))}
          <p>by selector {set.selector}</p>
        </div>
      ))}
    </div>
  );
}
