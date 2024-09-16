import { createGlobalStyle } from 'styled-components';

// Define your global styles
export const GlobalStyle = createGlobalStyle`
  /* Reset some basic styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background || "#fff"};
    color: ${({ theme }) => theme.colors.text || "#333"};
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  @media (max-width: 768px) {
    body {
      font-size: 90%;
    }
  }
`;

