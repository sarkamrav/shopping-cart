import React, { ReactNode } from 'react';
import { Button as StyledButton } from '../styles/CoreStyles'; // Import the styled button

// Define types for the props
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'error' | 'grey';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, variant = 'grey' }) => (
  <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
    {children}
  </StyledButton>
);

export default React.memo(Button);
