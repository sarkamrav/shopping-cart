import React from 'react';
import { Card } from '../styles/CoreStyles';  
import Button from './Button';
import { Product } from '../styles/types'

// Define the interface for ProductCardProps
interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard:React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>

    </Card>
  );
};

export default ProductCard;
