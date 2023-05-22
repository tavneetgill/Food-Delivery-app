import React from 'react'
import "./topBrands.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

export const topBrandList = [
    {
        id: 1,
        time: '22 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631991013.png?output-format=webp",
    },
    {
        id: 2,
        time: '19 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387328.png?output-format=webp",
    },
    {
        id: 3,
        time: '24 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433366.png?output-format=webp",
    },
    {
        id: 4,
        time: '16 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188156.png?output-format=webp",
    },
    {
        id: 5,
        time: '30 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/98d78588058a8944caa785795b096adf_1617931319.png?output-format=webp",
    },
    {
        id: 6,
        time: '35 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165929.png?output-format=webp",
    },
    {
        id: 7,
        time: '22 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/78abb1c88e7ef9004f668f441a01214b_1637822705.png?output-format=webp",
    },
]

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=> {
                return <div> 
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                    </div>
                    <div className='top-brands-time '>{brand.time}</div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands