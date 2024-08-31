// import { Controller, Get, Post, HttpCode } from '@nestjs/common';
// import { AuthService } from '../Services/auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   //   @Get()
//   //   getHello(): object {
//   //     return this.authService.getHello();
//   //   }

//   @Post()
//   create() {
//     return 'This action on Auth Controller';
//   }
// }

import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../Services/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    return this.authService.register(body.username, body.password);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
      //throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
