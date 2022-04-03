import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export default function TextArea({
  title,
  name,
  onChange,
  errors,
}: {
  title: string;
  name: string;
  onChange: UseFormRegister<FieldValues>;
  errors: FieldErrors<any>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{title}</label>
      <textarea
        className="w-full bg-day-blue p-1"
        id={name}
        cols={30}
        rows={10}
        {...onChange(name)}
      ></textarea>
      <div>{errors[name]?.message}</div>
      <div className="w-full h-1 bg-day-blue "></div>
    </div>
  );
}
