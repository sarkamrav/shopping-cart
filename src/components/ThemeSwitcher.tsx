import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define the type for the theme prop
interface Theme {
  theme: 'light' | 'dark'; 
}

interface ThemeSwitcherProps {
  theme: Theme;
  toggleTheme: () => void; 
}

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.theme == 'light' ? 'white' :'black'};
  color: ${(props) => props.theme.theme == 'light' ? 'black' :'white'};
  padding: 10px 30px;
  border: none;
  cursor: pointer;

  display: block;
  border-radius: 40px;
  transition: background-color 0.3s ease;


  &:hover {
    opacity: 0.8;
  }
`;
const ToggleWrapper = styled.div`
   display:flex;
   padding:15px;
   justify-content: space-around;
   background-color: #3498db;
   margin:0;
   `
const ThemeSwitcher: React.FC<ThemeSwitcherProps>= ({theme,toggleTheme}) => {

  return (
      <ToggleWrapper>
        <div/>
        <ToggleButton onClick={toggleTheme}>
          {theme.theme}
        </ToggleButton>
      </ToggleWrapper>
  );
};

export default ThemeSwitcher;
