import React, { useState } from "react";

export function Select() {
  const [filtered, setFiltered] = useState(["Alle Kurse","Lindy Hop", "Balboa", "Shag", "Boogie Woogie", "Easy Dips"]);
  const [selected, setSelected] = useState("Alle Kurse");

  function handleChange(event) {
    setSelected(event.target.value);
    console.log(event.target.value);
  }

  return (
    <select value={selected} onChange={handleChange}>

      {filtered.map(filter => (
      <option key={filter} value={filter}>
        {filter}
      </option>
    ))}
      {/* <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option> */}
    </select>
  );
}

// The key points: Use the useState hook to store
//  the selected value in state. Pass a onChange handler 
//  to the <select> that calls setSelected to update the 
//  state, and logs the new value. The value attribute of 
//  the <select> should match the state to show the 
//  currently selected option. So this allows you to 
//  track the selected value in state, and log it out on change.
