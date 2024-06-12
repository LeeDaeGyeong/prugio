import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../layout/layout";
import OverViewPage from "../pages/overViewPage";
import RegistrationPage from "../pages/registrationPage";
import EnvironmentPage from "../pages/environmentPage";
import PremiumPage from "../pages/premiumPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/overview",
        element: <OverViewPage />,
      },
      {
        path: "/environment",
        element: <EnvironmentPage />,
      },
      {
        path: "/premium",
        element: <PremiumPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
