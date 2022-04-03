import InputGroup from './InputGroup';

export default function Input({
  name,
  title,
  type = 'text',
}: {
  name: string;
  title: string;
  type?: string;
}) {
  return (
    <InputGroup>
      <label htmlFor={name}>{title}</label>
      <input
        className="bg-day-blue w-full px-1"
        id={name}
        name={name}
        type={type}
      />
      <div className="w-full h-1 bg-day-blue"></div>
    </InputGroup>
  );
}
