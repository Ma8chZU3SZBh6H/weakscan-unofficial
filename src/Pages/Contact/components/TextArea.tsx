export default function TextArea({
  title,
  name,
}: {
  title: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{title}</label>
      <textarea
        className="w-full bg-day-blue p-1"
        name={name}
        id={name}
        cols={30}
        rows={10}
      ></textarea>
      <div className="w-full h-1 bg-day-blue "></div>
    </div>
  );
}
