import React from 'react';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollections.css';
import Slider from "react-slick";
import DeliveryItem from './deliveryItem';
import CartContainer from '../../CartContainer';
import CartItem from '../../CartItems';

 export const deliveryItems = [
    {
        id:1,
        name: "Home Style",
        img:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
        price: 30,
        qty: 1
    },
    {
        id:2,
        name: "Burger",
        img:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        price: 24,
        qty: 1
    },
    {
        id:3,
        name: "Pizza",
        img:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        price: 40,
        qty: 1
    },
    {
        id:4,
        name: "Rolls",
        img:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        price: 50,
        qty: 1
    },
    {
        id:5,
        name: "Sandwich",
        img:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        price: 25,
        qty: 1
    },
    {
        id:6,
        name: "Samosa",
        img:"https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
        price: 20,
        qty: 1
    },
    {
        id:7,
        name: "Chicken",
        img:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        price: 100,
        qty: 1
    },
    {
        id:8,
        name: "Momos",
        img:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
        price: 40,
        qty: 1
    },
];

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>
                Eat what makes you happy
            </div>
            <Slider {...settings}>
            {deliveryItems.map((item) => {
                    return <DeliveryItem item={item} />
                    })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections