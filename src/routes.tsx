import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/components/ErrorPage";
import App from "@/App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    // action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          // { index: true, element: <Index /> },
          // {
          //   path: "contacts/:contactId",
          //   element: <Contact />,
          //   loader: contactLoader,
          //   action: contactAction,
          // },
          /* the rest of the routes */
        ],
      },
    ],
  },
]);
