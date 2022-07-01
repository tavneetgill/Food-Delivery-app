import React from 'react'
import { foodItem } from '../../data/foodItems';
import { restaurants } from '../../data/restaurants';
import Filters from '../common/filters'
import './delivery.css'
import DeliveryCollections from './deliveryCollections';
import FoodSection from './foodSection';
import TopBrands, { topBrandList } from './topBrands';
import { deliveryItems } from './deliveryCollections';



const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
       <DeliveryCollections />
       {/*<TopBrands />*}
       {/*<ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Ludhiana' /> 
  <FoodSection  list={foodItem} collectionName='Explore the food you want to order' />*/}
    </div>
  )
}

export default Delivery