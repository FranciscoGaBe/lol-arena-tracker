import { createHashRouter } from 'react-router-dom';

import Champions from '../pages/Champions';

export const router = createHashRouter([
  {
    path: '/',
    element: <Champions />,
  },
]);
