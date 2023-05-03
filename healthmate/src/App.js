import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Disclaimer from './components/Disclaimer';
import Layout from './components/Layout';
import Home from './pages/Home';
import BmiCalc from './pages/BmiCalc';
import DailyReqs from './pages/DailyReqs';
import Patients from './pages/Patients';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/bmi',
        element: <BmiCalc />
      },
      {
        path: '/daily',
        element: <DailyReqs />
      },
      {
        path: '/patients',
        element: <Patients />
      },
      {
        path: '/disclaimer',
        element: <Disclaimer />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
