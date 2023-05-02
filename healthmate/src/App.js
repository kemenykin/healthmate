import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './components/Index';
import Disclaimer from './components/Disclaimer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
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
