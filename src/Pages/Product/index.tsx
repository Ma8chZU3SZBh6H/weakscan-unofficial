import { Product as PRODUCT } from './product.types';
import { Link } from 'wouter';
import React from 'react';

export default function Product({ price, title, description, svg }: PRODUCT) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center font-medium">
      {React.cloneElement(svg, { className: 'text-day-blue w-28 h-28' })}
      <h1 className="md:text-64px text-48px">{title} </h1>
      <p className="max-w-[497px]">{description}</p>
      <Link
        href="/contact"
        className="cursor-pointer bg-light-blue text-night-blue text-64px px-4 leading-[70px] pb-1 mt-4"
      >
        {price}
      </Link>
    </div>
  );
}
