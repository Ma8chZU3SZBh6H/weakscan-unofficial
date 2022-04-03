import Lock from '../../Images/Lock';
import { Product as PRODUCT } from './product.types';

export default function Product({ price, title, description }: PRODUCT) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center font-medium">
      <Lock className="text-day-blue w-28 h-28" />
      <h1 className="md:text-64px text-48px">{title} </h1>
      <p className="max-w-[497px]">{description}</p>
      <div className="bg-light-blue text-night-blue text-64px px-4 leading-[70px] pb-1 mt-4">
        {price}
      </div>
    </div>
  );
}
