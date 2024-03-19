import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Select } from "./Select";

import "./App.css";

import { events } from "./events.json";

function App() {
  // set states for selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);
  // set states for filtered items to render
  const [filteredItems, setFilteredItems] = useState(events);
  // list of available filter options
  let filters = ["Lindy Hop", "Balboa", "Shag", "Boogie Woogie", "Easy Dips"];

  //   when a filter button is clicked, highlight button (toogle) and update list of selected filters
  //   props is the one selected filter as selected category
  const handleFilterButtonClick = (selectedDance) => {
    if (selectedFilters.includes(selectedDance)) {
      let filters = selectedFilters.filter((el) => el !== selectedDance);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedDance]);
    }
  };

  useEffect(() => {
    // filter items when list of selected filters has changed
    filterEvents();
  }, [selectedFilters]);

  //   filter items based on list of selected filters
  const filterEvents = () => {
    if (selectedFilters.length > 0) {
      // use temporary array to store filtered items
      let tempEvents = selectedFilters.map((selectedDance) => {
        // let temp = events.filter((event) => event.title === selectedDance);
        let temp = events.filter((event) =>
          event.title.includes(selectedDance)
        );
        return temp;
      });
      //   flat means to create a single array from the nested arrays
      setFilteredItems(tempEvents.flat());
    } else {
      // if no filter is selected, show all items
      setFilteredItems([...events]);
    }
  };

  return (
    <>
      <h1>Demo Kalender mit Tanzkursen und Multi-Filter</h1>
      <div>
        <Select />
      </div>

      {filters.map((dance, idx) => (
        <button
          // onClick event for each button, sending the category as props
          onClick={() => handleFilterButtonClick(dance)}
          key={idx}
          // add active class if selected filters includes the category button
          className={`button ${
            selectedFilters?.includes(dance) ? "active" : ""
          }`}
        >
          {dance}
        </button>
      ))}

      <div className="card-area">
        {filteredItems.map((event) => (
          <Card event={event} key={event.id} />
        ))}
      </div>
    </>
  );
}

export default App;
