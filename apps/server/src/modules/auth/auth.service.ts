import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto, UserService } from '~modules/user';
import { LoginUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);

    return {
      id: user.id,
      isLoggedIn: true,
    };
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const password = await bcrypt.hash(
      userDto.password,
      Number(process.env.SALT) || 5,
    );

    const user = await this.userService.createUser({
      ...userDto,
      password: password,
    });

    return {
      id: user.id,
      email: user.email,
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Некорректный email или пароль',
      });
    }

    const isPasswordEqual = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (isPasswordEqual) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }
}
