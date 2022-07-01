 import React, { useEffect, useState } from 'react';
 import Footer from '../../components/homePage/Footer';
 import Header from '../../components/common/header';

 import TabOptions from '../../components/common/tabOptions';
import Delivery from '../../components/delivery';

import CartContainer from '../../components/CartContainer';
import { useStateValue } from '../../context/StateProvider';
import { foodItem } from '../../data/foodItems';
import SearchBar from '../../components/SearchBar';
import FoodSection from '../../components/delivery/foodSection';
import EmptyView from '../../components/EmptyView';
import Filters from '../../components/common/filters';
import './home.css'


 
 const OrderOnline = () => {
    const [activeTab, setActiveTab]= useState("Delivery")
    const [ {cartShow}, dispatch ] = useStateValue();
    const [list, setList] = useState(foodItem);
    const [inputSearch, setInputSearch] = useState('');
    const [resultsFound, setResultsFound] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleSelectCategory =(event,value)=> !value ? null : setSelectedCategory(value);

    const applyFilters=() => {
        let updatedList = foodItem;
          // Search filter
          if(inputSearch){
            updatedList=updatedList.filter((foodItem) =>foodItem.category.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
            -1)
          }

          //Category filter
          if(selectedCategory) {
            updatedList=updatedList.filter(
              (foodItem) => foodItem.category === selectedCategory
            )  
           if(selectedCategory ==='all') {
              updatedList = foodItem
            }
          }
        setList(updatedList);
        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
      }
    
      useEffect(() => {
        applyFilters();
      }, [inputSearch, selectedCategory]);

    useEffect(()=> {}, [cartShow]);
   return (
    <div>
      <div className='upper-bg'>
        <Header />
        <SearchBar value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)}/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='max-width'>
        <Filters  selectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
        </div>
        </div>
        <Delivery />
        {resultsFound ? <FoodSection  list={list} collectionName='Explore the food you want to order' />  : <EmptyView />}
        {cartShow &&  <CartContainer />} 
        <Footer />
    </div>
   );
 };

 export default OrderOnline;