import React from 'react'
import FilterItem from './filterItem';
import './filters.css';

const deliveryFilters=[
  {
    id:1,
    title:"All",
    value: 'all',
  },
  {
    id:2,
    title:"Cuisines",
    value: 'chinese'
  },
  {
    id:3,
    title:"Non Veg",
    value: 'chicken'
  },
  {
    id:4,
    title:"Pure Veg",
    value: 'vegetable'
  },
  {
    id:5,
    title:"Meals",
    value: 'biryani'
  },
];

const Filters = ({selectCategory, selectedCategory}) => {
 return (
  <FilterItem className='filter-item' options={deliveryFilters} value={selectedCategory} selectToggle={selectCategory} />
 )
}

export default Filters