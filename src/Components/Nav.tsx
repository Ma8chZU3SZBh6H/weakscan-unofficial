import Menu from '../Images/Menu';
import { useState } from 'react';
import NavItem from './NavItem';
import Routes from '../Routes';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-24px  font-bold grid justify-between grid-cols-1fr-auto">
      <div>
        WEAK
        <span className="bg-light-blue text-night-blue px-1 mx-1">SCAN</span>
        <span className="text-12px">unofficial</span>
      </div>
      <div className="xl:hidden text-day-blue hover:text-light-blue relative z-50">
        <button onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      <div
        className={`top-0 left-0 absolute  min-h-screen w-full transition duration-500 ${
          open ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        } z-40 bg-night-blue grid items-center justify-center xl:hidden `}
      >
        <div className="grid gap-4">
          {Routes.map((route, index) => (
            <NavItem
              key={index + 'y'}
              onClick={() => setOpen(!open)}
              svg={route.svg}
              title={route.title}
              path={route.path}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
