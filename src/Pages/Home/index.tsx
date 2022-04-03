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
    <div className="grid grid-cols-auto-3x gap-5">
      <div className="text-64px font-medium grid gap-2 grid-rows-4 justify-end items-end">
        {words}
      </div>
      <div className="w-[5px] h-full bg-light-blue"></div>
      <div className="text-day-blue">
        <Shield />
      </div>
    </div>
  );
}
