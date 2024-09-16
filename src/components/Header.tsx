import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import SearchFilter from './SearchFilter'; 
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Define the props interface for the Header component
interface HeaderProps {
  query: string;
  onSearch: (query: string) => void;
}

// Define the props interface for CartLink
interface CartLinkProps extends LinkProps {
  count?: number; 
}

const HeaderContainer = styled.header`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const CartLink = styled(({ count, ...props }: CartLinkProps) => <Link {...props} />)`
  color: white;
  display: flex;
  align-items: center;
  position: relative;

  ${(props) => props.count && `
    &::after {
      content: '${props.count}';
      background-color: #e74c3c;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  `}
`;


const Header: React.FC<HeaderProps> = ({ query, onSearch }) => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <HeaderContainer>
      <h1>Shopping Cart</h1>
      <SearchFilter query={query} onChange={onSearch} /> 
      <Nav>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        {cartItemCount > 0 && (
          <CartLink to="/cart" count={cartItemCount}>Cart</CartLink> 
        )}
        {cartItemCount === 0 && (
          <Link to="/cart" style={{ color: 'white' }}>Cart</Link> 
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
