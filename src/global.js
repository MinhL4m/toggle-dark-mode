// contain base styling
import { createGlobalStyle } from "styled-components";

// Styled component
// we assigned background and color properties to values from the theme object,
// so now, every time we switch the toggle,
// values change depending on the darkTheme and lightTheme objects that we are passing to ThemeProvider.
// The transition property allows us to make this change a little more smoothly than working with keyframe animations.
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;
