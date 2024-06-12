import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Carinfo from './pages/CarInfo';
import Map from './pages/Map';
import Recommend from './pages/Recommend';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Activity from './pages/Activity';

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
    path: '/map',
    element: <Map />,
  },
  {
    path: '/recommend',
    element: <Recommend />,
  },
  {
    path: '/carinfo',
    element: <Carinfo />,
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
