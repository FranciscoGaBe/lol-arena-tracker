import { createHashRouter } from 'react-router-dom';

import App from '../App';
import Champions from '../pages/Champions';
import HowToUse from '../pages/HowToUse';

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
        path: '/how-to-use',
        element: <HowToUse />,
      },
    ],
  },
]);
