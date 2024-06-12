import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global.style";
import router from "./route/route";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
