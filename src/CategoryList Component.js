
import React from 'react';

function CategoryList({ categories, setFilter }) {
  return (
    <div className="category-list">
      <ul>
        <li onClick={() => setFilter({ category: null, sorting: 'A-Z', search: '' })}>All Categories</li>
        {categories.map((category) => (
          <li key={category.id} onClick={() => setFilter({ category: category.id, sorting: 'A-Z', search: '' })}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
