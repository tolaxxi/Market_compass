import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Dashboard from '../pages/Dashboard';
import MarketWatch from '../pages/MarketWatch';
import TradeJournal from '../pages/TradeJournal';
import Settings from '../pages/Settings';
import Analytics from '../pages/Analytics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: {
          title: 'Dashboard',
        },
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        handle: {
          title: 'Dashboard',
        },
      },
      {
        path: '/market watch',
        element: <MarketWatch />,
        handle: {
          title: 'Market Watch',
        },
      },
      {
        path: '/trade journal',
        element: <TradeJournal />,
        handle: {
          title: 'TradeJournal',
        },
      },
      {
        path: '/analytics',
        element: <Analytics />,
        handle: {
          title: 'Analytics',
        },
      },
      {
        path: '/settings',
        element: <Settings />,
        handle: {
          title: 'settings',
        },
      },
    ],
  },
]);
