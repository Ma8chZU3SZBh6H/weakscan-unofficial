import { Link, useLocation } from 'wouter';
import React from 'react';

export default function Step({
  svg,
  path,
  className,
  dynamic,
}: {
  svg: JSX.Element;
  path: string;
  className?: string;
  dynamic?: boolean;
}) {
  const location = useLocation();
  return (
    <Link href={path}>
      <div
        className={`cursor-pointer transition duration-500 ${
          location[0] === path ? 'text-light-blue' : 'text-day-blue'
        } ${className}`}
      >
        {React.cloneElement(svg, {
          className: `transition-all duration-500 ${
            location[0] === path && dynamic ? 'w-12' : 'w-6'
          } ${dynamic ? 'sm:w-12 ' : ''}`,
        })}
      </div>
    </Link>
  );
}
