import { DefaultTheme } from 'styled-components';

// Light Theme Colors
export const lightTheme: DefaultTheme = {
  theme: 'light',
  colors: {
    background: '#ffffff',  // White background
    themeBg: '#f7f9fb',     // Light greyish-blue background for sections
    themeColor: '#3498db',  // Theme color for consistent sections like header/footer
    text: '#000000',        // Black text
    primary: '#3498db',     // Bright blue
    secondary: '#2ecc71',   // Green for secondary actions
    danger: '#e74c3c',      // Bright red for danger
    warning: '#f39c12',     // Orange for warnings
    error: '#c0392b',       // Slightly darker red for errors
    white: '#ffffff',       // White for contrast
    black: '#000000',       // Black for contrast
    grey: '#bdc3c7',        // Light grey for neutral elements
  },
};

// Dark Theme Colors
export const darkTheme: DefaultTheme = {
  theme: 'dark',
  colors: {
    background: '#1e1e1e',  // Very dark grey background
    themeBg: '#2c2c2c',     // Darker grey background for sections
    themeColor: '#2980b9',  // Theme color for consistent sections like header/footer
    text: '#e0e0e0',        // Lighter grey text
    primary: '#2980b9',     // Slightly darker blue for better contrast
    secondary: '#27ae60',   // Darker green for secondary actions
    danger: '#c0392b',      // Dark red for danger actions
    warning: '#e67e22',     // Darker orange for warnings
    error: '#e74c3c',       // Bright red for errors
    white: '#f0f0f0',       // Slightly off-white for better readability
    black: '#000000',       // Black for contrast
    grey: '#7f8c8d',        // Dark grey for neutral elements
  },
};

// Define the Theme type
export type Theme = typeof lightTheme;