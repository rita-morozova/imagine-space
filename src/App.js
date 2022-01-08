import React, { useState } from 'react';
import Theme from './components/changeTheme/Theme';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  pageBackground: "#E6E6E6",
  titleColor: "#BA2584",
};

const DarkTheme = {
  pageBackground: "#090908",
  titleColor: "lightpink",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Theme theme={theme} setTheme={setTheme} />
    </ThemeProvider> 
  );
}

export default App;
