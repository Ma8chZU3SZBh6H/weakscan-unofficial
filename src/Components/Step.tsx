import { Link, useLocation } from 'wouter';

export default function Step({
  svg,
  path,
}: {
  svg: JSX.Element;
  path: string;
}) {
  const location = useLocation();
  return (
    <Link href={path}>
      <div
        className={`cursor-pointer ${
          location[0] === path ? 'text-light-blue' : 'text-day-blue'
        }`}
      >
        {svg}
      </div>
    </Link>
  );
}
