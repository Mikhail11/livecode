import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @Length(5, 33, {
    message: 'Длина пароля должна быть не менее 5 и не более 33 символов',
  })
  readonly password: string;
}
