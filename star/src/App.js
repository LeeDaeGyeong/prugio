import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global.style";
import router from "./route/route";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import PrugioProvider from "./context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrugioProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </PrugioProvider>
    </ThemeProvider>
  );
}

export default App;
