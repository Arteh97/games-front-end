import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./contexts/GlobalStyles";
import { useTheme } from "./contexts/useTheme";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <div className="html">
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <h1>Theming System</h1>

            <ThemeSelector setter={setSelectedTheme} />
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
