import { useState } from 'react';

const categories = [
  { name: 'Icons', icon: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png' },
  { name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { name: 'Tiny homes', icon: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg' },
  { name: 'OMG!', icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' },
  { name: 'Houseboats', icon: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' },
  { name: 'Ski-in/out', icon: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg' },
  { name: 'Castles', icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' },
  { name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'},
  { name: 'Amazing views', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' },
  { name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { name: 'Tiny homes', icon: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg' },
  { name: 'OMG!', icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' },
  { name: 'Houseboats', icon: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' },
  { name: 'Ski-in/out', icon: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg' },
  { name: 'Castles', icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' },
  { name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'},
  { name: 'Amazing views', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' },
  { name: 'Countryside', icon: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { name: 'Tiny homes', icon: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg' },
  { name: 'OMG!', icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' },
  { name: 'Houseboats', icon: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' },
  { name: 'Ski-in/out', icon: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg' },
  { name: 'Castles', icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' },
  { name: 'Amazing pools', icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'},
  { name: 'Amazing views', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' },


  // Add other categories as needed
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    // Fetch and display listings based on the active category
    console.log("Selected category:", categoryName);
  };

  return (
    <div className="flex overflow-x-auto space-x-4 mt-4 p-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`flex flex-col items-center cursor-pointer p-2 transition duration-300 ${
            category.name === activeCategory
              ? 'font-bold border-b-2 border-red-500'
              : 'bg-white'
          } hover:border-b-2 hover:border-gray-300`}
          onClick={() => handleCategoryClick(category.name)}
        >
          <img src={category.icon} alt={`${category.name} icon`} className="w-7 h-7 mb-2" />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
