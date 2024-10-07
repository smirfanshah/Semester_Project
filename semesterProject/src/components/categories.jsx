import { useState } from 'react';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Entire homes'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Fetch and display listings based on the active category
    console.log("Selected category:", category);
  };

  return (
    <div className="flex overflow-x-scroll space-x-4 mt-4 p-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`py-2 px-4 rounded ${category === activeCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-blue-400`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
