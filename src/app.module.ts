import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { UserService } from './Services/user.service';
import { AuthService } from './Services/auth.service';
import { UserController } from './Controllers/user.controller';
import { AuthController } from './Controllers/auth.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module'; // Import AuthModule (created in next steps)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Replace with your MySQL host
      port: 3306, // Replace with your MySQL port
      username: 'root', // Replace with your MySQL username
      password: 'Acquire@123', // Replace with your MySQL password
      database: 'nest-app', // Replace with your MySQL database name
      autoLoadEntities: true,
      synchronize: true, // Set to false in production, as it automatically syncs the DB structure
    }),
    AuthModule,
  ],
  //controllers: [AppController, AuthController, UserController],
  //providers: [AppService, AuthService, UserService],
})
export class AppModule {}
