import React from 'react';

// Define the type for the item prop
interface CartItemProps {
  item: {
    id: string;
    title: string;
    quantity: number;
  };
  onRemove: (id: string) => void;
  onAdjustQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onAdjustQuantity }) => {
  return (
    <div>
      <span>{item.title}</span>
      <span>{item.quantity}</span>
      <button onClick={() => onAdjustQuantity(item.id, item.quantity - 1)}>-</button>
      <button onClick={() => onAdjustQuantity(item.id, item.quantity + 1)}>+</button>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default React.memo(CartItem);
