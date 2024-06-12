import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../layout/layout";
import OverViewPage from "../pages/overViewPage";
import RegistrationPage from "../pages/registrationPage";

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
        element: <OverViewPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
