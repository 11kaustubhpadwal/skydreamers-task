import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import List from "./pages/List";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes } from "./pages/routes";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: Routes.Dashboard,
        element: <Dashboard />,
      },
      {
        path: Routes.List,
        element: <List />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
