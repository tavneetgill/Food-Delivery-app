import React from 'react'
import FoodCollection from './foodCollection'
import './foodSection.css'
import { foodItem } from '../../../data/foodItems'

const FoodSection = ({list, collectionName}) => {
  return (
    <div className='max-width food-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='food-grid'>
            {list.map((foodItem) => {
                return <FoodCollection foodItem = {foodItem} />
                })}
        </div>
    </div>
  )
}

export default FoodSection