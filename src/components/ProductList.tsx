import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { Product } from '../styles/types'


// Define the interface for ProductListProps
interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </GridContainer>
  );
};

export default ProductList;
