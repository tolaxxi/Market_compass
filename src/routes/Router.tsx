import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
