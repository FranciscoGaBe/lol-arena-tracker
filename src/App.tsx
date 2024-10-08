import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopButton from './components/TopButton';

const App = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-400">
        &nbsp;
      </div>
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <TopButton />
      <Footer />
    </div>
  );
};

export default App;
