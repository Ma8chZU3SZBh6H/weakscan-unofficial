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
      </div>
      <div className="xl:hidden text-day-blue hover:text-light-blue relative z-50">
        <button onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      <div
        className={`top-0 left-0 absolute ${
          open ? 'visible' : 'hidden'
        } min-h-screen w-full bg-night-blue z-40 grid items-center justify-center xl:hidden `}
      >
        <div className="grid gap-4">
          {Routes.map((route, index) => (
            <NavItem
              key={index}
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
