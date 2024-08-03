import { createHashRouter } from 'react-router-dom';

import App from '../App';
import About from '../pages/About';
import Champions from '../pages/Champions';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Champions />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
