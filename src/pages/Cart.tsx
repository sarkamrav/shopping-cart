import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store'; 
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import Button from '../components/Button';
import FlashMessage from '../components/FlahMessage'; 
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputTextWrapper = styled.input`
  width: 60px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const CartContainer = styled.div`
  padding: 20px;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  color: #666;
`;

const Cart: React.FC = () => {
  const [flashMessages, setFlashMessages] = useState<string[]>([]); 
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
      setFlashMessages(prevMessages => [
        ...prevMessages,
        'Item has been removed from the cart!'
      ]);
    },
    [dispatch]
  );

  const handleUpdateQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity <= 0) {
        dispatch(removeFromCart(id));
        setFlashMessages(prevMessages => [
          ...prevMessages,
          'Item has been removed from the cart!'
        ]);
      } else {
        dispatch(updateQuantity({ id, quantity }));
        if (quantity <=1) {
          setFlashMessages(prevMessages => [
            ...prevMessages,
            'Quantity cannot be less than one. Item will remove from the cart!'
          ]);
        }
      }
    },
    [dispatch]
  );

  const cartItems = useMemo(() => {
    return items.map((item) => (
      <div key={item.id} style={{ marginBottom: '10px' }}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <InputWrapper>
          <InputTextWrapper
            type="number"
            value={String(item.quantity)} 
            min="0"
            onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
          />
          <Button onClick={() => handleRemove(item.id)}>Remove</Button>
        </InputWrapper>
      </div>
    ));
  }, [items, handleUpdateQuantity, handleRemove]);

  return (
    <CartContainer>
      {flashMessages.map((message, index) => (
        <FlashMessage
          key={index}
          message={message}
          index={index}
          onClose={() => setFlashMessages(prevMessages => prevMessages.filter((_, i) => i !== index))}
        />
      ))}
      {items.length === 0 ? (
        <EmptyMessage>Cart is empty</EmptyMessage>
      ) : (
        <>
          {cartItems}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </CartContainer>
  );
};

export default React.memo(Cart);
