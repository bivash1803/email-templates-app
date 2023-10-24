
import React from 'react';

function TemplateGallery({ categories }) {
  return (
    <div className="template-gallery">
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div className="templates">
            {category.templates.map((template) => (
              <div key={template.id} className="template">
                {template.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TemplateGallery;
