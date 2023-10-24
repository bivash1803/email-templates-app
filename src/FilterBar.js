
import React from 'react';

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilter({ ...filter, sorting: e.target.value })}>
        <option value="A-Z">Sort A-Z</option>
        <option value="Z-A">Sort Z-A</option>
        {/* Add more sorting options */}
      </select>
      <input
        type="text"
        placeholder="Search templates"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
    </div>
  );
}

export default FilterBar;
