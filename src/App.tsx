import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { Container } from './styles/CoreStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from './styles/themes'; // Ensure Theme is imported
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  // State to manage the current theme
  const [theme, setTheme] = useState<Theme>(lightTheme);

  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <Container>
            <AppRouter />
          </Container>
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
