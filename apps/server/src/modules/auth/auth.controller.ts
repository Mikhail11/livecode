import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto) {
    return this.authService.registration(userDto);
  }
}
