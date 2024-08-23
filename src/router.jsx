// src/router.jsx
import Home from './Home';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/", // Home page
        element: <Home />
      },
      {
        path: "projects", // Projects page
        element: <Projects />
      },
      {
        path: "projects/:id", // Dynamic route for project details
        element: <ProjectDetails />
      }
    ]
  }
]);

const RouterProviderComponent = () => (
  <RouterProvider router={router} />
);

export default RouterProviderComponent;
