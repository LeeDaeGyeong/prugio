import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global.style";
import router from "./route/route";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import PrugioProvider from "./context";
import Popup from "./components/popup";
import { useState } from "react";

function App() {
  const [isPopup, setIsPopup] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <PrugioProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
        {isPopup && <Popup setIsPopup={setIsPopup} />}
      </PrugioProvider>
    </ThemeProvider>
  );
}

export default App;
