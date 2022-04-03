import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class Email {
  @IsNotEmpty()
  @MaxLength(100)
  firstName = '';

  @IsNotEmpty()
  @MaxLength(100)
  lastName = '';

  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  email = '';

  @IsNotEmpty()
  @MaxLength(1000)
  message = '';
}
