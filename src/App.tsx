import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainApp from "./components/MainApp";
import PageNotFound from "./components/PageNotFound";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
