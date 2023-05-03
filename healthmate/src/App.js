import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Disclaimer from './components/Disclaimer';
import Layout from './components/Layout';
import Home from './pages/Home';
import BmiCalc from './pages/BmiCalc';
import EnergyCalc from './pages/EnergyCalc';


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
        path: '/energy',
        element: <EnergyCalc/> 
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
