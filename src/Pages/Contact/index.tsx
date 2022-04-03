import Input from './components/Input';
import TextArea from './components/TextArea';

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 max-w-md">
      <h1 className="text-center text-48px md:text-64px">Contact us.</h1>
      <div className="flex gap-10">
        <Input name="nameName" title="First name" />
        <Input name="lastName" title="Last name" />
      </div>
      <Input name="email" title="Email" type="email" />
      <TextArea title="Message" name="message" />
    </div>
  );
}
