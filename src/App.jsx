import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Select } from "./Select";

import "./App.css";

import { events } from "./events.json";
import Experiment from "./Experiment";

function App() {
  // set states for selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);
  // set states for filtered items to render
  const [filteredItems, setFilteredItems] = useState(events);
  // list of available filter options
  let filterDance = [
    "Lindy Hop",
    "Balboa",
    "Shag",
    "Boogie Woogie",
    "Easy Dips",
  ];
  let filterLevel = ["1", "2", "3", "4"];

  //   when a filter button is clicked, highlight button (toogle) and update list of selected filters
  //   props is the one selected filter as selected category
  const handleFilterButtonClick = (selectedFilterButton) => {
    // if filter is already selected, remove it from selected filters
    if (selectedFilters.includes(selectedFilterButton)) {
      let filters = selectedFilters.filter((el) => el !== selectedFilterButton);
      setSelectedFilters(filters);
    } else {
      // add new filter to list of selected filters
      setSelectedFilters([...selectedFilters, selectedFilterButton]);
    }
    // print out array of filters to check if it works
    // console.log(selectedFilters);
  };

  useEffect(() => {
    // filter items when list of selected filters has changed
    filterEvents();
  }, [selectedFilters]);

  //   filter db items based on list of selected filters
  const filterEvents = () => {
    if (selectedFilters.length > 0) {
      // use temporary array to store filtered items by looping through list of selected filters
      let tempEvents = selectedFilters.map((item) => {
        // filter events by selected filters
        let temp = events.filter(
          (event) =>
            // event.title_class.includes(item) || event.level_number.includes(item)
            event.title_class.includes(item) &&
            event.level_number.includes(item)
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
      <Experiment />
      <p>
        ##############################################################################################################
      </p>
      <h1>Demo Kalender mit Tanzkursen und Multi-Filter</h1>
      <div>
        <Select />
      </div>
      {/* ################### FILTERS ########################### */}
      {filterDance.map((dance, idx) => (
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

      {filterLevel.map((level, idx) => (
        <button
          // onClick event for each button, sending the category as props
          onClick={() => handleFilterButtonClick(level)}
          key={idx}
          // add active class if selected filters includes the category button
          className={`${selectedFilters?.includes(level) ? "active" : ""}`}
        >
          {level}
        </button>
      ))}

      {/* ################### Cards ########################### */}
      <div className="card-area">
        {filteredItems.map((event) => (
          <Card event={event} key={event.id} />
        ))}
      </div>
    </>
  );
}

export default App;
