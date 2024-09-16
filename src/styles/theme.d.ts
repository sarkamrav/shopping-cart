import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: 'light' | 'dark';
    colors: {
      background: string;
      themeBg: string;
      themeColor: string;
      text: string;
      primary: string;
      secondary: string;
      danger: string;
      warning: string;
      error: string;
      white: string;
      black: string;
      grey: string;
    };
  }
}
