import Menu from '../Images/Menu';
import { useState } from 'react';
import HomeSVG from '../Images/Home';
import LockSVG from '../Images/Lock';
import VirusSVG from '../Images/Virus';
import SkullSVG from '../Images/Skull';
import BookSVG from '../Images/Book';
import EmailSVG from '../Images/Email';
import NavItem from './NavItem';
import { Routes } from '../Constants/Routes';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-24px font-bold grid justify-between grid-cols-1fr-auto">
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
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<HomeSVG />}
            title="Home"
            path={Routes.home}
          />
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<LockSVG />}
            title="Lock"
            path={Routes.lock}
          />
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<VirusSVG />}
            title="Virus"
            path={Routes.virus}
          />
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<SkullSVG />}
            title="Skull"
            path={Routes.skull}
          />
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<BookSVG />}
            title="Book"
            path={Routes.book}
          />
          <NavItem
            onClick={() => setOpen(!open)}
            svg={<EmailSVG />}
            title="Email"
            path={Routes.email}
          />
        </div>
      </div>
    </nav>
  );
}
