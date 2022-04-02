import Step from './Step';
import { Link, useLocation } from 'wouter';
import { Routes } from '../Constants/Routes';

export default function NavItem({
  svg,
  title,
  path,
  onClick,
}: {
  svg: JSX.Element;
  title: string;
  path: Routes;
  onClick: () => void;
}) {
  const location = useLocation();
  return (
    <div
      className={`grid grid-cols-auto-auto gap-4 items-center ${
        location[0] === path ? 'text-light-blue' : 'text-day-blue'
      }`}
    >
      <div onClick={onClick}>
        <Step svg={svg} path={path} />
      </div>
      <Link onClick={onClick} href={path}>
        <div className="cursor-pointer">{title}</div>
      </Link>
    </div>
  );
}
