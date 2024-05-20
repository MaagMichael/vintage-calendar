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
      {/* rendering filter buttons and reset button  */}
      <h2>Filter Items</h2>
      <button className={`button ${filterItems?.includes("A") ? "active" : ""}`} onClick={() => handleFilterItems("A")}>A</button>
      <button className={`button ${filterItems?.includes("B") ? "active" : ""}`} onClick={() => handleFilterItems("B")}>B</button>
      <button className={`button ${filterItems?.includes("C") ? "active" : ""}`} onClick={() => handleFilterItems("C")}>C</button>
      <button onClick={() => setFilterItems([])}>Reset</button>

      <h2>Filter Levels</h2>
      <button className={`button ${filterLevels?.includes(1) ? "active" : ""}`} onClick={() => handleFilterLevels(1)}>1</button>
      <button className={`button ${filterLevels?.includes(2) ? "active" : ""}`} onClick={() => handleFilterLevels(2)}>2</button>
      <button className={`button ${filterLevels?.includes(3) ? "active" : ""}`} onClick={() => handleFilterLevels(3)}>3</button>
      <button className={`button ${filterLevels?.includes(4) ? "active" : ""}`} onClick={() => handleFilterLevels(4)}>4</button>
      <button onClick={() => setFilterLevels([])}>Reset</button>

      <h2>Filter Status</h2>
      <button className={`button ${filterStatus?.includes("early") ? "active" : ""}`} onClick={() => handleFilterStatus("early")}>early</button>
      <button className={`button ${filterStatus?.includes("noon") ? "active" : ""}`} onClick={() => handleFilterStatus("noon")}>noon</button>
      <button className={`button ${filterStatus?.includes("late") ? "active" : ""}`} onClick={() => handleFilterStatus("late")}>late</button>
      <button onClick={() => setFilterStatus([])}>Reset</button>

      <h2>All Filter Reset</h2>
      <button onClick={() => resetFilters()}>Reset all</button>

      {/* rendering filtered datasets */}
      {filteredData.map((data) => (
        <div key={data.id}>
          <p>
            Item: {data.Item} on Level: {data.level} in Status: {data.status}
          </p>
          {/* <hr /> */}
        </div>
      ))}
      {/* rendering filtered datasets as JSON*/}
      <h2>Filtered Data</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default Experiment;
