import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardLayout from '../pages/DashboardLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import MyTask from '../components/My Task/MyTask';
import AccountInformation from '../components/AccountInformation/AccountInformation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/vital-task',
        element: <p>No Data Found</p>,
      },
      {
        path: '/my-task',
        element: <MyTask />,
      },
      {
        path: '/task-categories',
        element: <p>I am the content of Task Categories</p>,
      },
      {
        path: '/settings',
        element: <AccountInformation />,
      },
      {
        path: '/help',
        element: <p>No content found..</p>,
      },
    ],
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
]);
