import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(userDto) {
    console.log('User logged with: ', userDto);

    return {
      isLoggedIn: true,
    };
  }

  registration(userDto) {
    console.log('User registered with: ', userDto);

    return {
      isRegistered: true,
    };
  }
}
