import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import MBTI from './pages/MBTI';
import CarInfo from './pages/CarInfo';
import { ProfileForm } from './pages/Profile';
import { AccountForm } from './pages/Account';
import LayoutUsers from './pages/LayoutUsers';
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
    element: <CarInfo />,
  },
  {
    path: '/setting',
    element: <LayoutUsers />, // LayoutUsers가 부모 컴포넌트
    children: [
      {
        path: 'profile',
        element: <ProfileForm />, // Profile 자식 컴포넌트
      },
      {
        path: 'account',
        element: <AccountForm />,
      },
    ],
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
