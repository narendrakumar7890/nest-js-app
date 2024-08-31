import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): object {
    return { message: 'User Service Called' };
  }
}
