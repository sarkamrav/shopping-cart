import styled from 'styled-components';
import { colors } from './variable'; 

// Define a type for the button variants
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'error' | 'grey';

// Define an interface for the ButtonProps to include the variant type
interface ButtonProps {
  variant?: ButtonVariant;
}

// Define a default variant
const defaultVariant: ButtonVariant = 'grey';

// Define a mapping for button variants
const variantColors: Record<ButtonVariant, keyof typeof colors> = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  warning: 'warning',
  error: 'error',
  grey: 'grey'
};

// Styled Container Component
export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto; 
  padding: 0 0px; 
  flex-direction: column;
  display: flex;
  justify-content: center; 
  background-color: ${({ theme }: { theme: any }) => theme.colors.background}; 
`;

// Styled InnerContent Component
export const InnerContent = styled.div`
  width: 100%;
  max-width: 100%; 
  background-color: ${({ theme }: { theme: any }) => theme.colors.background}; 
`;

// Styled Button Component
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.theme.colors[variantColors[props.variant || defaultVariant]]};
  color: ${(props) =>
    props.variant === 'error' ? props.theme.colors.white : props.theme.colors.black};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

// Styled Input Component
export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;

  &:focus {
    border-color: ${colors.secondary};
    outline: none;
  }
`;

// Styled Card Component
export const Card = styled.div`
  border: 1px solid ${({ theme }: { theme: any }) => theme.colors.borderColor || '#ccc'}; 
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }: { theme: any }) => theme.colors.themeBg || '#fff'};  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 15px;
    background-color: ${({ theme }: { theme: any }) => theme.colors.themeBg || '#f0f0f0'};
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: ${({ theme }: { theme: any }) => theme.colors.themeColor || '#000'};  
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
    color: ${({ theme }: { theme: any }) => theme.colors.themeColor || '#000'}; 
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid transparent; 
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2); /* Example focus indicator */
  }
`;