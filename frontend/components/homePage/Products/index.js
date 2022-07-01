import React from 'react';
import{LinkContainer} from 'react-router-bootstrap'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <LinkContainer to = "/orderOnline" activeClassName>
                <ProductButton>{product.button}</ProductButton>
                </LinkContainer>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
