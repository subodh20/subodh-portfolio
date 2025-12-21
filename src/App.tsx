import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainApp from "./components/MainApp";
import PageNotFound from "./components/PageNotFound";
import ThemeProvider from "./components/ThemeProvider";
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
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
