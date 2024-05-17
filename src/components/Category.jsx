import React from 'react';
import PropTypes from 'prop-types';

function Category({ categories }) {
  return (
    <div className="category">
      <h3>Kategori Populer</h3>
      <div className="category-list">
        {categories.map((category) => (
          <button key={category} className="btn" type="button" >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Category;
