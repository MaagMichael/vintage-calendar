import React, { useState, useEffect } from "react";

const datasets = [
  { id: 1, Item: "A", level: 4, status: "early" },
  { id: 2, Item: "A", level: 3, status: "late" },
  { id: 3, Item: "C", level: 2, status: "late" },
  { id: 4, Item: "B", level: 4, status: "early" },
  { id: 5, Item: "A", level: 1, status: "noon" },
  { id: 6, Item: "C", level: 1, status: "noon" },
  { id: 7, Item: "A", level: 2, status: "early" },
  { id: 8, Item: "B", level: 2, status: "early" },
  { id: 9, Item: "C", level: 3, status: "late" },
  { id: 10, Item: "B", level: 1, status: "noon" },
  { id: 11, Item: "A", level: 3, status: "noon" },
];

const Experiment = () => {
  const [filterItems, setFilterItems] = useState([]);
  const [filterLevels, setFilterLevels] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filteredData, setFilteredData] = useState(datasets);

  // read out the datatable colomn and extract the unique values and sort them
  const uniqueButtonItems = [
    ...new Set(datasets.map((item) => item.Item)),
  ].sort();
  // console.log(uniqueButtonItems);

  const uniqueButtonLevels = [
    ...new Set(datasets.map((item) => item.level)),
  ].sort();
  // console.log(uniqueButtonLevels);

  const uniqueButtonStatus = [
    ...new Set(datasets.map((item) => item.status)),
  ].sort();
  // console.log(uniqueButtonStatus);

  // add and remove filter values by button click in useStates along user inputs
  const handleFilterItems = (item) => {
    // check if filter is already selected, remove it from selected filters
    const isPresent = filterItems.includes(item);
    setFilterItems(
      // use internary operator to check if filter is already selected or not, then removing or adding
      isPresent ? filterItems.filter((i) => i !== item) : [...filterItems, item]
    );
  };

  const handleFilterLevels = (level) => {
    const isPresent = filterLevels.includes(level);
    setFilterLevels(
      isPresent
        ? filterLevels.filter((l) => l !== level)
        : [...filterLevels, level]
    );
  };

  const handleFilterStatus = (status) => {
    const isPresent = filterStatus.includes(status);
    setFilterStatus(
      isPresent
        ? filterStatus.filter((s) => s !== status)
        : [...filterStatus, status]
    );
  };

  const resetFilters = () => {
    setFilterItems([]);
    setFilterLevels([]);
    setFilterStatus([]);
  };

  const applyFilters = () => {
    let filtered = datasets;

    if (filterItems.length > 0) {
      filtered = filtered.filter((data) => filterItems.includes(data.Item));
    }

    if (filterLevels.length > 0) {
      filtered = filtered.filter((data) => filterLevels.includes(data.level));
    }

    if (filterStatus.length > 0) {
      filtered = filtered.filter((data) => filterStatus.includes(data.status));
    }

    setFilteredData(filtered);
  };

  // filter dataset when changes on filter buttons
  useEffect(() => {
    applyFilters();
  }, [filterItems, filterLevels, filterStatus]);

  return (
    <div>
      {/* rendering filter buttons with values from extraction above incl. reset button  */}
      <div className="flex-container">
        <h2>Filter Items</h2>
        {uniqueButtonItems.map((item, index) => (
          <button
            key={index}
            className={`${filterItems?.includes(item) ? "active" : ""}`}
            onClick={() => handleFilterItems(item)}
          >
            {item}
          </button>
        ))}
        <button onClick={() => setFilterItems([])}>Reset</button>
      </div>

      <div className="flex-container">
        <h2>Filter Levels</h2>
        {uniqueButtonLevels.map((item, index) => (
          <button
            key={index}
            className={`${filterLevels?.includes(item) ? "active" : ""}`}
            onClick={() => handleFilterLevels(item)}
          >
            {item}
          </button>
        ))}
        <button onClick={() => setFilterLevels([])}>Reset</button>
      </div>

      <div className="flex-container">
        <h2>Filter Status</h2>
        {uniqueButtonStatus.map((item, index) => (
          <button
            key={index}
            className={`${filterStatus?.includes(item) ? "active" : ""}`}
            onClick={() => handleFilterStatus(item)}
          >
            {item}
          </button>
        ))}
        <button onClick={() => setFilterStatus([])}>Reset</button>
      </div>

      <div className="flex-container">
        {/* Reset all filters in one go */}
        <h2>All Filter Reset</h2>
        <button onClick={() => resetFilters()}>Reset all</button>
      </div>

      {/* rendering filtered datasets */}
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((data) => (
          <div key={data.id}>
            <p>
              Item: {data.Item} on Level: {data.level} in Status: {data.status}
            </p>
          </div>
        ))
      ) : (
        <h1>No data available</h1>
      )}

      {/* rendering filtered datasets as JSON*/}
      <h2>Filtered Data as Json</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default Experiment;
