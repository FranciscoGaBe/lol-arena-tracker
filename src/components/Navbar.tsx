import { Link, useResolvedPath } from 'react-router-dom';

const links = [
  {
    to: '/',
    title: 'Champions',
  },
  {
    to: '/how-to-use',
    title: 'How to use',
  },
];

const Navbar = () => {
  const { pathname } = useResolvedPath({});

  return (
    <nav className="sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between bg-cyan-950 px-4 text-white shadow shadow-cyan-500/10">
      <Link to="/">LoL Arena Tracker</Link>
      <div className="flex items-center gap-4">
        {links.map(({ title, to }) => (
          <Link
            key={title}
            className={`${pathname === to ? 'font-bold text-yellow-500' : 'text-cyan-500'}`}
            to={to}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
