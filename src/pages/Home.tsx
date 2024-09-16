import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';
import ProductList from '../components/ProductList';
import { Product } from '../styles/types';
import FlashMessage from '../components/FlahMessage';
import styled from 'styled-components';

interface HomeProps {
  query: string;
}

const Heading = styled.h1`
  padding: 0 20px;
`;

const Home: React.FC<HomeProps> = ({ query }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [flashMessages, setFlashMessages] = useState<string[]>([]);

  // Fetching products from Redux state
  const { products, status } = useSelector((state: RootState) => state.products);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    setFlashMessages(prevMessages => [
      ...prevMessages,
      'Product added to cart!' 
    ]);
  };

  const filteredProducts = query
    ? products.filter(product =>
        product?.title?.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  if (status === 'loading') {
    return <p>Loading products...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load products. Please try again later.</p>;
  }

  return (
    <div>
      <Heading>Product List</Heading>
      <ProductList products={filteredProducts} addToCart={handleAddToCart} />
      {flashMessages.map((message, index) => (
        <FlashMessage
          key={index}
          message={message}
          index={index}
          onClose={() => setFlashMessages(prevMessages => prevMessages.filter((_, i) => i !== index))} // Remove message
        />
      ))}
    </div>
  );
};

export default Home;
