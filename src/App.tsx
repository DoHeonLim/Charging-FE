import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Carinfo from './pages/CarInfo';
import MBTI from './pages/MBTI';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Activity from './pages/Activity';
import ChargerMap from './pages/ChargerMap';
import MBTITest from './pages/MBTITest';
import MBTIResult from './pages/MBTIResult';

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
    path: '/mbti',
    element: <MBTI />,
  },
  {
    path: '/mbti/test',
    element: <MBTITest />,
  },
  {
    path: '/mbti/result',
    element: <MBTIResult />,
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
