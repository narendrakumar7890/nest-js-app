import { Controller, Get, Post, HttpCode } from '@nestjs/common';
import { UserService } from '../Services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): object {
    return this.userService.getHello();
  }

  @Post()
  create() {
    return 'This action adds a new cat';
  }
}
