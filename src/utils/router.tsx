import { createHashRouter } from 'react-router-dom';

import App from '../App';
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
    ],
  },
]);
