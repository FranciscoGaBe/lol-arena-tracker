import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import TopButton from './components/TopButton';

const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-400">
        &nbsp;
      </div>
      <Navbar />
      <Outlet />
      <TopButton />
    </>
  );
};

export default App;
