import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import CarInfo from './pages/CarInfo';
import Recommend from './pages/Recommend';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Activity from './pages/Activity';
import ChargerMap from './pages/ChargerMap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/chargermap',
    element: <ChargerMap />,
  },
  {
    path: '/recommend',
    element: <Recommend />,
  },
  {
    path: '/carinfo',
    element: <CarInfo />,
  },
  {
    path: '/setting/profile',
    element: <Profile />,
  },
  {
    path: '/setting/account',
    element: <Account />,
  },
  {
    path: '/setting/activity',
    element: <Activity />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
