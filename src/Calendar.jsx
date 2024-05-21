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

  //   const today = new Date();
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // 1 = Monday
  const formattedDate = format(currentDate, "EEEE - dd.MM.yyyy");
  const formattedstartOfWeekDate = format(startOfWeekDate, "EEEE - dd.MM.yyyy");

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    // weekDates.push(add(startOfWeekDate, { days: i }));
    weekDates.push(addDays(startOfWeekDate, i));
  }
  console.log(weekDates);

  const [selected, setSelected] = useState("");
  function handleChange(event) {
    setSelected(event.target.value);
    console.log(event.target.value);
  }

  const weeks = [];
  for (let w=0; w<4; w++) {

    const arraystart = startOfWeekDate;
    const daysarray = [];
    for (let d=0; d<7; d++) {
        daysarray.push(addDays(arraystart, d));
    }

    weeks.push({w : daysarray});
  }
  
  console.log(weeks);

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

      <pre>{JSON.stringify(weekDates, null, 2)}</pre>
      <p>Weeks</p>
      <pre>{JSON.stringify(weeks, null, 2)}</pre>
    </div>
  );
}
