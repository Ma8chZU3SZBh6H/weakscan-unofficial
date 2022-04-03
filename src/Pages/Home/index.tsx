import HomeConstants from './home.constants';
import Shield from './Images/shield';

export default function Home({ title }: HomeConstants) {
  const words = title
    .split(' ')
    .map((word, index, array) => (
      <div className="ml-auto">
        {index === array.length - 1 ? (
          <span className="bg-light-blue text-night-blue px-2  ">{word}</span>
        ) : (
          <span>{word}</span>
        )}
      </div>
    ));
  return (
    <div className="grid grid-cols-auto-3x gap-5 items-center justify-center">
      <div className=" md:text-64px text-24px font-medium grid gap-2 grid-rows-4 justify-center  items-center">
        {words}
      </div>
      <div className="w-[5px] h-full bg-light-blue  "></div>
      <div className="text-day-blue  ">
        <Shield className="h-44 w-20  md:h-auto md:w-auto" />
      </div>
    </div>
  );
}
