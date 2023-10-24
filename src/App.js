
import React, { useState } from 'react';
import './App.css';
import CategoryList from './CategoryList Component';
import TemplateGallery from './TemplateGallery Component';
import FilterBar from './FilterBar';
import sampleData from './sampleData';

function App() {
  const [categories, setCategories] = useState(sampleData.categories);
  const [filter, setFilter] = useState({ category: null, sorting: 'A-Z', search: '' });

  const filteredTemplates = categories
    .filter((category) => !filter.category || category.id === filter.category)
    .map((category) => ({
      ...category,
      templates: category.templates
        .filter((template) => template.name.toLowerCase().includes(filter.search.toLowerCase()))
        .sort((a, b) => {
          if (filter.sorting === 'A-Z') return a.name.localeCompare(b.name);
          if (filter.sorting === 'Z-A') return b.name.localeCompare(a.name);
         
          return 0;
        }),
    }));

  return (
    <div className="app">
      <h1>Email Templates Library</h1>
      <CategoryList categories={categories} setFilter={setFilter} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TemplateGallery categories={filteredTemplates} />
    </div>
  );
}

export default App;
