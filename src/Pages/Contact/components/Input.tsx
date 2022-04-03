import InputGroup from './InputGroup';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export default function Input({
  name,
  title,
  type = 'text',
  onChange,
  errors,
}: {
  name: string;
  title: string;
  type?: string;
  onChange: UseFormRegister<FieldValues>;
  errors: FieldErrors<any>;
}) {
  return (
    <InputGroup>
      <label htmlFor={name}>{title}</label>
      <input
        className="bg-day-blue w-full px-1"
        id={name}
        type={type}
        {...onChange(name)}
      />
      <div>{errors[name]?.message}</div>
      <div className="w-full h-1 bg-day-blue"></div>
    </InputGroup>
  );
}
