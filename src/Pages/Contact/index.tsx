import Input from './components/Input';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Email } from './contact.zod';

const resolver = classValidatorResolver(Email);

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data: any) => setSent(true);

  const [sent, setSent] = useState(false);

  if (!sent) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 max-w-md"
      >
        <div>
          <h1 className="text-center text-48px md:text-64px">Contact us.</h1>
          <h2 className="text-center">unofficial</h2>
        </div>
        <div className="flex gap-10 md:flex-row flex-col">
          <Input
            name="firstName"
            title="First name"
            onChange={register}
            errors={errors}
          />
          <Input
            name="lastName"
            title="Last name"
            onChange={register}
            errors={errors}
          />
        </div>
        <Input
          name="email"
          title="Email"
          type="email"
          onChange={register}
          errors={errors}
        />
        <TextArea
          title="Message"
          name="message"
          onChange={register}
          errors={errors}
        />
        <button
          type="submit"
          className="bg-light-blue text-night-blue text-64px px-4 leading-[70px] pb-1 mt-4 mx-auto"
        >
          SEND
        </button>
      </form>
    );
  } else {
    return (
      <h1 className="text-48px max-w-md text-center">
        <strong>Email was "sent" to example@page.com</strong> - not actually,
        this is an example page
      </h1>
    );
  }
}
