import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainApp from "./pages/MainApp";
import PageNotFound from "./pages/PageNotFound";
import ThemeProvider from "./contexts/ThemeProvider";
function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/subodh-portfolio/",
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
